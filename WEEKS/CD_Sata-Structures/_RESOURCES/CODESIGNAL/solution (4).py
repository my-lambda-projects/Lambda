# def jobOffers(scores, lowerLimits, upperLimits):
#     for l, u in zip(lowerLimits, upperLimits):
#        yield len([1 for score in scores if l <= score <= u])


# get the index of the first number greater than or equals to the lower
def findLower(scores, len_score, v):
    l = 0
    u = len_score - 1
    while l <= u:
        mid = (l + u) // 2
        if scores[mid] >= v:
            u = mid - 1
        else:
            l = mid + 1
    return l


# get the index of the last element that is less than or equal to v
def findUpper(scores, len_score, v):
    l = 0
    u = len_score - 1
    while l <= u:
        mid = (l + u) // 2
        if scores[mid] > v:
            u = mid - 1
        else:
            l = mid + 1
    return u


def jobOffers(scores, lowerLimits, upperLimits):
    scores.sort()
    n = len(scores)
    for index in range(len(lowerLimits)):
        yield findUpper(scores, n, upperLimits[index]) - findLower(
            scores, n, lowerLimits[index]
        ) + 1


for i in jobOffers([1, 2, 2, 3, 5, 6, 7], [1], [7]):
    print(i)
