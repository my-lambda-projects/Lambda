### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](inputoutput.html '7. Input and Output') |
- [previous](datastructures.html '5. Data Structures') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-

<span id="tut-modules"></span>

# <span class="section-number">6. </span>Modules<a href="#modules" class="headerlink" title="Permalink to this headline">¶</a>

If you quit from the Python interpreter and enter it again, the definitions you have made (functions and variables) are lost. Therefore, if you want to write a somewhat longer program, you are better off using a text editor to prepare the input for the interpreter and running it with that file as input instead. This is known as creating a _script_. As your program gets longer, you may want to split it into several files for easier maintenance. You may also want to use a handy function that you’ve written in several programs without copying its definition into each program.

To support this, Python has a way to put definitions in a file and use them in a script or in an interactive instance of the interpreter. Such a file is called a _module_; definitions from a module can be _imported_ into other modules or into the _main_ module (the collection of variables that you have access to in a script executed at the top level and in calculator mode).

A module is a file containing Python definitions and statements. The file name is the module name with the suffix `.py` appended. Within a module, the module’s name (as a string) is available as the value of the global variable `__name__`. For instance, use your favorite text editor to create a file called `fibo.py` in the current directory with the following contents:

    # Fibonacci numbers module

    def fib(n):    # write Fibonacci series up to n
        a, b = 0, 1
        while a < n:
            print(a, end=' ')
            a, b = b, a+b
        print()

    def fib2(n):   # return Fibonacci series up to n
        result = []
        a, b = 0, 1
        while a < n:
            result.append(a)
            a, b = b, a+b
        return result

Now enter the Python interpreter and import this module with the following command:

    >>> import fibo

This does not enter the names of the functions defined in `fibo` directly in the current symbol table; it only enters the module name `fibo` there. Using the module name you can access the functions:

    >>> fibo.fib(1000)
    0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
    >>> fibo.fib2(100)
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
    >>> fibo.__name__
    'fibo'

If you intend to use a function often you can assign it to a local name:

    >>> fib = fibo.fib
    >>> fib(500)
    0 1 1 2 3 5 8 13 21 34 55 89 144 233 377

<span id="tut-moremodules"></span>

## <span class="section-number">6.1. </span>More on Modules<a href="#more-on-modules" class="headerlink" title="Permalink to this headline">¶</a>

A module can contain executable statements as well as function definitions. These statements are intended to initialize the module. They are executed only the _first_ time the module name is encountered in an import statement. <a href="#id2" id="id1" class="footnote-reference brackets">1</a> (They are also run if the file is executed as a script.)

Each module has its own private symbol table, which is used as the global symbol table by all functions defined in the module. Thus, the author of a module can use global variables in the module without worrying about accidental clashes with a user’s global variables. On the other hand, if you know what you are doing you can touch a module’s global variables with the same notation used to refer to its functions, `modname.itemname`.

Modules can import other modules. It is customary but not required to place all <a href="https://docs.python.org/3/reference/simple_stmts.html#import" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">import</code></a> statements at the beginning of a module (or script, for that matter). The imported module names are placed in the importing module’s global symbol table.

There is a variant of the <a href="https://docs.python.org/3/reference/simple_stmts.html#import" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">import</code></a> statement that imports names from a module directly into the importing module’s symbol table. For example:

    >>> from fibo import fib, fib2
    >>> fib(500)
    0 1 1 2 3 5 8 13 21 34 55 89 144 233 377

This does not introduce the module name from which the imports are taken in the local symbol table (so in the example, `fibo` is not defined).

There is even a variant to import all names that a module defines:

    >>> from fibo import *
    >>> fib(500)
    0 1 1 2 3 5 8 13 21 34 55 89 144 233 377

This imports all names except those beginning with an underscore (`_`). In most cases Python programmers do not use this facility since it introduces an unknown set of names into the interpreter, possibly hiding some things you have already defined.

Note that in general the practice of importing `*` from a module or package is frowned upon, since it often causes poorly readable code. However, it is okay to use it to save typing in interactive sessions.

If the module name is followed by `as`, then the name following `as` is bound directly to the imported module.

    >>> import fibo as fib
    >>> fib.fib(500)
    0 1 1 2 3 5 8 13 21 34 55 89 144 233 377

This is effectively importing the module in the same way that `import fibo` will do, with the only difference of it being available as `fib`.

