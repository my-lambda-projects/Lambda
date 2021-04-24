function foo( x ) {
  x = ( typeof x != "undefined" ) ? x : 10;..
}

function foo( x = 10 ) {
  ..
}

function foo( x, y, z ) {
  ..
};
foo.apply( null, [ 1, 2, 3 ] );

function foo( x, y, z ) {
  ..
};
foo( ...[ 1, 2, 3 ] );

function foo() {
  let args = [].slice.call( arguments );..
}

function foo( ...args ) {
  ..
}

let o = {
    x: 2,
    y: 3
  },
  x = o.x,
  y = o.y,
  z = ( typeof o.z != "undefined" ) ? o.z : 10;
let {
  x,
  y,
  z = 10
} = {
  x: 2,
  y: 3
};

let a = [ 1, 2 ],
  x = a[ 0 ],
  y = a[ 1 ],
  z = ( typeof a[ 2 ] != "undefined" ) ? a[ 2 ] : 10;
let [ x, y, z = 10 ] = [ 1, 2 ];

let x = 10,
  y = 20,
  tmp = x;
x = y;
y = tmp;
let x = 10,
  y = 20;
[ y, x ] = [ x, y ];

let a = [ 1, 2, 3 ],
  b = a.pop();
a = a.concat( [ 4 ] );
a; // [2,3,4]
let a = [ 1, 2, 3 ],
  [ b, ...a ] = [ ...a, 4 ];

function foo( o ) {
  let x = o.x,
    y = o.y;..
};
foo( {
  y: 5,
  x: 10
} );

function foo( {
  x,
  y
} ) {
  ..
};
foo( {
  y: 5,
  x: 10
} );
