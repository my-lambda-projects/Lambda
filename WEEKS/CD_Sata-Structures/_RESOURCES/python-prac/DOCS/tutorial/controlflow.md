### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](datastructures.html '5. Data Structures') |
- [previous](introduction.html '3. An Informal Introduction to Python') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-

<span id="tut-morecontrol"></span>

# <span class="section-number">4. </span>More Control Flow Tools<a href="#more-control-flow-tools" class="headerlink" title="Permalink to this headline">¶</a>

Besides the <a href="https://docs.python.org/3/reference/compound_stmts.html#while" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">while</code></a> statement just introduced, Python uses the usual flow control statements known from other languages, with some twists.

<span id="tut-if"></span>

## <span class="section-number">4.1. </span>`if` Statements<a href="#if-statements" class="headerlink" title="Permalink to this headline">¶</a>

Perhaps the most well-known statement type is the <a href="https://docs.python.org/3/reference/compound_stmts.html#if" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">if</code></a> statement. For example:

    >>> x = int(input("Please enter an integer: "))
    Please enter an integer: 42
    >>> if x < 0:
    ...     x = 0
    ...     print('Negative changed to zero')
    ... elif x == 0:
    ...     print('Zero')
    ... elif x == 1:
    ...     print('Single')
    ... else:
    ...     print('More')
    ...
    More

There can be zero or more <a href="https://docs.python.org/3/reference/compound_stmts.html#elif" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">elif</code></a> parts, and the <a href="https://docs.python.org/3/reference/compound_stmts.html#else" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">else</code></a> part is optional. The keyword ‘`elif`’ is short for ‘else if’, and is useful to avoid excessive indentation. An `if` … `elif` … `elif` … sequence is a substitute for the `switch` or `case` statements found in other languages.

<span id="tut-for"></span>

## <span class="section-number">4.2. </span>`for` Statements<a href="#for-statements" class="headerlink" title="Permalink to this headline">¶</a>

The <a href="https://docs.python.org/3/reference/compound_stmts.html#for" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">for</code></a> statement in Python differs a bit from what you may be used to in C or Pascal. Rather than always iterating over an arithmetic progression of numbers (like in Pascal), or giving the user the ability to define both the iteration step and halting condition (as C), Python’s `for` statement iterates over the items of any sequence (a list or a string), in the order that they appear in the sequence. For example (no pun intended):

    >>> # Measure some strings:
    ... words = ['cat', 'window', 'defenestrate']
    >>> for w in words:
    ...     print(w, len(w))
    ...
    cat 3
    window 6
    defenestrate 12

Code that modifies a collection while iterating over that same collection can be tricky to get right. Instead, it is usually more straight-forward to loop over a copy of the collection or to create a new collection:

    # Strategy:  Iterate over a copy
    for user, status in users.copy().items():
        if status == 'inactive':
            del users[user]

    # Strategy:  Create a new collection
    active_users = {}
    for user, status in users.items():
        if status == 'active':
            active_users[user] = status

<span id="tut-range"></span>

## <span class="section-number">4.3. </span>The <a href="https://docs.python.org/3/library/stdtypes.html#range" class="reference internal" title="range"><code class="sourceCode python"><span class="bu">range</span>()</code></a> Function<a href="#the-range-function" class="headerlink" title="Permalink to this headline">¶</a>

If you do need to iterate over a sequence of numbers, the built-in function <a href="https://docs.python.org/3/library/stdtypes.html#range" class="reference internal" title="range"><code class="sourceCode python"><span class="bu">range</span>()</code></a> comes in handy. It generates arithmetic progressions:

    >>> for i in range(5):
    ...     print(i)
    ...
    0
    1
    2
    3
    4

The given end point is never part of the generated sequence; `range(10)` generates 10 values, the legal indices for items of a sequence of length 10. It is possible to let the range start at another number, or to specify a different increment (even negative; sometimes this is called the ‘step’):

    range(5, 10)
       5, 6, 7, 8, 9

    range(0, 10, 3)
       0, 3, 6, 9

    range(-10, -100, -30)
      -10, -40, -70

To iterate over the indices of a sequence, you can combine <a href="https://docs.python.org/3/library/stdtypes.html#range" class="reference internal" title="range"><code class="sourceCode python"><span class="bu">range</span>()</code></a> and <a href="https://docs.python.org/3/library/functions.html#len" class="reference internal" title="len"><code class="sourceCode python"><span class="bu">len</span>()</code></a> as follows:

    >>> a = ['Mary', 'had', 'a', 'little', 'lamb']
    >>> for i in range(len(a)):
    ...     print(i, a[i])
    ...
    0 Mary
    1 had
    2 a
    3 little
    4 lamb

