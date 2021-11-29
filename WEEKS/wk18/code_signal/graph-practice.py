"""
Kingdom Roads
"""

"""
*** New Road System ***
-----------------------
Once upon a time, in a kingdom far, far away, there lived a King Byteasar I. As a kind and wise ruler, he did everything in his (unlimited) power to make life for his subjects comfortable and pleasant. One cold evening a messenger arrived at the king's castle with the latest news: all kings in the Kingdoms Union had started enforcing traffic laws! In order to not lose his membership in the Union, King Byteasar decided he must do the same within his kingdom. But what would the citizens think of it?

The king decided to start introducing the changes with something more or less simple: change all the roads in the kingdom from two-directional to one-directional (one-way). He personally prepared the roadRegister of the new roads, and now he needs to make sure that the road system is convenient and there will be no traffic jams, i.e. each city has the same number of incoming and outgoing roads. As the Hand of the King, you're the one who he has decreed must check his calculations.

Example

For

roadRegister = [[false, true,  false, false],
                [false, false, true,  false],
                [true,  false, false, true ],
                [false, false, true,  false]]
the output should be
newRoadSystem(roadRegister) = true.

The cities will be connected as follows:


Cities 0, 1 and 3 (0-based) have one incoming and one outgoing road, and city 2 has two incoming and two outgoing roads. Thus, the output should be true.

For

roadRegister = [[false, true,  false, false, false, false, false],
                [true,  false, false, false, false, false, false],
                [false, false, false, true,  false, false, false],
                [false, false, true,  false, false, false, false],
                [false, false, false, false, false, false, true ],
                [false, false, false, false, true,  false, false],
                [false, false, false, false, false, true,  false]]
the output should be
newRoadSystem(roadRegister) = true.

The cities will be connected as follows:


Each city has one incoming and one outgoing road.

For

roadRegister = [[false, true,  false],
                [false, false, false],
                [true,  false, false]]
the output should be
newRoadSystem(roadRegister) = false.

The cities will be connected as follows:


City 1 has one incoming and no outgoing roads, and city 2 has one outgoing and no incoming roads.

Input/Output

[execution time limit] 4 seconds (py3)

[input] array.array.boolean roadRegister

Since cartography has not yet been properly developed in the kingdom, the registers are used instead. A register is stored as a square matrix, with its size equal to the number of cities in the kingdom. If roadRegister[i][j] = true, then there is a road from the ith to the jth city; the road doesn't exist otherwise.

It is guaranteed that there are no looping roads, i.e. roads that lead back to the same city it originated from.

Guaranteed constraints:
1 ≤ roadRegister.length ≤ 100,
roadRegister[0].length = roadRegister.length,
roadRegister[i][i] = false.

[output] boolean

true if the new road system is good enough, false otherwise.
"""

roadRegister = [
    [False, True, False, False],
    [False, False, True, False],
    [True, False, False, True],
    [False, False, True, False],
]

roadRegister = [[False, True, False], [False, False, False], [True, False, False]]


# my solution (no google)
def newRoadSystem(roadRegister):
    # for every city tally the outgoing roads and incoming roads
    roads = {}
    out = {}
    roads_in = {}
    for city in range(len(roadRegister)):
        for road in range(len(roadRegister[city])):
            if roadRegister[city][road] == True:
                if city not in roads:
                    roads[city] = {road}
                    out[city] = 1
                else:
                    roads[city].add(road)
                    out[city] += 1
                if road not in roads_in:
                    roads_in[road] = 1
                else:
                    roads_in[road] += 1

    print(roads_in == out)


# solutions with highest votes
def newRoadSystem(roadRegister):
    for x, y in zip(map(sum, roadRegister), map(sum, zip(*roadRegister))):
        if x != y:
            return False
    return True


# ------------------------------
def newRoadSystem(roadRegister):
    return [l.count(True) for l in roadRegister] == [
        l.count(True) for l in zip(*roadRegister)
    ]


