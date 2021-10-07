# Topological Sort

{% tabs %} {% tab title="Python" %}

```python
def graph_topo_sort(num_nodes, edges):
    from collections import deque
    nodes, order, queue = {}, [], deque()
    for node_id in range(num_nodes):
        nodes[node_id] = { 'in': 0, 'out': set() }
    for node_id, pre_id in edges:
        nodes[node_id]['in'] += 1
        nodes[pre_id]['out'].add(node_id)
    for node_id in nodes.keys():
        if nodes[node_id]['in'] == 0:
            queue.append(node_id)
    while len(queue):
        node_id = queue.pop()
        for outgoing_id in nodes[node_id]['out']:
            nodes[outgoing_id]['in'] -= 1
            if nodes[outgoing_id]['in'] == 0:
                queue.append(outgoing_id)
        order.append(node_id)
    return order if len(order) == num_nodes else []

print(graph_topo_sort(3, [[0, 1], [0, 2]]))

```

{% endtab %}

{% tab title="JavaScript" %}

```javascript
function graphTopoSort(numberNodes, edges) {
  const nodes = new Map();
  const order = [];
  const queue = [];
  for (let i = 0; i < numberNodes; i++) {
    nodes.set(i, { in: 0, out: new Set() });
  }

  edges.forEach((edge) => {
    const [node_id, pre_id] = edge;
    nodes.get(node_id).in += 1;
    nodes.get(pre_id).out.add(node_id);
  });

  for (let [node_id, value] of nodes.entries()) {
    if (value.in === 0) {
      queue.push(node_id);
    }
  }

  while (queue.length) {
    const node_id = queue.shift();
    for (let outgoing_id of nodes.get(node_id).out) {
      nodes.get(outgoing_id).in -= 1;
      if (nodes.get(outgoing_id).in === 0) {
        queue.push(outgoing_id);
      }
    }
    order.push(node_id);
  }

  return order.length == numberNodes ? order : [];
}

console.log(
  graphTopoSort(3, [
    [0, 1],
    [0, 2],
  ])
);
```

{% endtab %} {% endtabs %}
