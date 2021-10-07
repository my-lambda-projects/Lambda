def areFollowingPatterns(strings, patterns):
    d = {}
    for ele in range(len(strings)):
        if d.get(strings[ele]):
            if d[strings[ele]] != patterns[ele]:
                return False
        elif patterns[ele] in d.values():
            return False
        else:
            d[strings[ele]] = patterns[ele]
    return True


strings = ["cat", "dog", "doggy"]
patterns = ["a", "b", "b"]

print(areFollowingPatterns(strings, patterns))
