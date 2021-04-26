var log = require('loglevel-message-prefix')(window.log.getLogger('session.js'), {
    prefixes: ['level'],
    staticPrefixes: ['session.js'],
    separator: '/'
});
import _ from 'lodash';
import {Matrix} from 'transformation-matrix-js';
import {coords} from './helpers.js';
import Layer from './layer.js';

class SelectedLayers {
    constructor(mc) {
        this.mercuryCanvas = mc;
        this.list = [];
        this.rect = new coords();
        this.state = {
            transform: false
        };

        this.oldCoords = [];
        this.cursor = {
            shown: false,
            matrix: new Matrix()
        };

        var cursor = $('<div>', {
            class: 'selectCursor',
            css: {
                zIndex: 1002
            }
        }).hide();
        cursor.appendTo(mc.layersContainer);
        this.cursor.element = cursor;

        mc.on('layer.remove', () => {
            this.makeBox();
            requestAnimationFrame(this.draw.bind(this));
        });

        mc.on('undo.transform', (operation) => {
            console.log(operation);
            _.each(operation.layers, (layer, index) => {
                layer.draw(layer.original.image, {
                    update: false
                });
                layer.coords.update(operation.coords.old[index]);
                layer.applyScale();
                layer.applyRotation(operation.coords.old[index].pivot);
            });
            this.makeBox();
            this.mouseMove(mc.session.mouse.last);
        });
        mc.on('redo.transform', (operation) => {
            console.log(operation);
            _.each(operation.layers, (layer, index) => {
                layer.draw(layer.original.image, {
                    update: false
                });
                layer.coords.update(operation.coords.new[index]);
                layer.applyScale();
                layer.applyRotation(operation.coords.new[index].pivot);
            });
            this.makeBox();
            this.mouseMove(mc.session.mouse.last);
        });
        mc.on('layer.trim', () => {
            requestAnimationFrame(this.draw.bind(this));
        });
        mc.on('key.up', () => this.mouseMove(mc.session.mouse.last));
        mc.on('key.down', () => this.mouseMove(mc.session.mouse.last));

        mc.on('mousedown', this.mouseDown.bind(this));
        mc.on('mouseup', this.mouseUp.bind(this));
        mc.on('mousemove', (e) => {
            if (!this.state.transform) return;
            this.mouseMove(e);
        });
        mc.on('touchstart', e => this.mouseDown(e.originalEvent.touches[0]));
        mc.on('touchmove', (e) => {
            if (!this.state.transform) return;
            this.mouseMove(e.originalEvent.touches[0]);
        });
        mc.on('touchend', e => this.mouseUp(e.originalEvent.touches[0]));
        mc.addShortcut('mod + m', () => {
            this.enterTransform();
            return false;
        });
        mc.addShortcut(['mod + enter', 'esc'], () => {
            this.exitTransform();
        });

        // setTimeout(() => {
        //     if (!mc.layers.list.length) return;
        //     _.forIn(mc.layers.list, (layer) => {
        //         layer.select('append');
        //     });
        //     this.enterTransform();
        // }, 1000);
    }
    makeBox() {
        var rect = new coords({
            x: Infinity,
            y: Infinity
        });
        rect.x2 = 0;
        rect.y2 = 0;
        _.each(this.list, (layer) => {
            var end = {
                x: layer.coords.x + layer.coords.width,
                y: layer.coords.y + layer.coords.height
            };
            rect.x = Math.min(rect.x, layer.coords.x);
            rect.y = Math.min(rect.y, layer.coords.y);
            rect.x2 = Math.max(rect.x2, end.x);
            rect.y2 = Math.max(rect.y2, end.y);
        });
        rect.width = rect.x2 - rect.x;
        rect.height = rect.y2 - rect.y;
        this.rect.update(rect);
    }
    select(layer, type = 'only') {
        if (type == 'append') {
            this.list.push(layer);
        }
        else if (type == 'only') {
            _.each(this.list, (l) => {
                if (l == layer) return;
                l.deselect();
            });
            this.list = [layer];
        }
        this.makeBox();
    }
    deselectAll() {
        _.each(this.list, (layer) => {
            layer.deselect();
        });
        this.list = [];
    }
    enterTransform() {
        if (this.state.transform) return;
        this.state.transform = true;

        var mc = this.mercuryCanvas;
        this.lastActiveTools = mc.state.activeTools;
        _.forIn(mc.state.activeTools, (tool) => {
            tool.deselect();
        });
        mc.state.activeTools = [];

        this.mouseMove(mc.session.mouse.lastEvent);
    }
    exitTransform() {
        if (!this.state.transform) return;
        this.state.transform = false;

        var mc = this.mercuryCanvas;
        this.cursor.element.hide();
        mc.layersContainer.css({
            cursor: 'default'
        });
        _.forIn(this.lastActiveTools, (tool) => {
            tool.select();
        });
        mc.state.activeTools = this.lastActiveTools;
        mc.overlay.clear();
    }
    chooseCursor(e) {
        var mc = this.mercuryCanvas;
        var layerCoords = mc.session.selectedLayers.rect;

        if (!layerCoords) return 'default';

        var pos = new coords(e).toCanvasSpace(mc);
        var selectedRect = _.clone(layerCoords);
        var handlerSize = mc.state.handlerSize;
        var sh = handlerSize / 2;
        var ret;

        if (pos.x > selectedRect.x && pos.x < selectedRect.x + selectedRect.width && pos.y > selectedRect.y && pos.y < selectedRect.y + selectedRect.height) {
            ret = 'move';
        }
        if (pos.x > selectedRect.x - sh && pos.x < selectedRect.x + sh &&
            pos.y > selectedRect.y - sh && pos.y < selectedRect.y + sh) {
            ret = 'nw-resize';
        }
        if (pos.x > selectedRect.x + selectedRect.width - sh && pos.x < selectedRect.x + selectedRect.width + sh &&
            pos.y > selectedRect.y - sh && pos.y < selectedRect.y + sh) {
            ret = 'ne-resize';
        }
        if (pos.x > selectedRect.x + selectedRect.width - sh && pos.x < selectedRect.x + selectedRect.width + sh &&
            pos.y > selectedRect.y + selectedRect.height - sh && pos.y < selectedRect.y + selectedRect.height + sh) {
            ret = 'se-resize';
        }
        if (pos.x > selectedRect.x - sh && pos.x < selectedRect.x + sh &&
            pos.y > selectedRect.y + selectedRect.height - sh && pos.y < selectedRect.y + selectedRect.height + sh) {
            ret = 'sw-resize';
        }
        if (pos.x >= selectedRect.x + sh && pos.x <= selectedRect.x + selectedRect.width - sh &&
            pos.y > selectedRect.y - handlerSize / 3 && pos.y < selectedRect.y + handlerSize / 3) {
            ret = 'n-resize';
        }
        if (pos.x > selectedRect.x + selectedRect.width - handlerSize / 3 && pos.x < selectedRect.x + selectedRect.width + handlerSize / 3 &&
            pos.y >= selectedRect.y + sh && pos.y <= selectedRect.y + selectedRect.height - sh) {
            ret = 'e-resize';
        }
        if (pos.x >= selectedRect.x + sh && pos.x <= selectedRect.x + selectedRect.width - sh &&
            pos.y > selectedRect.y + selectedRect.height - handlerSize / 3 && pos.y < selectedRect.y + selectedRect.height + handlerSize / 3) {
            ret = 's-resize';
        }
        if (pos.x > selectedRect.x - handlerSize / 3 && pos.x < selectedRect.x + handlerSize / 3 &&
            pos.y >= selectedRect.y + sh && pos.y <= selectedRect.y + selectedRect.height - sh) {
            ret = 'w-resize';
        }
        if (!mc.state.debugRotate || (!(mc.session.mouse.down && _.isObject(mc.session.mouse.action) && mc.session.mouse.action.cursor == 'rotate') && (pos.x > selectedRect.x - sh && pos.y > selectedRect.y - sh && pos.x < selectedRect.x + selectedRect.width + sh && pos.y < selectedRect.y + selectedRect.height + sh))) {
            return ret;
        }

        var angle;
        if (pos.x < selectedRect.x + selectedRect.width / 4) {
            if (pos.y < selectedRect.y + selectedRect.height / 4) {
                angle = 0;
            }
            else if (pos.y > selectedRect.y + selectedRect.height * 3 / 4) {
                angle = -90;
            }
            else {
                angle = -45;
            }
        }
        else if (pos.x < selectedRect.x + selectedRect.width * 3 / 4) {
            if (pos.y < selectedRect.y + selectedRect.height / 4) {
                angle = 45;
            }
            else if (pos.y > selectedRect.y + selectedRect.height * 3 / 4) {
                angle = -135;
            }
            else if (pos.x < selectedRect.x + selectedRect.width / 2) {
                angle = -45;
            }
            else {
                angle = 135;
            }
        }
        else if (pos.y < selectedRect.y + selectedRect.height / 4) {
            angle = 90;
        }
        else if (pos.y > selectedRect.y + selectedRect.height * 3 / 4) {
            angle = -180;
        }
        else {
            angle = 135;
        }
        if (_.isNumber(angle)) {
            return {
                cursor: 'rotate',
                angle: angle
            };
        }
        return ret;
    }
    draw() {
        if (!this.state.transform) return;
        var mc = this.mercuryCanvas;
        this.makeBox();
        mc.overlay.clear();

        var context = mc.overlay.context;
        context.lineWidth = 1;
        context.strokeStyle = '#000';
        context.lineCap = mc.overlay.context.lineJoin = 'square';
        context.fillStyle = 'rgba(255, 255, 255, 0.1)';

        var rect = _.clone(this.rect);
        var handlerSize = mc.state.handlerSize;
        rect.x = Math.floor(rect.x) - 0.5;
        rect.y = Math.floor(rect.y) - 0.5;
        rect.width = Math.ceil(rect.width) + 1;
        rect.height = Math.ceil(rect.height) + 1;

        // handlers
        rect.topLeft = new coords({
            x: rect.x,
            y: rect.y
        });
        rect.topRight = new coords({
            x: rect.x + rect.width,
            y: rect.y
        });
        rect.bottomRight = new coords({
            x: rect.x + rect.width,
            y: rect.y + rect.height
        });
        rect.bottomLeft = new coords({
            x: rect.x,
            y: rect.y + rect.height
        });
        rect.sh = handlerSize / 2;

        // handlers
        context.fillRect(rect.topLeft.x - rect.sh, rect.topLeft.y - rect.sh, handlerSize, handlerSize);
        context.fillRect(rect.topRight.x - rect.sh, rect.topRight.y - rect.sh, handlerSize, handlerSize);
        context.fillRect(rect.bottomRight.x - rect.sh, rect.bottomRight.y - rect.sh, handlerSize, handlerSize);
        context.fillRect(rect.bottomLeft.x - rect.sh, rect.bottomLeft.y - rect.sh, handlerSize, handlerSize);

        context.strokeRect(rect.topLeft.x - rect.sh, rect.topLeft.y - rect.sh, handlerSize, handlerSize);
        context.strokeRect(rect.topRight.x - rect.sh, rect.topRight.y - rect.sh, handlerSize, handlerSize);
        context.strokeRect(rect.bottomRight.x - rect.sh, rect.bottomRight.y - rect.sh, handlerSize, handlerSize);
        context.strokeRect(rect.bottomLeft.x - rect.sh, rect.bottomLeft.y - rect.sh, handlerSize, handlerSize);

        // lines
        if (rect.width > handlerSize + 1 || rect.height > handlerSize + 1) {
            context.beginPath();

            // compensate for handlers lines
            rect.width++;
            rect.height++;
            rect.x--;
            rect.y--;

            if (rect.width > handlerSize + 1) {
                context.moveTo(rect.topLeft.x + rect.sh, rect.topLeft.y);
                context.lineTo(rect.topRight.x - rect.sh, rect.topRight.y);

                context.moveTo(rect.bottomLeft.x + rect.sh, rect.bottomLeft.y);
                context.lineTo(rect.bottomRight.x - rect.sh, rect.bottomRight.y);
            }
            if (rect.height > handlerSize + 1) {
                context.moveTo(rect.topRight.x, rect.topRight.y + rect.sh);
                context.lineTo(rect.bottomRight.x, rect.bottomRight.y - rect.sh);

                context.moveTo(rect.topLeft.x, rect.topLeft.y + rect.sh);
                context.lineTo(rect.bottomLeft.x, rect.bottomLeft.y - rect.sh);
            }
            context.stroke();
            context.closePath();
        }

        mc.overlay.state.dirty = true;
    }
    mouseDown(e) {
        if (!this.state.transform) return;
        var mc = this.mercuryCanvas;
        var mouse = mc.session.mouse;
        var pos = new coords(e).toCanvasSpace(mc);

        if (_.isUndefined(mouse.action)) return;

        mouse.initial = {
            dist: [],
            mouse: _.clone(pos),
            selectedLayers: this.list.map(layer => _.clone(layer.coords))
        };
        var dist = mc.session.mouse.initial.dist;
        _.each(this.list, (layer, index) => {
            this.oldCoords[index] = _.clone(layer.coords);

            dist[index] = {
                x: mouse.initial.mouse.x - layer.coords.x,
                y: mouse.initial.mouse.y - layer.coords.y
            };

            if (layer.original) {
                var image = layer.original.image;
                dist[index].image = {
                    width: image.width,
                    height: image.height
                };

                var coords = _.clone(layer.coords);
                layer.draw(image, {
                    resize: true,
                    update: false
                });
                coords.scale = true;
                coords.scaleX = coords.width / image.width;
                coords.scaleY = coords.height / image.height;

                layer.coords.update(coords);
            }
        });
        if (_.isObject(mouse.action) && mouse.action.cursor == 'rotate') {
            this.rect.pivot = {
                x: this.rect.x + this.rect.width / 2,
                y: this.rect.y + this.rect.height / 2
            };
        }
        this.mouseMove(e);
        requestAnimationFrame(this.draw.bind(this));
    }
    mouseMove(e) {
        if (!this.state.transform) return;
        var mc = this.mercuryCanvas;
        var mouse = mc.session.mouse;
        var pos = new coords(e).toCanvasSpace(mc);
        mouse.last = e;

        if (!mouse.down) {
            mouse.action = this.chooseCursor(e);
            this.updateCursor(mouse.action, e);
        }
        else if (mouse.action) {
            this.actioned = true;

            var newCoords = [];

            if (mouse.action == 'move') {
                _.each(this.list, (layer, index) => {
                    var dist = mouse.initial.dist[index];
                    var coords = {
                        x: pos.x - dist.x,
                        y: pos.y - dist.y
                    };
                    if (mc.session.keys.shift) {
                        var original = this.oldCoords[index];
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
            }
            else if (_.isObject(mouse.action) && mouse.action.cursor == 'rotate') {
                var angle = Math.atan2(pos.y - this.rect.pivot.y, pos.x - this.rect.pivot.x);
                var initialAngle = Math.atan2(mouse.initial.mouse.y - this.rect.pivot.y, mouse.initial.mouse.x - this.rect.pivot.x);

                angle = angle - initialAngle;

                if (mc.session.keys.shift) {
                    angle = (Math.round(angle.toDeg() / 15) * 15).toPi();
                }

                _.each(this.list, (layer, index) => {
                    layer.coords.update({
                        angle: angle + this.oldCoords[index].angle,
                        pivot: this.rect.pivot
                    });
                });

                var matrix = new Matrix();
                matrix.rotateDeg(angle.toDeg());
                mc.overlay.element.css({
                    transform: matrix.toCSS(),
                    transformOrigin: this.rect.pivot.x + 'px ' + this.rect.pivot.y + 'px'
                });
                this.updateCursor(this.chooseCursor(e), e);
            }
            else {
                _.each(this.list, (layer, index) => {
                    var original = this.oldCoords[index];
                    var dist = mouse.initial.dist[index];
                    var coords = {
                        x: pos.x - dist.x,
                        y: pos.y - dist.y
                    };
                    var delta = {
                        x: pos.x - mouse.initial.mouse.x,
                        y: pos.y - mouse.initial.mouse.y
                    };

                    switch (mouse.action) {
                        case 'nw-resize':
                            coords.width = original.width + delta.x * -1;
                            coords.height = original.height + delta.y * -1;

                            if (mc.session.keys.shift) {
                                this.symmetricScale(coords, original);
                                coords.x = Math.min(original.x + original.width - coords.width, original.x + original.width);
                                coords.y = Math.min(original.y + original.height - coords.height, original.y + original.height);
                            }
                            if (mc.session.keys.alt) {
                                this.mirrorScale(coords, original);
                            }
                            coords.x = Math.min(coords.x, original.x + original.width);
                            coords.y = Math.min(coords.y, original.y + original.height);
                            break;
                        case 'ne-resize':
                            coords.width = pos.x - original.x;
                            coords.height = original.height - pos.y + original.y;
                            coords.x = original.x;
                            coords.y = Math.min(pos.y, original.y + original.height);
                            if (mc.session.keys.shift) {
                                this.symmetricScale(coords, original);
                                coords.y = Math.min(original.y + original.height - coords.height, original.y + original.height);
                            }
                            if (mc.session.keys.alt) {
                                this.mirrorScale(coords, original);
                            }
                            break;
                        case 'se-resize':
                            coords.x = original.x;
                            coords.y = original.y;
                            coords.width = pos.x - original.x;
                            coords.height = pos.y - original.y;
                            if (mc.session.keys.shift) {
                                this.symmetricScale(coords, original);
                            }
                            if (mc.session.keys.alt) {
                                this.mirrorScale(coords, original);
                            }
                            break;
                        case 'sw-resize':
                            coords.width = original.width + (original.x - pos.x);
                            coords.height = original.height + (pos.y - original.y - original.height);
                            coords.x = Math.min(pos.x, original.x + original.width);
                            coords.y = original.y;
                            if (mc.session.keys.shift) {
                                this.symmetricScale(coords, original);
                                coords.x = Math.min(original.x + original.width - coords.width, original.x + original.width);
                            }
                            if (mc.session.keys.alt) {
                                this.mirrorScale(coords, original);
                            }
                            break;
                        case 'n-resize':
                            coords.width = original.width;
                            coords.height = original.height + (original.y - pos.y);
                            coords.x = original.x;
                            coords.y = Math.min(pos.y, original.y + original.height);
                            if (mc.session.keys.alt) {
                                this.mirrorScale(coords, original);
                            }
                            break;
                        case 'e-resize':
                            coords.width = original.width + (pos.x - (original.x + original.width));
                            coords.height = original.height;
                            coords.x = original.x;
                            coords.y = original.y;
                            if (mc.session.keys.alt) {
                                this.mirrorScale(coords, original);
                            }
                            break;
                        case 's-resize':
                            coords.width = original.width;
                            coords.height = original.height + (pos.y - original.y - original.height);
                            coords.x = original.x;
                            coords.y = original.y;
                            if (mc.session.keys.alt) {
                                this.mirrorScale(coords, original);
                            }
                            break;
                        case 'w-resize':
                            coords.width = original.width + (original.x - pos.x);
                            coords.height = original.height;
                            coords.x = Math.min(pos.x, original.x + original.width);
                            coords.y = original.y;
                            if (mc.session.keys.alt) {
                                this.mirrorScale(coords, original);
                            }
                            break;
                    }
                    coords.width = Math.max(0, coords.width);
                    coords.height = Math.max(0, coords.height);

                    newCoords[index] = _.clone(coords);
                    coords.scale = true;
                    var oW = dist.image ? dist.image.width : original.width;
                    var oH = dist.image ? dist.image.height : original.height;
                    coords.scaleX = coords.width / oW;
                    coords.scaleY = coords.height / oH;
                    layer.coords.update(coords, true);
                });
            }
        }
        requestAnimationFrame(this.draw.bind(this));
    }
    mirrorScale(coords, original) {
        var delta = {};
        delta.width = coords.width - original.width;
        delta.height = coords.height - original.height;
        coords.width += delta.width;
        coords.height += delta.height;
        coords.x = Math.min(original.x - delta.width, original.x + original.width / 2);
        coords.y = Math.min(original.y - delta.height, original.y + original.height / 2);
    }
    symmetricScale(coords, original) {
        let wProp = coords.width / original.width;
        let hProp = coords.height / original.height;
        coords.height = original.height * (wProp + hProp) / 2;
        coords.width = original.width * (wProp + hProp) / 2;
    }
    mouseUp() {
        if (!this.state.transform) return;
        var mc = this.mercuryCanvas;
        var mouse = mc.session.mouse;
        var newCoords = [];
        if (_.isObject(mouse.action) && mouse.action.cursor == 'rotate') {
            mc.overlay.element.css({
                transform: new Matrix().toCSS(),
                transformOrigin: '0 0'
            });
        }
        var originals = [];
        _.each(this.list, (layer, index) => {
            newCoords[index] = _.clone(layer.coords);

            originals.push({
                element: layer.element,
                original: _.clone(layer.original)
            });
            if (_.isObject(mouse.action) && mouse.action.cursor == 'rotate') {
                layer.applyRotation(this.rect.pivot);
            }
            else {
                layer.applyScale(this.rect.pivot);
            }
        });
        mc.session.addOperation({
            type: 'transform',
            layers: _.clone(this.list),
            coords: {
                old: this.oldCoords,
                new: newCoords
            },
            originals: originals
        });
        mouse.action = undefined;
        this.oldCoords = [];
        mc.session.mouse.reset();
        requestAnimationFrame(this.draw.bind(this));
    }
    updateCursor(action, e) {
        var mc = this.mercuryCanvas;
        var pos = new coords(e).toCanvasSpace(mc);
        var mouse = mc.session.mouse;
        if (mouse.down) {
            if (_.isObject(mouse.action) && mouse.action.cursor == 'rotate') {
                this.cursor.matrix.reset();
                this.cursor.matrix.translate(pos.x, pos.y);
                this.cursor.matrix.rotateDeg(action.angle);

                this.cursor.element.css({
                    transform: this.cursor.matrix.toCSS()
                });
            }
        }
        else if (_.isObject(action) && action.cursor == 'rotate') {
            this.cursor.matrix.reset();
            this.cursor.matrix.translate(pos.x, pos.y);
            this.cursor.matrix.rotateDeg(action.angle);

            if (!this.cursor.shown) {
                this.cursor.shown = true;
                this.cursor.element.show();
            }
            this.cursor.element.css({
                transform: this.cursor.matrix.toCSS()
            });

            mc.layersContainer.css({
                cursor: 'none'
            });
        }
        else {
            if (this.cursor.shown) {
                this.cursor.shown = false;
                this.cursor.element.hide();
            }
            mc.layersContainer.css({
                cursor: action ? action : 'default'
            });
        }
    }
}
class File {
    constructor(mc) {
        this.mercuryCanvas = mc;
        this.input = $('<input>', {
            type: 'file',
            name: 'picture',
            accept: 'image/*',
            multiple: true
        }).hide().appendTo(mc.element);

        this.a = $('<a>', {
            style: 'display: none',
            download: mc.state.downloadName
        }).appendTo(mc.element);

        this.useBlob = window.URL;

        this.input.on('change', () => {
            this.readFiles(this.input[0].files);
        });
    }
    readFiles(files) {
        _.each(files, (file) => {
            if (!file) return;
            var reader = new FileReader();

            reader.onload = () => {
                var image = new Image();
                image.addEventListener('load', () => {
                    if (this.useBlob) {
                        window.URL.revokeObjectURL(file);
                    }
                    this.load(image, {
                        name: file.name,
                        width: image.width,
                        height: image.height,
                        type: file.type,
                        size: {
                            mb: file.size / 1024 / 1024,
                            kb: file.size / 1024,
                            b: file.size
                        }
                    });
                });

                image.src = this.useBlob ? window.URL.createObjectURL(file) : reader.result;
            };

            reader.readAsDataURL(file);
        });
    }
    load(image, imageInfo) {
        if (imageInfo.size.mb > this.mercuryCanvas.state.bigImageSizeMb) log.warn('The image could slow the app down.');
        var layer = new Layer({
            image: image,
            parent: this.mercuryCanvas,
            name: imageInfo.name,
            noThumbnail: imageInfo.size.mb > this.mercuryCanvas.state.bigImageSizeMb
        });
        this.mercuryCanvas.session.addOperation({
            type: 'layer.add',
            layer: layer
        });
    }
    openUploadDialog() {
        this.input.click();
    }
    download() {
        var mc = this.mercuryCanvas;
        var zSorted = [];
        _.each(mc.layers.list, (layer) => {
            zSorted[layer.coords.z] = layer;
        });

        mc.overlay.context.drawImage(mc.base.canvas, 0, 0);
        _.each(zSorted, (layer) => {
            if (!layer || !layer.state.visible || layer.state.removed) return;
            mc.overlay.context.drawImage(layer.canvas, layer.coords.x, layer.coords.y);
        });
        mc.overlay.state.dirty = true;

        mc.overlay.canvas.toBlob((blob) => {
            var url = window.URL.createObjectURL(blob);
            this.a[0].href = url;
            this.a[0].click();
            setTimeout(() => {
                window.URL.revokeObjectURL(url);
            });
            mc.overlay.clear();
        });
    }
}
class Mouse {
    constructor() {
        this.reset();
    }
    reset() {
        this.points = [];
        this.delta = {};
        this.extremes = {
            x: Infinity,
            y: Infinity,
            x2: 0,
            y2: 0
        };
    }
}
class Session {
    constructor(e) {
        _.extend(this, {
            width: 0,
            height: 0,
            mouse: new Mouse(),
            selectedLayers: null,
            mercuryCanvas: null,
            file: null,
            keys: {},
            operations: [],
            operationIndex: 0,
            zIndex: 1
        }, e);
        this.file = new File(this.mercuryCanvas);
        this.selectedLayers = new SelectedLayers(this.mercuryCanvas);
    }
    undo() {
        this.operationIndex--;

        if (!this.updateMenus()) return false;

        var operation = this.operations[this.operationIndex];
        if (_.isObject(operation.tool) && _.isFunction(operation.tool.undo)) {
            operation.tool.undo(operation);
        }
        if (_.isString(operation.type)) {
            this.mercuryCanvas.emit('undo.' + operation.type, operation);
        }
    }
    redo() {
        this.operationIndex++;

        if (!this.updateMenus()) return false;

        var operation = this.operations[this.operationIndex - 1];
        if (_.isObject(operation.tool) && _.isFunction(operation.tool.redo)) {
            operation.tool.redo(operation);
        }
        if (_.isString(operation.type)) {
            this.mercuryCanvas.emit('redo.' + operation.type, operation);
        }
    }
    updateMenus() {
        if (this.operationIndex == this.operations.length) {
            this.toggleButton({
                name: 'redo',
                state: false
            });
        }
        else if (this.operationIndex > this.operations.length) {
            this.operationIndex = this.operations.length;
            return log.warn('Operation index is bigger than the list of operations.');
        }
        else {
            this.toggleButton({
                name: 'redo',
                state: true
            });
        }
        if (this.operationIndex == 0) {
            this.toggleButton({
                name: 'undo',
                state: false
            });
        }
        else if (this.operationIndex < 0) {
            this.operationIndex = 0;
            return log.warn('Operation index is smaller than 0.');
        }
        else {
            this.toggleButton({
                name: 'undo',
                state: true
            });
        }
        return true;
    }
    addOperation(e) {
        this.clearOrphanOperations();
        this.operations.push(e);
        this.operationIndex++;
        this.updateMenus();
    }
    clearOrphanOperations() {
        var removed = this.operations.splice(this.operationIndex);
        _.forIn(removed, (operation) => {
            if (_.isObject(operation.tool) && _.isFunction(operation.tool.operationRemove)) {
                operation.tool.operationRemove(operation);
            }
            if (_.isString(operation.type)) {
                this.mercuryCanvas.emit('operationRemove.' + operation.type, operation);
            }
        });
    }
    toggleButton(e) {
        var mc = this.mercuryCanvas;
        _.forIn(mc.state.menus, (menu) => {
            if (_.isFunction(menu.toggleTool)) {
                menu.toggleTool(e);
            }
        });
    }
}
export default Session;