def build_move_tree(self):
    self.new_move_positions(self._root.value)
    self._root.add_child(tree.Node(item))
    while len(self._considered_positions) > 0:
