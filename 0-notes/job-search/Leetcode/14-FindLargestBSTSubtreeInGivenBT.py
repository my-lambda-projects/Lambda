# find the largest BST subtree in a given binary tree
# https://www.geeksforgeeks.org/find-the-largest-subtree-in-a-tree-that-is-also-a-bst/

# Given a Binary Tree, write a function that returns the size of the largest subtree which 
    # is also a Binary Search Tree (BST). 

# If the complete Binary Tree is BST, then return the size of whole tree.

class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def largest_BST(self):      
        # Set the initial values for calling  
        # largestBSTUtil()  
        Min = [999999999999] # For minimum value in right subtree  
        Max = [-999999999999] # For maximum value in left subtree  
        
        max_size = [0] # For size of the largest BST  
        is_bst = [0] 
        
        largestBSTUtil(node, Min, Max,max_size, is_bst)  
        
        return max_size[0] 
    
    # largestBSTUtil() updates max_size_ref[0]  
    # for the size of the largest BST subtree.  
    # Also, if the tree rooted with node is 
    # non-empty and a BST, then returns size of 
    # the tree. Otherwise returns 0. 
    def largestBSTUtil(node, min_ref, max_ref,  
                            max_size_ref, is_bst_ref): 
        
        # Base Case  
        if node == None: 
            is_bst_ref[0] = 1 # An empty tree is BST  
            return 0 # Size of the BST is 0  
        
        Min = 999999999999
        
        # A flag variable for left subtree property  
        # i.e., max(root.left) < root.data  
        left_flag = False
        
        # A flag variable for right subtree property  
        # i.e., min(root.right) > root.data  
        right_flag = False
        
        ls, rs = 0, 0    # To store sizes of left and  
                        # right subtrees  
        
        # Following tasks are done by recursive  
        # call for left subtree  
        # a) Get the maximum value in left subtree  
        #   (Stored in max_ref[0])  
        # b) Check whether Left Subtree is BST or 
        #    not (Stored in is_bst_ref[0])  
        # c) Get the size of maximum size BST in  
        #    left subtree (updates max_size[0])  
        max_ref[0] = -999999999999
        ls = largestBSTUtil(node.left, min_ref, max_ref,  
                            max_size_ref, is_bst_ref)  
        if is_bst_ref[0] == 1 and node.data > max_ref[0]:  
            left_flag = True
        
        # Before updating min_ref[0], store the min 
        # value in left subtree. So that we have the   
        # correct minimum value for this subtree  
        Min = min_ref[0] 
        
        # The following recursive call does similar   
        # (similar to left subtree) task for right subtree  
        min_ref[0] = 999999999999
        rs = largestBSTUtil(node.right, min_ref, max_ref, 
                            max_size_ref, is_bst_ref)  
        if is_bst_ref[0] == 1 and node.data < min_ref[0]:  
            right_flag = True
        
        # Update min and max values for the 
        # parent recursive calls  
        if Min < min_ref[0]:  
            min_ref[0] = Min
        if node.data < min_ref[0]: # For leaf nodes  
            min_ref[0] = node.data 
        if node.data > max_ref[0]:  
            max_ref[0] = node.data 
        
        # If both left and right subtrees are BST. 
        # And left and right subtree properties hold  
        # for this node, then this tree is BST.  
        # So return the size of this tree  
        if left_flag and right_flag: 
            if ls + rs + 1 > max_size_ref[0]:  
                max_size_ref[0] = ls + rs + 1
            return ls + rs + 1
        else: 
            
            # Since this subtree is not BST, set is_bst  
            # flag for parent calls is_bst_ref[0] = 0;  
            return 0
  
# Driver Code 
if __name__ == '__main__': 
      
    # Let us construct the following Tree  
    #     50  
    # /     \  
    # 10     60  
    # / \     / \  
    # 5 20 55 70  
    #         /     / \  
    #     45     65 80 
    root = newNode(50)  
    root.left     = newNode(10)  
    root.right     = newNode(60)  
    root.left.left = newNode(5)  
    root.left.right = newNode(20)  
    root.right.left = newNode(55) 
    root.right.left.left = newNode(45)  
    root.right.right = newNode(70) 
    root.right.right.left = newNode(65)  
    root.right.right.right = newNode(80) 
  
# The complete tree is not BST as 45 is in  
# right subtree of 50. The following subtree 
# is the largest BST  
#     60  
# / \  
# 55     70  
# /     / \  
# 45     65 80  
  
print("Size of the largest BST is",  
                  largestBST(root)) 
                    
# This code is contributed by PranchalK 