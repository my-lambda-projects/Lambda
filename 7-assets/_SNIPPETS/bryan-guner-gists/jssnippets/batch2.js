const lastDateOfMonth = ( date = new Date() ) => {
  let d = new Date( date.getFullYear(), date.getMonth() + 1, 0 );
  return d.toISOString().split( 'T' )[ 0 ];
};

//--------------------------------


lastDateOfMonth( new Date( '2015-08-11' ) ); // '2015-08-30'

//--------------------------------


const levenshteinDistance = ( s, t ) => {
  if ( !s.length ) return t.length;
  if ( !t.length ) return s.length;
  const arr = [];
  for ( let i = 0; i <= t.length; i++ ) {
    arr[ i ] = [ i ];
    for ( let j = 1; j <= s.length; j++ ) {
      arr[ i ][ j ] =
        i === 0 ?
        j :
        Math.min(
          arr[ i - 1 ][ j ] + 1,
          arr[ i ][ j - 1 ] + 1,
          arr[ i - 1 ][ j - 1 ] + ( s[ j - 1 ] === t[ i - 1 ] ? 0 : 1 )
        );
    }
  }
  return arr[ t.length ][ s.length ];
};

//--------------------------------


levenshteinDistance( 'duck', 'dark' ); // 2

//--------------------------------


const mapKeys = ( obj, fn ) =>
  Object.keys( obj ).reduce( ( acc, k ) => {
    acc[ fn( obj[ k ], k, obj ) ] = obj[ k ];
    return acc;
  }, {} );

//--------------------------------


mapKeys( {
  a: 1,
  b: 2
}, ( val, key ) => key + val ); // { a1: 1, b2: 2 }

//--------------------------------


const mapNumRange = ( num, inMin, inMax, outMin, outMax ) =>
  ( ( num - inMin ) * ( outMax - outMin ) ) / ( inMax - inMin ) + outMin;

//--------------------------------


mapNumRange( 5, 0, 10, 0, 100 ); // 50

//--------------------------------


const mapObject = ( arr, fn ) =>
  arr.reduce( ( acc, el, i ) => {
    acc[ el ] = fn( el, i, arr );
    return acc;
  }, {} );

//--------------------------------


mapObject( [ 1, 2, 3 ], a => a * a ); // { 1: 1, 2: 4, 3: 9 }

//--------------------------------


const mapString = ( str, fn ) =>
  str
  .split( '' )
  .map( ( c, i ) => fn( c, i, str ) )
  .join( '' );

//--------------------------------


mapString( 'lorem ipsum', c => c.toUpperCase() ); // 'LOREM IPSUM'

//--------------------------------


const median = arr => {
  const mid = Math.floor( arr.length / 2 ),
    nums = [ ...arr ].sort( ( a, b ) => a - b );
  return arr.length % 2 !== 0 ? nums[ mid ] : ( nums[ mid - 1 ] + nums[ mid ] ) / 2;
};

//--------------------------------


median( [ 5, 6, 50, 1, -5 ] ); // 5

//--------------------------------


const mergeSort = arr => {
  if ( arr.length < 2 ) return arr;
  const mid = Math.floor( arr.length / 2 );
  const l = mergeSort( arr.slice( 0, mid ) );
  const r = mergeSort( arr.slice( mid, arr.length ) );
  return Array.from( {
    length: l.length + r.length
  }, () => {
    if ( !l.length ) return r.shift();
    else if ( !r.length ) return l.shift();
    else return l[ 0 ] > r[ 0 ] ? r.shift() : l.shift();
  } );
};

//--------------------------------


mergeSort( [ 5, 1, 4, 2, 3 ] ); // [1, 2, 3, 4, 5]

//--------------------------------


const mergeSortedArrays = ( a, b ) => {
  const _a = [ ...a ],
    _b = [ ...b ];
  return Array.from( {
    length: _a.length + _b.length
  }, () => {
    if ( !_a.length ) return _b.shift();
    else if ( !_b.length ) return _a.shift();
    else return _a[ 0 ] > _b[ 0 ] ? _b.shift() : _a.shift();
  } );
};

