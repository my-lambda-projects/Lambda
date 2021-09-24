# Reversing a Linked List: Easy as 1, 2, 3

> A common interview question asked at larger companies, reversing a linked list is a problem I’ve seen trip up a lot of engineers throughout…

[

![Sergey Piterman](https://miro.medium.com/fit/c/96/96/0*eujYC2aAv0Wq5lhJ.)

](https://sergeypiterman.medium.com/?source=post_page-----560fbffe2088--------------------------------)

![](https://miro.medium.com/max/1400/1*iwHAPh-6vYhKHs4-wD4CiA.png)

A common interview question asked at larger companies, reversing a linked list is a problem I’ve seen trip up a lot of engineers throughout my time at [Outco](https://www.outco.io/).

Often being unable to solve this problem stems from an engineer not being familiar with what linked lists are ahead of time, or not understanding the difference between a linked list and an array.

This post assumes that you know what a linked list is, and some of its basic properties. If you don’t, here’s a good primer on Geeks for Geeks:

There are two common erroneous approaches I see that on the surface seem to work.

The first is to start from the head and the tail, and swap the elements in the list, as if you were operating on an array. This would be done with two pointers, and after a swap the front pointer would move up and the rear pointer would move back. This would continue until the two pointers meet in the middle.

The problem with this is if your ListNode class looks like this:

class ListNode { constructor(value) { this.value = value;  
 this.next = null; }  
}let node1 = new ListNode(1);/\* How node1 looks on the inside:{  
 value: 1  
 next: null  
}\*/

Then you only have a single reference to the next node in the list, but no reference to the previous node. This means there’s no way for the pointer at the end to move backwards through the list.

The second approach is to dump the contents of a linked list into some other data structure, like an array, and then create a new linked list, starting from the back of the array, or by first reversing that array.

This seems like a reasonable approach, and works well when the data we’re working with in the nodes is small, or we don’t have a large number of nodes. Like in this example, where our nodes are only holding integers as their values, and we only have 3 nodes.

(1) -> (2) -> (3) \==> \[1, 2, 3\] \==> \[3, 2, 1\]\==> (3) -> (2) -> (1)

But the problem with doing this is that it eats up a lot of unnecessary space. What if instead of integers, we were holding much more complex data? Or what if we had A LOT of nodes and we can’t just replicate all their contents because we just don’t have the RAM or disk space?

In the real world you most likely won’t have to implement this exact function. But it is good to think about why duplicating data isn’t the most efficient approach. Dumping all the contents into the array, even if you’re not duplicating them, and are just referencing them, still takes up `O(N)` space.

And the prompt might say to modify the original linked list, or that you are only allowed to use `O(1)` space complexity. At which point, this solution falls apart.

What I want to demonstrate with this post, is a simple way of reversing a list, with just 3 pointers. This runs in `O(N)` time and `O(1)` space.

Let’s start by talking about what reversing actually means.

In a singly linked list, order is determined by a given node’s `next` property. This property can either reference another node or will point to `null` if this is the last node in the list. So reversing a linked list, simply means reassigning all the `next` properties, on every node.

So we are really just going from this:

![](https://miro.medium.com/max/1400/1*01ihuE25BK8ypI9B7qmchg.png)

To this:

![](https://miro.medium.com/max/60/1*SircT6-WtggLRZ5RSQCPDw.png?q=20)

![](https://miro.medium.com/max/1400/1*SircT6-WtggLRZ5RSQCPDw.png)

Let’s look at what happens on an individual node level:

![](https://miro.medium.com/max/60/1*LevCgUHbn0T0FpVdTvN9Mg.png?q=20)

![](https://miro.medium.com/max/1400/1*LevCgUHbn0T0FpVdTvN9Mg.png)

To do a reassignment on a single node (in this example it will be the 2 node) we just need two variables, let’s call them `previous` , `current` . And all we’re doing is taking `current.next` (which is represented by the arrow) and setting it equal to `previous` .

![](https://miro.medium.com/max/60/1*PxlvqAro7JCBXPXfAWBBmg.png?q=20)

![](https://miro.medium.com/max/1400/1*PxlvqAro7JCBXPXfAWBBmg.png)

![](https://miro.medium.com/max/60/1*2TtrSO7CCZlt8_XC6jEaUQ.png?q=20)

![](https://miro.medium.com/max/1400/1*2TtrSO7CCZlt8_XC6jEaUQ.png)

But now we’ve lost our reference to the node the `current` was originally pointing to. So to make sure we don’t lose track of that node, we need a third variable: `following` . This has to be set BEFORE we do the reassignment.

![](https://miro.medium.com/max/60/1*SAQakKLGIW3ACMJtIgzcTQ.png?q=20)

![](https://miro.medium.com/max/1400/1*SAQakKLGIW3ACMJtIgzcTQ.png)

This lays out the basic mechanics of pointer reassignment, now let’s start to look at how this works on the list as a whole.

Because we need to repeat this process throughout the entire list if we want to fully reverse it. We can do this by moving each of those variables up through the list, from front to back, after each reassignment. We just have to be careful in our order of operations.

There are four tricky pieces to all this:

1.  Knowing what to assign the variables to initially.
2.  Knowing when to end this process of reassignments.
3.  Making sure the order of operations is correct so we don’t lose track of any nodes.
4.  Returning the correct value.

Let’s start with the first point. Initially, we want both the `current` and the `following` equal to the `head` that is given as the input.

This is because we can’t assume the length of the linked list. What if `head` was `null` and we’re looking at an empty list?

function reverse(head) {// Step 1  
 let previous = null  
 let current = head  
 let following = head}

If we do have at least one node in our list, we will end up assigning our `following` variable to whatever comes next, but we first need to be sure we have at least one.

![](https://miro.medium.com/max/1400/1*_mI2H8ml4185vxUDv5jDlw.png)

Which brings us to our next point, how long do we keep running our reassignment algorithm? Or put another way, how do we know when to end this series of reassignments?

Well if your goal is to look at EVERY node, and reassign its `next` property to whatever came before it, we need to make sure that our `current` variable is assigned once to every node. This means doing a linear scan through the list, starting at the head.

Eventually though, it will reach the last node’s `next`, which ALWAYS points to `null` . So we can can run this function `while (current !== null)`

function reverse(head) {// Step 1  
 let previous = null  
 let current = head  
 let following = head// Step 2  
 while(current !== null) { }}

![](https://miro.medium.com/max/1400/1*e-YtIM0myJ8u4pHbf-oK0Q.png)

The third step is to figure out the order of operations so we don’t lose track of anything.

That while loop we just made won’t run unless we have at least one node. But once it does, the first thing we want to do is set `following` to `following.next` so we don’t lose track of what comes after `current` .

Remember, before this point `following` was equal to `current`.

function reverse(head) {// Step 1  
 let previous = null  
 let current = head  
 let following = head// Step 2  
 while(current !== null) {  
 following = following.next // <===== 2a }}

![](https://miro.medium.com/max/1400/1*0Jans-aYx82quNdQzLHXVQ.png)

Then we want to do the reassignment of `current.next` , since we have all three pointers in place. This is the logic of actually reversing the linked list. We set `current.next` equal to `previous` , which at this point is equal to `null` .

function reverse(head) {// Step 1  
 let previous = null  
 let current = head  
 let following = head// Step 2  
 while(current !== null) {  
 following = following.next  
 current.next = previous // <===== 2b }}

![](https://miro.medium.com/max/1400/1*NZ4AlSDZo35AyIyaEwQWDQ.png)

Once we’ve done that, we can move `previous` up to equal `current` , since we’re done with that node.

function reverse(head) {// Step 1  
 let previous = null  
 let current = head  
 let following = head// Step 2  
 while(current !== null) {  
 following = following.next  
 current.next = previous  
 previous = current // <===== 2c }}

![](https://miro.medium.com/max/1400/1*Wzo9aRkPWI6YV4FFAEtv-Q.png)

And then finally we can move `current` up by setting it equal to `following` .

function reverse(head) {// Step 1  
 let previous = null  
 let current = head  
 let following = head// Step 2  
 while(current !== null) {  
 following = following.next  
 current.next = previous  
 previous = current  
 current = following // <===== 2d }}

![](https://miro.medium.com/max/1400/1*3QHZ51QY_MfiDj3GB-FxDw.png)

So to summarize those steps:

1.  Set `following` equal to `following.next`
2.  Set `current.next` equal to `previous`
3.  Set `previous` equal to `current`
4.  Set `current` equal to `following`

And that completes one round of reversals. We just need to apply these same operations then to every node until we reach the end of the list.

One way to think about what we’re doing, is that we’re looking at a small window around each node. We’re keeping track of the node before it so that we can point its `next` pointer to it. And we’re keeping track of the node after it so we don’t lose it and we can continue to move through the list.

Which brings us to our final step, on what to return.

Well following the diagram and code it should be pretty clear. Since the while loop is running as long as `current` is not `null` , then `current` must be `null` for us to break out of the loop. `following` also isn’t an option because at the end of a single loop, it’s equal to `current` .

Which means we’re going to be returning `previous` , since it’s pointing to the node right before `current`.

function reverse(head) {// Step 1  
 let previous = null  
 let current = head  
 let following = head// Step 2  
 while(current !== null) {  
 following = following.next  
 current.next = previous  
 previous = current  
 current = following }// Step 3  
 return previous}

![](https://miro.medium.com/max/1400/1*Z8Of0kzeo3AuPaJ-l9c9gw.png)

And that concludes the algorithm. As you can see it takes only 10 lines of code, and shouldn’t be something that trips you up on an interview.

If you’re looking for a challenge from here, try swapping two nodes in a linked list. Here’s a link to the problem description and a diagram as a hint:

![](https://miro.medium.com/max/1400/1*TXCD55tQMdZTINvKILEMVA.png)

![](https://miro.medium.com/max/1400/1*3yL7LvtDZoqf6G3pj6dlVw.png)

Enjoy!

[Source](https://medium.com/outco/reversing-a-linked-list-easy-as-1-2-3-560fbffe2088)
