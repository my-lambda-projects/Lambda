# In a row of trees, the i-th tree produces fruit with type tree[i].
#
# You start at any tree of your choice, then repeatedly perform the following steps:
#
# Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
# Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
# Note that you do not have any choice after the initial choice of starting tree: you must perform
# step 1, then step 2, then back to step 1, then step 2, and so on until you stop.
#
# You have two baskets, and each basket can carry any quantity of fruit, but you want each basket
# to only carry one type of fruit each.
#
# What is the total amount of fruit you can collect with this procedure?
#
# Input: [1, 2, 1]
# Output: 3
# Explanation: We can collect[1, 2, 1].
#
# Input: [0,1,2,2]
# Output: 3
# Explanation: We can collect [1,2,2].
# If we started at the first tree, we would only collect [0, 1].
#
# Input: [1,2,3,2,2]
# Output: 4
# Explanation: We can collect [2,3,2,2].
# If we started at the first tree, we would only collect [1, 2].
#
# Input: [3,3,3,1,2,1,1,2,3,3,4]
# Output: 5
# Explanation: We can collect [1,2,1,1,2].
# If we started at the first tree or the eighth tree, we would only collect 4 fruits.


class Solution:
    def totalFruits(self, Tree):
        last_fruit = -1
        second_last_fruit = -1
        last_fruit_count = 0
        current_max = 0
        maximum = 0

        for fruit in Tree:
            if fruit == last_fruit or fruit == second_last_fruit:
                current_max += 1
            else:
                current_max = last_fruit_count + 1

            if fruit == last_fruit:
                last_fruit_count += 1
            else:
                second_last_fruit = last_fruit
                last_fruit = fruit
                last_fruit_count = 1
            maximum = max(current_max, maximum)
        return maximum


if __name__ == "__main__":
    arr = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
    print(Solution().totalFruits(arr))
    arr = [1, 1, 6, 5, 6, 6, 1, 1, 1, 1]
    print(Solution().totalFruits(arr))
