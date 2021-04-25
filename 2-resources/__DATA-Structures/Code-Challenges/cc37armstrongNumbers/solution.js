// https://repl.it/student/assignments/345340/model_solution?fromSubmissionId=1454546

function isArmstrongNumber( n ) {
  let nums = n.toString().split( '' );
  nums = nums.map( num => Math.pow( parseInt( num ), nums.length ) );
  const sum = nums.reduce( ( num, total ) => num + total );
  return n === sum;
}
