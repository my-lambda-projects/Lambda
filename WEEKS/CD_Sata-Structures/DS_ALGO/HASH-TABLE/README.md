# CSEU2-HashTables-gp
Hash Tables Guided Project Repo for CSEU2

## Raw Arrays
What is an array and how does it work?
* Stores a sequence of elements
* Each element must be the same data type
* Occupies a contiguous block of memory
* Can access access data in constant time with this equation: memory_address = starting_address + index * size_of_data_type
&arr + 3 * size_of_data_type => int => 4 bytes
`arr[3] === (&arr + 3 * 4)` O(1)

## Python lists (Dynamic Arrays)
* Stores a sequesnce of references
* Each element can be of varying type
* its pointers / refs occupies a contiguous block of memory
* data is held in the heap for the most part
* Omicron (worst case) access of a list is O(n) but averages out to O(1)

['s', 'o', 'm', 'e', ' ', ]




