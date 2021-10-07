# d = {
#     'banana': 'is a fruit',
#     'apple' : 'is also a fruit',
#     'pickle': 'vegetable',
# }

# a hash fucntion
# -must take a string
# -return a number
# -must always return the same output for the same input
# -should be fast

storage = [None] * 8  # has a size of 8/ static array


def hash_func(string, capacity):
    # turn into a number representation
    # turn str into a byte representation encode()
    byte_str = (
        string.encode()
    )  # an array of numbers the ascii representation of all the characters
    print(byte_str)
    print(type(byte_str))
    num = 0
    for byte in byte_str:
        num += byte
    return num % capacity


print(hash_func("apple", 8))
print(hash_func("banana", 8))
index = hash_func("apple", 8)
print(f"Apple hashed to {index}, store it there in storage")

# hash() is slower main purpose is for security less luckly to be decoded


class Dict:
    def __init__(self, capacity):
        self.storage = [None] * capacity
        self.capacity = capacity
        self.item_count = 0

    def get_load_factor(self):
        # number_of_slots = len(self.storage)
        return self.item_count / self.capacity

    def hash_func(self, key):
        byte_str = key.encode()
        num = 0
        for byte in byte_str:
            num += byte
        return num % self.capacity

    def insert(self, key, value):
        # hash the key
        index = self.hash_func(key)
        # check if the storage slot has an item already in there
        if self.storage[index] is not None:
            # first check if key has already been added
            for item in self.storage[index]:
                # we find a duplicate key, update the value
                if item[0] == key:
                    item[1] = value
                    return
            # print('there will be a collision')
            self.storage[index].append((key, value))
            self.item_count += 1
            # create an empty array and add the first item top it
        else:
            self.storage[index] = [(key, value)]
        if self.get_load_factor() > 0.7:
            print("we should get a resize")
            self.resize(self.capacity * 2)

    def __setitem__(self, key, value):
        self.insert(key, value)

    def get(self, key):
        index = self.hash_func(key)
        if self.storage[index] is None:
            return None
        # search through inner array at the target slot
        for item in self.storage[index]:
            item_key = item[0]
            if key == item_key:
                return item[1]
        # return None if it doest find it

    def __getitem__(self, key):
        return self.get(key)

    def resize(self, new_capacity):  # = o(n)
        # copy the old values so we wont lose them
        old_storage = self.storage.copy()  # o(n)
        # reset our storage to new capacity
        self.srorage = [None] * new_capacity
        self.capacity = new_capacity
        self.item_count = 0
        for slot in old_storage:  # o(storage) the size of the storage
            if slot is None:
                continue
            for item in slot:
                self.insert(item[0], item[1])  # o(n)

    def delete(self, key):
        index = self.hash_func(key)
        self.storage[index] = None


d = Dict(8)

# print(d.storage)
# d.insert("apple", "is a fruit")
# d['apple'] = 'is a fruit' TypeError: 'Dict' object does not support item assignment cause of the set item fucntion that uses the insert value
d["apple"] = "is an apple"
d["banana"] = "also is a fruit"
d["grapes"] = "still a fruit"
d["mango"] = "is a mango"
d["berries"] = "is a fruit"
d["pear"] = "is a fruit"
d["milk"] = "is milk"
d["bread"] = "is just bread"
d["oj"] = "is a not a fruit"
d["juice"] = "is just juice"
d["eggs"] = "is a not milk"
print(d.storage)
print(d["apple"])
print(d["banana"])
print(d["grapes"])
print(d.storage)

# load factor = number of items / number od slots
