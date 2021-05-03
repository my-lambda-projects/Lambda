/***********************************************************************
Write a function named `spreadItOut(array1, array2)` that accepts two arrays and
uses *

spread operator * syntax to
return a single array.


Exam ples:
  spre adItOut( [ 3, 5, 6 ], [ 1, 2, 3 ] ); // => [3,5,6,1,2,3];
spre adItOut( [], [ 1, 2, 3 ] ); // => 14;
spre adItOut( [ "apple", "banana" ], [ 1, 2, 3 ] ); // => ["apple", "banana", 1, 2, 3];
**
** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** * /

fu nction spreadItOut( array1, array2 ) {
    le t joinedArray = [ ...array1, ...array2 ];
    return joinedArray;
 } 
  
/***  ***********DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = spreadItOut;
} < /pre> <
/td> <
/tr> <
/tbody> <
/table> <
/td> <
/tr> <
/tbody> <
/table> <
h2 > < br > MaxDifference < /h2> <
  h3 > < code > maxDifference < /code></h3 >
  <
  h3 > < code > maxDifferenceWithStreams < /code></h3 >
  <
  table data - layout = "full-width"
class = "confluenceTable" >
  <
  colgroup >
  <
  col style = "width: 852.0px;" >
  <
  col style = "width: 769.0px;" >
  <
  /colgroup> <
  tbody >
  <
  tr >
  <
  th class = "confluenceTh" >
  <
  p > MaxDifference < /p> <
  /th> <
  th class = "confluenceTh" >
  <
  p > Tests < /p> <
  /th> <
  /tr> <
  tr >
  <
  td class = "confluenceTd" >
  <
  table class = "wysiwyg-macro"
data - macro - name = "code"
data - macro - id = "b0f24847-8319-421e-add7-5d3fc08f6c96"
data - macro - schema - version = "1"
style = "background-image: url(https://nickguner.atlassian.net/wiki/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_US&amp;version=2); background-repeat: no-repeat;"
data - macro - body - type = "PLAIN_TEXT" >
  <
  tbody >
  <
  tr >
  <
  td class = "wysiwyg-macro-body" >
  <
  pre > static int maxDifference( int[] a )
