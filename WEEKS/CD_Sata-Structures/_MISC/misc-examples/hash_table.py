# '''
# Linked List hash table key/value pair
# '''
class LinkedPair:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None


class HashTable:
    """
    A hash table that with `capacity` buckets
    that accepts string keys
    """

    def __init__(self, capacity):
        self.capacity = capacity  # Number of buckets in the hash table
        self.count = 0
        self.storage = [None] * capacity

    def _hash(self, key):
        """
        Hash an arbitrary key and return an integer.
        You may replace the Python hash with DJB2 as a stretch goal.
        """
        return hash(key)

    def _hash_djb2(self, key):
        """
        Hash an arbitrary key using DJB2 hash
        OPTIONAL STRETCH: Research and implement DJB2
        """
        pass

    def _hash_mod(self, key):
        """
        Take an arbitrary key and return a valid integer index
        within the storage capacity of the hash table.
        """
        return self._hash(key) % self.capacity

    def insert(self, key, value):
        """
        Store the value with the given key.
        # Part 1: Hash collisions should be handled with an error warning. (Think about and
        # investigate the impact this will have on the tests)
        # Part 2: Change this so that hash collisions are handled with Linked List Chaining.
        Fill this in.
        """
        # check count exceeding capacity
        if self.count >= self.capacity:
            # TODO: Make array dynamic with resizing
            print("ERROR: Array is full")
            # self.resize()
            return

        # create an index from the hash of the key
        index = self._hash_mod(key)
        # add value to storage at index
        self.storage[index] = value
        # increment count
        self.count += 1

    def remove(self, key):
        """
        Remove the value stored with the given key.
        Print a warning if the key is not found.
        Fill this in.
        """

        #         # check count exceeding capacity
        # if self.count >= self.capacity:
        #     # TODO: Make array dynamic with resizing
        #     print("ERROR: Array is full")
        #     # self.resize()
        #     return

        # create an index from the hash of the key
        index = self._hash_mod(key)
        # add value to storage at index
        self.storage[index] = None
        # increment count
        self.count -= 1

        pass

    def retrieve(self, key):
        """
        Retrieve the value stored with the given key.
        Returns None if the key is not found.
        Fill this in.
        """
        pass

    def resize(self):
        """
        Doubles the capacity of the hash table and
        rehash all key/value pairs.
        Fill this in.
        """
        pass


if __name__ == "__main__":
    ht = HashTable(2)

    ht.insert("line_1", "Tiny hash table")
    ht.insert("line_2", "Filled beyond capacity")
    ht.insert("line_3", "Linked list saves the day!")

    print("")

    # Test storing beyond capacity
    print(ht.retrieve("line_1"))
    print(ht.retrieve("line_2"))
    print(ht.retrieve("line_3"))

    # Test resizing
    old_capacity = len(ht.storage)
    ht.resize()
    new_capacity = len(ht.storage)

    print(f"\nResized from {old_capacity} to {new_capacity}.\n")

    # Test if data intact after resizing
    print(ht.retrieve("line_1"))
    print(ht.retrieve("line_2"))
    print(ht.retrieve("line_3"))

    print("")
