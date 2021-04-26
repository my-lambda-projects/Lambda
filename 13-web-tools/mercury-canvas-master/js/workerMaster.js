var log = require('loglevel-message-prefix')(window.log.getLogger('workerMaster.js'), {
    prefixes: ['level'],
    staticPrefixes: ['workerMaster.js'],
    separator: '/'
});
import _ from 'lodash';
var MWorker = window.MWorker = require('worker-loader!./worker.js');

class MercuryWorker {
    constructor() {
        this.worker = new MWorker();

        this.worker.onmessage = this.receive.bind(this);
        this.worker.onerror = e => log.error('Worker Error:', e);
        this.queue = {};
        this.addAction({
            id: 'init',
            type: 'active'
        });
        this.done = true;
        this.id = _.uniqueId('worker_');

        this.receive = this.receive.bind(this);
        this.processQueue();
    }
    send(data, buffer) {
        if (buffer) {
            this.worker.postMessage({
                type: data.type,
                data: data.data,
                id: data.id
            }, [buffer]);
        }
        else {
            this.worker.postMessage({
                type: data.type,
                data: data.data,
                id: data.id
            });
        }
        this.done = false;
    }
    receive(e) {
        if (!e || !e.data || !_.isObject(e.data)) return false;
        var data = e.data;

        if (_.isString(data.event) && _.isString(data.id)) {
            if (data.event == 'progress') {
                this.done = true;

                if (data.id == 'init') {
                    log.info('Worker ready');
                }
                else {
                    this.queue[data.id].progress(data);
                }

                delete this.queue[data.id];
                this.processQueue();
            }
            if (data.event == 'log') log.info(this.id + ':', data.data);
        }
    }
    addAction(data) {
        data.type = _.isString(data.type) ? data.type : '';
        data.priority = _.isNumber(data.priority) ? data.priority : 0;
        data.progress = _.isFunction(data.progress) ? data.progress : () => { };
        data.id = _.isString(data.id) ? data.id : _.uniqueId('actionPart_');

        this.queue[data.id] = data;
        this.processQueue();
    }
    processQueue() {
        if (!this.done) return;

        var max = 0, data;
        _.forIn(this.queue, (task) => {
            max = Math.max(task.priority, max);
            if (max == task.priority) data = task;
        });
        if (data) {
            this.send(data);
        }
    }
}
class WorkerMaster {
    constructor(mc) {
        this.mercuryCanvas = mc;
        this.workers = [];
        this.queue = {};
        this.results = {};

        if (typeof window.Worker == 'function') {
            let numberOfWorkers = navigator.hardwareConcurrency > 0 ? navigator.hardwareConcurrency : mc.state.workers;
            for (let i = 0; i < numberOfWorkers; i++) {
                let worker = new MercuryWorker();
                this.workers.push(worker);
            }
        }
    }
    progress(task, data) {
        var res = this.results[task.id];
        data.data.id = parseInt(data.id.slice(-2).replace('_', ''));
        res.push(data.data);

        if (_.isFunction(task.originalProgress)) task.originalProgress(data);

        if (res.length == this.queue[task.id].parts.length) {
            var temp = {};
            if (task.type == 'trim') {
                var max = {
                    x: 0,
                    y: 0
                };
                var min = {
                    x: Infinity,
                    y: Infinity
                };
                // var mc = this.mercuryCanvas;
                // var x = mc.layers.list[0].coords.x;
                // var y = mc.layers.list[0].coords.y;
                // var colors = ['rgba(255, 0, 0, 0.5)', 'rgba(255, 128, 0, 0.8)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 255, 255, 0.8)', 'rgba(0, 0, 255, 0.5)', 'rgba(255, 0, 255, 0.8)', 'rgba(0, 0, 0, 0.5)', 'rgba(255, 255, 0, 0.8)'];
                // var i = 0;
                res = _.sortBy(res, ['id']);
                _.each(res, (part) => {
                    min.x = Math.min(min.x, part.bound.x);
                    min.y = Math.min(min.y, part.bound.y);
                    max.x = Math.max(max.x, part.bound.x2);
                    max.y = Math.max(max.y, part.bound.y2);

                    // mc.base.context.fillStyle = colors[i++];
                    // i = i % colors.length;
                    // mc.base.context.fillRect(x, y + part.start.y, part.width, part.end.y - part.start.y);
                    // console.log('%c actionPart_' + part.id + ', i: ' + i + '\nbound: \n' + JSON.stringify(part.bound, null, 4) + '\nstart:\n' + JSON.stringify(part.start, null, 4) + '\nend:\n' + JSON.stringify(part.end, null, 4), 'color: ' + colors[i].slice(0, colors[i].indexOf('0.')) + '1)');
                    // mc.base.context.fillStyle = colors[i++];
                    // mc.base.context.fillRect(x + part.bound.x, y + part.bound.y, part.bound.x2 - part.bound.x, part.bound.y2 - part.bound.y);
                    // mc.base.element.css('z-index', 1005);
                });
                temp = {
                    x: min.x,
                    y: min.y,
                    x2: max.x,
                    y2: max.y
                };
            }
            if (_.isFunction(task.finish)) task.finish(temp);
        }
    }
    addAction(task) {
        task.type = _.isString(task.type) ? task.type : '';
        task.originalProgress = _.isFunction(task.progress) ? task.progress : () => { };
        task.finish = _.isFunction(task.finish) ? task.finish : () => { };

        task.progress = this.progress.bind(this, task);

        task.id = _.uniqueId('action_');
        this.queue[task.id] = task;
        this.results[task.id] = [];
        this.splitToWorkers(task);
    }
    splitToWorkers(data) {
        if (data.type == 'trim') {
            data.parts = [];
            var pixels = data.data.data;
            var last = 0;
            var workerPart = Math.round(pixels.length / this.workers.length / this.mercuryCanvas.state.workerMultiplier);
            for (var i = 0; i < this.workers.length * this.mercuryCanvas.state.workerMultiplier; i++) {
                var buffer = pixels.slice(workerPart * i, workerPart * (i + 1)).buffer;
                var temp = {
                    width: data.data.width,
                    pixels: buffer,
                    startIndex: last
                };
                last += buffer.byteLength;
                data.parts.push(temp);
            }
        }
        _.each(data.parts, (part, index) => {
            this.workers[index % this.workers.length].addAction({
                type: 'trim',
                taskID: data.id,
                data: data.parts[index],
                progress: data.progress,
                finish: data.finish
            });
        });
    }
}
export default WorkerMaster;