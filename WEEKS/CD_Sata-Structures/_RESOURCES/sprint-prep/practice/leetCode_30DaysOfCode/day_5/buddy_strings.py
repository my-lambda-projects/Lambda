def buddyStrings(A, B):
    if len(A) != len(B):
        return False
    elif A == B:
        seen = set()
        for char in A:
            if char in seen:
                return True
            seen.add(char)
        return False
    else:
        pairs = []
        for i in range(len(A)):
            if A[i] != B[i]:
                pairs.append([A[i], B[i]])
            if len(pairs) > 2:
                return False
        return len(pairs) == 2 and pairs[0] == pairs[1][::-1]


print(buddyStrings("ab", "ab"))
print(buddyStrings("aaa", "aaa"))
