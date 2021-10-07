# Two common operations are indexing and assigning to an index position.
# In lists, values are assigned to and retrieved from specific, known memory locations.
# No matter how large the list is, index lookup and assignment take a constant amount of
# time and are thus O(1)

#### Note: Many of these are O(n) due to shifting that is require after mutation
# index[]	        - O(1)
# index assignment	- O(1)
# append	        - O(1)
# pop()	            - O(1)
# pop(i)	        - O(n)
# insert(i, item)	- O(n)
# del operator  	- O(n)
# iteration	        - O(n)
# contains ( in )	- O(n)
# get slice[x:y]	- O(k) -  where k is the size of the slice
# del slice	        - O(n)
# reverse	        - O(n)
# concatenate	    - O(k) -  where k is the size of the concatenated list
# sort	            - O(nlog(n))
# multiply	        - O(nk) - where k is the length of the list, must be appended k(n-1) times

#### Dictionaries - Average Case
#  Getting/Setting   - O(1)
#  Contains          - O(1)
#  Iterating/Copying - O(n) - n key/value pairs must be copied
