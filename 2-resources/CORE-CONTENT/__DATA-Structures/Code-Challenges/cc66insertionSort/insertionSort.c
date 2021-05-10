/* cc66 https://repl.it/student/submissions/1831101
Implement the insertion sort algorithm, which works by iterating over
an array and growing a sorted array behind the current location.
It takes each element from the input and finds its spot, up to the current point in the array.

First, reference your old implementation in JavaScript, or, if you didn't
finish implementing insertion sort the first time you saw it, this article
walks you through a JS implementation:
http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-insertion-sort-algorithm/

As you read through the JavaScript implementation, figure out the steps,
in pseudocode or plain english, that the algorithm takes in order to achieve
its goal of sorting the input. Once you've specified just the algorithmic
steps of insertion sort, now figure out how to perform each step in C.

At the very least, submit your pseudocode for how insertion sort works
if you can't get started on a C implementation.
*/

#include <stdio.h>

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

int main(int argc, char* argv[])
{
  int arr[] = {100, 55, 4, 98, 10, 18, 90, 95, 43, 11, 47, 67, 89, 42, 49, 79};
  int n = sizeof(arr)/sizeof(arr[0]);

  insertionSort(arr, n);
  printArray(arr, n);

  return 0;
}
