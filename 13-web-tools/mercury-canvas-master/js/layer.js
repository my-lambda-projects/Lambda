var log = require('loglevel-message-prefix')(window.log.getLogger('layer.js'), {
    prefixes: ['level'],
    staticPrefixes: ['layer.js'],
    separator: '/'
});
import _ from 'lodash';
import classnames from 'classnames';
import {rotatePoint} from './helpers.js';
import {Matrix} from 'transformation-matrix-js';

class layerCoords {
    constructor(options = {}, layer) {
        var defaults = {
            x: 0,
            y: 0,
            z: layer.mercuryCanvas.session.zIndex,
            width: 0,
            height: 0,
            angle: 0,
            savedAngle: 0
        };
        _.merge(this, defaults, _.pick(options, Object.keys(defaults)));

        this.matrix = new Matrix();
        this.matrix.translate(this.x, this.y);
        this.layer = layer;
    }
    update(options, updateCSS = true) {
        if (_.isObject(options)) {
            if (_.has(options, 'x')) {
                options.x = parseInt(options.x);
            }
            if (_.has(options, 'y')) {
                options.y = parseInt(options.y);
            }
            var oldZ = this.z;
            if (_.has(options, 'angle')) {
                this.matrix.reset();
                if (_.has(options, 'pivot')) this.matrix.translate(options.pivot.x, options.pivot.y);
                options.angle = options.angle.toDeg() % 360;
                this.matrix.rotateDeg(options.angle);
                this.angle = options.angle.toPi();
                if (_.has(options, 'pivot')) this.matrix.translate(-options.pivot.x, -options.pivot.y);
                this.matrix.translate(this.x, this.y);
            }
            if (options.scale) {
                this.matrix.reset();

                if (_.has(options, 'width')) {
                    this.matrix.a = 1;
                    this.matrix.scaleX(options.scaleX);
                    this.width = options.width;
                }
                if (_.has(options, 'height')) {
                    this.matrix.d = 1;
                    this.matrix.scaleY(options.scaleY);
                    this.height = options.height;
                }
                if (_.has(options, 'x')) {
                    if (this.matrix.a != 0 && this.matrix.d != 0) this.matrix.translateX(options.x / options.scaleX);
                    this.x = options.x;
                }
                if (_.has(options, 'y')) {
                    if (this.matrix.a != 0 && this.matrix.d != 0) this.matrix.translateY(options.y / options.scaleY);
                    this.y = options.y;
                }
            }
            else {
                if (_.has(options, 'width')) {
                    this.width = options.width;
                }
                if (_.has(options, 'height')) {
                    this.height = options.height;
                }
                if (_.has(options, 'x')) {
                    if (this.matrix.a != 0 && this.matrix.d != 0) this.matrix.translateX((options.x - this.x) / this.matrix.a);
                    this.x = options.x;
                }
                if (_.has(options, 'y')) {
                    if (this.matrix.a != 0 && this.matrix.d != 0) this.matrix.translateY((options.y - this.y) / this.matrix.d);
                    this.y = options.y;
                }
            }
            if (_.has(options, 'z')) this.z = options.z;
        }
        if (updateCSS) this.updateCSS();
        if (options.z && options.z != oldZ) {
            this.layer.mercuryCanvas.emit('layer.z.update', {
                z: options.z,
                layer: this.layer,
                session: options.session
            });
        }
    }
    add(options) {
        if (_.isObject(options)) {
            if (_.has(options, 'x')) {
                this.matrix.translateX(options.x);
                this.x += options.x;
            }
            if (_.has(options, 'y')) {
                this.matrix.translateY(options.y);
                this.y += options.y;
            }
            if (_.has(options, 'width')) this.width += options.width;
            if (_.has(options, 'height')) this.height += options.height;
        }
        this.updateCSS();
    }
    updateMatrix() {

    }
    updateAttr() {
        this.layer.element.attr('width', Math.round(this.width));
        this.layer.element.attr('height', Math.round(this.height));
    }
    updateCSS() {
        this.layer.element.css({
            transform: this.matrix.toCSS(),
            zIndex: this.z
        });
    }
}

