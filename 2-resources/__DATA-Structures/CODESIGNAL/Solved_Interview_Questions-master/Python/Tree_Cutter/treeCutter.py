# Find the number of trees that can be cut down from a line of trees, where
# each consecutive tree must be the same height or taller than the one
# before it!


# function to tell if the tree line meets the condition described
def testTreeLine(A):
    if A == sorted(A):
        return True
    else:
        return False


# check if solution is possible
def impossible(A):
    maxIndex = A.index(max(A))
    maxBefore = max(A[0:maxIndex])
    minAfter = min(A[maxIndex:])
    if A[maxIndex] != A[len(A) - 1]:
        if minAfter <= (maxBefore - 2) and len(A[maxIndex + 1 :]) > 1:
            return True
        else:
            return False


# function to see how many trees can be cut down
def numCutTrees(A):
    n = 0
    # check case where no solutions possible
    # for faster result
    if impossible(A):
        return n

    for l in range(len(A)):
        elem = A.pop(l)
        if testTreeLine(A):
            n = n + 1
        A.insert(l, elem)

    return n


N = [1, 2, 3, 4, 4]  # 5
L = [1, 4, 2, 3]  # 1
C = [1, 3, 5, 3]  # 2
D = [1, 4, 3, 5, 3]  # 0
E = [1, 2, 3, 4, 1]  # 1

print(numCutTrees(N))
print(numCutTrees(L))
print(numCutTrees(C))
print(numCutTrees(D))
print(numCutTrees(E))
