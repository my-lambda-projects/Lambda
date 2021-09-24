# l = [1, 2, 3, 4, 5, 6]

# def modify_list(l):
#     for j in range(len(l) - 1, -1, -1):
#         if l[j] % 2 != 0:
#             l.remove(l[j])
#         else:
#             l[j] //= 2


# modify_list(l)
# print(l)
# output must be [1,2,3]
"""Write the function modify_list (l), which takes a list of integers as
an input, removes all odd values from it, and evenly divides even numbers
by two. The function should not return anything, it only requires
changing the transferred list, for example:

lst = [1, 2, 3, 4, 5, 6]
print (modify_list (lst)) # None
print (lst) # [1, 2, 3]
modify_list (lst)
print (lst) # [1]

lst = [10, 5, 8, 3]
modify_list (lst)
print (lst) # [5, 4]
The function should not carry out input / output information.
"""


def modify_list(seq):
    #  Iterating backwards prevents the indexing
    #  to be incorrect wile manipulating the
    #  list in place, i.e. removing items from the last item (higher indices)
    #  will not affect the index of the succeeding items (lower indices)
    for i in range(len(seq) - 1, -1, -1):
        #  Odd number using bitwise op
        if seq[i] & 1:
            #  Remove the odd num
            seq.pop(i)
        #  Perform operation on even num
        else:
            seq[i] = seq[i] // 2


l = [1, 2, 3, 4, 5, 6]
modify_list(l)
print(l)
