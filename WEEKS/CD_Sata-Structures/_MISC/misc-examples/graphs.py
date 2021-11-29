# some data structures to help with the graph traversals
class Queue:
    def __init__(self):
        self.queue = []

    def enqueue(self, value):
        self.queue.append(value)

    def dequeue(self):
        if self.size() > 0:
            return self.queue.pop(0)
        else:
            return None

    def size(self):
        return len(self.queue)


class Stack:
    def __init__(self):
        self.stack = []

    def push(self, value):
        self.stack.append(value)

    def pop(self):
        if self.size() > 0:
            return self.stack.pop()
        else:
            return None

    def size(self):
        return len(self.stack)


class Vertex:
    def __init__(self, value):
        self.value = value
        self.connections = {}

    def __str__(self):
        return (
            str(self.value)
            + " connections: "
            + str([x.value for x in self.connections])
        )

    def add_connection(self, vert, weight=0):
        self.connections[vert] = weight

    def get_connections(self):
        return self.connections.keys()

    def get_value(self):
        return self.value

    def get_weight(self, vert):
        return self.connections[vert]


class Graph:
    def __init__(self):
        self.vertices = {}
        self.count = 0

    def __contains__(self, vert):
        return vert in self.vertices

    def __iter__(self):
        return iter(self.vertices.values())

    def add_vertex(self, value):
        self.count += 1
        new_vert = Vertex(value)
        self.vertices[value] = new_vert
        return new_vert

    def add_edge(self, v1, v2, weight=0):
        if v1 not in self.vertices:
            self.add_vertex(v1)
        if v2 not in self.vertices:
            self.add_vertex(v2)
        self.vertices[v1].add_connection(self.vertices[v2], weight)

    def get_vertices(self):
        return self.vertices.keys()

    def breadth_first_search(self, starting_vert):
        to_visit = Queue()
        visited = set()
        to_visit.enqueue(starting_vert)
        visited.add(starting_vert)
        while to_visit.size() > 0:
            current_vert = to_visit.dequeue()
            for next_vert in current_vert.get_connections():
                if next_vert not in visited:
                    visited.add(next_vert)
                    to_visit.enqueue(next_vert)

    def breadth_first_search_p(self, starting_vert, target):
        to_visit = Queue()
        visited = set()
        to_visit.enqueue([starting_vert])
        visited.add(starting_vert)
        while to_visit.size() > 0:
            # dequeue the current path
            path = to_visit.dequeue()

            # extract the last vert from the path
            vert = path[-1]

            # is this vertex our target?
            if vert == target:
                return path
            # add the vert to visited
            visited.add(vert)
            for next_vert in vert.get_connections():
                if next_vert not in visited:
                    # create a copy of the path
                    path_copy = list(path)

                    # append the next vert to the copy of the path
                    path_copy.append(next_vert)

                    # enqueue our copy of the path
                    to_visit.enqueue(path_copy)

            return None  # you could also just return an empty list

    def depth_first_search(self, vertex, visited=set()):
        visited.add(vertex)
        for next_vert in vertex.get_connections():
            if next_vert not in visited:
                self.depth_first_search(next_vert, visited)

    def dfs_i(self, starting_vert):
        to_visit = Stack()
        visited = set()
        to_visit.push(starting_vert)
        visited.add(starting_vert)
        while to_visit.size() > 0:
            current_vert = to_visit.pop()
            for next_vert in current_vert.get_connections():
                if next_vert not in visited:
                    visited.add(next_vert)
                    to_visit.push(next_vert)
