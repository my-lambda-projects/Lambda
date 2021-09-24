# A class to represent a graph object
class Graph:
    # Constructor
    def __init__(self, edges, N):

        # A list of lists to represent an adjacency list
        self.adjList = [[] for _ in range(N)]

        # add edges to the undirected graph
        for (src, dest) in edges:
            self.adjList[src].append(dest)


# Perform DFS on the graph and set the departure time of all vertices of the graph
def DFS(graph, v, discovered, departure, time):

    # mark the current node as discovered
    discovered[v] = True

    # do for every edge `v —> u`
    for u in graph.adjList[v]:
        # if `u` is not yet discovered
        if not discovered[u]:
            time = DFS(graph, u, discovered, departure, time)

    # ready to backtrack
    # set departure time of vertex `v`
    departure[v] = time
    time = time + 1

    return time


# Returns true if the given directed graph is DAG
def isDAG(graph, N):

    # keep track of whether a vertex is discovered or not
    discovered = [False] * N

    # keep track of the departure time of a vertex in DFS
    departure = [None] * N

    time = 0

    # Perform DFS traversal from all undiscovered vertices
    # to visit all connected components of a graph
    for i in range(N):
        if not discovered[i]:
            time = DFS(graph, i, discovered, departure, time)

    # check if the given directed graph is DAG or not
    for u in range(N):

        # check if `(u, v)` forms a back-edge.
        for v in graph.adjList[u]:

            # If the departure time of vertex `v` is greater than equal
            # to the departure time of `u`, they form a back edge.

            # Note that `departure[u]` will be equal to `departure[v]`
            # only if `u = v`, i.e., vertex contain an edge to itself
            if departure[u] <= departure[v]:
                return False

    # no back edges
    return True


if __name__ == "__main__":

    # List of graph edges as per the above diagram
    edges = [(0, 1), (0, 3), (1, 2), (1, 3), (3, 2), (3, 4), (3, 0), (5, 6), (6, 3)]

    # total number of nodes in the graph
    N = 7

    # build a graph from the given edges
    graph = Graph(edges, N)

    # check if the given directed graph is DAG or not
    if isDAG(graph, N):
        print("The graph is a DAG")
    else:
        print("The graph is not a DAG")
