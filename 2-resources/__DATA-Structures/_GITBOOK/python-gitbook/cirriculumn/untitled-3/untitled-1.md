# D3- Module 03 - Python III

## Objective 02 - Perform basic list operations

### Overview <a id="overview"></a>

Lists are similar to arrays. They can store any type of variable and as many variables as you want. You can iterate over lists effortlessly.

### Overview <a id="overview"></a>

A dictionary is like a list, but instead of accessing values with an index, you access values with a "key." A "key" can be any type of object \(string, number, list, etc.\). Also, unlike lists, dictionaries do not have an order.

To build a list, you can do the following:

```python
my_list = [] # empty list literal
my_list.append(1) # add 1 to end of list
my_list.append(2) # add 2 to end of list
my_list.append(3) # add 3 to end of list
print(my_list[0]) # prints 1
print(my_list[1]) # prints 2
print(my_list[2]) # prints 3

# iterate over the list with for statement to print each item in my_list
for item in my_list:
    print(item)
```

In Python, if you try to access a list index that does not exist, you get an `IndexError: list index out of range` message:

```python
>>> my_list = [1,2,3]
>>> print(my_list[10])
IndexError: list index out of range
```

### Follow Along <a id="follow-along"></a>

Let's make sure we can perform basic list operations.

First, let's create a `numbers` list that contains the numbers `1`, `2`, and `3`.

```python
numbers = []
numbers.append(1)
numbers.append(2)
numbers.append(3)
```

Now, let's create a `strings` list that contains the strings `"Lambda"` and `"School"`:

```python
strings = []
strings.append("Lambda")
strings.append("School")
```

