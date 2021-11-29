# a dynamic array class
class DynamicArray:
    def __init__(self, capacity=8):
        self.count = 0
        self.capacity = capacity
        self.storage = [None] * self.capacity

    # insert
    def insert(self, index, value):
        # check count exceeding capacity
        if self.count >= self.capacity:
            # TODO: Make array dynamic with resizing
            # print("ERROR: Array is full")
            self.__resize__()
            # return

        # shift everything to the right of index
        # iterate over a range from count to the index , increment in -1
        for i in range(self.count, index, -1):
            # set storage at i to the storage at i - 1
            self.storage[i] = self.storage[i - 1]
        # add value to storage at index
        self.storage[index] = value
        # increment count
        self.count += 1

    # append
    def append(self, value):
        # check count exceeding capacity
        if self.count >= self.capacity:
            # TODO: Make array dynamic with resizing
            # print("ERROR: Array is full")
            self.__resize__()
            # return
        # add value to storage at index
        self.storage[self.count] = value
        # increment count
        self.count += 1

    # resize (private) __resize__()
    def __resize__(self):
        # double the size of the array
        # set capacity to 2 * capacity
        self.capacity *= 2
        # create a new storage with the size of the capacity
        new_storage = [None] * self.capacity
        # iterate over the data in current storage
        for i in range(self.count):
            # copy over the element
            new_storage[i] = self.storage[i]
        # set the storage to the new storage (add ref)
        self.storage = new_storage
