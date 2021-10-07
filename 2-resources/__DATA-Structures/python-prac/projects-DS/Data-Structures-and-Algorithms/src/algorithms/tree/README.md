# Tree Traversal

**Tree traversal** refers to the process of visiting each node in a tree exactly once. The two most common methods of tree traversal are:

- [Depth-First Search](depth-first-search)
- [Breadth-First Search](breadth-first-search)

Due to the non-linear structure of a tree (from a given node, there is more than one possible _next_ node), some nodes _must_ be deferred—stored in some way for later visiting. This is often done via a [stack](<https://en.wikipedia.org/wiki/Stack_(abstract_data_type)>) (LIFO) or [queue](<https://en.wikipedia.org/wiki/Queue_(abstract_data_type)>) (FIFO).

As a tree is a self-referential data structure, traversal can be done by recursion or [corecursion](https://en.wikipedia.org/wiki/Corecursion); in these cases the deferred nodes are stored implicitly in the [call stack](https://en.wikipedia.org/wiki/Call_stack).

**[Depth-first search](depth-first-search)** is easily implemented via a stack, including recursively (via the call stack), while **[breadth-first search](breadth-first-search)** is easily implemented via a queue, including corecursively.

[← go back to data structures/trees](../../data-structures/tree)
