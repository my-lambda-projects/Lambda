# d2 time and space complexity

## d2 time and space complexity <a id="d2-time-and-space-complexity"></a>

![d2%20time%20and%20space%20complexity%206819124b2903488b88df7a787c087d78/Untitled.png](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/Export-5a8469f7-6621-48b1-8af3-a81a310f47c5/Python-Data-Structures-Unit%201da9a5d55db844f4b62aff6fd2b4d1ce/Data%20Structures%20e89a3005a7284e57b559e672d7f9cb24/Week%2018%203a1ee4ebecb843f3aaaa09b7b30ba18c/d2%20time%20and%20space%20complexity%206819124b2903488b88df7a787c087d78/Untitled.png)

## Objective 01 - Recall the time and space complexity, the strengths and weaknesses, and the common uses of a hash table <a id="objective-01-recall-the-time-and-space-complexity-the-strengths-and-weaknesses-and-the-common-uses-of-a-hash-table"></a>

### **Overview** <a id="overview"></a>

Hash tables are also called hash maps, maps, unordered maps, or dictionaries. A hash table is a structure that maps keys to values. This makes them extremely efficient for lookups because if you have the key, retrieving the associated value is a constant-time operation.

### **Follow Along** <a id="follow-along"></a>

#### **Time and Space Complexity** <a id="time-and-space-complexity"></a>

#### **Lookup** <a id="lookup"></a>

Hash tables have fast lookups \(`O(1)`\) on _average._ However, in the worst case, they have slow \(`O(n)`\) lookups. The slow lookups happen when there is a hash collision \(two different keys hash to the same index\).

#### **Insert** <a id="insert"></a>

Hash tables have fast insertions \(`O(1)`\) on _average_. However, in the worst case, they have slow \(`O(n)`\) insertions. Just like with the lookups, the worst case occurs due to hash collisions.

#### **Delete** <a id="delete"></a>

Hash tables have fast deletes \(`O(1)`\) on _average_. However, in the worst case, they have slow \(`O(n)`\) deletions. Just like with lookups and insertions, the worst case occurs due to hash collisions.

#### **Space** <a id="space"></a>

The space complexity of a hash table is linear \(`O(n)`\). Each key-value pair in the hash table will take up space in memory.

#### **Strengths** <a id="strengths"></a>

The main reason why hash tables are great is that they have constant-time \(`O(1)`\) lookup operations in the average case. That makes them great to use in any situation where you will be conducting many lookup operations. The second reason they are great is that they allow you to use any hashable object as a key. This means they can be used in many different scenarios where you want to map one object \(the key\) to another object \(the value\).

#### **Weaknesses** <a id="weaknesses"></a>

One weakness of the hash table is that the mapping goes only one way. So, if you know the key, it's incredibly efficient to retrieve the mapped value to that key. However, if you know the value and want to find the key that is mapped to that value, it is inefficient. Another weakness is that if your hash function produces lots of collisions, the hash table's time complexity gets worse and worse. This is because the underlying linked lists are inefficient for lookups.

#### **What About Hash Collisions?** <a id="what-about-hash-collisions"></a>

A hash collision is when our hash function returns the same index given two different keys. Theoretically, there is no perfect hash function, though some are better than others. Thus, any hash table implementation has to have a strategy to deal with the scenario when two different keys hash to the same index. You can't just have the hash table overwrite the already existing value.

The most common strategy for dealing with hash collisions is not storing the values directly at an index of the hash table's array. Instead, the array index stores a pointer to a linked list. Each node in the linked list stores a key, value, and a pointer to the next item in the linked list.

The above is just one of the ways to deal with hash collisions. Hopefully, you can now see why all of our hash table operations become `O(n)` in the worst case. What is the worst case? The worst case is when all of the keys collide at the same index in our hash table. If we have ten items in our hash table, all ten items are stored in one linked list at the same index of our array. That means that our hash table has the same efficiency as a linked list in the worst case.

### **Challenge** <a id="challenge"></a>

1. In your own words, explain how and why the time complexity of hash table operations degrades to `O(n)` in the worst case.

### **Additional Resources** <a id="additional-resources"></a>

