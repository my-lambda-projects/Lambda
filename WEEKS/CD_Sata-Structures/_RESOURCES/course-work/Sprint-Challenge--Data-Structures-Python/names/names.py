import time

start_time = time.time()

f = open("names_1.txt", "r")
names_1 = f.read().split("\n")  # List containing 10000 names
f.close()

f = open("names_2.txt", "r")
names_2 = f.read().split("\n")  # List containing 10000 names
f.close()

# duplicates = []
# for name_1 in names_1:
#     for name_2 in names_2:
#         if name_1 == name_2:
#             duplicates.append(name_1)

duplicates = []
names = dict()

for n1 in names_1:
    names[n1] = n1
    # {'Jean Velazquez': 'Jean Velazquez'}

for n2 in names_2:
    if n2 in names:  # duplicate check
        duplicates.append(n2)  # add

end_time = time.time()

# count
print(
    f"{len(duplicates)} duplicates:\n\n{', '.join(duplicates)}\n\n"
)  # total duplicates
print(f"runtime: {end_time - start_time} seconds")

# runtime: 9.610661268234253 seconds
# runtime: 0.009972810745239258 seconds
