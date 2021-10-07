# Hash Table Use Cases

#### Associative arrays

Main article: [Associative array](https://en.wikipedia.org/wiki/Associative_array)

Hash tables are commonly used to implement many types of in-memory tables. They are used to implement [associative arrays](https://en.wikipedia.org/wiki/Associative_array) \(arrays whose indices are arbitrary [strings](https://en.wikipedia.org/wiki/String_%28computing%29) or other complicated objects\), especially in [interpreted](https://en.wikipedia.org/wiki/Interpreter_%28computing%29) [programming languages](https://en.wikipedia.org/wiki/Programming_language) like [Ruby](https://en.wikipedia.org/wiki/Ruby_%28programming_language%29), [Python](https://en.wikipedia.org/wiki/Python_%28programming_language%29), and [PHP](https://en.wikipedia.org/wiki/PHP).

When storing a new item into a [multimap](https://en.wikipedia.org/wiki/Multimap) and a hash collision occurs, the multimap unconditionally stores both items.

When storing a new item into a typical associative array and a hash collision occurs, but the actual keys themselves are different, the associative array likewise stores both items. However, if the key of the new item exactly matches the key of an old item, the associative array typically erases the old item and overwrites it with the new item, so every item in the table has a unique key.

#### Database indexing

Hash tables may also be used as [disk](https://en.wikipedia.org/wiki/Disk_drive)-based data structures and [database indices](https://en.wikipedia.org/wiki/Index_%28database%29) \(such as in [dbm](https://en.wikipedia.org/wiki/DBM_%28computing%29)\) although [B-trees](https://en.wikipedia.org/wiki/B-tree) are more popular in these applications. In multi-node database systems, hash tables are commonly used to distribute rows amongst nodes, reducing network traffic for [hash joins](https://en.wikipedia.org/wiki/Hash_join).

#### Caches\[[edit](https://en.wikipedia.org/w/index.php?title=Hash_table&action=edit&section=32)\]

Main article: [Cache \(computing\)](https://en.wikipedia.org/wiki/Cache_%28computing%29)

Hash tables can be used to implement [caches](https://en.wikipedia.org/wiki/Cache_%28computing%29), auxiliary data tables that are used to speed up the access to data that is primarily stored in slower media. In this application, hash collisions can be handled by discarding one of the two colliding entries—usually erasing the old item that is currently stored in the table and overwriting it with the new item, so every item in the table has a unique hash value.

#### Sets\[[edit](https://en.wikipedia.org/w/index.php?title=Hash_table&action=edit&section=33)\]

Besides recovering the entry that has a given key, many hash table implementations can also tell whether such an entry exists or not.

Those structures can therefore be used to implement a [set data structure](https://en.wikipedia.org/wiki/Set_data_structure),[\[43\]](https://en.wikipedia.org/wiki/Hash_table#cite_note-43) which merely records whether a given key belongs to a specified set of keys. In this case, the structure can be simplified by eliminating all parts that have to do with the entry values. Hashing can be used to implement both static and dynamic sets.

#### Object representation

Several dynamic languages, such as [Perl](https://en.wikipedia.org/wiki/Perl), [Python](https://en.wikipedia.org/wiki/Python_%28programming_language%29), [JavaScript](https://en.wikipedia.org/wiki/JavaScript), [Lua](https://en.wikipedia.org/wiki/Lua_%28programming_language%29), and [Ruby](https://en.wikipedia.org/wiki/Ruby_%28programming_language%29), use hash tables to implement [objects](https://en.wikipedia.org/wiki/Object_%28computer_science%29). In this representation, the keys are the names of the members and methods of the object, and the values are pointers to the corresponding member or method.

#### Unique data representation

Main article: [String interning](https://en.wikipedia.org/wiki/String_interning)

Hash tables can be used by some programs to avoid creating multiple character strings with the same contents. For that purpose, all strings in use by the program are stored in a single string pool implemented as a hash table, which is checked whenever a new string has to be created. This technique was introduced in [Lisp](https://en.wikipedia.org/wiki/Lisp_%28programming_language%29) interpreters under the name [hash consing](https://en.wikipedia.org/wiki/Hash_consing), and can be used with many other kinds of data \([expression trees](https://en.wikipedia.org/wiki/Expression_tree) in a [symbolic algebra](https://en.wikipedia.org/wiki/Computer_algebra_system) system, records in a database, files in a file system, binary decision diagrams, etc.\).

#### Transposition table

Main article: [Transposition table](https://en.wikipedia.org/wiki/Transposition_table)

A [transposition table](https://en.wikipedia.org/wiki/Transposition_table) to a complex Hash Table which stores information about each section that has been searched.[\[44\]](https://en.wikipedia.org/wiki/Hash_table#cite_note-44)