It can also be used when utilising <a href="https://docs.python.org/3/reference/simple_stmts.html#from" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">from</code></a> with similar effects:

    >>> from fibo import fib as fibonacci
    >>> fibonacci(500)
    0 1 1 2 3 5 8 13 21 34 55 89 144 233 377

Note

For efficiency reasons, each module is only imported once per interpreter session. Therefore, if you change your modules, you must restart the interpreter – or, if it’s just one module you want to test interactively, use <a href="https://docs.python.org/3/library/importlib.html#importlib.reload" class="reference internal" title="importlib.reload"><code class="sourceCode python">importlib.<span class="bu">reload</span>()</code></a>, e.g. `import importlib; importlib.reload(modulename)`.

<span id="tut-modulesasscripts"></span>

### <span class="section-number">6.1.1. </span>Executing modules as scripts<a href="#executing-modules-as-scripts" class="headerlink" title="Permalink to this headline">¶</a>

When you run a Python module with

    python fibo.py <arguments>

the code in the module will be executed, just as if you imported it, but with the `__name__` set to `"__main__"`. That means that by adding this code at the end of your module:

    if __name__ == "__main__":
        import sys
        fib(int(sys.argv[1]))

you can make the file usable as a script as well as an importable module, because the code that parses the command line only runs if the module is executed as the “main” file:

    $ python fibo.py 50
    0 1 1 2 3 5 8 13 21 34

If the module is imported, the code is not run:

    >>> import fibo
    >>>

This is often used either to provide a convenient user interface to a module, or for testing purposes (running the module as a script executes a test suite).

<span id="tut-searchpath"></span>

### <span class="section-number">6.1.2. </span>The Module Search Path<a href="#the-module-search-path" class="headerlink" title="Permalink to this headline">¶</a>

When a module named `spam` is imported, the interpreter first searches for a built-in module with that name. If not found, it then searches for a file named `spam.py` in a list of directories given by the variable <a href="https://docs.python.org/3/library/sys.html#sys.path" class="reference internal" title="sys.path"><code class="sourceCode python">sys.path</code></a>. <a href="https://docs.python.org/3/library/sys.html#sys.path" class="reference internal" title="sys.path"><code class="sourceCode python">sys.path</code></a> is initialized from these locations:

- The directory containing the input script (or the current directory when no file is specified).

- <span id="index-1" class="target"></span><a href="https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH" class="reference internal"><code class="xref std std-envvar docutils literal notranslate">PYTHONPATH</code></a> (a list of directory names, with the same syntax as the shell variable <span id="index-2" class="target"></span>`PATH`).

- The installation-dependent default.

Note

On file systems which support symlinks, the directory containing the input script is calculated after the symlink is followed. In other words the directory containing the symlink is **not** added to the module search path.

After initialization, Python programs can modify <a href="https://docs.python.org/3/library/sys.html#sys.path" class="reference internal" title="sys.path"><code class="sourceCode python">sys.path</code></a>. The directory containing the script being run is placed at the beginning of the search path, ahead of the standard library path. This means that scripts in that directory will be loaded instead of modules of the same name in the library directory. This is an error unless the replacement is intended. See section <a href="#tut-standardmodules" class="reference internal"><span class="std std-ref">Standard Modules</span></a> for more information.

### <span class="section-number">6.1.3. </span>“Compiled” Python files<a href="#compiled-python-files" class="headerlink" title="Permalink to this headline">¶</a>

To speed up loading modules, Python caches the compiled version of each module in the `__pycache__` directory under the name `module.version.pyc`, where the version encodes the format of the compiled file; it generally contains the Python version number. For example, in CPython release 3.3 the compiled version of spam.py would be cached as `__pycache__/spam.cpython-33.pyc`. This naming convention allows compiled modules from different releases and different versions of Python to coexist.

Python checks the modification date of the source against the compiled version to see if it’s out of date and needs to be recompiled. This is a completely automatic process. Also, the compiled modules are platform-independent, so the same library can be shared among systems with different architectures.

Python does not check the cache in two circumstances. First, it always recompiles and does not store the result for the module that’s loaded directly from the command line. Second, it does not check the cache if there is no source module. To support a non-source (compiled only) distribution, the compiled module must be in the source directory, and there must not be a source module.

Some tips for experts:

