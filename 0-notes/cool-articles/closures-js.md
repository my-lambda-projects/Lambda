# Closures in JavaScript Explained with Examples

> What are Closures?A closure is the combination of a function and the lexical environment (scope) within which that function was declared. Closures are a fundamental and powerful property of Javascript. This article discusses the ‘how’ and ‘why’ about Closures: Example//we have an outer function named walk and an

A closure is the combination of a function and the lexical environment (scope) within which that function was declared. Closures are a fundamental and powerful property of Javascript. This article discusses the ‘how’ and ‘why’ about Closures:

### **Example**

    
    
    function walk (){
      
      var dist = '1780 feet';
      
      function fly(){
        console.log('At '+dist);
      }
      
      return fly;
    }
    
    var flyFunc = walk(); 
    
    
    
    flyFunc(); 
    
    

### **Another Example**

    function by(propName) {
        return function(a, b) {
            return a[propName] - b[propName];
        }
    }
    
    const person1 = {name: 'joe', height: 72};
    const person2 = {name: 'rob', height: 70};
    const person3 = {name: 'nicholas', height: 66};
    
    const arr_ = [person1, person2, person3];
    
    const arr_sorted = arr_.sort(by('height')); 

The closure ‘remembers’ the environment in which it was created. This environment consists of any local variables that were in-scope at the time the closure was created.

    function outside(num) {
      var rememberedVar = num; 
      return function inside() { 
        console.log(rememberedVar)
      }
    }
    
    var remember1 = outside(7); 
    var remember2 = outside(9); 
    
    remember1(); 
    remember2(); 

Closures are useful because they let you ‘remember’ data and then let you operate on that data through returned functions. This allows javascript to emulate private methods that are found in other programming languages. Private methods are useful for restricting access to code as well as managing your global namespace.

Private variables and methods
-----------------------------

Closures can also be used to encapsulate private data/methods. Take a look at this example:

    const bankAccount = (initialBalance) => {
      const balance = initialBalance;
    
      return {
        getBalance: function() {
          return balance;
        },
        deposit: function(amount) {
          balance += amount;
          return balance;
        },
      };
    };
    
    const account = bankAccount(100);
    
    account.getBalance(); 
    account.deposit(10); 

In this example, we won’t be able to access `balance` from anywhere outside of the `bankAccount` function, which means we’ve just created a private variable. Where’s the closure? Well, think about what `bankAccount()` is returning. It actually returns an Object with a bunch of functions inside it, and yet when we call `account.getBalance()`, the function is able to “remember” its initial reference to `balance`. That is the power of the closure, where a function “remembers” its lexical scope (compile time scope), even when the function is executed outside that lexical scope.

### Emulating block-scoped variables.

Javascript did not have a concept of block-scoped variables. Meaning that when defining a variable inside a forloop for example, this variable is visible from outside the forloop as well. So how can closures help us solve this problem ? Let’s take a look.

        var funcs = [];
        
        for(var i = 0; i < 3; i++){
            funcs[i] = function(){
                console.log('My value is ' + i);  
            }
        }
        
        for(var j = 0; j < 3; j++){
            funcs[j]();             
                                    
                                    
        }

Since the variable i does not have block-scope, it’s value within all three functions was updated with the loop counter and created malicious values. Closure can help us solve this issue by creating a snapshot of the environment the function was in when it was created, preserving its state.

        var funcs = [];
        
        var createFunction = function(val){
    	    return function() {console.log("My value: " + val);};
        }
    
        for (var i = 0; i < 3; i++) {
            funcs[i] = createFunction(i);
        }
        for (var j = 0; j < 3; j++) {
            funcs[j]();                 
                                        
                                        
        }

The late versions of javascript es6+ have a new keyword called let which can be used to give the variable a blockscope. There are also many functions (forEach) and entire libraries (lodash.js) that are dedicated to solve such problems as the ones explained above. They can certainly boost your productivity, however it remains extremely important to have knowledge of all these issues when attempting to create something big.

Closures have many special applications that are useful when creating large javascript programs.

1.  Emulating private variables or encapsulation
2.  Making Asynchronous server side calls
3.  Creating a block-scoped variable.

### Emulating private variables.

Unlike many other languages, Javascript does not have a mechanism which allows you to create encapsulated instance variables within an object. Having public instance variables can cause a lot of problems when building medium to large programs. However with closures, this problem can be mitigated.

