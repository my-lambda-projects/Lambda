/**
 * Dijkstra's shortest part algorithm
 *
 * https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
 *
 * Consider Dijkstra's original description of the nature of the problem:
 *
 * "Find the path of minimum total length between two given nodes P￼ and
 * Q￼.
 *
 * "We use the fact that, if R￼ is a node on the minimal path from P￼ to
 * Q￼, knowledge of the latter implies the knowledge of the minimal path
 * from P￼ to R￼."
 */

// Take a bunch of nodes (vertexes) and a bunch of edges, and build a graph

// Vertices, or "Cities"
let V = [0, 1, 2, 3, 4, 5];

// Edges, or "Roads"

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

/**
 * Shortest path
 */
function Dijkstra(graph, source, destination) {
  /**
   * Search the set of unvisited cities, Q, to find the one with the
   * minimum distance
   */
  function findMinDist() {
    let smallestV;
    let smallestDist = Number.MAX_VALUE;

    for (let v in Q) {
      v = +v; // Convert to int
      if (dist[v] <= smallestDist) {
        smallestDist = dist[v];
        smallestV = v;
      }
    }

    return smallestV;
  }

  let Q = {}; // Set of cities we still have to visit

  let dist = {}; // Best known distance from a city to source
  let prev = {}; // Best known direction from a city to source

  let foundDest = false;

  // Initialize all dist to infinity, and all prev pointers to null
  let verts = Object.keys(graph).map((n) => +n); // n => +n to convert to int

  for (let v in verts) {
    dist[v] = Number.MAX_VALUE;
    prev[v] = null;

    Q[v] = true;
  }

  // Distance from source to itself is 0; this is our starting point
  dist[source] = 0;

  // While we have unvisited cities in the set, keep relaxing the
  // distances until we find our destination:

  while (Object.keys(Q).length > 0) {
    let currentNode = findMinDist();

    // Check if we found our destination
    if (currentNode == destination) {
      // If so, we're done
      foundDest = true;
      break;
    }

    // Remove current from set
    delete Q[currentNode];

    // Let's see if any of our neighbors need to relax

    let neighborsEdges = graph[currentNode].edges;

    for (let neighborEdge of neighborsEdges) {
      let neighbor = neighborEdge.target;
      let distanceToNeighbor = neighborEdge.length;

      let altDistance = dist[currentNode] + distanceToNeighbor;

      // See if the newly computed alternative distance is less
      // than the existing, stored distance at the neighbor:

      if (altDistance < dist[neighbor]) {
        // Relax the neighbor node
        dist[neighbor] = altDistance;

        // And now the shortest path is to go back this way
        prev[neighbor] = currentNode;
      }
    }
  }

  // If we got here, we're in one of three states:
  //   1. Found the city (foundDest === true)
  //   2. Couldn't find the city (foundDest === false && Q is empty)
  //   3. Couldn't reach the city (foundDest === false && Q not empty)
  //
  // In case 3, maybe the city doesn't exist, or maybe it's on a
  // disjoint part of the graph (an island, say).
  //
  // We'll just make cases 2 and 3 the same ("not found")

  if (foundDest) {
    // We should package up the path into something nice for the caller,
    // so we'll follow the prev pointers from the dest to the source to
    // make an easy-to-use array:

    let path = [];

    let curNode = destination;
    do {
      path.unshift(curNode);
      curNode = prev[curNode];
    } while (curNode != source);

    path.unshift(source); // Put the source on the front to be complete

    // And give the caller back the path and total distance
    return {
      path: path,
      distance: dist[destination],
    };
  }

  // Not found, or not reachable
  return null;
}

let graph = make_graph();
//console.log(JSON.stringify(graph, null, 2));

// Compute a shortest path
const source = 0;
const destination = 3;

const path = Dijkstra(graph, source, destination);

console.log(
  `Shortest path from ${source} to ${destination}: ${JSON.stringify(path.path)}`
);
console.log(`Distance: ${path.distance}`);
