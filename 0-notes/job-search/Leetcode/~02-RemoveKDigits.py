# Given a non-negative integer num represented as a string, remove k digits from the number 
    # so that the new number is the smallest possible.

# NOTE:  The length of num is less than 10002 and will be ≥ k.
# NOTE:  The given num does not contain any leading zero.

'''
Example 1:
Input: num = "1432219", k = 3   |   Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 
    to form the new number 1219 which is the smallest.
'''
'''
Example 2:
Input: num = "10200", k = 1   |   Output: "200"
Explanation: Remove the leading 1 and the number is 200. 
Note that the output must not contain leading zeroes.
'''
'''
Example 3:
Input: num = "10", k = 2   |   Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
'''

# time complexity:  O(n^2) (2 nested loops)
# space complexity:  O(1)

def removeKdigits(num, k):
    res = []
    counter = 0
    n = len(num)
    
    if n == k: return "0"
    
    for i in range(n):
        while k and res and res[-1] > num[i]:
            res.pop()
            k -= 1
        res.append(num[i])

    
    while k:
        res.pop()
        k -= 1
        
    return "".join(res).lstrip('0') or "0"
