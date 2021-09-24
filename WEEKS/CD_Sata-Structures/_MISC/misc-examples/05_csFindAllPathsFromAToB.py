"""

You are given a directed acyclic graph (DAG) that contains N nodes.

Write a function that can find all the possible paths from node 0 to node N - 1. You can return the path in any order.

graph[a] is a list of all nodes b for which the edge a -> b exists.

Example:
Graph illustration

Input: graph = [[1, 2],[3],[3],[4],[]]
Output: [[0,1,3,4], [0,2,3,4]]
Note: although you can print the different paths in any order, you should keep the order of nodes within one path in order.

[execution time limit] 4 seconds (py3)

[input] array.array.integer graph

[output] array.array.integer



"""


def BreadthFirstcsFindAllPathsFromAToB(graph):
    # initialize a Queue
    que = [[0]]
    # initialize a result - empty list
    results = []
    # set our target N-1
    target = len(graph) - 1

    # keep going till we have a value in our queue
    while que:  # while q is not equal to None
        # set a temp to catch what we pop out
        temp = que.pop(0)

        # check if the last element in our queue is our target
        if temp[-1] == target:
            # it matches append to results
            results.append(temp)
            print("matches")
            print(results)
        # otherwise, look at its neighbors
        else:
            for neighbor in graph[temp[-1]]:
                # add temp and neighbor to queue
                que.append(temp + [neighbor])
                print("looking for neighbors")
                print(que)
    return results


def depthFirstcsFindAllPathsFromAToB(graph):
    """
    https://www.youtube.com/watch?v=utgfCJcszxE
    """

    def helper(OGgraph, nodes, path, ans):
        target = len(OGgraph) - 1
        # Ending Point
        if path[-1] == target:
            ans.append(path)
            print("dft adding")

        # source -> target
        # node target, node source
        for node in nodes:
            Path = path + [node]
            Nodes = OGgraph[node]
            helper(OGgraph, Nodes, Path, ans)
            print("dft found it ")
            print(ans)
        return ans

    path = [0]
    return helper(graph, graph[0], path, [])


graph = [[1, 2], [3], [3], [4], []]
print("*" * 40)
print(BreadthFirstcsFindAllPathsFromAToB(graph))
print("*" * 40)
print(depthFirstcsFindAllPathsFromAToB(graph))
