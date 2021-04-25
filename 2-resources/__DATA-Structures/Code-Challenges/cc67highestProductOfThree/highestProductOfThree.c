/* cc67 highestProductOfThree https://repl.it/student/submissions/1837298

Given an array of integers, write a function that finds the highest product of
three from amongst any three integers in the array. You can assume any input
arrays have at least three integers.

You'll need to take into account the fact that it is possible for the highest
product of three from a given array to be the product of two negative numbers
and a positive number.

For example, given the array [-90, -15, 6, 9, 10], the highest product of any
three numbers from this array is -90 * -15 * 10 which yields 13,500.

Remember to start off by thinking through and coming up with an algorithm that
will solve this problem regardless of what programming language you use. Once
you have an algorithm, implement it. In the case of this problem, the C
implementation should be very similar to the JavaScript implementation in terms
of code syntax and structure.
*/

#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

#define MAX(a, b) (((a) > (b)) ? (a) : (b))
#define MIN(a, b) (((a) < (b)) ? (a) : (b))
#define SIZE(arr) (sizeof(arr) / sizeof(arr[0]))

void insertionSort(int arr[], int n)
{
  int i, j;
  for (i = 0; i < n; ++i) {
    int temp = arr[i];
    j = i - 1;
    while (j >= 0 & arr[j] > temp) {
      arr[j + 1] = arr[j];
      --j;
    }
    arr[j + 1] = temp;
  }
}

void printArray(int arr[], int n)
{
  for (int i = 0; i < n; i++) {
    printf("%d\n", arr[i]);
  }
}

int highestProductOf3(int arr[], int length)
{
  printf("Before sorting the list is: \n");
  printArray(arr, length);
  // sort the array high to low ( -n ... 0 ... n+ )
  // qsort(arr, SIZE(arr), sizeof(arr[0]), MIN(arr[]));
  insertionSort(arr, length);
  printf("Sorted array: \n");
  printArray(arr, length);

  // if two lowest negatives and highest positive are greater than the three highest positives
  if (arr[0] * arr[1] * arr[length] > arr[length - 3] * arr[length - 2] * arr[length - 1]) {
    puts("What the frog?");
    return arr[0] * arr[1] * arr[length];
  // else return three highest positives
  } else {
    puts("Frog the what?");
    return arr[length - 2] * arr[length - 1] * arr[length];
  }

}

int main(int argc, char** argv)
{
  int arr1[] = {-10, -10, 1, 3, 2};  // ~~~> 300
  int arr2[] = {1, 10, -5, 1, -100}; // ~~~> 5000
  int arr3[] = {5, -20, 19, 16, 4};  // ~~~> 1520
  int arr4[] = {-20, -2, 3, 4, 10};  // ~~~> 400

  printf("Highest product of arr1 is: %d\n", highestProductOf3(arr1, SIZE(arr1)));
  printf("Highest product of arr2 is: %d\n", highestProductOf3(arr2, SIZE(arr2)));
  printf("Highest product of arr3 is: %d\n", highestProductOf3(arr3, SIZE(arr3)));
  printf("Highest product of arr4 is: %d\n", highestProductOf3(arr4, SIZE(arr4)));

  return 0;
}
