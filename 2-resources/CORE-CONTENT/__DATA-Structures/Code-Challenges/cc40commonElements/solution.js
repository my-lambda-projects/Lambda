// https://repl.it/student/assignments/355661/model_solution?fromSubmissionId=1472701

function commonElements( arr1, arr2 ) {
  const matches = [];
  arr1.forEach( ( element ) => {
    if ( arr2.includes( element ) ) matches.push( element );
  } );
  return matches;
}
