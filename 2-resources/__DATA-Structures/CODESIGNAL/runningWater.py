import copy


def runningWater(cap, volume):
    max_buckets = cap[::]
    full_volume = sum(max_buckets)
    seen_volume = set()
    seen = set()
    stack = emptyBuckets(cap, 0, volume)
    for item in stack:
        seen_volume.add(full_volume - item[0])
        seen.add(tuple(item[1]))

    # need this edge case here to pass all tests!
    if volume == full_volume:
        return True

    while stack and volume not in seen_volume:
        curr = stack.pop()
        seen_volume.add(full_volume - curr[0])
        seen.add(tuple(curr[1]))
        # add values for emptied bucket move
        # only if tuples not in seen
        for item in emptyBuckets(curr[1], curr[0], volume):
            if tuple(item[1]) not in seen:
                stack.append(item)
                seen.add(tuple(item[1]))

        # add values for combinations of pouring buckets into other buckets
        # stack.extend([a for a in pourBuckets(curr, max_buckets) if tuple(a[1]) not in seen])
        for item in pourBuckets(curr, max_buckets, seen):
            # if(tuple(item[1]) not in seen):
            stack.append(item)
            seen.add(tuple(item[1]))

    else:
        if volume in seen_volume:
            return True

    return False


def emptyBuckets(buckets, curr_poured, min_volume):
    output = []
    for i in range(3):
        output.append([buckets[i] + curr_poured, []])
        # print(output)
        for j in range(3):
            if j == i:
                output[i][1].append(0)
            else:
                output[i][1].append(buckets[j])
    # print(output)
    for i in range(3):
        if min_volume > sum(output[-1][1]):
            # print(min_volume, output[-1][1])
            # print(output)
            output.pop()
    return output


def pourBuckets(buckets, max_buckets, seen):
    output = []
    # print(buckets)
    for i in range(3):
        for j in range(3):
            if i == j:
                continue
            curr = copy.deepcopy(buckets)
            # pour buckets into other buckets
            if curr[1][j] == max_buckets[j]:
                # bucket to be poured into is full
                # print(buckets, max_buckets)
                # output.append(curr)
                continue
            elif curr[1][i] + curr[1][j] >= max_buckets[j]:
                curr[1][i] = (curr[1][j] + curr[1][i]) - max_buckets[j]
                curr[1][j] = max_buckets[j]
                # print(i, j, buckets, curr)
            # output.append(curr)
            elif curr[1][i] + curr[1][j] < max_buckets[j]:
                curr[1][j] = curr[1][i] + curr[1][j]
                curr[1][i] = 0
            if tuple(curr[1]) not in seen:
                output.append(copy.deepcopy(curr))
    # print(buckets, output)
    return output
