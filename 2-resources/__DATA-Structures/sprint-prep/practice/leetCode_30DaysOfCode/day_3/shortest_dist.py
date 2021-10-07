def findShortestSubArray(nums):
    shortest_dist = len(nums)
    max_counts = 1
    d = {}
    for i in range(len(nums)):
        if nums[i] in d:
            d[nums[i]][0] += 1
            if d[nums[i]][0] > max_counts:
                shortest_dist = i - d[nums[i]][1]
                max_counts = d[nums[i]][0]
            elif d[nums[i]][0] == max_counts:
                dist = i - d[nums[i]][1]
                if dist < shortest_dist:
                    shortest_dist = dist
        else:
            d[nums[i]] = [1, i]
    if max_counts == 1:
        return 1
    return shortest_dist + 1


print(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]))
