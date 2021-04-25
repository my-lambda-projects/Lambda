/* cc62 queueUsingStack https://repl.it/student/submissions/1797443
You guys have seen the classic "create a queue using two stacks" problem.
So today, you're given the stack data structure you implemented for yesterday's code challenge.
Using that, implement a queue that exhibits First In First Out ordering with one stack.
Just one. You may not use any other data structures to implement your queue.

This time, you'll be implementing all of the queue methods,
namely the Queue struct, `createQueue`, `enqueue`, and `dequeue`.
*/

#include <stdio.h>
#include <stdlib.h>

// The stack struct
struct Stack
{
  int top;
  unsigned capacity;
  int* array;
};

// Function to create a stack of given capacity.
// It initializes size of stack as 0.
struct Stack* createStack(unsigned capacity)
{
  struct Stack* stack = (struct Stack*) malloc(sizeof(struct Stack));
  stack->capacity = capacity;
  stack->top = -1;
  stack->array = (int*) malloc(stack->capacity * sizeof(int));
  return stack;
}

// Stack is full when top is equal to the last index
int isFull(struct Stack* stack)
{
  return stack->top == stack->capacity - 1;
}

// Stack is empty when top is equal to -1
int isEmpty(struct Stack* stack)
{
  return stack->top == -1;
}

// Function to add an item to the stack. Increases top by 1.
void push(struct Stack* stack, int item)
{
  if (isFull(stack)) {
    return;
  }
  stack->array[++stack->top] = item;
}

// Function to remove an item from the stack. Decreases top by 1.
int pop(struct Stack* stack)
{
  if (isEmpty(stack)) {
    return -1;
  }
  return stack->array[stack->top--];
}

// The queue struct
struct Queue
{
  struct Stack *stack;
};

// Create a queue with the given capacity
struct Queue* createQueue(unsigned capacity)
{
  // struct Stack* stack = (struct Stack*) malloc(sizeof(struct Stack));
  struct Queue*queue->stack = createStack(capacity);
}

// Add and item to the queue
void enqueue(struct Queue* queue, int item)
{
  // Your code here
  push(queue->stack, item);
  printf("%d enqueued onto queue\n", item);
}

// Remove the queue element that was least-recently added
int dequeue(struct Queue* queue)
{
  // Your code here

}

// Program to test above functions
int main()
{
  struct Queue* queue = createQueue(100);

  enqueue(queue, 10);
  enqueue(queue, 20);
  enqueue(queue, 30);

  printf("%d dequeued from queue\n", dequeue(queue));
  printf("%d dequeued from queue\n", dequeue(queue));
  printf("%d dequeued from queue\n", dequeue(queue));

  return 0;
}
