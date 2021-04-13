# Analysis of Algorithms

Analysis of the running time of various code snippets with respect to the input size of `n`.
<hr>

## a.
```py
a = 0
while a < n * n * n:
  a = a + n * n
```

### Linear time — O(n)

It takes `n` iterations for `a += n²` to reach `n³`

##### Example:
If given `n = 5`, then `n³ = 125`.

Each iteration of the while loop is adding `n * n` to `a`.
```py
25
50
75
100
125
```

Another way to think about this: How many times do we we add `n * n` to get `n * n * n`?

If `n = 5`: `(5 * 5) + (5 * 5) + (5 * 5) + (5 * 5) + (5 * 5)`

<hr>

## b.

```py
# array is of length n
i = len(array) - 1

while array[i] > x and i >= 0:
  i = i // 2
```
### Logarithmic time — O(log n)

The value of `i` is halved on each iteration of the loop.

<hr>

## c.

```js
sum = 0
for (i = 0; i < sqrt(n) / 2; i++)
  for (j = i; j < 8 + i; j++)
    for (k = j; k < 8 + j; k++)
      sum++
```

### Square root — `O(√n)` / `O(sqrt(n))`

The outer for loop grows with the size of `√n`. The `√n / 2` is a constant operation, as are the two inner for loops, so they're not considered.

<hr>

## d.

```js
sum = 0
for (i = 1; i < n; i *= 2)
  for (j = 0; j < n; j++)
    sum++
```

### Linearithmic — O(n log n)

Both for loops will grow as `n` grows, but the inner for loop is linear, and the outer for loop is logarithmic since `i` doubles with each iteration.

<hr>

## e.

```js
sum = 0
for (i = 0; i < n; i++)
  for (j = i + 1; j < n; j++)
    for (k = j + 1; k < n; k++)
      for (l = k + 1; l < 10 + k; l++)
        sum++
```

### Cubic — O(n³)

The inner-most for loop is considered constant (it only _ever_ iterates up to 10 and doesn't grow with input size `n`), whereas the other 3 for loops are linear and grows with `n`.

<hr>

## f.

```js
// bunnies === n
const bunnyEars = (bunnies) => {
  if (bunnies === 0) return 0
  return 2 + bunnyEars(bunnies - 1)
}
```

### Linear — O(n)

Each recursive call `returns 2 + previous recursive call's return value` with the exception of the base case `if` statement where 0 is returned.

What makes this linear is the value of `bunnies` or `n` is decremented by 1 with each recursive call until `n === 0`.

##### Example:

If `n = 4`:

```
bunnyEars(4)
2 + bunnyEars(3)
2 + 2 + bunnyEars(2)
2 + 2 + 2 + bunnyEars(1)
2 + 2 + 2 + 2 + bunnyEars(0)

2 + 2 + 2 + 2 + 0 = 8
```

<hr>

## g.

```js
// arraySize === n
const search = (array, arraySize, target) => {
  if (arraySize > 0) {
    if (array[arraySize - 1] === target) return true
    else return search(array, arraySize - 1, target)
  }
  return false
}
```

### Linear — O(n)

The number of recursive calls grows with the input size of `n`. This function is linear since each recursive call decrements `n` by 1 until the base case of `arraySize > 0` is reached or the `target` is found.

<hr>

#### _Resources_

_[Time-complexity of various Python operations](https://wiki.python.org/moin/TimeComplexity)_