class Layer {
    constructor(options) {
        _.merge(this, {
            options: {
                background: 'rgba(0, 0, 0, 0)'
            },
            state: {
                removable: true,
                visible: true,
            },
            name: 'Layer ' + options.parent.session.zIndex
        }, options);

        this.mercuryCanvas = this.parent;
        this.parent = this.parent.layersContainer;

        this.element = $('<canvas>', {
            class: classnames('layer', this.name),
            css: {
                zIndex: this.name == 'base' ? 0 : this.mercuryCanvas.session.zIndex
            }
        }).appendTo(this.parent);

        this.coords = new layerCoords(options, this);
        this.canvas = this.element[0];
        this.context = this.canvas.getContext('2d');

        if (this.name == 'base' || this.name == 'overlay') {
            if (this.name == 'base') this.coords.z = 0;
            return;
        }

        if (this.image) {
            this.draw(this.image, {
                resize: true
            });
            delete this.image;
        }

        this.toggleVisibility = this.toggleVisibility.bind(this);

        this.mercuryCanvas.emit('layer.new', this);
    }
    toggleVisibility(e) {
        if (_.isUndefined(e)) {
            if (this.state.visible) this.hide();
            else this.show();
        }
        else if (e) this.show();
        else this.hide();
    }
    hide(e) {
        this.state.visible = false;
        this.element.hide();
        if (!e) this.mercuryCanvas.emit('layer.update', this);
    }
    show(e) {
        this.state.visible = true;
        this.element.show();
        if (!e) this.mercuryCanvas.emit('layer.update', this);
    }
    move(options) {
        this.coords.update({
            x: options.x,
            y: options.y
        });
    }
    applyRotation(pivot) {
        if (!pivot) return;
        var angle = this.coords.angle;
        this.clear();
        var c1, c2, c3, c4;

        c1 = rotatePoint(pivot, {
            x: this.coords.x,
            y: this.coords.y
        }, angle);
        c2 = rotatePoint(pivot, {
            x: this.coords.x + this.coords.width,
            y: this.coords.y
        }, angle);
        c3 = rotatePoint(pivot, {
            x: this.coords.x + this.coords.width,
            y: this.coords.y + this.coords.height
        }, angle);
        c4 = rotatePoint(pivot, {
            x: this.coords.x,
            y: this.coords.y + this.coords.height
        }, angle);

        var bounds = {
            x: Math.min(c1.x, c2.x, c3.x, c4.x),
            y: Math.min(c1.y, c2.y, c3.y, c4.y),
            x2: Math.max(c1.x, c2.x, c3.x, c4.x),
            y2: Math.max(c1.y, c2.y, c3.y, c4.y)
        };

        var movement = {
            x: this.coords.x - bounds.x,
            y: this.coords.y - bounds.y
        };
        var draw = {
            x: this.original.image.width / 2 + movement.x,
            y: this.original.image.height / 2 + movement.y
        };

        this.resize({
            width: bounds.x2 - bounds.x,
            height: bounds.y2 - bounds.y,
            update: false
        });
        this.coords.update({
            x: bounds.x,
            y: bounds.y
        }, false);

        this.context.save();
        this.context.translate(draw.x, draw.y);
        this.context.rotate(angle);
        this.context.drawImage(this.original.image, movement.x - draw.x, movement.y - draw.y);
        this.context.restore();

        this.coords.pivot = pivot;
        this.coords.savedAngle = this.coords.angle;
        this.coords.update({
            angle: 0
        });
        this.trim();
    }
    applyScale() {
        this.coords.matrix.a = this.coords.matrix.d = 1;

        this.coords.updateCSS();
        this.coords.updateAttr();
        this.context.drawImage(this.original.image, 0, 0, this.coords.width, this.coords.height);

        this.mercuryCanvas.emit('layer.update', this);
    }
    select(type) {
        this.selected = true;
        this.mercuryCanvas.session.selectedLayers.select(this, type);
        this.mercuryCanvas.emit('layer.select', this);
    }
    deselect() {
        this.selected = false;
        this.mercuryCanvas.emit('layer.deselect', this);
    }
    updateOriginal(callback = () => { }) {
        this.canvas.toBlob((blob) => {
            var url = URL.createObjectURL(blob);
            var image = new Image();
            image.onload = () => {
                this.original = {
                    width: image.width,
                    height: image.height,
                    image: image,
                    url: url
                };
                callback();
                this.mercuryCanvas.emit('layer.update', this);
            };
            image.src = url;
        });
    }
    resize(options) {
        if (!_.isObject(options) || !_.isNumber(options.width) || !_.isNumber(options.height)) return;
        var ctx = this.context;
        ctx.save();
        this.element.attr({
            width: options.width,
            height: options.height
        });
        this.coords.update({
            width: options.width,
            height: options.height
        }, options.update);

        if (_.has(this.options, 'background')) {
            ctx.fillStyle = this.options.background;
            ctx.rect(0, 0, options.width, options.height);
            ctx.fill();
        }
        ctx.restore();
    }
    trim(options) {
        if (_.isObject(options) && ['x', 'y', 'x2', 'y2'].every(k => k in options)) {
            this.trimToCoords(options);
        }
        else {
            this.mercuryCanvas.workerMaster.addAction({
                type: 'trim',
                data: this.context.getImageData(0, 0, this.coords.width, this.coords.height),
                finish: (e) => {
                    e.updateOriginal = options && options.updateOriginal === false ? false : true;
                    e.callback = options && options.callback ? options.callback : () => { };
                    this.trimToCoords(e);
                }
            });
        }
    }
    trimToCoords(bound) {
        var t0 = performance.now();

        this.coords.update({
            x: this.coords.x + bound.x,
            y: this.coords.y + bound.y,
            width: bound.x2 - bound.x,
            height: bound.y2 - bound.y
        });
        if (bound.x == Infinity || bound.y == Infinity) {
            this.state.dirty = true;
            this.clear();
            return;
        }
        var trimmed = this.context.getImageData(bound.x, bound.y, this.coords.width, this.coords.height);

        this.element.attr({
            width: this.coords.width,
            height: this.coords.height
        });
        this.context.putImageData(trimmed, 0, 0);
        this.mercuryCanvas.emit('layer.update', this);
        this.mercuryCanvas.emit('layer.trim', this);
        var t1 = performance.now();
        log.debug('I spent ' + (t1 - t0) + 'ms to trim the layer');
        if (bound.updateOriginal) this.updateOriginal(bound.callback);
    }
    draw(image, options = {}) {
        if (options.resize) {
            if (_.isUndefined(options.update)) options.update = true;
            this.resize({
                width: image.width,
                height: image.height
            }, options.update);
        }
        this.context.drawImage(image, 0, 0);
        this.state.dirty = true;
        if (!options.update) return;
        this.updateOriginal();
        this.mercuryCanvas.emit('layer.update', this);
    }
    clear(update = true) {
        if (!this.state.dirty) return;

        this.state.dirty = false;
        this.context.clearRect(0, 0, this.element.attr('width'), this.element.attr('height'));
        if (update) this.mercuryCanvas.emit('layer.update', this);
    }
    copyTo(targetLayer, trimOptions) {
        targetLayer.resize(this.coords);
        targetLayer.context.drawImage(this.element[0], 0, 0);
        targetLayer.state.dirty = true;
        if (this.name == 'overlay') targetLayer.trim(trimOptions);
        targetLayer.updateOriginal();
        this.mercuryCanvas.emit('layer.update', targetLayer);
    }
    delete() {
        this.element.remove();
        this.mercuryCanvas.emit('layer.delete', this);
    }
    remove(e) {
        if (this.state.removable === false) return;

        if (!e) this.mercuryCanvas.session.addOperation({
            type: 'layer.remove',
            layer: this
        });
        _.remove(this.mercuryCanvas.session.selectedLayers.list, this);
        this.state.removed = true;
        this.hide(true);
        this.mercuryCanvas.emit('layer.remove', this);
    }
    restore() {
        if (!this.state.removed) return;
        this.state.removed = false;
        this.show(true);
        this.mercuryCanvas.emit('layer.restore', this);
    }
}

export default Layer;