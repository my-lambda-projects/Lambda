var log = require('loglevel-message-prefix')(window.log.getLogger('tools.js'), {
    prefixes: ['level'],
    staticPrefixes: ['tools.js'],
    separator: '/'
});
import _ from 'lodash';
import async from 'async';
import {Matrix} from 'transformation-matrix-js';
import {coords} from './helpers.js';
import Layer from './layer.js';

import colorPicker from 'simple-color-picker';
import 'simple-color-picker/src/simple-color-picker.css';

var topbarTools = [
    {
        name: 'upload',
        icon: 'fa-folder',
        action: true,
        key: 'mod + o',
        load: function () {
            $(window).on('dragenter dragover', (e) => {
                e.preventDefault();
                this.mercuryCanvas.element.addClass('over');
            });
            $(window).on('dragexit', (e) => {
                e.preventDefault();
                this.mercuryCanvas.element.removeClass('over');
            });
            this.mercuryCanvas.element.on('drop', (e) => {
                e.preventDefault();
                this.mercuryCanvas.element.removeClass('over');

                this.mercuryCanvas.session.file.readFiles(e.originalEvent.dataTransfer.files);
            });
        },
        select: function () {
            this.mercuryCanvas.session.file.openUploadDialog();
        }
    },
    {
        name: 'download',
        icon: 'fa-floppy-o',
        action: true,
        key: 'mod + s',
        select: function () {
            this.mercuryCanvas.session.file.download();
        }
    },
    {
        name: 'undo',
        action: true,
        key: 'mod + z',
        select: function () {
            this.mercuryCanvas.session.undo();
        }
    },
    {
        name: 'redo',
        icon: 'fa-repeat',
        action: true,
        key: ['mod + y', 'mod + shift + z'],
        select: function () {
            this.mercuryCanvas.session.redo();
        }
    },
    {
        name: 'brush',
        icon: 'fa-paint-brush',
        key: 'b',
        load: function () {
            var mc = this.mercuryCanvas;
            var cursor = $('<div>', {
                class: 'brushCursor'
            }).hide();
            cursor.appendTo(mc.layersContainer);
            this.cursor = cursor;
            this.zIndex = 0;
            this.shown = false;
            this.started = false;
            this.matrix = new Matrix();
            mc.on('state.update', () => {
                if (!this.selected) return;
                this.mouseMove(mc.session.mouse.lastEvent);
                this.draw();
            });
            mc.addShortcut('[', () => {
                if (mc.session.mouse.down) return;
                mc.state.lineWidth--;
                mc.state.lineWidth = Math.max(0, mc.state.lineWidth);
                mc.state.save();
                mc.emit('state.update');
            });
            mc.addShortcut(']', () => {
                if (mc.session.mouse.down) return;
                mc.state.lineWidth++;
                mc.state.save();
                mc.emit('state.update');
            });
        },
        select: function (e) {
            var mc = this.mercuryCanvas;

            if (e !== true) mc.overlay.clear();
            this.mouseMove(mc.session.mouse.lastEvent);
        },
        deselect: function () {
            var mc = this.mercuryCanvas;

            this.cursor.hide();
            mc.layersContainer.css({
                cursor: 'default'
            });
            this.shown = false;
        },
        draw: function () {
            if (!this.started) return;
            var t0 = performance.now();
            var mc = this.mercuryCanvas;
            var points = mc.session.mouse.points;
            if (!points.length) return;

            mc.overlay.clear();

            mc.overlay.context.beginPath();
            mc.overlay.context.moveTo(points[0].x, points[0].y);

            if (points.length < 3) {
                var b = points[0];
                mc.overlay.context.beginPath();
                mc.overlay.context.arc(b.x, b.y, mc.overlay.context.lineWidth / 2, 0, Math.PI * 2, false);
                mc.overlay.context.fill();
                mc.overlay.context.closePath();
                mc.overlay.state.dirty = true;
                return;
            }

            for (var i = 0; i < points.length - 2; i++) {
                var point1 = points[i];
                var point2 = points[i + 1];
                var c = (point1.x + point2.x) / 2;
                var d = (point1.y + point2.y) / 2;

                mc.overlay.context.quadraticCurveTo(point1.x, point1.y, c, d);
            }

            mc.overlay.context.quadraticCurveTo(
                points[i].x,
                points[i].y,
                points[i + 1].x,
                points[i + 1].y
            );

            mc.overlay.context.stroke();
            mc.overlay.state.dirty = true;
            var t1 = performance.now();
            log.debug('I spent ' + (t1 - t0) + 'ms to draw the overlay');
        },
        mouseDown: function (e) {
            var mc = this.mercuryCanvas;

            mc.session.mouse.points = [];

            mc.overlay.context.lineWidth = mc.state.lineWidth;
            mc.overlay.context.strokeStyle = mc.state.strokeColor;
            mc.overlay.context.fillStyle = mc.state.strokeColor;
            mc.overlay.context.lineCap = mc.overlay.context.lineJoin = 'round';
            this.started = true;

            this.mouseMove(e);
            requestAnimationFrame(this.draw.bind(this, e));
        },
        mouseMove: function (e) {
            if (!e) return;
            var mc = this.mercuryCanvas;

            var css = {};
            if (!this.shown) {
                this.shown = true;
                this.cursor.show();
                mc.layersContainer.css({
                    cursor: 'none'
                });
            }
            if (this.zIndex - 1 < mc.session.zIndex) {
                css.zIndex = mc.session.zIndex + 1;
                this.zIndex = mc.session.zIndex + 1;
            }
            if (mc.state.lineWidth != this.size) {
                css.width = mc.state.lineWidth;
                css.height = mc.state.lineWidth;
                this.size = mc.state.lineWidth;
            }

            var mouse = mc.session.mouse;
            var pos = new coords(e).toCanvasSpace(mc);

            this.matrix.translate(pos.x - this.matrix.e, pos.y - this.matrix.f);
            this.matrix.translate(-mc.state.lineWidth / 2, -mc.state.lineWidth / 2);
            css.transform = this.matrix.toCSS();

            this.cursor.css(css);
            if (!mouse.down || !this.started) return;

            if (mc.session.keys.shift && mouse.points.length) {
                var initial = mouse.points[0];
                if (!_.isNumber(mouse.delta.x) || !_.isNumber(mouse.delta.y)) {
                    mouse.delta = {
                        x: Math.abs(pos.x - initial.x),
                        y: Math.abs(pos.y - initial.y)
                    };
                }

                if (mouse.delta.x > mouse.delta.y) {
                    pos.y = initial.y;
                }
                else {
                    pos.x = initial.x;
                }
            }

            mouse.points.push(pos);
            mouse.extremes = {
                x: Math.min(mouse.extremes.x, pos.x),
                y: Math.min(mouse.extremes.y, pos.y),
                x2: Math.max(mouse.extremes.x2, pos.x),
                y2: Math.max(mouse.extremes.y2, pos.y)
            };
        },
        mouseUp: function () {
            this.started = false;
            var mc = this.mercuryCanvas;
            var mouse = mc.session.mouse;
            if (!mouse.points.length) return;

            var newLayer = new Layer({
                parent: mc
            });

            mouse.extremes.x -= mc.state.lineWidth / 2 + 1;
            mouse.extremes.y -= mc.state.lineWidth / 2 + 1;
            mouse.extremes.x2 += mc.state.lineWidth / 2 + 1;
            mouse.extremes.y2 += mc.state.lineWidth / 2 + 1;

            mc.overlay.copyTo(newLayer, mouse.extremes);
            mc.session.addOperation({
                tool: this,
                layer: _.clone(newLayer),
                mouse: _.clone(mouse)
            });
            mc.overlay.clear();
            mouse.reset();
        },
        operationRemove: function (e) {
            e.layer.element.remove();
        },
        undo: function (e) {
            e.layer.remove(true);
        },
        redo: function (e) {
            e.layer.restore();
        }
    },
    {
        name: 'eraser',
        icon: 'fa-eraser',
        key: 'e',
        load: function () {
            var mc = this.mercuryCanvas;
            this.cursor = $('.brushCursor', mc.layersContainer);
            this.zIndex = 0;
            this.shown = false;
            this.started = false;
            this.matrix = new Matrix();
            mc.on('state.update', () => {
                if (!this.selected) return;
                this.mouseMove(mc.session.mouse.lastEvent);
                this.draw();
            });
        },
        select: function (e) {
            var mc = this.mercuryCanvas;

            if (e !== true) mc.overlay.clear();
        },
        deselect: function () {
            var mc = this.mercuryCanvas;

            this.cursor.hide();
            mc.layersContainer.css({
                cursor: 'default'
            });
            this.shown = false;
        },
        draw: function () {
            if (!this.started) return;
            var t0 = performance.now();
            var mc = this.mercuryCanvas;
            var points = mc.session.mouse.points;
            if (!points.length) return;

            mc.overlay.clear();

            mc.overlay.context.beginPath();
            mc.overlay.context.moveTo(points[0].x, points[0].y);

            if (points.length < 3) {
                var b = points[0];
                mc.overlay.context.beginPath();
                mc.overlay.context.arc(b.x, b.y, mc.overlay.context.lineWidth / 2, 0, Math.PI * 2, false);
                mc.overlay.context.fill();
                mc.overlay.context.closePath();
                mc.overlay.state.dirty = true;
                return;
            }

            for (var i = 0; i < points.length - 2; i++) {
                var point1 = points[i];
                var point2 = points[i + 1];
                var c = (point1.x + point2.x) / 2;
                var d = (point1.y + point2.y) / 2;

                mc.overlay.context.quadraticCurveTo(point1.x, point1.y, c, d);
            }

            mc.overlay.context.quadraticCurveTo(
                points[i].x,
                points[i].y,
                points[i + 1].x,
                points[i + 1].y
            );

            mc.overlay.context.stroke();
            mc.overlay.state.dirty = true;
            var t1 = performance.now();
            log.debug('I spent ' + (t1 - t0) + 'ms to draw the overlay');
        },
        mouseDown: function (e) {
            var mc = this.mercuryCanvas;

            mc.session.mouse.points = [];

            mc.overlay.context.lineWidth = mc.state.lineWidth;
            mc.overlay.context.strokeStyle = mc.state.background;
            mc.overlay.context.fillStyle = mc.state.background;
            mc.overlay.context.lineCap = mc.overlay.context.lineJoin = 'round';
            this.started = true;

            this.mouseMove(e);
            requestAnimationFrame(this.draw.bind(this, e));
        },
        mouseMove: function (e) {
            if (!e || !this.selected) return;
            var mc = this.mercuryCanvas;

            var css = {};
            if (!this.shown) {
                this.shown = true;
                this.cursor.show();
                mc.layersContainer.css({
                    cursor: 'none'
                });
            }
            if (this.zIndex - 1 < mc.session.zIndex) {
                css.zIndex = mc.session.zIndex + 1;
                this.zIndex = mc.session.zIndex + 1;
            }
            if (mc.state.lineWidth != this.size) {
                css.width = mc.state.lineWidth;
                css.height = mc.state.lineWidth;
                this.size = mc.state.lineWidth;
            }

            var mouse = mc.session.mouse;
            var pos = new coords(e).toCanvasSpace(mc);

            this.matrix.translate(pos.x - this.matrix.e, pos.y - this.matrix.f);
            this.matrix.translate(-mc.state.lineWidth / 2, -mc.state.lineWidth / 2);
            css.transform = this.matrix.toCSS();

            this.cursor.css(css);
            if (!mouse.down || !this.started) return;

            if (mc.session.keys.shift && mouse.points.length) {
                var initial = mouse.points[0];
                if (!_.isNumber(mouse.delta.x) || !_.isNumber(mouse.delta.y)) {
                    mouse.delta = {
                        x: Math.abs(pos.x - initial.x),
                        y: Math.abs(pos.y - initial.y)
                    };
                }

                if (mouse.delta.x > mouse.delta.y) {
                    pos.y = initial.y;
                }
                else {
                    pos.x = initial.x;
                }
            }

            mouse.points.push(pos);
            mouse.extremes = {
                x: Math.min(mouse.extremes.x, pos.x),
                y: Math.min(mouse.extremes.y, pos.y),
                x2: Math.max(mouse.extremes.x2, pos.x),
                y2: Math.max(mouse.extremes.y2, pos.y)
            };
        },
        mouseUp: function () {
            this.started = false;
            var mc = this.mercuryCanvas;
            var mouse = mc.session.mouse;
            if (!mouse.points.length) return;

            mouse.extremes.x -= mc.state.lineWidth / 2 + 1;
            mouse.extremes.y -= mc.state.lineWidth / 2 + 1;
            mouse.extremes.x2 += mc.state.lineWidth / 2 + 1;
            mouse.extremes.y2 += mc.state.lineWidth / 2 + 1;

            var oldImages = [];
            var newImages = [];
            var erased = [];
            async.each(mc.layers.list, (layer, callback) => {
                if (mouse.extremes.x > layer.coords.x || mouse.extremes.x2 > layer.coords.x || mouse.extremes.x2 < layer.coords.x + layer.coords.width || mouse.extremes.y > layer.coords.y || mouse.extremes.y2 > layer.coords.y || mouse.extremes.y2 < layer.coords.y + layer.coords.height) {
                    oldImages.push({
                        layer: layer,
                        original: _.clone(layer.original)
                    });

                    erased.push(layer);
                    layer.context.save();
                    layer.context.globalCompositeOperation = 'destination-out';
                    layer.context.drawImage(mc.overlay.canvas, -1 * layer.coords.x, -1 * layer.coords.y);
                    layer.context.restore();
                    layer.updateOriginal(() => {
                        newImages.push({
                            layer: layer,
                            original: _.clone(layer.original)
                        });
                        callback();
                    });
                }
            }, () => {
                mc.session.addOperation({
                    tool: this,
                    layers: erased,
                    old: oldImages,
                    new: newImages
                });

                mc.overlay.clear();
                mouse.reset();
            });
        },
        operationRemove: function (operation) {
            _.each(operation.new, (e) => {
                URL.revokeObjectURL(e.original.url);
            });
        },
        undo: function (operation) {
            _.each(operation.old, (obj) => {
                var layer = obj.layer;

                layer.clear();
                layer.draw(obj.original.image);
            });
        },
        redo: function (operation) {
            _.each(operation.new, (obj) => {
                var layer = obj.layer;

                layer.clear();
                layer.draw(obj.original.image);
            });
        }
    },
    {
        name: 'eyeDropper',
        icon: 'fa-eyedropper',
        key: 'i',
        load: function () {
            var mc = this.mercuryCanvas;
            mc.on('state.update', () => {
                if (!this.selected) return;
                this.draw(mc.session.mouse.lastEvent);
            });
        },
        deselect: function () {
            this.mercuryCanvas.overlay.clear();
        },
        draw: function (e) {
            if (!e) return;
            var mc = this.mercuryCanvas;
            var pos = new coords(e).toCanvasSpace(mc);
            var gridSize = mc.state.eyedropper.gridSize;
            gridSize = gridSize % 2 == 0 ? gridSize + 1 : gridSize;
            var rectDiameter = gridSize * mc.state.eyedropper.gridSpace;
            var radius = Math.ceil(rectDiameter / 2);
            var radiusPixels = Math.floor(gridSize / 2);

            pos.width = pos.height = gridSize;
            mc.overlay.clear();

            var ctx = mc.overlay.context;

            ctx.save();
            ctx.imageSmoothingEnabled = ctx.mozImageSmoothingEnabled = ctx.webkitImageSmoothingEnabled = false;
            ctx.beginPath();
            ctx.arc(pos.x + radius, pos.y + radius, radius, 0, 2 * Math.PI);
            ctx.clip();

            pos.width += gridSize;
            pos.height += gridSize;

            var relevant = [];
            _.each(mc.layers.list, (layer) => {
                if (!layer.state.visible || layer.state.removed) return;
                if (pos.inside(layer.coords, true)) {
                    relevant[layer.coords.z] = layer;
                }
            });

            ctx.drawImage(mc.base.element[0], 0, 0, gridSize, gridSize, pos.x, pos.y, rectDiameter, rectDiameter);
            _.each(relevant, (layer) => {
                if (!layer) return;
                ctx.drawImage(layer.element[0], pos.x - layer.coords.x - radiusPixels, pos.y - layer.coords.y - radiusPixels, gridSize, gridSize, pos.x, pos.y, rectDiameter, rectDiameter);
            });

            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(224, 224, 224, 0.8)';
            ctx.beginPath();
            var x = 0;
            for (x = 1; x < gridSize; x++) {
                ctx.moveTo(pos.x + x * mc.state.eyedropper.gridSpace, pos.y);
                ctx.lineTo(pos.x + x * mc.state.eyedropper.gridSpace, pos.y + rectDiameter);
            }
            for (x = 1; x < gridSize; x++) {
                ctx.moveTo(pos.x, pos.y + x * mc.state.eyedropper.gridSpace);
                ctx.lineTo(pos.x + rectDiameter, pos.y + x * mc.state.eyedropper.gridSpace);
            }
            ctx.closePath();
            ctx.stroke();

            ctx.strokeStyle = '#000';
            ctx.beginPath();
            ctx.arc(pos.x + rectDiameter / 2, pos.y + rectDiameter / 2, rectDiameter / 2, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.stroke();

            ctx.strokeStyle = '#000';
            ctx.strokeRect(pos.x + rectDiameter / 2 - mc.state.eyedropper.gridSpace / 2, pos.y + rectDiameter / 2 - mc.state.eyedropper.gridSpace / 2, mc.state.eyedropper.gridSpace, mc.state.eyedropper.gridSpace);
            ctx.strokeStyle = '#FFF';
            ctx.strokeRect(pos.x + rectDiameter / 2 - mc.state.eyedropper.gridSpace / 2 + 1, pos.y + rectDiameter / 2 - mc.state.eyedropper.gridSpace / 2 + 1, mc.state.eyedropper.gridSpace - 2, mc.state.eyedropper.gridSpace - 2);
            ctx.restore();

            mc.overlay.state.dirty = true;
        },
        mouseDown: function () {
            var mc = this.mercuryCanvas;
            var lastPos = new coords(mc.session.mouse.lastEvent).toCanvasSpace(mc);
            var ctx = mc.overlay.context;
            var gridSize = mc.state.eyedropper.gridSize;
            gridSize = gridSize % 2 == 0 ? gridSize + 1 : gridSize;
            var temp = Math.floor(mc.state.eyedropper.gridSpace * gridSize / 2);
            var rgb = ctx.getImageData(lastPos.x + temp, lastPos.y + temp, 1, 1).data;

            mc.state.strokeColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
            var t;
            _.each(this.parent.tools, (tool) => {
                if (tool.name == 'brush') t = tool;
                if (tool.name != 'colorPicker') return;
                tool.colorPicker.setColor(mc.state.strokeColor);
            });
            t.onClick();
        }
    },
    {
        name: 'move',
        icon: 'fa-arrows',
        selected: true,
        key: 'v',
        load: function () {
            this.oldCoords = [];
            var mc = this.mercuryCanvas;
            var selectedLayers = mc.session.selectedLayers;

            mc.on('undo.layer.move', (operation) => {
                _.each(operation.layers, (layer, index) => {
                    layer.coords.update(operation.old[index]);
                });
                selectedLayers.makeBox();
            });
            mc.on('redo.layer.move', (operation) => {
                _.each(operation.layers, (layer, index) => {
                    layer.coords.update(operation.new[index]);
                });
                selectedLayers.makeBox();
            });
        },
        mouseDown: function (e) {
            var mc = this.mercuryCanvas;
            var selectedLayers = mc.session.selectedLayers;
            var pos = new coords(e).toCanvasSpace(mc);
            if (mc.state.moveTool.autoSelect) {
                mc.session.selectedLayers.deselectAll();
                var layer = pos.toLayer(mc);
                if (!layer) return;
                layer.select();
            }
            if (!selectedLayers.list.length) return;


            _.each(selectedLayers.list, (layer, index) => {
                this.oldCoords[index] = _.clone(layer.coords);
            });
            mc.session.mouse.initial = {
                dist: [],
                mouse: _.clone(pos),
                selectedLayers: selectedLayers.list.map(layer => _.clone(layer.coords))
            };
        },
        mouseMove: function (e) {
            var mc = this.mercuryCanvas;
            if (!mc.session.mouse.down || !mc.session.mouse.initial) return;

            var mouse = mc.session.mouse;
            var pos = new coords(e).toCanvasSpace(mc);
            mouse.last = e;
            this.actioned = true;

            var selectedLayers = mc.session.selectedLayers;
            var dist = mouse.initial.dist;
            var oldCoords = [];
            var newCoords = [];
            _.each(selectedLayers.list, (layer, index) => {
                if (!_.isObject(mouse.initial.dist[index])) {
                    dist[index] = {
                        x: mouse.initial.mouse.x - mouse.initial.selectedLayers[index].x,
                        y: mouse.initial.mouse.y - mouse.initial.selectedLayers[index].y
                    };
                }
                oldCoords[index] = _.clone(layer.coords);
                var coords = {
                    x: pos.x - dist[index].x,
                    y: pos.y - dist[index].y
                };
                if (mc.session.keys.shift) {
                    var original = mouse.initial.selectedLayers[index];
                    var delta = {
                        x: Math.abs(pos.x - mouse.initial.mouse.x),
                        y: Math.abs(pos.y - mouse.initial.mouse.y)
                    };

                    if (delta.x > mc.state.snap.distance || delta.y > mc.state.snap.distance || !mc.state.snap.toStartPosition) {
                        if (delta.x > delta.y) {
                            coords.y = original.y;
                        }
                        else {
                            coords.x = original.x;
                        }
                    }
                    else if (mc.state.snap.toStartPosition) {
                        coords.x = original.x;
                        coords.y = original.y;
                    }
                }
                newCoords[index] = _.clone(coords);
                layer.coords.update(coords);
            });

            selectedLayers.makeBox();
        },
        mouseUp: function () {
            var mc = this.mercuryCanvas;
            var selectedLayers = mc.session.selectedLayers;
            if (this.actioned) {
                this.actioned = false;
                var newCoords = [];
                _.each(selectedLayers.list, (layer, index) => {
                    newCoords[index] = _.clone(layer.coords);
                });
                mc.session.addOperation({
                    type: 'layer.move',
                    layers: _.clone(selectedLayers.list),
                    old: this.oldCoords,
                    new: newCoords
                });
            }
            this.oldCoords = [];
            mc.session.mouse.reset();
        }
    },
    {
        name: 'clear',
        icon: 'fa-file',
        action: true,
        end: true,
        key: 'mod + n',
        select: function () {
            var mc = this.mercuryCanvas;
            mc.overlay.clear();

            _.forIn(_.clone(mc.layers.list), (layer) => {
                layer.remove();
            });
            mc.session.operationIndex = 0;
            mc.session.clearOrphanOperations();
            mc.session.updateMenus();
        }
    },
    {
        name: 'colorPicker',
        icon: 'fa-tint',
        action: true,
        end: true,
        load: function () {
            this.visible = false;
            this.colorPickerWrapper = $('<div>', {
                class: 'menuCollider',
                css: {
                    position: 'absolute',
                    zIndex: 1010,
                    display: 'none'
                }
            }).appendTo(this.mercuryCanvas.element);
            this.colorPicker = new colorPicker({
                color: this.mercuryCanvas.state.strokeColor,
                background: '#454545',
                el: this.colorPickerWrapper[0]
            });
            this.colorPicker.onChange((color) => {
                this.element.css('color', color);
                this.mercuryCanvas.state.strokeColor = color;
            });
            this.colorPickerWrapper.on('mouseup touchend', () => {
                this.mercuryCanvas.state.save();
            });
        },
        menuUnfix: function () {
            this.menuMove();
        },
        menuMove: function () {
            var topOffset = 0;
            var leftOffset = 0;
            if (!this.parent.fixed) {
                if (this.parent.orientation.vertical) {
                    topOffset = 0;
                    leftOffset = 40;
                }
                else if (this.parent.orientation.horizontal) {
                    topOffset = 40;
                    leftOffset = 0;
                }
            }
            if (this.parent.fixed == 'top') {
                topOffset = 40;
                leftOffset = 0;
            }
            else if (this.parent.fixed == 'left') {
                topOffset = 0;
                leftOffset = 40;
            }
            else if (this.parent.fixed == 'right') {
                topOffset = 0;
                leftOffset = -10 - this.colorPickerWrapper.outerWidth();
            }
            else if (this.parent.fixed == 'bottom') {
                topOffset = -10 - this.colorPickerWrapper.outerHeight();
                leftOffset = 0;
            }
            this.colorPickerWrapper.css({
                top: this.element.offset().top + topOffset,
                left: this.element.offset().left + leftOffset,
            });
            var visible = this.colorPickerWrapper.visible();
            visible.top = visible.top != 0 ? visible.top - 5 : 0;
            visible.bottom = visible.bottom != 0 ? visible.bottom + 5 : 0;
            visible.left = visible.left != 0 ? visible.left - 5 : 0;
            visible.right = visible.right != 0 ? visible.right + 5 : 0;

            this.colorPickerWrapper.css('top', '+=' + (visible.top - visible.bottom));
            this.colorPickerWrapper.css('left', '+=' + (visible.left - visible.right));
        },
        select: function (e) {
            if (e.target.className.indexOf('colorPicker') == -1 && e.target.className.indexOf('fa') == -1) return;
            this.visible = !this.visible;
            if (this.visible) {
                this.colorPickerWrapper.show();
                this.menuMove();
            }
            else {
                this.colorPickerWrapper.hide();
            }
        }
    },
    {
        name: 'fullscreen',
        icon: 'fa-expand',
        end: true,
        action: true,
        load: function () {
            $(document).on('fullscreenchange mozfullscreenchange webkitfullscreenchange msfullscreenchange', () => {
                var fullscreen = window.fullScreen || document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
                if (fullscreen) {
                    this.element.children('i').removeClass('fa-expand').addClass('fa-compress');
                }
                else {
                    this.element.children('i').removeClass('fa-compress').addClass('fa-expand');
                }
            });
        },
        select: function () {
            var fullscreen = window.fullScreen || document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
            if (!fullscreen) {
                var el = document.documentElement;
                if (el.requestFullscreen) {
                    el.requestFullscreen();
                }
                else if (el.mozRequestFullScreen) {
                    el.mozRequestFullScreen();
                }
                else if (el.webkitRequestFullscreen) {
                    el.webkitRequestFullscreen();
                }
                else if (el.msRequestFullscreen) {
                    el.msRequestFullscreen();
                }
            }
            else if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }
];

export {topbarTools};