- You can use the <a href="https://docs.python.org/3/using/cmdline.html#cmdoption-o" class="reference internal"><code class="xref std std-option docutils literal notranslate">-O</code></a> or <a href="https://docs.python.org/3/using/cmdline.html#cmdoption-oo" class="reference internal"><code class="xref std std-option docutils literal notranslate">-OO</code></a> switches on the Python command to reduce the size of a compiled module. The `-O` switch removes assert statements, the `-OO` switch removes both assert statements and \_\_doc\_\_ strings. Since some programs may rely on having these available, you should only use this option if you know what you’re doing. “Optimized” modules have an `opt-` tag and are usually smaller. Future releases may change the effects of optimization.

- A program doesn’t run any faster when it is read from a `.pyc` file than when it is read from a `.py` file; the only thing that’s faster about `.pyc` files is the speed with which they are loaded.

- The module <a href="https://docs.python.org/3/library/compileall.html#module-compileall" class="reference internal" title="compileall: Tools for byte-compiling all Python source files in a directory tree."><code class="sourceCode python">compileall</code></a> can create .pyc files for all modules in a directory.

- There is more detail on this process, including a flow chart of the decisions, in <span id="index-3" class="target"></span><a href="https://www.python.org/dev/peps/pep-3147" class="pep reference external"><strong>PEP 3147</strong></a>.

<span id="tut-standardmodules"></span>

## <span class="section-number">6.2. </span>Standard Modules<a href="#standard-modules" class="headerlink" title="Permalink to this headline">¶</a>

Python comes with a library of standard modules, described in a separate document, the Python Library Reference (“Library Reference” hereafter). Some modules are built into the interpreter; these provide access to operations that are not part of the core of the language but are nevertheless built in, either for efficiency or to provide access to operating system primitives such as system calls. The set of such modules is a configuration option which also depends on the underlying platform. For example, the <a href="https://docs.python.org/3/library/winreg.html#module-winreg" class="reference internal" title="winreg: Routines and objects for manipulating the Windows registry. (Windows)"><code class="sourceCode python">winreg</code></a> module is only provided on Windows systems. One particular module deserves some attention: <a href="https://docs.python.org/3/library/sys.html#module-sys" class="reference internal" title="sys: Access system-specific parameters and functions."><code class="sourceCode python">sys</code></a>, which is built into every Python interpreter. The variables `sys.ps1` and `sys.ps2` define the strings used as primary and secondary prompts:

    >>> import sys
    >>> sys.ps1
    '>>> '
    >>> sys.ps2
    '... '
    >>> sys.ps1 = 'C> '
    C> print('Yuck!')
    Yuck!
    C>

These two variables are only defined if the interpreter is in interactive mode.

The variable `sys.path` is a list of strings that determines the interpreter’s search path for modules. It is initialized to a default path taken from the environment variable <span id="index-5" class="target"></span><a href="https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH" class="reference internal"><code class="xref std std-envvar docutils literal notranslate">PYTHONPATH</code></a>, or from a built-in default if <span id="index-6" class="target"></span><a href="https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH" class="reference internal"><code class="xref std std-envvar docutils literal notranslate">PYTHONPATH</code></a> is not set. You can modify it using standard list operations:

    >>> import sys
    >>> sys.path.append('/ufs/guido/lib/python')

<span id="tut-dir"></span>

## <span class="section-number">6.3. </span>The <a href="https://docs.python.org/3/library/functions.html#dir" class="reference internal" title="dir"><code class="sourceCode python"><span class="bu">dir</span>()</code></a> Function<a href="#the-dir-function" class="headerlink" title="Permalink to this headline">¶</a>

