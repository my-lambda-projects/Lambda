
export function memoize( fn, hasher ) {
  return function memoize() {
    if ( typeof memoize.cache !== "object" ) {
      memoize.cache = {};
    }
    const args = [];
    for ( let i = 0; i < arguments.length; i++ ) {
      args[ i ] = arguments[ i ];
    }
    const hash = hasher ? hasher( args ) : JSON.stringify( args );
    if ( !( hash in memoize.cache ) ) {
      memoize.cache[ hash ] = fn.apply( fn, args );
    }
    return memoize.cache[ hash ];
  };
}
export function memoizeCompare( fn, isEqual ) {
  const memoize = function memoize() {
    const args = [];
    for ( let i = 0; i < arguments.length; i++ ) {
      args[ i ] = arguments[ i ];
    }
    for ( let c = 0; c < memoize.cache.length; c++ ) {
      const cached = memoize.cache[ c ];
      if ( isEqual( args, cached.args ) ) {

          return cached.res;
      }
    }
    const res = fn.apply( fn, args );
    memoize.cache.unshift( {
      args,
      res
    } );
    return res;
  };
  memoize.cache = [];
  return memoize;
}
export function maxArgumentCount( fn ) {
  return Object.keys( fn.signatures || {} ).reduce( function ( args, signature ) {
    const count = ( signature.match( /,/g ) || [] ).length + 1;
    return Math.max( args, count );
  }, -1 );
}
