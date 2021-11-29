
// Every C program is an operating system process/executable

// Specified the same kind of comments you are used to with Javascript

/*
 * Multi line comments
 */

// #includes allow us to combine different files into a single program
// #including can be pointed at a file that you wrote, or it can be4 pointed
// at a file somebody else wrote. You have to know where the file is, and 
// whether or not it is the one you need.

#include <stdio.h>

// examples of return values and strictly typed function definitions
int integerFunction(int input) {
  return 0;
}
float floatFunction(float input) {
  return 0.0;
}
float mixedFunction(char* input) {
  return 0;
}
// I don't really return a float, but gcc/clang will compile it because it
// knows of a way to automatically convert the char type to a float (because a
// char type is just an integer).
float mixedFunction(int input) {
  return 'a';
}

struct lat_lon {
  float lat;
  float lon;
};
struct latLon {
  float lat;
  float lon;
};

int main(int argc, char** argv) {
  // char** means one of two things: someone is doing a complicated 
  // algorithm with this object (it is a pointer to a pointer)
  // or it means it is a two dimensional array like this char[][]
  //
  // argv = [
  //  ['g','c','c'],
  //  ['c','f','i','l','e'],
  //  ['H','i']
  // ]
  //
  // In C, a string is "an array of characters"
  // A string is in "double quotes"
  // A character (char) is in 'single quotes'
  
  // simplest possible C program
  //return 0; 
  
  // what is argc?
  printf("argc is: ");
  printf("%d\n", argc);

  for(int i = 0; i < argc; ++i) {
    printf("%s\n",argv[i]);
  }

  printf("%c\n",(int)mixedFunction(0.0));
  printf("%f\n",mixedFunction(0.0));

  lat_lon myLocation;
  myLocation.lat = 22.5;
  myLocation.lon = 21.3;
  printf("%p\n", &myLocation);

}


