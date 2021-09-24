# D3

## Objective 01 - Describe the properties of a binary tree and the properties of a "perfect" tree <a id="7cc3df01-bfc4-47eb-a4ba-82e0e22c041e"></a>

### **Overview** <a id="1e41a5e0-c22f-4701-93c2-7a7bb72aa52e"></a>

There are lots of different types of tree data structures. A binary tree is a specific type of tree. It is called a binary tree because each node in the tree can only have a maximum of two child nodes. It is common for a node's children to be called either `left` or `right`.

Here is an example of a what a class for a binary tree node might look like:

```text
class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

### **Follow Along** <a id="0679a1b3-adc1-4a48-9e15-50a915378465"></a>

With this simple class, we can now build up a structure that could be visualized like so:[![](https://tk-assets.lambdaschool.com/c00c8f45-abff-4c3a-b29b-92631b5ac88e_binary-tree-example.001.png)](https://tk-assets.lambdaschool.com/c00c8f45-abff-4c3a-b29b-92631b5ac88e_binary-tree-example.001.png)

#### **"Perfect" Trees** <a id="b5dbb512-2ab9-4609-be32-e705c5752276"></a>

A "perfect" tree has all of its levels full. This means that there are not any missing nodes in each level.

"Perfect" trees have specific properties. First, the quantity of each level's nodes doubles as you go down.[![](https://tk-assets.lambdaschool.com/36747e43-d96d-40c9-b8ab-d318f6da8aed_binary-tree-example-levels.001.png)](https://tk-assets.lambdaschool.com/36747e43-d96d-40c9-b8ab-d318f6da8aed_binary-tree-example-levels.001.png)

Second, the quantity of the last level's nodes is the same as the quantity of all the other nodes plus one.

These properties are useful for understanding how to calculate the _height_ of a tree. The height of a tree is the number of levels that it contains. Based on the properties outlined above, we can deduce that we can calculate the tree's height with the following formula:[![](https://i.upmath.me/svg/log_2%28n%2B1%29%20%3D%20h)](https://i.upmath.me/svg/log_2%28n%2B1%29%20%3D%20h)

In the formula above, `n` is the total number of nodes. If you know the tree's height and want to calculate the total number of nodes, you can do so with the following formula:[![](https://i.upmath.me/svg/n%20%3D%202%5Eh%20-%201)](https://i.upmath.me/svg/n%20%3D%202%5Eh%20-%201)

We can represent the relationship between a perfect binary tree's total number of nodes and its height because of the properties outlined above.

### **Challenge** <a id="b0b2e52e-73e4-413b-a65c-3c6cf5b9fde5"></a>

1. Calculate how many levels a perfect binary tree has given that the total number of nodes is 127.
2. Calculate the total number of nodes on a perfect binary tree, given that the tree's height is 8.

### **Additional Resources** <a id="9cebce00-8a9e-4d31-b489-f3451e88f29d"></a>

- [https://en.wikipedia.org/wiki/Binary_tree \(Links to an external site.\)](https://en.wikipedia.org/wiki/Binary_tree)
- [https://www.geeksforgeeks.org/binary-tree-data-structure/](https://www.geeksforgeeks.org/binary-tree-data-structure/)
- [**Binary Tree Data Structure**](https://www.geeksforgeeks.org/binary-tree-data-structure/?ref=lbp)

## **Binary Tree Data Structure** <a id="b496bdf0-71ce-4993-a757-768d9e6708c0"></a>

A tree whose elements have at most 2 children is called a binary tree. Since each element in a binary tree can have only 2 children, we typically name them the left and right child.[![](https://media.geeksforgeeks.org/wp-content/cdn-uploads/binary-tree-to-DLL.png)](https://media.geeksforgeeks.org/wp-content/cdn-uploads/binary-tree-to-DLL.png)

A Binary Tree node contains following parts.

1. Data
2. Pointer to left child
3. Pointer to right child

Output:Foreachtestcase,printtheanswer∗∗Constraints:1.1&lt;=T&lt;=52.1&lt;=N&lt;=1053.1&lt;=arr\[i\]&lt;=105Example:Input:∗∗24123412344151212112233445∗∗Output:∗∗21%Tree and Level %Given a tree with N nodes rooted at 1. Each node labeled with a value arr\[i\]. The task is to find the absolute difference between the sum of values of nodes at even level and odd level %Note: All the nodes are numbered from 1 to N. %\*\*Input:\*\*1. The first line of the input contains a single integer \*\*T denoting the number of test cases. The description of T test cases follows.2. The first line of each test case contains a single integer \*\*N.\*\*3. The next line contains N space-separated positive integers represents the node value.4. Next N-1 lines contain two space-separated integers u and v, represents an edge in between them Output: For each test case, print the answer \*\*Constraints:1. 1 &lt;= T &lt;= 52. 1 &lt;= N &lt;= 1053. 1 &lt;= arr\[i\] &lt;= 105Example:Input:\*\*241 2 3 41 23 44 151 2 1 2 11 22 33 44 5 \*\*Output:\*\*21Output:Foreachtestcase,printtheanswer∗∗Constraints:1.1&lt;=T&lt;=52.1&lt;=N&lt;=1053.1&lt;=arr\[i\]&lt;=105Example:Input:∗∗24123412344151212112233445∗∗Output:∗∗21

### **Tree and Level** <a id="3d23fa19-a130-47ba-a7a6-4ee3b3f10d34"></a>

Given a tree with N nodes rooted at 1. Each node labeled with a value arr\[i\]. The task is to find the absolute difference between the sum of values of nodes at even level and odd level Note: All the nodes are numbered from 1 to N. Input:1. The first line of the input contains a single integer \*\*T denoting the number of test cases. The description of T test cases follows.2. The first line of each test case contains a single integer N.3. The next line contains N space-separated positive integers represents the node value.4. Next N-1 lines contain two space-separated integers u and v, represents an edge in between them Output: For each test case, print the answer Constraints:1. 1 ;= T ;= 52. 1 ;= N ;= 1053. 1 ;= arr\[i\] ;= 105Example:Input:241 2 3 41 23 44 151 2 1 2 11 22 33 44 5 Output:21

**Output:**21

```python
import math
t = int(input())
for _ in range(t):
    n = int(input())
    graph =[ [] for _ in range(n + 1) ]
    value = list(map(int, input().strip().split(" ")))
    for _ in range(n - 1):
        u, v = tuple(map(int, input().strip().split(" ")))
        graph[u].append(v)
        graph[v].append(u)
    q = queue.Queue()
    q.put(1)
    level = [None] * (n + 1)
    visited = [False] * (n + 1)
    level[1] = 0
    visited[1] = True
    even_sum = 0
    odd_sum = 0
    while( not q.empty()):
        node = q.get()
        if level[node] % 2 == 0:
            even_sum += value[node - 1]
        else:
            odd_sum += value[node - 1]

        for edge_vertex in graph[node]:
            if visited[edge_vertex]:
                continue
            q.put(edge_vertex)
            visited[edge_vertex] = True
            new_level = level[node] + 1
            level[edge_vertex] = new_level

    print(abs(even_sum - odd_sum))
