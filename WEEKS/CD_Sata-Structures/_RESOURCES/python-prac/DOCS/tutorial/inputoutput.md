### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](errors.html '8. Errors and Exceptions') |
- [previous](modules.html '6. Modules') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-

<span id="tut-io"></span>

# <span class="section-number">7. </span>Input and Output<a href="#input-and-output" class="headerlink" title="Permalink to this headline">¶</a>

There are several ways to present the output of a program; data can be printed in a human-readable form, or written to a file for future use. This chapter will discuss some of the possibilities.

<span id="tut-formatting"></span>

## <span class="section-number">7.1. </span>Fancier Output Formatting<a href="#fancier-output-formatting" class="headerlink" title="Permalink to this headline">¶</a>

So far we’ve encountered two ways of writing values: _expression statements_ and the <a href="https://docs.python.org/3/library/functions.html#print" class="reference internal" title="print"><code class="sourceCode python"><span class="bu">print</span>()</code></a> function. (A third way is using the `write()` method of file objects; the standard output file can be referenced as `sys.stdout`. See the Library Reference for more information on this.)

Often you’ll want more control over the formatting of your output than simply printing space-separated values. There are several ways to format output.

- To use <a href="#tut-f-strings" class="reference internal"><span class="std std-ref">formatted string literals</span></a>, begin a string with `f` or `F` before the opening quotation mark or triple quotation mark. Inside this string, you can write a Python expression between `{` and `}` characters that can refer to variables or literal values.

      >>> year = 2016
      >>> event = 'Referendum'
      >>> f'Results of the {year} {event}'
      'Results of the 2016 Referendum'

- The <a href="https://docs.python.org/3/library/stdtypes.html#str.format" class="reference internal" title="str.format"><code class="sourceCode python"><span class="bu">str</span>.<span class="bu">format</span>()</code></a> method of strings requires more manual effort. You’ll still use `{` and `}` to mark where a variable will be substituted and can provide detailed formatting directives, but you’ll also need to provide the information to be formatted.

      >>> yes_votes = 42_572_654
      >>> no_votes = 43_132_495
      >>> percentage = yes_votes / (yes_votes + no_votes)
      >>> '{:-9} YES votes  {:2.2%}'.format(yes_votes, percentage)
      ' 42572654 YES votes  49.67%'

- Finally, you can do all the string handling yourself by using string slicing and concatenation operations to create any layout you can imagine. The string type has some methods that perform useful operations for padding strings to a given column width.

When you don’t need fancy output but just want a quick display of some variables for debugging purposes, you can convert any value to a string with the <a href="https://docs.python.org/3/library/functions.html#repr" class="reference internal" title="repr"><code class="sourceCode python"><span class="bu">repr</span>()</code></a> or <a href="https://docs.python.org/3/library/stdtypes.html#str" class="reference internal" title="str"><code class="sourceCode python"><span class="bu">str</span>()</code></a> functions.

The <a href="https://docs.python.org/3/library/stdtypes.html#str" class="reference internal" title="str"><code class="sourceCode python"><span class="bu">str</span>()</code></a> function is meant to return representations of values which are fairly human-readable, while <a href="https://docs.python.org/3/library/functions.html#repr" class="reference internal" title="repr"><code class="sourceCode python"><span class="bu">repr</span>()</code></a> is meant to generate representations which can be read by the interpreter (or will force a <a href="https://docs.python.org/3/library/exceptions.html#SyntaxError" class="reference internal" title="SyntaxError"><code class="sourceCode python"><span class="pp">SyntaxError</span></code></a> if there is no equivalent syntax). For objects which don’t have a particular representation for human consumption, <a href="https://docs.python.org/3/library/stdtypes.html#str" class="reference internal" title="str"><code class="sourceCode python"><span class="bu">str</span>()</code></a> will return the same value as <a href="https://docs.python.org/3/library/functions.html#repr" class="reference internal" title="repr"><code class="sourceCode python"><span class="bu">repr</span>()</code></a>. Many values, such as numbers or structures like lists and dictionaries, have the same representation using either function. Strings, in particular, have two distinct representations.

