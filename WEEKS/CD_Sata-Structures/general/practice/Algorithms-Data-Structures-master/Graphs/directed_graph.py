class Node(object):
    def __init__(self, value):
        self.value = value
        self.edges = []


class Edge(object):
    def __init__(self, value, node_from, node_to):
        self.value = value
        self.node_from = node_from
        self.node_to = node_to


class Graph(object):
    def __init__(self, nodes=[], edges=[]):
        self.nodes = nodes
        self.edges = edges

    def insert_node(self, new_node_val):
        new_node = Node(new_node_val)
        self.nodes.append(new_node)

    def insert_edge(self, new_edge_val, node_from_val, node_to_val):
        from_found = None
        to_found = None
        for node in self.nodes:
            if node_from_val == node.value:
                from_found = node
            if node_to_val == node.value:
                to_found = node
        if from_found == None:
            from_found = Node(node_from_val)
            self.nodes.append(from_found)
        if to_found == None:
            to_found = Node(node_to_val)
            self.nodes.append(to_found)
        new_edge = Edge(new_edge_val, from_found, to_found)
        from_found.edges.append(new_edge)
        to_found.edges.append(new_edge)
        self.edges.append(new_edge)

    def get_edge_list(self):
        """Don't return a list of edge objects!
        Return a list of triples that looks like this:
        (Edge Value, From Node Value, To Node Value)"""
        edge_list = []
        for item in self.nodes:
            for each_edge in item.edges:
                edge_tuple = (
                    each_edge.value,
                    each_edge.node_from.value,
                    each_edge.node_to.value,
                )
                if edge_tuple not in edge_list:
                    edge_list.append(edge_tuple)
        return edge_list

    def get_adjacency_list(self):
        """Don't return any Node or Edge objects!
        You'll return a list of lists.
        The indices of the outer list represent
        "from" nodes.
        Each section in the list will store a list
        of tuples that looks like this:
        (To Node, Edge Value)"""
        adjacency_list = []
        edge_list = self.get_edge_list()
        max_node_val = 0
        for tuple in edge_list:
            if max_node_val < tuple[1]:
                max_node_val = tuple[1]
            if max_node_val < tuple[2]:
                max_node_val = tuple[2]

        for i in range(max_node_val + 1):
            node_list = []
            for item in edge_list:
                if i == item[1]:
                    new_tuple = (item[2], item[0])
                    node_list.append(new_tuple)
            if node_list != []:
                adjacency_list.append(node_list)
            else:
                adjacency_list.append(None)

        return adjacency_list

    def get_adjacency_matrix(self):
        """Return a matrix, or 2D list.
        Row numbers represent from nodes,
        column numbers represent to nodes.
        Store the edge values in each spot,
        and a 0 if no edge exists."""
        adjacency_matrix = []
        adjacency_list = self.get_adjacency_list()
        max_node_val = len(adjacency_list)

        for item in adjacency_list:
            node_list = [0] * (max_node_val)
            if item != None:
                for tuple in item:
                    node_list[tuple[0]] = tuple[1]
            adjacency_matrix.append(node_list)
        return adjacency_matrix


graph = Graph()
graph.insert_edge(100, 1, 2)
graph.insert_edge(101, 1, 3)
graph.insert_edge(102, 1, 4)
graph.insert_edge(103, 3, 4)
# Should be [(100, 1, 2), (101, 1, 3), (102, 1, 4), (103, 3, 4)]
print(graph.get_edge_list())
# Should be [None, [(2, 100), (3, 101), (4, 102)], None, [(4, 103)], None]
print(graph.get_adjacency_list())
# Should be [[0, 0, 0, 0, 0], [0, 0, 100, 101, 102], [0, 0, 0, 0, 0], [0, 0, 0, 0, 103], [0, 0, 0, 0, 0]]
print(graph.get_adjacency_matrix())
