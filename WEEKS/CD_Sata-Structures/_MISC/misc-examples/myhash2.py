class HashTableEntry:
    def __init__(self, key, value):
        self.key = key
        self.value = value

    def __repr__(self):
        return f"HashTableEntry({repr(self.key)},{repr(self.value)})"


# lets refactor some code

hash_table = [None] * 8  # 8 slots, all initiailized to None


def my_hash(s):
    sb = s.encode()  # Get the UTF-8 bytes for the string

    sum = 0

    for b in sb:
        sum += b
        sum &= 0xFFFFFFFF  # clamp to 32 bits

    return sum


# hash the index
def hash_index(key):
    h = my_hash(key)
    return h % len(hash_table)


# put
def put(key, val):
    i = hash_index(key)

    # while the hash_table[i] != None
    # then increment index and try again
    if hash_table[i] != None:
        print(f"Collision! Overwriting {repr(hash_table[i])}")
    hash_table[i] = HashTableEntry(key, val)


# get
def get(key):
    i = hash_index(key)

    entry = hash_table[i]
    if entry == None:
        return None
    # while the entry.key != key
    # then increment index and try again

    return entry.value


# delete
def delete(key):
    i = hash_index(key)
    hash_table[i] = None


if __name__ == "__main__":

    # put("Hello", "Hello Value")
    # put("World", "World Value")

    # print(f"{hash_table}\n")

    # put("foo", "foo value")   # "foo" hashes to same index as "Hello"
    #                         # AKA "foo collides with Hello"
    # print(f"\n{hash_table}\n");

    # v = get("Hello")
    # print(f'Hello value is: {v}') # Should be "Hello Value", but gives "foo value"
    pass
