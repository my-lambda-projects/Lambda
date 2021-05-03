# Validate Subsequence

Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array. For instance, the numbers `[1, 3, 4]` form a subsequence of the array `[1,2,3,4]`, and so do the numbers `[2,4]`. Note that a single number in an array and the array itself are both valid subsequences of the array/

### Sample Input

```python
array = [5,1,22,25,6,-1,8,10]
sequence = [1,6,1,10]
```

### Sample Output

```python
True
```

## Pseudocode

-   Traverse through array
    -   If num in array is first item in sequence, shift
-   Return whether the sequence is empty

## Solution

```python
def isValidSubsequence(array,sequence):
    for num in array:
        if len(sequence) == 0:
            break
        if sequence[0] == num:
            sequence.pop(0)
    return len(sequence) == 0
```
