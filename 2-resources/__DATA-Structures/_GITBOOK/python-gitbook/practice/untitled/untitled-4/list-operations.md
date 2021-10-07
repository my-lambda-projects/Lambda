# List Operations

### Syntax of list

The List is the same as arrays irrespective it can store different data types in it. We can access the list by using the start and end range which can be altered by using custom step function as the third argument.

```text
#Syntax : list[ start : end : step ]
```

Let’s define a variable named myList and declare a list of numbers from 1 to 9 in it.

```text
myList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
#index    0  1  2  3  4  5  6  7  8
#        -9 -8 -7 -6 -5 -4 -3 -2 -1
```

### List Operations

#### 1. List Slicing

List Slicing means accessing the particular element by index or slice or cut a particular range of elements from the [List](https://docs.python.org/3/tutorial/datastructures.html).

_**Read =&gt;**_ [_**Create and write MetaData to a file – Python**_](https://codezup.com/create-write-metadata-file-python/)

```text
print('Original List:',myList)
print('First Element:',myList[0]) #Prints the first element of the list or 0th index of the list
print('Element at 3rd Index position:',myList[2]) #Prints the 3rd element of the list
print('Elements from 0th Index to 4th Index:',myList[0: 5]) #Prints elements of the list from 0th index to 4th index. IT DOESN'T INCLUDE THE LAST INDEX
print('Element at -7th Index:',myList[-7]) #Prints the -7th or 3rd element of the list
```

#### 2. Append Element to List

```text
#To append an element to a list
myList.append(10)
print('Append:',myList)
```

#### 3. Index Element

```text
#To find the index of a particular element
print('Index of element \'6\':',myList.index(6)) #returns index of element '6'
```

#### 4. Sort List

```text
#To sort the list
myList.sort()
print("myList : ",myList)
```

#### 5. Pop Last Element

```text
#To pop last element
print('Poped Element:',myList.pop())
```

#### 6. Remove Element

```text
#To remove a particular element from the list BY NAME
myList.remove(6)
print('After removing \'6\':',myList)
```

#### 7. Insert Element

```text
#To insert an element at a specified Index
myList.insert(5, 6)
print('Inserting \'6\' at 5th index:',myList)
```

#### 8. Count Element

```text
#To count number of occurences of a element in the list
print('No of Occurences of \'1\':',myList.count(1))
```

#### 9. Extend List

```text
#To extend a list that is insert multiple elemets at once at the end of the list
myList.extend([11,0])
print('Extending list:',myList)
```

#### 10. Reverse List

```text
#To reverse a list
myList.reverse()
print('Reversed list:',myList)
```

**Source Code**

```text
#Syntax: list[start: end: step]

myList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
#index    0  1  2  3  4  5  6  7  8
#        -9 -8 -7 -6 -5 -4 -3 -2 -1

#List Slicing
print('Original List:',myList)
print('First Element:',myList[0]) #Prints the first element of the list or 0th element of the list
print('Element at 2nd Index position:',myList[2]) #Prints the 2nd element of the list
print('Elements from 0th Index to 4th Index:',myList[0: 5]) #Prints elements of the list from 0th index to 4th index. IT DOESN'T INCLUDE THE LAST INDEX
print('Element at -7th Index:',myList[-7]) #Prints the -7th or 3rd element of the list

#To append an element to a list
myList.append(10)
print('Append:',myList)

#To find the index of a particular element
print('Index of element \'6\':',myList.index(6)) #returns index of element '6'

#To sort the list
myList.sort()

#To pop last element
print('Poped Element:',myList.pop())

#To remove a particular element from the lsit BY NAME
myList.remove(6)
print('After removing \'6\':',myList)

#To insert an element at a specified Index
myList.insert(5, 6)
print('Inserting \'6\' at 5th index:',myList)

#To count number of occurences of a element in the list
print('No of Occurences of \'1\':',myList.count(1))

#To extend a list that is insert multiple elemets at once at the end of the list
myList.extend([11,0])
print('Extending list:',myList)

#To reverse a list
myList.reverse()
print('Reversed list:',myList)
```

**Output**

![List Operations in Python Output](https://i0.wp.com/codezup.com/wp-content/uploads/2019/12/List-Operations-in-Python-Output.png?resize=665%2C311&ssl=1)
