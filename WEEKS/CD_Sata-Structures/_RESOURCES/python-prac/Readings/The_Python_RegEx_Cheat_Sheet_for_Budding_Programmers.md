# The Python RegEx Cheat Sheet for Budding Programmers

> Use this list of Python regular expressions so that you can get better at using this versatile programming language.

print()Display the result of a commandx=“Hello world”  
print(x)

output: Hello world

input()Collect inputs from usersprint(input(“what is your name?”))

output: what is your name?

type()Find the type of a variablex=“Regular expressions”  
type(x)

output:

len()Find the number of items in a variablelen(\[1, 2, 3\])

output: 3

\\Escape a character that changes the intent of a line of codeprint(“I want you to add\\”\\"")

output: I want you to add""

\\nBreak a string character to start on the next lineprint(“This is a line \\n This is a second line”)

output:  
This is a line  
This is a second line

def function_name(parameter):  
commandsInitiate a function with an optional parameterdef yourName(x):  
print(x+1)lambdaCall an anonymous functionadd_3_to = lambda y: y+3  
print(add_3_to(4))

output: 7

returnReturn a result from a functiondef yourName(x):  
return x+1classCreate a Python objectclass myClass:  
def myFunc(x):def \_\_init\_\_Initialize the attrributes of a classclass myClass:  
def \_\_init\_\_(self, attributes…)"\_\_init\_\_.pySave a file containing a module so that it’s read successfully in another Python fileRename a file containing a module as:

"\_\_init\_\_.py

int()Convert a variable to integerint(1.234)

output: 1

str()Convert a variable to stringstr(1.234)

output: ‘1.234’

float()Convert a variable to floatfloat(23)

output: 23.0

dict(Counter())Convert a list or a tupple into a dictionary after sorting with a Python built-in Counterfrom collections import Counter  
dict(Counter(\[1,1,2,1,2,3,3,4\]))

output: {1: 3, 2: 2, 3: 2, 4: 1}

round()Round up the output of an operation to the nearest whole numberround(23.445)

output: 23

round(operation or number, decimal places)Round up the output of an operation to a specific number of decimal placesround(23.4568, 2)

output: 23.46

if:Initiate a conditional statementif 2&lt;3:  
print(“Two is smaller”)elif:Make a counterstatement when the if statement is Falseif 2&lt;3:  
print(“Two is smaller”)  
elif 2==3:  
print(“Go on”)else:Make a final counterstatement if other conditions are Falseif 2&lt;3:  
print(“Two is smaller”)  
elif 2==3:  
print(“Go on”)  
else:  
print(“Three is greater”)continueIgnore a condition and execute the rest of the loopa=\[1, 4, -10, 6, 8\]  
for b in a:  
if b&lt;=0:  
continue  
print(b)

output:  
1  
4  
6  
8

breakTerminate the flow of a loop with a given conditiona=\[1, 4, -10, 6, 8\]  
for b in a:  
if b&gt;=6:  
break  
print(b)

output:  
1  
4  
-10

passIgnore a set of prior instructionsfor b in a:  
passtry, except  
Try a block of code, else, raise a defined exceptiontry:  
print(a)

except:  
print(“An error occured!”)

output: An error occured!

finallyExecute a final code when the try and the except blocks failtry:  
print(a)

except:  
print(d)  
finally:  
print(“You can’t print an undefined variable”)

output: You can’t print an undefined variable

raise Exception()Raise an exception that stops the command when execution isn’t possiblea=7+2  
if a&lt;10:  
raise Exception(“Oh! You didn’t get a score of 10”)import xImport a whole module or libraryimport mathfrom x import yImport a library x from a file, or a class yfrom scipy.stats import modeasCustomize an expression to your preferred nameimport pandas as pdinCheck if a value is present in a variablex=\[1, 4, 6, 7\]  
if 5 in x:  
print(“There is a five”)  
else:  
print(“There is no five”)

output: There is no five

isCheck if two variables refer to a single elementx=\[1, 4, 6, 7\]  
x=b  
print(x is b)  
TrueNoneDeclare a null valuex=None&lt;Check if one value is lesser than another5&lt;10

output: True

&gt;Check if one value is more than another5&gt;10

output: False

&lt;=Check if a value is lesser or equal to another2\*2&lt;=3

output: False

&gt;=Check if a value is greater or equal to another2\*2&gt;=3

output: True

"==Check if a value is exactly equal to the other3==4

ouput: False

!=Ascertain that a value is not equal to the other3!=4

ouput: True

import reImport Python’s built-in regular expressionsimport re  
re.findall(“strings”, variable)a|bCheck if either of two elements are present in a stringimport re  
someText=“Hello regular expression”  
a=re.findall(“regular|Hello”, someText)  
print(a)

