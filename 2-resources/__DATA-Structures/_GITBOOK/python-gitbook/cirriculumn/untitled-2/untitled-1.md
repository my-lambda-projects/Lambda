---
description: Number Bases & Characters
---

# D3-Module 03 - Hash Tables II

Original:

{% embed url="https://colab.research.google.com/drive/1WXURLnQJopWW5J-OKxOePd4GTeDM542p?usp=sharing\#scrollTo=Um92huhOx2BD" %}

{% embed url="https://gist.github.com/bgoonz/85cf385ba5382cea548c2b6083cd1b3f" %}

{% embed url="https://gist.github.com/bgoonz/c10af728179ff056894c6f17dfb819bc\#file-ht2-ipynb" %}

## Objective 01 - Understand hash collisions and use a linked list for collision resolution in a user-defined Hashable class

### **Overview**

Remember when we wondered what would happen if multiple keys hashed to the same index, and we said that we would worry about it later? Whelp, it's later 🤪.

Let's say we were given the key-value pair `("Ryan", 10)`. Our hash code then maps "Ryan" to index 3. Excellent, that works!Now let's say after we inserted `("Ryan", 10)`, we have to insert `("Parth", 12)`. Our hash code maps "Parth" to index 3. Uh oh! Ryan is already there! What do we do?? 😱

Ok, let's stop freaking out, and let's think about this. If we don't do anything, the value stored at index 3 will just get overwritten. Meaning if we try to retrieve the value associated with `"Ryan"`, 12 will be returned instead of 10. That might not seem like a big deal, but what if we were returning passwords based on a user ID, and we returned someone else's password. That would be horrible.

Let's fix this problem. The most common way to solve this is with **chaining**. If we see multiple values hashed to an index, we will chain them in a some data structure that can hold multiple items. In our case, we'll use Python's `list` type, but a more typical solution would use a linked list. We'll cover linked lists in a future module.

