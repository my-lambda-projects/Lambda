// http://www.zentut.com/c-tutorial/c-binary-search-tree/
// https://youtu.be/E2Wv-JXJFuM
// https://piazza.com/class/j63w1pdyopf7kj?cid=73

#include <stdio.h>
#include <stdlib.h>

struct node {
  int value;
  struct node *left;
  struct node *right;
};

struct node* newNode(int item)
{
  struct node* bst_node = (struct node *) malloc(sizeof(struct node));
  bst_node->value = item;
  bst_node->left = NULL;
  bst_node->right = NULL;
  return bst_node;
}

void printInOrder(struct node *root)
{
  if (root != NULL) {
    printInOrder(root->left);
    printf("%d \n", root->value);
    printInOrder(root->right);
  }
}

struct node* insert(struct node* node, int item)
{
  if (node == NULL) {
    return newNode(item);
  }

  if (item < node->value) {
    node->left = insert(node->left, item);
  } else {
    node->right = insert(node->right, item);
  }

  return node;
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
