// cc78 goIntroI Variables, Types & Loops https://repl.it/student/submissions/1929699
/*
For the next two weeks, we'll be doing morning code challenges using Go
(sometimes referred to as Golang). Go is a statically typed, compiled language
in the tradition of C. It has built-in garbage collection, limited structural
typing, memory safety features, as well as a strong focus on concurrency.

For these morning exercises, we're going to slow things down a bit and really
try to solidify lower-level concepts such as static typing, pointers, memory
management, and concurrency. These concepts are not tied to Go, but Go provides
us a gentler environment in which to practice these concepts compared to C.

In today's intro, we'll going over the basics of Go's variable declarations,
type declarations, and loops. At the end, we'll be combining these concepts to
implement a square root function.
*/

/* The "main" package is declared as it is needed to tell the Go
   compiler that the package should compile as an executable */
package main
/* The "fmt" package implements formatted I/O with functions
   analogous with C's `printf` and `scanf` functions
   "math" gives you access to math operations */
import (
  "fmt"
  "math"
)

// Unlike with C, type declarations are specified after the
// variable names instead of before
var i, j int = 1, 2

// A `main` function is required that encapsulates the primary
// functionality of the program
func main() {
  /*
   Go also supports short variable declarations inside of function
   bodies, along with type inference so that you don't always need
   to specify the type of variables
  */
  cake, canneles, cream := true, false, "no!"
  // We can print out our variables like so
  fmt.Println(cake, canneles, cream)

  // Type Conversions
  // In Go, variable types can be converted to other valid types depending upon their value
  i := 42
  f := float64(i)
  fmt.Println(i, f)

  // TODO: Convert the variable `z` to an unsigned integer type
  x, y := 3, 4
  var a float64 = math.Sqrt(float64(x*x + y*y))
  z := uint64(a) // <~~~~~ correct???????????????????????????????
  fmt.Println(x, y, z)

  // Loops
  /*
    Go doesn't have a `while` loop; instead, all looping is done via for loops
    The only main difference with Go's for loops is that the loop conditions are
    not surrounded by parentheses in Go
  */
  sum := 0
  for i:= 0; i < 10; i++ {
    sum += i
  }
  fmt.Println(sum)

  /*
    Note the initialization and post statements
    (the first and last statements in a for loop condition) are optional
    This way, Go's for loop can be used just like a while loop
  */
  sum = 1
  for sum < 1000 {
    sum += sum
  }
  fmt.Println(sum)

  /*
    If statements are exactly what you'd expect, except, again, there are no parentheses
    surrounding the condition statement
  */
  if sum > 1000 {
    fmt.Println("Sum is larger than 1000")
  }

  /*
    TODO: Implement the Sqrt function below
    Let's utilize loops to write a square root function. Computers typically calculate the square
    root of some x by starting with some guess z and adjusting the guess based on how close z^2 is to x.
    The formula we'll be used to adjust our guess is given by `z -= (z*z - x) / (2*z)`.
    Start with some initial guess (1.0 is typically a reasonable starting guess) and adjust z 10 times
    using the formula. How close is it to the result the `math.Sqrt` function returns? Try increasing
    the number of iterations.

    Given enough iterations, the result of your Sqrt function will converge more precisely to the
    correct answer. But can we be more precise about the number of iterations we update z by? We can
    do that by breaking out of our loop once the amount we're updating z by is extremely small.
  */
  fmt.Println(Sqrt(2))
  fmt.Println(math.Sqrt(2))
}

// CONVERGE ON THE SQUARE ROOT
func Sqrt(x float64) float64 {
	// start with initial guess z
  // update guess using Newton's method formula
  z := 1.0
  for i := 0; 1 < 10; i++ {
    z -= (z*z - x) / 2*z)
  }
  return z;
}
