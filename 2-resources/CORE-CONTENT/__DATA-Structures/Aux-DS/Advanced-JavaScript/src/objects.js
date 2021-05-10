// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = ( obj ) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return Object.keys( obj );
};

const values = ( obj ) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  return Object.values( obj );
};

const mapObject = ( obj, cb ) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  //
  // version 1 √
  // // using previous functions to make array from all keys
  // const keyArr = keys(obj);
  // // using previous functions to make array from all values
  // const valArr = values(obj);
  // // apply callback function to each element in the array of values
  // for (let i = 0; i < valArr.length; i++) {
  //   valArr[i] = cb(valArr[i]);
  // }
  // // declare empty object
  // const mappedObj = {};
  // // use it to contain original keys mapped back to
  // // previously corresponding, and now, modified values
  // for (let i = 0; i < keyArr.length; i++) {
  //   mappedObj[keyArr[i]] = valArr[i];
  // }
  // return mappedObj;

  // version 2 - using forEach from Hamblin's 7/10 review √
  // const newObj = {};
  // Object.keys(obj).forEach((key) => {
  //   newObj[key] = cb(obj[key]);
  // });
  // return newObj;

  // version 3 - forEach using previous "each"
  const newObj = {};
  keys( obj ).forEach( ( key ) => {
    newObj[ key ] = cb( obj[ key ] );
  } );
  return newObj;
};

const pairs = ( obj ) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  //
  // version 1 √
  // const keyArr = keys(obj);
  // const valArr = values(obj);
  // const pairArr = [];
  // // prepare an array of empty array set to the length of the former object
  // for (let i = 0; i < keyArr.length; i++) {
  //   pairArr.push([]);
  // }
  // // populate nested arrays with object key:value pairs
  // // such that key is [n][0] and value is [n][1]
  // for (let i = 0; i < keyArr.length; i++) {
  //   pairArr[i].push(keyArr[i]);
  //   pairArr[i].push(valArr[i]);
  // }
  // return pairArr;

  // version 2 - using forEach from Hamblin's 7/10 review √
  // const newArr = [];
  // Object.keys(obj).forEach((givenKey) => {
  //   const tempArray = [];
  //   tempArray.push(givenKey, obj[givenKey]);
  //   newArr.push(tempArray);
  // });
  // return newArr;

  // version 3 - using previous eys method √
  const newArr = [];
  keys( obj ).forEach( ( givenKey ) => {
    const tempArray = [];
    tempArray.push( givenKey, obj[ givenKey ] );
    newArr.push( tempArray );
  } );
  return newArr;
};

const invert = ( obj ) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  //
  // version 1 √
  const keyArr = keys( obj );
  const valArr = values( obj );
  const mappedObj = {};
  for ( let i = 0; i < keyArr.length; i++ ) {
    // {key:value} inverted to {value:key}
    mappedObj[ valArr[ i ] ] = keyArr[ i ];
  }
  return mappedObj;

  // version 2 - using forEach from Hamblin's 7/10 review √
  // const newObj = {};
  // Object.keys(obj).forEach((givenKey) => {
  //   newObj[obj[givenKey]] = givenKey;
  // });
  // return newObj;

  // version 3 - using previous keys method √
  // const newObj = {};
  // keys(obj).forEach((givenKey) => {
  //   newObj[obj[givenKey]] = givenKey;
  // });
  // return newObj;
};

const defaults = ( obj, defaultProps ) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults

  // version 1 √
  // using previous keys method, turn defaultProps object into an array to iterate over
  //
  const dPKeys = keys( defaultProps );
  for ( let i = 0; i < dPKeys.length; i++ ) {
    if ( !obj[ dPKeys[ i ] ] ) {
      obj[ dPKeys[ i ] ] = defaultProps[ dPKeys[ i ] ];
    }
  }
  return obj;

  // version 2 √
  // const dPKeys = Object.keys(defaultProps);
  // dPKeys.forEach((value, i) => {
  //   if (!obj[dPKeys[i]]) {
  //     obj[dPKeys[i]] = defaultProps[dPKeys[i]];
  //   }
  // });
  // return obj;

  // version 3 - √
  // worked out a solution with ELY
  //
  // const dPKeys = keys(defaultProps);
  // dPKeys.forEach((value) => {
  //   if (obj[value] === undefined) {
  //     obj[value] = defaultProps[value];
  //   }
  // });
  // return obj;
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
};
