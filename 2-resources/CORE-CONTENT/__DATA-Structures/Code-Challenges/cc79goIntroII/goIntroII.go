// cc79 goIntroII: Arrays, Slices & Makes https://repl.it/student/submissions/1936670
/*
For this coding challenge, you'll need to install Go locally on your machine! Yay!!!

Go here to download the appropriate binary: https://golang.org/dl/

Follow the instructions to properly setup your PATH environment variable.
Make sure to test your installation as prompted by the instructions.

Once that's done, start working through the challenge.
*/

package main

import "fmt"

// Just like in C, Go has two ways of allocating arrays: statically, or dynamically
// Here we statically declare an empty array named `a` that can store up to 10 integers
var a [10]int

func main() {
  // Using shorthand style to declare and initialize an array with some values
  primes := [6]int {2, 3, 5, 7, 11, 13}

  /*
    Like in C, arrays in Go are static, they cannot be dynamically
    resized. Static arrays are in fact not commonly used when
    writing Go. Instead, dynamic references to arrays, called
    slices, are the standard method of working with data in arrays.
    A slice is formed like so:
  */
  slice_of_primes := primes[1:4]
  fmt.Println(slice_of_primes)

  /*
    A slice itself does not store any data. It is simply a
    reference to a section of a larger array. Slices have
    a length property and a capacity property, which indicates
    the number of elements in the underlying array, counting
    from the first element in the slice. Both properties
    can be accessed by using the `len` and `cap` functions
    respectively.
  */
  fmt.Println(len(slice_of_primes))
  fmt.Println(cap(slice_of_primes))

  /*
    The `make` function in Go is very much akin to C's malloc.
    It can create dynamically-sized structures for cases when
    we don't know the size of something ahead of time.
    `make` takes up to three arguments, the first being the
    shape of the data structure you want to create, the second
    being the length, and the third being the capacity. It
    returns a reference to the created structure.
  */
  a := make([]int, 5, 10)
  fmt.Println(a)

  // In order to loop through arrays, use the range function
  // Here, i is the current index, and v is the current value
  for i, v := range primes {
    fmt.Println(i, v)
  }

  /*
    TODO: Use arrays, slices, and make to write a function
    that renders a bluescale image.
    We'll be using your local Go installation for this exercise, so if you haven't done that yet,
    go do it now.
    Once you have Go installed and tested locally, move the following commented-out code to a new
    file called `pic.go` in your working Go directory.
  */
}

/********************** Copy this code below into a file called `pic.go` **************************/
// package main

// import "golang.org/x/tour/pic"

// func Pic(x, y int) [][]uint8 {
     /*
       Let's write a function that, given two integers, creates a two-dimensional array
       of uint8 values that represent an image. To do that, we need to allocate a two-dimensional
       array using `make`, with the length of the "outer" array given by the input y. Then, once
       we've allocated that 2D array, we need to allocate another array, each one of length x,
       for each slot in our outer array. Inside each of those inner arrays, store a uint8 given by
       some function of x and y. Some functions that produce interesting images include `(x + y) / 2`,
       `x * y`, and `x ^ y`, just to name a few examples. Your function should return the outermost array.
     */
// }

// func main() {
//   pic.Show(Pic)
// }
