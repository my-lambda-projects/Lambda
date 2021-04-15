class Vertex {
  constructor(value) {
    this.value = value
    this.edges = []
  }

  addEdge(edge) {
    this.edges.push(edge)
    return this
  }

  get toString() {
    return this.value
  }
}

class Edge {
  constructor(start, end) {
    this.start = start
    this.end = end
    this.key = `${start.toString}_${end.toString}`
  }
}

class Graph {
  constructor(isDirected = false) {
    this.vertices = {}
    this.edges = {}
    this.isDirected = isDirected
  }

  addVertex(vertex) {
    this.vertices[vertex.toString] = vertex
    return this
  }

  addEdge(edge) {
    let start = this.vertices[edge.start.toString]
    let end = this.vertices[edge.end.toString]
    
    if (!start) {
      this.addVertex(edge.start)
      start = this.vertices[edge.start.toString]
    }
    if (!end) {
      this.addVertex(edge.end)
      end = this.vertices[edge.end.toString]
    }
    if (this.edges[edge.key]) {
      console.log(edge.key)
      throw new Error('Edge has already been added before')
    } else {
      this.edges[edge.key] = edge
    }
    if (this.isDirected) {
      start.addEdge(edge)
    } else {
      start.addEdge(edge)
      end.addEdge(edge)
    }
    return this
  }

  bfs(start, target) {
    const queue = []
    const visited = []
    queue.push(this.vertices[start])

    while (queue.length) {
      const current = queue.shift()
      visited.push(current)

      if (target === current.toString) {
        return true
      }

      for (let edge of current.edges) {
        const vertex = edge.end

        if (!visited.includes(vertex)) {
          queue.push(vertex)
        }
      }
    }
    return false
  }
}

module.exports = Graph