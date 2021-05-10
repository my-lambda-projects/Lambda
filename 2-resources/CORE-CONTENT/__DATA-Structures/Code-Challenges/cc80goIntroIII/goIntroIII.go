// cc80 goIntroIII: Functions and Pointers https://repl.it/student/submissions/1943334
/*
In today's challenge, we'll be learning about functions and pointers in Go.
*/

package main

import (
  "fmt"
  "math"
)

func pointer_example() {
/*
  Go pointers look and act analogously with C's. A pointer holds
  the memory address of some value. More formally, the type `*T`
  is a pointer to a type `T` value.
*/
  i, j := 42, 2701

  // Declare p to be the memory address of i
  // p is now a pointer to i's value of 42
	p := &i
	fmt.Println(*p)   // read i through the pointer

	// Set the pointer p's underlying value to be 21
	// This is the same as setting i to 21
	*p = 21
	fmt.Println(i)    // print the new value of i

  // Set p to be j's memory address now
  // p is now a pointer to j's value of 2701
	p = &j
	*p = *p / 37     // divide j through the pointer
	fmt.Println(j)   // see the new value of j
}

// Declare a new Vertex type to be a struct with two properties X and Y, each a float64
type Vertex struct {
  X, Y float64
}

/*
  The Abs function receives a Vertex instance as input and returns
  the square root of the sum of the squares of X and Y
*/
func Abs(v Vertex) float64 {
  return math.Sqrt(v.X * v.X + v.Y * v.Y)
}

/*
  The Scale function receives a pointer to a Vertex instance
  This is because this function modifies the values of the input struct
  So the rule of thumb is, is your function seeks to modify the values of something,
  it needs to receive a pointer to that thing. If it doesn't seek to modify something's
  values, then it doesn't need to receive a pointer to it. So in C and Go, the developer
  gets to decide whether they want a function to be pass by value, or pass by reference.
*/
func Scale(v *Vertex, factor float64) {
  v.X = v.X * factor
  v.Y = v.Y * factor
}

/*
  Methods in Go
  Go does not have classes. Instead, methods can be defined on types.
  To showcase this, let's change our Abs and Scale functions to be
  methods on the Vertex type.
  The only difference between a method and a function is that a method has a
  special receiver argument that designates the owner of the method. The Abs
  function as a method would declared as the following:
*/

// The receiver argument (the 'owner' of this method) comes before the actual function name
func (v Vertex) Abs() float64 {
  return math.Sqrt(v.X * v.X + v.Y * v.Y)
}

// TODO: Convert the Scale function to be a method on the Vertex class. The receiver argument in
// this case should still be a pointer since values are still being modified
// Implement your function here
func (v *Vertex) Scale(factor float64) {
  v.X = v.X * factor
  v.Y = v.Y * factor
}

// TODO: Implement a method on the Vertex class called Midpoint that receives another vertex and finds the
// midpoint between the two vertices. Should return the midpoint as a Vertex.
// Implement your function here
func (v1 Vertex) Midpoint(v2 Vertex) Vertex {
  Xm := (v1.X + v2.X) / 2;
  Ym := (v1.Y - v2.Y) / 2;
  return Vertex{Xm, Ym};
}


// TODO: Implement a method on the Vertex class called Distance that receives another vertex and finds the
// distance between the two vertices. Should return a float64 representing the distance.
// Implement your function here
func (v1 Vertex) Distance(v2 Vertex) float64 {
  Xd := math.Pow(v1.X - v2.X, 2);
  Yd := math.Pow(v1.Y - v2.Y, 2);
  return math.Sqrt(Xd + Yd);
}


func main() {
  pointer_example()
  x := Vertex{3, 4}
  x.Scale(10)
  fmt.Println(x.Abs())

  y := Vertex{9, 11}
  fmt.Println(x.Midpoint(y))
  fmt.Println(x.Distance(y))
}