In most such cases, however, it is convenient to use the <a href="https://docs.python.org/3/library/functions.html#enumerate" class="reference internal" title="enumerate"><code class="sourceCode python"><span class="bu">enumerate</span>()</code></a> function, see <a href="datastructures.html#tut-loopidioms" class="reference internal"><span class="std std-ref">Looping Techniques</span></a>.

A strange thing happens if you just print a range:

    >>> print(range(10))
    range(0, 10)

In many ways the object returned by <a href="https://docs.python.org/3/library/stdtypes.html#range" class="reference internal" title="range"><code class="sourceCode python"><span class="bu">range</span>()</code></a> behaves as if it is a list, but in fact it isn’t. It is an object which returns the successive items of the desired sequence when you iterate over it, but it doesn’t really make the list, thus saving space.

We say such an object is <a href="https://docs.python.org/3/glossary.html#term-iterable" class="reference internal"><span class="xref std std-term">iterable</span></a>, that is, suitable as a target for functions and constructs that expect something from which they can obtain successive items until the supply is exhausted. We have seen that the <a href="https://docs.python.org/3/reference/compound_stmts.html#for" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">for</code></a> statement is such a construct, while an example of a function that takes an iterable is <a href="https://docs.python.org/3/library/functions.html#sum" class="reference internal" title="sum"><code class="sourceCode python"><span class="bu">sum</span>()</code></a>:

    >>> sum(range(4))  # 0 + 1 + 2 + 3
    6

Later we will see more functions that return iterables and take iterables as arguments. Lastly, maybe you are curious about how to get a list from a range. Here is the solution:

    >>> list(range(4))
    [0, 1, 2, 3]

In chapter <a href="datastructures.html#tut-structures" class="reference internal"><span class="std std-ref">Data Structures</span></a>, we will discuss in more detail about <a href="https://docs.python.org/3/library/stdtypes.html#list" class="reference internal" title="list"><code class="sourceCode python"><span class="bu">list</span>()</code></a>.

<span id="tut-break"></span>

## <span class="section-number">4.4. </span>`break` and `continue` Statements, and `else` Clauses on Loops<a href="#break-and-continue-statements-and-else-clauses-on-loops" class="headerlink" title="Permalink to this headline">¶</a>

The <a href="https://docs.python.org/3/reference/simple_stmts.html#break" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">break</code></a> statement, like in C, breaks out of the innermost enclosing <a href="https://docs.python.org/3/reference/compound_stmts.html#for" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">for</code></a> or <a href="https://docs.python.org/3/reference/compound_stmts.html#while" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">while</code></a> loop.