The built-in function <a href="https://docs.python.org/3/library/functions.html#dir" class="reference internal" title="dir"><code class="sourceCode python"><span class="bu">dir</span>()</code></a> is used to find out which names a module defines. It returns a sorted list of strings:

    >>> import fibo, sys
    >>> dir(fibo)
    ['__name__', 'fib', 'fib2']
    >>> dir(sys)
    ['__breakpointhook__', '__displayhook__', '__doc__', '__excepthook__',
     '__interactivehook__', '__loader__', '__name__', '__package__', '__spec__',
     '__stderr__', '__stdin__', '__stdout__', '__unraisablehook__',
     '_clear_type_cache', '_current_frames', '_debugmallocstats', '_framework',
     '_getframe', '_git', '_home', '_xoptions', 'abiflags', 'addaudithook',
     'api_version', 'argv', 'audit', 'base_exec_prefix', 'base_prefix',
     'breakpointhook', 'builtin_module_names', 'byteorder', 'call_tracing',
     'callstats', 'copyright', 'displayhook', 'dont_write_bytecode', 'exc_info',
     'excepthook', 'exec_prefix', 'executable', 'exit', 'flags', 'float_info',
     'float_repr_style', 'get_asyncgen_hooks', 'get_coroutine_origin_tracking_depth',
     'getallocatedblocks', 'getdefaultencoding', 'getdlopenflags',
     'getfilesystemencodeerrors', 'getfilesystemencoding', 'getprofile',
     'getrecursionlimit', 'getrefcount', 'getsizeof', 'getswitchinterval',
     'gettrace', 'hash_info', 'hexversion', 'implementation', 'int_info',
     'intern', 'is_finalizing', 'last_traceback', 'last_type', 'last_value',
     'maxsize', 'maxunicode', 'meta_path', 'modules', 'path', 'path_hooks',
     'path_importer_cache', 'platform', 'prefix', 'ps1', 'ps2', 'pycache_prefix',
     'set_asyncgen_hooks', 'set_coroutine_origin_tracking_depth', 'setdlopenflags',
     'setprofile', 'setrecursionlimit', 'setswitchinterval', 'settrace', 'stderr',
     'stdin', 'stdout', 'thread_info', 'unraisablehook', 'version', 'version_info',
     'warnoptions']

Without arguments, <a href="https://docs.python.org/3/library/functions.html#dir" class="reference internal" title="dir"><code class="sourceCode python"><span class="bu">dir</span>()</code></a> lists the names you have defined currently:

    >>> a = [1, 2, 3, 4, 5]
    >>> import fibo
    >>> fib = fibo.fib
    >>> dir()
    ['__builtins__', '__name__', 'a', 'fib', 'fibo', 'sys']

Note that it lists all types of names: variables, modules, functions, etc.

<a href="https://docs.python.org/3/library/functions.html#dir" class="reference internal" title="dir"><code class="sourceCode python"><span class="bu">dir</span>()</code></a> does not list the names of built-in functions and variables. If you want a list of those, they are defined in the standard module <a href="https://docs.python.org/3/library/builtins.html#module-builtins" class="reference internal" title="builtins: The module that provides the built-in namespace."><code class="sourceCode python">builtins</code></a>:

    >>> import builtins
    >>> dir(builtins)
    ['ArithmeticError', 'AssertionError', 'AttributeError', 'BaseException',
     'BlockingIOError', 'BrokenPipeError', 'BufferError', 'BytesWarning',
     'ChildProcessError', 'ConnectionAbortedError', 'ConnectionError',
     'ConnectionRefusedError', 'ConnectionResetError', 'DeprecationWarning',
     'EOFError', 'Ellipsis', 'EnvironmentError', 'Exception', 'False',
     'FileExistsError', 'FileNotFoundError', 'FloatingPointError',
     'FutureWarning', 'GeneratorExit', 'IOError', 'ImportError',
     'ImportWarning', 'IndentationError', 'IndexError', 'InterruptedError',
     'IsADirectoryError', 'KeyError', 'KeyboardInterrupt', 'LookupError',
     'MemoryError', 'NameError', 'None', 'NotADirectoryError', 'NotImplemented',
     'NotImplementedError', 'OSError', 'OverflowError',
     'PendingDeprecationWarning', 'PermissionError', 'ProcessLookupError',
     'ReferenceError', 'ResourceWarning', 'RuntimeError', 'RuntimeWarning',
     'StopIteration', 'SyntaxError', 'SyntaxWarning', 'SystemError',
     'SystemExit', 'TabError', 'TimeoutError', 'True', 'TypeError',
     'UnboundLocalError', 'UnicodeDecodeError', 'UnicodeEncodeError',
     'UnicodeError', 'UnicodeTranslateError', 'UnicodeWarning', 'UserWarning',
     'ValueError', 'Warning', 'ZeroDivisionError', '_', '__build_class__',
     '__debug__', '__doc__', '__import__', '__name__', '__package__', 'abs',
     'all', 'any', 'ascii', 'bin', 'bool', 'bytearray', 'bytes', 'callable',
     'chr', 'classmethod', 'compile', 'complex', 'copyright', 'credits',
     'delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 'exec', 'exit',
     'filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr',
     'hash', 'help', 'hex', 'id', 'input', 'int', 'isinstance', 'issubclass',
     'iter', 'len', 'license', 'list', 'locals', 'map', 'max', 'memoryview',
     'min', 'next', 'object', 'oct', 'open', 'ord', 'pow', 'print', 'property',
     'quit', 'range', 'repr', 'reversed', 'round', 'set', 'setattr', 'slice',
     'sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple', 'type', 'vars',
     'zip']

