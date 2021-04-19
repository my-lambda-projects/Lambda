# Given an integer n, return any array containing n unique integers such that they add up to 0.

# Example 1:  Input: n = 5   |   Output: [-7,-1,1,3,4]
    # Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
# Example 2:  Input: n = 3   |   Output: [-1,0,1]
# Example 3:  Input: n = 1   |   Output: [0]

# Constraints:  1 <= n <= 1000

## time complexity:  O(1 or n)
## space complexity:  O(1)


def sumZero(self, n: int):
    """
    :type n: int
    :rtype: List[int]
    """
    # time complexity: O(1); create one range of digits
    # space complexity:  O(1); one unit of space
    
    # What's going on here?  Let's say n = 5.
    # Return a range of numbers which starts at 1-5, ends at 5, steps every 2
    # So that means it starts at -4, ends at 5, steps every 2
    # And it would return:  [-4, -2, 0, 2, 4]
    
    return range(1-n, n, 2)