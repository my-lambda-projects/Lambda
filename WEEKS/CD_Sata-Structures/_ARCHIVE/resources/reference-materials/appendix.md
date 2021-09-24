# Appendix

## Interactive Mode

### Error Handling

When an error occurs, the interpreter prints an error message and a stack trace. In interactive mode, it then returns to the primary prompt; when input came from a file, it exits with a nonzero exit status after printing the stack trace. \(Exceptions handled by an except clause in a try statement are not errors in this context.\) Some errors are unconditionally fatal and cause an exit with a nonzero exit; this applies to internal inconsistencies and some cases of running out of memory. All error messages are written to the standard error stream; normal output from executed commands is written to standard output.

Typing the interrupt character \(usually Control-C or Delete\) to the primary or secondary prompt cancels the input and returns to the primary prompt. Typing an interrupt while a command is executing raises the KeyboardInterrupt exception, which may be handled by a try statement.

### Executable Python Scripts

On BSD'ish Unix systems, Python scripts can be made directly executable, like shell scripts, by putting the line :

```text
#!/usr/bin/env python3.5
```

\(assuming that the interpreter is on the user's PATH\) at the beginning of the script and giving the file an executable mode. The `#!` must be the first two characters of the file. On some platforms, this first line must end with a Unix-style line ending \(`'\n'`\), not a Windows \(`'\r\n'`\) line ending. Note that the hash, or pound, character, `'#'`, is used to start a comment in Python.

The script can be given an executable mode, or permission, using the chmod command.

\`\`\` {.sourceCode .shell-session} $ chmod +x myscript.py

\`\`\`

On Windows systems, there is no notion of an "executable mode". The Python installer automatically associates `.py` files with `python.exe` so that a double-click on a Python file will run it as a script. The extension can also be `.pyw`, in that case, the console window that normally appears is suppressed.

### The Interactive Startup File

When you use Python interactively, it is frequently handy to have some standard commands executed every time the interpreter is started. You can do this by setting an environment variable named PYTHONSTARTUP to the name of a file containing your start-up commands. This is similar to the .profile feature of the Unix shells.

This file is only read in interactive sessions, not when Python reads commands from a script, and not when /dev/tty is given as the explicit source of commands \(which otherwise behaves like an interactive session\). It is executed in the same namespace where interactive commands are executed, so that objects that it defines or imports can be used without qualification in the interactive session. You can also change the prompts `sys.ps1` and `sys.ps2` in this file.

If you want to read an additional start-up file from the current directory, you can program this in the global start-up file using code like `if os.path.isfile('.pythonrc.py'): exec(open('.pythonrc.py').read())`. If you want to use the startup file in a script, you must do this explicitly in the script:

```text
import os
filename = os.environ.get('PYTHONSTARTUP')
if filename and os.path.isfile(filename):
    with open(filename) as fobj:
        startup_file = fobj.read()
    exec(startup_file)
```

### The Customization Modules

Python provides two hooks to let you customize it: sitecustomize and usercustomize. To see how it works, you need first to find the location of your user site-packages directory. Start Python and run this code:

> > > import site site.getusersitepackages\(\) '/home/user/.local/lib/python3.5/site-packages'

Now you can create a file named usercustomize.py in that directory and put anything you want in it. It will affect every invocation of Python, unless it is started with the -s option to disable the automatic import.

sitecustomize works in the same way, but is typically created by an administrator of the computer in the global site-packages directory, and is imported before usercustomize. See the documentation of the site module for more details.

**Footnotes**

\*\*\*\*

\*\*\*\*

\*\*\*\*

## Glossary

## Glossary

`>>>`

The default Python prompt of the interactive shell. Often seen for code examples which can be executed interactively in the interpreter.`...`

Can refer to:

- The default Python prompt of the interactive shell when entering the code for an indented code block, when within a pair of matching left and right delimiters \(parentheses, square brackets, curly braces or triple quotes\), or after specifying a decorator.
- The [`Ellipsis`](https://docs.python.org/3/library/constants.html#Ellipsis) built-in constant.

2to3

A tool that tries to convert Python 2.x code to Python 3.x code by handling most of the incompatibilities which can be detected by parsing the source and traversing the parse tree.

2to3 is available in the standard library as [`lib2to3`](https://docs.python.org/3/library/2to3.html#module-lib2to3); a standalone entry point is provided as `Tools/scripts/2to3`. See [2to3 - Automated Python 2 to 3 code translation](https://docs.python.org/3/library/2to3.html#to3-reference).abstract base class

Abstract base classes complement [duck-typing](https://docs.python.org/3/glossary.html#term-duck-typing) by providing a way to define interfaces when other techniques like [`hasattr()`](https://docs.python.org/3/library/functions.html#hasattr) would be clumsy or subtly wrong \(for example with [magic methods](https://docs.python.org/3/reference/datamodel.html#special-lookup)\). ABCs introduce virtual subclasses, which are classes that don’t inherit from a class but are still recognized by [`isinstance()`](https://docs.python.org/3/library/functions.html#isinstance) and [`issubclass()`](https://docs.python.org/3/library/functions.html#issubclass); see the [`abc`](https://docs.python.org/3/library/abc.html#module-abc) module documentation. Python comes with many built-in ABCs for data structures \(in the [`collections.abc`](https://docs.python.org/3/library/collections.abc.html#module-collections.abc) module\), numbers \(in the [`numbers`](https://docs.python.org/3/library/numbers.html#module-numbers) module\), streams \(in the [`io`](https://docs.python.org/3/library/io.html#module-io) module\), import finders and loaders \(in the [`importlib.abc`](https://docs.python.org/3/library/importlib.html#module-importlib.abc) module\). You can create your own ABCs with the [`abc`](https://docs.python.org/3/library/abc.html#module-abc) module.annotation

A label associated with a variable, a class attribute or a function parameter or return value, used by convention as a [type hint](https://docs.python.org/3/glossary.html#term-type-hint).

Annotations of local variables cannot be accessed at runtime, but annotations of global variables, class attributes, and functions are stored in the `__annotations__` special attribute of modules, classes, and functions, respectively.

See [variable annotation](https://docs.python.org/3/glossary.html#term-variable-annotation), [function annotation](https://docs.python.org/3/glossary.html#term-function-annotation), [**PEP 484**](https://www.python.org/dev/peps/pep-0484) and [**PEP 526**](https://www.python.org/dev/peps/pep-0526), which describe this functionality.argument

A value passed to a [function](https://docs.python.org/3/glossary.html#term-function) \(or [method](https://docs.python.org/3/glossary.html#term-method)\) when calling the function. There are two kinds of argument:

- _keyword argument_: an argument preceded by an identifier \(e.g. `name=`\) in a function call or passed as a value in a dictionary preceded by `**`. For example, `3` and `5` are both keyword arguments in the following calls to [`complex()`](https://docs.python.org/3/library/functions.html#complex):

  ```text
  complex(real=3, imag=5)
  complex(**{'real': 3, 'imag': 5})
  ```

- _positional argument_: an argument that is not a keyword argument. Positional arguments can appear at the beginning of an argument list and/or be passed as elements of an [iterable](https://docs.python.org/3/glossary.html#term-iterable) preceded by `*`. For example, `3` and `5` are both positional arguments in the following calls:

  ```text
  complex(3, 5)
  complex(*(3, 5))
  ```

Arguments are assigned to the named local variables in a function body. See the [Calls](https://docs.python.org/3/reference/expressions.html#calls) section for the rules governing this assignment. Syntactically, any expression can be used to represent an argument; the evaluated value is assigned to the local variable.

See also the [parameter](https://docs.python.org/3/glossary.html#term-parameter) glossary entry, the FAQ question on [the difference between arguments and parameters](https://docs.python.org/3/faq/programming.html#faq-argument-vs-parameter), and [**PEP 362**](https://www.python.org/dev/peps/pep-0362).asynchronous context manager

An object which controls the environment seen in an [`async with`](https://docs.python.org/3/reference/compound_stmts.html#async-with) statement by defining [`__aenter__()`](https://docs.python.org/3/reference/datamodel.html#object.__aenter__) and [`__aexit__()`](https://docs.python.org/3/reference/datamodel.html#object.__aexit__) methods. Introduced by [**PEP 492**](https://www.python.org/dev/peps/pep-0492).asynchronous generator

A function which returns an [asynchronous generator iterator](https://docs.python.org/3/glossary.html#term-asynchronous-generator-iterator). It looks like a coroutine function defined with [`async def`](https://docs.python.org/3/reference/compound_stmts.html#async-def) except that it contains [`yield`](https://docs.python.org/3/reference/simple_stmts.html#yield) expressions for producing a series of values usable in an [`async for`](https://docs.python.org/3/reference/compound_stmts.html#async-for) loop.

Usually refers to an asynchronous generator function, but may refer to an _asynchronous generator iterator_ in some contexts. In cases where the intended meaning isn’t clear, using the full terms avoids ambiguity.

An asynchronous generator function may contain [`await`](https://docs.python.org/3/reference/expressions.html#await) expressions as well as [`async for`](https://docs.python.org/3/reference/compound_stmts.html#async-for), and [`async with`](https://docs.python.org/3/reference/compound_stmts.html#async-with) statements.asynchronous generator iterator

An object created by a [asynchronous generator](https://docs.python.org/3/glossary.html#term-asynchronous-generator) function.

This is an [asynchronous iterator](https://docs.python.org/3/glossary.html#term-asynchronous-iterator) which when called using the [`__anext__()`](https://docs.python.org/3/reference/datamodel.html#object.__anext__) method returns an awaitable object which will execute the body of the asynchronous generator function until the next [`yield`](https://docs.python.org/3/reference/simple_stmts.html#yield) expression.

Each [`yield`](https://docs.python.org/3/reference/simple_stmts.html#yield) temporarily suspends processing, remembering the location execution state \(including local variables and pending try-statements\). When the _asynchronous generator iterator_ effectively resumes with another awaitable returned by [`__anext__()`](https://docs.python.org/3/reference/datamodel.html#object.__anext__), it picks up where it left off. See [**PEP 492**](https://www.python.org/dev/peps/pep-0492) and [**PEP 525**](https://www.python.org/dev/peps/pep-0525).asynchronous iterable

An object, that can be used in an [`async for`](https://docs.python.org/3/reference/compound_stmts.html#async-for) statement. Must return an [asynchronous iterator](https://docs.python.org/3/glossary.html#term-asynchronous-iterator) from its [`__aiter__()`](https://docs.python.org/3/reference/datamodel.html#object.__aiter__) method. Introduced by [**PEP 492**](https://www.python.org/dev/peps/pep-0492).asynchronous iterator

An object that implements the [`__aiter__()`](https://docs.python.org/3/reference/datamodel.html#object.__aiter__) and [`__anext__()`](https://docs.python.org/3/reference/datamodel.html#object.__anext__) methods. `__anext__` must return an [awaitable](https://docs.python.org/3/glossary.html#term-awaitable) object. [`async for`](https://docs.python.org/3/reference/compound_stmts.html#async-for) resolves the awaitables returned by an asynchronous iterator’s [`__anext__()`](https://docs.python.org/3/reference/datamodel.html#object.__anext__) method until it raises a [`StopAsyncIteration`](https://docs.python.org/3/library/exceptions.html#StopAsyncIteration) exception. Introduced by [**PEP 492**](https://www.python.org/dev/peps/pep-0492).attribute

A value associated with an object which is referenced by name using dotted expressions. For example, if an object _o_ has an attribute _a_ it would be referenced as _o.a_.awaitable

An object that can be used in an [`await`](https://docs.python.org/3/reference/expressions.html#await) expression. Can be a [coroutine](https://docs.python.org/3/glossary.html#term-coroutine) or an object with an [`__await__()`](https://docs.python.org/3/reference/datamodel.html#object.__await__) method. See also [**PEP 492**](https://www.python.org/dev/peps/pep-0492).BDFL

Benevolent Dictator For Life, a.k.a. [Guido van Rossum](https://gvanrossum.github.io/), Python’s creator.binary file

A [file object](https://docs.python.org/3/glossary.html#term-file-object) able to read and write [bytes-like objects](https://docs.python.org/3/glossary.html#term-bytes-like-object). Examples of binary files are files opened in binary mode \(`'rb'`, `'wb'` or `'rb+'`\), `sys.stdin.buffer`, `sys.stdout.buffer`, and instances of [`io.BytesIO`](https://docs.python.org/3/library/io.html#io.BytesIO) and [`gzip.GzipFile`](https://docs.python.org/3/library/gzip.html#gzip.GzipFile).

See also [text file](https://docs.python.org/3/glossary.html#term-text-file) for a file object able to read and write [`str`](https://docs.python.org/3/library/stdtypes.html#str) objects.bytes-like object

An object that supports the [Buffer Protocol](https://docs.python.org/3/c-api/buffer.html#bufferobjects) and can export a C-[contiguous](https://docs.python.org/3/glossary.html#term-contiguous) buffer. This includes all [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes), [`bytearray`](https://docs.python.org/3/library/stdtypes.html#bytearray), and [`array.array`](https://docs.python.org/3/library/array.html#array.array) objects, as well as many common [`memoryview`](https://docs.python.org/3/library/stdtypes.html#memoryview) objects. Bytes-like objects can be used for various operations that work with binary data; these include compression, saving to a binary file, and sending over a socket.

Some operations need the binary data to be mutable. The documentation often refers to these as “read-write bytes-like objects”. Example mutable buffer objects include [`bytearray`](https://docs.python.org/3/library/stdtypes.html#bytearray) and a [`memoryview`](https://docs.python.org/3/library/stdtypes.html#memoryview) of a [`bytearray`](https://docs.python.org/3/library/stdtypes.html#bytearray). Other operations require the binary data to be stored in immutable objects \(“read-only bytes-like objects”\); examples of these include [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes) and a [`memoryview`](https://docs.python.org/3/library/stdtypes.html#memoryview) of a [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes) object.bytecode

Python source code is compiled into bytecode, the internal representation of a Python program in the CPython interpreter. The bytecode is also cached in `.pyc` files so that executing the same file is faster the second time \(recompilation from source to bytecode can be avoided\). This “intermediate language” is said to run on a [virtual machine](https://docs.python.org/3/glossary.html#term-virtual-machine) that executes the machine code corresponding to each bytecode. Do note that bytecodes are not expected to work between different Python virtual machines, nor to be stable between Python releases.

A list of bytecode instructions can be found in the documentation for [the dis module](https://docs.python.org/3/library/dis.html#bytecodes).callback

A subroutine function which is passed as an argument to be executed at some point in the future.class

A template for creating user-defined objects. Class definitions normally contain method definitions which operate on instances of the class.class variable

A variable defined in a class and intended to be modified only at class level \(i.e., not in an instance of the class\).coercion

The implicit conversion of an instance of one type to another during an operation which involves two arguments of the same type. For example, `int(3.15)` converts the floating point number to the integer `3`, but in `3+4.5`, each argument is of a different type \(one int, one float\), and both must be converted to the same type before they can be added or it will raise a [`TypeError`](https://docs.python.org/3/library/exceptions.html#TypeError). Without coercion, all arguments of even compatible types would have to be normalized to the same value by the programmer, e.g., `float(3)+4.5` rather than just `3+4.5`.complex number

An extension of the familiar real number system in which all numbers are expressed as a sum of a real part and an imaginary part. Imaginary numbers are real multiples of the imaginary unit \(the square root of `-1`\), often written `i` in mathematics or `j` in engineering. Python has built-in support for complex numbers, which are written with this latter notation; the imaginary part is written with a `j` suffix, e.g., `3+1j`. To get access to complex equivalents of the [`math`](https://docs.python.org/3/library/math.html#module-math) module, use [`cmath`](https://docs.python.org/3/library/cmath.html#module-cmath). Use of complex numbers is a fairly advanced mathematical feature. If you’re not aware of a need for them, it’s almost certain you can safely ignore them.context manager

An object which controls the environment seen in a [`with`](https://docs.python.org/3/reference/compound_stmts.html#with) statement by defining [`__enter__()`](https://docs.python.org/3/reference/datamodel.html#object.__enter__) and [`__exit__()`](https://docs.python.org/3/reference/datamodel.html#object.__exit__) methods. See [**PEP 343**](https://www.python.org/dev/peps/pep-0343).context variable

A variable which can have different values depending on its context. This is similar to Thread-Local Storage in which each execution thread may have a different value for a variable. However, with context variables, there may be several contexts in one execution thread and the main usage for context variables is to keep track of variables in concurrent asynchronous tasks. See [`contextvars`](https://docs.python.org/3/library/contextvars.html#module-contextvars).contiguous

A buffer is considered contiguous exactly if it is either _C-contiguous_ or _Fortran contiguous_. Zero-dimensional buffers are C and Fortran contiguous. In one-dimensional arrays, the items must be laid out in memory next to each other, in order of increasing indexes starting from zero. In multidimensional C-contiguous arrays, the last index varies the fastest when visiting items in order of memory address. However, in Fortran contiguous arrays, the first index varies the fastest.coroutine

Coroutines are a more generalized form of subroutines. Subroutines are entered at one point and exited at another point. Coroutines can be entered, exited, and resumed at many different points. They can be implemented with the [`async def`](https://docs.python.org/3/reference/compound_stmts.html#async-def) statement. See also [**PEP 492**](https://www.python.org/dev/peps/pep-0492).coroutine function

A function which returns a [coroutine](https://docs.python.org/3/glossary.html#term-coroutine) object. A coroutine function may be defined with the [`async def`](https://docs.python.org/3/reference/compound_stmts.html#async-def) statement, and may contain [`await`](https://docs.python.org/3/reference/expressions.html#await), [`async for`](https://docs.python.org/3/reference/compound_stmts.html#async-for), and [`async with`](https://docs.python.org/3/reference/compound_stmts.html#async-with) keywords. These were introduced by [**PEP 492**](https://www.python.org/dev/peps/pep-0492).CPython

The canonical implementation of the Python programming language, as distributed on [python.org](https://www.python.org/). The term “CPython” is used when necessary to distinguish this implementation from others such as Jython or IronPython.decorator

A function returning another function, usually applied as a function transformation using the `@wrapper` syntax. Common examples for decorators are [`classmethod()`](https://docs.python.org/3/library/functions.html#classmethod) and [`staticmethod()`](https://docs.python.org/3/library/functions.html#staticmethod).

The decorator syntax is merely syntactic sugar, the following two function definitions are semantically equivalent:

```text
def f(...):
    ...
f = staticmethod(f)

@staticmethod
def f(...):
    ...
```

The same concept exists for classes, but is less commonly used there. See the documentation for [function definitions](https://docs.python.org/3/reference/compound_stmts.html#function) and [class definitions](https://docs.python.org/3/reference/compound_stmts.html#class) for more about decorators.descriptor

Any object which defines the methods [`__get__()`](https://docs.python.org/3/reference/datamodel.html#object.__get__), [`__set__()`](https://docs.python.org/3/reference/datamodel.html#object.__set__), or [`__delete__()`](https://docs.python.org/3/reference/datamodel.html#object.__delete__). When a class attribute is a descriptor, its special binding behavior is triggered upon attribute lookup. Normally, using _a.b_ to get, set or delete an attribute looks up the object named _b_ in the class dictionary for _a_, but if _b_ is a descriptor, the respective descriptor method gets called. Understanding descriptors is a key to a deep understanding of Python because they are the basis for many features including functions, methods, properties, class methods, static methods, and reference to super classes.

For more information about descriptors’ methods, see [Implementing Descriptors](https://docs.python.org/3/reference/datamodel.html#descriptors) or the [Descriptor How To Guide](https://docs.python.org/3/howto/descriptor.html#descriptorhowto).dictionary

An associative array, where arbitrary keys are mapped to values. The keys can be any object with [`__hash__()`](https://docs.python.org/3/reference/datamodel.html#object.__hash__) and [`__eq__()`](https://docs.python.org/3/reference/datamodel.html#object.__eq__) methods. Called a hash in Perl.dictionary comprehension

A compact way to process all or part of the elements in an iterable and return a dictionary with the results. `results = {n: n ** 2 for n in range(10)}` generates a dictionary containing key `n` mapped to value `n ** 2`. See [Displays for lists, sets and dictionaries](https://docs.python.org/3/reference/expressions.html#comprehensions).dictionary view

The objects returned from [`dict.keys()`](https://docs.python.org/3/library/stdtypes.html#dict.keys), [`dict.values()`](https://docs.python.org/3/library/stdtypes.html#dict.values), and [`dict.items()`](https://docs.python.org/3/library/stdtypes.html#dict.items) are called dictionary views. They provide a dynamic view on the dictionary’s entries, which means that when the dictionary changes, the view reflects these changes. To force the dictionary view to become a full list use `list(dictview)`. See [Dictionary view objects](https://docs.python.org/3/library/stdtypes.html#dict-views).docstring

A string literal which appears as the first expression in a class, function or module. While ignored when the suite is executed, it is recognized by the compiler and put into the `__doc__` attribute of the enclosing class, function or module. Since it is available via introspection, it is the canonical place for documentation of the object.duck-typing

A programming style which does not look at an object’s type to determine if it has the right interface; instead, the method or attribute is simply called or used \(“If it looks like a duck and quacks like a duck, it must be a duck.”\) By emphasizing interfaces rather than specific types, well-designed code improves its flexibility by allowing polymorphic substitution. Duck-typing avoids tests using [`type()`](https://docs.python.org/3/library/functions.html#type) or [`isinstance()`](https://docs.python.org/3/library/functions.html#isinstance). \(Note, however, that duck-typing can be complemented with [abstract base classes](https://docs.python.org/3/glossary.html#term-abstract-base-class).\) Instead, it typically employs [`hasattr()`](https://docs.python.org/3/library/functions.html#hasattr) tests or [EAFP](https://docs.python.org/3/glossary.html#term-eafp) programming.EAFP

Easier to ask for forgiveness than permission. This common Python coding style assumes the existence of valid keys or attributes and catches exceptions if the assumption proves false. This clean and fast style is characterized by the presence of many [`try`](https://docs.python.org/3/reference/compound_stmts.html#try) and [`except`](https://docs.python.org/3/reference/compound_stmts.html#except) statements. The technique contrasts with the [LBYL](https://docs.python.org/3/glossary.html#term-lbyl) style common to many other languages such as C.expression

A piece of syntax which can be evaluated to some value. In other words, an expression is an accumulation of expression elements like literals, names, attribute access, operators or function calls which all return a value. In contrast to many other languages, not all language constructs are expressions. There are also [statement](https://docs.python.org/3/glossary.html#term-statement)s which cannot be used as expressions, such as [`while`](https://docs.python.org/3/reference/compound_stmts.html#while). Assignments are also statements, not expressions.extension module

A module written in C or C++, using Python’s C API to interact with the core and with user code.f-string

String literals prefixed with `'f'` or `'F'` are commonly called “f-strings” which is short for [formatted string literals](https://docs.python.org/3/reference/lexical_analysis.html#f-strings). See also [**PEP 498**](https://www.python.org/dev/peps/pep-0498).file object

An object exposing a file-oriented API \(with methods such as `read()` or `write()`\) to an underlying resource. Depending on the way it was created, a file object can mediate access to a real on-disk file or to another type of storage or communication device \(for example standard input/output, in-memory buffers, sockets, pipes, etc.\). File objects are also called _file-like objects_ or _streams_.

There are actually three categories of file objects: raw [binary files](https://docs.python.org/3/glossary.html#term-binary-file), buffered [binary files](https://docs.python.org/3/glossary.html#term-binary-file) and [text files](https://docs.python.org/3/glossary.html#term-text-file). Their interfaces are defined in the [`io`](https://docs.python.org/3/library/io.html#module-io) module. The canonical way to create a file object is by using the [`open()`](https://docs.python.org/3/library/functions.html#open) function.file-like object

A synonym for [file object](https://docs.python.org/3/glossary.html#term-file-object).finder

An object that tries to find the [loader](https://docs.python.org/3/glossary.html#term-loader) for a module that is being imported.

Since Python 3.3, there are two types of finder: [meta path finders](https://docs.python.org/3/glossary.html#term-meta-path-finder) for use with [`sys.meta_path`](https://docs.python.org/3/library/sys.html#sys.meta_path), and [path entry finders](https://docs.python.org/3/glossary.html#term-path-entry-finder) for use with [`sys.path_hooks`](https://docs.python.org/3/library/sys.html#sys.path_hooks).

See [**PEP 302**](https://www.python.org/dev/peps/pep-0302), [**PEP 420**](https://www.python.org/dev/peps/pep-0420) and [**PEP 451**](https://www.python.org/dev/peps/pep-0451) for much more detail.floor division

Mathematical division that rounds down to nearest integer. The floor division operator is `//`. For example, the expression `11 // 4` evaluates to `2` in contrast to the `2.75` returned by float true division. Note that `(-11) // 4` is `-3` because that is `-2.75` rounded _downward_. See [**PEP 238**](https://www.python.org/dev/peps/pep-0238).function

A series of statements which returns some value to a caller. It can also be passed zero or more [arguments](https://docs.python.org/3/glossary.html#term-argument) which may be used in the execution of the body. See also [parameter](https://docs.python.org/3/glossary.html#term-parameter), [method](https://docs.python.org/3/glossary.html#term-method), and the [Function definitions](https://docs.python.org/3/reference/compound_stmts.html#function) section.function annotation

An [annotation](https://docs.python.org/3/glossary.html#term-annotation) of a function parameter or return value.

Function annotations are usually used for [type hints](https://docs.python.org/3/glossary.html#term-type-hint): for example, this function is expected to take two [`int`](https://docs.python.org/3/library/functions.html#int) arguments and is also expected to have an [`int`](https://docs.python.org/3/library/functions.html#int) return value:

```text
def sum_two_numbers(a: int, b: int) -> int:
   return a + b
```

Function annotation syntax is explained in section [Function definitions](https://docs.python.org/3/reference/compound_stmts.html#function).

See [variable annotation](https://docs.python.org/3/glossary.html#term-variable-annotation) and [**PEP 484**](https://www.python.org/dev/peps/pep-0484), which describe this functionality.\_\_future\_\_

A [future statement](https://docs.python.org/3/reference/simple_stmts.html#future), `from __future__ import <feature>`, directs the compiler to compile the current module using syntax or semantics that will become standard in a future release of Python. The [`__future__`](https://docs.python.org/3/library/__future__.html#module-__future__) module documents the possible values of _feature_. By importing this module and evaluating its variables, you can see when a new feature was first added to the language and when it will \(or did\) become the default:&gt;&gt;&gt;

```text
>>> import __future__
>>> __future__.division
_Feature((2, 2, 0, 'alpha', 2), (3, 0, 0, 'alpha', 0), 8192)
```

garbage collection

The process of freeing memory when it is not used anymore. Python performs garbage collection via reference counting and a cyclic garbage collector that is able to detect and break reference cycles. The garbage collector can be controlled using the [`gc`](https://docs.python.org/3/library/gc.html#module-gc) module.generator

A function which returns a [generator iterator](https://docs.python.org/3/glossary.html#term-generator-iterator). It looks like a normal function except that it contains [`yield`](https://docs.python.org/3/reference/simple_stmts.html#yield) expressions for producing a series of values usable in a for-loop or that can be retrieved one at a time with the [`next()`](https://docs.python.org/3/library/functions.html#next) function.

Usually refers to a generator function, but may refer to a _generator iterator_ in some contexts. In cases where the intended meaning isn’t clear, using the full terms avoids ambiguity.generator iterator

An object created by a [generator](https://docs.python.org/3/glossary.html#term-generator) function.

Each [`yield`](https://docs.python.org/3/reference/simple_stmts.html#yield) temporarily suspends processing, remembering the location execution state \(including local variables and pending try-statements\). When the _generator iterator_ resumes, it picks up where it left off \(in contrast to functions which start fresh on every invocation\).generator expression

An expression that returns an iterator. It looks like a normal expression followed by a `for` clause defining a loop variable, range, and an optional `if` clause. The combined expression generates values for an enclosing function:&gt;&gt;&gt;

```text
>>> sum(i*i for i in range(10))         # sum of squares 0, 1, 4, ... 81
285
```

generic function

A function composed of multiple functions implementing the same operation for different types. Which implementation should be used during a call is determined by the dispatch algorithm.

See also the [single dispatch](https://docs.python.org/3/glossary.html#term-single-dispatch) glossary entry, the [`functools.singledispatch()`](https://docs.python.org/3/library/functools.html#functools.singledispatch) decorator, and [**PEP 443**](https://www.python.org/dev/peps/pep-0443).generic type

A [type](https://docs.python.org/3/glossary.html#term-type) that can be parameterized; typically a container like [`list`](https://docs.python.org/3/library/stdtypes.html#list). Used for [type hints](https://docs.python.org/3/glossary.html#term-type-hint) and [annotations](https://docs.python.org/3/glossary.html#term-annotation).

See [**PEP 483**](https://www.python.org/dev/peps/pep-0483) for more details, and [`typing`](https://docs.python.org/3/library/typing.html#module-typing) or [generic alias type](https://docs.python.org/3/library/stdtypes.html#types-genericalias) for its uses.GIL

See [global interpreter lock](https://docs.python.org/3/glossary.html#term-global-interpreter-lock).global interpreter lock

The mechanism used by the [CPython](https://docs.python.org/3/glossary.html#term-cpython) interpreter to assure that only one thread executes Python [bytecode](https://docs.python.org/3/glossary.html#term-bytecode) at a time. This simplifies the CPython implementation by making the object model \(including critical built-in types such as [`dict`](https://docs.python.org/3/library/stdtypes.html#dict)\) implicitly safe against concurrent access. Locking the entire interpreter makes it easier for the interpreter to be multi-threaded, at the expense of much of the parallelism afforded by multi-processor machines.

However, some extension modules, either standard or third-party, are designed so as to release the GIL when doing computationally-intensive tasks such as compression or hashing. Also, the GIL is always released when doing I/O.

Past efforts to create a “free-threaded” interpreter \(one which locks shared data at a much finer granularity\) have not been successful because performance suffered in the common single-processor case. It is believed that overcoming this performance issue would make the implementation much more complicated and therefore costlier to maintain.hash-based pyc

A bytecode cache file that uses the hash rather than the last-modified time of the corresponding source file to determine its validity. See [Cached bytecode invalidation](https://docs.python.org/3/reference/import.html#pyc-invalidation).hashable

An object is _hashable_ if it has a hash value which never changes during its lifetime \(it needs a [`__hash__()`](https://docs.python.org/3/reference/datamodel.html#object.__hash__) method\), and can be compared to other objects \(it needs an [`__eq__()`](https://docs.python.org/3/reference/datamodel.html#object.__eq__) method\). Hashable objects which compare equal must have the same hash value.

Hashability makes an object usable as a dictionary key and a set member, because these data structures use the hash value internally.

Most of Python’s immutable built-in objects are hashable; mutable containers \(such as lists or dictionaries\) are not; immutable containers \(such as tuples and frozensets\) are only hashable if their elements are hashable. Objects which are instances of user-defined classes are hashable by default. They all compare unequal \(except with themselves\), and their hash value is derived from their [`id()`](https://docs.python.org/3/library/functions.html#id).IDLE

An Integrated Development Environment for Python. IDLE is a basic editor and interpreter environment which ships with the standard distribution of Python.immutable

An object with a fixed value. Immutable objects include numbers, strings and tuples. Such an object cannot be altered. A new object has to be created if a different value has to be stored. They play an important role in places where a constant hash value is needed, for example as a key in a dictionary.import path

A list of locations \(or [path entries](https://docs.python.org/3/glossary.html#term-path-entry)\) that are searched by the [path based finder](https://docs.python.org/3/glossary.html#term-path-based-finder) for modules to import. During import, this list of locations usually comes from [`sys.path`](https://docs.python.org/3/library/sys.html#sys.path), but for subpackages it may also come from the parent package’s `__path__` attribute.importing

The process by which Python code in one module is made available to Python code in another module.importer

An object that both finds and loads a module; both a [finder](https://docs.python.org/3/glossary.html#term-finder) and [loader](https://docs.python.org/3/glossary.html#term-loader) object.interactive

Python has an interactive interpreter which means you can enter statements and expressions at the interpreter prompt, immediately execute them and see their results. Just launch `python` with no arguments \(possibly by selecting it from your computer’s main menu\). It is a very powerful way to test out new ideas or inspect modules and packages \(remember `help(x)`\).interpreted

Python is an interpreted language, as opposed to a compiled one, though the distinction can be blurry because of the presence of the bytecode compiler. This means that source files can be run directly without explicitly creating an executable which is then run. Interpreted languages typically have a shorter development/debug cycle than compiled ones, though their programs generally also run more slowly. See also [interactive](https://docs.python.org/3/glossary.html#term-interactive).interpreter shutdown

When asked to shut down, the Python interpreter enters a special phase where it gradually releases all allocated resources, such as modules and various critical internal structures. It also makes several calls to the [garbage collector](https://docs.python.org/3/glossary.html#term-garbage-collection). This can trigger the execution of code in user-defined destructors or weakref callbacks. Code executed during the shutdown phase can encounter various exceptions as the resources it relies on may not function anymore \(common examples are library modules or the warnings machinery\).

The main reason for interpreter shutdown is that the `__main__` module or the script being run has finished executing.iterable

An object capable of returning its members one at a time. Examples of iterables include all sequence types \(such as [`list`](https://docs.python.org/3/library/stdtypes.html#list), [`str`](https://docs.python.org/3/library/stdtypes.html#str), and [`tuple`](https://docs.python.org/3/library/stdtypes.html#tuple)\) and some non-sequence types like [`dict`](https://docs.python.org/3/library/stdtypes.html#dict), [file objects](https://docs.python.org/3/glossary.html#term-file-object), and objects of any classes you define with an [`__iter__()`](https://docs.python.org/3/reference/datamodel.html#object.__iter__) method or with a [`__getitem__()`](https://docs.python.org/3/reference/datamodel.html#object.__getitem__) method that implements [Sequence](https://docs.python.org/3/glossary.html#term-sequence) semantics.

Iterables can be used in a [`for`](https://docs.python.org/3/reference/compound_stmts.html#for) loop and in many other places where a sequence is needed \([`zip()`](https://docs.python.org/3/library/functions.html#zip), [`map()`](https://docs.python.org/3/library/functions.html#map), …\). When an iterable object is passed as an argument to the built-in function [`iter()`](https://docs.python.org/3/library/functions.html#iter), it returns an iterator for the object. This iterator is good for one pass over the set of values. When using iterables, it is usually not necessary to call [`iter()`](https://docs.python.org/3/library/functions.html#iter) or deal with iterator objects yourself. The `for` statement does that automatically for you, creating a temporary unnamed variable to hold the iterator for the duration of the loop. See also [iterator](https://docs.python.org/3/glossary.html#term-iterator), [sequence](https://docs.python.org/3/glossary.html#term-sequence), and [generator](https://docs.python.org/3/glossary.html#term-generator).iterator

An object representing a stream of data. Repeated calls to the iterator’s [`__next__()`](https://docs.python.org/3/library/stdtypes.html#iterator.__next__) method \(or passing it to the built-in function [`next()`](https://docs.python.org/3/library/functions.html#next)\) return successive items in the stream. When no more data are available a [`StopIteration`](https://docs.python.org/3/library/exceptions.html#StopIteration) exception is raised instead. At this point, the iterator object is exhausted and any further calls to its `__next__()` method just raise [`StopIteration`](https://docs.python.org/3/library/exceptions.html#StopIteration) again. Iterators are required to have an [`__iter__()`](https://docs.python.org/3/reference/datamodel.html#object.__iter__) method that returns the iterator object itself so every iterator is also iterable and may be used in most places where other iterables are accepted. One notable exception is code which attempts multiple iteration passes. A container object \(such as a [`list`](https://docs.python.org/3/library/stdtypes.html#list)\) produces a fresh new iterator each time you pass it to the [`iter()`](https://docs.python.org/3/library/functions.html#iter) function or use it in a [`for`](https://docs.python.org/3/reference/compound_stmts.html#for) loop. Attempting this with an iterator will just return the same exhausted iterator object used in the previous iteration pass, making it appear like an empty container.

More information can be found in [Iterator Types](https://docs.python.org/3/library/stdtypes.html#typeiter).key function

A key function or collation function is a callable that returns a value used for sorting or ordering. For example, [`locale.strxfrm()`](https://docs.python.org/3/library/locale.html#locale.strxfrm) is used to produce a sort key that is aware of locale specific sort conventions.

A number of tools in Python accept key functions to control how elements are ordered or grouped. They include [`min()`](https://docs.python.org/3/library/functions.html#min), [`max()`](https://docs.python.org/3/library/functions.html#max), [`sorted()`](https://docs.python.org/3/library/functions.html#sorted), [`list.sort()`](https://docs.python.org/3/library/stdtypes.html#list.sort), [`heapq.merge()`](https://docs.python.org/3/library/heapq.html#heapq.merge), [`heapq.nsmallest()`](https://docs.python.org/3/library/heapq.html#heapq.nsmallest), [`heapq.nlargest()`](https://docs.python.org/3/library/heapq.html#heapq.nlargest), and [`itertools.groupby()`](https://docs.python.org/3/library/itertools.html#itertools.groupby).

There are several ways to create a key function. For example. the [`str.lower()`](https://docs.python.org/3/library/stdtypes.html#str.lower) method can serve as a key function for case insensitive sorts. Alternatively, a key function can be built from a [`lambda`](https://docs.python.org/3/reference/expressions.html#lambda) expression such as `lambda r: (r[0], r[2])`. Also, the [`operator`](https://docs.python.org/3/library/operator.html#module-operator) module provides three key function constructors: [`attrgetter()`](https://docs.python.org/3/library/operator.html#operator.attrgetter), [`itemgetter()`](https://docs.python.org/3/library/operator.html#operator.itemgetter), and [`methodcaller()`](https://docs.python.org/3/library/operator.html#operator.methodcaller). See the [Sorting HOW TO](https://docs.python.org/3/howto/sorting.html#sortinghowto) for examples of how to create and use key functions.keyword argument

See [argument](https://docs.python.org/3/glossary.html#term-argument).lambda

An anonymous inline function consisting of a single [expression](https://docs.python.org/3/glossary.html#term-expression) which is evaluated when the function is called. The syntax to create a lambda function is `lambda [parameters]: expression`LBYL

Look before you leap. This coding style explicitly tests for pre-conditions before making calls or lookups. This style contrasts with the [EAFP](https://docs.python.org/3/glossary.html#term-eafp) approach and is characterized by the presence of many [`if`](https://docs.python.org/3/reference/compound_stmts.html#if) statements.

In a multi-threaded environment, the LBYL approach can risk introducing a race condition between “the looking” and “the leaping”. For example, the code, `if key in mapping: return mapping[key]` can fail if another thread removes _key_ from _mapping_ after the test, but before the lookup. This issue can be solved with locks or by using the EAFP approach.list

A built-in Python [sequence](https://docs.python.org/3/glossary.html#term-sequence). Despite its name it is more akin to an array in other languages than to a linked list since access to elements is O\(1\).list comprehension

A compact way to process all or part of the elements in a sequence and return a list with the results. `result = ['{:#04x}'.format(x) for x in range(256) if x % 2 == 0]` generates a list of strings containing even hex numbers \(0x..\) in the range from 0 to 255. The [`if`](https://docs.python.org/3/reference/compound_stmts.html#if) clause is optional. If omitted, all elements in `range(256)` are processed.loader

An object that loads a module. It must define a method named `load_module()`. A loader is typically returned by a [finder](https://docs.python.org/3/glossary.html#term-finder). See [**PEP 302**](https://www.python.org/dev/peps/pep-0302) for details and [`importlib.abc.Loader`](https://docs.python.org/3/library/importlib.html#importlib.abc.Loader) for an [abstract base class](https://docs.python.org/3/glossary.html#term-abstract-base-class).magic method

An informal synonym for [special method](https://docs.python.org/3/glossary.html#term-special-method).mapping

A container object that supports arbitrary key lookups and implements the methods specified in the [`Mapping`](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping) or [`MutableMapping`](https://docs.python.org/3/library/collections.abc.html#collections.abc.MutableMapping) [abstract base classes](https://docs.python.org/3/library/collections.abc.html#collections-abstract-base-classes). Examples include [`dict`](https://docs.python.org/3/library/stdtypes.html#dict), [`collections.defaultdict`](https://docs.python.org/3/library/collections.html#collections.defaultdict), [`collections.OrderedDict`](https://docs.python.org/3/library/collections.html#collections.OrderedDict) and [`collections.Counter`](https://docs.python.org/3/library/collections.html#collections.Counter).meta path finder

A [finder](https://docs.python.org/3/glossary.html#term-finder) returned by a search of [`sys.meta_path`](https://docs.python.org/3/library/sys.html#sys.meta_path). Meta path finders are related to, but different from [path entry finders](https://docs.python.org/3/glossary.html#term-path-entry-finder).

See [`importlib.abc.MetaPathFinder`](https://docs.python.org/3/library/importlib.html#importlib.abc.MetaPathFinder) for the methods that meta path finders implement.metaclass

The class of a class. Class definitions create a class name, a class dictionary, and a list of base classes. The metaclass is responsible for taking those three arguments and creating the class. Most object oriented programming languages provide a default implementation. What makes Python special is that it is possible to create custom metaclasses. Most users never need this tool, but when the need arises, metaclasses can provide powerful, elegant solutions. They have been used for logging attribute access, adding thread-safety, tracking object creation, implementing singletons, and many other tasks.

More information can be found in [Metaclasses](https://docs.python.org/3/reference/datamodel.html#metaclasses).method

A function which is defined inside a class body. If called as an attribute of an instance of that class, the method will get the instance object as its first [argument](https://docs.python.org/3/glossary.html#term-argument) \(which is usually called `self`\). See [function](https://docs.python.org/3/glossary.html#term-function) and [nested scope](https://docs.python.org/3/glossary.html#term-nested-scope).method resolution order

Method Resolution Order is the order in which base classes are searched for a member during lookup. See [The Python 2.3 Method Resolution Order](https://www.python.org/download/releases/2.3/mro/) for details of the algorithm used by the Python interpreter since the 2.3 release.module

An object that serves as an organizational unit of Python code. Modules have a namespace containing arbitrary Python objects. Modules are loaded into Python by the process of [importing](https://docs.python.org/3/glossary.html#term-importing).

See also [package](https://docs.python.org/3/glossary.html#term-package).module spec

A namespace containing the import-related information used to load a module. An instance of [`importlib.machinery.ModuleSpec`](https://docs.python.org/3/library/importlib.html#importlib.machinery.ModuleSpec).MRO

See [method resolution order](https://docs.python.org/3/glossary.html#term-method-resolution-order).mutable

Mutable objects can change their value but keep their [`id()`](https://docs.python.org/3/library/functions.html#id). See also [immutable](https://docs.python.org/3/glossary.html#term-immutable).named tuple

The term “named tuple” applies to any type or class that inherits from tuple and whose indexable elements are also accessible using named attributes. The type or class may have other features as well.

Several built-in types are named tuples, including the values returned by [`time.localtime()`](https://docs.python.org/3/library/time.html#time.localtime) and [`os.stat()`](https://docs.python.org/3/library/os.html#os.stat). Another example is [`sys.float_info`](https://docs.python.org/3/library/sys.html#sys.float_info):&gt;&gt;&gt;

```text
>>> sys.float_info[1]                   # indexed access
1024
>>> sys.float_info.max_exp              # named field access
1024
>>> isinstance(sys.float_info, tuple)   # kind of tuple
True
```

Some named tuples are built-in types \(such as the above examples\). Alternatively, a named tuple can be created from a regular class definition that inherits from [`tuple`](https://docs.python.org/3/library/stdtypes.html#tuple) and that defines named fields. Such a class can be written by hand or it can be created with the factory function [`collections.namedtuple()`](https://docs.python.org/3/library/collections.html#collections.namedtuple). The latter technique also adds some extra methods that may not be found in hand-written or built-in named tuples.namespace

The place where a variable is stored. Namespaces are implemented as dictionaries. There are the local, global and built-in namespaces as well as nested namespaces in objects \(in methods\). Namespaces support modularity by preventing naming conflicts. For instance, the functions [`builtins.open`](https://docs.python.org/3/library/functions.html#open) and [`os.open()`](https://docs.python.org/3/library/os.html#os.open) are distinguished by their namespaces. Namespaces also aid readability and maintainability by making it clear which module implements a function. For instance, writing [`random.seed()`](https://docs.python.org/3/library/random.html#random.seed) or [`itertools.islice()`](https://docs.python.org/3/library/itertools.html#itertools.islice) makes it clear that those functions are implemented by the [`random`](https://docs.python.org/3/library/random.html#module-random) and [`itertools`](https://docs.python.org/3/library/itertools.html#module-itertools) modules, respectively.namespace package

A [**PEP 420**](https://www.python.org/dev/peps/pep-0420) [package](https://docs.python.org/3/glossary.html#term-package) which serves only as a container for subpackages. Namespace packages may have no physical representation, and specifically are not like a [regular package](https://docs.python.org/3/glossary.html#term-regular-package) because they have no `__init__.py` file.

See also [module](https://docs.python.org/3/glossary.html#term-module).nested scope

The ability to refer to a variable in an enclosing definition. For instance, a function defined inside another function can refer to variables in the outer function. Note that nested scopes by default work only for reference and not for assignment. Local variables both read and write in the innermost scope. Likewise, global variables read and write to the global namespace. The [`nonlocal`](https://docs.python.org/3/reference/simple_stmts.html#nonlocal) allows writing to outer scopes.new-style class

Old name for the flavor of classes now used for all class objects. In earlier Python versions, only new-style classes could use Python’s newer, versatile features like [`__slots__`](https://docs.python.org/3/reference/datamodel.html#object.__slots__), descriptors, properties, [`__getattribute__()`](https://docs.python.org/3/reference/datamodel.html#object.__getattribute__), class methods, and static methods.object

Any data with state \(attributes or value\) and defined behavior \(methods\). Also the ultimate base class of any [new-style class](https://docs.python.org/3/glossary.html#term-new-style-class).package

A Python [module](https://docs.python.org/3/glossary.html#term-module) which can contain submodules or recursively, subpackages. Technically, a package is a Python module with an `__path__` attribute.

See also [regular package](https://docs.python.org/3/glossary.html#term-regular-package) and [namespace package](https://docs.python.org/3/glossary.html#term-namespace-package).parameter

A named entity in a [function](https://docs.python.org/3/glossary.html#term-function) \(or method\) definition that specifies an [argument](https://docs.python.org/3/glossary.html#term-argument) \(or in some cases, arguments\) that the function can accept. There are five kinds of parameter:

- _positional-or-keyword_: specifies an argument that can be passed either [positionally](https://docs.python.org/3/glossary.html#term-argument) or as a [keyword argument](https://docs.python.org/3/glossary.html#term-argument). This is the default kind of parameter, for example _foo_ and _bar_ in the following:

  ```text
  def func(foo, bar=None): ...
  ```

- _positional-only_: specifies an argument that can be supplied only by position. Positional-only parameters can be defined by including a `/` character in the parameter list of the function definition after them, for example _posonly1_ and _posonly2_ in the following:

  ```text
  def func(posonly1, posonly2, /, positional_or_keyword): ...
  ```

- _keyword-only_: specifies an argument that can be supplied only by keyword. Keyword-only parameters can be defined by including a single var-positional parameter or bare `*` in the parameter list of the function definition before them, for example _kw_only1_ and _kw_only2_ in the following:

  ```text
  def func(arg, *, kw_only1, kw_only2): ...
  ```

- _var-positional_: specifies that an arbitrary sequence of positional arguments can be provided \(in addition to any positional arguments already accepted by other parameters\). Such a parameter can be defined by prepending the parameter name with `*`, for example _args_ in the following:

  ```text
  def func(*args, **kwargs): ...
  ```

- _var-keyword_: specifies that arbitrarily many keyword arguments can be provided \(in addition to any keyword arguments already accepted by other parameters\). Such a parameter can be defined by prepending the parameter name with `**`, for example _kwargs_ in the example above.

Parameters can specify both optional and required arguments, as well as default values for some optional arguments.

See also the [argument](https://docs.python.org/3/glossary.html#term-argument) glossary entry, the FAQ question on [the difference between arguments and parameters](https://docs.python.org/3/faq/programming.html#faq-argument-vs-parameter), the [`inspect.Parameter`](https://docs.python.org/3/library/inspect.html#inspect.Parameter) class, the [Function definitions](https://docs.python.org/3/reference/compound_stmts.html#function) section, and [**PEP 362**](https://www.python.org/dev/peps/pep-0362).path entry

A single location on the [import path](https://docs.python.org/3/glossary.html#term-import-path) which the [path based finder](https://docs.python.org/3/glossary.html#term-path-based-finder) consults to find modules for importing.path entry finder

A [finder](https://docs.python.org/3/glossary.html#term-finder) returned by a callable on [`sys.path_hooks`](https://docs.python.org/3/library/sys.html#sys.path_hooks) \(i.e. a [path entry hook](https://docs.python.org/3/glossary.html#term-path-entry-hook)\) which knows how to locate modules given a [path entry](https://docs.python.org/3/glossary.html#term-path-entry).

See [`importlib.abc.PathEntryFinder`](https://docs.python.org/3/library/importlib.html#importlib.abc.PathEntryFinder) for the methods that path entry finders implement.path entry hook

A callable on the `sys.path_hook` list which returns a [path entry finder](https://docs.python.org/3/glossary.html#term-path-entry-finder) if it knows how to find modules on a specific [path entry](https://docs.python.org/3/glossary.html#term-path-entry).path based finder

One of the default [meta path finders](https://docs.python.org/3/glossary.html#term-meta-path-finder) which searches an [import path](https://docs.python.org/3/glossary.html#term-import-path) for modules.path-like object

An object representing a file system path. A path-like object is either a [`str`](https://docs.python.org/3/library/stdtypes.html#str) or [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes) object representing a path, or an object implementing the [`os.PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) protocol. An object that supports the [`os.PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) protocol can be converted to a [`str`](https://docs.python.org/3/library/stdtypes.html#str) or [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes) file system path by calling the [`os.fspath()`](https://docs.python.org/3/library/os.html#os.fspath) function; [`os.fsdecode()`](https://docs.python.org/3/library/os.html#os.fsdecode) and [`os.fsencode()`](https://docs.python.org/3/library/os.html#os.fsencode) can be used to guarantee a [`str`](https://docs.python.org/3/library/stdtypes.html#str) or [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes) result instead, respectively. Introduced by [**PEP 519**](https://www.python.org/dev/peps/pep-0519).PEP

Python Enhancement Proposal. A PEP is a design document providing information to the Python community, or describing a new feature for Python or its processes or environment. PEPs should provide a concise technical specification and a rationale for proposed features.

PEPs are intended to be the primary mechanisms for proposing major new features, for collecting community input on an issue, and for documenting the design decisions that have gone into Python. The PEP author is responsible for building consensus within the community and documenting dissenting opinions.

See [**PEP 1**](https://www.python.org/dev/peps/pep-0001).portion

A set of files in a single directory \(possibly stored in a zip file\) that contribute to a namespace package, as defined in [**PEP 420**](https://www.python.org/dev/peps/pep-0420).positional argument

See [argument](https://docs.python.org/3/glossary.html#term-argument).provisional API

A provisional API is one which has been deliberately excluded from the standard library’s backwards compatibility guarantees. While major changes to such interfaces are not expected, as long as they are marked provisional, backwards incompatible changes \(up to and including removal of the interface\) may occur if deemed necessary by core developers. Such changes will not be made gratuitously – they will occur only if serious fundamental flaws are uncovered that were missed prior to the inclusion of the API.

Even for provisional APIs, backwards incompatible changes are seen as a “solution of last resort” - every attempt will still be made to find a backwards compatible resolution to any identified problems.

This process allows the standard library to continue to evolve over time, without locking in problematic design errors for extended periods of time. See [**PEP 411**](https://www.python.org/dev/peps/pep-0411) for more details.provisional package

See [provisional API](https://docs.python.org/3/glossary.html#term-provisional-api).Python 3000

Nickname for the Python 3.x release line \(coined long ago when the release of version 3 was something in the distant future.\) This is also abbreviated “Py3k”.Pythonic

An idea or piece of code which closely follows the most common idioms of the Python language, rather than implementing code using concepts common to other languages. For example, a common idiom in Python is to loop over all elements of an iterable using a [`for`](https://docs.python.org/3/reference/compound_stmts.html#for) statement. Many other languages don’t have this type of construct, so people unfamiliar with Python sometimes use a numerical counter instead:

```text
for i in range(len(food)):
    print(food[i])
```

As opposed to the cleaner, Pythonic method:

```text
for piece in food:
    print(piece)
```

qualified name

A dotted name showing the “path” from a module’s global scope to a class, function or method defined in that module, as defined in [**PEP 3155**](https://www.python.org/dev/peps/pep-3155). For top-level functions and classes, the qualified name is the same as the object’s name:&gt;&gt;&gt;

```text
>>> class C:
...     class D:
...         def meth(self):
...             pass
...
>>> C.__qualname__
'C'
>>> C.D.__qualname__
'C.D'
>>> C.D.meth.__qualname__
'C.D.meth'
```

When used to refer to modules, the _fully qualified name_ means the entire dotted path to the module, including any parent packages, e.g. `email.mime.text`:&gt;&gt;&gt;

```text
>>> import email.mime.text
>>> email.mime.text.__name__
'email.mime.text'
```

reference count

The number of references to an object. When the reference count of an object drops to zero, it is deallocated. Reference counting is generally not visible to Python code, but it is a key element of the [CPython](https://docs.python.org/3/glossary.html#term-cpython) implementation. The [`sys`](https://docs.python.org/3/library/sys.html#module-sys) module defines a [`getrefcount()`](https://docs.python.org/3/library/sys.html#sys.getrefcount) function that programmers can call to return the reference count for a particular object.regular package

A traditional [package](https://docs.python.org/3/glossary.html#term-package), such as a directory containing an `__init__.py` file.

See also [namespace package](https://docs.python.org/3/glossary.html#term-namespace-package).\_\_slots\_\_

A declaration inside a class that saves memory by pre-declaring space for instance attributes and eliminating instance dictionaries. Though popular, the technique is somewhat tricky to get right and is best reserved for rare cases where there are large numbers of instances in a memory-critical application.sequence

An [iterable](https://docs.python.org/3/glossary.html#term-iterable) which supports efficient element access using integer indices via the [`__getitem__()`](https://docs.python.org/3/reference/datamodel.html#object.__getitem__) special method and defines a [`__len__()`](https://docs.python.org/3/reference/datamodel.html#object.__len__) method that returns the length of the sequence. Some built-in sequence types are [`list`](https://docs.python.org/3/library/stdtypes.html#list), [`str`](https://docs.python.org/3/library/stdtypes.html#str), [`tuple`](https://docs.python.org/3/library/stdtypes.html#tuple), and [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes). Note that [`dict`](https://docs.python.org/3/library/stdtypes.html#dict) also supports [`__getitem__()`](https://docs.python.org/3/reference/datamodel.html#object.__getitem__) and [`__len__()`](https://docs.python.org/3/reference/datamodel.html#object.__len__), but is considered a mapping rather than a sequence because the lookups use arbitrary [immutable](https://docs.python.org/3/glossary.html#term-immutable) keys rather than integers.

The [`collections.abc.Sequence`](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence) abstract base class defines a much richer interface that goes beyond just [`__getitem__()`](https://docs.python.org/3/reference/datamodel.html#object.__getitem__) and [`__len__()`](https://docs.python.org/3/reference/datamodel.html#object.__len__), adding `count()`, `index()`, [`__contains__()`](https://docs.python.org/3/reference/datamodel.html#object.__contains__), and [`__reversed__()`](https://docs.python.org/3/reference/datamodel.html#object.__reversed__). Types that implement this expanded interface can be registered explicitly using [`register()`](https://docs.python.org/3/library/abc.html#abc.ABCMeta.register).set comprehension

A compact way to process all or part of the elements in an iterable and return a set with the results. `results = {c for c in 'abracadabra' if c not in 'abc'}` generates the set of strings `{'r', 'd'}`. See [Displays for lists, sets and dictionaries](https://docs.python.org/3/reference/expressions.html#comprehensions).single dispatch

A form of [generic function](https://docs.python.org/3/glossary.html#term-generic-function) dispatch where the implementation is chosen based on the type of a single argument.slice

An object usually containing a portion of a [sequence](https://docs.python.org/3/glossary.html#term-sequence). A slice is created using the subscript notation, `[]` with colons between numbers when several are given, such as in `variable_name[1:3:5]`. The bracket \(subscript\) notation uses [`slice`](https://docs.python.org/3/library/functions.html#slice) objects internally.special method

A method that is called implicitly by Python to execute a certain operation on a type, such as addition. Such methods have names starting and ending with double underscores. Special methods are documented in [Special method names](https://docs.python.org/3/reference/datamodel.html#specialnames).statement

A statement is part of a suite \(a “block” of code\). A statement is either an [expression](https://docs.python.org/3/glossary.html#term-expression) or one of several constructs with a keyword, such as [`if`](https://docs.python.org/3/reference/compound_stmts.html#if), [`while`](https://docs.python.org/3/reference/compound_stmts.html#while) or [`for`](https://docs.python.org/3/reference/compound_stmts.html#for).text encoding

A codec which encodes Unicode strings to bytes.text file

A [file object](https://docs.python.org/3/glossary.html#term-file-object) able to read and write [`str`](https://docs.python.org/3/library/stdtypes.html#str) objects. Often, a text file actually accesses a byte-oriented data stream and handles the [text encoding](https://docs.python.org/3/glossary.html#term-text-encoding) automatically. Examples of text files are files opened in text mode \(`'r'` or `'w'`\), [`sys.stdin`](https://docs.python.org/3/library/sys.html#sys.stdin), [`sys.stdout`](https://docs.python.org/3/library/sys.html#sys.stdout), and instances of [`io.StringIO`](https://docs.python.org/3/library/io.html#io.StringIO).

See also [binary file](https://docs.python.org/3/glossary.html#term-binary-file) for a file object able to read and write [bytes-like objects](https://docs.python.org/3/glossary.html#term-bytes-like-object).triple-quoted string

A string which is bound by three instances of either a quotation mark \(“\) or an apostrophe \(‘\). While they don’t provide any functionality not available with single-quoted strings, they are useful for a number of reasons. They allow you to include unescaped single and double quotes within a string and they can span multiple lines without the use of the continuation character, making them especially useful when writing docstrings.type

The type of a Python object determines what kind of object it is; every object has a type. An object’s type is accessible as its [`__class__`](https://docs.python.org/3/library/stdtypes.html#instance.__class__) attribute or can be retrieved with `type(obj)`.type alias

A synonym for a type, created by assigning the type to an identifier.

Type aliases are useful for simplifying [type hints](https://docs.python.org/3/glossary.html#term-type-hint). For example:

```text
def remove_gray_shades(
        colors: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:
    pass
```

could be made more readable like this:

```text
Color = tuple[int, int, int]

def remove_gray_shades(colors: list[Color]) -> list[Color]:
    pass
```

See [`typing`](https://docs.python.org/3/library/typing.html#module-typing) and [**PEP 484**](https://www.python.org/dev/peps/pep-0484), which describe this functionality.type hint

An [annotation](https://docs.python.org/3/glossary.html#term-annotation) that specifies the expected type for a variable, a class attribute, or a function parameter or return value.

Type hints are optional and are not enforced by Python but they are useful to static type analysis tools, and aid IDEs with code completion and refactoring.

Type hints of global variables, class attributes, and functions, but not local variables, can be accessed using [`typing.get_type_hints()`](https://docs.python.org/3/library/typing.html#typing.get_type_hints).

See [`typing`](https://docs.python.org/3/library/typing.html#module-typing) and [**PEP 484**](https://www.python.org/dev/peps/pep-0484), which describe this functionality.universal newlines

A manner of interpreting text streams in which all of the following are recognized as ending a line: the Unix end-of-line convention `'\n'`, the Windows convention `'\r\n'`, and the old Macintosh convention `'\r'`. See [**PEP 278**](https://www.python.org/dev/peps/pep-0278) and [**PEP 3116**](https://www.python.org/dev/peps/pep-3116), as well as [`bytes.splitlines()`](https://docs.python.org/3/library/stdtypes.html#bytes.splitlines) for an additional use.variable annotation

An [annotation](https://docs.python.org/3/glossary.html#term-annotation) of a variable or a class attribute.

When annotating a variable or a class attribute, assignment is optional:

```text
class C:
    field: 'annotation'
```

Variable annotations are usually used for [type hints](https://docs.python.org/3/glossary.html#term-type-hint): for example this variable is expected to take [`int`](https://docs.python.org/3/library/functions.html#int) values:

```text
count: int = 0
```

Variable annotation syntax is explained in section [Annotated assignment statements](https://docs.python.org/3/reference/simple_stmts.html#annassign).

See [function annotation](https://docs.python.org/3/glossary.html#term-function-annotation), [**PEP 484**](https://www.python.org/dev/peps/pep-0484) and [**PEP 526**](https://www.python.org/dev/peps/pep-0526), which describe this functionality.virtual environment

A cooperatively isolated runtime environment that allows Python users and applications to install and upgrade Python distribution packages without interfering with the behaviour of other Python applications running on the same system.

See also [`venv`](https://docs.python.org/3/library/venv.html#module-venv).virtual machine

A computer defined entirely in software. Python’s virtual machine executes the [bytecode](https://docs.python.org/3/glossary.html#term-bytecode) emitted by the bytecode compiler.Zen of Python

Listing of Python design principles and philosophies that are helpful in understanding and using the language. The listing can be found by typing “`import this`” at the interactive prompt.

**Binary Distribution**

A specific kind of [Built Distribution](https://packaging.python.org/glossary/#term-Built-Distribution) that contains compiled extensions.Built Distribution

A [Distribution](https://packaging.python.org/glossary/#term-Distribution-Package) format containing files and metadata that only need to be moved to the correct location on the target system, to be installed. [Wheel](https://packaging.python.org/glossary/#term-Wheel) is such a format, whereas distutil’s [Source Distribution](https://packaging.python.org/glossary/#term-Source-Distribution-or-sdist) is not, in that it requires a build step before it can be installed. This format does not imply that Python files have to be precompiled \([Wheel](https://packaging.python.org/glossary/#term-Wheel) intentionally does not include compiled Python files\).Distribution Package

A versioned archive file that contains Python [packages](https://packaging.python.org/glossary/#term-Import-Package), [modules](https://packaging.python.org/glossary/#term-Module), and other resource files that are used to distribute a [Release](https://packaging.python.org/glossary/#term-Release). The archive file is what an end-user will download from the internet and install.

A distribution package is more commonly referred to with the single words “package” or “distribution”, but this guide may use the expanded term when more clarity is needed to prevent confusion with an [Import Package](https://packaging.python.org/glossary/#term-Import-Package) \(which is also commonly called a “package”\) or another kind of distribution \(e.g. a Linux distribution or the Python language distribution\), which are often referred to with the single term “distribution”.Egg

A [Built Distribution](https://packaging.python.org/glossary/#term-Built-Distribution) format introduced by [setuptools](https://packaging.python.org/key_projects/#setuptools), which is being replaced by [Wheel](https://packaging.python.org/glossary/#term-Wheel). For details, see \` [The Internal Structure of Python Eggs](https://setuptools.readthedocs.io/en/latest/deprecated/python_eggs.html) and [Python Eggs](http://peak.telecommunity.com/DevCenter/PythonEggs)Extension Module

A [Module](https://packaging.python.org/glossary/#term-Module) written in the low-level language of the Python implementation: C/C++ for Python, Java for Jython. Typically contained in a single dynamically loadable pre-compiled file, e.g. a shared object \(.so\) file for Python extensions on Unix, a DLL \(given the .pyd extension\) for Python extensions on Windows, or a Java class file for Jython extensions.Known Good Set \(KGS\)

A set of distributions at specified versions which are compatible with each other. Typically a test suite will be run which passes all tests before a specific set of packages is declared a known good set. This term is commonly used by frameworks and toolkits which are comprised of multiple individual distributions.Import Package

A **Python module** which can contain other modules or recursively, other packages.

**An import package** is more commonly referred to with the single word “package”, but this guide will use the expanded term when more clarity is needed to prevent confusion with a [Distribution Package](https://packaging.python.org/glossary/#term-Distribution-Package) which is also commonly called a “package”.Module

The basic unit of code reusability in Python, existing in one of two types: [Pure Module](https://packaging.python.org/glossary/#term-Pure-Module), or [Extension Module](https://packaging.python.org/glossary/#term-Extension-Module).Package Index

A repository of distributions with a web interface to automate [package](https://packaging.python.org/glossary/#term-Distribution-Package) discovery and consumption.Per Project Index

A private or other non-canonical [Package Index](https://packaging.python.org/glossary/#term-Package-Index) indicated by a specific [Project](https://packaging.python.org/glossary/#term-Project) as the index preferred or required to resolve dependencies of that project.Project

A library, framework, script, plugin, application, or collection of data or other resources, or some combination thereof that is intended to be packaged into a [Distribution](https://packaging.python.org/glossary/#term-Distribution-Package).

Since most projects create [Distributions](https://packaging.python.org/glossary/#term-Distribution-Package) using either [**PEP 518**](https://www.python.org/dev/peps/pep-0518) `build-system`, [distutils](https://packaging.python.org/key_projects/#distutils) or [setuptools](https://packaging.python.org/key_projects/#setuptools), another practical way to define projects currently is something that contains a [pyproject.toml](https://packaging.python.org/glossary/#term-pyproject.toml), [setup.py](https://packaging.python.org/glossary/#term-setup.py), or [setup.cfg](https://packaging.python.org/glossary/#term-setup.cfg) file at the root of the project source directory.

Python projects must have unique names, which are registered on [PyPI](https://packaging.python.org/glossary/#term-Python-Package-Index-PyPI). Each project will then contain one or more [Releases](https://packaging.python.org/glossary/#term-Release), and each release may comprise one or more [distributions](https://packaging.python.org/glossary/#term-Distribution-Package).

Note that there is a strong convention to name a project after the name of the package that is imported to run that project. However, this doesn’t have to hold true. It’s possible to install a distribution from the project ‘foo’ and have it provide a package importable only as ‘bar’.Pure Module

A [Module](https://packaging.python.org/glossary/#term-Module) written in Python and contained in a single `.py` file \(and possibly associated `.pyc` and/or `.pyo` files\).Python Packaging Authority \(PyPA\)

PyPA is a working group that maintains many of the relevant projects in Python packaging. They maintain a site at [https://www.pypa.io](https://www.pypa.io/), host projects on [GitHub](https://github.com/pypa) and [Bitbucket](https://bitbucket.org/pypa), and discuss issues on the [distutils-sig mailing list](https://mail.python.org/mailman3/lists/distutils-sig.python.org/) and [the Python Discourse forum](https://discuss.python.org/c/packaging).Python Package Index \(PyPI\)

[PyPI](https://pypi.org/) is the default [Package Index](https://packaging.python.org/glossary/#term-Package-Index) for the Python community. It is open to all Python developers to consume and distribute their distributions.pypi.org

[pypi.org](https://pypi.org/) is the domain name for the [Python Package Index \(PyPI\)](https://packaging.python.org/glossary/#term-Python-Package-Index-PyPI). It replaced the legacy index domain name, `pypi.python.org`, in 2017. It is powered by [Warehouse](https://packaging.python.org/key_projects/#warehouse).pyproject.toml

The tool-agnostic [Project](https://packaging.python.org/glossary/#term-Project) specification file. Defined in [**PEP 518**](https://www.python.org/dev/peps/pep-0518).Release

A snapshot of a [Project](https://packaging.python.org/glossary/#term-Project) at a particular point in time, denoted by a version identifier.

Making a release may entail the publishing of multiple [Distributions](https://packaging.python.org/glossary/#term-Distribution-Package). For example, if version 1.0 of a project was released, it could be available in both a source distribution format and a Windows installer distribution format.Requirement

A specification for a [package](https://packaging.python.org/glossary/#term-Distribution-Package) to be installed. [pip](https://packaging.python.org/key_projects/#pip), the [PYPA](https://packaging.python.org/glossary/#term-Python-Packaging-Authority-PyPA) recommended installer, allows various forms of specification that can all be considered a “requirement”. For more information, see the [pip install](https://pip.pypa.io/en/latest/cli/pip_install/#pip-install) reference.Requirement Specifier

A format used by [pip](https://packaging.python.org/key_projects/#pip) to install packages from a [Package Index](https://packaging.python.org/glossary/#term-Package-Index). For an EBNF diagram of the format, see the [pkg_resources.Requirement](https://setuptools.readthedocs.io/en/latest/pkg_resources.html#requirement-objects) entry in the [setuptools](https://packaging.python.org/key_projects/#setuptools) docs. For example, “foo&gt;=1.3” is a requirement specifier, where “foo” is the project name, and the “&gt;=1.3” portion is the [Version Specifier](https://packaging.python.org/glossary/#term-Version-Specifier)Requirements File

A file containing a list of [Requirements](https://packaging.python.org/glossary/#term-Requirement) that can be installed using [pip](https://packaging.python.org/key_projects/#pip). For more information, see the [pip](https://packaging.python.org/key_projects/#pip) docs on [Requirements Files](https://pip.pypa.io/en/latest/user_guide/#requirements-files).setup.pysetup.cfg

The project specification files for [distutils](https://packaging.python.org/key_projects/#distutils) and [setuptools](https://packaging.python.org/key_projects/#setuptools). See also [pyproject.toml](https://packaging.python.org/glossary/#term-pyproject.toml).Source Archive

An archive containing the raw source code for a [Release](https://packaging.python.org/glossary/#term-Release), prior to creation of a [Source Distribution](https://packaging.python.org/glossary/#term-Source-Distribution-or-sdist) or [Built Distribution](https://packaging.python.org/glossary/#term-Built-Distribution).Source Distribution \(or “sdist”\)

A [distribution](https://packaging.python.org/glossary/#term-Distribution-Package) format \(usually generated using `python setup.py sdist`\) that provides metadata and the essential source files needed for installing by a tool like [pip](https://packaging.python.org/key_projects/#pip), or for generating a [Built Distribution](https://packaging.python.org/glossary/#term-Built-Distribution).System Package

A package provided in a format native to the operating system, e.g. an rpm or dpkg file.Version Specifier

The version component of a [Requirement Specifier](https://packaging.python.org/glossary/#term-Requirement-Specifier). For example, the “&gt;=1.3” portion of “foo&gt;=1.3”. [**PEP 440**](https://www.python.org/dev/peps/pep-0440) contains a [**full specification**](https://www.python.org/dev/peps/pep-0440#version-specifiers) of the specifiers that Python packaging currently supports. Support for PEP440 was implemented in [setuptools](https://packaging.python.org/key_projects/#setuptools) v8.0 and [pip](https://packaging.python.org/key_projects/#pip) v6.0.Virtual Environment[¶](https://packaging.python.org/glossary/#term-Virtual-Environment)

An isolated Python environment that allows packages to be installed for use by a particular application, rather than being installed system wide. For more information, see the section on [Creating Virtual Environments](https://packaging.python.org/tutorials/installing-packages/#creating-and-using-virtual-environments).Wheel

A [Built Distribution](https://packaging.python.org/glossary/#term-Built-Distribution) format introduced by [**PEP 427**](https://www.python.org/dev/peps/pep-0427), which is intended to replace the [Egg](https://packaging.python.org/glossary/#term-Egg) format. Wheel is currently supported by [pip](https://packaging.python.org/key_projects/#pip).Working Set

A collection of [distributions](https://packaging.python.org/glossary/#term-Distribution-Package) available for importing. These are the distributions that are on the [`sys.path`](https://docs.python.org/2/library/sys.html#sys.path) variable. At most, one [Distribution](https://packaging.python.org/glossary/#term-Distribution-Package) for a project is possible in a working set.
