var log = require('loglevel-message-prefix')(window.log.getLogger('toolbar.js'), {
    prefixes: ['level'],
    staticPrefixes: ['toolbar.js'],
    separator: '/'
});
import _ from 'lodash';
import classnames from 'classnames';
import sortable from 'sortablejs';
import {Matrix} from 'transformation-matrix-js';
import {coords} from './helpers';
import Input from './input.js';

class Tool {
    constructor(options, parent) {
        _.merge(this, {
            end: false,
            disabled: false,
            action: false,
            selected: false,
            select: () => { },
            deselect: () => { },
            mouseDown: () => { },
            mouseMove: () => { },
            mouseUp: () => { },
            mouseLeave: () => { },
            load: () => { },
            name: '',
            icon: ''
        }, options);
        this.parent = parent;
        this.icon = this.icon.length > 0 ? this.icon : (options.icon ? options.icon : 'fa-' + options.name);

        this.mercuryCanvas = this.parent.mercuryCanvas;
        this.element = $('<div>', {
            class: classnames('tool', this.name, {
                end: this.end,
                disabled: this.disabled,
                first: this.first
            }),
            html: $('<i>', {
                class: classnames('fa', 'fa-fw', this.icon)
            })
        }).appendTo(this.parent.element);

        if (_.isString(this.key) || _.isArray(this.key)) {
            this.mercuryCanvas.addShortcut(this.key, (e) => {
                e.preventDefault();
                this.onClick(true);
            });
        }

        this.element.on('click', this.onClick.bind(this));

        setTimeout(() => {
            this.load();
            if (this.selected) this.onClick(true);
        });
    }
    onClick(e) {
        if (this.disabled) return;

        if (_.isObject(e) || e === true) this.select.bind(this, e)();

        if (this.action) return;

        if (this.parent.lastTool) {
            if (this.mercuryCanvas.session.mouse.down) {
                this.parent.lastTool.mouseUp(this.mercuryCanvas.session.mouse.lastEvent);
            }
            this.parent.lastTool.deselect();
        }
        this.parent.element.children('div').removeClass('selected');
        this.element.addClass('selected');
        this.parent.selectTool(this);
    }
    remove() {
        this.element.remove();
    }
    toggle(e) {
        if (e) this.element.removeClass('disabled');
        else this.element.addClass('disabled');
        this.disabled = !e;
    }
}

