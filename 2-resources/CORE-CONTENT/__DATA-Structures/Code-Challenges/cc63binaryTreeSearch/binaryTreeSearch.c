/* cc63 binaryTreeSearch https://repl.it/student/submissions/1809823
Implement a binary search tree with the following methods:

- newNode: Creates a new binary search tree node
- insert: Inserts a new node in the binary search tree
- printInOrder: Given a root node, print the root node's value and
  all of its children's values in ascending order. For example, given the tree

                              10
                            /    \
                           7      19
                          / \     / \
                         6   9   11  20

printInOrder should print: 6  7  9  10  11  19  20
*/

#include <stdio.h>
#include <stdlib.h>

struct node {
  struct node* left;
  struct node* right;
  int data;
};

struct node* newNode(int item)
{
  node *new_node = (node*)malloc(sizeof(node));
  new_node->data = item;
  new_node->left = NULL;
  new_node->right = NULL;
  return new_node;
}

void printInOrder(struct node *root)
{

}

struct node* insert(struct node* node, int item)
{
  if (node == NULL) {

  }
}

int main(int argc, char* argv[])
{
  struct node *root = NULL;
  root = insert(root, 50);
  insert(root, 30);
  insert(root, 20);
  insert(root, 40);
  insert(root, 70);
  insert(root, 60);
  insert(root, 80);

  printInOrder(root);

  return 0;
}
