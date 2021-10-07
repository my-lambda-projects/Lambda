# DFS

**Depth-first search \(DFS\)** is an [algorithm](https://brilliant.org/wiki/algorithm/) for searching a [graph](https://brilliant.org/wiki/depth-first-search-dfs/%28https://brilliant.org/wiki/graphs/%29) or [tree](https://brilliant.org/wiki/trees-basic/) data structure. The algorithm starts at the root \(top\) node of a tree and goes as far as it can down a given branch \(path\), then backtracks until it finds an unexplored path, and then explores it. The algorithm does this until the entire graph has been explored. Many problems in computer science can be thought of in terms of graphs. For example, analyzing networks, mapping routes, scheduling, and finding [spanning trees](https://brilliant.org/wiki/spanning-trees/) are graph problems. To analyze these problems, [graph-search algorithms](https://brilliant.org/wiki/graph-search-algorithm/) like depth-first search are useful.

Depth-first searches are often used as subroutines in other more complex algorithms. For example, the [matching algorithm](https://brilliant.org/wiki/matching-algorithms/), [Hopcroft–Karp](https://brilliant.org/wiki/hopcroft-karp/), uses a DFS as part of its algorithm to help to find a [matching](https://brilliant.org/wiki/matching/) in a graph. DFS is also used in [tree-traversal](https://brilliant.org/wiki/traversals/) algorithms, also known as tree searches, which have applications in the [traveling-salesman problem](https://brilliant.org/wiki/travelling-salesman-problem/) and the [Ford-Fulkerson algorithm](https://brilliant.org/wiki/ford-fulkerson-algorithm/).

![](https://ds055uzetaobb.cloudfront.net/brioche/uploads/RcIWVldE2B-1.png?width=1200)

> **How do you solve a maze?**
>
> Depth-first search is a common way that many people naturally approach solving problems like mazes. First, we select a path in the maze \(for the sake of the example, let's choose a path according to some rule we lay out ahead of time\) and we follow it until we hit a dead end or reach the finishing point of the maze. If a given path doesn’t work, we backtrack and take an alternative path from a past junction, and try that path. Below is an animation of a DFS approach to solving this maze.
>
> ![DFS is a great way to solve mazes and other puzzles that have a single solution.](https://d18l82el6cdm1i.cloudfront.net/uploads/mf7THWHAbL-mazegif.gif)DFS is a great way to solve mazes and other puzzles that have a single solution.

**Contents**

- [Depth-first Search](https://brilliant.org/wiki/depth-first-search-dfs/#depth-first-search)
- [Implementing Depth-first Search](https://brilliant.org/wiki/depth-first-search-dfs/#implementing-depth-first-search)
- [Complexity of Depth-first Search](https://brilliant.org/wiki/depth-first-search-dfs/#complexity-of-depth-first-search)
- [Applications](https://brilliant.org/wiki/depth-first-search-dfs/#applications)
- [References](https://brilliant.org/wiki/depth-first-search-dfs/#references)

### Depth-first Search

The main strategy of depth-first search is to explore deeper into the graph whenever possible. Depth-first search explores edges that come out of the most recently discovered vertex, ss. Only edges going to unexplored vertices are explored. When all of ss’s edges have been explored, the search backtracks until it reaches an unexplored neighbor. This process continues until all of the vertices that are reachable from the original source vertex are discovered. If there are any unvisited vertices, depth-ﬁrst search selects one of them as a new source and repeats the search from that vertex. The algorithm repeats this entire process until it has discovered every vertex. This algorithm is careful not to repeat vertices, so each vertex is explored once. DFS uses a [stack](https://brilliant.org/wiki/stacks/) data structure to keep track of vertices.

> Here are the basic steps for performing a depth-first search:
>
> - Visit a vertex ss.
> - Mark ss as visited.
> - Recursively visit each unvisited vertex attached to ss.

This animation illustrates the depth-first search algorithm:

![](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

Note: This animation does not show the marking of a node as "visited," which would more clearly illustrate the backtracking step.

> Fill out the following graph by labeling each node 1 through 12 according to the order in which the depth-first search would visit the nodes:
>
> ![source:wikipedia](https://ds055uzetaobb.cloudfront.net/brioche/uploads/7pQYGWtfpI-blankgraph.png?width=1200)source:wikipedia
>
> Show solution

### Implementing Depth-first Search

Below are examples of pseudocode and Python code implementing DFS both recursively and non-recursively. This algorithm generally uses a [stack](https://brilliant.org/wiki/stacks/) in order to keep track of visited nodes, as the last node seen is the next one to be visited and the rest are stored to be visited later.

> **Pseudocode**[\[1\]](https://brilliant.org/wiki/depth-first-search-dfs/#citation-1)
>
> |     |     |
> | :-- | :-- |
>
> **Python Implementation without Recursion**
>
> |     |     |
> | :-- | :-- |

DFS can also be implemented using recursion, which greatly reduces the number of lines of code.

> **Python Implementation Using Recursion**
>
> |     |     |
> | :-- | :-- |

It is common to modify the algorithm in order to keep track of the edges instead of the vertices, as each edge describes the nodes at each end. This is useful when one is attempting to reconstruct the traversed tree after processing each node. In case of a forest or a group of trees, this algorithm can be expanded to include an outer loop that iterates over all trees in order to process every single node.

There are three different strategies for implementing DFS: _pre-order_, _in-order_, and _post-order_.

**Pre-order** DFS works by visiting the current node and successively moving to the left until a leaf is reached, visiting each node on the way there. Once there are no more children on the left of a node, the children on the right are visited. This is the most standard DFS algorithm.

Instead of visiting each node as it traverses down a tree, an **in-order** algorithm finds the leftmost node in the tree, visits that node, and subsequently visits the parent of that node. It then goes to the child on the right and finds the next leftmost node in the tree to visit.

A **post-order** strategy works by visiting the leftmost leaf in the tree, then going up to the parent and down the second leftmost leaf in the same branch, and so on until the parent is the last node to be visited within a branch. This type of algorithm prioritizes the processing of leaves before roots in case a goal lies at the end of a tree.

### Complexity of Depth-first Search

Depth-first search visits every vertex once and checks every edge in the graph once. Therefore, DFS complexity is O\(V + E\)O\(V+E\). This assumes that the graph is represented as an [adjacency list](https://brilliant.org/wiki/graphs-intermediate/).

**DFS vs BFS**

[Breadth-first search](https://brilliant.org/wiki/breadth-first-search-bfs/) is less space-efficient than depth-first search because BFS keeps a priority queue of the entire frontier while DFS maintains a few pointers at each level.

If it is known that an answer will likely be found far into a tree, DFS is a better option than BFS. BFS is good to use when the depth of the tree can vary or if a single answer is needed—for example, the shortest path in a tree. If the entire tree should be traversed, DFS is a better option.

BFS always returns an optimal answer, but this is not guaranteed for DFS.

> ![](https://ds055uzetaobb.cloudfront.net/brioche/uploads/YVBRdBvFp3-screen-shot-2016-07-20-at-13837-pm.png?width=1200)
>
> Here is an example that compares the order that the graph is searched in when using a BFS and then a DFS \(by each of the three approaches\).[\[2\]](https://brilliant.org/wiki/depth-first-search-dfs/#citation-2)
>
> **Breadth First Search** : 1 2 3 4 5
>
> **Depth First Search**
>
> - Pre-order: 1 2 4 5 3
> - In-order : 4 2 5 1 3
> - Post-order : 4 5 2 3 1

### Applications

Depth-first search is used in [topological sorting](https://brilliant.org/wiki/topological-sort/), [scheduling problems](https://brilliant.org/wiki/scheduling-problems/?wiki_title=scheduling%20problems), [cycle](https://brilliant.org/wiki/cylce/) detection in graphs, and solving puzzles with only one solution, such as a maze or a [sudoku](https://brilliant.org/wiki/sudoku/) puzzle.

Other applications involve analyzing networks, for example, testing if a graph is [bipartite](https://brilliant.org/wiki/bipartite-graph/?wiki_title=Bipartite%20graphs). Depth-first search is often used as a subroutine in [network flow](https://brilliant.org/wiki/flow-network/) algorithms such as the [Ford-Fulkerson algorithm](https://brilliant.org/wiki/ford-fulkerson-algorithm/).

DFS is also used as a subroutine in [matching algorithms](https://brilliant.org/wiki/matching-algorithms/) in [graph theory](https://brilliant.org/wiki/graph-theory/) such as the [Hopcroft–Karp algorithm](https://brilliant.org/wiki/hopcroft-karp/).

Depth-first searches are used in mapping routes, scheduling, and finding [spanning trees](https://brilliant.org/wiki/spanning-trees/).
