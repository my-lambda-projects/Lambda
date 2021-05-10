// cc81 binarySearchTree https://repl.it/student/submissions/1958450
/*
Implement a binary search tree type.
The MapInt method is akin to the depthFirstForEach method from Data Structures II.
It receives a function that is applied to every element in the BST.
However, since we're now in statically-typed land, it only works on a single
type (integers in this case).

If you need a refresher on binary search trees, definitely go back and reference
the Data Structures II solution repo or your own implementation.

Testing functions are at the bottom of the file. Hit the run button to execute
them in order to test your code. Try to get as many of them passing as you can :)
*/

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
}

// Checks to see if the BST contains the target value; returns a boolean
func (t TreeNode) Contains(target int) bool {

}

/*
  The MapInt method gets passed an intFunc that itself receives an integer and returns
  and integer; the intFunc is applied to every element in the BST, and an array of the
  resulting values is returned
*/
func (t *TreeNode) MapInt(intFunc func(int) int) []int {

}



/**********************Testing Functions***************************/

func TestDataIsRetained() {
  actual := createTreeNode(4).value
  expected := 4

  if actual != expected {
    fmt.Println("createTreeNode(4).value: %d, want %d.", actual, expected)
  } else {
    fmt.Println("TestDataIsRetained passed!")
  }
}

func TestInsertingLess() {
  passed := true
  bst := TreeNode{value: 9}
  bst.Insert(5)

  actual := bst.value
  expected := 9

  if actual != expected {
    passed = false
    fmt.Println("bst.value: %d, want %d.", actual, expected)
  }

  actual = bst.left.value
  expected = 5

  if actual != expected {
    passed = false
    fmt.Println("bst.left.value: %d, want %d.", actual, expected)
  }

  if passed {
    fmt.Println("TestInsertingLess passed!")
  }
}

func TestInsertingSame() {
  passed := true
	bst := TreeNode{value: 4}
	bst.Insert(4)

	actual := bst.value
	expected := 4

	if actual != expected {
	  passed = false
		fmt.Println("bst.data: %d, want %d.", actual, expected)
	}

	actual = bst.left.value
	expected = 4

	if actual != expected {
	  passed = false
		fmt.Println("bst.left.data: %d, want %d.", actual, expected)
	}

	if passed {
	  fmt.Println("TestInsertingSame passed!")
	}
}

func TestInsertingMore() {
  passed := true
	bst := TreeNode{value: 4}
	bst.Insert(5)

	actual := bst.value
	expected := 4

	if actual != expected {
	  passed = false
		fmt.Println("bst.value: %d, want %d.", actual, expected)
	}

	actual = bst.right.value
	expected = 5

	if actual != expected {
	  passed = false
		fmt.Println("bst.value: %d, want %d.", actual, expected)
	}

	if passed {
	  fmt.Println("TestInsertingMore passed!")
	}
}

func TestContains() {
  passed := true
  bst := TreeNode{value: 10}
  bst.Insert(90)

  actual := bst.Contains(10)
  expected := true

  if actual != expected {
    passed = false
    fmt.Println("bst.Contains expected to return true, got false.")
  }

  actual = bst.Contains(90)
  expected = true

  if actual != expected {
    passed = false
    fmt.Println("bst.Contains expected to return true, got false.")
  }

  actual = bst.Contains(20)
  expected = false

  if actual != expected {
    passed = false
    fmt.Println("bst.Contains expected to return false, got true.")
  }

  if passed {
    fmt.Println("TestContains passed!")
  }
}

func TestComplexTree() {
  passed := true
	bst := TreeNode{value: 4}
	bst.Insert(2)
	bst.Insert(6)
	bst.Insert(1)
	bst.Insert(3)
	bst.Insert(7)
	bst.Insert(5)

	actual := bst.value
	expected := 4

	if actual != expected {
	  passed = false
		fmt.Println("bst.value: %d, want %d.", actual, expected)
	}

	actual = bst.left.value
	expected = 2

	if actual != expected {
	  passed = false
		fmt.Println("bst.left.value: %d, want %d.", actual, expected)
	}

	actual = bst.left.left.value
	expected = 1

	if actual != expected {
	  passed = false
		fmt.Println("bst.left.left.value: %d, want %d.", actual, expected)
	}

	actual = bst.left.right.value
	expected = 3

	if actual != expected {
	  passed = false
		fmt.Println("bst.left.right.value: %d, want %d.", actual, expected)
	}

	actual = bst.right.value
	expected = 6

	if actual != expected {
	  passed = false
		fmt.Println("bst.right.value: %d, want %d", actual, expected)
	}

	actual = bst.right.left.value
	expected = 5

	if actual != expected {
	  passed = false
		fmt.Println("bst.right.left.value: %d, want %d", actual, expected)
	}

	actual = bst.right.right.value
	expected = 7

	if actual != expected {
	  passed = false
		fmt.Println("bst.right.right.value: %d, want %d", actual, expected)
	}

	if passed {
	  fmt.Println("TestComplexTree passed!")
	}
}

func TestMapIntWithComplexStructure() {
  bst := TreeNode{value: 4}
  bst.Insert(2)
  bst.Insert(1)
  bst.Insert(3)
  bst.Insert(6)
  bst.Insert(7)
  bst.Insert(5)

  f := func(i int) int {
    return i
  }

  actual := bst.MapInt(f)
  expected := []int{1,2,3,4,5,6,7}

  if !reflect.DeepEqual(actual, expected) {
    fmt.Println("bst.MapInt(): %v, want %v.", actual, expected)
  }
}

func main() {
  TestDataIsRetained()
  TestInsertingLess()
  TestInsertingSame()
  TestInsertingMore()
  TestContains()
  TestComplexTree()
  TestMapIntWithComplexStructure()
}
