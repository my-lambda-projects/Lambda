# Demonstration - Use Quick Sort for a large list of books

## Description of Algorithm

**Quick Sort** is a divide & conquer sorting algorithm. It utilizes ***recursion*** to break the original data set into many smaller sets that can be sorted more quickly.

*Question*
What are the two main pieces (cases) of any recursive algorithm?

## Steps for Quick Sort

1. Start by choosing a pivot 
   * First or last element is _easiest_
   * Middle, median, or random element usually performs _better_ (tends to split original data more evenly)
2. Move all elements _smaller_ than pivot to its left-hand side. Move all elements _larger_ than pivot to its right-hand side.
3. (recursive case) Recursively **Quick Sort** LHS and RHS until (base case) a side only contains a single element

**VIZUALIZATION**
[VisuAlgo](https://visualgo.net/en/sorting?slide=11)



## Lets go over some more

If you have a list of numbers:

```plaintext
[5 9 3 7 2 8 1 6]
```

You can choose a _pivot_ (any element will do; we'll choose the first): `5`, and
then make two more lists. One list contains numbers less than (or equal to) the
pivot, and one contins numbers greater than the pivot. Then arrange them with
the pivot in the middle:

```plaintext
[3 2 1] [5] [9 7 8 6]
```

Note that `5` is in its final resting place. We've sorted that one single
number. It won't move for the rest of the sort.

That's the guts of quicksort.

Now: quicksort the left and right sublists. That's the recursion.

An empty list just returns itself; it's already sorted. That the base case.

```python
def partition(data):
    left = []
    pivot = data[0]
    right = []

    for v in data[1:]:
        if v <= pivot:
            left.append(v)
        else:
            right.append(v)

    return left, pivot, right

def quicksort(data):
    if data == []:
        return data

    left, pivot, right = partition(data)

    return quicksort(left) + [pivot] + quicksort(right)
```

This code does not sort _in-place_. That is, it makes new lists left and right and constructs the results from that. 
An _in-place_ sort would reuse the original list and keep additional allocation to a minimum.


## Version A

Conventional, recursive Quick Sort implementation. In this example, can only be used on book lists of up to ??? elements because of default recursion depth allowed in Python.

1. To do _in-place_ **Quick Sort**, we need the parameters `low` and `high`, which tell us, with each recursive call, which part of the original array we are currently working on sorting (you could also think of them as `start` and `end` indices)

```python
def quick_sort_A( books, low, high ):

    # MORE CODE TO BE ADDED HERE
```

2. The ***base*** case for this particular sorting algorithm is when the `low`/`high` "cross over". We stop sorting when there is no longer a valid range of elements left to sort.

```python
def quick_sort_A( books, low, high ):
    # base case
    if low >= high:
        return books

    # MORE CODE TO BE ADDED HERE
```

3. The ***recursive*** case has a couple of parts. First, we need to select a pivot (in this solution we'll choose the first element).

```python
def quick_sort_A( books, low, high ):
    # base case
    if low >= high:
        return books
    # recursive case
    else:
        # divide
        pivot_index = low

        # MORE CODE TO BE ADDED HERE
```

4. Next, we will look at all elements on the pivot's right, until we reach the end of the subarray (`high`). If elements are _smaller_ than the pivot, we need to move them to it's LHS.

```python
def quick_sort_A( books, low, high ):
    # base case
    if low >= high:
        return books
    # recursive case
    else:
        # divide
        pivot_index = low
        # for each element in subarray
        for i in range(low, high):
            if books[i] < books[pivot_index]:
                # double swap to move smaller elements to correct index
                # move current element to the right of pivot
                temp = books[pivot_index+1]
                books[pivot_index+1] = books[i]
                books[i] = temp

                # swap pivot with element on its right
                temp = books[pivot_index]
                books[pivot_index] = books[pivot_index+1]
                books[pivot_index+1] = temp
                pivot_index += 1

        # MORE CODE TO BE ADDED HERE
```

5. Finally, we will make two recursive calls to our `quick_sort()` function to sort everything on the pivot's _left_ and everything on its _right_.

```python
def quick_sort_A( books, low, high ):
    # base case
    if low >= high:
        return books
    # recursive case
    else:
        # divide
        pivot_index = low
        # for each element in subarray
        for i in range(low, high):
            if books[i].genre < books[pivot_index].genre:
                # double swap to move smaller elements to correct index
                # move current element to the right of pivot
                temp = books[pivot_index+1]
                books[pivot_index+1] = books[i]
                books[i] = temp

                # swap pivot with element on its right
                temp = books[pivot_index]
                books[pivot_index] = books[pivot_index+1]
                books[pivot_index+1] = temp
                pivot_index += 1

        # conquer
        # Quick Sort everything left of the pivot
        books = quick_sort_A(books, low, pivot_index)
        # Quick Sort everything right of the pivot
        books = quick_sort_A(books, pivot_index+1, high)
  
        return books
```

## Version B

Because we exceed maximum recursion depth (999) allowed in Python's call stack with ***really*** big lists of books, here is an implementation that uses its own stack to get around this limitation so we can Quick Sort larger data sets. Code might look a little different, but that's only to manipulate `stack`. Sorting algorithm used is the same.

```python
# NOT done in place because for large inputs, we
# exceed Python's maximum recursion depth with 
# in-place Quick Sort
def quick_sort( books ):
    stack = []
    left = []
    right = []
    # put the original arr of books on the stack at index 0
    stack.insert(0, books)
    books = []
    # while there are still subarrays on the stack to be sorted
    while len(stack) > 0:
        # pop the next subarray off the stack to sort
        current = stack.pop(0)
        # if it's a single element, no further sorting needed, add to final books arr
        if isinstance(current, object):
            books.insert(0, current)
        elif current != None:
            # use FIRST element as pivot
            pivot = current.pop(0)
            # while there are still elements in this subarray
            while len(current) > 0:
                # if next element smaller than pivot, add to left arr
                if current[0].genre < pivot.genre:
                    # move to LHS 
                    left.append(current.pop(0))
                # else if next element larger than pivot, add to right arr
                elif current[0].genre > pivot.genre:
                    # move to RHS
                    right.append(current.pop(0))

            # Quick Sort LHS, RHS by adding left and right arrs to stack arr to be sorted
            if len(right) > 0:
                stack.insert(0, right)
            stack.insert(0, pivot)
            if len(left) > 0:
                stack.insert(0, left)
            print("*"+str(len(current)))

    return books
```