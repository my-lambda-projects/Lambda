// http://www.stoimen.com/blog/2010/07/02/friday-algorithms-javascript-merge-sort/
// https://piazza.com/class/j63w1pdyopf7kj?cid=76
// https://youtu.be/H4psSvw7DJQ

#include <stdio.h>
#include <stdio.h>

void merge(int arr[], int left, int mid, int right)
{
  int i, j, k;
  int n1 = mid - left + 1;
  int n2 = right - mid;
  int L[n1], R[n2];

  for (i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }
  for (j = 0; j < n2; j++) {
    R[j] = arr[mid + 1 + j];
  }

  i = 0, j = 0, k = left;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

void mergesort(int arr[], int left, int right)
{
  if (left < right) {
    int mid = (left + right) / 2;

    mergesort(arr, left, mid);
    mergesort(arr, mid + 1, right);

    merge(arr, left, mid, right);
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
  int arr[] = {90, 98, 14, 57, 30, 10, 59, 81, 12, 11, 13, 5, 69, 13, 6, 7};
  int arr_size = sizeof(arr)/sizeof(arr[0]);

  printf("Given array is \n");
  print_array(arr, arr_size);

  mergesort(arr, 0, arr_size - 1);

  printf("\nSorted array is \n");
  print_array(arr, arr_size);

  return 0;
}