Some examples:

    >>> s = 'Hello, world.'
    >>> str(s)
    'Hello, world.'
    >>> repr(s)
    "'Hello, world.'"
    >>> str(1/7)
    '0.14285714285714285'
    >>> x = 10 * 3.25
    >>> y = 200 * 200
    >>> s = 'The value of x is ' + repr(x) + ', and y is ' + repr(y) + '...'
    >>> print(s)
    The value of x is 32.5, and y is 40000...
    >>> # The repr() of a string adds string quotes and backslashes:
    ... hello = 'hello, world\n'
    >>> hellos = repr(hello)
    >>> print(hellos)
    'hello, world\n'
    >>> # The argument to repr() may be any Python object:
    ... repr((x, y, ('spam', 'eggs')))
    "(32.5, 40000, ('spam', 'eggs'))"

The <a href="https://docs.python.org/3/library/string.html#module-string" class="reference internal" title="string: Common string operations."><code class="sourceCode python">string</code></a> module contains a <a href="https://docs.python.org/3/library/string.html#string.Template" class="reference internal" title="string.Template"><code class="sourceCode python">Template</code></a> class that offers yet another way to substitute values into strings, using placeholders like `$x` and replacing them with values from a dictionary, but offers much less control of the formatting.

<span id="tut-f-strings"></span>

### <span class="section-number">7.1.1. </span>Formatted String Literals<a href="#formatted-string-literals" class="headerlink" title="Permalink to this headline">¶</a>

<a href="https://docs.python.org/3/reference/lexical_analysis.html#f-strings" class="reference internal"><span class="std std-ref">Formatted string literals</span></a> (also called f-strings for short) let you include the value of Python expressions inside a string by prefixing the string with `f` or `F` and writing expressions as `{expression}`.

An optional format specifier can follow the expression. This allows greater control over how the value is formatted. The following example rounds pi to three places after the decimal:

    >>> import math
    >>> print(f'The value of pi is approximately {math.pi:.3f}.')
    The value of pi is approximately 3.142.

Passing an integer after the `':'` will cause that field to be a minimum number of characters wide. This is useful for making columns line up.

    >>> table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 7678}
    >>> for name, phone in table.items():
    ...     print(f'{name:10} ==> {phone:10d}')
    ...
    Sjoerd     ==>       4127
    Jack       ==>       4098
    Dcab       ==>       7678

Other modifiers can be used to convert the value before it is formatted. `'!a'` applies <a href="https://docs.python.org/3/library/functions.html#ascii" class="reference internal" title="ascii"><code class="sourceCode python"><span class="bu">ascii</span>()</code></a>, `'!s'` applies <a href="https://docs.python.org/3/library/stdtypes.html#str" class="reference internal" title="str"><code class="sourceCode python"><span class="bu">str</span>()</code></a>, and `'!r'` applies <a href="https://docs.python.org/3/library/functions.html#repr" class="reference internal" title="repr"><code class="sourceCode python"><span class="bu">repr</span>()</code></a>:

    >>> animals = 'eels'
    >>> print(f'My hovercraft is full of {animals}.')
    My hovercraft is full of eels.
    >>> print(f'My hovercraft is full of {animals!r}.')
    My hovercraft is full of 'eels'.

For a reference on these format specifications, see the reference guide for the <a href="https://docs.python.org/3/library/string.html#formatspec" class="reference internal"><span class="std std-ref">Format Specification Mini-Language</span></a>.

<span id="tut-string-format"></span>

### <span class="section-number">7.1.2. </span>The String format() Method<a href="#the-string-format-method" class="headerlink" title="Permalink to this headline">¶</a>

Basic usage of the <a href="https://docs.python.org/3/library/stdtypes.html#str.format" class="reference internal" title="str.format"><code class="sourceCode python"><span class="bu">str</span>.<span class="bu">format</span>()</code></a> method looks like this:

    >>> print('We are the {} who say "{}!"'.format('knights', 'Ni'))
    We are the knights who say "Ni!"

The brackets and characters within them (called format fields) are replaced with the objects passed into the <a href="https://docs.python.org/3/library/stdtypes.html#str.format" class="reference internal" title="str.format"><code class="sourceCode python"><span class="bu">str</span>.<span class="bu">format</span>()</code></a> method. A number in the brackets can be used to refer to the position of the object passed into the <a href="https://docs.python.org/3/library/stdtypes.html#str.format" class="reference internal" title="str.format"><code class="sourceCode python"><span class="bu">str</span>.<span class="bu">format</span>()</code></a> method.

    >>> print('{0} and {1}'.format('spam', 'eggs'))
    spam and eggs
    >>> print('{1} and {0}'.format('spam', 'eggs'))
    eggs and spam

