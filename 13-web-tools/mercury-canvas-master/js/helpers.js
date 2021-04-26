var log = require('loglevel-message-prefix')(window.log.getLogger('helpers.js'), {
    prefixes: ['level'],
    staticPrefixes: ['helpers.js'],
    separator: '/'
});
import _ from 'lodash';
import EventEmitter from 'eventemitter3';

class coords {
    constructor(options = {}) {
        _.merge(this, new EventEmitter());
        if (_.isNumber(options.identifier) || _.has(options, 'clientX')) {
            options = {
                x: options.clientX,
                y: options.clientY
            };
        }
        _.merge(this, {
            x: 0,
            y: 0,
            z: 0,
            width: 0,
            height: 0
        }, options);
    }
    add(options, fields = ['x', 'y', 'width', 'height']) {
        if (!_.isObject(options) || !_.isArray(fields)) return;

        if (_.has(options, 'x') && fields.indexOf('x') != -1) this.x += options.x;
        if (_.has(options, 'y') && fields.indexOf('y') != -1) this.y += options.y;
        if (_.has(options, 'width') && fields.indexOf('width') != -1) this.width += options.width;
        if (_.has(options, 'height') && fields.indexOf('height') != -1) this.height += options.height;
        this.emit('update');
    }
    divide(n, fields = ['x', 'y']) {
        if (!_.isNumber(n) || !_.isArray(fields)) return;

        if (fields.indexOf('x') != -1) this.x /= n;
        if (fields.indexOf('y') != -1) this.y /= n;
        if (fields.indexOf('width') != -1) this.width /= n;
        if (fields.indexOf('height') != -1) this.height /= n;
    }
    update(options) {
        _.merge(this, options);
        this.emit('update');
    }
    inside(coord, partial) {
        if (!_.isObject(coord)) return;
        if (partial) {
            var x = (this.x >= coord.x || this.x + this.width >= coord.x) && this.x <= coord.x + coord.width;
            var y = (this.y >= coord.y || this.y + this.height >= coord.y) && this.y <= coord.y + coord.height;
            return x || y;
        }
        else return this.x >= coord.x && this.x <= coord.x + coord.width && this.y >= coord.y && this.y <= coord.y + coord.height;
    }
    toCanvasSpace(mc) {
        var base = mc.layersContainer.coords;
        return new coords({
            x: this.x - base.x,
            y: this.y - base.y,
            width: this.width - base.x,
            height: this.height - base.y
        });
    }
    toLayer(mc) {
        var t0 = performance.now();
        var chosenLayer;
        _.forIn(mc.layers.list, (layer) => {
            var rgba = layer.context.getImageData(this.x - layer.coords.x, this.y - layer.coords.y, 1, 1);
            if (!layer.state.removed && layer.state.visible && this.inside(layer.coords) && (chosenLayer === undefined || layer.coords.z > chosenLayer.coords.z) && rgba.data[3] != 0) {
                chosenLayer = layer;
            }
        });
        var t1 = performance.now();
        log.debug('I spent ' + (t1 - t0) + 'ms to search for a layer under the cursor.');
        return chosenLayer;
    }
    print() {
        return _.omit(this, ['toLayer', 'toCanvasSpace', 'inside', 'update', 'divide', 'add', 'on', 'off', 'once', 'emit', 'addListener', 'eventNames', 'listeners', 'removeListener', 'removeAllListeners', 'setMaxListeners']);
    }
}

var rotatePoint = function (pivot, point, angle) {
    var x, y, dist, diffX, diffY, ca, na;

    /// get distance from center to point
    diffX = point.x - pivot.x;
    diffY = point.y - pivot.y;
    dist = Math.sqrt(diffX * diffX + diffY * diffY);

    /// find angle from pivot to corner
    ca = Math.atan2(diffY, diffX).toDeg();
    angle = angle.toDeg();

    /// get new angle based on old + current delta angle
    na = ((ca + angle) % 360).toPi();

    /// get new x and y and round it off to integer
    x = (pivot.x + dist * Math.cos(na) + 0.5) | 0;
    y = (pivot.y + dist * Math.sin(na) + 0.5) | 0;

    return { x: x, y: y };
};

export {coords, rotatePoint};