# BFT

- create an empty queue
- create an empty visited dictionary

```
q = []
visited = {}
```

-  enqueue the first path

```
q = [[1]]
visited = {}
```

### in a while loop iteration 1

-  dequeue the path

```
q = [[1]]

visited = {}

[1]
```

-  get the last vertex / node from the path

```
q = []

visited = {}

[1]

1
```

- if the vartex is not in visited add the path to the visited dictionary at the key of the vertex

```
q = []

visited = { 1: [1] }
[1]

```

- for each of the neighbors
- copy the path as new_path
```
q = []

visited = { 1: [1] }

new_path = [1]
```

- append the neighbor to the new path

```
q = []

visited = { 1: [1] }

new_path = [1, 2]
```
- enqueue the new path.

```
q = [[1, 2]]

visited = { 1: [1] }

new_path = [1, 2]
```
### while in loop iteration 2
-  dequeue the path

```
q = [[1, 2]]

visited = {}

[1, 2]
```

-  get the last vertex / node from the path

```
q = []

visited = {}

path [1, 2]

2
```

- if the vartex is not in visited add the path to the visited dictionary at the key of the vertex

```
q = []

visited = { 1: [1], 2: [1, 2]}

path [1, 2]

```

- for each of the neighbors
- copy the path as new_path
```
q = []

visited = { 1: [1], 2: [1, 2]}

new_path = [1]
```

- append the neighbor to the new path

```
q = []

visited = { 1: [1], 2: [1, 2]}

new_path = [1, 2, 3]
```
- enqueue the new path.

```
q = [[1, 2, 3]]

visited = { 1: [1], 2: [1, 2]}

new_path = [1, 2]
```
- copy the path as new_path
```
q = [[1, 2, 3]]

visited = { 1: [1], 2: [1, 2]}

new_path = [1, 2]
```

- append the neighbor to the new path

```
q = [[1, 2, 3]]

visited = { 1: [1], 2: [1, 2]}

new_path = [1, 2, 4]
```
- enqueue the new path.

```
q = [[1, 2, 3], [1, 2, 4]]

visited = { 1: [1], 2: [1, 2]}

new_path = [1, 2, 4]
```

# DFT

```
q = []
visited = {}
```