If keyword arguments are used in the <a href="https://docs.python.org/3/library/stdtypes.html#str.format" class="reference internal" title="str.format"><code class="sourceCode python"><span class="bu">str</span>.<span class="bu">format</span>()</code></a> method, their values are referred to by using the name of the argument.

    >>> print('This {food} is {adjective}.'.format(
    ...       food='spam', adjective='absolutely horrible'))
    This spam is absolutely horrible.

Positional and keyword arguments can be arbitrarily combined:

    >>> print('The story of {0}, {1}, and {other}.'.format('Bill', 'Manfred',
                                                           other='Georg'))
    The story of Bill, Manfred, and Georg.

If you have a really long format string that you don’t want to split up, it would be nice if you could reference the variables to be formatted by name instead of by position. This can be done by simply passing the dict and using square brackets `'[]'` to access the keys.

    >>> table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 8637678}
    >>> print('Jack: {0[Jack]:d}; Sjoerd: {0[Sjoerd]:d}; '
    ...       'Dcab: {0[Dcab]:d}'.format(table))
    Jack: 4098; Sjoerd: 4127; Dcab: 8637678

This could also be done by passing the table as keyword arguments with the ‘\*\*’ notation.

    >>> table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 8637678}
    >>> print('Jack: {Jack:d}; Sjoerd: {Sjoerd:d}; Dcab: {Dcab:d}'.format(**table))
    Jack: 4098; Sjoerd: 4127; Dcab: 8637678

This is particularly useful in combination with the built-in function <a href="https://docs.python.org/3/library/functions.html#vars" class="reference internal" title="vars"><code class="sourceCode python"><span class="bu">vars</span>()</code></a>, which returns a dictionary containing all local variables.

As an example, the following lines produce a tidily-aligned set of columns giving integers and their squares and cubes:

    >>> for x in range(1, 11):
    ...     print('{0:2d} {1:3d} {2:4d}'.format(x, x*x, x*x*x))
    ...
     1   1    1
     2   4    8
     3   9   27
     4  16   64
     5  25  125
     6  36  216
     7  49  343
     8  64  512
     9  81  729
    10 100 1000

For a complete overview of string formatting with <a href="https://docs.python.org/3/library/stdtypes.html#str.format" class="reference internal" title="str.format"><code class="sourceCode python"><span class="bu">str</span>.<span class="bu">format</span>()</code></a>, see <a href="https://docs.python.org/3/library/string.html#formatstrings" class="reference internal"><span class="std std-ref">Format String Syntax</span></a>.

### <span class="section-number">7.1.3. </span>Manual String Formatting<a href="#manual-string-formatting" class="headerlink" title="Permalink to this headline">¶</a>

Here’s the same table of squares and cubes, formatted manually:

    >>> for x in range(1, 11):
    ...     print(repr(x).rjust(2), repr(x*x).rjust(3), end=' ')
    ...     # Note use of 'end' on previous line
    ...     print(repr(x*x*x).rjust(4))
    ...
     1   1    1
     2   4    8
     3   9   27
     4  16   64
     5  25  125
     6  36  216
     7  49  343
     8  64  512
     9  81  729
    10 100 1000

(Note that the one space between each column was added by the way <a href="https://docs.python.org/3/library/functions.html#print" class="reference internal" title="print"><code class="sourceCode python"><span class="bu">print</span>()</code></a> works: it always adds spaces between its arguments.)

The <a href="https://docs.python.org/3/library/stdtypes.html#str.rjust" class="reference internal" title="str.rjust"><code class="sourceCode python"><span class="bu">str</span>.rjust()</code></a> method of string objects right-justifies a string in a field of a given width by padding it with spaces on the left. There are similar methods <a href="https://docs.python.org/3/library/stdtypes.html#str.ljust" class="reference internal" title="str.ljust"><code class="sourceCode python"><span class="bu">str</span>.ljust()</code></a> and <a href="https://docs.python.org/3/library/stdtypes.html#str.center" class="reference internal" title="str.center"><code class="sourceCode python"><span class="bu">str</span>.center()</code></a>. These methods do not write anything, they just return a new string. If the input string is too long, they don’t truncate it, but return it unchanged; this will mess up your column lay-out but that’s usually better than the alternative, which would be lying about a value. (If you really want truncation you can always add a slice operation, as in `x.ljust(n)[:n]`.)

