# You are given a directed acyclic graph(DAG) that contains N nodes.
#
# Write a function that can find all the possible paths from node 0 to node N - 1.
#
# graph[a] is a list of all nodes b for which the edge a -> b exists.
#
# Example:
# Graph illustration
#
# Input: graph = [[1, 2], [3], [3], [4], []]
# Output: [[0, 1, 3, 4], [0, 2, 3, 4]]
# Note: The results must be returned in sorted order. You can use any built-in sort method on the results array at the end of your function before returning.
#
# [execution time limit] 4 seconds(py3)
#
# [input] array.array.integer graph
#
# [output] array.array.integer


# --------------------------------------------------------------------
# --------------------------------------------------------------------
# --------------------------------------------------------------------

# Python program to print all
# possible paths in a DAG

# Recursive function to print all paths
def dfs(s):
    # Append the node in path
    # and set visited
    path.append(s)
    visited[s] = True

    # Path started with a node
    # having in-degree 0 and
    # current node has out-degree 0,
    # print current path
    if outdeg0[s] and indeg0[path[0]]:
        print(*path)

    # Recursive call to print all paths
    for node in adj[s]:
        if not visited[node]:
            dfs(node)

    # Remove node from path
    # and set unvisited
    path.pop()
    visited[s] = False


def csFindAllPathsFromAToB(graph):
    for i in range(n):

        # for each node with in-degree 0
        # print all possible paths
        if indeg0[i] and adj[i]:
            path = []
            visited = [False] * (n + 1)
            dfs(i)


# Driver code
from collections import defaultdict

n = 6
# set all nodes unvisited
visited = [False] * (n + 1)
path = []

# edges = (a, b): a -> b
edges = [(5, 0), (5, 2), (2, 3), (4, 0), (4, 1), (3, 1)]

# adjacency list for nodes
adj = defaultdict(list)

# indeg0 and outdeg0 arrays
indeg0 = [True] * n
outdeg0 = [True] * n

for edge in edges:
    u, v = edge[0], edge[1]
    # u -> v
    adj[u].append(v)

    # set indeg0[v] <- false
    indeg0[v] = False

    # set outdeg0[u] <- false
    outdeg0[u] = False

print("All possible paths:")
print_all_paths(n)
