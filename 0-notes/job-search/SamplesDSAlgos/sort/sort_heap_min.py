
import sys

'''
binary heap:    binary tree, similar to BSTs
heap property:  states that, for any node in the heap, value of node = larger than values 
    of its children if they exist
heapify:        once heap constructed, removing item done in constant time because 
    you need to find next largest node to move to root process

heaps implemented using array
    visualize heap as binary tree
    start at top of tree
    root node = 1st element of array
    second-level 1st node = 2nd element
    goes left to right, then down

pseudocode:
    1. Store reference to first heap element.
    2. Set value of first heap element to value of last heap element.
    3. Pop from heap's storage array to remove last heap element.
    4. In a loop:
        A. Have first new heap element check its children using given 
            formulas.
        B. If either of element's children are larger, swap heap value
            of parent node with value of larger child's value via their
            respective indices.
    5. Continue this loop until element is in spot where neither of its 
        children are larger than it or it's reached a spot where it has
        no children.

how to access in O(1):
    if we know element index up front
    if we know key of value up front
    root off tree always (entry point of tree)

how heap sort works
    construct internal priority queue
    remove one item at a time and stick it at end
    find next largest item in priority queue

heap sort process
    make array max heap
    loop over array
        dequeue root node (gives you largest item)
        swap with last item in array
    after dequeueing each item, run heapify again to find next root node
    on next loop, dequeue root node & swap with second to last item in array
    run heapify again
    once items run out, you now have sorted array

binary tree represented as array
    for any index of an array x, its left child is stored @ 2x+1, right @ 2x+2
    root node always 0
    root node's left child always @ 1
    root node's right child always @ 2
    1's left @ 3, right @ 4
'''

# HEAP SORT:
    # data structure optimized for retrieving either maximal or minimal values of a dataset
    # all about maximizing priority
    # binary tree data structure centered around the heap property
        # always satisfies the heap property
    # root element of heap is max value of all heap elements
    # array representing the data structure
    # has to be sorted in particular way to represent that tree priority queues often 
        # represented as heaps
        # often these terms used interchangeably
    # priority queues are often heaps; easy to tell largest number
        # none of other guaranteed, but once you dequeue, easy to find next item in queue
    # combining of tree & array based approaches doesn't make heap a particularly intuitive
        # data structure to understand & grasp
    # maximally efficient at what they do
    # very flexible since we can generalize idea of priority to many different contexts
    # arrays well-suited to storing heaps not just because off constant-time access to any element,
        # but also we can more easily swap elements in different positions throughout heap easily, 
            # again due to array indexing
    # can use queue 

# to fetch a node's parent, floor((x-1)/2)
    # emulates a binary tree structure of a heap using an array, with added benefit of 
        # now-constant-time access to any element in heap that comes with array indexing

# when using BST, problem is we only have direct access to node
# to construct max heap, run heapify starting @ array middle and work backwards to root.

# time complexity:  Best O(n log(n))   |   Avg O(n log(n))   |   Worst O(n log(n))
# space complexity:  O(1)

class MinHeap:
    def __init__(self, max_size):
        self.max_size = max_size
        self.heap_size = 0
        self.heap = [0]*(self.max_size + 1)
        self.heap[0] = -1 * sys.maxsize
        self.FRONT = 1

    # function to return the position of parent for the node currently at pos
    def parent(self, pos):
        parent_floor = pos//2
        return parent_floor

    # function to return the position of the left child for the node currently at pos
    def left_child(self, pos):
        left_child_position = 2 * pos
        return left_child_position

    # function to return the position of the right child for the node currently at pos
    def right_child(self, pos):
        right_child_position = (2 * pos) + 1
        return right_child_position

    # function that returns true if the passed node is a leaf node
    def is_leaf(self, node):
        if node >= (self.heap_size//2) and node <= self.heap_size:
            return True
        return False

    # function to swap two nodes of the heap
    def swap(self, first_node, second_node):
        self.heap[first_node], self.heap[second_node] = self.heap[second_node], self.heap[first_node]

    # function to heapify the node at pos
    def min_heapify(self, node):

        # if the node is a non-leaf node and greater than any of its child
        if not self.is_leaf(node):
            if (self.heap[node] > self.heap[self.left_child(node)] or
                    self.heap[node] > self.heap[self.right_child(node)]):

                # swap with and heapify left child
                if self.heap[self.left_child(node)] < self.heap[self.right_child(node)]:
                    self.swap(node, self.left_child(node))
                    self.min_heapify(self.left_child(node))

                # swap with and heapify right child
                else:
                    self.swap(node, self.right_child(node))
                    self.min_heapify(self.right_child(node))

    # function to insert a node into the heap
    def insert(self, element):
        # if heap size >= max size, return nothing
        if self.heap_size >= self.max_size:
            return
        # else add one to heap size
        self.heap_size += 1
        # set newly added heap element as current element
        self.heap[self.heap_size] = element
        # set current item index as new heap size
        current_index = self.heap_size

        # while value @ current index < current index's parent
        while self.heap[current_index] < self.heap[self.parent(current_index)]:
            # swap value @ current index with value @ parent
            self.swap(current_index, self.parent(current_index))
            # set current index as parent
            current_index = self.parent(current_index)

    # function to print the contents of the heap
    def print_heap(self):
        for i in range(1, (self.heap_size//2)+1):
            parent_value = self.heap[i]
            parent_text = " PARENT : " + str(parent_value)
            left_child_value = self.heap[2 * i]
            left_child_text = " LEFT CHILD : " + str(left_child_value)
            right_child_value = self.heap[2 * i + 1]
            right_child_text = " RIGHT CHILD : " + str(right_child_value)
            print(parent_text + left_child_text + right_child_text)

    # function to build the min heap using the min_heapify function
    def min_heap(self):
        floor_heap_size = self.heap_size//2
        for node in range(floor_heap_size, 0, -1):
            self.min_heapify(node)

    # function to remove and return the minimum element from the heap
    def remove(self):
        popped = self.heap[self.FRONT]
        self.heap[self.FRONT] = self.heap[self.heap_size]
        self.heap_size -= 1
        self.min_heapify(self.FRONT)
        return popped

if __name__ == "__main__":

    print('The min heap is ')
    minHeap = MinHeap(15) 
    minHeap.insert(5) 
    minHeap.insert(3) 
    minHeap.insert(17) 
    minHeap.insert(10) 
    minHeap.insert(84) 
    minHeap.insert(19) 
    minHeap.insert(6) 
    minHeap.insert(22) 
    minHeap.insert(9) 
    minHeap.min_heap() 

    minHeap.print_heap() 
    print("The Min val is " + str(minHeap.remove())) 
