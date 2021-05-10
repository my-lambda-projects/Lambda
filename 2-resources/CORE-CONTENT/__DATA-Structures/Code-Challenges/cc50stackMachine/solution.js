// https://youtu.be/w-kcXRj0Tu4
// https://piazza.com/class/j63w1pdyopf7kj?cid=54

function stackMachine( str ) {
  // create function to check that arr[arr.length - 1] and arr[arr.length - 2] are not undefined
  // create an object with two keys
  // '+' : (x, y) => (+x) + (+y),
  // '*' : (x, y) => (+x) * (+y)
  // create an array that I'll be using for stack
  // let err = false
  // for loop for i = 0; i < str.length
  // if(!obj[str[i]]) arr.push(str[i])
  // else {
  // check();
  // arr.push(obj[str[i]](arr.pop(), arr.pop()))
  // }
  // return err ? -1 : arr.splice(-1)[0];

  const arr = [];
  let err = false;

  function check() {
    if ( arr.length < 2 ) err = true;
  }
  const obj = {
    '+': ( x, y ) => ( +x ) + ( +y ),
    '*': ( x, y ) => ( +x ) * ( +y )
  };

  for ( let i = 0; i < str.length; i++ ) {
    if ( obj[ str[ i ] ] ) {
      check();
      arr.push( obj[ str[ i ] ]( arr.pop(), arr.pop() ) );
    } else arr.push( str[ i ] );
  }
  return err ? -1 : arr.splice( -1 )[ 0 ];
}
