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
