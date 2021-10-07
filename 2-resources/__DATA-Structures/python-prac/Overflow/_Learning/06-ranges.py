# Ranges
# - declare
# - loops

nums = range(10)
print(nums)
print(list(nums))

counters = range(1, 11)
print(list(counters))

fives = range(0, 51, 5)
print(list(fives))

test = range(51, 5)
print(list(test))

items = ["a", "b", "c"]
for i in range(len(items)):
    print(i, items[i])

for i in range(1, 10, 2):
    print(i)
