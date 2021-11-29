# Dijkstra's Algorithm

This is a super-clever algorithm for figuring out the shortest path between two points on a graph and can run in O(n log n) time if implemented with a priority queue. (O(n^2) otherwise.)

## Implementation

Imagine the United States is made up of 12 major cities, and that's all. (We don't want your brain to explode.) All of these cities are connected to some others. They're all connected either directly (e.g. San Francisco is directly connected to Salt Lake City) or indirectly (e.g. San Francisco is connected to Salt Lake City, and Salt Lake City is connected to Omaha.)

Very importantly, the graph also shows the weights (distances, in the simplist case) of the connections between the cities.

Now out of this giant graph of cities, we want to figure out the fastest path from New York to L.A. so we can set the new cross-country speed record. (The record currently stands at 28 hours, 50 minutes; average speed of 98 MPH with 3 fuel stops. Do not attempt.)

We're going think about this problem in reverse.

### Stuff we'll need:

- A graph of cities and their distances to other cities, something like this:

        graph = {
            'LA': {'San Francisco':600, 'Las Vegas':250},
            'San Francisco': {'LA':600, 'Seattle':800},
            // etc.
        }

- A set of cities that aren't yet visited, and some associated data with these unvisited cities. Eventually it will be populated something like this:

        Unvisited = {
            'LA': {
                distance: 0,
                parent: null
            },
            'San Francisco': {
                distance: 999999,
                parent: null,
            },
            'Las Vegas': {
                distance: 250,
                parent: 'LA'
            },
            // etc.
        };

### Setup

1. We'll start from our destination: L.A.

2. Take every city, including the destination, and put them in the set `Unvisited`.

   These are the cities we still have to inspect to see if they're on the shortest path.

3. For every city in the `Unvisited` set, add an associated distance to our destination (L.A.). Initialize the distance associated with the destination to `0`. ("The destination is zero miles from the destination.") Initialize all the other distances to `infinity` (or some approximation thereof).

   Also add an associated `parent` pointer to each city in the `Unvisited` set. Initialize it to `null`.

### Running:

1. Look at all cities in the `Unvisited` set. Find the one with the smallest distance. Call this `currentCity`.

   On the first pass, the destination will be the smallest with `0`. On the second pass, they will all tie for smallest with infinite distance, so just choose any.

   We're interested in the one with the smallest distance computed so far. No point in following paths we know are longer, so we just keep following whichever one is currently shortest.

2. Look at `currentCity`'s direct neighbors and _relax_ any that need to.

   Relaxing is the process of reducing that neighbor's distance from it's current value (remember they start at `infinity`) to a smaller value **and** setting its parent pointer to the city that's within the closer distance.

   For example, San Francisco starts at distance `infinity` from L.A., but the graph shows it's connected to L.A. by an edge that's `600` miles long. Since `600` is less than `infinity`, San Francisco's distance is _relaxed_ from `infinity` to `600`. **Also** San Francisco's parent pointer is set to point to L.A.

3. Remove `currentCity` from the `Unvisited` set. We now know its distance from the destination city.

   We won't find any shortcuts that bypass it later--we find all shortcuts first because we always look at the currest closest city in Step 1.

4. Repeat back at Step 1 until you're finished.

   You're finished if (A) `currentCity` is your _source_ city (found the way!), (B) all the cities in `Unvisited` have infinite distance (meaning they're on an island somewhere) or (C) if the `Unvisited` set is empty, meaning you couldn't find the source at all. Destroyed... by the Empire.

### Getting the route from all that

If your `currentCity` arrived at your source city, congratulations: you've found the shortest path!

All you need to do now is:

1. Start at the _source_ city.

2. Print out the name of the city (or whatever you want to do to visualize it).

3. Follow it's parent pointer to the next city in line.

4. Repeat until you reach your _destination_ city.

## Variants

- You should be able to build the `Unvisited` set as you go instead of adding all cities to it initially. Some of the cities will never even be considered.

- One of the key speedups in the algorithm is how you go about finding the the nearest city. You could use linear search O(n), but you can get O(log n) with a [priority queue](https://en.wikipedia.org/wiki/Priority_queue).

## Alternate Implementation

IIRC, the above is from Cormen's Algorithms. [Wikipedia has a different, equivalent algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm#Pseudocode).

The included code in `example/` uses the Wikipedia algorithm.

## Dijkstra's D3 Demo

Basic framework for running Dijkstra's algorithm and displaying the results on an undirected graph via d3.

`chrome d3_demo.html`

to view the d3 demo. Integrate this with the included `DijkstrasAlgorithm.js` for cool technology.

## Dijkstra.js

Swap the commented lines in the file to perform Dijkstra's Algorithm on the tree defined on the Dijkstra's Algorithm wikipedia page. Leave the current comment structure to build a dynamic graph randomly and solve it with Dijkstra's Algorithm.

    let graph_spec = gen_graph(1000, 5);
    let tree = build_tree(graph_spec.V, graph_spec.E);
    //let tree = build_tree(V,E);
    //console.log(JSON.stringify(tree,null,2));

## Assignment

1. Get a graph built from a list of verts and edges.

2. Implement Dijkstra's algorithm over that graph.

3. Integrate the solver with the D3 demo; make it quick and dirty to just get it going.

4. Add text fields for starting and ending cities.

5. Refactor from quick and dirty integration into an nice React app.

6. ...

7. Profit!