<span id="tut-packages"></span>

## <span class="section-number">6.4. </span>Packages<a href="#packages" class="headerlink" title="Permalink to this headline">¶</a>

Packages are a way of structuring Python’s module namespace by using “dotted module names”. For example, the module name `A.B` designates a submodule named `B` in a package named `A`. Just like the use of modules saves the authors of different modules from having to worry about each other’s global variable names, the use of dotted module names saves the authors of multi-module packages like NumPy or Pillow from having to worry about each other’s module names.

Suppose you want to design a collection of modules (a “package”) for the uniform handling of sound files and sound data. There are many different sound file formats (usually recognized by their extension, for example: `.wav`, `.aiff`, `.au`), so you may need to create and maintain a growing collection of modules for the conversion between the various file formats. There are also many different operations you might want to perform on sound data (such as mixing, adding echo, applying an equalizer function, creating an artificial stereo effect), so in addition you will be writing a never-ending stream of modules to perform these operations. Here’s a possible structure for your package (expressed in terms of a hierarchical filesystem):

    sound/                          Top-level package
          __init__.py               Initialize the sound package
          formats/                  Subpackage for file format conversions
                  __init__.py
                  wavread.py
                  wavwrite.py
                  aiffread.py
                  aiffwrite.py
                  auread.py
                  auwrite.py
                  ...
          effects/                  Subpackage for sound effects
                  __init__.py
                  echo.py
                  surround.py
                  reverse.py
                  ...
          filters/                  Subpackage for filters
                  __init__.py
                  equalizer.py
                  vocoder.py
                  karaoke.py
                  ...

When importing the package, Python searches through the directories on `sys.path` looking for the package subdirectory.

The `__init__.py` files are required to make Python treat directories containing the file as packages. This prevents directories with a common name, such as `string`, unintentionally hiding valid modules that occur later on the module search path. In the simplest case, `__init__.py` can just be an empty file, but it can also execute initialization code for the package or set the `__all__` variable, described later.

Users of the package can import individual modules from the package, for example:

    import sound.effects.echo

This loads the submodule `sound.effects.echo`. It must be referenced with its full name.

    sound.effects.echo.echofilter(input, output, delay=0.7, atten=4)

An alternative way of importing the submodule is:

    from sound.effects import echo

This also loads the submodule `echo`, and makes it available without its package prefix, so it can be used as follows:

    echo.echofilter(input, output, delay=0.7, atten=4)

Yet another variation is to import the desired function or variable directly:

    from sound.effects.echo import echofilter

Again, this loads the submodule `echo`, but this makes its function `echofilter()` directly available:

    echofilter(input, output, delay=0.7, atten=4)

Note that when using `from package import item`, the item can be either a submodule (or subpackage) of the package, or some other name defined in the package, like a function, class or variable. The `import` statement first tests whether the item is defined in the package; if not, it assumes it is a module and attempts to load it. If it fails to find it, an <a href="https://docs.python.org/3/library/exceptions.html#ImportError" class="reference internal" title="ImportError"><code class="sourceCode python"><span class="pp">ImportError</span></code></a> exception is raised.

Contrarily, when using syntax like `import item.subitem.subsubitem`, each item except for the last must be a package; the last item can be a module or a package but can’t be a class or function or variable defined in the previous item.

<span id="tut-pkg-import-star"></span>

### <span class="section-number">6.4.1. </span>Importing \* From a Package<a href="#importing-from-a-package" class="headerlink" title="Permalink to this headline">¶</a>

Now what happens when the user writes `from sound.effects import *`? Ideally, one would hope that this somehow goes out to the filesystem, finds which submodules are present in the package, and imports them all. This could take a long time and importing sub-modules might have unwanted side-effects that should only happen when the sub-module is explicitly imported.

The only solution is for the package author to provide an explicit index of the package. The <a href="https://docs.python.org/3/reference/simple_stmts.html#import" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">import</code></a> statement uses the following convention: if a package’s `__init__.py` code defines a list named `__all__`, it is taken to be the list of module names that should be imported when `from package import *` is encountered. It is up to the package author to keep this list up-to-date when a new version of the package is released. Package authors may also decide not to support it, if they don’t see a use for importing \* from their package. For example, the file `sound/effects/__init__.py` could contain the following code:

    __all__ = ["echo", "surround", "reverse"]