There is another method, <a href="https://docs.python.org/3/library/stdtypes.html#str.zfill" class="reference internal" title="str.zfill"><code class="sourceCode python"><span class="bu">str</span>.zfill()</code></a>, which pads a numeric string on the left with zeros. It understands about plus and minus signs:

    >>> '12'.zfill(5)
    '00012'
    >>> '-3.14'.zfill(7)
    '-003.14'
    >>> '3.14159265359'.zfill(5)
    '3.14159265359'

### <span class="section-number">7.1.4. </span>Old string formatting<a href="#old-string-formatting" class="headerlink" title="Permalink to this headline">¶</a>

The % operator (modulo) can also be used for string formatting. Given `'string' % values`, instances of `%` in `string` are replaced with zero or more elements of `values`. This operation is commonly known as string interpolation. For example:

    >>> import math
    >>> print('The value of pi is approximately %5.3f.' % math.pi)
    The value of pi is approximately 3.142.

More information can be found in the <a href="https://docs.python.org/3/library/stdtypes.html#old-string-formatting" class="reference internal"><span class="std std-ref">printf-style String Formatting</span></a> section.

<span id="tut-files"></span>

## <span class="section-number">7.2. </span>Reading and Writing Files<a href="#reading-and-writing-files" class="headerlink" title="Permalink to this headline">¶</a>

<a href="https://docs.python.org/3/library/functions.html#open" class="reference internal" title="open"><code class="sourceCode python"><span class="bu">open</span>()</code></a> returns a <a href="https://docs.python.org/3/glossary.html#term-file-object" class="reference internal"><span class="xref std std-term">file object</span></a>, and is most commonly used with two arguments: `open(filename, mode)`.

    >>> f = open('workfile', 'w')

The first argument is a string containing the filename. The second argument is another string containing a few characters describing the way in which the file will be used. _mode_ can be `'r'` when the file will only be read, `'w'` for only writing (an existing file with the same name will be erased), and `'a'` opens the file for appending; any data written to the file is automatically added to the end. `'r+'` opens the file for both reading and writing. The _mode_ argument is optional; `'r'` will be assumed if it’s omitted.

Normally, files are opened in _text mode_, that means, you read and write strings from and to the file, which are encoded in a specific encoding. If encoding is not specified, the default is platform dependent (see <a href="https://docs.python.org/3/library/functions.html#open" class="reference internal" title="open"><code class="sourceCode python"><span class="bu">open</span>()</code></a>). `'b'` appended to the mode opens the file in _binary mode_: now the data is read and written in the form of bytes objects. This mode should be used for all files that don’t contain text.

In text mode, the default when reading is to convert platform-specific line endings (`\n` on Unix, `\r\n` on Windows) to just `\n`. When writing in text mode, the default is to convert occurrences of `\n` back to platform-specific line endings. This behind-the-scenes modification to file data is fine for text files, but will corrupt binary data like that in `JPEG` or `EXE` files. Be very careful to use binary mode when reading and writing such files.

It is good practice to use the <a href="https://docs.python.org/3/reference/compound_stmts.html#with" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">with</code></a> keyword when dealing with file objects. The advantage is that the file is properly closed after its suite finishes, even if an exception is raised at some point. Using `with` is also much shorter than writing equivalent <a href="https://docs.python.org/3/reference/compound_stmts.html#try" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">try</code></a>-<a href="https://docs.python.org/3/reference/compound_stmts.html#finally" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">finally</code></a> blocks:

    >>> with open('workfile') as f:
    ...     read_data = f.read()

    >>> # We can check that the file has been automatically closed.
    >>> f.closed
    True

If you’re not using the <a href="https://docs.python.org/3/reference/compound_stmts.html#with" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">with</code></a> keyword, then you should call `f.close()` to close the file and immediately free up any system resources used by it.

Warning

Calling `f.write()` without using the `with` keyword or calling `f.close()` **might** result in the arguments of `f.write()` not being completely written to the disk, even if the program exits successfully.

