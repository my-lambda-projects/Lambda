# Compare path to graph if valid, return True otherwise False
# A path is valid if bitwise operator & returns True for every
# element (bit) in the list


def is_path(graph, path):
    # an empty path
    if not graph or not path:
        return False

    # the first value
    # converts first row of bits into integer base 2
    value = int("".join(str(bit) for bit in graph[path[0]]), 2)

    # for one row
    if len(graph) == 1:
        return True if value else False

    # rest of the values
    for i in path[1:]:
        value1 = value & int("".join(str(bit) for bit in graph[i]), 2)
        print(value)
        # & returns True if both bits are 1
        # thus, if value means if 1
        # which is equivalent to if True
        # Boolean Type -> (1 -> True, -> False)
        if not value:
            return False

    return True


test = [[0, 1, 1, 1], [1, 0, 1, 0], [1, 1, 0, 0], [1, 0, 0, 0]]

path = [0, 1, 2, 0, 3]

print(is_path(test, path))
