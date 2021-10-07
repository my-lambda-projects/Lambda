# SelectionSort

### What is Selection Sort?

In computer science, it is a [sorting algorithm](https://en.wikipedia.org/wiki/Selection_sort), specifically an in-place comparison sort.

It has O\(n2\) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort.

Selection sorting is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.

#### Define Selection Sort

Now, let’s create a new function named SelectionSort which accepts 1 parameter as an argument.

The argument which we pass to this function is an unordered list that is passed to this above function to perform Selection Sorting algorithm on this list and return sorted list back to function call.

_**Read =&gt;**_ [_**Binary Search Algorithm on Sorted List using Loop in Python**_](https://codezup.com//binary-search-algorithm-sorted-list-loop-python/)

So the logic or the algorithm behind Selection Sort is that it iterates all the elements of the list and if the smallest element in the list is found then that number is swapped with the first.

So for this algorithm, we are going to use two for loops, one for traversing through each element from index 0 to n-1.

Another nested loop is used to compare each element until the last element for each iteration.

```text
def selectionSort(List):
    for i in range(len(List) - 1):
        minimum = i
        for j in range( i + 1, len(List)):
            if(List[j] < List[minimum]):
                minimum = j
        if(minimum != i):
            List[i], List[minimum] = List[minimum], List[i]
    return List
```

**The Complexity of Selection Sort**

The time efficiency of selection sort is quadratic, so there are a number of sorting techniques which have better time complexity than selection sort.

One thing which distinguishes this sort from other sorting algorithms is that it makes the minimum possible number of swaps, _n_ − 1 in the worst case.

```text
Best O(n^2); Average O(n^2); Worst O(n^2)
```

#### Define Main Condition

Now let’s define the main condition where we define our unordered list which needs to be passed to the above function we created.

So, pass the user-defined lists to function and print the returned sorted list using the print statement.

```text
if __name__ == '__main__':
    List = [3, 4, 2, 6, 5, 7, 1, 9]
    print('Sorted List:',selectionSort(List))
```

**Source Code**

```text

def selectionSort_Ascending(List):
    for i in range(len(List) - 1):
        minimum = i
        for j in range( i + 1, len(List)):
            if(List[j] < List[minimum]):
                minimum = j
        if(minimum != i):
            List[i], List[minimum] = List[minimum], List[i]
    return List

def selectionSort_Descending(List):
    for i in range(len(List) - 1):
        minimum = i
        for j in range(len(List)-1,i,-1):
            if(List[j] > List[minimum]):
                minimum = j
        if(minimum != i):
            List[i], List[minimum] = List[minimum], List[i]
    return List

if __name__ == '__main__':
    List1 = [3, 4, 2, 6, 5, 7, 1, 9]
    print('Sorted List Ascending:',selectionSort_Ascending(List1))
    print('Sorted List Descending:',selectionSort_Descending(List1))
```

**Output**

![Selection Sort using For loop in Python Output](https://i2.wp.com/codezup.com/wp-content/uploads/2020/01/Selection-Sort-using-For-loop-in-Python-Output.png?resize=665%2C129&ssl=1)
