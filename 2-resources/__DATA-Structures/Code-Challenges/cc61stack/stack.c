/* cc61 stack https://repl.it/student/submissions/1789748
Implement a stack data structure.
You're provided with a struct representing the Stack,
the `createStack` method, and a `main` function.
Implement the methods `isFull`, `isEmpty`,  `push`, and `pop` methods.
*/

#include <stdio.h>
#include <stdlib.h>

struct Stack {
  int top;
  unsigned capacity;
  int* array;
};

// Function to create a stack of given capacity. It initializes size of
// stack as 0
struct Stack* createStack(unsigned capacity) {
  struct Stack* stack = (struct Stack*) malloc(sizeof(struct Stack));
  stack->capacity = capacity;
  stack->top = -1;
  stack->array = (int*) malloc(stack->capacity * sizeof(int));
  return stack;
}

// Stack is full when top is equal to the last index
int isFull(struct Stack* stack) {
  if (stack->top == stack->capacity) {
    return 1;
  }
  return 0;
}

// Stack is empty when top is equal to -1
int isEmpty(struct Stack* stack) {
  if (stack->top <= 0) {
    return 1;
  }
  return 0;
}

// Function to add an item to stack. It increases top by 1
void push(struct Stack* stack, int item) {
  ++stack->top;
  stack->array[stack->top] = item;
  printf("%d pushed to stack\n", item);
}

// Function to remove an item from stack. It decreases top by 1
int pop(struct Stack* stack) {
  --stack->top;
  return stack->array[stack->top + 1];
}

// Program to test above functions
int main() {
  struct Stack* stack = createStack(100);

  push(stack, 10);
  push(stack, 20);
  push(stack, 30);

  printf("%d popped from stack\n", pop(stack));
  printf("The stack is full: %d\n", isFull(stack));

  printf("%d popped from stack\n", pop(stack));
  printf("%d popped from stack\n", pop(stack));
  printf("The stack is empty: %d\n", isEmpty(stack));

  return 0;
}