Loop statements may have an `else` clause; it is executed when the loop terminates through exhaustion of the iterable (with <a href="https://docs.python.org/3/reference/compound_stmts.html#for" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">for</code></a>) or when the condition becomes false (with <a href="https://docs.python.org/3/reference/compound_stmts.html#while" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">while</code></a>), but not when the loop is terminated by a <a href="https://docs.python.org/3/reference/simple_stmts.html#break" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">break</code></a> statement. This is exemplified by the following loop, which searches for prime numbers:

    >>> for n in range(2, 10):
    ...     for x in range(2, n):
    ...         if n % x == 0:
    ...             print(n, 'equals', x, '*', n//x)
    ...             break
    ...     else:
    ...         # loop fell through without finding a factor
    ...         print(n, 'is a prime number')
    ...
    2 is a prime number
    3 is a prime number
    4 equals 2 * 2
    5 is a prime number
    6 equals 2 * 3
    7 is a prime number
    8 equals 2 * 4
    9 equals 3 * 3

(Yes, this is the correct code. Look closely: the `else` clause belongs to the <a href="https://docs.python.org/3/reference/compound_stmts.html#for" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">for</code></a> loop, **not** the <a href="https://docs.python.org/3/reference/compound_stmts.html#if" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">if</code></a> statement.)

When used with a loop, the `else` clause has more in common with the `else` clause of a <a href="https://docs.python.org/3/reference/compound_stmts.html#try" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">try</code></a> statement than it does with that of <a href="https://docs.python.org/3/reference/compound_stmts.html#if" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">if</code></a> statements: a <a href="https://docs.python.org/3/reference/compound_stmts.html#try" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">try</code></a> statement’s `else` clause runs when no exception occurs, and a loop’s `else` clause runs when no `break` occurs. For more on the `try` statement and exceptions, see <a href="errors.html#tut-handling" class="reference internal"><span class="std std-ref">Handling Exceptions</span></a>.

The <a href="https://docs.python.org/3/reference/simple_stmts.html#continue" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">continue</code></a> statement, also borrowed from C, continues with the next iteration of the loop:

    >>> for num in range(2, 10):
    ...     if num % 2 == 0:
    ...         print("Found an even number", num)
    ...         continue
    ...     print("Found an odd number", num)
    ...
    Found an even number 2
    Found an odd number 3
    Found an even number 4
    Found an odd number 5
    Found an even number 6
    Found an odd number 7
    Found an even number 8
    Found an odd number 9

<span id="tut-pass"></span>

## <span class="section-number">4.5. </span>`pass` Statements<a href="#pass-statements" class="headerlink" title="Permalink to this headline">¶</a>

The <a href="https://docs.python.org/3/reference/simple_stmts.html#pass" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">pass</code></a> statement does nothing. It can be used when a statement is required syntactically but the program requires no action. For example:

    >>> while True:
    ...     pass  # Busy-wait for keyboard interrupt (Ctrl+C)
    ...

This is commonly used for creating minimal classes:

    >>> class MyEmptyClass:
    ...     pass
    ...

Another place <a href="https://docs.python.org/3/reference/simple_stmts.html#pass" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">pass</code></a> can be used is as a place-holder for a function or conditional body when you are working on new code, allowing you to keep thinking at a more abstract level. The `pass` is silently ignored:

    >>> def initlog(*args):
    ...     pass   # Remember to implement this!
    ...

<span id="tut-functions"></span>

## <span class="section-number">4.6. </span>Defining Functions<a href="#defining-functions" class="headerlink" title="Permalink to this headline">¶</a>

We can create a function that writes the Fibonacci series to an arbitrary boundary:

    >>> def fib(n):    # write Fibonacci series up to n
    ...     """Print a Fibonacci series up to n."""
    ...     a, b = 0, 1
    ...     while a < n:
    ...         print(a, end=' ')
    ...         a, b = b, a+b
    ...     print()
    ...
    >>> # Now call the function we just defined:
    ... fib(2000)
    0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597

The keyword <a href="https://docs.python.org/3/reference/compound_stmts.html#def" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">def</code></a> introduces a function _definition_. It must be followed by the function name and the parenthesized list of formal parameters. The statements that form the body of the function start at the next line, and must be indented.

The first statement of the function body can optionally be a string literal; this string literal is the function’s documentation string, or _docstring_. (More about docstrings can be found in the section <a href="#tut-docstrings" class="reference internal"><span class="std std-ref">Documentation Strings</span></a>.) There are tools which use docstrings to automatically produce online or printed documentation, or to let the user interactively browse through code; it’s good practice to include docstrings in code that you write, so make a habit of it.

The _execution_ of a function introduces a new symbol table used for the local variables of the function. More precisely, all variable assignments in a function store the value in the local symbol table; whereas variable references first look in the local symbol table, then in the local symbol tables of enclosing functions, then in the global symbol table, and finally in the table of built-in names. Thus, global variables and variables of enclosing functions cannot be directly assigned a value within a function (unless, for global variables, named in a <a href="https://docs.python.org/3/reference/simple_stmts.html#global" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">global</code></a> statement, or, for variables of enclosing functions, named in a <a href="https://docs.python.org/3/reference/simple_stmts.html#nonlocal" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">nonlocal</code></a> statement), although they may be referenced.

The actual parameters (arguments) to a function call are introduced in the local symbol table of the called function when it is called; thus, arguments are passed using _call by value_ (where the _value_ is always an object _reference_, not the value of the object). <a href="#id2" id="id1" class="footnote-reference brackets">1</a> When a function calls another function, or calls itself recursively, a new local symbol table is created for that call.

A function definition associates the function name with the function object in the current symbol table. The interpreter recognizes the object pointed to by that name as a user-defined function. Other names can also point to that same function object and can also be used to access the function:

    >>> fib
    <function fib at 10042ed0>
    >>> f = fib
    >>> f(100)
    0 1 1 2 3 5 8 13 21 34 55 89

Coming from other languages, you might object that `fib` is not a function but a procedure since it doesn’t return a value. In fact, even functions without a <a href="https://docs.python.org/3/reference/simple_stmts.html#return" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">return</code></a> statement do return a value, albeit a rather boring one. This value is called `None` (it’s a built-in name). Writing the value `None` is normally suppressed by the interpreter if it would be the only value written. You can see it if you really want to using <a href="https://docs.python.org/3/library/functions.html#print" class="reference internal" title="print"><code class="sourceCode python"><span class="bu">print</span>()</code></a>:

    >>> fib(0)
    >>> print(fib(0))
    None

It is simple to write a function that returns a list of the numbers of the Fibonacci series, instead of printing it:

    >>> def fib2(n):  # return Fibonacci series up to n
    ...     """Return a list containing the Fibonacci series up to n."""
    ...     result = []
    ...     a, b = 0, 1
    ...     while a < n:
    ...         result.append(a)    # see below
    ...         a, b = b, a+b
    ...     return result
    ...
    >>> f100 = fib2(100)    # call it
    >>> f100                # write the result
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

This example, as usual, demonstrates some new Python features:

- The <a href="https://docs.python.org/3/reference/simple_stmts.html#return" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">return</code></a> statement returns with a value from a function. `return` without an expression argument returns `None`. Falling off the end of a function also returns `None`.

- The statement `result.append(a)` calls a _method_ of the list object `result`. A method is a function that ‘belongs’ to an object and is named `obj.methodname`, where `obj` is some object (this may be an expression), and `methodname` is the name of a method that is defined by the object’s type. Different types define different methods. Methods of different types may have the same name without causing ambiguity. (It is possible to define your own object types and methods, using _classes_, see <a href="classes.html#tut-classes" class="reference internal"><span class="std std-ref">Classes</span></a>) The method `append()` shown in the example is defined for list objects; it adds a new element at the end of the list. In this example it is equivalent to `result = result + [a]`, but more efficient.

<span id="tut-defining"></span>

## <span class="section-number">4.7. </span>More on Defining Functions<a href="#more-on-defining-functions" class="headerlink" title="Permalink to this headline">¶</a>

It is also possible to define functions with a variable number of arguments. There are three forms, which can be combined.

<span id="tut-defaultargs"></span>

### <span class="section-number">4.7.1. </span>Default Argument Values<a href="#default-argument-values" class="headerlink" title="Permalink to this headline">¶</a>

The most useful form is to specify a default value for one or more arguments. This creates a function that can be called with fewer arguments than it is defined to allow. For example:

    def ask_ok(prompt, retries=4, reminder='Please try again!'):
        while True:
            ok = input(prompt)
            if ok in ('y', 'ye', 'yes'):
                return True
            if ok in ('n', 'no', 'nop', 'nope'):
                return False
            retries = retries - 1
            if retries < 0:
                raise ValueError('invalid user response')
            print(reminder)

This function can be called in several ways:

- giving only the mandatory argument: `ask_ok('Do you really want to quit?')`

- giving one of the optional arguments: `ask_ok('OK to overwrite the file?', 2)`

- or even giving all arguments: `ask_ok('OK to overwrite the file?', 2, 'Come on, only yes or no!')`

This example also introduces the <a href="https://docs.python.org/3/reference/expressions.html#in" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">in</code></a> keyword. This tests whether or not a sequence contains a certain value.

The default values are evaluated at the point of function definition in the _defining_ scope, so that

    i = 5

    def f(arg=i):
        print(arg)

    i = 6
    f()

will print `5`.

**Important warning:** The default value is evaluated only once. This makes a difference when the default is a mutable object such as a list, dictionary, or instances of most classes. For example, the following function accumulates the arguments passed to it on subsequent calls:

    def f(a, L=[]):
        L.append(a)
        return L

    print(f(1))
    print(f(2))
    print(f(3))

This will print

    [1]
    [1, 2]
    [1, 2, 3]

If you don’t want the default to be shared between subsequent calls, you can write the function like this instead:

    def f(a, L=None):
        if L is None:
            L = []
        L.append(a)
        return L

<span id="tut-keywordargs"></span>

### <span class="section-number">4.7.2. </span>Keyword Arguments<a href="#keyword-arguments" class="headerlink" title="Permalink to this headline">¶</a>

Functions can also be called using <a href="https://docs.python.org/3/glossary.html#term-keyword-argument" class="reference internal"><span class="xref std std-term">keyword arguments</span></a> of the form `kwarg=value`. For instance, the following function:

    def parrot(voltage, state='a stiff', action='voom', type='Norwegian Blue'):
        print("-- This parrot wouldn't", action, end=' ')
        print("if you put", voltage, "volts through it.")
        print("-- Lovely plumage, the", type)
        print("-- It's", state, "!")

accepts one required argument (`voltage`) and three optional arguments (`state`, `action`, and `type`). This function can be called in any of the following ways:

    parrot(1000)                                          # 1 positional argument
    parrot(voltage=1000)                                  # 1 keyword argument
    parrot(voltage=1000000, action='VOOOOOM')             # 2 keyword arguments
    parrot(action='VOOOOOM', voltage=1000000)             # 2 keyword arguments
    parrot('a million', 'bereft of life', 'jump')         # 3 positional arguments
    parrot('a thousand', state='pushing up the daisies')  # 1 positional, 1 keyword

but all the following calls would be invalid:

    parrot()                     # required argument missing
    parrot(voltage=5.0, 'dead')  # non-keyword argument after a keyword argument
    parrot(110, voltage=220)     # duplicate value for the same argument
    parrot(actor='John Cleese')  # unknown keyword argument

In a function call, keyword arguments must follow positional arguments. All the keyword arguments passed must match one of the arguments accepted by the function (e.g. `actor` is not a valid argument for the `parrot` function), and their order is not important. This also includes non-optional arguments (e.g. `parrot(voltage=1000)` is valid too). No argument may receive a value more than once. Here’s an example that fails due to this restriction:

    >>> def function(a):
    ...     pass
    ...
    >>> function(0, a=0)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: function() got multiple values for keyword argument 'a'

When a final formal parameter of the form `**name` is present, it receives a dictionary (see <a href="https://docs.python.org/3/library/stdtypes.html#typesmapping" class="reference internal"><span class="std std-ref">Mapping Types — dict</span></a>) containing all keyword arguments except for those corresponding to a formal parameter. This may be combined with a formal parameter of the form `*name` (described in the next subsection) which receives a <a href="datastructures.html#tut-tuples" class="reference internal"><span class="std std-ref">tuple</span></a> containing the positional arguments beyond the formal parameter list. (`*name` must occur before `**name`.) For example, if we define a function like this:

    def cheeseshop(kind, *arguments, **keywords):
        print("-- Do you have any", kind, "?")
        print("-- I'm sorry, we're all out of", kind)
        for arg in arguments:
            print(arg)
        print("-" * 40)
        for kw in keywords:
            print(kw, ":", keywords[kw])

It could be called like this:

    cheeseshop("Limburger", "It's very runny, sir.",
               "It's really very, VERY runny, sir.",
               shopkeeper="Michael Palin",
               client="John Cleese",
               sketch="Cheese Shop Sketch")

and of course it would print:

    -- Do you have any Limburger ?
    -- I'm sorry, we're all out of Limburger
    It's very runny, sir.
    It's really very, VERY runny, sir.
    ----------------------------------------
    shopkeeper : Michael Palin
    client : John Cleese
    sketch : Cheese Shop Sketch

Note that the order in which the keyword arguments are printed is guaranteed to match the order in which they were provided in the function call.

### <span class="section-number">4.7.3. </span>Special parameters<a href="#special-parameters" class="headerlink" title="Permalink to this headline">¶</a>

By default, arguments may be passed to a Python function either by position or explicitly by keyword. For readability and performance, it makes sense to restrict the way arguments can be passed so that a developer need only look at the function definition to determine if items are passed by position, by position or keyword, or by keyword.

A function definition may look like:

    def f(pos1, pos2, /, pos_or_kwd, *, kwd1, kwd2):
          -----------    ----------     ----------
            |             |                  |
            |        Positional or keyword   |
            |                                - Keyword only
             -- Positional only

where `/` and `*` are optional. If used, these symbols indicate the kind of parameter by how the arguments may be passed to the function: positional-only, positional-or-keyword, and keyword-only. Keyword parameters are also referred to as named parameters.

#### <span class="section-number">4.7.3.1. </span>Positional-or-Keyword Arguments<a href="#positional-or-keyword-arguments" class="headerlink" title="Permalink to this headline">¶</a>

If `/` and `*` are not present in the function definition, arguments may be passed to a function by position or by keyword.

#### <span class="section-number">4.7.3.2. </span>Positional-Only Parameters<a href="#positional-only-parameters" class="headerlink" title="Permalink to this headline">¶</a>

Looking at this in a bit more detail, it is possible to mark certain parameters as _positional-only_. If _positional-only_, the parameters’ order matters, and the parameters cannot be passed by keyword. Positional-only parameters are placed before a `/` (forward-slash). The `/` is used to logically separate the positional-only parameters from the rest of the parameters. If there is no `/` in the function definition, there are no positional-only parameters.

Parameters following the `/` may be _positional-or-keyword_ or _keyword-only_.

#### <span class="section-number">4.7.3.3. </span>Keyword-Only Arguments<a href="#keyword-only-arguments" class="headerlink" title="Permalink to this headline">¶</a>

To mark parameters as _keyword-only_, indicating the parameters must be passed by keyword argument, place an `*` in the arguments list just before the first _keyword-only_ parameter.

#### <span class="section-number">4.7.3.4. </span>Function Examples<a href="#function-examples" class="headerlink" title="Permalink to this headline">¶</a>

Consider the following example function definitions paying close attention to the markers `/` and `*`:

    >>> def standard_arg(arg):
    ...     print(arg)
    ...
    >>> def pos_only_arg(arg, /):
    ...     print(arg)
    ...
    >>> def kwd_only_arg(*, arg):
    ...     print(arg)
    ...
    >>> def combined_example(pos_only, /, standard, *, kwd_only):
    ...     print(pos_only, standard, kwd_only)

The first function definition, `standard_arg`, the most familiar form, places no restrictions on the calling convention and arguments may be passed by position or keyword:

    >>> standard_arg(2)
    2

    >>> standard_arg(arg=2)
    2

The second function `pos_only_arg` is restricted to only use positional parameters as there is a `/` in the function definition:

    >>> pos_only_arg(1)
    1

    >>> pos_only_arg(arg=1)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: pos_only_arg() got an unexpected keyword argument 'arg'

The third function `kwd_only_args` only allows keyword arguments as indicated by a `*` in the function definition:

    >>> kwd_only_arg(3)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: kwd_only_arg() takes 0 positional arguments but 1 was given

    >>> kwd_only_arg(arg=3)
    3

And the last uses all three calling conventions in the same function definition:

    >>> combined_example(1, 2, 3)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: combined_example() takes 2 positional arguments but 3 were given

    >>> combined_example(1, 2, kwd_only=3)
    1 2 3

    >>> combined_example(1, standard=2, kwd_only=3)
    1 2 3

    >>> combined_example(pos_only=1, standard=2, kwd_only=3)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: combined_example() got an unexpected keyword argument 'pos_only'

Finally, consider this function definition which has a potential collision between the positional argument `name` and `**kwds` which has `name` as a key:

    def foo(name, **kwds):
        return 'name' in kwds

There is no possible call that will make it return `True` as the keyword `'name'` will always bind to the first parameter. For example:

    >>> foo(1, **{'name': 2})
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: foo() got multiple values for argument 'name'
    >>>

But using `/` (positional only arguments), it is possible since it allows `name` as a positional argument and `'name'` as a key in the keyword arguments:

    def foo(name, /, **kwds):
        return 'name' in kwds
    >>> foo(1, **{'name': 2})
    True

In other words, the names of positional-only parameters can be used in `**kwds` without ambiguity.

#### <span class="section-number">4.7.3.5. </span>Recap<a href="#recap" class="headerlink" title="Permalink to this headline">¶</a>

The use case will determine which parameters to use in the function definition:

    def f(pos1, pos2, /, pos_or_kwd, *, kwd1, kwd2):

As guidance:

- Use positional-only if you want the name of the parameters to not be available to the user. This is useful when parameter names have no real meaning, if you want to enforce the order of the arguments when the function is called or if you need to take some positional parameters and arbitrary keywords.

- Use keyword-only when names have meaning and the function definition is more understandable by being explicit with names or you want to prevent users relying on the position of the argument being passed.

- For an API, use positional-only to prevent breaking API changes if the parameter’s name is modified in the future.

<span id="tut-arbitraryargs"></span>

### <span class="section-number">4.7.4. </span>Arbitrary Argument Lists<a href="#arbitrary-argument-lists" class="headerlink" title="Permalink to this headline">¶</a>

Finally, the least frequently used option is to specify that a function can be called with an arbitrary number of arguments. These arguments will be wrapped up in a tuple (see <a href="datastructures.html#tut-tuples" class="reference internal"><span class="std std-ref">Tuples and Sequences</span></a>). Before the variable number of arguments, zero or more normal arguments may occur.

    def write_multiple_items(file, separator, *args):
        file.write(separator.join(args))

Normally, these `variadic` arguments will be last in the list of formal parameters, because they scoop up all remaining input arguments that are passed to the function. Any formal parameters which occur after the `*args` parameter are ‘keyword-only’ arguments, meaning that they can only be used as keywords rather than positional arguments.

    >>> def concat(*args, sep="/"):
    ...     return sep.join(args)
    ...
    >>> concat("earth", "mars", "venus")
    'earth/mars/venus'
    >>> concat("earth", "mars", "venus", sep=".")
    'earth.mars.venus'

<span id="tut-unpacking-arguments"></span>

### <span class="section-number">4.7.5. </span>Unpacking Argument Lists<a href="#unpacking-argument-lists" class="headerlink" title="Permalink to this headline">¶</a>

The reverse situation occurs when the arguments are already in a list or tuple but need to be unpacked for a function call requiring separate positional arguments. For instance, the built-in <a href="https://docs.python.org/3/library/stdtypes.html#range" class="reference internal" title="range"><code class="sourceCode python"><span class="bu">range</span>()</code></a> function expects separate _start_ and _stop_ arguments. If they are not available separately, write the function call with the `*`-operator to unpack the arguments out of a list or tuple:

    >>> list(range(3, 6))            # normal call with separate arguments
    [3, 4, 5]
    >>> args = [3, 6]
    >>> list(range(*args))            # call with arguments unpacked from a list
    [3, 4, 5]

In the same fashion, dictionaries can deliver keyword arguments with the `**`-operator:

    >>> def parrot(voltage, state='a stiff', action='voom'):
    ...     print("-- This parrot wouldn't", action, end=' ')
    ...     print("if you put", voltage, "volts through it.", end=' ')
    ...     print("E's", state, "!")
    ...
    >>> d = {"voltage": "four million", "state": "bleedin' demised", "action": "VOOM"}
    >>> parrot(**d)
    -- This parrot wouldn't VOOM if you put four million volts through it. E's bleedin' demised !

<span id="tut-lambda"></span>

### <span class="section-number">4.7.6. </span>Lambda Expressions<a href="#lambda-expressions" class="headerlink" title="Permalink to this headline">¶</a>

Small anonymous functions can be created with the <a href="https://docs.python.org/3/reference/expressions.html#lambda" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">lambda</code></a> keyword. This function returns the sum of its two arguments: `lambda a, b: a+b`. Lambda functions can be used wherever function objects are required. They are syntactically restricted to a single expression. Semantically, they are just syntactic sugar for a normal function definition. Like nested function definitions, lambda functions can reference variables from the containing scope:

    >>> def make_incrementor(n):
    ...     return lambda x: x + n
    ...
    >>> f = make_incrementor(42)
    >>> f(0)
    42
    >>> f(1)
    43

The above example uses a lambda expression to return a function. Another use is to pass a small function as an argument:

    >>> pairs = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
    >>> pairs.sort(key=lambda pair: pair[1])
    >>> pairs
    [(4, 'four'), (1, 'one'), (3, 'three'), (2, 'two')]

<span id="tut-docstrings"></span>

### <span class="section-number">4.7.7. </span>Documentation Strings<a href="#documentation-strings" class="headerlink" title="Permalink to this headline">¶</a>

Here are some conventions about the content and formatting of documentation strings.

The first line should always be a short, concise summary of the object’s purpose. For brevity, it should not explicitly state the object’s name or type, since these are available by other means (except if the name happens to be a verb describing a function’s operation). This line should begin with a capital letter and end with a period.

If there are more lines in the documentation string, the second line should be blank, visually separating the summary from the rest of the description. The following lines should be one or more paragraphs describing the object’s calling conventions, its side effects, etc.

The Python parser does not strip indentation from multi-line string literals in Python, so tools that process documentation have to strip indentation if desired. This is done using the following convention. The first non-blank line _after_ the first line of the string determines the amount of indentation for the entire documentation string. (We can’t use the first line since it is generally adjacent to the string’s opening quotes so its indentation is not apparent in the string literal.) Whitespace “equivalent” to this indentation is then stripped from the start of all lines of the string. Lines that are indented less should not occur, but if they occur all their leading whitespace should be stripped. Equivalence of whitespace should be tested after expansion of tabs (to 8 spaces, normally).

Here is an example of a multi-line docstring:

    >>> def my_function():
    ...     """Do nothing, but document it.
    ...
    ...     No, really, it doesn't do anything.
    ...     """
    ...     pass
    ...
    >>> print(my_function.__doc__)
    Do nothing, but document it.

        No, really, it doesn't do anything.

<span id="tut-annotations"></span>

### <span class="section-number">4.7.8. </span>Function Annotations<a href="#function-annotations" class="headerlink" title="Permalink to this headline">¶</a>

<a href="https://docs.python.org/3/reference/compound_stmts.html#function" class="reference internal"><span class="std std-ref">Function annotations</span></a> are completely optional metadata information about the types used by user-defined functions (see <span id="index-6" class="target"></span><a href="https://www.python.org/dev/peps/pep-3107" class="pep reference external"><strong>PEP 3107</strong></a> and <span id="index-7" class="target"></span><a href="https://www.python.org/dev/peps/pep-0484" class="pep reference external"><strong>PEP 484</strong></a> for more information).

<a href="https://docs.python.org/3/glossary.html#term-function-annotation" class="reference internal"><span class="xref std std-term">Annotations</span></a> are stored in the `__annotations__` attribute of the function as a dictionary and have no effect on any other part of the function. Parameter annotations are defined by a colon after the parameter name, followed by an expression evaluating to the value of the annotation. Return annotations are defined by a literal `->`, followed by an expression, between the parameter list and the colon denoting the end of the <a href="https://docs.python.org/3/reference/compound_stmts.html#def" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">def</code></a> statement. The following example has a required argument, an optional argument, and the return value annotated:

    >>> def f(ham: str, eggs: str = 'eggs') -> str:
    ...     print("Annotations:", f.__annotations__)
    ...     print("Arguments:", ham, eggs)
    ...     return ham + ' and ' + eggs
    ...
    >>> f('spam')
    Annotations: {'ham': <class 'str'>, 'return': <class 'str'>, 'eggs': <class 'str'>}
    Arguments: spam eggs
    'spam and eggs'

<span id="tut-codingstyle"></span>

## <span class="section-number">4.8. </span>Intermezzo: Coding Style<a href="#intermezzo-coding-style" class="headerlink" title="Permalink to this headline">¶</a>

Now that you are about to write longer, more complex pieces of Python, it is a good time to talk about _coding style_. Most languages can be written (or more concise, _formatted_) in different styles; some are more readable than others. Making it easy for others to read your code is always a good idea, and adopting a nice coding style helps tremendously for that.

For Python, <span id="index-9" class="target"></span><a href="https://www.python.org/dev/peps/pep-0008" class="pep reference external"><strong>PEP 8</strong></a> has emerged as the style guide that most projects adhere to; it promotes a very readable and eye-pleasing coding style. Every Python developer should read it at some point; here are the most important points extracted for you:

- Use 4-space indentation, and no tabs.

  4 spaces are a good compromise between small indentation (allows greater nesting depth) and large indentation (easier to read). Tabs introduce confusion, and are best left out.

- Wrap lines so that they don’t exceed 79 characters.

  This helps users with small displays and makes it possible to have several code files side-by-side on larger displays.

- Use blank lines to separate functions and classes, and larger blocks of code inside functions.

- When possible, put comments on a line of their own.

- Use docstrings.

- Use spaces around operators and after commas, but not directly inside bracketing constructs: `a = f(1, 2) + g(3, 4)`.

- Name your classes and functions consistently; the convention is to use `UpperCamelCase` for classes and `lowercase_with_underscores` for functions and methods. Always use `self` as the name for the first method argument (see <a href="classes.html#tut-firstclasses" class="reference internal"><span class="std std-ref">A First Look at Classes</span></a> for more on classes and methods).

- Don’t use fancy encodings if your code is meant to be used in international environments. Python’s default, UTF-8, or even plain ASCII work best in any case.

- Likewise, don’t use non-ASCII characters in identifiers if there is only the slightest chance people speaking a different language will read or maintain the code.

Footnotes

<span class="brackets"><a href="#id1" class="fn-backref">1</a></span>  
Actually, _call by object reference_ would be a better description, since if a mutable object is passed, the caller will see any changes the callee makes to it (items inserted into a list).

### [Table of Contents](https://docs.python.org/3/contents.html)

- <a href="#" class="reference internal">4. More Control Flow Tools</a>
  - <a href="#if-statements" class="reference internal">4.1. <code class="xref std std-keyword docutils literal notranslate">if</code> Statements</a>
  - <a href="#for-statements" class="reference internal">4.2. <code class="xref std std-keyword docutils literal notranslate">for</code> Statements</a>
  - <a href="#the-range-function" class="reference internal">4.3. The <code class="sourceCode python"><span class="bu">range</span>()</code> Function</a>
  - <a href="#break-and-continue-statements-and-else-clauses-on-loops" class="reference internal">4.4. <code class="xref std std-keyword docutils literal notranslate">break</code> and <code class="xref std std-keyword docutils literal notranslate">continue</code> Statements, and <code class="xref std std-keyword docutils literal notranslate">else</code> Clauses on Loops</a>
  - <a href="#pass-statements" class="reference internal">4.5. <code class="xref std std-keyword docutils literal notranslate">pass</code> Statements</a>
  - <a href="#defining-functions" class="reference internal">4.6. Defining Functions</a>
  - <a href="#more-on-defining-functions" class="reference internal">4.7. More on Defining Functions</a>
    - <a href="#default-argument-values" class="reference internal">4.7.1. Default Argument Values</a>
    - <a href="#keyword-arguments" class="reference internal">4.7.2. Keyword Arguments</a>
    - <a href="#special-parameters" class="reference internal">4.7.3. Special parameters</a>
      - <a href="#positional-or-keyword-arguments" class="reference internal">4.7.3.1. Positional-or-Keyword Arguments</a>
      - <a href="#positional-only-parameters" class="reference internal">4.7.3.2. Positional-Only Parameters</a>
      - <a href="#keyword-only-arguments" class="reference internal">4.7.3.3. Keyword-Only Arguments</a>
      - <a href="#function-examples" class="reference internal">4.7.3.4. Function Examples</a>
      - <a href="#recap" class="reference internal">4.7.3.5. Recap</a>
    - <a href="#arbitrary-argument-lists" class="reference internal">4.7.4. Arbitrary Argument Lists</a>
    - <a href="#unpacking-argument-lists" class="reference internal">4.7.5. Unpacking Argument Lists</a>
    - <a href="#lambda-expressions" class="reference internal">4.7.6. Lambda Expressions</a>
    - <a href="#documentation-strings" class="reference internal">4.7.7. Documentation Strings</a>
    - <a href="#function-annotations" class="reference internal">4.7.8. Function Annotations</a>
  - <a href="#intermezzo-coding-style" class="reference internal">4.8. Intermezzo: Coding Style</a>

#### Previous topic

[<span class="section-number">3. </span>An Informal Introduction to Python](introduction.html 'previous chapter')

#### Next topic

[<span class="section-number">5. </span>Data Structures](datastructures.html 'next chapter')

### This Page

- [Report a Bug](https://docs.python.org/3/bugs.html)
- [Show Source](https://github.com/python/cpython/blob/3.9/Doc/tutorial/controlflow.rst)

### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](datastructures.html '5. Data Structures') |
- [previous](introduction.html '3. An Informal Introduction to Python') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-