"""
*** Roads Building *** 
----------------------
Once upon a time, in a kingdom far, far away, there lived a King Byteasar II. There was nothing special about him or his kingdom. As a mediocre ruler, he preferred hunting and feasting over doing anything about his kingdom's prosperity.

Luckily, his adviser, the wise magician Bitlin, worked for the kingdom's welfare day and night. However, since there was no one to advise him, he completely forgot about one important thing: the roads! Over the years most of the two-way roads built by Byteasar's predecessors were forgotten and no longer traversable. Only a few roads can still be used.

Bitlin wanted each pair of cities to be connected, but couldn't find a way to figure out which roads are missing. Desperate, he turned to his magic crystal ball for help. The crystal showed him a programmer from the distant future: you! Now you're the only one who can save the kingdom. Given the existing roads and the number of cities in the kingdom, you should use the most modern technologies and find out which roads should be built again to connect each pair of cities. Since the crystal ball is quite old and meticulous, it will only transfer the information if it is sorted properly.

The roads to be built should be returned in an array sorted lexicographically, with each road stored as [cityi, cityj], where cityi < cityj.

Example

For cities = 4 and roads = [[0, 1], [1, 2], [2, 0]],
the output should be
roadsBuilding(cities, roads) = [[0, 3], [1, 3], [2, 3]].

See the image below: the existing roads are colored black, and the ones to be built are colored red.


Input/Output

[execution time limit] 4 seconds (py3)

[input] integer cities

The number of cities in the kingdom.

Guaranteed constraints:
1 ≤ cities ≤ 100.

[input] array.array.integer roads

Array of roads in the kingdom. Each road is given as a pair [cityi, cityj], where 0 ≤ cityi, cityj < cities and cityi ≠ cityj. It is guaranteed that no road is given twice.

Guaranteed constraints:
0 ≤ roads.length ≤ 5000,
roads[i].length = 2,
0 ≤ roads[i][j] < cities.

[output] array.array.integer

A unique array of roads that should be built sorted as described above. There's no need to build looping roads, i.e. roads that lead back from a city to itself.
"""

cities = 4
roads = [[0, 1], [1, 2], [2, 0]]

# cities = 9
# roads = [
#     [5, 8],
#     [6, 0],
#     [0, 5],
#     [4, 1],
#     [0, 1],
#     [7, 0],
#     [6, 8],
#     [7, 3],
#     [2, 6],
#     [0, 2],
#     [0, 3],
#     [8, 7],
#     [5, 4],
#     [8, 4],
#     [8, 2],
#     [7, 1],
#     [4, 6],
#     [5, 6],
#     [4, 2],
#     [4, 7],
#     [2, 7],
#     [3, 6],
#     [8, 0],
#     [1, 6],
#     [3, 2],
#     [3, 4],
#     [4, 0],
#     [6, 7],
#     [5, 7]]

# my solution (no google)
import pprint


def roadsBuilding(cities, roads):
    road_dict = {}
    result = []
    for i in range(cities):
        road_dict[i] = set()
    for road in roads:
        road_dict[road[0]].add(road[1])
        road_dict[road[1]].add(road[0])

    for key in road_dict:
        if road_dict[key] == set():
            continue
        for city in road_dict:
            road = []
            if city not in road_dict[key] and city != key:
                road_dict[key].add(city)
                road.append(key)
                road.append(city)
                if road and sorted(road) not in result:
                    result.append(road)

    return result


# solutions with highest votes
def roadsBuilding(cities, roads):
    roads = set([tuple(road) for road in roads])
    print(roads)
    toBuild = []
    for i in range(0, cities - 1):
        for j in range(i + 1, cities):
            if (i, j) not in roads and (j, i) not in roads:
                toBuild.append([i, j])
    return toBuild


# print(roadsBuilding(cities, roads))


