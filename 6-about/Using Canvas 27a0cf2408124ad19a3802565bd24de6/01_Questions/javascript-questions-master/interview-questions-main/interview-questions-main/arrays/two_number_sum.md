# Two Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

### Sample Input

```python
array = [3, 5, -4, 8, 11, 1, -1, 6]
```

### Sample Output

```python
[-1, 11]
```

## Pseudocode

-   Initialize missing_num_map HashMap to keep track of values ((target - num): num)
-   Traverse through every num in array
    -   If num is a key in missing_num
        -   Return the num and the value of num in hashMap
    -   Else
        -   Add the difference: num in hashmap
-   Return empty array

## Solution

```python
def two_number_sum(array, target):
    missing_num_map = {}
    for num in array:
        difference = target - num
        if num in missing_num_map:
            return [num, missing_num_map[num]]
        else:
            missing_num_map[difference] = num
    return []
```
