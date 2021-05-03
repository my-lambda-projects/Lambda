# A Toolkit to Harness the Full Power of JavaScript Functions

> Functions form an integral role in the JavaScript language — they are the means whereby logic is executed. But functions in Javascript are…

Functions are blocks of code that are defined **once** but may be invoked or executed **any number of times**. A function is composed of a sequence of statements called the **function body**. Values can be passed to a function, and the function will always return a value (either _undefined_ if not explicitly set, otherwise the value stipulated in the function's **_return_** statement).

**function** helloWorld(){  
   **return** 'hello world'; 
}helloWorld(); _//_ returns _'hello world'_**function** noReturnValue(){  
   const t = 'hello world'; 
}noReturnValue(); // returns _undefined_

JavaScript functions are also **first-class objects**, because they can have **properties** and **methods** just like any other object. They are, in fact, [**Function**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) objects.

JavaScript functions can thus be thought of as **_objects that can be called or invoked_**.

This being the case, JavaScript functions can be manipulated and utilised in interesting ways. They can, for example, be

1.  **_assigned to variables_**
2.  **_stored in the properties of objects or the elements of arrays_**
3.  **_passed as arguments to other functions_**
4.  **_returned as the result of other functions_**
5.  **_assigned properties through the Function object_**
6.  **_nested within other functions_**

Let's see some examples of these awesome features!

Functions can also be assigned to **object properties** rather than global properties. In this case, they are called **methods**.

> A method is a Javascript function that is stored as a property of an object and invoked through that object.

**const** o = new **Object**(); o.square = **function**(x){    _// 'square' is a method of object 'o'_  
   **return** x \* x; 
}**const** y = o.square(16); _// 256_ **const** squareRoot = **function**(x){    _// a function literal_  
  **return** Math.sqrt(x); 
}o.root = squareRoot; _// 'root' is now a method of object 'o'_  
o.root(4); _// 2_

Assigning a function to an element of an array:

**const** a = new Array(3); a\[0\] = **function**(x){return x \* x; }  
a\[1\] = 20; 
a\[2\] = a\[0\](a\[1\]); // the array element can now be invoked

As we have just seen, a method is a function that is stored as a property of an object and invoked through that object.

Any **function** that is used as a **method** is effectively passed an implicit argument: **the object through which it is invoked**.

The object through which a method is invoked becomes the value of the **_this_** keyword within the body of the method.

You can thus refer to the method's object through the **_this_** keyword.

**Object literal:**

**const** calculator = {  
   operand1 : 1, 
   operand2: 2, 
   compute: function(){  

       this.result = this.operand1 + this.operand2;  

   }  
}calculator.compute(); 
console.log(calculator.result); // 3

**Function constructor:**

**function** Person(first, last, age, eyeColor) {  
   this.firstName = first; 
   this.lastName = last; 
   this.age = age; 
   this.eyeColor = eyeColor; 
   this.name = function() {  

      **return** this.firstName + " " + this.lastName;  

   }; 
}**const** father = new Person('Patrick', 'Henry', 56, 'blue'); console.log(father.name()); // _'Patrick Henry'_

**ES6 class:**

**class** Individual{constructor(){  

      this.status = 'indifferent';  

   }smile(){  

      this.status = 'happy';  

   }frown(){  

      this.status = 'sad';  

   }}; **const** Jack = new Individual(); _// new object created here_  
Jack.smile(); _// invoking the object's method 'smile()'_  
console.log(Jack.status); // _'happy'_

OK, so the **_this_** keyword refers to the object through which the method is invoked. But can you take advantage of the **_this_** keyword in a normal JavaScript function (that is, one not invoked as a property of an object)?

**Yes**! JavaScript has also made available the **_apply()_**_, _ **_call()_** and **_bind()_** helper methods, to allow us invoke a function **as if it were a method of an object**.

The **first** argument to **_call(), apply()_** and **_bind()_** helper methods is the **object on which the function must be invoked**; this argument becomes the value of the this keyword within the body of the function.

Any remaining arguments to **_call_()** are the **values** passed to the function that is invoked.

For example, to pass two numbers to the function f() and invoke it as a method of object o:

**const** o = {  
   total: 23  
}**const** f = function(a, b){  
   **return** this.total + a + b; 
}f.**call**(o, 1, 2); _// 26_

The **_apply_()** method is like the **_call_()** method, expect that the arguments can be passed to the function as an **ARRAY**:

**const** o = {  
   total: 25  
}**const** f = function(a, b){  
   **return** this.total + a + b; 
}f.**apply**(o, \[1, 2\]); _// 28_

**_bind_()** — added as part of ECMAScript 5 — returns a bound function that, when executed **later**, will have the correct context for the **_this_** keyword.

