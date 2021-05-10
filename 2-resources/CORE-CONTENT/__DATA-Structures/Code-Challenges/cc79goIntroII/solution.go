/* https://piazza.com/class/j63w1pdyopf7kj?cid=99
 * https://youtu.be/_sym-joan7U
 */

package main

import "golang.org/x/tour/pic"

func Pic(x, y int) [][]uint8 {
  outer := make([][]uint8, y)
  for i := range outer {
    outer[i] = make([]uint8, x)
  }

  for y, row := range outer {
    for inner := range row {
      row[inner] = uint8(x ^ y)
    }
  }

  return outer
}

func main() {
  pic.Show(Pic)
}