"""
*** Efficient Road Network ***
------------------------------
Once upon a time, in a kingdom far, far away, there lived a King Byteasar III. As a smart and educated ruler, he did everything in his (unlimited) power to make every single system within his kingdom efficient. The king went down in history as a great road builder: during his reign a great number of roads were built, and the road system he created was the most efficient during those dark times.

When you started learning about Byteasar's III deeds in your history classes, a creeping doubt crawled into the back of your mind: what if the famous king wasn't so great after all? According to the most recent studies, there were n cities in Byteasar's kingdom, connected by two-way roads. You managed to get information about these roads from the university library, so now you can write a function that will determine whether the road system in Byteasar's kingdom was efficient or not.

A road system is considered efficient if it is possible to travel from any city to any other city by traversing at most 2 roads.

Example

For n = 6 and

roads = [[3, 0], [0, 4], [5, 0], [2, 1],
          [1, 4], [2, 3], [5, 2]]
the output should be
efficientRoadNetwork(n, roads) = true.

Here's how the road system can be represented:


For n = 6 and

roads = [[0, 4], [5, 0], [2, 1],
          [1, 4], [2, 3], [5, 2]]
the output should be
efficientRoadNetwork(n, roads) = false.

Here's how the road system can be represented:


As you can see, it's only possible to travel from city 3 to city 4 by traversing at least 3 roads.

Input/Output

[execution time limit] 7 seconds (py3)

[input] integer n

The number of cities in the kingdom.

Guaranteed constraints:
1 ≤ n ≤ 250.

[input] array.array.integer roads

Array of roads in the kingdom. Each road is given as a pair [cityi, cityj], where 0 ≤ cityi, cityj < n and cityi ≠ cityj. It is guaranteed that no road is given twice.

Guaranteed constraints:
0 ≤ roads.length ≤ 35000,
roads[i].length = 2,
0 ≤ roads[i][j] < n.

[output] boolean

true if the road system is efficient, false otherwise.
"""

n = 6
roads = [[3, 0], [0, 4], [5, 0], [2, 1], [1, 4], [2, 3], [5, 2]]

tester = [
    [0, 0, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1],
    [1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0],
]


# roads = [[0, 4], [5, 0], [2, 1],
#          [1, 4], [2, 3], [5, 2]]
#
# roads = [[0, 1],
#          [0, 2],
#          [3, 4]]

# my first passing solution with help but still not passing 100% of tests
# def efficientRoadNetwork(n, roads):
#     if not roads:
#         return True
#     if n == 0:
#         return True
#     graph = {}
#     for i in range(n):
#         graph[str(i)] = set()
#     for road in roads:
#         graph[str(road[0])].add(str(road[1]))
#         graph[str(road[1])].add(str(road[0]))
#
#
#     def bfs(graph, S, D):
#         queue = [(S, [S])]
#         while queue:
#             (vertex, path) = queue.pop(0)
#             for next in graph[vertex] - set(path):
#                 if next == D:
#                     yield path + [next]
#                 else:
#                     queue.append((next, path + [next]))
#
#     def shortest(graph, S, D):
#         try:
#             return next(bfs(graph, S, D))
#         except StopIteration:
#             return None
#
#     for i in range(len(graph)):
#         for j in range(1, len(graph)):
#             if i != j:
#                 result = (shortest(graph, str(i), str(j)))
#                 if result is None:
#                     return False
#                 if len(result) > n + 1:
#                     return False
#     return True


# solution from google
# def efficientRoadNetwork(n, roads):
#     graph = [[1] * n for x in range(n)]
#     print(graph)
#     for i in range(n):
#         graph[i][i] = 0
#     for i, j in roads:
#         graph[i][j] = 1
#         graph[j][i] = 1
#     for k in range(n):
#         for i in range(n):
#             for j in range(n):
#                 if graph[i][j] > graph[i][k] + graph[k][j]:
#                     graph[i][j] = graphy[i][k] + graph[k][j]
#     for i in range(n):
#         for j in range(n):
#             if graph[i][j] >= 3:
#                 return False
#     return True