This would mean that `from sound.effects import *` would import the three named submodules of the `sound` package.

If `__all__` is not defined, the statement `from sound.effects import *` does _not_ import all submodules from the package `sound.effects` into the current namespace; it only ensures that the package `sound.effects` has been imported (possibly running any initialization code in `__init__.py`) and then imports whatever names are defined in the package. This includes any names defined (and submodules explicitly loaded) by `__init__.py`. It also includes any submodules of the package that were explicitly loaded by previous <a href="https://docs.python.org/3/reference/simple_stmts.html#import" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">import</code></a> statements. Consider this code:

    import sound.effects.echo
    import sound.effects.surround
    from sound.effects import *

In this example, the `echo` and `surround` modules are imported in the current namespace because they are defined in the `sound.effects` package when the `from...import` statement is executed. (This also works when `__all__` is defined.)

Although certain modules are designed to export only names that follow certain patterns when you use `import *`, it is still considered bad practice in production code.

Remember, there is nothing wrong with using `from package import specific_submodule`! In fact, this is the recommended notation unless the importing module needs to use submodules with the same name from different packages.

### <span class="section-number">6.4.2. </span>Intra-package References<a href="#intra-package-references" class="headerlink" title="Permalink to this headline">¶</a>

When packages are structured into subpackages (as with the `sound` package in the example), you can use absolute imports to refer to submodules of siblings packages. For example, if the module `sound.filters.vocoder` needs to use the `echo` module in the `sound.effects` package, it can use `from sound.effects import echo`.

You can also write relative imports, with the `from module import name` form of import statement. These imports use leading dots to indicate the current and parent packages involved in the relative import. From the `surround` module for example, you might use:

    from . import echo
    from .. import formats
    from ..filters import equalizer

Note that relative imports are based on the name of the current module. Since the name of the main module is always `"__main__"`, modules intended for use as the main module of a Python application must always use absolute imports.

### <span class="section-number">6.4.3. </span>Packages in Multiple Directories<a href="#packages-in-multiple-directories" class="headerlink" title="Permalink to this headline">¶</a>

Packages support one more special attribute, <a href="https://docs.python.org/3/reference/import.html#__path__" class="reference internal" title="__path__"><code class="sourceCode python">path</code></a>. This is initialized to be a list containing the name of the directory holding the package’s `__init__.py` before the code in that file is executed. This variable can be modified; doing so affects future searches for modules and subpackages contained in the package.

While this feature is not often needed, it can be used to extend the set of modules found in a package.

Footnotes

<span class="brackets"><a href="#id1" class="fn-backref">1</a></span>  
In fact function definitions are also ‘statements’ that are ‘executed’; the execution of a module-level function definition enters the function name in the module’s global symbol table.

### [Table of Contents](https://docs.python.org/3/contents.html)

- <a href="#" class="reference internal">6. Modules</a>
  - <a href="#more-on-modules" class="reference internal">6.1. More on Modules</a>
    - <a href="#executing-modules-as-scripts" class="reference internal">6.1.1. Executing modules as scripts</a>
    - <a href="#the-module-search-path" class="reference internal">6.1.2. The Module Search Path</a>
    - <a href="#compiled-python-files" class="reference internal">6.1.3. “Compiled” Python files</a>
  - <a href="#standard-modules" class="reference internal">6.2. Standard Modules</a>
  - <a href="#the-dir-function" class="reference internal">6.3. The <code class="sourceCode python"><span class="bu">dir</span>()</code> Function</a>
  - <a href="#packages" class="reference internal">6.4. Packages</a>
    - <a href="#importing-from-a-package" class="reference internal">6.4.1. Importing \* From a Package</a>
    - <a href="#intra-package-references" class="reference internal">6.4.2. Intra-package References</a>
    - <a href="#packages-in-multiple-directories" class="reference internal">6.4.3. Packages in Multiple Directories</a>

#### Previous topic

[<span class="section-number">5. </span>Data Structures](datastructures.html 'previous chapter')

#### Next topic

[<span class="section-number">7. </span>Input and Output](inputoutput.html 'next chapter')

### This Page

- [Report a Bug](https://docs.python.org/3/bugs.html)
- [Show Source](https://github.com/python/cpython/blob/3.9/Doc/tutorial/modules.rst)

### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](inputoutput.html '7. Input and Output') |
- [previous](datastructures.html '5. Data Structures') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-
