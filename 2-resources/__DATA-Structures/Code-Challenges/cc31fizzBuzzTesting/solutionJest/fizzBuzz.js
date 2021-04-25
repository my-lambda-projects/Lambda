/*
 * Create the function fizzBuzz that takes a single integer as an argument.
 * Return 'fizz' if num is divisible by 3 with no remainder.
 * Return 'buzz' if num is divisible by 5 with no remainder.
 * Return 'fizzbuzz' if num is divisible by both 3 and 5 with no remainder.
 * If the number is not divisible by either 3 or 5 then return the number given as the argument.
 * Before you write your function write automated tests to test this function.
 * The main focus of this challenge is the testing aspect of it.
 */

const fizzBuzz = ( num ) => {
  if ( num % 15 === 0 ) return 'fizzbuzz';
  if ( num % 3 === 0 ) return 'fizz';
  if ( num % 5 === 0 ) return 'buzz';
  return num;
};

module.exports = fizzBuzz;

/*
$  npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (solutionjest) fizzbuzztesting
version: (1.0.0)
description: TDD
entry point: (fizzBuzz.js)
test command: jest --watch
git repository:
keywords:
author: pdk
license: (ISC)
About to write to /Users/mixelpix/Lambda-University/CS1-Code-Challenges/fizzBu
zzTesting/solutionJest/package.json:

{

  "name": "fizzbuzztesting",
  "version": "1.0.0",
  "description": "TDD",
  "main": "fizzBuzz.js",
  "scripts": {
    "test": "jest --watch"
  },
  "author": "pdk",
  "license": "ISC"
}


Is this ok? (yes)
6 mixelpix Tue Aug 22 13:21:19$  npm i --save-dev jest
npm notice created a lockfile as package-lock.json. You should commit this fil
e.
npm WARN fizzbuzztesting@1.0.0 No repository field.


+ jest@20.0.4
added 335 packages in 43.477s
*/
