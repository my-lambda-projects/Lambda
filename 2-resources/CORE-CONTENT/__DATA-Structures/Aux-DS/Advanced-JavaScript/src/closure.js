// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2

  // version 1 √
  // let value = 0;
  // const increment = () => value += 1;
  // return increment;

  // verion 2 √
  // let value = 0;
  // const increment = i => value += 1; // Interesting that this works - why?
  // return increment;

  // version 3 √
  let value = 0;
  return () => value += 1;
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  // version 1 √
  let value = 0;
  const obj = {
    increment() {
      return value += 1;
    },
    decrement() {
      return value -= 1;
    }
  };
  return obj;

  // version 2 √
  // let value = 0;
  // return {
  //   increment() { return value += 1; },
  //   decrement() { return value -= 1; }
  // };

  // version 3 √
  // let value = 0;
  // return {
  //   increment: () => value += 1,
  //   decrement: () => value -= 1
  // };
};

const limitFunctionCallCount = ( cb, n ) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  //
  // Ely and Sarah helped me in Slack, but i do not understand what's going on here
  // I got the limitFuncCall example from the JS course with sayHi... but still not solid on my understanding

  // version 1 √
  let limit = 0;
  return ( ...args ) => {
    limit++;
    if ( n > limit ) {
      // limit++; // <--- acts the same as limit++ before if eval
      // console.log(limit);
      return cb( ...args );
    }
    return null; // <--- still not sure why we need to return null, just because the test is set up that way?
  };

  // Ely's solution √
  // let limit = 0;
  // const funcToReturn = (x, y, z) => {
  //   if (limit < n) {
  //     limit += 1;
  //     return cb(x, y, z);
  //   }
  //   return null;
  //   // return undefined;
  // };
  // return funcToReturn;

  // Sarah's solution √
  // let num = 0;
  // return function inner(...args) {
  //   num++;
  //   if (num <= n) {
  //     if (arguments.length) {
  //       return cb(...args);
  //     }
  //     return cb();
  //   }
  //   return null;
  // };
};

const cacheFunction = ( cb ) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};

  // version 1 - NOPE
  // return (x) => {
  //   // if there is already a cached cb(), then return it from
  //   // the cache instead of executing the cb again
  //   if (cache[x]) {
  //     return cache[x];
  //   }
  //   // otherwise, put the cb(x) into the cache for later use
  //   cache[x] = cb(x);
  //   return cache[x];
  // };

  // version 2 √ - Not sure why the above doesn't work and this does
  return ( x ) => {
    if ( x in cache ) {
      return cache[ x ];
    }
    return cache[ x ] = cb( x );
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount
};