class Menu {
    constructor(options) {
        _.merge(this, {
            classes: '',
            fixable: true,
            fixed: false,
            mouse: {},
            orientation: {
                horizontal: false,
                vertical: false
            }
        }, options);

        this.determineOrientation();

        var menu = $('<div>', {
            class: classnames('menu', {
                'horizontal': this.orientation.horizontal,
                'vertical': this.orientation.vertical,
                'fixed': this.fixed !== false
            }, this.classes, this.fixed)
        }).appendTo(this.parent.element);

        this.mercuryCanvas = this.parent;
        this.element = menu;

        var mc = this.mercuryCanvas;

        this.mouseDown = this.mouseDown.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.element.on('mousedown touchstart', (e) => {
            if (this.unfixable) return;
            this.time = setTimeout(() => {
                this.willUnfix = true;
                this.mouseDown({
                    pageX: 10, // handle size / 2
                    pageY: 20
                });
                this.mouseMove(e);
            }, 1000);
        });

        this.matrix = new Matrix();
        this.coords = new coords();
        this.handle = $('<div>', {
            class: 'handle',
            html: $('<i>', {
                class: 'fa fa-fw fa-bars'
            })
        }).prependTo(menu);
        if (this.fixed) {
            this.handle.hide();
        }

        this.handle.on('mousedown touchstart', this.mouseDown);

        mc.on('mouseup', this.mouseUp);
        mc.on('touchend', this.mouseUp);
        mc.on('mousemove', this.mouseMove);
        mc.on('touchmove', (e) => this.mouseMove(e.originalEvent.touches[0]));

        this.coords.on('update', () => {
            this.matrix.reset();
            this.matrix.translate(this.coords.x, this.coords.y);
            this.element.css({
                transform: this.matrix.toCSS()
            });
            _.each(this.tools, (tool) => {
                if (_.isFunction(tool.menuMove)) tool.menuMove();
            });
        });
        if (this.fixed === false) {
            setTimeout(() => {
                this.coords.update({
                    width: this.element.width(),
                    height: this.element.height()
                });
            });
        }
    }
    determineOrientation(e) {
        if (this.fixed.length > 0 && (e || (!this.orientation.horizontal && !this.orientation.vertical))) {
            this.orientation.horizontal = this.fixed == 'top' || this.fixed == 'bottom';
            this.orientation.vertical = this.fixed == 'left' || this.fixed == 'right';
        }
        if (!this.orientation.horizontal && !this.orientation.vertical) {
            this.orientation.vertical = true;
        }
    }
    removeClone() {
        if (!this.clone) return;
        this.clone.remove();
        this.clone = undefined;
    }
    calculateSnap(e, distance) {
        var mc = this.mercuryCanvas;
        if (!_.isNumber(distance) || _.isNaN(distance) || distance <= 0) distance = mc.state.snap.menuDistance;
        if (e.x < distance) {
            return 'left';
        }
        if (e.y < distance) {
            return 'top';
        }
        if (e.x > mc.session.width - distance) {
            return 'right';
        }
        if (e.y > mc.session.height - distance) {
            return 'bottom';
        }
        return false;
    }
    resize(options) {
        if (this.fixed.length > 0) {
            if (this.orientation.horizontal) {
                this.element.css({
                    width: options.width
                });
            }
            else {
                this.coords.update({
                    x: 0,
                    y: options.topHeight,
                    width: this.element.outerWidth(),
                    height: options.height - options.menuHeight
                });
                this.element.css({
                    height: options.height - options.menuHeight
                });
                var x = 0;
                var x2 = 0;
                _.each(this.mercuryCanvas.state.menus, (menu) => {
                    if (menu == this) return false;
                    if (menu.fixed == 'left') {
                        x += menu.coords.width;
                    }
                    if (menu.fixed == 'right') {
                        x2 -= menu.coords.width;
                    }
                });

                if (this.fixed == 'left') {
                    this.coords.update({
                        x: x
                    });
                }
                if (this.fixed == 'right') {
                    this.coords.update({
                        x: x2
                    });
                }
            }
        }
        else {
            // dragable menu, make sure it stays on screen
        }

    }
    mouseDown(e, t = false) {
        this.element.css('z-index', 1002);
        this.mouse.down = true;
        if (_.isNumber(e.pageX) && _.isNumber(e.pageY) && (!this.dist || t)) {
            this.dist = {
                x: this.coords.x - e.pageX,
                y: this.coords.y - e.pageY
            };
        }
        if (this.willUnfix) {
            this.willUnfix = false;
            this.unfix();
        }
    }
    mouseMove(e) {
        if (!this.mouse.down) {
            return;
        }
        if (!this.dist) {
            this.dist = {
                x: this.coords.x - e.pageX,
                y: this.coords.y - e.pageY
            };
        }

        this.coords.update({
            x: this.dist.x + e.pageX,
            y: this.dist.y + e.pageY
        });

        if (!this.fixable) return;

        var mc = this.mercuryCanvas;
        var newSnap = this.calculateSnap({
            x: e.pageX,
            y: e.pageY
        });

        if (newSnap) {
            if (this.clone && this.snap == newSnap) return;
            if (this.snap != newSnap) this.removeClone();

            this.clone = this.element.clone().removeAttr('style').addClass('fixed');
            if (newSnap == 'left') {
                this.clone.addClass('left vertical').removeClass('horizontal');
            }
            if (newSnap == 'right') {
                this.clone.addClass('right vertical').removeClass('horizontal');
            }
            if (newSnap == 'top') {
                this.clone.addClass('top horizontal').removeClass('vertical');
            }
            if (newSnap == 'bottom') {
                this.clone.addClass('bottom horizontal').removeClass('vertical');
            }
            this.clone.css({
                zIndex: 1001,
                opacity: 0.8
            });
            this.clone.appendTo(mc.element);
        }
        else if (this.clone) {
            this.removeClone();
        }
        this.snap = newSnap;
    }
    mouseUp() {
        clearTimeout(this.time);
        this.mouse.down = false;
        this.dist = undefined;
        this.handle.removeClass('active');
        this.element.css('z-index', '');
        if (!this.fixable) return;

        if (this.clone) {
            this.removeClone();
            if (!this.snap) return;

            this.fix();
        }
    }
    fix() {
        this.fixed = this.snap;
        this.determineOrientation(true);

        this.element.removeClass('horizontal vertical left right top bottom').addClass(this.fixed).addClass('fixed').removeAttr('style');

        this.element.addClass(this.orientation.horizontal ? 'horizontal' : 'vertical');
        this.handle.hide();
        this.coords.update({
            x: 0,
            y: 0
        });
        this.mercuryCanvas.resize(true);
    }
    unfix() {
        _.each(this.tools, (tool) => {
            if (_.isFunction(tool.menuUnfix)) tool.menuUnfix();
        });
        this.fixed = false;
        this.determineOrientation(true);
        this.element.removeClass('fixed left right top bottom').removeAttr('style');
        this.handle.show();
        this.mercuryCanvas.resize(true);
        this.coords.update({
            width: this.element.width(),
            height: this.element.height()
        });
        this.handle.addClass('active');
        var menus = this.mercuryCanvas.state.menus;
        menus.unshift(menus.splice(menus.indexOf(this), 1)[0]);
        this.dist = {
            x: -this.handle.outerWidth() / 2,
            y: -this.handle.outerHeight() / 2
        };
    }
}

