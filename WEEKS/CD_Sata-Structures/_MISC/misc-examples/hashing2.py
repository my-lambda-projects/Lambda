class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    # Insert (for putting a node)
    def insert_at_head(self, node):
        node.next = self.head
        self.head = node

    # Find (for getting a node)
    def find(self, value):
        cur = self.head

        while cur is not None:
            if cur.value == value:
                return cur

            cur = cur.next

        return None

    # Delete (for deleting a node)
    # stretch


# hashtableentry class
# key, value
# repr
# str


class HashTableEntry:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        # self.bob = "hello"
        self.next = None

    def repr(self):
        return f"HashTableEntry({self.key}, {self.value})"


hash_table = [None] * 8  # 8 slots, all initiailized to None


def my_hash(s):
    sb = s.encode()  # Get the UTF-8 bytes for the string

    total = 0

    for b in sb:
        total += b
        total &= 0xFFFFFFFF  # clamp to 32 bits

    return total


def hash_index(key):
    h = my_hash(key)
    return h % len(hash_table)


def put(key, val):
    i = hash_index(key)
    if hash_table[i] != None:
        print(f"Collision! Overwriting {repr(hash_table[i])}")
    hash_table[i] = HashTableEntry(key, val)


def get(key):
    i = hash_index(key)
    entry = hash_table[i]

    if entry == None:
        return None

    return entry.value


def delete(key):
    i = hash_index(key)
    hash_table[i] = None


put("Hello", "Hello Value")
put("World", "World Value")
put("foo", "foo value")  # "foo" hashes to same index as "Hello"
# AKA "foo collides with Hello"

print(hash_table)

v = get("Hello")
print(f"Hello value is: {v}")  # Should be "Hello Value", but gives "foo value"

# Get "Frogs" from the table
# Doesn't exist!
v = get("Frogs")
print(v)  # "None"


"""
Put
---
1: find index
2: search the list at the index for the provided key
3: if the key exists > overwrite the value
4: otherwise key does not exist
::: make a new HashTableEntry with the key and value
::: insert the HashTableEntry object at the head of the list

Get
---
1: find index
2: search list at index for a matching key
3: return objects value or None if not found

Delete
------
1: find index
2: search linked list at the index for the hte object that matches the key
3: if found:
::: delete entry from linked list
::: return hte value
4: otherwise:
::: return None
"""
