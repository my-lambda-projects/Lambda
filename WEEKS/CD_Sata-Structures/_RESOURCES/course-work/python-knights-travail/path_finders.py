import tree


class KnightPathFinder:
    def __init__(self, coords):
        self._coords = coords
        self._root = tree.Node(coords)
        # cannot call set constructor with a tuple?
        self._considered_positions = {coords}

    def get_valid_moves(self, pos):
        # valid_moves = range(0, 8, 1)
        # pos[0] = x, pos[1] = y
        valid_moves = [
            (pos[0] + 2, pos[1] + 1),
            (pos[0] + 2, pos[1] - 1),
            (pos[0] + 1, pos[1] + 2),
            (pos[0] - 1, pos[1] + 2),
            (pos[0] - 2, pos[1] + 1),
            (pos[0] - 2, pos[1] - 1),
            (pos[0] + 1, pos[1] - 2),
            (pos[0] - 1, pos[1] - 2),
        ]

        # lst = [(x + new_x,y + new_y) for (x,y) in valid if]

        return set(
            filter(
                lambda move: move[0] in range(8) and move[1] in range(8), valid_moves
            )
        )

    def new_move_positions(self, pos):
        # self._considered_positions.remove(pos)
        new_positions = self.get_valid_moves(pos) - self._considered_positions
        self._considered_positions = self._considered_positions | self.get_valid_moves(
            pos
        )

        return new_positions

    @property
    def considered_positions(self):
        return self._considered_positions

    def build_move_tree(self):
        queue = [self.new_move_positions(self._root.value), self._root]

        while len(queue) > 0:
            pos = queue.pop(0)
            parent = queue.pop(0)
            for move in pos:
                newNode = tree.Node(move)
                queue.append(self.new_move_positions(move))
                queue.append(newNode)
                parent.add_child(newNode)

    def find_path(self, end_position):
        final_node = self._root.depth_search(end_position)
        return self.trace_to_root(final_node)

    def trace_to_root(self, end_node):
        current_node = end_node
        node_list = [end_node.value]
        while current_node != self._root:
            node_list.append(current_node.parent.value)
            current_node = current_node.parent
        node_list.reverse()
        return node_list


test_coords = (-1, -1)
xander = KnightPathFinder(test_coords)
xander.new_move_positions(test_coords)

finder = KnightPathFinder((0, 0))
finder.build_move_tree()
# print(finder._root.children[0].children)

finder = KnightPathFinder((0, 0))
finder.build_move_tree()
print(finder.find_path((7, 6)))  # => [(0, 0), (2, 1)]

# finder = KnightPathFinder((0, 0))
# print(finder.new_move_positions((0, 0)))
