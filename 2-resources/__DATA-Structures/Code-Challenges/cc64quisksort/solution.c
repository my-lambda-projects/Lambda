// https://youtu.be/krtTy-mRaNk
// https://repl.it/student/assignments/484784/model_solution?fromSubmissionId=1817075
// http://www.geeksforgeeks.org/quick-sort/


#include <stdio.h>

void swap(int* a, int* b)
{
  int temp = *a;
  *a = *b;
  *b = temp;
}

int partition(int arr[], int low, int high)
{
  int pivot = arr[high];
  int i = low - 1;

  for (int j = low; j <= high - 1; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(&arr[i], &arr[j]);
    }
  }

  swap(&arr[i+1], &arr[high]);
  return i + 1;
}

void quick_sort(int arr[], int low, int high)
{
  if (low < high) {
    int index = partition(arr, low, high);
    quick_sort(arr, low, index - 1);
    quick_sort(arr, index + 1, high);
  }
}

void print_array(int arr[], int size)
{
  for (int i = 0; i < size; i++) {
    printf("%d\n", arr[i]);
  }
}

int main(int argc, char* argv[])
{
  int arr[] = {100, 55, 4, 98, 10, 18, 90, 95, 43, 11, 47, 67, 89, 42, 49, 79};
  int n = sizeof(arr) / sizeof(arr[0]);
  quick_sort(arr, 0, n-1);
  print_array(arr, n);
  return 0;
}
