"""
You are given an undirected graph with its maximum degree (the degree of a node
is the number of edges connected to the node).

You need to write a function that can take an undirected graph as its argument
and color the graph legally (a legal graph coloring is when no adjacent nodes
have the same color).

The number of colors necessary to complete a legal coloring is always one more
than the graph's maximum degree.
"""
# Definition for a graph node.
class GraphNode:
    def __init__(self, label):
        self.label = label
        self.neighbors = set()
        self.color = None


# undirected = each of the verts go both ways
# adjacent in this case = directly connected


def color_graph(graph, colors):
    # Your code here
    # go over all verts color each vert basted on whatever color is legal
    # build legal colors as a set
    # find all of our neighbors
    for vertex in graph:
        used_colors = set(
            [neighbor.color for neighbor in vertex.neighbors]
        )  # set of colors that are used by neighbors
        for color in colors:
            if color not in used_colors:
                vertex.color = color
                break


g1 = GraphNode("G1")
g2 = GraphNode("G2")
g3 = GraphNode("G3")
g4 = GraphNode("G4")
g5 = GraphNode("G5")

g1.neighbors.add(g2)
g1.neighbors.add(g4)
g1.neighbors.add(g3)

g2.neighbors.add(g1)
g2.neighbors.add(g4)
g2.neighbors.add(g5)

g3.neighbors.add(g1)
g3.neighbors.add(g5)
g3.neighbors.add(g4)

g4.neighbors.add(g1)
g4.neighbors.add(g3)
g4.neighbors.add(g2)
g4.neighbors.add(g5)

g5.neighbors.add(g2)
g5.neighbors.add(g3)
g5.neighbors.add(g4)

graph = [g1, g2, g3, g4, g5]
colors = set(["red", "blue", "green", "orange", "purple"])
color_graph(graph, colors)

for node in graph:
    print(node.color)