```

OR

```python
def bfs(tree,arr,n):
    vis=[False for i in range(n)]
    Q=deque()
    Q.append((0,0))
    vis[0]=True
    even=0
    odd=0

    while Q:
        u,l=Q.popleft()
        if l%2==0:
            even+=arr[u]
        elif l%2!=0:
            odd+=arr[u]

        for v in tree[u]:
            if vis[v]==False:
                Q.append((v,l+1))
                vis[v]=True

    return abs(even-odd)

def main():
    test=int(input())
    for t in range(test):
        n=int(input())
        arr=list(map(int,input().split()))
        tree=defaultdict(list)
        for i in range(n-1):
            u,v=map(int,input().split())
            u-=1
            v-=1
            tree[u].append(v)
            tree[v].append(u)

        ans=bfs(tree,arr,n)
        print(ans)

main()
```

```python
def bfs(d):
    visited = {1: 1}
    que = [1]
    while len(que):
        elem = que[0]
        level = visited[elem]

        if elem in d:
            for i in d[elem]:
                if i not in visited:
                    visited[i] = level + 1
                    que.append(i)

        que.pop(0)

    return visited

for _ in range(int(input())):
    n = int(input())
    l = list(map(int, input().split()))

    d = {}
    for i in range(n-1):
        a, b = map(int, input().split())

        if a not in d:
            d[a] = [b]
        else:
            d[a].append(b)

        if b not in d:
            d[b] = [a]
        else:
            d[b].append(a)

    levels = bfs(d)

    x, y = 0, 0
    for i in levels:
        if levels[i] % 2:
            x += l[i-1]
        else:
            y += l[i-1]

    print(abs(x - y))
```

Office Hours:

## Objective 01 - Describe the properties of a binary tree and the properties of a "perfect" tree <a id="649031a4-6571-4556-94e4-54ad29644b80"></a>

‌

### Overview <a id="1bd92c5f-c071-4ee3-973f-a9978a5d46d5"></a>

‌

There are lots of different types of tree data structures. A binary tree is a specific type of tree. It is called a binary tree because each node in the tree can only have a maximum of two child nodes. It is common for a node's children to be called either `left` or `right`. Here is an example of a what a class for a binary tree node might look like:

exit: Ctrl+↩

```text
class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

‌

### Follow Along <a id="9fd0d0a0-94cf-4445-bac1-3ae0d6fa3cfa"></a>

‌

