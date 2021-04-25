// https://piazza.com/class/j63w1pdyopf7kj?cid=78
// https://youtu.be/DfFBYylXx5U

#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

#define MAX(a, b) (((a) > (b)) ? (a) : (b))
#define MIN(a, b) (((a) < (b)) ? (a) : (b))
#define SIZE(arr) (sizeof(arr) / sizeof(arr[0]))

int highestProductOf3(int arr[], int length)
{
  int i;
  int highest, lowest;
  int highestProductOf2, lowestProductOf2, highestProductOf3;

  assert(length >= 3);

  // we're going to start at the 3rd item (at index 2)
  // so pre-populate highests and lowests based on the first 2 items.
  highest = MAX(arr[0], arr[1]);
  lowest  = MIN(arr[0], arr[1]);

  highestProductOf2 = arr[0] * arr[1];
  lowestProductOf2  = arr[0] * arr[1];

  // except this one--we pre-populate it for the first *3* items.
  // this means in our first pass it'll check against itself, which is fine.
  highestProductOf3 = arr[0] * arr[1] * arr[2];

  // walk through items, starting at index 2
  for (i = 2; i < length; i++) {
    int temp;
    int current = arr[i];

    // do we have a new highest product of 3?
    // it's either the current highest,
    // or the current times the highest product of two
    // or the current times the lowest product of two
    temp = MAX(highestProductOf3, current * highestProductOf2);
    highestProductOf3 = MAX(temp, current * lowestProductOf2);

    // do we have a new highest product of two?
    temp = MAX(highestProductOf2, current * highest);
    highestProductOf2 = MAX(temp, current * lowest);

    // do we have a new lowest product of two?
    temp = MIN(lowestProductOf2, current * highest);
    lowestProductOf2 = MIN(temp, current * lowest);

    // do we have a new highest?
    highest = MAX(highest, current);

    // do we have a new lowest?
    lowest = MIN(lowest, current);
  }

  return highestProductOf3;
}

int main(int argc, char* argv)
{
  int arr1[] = {-10, -10, 1, 3, 2};
  int arr2[] = {1, 10, -5, 1, -100};
  int arr3[] = {5, -20, 19, 16, 4};

  printf("Highest product of arr1 is: %d\n", highestProductOf3(arr1, SIZE(arr1)));
  printf("Highest product of arr2 is: %d\n", highestProductOf3(arr2, SIZE(arr2)));
  printf("Highest product of arr3 is: %d\n", highestProductOf3(arr3, SIZE(arr3)));

  return 0;
}
