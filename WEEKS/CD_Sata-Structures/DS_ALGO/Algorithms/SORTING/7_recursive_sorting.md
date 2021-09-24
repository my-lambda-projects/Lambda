# Recursive Sorting

## Synopsis

Why are ***recursive*** sorting algorithms useful? While **Insertion Sort** works well if we are only sorting a few books, imagine we have _hundreds_ or _thousands_ of books that need to be sorted according to filters set by the user. If we use **Insertion Sort**, or many of the other iterative sorting algorithms at our disposal, this process will take too long, our app will be slow, and users will stop using it. We need another sorting algorithm.

## Purpose

Luckily, there are some ***recursive*** algorithms that take advantage of the _"divide & conquer"_ strategy. In this particular strategy, we:
  
1. Divide a problem into subproblems (of the same type)  
2. Solve the subproblems  
3. Combine results of subproblems to get solution to original problem

For example, in the real-world, there might be a post office where the postmaster has been tasked with the problem:

* Deliver all of the mail.  

This is a large problem, as each post office is responsible for regions with many roads, many houses, and many possible routes in between them. However, the postmaster can break their region up into sub-regions and assign different employees to deliver the mail for each sub-region. Finding a route that allows all mail to be delivered in a particular sub-region is a smaller problem that we can solve more quickly. And by solving all of these individual pieces, we also solve the original problem.

In programming, there are many problems that can also be broken up in this way. Sorting is a good example. We can break up original datasets in different ways, sort subsets of data, and then put the sorted pieces back together again.