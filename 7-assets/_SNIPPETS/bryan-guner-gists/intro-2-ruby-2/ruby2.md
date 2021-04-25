
### Control Flow

**Objectives**
* If Statements
* Each Loops
* While Loops
* Exercises!

## Quick Review of Expressions
What's the difference?

```
x = 5
x == 5
```

Control flow uses **boolean expressions** to determine which code path to take.
Some basic control flow statements are below.

**We can make decisions!  Add logic to our code**

```
if something
  do something
end
```
So let's look a super basic example

```
puts "Hello, what's your name? "
name = gets.chomp
puts "Hello, #{name}"
if name == 'Colt'
  puts "What a great name! "
end
```
Now let's add **an else condition**

```
puts "Hello, what's your name? "
name = gets.chomp
puts "Hello, #{name}"
if name == 'Colt'
  puts "What a great name! "
else
  puts "That's a pretty good name too!"
end

```
**Open teacher.rb and have student walk me through it**

### **Elsif Statements**

```
num = 20
average = 50

if num < average
  puts "#{num} is below average"
elsif num > average
  puts  "#{num} is above average"
else
  puts  "#{num} is exactly average"
end

```
Since ruby is all about being human readable.  It also allows us to do one line control flow statements.

```
num = 10
max = 5

# Max is now 10
max = num if num > max
```
Also, since ruby is human readable, control flow statements generally have an opposite.  For if, the opposite is ```unless```

```
num = 1
min = 5

# Min is now 1
min = num unless num > min
```
Typically you use the control flow statements that sounds most natural in english.


**FIST TO FIVE**


### Exercise
Write a calculator program that takes a number, an operation +,-,/,*, then another number.  The program should be able to handle decimal numbers.  Below is sample output:

```
Enter a number, a +,-,/,*, then another number.
7
/ 
2
Result: 3.5
```

## Loops

Loops are essential to programming.  They allow us to repeat an operation many times.  Typically, execution of a loop lasts as long as a certain value holds true or as long as a set of data is being iterated over.  Below is an example of printing the values from 0 to 10 done using many different methods.  Note that 0..10 is a Range type, which was discussed earlier.




**Times do loops**

```
9.times do
  puts "HELLO"
end
```

**For Loops**

```
for i in 0..10
  puts "The value of i is now #{i}"
end
```

```
## Exercise: 99 bottles of beer
count = 99
while count > 0
  puts "#{count} bottles of beer on the wall"
  count = count -1
  puts "Take one down, pass it around #{count} bottles of beer on the wall"
end


```
# Iteration using a block
(0..10).each do |i|
  puts "The value of i is now #{i}"
end
```

```
# A more condensed way to iterate using a block.
(0..10).each { |i| puts "The value of i is now #{i}" }
```

```
# Iterating with a while loop
i = 0
num = 10

while i <= num do
  puts "The value of i is now #{i}"
  i += 1
end
```
## While Loops

```
command = ''

while command != 'bye'
  puts command
  command = gets.chomp
end

puts 'Come again soon!'
```

```
# Iterating until a value is true
i = 0
num = 10

until i > num
  puts "The value of i is now #{i}"
  i += 1
end
```

### Break
Break is a keyword that stops iteration of a loop.  In the example below, if i is equal to 6, then break is called. The output of the program will be 1 4 (each on separate lines).

```
arr = [1,4,6,9,24]
for i in arr
  break if i == 6
  puts i
end
```




***

### Exercises
#### Average
Given an array of numbers, find the average value.  You can write any array you like into your code.  Below is example output:
```
The average of [1, 4] is:
2.5
```

#### Sum
Write a program that asks the user for a number, then prints the sum of all the numbers between 0 and n incluse.  For example if the user enters 5, the program should sum 1 + 2 + 3 + 4 + 5 = 15.  Sample output is below:

```
Enter a number, N.  The sum of 0 to N will be printed.
2
3
```

```
Enter a number, N.  The sum of 0 to N will be printed.
5
15
```

***

# Appendix - Programs from Study hall
The programs below were used as in class exercises during the study hall.  They are added here for reference.

## Introduction
Write a program that introduces yourself to your neighbor.  The program should first ask your neighbor for his or her name and ask how many prework assignments they have completed.  Your program will then print the information back to the user along with a fun fact about yourself.  The output should look like this:

```
Hello, Jordan.  I'm Tim.  Nice to meet you.
I see you have completed 14 assignments.  I have completed 10 assignments"
In my free time, I enjoy playing ultimate frisbee."
```
### Solution

```
#!/usr/bin/env ruby

# Saving my friends name
puts "Hello, what is your name?"
friends_name = gets.chomp

# Saving the number of completed assignments
puts "How many prework assignments have you completed?"
completed_assignments = gets.chomp

# Putting to STDOUT
puts "Hello, #{friends_name}.  I'm Tim.  Nice to meet you"
puts "I see you have completed #{completed_assignments} assignments.  I have completed 1 assignment"
puts "In my free time, I enjoy playing ultimate frisbee"
```

## Odd Or Even
Write a program that decides if a number is odd or even.

### Solution
```
#!/usr/bin/env ruby

puts "Please enter a number"
num = gets.to_i

if num % 2 == 0
  puts "#{num} is even"
else
  puts "#{num} is odd"
end
```

## Reverse a Word
Given a word from the user.  Reverse the word and print it back to the user.

### Solution

```
#!/usr/bin/env ruby

puts "Enter a string to reverse"
puts gets.chomp.reverse
```

## Calculator
Write a simple calculator program.  It should take as input, a number [enter], a + or - sign [enter], then another number.  The expressionw should then be evaluated and displayed to the user.  Below is sample input

```
Enter a number, a + or - sign, then another number
5
-
3
Result: 2
```

### Solution
```
#!/usr/bin/env ruby

# A calculator program  that only understands addition and subtraction

puts "Enter a number, a + or - sign, then another number"

# Getting our input.  The program only supports simple 2 term expressions
num1 = gets.to_i

sign = gets.chomp

num2 = gets.to_i

if sign == "+"
  puts "Result: #{num1 + num2}"
elsif sign == "-"
  puts "Result: #{num1 - num2}"
else
  puts "Please re-read the instructions"
end
```

## Find Max
Find the maximum value in a array.

### Solution

```
#!/usr/bin/env ruby

arr = [1,3,9,5,34,99,20,-35,9]

max = arr[0]

arr.each do |i|
  if i > max
    max = i
  end 
end

puts "The maximum value in the array is #{max}"
```

## Palindrome
Write a program that decides if a word entered by the user is a palindrome.  A palindrome is a word that is the same when spelled forward or in reverse.  For example, wow is a palindrome.  It is the same string when reversed.

### Solution
```
#!/usr/bin/env ruby

puts "Enter a word.  We'll see if it's a palindrome"
word = gets.chomp

if word == word.reverse
  puts "#{word} is a palindrome"
else
  puts "#{word} is NOT a palindrome"
end
```