# Tree Traversals \(Inorder, Preorder and Postorder\)

![](../../../.gitbook/assets/image%20%2835%29.png)

![](../../../.gitbook/assets/image%20%2836%29.png)

Unlike linear data structures \(Array, Linked List, Queues, Stacks, etc\) which have only one logical way to traverse them, trees can be traversed in different ways. Following are the generally used ways for traversing trees.

![Example Tree](https://media.geeksforgeeks.org/wp-content/cdn-uploads/2009/06/tree12.gif)

Depth First Traversals:  
\(a\) Inorder \(Left, Root, Right\) : 4 2 5 1 3  
\(b\) Preorder \(Root, Left, Right\) : 1 2 4 5 3  
\(c\) Postorder \(Left, Right, Root\) : 4 5 2 3 1  
Breadth First or Level Order Traversal : 1 2 3 4 5  
Please see [this ](https://www.geeksforgeeks.org/level-order-tree-traversal/)post for Breadth First Traversal.  
**Inorder Traversal \(**[**Practice**](https://practice.geeksforgeeks.org/problems/inorder-traversal/1)**\):**

```text
Algorithm Inorder(tree)
   1. Traverse the left subtree, i.e., call Inorder(left-subtree)
   2. Visit the root.
   3. Traverse the right subtree, i.e., call Inorder(right-subtree)
```

Uses of Inorder  
In case of binary search trees \(BST\), Inorder traversal gives nodes in non-decreasing order. To get nodes of BST in non-increasing order, a variation of Inorder traversal where Inorder traversal s reversed can be used.  
Example: Inorder traversal for the above-given figure is 4 2 5 1 3.  
**Preorder Traversal \(**[**Practice**](https://practice.geeksforgeeks.org/problems/preorder-traversal/1)**\):**

```text
Algorithm Preorder(tree)
   1. Visit the root.
   2. Traverse the left subtree, i.e., call Preorder(left-subtree)
   3. Traverse the right subtree, i.e., call Preorder(right-subtree)
```

Uses of Preorder  
Preorder traversal is used to create a copy of the tree. Preorder traversal is also used to get prefix expression on of an expression tree. Please see [http://en.wikipedia.org/wiki/Polish_notation](http://en.wikipedia.org/wiki/Polish_notation) to know why prefix expressions are useful.  
Example: Preorder traversal for the above given figure is 1 2 4 5 3.

```text
Algorithm Postorder(tree)
   1. Traverse the left subtree, i.e., call Postorder(left-subtree)
   2. Traverse the right subtree, i.e., call Postorder(right-subtree)
   3. Visit the root.
```

Uses of Postorder  
Postorder traversal is used to delete the tree. Please see [the question for deletion of tree ](https://www.geeksforgeeks.org/write-a-c-program-to-delete-a-tree/)for details. Postorder traversal is also useful to get the postfix expression of an expression tree. Please see [http://en.wikipedia.org/wiki/Reverse_Polish_notation](http://en.wikipedia.org/wiki/Reverse_Polish_notation) to for the usage of postfix expression.  
Example: Postorder traversal for the above given figure is 4 5 2 3 1.

{% tabs %} {% tab title="Python" %}

```python
# Python program to for tree traversals

# A class that represents an individual node in a
# Binary Tree


class Node:
	def __init__(self, key):
		self.left = None
		self.right = None
		self.val = key


# A function to do inorder tree traversal
def printInorder(root):

	if root:

		# First recur on left child
		printInorder(root.left)

		# then print the data of node
		print(root.val),

		# now recur on right child
		printInorder(root.right)


# A function to do postorder tree traversal
def printPostorder(root):

	if root:

		# First recur on left child
		printPostorder(root.left)

		# the recur on right child
		printPostorder(root.right)

		# now print the data of node
		print(root.val),


# A function to do preorder tree traversal
def printPreorder(root):

	if root:

		# First print the data of node
		print(root.val),

		# Then recur on left child
		printPreorder(root.left)

		# Finally recur on right child
		printPreorder(root.right)


# Driver code
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
print "Preorder traversal of binary tree is"
printPreorder(root)

print "\nInorder traversal of binary tree is"
printInorder(root)

print "\nPostorder traversal of binary tree is"
printPostorder(root)

```

{% endtab %}

{% tab title="Javascript" %}

```javascript
<script>
// javascript program for different tree traversals

/* Class containing left and right child of current
node and key value*/
class Node {
	constructor(val) {
		this.key = val;
		this.left = null;
		this.right = null;
	}
}

	// Root of Binary Tree
	var root = null;


	/*
	* Given a binary tree, print its nodes according to the "bottom-up" postorder
	* traversal.
	*/
	function printPostorder(node) {
		if (node == null)
			return;

		// first recur on left subtree
		printPostorder(node.left);

		// then recur on right subtree
		printPostorder(node.right);

		// now deal with the node
		document.write(node.key + " ");
	}

	/* Given a binary tree, print its nodes in inorder */
	function printInorder(node) {
		if (node == null)
			return;

		/* first recur on left child */
		printInorder(node.left);

		/* then print the data of node */
		document.write(node.key + " ");

		/* now recur on right child */
		printInorder(node.right);
	}

	/* Given a binary tree, print its nodes in preorder */
	function printPreorder(node) {
		if (node == null)
			return;

		/* first print data of node */
		document.write(node.key + " ");

		/* then recur on left sutree */
		printPreorder(node.left);

		/* now recur on right subtree */
		printPreorder(node.right);

	}



	// Driver method


		root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.left.right = new Node(5);

		document.write("Preorder traversal of binary tree is <br/>");
		printPreorder(root);

		document.write("<br/>Inorder traversal of binary tree is <br/>");
		printInorder(root);

		document.write("<br/>Postorder traversal of binary tree is <br/>");
		printPostorder(root);

// This code is contributed by aashish1995
</script>

```

{% endtab %} {% endtabs %}