After a file object is closed, either by a <a href="https://docs.python.org/3/reference/compound_stmts.html#with" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">with</code></a> statement or by calling `f.close()`, attempts to use the file object will automatically fail.

    >>> f.close()
    >>> f.read()
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    ValueError: I/O operation on closed file.

<span id="tut-filemethods"></span>

### <span class="section-number">7.2.1. </span>Methods of File Objects<a href="#methods-of-file-objects" class="headerlink" title="Permalink to this headline">¶</a>

The rest of the examples in this section will assume that a file object called `f` has already been created.

To read a file’s contents, call `f.read(size)`, which reads some quantity of data and returns it as a string (in text mode) or bytes object (in binary mode). _size_ is an optional numeric argument. When _size_ is omitted or negative, the entire contents of the file will be read and returned; it’s your problem if the file is twice as large as your machine’s memory. Otherwise, at most _size_ characters (in text mode) or _size_ bytes (in binary mode) are read and returned. If the end of the file has been reached, `f.read()` will return an empty string (`''`).

    >>> f.read()
    'This is the entire file.\n'
    >>> f.read()
    ''

`f.readline()` reads a single line from the file; a newline character (`\n`) is left at the end of the string, and is only omitted on the last line of the file if the file doesn’t end in a newline. This makes the return value unambiguous; if `f.readline()` returns an empty string, the end of the file has been reached, while a blank line is represented by `'\n'`, a string containing only a single newline.

    >>> f.readline()
    'This is the first line of the file.\n'
    >>> f.readline()
    'Second line of the file\n'
    >>> f.readline()
    ''

For reading lines from a file, you can loop over the file object. This is memory efficient, fast, and leads to simple code:

    >>> for line in f:
    ...     print(line, end='')
    ...
    This is the first line of the file.
    Second line of the file

If you want to read all the lines of a file in a list you can also use `list(f)` or `f.readlines()`.

`f.write(string)` writes the contents of _string_ to the file, returning the number of characters written.

    >>> f.write('This is a test\n')
    15

Other types of objects need to be converted – either to a string (in text mode) or a bytes object (in binary mode) – before writing them:

    >>> value = ('the answer', 42)
    >>> s = str(value)  # convert the tuple to string
    >>> f.write(s)
    18

`f.tell()` returns an integer giving the file object’s current position in the file represented as number of bytes from the beginning of the file when in binary mode and an opaque number when in text mode.

To change the file object’s position, use `f.seek(offset, whence)`. The position is computed from adding _offset_ to a reference point; the reference point is selected by the _whence_ argument. A _whence_ value of 0 measures from the beginning of the file, 1 uses the current file position, and 2 uses the end of the file as the reference point. _whence_ can be omitted and defaults to 0, using the beginning of the file as the reference point.

    >>> f = open('workfile', 'rb+')
    >>> f.write(b'0123456789abcdef')
    16
    >>> f.seek(5)      # Go to the 6th byte in the file
    5
    >>> f.read(1)
    b'5'
    >>> f.seek(-3, 2)  # Go to the 3rd byte before the end
    13
    >>> f.read(1)
    b'd'

In text files (those opened without a `b` in the mode string), only seeks relative to the beginning of the file are allowed (the exception being seeking to the very file end with `seek(0, 2)`) and the only valid _offset_ values are those returned from the `f.tell()`, or zero. Any other _offset_ value produces undefined behaviour.

File objects have some additional methods, such as `isatty()` and `truncate()` which are less frequently used; consult the Library Reference for a complete guide to file objects.

<span id="tut-json"></span>

### <span class="section-number">7.2.2. </span>Saving structured data with <a href="https://docs.python.org/3/library/json.html#module-json" class="reference internal" title="json: Encode and decode the JSON format."><code class="sourceCode python">json</code></a><a href="#saving-structured-data-with-json" class="headerlink" title="Permalink to this headline">¶</a>

Strings can easily be written to and read from a file. Numbers take a bit more effort, since the `read()` method only returns strings, which will have to be passed to a function like <a href="https://docs.python.org/3/library/functions.html#int" class="reference internal" title="int"><code class="sourceCode python"><span class="bu">int</span>()</code></a>, which takes a string like `'123'` and returns its numeric value 123. When you want to save more complex data types like nested lists and dictionaries, parsing and serializing by hand becomes complicated.

