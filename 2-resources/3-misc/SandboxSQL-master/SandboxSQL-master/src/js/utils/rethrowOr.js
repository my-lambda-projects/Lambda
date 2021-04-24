module.exports = (cb) => {
  return (err) => {
    if (err) {
      throw err;
    }
    cb && cb();
  };
};
