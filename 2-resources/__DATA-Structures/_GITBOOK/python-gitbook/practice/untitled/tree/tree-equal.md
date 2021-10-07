# Tree Equal ?

{% tabs %} {% tab title="Python" %}

```python
def tree_equal(node1, node2):
    if not node1 and not node2:
        return True
    if not node1 or not node2:
        return False
    return node1.val == node2.val and \
        tree_equal(node1.left, node2.left) and \
        tree_equal(node1.right, node2.right)

```

{% endtab %}

{% tab title="JavaScript" %}

```javascript
function treeEqual(node1, node2) {
  if (!node1 && !node2) {
    return true;
  }
  if (!node1 || !node2) {
    return false;
  }
  return (
    node1.val == node2.val &&
    treeEqual(node1.left, node2.left) &&
    treeEqual(node1.right, node2.right)
  );
}
```

{% endtab %} {% endtabs %}
