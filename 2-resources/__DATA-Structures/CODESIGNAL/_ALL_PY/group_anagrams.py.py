import collections


def groupAnagrams(strs):
    # """
    # TimeComplexity: O(n*K*log(K)) where n is the length of strs and K is the length of the longest string
    #  in strs
    # """
    # seen = {}
    # for s in strs:
    #     ele = tuple((sorted(s)))
    #     if ele in seen:
    #         seen[ele].append(s)
    #     else:
    #         seen[ele] = [s]
    # return seen.values()
    """
    Time Complexity: O (N*K)
    """
    d = collections.defaultdict(list)
    for s in strs:
        count = [0] * 26
        for char in s:
            count[ord(char) - 97] += 1
        d[tuple(count)].append(s)
    return d.values()


print(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
