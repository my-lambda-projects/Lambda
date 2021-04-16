from doubly_linked_list import DoublyLinkedList

# LRU CACHE
# Use two data structures to implement an LRU Cache:

    # Queue which is implemented using a doubly linked list. 
        # The maximum size of the queue will be equal to the total number of frames available (cache size). 
        # The most recently used pages will be near front endpygame.examples.aliens.main()
        # The least recently pages will be near the rear end.
    # A Hash with page number as key and address of the corresponding queue node as value.

# When a page is referenced, the required page may be in the memory. 
# If it is in the memory, we need to detach the node of the list and bring it to the front of the queue.
# If the required page is not in memory, we bring that in memory. 
# In simple words, we add a new node to the front of the queue and update the corresponding node address in the hash. 
# If the queue is full, i.e. all the frames are full, we remove a node from the rear of the queue, and 
    # add the new node to the front of the queue.

# QUEUE PORTION:

    # time complexity:   Avg   | Worst
        # Access:       O(n)   |   O(n)
        # Search:       O(n)   |   O(n)
        # Insertion:    O(1)   |   O(1)
        # Deletion:     O(1)   |   O(1)

    # space complexity:  O(n)

# HASH TABLE PORTION: 

    # time complexity:   Avg   |   Worst
        # Access:       N/A    |   N/A
        # Search:       O(1)   |   O(n)
        # Insertion:    O(1)   |   O(n)
        # Deletion:     O(1)   |   O(n)

    # space complexity:  O(n)

class LRUCache:
    def __init__(self, limit=10):
        # Our LRUCache class keeps track of:
        # the max number of nodes it can hold
        self.max = limit
        # a doubly-linked list that holds the key-value entries in the correct order
        self.node_list = DoublyLinkedList()
        # a storage dict that provides fast access to every node stored in the cache
        self.storage = dict()

    def get(self, key):
        if not key in self.storage:
            return None
        list_value = self.storage[key]
        if list_value is not None:
            lruc_node = self.node_list.find(key)
            self.node_list.move_to_front(lruc_node)
        return list_value

        # needs to move the key-value pair to the end of the order such that the pair is considered most-recently used
        if key in self.keys:
            # Retrieves the value associated with the given key
            index = self.keys.index(key)
            self.keys.pop(index)
            self.keys.append(key)
            # Returns the value associated with the key
            return self.storage[key]

        # Returns None if the key-value pair doesn't exist in the cache.
        else:
           return None

    def set(self, key, value):
        # Adds the given key-value pair to the cache. The newly- added pair should be considered the most-recently used entry in the cache.
        if not key in self.storage:
            self.storage[key] = value
            self.node_list.add_to_head(key)
        # Additionally, in the case that the key already exists in the cache, we simply want to overwrite the old value associated with the key with the newly-specified value.
        else:
            self.storage[key] = value
            lruc_node = self.node_list.find(key)
            self.node_list.move_to_front(lruc_node)
        # If the cache is already at max capacity before this entry is added, then the oldest entry in the cache needs to be removed to make room.
        if len(self.node_list) > self.max:
            del self.storage[self.node_list.tail.value]
            self.node_list.remove_from_tail()

