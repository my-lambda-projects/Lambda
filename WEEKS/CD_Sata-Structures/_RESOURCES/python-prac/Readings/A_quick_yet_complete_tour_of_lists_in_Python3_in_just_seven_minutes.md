# A quick yet complete tour of lists in Python3 in just seven minutes

> by PALAKOLLU SRI MANIKANTA A quick yet complete tour of lists in Python3 in just seven minutesPhoto by Emma Matthews on UnsplashPython lists are not like arrays. They are bit different. When it comes to dealing with array’s we talk about a collection of homogeneous data elements. This is

by PALAKOLLU SRI MANIKANTA

![](https://cdn-media-1.freecodecamp.org/images/lwhO3Rgrh-Z4dbxN9PlzUHNAnHJKm9TC3YaS)

Photo by [Emma Matthews](https://unsplash.com/@emmamatthews?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)

Python lists are not like arrays. They are bit different. When it comes to dealing with array’s we talk about a collection of homogeneous data elements. This is not true in case of a list in python. Python List can store a heterogeneous collection of elements. This feature will help developers and programmers to work with lists in a more flexible manner. A List in python is one of the most powerful inbuilt data structures.

Lists in python can store Integers, Floating values, Strings, Boolean values, and complex values as well.

#### How to create a List in python

We can create a list in python in two ways

1.  By declaring a variable with an empty square brace i.e \[\]
2.  By using list().

**Example**

    # Here first I'm creating a my todo list which is used to store my to-do activities.

    myTODOList = []

    # The above line will create a list object for me# I'm creating a another list which will store my general information.

    myGeneralInfo = list()

    # The above line will also create a list object for me# Getting the types of list objects

    print(type(myTODOList))print(type(myGeneralInfo))

**Output**

![](https://cdn-media-1.freecodecamp.org/images/7qXRlOZ6ZFueYQAoN2P3q-CV0ardhjMRNyEc)

Output for the above few lines of code.

It’s amazing at this point you are able to create a new list object with most frequently used methods. Now we will move forward on how we can add new elements to our list and many more things. Let’s get started.

#### How to add Data to our list?

First of all, I would like to introduce the concept of Mutability. Mutability means the ability to change its behavior. Python lists are mutable in nature. We can add or delete elements from the list. This is one of the biggest advantages that attract programmers to work with lists when compared to other inbuilt data structures.

We can add elements to a list in two ways:

1.  By using append()
2.  By using insert()

**By using append()**

With the help of the append method, we are able to add one element at a time. This method will help us to add elements at the end of the list only.

> The syntax for the append function is —

> listName.append(item/element)

    # Adding Elements to the lists

    myTODOList.append('Wake up Early Morning')myTODOList.append('Go to Gym')myTODOList.append('Play Some Games')myTODOList.append('Get ready to go the college')myTODOList.append('Go to library')

    # Printing the entire list elements

    print(myTODOList)

**Output**

![](https://cdn-media-1.freecodecamp.org/images/MjgtAQob6hxMqOY126H3fOOEkwzA-Yg6jN5a)

Output for the above line of code.

**By using insert()**

This insert method is used to add the elements at a specified position in the given list.

> The syntax for the insert function is —

> listName.insert(position, item/element)

insert() uses two parameters — position and list item. The position is where the element is needed to be kept in the list. These positions are generally called as indexes. Usually, the list index in python starts from 0. (i.e the first element index is 0 and the second element is 1 and the third element index is 2 and so on). From this, we can conclude that —

> A list of n elements will have at most an index number of n-1 i.e A list with 5 elements will have maximum index value of 4.

**Example**

    # Adding Elements to our list with the help of insert()

    myGeneralInfo.insert(0, 'Paid the Library Fee')myGeneralInfo.insert(1, 12000)myGeneralInfo.insert(2, True)myGeneralInfo.insert(3, 14+12j)myGeneralInfo.insert(4, 3.141521)

    # Printing the myGeneralInfo list information

    print(myGeneralInfo)

**Output**

![](https://cdn-media-1.freecodecamp.org/images/18F43mmcZJKN3VZoBzfNSDdUgFmOtgBsFfcc)

Output for the above few lines of code.

> myGeneralInfo is filled with some random information for illustration purposes only.

#### How to Access the List Elements

We can access the list of elements by using the following two ways:

1.  By using an index operator.
2.  By using slice operator

**By using an index operator**

We can directly access our list elements with the help of the index operator.

**Example**

    # Acessing the certain values from the list

    print(myTODOList[1])print(myTODOList[3])print(myTODOList[4])

**Output**

![](https://cdn-media-1.freecodecamp.org/images/WuIkO4Zsn3kDVrgF4u-Q746ADPjTcKbQE09d)

Output for the above program

**By using Slice Operator**

The slice operator is one of the most commonly used operators to access the list elements effectively. The syntax for the slice operator is:

listName\[start: stop: step\]

start — It indicates the index where the slice has to start. The default value is 0.

stop — It indicates the index where the slice has to end. The default value is the maximum allowed index of list i.e. length of the list.

step — Increment value. The default value is 1.

**Example**

    # Getting the information using slice operator

    print(myTODOList[0:3])  # we don't need to specify the step value.print(myTODOList[2:4:1])print(myTODOList[0:4:2])

**Output**

![](https://cdn-media-1.freecodecamp.org/images/xkDOJNvzDYC4j0nSGGKAayqg2D10l5zjncW5)

Output for the above few lines of code.

Python lists are iterable objects. For any iterable object in python, we can write a for loop to print out all the data.

**Example**

    # Iterating over the list

    for item in myGeneralInfo:      print(item)

![](https://cdn-media-1.freecodecamp.org/images/dEPU2NUaTN78qTCftaX8AaTtjmCQUACG5n2-)

Output for the above lines of code.

#### How to remove an element from the list

We can remove the list elements with the following two ways:

1.  By using remove()
2.  By using pop()

**By using remove()**

remove() is used to remove the element that is specified to it. The syntax for remove() is:

listName.remove(item/element)

    # Deleting the element from the list

    myGeneralInfo.remove(12000)myGeneralInfo.remove('Paid the Library Fee')

    # printing the result after deleting the elements

    print(myGeneralInfo)

![](https://cdn-media-1.freecodecamp.org/images/Yb8jVI4YWDj-MbWPHqUSqHKq0n0GIqxv3eN6)

After deleting the list elements the output would be as follows

**By using pop()**

It is an iterator method which is used to remove the single (or) multiple elements at a time. It deletes the elements from the back side. The syntax for the pop() method is:

listName.pop()

    # printing the list items before deleting

    print('My TODO List Elements: ',myTODOList)print('My General list Elements: ',myGeneralInfo)

    # Deleting the list elements using pop()

    myTODOList.pop()myTODOList.pop()

    # Deleting the list elements completely

    for item in range(len(myGeneralInfo)):       myGeneralInfo.pop()

    # printing the results

    print('My TODO List Elements: ',myTODOList)print('My General list Elements: ',myGeneralInfo)

![](https://cdn-media-1.freecodecamp.org/images/lpkTpT0NkF2ZrpzJaM61ykItaqtEfylrymIC)

This is the way we can delete list elements using pop()

> In the above program, we used the len() within the for loop. len() is used to give the length of the list i.e. number of elements present in the list.

#### Various Attributes and Functions on List Object

python dir() function is used to give the set of inbuilt attributes and methods that are associated with it.

**Example**

    # Printing all the attributes and functions on the list object

    print(dir(myTODOList))

**Output**

![](https://cdn-media-1.freecodecamp.org/images/lySJCcD9YPuSHj0xrkOd1QqM3aABCge1iCRs)

Various Attributes and Methods on the list object

#### Various List Methods and their use:

1.  **append() —** It will add an element to the end of the list.
2.  **clear() —** It is used to remove all items from the list.
3.  **copy() —** It is used to return another copy of the list.
4.  **count() —** It is used to return the count of the number of items passed as an argument.
5.  **extend() —** It will add all elements of a list to another list.
6.  **index() —** It is used to return the index of the first matched item.
7.  **insert() —** It is used to insert an item at the defined index.
8.  **pop() —** It is used to remove and return an element at the given index.
9.  **remove() —** It is used to remove an item from the list.
10. **reverse() —** It is used to reverse the order of items in the list.
11. **sort() —** It is used to sort items in a list in ascending order.

#### When to use List Data Structure?

If you want to store multiple data objects, insertion order must be preserved. If you want to store duplicate values as well, then this data structure will be more helpful to perform such operations.

I covered pretty much everything that is required to perform any kind of operation on the list data structure.

**Hope this helped you learn about Lists in python in a quick and easy way.**

**If you liked this article, please click on the clap and leave me feedback. Please share with your friends.**

Learn to code for free. freeCodeCamp’s open source curriculum has helped more than 40,000 people get jobs as developers. [Get started](https://www.freecodecamp.org/learn)

[Source](https://www.freecodecamp.org/news/a-quick-yet-complete-tour-of-lists-in-python3-in-just-seven-minutes-437e615110d0/)
