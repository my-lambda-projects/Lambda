# remove a value from a list (remove multiple values, if the value repeated)

def remove_from_list(lst, val):
   for num in lst:
      print(num)
      if val in lst:
         lst.remove(val)
   return lst

nums = [2, 7, 7, 6, 2, 11, 9, 1, -4, 7, 1]
value = 7


print(remove_from_list(nums, value))