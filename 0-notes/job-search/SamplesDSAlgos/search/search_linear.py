
# LINEAR SEARCH
# go line by line, one item by one item & check value at that index
# when found, stop
# simplest; only useful if list you're searching is unsorted
    
# time complexity:  Best O(1)   |   Avg O(log(n))   |   Worst O(log(n))
# space complexity:  O(1)

def linear_search(arr, target):
   '''
      procedure linear_search (arr, target)
         for each item in arr:
            if match item == target:
               return the item's location
      end procedure
   '''
   for item in range(len(arr)):
      if arr[item] == target:
         return item
   return -1   # not found
