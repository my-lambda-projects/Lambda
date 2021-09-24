Lets say we have a python list of numbers that we want to sort:

```python
my_list = [8, 2, 5, 4, 1, 3]
```

We can start just by arbitrarily that the left side is sorted, and that the number there is already sorted.  We can do this because by definition, one element _is_ sorted.  There are no other configurations to put the data in.

I'll mark this in the example by adding some space, but to the computer, this is still just a normal array

```python
my_list = [8,    2, 5, 4, 1, 3]
```

The next step is to look at the first element in the unsorted side and determine where it goes.  If it's greater than that, it stays in the same place.  If not, we move it left 1 index.

If it's larger, or it's now the first index, we've found it's home.  Otherwise, we continue with the same process.

2 is less than 8, so we pop the 2 out to a temp variable, move the 8 to the right

```python
2
my_list = [8,    2, 5, 4, 1, 3]
```
```python
2
my_list = [8,    8, 5, 4, 1, 3]
```

Then we determine if the two goes in the 8's old spot.  What are the two rules?  If it's bigger, or we're at the first element.  So the 2 is now up front _and_ the first two elements are sorted.

```python
2
my_list = [2, 8,    5, 4, 1, 3]
```

We continue the process with the 5, its less than  8 but greater than 2.

```python
5
my_list = [2, 5, 8,     4, 1, 3]
```

From here, we go element by element, until all the elements are on the sorted side.




# Insertion Sort

## Key Points

* A problem with a defined start and end point lends itself to an iterative solution
* Management of iteration is key to solving this problem

## Lets make a plan