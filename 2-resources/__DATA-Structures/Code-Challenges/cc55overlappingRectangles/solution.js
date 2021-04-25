// https://youtu.be/PS732Ig7Uow
// https://piazza.com/class/j63w1pdyopf7kj?cid=60

function findOverlap( point1, length1, point2, length2 ) {
  const highestStartingPoint = Math.max( point1, point2 );
  const lowestEndPoint = Math.min( point1 + length1, point2 + length2 );

  if ( highestStartingPoint >= lowestEndPoint ) {
    return {
      startPoint: null,
      overlapLength: null
    };
  }

  const overlapLength = lowestEndPoint - highestStartingPoint;

  return {
    startPoint: highestStartingPoint,
    overlapLength: overlapLength
  };
}

function findRectangularOverlap( rectangle1, rectangle2 ) {
  const xOverlap = findOverlap( rectangle1.leftX, rectangle1.width, rectangle2.leftX, rectangle2.width );
  const yOverlap = findOverlap( rectangle1.bottomY, rectangle1.height, rectangle2.bottomY, rectangle2.height );

  if ( !xOverlap.overlapLength || !yOverlap.overlapLength ) {
    return {
      leftX: null,
      bottomY: null,
      width: null,
      height: null,
    };
  }

  return {
    leftX: xOverlap.startPoint,
    bottomY: yOverlap.startPoint,
    width: xOverlap.overlapLength,
    height: yOverlap.overlapLength,
  };
}
