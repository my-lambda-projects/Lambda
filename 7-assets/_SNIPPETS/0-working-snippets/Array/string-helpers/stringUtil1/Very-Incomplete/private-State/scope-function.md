```js
let array = [ ... ]; // An array with some objects

function callbackClosure(i, callback) {
  return function() {
    return callback(i);
  }
}

for( let i = 0; i < array.length; ++i ){
  API.dynamicCbs( callbackClosure( i, function(i) {
    array[i].something = 42;
  }) );
}

```
JavaScript is asynchronous
* This is usually the case when using internal APIs that depend on an external event.  
  
   *  **For example, processing a response after an HTTP request is completed or after some other processing is done.**
---
* what happens then, is that the dynamicCbs schedules the callback function to be executed at a later stage.

* But the for loop isn't just scheduling one callback.

  * It's scheduling an array.length worth of callbacks and won't be completed within the same for loop iteration.

* Each of those callbacks will be executed at an unpredictable time later on, when multiple for iterations have gone through, 

  * the value if i is different and multiple other callbacks have also been scheduled.

-  Usually, the callbacks aren't executed until the for loop has completed,
  
    -  at which point i is exactly equal to array.length - 1. 

  -   So, every time any of the callbacks is executed it will be modifying the last value of the array instead of the value of the for loop iteration it was scheduled on. 
  - It's unpredictable when the callbacks will be executed and depends on multiple factors the JavaScript interpreter used,
    -  the function invoking the callbacks and it's input data. 
    
- **An example is an HTTP request with a success callback that won't be executed before the server sends a response, which could be any time interval between several milliseconds and several minutes.**






Inline closure
This brings us to my most favorite JavaScript hack. This is done by declaring a self called anonymous function, which generally looks like this:
```js
(function() {
  // Something declared here will only be available to the function below.
  // Code here is executed only once upon the creation of the inner function
  return function(callbackArguments) {
    // Actual callback here
  };
})(); // The last brackets execute the outer function
```