//--------------------------------


mergeSortedArrays( [ 1, 4, 5 ], [ 2, 3, 6 ] ); // [1, 2, 3, 4, 5, 6]

//--------------------------------


const mostFrequent = arr =>
  Object.entries(
    arr.reduce( ( a, v ) => {
      a[ v ] = a[ v ] ? a[ v ] + 1 : 1;
      return a;
    }, {} ) ).reduce( ( a, v ) => ( v[ 1 ] >= a[ 1 ] ? v : a ), [ null, 0 ] )[ 0 ];

//--------------------------------


mostFrequent( [ 'a', 'b', 'a', 'c', 'a', 'a', 'b' ] ); // 'a'

//--------------------------------


const objectFromPairs = arr =>
  arr.reduce( ( a, [ key, val ] ) => ( ( a[ key ] = val ), a ), {} );

//--------------------------------


objectFromPairs( [
  [ 'a', 1 ],
  [ 'b', 2 ]
] ); // {a: 1, b: 2}

//--------------------------------


const omit = ( obj, arr ) =>
  Object.keys( obj )
  .filter( k => !arr.includes( k ) )
  .reduce( ( acc, key ) => ( ( acc[ key ] = obj[ key ] ), acc ), {} );

//--------------------------------


omit( {
  a: 1,
  b: '2',
  c: 3
}, [ 'b' ] ); // { 'a': 1, 'c': 3 }

//--------------------------------


const omitBy = ( obj, fn ) =>
  Object.keys( obj )
  .filter( k => !fn( obj[ k ], k ) )
  .reduce( ( acc, key ) => ( ( acc[ key ] = obj[ key ] ), acc ), {} );

//--------------------------------


omitBy( {
  a: 1,
  b: '2',
  c: 3
}, x => typeof x === 'number' ); // { b: '2' }

//--------------------------------


const palindrome = str => {
  const s = str.toLowerCase().replace( /[\W_]/g, '' );
  return s === [ ...s ].reverse().join( '' );
};

//--------------------------------


palindrome( 'taco cat' ); // true

//--------------------------------


const percentile = ( arr, val ) =>
  ( 100 *
    arr.reduce(
      ( acc, v ) => acc + ( v < val ? 1 : 0 ) + ( v === val ? 0.5 : 0 ),
      0
    ) ) /
  arr.length;

//--------------------------------


percentile( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 6 ); // 55

//--------------------------------


const pick = ( obj, arr ) =>
  arr.reduce( ( acc, curr ) => ( curr in obj && ( acc[ curr ] = obj[ curr ] ), acc ), {} );

//--------------------------------


pick( {
  a: 1,
  b: '2',
  c: 3
}, [ 'a', 'c' ] ); // { 'a': 1, 'c': 3 }

//--------------------------------


const powerset = arr =>
  arr.reduce( ( a, v ) => a.concat( a.map( r => [ v ].concat( r ) ) ), [
    []
  ] );

//--------------------------------


powerset( [ 1, 2 ] ); // [[], [1], [2], [2, 1]]

//--------------------------------


const prefersDarkColorScheme = () =>
  window &&
  window.matchMedia &&
  window.matchMedia( '(prefers-color-scheme: dark)' ).matches;

//--------------------------------


prefersDarkColorScheme(); // true

//--------------------------------


const prefersLightColorScheme = () =>
  window &&
  window.matchMedia &&
  window.matchMedia( '(prefers-color-scheme: light)' ).matches;

//--------------------------------


prefersLightColorScheme(); // true

//--------------------------------


const primeFactors = n => {
  let a = [],
    f = 2;
  while ( n > 1 ) {
    if ( n % f === 0 ) {
      a.push( f );
      n /= f;
    } else {
      f++;
    }
  }
  return a;
};

