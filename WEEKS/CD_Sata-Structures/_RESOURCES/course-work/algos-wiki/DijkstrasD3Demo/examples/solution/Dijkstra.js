const V = [0, 1, 2, 3, 4, 5];

const E = [
  { s: 0, t: 1, l: 7 },
  { s: 0, t: 2, l: 9 },
  { s: 0, t: 5, l: 14 },
  { s: 1, t: 2, l: 10 },
  { s: 1, t: 3, l: 15 },
  { s: 2, t: 5, l: 2 },
  { s: 2, t: 3, l: 11 },
  { s: 3, t: 4, l: 6 },
  { s: 4, t: 5, l: 9 },
];

const build_tree = (V, E) => {
  let tree = {};
  V.forEach((vertex) => {
    let node = {};
    node.edges = [];
    tree[vertex] = node;
  });
  E.forEach((edge) => {
    tree[edge.s].edges.push({ target: edge.t, length: edge.l });
    tree[edge.t].edges.push({ target: edge.s, length: edge.l });
  });
  return tree;
};

const gen_graph = (size, degree) => {
  let V = [];
  for (let i = 0; i < size; i++) {
    V.unshift(i);
  }
  let E = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < degree; j++) {
      let s = i;
      let t = Math.floor(Math.random() * size);
      let l = Math.floor(Math.random() * 25 + 5);
      let current = { s: s, t: t, l: l };
      E.unshift(current);
    }
  }
  return { V: V, E: E };
};

const a = 0;
const b = 21;

let graph_spec = gen_graph(1000, 5);
let tree = build_tree(graph_spec.V, graph_spec.E);
//let tree = build_tree(V,E);
//console.log(JSON.stringify(tree,null,2));

const getNodeWithMinDistance = (Q, distances) => {
  let min = Number.MAX_VALUE;
  let node_index = undefined;
  Object.keys(Q).forEach((key) => {
    if (distances[key] < min) {
      min = distances[key];
      node_index = key;
    }
  });
  return node_index;
};

const Dijkstra = {
  dijkstra(graph, source, dest) {
    let Q = [];
    let dist = Array(Object.keys(graph).length).fill(Number.MAX_VALUE);
    let prev = Array(Object.keys(graph).length).fill(Number.MAX_VALUE);
    Object.keys(graph).forEach((v) => {
      Q.push(v);
    });
    dist[source] = 0;
    while (Q.length > 0) {
      // O(n)
      let u = Q[getNodeWithMinDistance(Q, dist)];
      Q.splice(Q.indexOf(u), 1);
      // Mark the edge nodes
      graph[u].edges.forEach((edge) => {
        let alt = dist[u] + edge.length;
        if (alt < dist[edge.target]) {
          dist[edge.target] = alt;
          prev[edge.target] = u;
        }
      });
    }
    return { dist: dist, prev: prev };
  },
};

let results = Dijkstra.dijkstra(tree, a, b);
let path = [];
let u = b;
while (results.prev[u] != undefined) {
  path.unshift(u);
  u = results.prev[u];
}

console.log('Path: ' + path);
console.log('Distance: ' + results.dist[b]);

export default Dijkstra;
