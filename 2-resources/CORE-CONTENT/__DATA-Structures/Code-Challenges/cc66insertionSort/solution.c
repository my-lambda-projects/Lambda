// https://repl.it/student/assignments/490756/model_solution?fromSubmissionId=1831101
// 

#include <stdio.h>
// #include <math.h>

void insertionSort(int arr[], int n)
{
  int i, j, key;

  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
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
