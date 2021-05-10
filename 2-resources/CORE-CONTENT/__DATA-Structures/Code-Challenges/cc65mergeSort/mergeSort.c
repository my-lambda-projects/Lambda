/* cc65 mergeSort https://repl.it/student/submissions/1824513
Reference https://en.wikipedia.org/wiki/Merge_sort, as well as your own JavaScript
implementation of this sorting algorithm, for more details about how this sorting algorithm works.
Sort an array of integers using the merge sort algorithm.
First divide the list into its smallest unit (arrays with a single item in them).
Then compare each element with the adjacent list and combine them in the proper order.
Repeat until the entire array is sorted.

Example:
- Input: [1, 6, 3, 2, 4, 7]
- Expected Output: [1, 2, 3, 4, 6, 7];

[1, 6, 3, 2, 4, 7] -> [1, 2, 3, 4, 6, 7]
[1, 6, 3][2, 4, 7]
[1][6, 3][2][4, 7]
[1][6][3][2][4][7]
[1, 3][6][2][4][7]
[1, 3][6][2, 4][7]
[1, 3, 6][2, 4][7]
[1, 3, 6][2, 4, 7]
[1, 2, 3, 4, 6, 7]
*/

#include <stdio.h>
#include <stdio.h>

void merge(int arr[], int left, int mid, int right)
{

}

void mergesort(int arr[], int left, int right)
{

}

void print_array(int arr[], int size)
{
  for (int i = 0; i < size; i++) {
    printf("%d\n", arr[i]);
  }
}

int main(int argc, char* argv[])
{
  int arr[] = {90, 98, 14, 57, 30, 10, 59, 81, 12, 11, 13, 5, 69, 13, 6, 7};
  int arr_size = sizeof(arr)/sizeof(arr[0]);

  printf("Given array is \n");
  print_array(arr, arr_size);

  mergesort(arr, 0, arr_size - 1);

  printf("\nSorted array is \n");
  print_array(arr, arr_size);
  return 0;
}
