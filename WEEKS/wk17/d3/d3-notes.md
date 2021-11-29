# Dictonaries

#### In python dictonaries are hash tables.

```py
['__class__',
 '__contains__',
 '__delattr__',
 '__delitem__',
 '__dir__',
 '__doc__',
 '__eq__',
 '__format__',
 '__ge__',
 '__getattribute__',
 '__getitem__',
 '__gt__',
 '__hash__',
 '__init__',
 '__init_subclass__',
 '__iter__',
 '__le__',
 '__len__',
 '__lt__',
 '__ne__',
 '__new__',
 '__reduce__',
 '__reduce_ex__',
 '__repr__',
 '__setattr__',
 '__setitem__',
 '__sizeof__',
 '__str__',
 '__subclasshook__',
 'clear',
 'copy',
 'fromkeys',
 'get',
 'items',
 'keys',
 'pop',
 'popitem',
 'setdefault',
 'update',
 'values']
```

# Under the hood : Python Dictionary

> Dictionary has always been a developer's go to tool because of the unique relation between the key an...

![Cover image for Under the hood : Python Dictionary](https://res.cloudinary.com/practicaldev/image/fetch/s--57ZfvZGb--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/nmsazv0iyivndokrfvi2.jpg)

Dictionary has always been a developer's go to tool because of the unique relation between the key and value pairs. So whenever there is any need of capturing frequencies, unique objects etc. in any algorithm, dictionary is the first thing that pops up to our head.

Let's dig deep into how python dictionary works under the hood.

To explain it better I'll try to relate it with a phone-book.

Dictionary is implemented by using a data structure - hash table. The hash table again is a combination of two arrays - one for storing the indexes and the other for storing the key, values.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--r-Hk50vQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://d33wubrfki0l68.cloudfront.net/3d138e7af1264833715e47967d2dbfa8c696fb7e/ee634/images/hash-tables/hash-table-cpython-structure-high-level.svg)

## [](#adding-a-new-key)Adding a new key:

Initially a hash-table is always provided with a size of 8, which increases with the increase in num of keys.

To calculate the index of the key, a hash function is used. However if we calculate the hash of 'a' in a 64 bit system, it would return a value of 12416037344. So to avoid creation of a hash-table with such a gigantic size, a mask is used in a bit-wise & operation along with the hash result.

For a hash table of size 'n' the mask used is (2^n - 1).  
This ensures that for the key, the index is never exceeding the size of the existing hash table.

### [](#conflict)_Conflict:_

Let's take our phone-book example and think of a hash table with a size of 26 each for each letter of the alphabet.

Let's save a contact by the name 'Ajay' and the hashing algorithm assigns it to the index of 5.

After a few month, a new intern 'Ashok' joins the company, and we've to save his number. The algorithm again assigns the same index 5 to Ashok, but Ajay's contact info is already present there in key, value form.

This kind of a situation is called a _conflict._

Now let's think of different ways to resolve this conflict. One approach would be to use linked lists at each index of the hash table and the each individual nodes of the linked list represent a key, value pair. Such an approach would be a good one when we have a limited amount of data, however if the data size is huge, then we won't be able to offer a read operation within O\[1\].

The solution that CPython uses for conflict resolution is _re-sizing._

### [](#resizing)_Resizing:_

Whenever a new key is added to a dict, CPython checks if the 2/3rd of the existing size is filled or not. This ratio is called the _**load factor**_, and it is an indication of whether re-sizing is required or not. If the load factor is 2/3 then hash table needs a re-sizing

How much new space is to be added is calculated by the num_of_occupied spaces \* 3. However the size should be a power of 2, hence the next highest power of 2 is chosen.

Initaly it starts with a size of 8, let's say 6 out of 8 spaces get occupied, then it should allocate a further more of 18 (6\*3) but it increases the total size of the hash table to 32.

Accordingly the indexes for the hash table are adjusted.

## [](#deleting-a-key)Deleting a key:

Similarly when an element is deleted or say multiple elements are deleted, the hash-table size undergoes a shrinkage. However delete item operation doesn’t trigger an array resize. If the number of used slots is much less that the total number of slots. However, when a key/value pair is added, the need for resize is based on the number of used slots + dummy slots so it can shrink the array too.

#### In python == is not strict equality

#### strict equality is denoted with keyword 'is' as in: 10 is 10
