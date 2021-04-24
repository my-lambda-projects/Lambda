const curry = fn => (...args1) => {
  if (args1.length === fn.length) {
    return fn(...args1);
  }

  return (...args2) => {
    const args = [...args1, ...args2];

    if (args.length >= fn.length) {
      return fn(...args);
    }

    return curry(fn)(...args);
  };
};
