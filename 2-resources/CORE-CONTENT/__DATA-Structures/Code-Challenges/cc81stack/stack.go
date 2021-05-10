// cc81 stack https://repl.it/student/submissions/1951449
/*
Time to implement our first data structure in Go!
Today we'll be implementing a good ol' stack.

If you get a working implementation completed, try to figure out why a struct
to store the integer value was needed for this exercise.
*/

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
