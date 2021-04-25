// cc29 robotPaths

[
  [ true, false, false, false, false ],
  [ false, false, false, false, false ],
  [ false, false, false, false, false ],
  [ false, false, false, false, false ],
  [ false, false, false, false, "destination" ]
]

/*
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  EC: Make your solution work for a grid of any size.
 *
 */

const makeBoard = ( n ) => {
  // this function will build a board nXn for your robot to traverse
  let board = [];
  for ( let i = 0; i < n; i++ ) {
    board.push( [] );
    for ( let j = 0; j < n; j++ ) {
      board[ i ].push( false );
    }
  }
  board.toggle = ( i, j ) => {
    // this function is given to help you toggle the board's square
    board[ i ][ j ] = !board[ i ][ j ]
  };
  board.hasBeenVisited = ( i, j ) => {
    // this function is given to help you check to see if you've been at the square
    return board[ i ][ j ]
  };
  return board;
};

// write your code here for robotPaths


const robotPaths = ( n ) => {
  // make a board size n
  // keep a path counter.
  // create a path tracking function that we can call recursively (takes in location) (i, j)
  // <if> basecase: check to see if function has arrived. if true, pathcounter++;
  // <if> check to see if its out of bounds i < 0, j < 0, i >= n, j >= n
  // <if> check to see if we've already been here.
  // <else>
  // board.toggle(i, j)
  // recurse(i, j + 1);
  // recurse(i + 1, j);
  // recurse(i, j - 1);
  // recurse(i - 1, j);
  // recurse(0, 0);
  // return pathCounter;
  const board = makeBoard( n );
  let pathCounter = 0;

  const traverse = ( i, j ) => {
    if ( i === n - 1 && j === n - 1 ) {
      pathCounter++;
      return;
    }
    if ( i < 0 || j < 0 || i >= n || j >= n ) return;
    if ( board.hasBeenVisited( i, j ) ) return;
    else {
      board.toggle( i, j );
      traverse( i, j + 1 );
      traverse( i + 1, j );
      traverse( i, j - 1 );
      traverse( i - 1, j );
      board.toggle( i, j );
    }
  };
  traverse( 0, 0 );
  return pathCounter;
};

console.log( robotPaths( 5 ) );