So **_bind_()** can be used when the function needs to be **called later** whenever it's needed.

**const** bound = f.**bind**(o, 1, 2); _// create a bound function with the   context which will be invoked later_console.dir(bound); _// returns a function_console.log(bound()); _// invokes the bound function_

Since a JavaScript function is an object, you're allowed to pass it as a parameter into another function. In fact, helper methods like [**Array.prototype.sort()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), [**Array.prototype.reduce()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce), [**setTimeout()**](https://www.w3schools.com/jsref/met_win_settimeout.asp) and [**setInterval()**](https://www.w3schools.com/jsref/met_win_setinterval.asp) all expect a function in their arguments.

**function** add(x, y) {  
   **return** x + y; 
}  
**function** subtract(x, y) {  
   **return** x - y; 
}  
**function** divide(x, y) {  
   **return** x % y; 
}  
**function** multiply(x, y) {  
   **return** x \* y; 
}_// this function has the 'operator' function as one of its arguments_  
**function** operate(operator, operand1, operand2){  
   **return** operator(operand1, operand2); 
}**const** i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5)); 

The **Array.sort()** method:

**const** myList = \['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog'\]; **const** compareFunction = (a, b) => {  
 **return** ( a < b ) ? -1 : ( a > b ) ? 1 : 0; 
}_// sort my list alphabetically  
_myList.sort((a, b) => compareFunction(a, b)); 

As indicated earlier, every JavaScript function is actually a `**Function**` object. This can be seen with the code `(function(){}).constructor === Function` which returns true.

This being the case, when a function needs a variable whose value persists across invocations, it can be convenient to use a property of the **Function** object, instead of cluttering up the namespace by defining a global variable.

For example, suppose you want to write a function that **returns a unique integer whenever it is invoked**. The function must never return the same value twice. In order to manage this, the function needs to keep track of the values it has already returned, and this information must persist across function invocations.

You could store this information in a global variable, but that is unnecessary because the information is used only by the function itself. It is better to store the information in a **property of the Function object**.

_/\* Create and initialise the "static" variable. Function declarations are processed before code is executed, so we can do this assignment before the function declaration. \*/_uniqueInteger.counter = 0; _/\* Here's the function. It returns a different value each time it is called and uses a "static" property of itself to keep track of the last value it returned. \*/_**function** uniqueInteger(){  
   _// increment and return our "static" variable_ **return** uniqueInteger.counter ++; 
}const i = uniqueInteger(); _// 0_  
const j = uniqueInteger(); _// 1_  
const k = uniqueInteger(); _// 2_  
const l = uniqueInteger(); _// 3_

In Javascript, functions can be nested within other functions

**function** hypothenuse (a, b) {  
   **function** square(x) { return x \* x}; 
 **return** Math.sqrt(square(a) + square(b)); 
}**const** h = hypothenuse(5, 8); 
_// 9.433981132056603_

JavaScript functions are essentially a combination of code to be executed and the scope in which to execute them. This combination of code and scope is known as a **closure**. All JavaScript functions are closures. Where closures become interesting is in the case of **nested functions**.

> Functions in JavaScript are lexically rather than **dynamically** scoped. This means that they run in the scope in which they are **defined** not the scope in which they are **executed**.

Confused? OK, let's take a step back and explore how scope works in JavaScript and then revisit this rather cryptic statement.

When a function is **defined**, the **current scope chain** is saved and becomes part of the **internal state of the function**.

At the top level, the scope chain consists simply of the **global object**.

When you define a **nested function**, however, the lexical chain also **includes the containing function**. This means that nested functions can access all of the arguments and local variables of their containing function.

