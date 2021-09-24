# Recursion

## Synopsis

We've all probably seen the memes with "recursion.gif" where an image zooms in and repeats over and over again.  The funnier thing with these jokes is that they're not recursive, or at least they're broken.

A recursive function must end; it doesn't go on forever - that causes stack overflow!

Instead, it requires three elements:

1. The function must call itself
2. The function must have a base case, which is the simplest version of the problem in which the answer is defined or known already.
3. The function must move towards the base case.

If you have these, it almost seems like the problem solves itself!

## Purpose

Recursion is hard to "get" at first, but once you understand it, you can write solutions to several problems much more cleanly and believe it or not, more quickly, with recursion.  If you can divide a problem into similar sub-problems, you can often reduce it to something that you can quickly solve in your head.  Once you do that, you can use your recursive calls to solve the bigger and bigger versions of that problem for you.

Recursion is hard, so it is also very frequently found in interviews.

## Demonstration 1 - Basic Recursion

### Key Points

* We must have a base case
* We must move to that base case, or we'll get caught in a loop
* The time complexity of a function that recursively calls itself once is O(n)