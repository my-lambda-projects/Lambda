import _ from 'lodash';

global.onmessage = (e) => {
    if (!e) return;

    var data = e.data;
    if (_.isFunction(global[data.type])) global[data.type](data);
};
global.onmessage();

global.active = (data) => {
    postMessage({
        id: data.id,
        event: 'progress',
        data: 'test'
    });
};
global.trim = (data) => {
    var pixels = new Uint8Array(data.data.pixels);
    var startIndex = data.data.startIndex;
    var width = data.data.width;
    var bound = {
        x: Infinity,
        y: Infinity,
        x2: 0,
        y2: 0,
    };
    var x, y;

    for (var i = 0, l = pixels.length; i < l; i += 4) {
        if (pixels[i + 3] === 0) continue;

        var w = i + startIndex;
        x = (w / 4) % width;
        y = ~~((w / 4) / width);

        bound.x = Math.min(x, bound.x);
        bound.y = Math.min(y, bound.y);
        bound.x2 = Math.max(x, bound.x2);
        bound.y2 = Math.max(y, bound.y2);
    }
    bound.x--;
    bound.y--;
    bound.x2 += 2;
    bound.y2 += 2;
    postMessage({
        id: data.id,
        event: 'progress',
        data: {
            bound: bound,
            startIndex: startIndex,
            width: width
        }
    });
};
