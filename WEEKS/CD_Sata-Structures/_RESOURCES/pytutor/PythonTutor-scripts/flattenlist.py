# So i have list [[1],[[2,[5]]],[4,5],[[6]],[7]]

# I want to flatten this


def flatten(l):

    tmp = [val for sublist in l for val in sublist]

    stack = []

    for item in tmp:
        if isinstance(item, list):
            tmp2 = [val for val in item]
            for val in tmp2:
                stack.append(val)
            break

        else:
            stack.append(item)

    return stack


sample_list = [[1], [[2, [5]]], [4, 5], [[6]], [7]]

print(flatten(sample_list))
