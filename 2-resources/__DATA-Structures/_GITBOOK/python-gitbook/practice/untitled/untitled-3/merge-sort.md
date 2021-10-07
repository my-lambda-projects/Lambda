# Merge Sort

### What is Merge Sort?

In computer science, merge sort is an efficient, general-purpose, comparison-based sorting algorithm.

Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output.

It is a divide and conquers algorithm. In the divide and conquer paradigm, a problem is broken into pieces where each piece still retains all the properties of the larger problem – except its size.

#### [Advantages ](https://en.wikipedia.org/wiki/Merge_sort)of Merge Sort

1. [Simple implementation](https://codezup.com//insertion-sort-implementation-example-in-python/).

2. Much More Efficient for small and large data sets.

3. Adaptive that is efficient for the type of data sets that are already substantially sorted.

4. Stable Sorting Algorithm

#### Define Merge Sorting Function

Now, let’s define a new function named merge-sorting which accepts one parameter which is list we pass as an argument to this function.

So this function is to sort an array or list using a merge sorting algorithm.

As we have discussed above, to solve the original problem, each piece is solved individually and then the pieces are merged back together.

For that, we are going to use recursive calls to a new function named merge which accepts two sorted arrays to form a single sort array.

Now in the merge-sort function, the base condition for our recursive call is that if the length of an array or list is equal to 0 or 1 then simply return the first element of the array.

Otherwise, just divide the array into two equal halves and pass both arrays to recursive calls of merge-sort.

And at last, we are going to call merge function after each recursive call to join both sorted array.

```text
def mergeSort(x):
    if len(x) == 0 or len(x) == 1:
        return x
    else:
        middle = len(x)//2
        a = mergeSort(x[:middle])
        b = mergeSort(x[middle:])
        return merge(a,b)
```

#### Define Merge Function

Now we are breaking the array until they are divided individually. So what we want is just join the arrays that we passed in a sorted way to this function and then returned the new array as a result.

```text
def merge(a,b):
    c = []
    while len(a) != 0 and len(b) != 0:
        if a[0] < b[0]:
            c.append(a[0])
            a.remove(a[0])
        else:
            c.append(b[0])
            b.remove(b[0])
    if len(a) == 0:
        c += b
    else:
        c += a
    return c
```

**Complexity**

The overall time complexity of Merge is O\(nLogn\).

The space complexity of Merge-sort is O\(n\).

This means that this algorithm takes a lot of space and may slow down operations for large data sets.

#### Define Main Condition

Now, let’s create a main condition where we need to call the above function and pass the list which needs to be sorted.

So let’s manually defined the list which we want to pass as an argument to the function.

```text
if __name__ == '__main__':
    List = [3, 4, 2, 6, 5, 7, 1, 9]
    print('Sorted List : ',mergeSort(List))
```

**Source Code**

```text

def merge(a,b):
    c = []
    while len(a) != 0 and len(b) != 0:
        if a[0] < b[0]:
            c.append(a[0])
            a.remove(a[0])
        else:
            c.append(b[0])
            b.remove(b[0])
    if len(a) == 0:
        c += b
    else:
        c += a
    return c

# Code for merge sort

def mergeSort(x):
    if len(x) == 0 or len(x) == 1:
        return x
    else:
        middle = len(x)//2
        a = mergeSort(x[:middle])
        b = mergeSort(x[middle:])
        return merge(a,b)

if __name__ == '__main__':
    List = [3, 4, 2, 6, 5, 7, 1, 9]
    print('Sorted List : ',mergeSort(List))
```

**Output**

![Merge Sort implementation example in Python Output](https://i2.wp.com/codezup.com/wp-content/uploads/2020/01/Merge-Sort-implementation-example-in-Python-Output.png?resize=665%2C264&ssl=1)
