### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](introduction.html '3. An Informal Introduction to Python') |
- [previous](appetite.html '1. Whetting Your Appetite') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-

<span id="tut-using"></span>

# <span class="section-number">2. </span>Using the Python Interpreter<a href="#using-the-python-interpreter" class="headerlink" title="Permalink to this headline">¶</a>

<span id="tut-invoking"></span>

## <span class="section-number">2.1. </span>Invoking the Interpreter<a href="#invoking-the-interpreter" class="headerlink" title="Permalink to this headline">¶</a>

The Python interpreter is usually installed as `/usr/local/bin/python3.9` on those machines where it is available; putting `/usr/local/bin` in your Unix shell’s search path makes it possible to start it by typing the command:

    python3.9

to the shell. <a href="#id2" id="id1" class="footnote-reference brackets">1</a> Since the choice of the directory where the interpreter lives is an installation option, other places are possible; check with your local Python guru or system administrator. (E.g., `/usr/local/python` is a popular alternative location.)

On Windows machines where you have installed Python from the <a href="https://docs.python.org/3/using/windows.html#windows-store" class="reference internal"><span class="std std-ref">Microsoft Store</span></a>, the `python3.9` command will be available. If you have the <a href="https://docs.python.org/3/using/windows.html#launcher" class="reference internal"><span class="std std-ref">py.exe launcher</span></a> installed, you can use the `py` command. See <a href="https://docs.python.org/3/using/windows.html#setting-envvars" class="reference internal"><span class="std std-ref">Excursus: Setting environment variables</span></a> for other ways to launch Python.

Typing an end-of-file character (Control-D on Unix, Control-Z on Windows) at the primary prompt causes the interpreter to exit with a zero exit status. If that doesn’t work, you can exit the interpreter by typing the following command: `quit()`.

The interpreter’s line-editing features include interactive editing, history substitution and code completion on systems that support the <a href="https://tiswww.case.edu/php/chet/readline/rltop.html" class="reference external">GNU Readline</a> library. Perhaps the quickest check to see whether command line editing is supported is typing Control-P to the first Python prompt you get. If it beeps, you have command line editing; see Appendix <a href="interactive.html#tut-interacting" class="reference internal"><span class="std std-ref">Interactive Input Editing and History Substitution</span></a> for an introduction to the keys. If nothing appears to happen, or if `^P` is echoed, command line editing isn’t available; you’ll only be able to use backspace to remove characters from the current line.

The interpreter operates somewhat like the Unix shell: when called with standard input connected to a tty device, it reads and executes commands interactively; when called with a file name argument or with a file as standard input, it reads and executes a _script_ from that file.

A second way of starting the interpreter is `python -c command [arg] ...`, which executes the statement(s) in _command_, analogous to the shell’s <a href="https://docs.python.org/3/using/cmdline.html#cmdoption-c" class="reference internal"><code class="xref std std-option docutils literal notranslate">-c</code></a> option. Since Python statements often contain spaces or other characters that are special to the shell, it is usually advised to quote _command_ in its entirety with single quotes.

Some Python modules are also useful as scripts. These can be invoked using `python -m module [arg] ...`, which executes the source file for _module_ as if you had spelled out its full name on the command line.

When a script file is used, it is sometimes useful to be able to run the script and enter interactive mode afterwards. This can be done by passing <a href="https://docs.python.org/3/using/cmdline.html#cmdoption-i" class="reference internal"><code class="xref std std-option docutils literal notranslate">-i</code></a> before the script.

All command line options are described in <a href="https://docs.python.org/3/using/cmdline.html#using-on-general" class="reference internal"><span class="std std-ref">Command line and environment</span></a>.

<span id="tut-argpassing"></span>

### <span class="section-number">2.1.1. </span>Argument Passing<a href="#argument-passing" class="headerlink" title="Permalink to this headline">¶</a>

When known to the interpreter, the script name and additional arguments thereafter are turned into a list of strings and assigned to the `argv` variable in the `sys` module. You can access this list by executing `import sys`. The length of the list is at least one; when no script and no arguments are given, `sys.argv[0]` is an empty string. When the script name is given as `'-'` (meaning standard input), `sys.argv[0]` is set to `'-'`. When <a href="https://docs.python.org/3/using/cmdline.html#cmdoption-c" class="reference internal"><code class="xref std std-option docutils literal notranslate">-c</code></a> _command_ is used, `sys.argv[0]` is set to `'-c'`. When <a href="https://docs.python.org/3/using/cmdline.html#cmdoption-m" class="reference internal"><code class="xref std std-option docutils literal notranslate">-m</code></a> _module_ is used, `sys.argv[0]` is set to the full name of the located module. Options found after <a href="https://docs.python.org/3/using/cmdline.html#cmdoption-c" class="reference internal"><code class="xref std std-option docutils literal notranslate">-c</code></a> _command_ or <a href="https://docs.python.org/3/using/cmdline.html#cmdoption-m" class="reference internal"><code class="xref std std-option docutils literal notranslate">-m</code></a> _module_ are not consumed by the Python interpreter’s option processing but left in `sys.argv` for the command or module to handle.

