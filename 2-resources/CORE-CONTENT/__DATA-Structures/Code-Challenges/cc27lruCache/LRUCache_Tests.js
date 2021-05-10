const LRUCache = require( './lruCache.js' );

const cache = new LRUCache( 3 );
cache.set( 'item1', 'a' );
cache.set( 'item2', 'b' );
cache.set( 'item3', 'c' );
// cache.set('item2', 'd');
//
// const item1 = cache.get('item1');
// if (item1 !== 'a') {
//   throw new Error(`expected item1 to be a, but got ${item1}`);
// }

cache.set( 'item4', 'd' );

const item3 = cache.get( 'item3' );
if ( item3 !== 'c' ) {
  throw new Error( `expected item3 to be c, but got ${item3}` );
}

const item2 = cache.get( 'item2' );
if ( item2 !== 'b' ) {
  throw new Error( `expected item2 to be b, but got ${item2}` );
}

const item1 = cache.get( 'item1' );
if ( item1 !== null ) {
  throw new Error( `expected item1 to be null, but got ${item1}` );
}

cache.set( 'item5', 'e' );
const item4 = cache.get( 'item4' );
if ( item4 !== null ) {
  throw new Error( `expected item4 to be null, but got ${item1}` );
}
