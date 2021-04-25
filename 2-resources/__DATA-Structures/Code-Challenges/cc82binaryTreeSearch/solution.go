// https://piazza.com/class/j63w1pdyopf7kj?cid=110
// https://youtu.be/Vdui-EVc-fU

package main

import (
  "fmt"
  "reflect"
)

// Type that represents a binary search tree node
type TreeNode struct {
  value int
  left *TreeNode
  right *TreeNode
}

// Creates a BST node
func createTreeNode(value int) *TreeNode {
  return &TreeNode{value: value}
}

// Inserts the input value into the BST according to BST ordering rules
func (t *TreeNode) Insert(value int) {
  node := &t.left
  if value > t.value {
    node = &t.right
  }
  if *node == nil {
    *node = createTreeNode(value)
  } else {
    (*node).Insert(value)
  }
}

// Checks to see if the BST contains the target value; returns a boolean
func (t TreeNode) Contains(target int) bool {
  if t.value == target {
    return true
  }
  if t.left != nil {
    if t.left.Contains(target) {
      return true
    }
  }
  if t.right != nil {
    if t.right.Contains(target) {
      return true
    }
  }
  return false
}

/*
  The MapInt method gets passed an intFunc that itself receives an integer and returns
  an integer; the intFunc is applied to every element in the BST, and an array of the
  resulting values is returned
*/
func (t *TreeNode) MapInt(intFunc func(int) int) []int {
  if t == nil {
    return []int{}
  }
  right := append([]int{intFunc(t.value)}, t.right.MapInt(intFunc)...)
  return append(t.left.MapInt(intFunc), right...)
}