With this simple class, we can now build up a structure that could be visualized like so:[![](https://tk-assets.lambdaschool.com/c00c8f45-abff-4c3a-b29b-92631b5ac88e_binary-tree-example.001.png)](https://tk-assets.lambdaschool.com/c00c8f45-abff-4c3a-b29b-92631b5ac88e_binary-tree-example.001.png)

https://tk-assets.lambdaschool.com/c00c8f45-abff-4c3a-b29b-92631b5ac88e\_binary-tree-example.001.pngEnter a caption for this image \(optional\)

‌

**Perfect" Trees**[![](https://tk-assets.lambdaschool.com/36747e43-d96d-40c9-b8ab-d318f6da8aed_binary-tree-example-levels.001.png)](https://tk-assets.lambdaschool.com/36747e43-d96d-40c9-b8ab-d318f6da8aed_binary-tree-example-levels.001.png)

https://tk-assets.lambdaschool.com/36747e43-d96d-40c9-b8ab-d318f6da8aed\_binary-tree-example-levels.001.pngEnter a caption for this image \(optional\)

‌

**A "perfect" tree has all of its levels full. This means that there are not any missing nodes in each level. "Perfect" trees have specific properties. First, the quantity of each level's nodes**

doubles as you go down. Second, the quantity of the last level's nodes is the same as the quantity of all the other nodes plus one. These properties are useful for understanding how to calculate the

_height_

of a tree. The height of a tree is the number of levels that it contains. Based on the properties outlined above, we can deduce that we can calculate the tree's height with the following formula: !\[log_2\(n+1\) = h\]\(

[https://i.upmath.me/svg/log_2\(n%2B1\) %3D h](https://i.upmath.me/svg/log_2%28n%2B1%29%20%3D%20h)

\) In the formula above,

```text
n
```

is the total number of nodes. If you know the tree's height and want to calculate the total number of nodes, you can do so with the following formula:[![](https://i.upmath.me/svg/n%20%3D%202%5Eh%20-%201)](https://i.upmath.me/svg/n%20%3D%202%5Eh%20-%201)

We can represent the relationship between a perfect binary tree's total number of nodes and its height because of the properties outlined above.

‌

### Challenge <a id="818eb634-c6e6-4350-b456-1031edf0fbf9"></a>

‌

1. Calculate how many levels a perfect binary tree has given that the total number of nodes is 127. 2. Calculate the total number of nodes on a perfect binary tree, given that the tree's height is 8. Additional Resources

‌

- [https://en.wikipedia.org/wiki/Binary_tree \(Links to an external site.\)](https://en.wikipedia.org/wiki/Binary_tree)
- [https://www.geeksforgeeks.org/binary-tree-data-structure/ \(Links to an external site.\)](https://www.geeksforgeeks.org/binary-tree-data-structure/)

‌

## Objective 02 - Recall the time and space complexity, the strengths and weaknesses, and the common uses of a binary search tree <a id="6fa5f714-f766-4f8b-88ae-785d529a1bc1"></a>

‌

### Overview <a id="297a9fc3-183b-4533-a5f3-5aea90d91c1f"></a>

‌

Just like a binary tree is a specific type of tree, a binary search tree \(BST\) is a specific type of binary tree. A binary search tree is just like a binary tree, except it follows specific rules about how it orders the nodes contained within it. For each node in the BST, all the nodes to the left are smaller, and all the nodes to the right of it are larger. We can call a binary search tree balanced if the heights of its left and right subtrees differ by at most one, and both of the subtrees are also balanced.[![](https://tk-assets.lambdaschool.com/f84f26b9-09f3-48e0-a4c6-a51740d9c083_binary-tree-example-balanced-unbalanced.001.png)](https://tk-assets.lambdaschool.com/f84f26b9-09f3-48e0-a4c6-a51740d9c083_binary-tree-example-balanced-unbalanced.001.png)

https://tk-assets.lambdaschool.com/f84f26b9-09f3-48e0-a4c6-a51740d9c083\_binary-tree-example-balanced-unbalanced.001.pngEnter a caption for this image \(optional\)

‌

### Follow Along <a id="3adb81b3-b67c-49c9-87ab-bcc975037a3f"></a>

‌

**Time and Space Complexity**

‌

**Lookup**

‌

If a binary search tree is balanced, then a lookup operation's time complexity is logarithmic \(`O(log n)`\). If the tree is unbalanced, the time complexity can be linear \(`O(n)`\) in the worst possible case \(virtually a linear chain of nodes will have all the nodes on one side of the tree\).

‌

**Insert**

‌

If a binary search tree is balanced, then an insertion operation's time complexity is logarithmic \(`O(log n)`\). If the tree is entirely unbalanced, then the time complexity is linear \(`O(n)`\) in the worst case.

‌

**Delete**

‌

If a binary search tree is balanced, then a deletion operation's time complexity is logarithmic \(`O(log n)`\). If the tree is entirely unbalanced, then the time complexity is linear \(`O(n)`\) in the worst case.

‌

**Space**

‌

The space complexity of a binary search tree is linear \(`O(n)`\). Each node in the binary search tree will take up space in memory.

‌

**Strengths**

‌

One of the main strengths of a BST is that it is sorted by default. You can pull out the data in order by using an in-order traversal. BSTs also have efficient searches \(`O(log n)`\). They have the same efficiency for their searches as a sorted array; however, BSTs are faster with insertions and deletions. In the average-case, dictionaries have more efficient operations than BSTs, but a BST has more efficient operations in the worst-case.

‌

**Weaknesses**

‌

The primary weakness of a BST is that they only have efficient operations if they are balanced. The more unbalanced they are, the worse the efficiency of their operations gets. Another weakness is that they are don't have stellar efficiency in any one operation. They have good efficiency for a lot of different operations. So, they are more of a general-purpose data structure. If you want to learn more about trees that automatically rearrange their nodes to remain balanced, look into [AVL trees \(Links to an external site.\)](https://en.wikipedia.org/wiki/AVL_tree) or [Red-Black trees \(Links to an external site.\)](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)

‌

### Challenge <a id="7d194ea3-55d9-4f3e-9bdc-63e0ab512d5e"></a>

‌

1. In your own words, explain why an unbalanced binary search tree's performance becomes degraded. Additional Resources

‌

- [https://www.geeksforgeeks.org/binary-search-tree-data-structure/ \(Links to an external site.\)](https://www.geeksforgeeks.org/binary-search-tree-data-structure/)
- [https://en.wikipedia.org/wiki/Binary_search_tree \(Links to an external site.\)](https://en.wikipedia.org/wiki/Binary_search_tree)

‌

## Objective 03 - Construct a binary search tree that can perform basic operations with a logarithmic time complexity <a id="23dbcdb6-22d3-44d6-bc85-988839f5f5b3"></a>

‌

### Overview <a id="5dbdabbc-ca35-42f0-8f91-dbeca91fcc6f"></a>

‌

To create a binary search tree, we need to define two different classes: one for the nodes that will make up the binary search tree and another for the tree itself.

‌

### Follow Along <a id="2fb503db-9eaf-4a8b-a0ba-7268b307622b"></a>

‌

Let's start by creating a `BSTNode` class. An instance of `BSTNode` should have a `value`, a `right` node, and a `left` node.

exit: Ctrl+↩

```python
class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

‌

Now that we have our basic `BSTNode` class defined with an initialization method let's define our `BST` class. This class will have an initialization method and an `insert` method.

exit: Ctrl+↩

```python
class BST:
    def __init__(self, value):
        self.root = BSTNode(value)
    def insert(self, value):
        self.root.insert(value)
```

‌

Notice that our `BST` class expects each `BSTNode` to have an `insert` method available on an instance object. But, we haven't yet added an `insert` method on the `BSTNode` class. Let's do that now.

exit: Ctrl+↩

```python
class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BSTNode(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BSTNode(value)
            else:
                self.right.insert(value)
```

‌

Now that we can insert nodes into our binary search tree let's define a `search` method that can lookup values in our binary search tree.

exit: Ctrl+↩

```python
class BST:
    def __init__(self, value):
        self.root = BSTNode(value)
    def insert(self, value):
        self.root.insert(value)
    def search(self, value):
        self.root.search(value)
```

‌

Our `BST` class expects there to be a `search` method available on the `BSTNode` instance stored at the root. Let's go ahead and define that now.

exit: Ctrl+↩

```python
class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BSTNode(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BSTNode(value)
            else:
                self.right.insert(value)
    def search(self, target):
        if self.value == target:
            return self
        elif target < self.value:
            if self.left is None:
                return False
            else:
                return self.left.search(target)
        else:
            if self.right is None:
                return False
            else:
                return self.right.search(target)
```

‌

### Challenge <a id="9ee9e717-01f4-4f45-95d1-d9ae659adc69"></a>

‌

To implement a `delete` operation on our `BST` and `BSTNode` classes, we must consider three cases: 1. If the `BSTNode` to be deleted is a leaf \(has no children\), we can remove that node from the tree. 2. If the `BSTNode` to be deleted has only one child, we copy the child node to be deleted and delete it. 3. If the `BSTNode` to be deleted has two children, we have to find the "in-order successor". The "in-order successor" is the next highest value, the node that has the minimum value in the right subtree. Given the above information, can you write pseudocode for a method that can find the _minimum value_ of all the nodes within a tree or subtree?

‌

### Additional Resources <a id="7c8077ec-2ef6-46b3-b0c4-494b0b3dd15e"></a>

‌

- [https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/ \(Links to an external site.\)](https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/)
- [https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/ \(Links to an external site.\)](https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/)