# solution with most votes
def efficientRoadNetwork(n, roads):
    adj = [[] for i in range(n)]
    for rd in roads:
        adj[rd[0]].append(rd[1])
        adj[rd[1]].append(rd[0])
    print(adj)
    for city in range(n - 1):
        oneHop = {c for c in adj[city]}
        print(oneHop)
        twoHops = {c for c1 in oneHop for c in adj[c1]}
        print(twoHops)
        if len({city} | oneHop | twoHops) < n:
            return False
    return True


# print(efficientRoadNetwork(n, roads))


"""
*** Financial Crisis ***
------------------------
Once upon a time, in a kingdom far, far away, there lived a King Byteasar IV. His kingdom in the middle of a financial crisis, Byteasar was struggling to keep the economy out of a recession. Unfortunately there was not much he could do, and after much agonizing he came to the only solution: one of his cities had to be demolished, since keeping communication active between all the cities is way too expensive.

It is not yet known if Byteasar chose a city to destroy after careful planning or picked one at random. As a person with a PhD in History and Nobel prize in Computer Science, you can solve this mystery! Archaeologists have recently found a manuscript with information about the roads between the cities, that is now stored in the roadRegister matrix. You want to try and remove each city one by one and compare the road registers obtained this way. Thus you'll be able to compare the obtained roads and determine whether the one picked by Byteasar was the best by some criteria.

Given the roadRegister, return an array of all the road registers obtained after removing each of the cities one by one.

Example

For

roadRegister = [[false, true,  true,  false],
                [true,  false, true,  false],
                [true,  true,  false, true ],
                [false, false, true,  false]]
the output should be

financialCrisis(roadRegister) = [
  [[false, true,  false],
   [true,  false, true ],
   [false, true,  false]],
  [[false, true,  false],
   [true,  false, true ],
   [false, true,  false]],
  [[false, true,  false],
   [true,  false, false],
   [false, false, false]],
  [[false, true,  true ],
   [true,  false, true ],
   [true,  true,  false]]
]
"""

roadRegister = [
    [False, False, False, False, True, False],
    [False, False, True, False, True, False],
    [False, True, False, True, True, True],
    [False, False, True, False, False, False],
    [True, True, True, False, False, True],
    [False, False, True, False, True, False],
]


def financialCrisis(roadRegister):

    # the results will contain a copy of the matrix reflecting each city
    # removed one at a time
    # create result array to hold final result
    result = []

    # helper function to remove the current city
    def remove_city(current_city):
        # print(roadRegister[current_city + 1:])
        new_road_register = []
        for i in range(len(roadRegister)):
            if roadRegister[i] != roadRegister[current_city]:
                new_road_register.append(roadRegister[i])
        return new_road_register

    # helper function to remove the roads of removed city
    def remove_roads(city, road_to_remove):
        # if the road is not the road to remove save it in new array
        kept_roads = []
        for i in range(len(city)):
            if i != road_to_remove:
                kept_roads.append(city[i])
        return kept_roads

    # iterate the matrix

    for city in range(len(roadRegister)):
        new_register = []
        # remove the city array
        temp_road_register = remove_city(city)
        # remove the road element of each other array
        for i in range(len(temp_road_register)):
            # add that to the result matrix
            new_register.append(remove_roads(temp_road_register[i], city))
        print("new register", new_register)
        result.append(new_register)

    # return result


"""
def financialCrisis(roadRegister):
    newRegister = []
    n = len(roadRegister)
    newRegister = [ [ [roadRegister[j][k] for j in range(n) if j!=l] for k in range(n) if k!=l] for l in range(n)] 
    return newRegister

11:34
def financialCrisis(r):
    return [[v[:j] + v[j+1:] for i, v in enumerate(r) if i!=j] for j in range(len(r))]
"""
print(financialCrisis(roadRegister))