class Settings extends Menu {
    constructor(options) {
        super(options);

        this.classes += ' settings';
        this.element.addClass('settings');
        this.parseSettings(this.mercuryCanvas.state);
    }
    parseSettings(e, parent = '') {
        var notSettings = ['activeTools', 'local', 'menus', 'strokeColor', 'background', 'handlerSize', 'color', 'toLayer', 'toWindowMargin'];
        _.forIn(e, (value, key) => {
            if (notSettings.indexOf(key) != -1) return;
            if (_.isObject(value)) {
                this.parseSettings(value, key);
                return;
            }
            this.addVariable({
                parent: parent,
                value: value,
                key: key
            });
        });
    }
    addVariable(options) {
        var id = options.key;
        if (options.parent) id = options.parent + '-' + id;
        id = 'settings-' + id;
        var div;

        var obj = {
            id: id,
            name: options.key,
            value: options.value
        };
        if (typeof options.value == 'number') {
            obj.required = true;
            obj.type = 'number';
            obj.message = 'Please input a valid number';
        }
        else if (typeof options.value == 'boolean') {
            obj.type = 'boolean';
        }
        div = new Input(obj);
        div.on('changeVerified', (e, val, id) => {
            var keys = id.split('-');
            var key = keys[keys.length - 1];
            var parent = keys[keys.length - 2];
            if (parent == 'settings') {
                this.mercuryCanvas.state[key] = val;
            }
            else {
                this.mercuryCanvas.state[parent][key] = val;
            }
            this.mercuryCanvas.state.save();
            this.mercuryCanvas.emit('state.update');
        });
        if (!div) return;
        if (options.parent) {
            var temp = $('#settings-' + options.parent);
            if (!temp.length) {
                temp = $('<div>', {
                    class: 'settingsParent',
                    id: 'settings-' + options.parent
                });
                $(`<h6>${options.parent}</h6>`).appendTo(temp);
                temp.appendTo(this.element);
            }
            div.appendTo(temp);
        }
        else {
            div.appendTo(this.element);
        }
    }
}

class Toolbar extends Menu {
    constructor(options) {
        super(options);
        this.element.addClass('toolbar');
        this.tools = [];

        if (options.tools && options.tools.length > 0) {
            this.addTools(options.tools);
        }
    }
    addTools(tools) {
        if (typeof tools != 'object' || tools.length === undefined) {
            tools = [tools];
        }
        var firstEnd = false;
        _.forIn(tools, (tool) => {
            if (tool.end && !firstEnd) {
                tool.first = true;
                firstEnd = true;
            }
            this.tools.push(new Tool(tool, this));
        });
    }
    removeTools(tools) {
        if (typeof tools == 'boolean') {
            tools = this.tools;
        }
        else if (typeof tools != 'object' || tools.length === undefined) {
            tools = [tools];
        }

        _.forIn(tools, (tool) => {
            var removedTools = _.remove(this.tools, {
                name: typeof tool == 'object' ? tool.name : tool
            });
            _.forIn(removedTools, (removedTool) => {
                removedTool.remove();
            });
        });
    }
    selectTool(e) {
        var mc = this.mercuryCanvas;
        if (mc.session.selectedLayers.state.transform) {
            mc.session.selectedLayers.exitTransform();
        }
        var activeTools = this.parent.state.activeTools;

        if (this.lastTool) {
            this.lastTool.selected = false;
            activeTools.splice(activeTools.indexOf(this.lastTool), 1);
        }
        e.selected = true;
        this.lastTool = e;
        activeTools.push(e);
    }
    toggleTool(e) {
        if (!_.isObject(e) || !_.has(e, 'name' || !_.has(e, 'state'))) return;

        _.forIn(this.tools, (tool) => {
            if (tool.name != e.name) return;
            tool.toggle(e.state);
        });
    }
}

