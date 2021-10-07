# D2-Graphs 2

{% embed url="https://gist.github.com/bgoonz/4dc35438f8c293cf68e81c0d73ddfe1a" %}

![](../../.gitbook/assets/image%20%284%29%20%286%29%20%285%29%20%281%29%20%286%29.png)

## Objective 01 - Represent a breadth-first-search of a graph in pseudo-code and recall typical applications for its use

### Overview <a id="overview"></a>

One method we can use when searching a graph is a **breadth-first search** \(BFS\). This sorting algorithm explores the graph outward in rings of increasing distance from the starting vertex.

The algorithm never attempts to explore a vert it has already explored or is currently exploring.

For example, when starting from the upper left, the numbers on this graph show a vertex visitation order in a BFS:

![https://camo.githubusercontent.com/b22308d5dd2fe7ee7f295f89482bdab2f8e8976f/68747470733a2f2f692e696d6775722e636f6d2f314c506e4f41582e6a7067](https://camo.githubusercontent.com/b22308d5dd2fe7ee7f295f89482bdab2f8e8976f/68747470733a2f2f692e696d6775722e636f6d2f314c506e4f41582e6a7067)

We followed the edges represented with thicker black arrows. We did not follow the edges represented with thinner grey arrows because we already visited their destination nodes.

The exact order will vary depending on which branches get taken first and which vertex is the starting vertex.

_Note: it's essential to know the distinction between a breadth-first search and a breadth-first traversal. A breadth-first traversal is when you visit each vertex in the breadth-first order and do something during the traversal. A breadth-first search is when you search through vertexes in the breadth-first order until you find the target vertex. A breadth-first search usually returns the shortest path from the starting vertex to the target vertex once the target is found._

#### Applications of BFS <a id="applications-of-bfs"></a>

- Pathfinding, Routing
- Find neighbor nodes in a P2P network like BitTorrent
- Web crawlers
- Finding people `n` connections away on a social network
- Find neighboring locations on the graph
- Broadcasting in a network
- Cycle detection in a graph
- Finding [Connected Components \(Links to an external site.\)](https://en.wikipedia.org/wiki/Connected_component_%28graph_theory%29)
- Solving several theoretical graph problems

#### Coloring Vertexes <a id="coloring-vertexes"></a>

As we explore the graph, it is useful to color verts as we arrive at them and as we leave them behind as "already searched".

Unvisited verts are white, verts whose neighbors are being explored are gray, and verts with no unexplored neighbors are black.

#### Keeping Track of What We Need to Explore <a id="keeping-track-of-what-we-need-to-explore"></a>

In a BFS, it's useful to track which nodes we still need to explore. For example, in the diagram above, when we get to node 2, we know that we also need to explore nodes 3 and 4.

We can track that by adding neighbors to a _queue_ \(which remember is first in, first out\), and then explore the verts in the queue one by one.

### Follow Along <a id="follow-along"></a>

#### Pseudo-code for BFS <a id="pseudo-code-for-bfs"></a>

Let's explore some pseudo-code that shows a basic implementation of a breadth-first-search of a graph. Make sure you can read the pseudo-code and understand what each line is doing before moving on.

```text
BFS(graph, startVert):
    for v of graph.vertexes:
        v.color = white

    startVert.color = gray
        queue.enqueue(startVert)

    while !queue.isEmpty():
        u = queue[0]  // Peek at head of the queue, but do not dequeue!

        for v of u.neighbors:
            if v.color == white:
                v.color = gray
                queue.enqueue(v)

        queue.dequeue()
        u.color = black
```

You can see that we start with a graph and the vertex we will start on. The very first thing we do is go through each of the vertices in the graph and mark them with the color white. At the outset, we mark all the verts as unvisited.

Next, we mark the starting vert as gray. We are exploring the starting verts’ neighbors. We also enqueue the starting vert, which means it will be the first vert we look at once we enter the while loop.

The condition we check at the outset of each while loop is if the queue is **not** empty. If it is not empty, we peek at the first item in the queue by storing it in a variable.

Then, we loop through each of that vert's neighbors and:

- We check if it is unvisited \(the color white\).
- If it is unvisited, we mark it as gray \(meaning we will explore its neighbors\).
- We enqueue the vert.

Next, we dequeue the current vert we've been exploring and mark that vert as black \(marking it as visited\).

We continue with this process until we have explored all the verts in the graph.

### Challenge <a id="challenge"></a>

On your own, complete the following tasks:

1. Please spend a few minutes researching to find a unique use-case of a breadth-first-search that we did not mention in the list above.
2. Using the graph represented below, draw a picture of the graph and label each of the verts to show the correct vertex visitation order for a breadth-first-search starting with vertex `"I"`.

   ```text
   class Graph:
       def __init__(self):
           self.vertices = {
                               "A": {"B", "C", "D"},
                               "B": {},
                               "C": {"E", "F"},
                               "D": {"G"},
                               "E": {"G"},
                               "F": {"J"},
                               "G": {},
                               "H": {"C", "J", "K"},
                               "I": {"D", "E", "H"},
                               "J": {"L"},
                               "K": {"C"},
                               "L": {"M"},
                               "M": {},
                               "N": {"H", "K", "M"}
                           }
   ```

3. Besides marking verts with colors as in the pseudo-code example above, how else could you track the verts we have already visited?

### Additional Resources <a id="additional-resources"></a>

- [https://brilliant.org/wiki/breadth-first-search-bfs/](https://brilliant.org/wiki/breadth-first-search-bfs/)

![](../../.gitbook/assets/image%20%284%29%20%286%29%20%285%29%20%281%29%20%286%29.png)

## Objective 02 - Represent a depth-first-search of a graph in pseudo-code and recall typical applications for its use

### Overview <a id="overview"></a>

Another method we can use when searching a graph is a **depth-first search** \(DFS\). This searching algorithm _"dives"_ _"down"_ the graph as far as it can before backtracking and exploring another branch.

The algorithm never attempts to explore a vert it has already explored or is exploring.

For example, when starting from the upper left, the numbers on this graph show a vertex visitation order in a DFS:

![https://camo.githubusercontent.com/30ab40a62286d6fe39210efa52f5b802f383daa0/68747470733a2f2f692e696d6775722e636f6d2f565654433959782e6a7067](https://camo.githubusercontent.com/30ab40a62286d6fe39210efa52f5b802f383daa0/68747470733a2f2f692e696d6775722e636f6d2f565654433959782e6a7067)

We followed the edges represented with thicker black arrows. We did not follow the edges represented with thinner grey arrows because we already visited their destination nodes.

The exact order will vary depending on which branches get taken first and which vertex is the starting vertex.

#### Applications of DFS <a id="applications-of-dfs"></a>

DFS is often the preferred method or exploring a graph _if we want to ensure we visit every node in the graph_. For example, let's say that we have a graph representing all the friendships in the entire world. We want to find a path between two known people, `Andy` and `Sarah`. If we used a depth-first search in this scenario, we could end up exceptionally far away from `Andy` while still not finding a path to `Sarah`. Using a DFS, we will eventually find the path, but it won't find the shortest route, and it will also likely take a long time.

So, this is an example of where a DFS _would not work well_. What about a genuine use case for DFS. Here are a few examples:

- Finding [Minimum Spanning Trees \(Links to an external site.\)](https://en.wikipedia.org/wiki/Minimum_spanning_tree) of weighted graphs
- Pathfinding
- Detecting cycles in graphs
- [Topological sorting \(Links to an external site.\)](https://en.wikipedia.org/wiki/Topological_sorting), useful for scheduling sequences of dependent jobs
- Solving and generating mazes

#### Coloring Vertexes <a id="coloring-vertexes"></a>

Again, as we explore the graph, it is useful to color verts as we arrive at them and as we leave them behind as "already searched".

Unvisited verts are white, verts whose neighbors are being explored are gray, and verts with no unexplored neighbors are black.

#### Recursion <a id="recursion"></a>

Since DFS will pursue leads in the graph as far as it can, and then "back up" to an earlier branch point to explore that way, recursion is an excellent approach to help "remember" where we left off.

Looking at it with pseudo-code to make the recursion more clear:

```python
explore(graph) {
    visit(this_vert);
    explore(remaining_graph);
}
```

### Follow Along <a id="follow-along"></a>

#### Pseudo-code for DFS <a id="pseudo-code-for-dfs"></a>

Let's explore some pseudo-code that shows a basic implementation of a depth-first-search of a graph. Make sure you can read the pseudo-code and understand what each line is doing before moving on.

```python
DFS(graph):
    for v of graph.verts:
        v.color = white
        v.parent = null

    for v of graph.verts:
        if v.color == white:
            DFS_visit(v)

DFS_visit(v):
    v.color = gray

    for neighbor of v.adjacent_nodes:
        if neighbor.color == white:
            neighbor.parent = v
            DFS_visit(neighbor)

    v.color = black
```

You can see that we have two functions in our pseudo-code above. The first function, `DFS()` takes the graph as a parameter and marks all the verts as unvisited \(white\). It also sets the parent of each vert to `null`. The next loop in this function visits each vert in the graph, and if it is unvisited, it passes that vert into our second function `DFS_visit()`.

`DFS_visit()` starts by marking the vert as gray \(in the process of being explored\). Then, it loops through all of its unvisited neighbors. In that loop, it sets the parent and then makes a recursive call to the `DFS_visit()`. Once it's done exploring all the neighbors, it marks the vert as black \(visited\).

### Challenge <a id="challenge"></a>

On your own, complete the following tasks:

1. Please spend a few minutes researching to find a unique use-case of a depth-first search that we did not mention in the list above.
2. Using the graph represented below, draw a picture of the graph and label each of the verts to show the correct vertex visitation order for a depth-first-search starting with vertex `"I"`.

```python
class Graph:
    def __init__(self):
        self.vertices = {
                            "A": {"B", "C", "D"},
                            "B": {},
                            "C": {"E", "F"},
                            "D": {"G"},
                            "E": {"G"},
                            "F": {"J"},
                            "G": {},
                            "H": {"C", "J", "K"},
                            "I": {"D", "E", "H"},
                            "J": {"L"},
                            "K": {"C"},
                            "L": {"M"},
                            "M": {},
                            "N": {"H", "K", "M"}
                        }
```

### Additional Resources <a id="additional-resources"></a>

- [https://brilliant.org/wiki/depth-first-search-dfs/ \(Links to an external site.\)](https://brilliant.org/wiki/depth-first-search-dfs/)

![](../../.gitbook/assets/image%20%284%29%20%286%29%20%285%29%20%281%29%20%286%29.png)

## Objective 03 - Implement a breadth-first search on a graph

### Overview <a id="overview"></a>

Now that we've looked at and understand the basics of a breadth-first search \(BFS\) on a graph, let's implement a BFS algorithm.

### Follow Along <a id="follow-along"></a>

Before defining our breadth-first search method, review our `Vertex` and `Graph` classes that we defined previously.

```python
class Vertex:
    def __init__(self, value):
        self.value = value
        self.connections = {}

    def __str__(self):
        return str(self.value) + ' connections: ' + str([x.value for x in self.connections])

    def add_connection(self, vert, weight = 0):
        self.connections[vert] = weight

    def get_connections(self):
        return self.connections.keys()

    def get_value(self):
        return self.value

    def get_weight(self, vert):
        return self.connections[vert]
```

```python
class Graph:
    def __init__(self):
        self.vertices = {}
        self.count = 0

    def __contains__(self, vert):
        return vert in self.vertices

    def __iter__(self):
        return iter(self.vertices.values())

    def add_vertex(self, value):
        self.count += 1
        new_vert = Vertex(value)
        self.vertices[value] = new_vert
        return new_vert

    def add_edge(self, v1, v2, weight = 0):
        if v1 not in self.vertices:
            self.add_vertex(v1)
        if v2 not in self.vertices:
            self.add_vertex(v2)
        self.vertices[v1].add_connection(self.vertices[v2], weight)

    def get_vertices(self):
        return self.vertices.keys()
```

Now, we will add a `breadth_first_search` method to our `Graph` class. One of the most common and simplest ways to implement a BFS is to use a queue to keep track of unvisited nodes and a set to keep track of visited nodes. Let's start by defining the start of our function with these structures:

```python
class Graph:
    def __init__(self):
        self.vertices = {}
        self.count = 0

    def __contains__(self, vert):
        return vert in self.vertices

    def __iter__(self):
        return iter(self.vertices.values())

    def add_vertex(self, value):
        self.count += 1
        new_vert = Vertex(value)
        self.vertices[value] = new_vert
        return new_vert

    def add_edge(self, v1, v2, weight = 0):
        if v1 not in self.vertices:
            self.add_vertex(v1)
        if v2 not in self.vertices:
            self.add_vertex(v2)
        self.vertices[v1].add_connection(self.vertices[v2], weight)

    def get_vertices(self):
        return self.vertices.keys()

    def breadth_first_search(self, starting_vert):
        to_visit = Queue()
        visited = set()
        to_visit.enqueue(starting_vert)
        visited.add(starting_vert)
        while to_visit.size() > 0:
            current_vert = to_visit.dequeue()
            for next_vert in current_vert.get_connections():
                if next_vert not in visited:
                    visited.add(next_vert)
                    to_visit.enqueue(next_vert)
```

### Challenge <a id="challenge"></a>

1. What is time complexity in Big O notation of a breadth-first search on a graph with `V` vertices and `E` edges?
2. Which method will find the _**shortest**_ path between a starting point and any other reachable node? A breadth-first search or a depth-first search?

### Additional Resources <a id="additional-resources"></a>

- [https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/ \(Links to an external site.\)](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)

![](../../.gitbook/assets/image%20%284%29%20%286%29%20%285%29%20%281%29%20%286%29.png)

## Objective 04 - Implement a depth-first search on a graph

### Overview <a id="overview"></a>

The depth-first search algorithm on a graph starts at an arbitrary vertex in the graph and explores as far as possible down each branch before backtracking. So, you start at the starting vertex, mark it as visited, and then move to an adjacent unvisited vertex. You continue this loop until every reachable vertex is visited.

### Follow Along <a id="follow-along"></a>

Before defining our depth-first search method, review our `Vertex` and `Graph` classes that we defined previously.

```python
class Vertex:
    def __init__(self, value):
        self.value = value
        self.connections = {}

    def __str__(self):
        return str(self.value) + ' connections: ' + str([x.value for x in self.connections])

    def add_connection(self, vert, weight = 0):
        self.connections[vert] = weight

    def get_connections(self):
        return self.connections.keys()

    def get_value(self):
        return self.value

    def get_weight(self, vert):
        return self.connections[vert]
```

```python
class Graph:
    def __init__(self):
        self.vertices = {}
        self.count = 0

    def __contains__(self, vert):
        return vert in self.vertices

    def __iter__(self):
        return iter(self.vertices.values())

    def add_vertex(self, value):
        self.count += 1
        new_vert = Vertex(value)
        self.vertices[value] = new_vert
        return new_vert

    def add_edge(self, v1, v2, weight = 0):
        if v1 not in self.vertices:
            self.add_vertex(v1)
        if v2 not in self.vertices:
            self.add_vertex(v2)
        self.vertices[v1].add_connection(self.vertices[v2], weight)

    def get_vertices(self):
        return self.vertices.keys()
```

Now, we will add a `depth_first_search` method to our `Graph` class. One of the most common and simplest ways to implement a DFS is to use a set to keep track of visited vertices and use recursion to manage the visitation order. Let's now define our function:

```python
class Graph:
    def __init__(self):
        self.vertices = {}
        self.count = 0

    def __contains__(self, vert):
        return vert in self.vertices

    def __iter__(self):
        return iter(self.vertices.values())

    def add_vertex(self, value):
        self.count += 1
        new_vert = Vertex(value)
        self.vertices[value] = new_vert
        return new_vert

    def add_edge(self, v1, v2, weight = 0):
        if v1 not in self.vertices:
            self.add_vertex(v1)
        if v2 not in self.vertices:
            self.add_vertex(v2)
        self.vertices[v1].add_connection(self.vertices[v2], weight)

    def get_vertices(self):
        return self.vertices.keys()

    def depth_first_search(self, vertex, visited = set()):
        visited.add(vertex)
        for next_vert in vertex.get_connections():
            if next_vert not in visited:
                self.depth_first_search(next_vert, visited)
```

### Challenge <a id="challenge"></a>

1. Does a depth-first search reliably find the shortest path?
2. If you didn't want to use recursion, what data structure could you use to write an iterative depth-first search?

### Additional Resources <a id="additional-resources"></a>

- [https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/ \(Links to an external site.\)](https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/)

![](../../.gitbook/assets/image%20%284%29%20%286%29%20%285%29%20%281%29%20%286%29.png)
