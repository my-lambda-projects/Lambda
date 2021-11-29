# problem:
# 1. access verts/vertex
# 2. get all connections for a vertex(hopefully quick)
#
# class Graph:
#     def __init(slef):

# graphs exists without forsing a class/certan data type on them

graph = [
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    # a new vertex and all vertexes connect to F
    # [1, 1, 1, 1, 1]
]

# get second vertex and its edges
graph[1]  # o(1) opp

# find if rd and last vertex are connected:
print(graph[2][4] == 1)

# make a new connection from B to E:

graph[1][4] = 1

# add a new veterx, append to our graph
# expensive

graph_list = {
    "a": set(["b", "c", "d"]),  # order doesnt matter we get a lot of dictionaries
    "b": set(),
    "c": set(["e"]),
    "d": set(["e"]),
    "e": set(),
}

# graph_list.key()

# find out if c connects to e:
print("e" in graph_list["c"])

# find out if a and e are connected:
print("e" in graph_list["a"])

# graph lists are great for adding o(1) and traversing and printing paths
all_paths = []


def print_graph(current_vertex, path):
    print(current_vertex)
    new_path = path + [current_vertex]
    # i have reached the end of my path bc the neighbore set is empty:
    if len(graph_list[current_vertex]) == 0:
        all_paths.append(new_path)
    # recurse on the children
    for neighbor in graph_list[current_vertex]:
        print_graph(neighbor, new_path.copy())


print_graph("a", [])
print(all_paths)


def print_tree_preorder(root):  # preorder traversal
    print(root.value)

    # if you can go left, recurse left
    if root.left:
        print_tree(root.left)

    if root.right:
        print_tree(root.right)