output: \[‘Hello’, ‘regular’\]

string<span class="math inline"><span class="math inline"><span class="math inline">$Check if a variable ends with a set of stringsimport re someText="Hello regular expression" a=re.findall("expression$</span></span></span>", someText)

output: \[‘expression’\]

^stringCheck if a variable starts with a set of stringsimport re  
someText=“Hello regular expression”  
a=re.findall(“^Hello”, someText)  
print(a)

output: \[‘Hello’\]

string.index()Check the index position of a string charactera= “Hello World”  
a.index(‘H’)

output: 0

string.capitalize()Capitalize the first character in a set of stringsa= “Hello World”  
a.capitalize()

output: ‘Hello world’

string.swapcase()Print the first letter of each word as a lower case and the others as upper casea= “Hello World”  
a.swapcase()

output:  
‘hELLO wORLD’

string.lower()Convert all the strings to a lowercasea= “Hello World”  
a.lower()

output: ‘hello world’

string.upper()Convert all strings to uppercasea= “Hello World”  
a.upper()

output: ‘HELLO WORLD’

string.startswith()Check if a string starts with a particular charactera= “Hello World”  
a.startswith(‘a’)

output: False

string.endswith()Check if a string ends with a particular charactera= “Hello World”  
a.endswith(‘d’)

output: True

string.split()Separate each word into a lista= “Hello World”  
a.split()

output: \[‘Hello’, ‘world’\]

strings {}’.format()Display an output as stringa=3+4  
print(“The answer is {}”.format(a))

output: The answer is 7

is not NoneCheck if the value of a variable is not emptydef checknull(a):  
if a is not None:  
return “its full!”  
else:  
return “its empty!”x%yFind the remainder (modulus) of a division9%4

output: 1

x//yFind the quotient of a division9//4

output: 2

“=Assign a value to a variablea={1:5, 3:4}”+Add elements together\[“a two”\] + \[“a one”\]

output: \[‘a two’, ‘a one’\]

1+3

output=4

"-Find the difference between a set of numbers3-4

output=-1

"\*Find the product of a set of numbers3\*4

output:12

a+=xAdd x to variable a without assigning its value to a new variablea=2  
a+=3

output: 5

a-=xSubsract x from variable a without assigning it to a new variablea=3  
a-=2

output: 1

a\*=xFind the product of variable a and x without assigning the resullt to a new variablea=\[1, 3, 4\]  
a\*=2

output: \[1, 3, 4, 1, 3, 4\]

x\*\*yRaise base x to power y2\*\*3

output: 8

pow(x, y)Raise x to the power of ypow(2, 3)

output: 8

abs(x)Convert a negative integer to its absolute valueabs(-5)

output: 5

x\*\*(1/nth)Find the nth root of a number8\*\*(1/3)

output: 2

a=b=c=d=xAssign the same value to multiple variablesa=b=c=d=“Hello world”x, y = y, xSwap variablesx = \[1, 2\]  
y = 3  
x, y = y, x  
print(x, y)

output:  
3 \[1, 2\]

forLoop through the elements in a variablea=\[1, 3, 5\]  
for b in a:  
print(b, “x”, “2”, “=”, b\*2)

output:  
1 x 2 = 2  
3 x 2 = 6  
5 x 2 = 10

whileKeep looping through a variable, as far as a particular condition remains True a=4  
b=2  
while b&lt;=a:  
print(b, “is lesser than”, a)  
b+=1

output:  
2 is lesser than 4  
3 is lesser than 4  
4 is lesser than 4

range()Create a range of positive integers between x and yx=range(4)  
print(x)  
range(0, 4)  
for b in x:  
print(b)

output:  
0  
1  
2  
3

sum()Iterate through the elements in a listprint(sum(\[1, 2, 3\]))

output:6

sum(list, start)Return the sum of a list with an added elementprint(sum(\[1, 2, 3\], 3))

output: 9

\[\]Make a list of elementsx=\[‘a’, 3, 5, ‘h’, \[1, 3, 3\], {‘d’:3}\]()Create a tupple—tupples are immutablex=(1, 2, ‘g’, 5){}Create a dictionarya={‘x’:6, ‘y’:8}x\[a:b\]Slice through a listx=\[1, 3, 5, 6\]  
x\[0:2\]

output: \[1, 3\]

x\[key\]Get the value of a key in dictionary xa={‘x’:6, ‘y’:8}  
print(a\[‘x’\])

output: 6

x.append()Add a list of values to an empty listx=\[1\]  
x.append(\[1,2,3\])  
print(x)

output: \[1, \[1,2,3\]\]

x.extend()Add a list of values to continue an existing list without necessarily creating a nested listx=\[1,2\]  
x.extend(\[3,4,6,2\])  
print(x)

