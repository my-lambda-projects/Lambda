var log = require('loglevel-message-prefix')(window.log.getLogger('state.js'), {
    prefixes: ['level'],
    staticPrefixes: ['state.js'],
    separator: '/'
});
import _ from 'lodash';

class State {
    constructor() {
        this.local = localStorage.getItem('mercuryCanvas');
        try {
            this.local = JSON.parse(this.local);
        }
        catch (e) {
            log.warn('Local settings are corrupted');
            this.local = {};
        }
        var saveDefaults;
        if (!this.local) {
            this.local = {};
            saveDefaults = true;
        }
        _.merge(this, {
            debugRotate: false,
            bigImageSizeMb: 1,
            downloadName: 'Picture.png',
            background: '#fff',
            strokeColor: '#000',
            workers: 1,
            workerMultiplier: 1,
            lineWidth: 20,
            handlerSize: 18,
            menus: [],
            activeTools: [],
            moveTool: {
                autoSelect: true
            },
            eyedropper: {
                gridSize: 9,
                gridSpace: 30
            },
            snap: {
                menuDistance: 40,
                distance: 20,
                toStartPosition: true,
                toWindowMargin: true,
                toLayer: false
            }
        }, this.local);
        this.workers = 1;
        this.workerMultiplier = 1;
        if (saveDefaults) this.save();
    }
    save() {
        var temp = _.clone(this);
        delete temp.activeTools;
        delete temp.menus;
        delete temp.local;

        var dif = _.reduce(temp, (result, value, key) => _.isEqual(value, this.local[key]) ? result : result.concat(key), []);

        if (dif.length != 0) {
            localStorage.setItem('mercuryCanvas', JSON.stringify(temp));
        }
    }
}
export default State;