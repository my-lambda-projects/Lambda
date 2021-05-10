/* cc59 nthFibonacci
write a program that reads an integer from stdin,
and uses that integer N to calculate the Nth Fibonacci number
*/

#include <stdio.h>
#include <assert.h>
#include <stdlib.h>

// // recursive
// int fib(int n) {
//   if (n <= 1)
//     return n;
//   return fib(n - 1) + fib(n - 2);
// }

// iterative
int fib(int n){
  if(n <= 1) {
    return n;
  }
  int fibo = 1;
  int fiboPrev = 1;
  for(int i = 2; i < n; ++i) {
    // this breaks when it gets to the 47th fibo number
    // and returns -1323752223, the following nth #s are off :()
    int temp = fibo;
    fibo += fiboPrev;
    fiboPrev = temp;
  }
  return fibo;
}

int main(int argc, char* argv[]) {
  int n;
  printf("Enter an integer: ");
  scanf("%d", &n);
  printf("Nth Fibonacci number is %d\n", fib(n));
  return 0;
}