**function** foo(arg) {  
   **function** bar() {  

      console.log(\ `arg: ${arg}\` );  

   }  
   bar(); 
}console.log(foo('hello')); // arg: hello

The direct scope of arg is **_foo()_**, but it is also accessible in the nested scope **_bar()_**. With regard to nesting, **foo() is the outer scope** and **bar() is the inner scope**.

Sharing the scope chain in this way is made possible through the **Call Object.**

When the javascript interpreter invokes a function, it does the following:

1.  **It sets the scope to the scope chain that was in effect when the function was defined.**
2.  It adds a new object (known as the **call object**) to the front of the scope chain.
3.  This object is initialised with a property named **_arguments_** that refers to the [**Arguments**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object for the function.
4.  Next, **named parameters** of the function are added to the call object.
5.  Any **local variables** declared in the function are also defined within this object.

Since this call object is at the **head** of the scope chain, local variables, function parameters and the Arguments object are **all in scope within the function**.

Consider a function **g** defined within a function **f**. When **f** is invoked, the scope chain consists of the **call object for that invocation of f, ** followed by the **global object.**

**g** is **defined** within **f**, so the scope chain is saved as part of the definition of **g**.

When **g** is then **invoked**, the scope chain includes three objects:

*   **its own call object**
*   **the call object of f**
*   **the global object**

**function** f(){ /\* **my scope chain when invoked consists of**   

     1) my own call object   
     2) the global object \*/ **function** g(){ /\* **my** **scope chain when invoked consists of**   
             1) my own call object   
             2) the call object of f when I was defined  
             3) the global object \*/ }  

}

If the nested function is used **only within the outer function**, the only reference to the nested function is ONLY in the **call object**. Then, when the outer function returns, the nested function refers to the call object, and the call object refers to the nested function, but since there are no other references to either one, both objects become available for **garbage collection**.

Things are different, however, if you have a reference to the nested function in the **global scope.** In this case, the nested function is **exported outside the scope in which it is defined**.

How would one setup a reference to a nested function in the global scope? By using the nested function as the **return value of the outer function**, or by s**toring the nested function as the property of some other object**.

In this case, there is an **external reference** to the nested function, and the nested function **retains its reference to the call object of the outer function**.

In this case, the **call object** for that **one particular invocation** of the outer function **continues to live**, and the names and values of the function arguments and local variables persist to this object.

A _closure_ is therefore the combination of a function and the lexical environment within which that function was **declared**. **This environment consists of any local variables that were in-scope at the time the closure was created** **(its birth scope)**.

The name stems from the fact that a closure "closes over" the _free_ variables of a function. A variable is _free_ if it is not declared within the function — that is, if it comes "from outside."

> If a function leaves its scope, it stays connected, through its call object, to the **scope chain that was in existence when it was first defined.**

Let's see some examples of closure in action.

**Closure example 1:**

**function** createIncrementer(startValue) {  
   **return** **function** (step) {  

      startValue += step;  
      **return** startValue;  

   }; 
}

The function returned by **createIncrementer()** does not lose its connection to **startValue** — the variable **provides the function with state that persists across function calls**:

const counterA = createIncrementer(5); 
const counterB = createIncrementer(10); counterA(2); // 7  
counterB(2); // 12  
counterA(7); // 14  
counterB(7); // 19

In this example, there is an **external reference** to the nested function, and the nested function **retains its reference to the call object of the outer function**. In this case, the call object for that **one particular invocation** of the outer function **continues to live**, and the names and values of the function arguments and local variables persist to this object.

**Closure example 2:**

**function** makeBrowser() {  
   const name = 'Mozilla'; 
   **function** displayName() {  

      console.log(name);   

   }  
   **return** displayName; 
}const myBrowser = makeBrowser(); 
myBrowser(); // _'Mozilla'_

In this example, **makeBrowser** is a reference to the instance of the function **displayName** created when **makeBrowser** is run. The instance of **displayName** maintains a reference to its lexical environment, within which the variable **name** exists. For this reason, when **makeBrowser** is invoked, the variable **name** remains available for use and "Mozilla" is logged to the console.

**Closure example 3:**

**function** makeAdder(x) {   
   **return** **function**(y) {   

      **return** x + y;   

   }; 
}   
const add5 = makeAdder(5); 
const add10 = makeAdder(10); 
console.log(add5(2)); // _7_  
console.log(add10(2)); // _12_

In this example, the function **makeAdder(x)** is defined, which takes a single argument, x, and returns a new function. The function it returns takes a single argument, y, and returns the sum of x and y.

In essence, makeAdder is a function factory — it creates functions which can add a specific value to their argument. Here we use our function factory to create two new functions — one that adds 5 to its argument, and one that adds 10.

**add5** and **add10** are both closures. They share the same function body definition, but **store different lexical environments**. In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.

**Closure example 4:**

const uniqueId = (**function**() {   
   // the call object of this function holds our value let id = 0; // this is the private persistent value return **function**(){  

      **return** id++; // return and increment  

   }})(); // invoke the outer function after defining it

Perhaps you want to write a function that can remember a value across invocations, but the value cannot be stored in a local variable, because the call object does not persist across invocations.

A global variable would work, but that pollutes the global namespace.

In the above example we use a closure to create a persistent and private variable that ONLY your function has access to.

The outer function returns a nested function that has access to the persistent value (which is locked in its scope chain when the nested function is defined).

We then store this nested function in the uniqueId variable.

let i = uniqueId(); // 0  
let j = uniqueId(); // 1  
let k = uniqueId(); // 2  
let l = uniqueId(); // 3

Closures are useful because they let you associate some data (the lexical environment) with a function that operates on that data.

This has obvious parallels to object-oriented programming, where objects allow us to associate some data (the object's properties) with one or more methods.

Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

[Source](https://itnext.io/a-toolkit-to-harness-the-full-power-of-javascript-functions-633baaaba337)