class LayerThumbnail {
    constructor(options) {
        this.layer = options.layer;
        this.id = options.id;
        this.wrapper = $('<div>', {
            class: 'layerThumbnail',
            'data-id': this.id
        });

        this.visibleIcon = $('<i>');
        this.visibleIconWrapper = $('<div>', {
            class: 'visible',
            html: this.visibleIcon
        }).appendTo(this.wrapper);

        $('<div>', {
            class: 'divider'
        }).appendTo(this.wrapper);

        this.thumbnail = $('<div>', {
            class: 'thumbnail'
        }).append($('<div>', {
            class: 'transparent'
        })).append($('<div>', {
            class: 'image'
        })).appendTo(this.wrapper);
        this.thumbnail = this.thumbnail.children('.image');

        this.name = $('<div>', {
            class: 'name'
        }).appendTo(this.wrapper);

        this.update();

        this.visibleIconWrapper.on('click touchend', (e) => {
            e.stopPropagation();
            var old = this.layer.state.visible;
            this.layer.toggleVisibility();

            this.layer.mercuryCanvas.session.addOperation({
                type: 'layer.visibility',
                layer: this.layer,
                old: old,
                new: this.layer.state.visible
            });
        });
        this.wrapper.on('click', () => {
            if (this.layer.mercuryCanvas.session.keys['ctrl']) {
                this.layer.select('append');
            }
            else if (this.layer.mercuryCanvas.session.keys['shift']) {
                this.layer.select('append');
            }
            else {
                this.layer.select('only');
            }
        });
        this.wrapper.prependTo(options.parent);
    }
    update() {
        this.visibleIcon.attr('class', classnames('fa', 'fa-fw', {
            'fa-eye': this.layer.state.visible,
            'fa-square': !this.layer.state.visible
        }));

        this.wrapper.css({
            zIndex: this.layer.coords.z
        }).attr('class', classnames({
            layerThumbnail: true,
            selected: this.layer.selected
        }));

        var bg = this.layer.noThumbnail ? './img/imageTooBig.png' : this.layer.canvas.toDataURL();
        this.thumbnail.css('background-image', `url("${bg}")`);

        this.name.html(this.layer.name);
    }
    delete() {
        this.wrapper.remove();
    }
    remove() {
        this.wrapper.hide();
    }
    restore() {
        this.wrapper.show();
    }
}

