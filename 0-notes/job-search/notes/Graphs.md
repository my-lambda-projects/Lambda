# Graphs

**graph**:  collections of data represented by nodes and connections between nodes
**graphs**:  way to formally represent network; ordered pairs
**graphs**:  modeling relations between many items; Facebook friends (you = node; friendship = edge; bidirectional); twitter = unidirectional
**graph theory**:  study of graphs
**big O of graphs**:  G = V(E)


trees are a type of graph

Components required to make a graph:

- **nodes or vertices**:  represent objects in a dataset (cities, animals, web pages)
- **edges**:  connections between vertices; can be bidirectional
- **weight**:  cost to travel across an edge; optional (aka cost)

Useful for:

- maps
- networks of activity
- anything you can represent as a network
- multi-way relational data

Types of Graphs:

- **directed**:  can only move in one direction along edges; which direction indicated by arrows
- **undirected**:  allows movement in both directions along edges; bidirectional
- **cyclic**:  weighted; edges allow you to revisit at least 1 vertex; example weather
- **acyclical**:  vertices can only be visited once; example recipe

Two common ways to represent graphs in code:

- **adjacency lists**:  graph stores list of vertices; for each vertex, it stores list of connected vertices
- **adjacency matrices**:  two-dimensional array of lists with built-in edge weights; denotes no relationship

Both have strengths and weaknesses.

| type | space complexity | add vertex | remove vertex | add edge | remove edge | find edge | get all edges from vertex |
|:----:|:----------------:|:----------:|:-------------:|:--------:|:-----------:|:---------:|:-------------------------:|
| adjacency matrix | O(v^2) | O(v) | O(v^2) | O(1) | O(1) | O(1) | O(v) |
| adjacency list | O(v+E) | O(1) | O(v) | O(1) | O(1) | O(1) | O(1) |

Worst-case space complexity of adjacency list is when graph is dense.

## Breadth-First Search

Can use breadth-first search when searching a graph; explores graph outward in rings of increasing distance from starting vertex; never attempts to explore vertex it is or has already explored

### Applications of BFS

- pathfinding, routing
- web crawlers
- find neighbor nodes in P2P network
- finding people/connections away on social network
- find neighboring locations on graph
- broadcasting on a network
- cycle detection in a graph
- finding connected components
- solving several theoretical graph problems

### Coloring BFS

It's useful to color vertexes as you arrive at them and as you leave them behind as already searched.

**unlisted**:  white
**vertices whose neighbors are being explored**:  gray
**vertices with no unexplored neighbors**:  black

### BFS Pseudocode

```python
def BFS(graph, start_vert):
    for v of graph.vertices:
        v.color = white
    start_vert.color = gray
    queue.enqueue(start_vert)
    while !queue isEmpty():
    # peek at head but don't dequeue
    u = queue[0]
    for v of u.neighbors:
        if v.color == white:
            v.color == gray
            queue.enqueue(v)
    queue.dequeue()
    u.color = black
```

### BFS Steps

1. Mark graph vertices white.
2. Mark starting vertex gray.
3. Enqueue starting vertex.
4. Check if queue is not empty.
5. If not empty, peek at first item in queue.
6. Loop through that vertex's neighbors.
7. Check if unvisited.
8. If unvisited, mark as gray and enqueue vertex.
9. Dequeue current vertex and mark as black.
10. Repeat until all vertices are explored.

## Depth-First Search

dives down the graph as far as it can before backtracking and exploring another branch; never attempts to explore a vertex it has already explored or is in the process of exploring; exact order will vary depending on which branches get taken first and which is starting vertex

### Applications of DFS

- preferred method for exploring a graph if we want to ensure we visit every node in graph
- finding minimum spanning trees of weighted graphs
- pathfinding
- detecting cycles in graphs
- solving and generating mazes
- topological sorting, useful for scheduling sequences of dependent jobs

### DFS Pseudocode

```python
# recursion
def explore(graph):
    visit(this_vert)
    explore(remaining_graph)
```

```python
# iterative
def DFS(graph):
    for v of graph.verts:
        v.color = white
        v.parent = null
    for v of graph.verts:
        if v.color == white:
            DFS_visit(v)

def DFS_visit(v):
    v.color = gray
    for neighbor of v.adjacent_nodes:
        if neighbor.color == white:
            neighbor.parent = v
            DFS_visit(neighbor)
    v.color = black
```

### DFS Steps

1. Take graph as parameter.
2. Marks all vertices as unvisited.
3. Sets vertex parent as null.
4. Passes each unvisited vertex into DFS_visit().
5. Mark current vertex as gray.
6. Loops through its unvisited neighbors.
7. Sets parent and makes recursive call to DFS_visit().
8. Marks vertex as black.
9. Repeat until done.

## Connected Components

**connected components**:  in a disjoint graph, groups of nodes on a graph that are connected with each other

### Uses

- typically very large graphs, networks
- social networks
- networks (which devices can reach one another)
- epidemics (how spread, who started, where next)

**key to finding connected components**:  searching algorithms, breadth-first search

### How to find connected componnents

- for each node in graph:
  - has it been explored
  - if no, do BFS
  - all nodes reached are connected
  - if yes, already in connected component
  - go to next node

**strongly connected components**:  any node in this group can get to any other node
