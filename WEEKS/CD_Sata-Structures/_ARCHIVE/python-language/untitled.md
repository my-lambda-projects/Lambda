# Collections In Python

## What Are Collections In Python? <a id="cad0"></a>

Collections in python are basically container data types, namely lists, sets, tuples, dictionary. They have different characteristics based on the declaration and usage.

- A list is declared in square brackets, it is mutable, stores duplicate values and elements can be accessed using indexes.
- A tuple is ordered and immutable in nature, although duplicate entries can be there inside a tuple.
- A set is unordered and declared in square brackets. It is not indexed and does not have duplicate entries as well.
- A dictionary has key-value pairs and is mutable in nature. We use square brackets to declare a dictionary.

These are the python’s general-purpose built-in container data types. But as we all know, python always has a little something extra to offer. It comes with a python module named collections which has specialized data structures.

## Specialized Collection Data Structures <a id="96d4"></a>

Collections module in python implements specialized data structures which provide an alternative to python’s built-in container data types. Following are the specialized data structures in the collections module.

1. namedtuple\( \)
2. deque
3. Chainmap
4. Counter
5. OrderedDict
6. defaultdict
7. UserDict
8. UserList
9. UserString

### namedtuple\( \) <a id="01d2"></a>

It returns a tuple with a named entry, which means there will be a name assigned to each value in the tuple. It overcomes the problem of accessing the elements using the index values. With namedtuple\( \) it becomes easier to access these values since you do not have to remember the index values to get specific elements.

**How It Works?**

First of all, you must import the collections module, it does not require installation.

```text
from collections import namedtuple
```

Look at the following code to understand how you can use namedtuple.

```text
a = namedtuple('courses' , 'name , tech')
s = a('data science' , 'python')
print(s)

#the output will be courses(name='python' , tech='python')
```

**How To Create A namedtuple Using A List?**

```text
s._make(['data science' , 'python'])
#the output will be same as before.
```

### deque <a id="bd3a"></a>

deque pronounced as ‘deck’ is an optimized list to perform insertion and deletion easily.

**How it works?**

```text
#creating a deque
from collections import deque

a = ['d' , 'u' , 'r' , 'e' , 'k']
a1 = deque(a)
print(a1)
#the output will be deque([ 'd' , 'u' , 'r' , 'e' , 'k' ])
```

Now let's take a look at how we will insert and remove items from deque.

```text
a1.append('a')
print(a1)
# the output will be deque([ 'd' , 'u' , 'r' , 'e' , 'k' , 'a' ])
a1.appendleft('e')
print(a1)
# the output will be deque(['e' , 'd' , 'u' , 'r' , 'e' , 'k' , 'a' ])
```

As should be obvious, inserting a component is enhanced utilizing deque, also you can remove components as well.

```text
a1.pop()
print(a1)
#the output will be deque([ 'e' , 'd' , 'u' , 'r' , 'e' , 'k' ])
a1.popleft()
print(a1)
#the output will be deque([ 'd' , 'u' , 'r' , 'e' , 'k' ])
```

Similar to the built-in data types, there are several other operations that we can perform on a deque. Like counting elements or clearing the deque etc.

### ChainMap <a id="505e"></a>

It is a dictionary-like class which is able to make a single view of multiple mappings. It basically returns a list of several other dictionaries. Suppose you have two dictionaries with several key-value pairs, in this case, ChainMap will make a single list with both the dictionaries in it.

**How it works?**

```text
from collections import ChainMap
a = { 1: 'edureka' , 2: 'python'}
b = {3: 'data science' , 4: 'Machine learning'}
c = ChainMap(a,b)
print(c)
#the output will be ChainMap[{1: 'edureka' , 2: 'python'} , {3: 'data science' , 4: 'Machine learning'}]
```

To access or insert elements we use the keys as an index. But to add a new dictionary in the ChainMap we use the following approach.

```text
a1 = { 5: 'AI' , 6: 'neural networks'}
c1 = c.new_child(a1)
print(c1)
#the output will be ChainMap[{1: 'edureka' , 2: 'python'} , {3: 'data science' , 4: 'Machine learning'}, { 5: 'AI' , 6: 'neural networks'}]
```

### Counter <a id="fe17"></a>

It is a dictionary subclass which is used to count hashable objects.

**How it works?**

```text
from collections import Counter
a = [1,1,1,1,2,3,3,4,3,3,4]
c = Counter(a)
print(c)
#the output will be Counter = ({1:4 , 2:1 , 3:4 , 4:2})
```

In addition to the operations, you can perform on a dictionary Counter has 3 more operations that we can perform.

1. element function — It returns a list containing all the elements in the Counter.
2. Most_common\( \) — It returns a sorted list with the count of each element in the Counter.
3. Subtract\( \) — It takes an iterable object as an argument and deducts the count of the elements in the Counter.

### OrderedDict <a id="a09b"></a>

It is a dictionary subclass which remembers the order in which the entries were added. Basically, even if you change the value of the key, the position will not be changed because of the order in which it was inserted in the dictionary.

**How it works?**

```text
from collections import OrderedDict
od = OrderedDict()
od[1] = 'e'
od[2] = 'd'
od[3] = 'u'
od[4] = 'r'
od[5] = 'e'
od[6] = 'k'
od[7] = 'a'
print(od)
#the output will be OrderedDict[(1 , 'e'), (2 , 'd') , (3 , 'u'), (4 , 'r'), (5 , 'e'), (6 , 'k'), (7 , 'a')]
```

It does not matter what value gets inserted in the dictionary, the OrderedDict remembers the order in which it was inserted and gets the output accordingly. Even if we change the value of the key. Let's say, if we change the key-value 4 to 8, the order will not change in the output.

### defaultdict <a id="dda1"></a>

It is a dictionary subclass which calls a factory function to supply missing values. In general, it does not throw any errors when a missing key value is called in a dictionary.

**How it works?**

```text
from collections import defaultdict
d = defaultdict(int)
#we have to specify a type as well.
d[1] = 'edureka'
d[2] = 'python'
print(d[3])
#it will give the output as 0 instead of keyerror.
```

### UserDict <a id="9a4f"></a>

This class acts as a wrapper around dictionary objects. The need for this class came from the necessity to subclass directly from dict. It becomes easier to work with this class as the underlying dictionary becomes an attribute.

```text
class collections.UserDict([initialdata])
```

This class simulates a dictionary. The content of the instance are kept in a regular dictionary which can be accessed with the ‘data’ attribute of the class UserDict. The reference of initial data is not kept, for it to be used for other purposes.

### UserList <a id="ab43"></a>

This class acts like a wrapper around the list-objects. It is a useful base class for other lists like classes which can inherit from them and override the existing methods or even add fewer new ones as well.

The need for this class came from the necessity to subclass directly from the list. It becomes easier to work with this class as the underlying list becomes an attribute.

```text
class collections.UserList([list])
```

It is the class that simulates a list. The contents of the instance are kept in a customary list. The sub-classes of the list are relied upon to offer a constructor which can be called with either no or one contention.