# not sure why the expected output only wants 4 registers returned when the
# accepted output
# [[[false,true,false,true,false],[true,false,true,true,true],[false,true,false,false,false],[true,true,false,false,true],[false,true,false,true,false]],
#  [[false,false,false,true,false],[false,false,true,true,true],[false,true,false,false,false],[true,true,false,false,true],[false,true,false,true,false]],
#  [[false,false,false,true,false],[false,false,false,true,false],[false,false,false,false,false],[true,true,false,false,true],[false,false,false,true,false]],
#  [[false,false,false,true,false],[false,false,true,true,false],[false,true,false,true,true],[true,true,true,false,true],[false,false,true,true,false]],
#  [[false,false,false,false,false],[false,false,true,false,false],[false,true,false,true,true],[false,false,true,false,false],[false,false,true,false,false]],
#  [[false,false,false,false,true],[false,false,true,false,true],[false,true,false,true,true],[false,false,true,false,false],[true,true,true,false,false]]]
# matrix has 6 cities
# my output ******************
# [[[false,true,false,true,false],[true,false,true,true,true],[false,true,false,false,false],[true,true,false,false,true],[false,true,false,true,false]],
#  [[false,false,false,true,false],[false,false,true,true,true],[false,true,false,false,false],[true,true,false,false,true]],
#  [[false,false,false,true,false],[false,false,false,true,false],[false,false,false,false,false],[true,true,false,false,true],[false,false,false,true,false]],
#  [[false,false,false,true,false],[false,false,true,true,false],[false,true,false,true,true],[true,true,true,false,true],[false,false,true,true,false]],
#  [[false,false,false,false,false],[false,false,true,false,false],[false,true,false,true,true],[false,false,true,false,false],[false,false,true,false,false]],
#  [[false,false,false,false,true],[false,true,false,true,true],[false,false,true,false,false],[true,true,true,false,false]]]
# Expected Output:
# [[[false,true,false,true,false],[true,false,true,true,true],[false,true,false,false,false],[true,true,false,false,true],[false,true,false,true,false]],
#  [[false,false,false,true,false],[false,false,true,true,true],[false,true,false,false,false],[true,true,false,false,true],[false,true,false,true,false]],
#  [[false,false,false,true,false],[false,false,false,true,false],[false,false,false,false,false],[true,true,false,false,true],[false,false,false,true,false]],
#  [[false,false,false,true,false],[false,false,true,true,false],[false,true,false,true,true],[true,true,true,false,true],[false,false,true,true,false]]]


"""
{
  "input": {
    "roadRegister": [
      [
        false,
        false,
        false,
        false,
        true,
        false
      ],
      [
        false,
        false,
        true,
        false,
        true,
        false
      ],
      [
        false,
        true,
        false,
        true,
        true,
        true
      ],
      [
        false,
        false,
        true,
        false,
        false,
        false
      ],
      [
        true,
        true,
        true,
        false,
        false,
        true
      ],
      [
        false,
        false,
        true,
        false,
        true,
        false
      ]
    ]
  },
  "output": [
    [
      [
        false,
        true,
        false,
        true,
        false
      ],
      [
        true,
        false,
        true,
        true,
        true
      ],
      [
        false,
        true,
        false,
        false,
        false
      ],
      [
        true,
        true,
        false,
        false,
        true
      ],
      [
        false,
        true,
        false,
        true,
        false
      ]
    ],
    [
      [
        false,
        false,
        false,
        true,
        false
      ],
      [
        false,
        false,
        true,
        true,
        true
      ],
      [
        false,
        true,
        false,
        false,
        false
      ],
      [
        true,
        true,
        false,
        false,
        true
      ],
      [
        false,
        true,
        false,
        true,
        false
      ]
    ],
    [
      [
        false,
        false,
        false,
        true,
        false
      ],
      [
        false,
        false,
        false,
        true,
        false
      ],
      [
        false,
        false,
        false,
        false,
        false
      ],
      [
        true,
        true,
        false,
        false,
        true
      ],
      [
        false,
        false,
        false,
        true,
        false
      ]
    ],
    [
      [
        false,
        false,
        false,
        true,
        false
      ],
      [
        false,
        false,
        true,
        true,
        false
      ],
      [
        false,
        true,
        false,
        true,
        true
      ],
      [
        true,
        true,
        true,
        false,
        true
      ],
      [
        false,
        false,
        true,
        true,
        false
      ]
    ],
    [
      [
        false,
        false,
        false,
        false,
        false
      ],
      [
        false,
        false,
        true,
        false,
        false
      ],
      [
        false,
        true,
        false,
        true,
        true
      ],
      [
        false,
        false,
        true,
        false,
        false
      ],
      [
        false,
        false,
        true,
        false,
        false
      ]
    ],
    [
      [
        false,
        false,
        false,
        false,
        true
      ],
      [
        false,
        false,
        true,
        false,
        true
      ],
      [
        false,
        true,
        false,
        true,
        true
      ],
      [
        false,
        false,
        true,
        false,
        false
      ],
      [
        true,
        true,
        true,
        false,
        false
      ]
    ]
  ]
}
"""

