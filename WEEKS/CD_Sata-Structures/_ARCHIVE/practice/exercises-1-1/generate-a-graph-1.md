---
description: using Dictionary in Python
---

# Generate a graph

Difficulty Level : [Medium](https://www.geeksforgeeks.org/medium/)

- Last Updated : 28 Jun, 2021

Prerequisite – [Graphs](https://www.geeksforgeeks.org/graph-and-its-representations/)  
To draw graph using in built libraries – [Graph plotting in Python](https://www.geeksforgeeks.org/graph-plotting-in-python-set-1/)  
In this article, we will see how to implement graph in python using [dictionary](https://www.geeksforgeeks.org/python-set-4-dictionary-keywords-python/) data structure in python.  
The keys of the dictionary used are the nodes of our graph and the corresponding values are lists with each nodes, which are connecting by an edge.  
This simple graph has six nodes \(a-f\) and five arcs:

```text
a -> c
b -> c
b -> e
c -> a
c -> b
c -> d
c -> e
d -> c
e -> c
e -> b
```

It can be represented by the following Python data structure. This is a dictionary whose keys are the nodes of the graph. For each key, the corresponding value is a list containing the nodes that are connected by a direct arc from this node.

```python
graph = { "a" : ["c"],
          "b" : ["c", "e"],
          "c" : ["a", "b", "d", "e"],
          "d" : ["c"],
          "e" : ["c", "b"],
          "f" : []
        }
```

**Graphical representation of above example:**

[![python](https://media.geeksforgeeks.org/wp-content/uploads/python1.jpg)](https://media.geeksforgeeks.org/wp-content/uploads/python1.jpg)

[defaultdict](https://docs.python.org/2/library/collections.html#collections.defaultdict): Usually, a Python dictionary throws a KeyError if you try to get an item with a key that is not currently in the dictionary. defaultdict allows that if a key is not found in the dictionary, then instead of a KeyError being thrown, a new entry is created. The type of this new entry is given by the argument of defaultdict.  
**Python Function to generate graph:**

```python
# definition of function
def generate_edges(graph):
    edges = []

    # for each node in graph
    for node in graph:

        # for each neighbour node of a single node
        for neighbour in graph[node]:
            # if edge exists then append
            edges.append((node, neighbour))
    return edges
```

[Recommended: Please try your approach on **{IDE}** first, before moving on to the solution.](https://ide.geeksforgeeks.org/)

## Python

{% embed url="https://replit.com/@bgoonz/blank" caption="" %}

| Output: |
| :------ |

```text
[('a', 'c'), ('c', 'd'), ('c', 'e'), ('c', 'a'), ('c', 'b'),
('b', 'c'), ('b', 'e'), ('e', 'b'), ('e', 'c'), ('d', 'c')]
```

As we have taken example of undirected graph, so we have print same edge twice say as \(‘a’,’c’\) and \(‘c’,’a’\). We can overcome this with use of directed graph.  
Below are some more programs on graphs in python:

1. **To generate the path from one node to the other node**: Using Python dictionary, we can find the path from one node to the other in a Graph. The idea is similar to [DFS](https://www.geeksforgeeks.org/depth-first-traversal-for-a-graph/) in graphs. In the function, initially, the path is an empty list. In the starting, if the start node matches with the end node, the function will return the path. Otherwise the code goes forward and hits all the values of the starting node and searches for the path using recursion.

## Python

{% embed url="https://replit.com/@bgoonz/blank-1\#main.py" caption="" %}

1. Output:

```text
['d', 'a', 'c']
```

1. 1. **Program to generate all the possible paths from one node to the other.**: In the above discussed program, we generated the first possible path. Now, let us generate all the possible paths from the start node to the end node. The basic functioning works same as the functioning of the above code. The place where the difference comes is instead of instantly returning the first path, it saves that path in a list named as ‘paths’ in the example given below. Finally, after iterating over all the possible ways, it returns the list of paths. If there is no path from the starting node to the ending node, it returns None.

## Python

{% embed url="https://gist.github.com/bgoonz/b46192bc87d3cac28bdcf392afbe842d" caption="" %}

### Output:

```text
[['d', 'a', 'c'], ['d', 'a', 'c']]
```

1. 1. **Program to generate the shortest path.**: To get to the shortest from all the paths, we use a little different approach as shown below. In this, as we get the path from the start node to the end node, we compare the length of the path with a variable named as shortest which is initialized with the None value. If the length of generated path is less than the length of shortest, if shortest is not None, the newly generated path is set as the value of shortest. Again, if there is no path, it returns None
2. Python

| `# Python program to generate shortest path` `graph` `={'a':['c'],'b':['d'],'c':['e'],'d':['a',` `'d'],'e':['b',` `'c']}` `# function to find the shortest pathdef` `find_shortest_path(graph, start, end, path` `=[]): path` `=` `path` `+` `[start] if` `start` `==` `end: return` `path shortest` `=` `None for` `node` `in` `graph[start]: if` `node` `not` `in` `path: newpath` `=` `find_shortest_path(graph, node, end, path) if` `newpath: if` `not` `shortest` `or` `len(newpath) <` `len(shortest): shortest` `=` `newpath return` `shortest` `# Driver function call to print# the shortest pathprint(find_shortest_path(graph,` `'d',` `'c'))` |
| :-- |

1. Output:

```text
['d', 'a', 'c']
```
