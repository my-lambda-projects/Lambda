# Introduction to Ruby
## Why Learn Ruby?
* It has learned/stolen a ton from the languages that came before it. 
* It's elegant and easy to learn
* It doesn't focus on making code as short as possible, it cares about readability
* It has a huge community behind it - documentation, tutorials, etc.
* RAILS!
Ruby is a well designed object oriented language.  It is easy to read and stresses the DRY (Don't Repeat Yourself) principle.  Since many of the method names and the ruby syntax itself is so much like english, it is an ideal language to start with.

## Objectives
 * Ruby docs
 * Variables and assignments
  - Strings
  - Symbols
  - Fixnum, Float
 * Input and Output
 * Arrays
 * Booleans

## My First Ruby App - basic Hello World
* Everyone let's make a new folder for our ruby exercises:
	* ``mkdir ruby_exercises ``
* Make a new ruby file
	* ``subl ex1.rb``
* Add this to the file: 
	* ``puts 'hello world'``
	* ``puts 'my name is Bryan'``
* Now let's run our code.  Execute it with:
	* ``ruby ex1.rb``
* Ok great, our first program!  Let's add a comment and then run our code:
	* 	``#this code won't run!``
* Now let's do something different
	* ``puts '2 + 2'``
* Oh now!  That's not what we want.  How can we get it to evaluate the expression?
	* ``puts 2+ 2``
* So what's the difference?  When we use quotes, we are making a **string**.  It's text and isn't evaluated.

##Let's talk about numbers and math!
So let's do some more math besides just ``2 + 2``

* To play around with some math expressions, we're going to use something called **IRB**.  It allows us to execute short bits of Ruby code without saving it to a file and running it in the terminal.
* In IRB we can evaluate simple expressions:

```
puts "This is IRB!"
5
1000009 
```

So we have numbers!  We can do some operations with those numbers:

```
2+2
46-100
10*20
81/9
1/3 # notice what happens when we run this.
```

* We run into a problem!  That shouldn't be 0.  So what's going on?
* **Integers **are numbers without decimal points
* **Floating-Point Numbers** (floats) are numbers with decimal points

These expressions follow the order of operations.  So we can do something like:
``10 * (25 - 1)``

## EXERCISE TIME!
Write a program that outputs the number of minutes in a decade
``puts 60 * 24 * (365 * 10 + 2)``

## So let's go back to Strings
* Strings are basically groups of letters.  Things like:
	* `Ruby is awesome`
* As you've seen already we use `puts` to print things
* String Arithmetic.  
	*	You can sort of add 2 strings
		* `puts 'I like' + 'ice cream'`
	* We can also multiply them
		* puts "Hello World" * 100
	* Make sure we know the difference between numbers and digits:
	
		```
		puts 2 * 5
		puts '2' * 5
		puts '2 * 5'
		```
		
What if we want to print out the string "You're awesome"

``puts 'You\'re awesome'``

Ok, so what if we want to type the '\\' character like in 'Up\Down'

```
puts "up\\down"
puts "This should go on a \n new line"
```


## Booleans
Booleans can only have 2 values.  TRUE or FALSE

```
100 > 1
60 < 20
```
## VARIABLES
So far, we've learned about data types, but we can't do anything with these values. Variables allow us to store values and use them later.  Here's a really simple example.

```
puts 'you can say that again'
puts 'you can say that again'
# We can use a variable to help us out here
#Variables have 2 parts - NAME and VALUE
my_string = 'you can say that again'
puts my_string
puts my_string
```
So we're storing a value in the computer's memory for later use.  You can think of it as  my_string is pointing to 'you can say that again'

Of course variables can point to any data type.  So let's try another example:

```
score_1 = 99.5
score_2 = 80
average = (score_1 + score_2)/2
**#what happens if we do this:**

puts  "The average test score is: " + average

It doens't work, so we need string interpolation!
puts "The average test score is #{average}"
```
**String Interpolation**

When naming variables, most Ruby programmers use **snake_case**

### Code Along
We are going to make a simple app that asks for your first name and greets you:
```
name = gets.chomp
puts "Hey there, #{name}"
```

Now on your own, let's adapt it so that it asks for our middle and last name as well.


## Some More String Methods

[RUBY DOCS](http://www.ruby-doc.org/)

```
first_name = "Tim"
last_name = "Garcia"

# This is an example of String concatentation
# full name will be "Tim Garcia"
full_name = first_name + " " + last_name

# This is an example of String interpolation
full_name = "#{first_name} #{last_name}"

# Returns the length of the string
full_name.length
# Also returns the length of the string literal
"Tim Garcia".length

# Returns full name but all characters in lower case.
# This does not save any changes to full_name iteself
full_name.downcase

# This will still print "Tim Garcia"
puts full_name

# Saves the downcased value of the string to full_name. 
full_name.downcase!

# This will print "tim garcia", because of the call to downcase!
puts full_name

# String access.  full_name is once again Tim Garcia
full_name[0] = 'T'
full_name[4] = 'G'

# Will print 'a' to STDOUT.  'a' is the last character in the full_name String
puts full_name[-1] 
```

#### Exercise
Let's add on to our greeter program.  Ask the user what city and state they live in.  Output the capitalized city name and all upercase state name.  Explore the Ruby docs to find out how to capitalize only the first letter.

**Code Along**
We'll make a simple app that asks the user how old they are.  It will then tell them how many seconds they have lived.

```
puts "How old are you?"
age = gets.chomp
age = age.to_i
seconds = age * 365 * 24 * 60 *60
puts "You've been alive for #{seconds} seconds"
```


#ARRAYS
Arrays are a data structure that can hold multiple objects.  It's basically a list of values.

```
my_array = []
another_array = Array.new
array_3 = [4, 6, 3, 1]
word_array = ["I", "like", "chocolate"]
array_of_arrays = [my_array, another_array, array_3, word_array]
```
**Accessing Arrays**

```
arr = ["Ruby", "is", "awesome"]
puts arr[0]
puts arr[2]
puts arr[-1]

```

**Modifying an array**

### Modifying an Array
Arrays can be modified by assigning a value directly to an index or by adding values or removing them from the object. 

```
arr = [1,2,99]

# Array is now [1,2,3]
arr[2] = 3

# This adds a new value to the end of the array
# Array is now [1,2,3,4]
arr[3] = 4
```

```
arr = [1, 2, 3, 4, 5, 6, 7]

# The array will now be [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.push 8
arr.push 9

# The array will now be [1, 2, 3, 4, 5]
arr.pop
arr.pop
arr.pop
arr.pop

# The array will now be [3, 4, 5]
arr.shift
arr.shift

# The array will now be [1, 2, 3, 4, 5]
arr.unshift 2
arr.unshift 1
```

Arrays can also be concatenated together.  For example, if you have array ```[1,2,3]``` and ```[4,5,6,]```.  You can use concat to add [4,5,6] to the array.

```
arr = [1,2,3]
arr.concat [4,5,6]

# Prints [1,2,3,4,5,6]
puts arr.to_s
```

Keep in mind that the array will take up space from index 0 to the last index that you create.  So the code below creates a large array of values that you probably do not want:

```
arr = []
arr[9999] = 1
```

### Code Along
We're going to make a program that stores a list of students in the class and then outputs them.

```
students = []
puts "Add a name"
students.push (gets.chomp)
puts "Add a name"
students.push (gets.chomp)
puts "Add a name"
students.push (gets.chomp)
p students
```

### **Exercise**

Make an app that asks the user for 5 numbers.  Store them in an array.  At the end, output the numbers from lowest to highest.  Look in the array documentation on Ruby Docs.

