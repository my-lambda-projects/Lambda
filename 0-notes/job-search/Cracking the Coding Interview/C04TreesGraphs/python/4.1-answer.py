# 4.1 Routes Between Nodes

# Given a directed graph and two nodes (S & E), design an algorithm to find out whether
# there is a route from S to E.


# https://github.com/w-hat/ctci-solutions/blob/master/ch-04-trees-and-graphs/01-route-between-nodes.py

class Queue():
    # FIFO
    def __init__(self):
        self.array = []

    def push(self, item):
        self.array.append(item)

    def pop(self):
        if not len(self.array):
            return None
        item = self.array[0]
        del self.array[0]
        return item

class Node():
    def __init__(self, data, adjacency_list=None):
        self.data = data
        self.adjacency_list = adjacency_list or []
        self.shortest_path = None

    def add_edge_to(self, node):
        self.adjacency_list += [node]

    def __str__(self):
        return self.data


def find_route(node1, node2):
    found_path = None
    queue = Queue()
    node = node1
    node.shortest_path = [node]
    all_visited_nodes = [node]
    while node:
        for adjacent in node.adjacency_list:
            if not adjacent.shortest_path:
                adjacent.shortest_path = node.shortest_path + [adjacent]
                if adjacent == node2:
                    found_path = node.shortest_path + [adjacent]
                    break
                queue.push(adjacent)
                all_visited_nodes.append(adjacent)
        node = queue.pop()
    for visited in all_visited_nodes:
        visited.shortest_path = None
    return found_path