- [https://www.geeksforgeeks.org/hashing-data-structure/ \(Links to an external site.\)](https://www.geeksforgeeks.org/hashing-data-structure/)

![d2%20time%20and%20space%20complexity%206819124b2903488b88df7a787c087d78/Untitled.png](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/Export-5a8469f7-6621-48b1-8af3-a81a310f47c5/Python-Data-Structures-Unit%201da9a5d55db844f4b62aff6fd2b4d1ce/Data%20Structures%20e89a3005a7284e57b559e672d7f9cb24/Week%2018%203a1ee4ebecb843f3aaaa09b7b30ba18c/d2%20time%20and%20space%20complexity%206819124b2903488b88df7a787c087d78/Untitled.png)

## Objective 02 - Describe and implement a hash function <a id="objective-02-describe-and-implement-a-hash-function"></a>

### **Overview** <a id="overview-1"></a>

Hashing functions take an input \(usually a string\) and return an integer as the output. Let's say we needed to store five colors in our hash table. Currently, we have an empty table that looks like this:

![https://tk-assets.lambdaschool.com/add0f486-f742-4b70-9885-88c6938237f8_Untitled.png](https://tk-assets.lambdaschool.com/add0f486-f742-4b70-9885-88c6938237f8_Untitled.png)

Now, I need to assign an index given the name of a color. Our hash function will take the name of a color and convert it into an index.

![https://tk-assets.lambdaschool.com/16439e40-5ec9-4242-b5c5-07584bc665ca_S5-M1-O1-Hash-Table-Animation.gif](https://tk-assets.lambdaschool.com/16439e40-5ec9-4242-b5c5-07584bc665ca_S5-M1-O1-Hash-Table-Animation.gif)

So, hash functions convert the strings into indexes, and then we store the given string into the computed index of an array.

> Hash Function + Array = Hash Table

Now that we know what a hash table is let's dive deeper into creating a hash function.

### **Follow Along** <a id="follow-along-1"></a>

To convert a string into an integer, hashing functions operate on the individual characters that make up the string.

Let's use what we know to create a hashing function in Python.

In Python, we can encode strings into their bytes representation with the `.encode()` method \(read more [here \(Links to an external site.\)](https://docs.python.org/3/howto/unicode.html#converting-to-bytes)\). Once encoded, an integer represents each character.

Let's do this with the string `hello`

```text
bytes_representation = "hello".encode()

for byte in bytes_representation:
    print(byte)

### Print Output
### 104
### 101
### 108
### 108
### 111
```

Now that we’ve converted our string into a series of integers, we can manipulate those integers somehow. For simplicity’s sake, we can use a simple accumulator pattern to get a sum of all the integer values.

```text
bytes_representation = "hello".encode()

sum = 0
for byte in bytes_representation:
    sum += byte

print(sum)

### Print Output
### 532
```

Great! We turned a string into a number. Now, let's generalize this into a function.

```text
def my_hashing_func(str):
    bytes_representation = str.encode()

    sum = 0
    for byte in bytes_representation:
        sum += byte

    return sum
```

We aren't done yet 🤪. As shown earlier, `hello` returns `532`. But, what if our hash table only has ten slots? We have to make 532 a number less than 10 😱.

Remember the modulo operator `%`? We can use that in our hashing function to ensure that the integer the function returns is within a specific range.

```text
def my_hashing_func(str, table_size):
    bytes_representation = str.encode()

    sum = 0
    for byte in bytes_representation:
        sum += byte

    return sum % table_size
```

![d2%20time%20and%20space%20complexity%206819124b2903488b88df7a787c087d78/Untitled.png](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/Export-5a8469f7-6621-48b1-8af3-a81a310f47c5/Python-Data-Structures-Unit%201da9a5d55db844f4b62aff6fd2b4d1ce/Data%20Structures%20e89a3005a7284e57b559e672d7f9cb24/Week%2018%203a1ee4ebecb843f3aaaa09b7b30ba18c/d2%20time%20and%20space%20complexity%206819124b2903488b88df7a787c087d78/Untitled.png)

## Objective 02 - Describe and implement a hash function <a id="objective-02-describe-and-implement-a-hash-function-1"></a>

### **Overview** <a id="overview-2"></a>

Hashing functions take an input \(usually a string\) and return an integer as the output. Let's say we needed to store five colors in our hash table. Currently, we have an empty table that looks like this:

![https://tk-assets.lambdaschool.com/add0f486-f742-4b70-9885-88c6938237f8_Untitled.png](https://tk-assets.lambdaschool.com/add0f486-f742-4b70-9885-88c6938237f8_Untitled.png)

Now, I need to assign an index given the name of a color. Our hash function will take the name of a color and convert it into an index.

![https://tk-assets.lambdaschool.com/16439e40-5ec9-4242-b5c5-07584bc665ca_S5-M1-O1-Hash-Table-Animation.gif](https://tk-assets.lambdaschool.com/16439e40-5ec9-4242-b5c5-07584bc665ca_S5-M1-O1-Hash-Table-Animation.gif)

So, hash functions convert the strings into indexes, and then we store the given string into the computed index of an array.

> Hash Function + Array = Hash Table

Now that we know what a hash table is let's dive deeper into creating a hash function.

### **Follow Along** <a id="follow-along-2"></a>

To convert a string into an integer, hashing functions operate on the individual characters that make up the string.

Let's use what we know to create a hashing function in Python.

In Python, we can encode strings into their bytes representation with the `.encode()` method \(read more [here \(Links to an external site.\)](https://docs.python.org/3/howto/unicode.html#converting-to-bytes)\). Once encoded, an integer represents each character.

Let's do this with the string `hello`

```text
bytes_representation = "hello".encode()

for byte in bytes_representation:
    print(byte)

### Print Output
### 104
### 101
### 108
### 108
### 111
```

Now that we’ve converted our string into a series of integers, we can manipulate those integers somehow. For simplicity’s sake, we can use a simple accumulator pattern to get a sum of all the integer values.

```text
bytes_representation = "hello".encode()

sum = 0
for byte in bytes_representation:
    sum += byte

print(sum)

### Print Output
### 532
```

Great! We turned a string into a number. Now, let's generalize this into a function.

```text
def my_hashing_func(str):
    bytes_representation = str.encode()

    sum = 0
    for byte in bytes_representation:
        sum += byte

    return sum
```

We aren't done yet 🤪. As shown earlier, `hello` returns `532`. But, what if our hash table only has ten slots? We have to make 532 a number less than 10 😱.

Remember the modulo operator `%`? We can use that in our hashing function to ensure that the integer the function returns is within a specific range.

```text
def my_hashing_func(str, table_size):
    bytes_representation = str.encode()

    sum = 0
    for byte in bytes_representation:
        sum += byte

    return sum % table_size
```

[https://replit.com/@bgoonz/cs-unit-1-sprint-4-module-1-hash-function\#main.py](https://replit.com/@bgoonz/cs-unit-1-sprint-4-module-1-hash-function#main.py)

![d2%20time%20and%20space%20complexity%206819124b2903488b88df7a787c087d78/Untitled.png](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/Export-5a8469f7-6621-48b1-8af3-a81a310f47c5/Python-Data-Structures-Unit%201da9a5d55db844f4b62aff6fd2b4d1ce/Data%20Structures%20e89a3005a7284e57b559e672d7f9cb24/Week%2018%203a1ee4ebecb843f3aaaa09b7b30ba18c/d2%20time%20and%20space%20complexity%206819124b2903488b88df7a787c087d78/Untitled.png)

## Objective 03 - Implement a user-defined HashTable class that allows basic operations <a id="objective-03-implement-a-user-defined-hashtable-class-that-allows-basic-operations"></a>

### **Overview** <a id="overview-3"></a>

We define a hash table as an empty array and hash function as a function that takes a value and converts it into an array index where you will store that value. Let's put the two together. Let's implement a `HashTable` class where we can:

- Insert values into a hash table
- Retrieve values from a hash table
- Delete values from a hash table

Let's start with the insert function. For an insert, I need to insert a value with an associated key. Let's store the instructors at Lambda and where they live. We want to store:

- `("Parth", "California")`
- `("Beej", "Oregon")`
- `("Dustin", "Utah")`
- `("Ryan", "Utah")`

Here's what our `HashTable` class looks like right now:

```text
class HashTable:
    """
    A hash table with `capacity` buckets
    that accepts string keys
    """

    def __init__(self, capacity):
        self.capacity = capacity  # Number of buckets in the hash table
        self.storage = [None] * capacity
        self.item_count = 0

    def get_num_slots(self):
        """
        Return the length of the list you're using to hold the hash table data. (Not the number of items stored in the hash table,
        but the number of slots in the main list.)
        One of the tests relies on this.
        """
        return len(self.storage)

    def djb2(self, key):
        """
        DJB2 hash, 32-bit
        """
        # Cast the key to a string and get bytes
        str_key = str(key).encode()

        # Start from an arbitrary large prime
        hash_value = 5381

        # Bit-shift and sum value for each character
        for b in str_key:
            hash_value = ((hash_value << 5) + hash_value) + b
            hash_value &= 0xffffffff  # DJB2 is a 32-bit hash, only keep 32 bits

        return hash_value

    def hash_index(self, key):
        """
        Take an arbitrary key and return a valid integer index within the hash table's storage capacity.
        """
        return self.djb2(key) % self.capacity

    def put(self, key, value):
        """
        Store the value with the given key.
        """

    def delete(self, key):
        """
        Remove the value stored with the given key.
        Print a warning if the key is not found.
        """

    def get(self, key):
        """
        Retrieve the value stored with the given key.
        Returns None if the key is not found.
        """
```

Let's break this down a little bit. Our `init` function takes in the length of a hash table and creates an empty array. Our `hash_index` function takes a key and computes and index using the famous `djb2` hash function. Let's implement the other functions \(`put`, `delete`, `get`\).

### **Follow Along** <a id="follow-along-3"></a>

#### **The `put` Method** <a id="the-put-method"></a>

Let's create our `put` function. Before we code, let's break down what needs to happen:

- Given a `key` and a `value`, insert the respective `value` into a hash table array using the hashed `key` to determine the storage location index.

Let's think about what we need to do:

- Hash the `key` into an index using the hash function
- Put the `value` into that index

You might be thinking, "What if two keys hash to the same index?" That's a great question, and we will worry about that later. It's a nifty solution 🎉. But for now, let's worry about hashing a key and storing a value.

First, let's call the hash function and store the return value in `index`:

```text
def put(self, key, value):
    """
    Store the value with the given key.
    """
    index = self.hash_index(key)
```

Next, let's insert the value at that index:

```text
def put(self, key, value):
    """
    Store the value with the given key.
    """
    index = self.hash_index(key)
    self.storage[index] = value
    return
```

There we go! Given a key, we hashed it and inserted a value. Again, we will worry about colliding indices later 😀.

#### **The `delete` Method** <a id="the-delete-method"></a>

Next, let's write our `delete` method. What does this method need to do? We can think about it as the inverse of the `put` method that we just defined. The function will receive a `key` as its input, then pass that `key` through the hash function to get the index where the hash table's value needs to be deleted.

Let's start by getting the index by passing the `key` through the hashing function:

```text
def delete(self, key):
    """
    Remove the value stored with the given key.
    """
    index = self.hash_index(key)
```

Next, we need to delete the value from that index in our storage by setting it to `None`. Remember, we aren't dealing with collisions in this example. If we had to deal with collisions, this would be more complex.

```text
def delete(self, key):
    """
    Remove the value stored with the given key.
    """
    index = self.hash_index(key)
    self.storage[index] = None
```

#### **The `get` Method** <a id="the-get-method"></a>

The last method we need to deal with is our `get` method. `get` is a simple method that retrieves the `value` stored at a specific `key`. The function needs to receive a `key` as an input, pass that `key` through the hashing function to find the index where the value is stored, and then return the `value` at that index.

Let's start by getting the index from the `key`:

```text
def get(self, key):
    """
    Retrieve the value stored with the given key.
    Returns None if the key is not found.
    """
    index = self.hash_index(key)
```

Next, we need to return the value that is stored at the `index`.

```text
def get(self, key):
    """
    Retrieve the value stored with the given key.
    Returns None if the key is not found.
    """
    index = self.hash_index(key)
    return self.storage[index]
```

### **Challenge** <a id="challenge-1"></a>

[https://replit.com/@bgoonz/cs-unit-1-sprint-4-module-1-hash-table-class-implementation\#main.py](https://replit.com/@bgoonz/cs-unit-1-sprint-4-module-1-hash-table-class-implementation#main.py)

![d2%20time%20and%20space%20complexity%206819124b2903488b88df7a787c087d78/Untitled.png](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/Export-5a8469f7-6621-48b1-8af3-a81a310f47c5/Python-Data-Structures-Unit%201da9a5d55db844f4b62aff6fd2b4d1ce/Data%20Structures%20e89a3005a7284e57b559e672d7f9cb24/Week%2018%203a1ee4ebecb843f3aaaa09b7b30ba18c/d2%20time%20and%20space%20complexity%206819124b2903488b88df7a787c087d78/Untitled.png)

![d2%20time%20and%20space%20complexity%206819124b2903488b88df7a787c087d78/Untitled.png](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/Export-5a8469f7-6621-48b1-8af3-a81a310f47c5/Python-Data-Structures-Unit%201da9a5d55db844f4b62aff6fd2b4d1ce/Data%20Structures%20e89a3005a7284e57b559e672d7f9cb24/Week%2018%203a1ee4ebecb843f3aaaa09b7b30ba18c/d2%20time%20and%20space%20complexity%206819124b2903488b88df7a787c087d78/Untitled.png)

![d2%20time%20and%20space%20complexity%206819124b2903488b88df7a787c087d78/Untitled.png](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/Export-5a8469f7-6621-48b1-8af3-a81a310f47c5/Python-Data-Structures-Unit%201da9a5d55db844f4b62aff6fd2b4d1ce/Data%20Structures%20e89a3005a7284e57b559e672d7f9cb24/Week%2018%203a1ee4ebecb843f3aaaa09b7b30ba18c/d2%20time%20and%20space%20complexity%206819124b2903488b88df7a787c087d78/Untitled.png)
