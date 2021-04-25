// https://piazza.com/class/j63w1pdyopf7kj?cid=107
// https://youtu.be/K9aOAyGow28

package main

import "fmt"

// A type that represents values stored in our Stack
type Value struct {
  value int
}

// Type declaration of our Stack
// Holds an array of Values and a count of the number of Values in the stack
type Stack struct {
  storage [] *Value
  count int
}

// Creates and returns a pointer to a Stack instance
func createStack() *Stack {
  return &Stack{}
}

// A Stack method that pushes the input Value onto our Stack
func (s *Stack) Push(v *Value) {
  s.storage = append(s.storage[:s.count], v)
  s.count++
}

// A Stack method that pops the top Value off of our Stack
// Returns a pointer to the popped Value
func (s *Stack) Pop() *Value {
  if s.count == 0 {
    return nil
  }
  s.count--
  return s.storage[s.count]
}

func main() {
  s := createStack()
  s.Push(&Value{1})
  s.Push(&Value{2})
  s.Push(&Value{3})
  s.Push(&Value{4})
  s.Push(&Value{5})
  fmt.Println(s.Pop(), s.Pop(), s.Pop(), s.Pop(), s.Pop(), s.Pop())
}

/*
The Value type is used as a workaround for the fact that we would like to return
`nil` for the case when we try to pop from an empty stack. The `nil` value for
integers is 0, which would mean then that when we popped off of an empty stack,
the `Pop` method would return 0. However, 0 should be a valid value that we
could push onto our stack. Wrapping integers in a `Value` type allows us to
return `nil` then in the case that we call `Pop` on an empty stack.
*/
