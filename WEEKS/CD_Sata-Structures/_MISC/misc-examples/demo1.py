"""
You are given an undirected graph with its maximum degree (the degree of a node
is the number of edges connected to the node).
You need to write a function that can take an undirected graph as its argument
and color the graph legally (a legal graph coloring is when no adjacent nodes
have the same color).
The number of colors necessary to complete a legal coloring is always one more
than the graph's maximum degree.
*Note: We can color a graph in linear time and space. Also, make sure that your
solution can handle a loop in a reasonable way.*
"""
# Definition for a graph node.
class GraphNode:
    def __init__(self, label):
        self.label = label
        self.neighbors = set()
        self.color = None


def color_graph(graph, colors):
    # Your code here

    # iterate over each node of the graph
    for node in graph:
        # handle if an infinite loop is occuring
        if node in node.neighbors:
            raise Exception("impossible to find a legal solution")

        # get the node's neighbors colors
        # check if a color is illegal?
        illegal_colors = set(
            [neighbor.color for neighbor in node.neighbors if neighbor.color]
        )

        # assign the first legal color
        for color in colors:
            if color not in illegal_colors:
                node.color = color
                break
