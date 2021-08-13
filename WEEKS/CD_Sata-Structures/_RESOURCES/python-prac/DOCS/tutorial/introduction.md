### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](controlflow.html '4. More Control Flow Tools') |
- [previous](interpreter.html '2. Using the Python Interpreter') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-

<span id="tut-informal"></span>

# <span class="section-number">3. </span>An Informal Introduction to Python<a href="#an-informal-introduction-to-python" class="headerlink" title="Permalink to this headline">¶</a>

In the following examples, input and output are distinguished by the presence or absence of prompts (<a href="https://docs.python.org/3/glossary.html#term-0" class="reference internal"><span class="xref std std-term">&gt;&gt;&gt;</span></a> and <a href="https://docs.python.org/3/glossary.html#term-1" class="reference internal"><span class="xref std std-term">…</span></a>): to repeat the example, you must type everything after the prompt, when the prompt appears; lines that do not begin with a prompt are output from the interpreter. Note that a secondary prompt on a line by itself in an example means you must type a blank line; this is used to end a multi-line command.

Many of the examples in this manual, even those entered at the interactive prompt, include comments. Comments in Python start with the hash character, `#`, and extend to the end of the physical line. A comment may appear at the start of a line or following whitespace or code, but not within a string literal. A hash character within a string literal is just a hash character. Since comments are to clarify code and are not interpreted by Python, they may be omitted when typing in examples.

Some examples:

    # this is the first comment
    spam = 1  # and this is the second comment
              # ... and now a third!
    text = "# This is not a comment because it's inside quotes."

<span id="tut-calculator"></span>

## <span class="section-number">3.1. </span>Using Python as a Calculator<a href="#using-python-as-a-calculator" class="headerlink" title="Permalink to this headline">¶</a>

Let’s try some simple Python commands. Start the interpreter and wait for the primary prompt, `>>>`. (It shouldn’t take long.)

<span id="tut-numbers"></span>

### <span class="section-number">3.1.1. </span>Numbers<a href="#numbers" class="headerlink" title="Permalink to this headline">¶</a>

The interpreter acts as a simple calculator: you can type an expression at it and it will write the value. Expression syntax is straightforward: the operators `+`, `-`, `*` and `/` work just like in most other languages (for example, Pascal or C); parentheses (`()`) can be used for grouping. For example:

    >>> 2 + 2
    4
    >>> 50 - 5*6
    20
    >>> (50 - 5*6) / 4
    5.0
    >>> 8 / 5  # division always returns a floating point number
    1.6

The integer numbers (e.g. `2`, `4`, `20`) have type <a href="https://docs.python.org/3/library/functions.html#int" class="reference internal" title="int"><code class="sourceCode python"><span class="bu">int</span></code></a>, the ones with a fractional part (e.g. `5.0`, `1.6`) have type <a href="https://docs.python.org/3/library/functions.html#float" class="reference internal" title="float"><code class="sourceCode python"><span class="bu">float</span></code></a>. We will see more about numeric types later in the tutorial.

Division (`/`) always returns a float. To do <a href="https://docs.python.org/3/glossary.html#term-floor-division" class="reference internal"><span class="xref std std-term">floor division</span></a> and get an integer result (discarding any fractional result) you can use the `//` operator; to calculate the remainder you can use `%`:

    >>> 17 / 3  # classic division returns a float
    5.666666666666667
    >>>
    >>> 17 // 3  # floor division discards the fractional part
    5
    >>> 17 % 3  # the % operator returns the remainder of the division
    2
    >>> 5 * 3 + 2  # floored quotient * divisor + remainder
    17

With Python, it is possible to use the `**` operator to calculate powers <a href="#id3" id="id1" class="footnote-reference brackets">1</a>:

    >>> 5 ** 2  # 5 squared
    25
    >>> 2 ** 7  # 2 to the power of 7
    128

The equal sign (`=`) is used to assign a value to a variable. Afterwards, no result is displayed before the next interactive prompt:

    >>> width = 20
    >>> height = 5 * 9
    >>> width * height
    900

If a variable is not “defined” (assigned a value), trying to use it will give you an error:

    >>> n  # try to access an undefined variable
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'n' is not defined

There is full support for floating point; operators with mixed type operands convert the integer operand to floating point:

    >>> 4 * 3.75 - 1
    14.0

