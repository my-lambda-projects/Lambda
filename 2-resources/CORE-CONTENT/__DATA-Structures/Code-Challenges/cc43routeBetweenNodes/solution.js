// https://repl.it/student/assignments/371414/model_solution?fromSubmissionId=1510620
// https://youtu.be/LBq-BqqT_H8

// Depth First Search
function routeBetweenNodes( node1, node2 ) {
  let routeExists = false;
  const obj = {};
  const searchGraph = ( node ) => { // Recursive subroutine
    // console.log(node);
    if ( obj[ node.value ] === true || routeExists === true ) return;
    obj[ node.value ] = true;
    for ( let i = 0; i < node.edges.length; i++ ) {
      if ( node.edges[ i ].value === node2.value ) routeExists = true;
      if ( node.edges[ i ].edges.length > 0 ) searchGraph( node.edges[ i ] );
    }
  };
  searchGraph( node1 );
  return routeExists;
}

/* eslint no-redeclare:0 */
// Breadth First Search
function routeBetweenNodes( node1, node2 ) {
  const roadMap = {};
  const queue = [ node1 ];

  const toPath = ( node ) => {
    if ( roadMap[ node.value ] ) return;
    roadMap[ node.value ] = true;
    node.edges.forEach( item => queue.push( item ) );
  };

  while ( queue.length ) {
    if ( roadMap[ node2.value ] ) return true;
    toPath( queue.shift() );
  }
  return false;
}
