"""

Given a binary tree of integers, return all the paths from the tree's root to its leaves as an array of strings. The strings should have the following format:
"root->node1->node2->...->noden", representing the path from root to noden, where root is the value stored in the root and node1,node2,...,noden are the values stored in the 1st, 2nd,..., and nth nodes in the path respectively (noden representing the leaf).

Example

For

t = {
    "value": 5,
    "left": {
        "value": 2,
        "left": {
            "value": 10,
            "left": null,
            "right": null
        },
        "right": {
            "value": 4,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": -3,
        "left": null,
        "right": null
    }
}
the output should be
treePaths(t) = ["5->2->10", "5->2->4", "5->-3"].

The given tree looks like this:

    5
   / \
  2  -3
 / \
10  4
Input/Output

[execution time limit] 4 seconds (py3)

[input] tree.integer t

A tree of integers.

Guaranteed constraints:
0 ≤ tree size ≤ 710,
-1000 ≤ node value ≤ 1000.

[output] array.string

The root-to-leaf paths, sorted by the leaves in the order that they appear in the pre-order traversal (i.e. from the leftmost leaf to the rightmost).

"""
#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def treePaths(t):

    # if the tree is empty
    if not t:
        # return empty
        return []

    def Tpaths(node, path, res):
        # if node is None
        if not node:
            # return result
            return res

        # if left and right is None
        if not node.left and not node.right:
            # append to result
            res.append(path)
            # return result
            return res

        # if there is still left node
        if node.left:
            # call Tree_paths and print value at node
            Tpaths(node.left, path + f"->{node.left.value}", res)

        # if there is still a right node
        if node.right:
            # call Tree_path and print value at node
            Tpaths(node.right, path + f"->{node.right.value}", res)

        return res

    return Tpaths(t, f"{t.value}", [])


t = {
    "value": 5,
    "left": {
        "value": 2,
        "left": {"value": 10, "left": None, "right": None},
        "right": {"value": 4, "left": None, "right": None},
    },
    "right": {"value": -3, "left": None, "right": None},
}

print(treePaths(t))
