# find the minimum positive integer that is NOT contained in a given array
# e.g. [1, 5, 2, 3] would give 4
import time

start = time.time()


def solution(A):

    solution.n = 1

    def getMin(num):
        if solution.n == num:
            solution.n += 1
        return num

    B = sorted(A, key=getMin)

    print(solution.n)
    return solution.n


# test cases
solution([1, 3, 5, 7])  # 2
solution([1, 5, 2, 3])  # 4
solution([1, 5, 2, 3, 1, 3, 5, 7])  # 4
solution([7, 6, 5, 4])  # 1
solution([7, 6, 5, 4, 1, 2])  # 3
solution([1, 2])  # 3
solution([-1, 0, 1])  # 2

end = time.time()
print(end - start)
