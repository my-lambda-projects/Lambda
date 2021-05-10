// https://repl.it/student/assignments/351164/model_solution?fromSubmissionId=1498763
// https://youtu.be/aW-KYfWrsMk

function collatzSequence( n ) {
  let m = n;
  const arr = [ m ];
  while ( m !== 1 ) {
    // m = m % 2 === 0 ? m / 2 : m * 3 + 1;
    if ( m % 2 === 0 ) {
      m /= 2;
    } else {
      m = ( m * 3 ) + 1;
    }
    arr.push( m );
  }
  return arr;
}

/*
function collatzSequence(n) {
  // create variable to hold n called o
  // define recursive function that takes in (m, arr)
    // base case of recursive solution => n === 1
    // if m % 2 === 0 m = m / 2
    // else m = m * 3 + 1
    // push to arr
    // return recursive function (m, arr);
  // return recursive function(o, [o]);
  function recurse(m, arr) {
    if (m === 1) return arr;
    if (m % 2 === 0) m = m / 2;
    else m = m * 3 + 1;
    arr.push(m);
    return recurse(m, arr);
  }
  return recurse(n, [n]);
}
*/
