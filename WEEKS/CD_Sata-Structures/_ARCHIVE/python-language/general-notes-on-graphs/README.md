# General Notes On Graphs

## General Notes On Graphs

### Graphs

**Quizzes**

- [Graph fundamentals](https://brilliant.org/practice/graphs-basic/)
- [Breadth-first Search](https://brilliant.org/practice/breadth-first-search/)
- [Depth-first Search](https://brilliant.org/practice/depth-first-search/)

**Relevant For...**

- Computer Science&gt;[Graphs](https://brilliant.org/computer-science/?subtopic=types-and-data-structures&chapter=graphs)
- Quantitative Finance&gt;[Computer Science Concepts](https://brilliant.org/quantitative-finance/?subtopic=computer-science-concepts&chapter=computer-science-concepts)

There are many systems in the natural world and in society that are amenable to mathematical and computational modeling. However, not everything is easily codified as a system of particles with coordinates and momenta. Some systems and problems such as social networks, ecologies, and genetic regulatory schemes are intrinsically divorced from spacetime descriptions, and instead are more naturally expressed as graphs that reflect their topological properties. At their simplest, graphs are simply collections of nodes – representing some class of objects like people, corporate boards, proteins, or destinations on the globe – and edges, which serve to represent connections like friendships, bridges, or molecular binding interactions.

![](https://ds055uzetaobb.cloudfront.net/brioche/uploads/RcYyAw1imc-map01100_mod.png?width=1200)

**Contents**

- [What is a graph?](https://brilliant.org/wiki/graphs/#graphs-basic)
- [Representation of Graphs](https://brilliant.org/wiki/graphs/#representation-of-graphs)
- [Breadth-first Search](https://brilliant.org/wiki/graphs/#breadth-first-search)
- [Depth-first Search](https://brilliant.org/wiki/graphs/#depth-first-search)
- [Contrasting Traversals](https://brilliant.org/wiki/graphs/#traversal-discussion)
- [Additional Problems](https://brilliant.org/wiki/graphs/#additional-problems)

#### What is a graph?

![](https://ds055uzetaobb.cloudfront.net/brioche/uploads/lRc8SRkIPE-whatis.png?width=1200)

Consider the highway system of the eastern coast of the United States. A road inspector is given the task of writing reports about the current condition of each highway. What would be the most economical way for him to traverse all the cities? The problem can be modeled as a graph.

In fact, since graphs are dots and lines , they look like road maps. The dots are called vertices or nodes and the lines are called edges. They may have a value assigned to them \(weighted\) or they may just be a mere indicator of the existence of a path \(unweighted\). More formally, a graph can be defined as follows:

> A graph GG consists of a set of VV of _vertices_ \(or _nodes_\) and a set EE of edges \(or _arcs_\) such that each edge e \in Ee∈E is associated with a pair of vertices \in V∈V. A graph GG with vertices VV and edges EE is written as G=\(V,E\)G=\(V,E\).

Because graphs are so pervasive, it is useful to define different types of graphs. The following are the most common types of graphs:

**Undirected graph:** An undirected graph is one in which its edges have no orientations, i.e. no direction is associated with any edge. The edges \(x,y\)\(x,y\) and \(y,x\)\(y,x\) are equivalent.

**Directed graph:** A directed graph or digraph GG consists of a set VV of vertices \(or nodes\) and a set of edges \(or arcs\) such that each edge e \in Ee∈E is associated with an ordered pair of vertices. If there is an edge \(x,y\)\(x,y\), it is completely distinct from the edge \(y,x\)\(y,x\).

![Undirected graphs are typically represented by a line with no arrows, which implies a bidirectional relationship between node A and node B. Directed graphs use an arrow to show the relationship from A to B. ](https://ds055uzetaobb.cloudfront.net/brioche/uploads/sktJe6Gx5W-directed-vs-undirected.png?width=1200)Undirected graphs are typically represented by a line with no arrows, which implies a bidirectional relationship between node A and node B. Directed graphs use an arrow to show the relationship from A to B.

&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD:wk-20-notes/general-notes-on-graphs/README.md

## **Directed acyclic graph**: A directed acyclic graph \(commonly abbreviated as DAG\) is a directed graph with no directed cycles. A cycle is any path {A_1, \ldots, A_n}{A1​,…,An​} such that the edges A_1\rightarrow A_2A1​→A2​, A_2\rightarrow A_3A2​→A3​, \ldots…, and A_n\rightarrow A_1An​→A1​ all exist, thus forming a loop. A DAG is a graph without a single cycle.

**Directed acyclic graph**: A directed acyclic graph \(commonly abbreviated as DAG\) is a directed graph with no directed cycles. A cycle is any path {A_1, \ldots, A_n}{A1​,…,An​} such that the edges A_1\rightarrow A_2A1​→A2​, A_2\rightarrow A_3A2​→A3​, \ldots…, and A_n\rightarrow A_1An​→A1​ all exist, thus forming a loop. A DAG is a graph without a single cycle.

> > > > > > > e4bf9b77d4b065ed20f39ffb8a1f8425c6ab66cf:python-language/general-notes-on-graphs/README.md
>
> List all the edges and vertices of the undirected graph GG in the figure above.
>
> The graph GG consists of the set of vertices VV = {Massachusetts, Maine, Connecticut, New York, Maryland, New Jersey}.
>
> Its edges are E =E= {\(Maine,Massachusetts\) , \(Massachusetts, Connecticut\) , \(Connecticut,New York\), \(New York,Maine\), \(New York,Massachusetts\), \(New Jersey, Maine\),\(Maryland, New York\), \(Maine, Maryland\)}.
>
> Note that since the graph is undirected, the order of the tuples in denoting the edges is unimportant. \_\square□​

ADBC

![](https://ds055uzetaobb.cloudfront.net/brioche/uploads/THq6JNOOjN-borne-fusinite-telephoners-ouster.png?width=600)

Government surveillance agencies have a tendency to accumulate strange new powers during times of panic. The US National Security Agency \(NSA\) now has the ability to monitor the communications of suspected individuals as well as the communications of people within some number of hops of any suspect. In the communication network above, which person is connected to the greatest number of people through 1 hop or less?

![](https://ds055uzetaobb.cloudfront.net/brioche/uploads/gVfUsdTGn1-faces.png?width=1200)

**Details and Assumptions:**

- Each dot represents a person.
- Each line represents communication between the people on either end.
- If X communicates with Y, and Y communicates with Z, we say that X and Z have a 1-hop connection, and that X has a 0-hop connection with Y.

#### Representation of Graphs

Above we represented a graph by drawing it. To represent it in a computer, however, we need more formal ways of representing graphs. Here we discuss the two most common ways of representing a graph: the adjacency matrix and the adjacency list.

**The adjacency matrix**

![](https://ds055uzetaobb.cloudfront.net/brioche/uploads/TxDs837ybO-adjacency.png?width=1200)

> Represent the graph above using an adjacency matrix.
>
> To obtain the adjacency matrix of the graph, we first label the rows and columns with the corresponding ordered vertices. If there exists an edge between two vertices ii and jj, then their corresponding cell in the matrix will be assigned 11. If there does not exist an edge, then the cell will be assigned the value 00. The adjacency matrix for the graph above is thus
>
> \quad \begin{bmatrix} & a & b & c & d & e a & 0 & 1 & 1 & 0 & 1 b & 1 & 0 & 0 & 0 & 0 c & 1 & 0 & 0 & 1 & 1 d & 0 & 0 & 1 & 0 & 0 e & 1 & 0 & 1 & 0 & 0 \end{bmatrix}. \_\square \quad⎣⎢⎢⎢⎢⎢⎢⎡​abcde​a01101​b10000​c10011​d00100​e10100​⎦⎥⎥⎥⎥⎥⎥⎤​. □​

**Adjacency list**

An adjacency list representation of a graph is a way of associating each vertex \(or node\) in the graph with its respective list of neighboring vertices. A common way to do this is to create a [Hash table](https://en.wikipedia.org/wiki/hash_table). This table will contain each vertice as a key and the list of adjacent vertices of that vertices as a value.

For our example above, the adjacency list representation will look as follows:

![](https://ds055uzetaobb.cloudfront.net/brioche/uploads/nyyytOJDUh-adj-list.png?width=1200)

We can see that the adjacency list is much less expensive on memory as the adjacency matrix is very sparse.

Most graph algorithms involve visiting each vertex in VV, starting from a root node v_0v0​. There are several ways of achieving this. The two most common traversal algorithms are breadth-first search and depth-first search.

#### Breadth-first Search

In a [breadth-first search](https://brilliant.org/wiki/breadth-first-search-bfs/), we start with the start node, followed by its adjacent nodes, then all nodes that can be reached by a path from the start node containing two edges, three edges, and so on. Formally the BFS algorithm visits all vertices in a graph GG, that are kk edges away from the source vertex ss before visiting any vertex k+1k+1 edges away. This is done until no more vertices are reachable from ss. The image below demonstrates exactly how this traversal proceeds:

![](https://ds055uzetaobb.cloudfront.net/uploads/Dnf4nQwvZW-breadth-first-gif.gif)

For a graph G = \(V,E\)G=\(V,E\) and a source vertex vv, breadth-first search traverses the edges of GG to find all reachable vertices from vv. It also computes the shortest distance to any reachable vertex. Any path between two points in a breadth-first search tree corresponds to the shortest path from the root vv to any other node ss.

|     |     |
| :-- | :-- |

We may think of three types of vertices in BFS as _tree_ verties, those that have been taken of the data structure. _fringe_ vertices, those adjacent to tree vertices but not yet visited, and _undiscovered_ vertices, those that we have not encountered yet. If each visited vertex is connected to the edge that caused it to be added to the data structure, then these edges form a tree.

To search a connected component of a graph systematically, we begin with one vertex on the fringe, all others unseen, and perform the following step until all vertices have been visited: "move one vertex xx from the fringe to the tree, and put any unseen vertices adjacent to xx on the fringe." Graph traversal methods differ in how it is decided which vertex should be moved from the fringe to the tree. For breadth-first search we want to choose the vertex from the fringe that was least recently encountered; this corresponds to using a queue to hold vertices on the fringe.

> What is the state of the queue at each iteration of BFS, if it is called from node 'a'?
>
> ![PP](https://ds055uzetaobb.cloudfront.net/brioche/uploads/37D5TDURR1-mm.png?width=1200)PP
>
> The table below shows the contents of the queue as the procedure. BFS visits vertices in the graph above. BFS will visit the same vertices as DFS. In this example all of them.
>
> &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD:wk-20-notes/general-notes-on-graphs/README.md
>
> ## \begin{array}{l\|r} \textbf{Node Visited} & \textbf{Queue} \hline \text{a} & \text{a} \text{ } & \text{\(empty\)} \text{b } & \text{b} \text{f } & \text{b f} \text{i} & \text{b f i} \text{ } & \text{f i} \text{c} & \text{f i c} \text{e} & \text{f i c e} \text{ } & \text{ i c e} \text{g } & \text{ i c e g} \text{ } & \text{ c e g} \text{ } & \text{ e g} \text{d } & \text{ e g d} \text{ } & \text{ g d} \text{ } & \text{ d} \text{ } & \text{ \(empty\)} \text{ h} & \text{ h} \text{ } & \text{ \(empty\) } \end{array}Node Visiteda b f i ce g d h ​Queuea\(empty\)bb fb f if if i cf i c e i c e i c e g c e g e g e g d g d d \(empty\) h \(empty\) ​​
>
> \begin{array}{l\|r} \textbf{Node Visited} & \textbf{Queue} \hline \text{a} & \text{a} \text{ } & \text{\(empty\)} \text{b } & \text{b} \text{f } & \text{b f} \text{i} & \text{b f i} \text{ } & \text{f i} \text{c} & \text{f i c} \text{e} & \text{f i c e} \text{ } & \text{ i c e} \text{g } & \text{ i c e g} \text{ } & \text{ c e g} \text{ } & \text{ e g} \text{d } & \text{ e g d} \text{ } & \text{ g d} \text{ } & \text{ d} \text{ } & \text{ \(empty\)} \text{ h} & \text{ h} \text{ } & \text{ \(empty\) } \end{array}Node Visiteda b f i ce g d h ​Queuea\(empty\)bb fb f if if i cf i c e i c e i c e g c e g e g e g d g d d \(empty\) h \(empty\) ​​
>
> > > > > > > e4bf9b77d4b065ed20f39ffb8a1f8425c6ab66cf:python-language/general-notes-on-graphs/README.md

#### Depth-first Search

[Depth-ﬁrst search](https://brilliant.org/wiki/depth-first-search-dfs/) explores edges out of the most recently discovered vertex ss  that still has unexplored edges leaving it. Once all of ’s edges have been explored, the search “backtracks” to explore edges leaving the vertex from which  was discovered. This process continues until we have discovered all the vertices that are reachable from the original source vertex. If any undiscovered vertices remain, then depth-ﬁrst search selects one of them as a new source, and it repeats the search from that source. The algorithm repeats this entire process until it has discovered every vertex:

- Visit a vertex ss.
- Mark ss as visited.
- Recursively visit each unvisited vertex attached to ss.

![](https://ds055uzetaobb.cloudfront.net/uploads/Ml2xIZmVt0-depth-first-gif.gif)

A recursive implementation of DFS:

|     |     |
| :-- | :-- |

A non-recursive implementation of DFS, it delays whether a vertex has been discovered until the vertex has been popped from the stack.

|     |     |
| :-- | :-- |

#### Contrasting Traversals

Similar to tree traversal, the code for breadth-first search is slightly different from depth-first search. The most commonly mentioned difference is that BFS uses a queue to store alternative choices instead of a stack. This small change however leads to a classical graph traversal algorithm. Depth-first search goes down a single path until the path leads to the goal or we reach a limit. When a path is completely explored we back track. BFS however explores all paths from the starting location at the same time.

As we increase the size of our graph, the contrast between depth-first and breadth-first search is quite evident. Depth-first search explores the graph by looking for new vertices far away from the start point, taking closer vertices only when dead ends are encountered; breadth-first search completely covers the area close to the starting point, moving farther away only when everything close has been looked at. Again, the order in which the nodes are visited depends largely upon the effects of this ordering on the order in which vertices appear on the adjacency lists.

#### Additional Problems

![](https://ds055uzetaobb.cloudfront.net/brioche/solvable/2c003f112f.2fa1981b4a.lHhweH.jpg?width=250)John lives in the Trees of Ten Houses, and it is a most ideal and idyllic place for him and the other dwellers up in the canopy. They have invested a tremendous amount of time in engineering these houses, and to ensure no house felt isolated from the others, they built a fresh, finely crafted bridge between each and every house!

Unfortunately, the Trees of Ten Houses were not immune to thunderstorms, nor were the bridges well engineered. The night was treacherous, howling with wind and freezing with rain, so the odds for the bridges were not good--each bridge seemed just as likely to survive as to be shattered!

Fortunately, as there were so very many bridges in the Trees of Ten Houses, when John did wake the following morning, he found he was able to make his way to each and every house using only the existing bridges, though round-about routes may have been necessary. As they began rebuilding, John became curious... what were the chances that they'd all be so lucky?

More formally, if PP is the probability that, after the storm, John is able to traverse to each and every house, what is \big\lfloor 10^{10} P \big\rfloor?⌊1010P⌋?

**Details and Assumptions:**

- The Trees of Ten Houses do, in fact, contain precisely 10 houses.
- Before the storm, there exists a single bridge between each and every unique pair of houses.
- The storm destroys each bridge with independent probability \frac{1}{2}21​.
- John is allowed to traverse through others' houses to try to reach all of them, but he must only use the surviving bridges to get there. No vine swinging allowed.

\*\*\*\*
