const staticModule = require('static-module');
const quote = require('quote-stream');
const through = require('through2');
const fs = require('fs');
const path = require('path');
const resolve = require('resolve');

module.exports = (file, opts) => {
  if (/\.json$/.test(file)) return through();

  function resolver(p) {
    return resolve.sync(p, { basedir: path.dirname(file) });
  }
  const vars = {
    __filename: file,
    __dirname: path.dirname(file),
    require: { resolve: resolver },
  };
  if (!opts) opts = {};
  if (opts.vars)
    Object.keys(opts.vars).forEach(key => {
      vars[key] = opts.vars[key];
    });

  const sm = staticModule(
    {
      fs: {
        readFileSync,
        readFile,
        readdirSync,
        readdir,
      },
    },
    {
      vars,
      varModules: { path },
      parserOpts: opts && opts.parserOpts,
      sourceMap: opts && (opts.sourceMap || (opts._flags && opts._flags.debug)),
      inputFilename: file,
    }
  );
  return sm;

  function readFile(file, enc, cb) {
    if (typeof enc === 'function') {
      cb = enc;
      enc = null;
    }
    if (enc && typeof enc === 'object' && enc.encoding) {
      enc = enc.encoding;
    }
    let isBuffer = false;
    if (enc === null || enc === undefined) {
      isBuffer = true;
      enc = 'base64';
    }

    const stream = through(write, end);
    stream.push(`process.nextTick(function(){(${cb})(null,`);
    if (isBuffer) stream.push('Buffer(');

    const s = fs.createReadStream(file, { encoding: enc });
    s.on('error', err => {
      sm.emit('error', err);
    });
    return s.pipe(quote()).pipe(stream);

    function write(buf, enc, next) {
      this.push(buf);
      next();
    }
    function end(next) {
      if (isBuffer) this.push(',"base64")');
      this.push(')})');
      this.push(null);
      sm.emit('file', file);
      next();
    }
  }

  function readFileSync(file, enc) {
    let isBuffer = false;
    if (enc === null || enc === undefined) {
      isBuffer = true;
      enc = 'base64';
    }
    if (enc && typeof enc === 'object' && enc.encoding) {
      enc = enc.encoding;
    }
    const stream = fs
      .createReadStream(file, { encoding: enc })
      .on('error', err => {
        sm.emit('error', err);
      })
      .pipe(quote())
      .pipe(through(write, end));
    if (isBuffer) {
      stream.push('Buffer(');
    }
    return stream;

    function write(buf, enc, next) {
      this.push(buf);
      next();
    }
    function end(next) {
      if (isBuffer) this.push(',"base64")');
      this.push(null);
      sm.emit('file', file);
      next();
    }
  }

  function readdir(path, cb) {
    const stream = through(write, end);

    stream.push(`process.nextTick(function(){(${cb})(null,`);
    fs.readdir(path, (err, src) => {
      if (err) {
        stream.emit('error', err);
        return;
      }
      stream.push(JSON.stringify(src));
      stream.end(')})');
    });
    return stream;

    function write(buf, enc, next) {
      this.push(buf);
      next();
    }
    function end(next) {
      this.push(null);
      next();
    }
  }

  function readdirSync(path) {
    const stream = through(write, end);
    fs.readdir(path, (err, src) => {
      if (err) {
        stream.emit('error', err);
        return;
      }
      stream.end(JSON.stringify(src));
    });
    return stream;

    function write(buf, enc, next) {
      this.push(buf);
      next();
    }
    function end(next) {
      this.push(null);
      next();
    }
  }
};
