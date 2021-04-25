// https://youtu.be/PS732Ig7Uow
// https://piazza.com/class/j63w1pdyopf7kj?cid=60

#define MAX(a, b) (((a) > (b)) ? (a) : (b))
#define MIN(a, b) (((a) < (b)) ? (a) : (b))

typedef struct {
  int leftX;
  int bottomY;
  int width;
  int height;
} Rectangle;

typedef struct {
  int startPoint;
  int length;
} RangeOverlap;

RangeOverlap findRangeOverlap(int point1, int length1, int point2, int length2)
{
  int highestStartPoint, lowestEndPoint;
  RangeOverlap rangeOverlap = {0, 0};

  highestStartPoint = MAX(point1, point2);
  lowestEndPoint = MIN(point1 + length1, point2 + length2);

  if (highestStartPoint >= lowestEndPoint) {
    return rangeOverlap;
  }

  int overlapLength = lowestEndPoint - highestStartPoint;
  rangeOverlap.startPoint = highestStartPoint;
  rangeOverlap.length = overlapLength;

  return rangeOverlap;
}

Rectangle findRectangularOverlap(Rectangle rect1, Rectangle rect2)
{
  RangeOverlap xOverlap, yOverlap;
  Rectangle rectangle = {0, 0, 0, 0};

  xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
  yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

  if (xOverlap.length == 0 || yOverlap.length == 0) {
    return rectangle;
  }

  rectangle.leftX = xOverlap.startPoint;
  rectangle.bottomY = yOverlap.startPoint;
  rectangle.width = xOverlap.length;
  rectangle.height = yOverlap.length;

  return rectangle;
}
