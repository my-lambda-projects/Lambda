# Sorting

{% tabs %} {% tab title="First Tab" %}

```python

This implementation is different than the ones in the referenced books, which are different from each other.
It uses methods and functions that do iteration versus for-loops. Just remember it's still O(n^2).
"""
from collections.abc import MutableSequence

from src.typehints import T


def selection_sort_iter(seq: MutableSequence[T]) -> None:
    """Use selection sort iteratively on a list in-place."""
    for i, val in enumerate(seq):
        min_val = min(seq[i:])
        min_val_i = seq.index(min_val, i)  # First index of min_val at or after i
        seq[i] = min_val
        seq[min_val_i] = val
```

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %} {% endtabs %}

```python
def partition(A, lo, hi):
    pivot = A[lo + (hi - lo) // 2]
    i = lo - 1
    j = hi + 1

    while True:

        i += 1
        while A[i] < pivot:
            i += 1

        j -= 1
        while A[j] > pivot:
            j -= 1

        if i >= j:
            return j
        A[i], A[j] = A[j], A[i]


def quicksort(A, lo, hi):
    if lo < hi:
        p = partition(A, lo, hi)
        quicksort(A, lo, p)
        quicksort(A, p + 1, hi)
    return A


if __name__ == "__main__":
    arr = [8, 3, 5, 1, 7, 2]
    quicksort(arr, 0, len(arr) - 1)
    #  >>> [1, 2, 3, 5, 7, 8]

```

## Bubble Sort

## Script Name

Bubble Sort Algorithm.

### Aim

To write a program for Bubble sort.

### Purpose

To get a understanding about Bubble sort.

### Short description of package/script

- It is a python program of Bubble sort Algorithm.
- It is written in a way that it takes user input.

### Workflow of the Project

- First a function is written to perform Bubble sort.
- Then outside the function user input is taken.

### Detailed explanation of script, if needed

Start with the first element, compare the current element with the next element of the array. If the current element is greater than the next element of the array, swap both of them. If the current element is less than the next element, move to the next element. Keep on comparing the current element with all the elements in the array. The largest element of the array comes to its original position after 1st iteration. Repeat all the steps till the array is sorted.

#### Example

```text
Consider an array a=[5,4,3,2,1]
Iteration 1:-
         |5|4|3|2|1|
          |___________5>4 therefore we swap both of them.
         |4|5|3|2|1|
            |_________5>3 therefore we swap both.
         |4|3|5|2|1|
              |_______5>2 therefore we swap.
         |4|3|2|5|1|
                |_____5>1 therefore we swap.
         |4|3|2|1|5| Now 5 is placed at its original position

Iteration 2:-
         |4|3|2|1|5|
          |__________4>3 therefore we swap both.
         |3|4|2|1|5|
            |________4>2 therefore we swap both.
         |3|2|4|1|5|
              |______4>1 therefore we swap both.
         |3|2|1|4|5|
                 |__ 4 is placed at its original position.

Iteration 3:-
         |3|2|1|4|5|
          |_________3>2 we swap.
         |2|3|1|4|5|
            |_______3>1 we swap.
         |2|1|3|4|5|- 3 is placed at original position.

Iteration 4:-
          |2|1|3|4|5|
           |_________2>1 we swap.
          |1|2|3|4|5| the array is sorted.
```

### Setup instructions

Just clone the repository .

### Output

```python
#Link to problem:-
#Bubble sort is a sorting algorithm. Sorting algorithms are used to arrange the array in particular order.In,Bubble sort larger elements are pushed at the end of array in each iteration.It works by repeatedly swapping the adjacent elements if they are in wrong order.

def bubbleSort(a):
    n = len(a)
    # Traverse through all array elements

    for i in range(n-1):
        # Last i elements are already in place
        for j in range(0, n-i-1):

            # traverse the array from 0 to n-i-1
            # Swap if the element found is greater
            # than the next element
            if arr[j] > arr[j + 1] :
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

arr = []
n=int(input("Enter size of array: "))
for i in range(n):
    e=int(input())
    arr.append(e)
bubbleSort(arr)
print ("Sorted array is:")
for i in range(len(arr)):
     print(arr[i])

#Time complexity - O(n^2)
#Space complexity - O(1)
```

Insertion Sort

```python
# Insertion Sort

## Aim

The main aim of the script is to sort numbers in list using insertion sort.

## Purpose

The main purpose is to sort list of any numbers in O(n) or O(n^2) time complexity.

## Short description of package/script

Takes in an array. <br>
Sorts the array and prints sorted array along with the number of swaps and comparisions made.
Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.

## Detailed explanation of script, if needed

To sort an array of size n in ascending order: <br>
1: Iterate from a[1] to a[n] over the array. <br>
2: Compare the current element (val) to its predecessor. <br>
3: If the val is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element. <br>

## Setup instructions

Download code and run it in any python editor. Latest version is always better.

## Compilation Steps

1.Edit array a and enter your array/list you want to sort. 2. Run the code

## Sample Test Cases

### Test case 1:

input:<br>
a = [34,5,77,33] <br>

output :<br>

5, 33, 34, 77 along with <br>
no. of swaps = 3 <br>
no. of comparisons=5<br>

### Test case 2

input<br>
a=[90,8,11,3,2000,700,478] <br>

Output:<br>

No. of swaps= 8 <br>
No. of comparisions=12 <br>
Sorted Array is: <br>
3 8 11 90 478 700 2000<br>

### Test case 3

input<br>
a=[0,33,7000,344,-88,2000]<br>

output:<br>

No. of swaps= 6<br>
No. of comparisions=10<br>
Sorted Array is:<br>
-88 0 33 344 2000 7000<br>

## Output

<img width = 221 height = 27 src="../Insertion Sort/Images/input.png">
<img width = 385 height = 188 src="../Insertion Sort/Images/sort_output1.png">




```
