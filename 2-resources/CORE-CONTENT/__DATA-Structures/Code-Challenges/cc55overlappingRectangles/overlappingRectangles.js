/* cc55 overlappingRectangles https://repl.it/student/submissions/1731362
Write a function findOverlap to find the rectangular intersection of two given rectangles.

They are defined as objects like this:

const rectangle1 = {
  leftX: 1,
  bottomY: 5,
  width: 10,
  height: 4,
};

Your function should return an object in this format as well.
*/

function findOverlap( rect1, rect2 ) {
  rect1.rightX = rect1.leftX + rect1.width;
  leftRightOverlap = false
  if ( rect2.leftX >= rect1.leftX || rect2.leftX >= rect1.rightX ) {
    leftRightOverlap = true;
  }
  // convert into Tai's nomenclature &
  // do the same for all four sides, e.g.
  // function intersectRect(r1, r2) {
  //   return !(r2.left > r1.right ||
  //           r2.right < r1.left ||
  //           r2.top > r1.bottom ||
  //           r2.bottom < r1.top);
  // }
  if ( !intersectRect( rect1, rect2 ) ) {
    return {};
  } else {
    return "overlap"
  }
  // if overlap = true
  // calculate intersection object coordinates
  // discerning relative geometric intersection????
  // return overlaping object coordinates
  //   {
  //   leftX: #,
  //   bottomY: #,
  //   width: #,
  //   height: #,
  // }
}

const rectangle1 = {
  leftX: 1,
  bottomY: 5,
  width: 10,
  height: 4,
};

const rectangle2 = {
  leftX: 2,
  bottomY: 6,
  width: 10,
  height: 4,
};

// TEST SUITE
console.log( findOverlap( rectangle1, rectangle2 ) );