Now, let's make sure we can access items from a specific index in a list. Let's access the 3rd item from numbers and the 2nd item from strings and print them out \(don't forget that lists are zero-indexed\).

```text
print(numbers[2], strings[1])
```

Last, let's iterate through our `numbers` list to sum up all of the numbers:

```python
sum = 0
for number in numbers:
    sum += number
```

{% embed url="https://replit.com/@bgoonz/cs-unit-1-sprint-1-module-1-list-operations-1" %}

### Follow Along <a id="follow-along"></a>

Let's use a dictionary to create a collection that maps first names as keys \(strings\) to phone numbers as values.

```python
phonebook = {} # creates an empty dictionary
phonebook["Abe"] = 4569874321
phonebook["Bill"] = 7659803241
phonebook["Barry"] = 6573214789

print(phonebook)
# {'Abe': 4569874321, 'Bill': 7659803241, 'Barry': 6573214789}
```

Instead of adding one key-value pair at a time, we can initialize the dictionary to have the same values.

```python
phonebook = {
    "Abe": 4569874321,
    "Bill": 7659803241,
    "Barry": 6573214789
}

print(phonebook)
# {'Abe': 4569874321, 'Bill': 7659803241, 'Barry': 6573214789}
```

We can iterate over a dictionary as we iterated over a list. We can use the `items()` method, which returns a tuple with the key and value for each item in the dictionary.

Original:[https://colab.research.google.com/drive/1WXURLnQJopWW5J-OKxOePd4GTeDM542p?usp=sharing\#scrollTo=Um92huhOx2BD](https://colab.research.google.com/drive/1WXURLnQJopWW5J-OKxOePd4GTeDM542p?usp=sharing#scrollTo=Um92huhOx2BD)

[https://gist.github.com/bgoonz/c10af728179ff056894c6f17dfb819bc\#file-ht2-ipynb](https://gist.github.com/bgoonz/c10af728179ff056894c6f17dfb819bc#file-ht2-ipynb)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/155e4481-6522-4f77-8cc1-72004e760287/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/155e4481-6522-4f77-8cc1-72004e760287/Untitled.png)

## Objective 01 - Understand hash collisions and use a linked list for collision resolution in a user-defined HashTable class

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

```python
for name, number in phonebook.items():
    print("Name: %s, Number: %s" % (name, number))

# Name: Abe, Number: 4569874321
# Name: Bill, Number: 7659803241
# Name: Barry, Number: 6573214789
```

To remove a key-value pair from a dictionary, you need to use the `del` keyword or use the `pop()` method available on dictionary objects. The difference is `pop()` deletes the item from the dictionary and returns the value. When you use the `del` keyword, you've written a statement that doesn't evaluate to anything.

```python
phonebook = {
    "Abe": 4569874321,
    "Bill": 7659803241,
    "Barry": 6573214789
}

del phonebook["Abe"]

print(phonebook.pop("Bill"))
# 7659803241
```

{% embed url="https://replit.com/@bgoonz/cs-unit-1-sprint-1-module-1-dictionaries-1\#main.py" %}

##

#### Identity <a id="identity"></a>

An object's **identity** can never change once it has been created. You can think of an object's identity as its specific address in memory. In the code above, `a = 1` created a new object in memory whose identity is represented by the integer `4483164816`.

Python has an `is` operator that allows you to compare two object's identities.

```python
>>> a = 1
>>> b = 2
>>> a is b
False
>>> b = a
>>> a is b
True
>>>
```

In the code above, we first assign `1` to the variable `a`. Then, we assign `2` to the variable `b`. These are two different objects in memory and thus have different identities. We verify that they are different by using the `is` operator, which returns `False`. The line `b = a` assigns the variable `b` the object that the variable `a` is pointed to. Now, both `a` and `b` are referencing the same object in memory. We can use the `id()` function to verify that this is the case as well:

```python
>>> id(a)
4483164816
>>> id(b)
4483164816
>>>
```

#### Type <a id="type"></a>

The **type** of an object determines what are its possible values and what operations that object supports. The `type()` function will return what type an object is:

```python
>>> a = 'Hello'
>>> type(a)
<class 'str'>
>>> b = 100
>>> type(b)
<class 'int'>
>>> c = True
>>> type(c)
<class 'bool'>
>>>
```

Just like an object's identity, once an object is created, its identity can never change. It's an object's type that determines whether an object is **mutable** or **immutable.**

#### Value <a id="value"></a>

The value of some objects _can be changed_ after they are created. The value of some objects _cannot be changed_ after they are created. If the object's value can be changed, that object is considered to be **mutable** \(changeable\). If the object's value cannot be changed, that object is considered to be **immutable** \(unchangeable\).

#### Mutable Objects <a id="mutable-objects"></a>

A mutable object is an object whose value can be changed after it is created. The word mutable is defined as:

> liable to change

The following types of objects are mutable:

- list
- set
- dict
- byte array
- instances of user-defined classes

Let's look at a few examples in code:

**Lists**

```python
>>> my_list = ['laughter', 'happiness', 'love']
>>> type(my_list)
<class 'list'>
>>> my_list[2] = 'joy'
>>> my_list.append('excellent')
>>> my_list
['laughter', 'happiness', 'joy', 'excellent']
>>>
```

In the first line, we create a list object with three elements and assign it to the variable `my_list`. Then, because lists are mutable, we change `'love'` at index 2 to be `'joy'` instead. We also can grow our list by appending a new element to the list.

**Sets**

```python
>>> my_set = {'laughter', 'happiness', 'love'}
>>> type(my_set)
<class 'set'>
>>> my_set.add('happy')
>>> my_set
{'love', 'happy', 'happiness', 'laughter'}
>>> my_set.remove('happiness')
>>> my_set
{'love', 'happy', 'laughter'}
```

In the first line, we create a set object with three elements and assign it to the variable `my_set`. Because set objects are mutable, we can add `'happy'` to the set and remove `'happiness'` from the set.

**Dicts**

```text
>>> my_dict = {"first_name": "Mattieu", "last_name": "Ricard"}
>>> type(my_dict)
<class 'dict'>
>>> my_dict["location"] = "Nepal"
>>> my_dict
{'first_name': 'Mattieu', 'last_name': 'Ricard', 'location': 'Nepal'}
>>> del my_dict['location']
>>> my_dict
{'first_name': 'Mattieu', 'last_name': 'Ricard'}
```

On line one, we create a dict object that has two key-value pairs. Then, because dict objects are mutable, we add key-value pair `"location": "Nepal"`. Last, we delete that same key-value pair.

Mutable objects work great when you know you will likely need to change the size of the object as you use and interact with it. Changing mutable objects is cheap \(because you don't have to copy all existing elements to a new object\).

**Aliasing with Mutable Objects**

Below, I'm going to walk through what happens when you **alias** a mutable object. In Python, aliasing happens whenever a variable's value is assigned to another variable because variables are just names that store references to values.

Let me illustrate this with a helpful code visualizer tool called [Python Tutor \(Links to an external site.\)](http://www.pythontutor.com/):

![https://tk-assets.lambdaschool.com/ba46ee2f-6bb4-421e-8be7-cba3a55eedcf_Untitled.png](https://tk-assets.lambdaschool.com/ba46ee2f-6bb4-421e-8be7-cba3a55eedcf_Untitled.png)

On line 1, we instantiate a new list object with three elements \(`1`, `2`, and `3`\). The name `my_list_orig` is the variable that we assign the new list to.

![https://tk-assets.lambdaschool.com/23cd8845-e086-4cf6-9b50-70b37a11731b_Untitled-2.png](https://tk-assets.lambdaschool.com/23cd8845-e086-4cf6-9b50-70b37a11731b_Untitled-2.png)

Then, on line 2, we create an alias of `my_list_orig` by pointing `my_list_alias` to whatever object `my_list_orig` is pointing at. Notice in the image above that there is still only one list object. However, there are two variables in the global frame, and they are both pointing to the same object.

![https://tk-assets.lambdaschool.com/604c130d-254c-4126-87a8-49625e676ef4_Untitled-3.png](https://tk-assets.lambdaschool.com/604c130d-254c-4126-87a8-49625e676ef4_Untitled-3.png)

On line 3, we append a new element to `my_list_orig`. Notice that, because both variables are referencing the same object, even though we appended to `my_list_orig`, we also modified `my_list_alias`.

![https://tk-assets.lambdaschool.com/f1655834-f68c-4b49-95ca-93d4a1578423_Untitled-4.png](https://tk-assets.lambdaschool.com/f1655834-f68c-4b49-95ca-93d4a1578423_Untitled-4.png)

On line 4, we removed the element `1` from `my_list_orig`. Notice, just like when we added to the list, `my_list_alias` is also affected.

_This behavior is something you need to be aware of if you ever use aliasing with mutable objects in your code._

#### Immutable Objects <a id="immutable-objects"></a>

An immutable object is an object whose value cannot be changed after it is created. Immutable means _not changeable_. Anytime you try to update the value of an immutable object, a new object is created instead.

The following types are immutable:

- Numbers \(int, float, complex\)
- Strings
- Bytes
- Booleans
- Tuples

Immutable objects are useful when you want to make sure that the object you created will always maintain the same value. Immutable objects are more _expensive_ to change \(in terms of time and space complexity\) because changing the object requires making a copy of the existing object.

Let's look at a few examples:

**Numbers**

```python
>>> my_int = 1
>>> id(my_int)
4513307280
>>> type(my_int)
<class 'int'>
>>> my_int
1
>>> my_int = 2
>>> id(my_int)
4513307312
>>> type(my_int)
<class 'int'>
>>> my_int
2
>>>
```

In the code above, the first line creates a new int object, and the variable `my_int` now points at that object. You can see that this object has `int` for its type, `4513307280` for its identity \(location in memory\), and `1` for its value.

Then, we assign `2` to `my_int`which creates a whole new object and assigns it to the variable `my_int`. This object has `int` for its type, `4513307312` for its identity \(which you can see is different from the first object\), and `2` for its value.

**Strings**

Let's look at how string concatenation works in Python. Remember that str objects are immutable.

```python
>>> my_str = 'a'
>>> type(my_str)
<class 'str'>
>>> id(my_str)
140716674193840
>>> my_str
'a'
>>> my_str += 'b'
>>> type(my_str)
<class 'str'>
>>> id(my_str)
140716674658992
>>> my_str
'ab'
>>>
```

So, on line 1, we create a string object with the value `'a'` and assign it to the variable `my_str`. We verify that the object is of type `str`, we print its identity \(`140716674193840`\) and print its value.

Then, we concatenate `'b'` onto the existing string with the line `my_str += 'b'`. Now, because string objects are immutable, we cannot change a string object's value after it has been created. To concatenate, we create a new string object and assign the value `'ab'` to that object.

This behavior in Python is vital to be aware of when working with string concatenation. If you have to add and remove frequently from a string, this will be inefficient if you work with string objects directly.

**Tuples**

Tuples are an immutable container of names, where each name has an unchangeable \(immutable\) binding to an object in memory. You cannot change the bindings of the names to the objects.

```python
>>> my_tuple = ('love', [1,2,3], True)
>>> my_tuple[0]
'love'
>>> my_tuple[0] = 'laughter'
Traceback (most recent call last):
 File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>>
```

Here we created a tuple using `(` and `)` to denote the tuple literal syntax. Just like a list, tuples can contain elements of any type. Above, we've included a string, a list, and a boolean as our tuple elements. We are proving the tuple object's immutability by showing the error that occurs when trying to assign a new item to a position in the tuple.

One thing that often causes confusion surrounding the immutability of tuples in Python is demonstrated by the following behavior:

```python
>>> my_tuple[1] = [4,5,6]
Traceback (most recent call last):
 File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>> id(my_tuple[1])
140716674620864
>>> my_tuple[1][0] = 4
>>> my_tuple[1][1] = 5
>>> my_tuple[1][2] = 6
>>> my_tuple[1]
[4, 5, 6]
>>> my_tuple
('love', [4, 5, 6], True)
>>> id(my_tuple[1])
140716674620864
>>>
```

Notice that we cannot create a new list object and bind it to the name at position 1 of our tuple. This is demonstrated when `my_tuple[1] = [4,5,6]` raises a `TypeError`. However, we can assign new objects to the list that is at position 1 of our tuple? Why is that? Well, what do we know about lists in Python? Lists are mutable objects. So, we can modify a list without creating a new object. So, when we are modifying the list directly \(instead of assigning a new object\), it doesn't affect our tuple's immutability. Notice that the identity \(`140716674620864`\) of the list at `my_tuple[1]` doesn't change after replacing its three elements with `4`, `5`, and `6`.

#### Passing Objects to Functions <a id="passing-objects-to-functions"></a>

Mutable and immutable objects are not treated the same when they are passed as arguments to functions. When mutable objects are passed into a function, they are passed by reference. So, suppose you change the mutable object that was passed in as an argument. In that case, you are changing the original object as well.

**Mutable Objects as Arguments**

```python
>>> my_list = [1,2,3]
>>> def append_num_to_list(lst, num):
... lst.append(num)
...
>>> append_num_to_list(my_list, 4)
>>> my_list
[1, 2, 3, 4]
>>>
```

![https://tk-assets.lambdaschool.com/5528e90f-2784-4199-b520-a4d03adccbbc_mutable-object-passed-as-argument-to-function.gif](https://tk-assets.lambdaschool.com/5528e90f-2784-4199-b520-a4d03adccbbc_mutable-object-passed-as-argument-to-function.gif)

Notice that when `append_num_to_list` is called and `my_list` is passed in as an argument. When `my_list` is bound to `lst` in that stack frame, `lst` points to the original `my_list` in memory. The function call did not create a copy of `my_list`. This behavior is because lists are mutable objects in Python.

**Immutable Objects as Arguments**

Next, let's see how Python behaves when we pass an immutable object as an argument to a function:

```python
>>> my_string = "I am an immutable object."
>>> def concatenate_string_to_string(orig_string, string_to_add):
... return orig_string + string_to_add
...
>>> concatenate_string_to_string(my_string, " I hope!")
'I am an immutable object. I hope!'
>>> my_string
'I am an immutable object.'
>>>
```

![https://tk-assets.lambdaschool.com/3e6a1461-9853-4494-8c17-33919e641eb0_immutable-object-passed-argument-to-function.gif](https://tk-assets.lambdaschool.com/3e6a1461-9853-4494-8c17-33919e641eb0_immutable-object-passed-argument-to-function.gif)

Notice when an immutable object is passed into a function, the object is copied and bound to the parameter name. In the example above, when `my_string` is passed into `concatenate_string_to_string`, `my_string` is copied to a new object bound to the name `orig_string`.

### Challenge <a id="challenge"></a>

{% embed url="https://replit.com/@bgoonz/cs-unit-1-sprint-1-module-3-mutable-and-immutable-objects-1" %}

- [ Home](https://lambdaschool.instructure.com/courses/1575)
- [Grades](https://lambdaschool.instructure.com/courses/1575/grades)
- [Modules](https://lambdaschool.instructure.com/courses/1575/modules)

## Objective 02 - Recognize mutable and immutable objects

### Overview <a id="overview"></a>

In Python, everything is an object.

```python
>>> a = 1
>>> b = "hello"
>>> c = [1,2,3]
>>> isinstance(a, object)
True
>>> isinstance(b, object)
True
>>> isinstance(c, object)
True
>>>
```

Additionally, all objects in Python have three things:

1. Identity
2. Type
3. Value

```text
>>> a = 1
>>> # Identity
... id(a)
4483164816
>>> # Type
... type(a)
<class 'int'>
>>> # Value
... a
1
>>>
```

### Follow Along <a id="follow-along"></a>

#### Identity <a id="identity"></a>

An object's **identity** can never change once it has been created. You can think of an object's identity as its specific address in memory. In the code above, `a = 1` created a new object in memory whose identity is represented by the integer `4483164816`.

Python has an `is` operator that allows you to compare two object's identities.

```text
>>> a = 1
>>> b = 2
>>> a is b
False
>>> b = a
>>> a is b
True
>>>
```

In the code above, we first assign `1` to the variable `a`. Then, we assign `2` to the variable `b`. These are two different objects in memory and thus have different identities. We verify that they are different by using the `is` operator, which returns `False`. The line `b = a` assigns the variable `b` the object that the variable `a` is pointed to. Now, both `a` and `b` are referencing the same object in memory. We can use the `id()` function to verify that this is the case as well:

```text
>>> id(a)
4483164816
>>> id(b)
4483164816
>>>
```

#### Type <a id="type"></a>

The **type** of an object determines what are its possible values and what operations that object supports. The `type()` function will return what type an object is:

```python
>>> a = 'Hello'
>>> type(a)
<class 'str'>
>>> b = 100
>>> type(b)
<class 'int'>
>>> c = True
>>> type(c)
<class 'bool'>
>>>
```

Just like an object's identity, once an object is created, its identity can never change. It's an object's type that determines whether an object is **mutable** or **immutable.**

#### Value <a id="value"></a>

The value of some objects _can be changed_ after they are created. The value of some objects _cannot be changed_ after they are created. If the object's value can be changed, that object is considered to be **mutable** \(changeable\). If the object's value cannot be changed, that object is considered to be **immutable** \(unchangeable\).

#### Mutable Objects <a id="mutable-objects"></a>

A mutable object is an object whose value can be changed after it is created. The word mutable is defined as:

> liable to change

The following types of objects are mutable:

- list
- set
- dict
- byte array
- instances of user-defined classes

Let's look at a few examples in code:

**Lists**

```python
>>> my_list = ['laughter', 'happiness', 'love']
>>> type(my_list)
<class 'list'>
>>> my_list[2] = 'joy'
>>> my_list.append('excellent')
>>> my_list
['laughter', 'happiness', 'joy', 'excellent']
>>>
```

In the first line, we create a list object with three elements and assign it to the variable `my_list`. Then, because lists are mutable, we change `'love'` at index 2 to be `'joy'` instead. We also can grow our list by appending a new element to the list.

**Sets**

```python
>>> my_set = {'laughter', 'happiness', 'love'}
>>> type(my_set)
<class 'set'>
>>> my_set.add('happy')
>>> my_set
{'love', 'happy', 'happiness', 'laughter'}
>>> my_set.remove('happiness')
>>> my_set
{'love', 'happy', 'laughter'}
```

In the first line, we create a set object with three elements and assign it to the variable `my_set`. Because set objects are mutable, we can add `'happy'` to the set and remove `'happiness'` from the set.

**Dicts**

```python
>>> my_dict = {"first_name": "Mattieu", "last_name": "Ricard"}
>>> type(my_dict)
<class 'dict'>
>>> my_dict["location"] = "Nepal"
>>> my_dict
{'first_name': 'Mattieu', 'last_name': 'Ricard', 'location': 'Nepal'}
>>> del my_dict['location']
>>> my_dict
{'first_name': 'Mattieu', 'last_name': 'Ricard'}
```

On line one, we create a dict object that has two key-value pairs. Then, because dict objects are mutable, we add key-value pair `"location": "Nepal"`. Last, we delete that same key-value pair.

Mutable objects work great when you know you will likely need to change the size of the object as you use and interact with it. Changing mutable objects is cheap \(because you don't have to copy all existing elements to a new object\).

**Aliasing with Mutable Objects**

Below, I'm going to walk through what happens when you **alias** a mutable object. In Python, aliasing happens whenever a variable's value is assigned to another variable because variables are just names that store references to values.

Let me illustrate this with a helpful code visualizer tool called [Python Tutor \(Links to an external site.\)](http://www.pythontutor.com/):

![https://tk-assets.lambdaschool.com/ba46ee2f-6bb4-421e-8be7-cba3a55eedcf_Untitled.png](https://tk-assets.lambdaschool.com/ba46ee2f-6bb4-421e-8be7-cba3a55eedcf_Untitled.png)

On line 1, we instantiate a new list object with three elements \(`1`, `2`, and `3`\). The name `my_list_orig` is the variable that we assign the new list to.

![https://tk-assets.lambdaschool.com/23cd8845-e086-4cf6-9b50-70b37a11731b_Untitled-2.png](https://tk-assets.lambdaschool.com/23cd8845-e086-4cf6-9b50-70b37a11731b_Untitled-2.png)

Then, on line 2, we create an alias of `my_list_orig` by pointing `my_list_alias` to whatever object `my_list_orig` is pointing at. Notice in the image above that there is still only one list object. However, there are two variables in the global frame, and they are both pointing to the same object.

![https://tk-assets.lambdaschool.com/604c130d-254c-4126-87a8-49625e676ef4_Untitled-3.png](https://tk-assets.lambdaschool.com/604c130d-254c-4126-87a8-49625e676ef4_Untitled-3.png)

On line 3, we append a new element to `my_list_orig`. Notice that, because both variables are referencing the same object, even though we appended to `my_list_orig`, we also modified `my_list_alias`.

![https://tk-assets.lambdaschool.com/f1655834-f68c-4b49-95ca-93d4a1578423_Untitled-4.png](https://tk-assets.lambdaschool.com/f1655834-f68c-4b49-95ca-93d4a1578423_Untitled-4.png)

On line 4, we removed the element `1` from `my_list_orig`. Notice, just like when we added to the list, `my_list_alias` is also affected.

_This behavior is something you need to be aware of if you ever use aliasing with mutable objects in your code._

#### Immutable Objects <a id="immutable-objects"></a>

An immutable object is an object whose value cannot be changed after it is created. Immutable means _not changeable_. Anytime you try to update the value of an immutable object, a new object is created instead.

The following types are immutable:

- Numbers \(int, float, complex\)
- Strings
- Bytes
- Booleans
- Tuples

Immutable objects are useful when you want to make sure that the object you created will always maintain the same value. Immutable objects are more _expensive_ to change \(in terms of time and space complexity\) because changing the object requires making a copy of the existing object.

Let's look at a few examples:

**Numbers**

```python
>>> my_int = 1
>>> id(my_int)
4513307280
>>> type(my_int)
<class 'int'>
>>> my_int
1
>>> my_int = 2
>>> id(my_int)
4513307312
>>> type(my_int)
<class 'int'>
>>> my_int
2
>>>
```

In the code above, the first line creates a new int object, and the variable `my_int` now points at that object. You can see that this object has `int` for its type, `4513307280` for its identity \(location in memory\), and `1` for its value.

Then, we assign `2` to `my_int`which creates a whole new object and assigns it to the variable `my_int`. This object has `int` for its type, `4513307312` for its identity \(which you can see is different from the first object\), and `2` for its value.

**Strings**

Let's look at how string concatenation works in Python. Remember that str objects are immutable.

```text
>>> my_str = 'a'
>>> type(my_str)
<class 'str'>
>>> id(my_str)
140716674193840
>>> my_str
'a'
>>> my_str += 'b'
>>> type(my_str)
<class 'str'>
>>> id(my_str)
140716674658992
>>> my_str
'ab'
>>>
```

So, on line 1, we create a string object with the value `'a'` and assign it to the variable `my_str`. We verify that the object is of type `str`, we print its identity \(`140716674193840`\) and print its value.

Then, we concatenate `'b'` onto the existing string with the line `my_str += 'b'`. Now, because string objects are immutable, we cannot change a string object's value after it has been created. To concatenate, we create a new string object and assign the value `'ab'` to that object.

This behavior in Python is vital to be aware of when working with string concatenation. If you have to add and remove frequently from a string, this will be inefficient if you work with string objects directly.

**Tuples**

Tuples are an immutable container of names, where each name has an unchangeable \(immutable\) binding to an object in memory. You cannot change the bindings of the names to the objects.

```text
>>> my_tuple = ('love', [1,2,3], True)
>>> my_tuple[0]
'love'
>>> my_tuple[0] = 'laughter'
Traceback (most recent call last):
 File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>>
```

Here we created a tuple using `(` and `)` to denote the tuple literal syntax. Just like a list, tuples can contain elements of any type. Above, we've included a string, a list, and a boolean as our tuple elements. We are proving the tuple object's immutability by showing the error that occurs when trying to assign a new item to a position in the tuple.

One thing that often causes confusion surrounding the immutability of tuples in Python is demonstrated by the following behavior:

```python
>>> my_tuple[1] = [4,5,6]
Traceback (most recent call last):
 File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>> id(my_tuple[1])
140716674620864
>>> my_tuple[1][0] = 4
>>> my_tuple[1][1] = 5
>>> my_tuple[1][2] = 6
>>> my_tuple[1]
[4, 5, 6]
>>> my_tuple
('love', [4, 5, 6], True)
>>> id(my_tuple[1])
140716674620864
>>>
```

Notice that we cannot create a new list object and bind it to the name at position 1 of our tuple. This is demonstrated when `my_tuple[1] = [4,5,6]` raises a `TypeError`. However, we can assign new objects to the list that is at position 1 of our tuple? Why is that? Well, what do we know about lists in Python? Lists are mutable objects. So, we can modify a list without creating a new object. So, when we are modifying the list directly \(instead of assigning a new object\), it doesn't affect our tuple's immutability. Notice that the identity \(`140716674620864`\) of the list at `my_tuple[1]` doesn't change after replacing its three elements with `4`, `5`, and `6`.

#### Passing Objects to Functions <a id="passing-objects-to-functions"></a>

Mutable and immutable objects are not treated the same when they are passed as arguments to functions. When mutable objects are passed into a function, they are passed by reference. So, suppose you change the mutable object that was passed in as an argument. In that case, you are changing the original object as well.

**Mutable Objects as Arguments**

```python
>>> my_list = [1,2,3]
>>> def append_num_to_list(lst, num):
... lst.append(num)
...
>>> append_num_to_list(my_list, 4)
>>> my_list
[1, 2, 3, 4]
>>>
```

![https://tk-assets.lambdaschool.com/5528e90f-2784-4199-b520-a4d03adccbbc_mutable-object-passed-as-argument-to-function.gif](https://tk-assets.lambdaschool.com/5528e90f-2784-4199-b520-a4d03adccbbc_mutable-object-passed-as-argument-to-function.gif)

Notice that when `append_num_to_list` is called and `my_list` is passed in as an argument. When `my_list` is bound to `lst` in that stack frame, `lst` points to the original `my_list` in memory. The function call did not create a copy of `my_list`. This behavior is because lists are mutable objects in Python.

**Immutable Objects as Arguments**

Next, let's see how Python behaves when we pass an immutable object as an argument to a function:

```python
>>> my_string = "I am an immutable object."
>>> def concatenate_string_to_string(orig_string, string_to_add):
... return orig_string + string_to_add
...
>>> concatenate_string_to_string(my_string, " I hope!")
'I am an immutable object. I hope!'
>>> my_string
'I am an immutable object.'
>>>
```

![https://tk-assets.lambdaschool.com/3e6a1461-9853-4494-8c17-33919e641eb0_immutable-object-passed-argument-to-function.gif](https://tk-assets.lambdaschool.com/3e6a1461-9853-4494-8c17-33919e641eb0_immutable-object-passed-argument-to-function.gif)

Notice when an immutable object is passed into a function, the object is copied and bound to the parameter name. In the example above, when `my_string` is passed into `concatenate_string_to_string`, `my_string` is copied to a new object bound to the name `orig_string`.

### Chpallenge <a id="challenge"></a>

### Additional Resources <a id="additional-resources"></a>

- [Mutable vs. Immutable Objects in Python - A Visual and Hands-On Guide \(Links to an external site.\)](https://www.freecodecamp.org/news/mutable-vs-immutable-objects-python/)
- [Python Basics: Mutable vs. Immutable Objects \(Links to an external site.\)](https://towardsdatascience.com/https-towardsdatascience-com-python-basics-mutable-vs-immutable-objects-829a0cb1530a)
- [What are mutable and immutable objects in Python3? \(Links to an external site.\)](https://www.educative.io/edpresso/what-are-mutable-and-immutable-objects-in-python3)

{% embed url="https://replit.com/@bgoonz/cs-unit-1-sprint-1-module-3-mutable-and-immutable-objects-1\#main.py" %}

![](../../.gitbook/assets/image%20%284%29%20%286%29%20%285%29%20%281%29%20%286%29.png)

## Objective 03 - Compare the time complexity of different approaches to a problem using Big O notation

### Overview <a id="overview"></a>

#### What is an algorithm? <a id="what-is-an-algorithm"></a>

An algorithm is a set of instructions for accomplishing a task. Within this broad definition, we could call every piece of code an algorithm.

#### How do we measure how "good" an algorithm is? <a id="how-do-we-measure-how-good-an-algorithm-is"></a>

After coming up with a first-pass solution to a problem, we need to measure how "good" our answer is. Will it stand up to the test of millions of users? Is it fast enough that our users will be blown away by how quickly they get their results? Or will torturously slow speeds cause lag that scares them all away?

When given a choice between different algorithms, we want to choose the most efficient algorithm \(considering both _time_ and _space_ efficiency depending on our needs\).

_Note: It is common for your first solution to work with a few items or users and break as you add more. Making sure that the solutions scale is something all developers must look out for._

#### What is Big O notation? <a id="what-is-big-o-notation"></a>

We need a way to talk about efficiency \(number of operations in the worst case\) in a more general sense.

Big O notation is the language we use for describing how efficient an algorithm is.

The specific terms of Big O notation describe how fast the runtime grows \(relative to the input size\), focusing on when the input gets extremely large.

Why do we focus on the growth of runtime versus exact runtime? The actual runtime depends on the specific computer running the algorithm, so we cannot compare efficiencies that way. By focusing on the general growth, we can avoid exact runtime differences between machines and environments.

We also talk about runtime relative to the input size because we need to express our speed in terms of _something_. So we show the speed of the algorithm in terms of the input size. That way, we can see how the speed reacts as the input size grows.

We don't care about speed when the input size is small. The differences in speed are likely to be minimal when the input size is small. When the input size gets enormous, we can see the differences in efficiency between algorithms.

#### Common Big O run times <a id="common-big-o-run-times"></a>

Refer to the table below to see a list of the most common runtimes. The table is ordered from fastest to slowest.

| Classification | Description |
| :-- | :-- |
| Constant `O(1)` | The runtime is entirely unaffected by the input size. This is the ideal solution. |
| Logarithmic `O(log n)` | As the input size increases, the runtime will grow slightly slower. This is a pretty good solution. |
| Linear `O(n)` | As the input size increases, the runtime will grow at the same rate. This is a pretty good solution. |
| Polynomial `O(n^c)` | As the input size increases, the runtime will grow at a faster rate. This might work for small inputs but is not a scalable solution. |
| Exponential `O(c^n)` | As the input size increases, the runtime will grow at a much faster rate. This solution is inefficient. |
| Factorial `O(n!)` | As the input size increases, the runtime will grow astronomically, even with relatively small inputs. This solution is exceptionally inefficient. |

Besides the table, it's also essential to look at the curves of these different runtimes.

![https://tk-assets.lambdaschool.com/1b27038a-098f-46e5-bc20-03be9a3480b9_68747470733a2f2f746b2d6173736574732e6c616d6264617363686f6f6c2e636f6d2f65343335376235662d316436332d343463642d623861302d3439353732363061653965635f556e7469746c6564312e706e67.png](https://tk-assets.lambdaschool.com/1b27038a-098f-46e5-bc20-03be9a3480b9_68747470733a2f2f746b2d6173736574732e6c616d6264617363686f6f6c2e636f6d2f65343335376235662d316436332d343463642d623861302d3439353732363061653965635f556e7469746c6564312e706e67.png)

Again, `n` represents the size of the data, and on the chart above, `N` represents the number of operations. This visualization should help illustrate why `O(1)` or `O(log n)` is the most desirable.

_Note: Big O only matters for large data sets. An `O(n^3)` solution is adequate, as long as you can guarantee that your datasets will always be small._

#### A few examples <a id="a-few-examples"></a>

Let's look at a few different examples of Python functions that print something to the output. For each of these, the input will be `items`.

**Constant Time O\(1\)**

```python
def print_only_one_thing(list_of_things):
    print(list_of_things[0])
```

Why is this constant time? Because no matter how large or small the input is \(1,000,000 or 10\), the number of computations within the function is the same.

**Linear Time O\(n\)**

```python
def print_list(list_of_things):
    for thing in list_of_things:
        print(thing)
```

Why is this classified as linear time? Because the speed of the algorithm increases at the same rate as the input size. If `list_of_things` has ten items, then the function will print ten times. If it has 10,000 items, then the function will print 10,000 times.

**Quadratic Time O\(n^2\)**

```python
def print_permutations(list_of_things):
    for thing_one in list_of_things:
        for thing_two in list_of_things:
            print(thing_one, thing_two)
```

Why is this quadratic time? The clue is the nested for loops. These nested for loops mean that for each item in `list_of_things` \(the outer loop\), we iterate through every item in `list_of_things` \(the inner loop\). For an input size of `n`, we have to print `n` \* `n` times or `n^2` times.

#### What are we supposed to do with the constants? <a id="what-are-we-supposed-to-do-with-the-constants"></a>

What if we had a function like this?

```python
def do_a_bunch_of_stuff(list_of_things): # O(1 + n/2 + 2000)
    last_idx = len(list_of_things) - 1
    print(list_of_things[last_idx]) # O(1)

    middle_idx = len(list_of_things) / 2
    idx = 0
    while idx < middle_idx: # O(n/2)
        print(list_of_things[idx])
        idx = idx + 1

    for num in range(2000): # O(2000)
        print(num)
```

`print(items[last_idx])` is constant time because it doesn't change as the input changes. So, that portion of the function is `O(1)`.

The while loop that prints up to the middle index is 1/2 of whatever the input size is; we can say that portion of the function is `O(n/2)`.

The final portion will run 2000 times, no matter the size of the input.

So, putting it all together, we could say that the efficiency is `O(1 + n/2 + 2000)`. However, we don't say this. We describe this function as having linear time `O(n)` because we drop all of the constants. Why do we cut all of the constants? Because as the input size gets huge, adding 2000 or dividing by 2 has minimal effect on the algorithm's performance.

#### Most significant term <a id="most-significant-term"></a>

Let's consider the following function:

```python
def do_different_things_in_the_same_function(list_of_things): # O(n + n^2)
    # print all each item in the list
    for thing in list_of_things: # O(n)
        print(thing)

    # print every possible pair of things in the list
    for thing_one in list_of_things: # O(n * n) = O(n^2)
        for thing_two in list_of_things:
            print(thing_one, thing_two)
```

We could describe this function as `O(n + n^2)`; however, we only need to keep the essential term, `n^2`, so this would be `O(n^2)`. Why can we do this? Because as the input size \(`n`\) gets larger and larger, the less significant terms have less effect, and only the most significant term is important.

#### Big O represents the worst-case <a id="big-o-represents-the-worst-case"></a>

Let's consider the following function:

```python
def find_thing(list_of_things, thing_we_are_trying_to_find):
    for thing in list_of_things:
        if thing == thing_we_are_trying_to_find:
            return True

    return False
```

What would the result be if it just so happens that the `thing_we_are_trying_to_find` in `list_of_things` is the very first item in the list? The function would only have to look at one item in `list_of_things` before returning. In this case, it would be `O(1)`. But, when we talk about a function's complexity, we usually assume the "worst case." What would the "worst-case" be? It would be if it were the last item in `list_of_things`. In that case, we would have to look through all the `list_of_things`, and that complexity would be `O(n)`.

_Note: When talking about runtime complexity in casual conversation, engineers often blur the distinction between big theta and big O notation. In reality, these are two distinct ways of describing an algorithm. Big theta gives both an upper and a lower bound for the running time. Big O only provides an upper bound. Refer to the following articles for a deeper dive:_ [_Big-Theta notation \(Links to an external site.\)_](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-theta-notation) _and_ [_Big-O notation \(Links to an external site.\)_](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-o-notation)_._

#### Do constants ever matter? <a id="do-constants-ever-matter"></a>

Complexity analysis with Big O notation is a valuable tool. It would be best if you got in the habit of thinking about the efficiency of the algorithms you write and use in your code. However, just because two algorithms have the same Big O notation doesn't mean they are equal.

Imagine you have a script that takes 1 hour to run. By improving the function, you can divide that runtime by six, and now it only takes 10 minutes to run. With Big O notation, `O(n)` and `O(n/6)` can both be written as `O(n)`, but that doesn't mean it isn't worth optimizing the script to save 50 minutes every time the script runs.

That being said, there is a term you should become familiar with: **premature optimization** \([xkcd: Optimization \(Links to an external site.\)](https://xkcd.com/1691/)\). Sometimes, you can sacrifice readability or spend too much time on something to improve its efficiency. Depending on the situation, it could be that having a finished product to iterate on is more important than maximally efficient code. It is your job as a developer to know when making your code more efficient is necessary. You will always be making calculated tradeoffs between runtime, memory, development time, readability, and maintainability. It takes time to develop the wisdom to strike the right balance depending on the scenario.

### Follow Along <a id="follow-along"></a>

Let's look at a few code snippets and classify their runtime complexity using Big O notation.

```python
def foo(n):
    i = 1
    while i < n:
        print(i)
        i *= 2
```

First, let's think about what the above function is doing. It's printing `i`…but `i` is not being incremented by 1, as we usually see. It's _doubled_ every time we run the loop. So, for example, if `n = 100`, then the final result would be…

```text
1
2
4
8
16
32
64
```

Or if `n = 10`, then we would print…

```text
1
2
4
8
```

We can use the process of elimination to narrow down which runtime classification makes sense for this algorithm. The number of times the loop runs seems to vary based on the value of `n`, so this is NOT O\(1\).

From the above examples, we can also see that the number of times the loop runs is increasing _slower_ than the input size is increasing. `n` must be _doubled_ before the loop will run one more time. We can eliminate classifications such as `O(n log n)`, `O(n^c)`, `O(c^n)`, and `O(n!)`.

The only two options left at this point are logarithmic and linear. Since the two growth rates \(input, the number of operations\) are not the same, **this function must run in logarithmic time!**

### Challenge <a id="challenge"></a>

{% embed url="https://replit.com/@bgoonz/cs-unit-1-sprint-1-module-2-time-complexity-1" %}

![](../../.gitbook/assets/image%20%284%29%20%286%29%20%285%29%20%281%29%20%286%29.png)