In interactive mode, the last printed expression is assigned to the variable `_`. This means that when you are using Python as a desk calculator, it is somewhat easier to continue calculations, for example:

    >>> tax = 12.5 / 100
    >>> price = 100.50
    >>> price * tax
    12.5625
    >>> price + _
    113.0625
    >>> round(_, 2)
    113.06

This variable should be treated as read-only by the user. Don’t explicitly assign a value to it — you would create an independent local variable with the same name masking the built-in variable with its magic behavior.

In addition to <a href="https://docs.python.org/3/library/functions.html#int" class="reference internal" title="int"><code class="sourceCode python"><span class="bu">int</span></code></a> and <a href="https://docs.python.org/3/library/functions.html#float" class="reference internal" title="float"><code class="sourceCode python"><span class="bu">float</span></code></a>, Python supports other types of numbers, such as <a href="https://docs.python.org/3/library/decimal.html#decimal.Decimal" class="reference internal" title="decimal.Decimal"><code class="sourceCode python">Decimal</code></a> and <a href="https://docs.python.org/3/library/fractions.html#fractions.Fraction" class="reference internal" title="fractions.Fraction"><code class="sourceCode python">Fraction</code></a>. Python also has built-in support for <a href="https://docs.python.org/3/library/stdtypes.html#typesnumeric" class="reference internal"><span class="std std-ref">complex numbers</span></a>, and uses the `j` or `J` suffix to indicate the imaginary part (e.g. `3+5j`).

<span id="tut-strings"></span>

### <span class="section-number">3.1.2. </span>Strings<a href="#strings" class="headerlink" title="Permalink to this headline">¶</a>

