# Python Practice Problems

This project includes python programming problems and solutions. Try to solve yourself before opening the solutions. I'll upload one or more problem everyday. So, be ready.

If you find any error in the codes below, feel free to fork and update, or you can contact me at - rounak.dutta.cs@gmail.com

## Level Description

- Level 1: Beginner means someone who has just gone through an introductory Python course. He can solve some problems with 1 or 2 Python classes or functions. Normally, the answers could directly be found in the textbooks.

- Level 2: Intermediate means someone who has just learned Python, but already has a relatively strong programming background from before. He should be able to solve problems which may involve 3 or 3 Python classes or functions. The answers cannot be directly be found in the textbooks.

- Level 3: Advanced. He should use Python to solve more complex problem using more rich libraries functions and data structures and algorithms. He is supposed to solve the problem using several Python standard packages and advanced techniques.

---

## Problem template

#### Question

#### Solution

---

# Happy Coding!

### Problem 1 (Level 1)

Create a program that asks the user to enter their name and their age. Print out a message addressed to them that tells them the year that they will turn `100` years old.

[Solution](solutions/prac1.py)

---

### Problem 2 (Level 1)

Ask the user for a number. Depending on whether the number is `even` or `odd`, print out an appropriate message to the user.

Extras:

1. If the number is a multiple of `4`, print out a different message.
2. Ask the user for two numbers: one number to check (call it num) and one number to divide by (check). If check divides evenly into num, tell that to the user. If not, print a different appropriate message.

[Solution](solutions/prac2.py)

---

### Problem 3 (Level 1)

Take a list and write a program that prints out all the elements of the list that are `less` than `5`.

Extras:

1. Instead of printing the elements one by one, make a new list that has all the elements less than `5` from this list in it and print out this new list.
2. Write this in one line of Python.
3. Ask the user for a number and return a list that contains only elements from the original list a that are smaller than that number given by the user.

[Solution](solutions/prac3.py)

---

### Problem 4 (Level 1)

Create a program that asks the user for a number and then prints out a list of all the divisors of that number. (If you don’t know what a divisor is, it is a number that divides evenly into another number.

For example, `13` is a divisor of `26` because `26 / 13` has no remainder.)

[Solution](solutions/prac4.py)

---

### Problem 5 (Level 1)

Take two lists, and write a program that returns a list that contains only the elements that are `common between the lists (without duplicates)`. Make sure your program works on two lists of different sizes.

Extras:

1. Randomly generate two lists to test this.
2. Write this in one line of Python.

[Solution](solutions/prac5.py)

---

### Problem 6 (Level 1)

Ask the user for a string and print out whether this string is a `palindrome` or not. (A palindrome is a string that reads the same forwards and backwards.)

[Solution](solutions/prac6.py)

---

### Problem 7 (Level 1)

Let’s say I give you a list saved in a variable: a = `[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`. Write one line of Python that takes this list a and makes a new list that has only the `even` elements of this list in it.

[Solution](solutions/prac7.py)

---

### Problem 8 (Level 1)

Make a two-player `Rock-Paper-Scissors` game.

**Hint:**  
Ask for player plays (using input), compare them. Print out a message of congratulations to the winner, and ask if the players want to start a new game.

**Remember the rules:**

```
rock beats scissors
scissors beats paper
paper beats rock
```

[Solution](solutions/prac8.py)

---

### Problem 9 (Level 1)

Generate a random number between `1 and 100 (including 1 and 100)`. Ask the user to guess the number, then tell them whether they guessed `too low`, `too high`, or `exactly right`.

**Hint:**  
Remember to use the user input lessons from the very first exercise.

**Extras:**  
Keep the game going until the user types `“exit”`.  
Keep track of how many guesses the user has taken, and when the game ends, print this out.

[Solution](solutions/prac9.py)

---

### Problem 10 (Level 1)

Write a program that asks the user how many Fibonnaci numbers to generate and then generates them. Take this opportunity to think about how you can use functions. Make sure to ask the user to enter the number of numbers in the sequence to generate.

**Hint:**  
The Fibonnaci seqence is a sequence of numbers where the next number in the sequence is the sum of the previous two numbers in the sequence. The sequence looks like this: `1, 1, 2, 3, 5, 8, 13, …`

[Solution](solutions/prac10.py)

---

### Problem 11 (Level 2)

Here's your coding interview problem for today.

This problem was asked by **Google.**

In linear algebra, _a Toeplitz matrix is one in which the elements on any given diagonal from top left to bottom right are identical._  
Here is an example:

```
1 2 3 4 8
5 1 2 3 4
4 5 1 2 3
7 4 5 1 2
```

Write a program to determine whether a given input is a `Toeplitz` matrix.

[Solution](solutions/prac11.py)

---

### Problem 12 (Level 2)

Here's your coding interview problem for today.

This problem was asked by **PagerDuty**.

Given a positive integer `N`, find the smallest number of steps it will take to reach `1`.

There are two kinds of permitted steps:  
---> You may decrement N to N - 1.  
---> If `a * b = N`, you may decrement `N to the larger of a and b`.

For example, given 100, you can reach 1 in 5 steps with the following route:  
`100 -> 10 -> 9 -> 3 -> 2 -> 1.`

[Solution](solutions/prac12.py)

---

### Problem 13 (Level 2)

Here's your coding interview problem for today.

This problem was asked by **Amazon**.

Consider the following scenario: there are `N` mice and `N` holes placed at integer points along a line. Given this, find a method that maps mice to holes such that the largest number of steps any mouse takes is minimized.

Each move consists of moving one mouse `one` unit to the `left` or `right`, and only `one` mouse can fit inside each hole.

For example, suppose the mice are positioned at `[1, 4, 9, 15]`, and the holes are located at `[10, -5, 0, 16]`. In this case, the best pairing would require us to send the mouse at `1` to the hole at `-5`, so our function should return `6`.

[Solution](solutions/prac13.py)

---
