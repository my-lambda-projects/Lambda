# Tuples
# - declare
# - cannot append, remove or sort in place
# - sorted()
# - min, max, sum, len
# - empty and single item tuples
# - returning tuples from functions

# a = (1, 2, 3, 4, 5, 6, 7, 8, 9)
# b = ('a', 'b', 'c', 'd', 'e')
# c = 10, 20, 30

# print(a)
# print(b)
# print(c)

# # a.append(10)
# # print(a)

# # a.sort()

# shopping = ('apples', 'milk', 'bread')
# alphaShopping = tuple(sorted(shopping))
# print(alphaShopping)

# shoppingStops = (
#     ['bread', 'milk', 'eggs'],
#     ['picture hooks', 'extension cord'],
# )
# print(shoppingStops)

# print(shoppingStops[0])
# shoppingStops[0].append('apples')
# print(shoppingStops)

# users = [
#     (1, 'user_a'),
#     (2, 'user_b'),
# ]
# print(users)

# scores = (15, 66, 34, 99, 29, 54, 12)
# print(scores)
# print(max(scores))
# print(min(scores))
# print(sum(scores) / len(scores))

# print(tuple(sorted(scores)))


def minmax(numbers):
    return min(numbers), max(numbers)


myNums = (1, 4, -2, 3.3, -8, 25, 9, 0)
print(minmax(myNums))

(lowest, highest) = minmax(myNums)
print(lowest)
print(highest)
