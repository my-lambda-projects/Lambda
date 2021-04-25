// https://youtu.be/PRkNuAgkXww
// https://piazza.com/class/j63w1pdyopf7kj?cid=72

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
  // Your code here
  struct Stack* stack;
};

// Create a queue with the given capacity
struct Queue* createQueue(unsigned capacity)
{
  // Your code here
  struct Queue* queue = (struct Queue*) malloc(sizeof(struct Queue));
  queue->stack = createStack(capacity);
  return queue;
}

// Add and item to the queue
void enqueue(struct Queue* queue, int item)
{
  // Your code here
  if (isFull(queue->stack)) {
    return;
  }
  push(queue->stack, item);
  printf("%d enqueued onto queue\n", item);
}

// Remove the queue element that was least-recently added
int dequeue(struct Queue* queue)
{
  // Your code here
  int top, result;
  top = pop(queue->stack);

  if (isEmpty(queue->stack)) {
    return top;
  } else {
    result = dequeue(queue);
    push(queue->stack, top);
    return result;
  }
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
