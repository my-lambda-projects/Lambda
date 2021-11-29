#!/usr/bin/env python
"""
Solution to Project Euler Problems
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/


"""
from collections import namedtuple
from copy import deepcopy
from heapq import heappop, heappush

Node = namedtuple("Node", "cost i j")
Graph = namedtuple("Graph", "nodes edges")


def build_graph_from_triangle(triangle):
    T = deepcopy(triangle)
    edges = {}
    for i in range(len(T)):
        for j, c in enumerate(T[i]):
            n = Node(c, i, j)
            edges[n] = []
            T[i][j] = n
    for i in range(len(T) - 1):
        for j in range(len(T[i])):
            n = T[i][j]
            edges[n].append(T[i + 1][j])
            edges[n].append(T[i + 1][j + 1])
    stop = Node(0, -1, -1)
    edges[stop] = []
    for j in range(len(T[-1]) - 1):
        edges[T[-1][j]].append(stop)
    start = T[0][0]
    return (Graph(edges.keys(), edges), start, stop)


def find_max_path(graph, start, stop):
    f = max(n.cost for n in graph.nodes)
    heap = [(f - start.cost, start, [])]
    while heap:
        c, n, p = heappop(heap)
        if n == stop:
            return (f + f * len(p) - c, list(reversed([(x.i, x.j) for x in p])))
        for m in graph.edges[n]:
            heappush(heap, (f - m.cost + c, m, [n] + p))