"""
*** Has Deadlock ***
--------------------
Note: Try to solve this task in O(m + n) or O(n) time, where n is a number of vertices and m is a number of edges, since this is what you'll be asked to do during an interview.

In a multithreaded environment, it's possible that different processes will need to use the same resource. A wait-for graph represents the different processes as nodes in a directed graph, where an edge from node i to node j means that the node j is using a resource that node i needs to use (and cannot use until node j releases it).

We are interested in whether or not this digraph has any cycles in it. If it does, it is possible for the system to get into a state where no process can complete.

We will represent the processes by integers 0, ...., n - 1. We represent the edges using a two-dimensional list connections. If j is in the list connections[i], then there is a directed edge from process i to process j.

Write a function that returns True if connections describes a graph with a directed cycle, or False otherwise.
Example

For connections = [[1], [2], [3, 4], [4], [0]], the output should be
hasDeadlock(connections) = true.


This graph contains a cycle.

For connections = [[1, 2, 3], [2, 3], [3], []], the output should be
hasDeadlock(connections) = false.
"""

connections = [[1], [2], [3, 4], [4], [0]]

# connections = [[1, 2, 3], [2, 3], [3], []]

connections = [[1, 2], [2], [], [4], [3]]
# top codesignal solution
def hasDeadlock(g):
    return any(cycle(g, u, [False] * len(g)) for u in range(len(g)))


def cycle(g, u, path):
    path[u] = True
    for v in g[u]:
        if path[v] or cycle(g, v, path.copy()):
            return True
    return False


# my solution only passing 19/20 tests
# def hasDeadlock(connections):
#     # find out if the graph has a cycle
#
#     # helper function to see if a nodes children are visited
#     def are_children_visited(vert):
#         print(connections[vert])
#         for i in range(len(connections[vert])):
#             if connections[vert][i] in visited:
#                 return True
#                 print('yes in visited **********')
#             else:
#                 return False
#
#     # iterating the WHOLE array
#     for i in range(len(connections)):
#         # keep track of visited verts
#         visited = []
#         q = []
#         # creating a new q every iteration with the current index
#         q.append(i)
#
#         # while there is a vert in the q
#         while q:
#             cur = q.pop(0)
#             print('current after pop', cur)
#             # add the current vert to visited
#             visited.append(cur)
#             print('visited after append', visited)
#             # iterate the current verts neighbors
#             for i in range(len(connections[cur])):
#                 neighbor = connections[cur][i]
#                 print('neighbor just created', neighbor)
#                 # check if any neighbors OR their neighbors are already in
#                 # visited
#                 # if they are in visited return True there IS a cycle
#                 if neighbor in visited:
#                     if are_children_visited(neighbor):
#                         return True
#                     print('neighbor in visited', neighbor)
#                     print('visited', visited)
#                 # else add the neigbor to the q if not already in the q
#                 else:
#                     if neighbor not in q:
#                         q.append(neighbor)
#                         print('q appended neighbor', q)
#     # return False if we find no cycle
#     return False


# print(hasDeadlock(connections))
