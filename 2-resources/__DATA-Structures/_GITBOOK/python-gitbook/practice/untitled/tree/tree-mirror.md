# Tree Mirror:

{% tabs %} {% tab title="Python" %}

```python
def tree_mirror(node):
    if not node:
        return
    node.left, node.right = node.right, node.left
    tree_mirror(node.left)
    tree_mirror(node.right)
```

{% endtab %}

{% tab title="JavaScript" %}

```javascript
function treeMirror(node) {
  if (!node) {
    return;
  }
  let temp = node.left;
  node.left = node.right;
  node.right = temp;
  treeMirror(node.left);
  treeMirror(node.right);
}
```

{% endtab %} {% endtabs %}
