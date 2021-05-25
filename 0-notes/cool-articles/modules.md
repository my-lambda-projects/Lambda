![JavaScript Modules: A Beginner’s Guide](https://cdn-media-1.freecodecamp.org/images/1*bcZz-qb_DNpvrNNwQBhQmQ.jpeg)

by Preethi Kasireddy

![](https://cdn-media-1.freecodecamp.org/images/1*bcZz-qb_DNpvrNNwQBhQmQ.jpeg)

Source: [https://www.flickr.com/photos/qubodup/16258492451](https://www.flickr.com/photos/qubodup/16258492451)

If you’re a newcomer to JavaScript, jargon like “module bundlers vs. module loaders,” “Webpack vs. Browserify” and “AMD vs. CommonJS” can quickly become overwhelming.

The JavaScript module system may be intimidating, but understanding it is vital for web developers.

In this post, I’ll unpack these buzzwords for you in plain English (and a few code samples). I hope you find it helpful!

_Note: for simplicity’s sake, this will be divided into two sections: Part 1 will dive into explaining what modules are and why we use them. Part 2 (posted next week) will walk through what it means to bundle modules and the different ways to do so._

### Part 1: Can someone please explain what modules are again?

Good authors divide their books into chapters and sections; good programmers divide their programs into modules.

Like a book chapter, modules are just clusters of words (or code, as the case may be).

Good modules, however, are highly self-contained with distinct functionality, allowing them to be shuffled, removed, or added as necessary, without disrupting the system as a whole.

### Why use modules?

There are a lot of benefits to using modules in favor of a sprawling, interdependent codebase. The most important ones, in my opinion, are:

**1) Maintainability:** By definition, a module is self-contained. A well-designed module aims to lessen the dependencies on parts of the codebase as much as possible, so that it can grow and improve independently. Updating a single module is much easier when the module is decoupled from other pieces of code.

Going back to our book example, if you wanted to update a chapter in your book, it would be a nightmare if a small change to one chapter required you to tweak every other chapter as well. Instead, you’d want to write each chapter in such a way that improvements could be made without affecting other chapters.

**2) Namespacing:** In JavaScript, variables outside the scope of a top-level function are global (meaning, everyone can access them). Because of this, it’s common to have “namespace pollution”, where completely unrelated code shares global variables.

Sharing global variables between unrelated code is a big [no-no in development](http://c2.com/cgi/wiki?GlobalVariablesAreBad).

As we’ll see later in this post, modules allow us to avoid namespace pollution by creating a private space for our variables.

**3) Reusability:** Let’s be honest here: we’ve all copied code we previously wrote into new projects at one point or another. For example, let’s imagine you copied some utility methods you wrote from a previous project to your current project.

That’s all well and good, but if you find a better way to write some part of that code you’d have to go back and remember to update it everywhere else you wrote it.

This is obviously a huge waste of time. Wouldn’t it be much easier if there was — wait for it — a module that we can reuse over and over again?

### How can you incorporate modules?

There are many ways to incorporate modules into your programs. Let’s walk through a few of them:

#### Module pattern

The Module pattern is used to mimic the concept of classes (since JavaScript doesn’t natively support classes) so that we can store both public and private methods and variables inside a single object — similar to how classes are used in other programming languages like Java or Python. That allows us to create a public facing API for the methods that we want to expose to the world, while still encapsulating private variables and methods in a closure scope.

There are several ways to accomplish the module pattern. In this first example, I’ll use an anonymous closure. That’ll help us accomplish our goal by putting all our code in an anonymous function. (Remember: in JavaScript, functions are the only way to create new scope.)

**Example 1: Anonymous closure**

```
(function () {


  var myGrades = [93, 95, 88, 0, 55, 91];

  var average = function() {
    var total = myGrades.reduce(function(accumulator, item) {
      return accumulator + item}, 0);

      return 'Your average grade is ' + total / myGrades.length + '.';
  }

  var failing = function(){
    var failingGrades = myGrades.filter(function(item) {
      return item < 70;});

    return 'You failed ' + failingGrades.length + ' times.';
  }

  console.log(failing());

}());

```

With this construct, our anonymous function has its own evaluation environment or “closure”, and then we immediately evaluate it. This lets us hide variables from the parent (global) namespace.

What’s nice about this approach is that is that you can use local variables inside this function without accidentally overwriting existing global variables, yet still access the global variables, like so:

```
var global = 'Hello, I am a global variable :)';

(function () {


  var myGrades = [93, 95, 88, 0, 55, 91];

  var average = function() {
    var total = myGrades.reduce(function(accumulator, item) {
      return accumulator + item}, 0);

    return 'Your average grade is ' + total / myGrades.length + '.';
  }

  var failing = function(){
    var failingGrades = myGrades.filter(function(item) {
      return item < 70;});

    return 'You failed ' + failingGrades.length + ' times.';
  }

  console.log(failing());
  console.log(global);
}());


```

Note that the parenthesis around the anonymous function are required, because statements that begin with the keyword _function_ are always considered to be function declarations (remember, you can’t have unnamed function declarations in JavaScript.) Consequently, the surrounding parentheses create a function expression instead. If you’re curious, you can [read more here](http://stackoverflow.com/questions/1634268/explain-javascripts-encapsulated-anonymous-function-syntax).

**Example 2: Global import**  
Another popular approach used by libraries like [jQuery](https://github.com/jquery/jquery/tree/master/src) is global import. It’s similar to the anonymous closure we just saw, except now we pass in globals as parameters:

```
(function (globalVariable) {


  var privateFunction = function() {
    console.log('Shhhh, this is private!');
  }





  globalVariable.each = function(collection, iterator) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {
      for (var key in collection) {
        iterator(collection[key], key, collection);
      }
    }
  };

  globalVariable.filter = function(collection, test) {
    var filtered = [];
    globalVariable.each(collection, function(item) {
      if (test(item)) {
        filtered.push(item);
      }
    });
    return filtered;
  };

  globalVariable.map = function(collection, iterator) {
    var mapped = [];
    globalUtils.each(collection, function(value, key, collection) {
      mapped.push(iterator(value));
    });
    return mapped;
  };

  globalVariable.reduce = function(collection, iterator, accumulator) {
    var startingValueMissing = accumulator === undefined;

    globalVariable.each(collection, function(item) {
      if(startingValueMissing) {
        accumulator = item;
        startingValueMissing = false;
      } else {
        accumulator = iterator(accumulator, item);
      }
    });

    return accumulator;

  };

 }(globalVariable));

```

In this example, **_globalVariable_** is the only variable that’s global. The benefit of this approach over anonymous closures is that you declare the global variables upfront, making it crystal clear to people reading your code.

**Example 3: Object interface**  
Yet another approach is to create modules using a self-contained object interface, like so:

```
var myGradesCalculate = (function () {


  var myGrades = [93, 95, 88, 0, 55, 91];




  return {
    average: function() {
      var total = myGrades.reduce(function(accumulator, item) {
        return accumulator + item;
        }, 0);

      return'Your average grade is ' + total / myGrades.length + '.';
    },

    failing: function() {
      var failingGrades = myGrades.filter(function(item) {
          return item < 70;
        });

      return 'You failed ' + failingGrades.length + ' times.';
    }
  }
})();

myGradesCalculate.failing();
myGradesCalculate.average();
```

As you can see, this approach lets us decide what variables/methods we want to keep private (e.g. **_myGrades_**) and what variables/methods we want to expose by putting them in the return statement (e.g. **_average_** & **_failing_**).

**Example 4: Revealing module pattern**  
This is very similar to the above approach, except that it ensures all methods and variables are kept private until explicitly exposed:

```
var myGradesCalculate = (function () {


  var myGrades = [93, 95, 88, 0, 55, 91];

  var average = function() {
    var total = myGrades.reduce(function(accumulator, item) {
      return accumulator + item;
      }, 0);

    return'Your average grade is ' + total / myGrades.length + '.';
  };

  var failing = function() {
    var failingGrades = myGrades.filter(function(item) {
        return item < 70;
      });

    return 'You failed ' + failingGrades.length + ' times.';
  };




  return {
    average: average,
    failing: failing
  }
})();

myGradesCalculate.failing();
myGradesCalculate.average();
```

That may seem like a lot to take in, but it’s just the tip of the iceberg when it comes to module patterns. Here are a few of the resources I found useful in my own explorations:

- [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript) by Addy Osmani: a treasure trove of details in an impressively succinct read
- [Adequately Good by Ben Cherry](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html): a useful overview with examples of advanced usage of the module pattern
- [Blog of Carl Danley](https://carldanley.com/js-module-pattern/): module pattern overview and resources for other JavaScript patterns.

### CommonJS and AMD

The approaches above all have one thing in common: the use of a single global variable to wrap its code in a function, thereby creating a private namespace for itself using a closure scope.

While each approach is effective in its own way, they have their downsides.

For one, as a developer, you need to know the right dependency order to load your files in. For instance, let’s say you’re using Backbone in your project, so you include the script tag for Backbone’s source code in your file.

However, since Backbone has a hard dependency on Underscore.js, the script tag for the Backbone file can’t be placed before the Underscore.js file.

As a developer, managing dependencies and getting these things right can sometimes be a headache.

Another downside is that they can still lead to namespace collisions. For example, what if two of your modules have the same name? Or what if you have two versions of a module, and you need both?

So you’re probably wondering: can we design a way to ask for a module’s interface without going through the global scope?

Fortunately, the answer is yes.

There are two popular and well-implemented approaches: CommonJS and AMD.

#### CommonJS

CommonJS is a volunteer working group that designs and implements JavaScript APIs for declaring modules.

A CommonJS module is essentially a reusable piece of JavaScript which exports specific objects, making them available for other modules to _require_ in their programs. If you’ve programmed in Node.js, you’ll be very familiar with this format.

With CommonJS, each JavaScript file stores modules in its own unique module context (just like wrapping it in a closure). In this scope, we use the _module.exports_ object to expose modules, and _require_ to import them.

When you’re defining a CommonJS module, it might look something like this:

```
function myModule() {
  this.hello = function() {
    return 'hello!';
  }

  this.goodbye = function() {
    return 'goodbye!';
  }
}

module.exports = myModule;
```

We use the special object module and place a reference of our function into _module.exports_. This lets the CommonJS module system know what we want to expose so that other files can consume it.

Then when someone wants to use _myModule_, they can require it in their file, like so:

```
var myModule = require('myModule');

var myModuleInstance = new myModule();
myModuleInstance.hello();
myModuleInstance.goodbye();
```

There are two obvious benefits to this approach over the module patterns we discussed before:

1\. Avoiding global namespace pollution  
2\. Making our dependencies explicit

Moreover, the syntax is very compact, which I personally love.

Another thing to note is that CommonJS takes a server-first approach and synchronously loads modules. This matters because if we have three other modules we need to _require_, it’ll load them one by one.

Now, that works great on the server but, unfortunately, makes it harder to use when writing JavaScript for the browser. Suffice it to say that reading a module from the web takes a _lot_ longer than reading from disk. For as long as the script to load a module is running, it blocks the browser from running anything else until it finishes loading. It behaves this way because the JavaScript thread stops until the code has been loaded. (I’ll cover how we can work around this issue in Part 2 when we discuss module bundling. For now, that’s all we need to know).

#### AMD

CommonJS is all well and good, but what if we want to load modules asynchronously? The answer is called Asynchronous Module Definition, or AMD for short.

Loading modules using AMD looks something like this:

```
define(['myModule', 'myOtherModule'], function(myModule, myOtherModule) {
  console.log(myModule.hello());
});
```

What’s happening here is that the **_define_** function takes as its first argument an array of each of the module’s dependencies. These dependencies are loaded in the background (in a non-blocking manner), and once loaded **_define_** calls the callback function it was given.

Next, the callback function takes, as arguments, the dependencies that were loaded — in our case, **_myModule_** and **_myOtherModule —_** allowing the function to use these dependencies. Finally, the dependencies themselves must also be defined using the **_define_** keyword.

For example, **_myModule_** might look like this:

```
define([], function() {

  return {
    hello: function() {
      console.log('hello');
    },
    goodbye: function() {
      console.log('goodbye');
    }
  };
});
```

So again, unlike CommonJS, AMD takes a browser-first approach alongside asynchronous behavior to get the job done. (Note, there are a lot of people who strongly believe that dynamically loading files piecemeal as you start to run code isn’t favorable, which we’ll explore more when in the next section on module-building).

Aside from asynchronicity, another benefit of AMD is that your modules can be objects, functions, constructors, strings, JSON and many other types, while CommonJS only supports objects as modules.

That being said, AMD isn’t compatible with io, filesystem, and other server-oriented features available via CommonJS, and the function wrapping syntax is a bit more verbose compared to a simple _require_ statement.

#### UMD

For projects that require you to support both AMD and CommonJS features, there’s yet another format: Universal Module Definition (UMD).

UMD essentially creates a way to use either of the two, while also supporting the global variable definition. As a result, UMD modules are capable of working on both client and server.

Here’s a quick taste of how UMD goes about its business:

```
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {

    define(['myModule', 'myOtherModule'], factory);
  } else if (typeof exports === 'object') {

    module.exports = factory(require('myModule'), require('myOtherModule'));
  } else {

    root.returnExports = factory(root.myModule, root.myOtherModule);
  }
}(this, function (myModule, myOtherModule) {

  function notHelloOrGoodbye(){};
  function hello(){};
  function goodbye(){};


  return {
      hello: hello,
      goodbye: goodbye
  }
}));
```

For more examples of UMD formats, check out this [enlightening repo](https://github.com/umdjs/umd) on GitHub.

### Native JS

Phew! Are you still around? I haven’t lost you in the woods here? Good! Because we have \*one more\* type of module to define before we’re done.

As you probably noticed, none of the modules above were native to JavaScript. Instead, we’ve created ways to _emulate_ a modules system by using either the module pattern, CommonJS or AMD.

Fortunately, the smart folks at TC39 (the standards body that defines the syntax and semantics of ECMAScript) have introduced built-in modules with ECMAScript 6 (ES6).

ES6 offers up a variety of possibilities for importing and exporting modules which others have done a great job explaining — here are a few of those resources:

- [jsmodules.io](http://jsmodules.io/cjs.html)
- [exploringjs.com](http://exploringjs.com/es6/ch_modules.html)

What’s great about ES6 modules relative to CommonJS or AMD is how it manages to offer the best of both worlds: compact and declarative syntax _and_ asynchronous loading, plus added benefits like better support for cyclic dependencies.

Probably my favorite feature of ES6 modules is that imports are _live_ read-only views of the exports. (Compare this to CommonJS, where imports are copies of exports and consequently not alive).

Here’s an example of how that works:

```


var counter = 1;

function increment() {
  counter++;
}

function decrement() {
  counter--;
}

module.exports = {
  counter: counter,
  increment: increment,
  decrement: decrement
};




var counter = require('../../lib/counter');

counter.increment();
console.log(counter.counter);
```

In this example, we basically make two copies of the module: one when we export it, and one when we require it.

Moreover, the copy in main.js is now disconnected from the original module. That’s why even when we increment our counter it still returns 1 — because the counter variable that we imported is a disconnected copy of the counter variable from the module.

So, incrementing the counter will increment it in the module, but won’t increment your copied version. The only way to modify the copied version of the counter variable is to do so manually:

```
counter.counter++;
console.log(counter.counter);
```

On the other hand, ES6 creates a live read-only view of the modules we import:

```

export let counter = 1;

export function increment() {
  counter++;
}

export function decrement() {
  counter--;
}



import * as counter from '../../counter';

console.log(counter.counter);
counter.increment();
console.log(counter.counter);
```

Cool stuff, huh? What I find really compelling about live read-only views is how they allow you to split your modules into smaller pieces without losing functionality.

Then you can turn around and merge them again, no problem. It just “works.”

### Looking forward: bundling modules

Wow! Where does the time go? That was a wild ride, but I sincerely hope it gave you a better understanding of modules in JavaScript.

In the next section I’ll walk through module bundling, covering core topics including:

- Why we bundle modules
- Different approaches to bundling
- ECMAScript’s module loader API
- …and more. :)

_NOTE: To keep things simple, I skipped over some of the nitty-gritty details (think: cyclic dependencies) in this post. If I left out anything important and/or fascinating, please let me know in the comments!_

---

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started](https://www.freecodecamp.org/learn/)
