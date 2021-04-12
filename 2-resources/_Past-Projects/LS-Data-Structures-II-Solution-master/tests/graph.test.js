/* eslint-disable no-undef */
const Graph = require('../src/graph');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('should have methods named "addVertex", "contains", "removeVertex", "addEdge", "checkIfEdgeExists", and "removeEdge"', () => {
    expect(typeof graph.addVertex).toBe('function');
    expect(typeof graph.contains).toBe('function');
    expect(typeof graph.removeVertex).toBe('function');
    expect(typeof graph.addEdge).toBe('function');
    expect(typeof graph.checkIfEdgeExists).toBe('function');
    expect(typeof graph.removeEdge).toBe('function');
  });

  it('should store values as nodes on the graph', () => {
    graph.addVertex('Hello World!');
    expect(graph.contains('Hello World!')).toBe(true);
  });

  it('should automatically create an edge between two nodes if there is only two nodes in the graph', () => {
    const pineapple = graph.addVertex('pineapple');
    const banana = graph.addVertex('banana');
    expect(graph.checkIfEdgeExists(pineapple, banana)).toBe(true);
  });

  it('should be able to create edges between two nodes', () => {
    const pineapple = graph.addVertex('pineapple');
    const banana = graph.addVertex('banana');
    const mango = graph.addVertex('mango', [pineapple]);
    expect(graph.checkIfEdgeExists(pineapple, banana)).toBe(true);
    expect(graph.checkIfEdgeExists(mango, banana)).toBe(false);
    expect(graph.checkIfEdgeExists(mango, pineapple)).toBe(true);
  });

  it('should be able to remove edges connecting two nodes', () => {
    const monkey = graph.addVertex('monkey');
    const human = graph.addVertex('human');
    const crocodile = graph.addVertex('crocodile', [human]);
    graph.addEdge(crocodile, monkey);
    graph.removeEdge(monkey, human);
    expect(graph.checkIfEdgeExists(monkey, human)).toBe(false);
  });
  
  it('should properly remove nodes', () => {
    const n1 = graph.addVertex('hi there');
    const n2 = graph.addVertex('see ya');
    const n3 = graph.addVertex('nice day');
    graph.addEdge(n1, n3);
    expect(graph.checkIfEdgeExists(n1, n2)).toBe(true);
    expect(graph.checkIfEdgeExists(n1, n3)).toBe(true);
    graph.removeVertex('hi there');
    expect(graph.contains('hi there')).toBe(false);
    expect(graph.checkIfEdgeExists(n1, n2)).toBe(false);
    expect(graph.checkIfEdgeExists(n1, n3)).toBe(false);
  });

  it('should remove nodes without any edges', () => {
    const A = graph.addVertex('A');
    const b = graph.addVertex('b');
    expect(graph.checkIfEdgeExists(A, b)).toBe(true);
    graph.removeEdge(A, b);
    expect(graph.checkIfEdgeExists(A, b)).toBe(false);
    expect(graph.contains('A') || graph.contains('B')).toBe(false);
  });
});