Besides numbers, Python can also manipulate strings, which can be expressed in several ways. They can be enclosed in single quotes (`'...'`) or double quotes (`"..."`) with the same result <a href="#id4" id="id2" class="footnote-reference brackets">2</a>. `\` can be used to escape quotes:

    >>> 'spam eggs'  # single quotes
    'spam eggs'
    >>> 'doesn\'t'  # use \' to escape the single quote...
    "doesn't"
    >>> "doesn't"  # ...or use double quotes instead
    "doesn't"
    >>> '"Yes," they said.'
    '"Yes," they said.'
    >>> "\"Yes,\" they said."
    '"Yes," they said.'
    >>> '"Isn\'t," they said.'
    '"Isn\'t," they said.'

In the interactive interpreter, the output string is enclosed in quotes and special characters are escaped with backslashes. While this might sometimes look different from the input (the enclosing quotes could change), the two strings are equivalent. The string is enclosed in double quotes if the string contains a single quote and no double quotes, otherwise it is enclosed in single quotes. The <a href="https://docs.python.org/3/library/functions.html#print" class="reference internal" title="print"><code class="sourceCode python"><span class="bu">print</span>()</code></a> function produces a more readable output, by omitting the enclosing quotes and by printing escaped and special characters:

    >>> '"Isn\'t," they said.'
    '"Isn\'t," they said.'
    >>> print('"Isn\'t," they said.')
    "Isn't," they said.
    >>> s = 'First line.\nSecond line.'  # \n means newline
    >>> s  # without print(), \n is included in the output
    'First line.\nSecond line.'
    >>> print(s)  # with print(), \n produces a new line
    First line.
    Second line.

If you don’t want characters prefaced by `\` to be interpreted as special characters, you can use _raw strings_ by adding an `r` before the first quote:

    >>> print('C:\some\name')  # here \n means newline!
    C:\some
    ame
    >>> print(r'C:\some\name')  # note the r before the quote
    C:\some\name

String literals can span multiple lines. One way is using triple-quotes: `"""..."""` or `'''...'''`. End of lines are automatically included in the string, but it’s possible to prevent this by adding a `\` at the end of the line. The following example:

    print("""\
    Usage: thingy [OPTIONS]
         -h                        Display this usage message
         -H hostname               Hostname to connect to
    """)

produces the following output (note that the initial newline is not included):

    Usage: thingy [OPTIONS]
         -h                        Display this usage message
         -H hostname               Hostname to connect to

Strings can be concatenated (glued together) with the `+` operator, and repeated with `*`:

    >>> # 3 times 'un', followed by 'ium'
    >>> 3 * 'un' + 'ium'
    'unununium'

Two or more _string literals_ (i.e. the ones enclosed between quotes) next to each other are automatically concatenated.

    >>> 'Py' 'thon'
    'Python'

This feature is particularly useful when you want to break long strings:

    >>> text = ('Put several strings within parentheses '
    ...         'to have them joined together.')
    >>> text
    'Put several strings within parentheses to have them joined together.'

This only works with two literals though, not with variables or expressions:

    >>> prefix = 'Py'
    >>> prefix 'thon'  # can't concatenate a variable and a string literal
      File "<stdin>", line 1
        prefix 'thon'
                    ^
    SyntaxError: invalid syntax
    >>> ('un' * 3) 'ium'
      File "<stdin>", line 1
        ('un' * 3) 'ium'
                       ^
    SyntaxError: invalid syntax

If you want to concatenate variables or a variable and a literal, use `+`:

    >>> prefix + 'thon'
    'Python'

Strings can be _indexed_ (subscripted), with the first character having index 0. There is no separate character type; a character is simply a string of size one:

    >>> word = 'Python'
    >>> word[0]  # character in position 0
    'P'
    >>> word[5]  # character in position 5
    'n'

Indices may also be negative numbers, to start counting from the right:

    >>> word[-1]  # last character
    'n'
    >>> word[-2]  # second-last character
    'o'
    >>> word[-6]
    'P'

Note that since -0 is the same as 0, negative indices start from -1.

In addition to indexing, _slicing_ is also supported. While indexing is used to obtain individual characters, _slicing_ allows you to obtain substring:

    >>> word[0:2]  # characters from position 0 (included) to 2 (excluded)
    'Py'
    >>> word[2:5]  # characters from position 2 (included) to 5 (excluded)
    'tho'

Note how the start is always included, and the end always excluded. This makes sure that `s[:i] + s[i:]` is always equal to `s`:

    >>> word[:2] + word[2:]
    'Python'
    >>> word[:4] + word[4:]
    'Python'

Slice indices have useful defaults; an omitted first index defaults to zero, an omitted second index defaults to the size of the string being sliced.

    >>> word[:2]   # character from the beginning to position 2 (excluded)
    'Py'
    >>> word[4:]   # characters from position 4 (included) to the end
    'on'
    >>> word[-2:]  # characters from the second-last (included) to the end
    'on'

One way to remember how slices work is to think of the indices as pointing _between_ characters, with the left edge of the first character numbered 0. Then the right edge of the last character of a string of _n_ characters has index _n_, for example:

     +---+---+---+---+---+---+
     | P | y | t | h | o | n |
     +---+---+---+---+---+---+
     0   1   2   3   4   5   6
    -6  -5  -4  -3  -2  -1

The first row of numbers gives the position of the indices 0…6 in the string; the second row gives the corresponding negative indices. The slice from _i_ to _j_ consists of all characters between the edges labeled _i_ and _j_, respectively.

For non-negative indices, the length of a slice is the difference of the indices, if both are within bounds. For example, the length of `word[1:3]` is 2.

Attempting to use an index that is too large will result in an error:

    >>> word[42]  # the word only has 6 characters
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    IndexError: string index out of range

However, out of range slice indexes are handled gracefully when used for slicing:

    >>> word[4:42]
    'on'
    >>> word[42:]
    ''

Python strings cannot be changed — they are <a href="https://docs.python.org/3/glossary.html#term-immutable" class="reference internal"><span class="xref std std-term">immutable</span></a>. Therefore, assigning to an indexed position in the string results in an error:

    >>> word[0] = 'J'
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: 'str' object does not support item assignment
    >>> word[2:] = 'py'
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: 'str' object does not support item assignment

If you need a different string, you should create a new one:

    >>> 'J' + word[1:]
    'Jython'
    >>> word[:2] + 'py'
    'Pypy'

The built-in function <a href="https://docs.python.org/3/library/functions.html#len" class="reference internal" title="len"><code class="sourceCode python"><span class="bu">len</span>()</code></a> returns the length of a string:

    >>> s = 'supercalifragilisticexpialidocious'
    >>> len(s)
    34

See also

<a href="https://docs.python.org/3/library/stdtypes.html#textseq" class="reference internal"><span class="std std-ref">Text Sequence Type — str</span></a>  
Strings are examples of _sequence types_, and support the common operations supported by such types.

<a href="https://docs.python.org/3/library/stdtypes.html#string-methods" class="reference internal"><span class="std std-ref">String Methods</span></a>  
Strings support a large number of methods for basic transformations and searching.

<a href="https://docs.python.org/3/reference/lexical_analysis.html#f-strings" class="reference internal"><span class="std std-ref">Formatted string literals</span></a>  
String literals that have embedded expressions.

<a href="https://docs.python.org/3/library/string.html#formatstrings" class="reference internal"><span class="std std-ref">Format String Syntax</span></a>  
Information about string formatting with <a href="https://docs.python.org/3/library/stdtypes.html#str.format" class="reference internal" title="str.format"><code class="sourceCode python"><span class="bu">str</span>.<span class="bu">format</span>()</code></a>.

<a href="https://docs.python.org/3/library/stdtypes.html#old-string-formatting" class="reference internal"><span class="std std-ref">printf-style String Formatting</span></a>  
The old formatting operations invoked when strings are the left operand of the `%` operator are described in more detail here.

<span id="tut-lists"></span>

### <span class="section-number">3.1.3. </span>Lists<a href="#lists" class="headerlink" title="Permalink to this headline">¶</a>

Python knows a number of _compound_ data types, used to group together other values. The most versatile is the _list_, which can be written as a list of comma-separated values (items) between square brackets. Lists might contain items of different types, but usually the items all have the same type.

    >>> squares = [1, 4, 9, 16, 25]
    >>> squares
    [1, 4, 9, 16, 25]

Like strings (and all other built-in <a href="https://docs.python.org/3/glossary.html#term-sequence" class="reference internal"><span class="xref std std-term">sequence</span></a> types), lists can be indexed and sliced:

    >>> squares[0]  # indexing returns the item
    1
    >>> squares[-1]
    25
    >>> squares[-3:]  # slicing returns a new list
    [9, 16, 25]

All slice operations return a new list containing the requested elements. This means that the following slice returns a <a href="https://docs.python.org/3/library/copy.html#shallow-vs-deep-copy" class="reference internal"><span class="std std-ref">shallow copy</span></a> of the list:

    >>> squares[:]
    [1, 4, 9, 16, 25]

Lists also support operations like concatenation:

    >>> squares + [36, 49, 64, 81, 100]
    [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

Unlike strings, which are <a href="https://docs.python.org/3/glossary.html#term-immutable" class="reference internal"><span class="xref std std-term">immutable</span></a>, lists are a <a href="https://docs.python.org/3/glossary.html#term-mutable" class="reference internal"><span class="xref std std-term">mutable</span></a> type, i.e. it is possible to change their content:

    >>> cubes = [1, 8, 27, 65, 125]  # something's wrong here
    >>> 4 ** 3  # the cube of 4 is 64, not 65!
    64
    >>> cubes[3] = 64  # replace the wrong value
    >>> cubes
    [1, 8, 27, 64, 125]

You can also add new items at the end of the list, by using the `append()` _method_ (we will see more about methods later):

    >>> cubes.append(216)  # add the cube of 6
    >>> cubes.append(7 ** 3)  # and the cube of 7
    >>> cubes
    [1, 8, 27, 64, 125, 216, 343]

Assignment to slices is also possible, and this can even change the size of the list or clear it entirely:

    >>> letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    >>> letters
    ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    >>> # replace some values
    >>> letters[2:5] = ['C', 'D', 'E']
    >>> letters
    ['a', 'b', 'C', 'D', 'E', 'f', 'g']
    >>> # now remove them
    >>> letters[2:5] = []
    >>> letters
    ['a', 'b', 'f', 'g']
    >>> # clear the list by replacing all the elements with an empty list
    >>> letters[:] = []
    >>> letters
    []

The built-in function <a href="https://docs.python.org/3/library/functions.html#len" class="reference internal" title="len"><code class="sourceCode python"><span class="bu">len</span>()</code></a> also applies to lists:

    >>> letters = ['a', 'b', 'c', 'd']
    >>> len(letters)
    4

It is possible to nest lists (create lists containing other lists), for example:

    >>> a = ['a', 'b', 'c']
    >>> n = [1, 2, 3]
    >>> x = [a, n]
    >>> x
    [['a', 'b', 'c'], [1, 2, 3]]
    >>> x[0]
    ['a', 'b', 'c']
    >>> x[0][1]
    'b'

<span id="tut-firststeps"></span>

## <span class="section-number">3.2. </span>First Steps Towards Programming<a href="#first-steps-towards-programming" class="headerlink" title="Permalink to this headline">¶</a>

Of course, we can use Python for more complicated tasks than adding two and two together. For instance, we can write an initial sub-sequence of the <a href="https://en.wikipedia.org/wiki/Fibonacci_number" class="reference external">Fibonacci series</a> as follows:

    >>> # Fibonacci series:
    ... # the sum of two elements defines the next
    ... a, b = 0, 1
    >>> while a < 10:
    ...     print(a)
    ...     a, b = b, a+b
    ...
    0
    1
    1
    2
    3
    5
    8

This example introduces several new features.

- The first line contains a _multiple assignment_: the variables `a` and `b` simultaneously get the new values 0 and 1. On the last line this is used again, demonstrating that the expressions on the right-hand side are all evaluated first before any of the assignments take place. The right-hand side expressions are evaluated from the left to the right.

- The <a href="https://docs.python.org/3/reference/compound_stmts.html#while" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">while</code></a> loop executes as long as the condition (here: `a < 10`) remains true. In Python, like in C, any non-zero integer value is true; zero is false. The condition may also be a string or list value, in fact any sequence; anything with a non-zero length is true, empty sequences are false. The test used in the example is a simple comparison. The standard comparison operators are written the same as in C: `<` (less than), `>` (greater than), `==` (equal to), `<=` (less than or equal to), `>=` (greater than or equal to) and `!=` (not equal to).

- The _body_ of the loop is _indented_: indentation is Python’s way of grouping statements. At the interactive prompt, you have to type a tab or space(s) for each indented line. In practice you will prepare more complicated input for Python with a text editor; all decent text editors have an auto-indent facility. When a compound statement is entered interactively, it must be followed by a blank line to indicate completion (since the parser cannot guess when you have typed the last line). Note that each line within a basic block must be indented by the same amount.

- The <a href="https://docs.python.org/3/library/functions.html#print" class="reference internal" title="print"><code class="sourceCode python"><span class="bu">print</span>()</code></a> function writes the value of the argument(s) it is given. It differs from just writing the expression you want to write (as we did earlier in the calculator examples) in the way it handles multiple arguments, floating point quantities, and strings. Strings are printed without quotes, and a space is inserted between items, so you can format things nicely, like this:

      >>> i = 256*256
      >>> print('The value of i is', i)
      The value of i is 65536

  The keyword argument _end_ can be used to avoid the newline after the output, or end the output with a different string:

      >>> a, b = 0, 1
      >>> while a < 1000:
      ...     print(a, end=',')
      ...     a, b = b, a+b
      ...
      0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,

Footnotes

<span class="brackets"><a href="#id1" class="fn-backref">1</a></span>  
Since `**` has higher precedence than `-`, `-3**2` will be interpreted as `-(3**2)` and thus result in `-9`. To avoid this and get `9`, you can use `(-3)**2`.

<span class="brackets"><a href="#id2" class="fn-backref">2</a></span>  
Unlike other languages, special characters such as `\n` have the same meaning with both single (`'...'`) and double (`"..."`) quotes. The only difference between the two is that within single quotes you don’t need to escape `"` (but you have to escape `\'`) and vice versa.

### [Table of Contents](https://docs.python.org/3/contents.html)

- <a href="#" class="reference internal">3. An Informal Introduction to Python</a>
  - <a href="#using-python-as-a-calculator" class="reference internal">3.1. Using Python as a Calculator</a>
    - <a href="#numbers" class="reference internal">3.1.1. Numbers</a>
    - <a href="#strings" class="reference internal">3.1.2. Strings</a>
    - <a href="#lists" class="reference internal">3.1.3. Lists</a>
  - <a href="#first-steps-towards-programming" class="reference internal">3.2. First Steps Towards Programming</a>

#### Previous topic

[<span class="section-number">2. </span>Using the Python Interpreter](interpreter.html 'previous chapter')

#### Next topic

[<span class="section-number">4. </span>More Control Flow Tools](controlflow.html 'next chapter')

### This Page

- [Report a Bug](https://docs.python.org/3/bugs.html)
- [Show Source](https://github.com/python/cpython/blob/3.9/Doc/tutorial/introduction.rst)

### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](controlflow.html '4. More Control Flow Tools') |
- [previous](interpreter.html '2. Using the Python Interpreter') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-
