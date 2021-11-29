"""
There are N students in a baking class together. Some of them are friends, while some are not friends. The students' friendship can be considered transitive. This means that if Ami is a direct friend of Bill, and Bill is a direct friend of Casey, Ami is an indirect friend of Casey. A friend circle is a group of students who are either direct or indirect friends.

Given a N*N matrix M representing the friend relationships between students in the class. If M[i][j] = 1, then the ith and jth students are direct friends with each other, otherwise not.

You need to write a function that can output the total number of friend circles among all the students.

Example 1:

Input: 
[[1,1,0],
 [1,1,0],
 [0,0,1]]
Output: 2
Explanation: The 0th and 1st students are direct friends, so they are in a friend circle. 
The 2nd student himself is in a friend circle. So return 2.
Example 2:

Input: 
[[1,1,0],
 [1,1,1],
 [0,1,1]]
Output: 1
Explanation: The 0th and 1st students are direct friends, the 1st and 2nd students are direct friends, 
so the 0th and 2nd students are indirect friends. All of them are in the same friend circle, so return 1.
[execution time limit] 4 seconds (py3)

[input] array.array.integer friendships

[output] integer


"""


def csFriendCircles_FLAGS(friendships):
    """
    Args:
        friendships: list[list]
        
    result
        count: int
    """

    # set a counter count
    count = 0
    # the length of friends
    N = len(friendships)
    # start them off as False == not seen
    seen = [False] * N

    def visit(current):
        # node is the list and the list of list are the edges
        for person, is_friend in enumerate(friendships[current]):
            # if edge is 1 and not seen
            if is_friend == 1 and not seen[person]:
                # mark as seen
                seen[person] = True
                # go to next node
                visit(person)

    for person in range(N):  # N = len(friendships)
        if not seen[person]:
            count += 1
            seen[person] = True
            visit(person)

    return count


"""
DFS Recursive solution
https://www.youtube.com/watch?v=TKHIC6muurM
"""


def csFriendCircles(friendships):
    def dfs(node, friendships, seen):
        for person, is_friend in enumerate(friendships[node]):
            if is_friend and person not in seen:
                seen.add(person)
                # so carry on
                dfs(person, friendships, seen)

    count = 0
    seen = set()
    for person in range(len(friendships)):
        if person not in seen:
            count += 1
            dfs(person, friendships, seen)
    return count


# Example 1:
# Input:
x1 = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
# Output: 2


# Example 2:
x2 = [[1, 1, 0], [1, 1, 1], [0, 1, 1]]
# Output: 1


print(csFriendCircles(x1))
print(csFriendCircles(x2))

print(csFriendCircles_FLAGS(x1))
print(csFriendCircles_FLAGS(x2))
