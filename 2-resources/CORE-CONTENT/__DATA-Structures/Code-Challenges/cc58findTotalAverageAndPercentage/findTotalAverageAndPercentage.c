/* cc58 findTotalAverageAndPercentage https://repl.it/student/submissions/1764702
Write a C program that takes in exactly 5 floats and calculates the total,
average, and percentage of those five floats.
When your program is executed, it should look something like the following:
Example Input
  Enter 5 floats: 95.2 76.6 85.4 90.0 89.1
Output
  Total = 436.30
  Average = 87.27
  Percentage = 87.26 %
*/

#include <stdio.h>

int main() {

  float a, b, c, d, e;

  printf("Enter 5 floats: ");
  scanf("%f %f %f %f %f", &a, &b, &c, &d, &e);

  float total, average, percentage;
  total = a + b + c + d + e;
  printf("Total = %.02f\n", total);
  average = total / 5;
  printf("Average = %.02f\n", average);
  percentage = average;
  printf("Percentage = %.02f %%\n", percentage);
  return 0;
}

// #include <stdio.h>
// #include <stdlib.h>

// int main( int argc, char ** argv ) {
//   float total, average, percentage;
//   total = atof(argv[1]) + atof(argv[2]) + atof(argv[3]) + atof(argv[4]) + atof(argv[5]);
//   int numOfArgs = argc - 1;
//   printf("Total = %.02f\n", total);
//   average = total / numOfArgs;
//   printf("Average = %.02f\n", average);
//   percentage = average / 100;
//   printf("Percentage = %.02f %%\n", percentage);
//   return 0;
// }