class LayersPanel extends Menu {
    constructor(options) {
        super(options);
        var self = this;
        var mc = this.mercuryCanvas;
        this.element.addClass('layersPanel');

        this.layersList = $('<div>', {
            class: 'layersList'
        }).appendTo(this.element);
        this.buttons = {};
        this.buttons.wrapper = $('<div>', {
            class: 'buttons'
        }).appendTo(this.element);
        this.buttons.trash = $('<div>', {
            class: 'tool trash',
            html: $('<i>', {
                class: 'fa fa-fw fa-trash'
            })
        }).appendTo(this.buttons.wrapper);

        mc.addShortcut('del', () => {
            this.buttons.trash.click();
        });
        this.buttons.trash.on('click', () => {
            var toRemove = [];
            _.each(mc.session.selectedLayers.list, (layer) => {
                toRemove.push(layer);
            });
            _.each(toRemove, (layer) => {
                layer.remove();
            });
        });

        this.last = {};
        this.sortable = new sortable(this.layersList[0], {
            group: {
                name: 'layerThumbnails',
                put: false,
                pull: 'clone'
            },
            dataIdAttr: 'data-id',
            animation: 150,
            filter: '.visible',
            draggable: '.layerThumbnail',
            onEnd: this.onEnd.bind(this),
            onStart: (event) => {
                this.last.oldIndex = event.oldIndex;
            }
        });
        this.trashSortable = new sortable(this.buttons.trash[0], {
            group: {
                name: 'layerThumbnails',
                put: true,
                pull: false
            },
            onAdd: (event) => {
                this.moveThumbnail({
                    newIndex: this.last.oldIndex,
                    element: event.item
                });
                var thumbnail = self.elementToThumbnail({
                    element: event.item
                });
                thumbnail.layer.remove();
                event.item.remove();
            },
        });

        this.thumbnails = [];
        this.lastID = 0;

        mc.on('layer.new', (layer) => {
            this.lastID++;
            self.thumbnails.unshift(new LayerThumbnail({
                layer: layer,
                parent: self.layersList,
                id: this.lastID
            }));
        });
        mc.on('layer.update', (layer) => {
            var thumbnail = this.elementToThumbnail({
                layer: layer
            });
            if (!thumbnail) return;
            thumbnail.update();
        });
        mc.on('layer.remove', (layer) => {
            var thumbnail = self.elementToThumbnail({
                layer: layer
            });
            if (!thumbnail) return;

            if (!this.layersList[0].contains(thumbnail.wrapper[0])) {
                thumbnail.wrapper = $('.sortable-chosen', this.layersList).removeClass('sortable-chosen');
            }
            thumbnail.remove();
        });
        mc.on('layer.restore', (layer) => {
            var thumbnail = self.elementToThumbnail({
                layer: layer
            });
            if (!thumbnail) return;
            thumbnail.restore();
        });
        mc.on('layer.detele', (layer) => {
            _.remove(self.thumbnails, (thumbnail) => {
                if (thumbnail.layer != layer) return false;

                thumbnail.delete();
                return true;
            });
        });
        mc.on('layer.z.update', (options) => {
            var thumbnail = this.elementToThumbnail({
                layer: options.layer
            });

            var l = self.thumbnails.length;
            var thumbnailIndex = self.thumbnails.indexOf(thumbnail);
            if (thumbnailIndex == l - options.z) return;

            this.moveThumbnail({
                oldIndex: thumbnailIndex,
                newIndex: l - options.z
            });
            this.onEnd({
                oldIndex: thumbnailIndex,
                newIndex: l - options.z,
                simulated: true,
                session: options.session
            });
        });
        mc.on('layer.select', (layer) => {
            var thumbnail = self.elementToThumbnail({
                layer: layer
            });
            if (!thumbnail) return;
            thumbnail.update();
        });
        mc.on('layer.deselect', (layer) => {
            var thumbnail = self.elementToThumbnail({
                layer: layer
            });
            if (!thumbnail) return;
            thumbnail.update();
        });
        mc.on('undo.layer.zIndex', (operation) => {
            operation.layer.coords.update({
                z: operation.old.z,
                session: true
            });
        });
        mc.on('redo.layer.zIndex', (operation) => {
            operation.layer.coords.update({
                z: operation.new.z,
                session: true
            });
        });
        mc.on('undo.layer.remove', (operation) => {
            operation.layer.restore();
        });
        mc.on('redo.layer.remove', (operation) => {
            operation.layer.remove(true);
        });
        mc.on('undo.layer.visibility', (operation) => operation.layer.toggleVisibility(operation.old));
        mc.on('redo.layer.visibility', (operation) => operation.layer.toggleVisibility(operation.new));
    }
    elementToThumbnail(options) {
        if (!_.isObject(options) || (!_.has(options, 'layer') && !_.has(options, 'element'))) return false;
        var a;
        if (options.layer) {
            if (_.isFunction(options.layer.get)) options.layer = options.layer.get(0);
            if (_.has(options.layer, 'name')) options.layer = options.layer.element[0];
        }
        if (options.element) {
            if (_.isFunction(options.element.get)) options.element = [options.element.get(0)];
        }

        _.each(this.thumbnails, (thumbnail) => {
            if (!thumbnail) return;
            if (thumbnail.layer.element[0] == options.layer) {
                a = thumbnail;
                return false;
            }
            if (thumbnail.wrapper[0] == options.element) {
                a = thumbnail;
                return false;
            }
        });
        return a;
    }
    updateZIndexes(layer) {
        var a;
        var l = this.thumbnails.length;
        _.each(this.thumbnails, (thumbnail, index) => {
            if (!thumbnail) return;
            var i = l - index;
            if (thumbnail.layer == layer) a = i;

            thumbnail.layer.coords.update({
                z: i
            });
        });
        return a;
    }
    onEnd(event) {
        if (!_.isNumber(event.oldIndex) || !_.isNumber(event.newIndex) || _.isNaN(event.oldIndex) || _.isNaN(event.newIndex) || event.oldIndex == event.newIndex) return;

        var thumbnail = this.thumbnails.splice(event.oldIndex, 1)[0];
        this.thumbnails.splice(event.newIndex, 0, thumbnail);

        if (!event.simulated) {
            event.oldIndex = this.thumbnails.length - event.oldIndex - 1;
            event.newIndex = this.thumbnails.length - event.newIndex - 1;
        }
        this.updateZIndexes();

        if (event.session || thumbnail.layer.state.removed) return;

        this.mercuryCanvas.session.addOperation({
            type: 'layer.zIndex',
            layer: thumbnail.layer,
            old: {
                z: event.oldIndex + 1
            },
            new: {
                z: event.newIndex + 1
            }
        });
    }
    moveThumbnail(options) {
        if (!options.oldIndex && options.element) {
            options.oldIndex = this.thumbnails.indexOf(options.element.attributes['data-id'].value);
        }
        var order = this.sortable.toArray();
        var thumbnailID = order.splice(options.oldIndex, 1)[0];
        order.splice(options.newIndex, 0, thumbnailID);
        this.sortable.sort(order);
    }
}

export {Toolbar, LayersPanel, Settings};