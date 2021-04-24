# Alexa is given n piles of equal or unequal heights. 
# In one step, Alexa can remove any number of boxes from 
    # the pile which has the maximum height and try to make 
    # it equal to the one which is just lower than the maximum 
    # height of the stack. 
# Determine the minimum number of steps required to make all of 
    # the piles equal in height.

# Example 1:   Input: piles = [5, 2, 1]   |   Output: 3

'''
Explanation:

    Step 1: reducing 5 -> 2 [2, 2, 1]
    Step 2: reducing 2 -> 1 [2, 1, 1]
    Step 3: reducing 2 -> 1 [1, 1, 1]

So final number of steps required is 3.
'''

## time complexity:  O(n)
## space complexity:  O(1)

def min_steps_equal_piles(piles):
    steps = 0
    length = len(piles)
    if piles == []:
        return 0
    else:
        # get sorted list
        sorted_piles = set(piles)
        sorted_piles = sorted(sorted_piles)
        # get min, max and 2nd max
        minimum = sorted_piles[0]
        second_largest = sorted_piles[-2]
        max_pile = sorted_piles[-1]
        # subtract from max to equal 2nd max
        # repeat until all equal second max
        for x in range(length):
            if piles[x] == max_pile:
                difference = max_pile - second_largest
                piles[x] = piles[x] - difference
                steps += 1
        # loop again to make second max equal to min
        for x in range(length):
            if piles[x] != minimum:
                difference = piles[x]-minimum
                piles[x] = piles[x]-difference
                steps += 1
        # return # of steps
        return steps

# 3
print(min_steps_equal_piles([5, 2, 1]))