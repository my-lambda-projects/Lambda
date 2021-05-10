/* cc60 linkedList
It's finally time to implement a linked list in C!
To be slightly less mean, you won't be starting entirely from scratch.

The node struct is provided for you, along with the `print_list`,  and `pop` methods.

You'll be implementing the `push` method, which wraps the input value
in a new node and adds the new node as the new head of the list.

You'll also be implementing the `remove_by_value` method, which receives a
list node and a value as inputs, finds the node that contains the value in
the list, and removes it from the list.
*/

#include <stdio.h>
#include <stdlib.h>

typedef struct node {
  int val;
  struct node * next;
} node_t;

void print_list(node_t * head) {
  node_t * current = head;

  while (current != NULL) {
    printf("%d\n", current->val);
    current = current->next;
  }
}

int pop(node_t ** head) {
  int retval = -1;
  node_t * next_node = NULL;

  if (*head == NULL) {
    return -1;
  }

  next_node = (*head)->next;
  retval = (*head)->val;
  free(*head);
  *head = next_node;

  return retval;
}

void push(node_t ** head, int val) {
  // Your code here
  node_t *newNode;
  newNode = malloc(sizeof(node_t));
  newNode->val = val;
  newNode->next = *head;
  *head = newNode;
}

int remove_by_value(node_t ** head, int val) {
  // Your code here
}

int main() {
  node_t * test_list = malloc(sizeof(node_t));
  test_list->val = 1;
  test_list->next = malloc(sizeof(node_t));
  test_list->next->val = 2;
  test_list->next->next = malloc(sizeof(node_t));
  test_list->next->next->val = 3;
  test_list->next->next->next = malloc(sizeof(node_t));
  test_list->next->next->next->val = 4;
  test_list->next->next->next->next = NULL;

  print_list(test_list);

  push(&test_list, -1);
  print_list(test_list);

  remove_by_value(&test_list, 3);
  print_list(test_list);
}
