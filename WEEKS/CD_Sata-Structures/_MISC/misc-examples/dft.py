from util import Stack, Queue

# lets code a dft
"""
    Remember to follow our problem solving framework
    - Understand the problem
    - Plan a solution
    - Implement the solution

    In this case we can just refactor the BFT to suit our needs
"""


# code up a Graph class implementing with an adjacency list


class Graph:
    """ Represent a Graph as dictionary of vertices map the labels to edges."""

    # constructor
    def __init__(self):
        # empty dictionary for verts
        self.vertices = {}

    # add vertex
    def add_vertex(self, vertex_id):
        # at vertex_id create an empty set
        self.vertices[vertex_id] = set()

    # add edges
    def add_edge(self, v1, v2):
        # if v1 and v2 exist in vertices list
        if v1 in self.vertices and v2 in self.vertices:
            # add v2 at v1 of vertices
            # (add v2 to the vertices list at the index of v1)
            self.vertices[v1].add(v2)
        # otherwise
        else:
            # raise an error
            raise KeyError("That vertex does not exist")

    # BFT
    def bft(self, starting_vertex_id):
        # create an empty queue and enqueue the starting vertex ID
        q = Queue()
        q.enqueue(starting_vertex_id)
        # create a set to store the visited vertices
        visited = set()
        # while the queue is not empty
        while q.size() > 0:
            # Dequeue the first vertex
            v = q.dequeue()
            # if that vertex has not been visited
            if v not in visited:
                # mark it as visited (printing for a representation)
                print(v)
                visited.add(v)
                # then add all of it's neighbors to the back of the queue
                for next_vertex in self.vertices[v]:
                    q.enqueue(next_vertex)

    # DFT
    def dft(self, starting_vertex_id):
        # create an empty stack and push the starting vertex ID
        s = Stack()
        s.push(starting_vertex_id)
        # create a set to store the visited vertices
        visited = set()
        # while the stack is not empty
        while s.size() > 0:
            # pop the first vertex
            v = s.pop()
            # if that vertex has not been visited
            if v not in visited:
                # mark it as visited (printing for a representation)
                print(v)
                visited.add(v)
                # then add all of it's neighbors to the top of the stack
                for next_vertex in self.vertices[v]:
                    s.push(next_vertex)
