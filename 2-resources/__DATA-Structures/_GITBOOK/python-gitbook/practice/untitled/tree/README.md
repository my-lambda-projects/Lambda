# Tree

### Trees in Python

[Trees](https://www.educative.io/blog/data-structures-trees-java) are another relation-based data structure, which specialize in representing hierarchical structures. Like a linked list, they’re populated with `Node` objects that contain a data value and one or more pointers to define its relation to immediate nodes.

Each tree has a **root** node that all other nodes branch off from. The root contains pointers to all elements directly below it, which are known as its **child nodes**. These child nodes can then have child nodes of their own. Binary trees cannot have nodes with more than two child nodes.

Any nodes on the same level are called **sibling nodes**. Nodes with no connected child nodes are known as **leaf nodes**.![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODE4NSIgaGVpZ2h0PSI2NTgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg==)![widget](https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=600/api/page/4827483893923840/image/download/6470804819148800)![widget](https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=300,q=10/api/page/4827483893923840/image/download/6470804819148800)

The most common application of the binary tree is a **binary search tree**. Binary search trees excel at searching large collections of data, as the time complexity depends on the depth of the tree rather than the number of nodes.

> **Binary search trees have four strict rules:**
>
> - The left subtree contains only nodes with elements lesser than the root.
> - The right subtree contains only nodes with elements greater than the root.
> - Left and right subtrees must also be a binary search tree. They must follow the above rules with the “root” of their tree.
> - There can be no duplicate nodes, i.e. no two nodes can have the same value.
