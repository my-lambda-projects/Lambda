# Count Visible Nodes in Binary Tree
# In a binary tree, if in the path from root to the node A there is 
# no node with greater value than As, this node A is visible. 
# We need to count the number of visible nodes in a binary tree.

'''
Example 1:

Input:
        5
     /     \
   3        10
  /  \     /
20   21   1

Output: 4
Explanation: There are 4 visible nodes: 5, 20, 21, and 10.
'''

'''
Example 2:

Input:
  -10
	\
	-15
	   \
	   -1

Output: 2
Explanation: Visible nodes are -10 and -1.
'''

# time complexity: O(n^2) ???? because it is calling itself twice for each call of itself
# space complexity: O(1)

def count_visible_nodes(root):
    # if no root, return 0
    if not root: 
        return 0
    # return value of traverse(root, negative infinity)
    return traverse(root, float('-inf'))

def traverse(node, max_value):
    # if no node, return 0
    if not node:
        return 0
    # get current node value
    current_node_value = node.val
    # if current node value >= max value, visible = 1
    if current_node_value >= max_value:
	    visible = 1 
    # else visible = 0
    else:
        visible = 0
    # set max value to max of max value or current node value
	max_value = max(max_value, current_node_value)
    # traverse left node, add visible, traverse right node, add them all together
    # set total visible nodes as the sum of:
        # traverse function with left node as node and new max value as max value
        # visible
        # traverse function with right node as node and new max value as max value
    total_visible_nodes = traverse(node.left, max_value) + visible + traverse(node.right, max_value)
    # return total visible nodes
    return total_visible_nodes