//--------------------------------


primeFactors( 147 ); // [3, 7, 7]

//--------------------------------


const primes = num => {
  let arr = Array.from( {
      length: num - 1
    } ).map( ( x, i ) => i + 2 ),
    sqroot = Math.floor( Math.sqrt( num ) ),
    numsTillSqroot = Array.from( {
      length: sqroot - 1
    } ).map( ( x, i ) => i + 2 );
  numsTillSqroot.forEach( x => ( arr = arr.filter( y => y % x !== 0 || y === x ) ) );
  return arr;
};

//--------------------------------


primes( 10 ); // [2, 3, 5, 7]

//--------------------------------


const quickSort = arr => {
  const a = [ ...arr ];
  if ( a.length < 2 ) return a;
  const pivotIndex = Math.floor( arr.length / 2 );
  const pivot = a[ pivotIndex ];
  const [ lo, hi ] = a.reduce(
    ( acc, val, i ) => {
      if ( val < pivot || ( val === pivot && i != pivotIndex ) ) {
        acc[ 0 ].push( val );
      } else if ( val > pivot ) {
        acc[ 1 ].push( val );
      }
      return acc;
    },
    [
      [],
      []
    ]
  );
  return [ ...quickSort( lo ), pivot, ...quickSort( hi ) ];
};

//--------------------------------


quickSort( [ 1, 6, 1, 5, 3, 2, 1, 4 ] ); // [1, 1, 1, 2, 3, 4, 5, 6]

//--------------------------------


const randomAlphaNumeric = length => {
  let s = '';
  Array.from( {
    length
  } ).some( () => {
    s += Math.random().toString( 36 ).slice( 2 );
    return s.length >= length;
  } );
  return s.slice( 0, length );
};

//--------------------------------


randomAlphaNumeric( 5 ); // '0afad'

//--------------------------------


const randomHexColorCode = () => {
  let n = ( Math.random() * 0xfffff * 1000000 ).toString( 16 );
  return '#' + n.slice( 0, 6 );
};

//--------------------------------


randomHexColorCode(); // '#e34155'

//--------------------------------


const randomIntArrayInRange = ( min, max, n = 1 ) =>
  Array.from( {
      length: n
    },
    () => Math.floor( Math.random() * ( max - min + 1 ) ) + min
  );

//--------------------------------


randomIntArrayInRange( 12, 35, 10 ); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]

//--------------------------------


const randomIntegerInRange = ( min, max ) =>
  Math.floor( Math.random() * ( max - min + 1 ) ) + min;

//--------------------------------


randomIntegerInRange( 0, 5 ); // 2

//--------------------------------


const redirect = ( url, asLink = true ) =>
  asLink ? ( window.location.href = url ) : window.location.replace( url );

//--------------------------------


redirect( 'https://google.com' );

//--------------------------------



const remove = ( arr, func ) =>
  Array.isArray( arr ) ?
  arr.filter( func ).reduce( ( acc, val ) => {
    arr.splice( arr.indexOf( val ), 1 );
    return acc.concat( val );
  }, [] ) : [];

//--------------------------------


remove( [ 1, 2, 3, 4 ], n => n % 2 === 0 ); // [2, 4]

//--------------------------------


const removeAccents = str =>
  str.normalize( 'NFD' ).replace( /[\u0300-\u036f]/g, '' );

//--------------------------------


removeAccents( 'Antoine de Saint-Exupéry' ); // 'Antoine de Saint-Exupery'

//--------------------------------


const requireUncached = module => {
  delete require.cache[ require.resolve( module ) ];
  return require( module );
};

//--------------------------------


const fs = requireUncached( 'fs' ); // 'fs' will be loaded fresh every time

//--------------------------------


const round = ( n, decimals = 0 ) =>
  Number( `${Math.round(`${n}e${decimals}`)}e-${decimals}` );

//--------------------------------


round( 1.005, 2 ); // 1.01

