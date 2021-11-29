# In a town, there are N people labelled from 1 to N. There is a rumor that one of these people is secretly the town judge.

# If the town judge exists, then:

# The town judge trusts nobody.

# Everybody (except for the town judge) trusts the town judge.

# There is exactly one person that satisfies properties 1 and 2.

# You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

# If the town judge exists and can be identified, return the label of the town judge. Otherwise, return -1.

# Example 5:

# Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
 
# Output: 3
# Example 1:

# Input: N = 2, trust = [[1,2]]
# Output: 2

def find_judge(trust):
    people = set()
    trusters = set()

    for truster, trustee in trust:
        people.add(truster)
        people.add(trustee)

        trusters.add(truster)

    # Criterion #1: Who trusts no one?
    # Who is in people but not in trusters?

    # With set operations:
    #result = list(people.difference(trusters)))
    result = list(people - trusters)

    """
    # Or by hand:
    result = []
    for p in people:
        if p not in trusters:
            result.append(p)
    """

    people_who_dont_trust_anyone = result

    # Criterion #2: which non-trusters are trusted by everyone?

    judges = []

    for candidate in people_who_dont_trust_anyone:
        #people_who_trust_candidate = []
        truster_count = 0

        for truster, trustee in trust:
            if trustee == candidate:
                #people_who_trust_candidate.append(truster)
                truster_count += 1

        #if len(people_who_trust_candidate) == len(people) - 1:
        if truster_count == len(people) - 1:
            # Everyone trusts the candidate except the candidate
            judges.append(candidate)


    # Criterion #3: there can be only one

    if len(judges) != 1:
        return -1

    return judges[0]



print(find_judge([[1,2]])) # 2
print(find_judge([[1,3],[2,3]]))  # 3
print(find_judge([[1,3],[2,3],[3,1]]))  # -1
print(find_judge([[1,2],[2,3]]))   # -1
print(find_judge([[1,3],[1,4],[2,3],[2,4],[4,3]])) # 3

Adjacency Matrix Representation
List:

0: [2, 3]
1: [2, 3]
2: []
3: [2]
Matrix:

  0 1 2 3
  -------
0|0 0 1 1
1|0 0 1 1
2|0 0 0 0
3|0 0 1 0
 
edge_matrix = [
    [0, 0, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
]
 
# Is a node connected to another?
# if edge_matrix[from][to] != 0:
#     print("They're connected!")
 
https://colab.research.google.com/drive/1aMM4MP9SCSu4tNXd8C3pJ30O909GJHYJ?usp=sharing#scrollTo=pdvs2MJ4a_zX
