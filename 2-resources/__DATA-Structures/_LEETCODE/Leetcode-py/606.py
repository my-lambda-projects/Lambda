class Solution:
    def tree2str(self, t):
        """
        :type t: TreeNode
        :rtype: str
        """
        if not t:
            return ""
        left = "({})".format(self.tree2str(t.left)) if t.left or t.right else ""
        right = "({})".format(self.tree2str(t.right)) if t.right else ""
        return "{}{}{}".format(t.val, left, right)