<span id="tut-interactive"></span>

### <span class="section-number">2.1.2. </span>Interactive Mode<a href="#interactive-mode" class="headerlink" title="Permalink to this headline">¶</a>

When commands are read from a tty, the interpreter is said to be in _interactive mode_. In this mode it prompts for the next command with the _primary prompt_, usually three greater-than signs (`>>>`); for continuation lines it prompts with the _secondary prompt_, by default three dots (`...`). The interpreter prints a welcome message stating its version number and a copyright notice before printing the first prompt:

    $ python3.9
    Python 3.9 (default, June 4 2019, 09:25:04)
    [GCC 4.8.2] on linux
    Type "help", "copyright", "credits" or "license" for more information.
    >>>

Continuation lines are needed when entering a multi-line construct. As an example, take a look at this <a href="https://docs.python.org/3/reference/compound_stmts.html#if" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">if</code></a> statement:

    >>> the_world_is_flat = True
    >>> if the_world_is_flat:
    ...     print("Be careful not to fall off!")
    ...
    Be careful not to fall off!

For more on interactive mode, see <a href="appendix.html#tut-interac" class="reference internal"><span class="std std-ref">Interactive Mode</span></a>.

<span id="tut-interp"></span>

## <span class="section-number">2.2. </span>The Interpreter and Its Environment<a href="#the-interpreter-and-its-environment" class="headerlink" title="Permalink to this headline">¶</a>

<span id="tut-source-encoding"></span>

### <span class="section-number">2.2.1. </span>Source Code Encoding<a href="#source-code-encoding" class="headerlink" title="Permalink to this headline">¶</a>

By default, Python source files are treated as encoded in UTF-8. In that encoding, characters of most languages in the world can be used simultaneously in string literals, identifiers and comments — although the standard library only uses ASCII characters for identifiers, a convention that any portable code should follow. To display all these characters properly, your editor must recognize that the file is UTF-8, and it must use a font that supports all the characters in the file.

To declare an encoding other than the default one, a special comment line should be added as the _first_ line of the file. The syntax is as follows:

    # -*- coding: encoding -*-

where _encoding_ is one of the valid <a href="https://docs.python.org/3/library/codecs.html#module-codecs" class="reference internal" title="codecs: Encode and decode data and streams."><code class="sourceCode python">codecs</code></a> supported by Python.

For example, to declare that Windows-1252 encoding is to be used, the first line of your source code file should be:

    # -*- coding: cp1252 -*-

One exception to the _first line_ rule is when the source code starts with a <a href="appendix.html#tut-scripts" class="reference internal"><span class="std std-ref">UNIX “shebang” line</span></a>. In this case, the encoding declaration should be added as the second line of the file. For example:

    #!/usr/bin/env python3
    # -*- coding: cp1252 -*-

Footnotes

<span class="brackets"><a href="#id1" class="fn-backref">1</a></span>  
On Unix, the Python 3.x interpreter is by default not installed with the executable named `python`, so that it does not conflict with a simultaneously installed Python 2.x executable.

### [Table of Contents](https://docs.python.org/3/contents.html)

- <a href="#" class="reference internal">2. Using the Python Interpreter</a>
  - <a href="#invoking-the-interpreter" class="reference internal">2.1. Invoking the Interpreter</a>
    - <a href="#argument-passing" class="reference internal">2.1.1. Argument Passing</a>
    - <a href="#interactive-mode" class="reference internal">2.1.2. Interactive Mode</a>
  - <a href="#the-interpreter-and-its-environment" class="reference internal">2.2. The Interpreter and Its Environment</a>
    - <a href="#source-code-encoding" class="reference internal">2.2.1. Source Code Encoding</a>

#### Previous topic

[<span class="section-number">1. </span>Whetting Your Appetite](appetite.html 'previous chapter')

#### Next topic

[<span class="section-number">3. </span>An Informal Introduction to Python](introduction.html 'next chapter')

### This Page

- [Report a Bug](https://docs.python.org/3/bugs.html)
- [Show Source](https://github.com/python/cpython/blob/3.9/Doc/tutorial/interpreter.rst)

### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](introduction.html '3. An Informal Introduction to Python') |
- [previous](appetite.html '1. Whetting Your Appetite') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-
