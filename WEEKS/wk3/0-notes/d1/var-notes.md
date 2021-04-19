# Why don't we use var anymore?

> If you used to code in Javascript in the old days, you used the "var" keyword a lot. There was no other way to declare a variable. It is…

[![Samuel Coelho](https://miro.medium.com/fit/c/96/96/1*6C8lL-kotEXB-7qULVCuhw.jpeg)](https://medium.com/@codingsam?source=post_page-----999428999994--------------------------------)

![](https://miro.medium.com/max/60/1*NB8h3wmUQ7sXTs-B3EZkIQ.jpeg?q=20)

![](https://miro.medium.com/max/1500/1*NB8h3wmUQ7sXTs-B3EZkIQ.jpeg)

Embracing let and const and drop out var

If you used to code in Javascript in the old days, you used the [_var_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) keyword a lot. There was no other way to declare a variable. It was really simple. The only thing you needed to do was just something like this:

`var x = 3; var y = 'hello'; // etc...`

Since ES6, there are two new keywords, [_const_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) and [_let_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let). The first one is a bit self-explanatory, it allows you to define a constant. If you do:

`const x = 2;`

You can't reassign another value to the constant _x_. There are many programming languages that allow developers to define constants. This is a good way to write less error-prone code. However, there is also this "_let_" keyword, which allows you to declare variables. And that's all you need, just another keyword that does the same as _var_, right? Why there is not just "var" and _const_?

> Why don't we use var anymore?

To answer that question, you need to know how _var_ really works. In Javascript, before ES6, there was no **block scope**. You have **function scope** instead. Let's break down these two concepts.

When you declare a variable or a function, it will be accessible inside the block it was declared on. Most programming languages have this type of scope, for instance, Java. See the code snippet below:

In this example, the variable i only exists inside the for loop

You can only use the variable _i_ inside the for loop. It doesn't exist outside that block. In Java, each time you use a "{" you are creating a new block and the "}" means, you are closing that block. Of course, if you declare a variable outside the block, you can use it inside the block.

Let me show you the following diagram that illustrates how the block scope would work in this example:

![](https://miro.medium.com/max/60/1*WQqkmBqRLovbfM1fp-2XlQ.png?q=20)

![](https://miro.medium.com/max/644/1*WQqkmBqRLovbfM1fp-2XlQ.png)

Block scope using the Example class.

Each rectangle is a scope. The "children" scopes can access the functions and variables in the "parent" scopes, but the "parents" cannot access the "children". In this example, the Example class is a parent of _processArray_ method, which is a parent of the _for loop_ block. The Example class cannot access whatever belongs to the _processArray_ method, which cannot access whatever belongs to the _for loop_. However, the _for loop_ can access anything in the _processArray_ method and anything in the _Example_ class, for instance, a variable or any other method. This is the kind of scope that most developers are used to work with.

Unlike Java, Javascript (ES5) creates scopes based on functions. This means, once you declare a variable inside a function, you can use it anywhere in that function.

In this function, the last console.log call would print the variable "i" without any error

Of course, you also have the global scope. Each time you declare a variable outside a function, it will belong to the global scope.

Let me show you another diagram, but this time, for the function scope:

![](https://miro.medium.com/max/60/1*3JueUzrZxCjytZCh9_sDuw.png?q=20)

![](https://miro.medium.com/max/644/1*3JueUzrZxCjytZCh9_sDuw.png)

Function scope for the processArray function

Looks much simpler, right? But where is the for loop?

The for loop is a block, but there is no block scope here, that's why, it does not have its own scope.

It's all about scope! Most programming languages have block scope. Why? Because it is less error-prone. You can declare variables inside blocks (if statements, for loops and so on) without worrying about overwriting some previously declared variable.

Let me show you an example. Let's say you are implementing a function that prints each position of a matrix. You will write a _for loop_ inside another _for loop_. In ES5, where you only have the _var_ keyword available, a beginner would write something like this:

Function that prints each position of a matrix, written in Javascript ES5

The output will be:

![](https://miro.medium.com/max/40/1*BvtUBy7SAw6t9pGK-mDATQ.png?q=20)

![](https://miro.medium.com/max/168/1*BvtUBy7SAw6t9pGK-mDATQ.png)

Output of printMatrix function in ES5

It only logged the first line. To help you understand what is going on, let me show you a scope diagram for this example:

![](https://miro.medium.com/max/60/1*ijeggeoI_dbSCgIrwQrvBQ.png?q=20)

![](https://miro.medium.com/max/644/1*ijeggeoI_dbSCgIrwQrvBQ.png)

Breaking down the scope in the printMatrix ES5 version

All variables inside the _printMatrix_ function are on the same level. The two _for loops_ are actually using the same variable _i_!

What happened? When I started coding in Javascript some years ago, I wrote a lot of code like this, because I used to code a lot in Java, which has block scope. So, I thought that if I declared a variable inside the loop, it will stay there… But not really.

After a lot of bugs and frustration I learned that Javascript does not have block scope. There is only function scope. But, even after I learned about it, I forgot a lot of times! This is something that is really easy to forget about. The usual expectation is that, in the second for loop, you are creating a new variable. But you are not. You are just overwriting the variable _i_ in the first _for loop_. After running the second loop, the condition of the first one will be evaluated again, but the variable _i_ now has the value 3 (the size of the first line in the matrix), which is equal to the matrix length (3). The condition returns false and the loop stops. That's why only the first line of the matrix gets logged.

> In Javascript, it doesn't matter how many times you use the keyword "var". If it's the same name in the same function, you are pointing to the same variable.

This function scope can be a source of a lot of bugs. Fortunately, Javascript has been changing and now we have ES6 and more. There are these two "new" keywords, _const_ and _let_, which allow you to define a constant and a variable, respectively. They both work with block scope, which means, if variables or constants are declared inside a block, they will not be available to the "parent" blocks.

Let's rewrite the previous example, logging the matrix, taking advantage of these new keywords. If you replace _var_ by _let_ and add use _const_ for things you know you will not need to change after initialization…

Function to print each position of a matrix, but now written in ES6 (see the let and const keywords being used)

The output will be:

![](https://miro.medium.com/max/14/1*Qn2GnKEM3bIgxec14dc5aQ.png?q=20)

![](https://miro.medium.com/max/168/1*Qn2GnKEM3bIgxec14dc5aQ.png)

Output of printMatrix function in ES5

All positions in the matrix got logged. It just worked and I just had to replace _var_ by _let_ and _const_ keywords! Because in each _for loop_ I am actually creating a different variable _i_. In the second loop the first _i_ will not get overwritten.

Let's see what happened under the hood in terms of scope:

![](https://miro.medium.com/max/60/1*71bRLyJxbpXYrAFc5xzJTA.png?q=20)

![](https://miro.medium.com/max/644/1*71bRLyJxbpXYrAFc5xzJTA.png)

Breaking down the scope in the printMatrix ES6 version

Seems a bit more complicated, but this gives you block scope and each _for loop_ has its own variable _i_. In the old days Javascript, you would need to give different names to avoid this naming conflict. But seriously, when you need to do a _for loop_ to iterate over an array, the first name that comes to your head, for the current array index value is "i", isn't it?

**Just a small note**: I know that you have [_forEach_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [_map_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), and more functions to deal with arrays. This is just a simple example to show how the _var_, _let_ and _const_ keywords work.

_let_ and _const_ are not just two new cool keywords, they also introduce block scope that allows us to write clean and less error-prone code.

Why don't we use _var_ anymore? Because now there is a better way of declaring variables and even constants… With block scope! You don't need to think twice when declaring variables inside blocks. I think that is easier to work with block scope than with function scope. The _var_ usage has been being discouraged. For instance, if you use [ESLint](https://eslint.org/) to check your code, you can configure a "[no-var](https://eslint.org/docs/rules/no-var)" rule that throws an error if there is any _var_ being used.

Please, keep in mind that you should use a transpiler tool, like [Babel](https://babeljs.io/), to transpile your code from ES6 to ES5, to make sure it will run in any browser. Not all browsers support the complete ES6 specification yet.

Embrace _let_ and _const_ and let _var_ go forever!

I hope you enjoyed and learned something. Happy coding! :)

Let me know what you think and follow me for more cool content about dev stuff :)

*   @ Medium
*   [codingsam @ Twitter](https://twitter.com/codingsam01)
*   [codingsam01 @ Instagram](https://www.instagram.com/codingsam01)


[Source](https://blog.usejournal.com/awesome-javascript-no-more-var-working-title-999428999994)