output:  
\[1, 2, 3, 4, 6, 2\]

del(x\[a:b\])Delete an item completely from a list at a specific indexx=\[1,2,3,5\]  
del(x\[0:2\])  
print(x)

output: \[2,3,5\]

del(x\[key\])Delete a key and a value completely from a dictionary at a specific indexy={1:3, 2:5, 4:6, 8:2}  
del(y\[1\], y\[8\])  
print(y)

output= {2:5, 4:6}

dict.pop()Pop out the value of a key and remove it from a dictionary at a specific indexa={1:3, 2:4, 5:6}  
a.pop(1)

output: 3

dict.popitem()Pop out the last item from a dictionary and delete ita={1:2, 4:8, 3:5}  
a.popitem()

output: (3, 5)  
print(a)  
output: {1:2, 4:8}

list.pop()Pop out a given index from a list and remove it from a lista=\[1, 3, 2, 4, 1, 6, 6, 4\]  
a.pop(-2)

output: 6  
print(a)  
output: \[1, 3, 2, 4, 1, 6, 4\]

clear()Empty the elements of a list or a dictionaryx=\[1, 3, 5\]  
x.clear()  
print(x)

output: \[\]

remove()Remove an item from a listx=\[1, 5, 6, 7\]  
x.remove(1)

output: \[5, 6, 7\]

insert()Insert elements into a llistx=\[3, 5, 6\]  
x.insert(1, 4)  
print(x)

output: \[1, 4, 3, 5, 6\]

sort(reverse=condition)Reverse the direction of the elements in a listx=\[1, 3, 5, 6\]  
x.sort(reverse=True)  
print(x)

output: \[6, 5, 3, 1\]

update()Update a dictionary by changing its first element and adding any other item to its endx={1:3, 5:6}  
x.update({1:4, 8:7, 4:4})  
print(x)

output: {1: 4, 5: 6, 8: 7, 4: 4}

keys()Show all the keys in a dictionarya={1:2, 4:8}  
a.keys()

output: dict_keys(\[1, 4\])

values()Show all the values in a dictionarya={1:2, 4:8}  
a.values()

output: dict_values(\[2, 8\])

items()Display the keys and the values in a dictionarya={1:2, 4:8}  
a.items()

output: dict_items(\[(1, 2), (4, 8)\])

get(key)Get the value of an item in a dictionary by its keya={1:2, 4:8, 3:5}  
a.get(1)

output: 2

setdefault(key)Return the original value of an element to a dictionarya.setdefault(2)f={\*\*a, \*\*b}Merge two dictionariesa={‘x’:6, ‘y’:8}  
b={‘c’:5, ‘d’:3}  
f={\*\*a, \*\*y}  
print(f)

output:{‘x’: 6, ‘y’: 8, ‘c’: 5, ‘d’: 3}

remove()Remove the first matching value of an element from a list without minding its indexa=\[1, 3, 2, 4, 4, 1, 6, 6, 4\]  
a.remove(4)  
print(a)

output: \[1, 3, 2, 4, 1, 6, 6, 4\]

memoryview(x)Access the internal buffers of an objecta=memoryview(object)bytes()Convert a memory buffer protocol into bytesbytes(a\[0:2\])bytearray()Return an array of bytesbytearray(object)\#Write a single line of comment or prevent a line of code from being executed\# Python regex cheat sheet""" “““Write a multi-line comment”““The Python regex cheat sheet is good for beginners  
It’s equally a great refresher for experts”““**Command Line**pip install packageInstall an online librarypip install pandasvirtualenv nameUse virtaulenv to create a virtual environmentvirtualenv myprojectmkvirtualenv nameUse virtual environment wrapper to create virtual environmentmkvirtualenv myprojectpython file.pyRun the commands in a Python file”python my_file.pypip freezeList out all the installed packages in a virtual environmentpip freezepip freeze &gt; somefilesCopy all installed libraries in a single filepip freeze &gt; requirements.txtwhereFind the installation path of Pythonwhere python–versionCheck the version of a packagepython –version.exeRun a Python shellpython.exewith open(file, ‘w’)Write to an existing file and overwrite its existing contentwith open(‘regex.txt’, ‘w’) as wf:  
wf.write(“Hello World!”)with open(file, ‘r’)Open a file as read-onlywith open(‘regex.txt’, ‘r’) as rf:  
print(rf.read()with open(file, ‘a’)Write to a file without overwriting its existing contentwith open(‘regex.txt’, ‘a’) as af:  
af.write(“\\nHello Yes!”)file.closeClose a file if it’s not in useaf=open(‘regex.txt’)  
af.closeexitExit the Python shellexit()

[Source](https://www.makeuseof.com/python-regex-cheat-sheet/)