Rather than having users constantly writing and debugging code to save complicated data types to files, Python allows you to use the popular data interchange format called <a href="http://json.org/" class="reference external">JSON (JavaScript Object Notation)</a>. The standard module called <a href="https://docs.python.org/3/library/json.html#module-json" class="reference internal" title="json: Encode and decode the JSON format."><code class="sourceCode python">json</code></a> can take Python data hierarchies, and convert them to string representations; this process is called _serializing_. Reconstructing the data from the string representation is called _deserializing_. Between serializing and deserializing, the string representing the object may have been stored in a file or data, or sent over a network connection to some distant machine.

Note

The JSON format is commonly used by modern applications to allow for data exchange. Many programmers are already familiar with it, which makes it a good choice for interoperability.

If you have an object `x`, you can view its JSON string representation with a simple line of code:

    >>> import json
    >>> x = [1, 'simple', 'list']
    >>> json.dumps(x)
    '[1, "simple", "list"]'

Another variant of the <a href="https://docs.python.org/3/library/json.html#json.dumps" class="reference internal" title="json.dumps"><code class="sourceCode python">dumps()</code></a> function, called <a href="https://docs.python.org/3/library/json.html#json.dump" class="reference internal" title="json.dump"><code class="sourceCode python">dump()</code></a>, simply serializes the object to a <a href="https://docs.python.org/3/glossary.html#term-text-file" class="reference internal"><span class="xref std std-term">text file</span></a>. So if `f` is a <a href="https://docs.python.org/3/glossary.html#term-text-file" class="reference internal"><span class="xref std std-term">text file</span></a> object opened for writing, we can do this:

    json.dump(x, f)

To decode the object again, if `f` is a <a href="https://docs.python.org/3/glossary.html#term-text-file" class="reference internal"><span class="xref std std-term">text file</span></a> object which has been opened for reading:

    x = json.load(f)

This simple serialization technique can handle lists and dictionaries, but serializing arbitrary class instances in JSON requires a bit of extra effort. The reference for the <a href="https://docs.python.org/3/library/json.html#module-json" class="reference internal" title="json: Encode and decode the JSON format."><code class="sourceCode python">json</code></a> module contains an explanation of this.

See also

<a href="https://docs.python.org/3/library/pickle.html#module-pickle" class="reference internal" title="pickle: Convert Python objects to streams of bytes and back."><code class="sourceCode python">pickle</code></a> - the pickle module

Contrary to <a href="#tut-json" class="reference internal"><span class="std std-ref">JSON</span></a>, _pickle_ is a protocol which allows the serialization of arbitrarily complex Python objects. As such, it is specific to Python and cannot be used to communicate with applications written in other languages. It is also insecure by default: deserializing pickle data coming from an untrusted source can execute arbitrary code, if the data was crafted by a skilled attacker.

### [Table of Contents](https://docs.python.org/3/contents.html)

- <a href="#" class="reference internal">7. Input and Output</a>
  - <a href="#fancier-output-formatting" class="reference internal">7.1. Fancier Output Formatting</a>
    - <a href="#formatted-string-literals" class="reference internal">7.1.1. Formatted String Literals</a>
    - <a href="#the-string-format-method" class="reference internal">7.1.2. The String format() Method</a>
    - <a href="#manual-string-formatting" class="reference internal">7.1.3. Manual String Formatting</a>
    - <a href="#old-string-formatting" class="reference internal">7.1.4. Old string formatting</a>
  - <a href="#reading-and-writing-files" class="reference internal">7.2. Reading and Writing Files</a>
    - <a href="#methods-of-file-objects" class="reference internal">7.2.1. Methods of File Objects</a>
    - <a href="#saving-structured-data-with-json" class="reference internal">7.2.2. Saving structured data with <code class="sourceCode python">json</code></a>

#### Previous topic

[<span class="section-number">6. </span>Modules](modules.html 'previous chapter')

#### Next topic

[<span class="section-number">8. </span>Errors and Exceptions](errors.html 'next chapter')

### This Page

- [Report a Bug](https://docs.python.org/3/bugs.html)
- [Show Source](https://github.com/python/cpython/blob/3.9/Doc/tutorial/inputoutput.rst)

### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](errors.html '8. Errors and Exceptions') |
- [previous](modules.html '6. Modules') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-
