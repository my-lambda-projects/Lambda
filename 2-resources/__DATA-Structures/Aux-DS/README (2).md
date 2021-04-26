# Algorithms One

After the invention of the Turing Machine, human computation was proved to be equivalen to mechanical computation. Invention quickly moved toward building these kinds of machines. Mathematical theorists moved on to the question of what kinds of problems can be computed, how to formulate those questions, and how difficult they become.

Algorithms are a vast subject packed with mathematical specificity - no two day study of the subject can enable to you tackle any problem in the space. This lesson is to teach you about the challenges and complexities in the design, understanding, and implementation of algorithms.

The business of rigorously explaining certain challenging problems, then identifying a specific method to finding a correct answer. Primarily an academic discipline, nonetheless all of computer science rests on it.

# The basis of algorithm design: Countability and Permutations

The most basic question in algorithm design begins with the countability of sets. The set `N` of integers is countably infinite: All negative and positive integers: `{..., -4,-3,-2,-1,0,1,2,3,4, ...}`. The set `R` of real numbers is uncountably infinite: All numbers that can be expressed as fractions: `{..., -101/10, ..., -1/2, ..., 0/1, ... 1/1, ..., 7/3, ...}`.

Sets are also used to communicate about discrete sets, which is the interest of computer science. `let X = ["apple", "cherry", "tomato", "strawberry", "raspberry"]` and `let Y = ["up", "down", "left", "right"]`. The study of algorithms involves identifying the set of elements that make up certain specific problems and then exploring that set in search of some solution.

The most basic approach to finding any solution is to exhaustively enumerate every permutation of the set in question. Exhaustive enumeration provides perfect solutions, but is intractable but for all of the smallest datasets. The size of the set Z of a set S with n elements is `n!` - the largest complexity class. :)

# Mini lab

Write code in your language of choice to generate all permutations of the following sets:

    (1, 2, 3)
    ('a', 'b', 'c', 'd')
    ('corn', 'turkey', 'winter', 'algebra', 'window')

#### Generating permutations algorithms

[Lexicographic Ordering](https://en.wikipedia.org/wiki/Lexicographical_order)

[Heaps' Algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm)

# The second basis of algorithm design: Graph theory

A graph is a set of nodes that are connected by edges. Nodes each represent information in some state, and edges represent transformations of that information into another state. Any problem in computation can generally be described as "here is the information we know about the problem" as a state and "these are the changes we can apply to the information from this state" as an edge. Each node has a number of edges leaving it that is known as its "branching factor". The branching factor of graph determines the size of its search space.

    C = n ^ b

![A Graph](https://www.lucidchart.com/publicSegments/view/0bb94330-2ca8-48dc-9108-640fdec02122/image.png)

# Asymptotic Complexity Big(O)

O(n) notation describes _asymptotic complexity_, that is, the difficulty of a problem as the size of the problem approaches infinity.

## Growth of Big(O) and the shape of an algorithm

[Algorithms Visualization](https://www.lucidchart.com/invitations/accept/fddf57b9-9ca0-4956-b97a-832c96aded5b)

Transforming an algorithm from one complexity class to another:
- O(x^n) n fully connected lists of length x
- O(n^4) is n cubes
- O(n^3) is a cube
- O(n^2) is a matrix
- O(n log n) is a binary tree with depth = n (log is branching factor)
- O(n) is a list of length n
- O(log n) is a a binary tree with depth = n that is explored once with depth first search
- O(1) computes the answer immediately

[Big O](https://www.lucidchart.com/documents/view/fb7a5e50-8340-46b4-be62-69c7fe24c472)
   
# Assignment

## Travelling Salesman Problem (TSP)

The TSP is one of the most famous problems in Computer Science. Imagine a map containing `n` cities that need to be visited in an optimal order. This problem is known to be somewhere less than O(n!) and greater than O(x^n).

TSP is one of the most popular benchmark problems and a great many algorithms have been tested against it. For the interest time of time and experience, only two algorithms are prescribed in this assignment:

### Solution Methods:

#### Exhaustive search (Breadth-first or Depth-first search) 

Exhaustive search is fundamentally the most difficult case: calculate the length of every possible path, keeping the shortest. This method is guaranteed to return the shortest path, but is intractable for lists of cities greater than ~20, as this algorithm is NP-Complete and O(n!). The algorithm to exhaustively search involves starting from the first ordered list of all cities as integers, then swapping a pair, calculating the length of that trip, storing it if `l(x) < B`, and repeating until all swaps have been performed:

    Cities: [
    {name:"Denver", x:500, y:500},
    {name:"Salt Lake City", x:300, y:500},
    {name:"Cheyenne", x:500, y:600},
    {name:"Santa Fe", x:500, y:350]
    ]

The distance between two cities is:
    distance_between = (city1, city2) -> {
      return Math.sqrt((city1.x - city2.x)^2 + (city.1.y - city2.y)^2))
    }

All 4! permutations of `Cities`:

    [1,2,3,4] = [Denver, Salt Lake City, Cheyenne, Santa Fe]
    [1,2,4,3]
    [1,3,2,4]
    [1,3,4,2]
    [1,4,2,3]
    [1,4,3,2]

    [2,1,3,4]
    [2,1,4,3]
    [2,3,1,4]
    [2,3,4,1]
    [2,4,1,3]
    [2,4,3,1]

    [3,1,2,4]
    [3,1,4,2]
    [3,2,1,4]
    [3,2,4,1]
    [3,4,1,2]
    [3,4,2,1]

    [4,1,2,3]
    [4,1,3,2]
    [4,2,1,3]
    [4,2,3,1]
    [4,3,1,2]
    [4,3,2,1]

Exhaustive Algorithm Psuedo Code:

    best_trip_length = MAX
    best_trip = []
    for each ordering in the permutations of C:
      current_trip_length = 0
      for each pair in the ordering:
        current_trip_length += distance_between(current_pair)
      if(current_trip_length < best_trip_length)
        best_trip_length = current_trip_length
        best_trip = ordering

#### Nearest Neighbor search   

Nearest neighbor search (Choose only the nearest neighbor from a given city). This algorithm takes a decidedly different approach than exhaustive and is only O(n^2). It doesn't produce the _best_ result, but it tends to produce a result that is within 25% of the best result. It is neither the fastest nor the "most optimal" of the decideable algorithms, but it is easy to implement and understand.

    given a list of cities to be visited l
    path = []
    for each city start in l:
      add start to path
      while(path.length != l.length)
        for each city in l not in path:
          current = distance(city, start);
          if(distance < best_nearest)
            best_nearest_distance = distance
            best_nearest = city
        path.add(best_nearest)


Implement the above two algorithms. Use the short and long city datasets provided in this assignment and compare their running times and the length and shapes of the paths they return.



