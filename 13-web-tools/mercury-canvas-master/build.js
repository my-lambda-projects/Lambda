const async = require('async');
const spawn = require('child_process').spawn;
const exec = require('child_process').exec;
const rimraf = require('rimraf');

var colors;

try {
    colors = require('colors');
}
catch (e) {
    // eslint doesn't allow empty functions :D
}

function log(e, color) {
    if (colors) {
        e = colors[color](e);
    }
    console.log(e);
}

async.waterfall([
    cb => rimraf('./assets/', {}, cb),
    cb => {
        if (process.argv.indexOf('--webpack') == -1) return cb();

        log('--- Webpack Build ---', 'yellow');
        var webpack = spawn(process.env.windir ? 'webpack.cmd' : 'webpack', ['--production', '--progress', '--optimize-minimize', '--optimize-dedupe', '--colors']);
        // var webpack = spawn(process.env.windir ? 'webpack.cmd' : 'webpack', ['--progress', '--colors']); // debug

        webpack.stdout.on('data', data => process.stdout.write(data));
        webpack.stderr.on('data', data => process.stdout.write(data));

        webpack.on('exit', () => cb());
    }
], (e) => log(e ? e : '--- Build finished ---', e ? 'red' : 'green'));