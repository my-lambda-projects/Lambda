/**
 * Build a graph for use with Dijkstra
 */

// Take a bunch of nodes (vertexes) and a bunch of edges, and build a graph

// VerTEXAS
let V = [0, 1, 2, 3, 4, 5];

// Edges

// s = starting node (from)
// t = target node (to)
let E = [
  { s: 0, t: 1, len: 7 }, // len is the "weight"
  { s: 0, t: 2, len: 9 },
  { s: 0, t: 5, len: 14 },
  { s: 1, t: 2, len: 10 },
  { s: 1, t: 3, len: 15 },
  { s: 2, t: 5, len: 2 },
  { s: 2, t: 3, len: 11 },
  { s: 3, t: 4, len: 6 },
  { s: 4, t: 5, len: 9 },
];

/**
 * Make the graph
 */
function make_graph() {
  let graph = {};

  // Add all verts to graph
  for (let v of V) {
    graph[v] = {
      edges: [],
    };
  }

  // Add all edges
  for (let e of E) {
    graph[e.s].edges.push({ target: e.t, length: e.len });
    graph[e.t].edges.push({ target: e.s, length: e.len });
  }

  return graph;
}

make_graph();

// TODO Dijkstra
