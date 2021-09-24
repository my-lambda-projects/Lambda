import numpy as np


# Recursively finds all students in a single friend circle
def DFS(friendships, n, visited, v):
    for x in range(n):
        # A student is in the friend circle if he/she is friendships with the student represented by
        # studentIndex and if he/she is not already in a friend circle
        if friendships[v, x] and visited[x] == 0:
            if x != v:
                visited[x] = 1
                DFS(friendships, n, visited, x)


n = 4


def csFriendCircles(friendships):

    numCircles = 0  # Number of friend circles

    # Keep track of whether a student is already in a friend circle
    visited = np.zeros((n))

    # Start with the first student and recursively find all other students in his/her
    # friend circle. Then, do the same thing for the next student that is not already
    # in a friend circle. Repeat until all students are in a friend circle.
    for i in range(n):
        if visited[i] == 0:
            visited[i] = 1
            # Recursive step to find all friendships
            DFS(friendships, n, visited, i)
            numCircles = numCircles + 1
            return numCircles
