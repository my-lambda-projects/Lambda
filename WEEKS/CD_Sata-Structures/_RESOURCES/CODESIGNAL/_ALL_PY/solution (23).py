# def sortByHeight(a):
#     for i in range(len(a)):
#         if a[i] != -1:
#             for j in range(i+1, len(a)):
#                 if a[j]!=-1 and a[j]<a[i]:
#                     a[i], a[j] = a[j], a[i]
#     return a


# def sortByHeight(a):
#     b = sorted(a)[a.count(-1):]
#     return [x if x == -1 else b.pop(0) for x in a]
#
# print(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))