Much like in the previous example, you can build functions which return object literals with methods that have access to the object’s local variables without exposing them. Thus, making them effectively private.

Closures can also help you manage your global namespace to avoid collisions with globally shared data. Usually all global variables are shared between all scripts in your project, which will definitely give you alot of trouble when building medium to large programs. That is why library and module authors use closures to hide an entire module’s methods and data. This is called the module pattern, it uses an immediately invoked function expression which exports only certain functionality to the outside world, significantly reducing the amount of global references.

Here’s a short sample of a module skeleton.

    var myModule = (function() = {
        let privateVariable = 'I am a private variable';
        
        let method1 = function(){ console.log('I am method 1'); };
        let method2 = function(){ console.log('I am method 2, ', privateVariable); };
        
        return {
            method1: method1,
            method2: method2
        }
    }());
    
    myModule.method1(); 
    myModule.method2(); 

Closures are useful for capturing new instances of private variables contained in the ‘remembered’ environment, and those variables can only be accessed through the returned function or methods.

Vectors
-------

A vector is perhaps the most simple type of collection in Clojure. You can think of it like an array in Javascript. Let’s define a simple vector:

    (def a-vector [1 2 3 4 5])
    ;; Alternatively, use the vector function:
    (def another-vector (vector 1 2 3 4 5))
    ;; You can use commas to separate items, since Clojure treats them as whitespace.
    (def comma-vector [1, 2, 3, 4, 5])

You’ll see that it uses square brackets, just like an array in JS. Since Clojure, like JS, is dynamically typed, vectors can hold elements of any type, including other vectors.

    (def mixed-type-vector [1 "foo" :bar ["spam" 22] #"^baz$"])

### Adding items to a vector

You can append items to a vector using `conj`. You can also prepend to a list using `into`, but note that `into` is intended for merging two vectors, so both its arguments must be vectors, and using `into` is slower than using `conj`.

    (time (conj [1 2] 3))
    ; => "Elapsed time: 0.032206 msecs"
    ;    [1 2 3]
    (time (into [1] [2 3]))
    ; => "Elapsed time: 0.078499 msecs"
    ;    [1 2 3]

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:")

[IDEOne it!](https://ideone.com/wBSUEd)

### Retrieving items from a vector

You can retrieve items from a vector using `get`. This is equivalent to using bracket notation to access items in an array in many imperative languages. Items in a vector are 0-indexed, counting from the left.

    var arr = [1, 2, 3, 4, 5];
    arr[0];
    // => 1

In Clojure, this would be written like so:

    (def a-vector [1 2 3 4 5])
    (get a-vector 0)
    ; => 1

You can also give `get` a default value, if you give it an index that isn’t in the array.

    ;; the list doesn't have 2147483647 elements, so it'll return a string instead.
    (get a-vector 2147483646 "sorry, not found!")
    ; => "sorry, not found!"

### Converting other collections into vectors

Non-vector data structures can be converted into vectors using the `vec` function. With hashmaps, this produces a 2D vector containing pairs of keys and values.

    (vec '(1 2 3 4 5))
    ; => [1 2 3 4 5]
    (vec {:jack "black" :barry "white"})
    ; => [[:jack "black"] [:barry "white"]]

### When to use a vector?

A vector should be used in almost all cases if you need a collection, because they have the shortest random-access times, which makes it easy to retrieve items from a vector. Note that vectors are ordered. If order doesn’t matter, it may be better to use a set. Also note that vectors are designed for appending items; if you need to prepend items, you might want to use a list.

More info on Closures:
----------------------

*   [Learn JavaScript closures in six minutes](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/news/learn-javascript-closures-in-n-minutes/)
*   [A basic guide to closures in JavaScript](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/news/a-basic-guide-to-closures-in-javascript-9fc8b7e3463e/)
*   [Discover the power of closures in VueJS](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/news/closures-vuejs-higher-order-functions-emojipicker-f10d3c249a12/)
*   [JavaScript closures explained by mailing a package](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/news/javascript-closures-explained-by-mailing-a-package-4f23e9885039/)

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started](https://www.freecodecamp.org/learn/)


[Source](https://www.freecodecamp.org/news/closures-in-javascript-explained-with-examples/)