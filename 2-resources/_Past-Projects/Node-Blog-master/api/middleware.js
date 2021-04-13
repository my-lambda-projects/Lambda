/* Catches Promise rejections and passes it along to handleErrors */
exports.catchErr = fn => (req, res, next) => fn(req, res, next).catch(next)

/* Error handler */
exports.handleErr = (err, req, res, next) => {
  const errorDetails = {
    status: err.status,
    message: err.message,
    stack: err.stack || ''
  }
  res.status(err.status || 500).json(errorDetails)
}

exports.sendErr = (code, msg, res) => res.status(code).json({ error: msg })