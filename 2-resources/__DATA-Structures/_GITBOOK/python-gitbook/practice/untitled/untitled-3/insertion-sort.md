# Insertion Sort

### What is Insertion Sort?

Insertion sort is good for collections that are very small or nearly sorted. Otherwise, it’s not a good sorting algorithm it moves data around too much.

Each time insertion is made, all elements in a greater position are shifted.

It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

#### [Advantages ](https://en.wikipedia.org/wiki/Insertion_sort)of Insertion Sort

1. Simple implementation.

2. Much More Efficient for small data sets, much like other quadratic sorting algorithms like [bubble sort](https://codezup.com//bubble-sort-implementation-example-in-python/) and [selection sort](https://codezup.com//selection-sort-using-for-loop-in-python/).

3. Adaptive that is efficient for the type of data sets that are already substantially sorted.

4. Stable Sorting Algorithm

5. In-place sorting means O\(1\) space required.

#### Define Insertion Sort Function

Now, let’s define a new function named insertion-sort which accepts one parameter which is list we pass as n argument to this function.

So what we are going to do is to use two for loops, one starting from index 1 and another loop inside the first loop from the previous element of the list up to index 0.

Then we compare the outer loop index value with the inner loop index value for each iteration and then swap the small one with the outer index element.

```text
def insertionSort(List):
    for i in range(1, len(List)):
        currentNumber = List[i]
        for j in range(i - 1, -1, -1):
            if List[j] > currentNumber :
                List[j], List[j + 1] = List[j + 1], List[j]
            else:
                List[j + 1] = currentNumber
                break

    return List
```

**Complexity**

Insertion sort has a worst-case and average complexity of О\(n2\), where n is the number of items being sorted.

Most practical sorting algorithms have substantially better worst-case or average complexity, often O\(n log n\).

When the list is already sorted \(best-case\), the complexity of the insertion is only O\(n\).

```text
Best O(n); Average O(n^2); Worst O(n^2)
```

#### Define Main Condition

Now, let’s create a main condition where we need to call the above function and pass the list which needs to be sorted.

So let’s manually defined the list which we want to pass as an argument to the function.

```text
if __name__ == '__main__':
    List = [3, 4, 2, 6, 5, 7, 1, 9]
    print('Sorted List : ',insertionSort(List))
```

**Source Code**

```text
def insertionSort(List):
    for i in range(1, len(List)):
        currentNumber = List[i]
        for j in range(i - 1, -1, -1):
            if List[j] > currentNumber :
                List[j], List[j + 1] = List[j + 1], List[j]
            else:
                List[j + 1] = currentNumber
                break

    return List

if __name__ == '__main__':
    List = [3, 4, 2, 6, 5, 7, 1, 9]
    print('Sorted List : ',insertionSort(List))
```

**Output**

![Insertion Sort implementation example in Python Output](https://i2.wp.com/codezup.com/wp-content/uploads/2020/01/Insertion-Sort-implementation-example-in-Python.png?resize=665%2C163&ssl=1)