//--------------------------------


const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if ( c > 0 ) {
    window.requestAnimationFrame( scrollToTop );
    window.scrollTo( 0, c - c / 8 );
  }
};

//--------------------------------


scrollToTop(); // Smooth-scrolls to the top of the page

//--------------------------------


const sdbm = str => {
  let arr = str.split( '' );
  return arr.reduce(
    ( hashCode, currentVal ) =>
    ( hashCode =
      currentVal.charCodeAt( 0 ) +
      ( hashCode << 6 ) +
      ( hashCode << 16 ) -
      hashCode ),
    0
  );
};

//--------------------------------


sdbm( 'name' ); // -3521204949

//--------------------------------


const selectionSort = arr => {
  const a = [ ...arr ];
  for ( let i = 0; i < a.length; i++ ) {
    const min = a
      .slice( i + 1 )
      .reduce( ( acc, val, j ) => ( val < a[ acc ] ? j + i + 1 : acc ), i );
    if ( min !== i )[ a[ i ], a[ min ] ] = [ a[ min ], a[ i ] ];
  }
  return a;
};

//--------------------------------


selectionSort( [ 5, 1, 4, 2, 3 ] ); // [1, 2, 3, 4, 5]

//--------------------------------


const serializeCookie = ( name, val ) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

//--------------------------------


serializeCookie( 'foo', 'bar' ); // 'foo=bar'

//--------------------------------


const slugify = str =>
  str
  .toLowerCase()
  .trim()
  .replace( /[^\w\s-]/g, '' )
  .replace( /[\s_-]+/g, '-' )
  .replace( /^-+|-+$/g, '' );

//--------------------------------


slugify( 'Hello World!' ); // 'hello-world'

//--------------------------------


const sortCharactersInString = str => [ ...str ].sort( ( a, b ) => a.localeCompare( b ) ).join( '' );

//--------------------------------


sortCharactersInString( 'cabbage' ); // 'aabbceg'

//--------------------------------


const sortedIndexBy = ( arr, n, fn ) => {
  const isDescending = fn( arr[ 0 ] ) > fn( arr[ arr.length - 1 ] );
  const val = fn( n );
  const index = arr.findIndex( el =>
    isDescending ? val >= fn( el ) : val <= fn( el )
  );
  return index === -1 ? arr.length : index;
};

//--------------------------------


sortedIndexBy( [ {
  x: 4
}, {
  x: 5
} ], {
  x: 4
}, o => o.x ); // 0

//--------------------------------


const sortedLastIndex = ( arr, n ) => {
  const isDescending = arr[ 0 ] > arr[ arr.length - 1 ];
  const index = arr
    .reverse()
    .findIndex( el => ( isDescending ? n <= el : n >= el ) );
  return index === -1 ? 0 : arr.length - index;
};

//--------------------------------


sortedLastIndex( [ 10, 20, 30, 30, 40 ], 30 ); // 4

//--------------------------------


const sortedLastIndexBy = ( arr, n, fn ) => {
  const isDescending = fn( arr[ 0 ] ) > fn( arr[ arr.length - 1 ] );
  const val = fn( n );
  const index = arr
    .map( fn )
    .reverse()
    .findIndex( el => ( isDescending ? val <= el : val >= el ) );
  return index === -1 ? 0 : arr.length - index;
};

//--------------------------------


sortedLastIndexBy( [ {
  x: 4
}, {
  x: 5
} ], {
  x: 4
}, o => o.x ); // 1

//--------------------------------


const stringPermutations = str => {
  if ( str.length <= 2 ) return str.length === 2 ? [ str, str[ 1 ] + str[ 0 ] ] : [ str ];
  return str
    .split( '' )
    .reduce(
      ( acc, letter, i ) =>
      acc.concat(
        stringPermutations( str.slice( 0, i ) + str.slice( i + 1 ) ).map(
          val => letter + val
        )
      ),
      []
    );
};
