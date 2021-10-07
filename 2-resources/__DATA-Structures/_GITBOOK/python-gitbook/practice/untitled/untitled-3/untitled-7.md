# Quick Sort

### What is Quick Sort in Python?

Quicksort \(sometimes called [**partition-exchange sort**](https://en.wikipedia.org/wiki/Quicksort)\) is an efficient sorting algorithm, serving as a systematic method for placing the elements of a random access file or an array in order.

Quicksort works by selecting an element called a pivot and splitting the array around that pivot in Python.

We split array such that all the elements in, say, the left sub-array are less than the pivot and all the elements in the right sub-array are greater than the pivot.

The splitting continues until the array can no longer be broken into pieces. That’s it. Quicksort is done.

#### Advantages of Quick Sort in Python

1. Easy implementation.

2. High performance.

3. **Cache Performance** is higher than other [sorting algorithms](https://codezup.com//merge-sort-implementation-example-python/).

4. No extra memory.

#### Define Quick Sorting Function

Now, let’s define a new function named quick-sorting which accepts three parameters which is a list, starting index and the ending index we pass as an argument to this function.

So this function is to sort an array or list using a quick sorting algorithm in Python.

In this tutorial, we are going to provide two solutions, one is normal and other is more efficient than first.

**Solution 1**

In the first solution, we are going to first find the pivot by using a partition function and then we split the array on that pivot basis.

In this solution, we are recursively calling the quicksort function which leads to more complexity in Python.

```text
def quickSort(myList, start, end):
    if start < end:
        pivot = partition(myList, start, end)
        quickSort(myList, start, pivot-1)
        quickSort(myList, pivot+1, end)
    return myList

def partition(myList, start, end):
    pivot = myList[start]
    left = start+1
    right = end
    done = False
    while not done:
        while left <= right and myList[left] <= pivot:
            left = left + 1
        while myList[right] >= pivot and right >=left:
            right = right -1
        if right < left:
            done= True
        else:
            temp=myList[left]
            myList[left]=myList[right]
            myList[right]=temp
    temp=myList[start]
    myList[start]=myList[right]
    myList[right]=temp
    return right
```

**Solution 2**

This second solution is much more efficient than the first one.

```text
def quicksortBetter(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksortBetter(left) + middle + quicksortBetter(right)
```

**Complexity**

The overall time complexity of OuickSort is O\(nLogn\).

The space complexity of Quick Sort is O\(log n\).

**Define Main Condition**

Now, let’s create a main condition where we need to call the above functions and pass the list which needs to be sorted.

So let’s manually defined the list which we want to pass as an argument to the function.

So, one more thing we want to do is to calculate the time for both solutions to check which solution works better.

```text
if __name__ == '__main__':
    List = [3, 4, 2, 6, 5, 7, 1, 9]
    start = time.time()
    print('Sorted List:',quickSort(List, 0, len(List) - 1))
    stop = time.time()
    print('Time Required:', (stop - start))
    start = time.time()
    print('Sorted List:', quicksortBetter(List))
    stop = time.time()
    print('Time Required:', (stop - start))
```

**Source Code**

```text

import time

def quickSort(myList, start, end):
    if start < end:
        pivot = partition(myList, start, end)
        quickSort(myList, start, pivot-1)
        quickSort(myList, pivot+1, end)
    return myList

def partition(myList, start, end):
    pivot = myList[start]
    left = start+1
    right = end
    done = False
    while not done:
        while left <= right and myList[left] <= pivot:
            left = left + 1
        while myList[right] >= pivot and right >=left:
            right = right -1
        if right < left:
            done= True
        else:
            temp=myList[left]
            myList[left]=myList[right]
            myList[right]=temp
    temp=myList[start]
    myList[start]=myList[right]
    myList[right]=temp
    return right

# A more efficient solution
def quicksortBetter(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksortBetter(left) + middle + quicksortBetter(right)

if __name__ == '__main__':
    List = [3, 4, 2, 6, 5, 7, 1, 9]
    start = time.time()
    print('Sorted List:',quickSort(List, 0, len(List) - 1))
    stop = time.time()
    print('Time Required:', (stop - start))
    start = time.time()
    print('Sorted List:', quicksortBetter(List))
    stop = time.time()
    print('Time Required:', (stop - start))
```

**Output**

![Quick Sort implementation example in Python Output](https://i1.wp.com/codezup.com/wp-content/uploads/2020/01/Quick-Sort-implementation-example-in-Python-Output.png?resize=665%2C309&ssl=1)