![https://tk-assets.lambdaschool.com/f952600c-f3e0-4d96-bb53-def08235c9c0_collision.gif](https://tk-assets.lambdaschool.com/f952600c-f3e0-4d96-bb53-def08235c9c0_collision.gif)

Ok, sounds ideal? But how does this work in code? Let's write some of it together.

### **Follow Along**

Below is a partially filled out hash table class where we will be using `HashTableEntry` as our chain entries.

Take a look at the code below.

```python
class HashTableEntry:
    """
    Hash table key/value pair to go in our collision chain
    """
    def __init__(self, key, value):
        self.key = key
        self.value = value

# Hash table can't have fewer than this many slots
MIN_CAPACITY = 8

class HashTable:
    """
    A hash table with `capacity` buckets
    that accepts string keys
    Implement this.
    """

    def __init__(self, capacity):
        self.capacity = capacity  # Number of buckets in the hash table

        self.storage = []
        for _ in range(capacity):   # Initialize with empty lists
            self.storage.append([])

        self.item_count = 0

    def get_num_slots(self):
        """
        Return the length of the list you're using to hold the hash table data. (Not the number of items stored in the hash table,
        but the number of slots in the main list.)
        One of the tests relies on this.
        Implement this.
        """
        # Your code here

    def get_load_factor(self):
        """
        Return the load factor for this hash table.
        Implement this.
        """
        return len(self.storage)

    def djb2(self, key):
        """
        DJB2 hash, 32-bit
        Implement this, and/or FNV-1.
        """
        str_key = str(key).encode()

        hash = FNV_offset_basis_64

        for b in str_key:
            hash *= FNV_prime_64
            hash ^= b
            hash &= 0xffffffffffffffff  # 64-bit hash

        return hash

    def hash_index(self, key):
        """
        Take an arbitrary key and return a valid integer index between within the hash table's storage capacity.
        """
        return self.djb2(key) % self.capacity

    def put(self, key, value):
        """
        Store the value with the given key.
        Hash collisions should be handled with Linked List Chaining.
        Implement this.
        """
        # Your code here

    def delete(self, key):
        """
        Remove the value stored with the given key.
        Print a warning if the key is not found.
        Implement this.
        """
        # Your code here

    def get(self, key):
        """
        Retrieve the value stored with the given key.
        Returns None if the key is not found.
        Implement this.
        """
        # Your code here
```

Let's implement the `put` method with collision resolution by chaining. What are the two cases we need to handle?

1. **There are no entries at the index**. Great! We can initialize the entry to a list with the new `HashTableEntry` in it.
2. **There are multiple entries at the index.** We need to check every entry in the chain. If the key in one of the entries is equal to the key we are passing in, we need to replace it. For instance, let's say we pass in `("Ryan", 12),` and then we later pass in `("Ryan", 15)`. We would need to replace "Ryan"'s old value with 15. If there are no entries that match, we create a new entry at the end of the chain.

Ok, that might sound confusing. Let's start breaking it down into code.

```python
    def put(self, key, value):
        """
        Store the value with the given key.
        Hash collisions should be handled with Linked List Chaining.
        Implement this.
        """
        # Your code here
```

First, we need to hash the key and start with the first entry at that index.

```python
    def put(self, key, value):
        """
        Store the value with the given key.
        Hash collisions should be handled with Linked List Chaining.
        Implement this.
        """
        index = self.hash_index(key)

        chain = self.storage[index]
```

Next, we need to go through the chain. We need to check two conditions:

1. The current entry is not empty.
2. The key or the current entry is not equal to the key we are passing in.

```python
    def put(self, key, value):
        """
        Store the value with the given key.
        Hash collisions should be handled with Linked List Chaining.
        Implement this.
        """
        index = self.hash_index(key)

        chain = self.storage[index]

        existing_entry = None

        for current_entry in chain:
            if current_entry.key == key:
                exiting_entry = current_entry
                break
```

Sweet! Now we need to check what happens when the loop breaks. It would only break for two reasons:

1. We reached an entry with the same key and need to replace the value.
2. We reached the end of the chain and need to create a new entry.

Let's write that in code!

```python
    def put(self, key, value):
        """
        Store the value with the given key.
        Hash collisions should be handled with Linked List Chaining.
        Implement this.
        """
        index = self.hash_index(key)

        chain = self.storage[index]

        existing_entry = None

        for current_entry in chain:
            if current_entry.key == key:
                existing_entry = current_entry
                break

        if existing_entry is not None:
            existing_entry.value = value
        else:
            new_entry = HashTableEntry(key, value)
            chain.append(new_entry)
```

Great! We created the `put` method.

### **Challenge**

[https://replit.com/@bgoonz/cs-unit-1-sprint-4-module-2-hash-table-collision-resolution\#main.py](https://replit.com/@bgoonz/cs-unit-1-sprint-4-module-2-hash-table-collision-resolution#main.py)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/155e4481-6522-4f77-8cc1-72004e760287/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/155e4481-6522-4f77-8cc1-72004e760287/Untitled.png)

## Objective 02 - Define and compute the load factor of a hash table and implement a hash table that automatically resizes based on load factor

### **Overview**

What does runtime look like with linked list chaining?

The performance of hash tables for search, insertion, and deletion is constant time \(`O(1)`\) in the average case. However, as the chains get longer and longer, in the worst case, those same operations are done in linear time \(`O(n)`\). The more collisions that your hash table has, the less performant the hash table is. To avoid collisions, a proper hash function and maintaining a low load factor is crucial. What is a load factor?

#### **Load Factor**

The load factor of a hash table is trivial to calculate. You take the number of items stored in the hash table divided by the number of slots.

![https://tk-assets.lambdaschool.com/59d00218-52e2-4f3d-9680-2b2d8baad3ae_S5-M3-O1LoadFactor.001.jpeg](https://tk-assets.lambdaschool.com/59d00218-52e2-4f3d-9680-2b2d8baad3ae_S5-M3-O1LoadFactor.001.jpeg)

Hash tables use an array for storage. So, the load factor is the number of occupied slots divided by the length of the array. So, an array of length 10 with three items in it has a load factor of 0.3, and an array of length 20 with twenty items has a load factor of 1. If you use linear probing for collision resolution, then the maximum load factor is 1. If you use chaining for collision resolution, then the load factor can be greater than 1.

As the load factor of your hash table increases, so does the likelihood of a collision, which reduces your hash table's performance. Therefore, you need to monitor the load factor and resize your hash table when the load factor gets too large. The general rule of thumb is to resize your hash table when your load factor is greater than 0.7. Also, when you resize, it is common to double the size of the hash table. When you resize the array, you need to re-insert all of the items into this new hash table. You cannot simply copy the old items into the new hash table. Each item has to be rerun through the hashing function because the hashing function considers the size of the hash table when determining the index that it returns.

You can see that resizing is an expensive operation, so you don’t want to resize too often. However, when we average it out, hash tables are constant time \(`O(1)`\) even with resizing.

The load factor can also be too small. If the hash table is too large for the data that it is storing, then memory is being wasted. So, in addition to resizing, when the load factor gets too high, you should also resize when the load factor gets too low.

One way to know when to resize your hash table is to compute the load factor whenever an item is inserted or deleted into the hash table. If the load factor is too high or too low, then you need to resize.

We added a `get_load_factor` and `resize` method to calculate the load factor and resize the hash table with a new capacity when necessary.

```python
class HashTableEntry:
    """
    Linked List hash table key/value pair
    """
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None

# Hash table can't have fewer than this many slots
MIN_CAPACITY = 8

class HashTable:
    """
    A hash table with `capacity` buckets
    that accepts string keys
    Implement this.
    """

    def __init__(self, capacity):
        self.capacity = capacity  # Number of buckets in the hash table
        self.storage = [None] * capacity
        self.item_count = 0

    def get_num_slots(self):
        """
        Return the length of the list you're using to hold the hash
        table data. (Not the number of items stored in the hash table,
        but the number of slots in the main list.)
        One of the tests relies on this.
        Implement this.
        """
        # Your code here

    def get_load_factor(self):
        """
        Return the load factor for this hash table.
        Implement this.
        """
        return self.item_count / self.capacity

    def resize(self, new_capacity):
        """
        Changes the capacity of the hash table and
        rehashes all key/value pairs.
        Implement this.
        """
        old_storage = self.storage
        self.capacity = new_capacity
        self.storage = [None] * self.capacity

        current_entry = None

        # Save this because put adds to it, and we don't want that.
        # It might be less hackish to pass a flag to put indicating that
        # we're in a resize and don't want to modify item count.
        old_item_count = self.item_count

        for bucket_item in old_storage:
            current_entry = bucket_item
            while current_entry is not None:
                self.put(current_entry.key, current_entry.value)
                current_entry = current_entry.next

        # Restore this to the correct number
        self.item_count = old_item_count

    def djb2(self, key):
        """
        DJB2 hash, 32-bit
        Implement this, and/or FNV-1.
        """
        str_key = str(key).encode()

        hash = FNV_offset_basis_64

        for b in str_key:
            hash *= FNV_prime_64
            hash ^= b
            hash &= 0xffffffffffffffff  # 64-bit hash

        return hash

    def hash_index(self, key):
        """
        Take an arbitrary key and return a valid integer index
        within the hash table's storage capacity.
        """
        return self.djb2(key) % self.capacity

    def put(self, key, value):
        """
        Store the value with the given key.
        Hash collisions should be handled with Linked List Chaining.
        Implement this.
        """
        index = self.hash_index(key)

        current_entry = self.storage[index]

        while current_entry is not None and current_entry.key != key:
            current_entry = current_entry.next

        if current_entry is not None:
            current_entry.value = value
        else:
            new_entry = HashTableEntry(key, value)
            new_entry.next = self.storage[index]
            self.storage[index] = new_entry

    def delete(self, key):
        """
        Remove the value stored with the given key.
        Print a warning if the key is not found.
        Implement this.
        """
        # Your code here

    def get(self, key):
        """
        Retrieve the value stored with the given key.
        Returns None if the key is not found.
        Implement this.
        """
        # Your code here
```

### **Follow Along**

Let's change our `put` method to resize when the load factor gets too high. Here's how our current `put` method looks:

```python
def put(self, key, value):
    """
    Store the value with the given key.
    Hash collisions should be handled with Linked List Chaining.
    Implement this.
    """
    index = self.hash_index(key)

    current_entry = self.storage[index]

    while current_entry is not None and current_entry.key != key:
        current_entry = current_entry.next

    if current_entry is not None:
        current_entry.value = value
    else:
        new_entry = HashTableEntry(key, value)
        new_entry.next = self.storage[index]
        self.storage[index] = new_entry
```

To know when to resize, we need to correctly increment the count whenever we insert something new into the hash table. Let's go ahead and add that.

```python
def put(self, key, value):
    """
    Store the value with the given key.
    Hash collisions should be handled with Linked List Chaining.
    Implement this.
    """
    index = self.hash_index(key)

    current_entry = self.storage[index]

    while current_entry is not None and current_entry.key != key:
        current_entry = current_entry.next

    if current_entry is not None:
        current_entry.value = value
    else:
        new_entry = HashTableEntry(key, value)
        new_entry.next = self.storage[index]
        self.storage[index] = new_entry

        self.item_count += 1
```

Next, we need to check if the load factor is greater than or equal to 0.7. If it is, we need to double our capacity and resize.

```python
def put(self, key, value):
    """
    Store the value with the given key.
    Hash collisions should be handled with Linked List Chaining.
    Implement this.
    """
    index = self.hash_index(key)

    current_entry = self.storage[index]

    while current_entry is not None and current_entry.key != key:
        current_entry = current_entry.next

    if current_entry is not None:
        current_entry.value = value
    else:
        new_entry = HashTableEntry(key, value)
        new_entry.next = self.storage[index]
        self.storage[index] = new_entry

        self.item_count += 1

        if self.get_load_factor() > 0.7:
            self.resize(self.capacity * 2)
```

Fantastic, we did it!

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/18e22e25-8fb5-4763-b92e-ce3ac0d3e4e4/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/18e22e25-8fb5-4763-b92e-ce3ac0d3e4e4/Untitled.png)

## Objective 02 - Define and compute the load factor of a hash table and implement a hash table that automatically resizes based on load factor

### **Overview**

What does runtime look like with linked list chaining?

The performance of hash tables for search, insertion, and deletion is constant time \(`O(1)`\) in the average case. However, as the chains get longer and longer, in the worst case, those same operations are done in linear time \(`O(n)`\). The more collisions that your hash table has, the less performant the hash table is. To avoid collisions, a proper hash function and maintaining a low load factor is crucial. What is a load factor?

#### **Load Factor**

The load factor of a hash table is trivial to calculate. You take the number of items stored in the hash table divided by the number of slots.

![https://tk-assets.lambdaschool.com/59d00218-52e2-4f3d-9680-2b2d8baad3ae_S5-M3-O1LoadFactor.001.jpeg](https://tk-assets.lambdaschool.com/59d00218-52e2-4f3d-9680-2b2d8baad3ae_S5-M3-O1LoadFactor.001.jpeg)

Hash tables use an array for storage. So, the load factor is the number of occupied slots divided by the length of the array. So, an array of length 10 with three items in it has a load factor of 0.3, and an array of length 20 with twenty items has a load factor of 1. If you use linear probing for collision resolution, then the maximum load factor is 1. If you use chaining for collision resolution, then the load factor can be greater than 1.

As the load factor of your hash table increases, so does the likelihood of a collision, which reduces your hash table's performance. Therefore, you need to monitor the load factor and resize your hash table when the load factor gets too large. The general rule of thumb is to resize your hash table when your load factor is greater than 0.7. Also, when you resize, it is common to double the size of the hash table. When you resize the array, you need to re-insert all of the items into this new hash table. You cannot simply copy the old items into the new hash table. Each item has to be rerun through the hashing function because the hashing function considers the size of the hash table when determining the index that it returns.

You can see that resizing is an expensive operation, so you don’t want to resize too often. However, when we average it out, hash tables are constant time \(`O(1)`\) even with resizing.

The load factor can also be too small. If the hash table is too large for the data that it is storing, then memory is being wasted. So, in addition to resizing, when the load factor gets too high, you should also resize when the load factor gets too low.

One way to know when to resize your hash table is to compute the load factor whenever an item is inserted or deleted into the hash table. If the load factor is too high or too low, then you need to resize.

We added a `get_load_factor` and `resize` method to calculate the load factor and resize the hash table with a new capacity when necessary.

```python
class HashTableEntry:
    """
    Linked List hash table key/value pair
    """
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None

# Hash table can't have fewer than this many slots
MIN_CAPACITY = 8

class HashTable:
    """
    A hash table with `capacity` buckets
    that accepts string keys
    Implement this.
    """

    def __init__(self, capacity):
        self.capacity = capacity  # Number of buckets in the hash table
        self.storage = [None] * capacity
        self.item_count = 0

    def get_num_slots(self):
        """
        Return the length of the list you're using to hold the hash
        table data. (Not the number of items stored in the hash table,
        but the number of slots in the main list.)
        One of the tests relies on this.
        Implement this.
        """
        # Your code here

    def get_load_factor(self):
        """
        Return the load factor for this hash table.
        Implement this.
        """
        return self.item_count / self.capacity

    def resize(self, new_capacity):
        """
        Changes the capacity of the hash table and
        rehashes all key/value pairs.
        Implement this.
        """
        old_storage = self.storage
        self.capacity = new_capacity
        self.storage = [None] * self.capacity

        current_entry = None

        # Save this because put adds to it, and we don't want that.
        # It might be less hackish to pass a flag to put indicating that
        # we're in a resize and don't want to modify item count.
        old_item_count = self.item_count

        for bucket_item in old_storage:
            current_entry = bucket_item
            while current_entry is not None:
                self.put(current_entry.key, current_entry.value)
                current_entry = current_entry.next

        # Restore this to the correct number
        self.item_count = old_item_count

    def djb2(self, key):
        """
        DJB2 hash, 32-bit
        Implement this, and/or FNV-1.
        """
        str_key = str(key).encode()

        hash = FNV_offset_basis_64

        for b in str_key:
            hash *= FNV_prime_64
            hash ^= b
            hash &= 0xffffffffffffffff  # 64-bit hash

        return hash

    def hash_index(self, key):
        """
        Take an arbitrary key and return a valid integer index
        within the hash table's storage capacity.
        """
        return self.djb2(key) % self.capacity

    def put(self, key, value):
        """
        Store the value with the given key.
        Hash collisions should be handled with Linked List Chaining.
        Implement this.
        """
        index = self.hash_index(key)

        current_entry = self.storage[index]

        while current_entry is not None and current_entry.key != key:
            current_entry = current_entry.next

        if current_entry is not None:
            current_entry.value = value
        else:
            new_entry = HashTableEntry(key, value)
            new_entry.next = self.storage[index]
            self.storage[index] = new_entry

    def delete(self, key):
        """
        Remove the value stored with the given key.
        Print a warning if the key is not found.
        Implement this.
        """
        # Your code here

    def get(self, key):
        """
        Retrieve the value stored with the given key.
        Returns None if the key is not found.
        Implement this.
        """
        # Your code here
```

### **Follow Along**

Let's change our `put` method to resize when the load factor gets too high. Here's how our current `put` method looks:

```python
def put(self, key, value):
    """
    Store the value with the given key.
    Hash collisions should be handled with Linked List Chaining.
    Implement this.
    """
    index = self.hash_index(key)

    current_entry = self.storage[index]

    while current_entry is not None and current_entry.key != key:
        current_entry = current_entry.next

    if current_entry is not None:
        current_entry.value = value
    else:
        new_entry = HashTableEntry(key, value)
        new_entry.next = self.storage[index]
        self.storage[index] = new_entry
```

To know when to resize, we need to correctly increment the count whenever we insert something new into the hash table. Let's go ahead and add that.

```python
def put(self, key, value):
    """
    Store the value with the given key.
    Hash collisions should be handled with Linked List Chaining.
    Implement this.
    """
    index = self.hash_index(key)

    current_entry = self.storage[index]

    while current_entry is not None and current_entry.key != key:
        current_entry = current_entry.next

    if current_entry is not None:
        current_entry.value = value
    else:
        new_entry = HashTableEntry(key, value)
        new_entry.next = self.storage[index]
        self.storage[index] = new_entry

        self.item_count += 1
```

Next, we need to check if the load factor is greater than or equal to 0.7. If it is, we need to double our capacity and resize.

```python
def put(self, key, value):
    """
    Store the value with the given key.
    Hash collisions should be handled with Linked List Chaining.
    Implement this.
    """
    index = self.hash_index(key)

    current_entry = self.storage[index]

    while current_entry is not None and current_entry.key != key:
        current_entry = current_entry.next

    if current_entry is not None:
        current_entry.value = value
    else:
        new_entry = HashTableEntry(key, value)
        new_entry.next = self.storage[index]
        self.storage[index] = new_entry

        self.item_count += 1

        if self.get_load_factor() > 0.7:
            self.resize(self.capacity * 2)
```

Fantastic, we did it!

### **Challenge**

1. Do we need to modify our `delete` and `get` methods to account for the new `get_load_factor` and `resize` methods? Why or why not?

### **Additional Resources**

- [https://courses.csail.mit.edu/6.006/spring11/rec/rec07.pdf \(Links to an external site.\)](https://courses.csail.mit.edu/6.006/spring11/rec/rec07.pdf)
