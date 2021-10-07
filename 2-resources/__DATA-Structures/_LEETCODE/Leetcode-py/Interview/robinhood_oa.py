import heapq


def deleteMinimalPeaks(numbers):
    if len(numbers) <= 1:
        return numbers
    q = []
    neighbors = {}
    for i in range(len(numbers)):
        if i == 0:
            if numbers[i] > numbers[i + 1]:
                heapq.heappush(q, (numbers[i], -1, numbers[i + 1]))
            neighbors[numbers[i]] = [-1, numbers[i + 1]]
        elif i == len(numbers) - 1:
            if numbers[i] > numbers[i - 1]:
                heapq.heappush(q, (numbers[i], numbers[i - 1], -1))
            neighbors[numbers[i]] = [numbers[i - 1], -1]
        else:
            if numbers[i - 1] < numbers[i] > numbers[i + 1]:
                heapq.heappush(q, (numbers[i], numbers[i - 1], numbers[i + 1]))
            neighbors[numbers[i]] = [numbers[i - 1], numbers[i + 1]]

    result = []
    while q:
        curr, left, right = heapq.heappop(q)
        result.append(curr)
        if left != -1:
            neighbors[left][1] = right
            if neighbors[left][0] < left > right:
                heapq.heappush(q, (left, neighbors[left][0], neighbors[left][1]))
        if right != -1:
            neighbors[right][0] = left
            if neighbors[right][0] < right > neighbors[right][1]:
                heapq.heappush(q, (right, neighbors[right][0], neighbors[right][1]))
    return result


if __name__ == "__main__":
    # numbers = [2, 7, 8, 5, 1, 6, 3, 9, 4]
    numbers = [1, 2]
    result = deleteMinimalPeaks(numbers)
    print(result)
