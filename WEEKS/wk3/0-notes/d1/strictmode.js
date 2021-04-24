// Whole-script strict mode syntax
'use strict';
var v = "Hi! I'm a strict mode script!";



/*
Strict mode
for functions
Likewise, to invoke strict mode
for a
function, put the exact statement "use strict";
( or 'use strict'; ) in the
function 's body before any other statements.

*/
function strict() {
  // Function-level strict mode syntax
  'use strict';

  function nested() {
    return 'And so am I!';
  }
  return "Hi!  I'm a strict mode function!  " + nested();
}

function notStrict() {
  return "I'm not strict.";
}



//Strict mode changes both syntax and runtime behavior. Changes generally fall into these categories: changes converting mistakes into errors (as syntax errors or at runtime), changes simplifying how the particular variable for a given use of a name is computed, changes simplifying eval and arguments, changes making it easier to write "secure" JavaScript, and changes anticipating future ECMAScript evolution.
