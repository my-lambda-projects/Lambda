// 23. Creating a new Set
let newSet = new Set();

// 24. Adding new elements to a set
newSet.add( 1 ); // Set[1]
newSet.add( 'text' ); // Set[1, "text"]

// 25. Check if element is in set
newSet.has( 1 ); // true

// 24. Check size of set
console.log( newSet.size ); // Results: 2

// 26. Delete element from set
newSet.delete( 1 ); // Set["text"]

// 27. Set Operations: isSuperSet
function isSuperset( set, subset ) {
  for ( let elem of subset ) {
    if ( !set.has( elem ) ) {
      return false;
    }
  }
  return true;
}
// 28. Set Operations: union
function union( setA, setB ) {
  let _union = new Set( setA );
  for ( let elem of setB ) {
    _union.add( elem );
  }
  return _union;
}

// 29. Set Operations: intersection
function intersection( setA, setB ) {
  let _intersection = new Set();
  for ( let elem of setB ) {
    if ( setA.has( elem ) ) {
      _intersection.add( elem );
    }
  }
  return _intersection;
}
// 30. Set Operations: symmetricDifference
function symmetricDifference( setA, setB ) {
  let _difference = new Set( setA );
  for ( let elem of setB ) {
    if ( _difference.has( elem ) ) {
      _difference.delete( elem );
    } else {
      _difference.add( elem );
    }
  }
  return _difference;
}
// 31. Set Operations: difference
function difference( setA, setB ) {
  let _difference = new Set( setA );
  for ( let elem of setB ) {
    _difference.delete( elem );
  }
  return _difference;
}

// Examples
let setA = new Set( [ 1, 2, 3, 4 ] );
let setB = new Set( [ 2, 3 ] );
let setC = new Set( [ 3, 4, 5, 6 ] );

console.log( isSuperset( setA, setB ) ); // => true
console.log( union( setA, setC ) ); // => Set [1, 2, 3, 4, 5, 6]
console.log( intersection( setA, setC ) ); // => Set [3, 4]
console.log( symmetricDifference( setA, setC ) ); // => Set [1, 2, 5, 6]
console.log( difference( setA, setC ) ); // => Set [1, 2]
