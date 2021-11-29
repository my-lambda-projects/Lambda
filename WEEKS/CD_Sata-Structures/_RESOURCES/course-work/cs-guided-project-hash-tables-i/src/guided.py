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

    def hash_func(self, key):
        byte_str = key.encode()
        num = 0
        for byte in byte_str:
            num += byte
        return num % self.capacity

    def insert(self, key, value):
        # hash the key
        index = self.hash_func(key)
        self.storage[index] = (key, value)

    def __setitem__(self, key, value):
        self.insert(key, value)

    def get(self, key):
        index = self.hash_func(key)
        return self.storage[index][1]  # 1 to access the second value of the tuple

    def __getitem__(self, key):
        return self.get(key)

    def delete(self, key):
        index = self.hash_func(key)
        self.storage[index] = None


d = Dict(8)

# print(d.storage)
# d.insert("apple", "is a fruit")
# d['apple'] = 'is a fruit' TypeError: 'Dict' object does not support item assignment cause of the set item fucntion that uses the insert value
d["apple"] = "is a fruit"
d["banana"] = "also is a fruit"
d["grapes"] = "still a fruit"
d["mango"] = "is a fruit"
print(d.storage)
print(d["apple"])
print(d["banana"])
