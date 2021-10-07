# Binary search tree construction
#       5
#      / \
#    4    7
#         / \
#       6    8


class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


class Solution:
    def insertIn(self, root, num):
        currNode = root

        while True:
            if num > currNode.val:
                if currNode.right is None:
                    currNode.right = TreeNode(num)
                    break
                else:
                    currNode = currNode.right

            else:
                if currNode.left is None:
                    currNode.left = TreeNode(num)
                    break
                else:
                    currNode = currNode.left
        return root

    def dfs(self, root):
        if not root:
            return
        print(root.val)
        self.dfs(root.left)
        self.dfs(root.right)


if __name__ == "__main__":
    node = TreeNode(5)
    node.left = TreeNode(4)
    node.right = TreeNode(7)
    node.right.left = TreeNode(6)
    node.right.right = TreeNode(8)
    curr = node
    newnode = Solution().insertIn(curr, 2)
    Solution().dfs(node)
