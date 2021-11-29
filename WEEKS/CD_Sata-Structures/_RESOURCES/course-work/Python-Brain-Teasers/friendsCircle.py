# There are N students in a baking class together. Some of them are friends, while some are not friends. The students' friendship can be considered transitive. This means that if Ami is a direct friend of Bill, and Bill is a direct friend of Casey, Ami is an indirect friend of Casey. A friend circle is a group of students who are either direct or indirect friends of some level. That is, the friend circle consists of a person, their friends, their friends-of-friends, their friends-of-friends-of-friends, and so on.

# Given a N*N matrix M representing the friend relationships between students in the class. If M[i][j] = 1, then the ith and jth students are direct friends with each other, otherwise not.

# You need to write a function that can output the total number of friend circles among all the students.

# Example 1:

# Input:
# [[1,1,0],
#  [1,1,0],
#  [0,0,1]]
# Output: 2
# Explanation: The 0th and 1st students are direct friends, so they are in a friend circle.
# The 2nd student himself is in a friend circle. So return 2.
# Example 2:

# Input:
# [[1,1,0],
#  [1,1,1],
#  [0,1,1]]
# Output: 1
# Explanation: The 0th and 1st students are direct friends, the 1st and 2nd students are direct friends,
# so the 0th and 2nd students are indirect friends. All of them are in the same friend circle, so return 1.
# [execution time limit] 4 seconds (py3)

# [input] array.array.integer friendships

# [output] integer


def dfs(row, friends, visited_arr):
    visited_arr.add(row)
    for neighbor in range(len(friends[row])):
        if friends[row][neighbor] == 1 and neighbor not in visited_arr:
            dfs(neighbor, friends, visited_arr)
    return visited_arr


def csFriendCircles(friendships):
    count = 0
    visited = set()
    if friendships is None or len(friendships) == 0:
        return 0

    for row in range(len(friendships)):
        if friendships[row][row] == 1 and row not in visited:
            count += 1
            visited = dfs(row, friendships, visited)

    return count
