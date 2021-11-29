# How To Reverse A Stack

## A - How To Reverse A Stack

To understand how to construct a queue using two stacks, you should understand how to reverse a stack crystal clear. Remember how stack works, it is very similar to the dish stack on your kitchen. The last washed dish will be on the top of the clean stack, which is called as **L**ast **I**n **F**irst **O**ut \(LIFO\) in computer science.

Lets imagine our stack like a bottle as below;

[![enter image description here](https://i.stack.imgur.com/MwjaI.png)](https://i.stack.imgur.com/MwjaI.png)

If we push integers 1,2,3 respectively, then 3 will be on the top of the stack. Because 1 will be pushed first, then 2 will be put on the top of 1. Lastly, 3 will be put on the top of the stack and latest state of our stack represented as a bottle will be as below;

[![enter image description here](https://i.stack.imgur.com/J7ec0.png)](https://i.stack.imgur.com/J7ec0.png)

Now we have our stack represented as a bottle is populated with values 3,2,1. And we want to reverse the stack so that the top element of the stack will be 1 and bottom element of the stack will be 3. What we can do ? We can take the bottle and hold it upside down so that all the values should reverse in order ?

[![enter image description here](https://i.stack.imgur.com/WZNxS.png)](https://i.stack.imgur.com/WZNxS.png)

Yes we can do that, but that's a bottle. To do the same process, we need to have a second stack that which is going to store the first stack elements in reverse order. Let's put our populated stack to the left and our new empty stack to the right. To reverse the order of the elements, we are going to pop each element from left stack, and push them to the right stack. You can see what happens as we do so on the image below;

[![enter image description here](https://i.stack.imgur.com/1YfMo.png)](https://i.stack.imgur.com/1YfMo.png)

So we know how to reverse a stack.

## B - Using Two Stacks As A Queue

On previous part, I've explained how can we reverse the order of stack elements. This was important, because if we push and pop elements to the stack, the output will be exactly in reverse order of a queue. Thinking on an example, let's push the array of integers `{1, 2, 3, 4, 5}` to a stack. If we pop the elements and print them until the stack is empty, we will get the array in the reverse order of pushing order, which will be `{5, 4, 3, 2, 1}` Remember that for the same input, if we dequeue the queue until the queue is empty, the output will be `{1, 2, 3, 4, 5}`. So it is obvious that for the same input order of elements, output of the queue is exactly reverse of the output of a stack. As we know how to reverse a stack using an extra stack, we can construct a queue using two stacks.

Our queue model will consist of two stacks. One stack will be used for `enqueue` operation \(stack \#1 on the left, will be called as Input Stack\), another stack will be used for the `dequeue` operation \(stack \#2 on the right, will be called as Output Stack\). Check out the image below;

[![enter image description here](https://i.stack.imgur.com/xyWPR.png)](https://i.stack.imgur.com/xyWPR.png)

Our pseudo-code is as below;

### Enqueue Operation

```text
Push every input element to the Input Stack
```

### Dequeue Operation

```text
If ( Output Stack is Empty)
    pop every element in the Input Stack
    and push them to the Output Stack until Input Stack is Empty

pop from Output Stack
```

Let's enqueue the integers `{1, 2, 3}` respectively. Integers will be pushed on the **Input Stack** \(**Stack \#1**\) which is located on the left;

[![enter image description here](https://i.stack.imgur.com/lX1EP.png)](https://i.stack.imgur.com/lX1EP.png)

Then what will happen if we execute a dequeue operation? Whenever a dequeue operation is executed, queue is going to check if the Output Stack is empty or not\(see the pseudo-code above\) If the Output Stack is empty, then the Input Stack is going to be extracted on the output so the elements of Input Stack will be reversed. Before returning a value, the state of the queue will be as below;

[![enter image description here](https://i.stack.imgur.com/9f03R.png)](https://i.stack.imgur.com/9f03R.png)

Check out the order of elements in the Output Stack \(Stack \#2\). It's obvious that we can pop the elements from the Output Stack so that the output will be same as if we dequeued from a queue. Thus, if we execute two dequeue operations, first we will get `{1, 2}` respectively. Then element 3 will be the only element of the Output Stack, and the Input Stack will be empty. If we enqueue the elements 4 and 5, then the state of the queue will be as follows;

[![enter image description here](https://i.stack.imgur.com/CXQZB.png)](https://i.stack.imgur.com/CXQZB.png)

Now the Output Stack is not empty, and if we execute a dequeue operation, only 3 will be popped out from the Output Stack. Then the state will be seen as below;

[![enter image description here](https://i.stack.imgur.com/hOPu3.png)](https://i.stack.imgur.com/hOPu3.png)

Again, if we execute two more dequeue operations, on the first dequeue operation, queue will check if the Output Stack is empty, which is true. Then pop out the elements of the Input Stack and push them to the Output Stack unti the Input Stack is empty, then the state of the Queue will be as below;

[![enter image description here](https://i.stack.imgur.com/vuLsw.png)](https://i.stack.imgur.com/vuLsw.png)

Easy to see, the output of the two dequeue operations will be `{4, 5}`
