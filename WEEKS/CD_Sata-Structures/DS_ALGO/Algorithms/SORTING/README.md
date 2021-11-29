# CSEU3-SORTING-GP
DAY 1 and 2 of algorithms week sorting repo

## Getting the time complexity of an iterative solution
- Compute the Big-O for each line in isolation.
- If something is in a loop, multiply it's Big-O by the loop for the total.
- If two things happen sequentially, add the Big-Os.
- Drop leading multiplicative constants from each Big-O.
- From all the Big-Os that are added, drop all but the biggest, dominating one.

```python
items = [1, 2, 3, 4, 5, 234] # size of 6

n = 6 # O(1)

for item in items: # O(n) * O(1)
    print(item) # O(1)
for item in items: # O(n) * O(1)
    print(item) # O(1)

# O(1) + O(n) * 1 + O(1) + O(n) * 1 + O(1)
# O(3) + O(2n)
# O(1) + O(n)
# O(n)

```