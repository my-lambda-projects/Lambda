from collections import defaultdict


def minCost(g_nodes, g_from, g_to, g_weight):
    # transfer the given lists to an adjacency list
    d = defaultdict(dict)
    for i in range(len(g_from)):
        if g_from[i] != g_nodes:
            d[g_from[i]][g_to[i]] = g_weight[i]

    if 1 not in d or g_nodes not in d[1]:
        return 1
    stack = [1]
    seen = {1}
    min_so_far = 999999
    return dfs(d, stack, seen, min_so_far, g_nodes, 0)


def dfs(d, stack, seen, min_so_far, traget, c_min):
    # base_case_1: when the stack is empty, return False, there is no such path
    if not stack:
        return min_so_far
    if (stack[-1] not in d) or (traget not in d[stack[-1]]):
        min_so_far = min(min_so_far, c_min + 1)
        return min_so_far
    else:
        for vertex, weight in d[stack[-1]].items():
            if vertex == traget:
                min_so_far = min(min_so_far, c_min + weight)
            elif vertex not in seen:
                stack.append(vertex)
                seen.add(vertex)
                min_so_far = dfs(d, stack, seen, min_so_far, traget, c_min + weight)
    # in case the vertex doesn't have any edges, pop the element from the stack
    stack.pop()
    return min_so_far


print(minCost(4, [1, 2, 1, 1, 2], [2, 1, 3, 4, 4], [20, 3, 2, 5, 2]))
