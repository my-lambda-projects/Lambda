package main

import "golang.org/x/tour/pic"

func Pic(x, y int) [][]uint8 {
  /*
   * Let's write a function that, given two integers, creates a two-dimensional array
   * of uint8 values that represent an image. To do that, we need to allocate a two-dimensional
   * array using `make`, with the length of the "outer" array given by the input y. Then, once
   * we've allocated that 2D array, we need to allocate another array, each one of length x,
   * for each slot in our outer array. Inside each of those inner arrays, store a uint8 given by
   * some function of x and y. Some functions that produce interesting images include `(x + y) / 2`,
   * `x * y`, and `x ^ y`, just to name a few examples. Your function should return the outermost array.
   * $ go get "golang.org/x/tour/pic"
   * $ go build
  */
   array2D := make([][]uint8, y)
   // for i := 0; i < y; i++ {
   for i := range array2D {
     array2D[i] = make([]uint8, x)
     // for j := 0; j < x; j++ {
     for j := range array2D[i] {
       array2D[i][j] = uint8(x * y / (j + 1) + i)
     }
   }
   return array2D;
 }

func main() {
  pic.Show(Pic)
}
