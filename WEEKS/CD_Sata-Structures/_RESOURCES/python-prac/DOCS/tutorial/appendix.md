### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](https://docs.python.org/3/using/index.html 'Python Setup and Usage') |
- [previous](floatingpoint.html '15. Floating Point Arithmetic: Issues and Limitations') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-

<span id="tut-appendix"></span>

# <span class="section-number">16. </span>Appendix<a href="#appendix" class="headerlink" title="Permalink to this headline">¶</a>

<span id="tut-interac"></span>

## <span class="section-number">16.1. </span>Interactive Mode<a href="#interactive-mode" class="headerlink" title="Permalink to this headline">¶</a>

<span id="tut-error"></span>

### <span class="section-number">16.1.1. </span>Error Handling<a href="#error-handling" class="headerlink" title="Permalink to this headline">¶</a>

When an error occurs, the interpreter prints an error message and a stack trace. In interactive mode, it then returns to the primary prompt; when input came from a file, it exits with a nonzero exit status after printing the stack trace. (Exceptions handled by an <a href="https://docs.python.org/3/reference/compound_stmts.html#except" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">except</code></a> clause in a <a href="https://docs.python.org/3/reference/compound_stmts.html#try" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">try</code></a> statement are not errors in this context.) Some errors are unconditionally fatal and cause an exit with a nonzero exit; this applies to internal inconsistencies and some cases of running out of memory. All error messages are written to the standard error stream; normal output from executed commands is written to standard output.

Typing the interrupt character (usually Control-C or Delete) to the primary or secondary prompt cancels the input and returns to the primary prompt. <a href="#id2" id="id1" class="footnote-reference brackets">1</a> Typing an interrupt while a command is executing raises the <a href="https://docs.python.org/3/library/exceptions.html#KeyboardInterrupt" class="reference internal" title="KeyboardInterrupt"><code class="sourceCode python"><span class="pp">KeyboardInterrupt</span></code></a> exception, which may be handled by a <a href="https://docs.python.org/3/reference/compound_stmts.html#try" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">try</code></a> statement.

<span id="tut-scripts"></span>

### <span class="section-number">16.1.2. </span>Executable Python Scripts<a href="#executable-python-scripts" class="headerlink" title="Permalink to this headline">¶</a>

On BSD’ish Unix systems, Python scripts can be made directly executable, like shell scripts, by putting the line

    #!/usr/bin/env python3.5

(assuming that the interpreter is on the user’s <span id="index-0" class="target"></span>`PATH`) at the beginning of the script and giving the file an executable mode. The `#!` must be the first two characters of the file. On some platforms, this first line must end with a Unix-style line ending (`'\n'`), not a Windows (`'\r\n'`) line ending. Note that the hash, or pound, character, `'#'`, is used to start a comment in Python.

The script can be given an executable mode, or permission, using the **chmod** command.

    $ chmod +x myscript.py

On Windows systems, there is no notion of an “executable mode”. The Python installer automatically associates `.py` files with `python.exe` so that a double-click on a Python file will run it as a script. The extension can also be `.pyw`, in that case, the console window that normally appears is suppressed.

<span id="tut-startup"></span>

### <span class="section-number">16.1.3. </span>The Interactive Startup File<a href="#the-interactive-startup-file" class="headerlink" title="Permalink to this headline">¶</a>

When you use Python interactively, it is frequently handy to have some standard commands executed every time the interpreter is started. You can do this by setting an environment variable named <span id="index-1" class="target"></span><a href="https://docs.python.org/3/using/cmdline.html#envvar-PYTHONSTARTUP" class="reference internal"><code class="xref std std-envvar docutils literal notranslate">PYTHONSTARTUP</code></a> to the name of a file containing your start-up commands. This is similar to the `.profile` feature of the Unix shells.

This file is only read in interactive sessions, not when Python reads commands from a script, and not when `/dev/tty` is given as the explicit source of commands (which otherwise behaves like an interactive session). It is executed in the same namespace where interactive commands are executed, so that objects that it defines or imports can be used without qualification in the interactive session. You can also change the prompts `sys.ps1` and `sys.ps2` in this file.

If you want to read an additional start-up file from the current directory, you can program this in the global start-up file using code like `if os.path.isfile('.pythonrc.py'): exec(open('.pythonrc.py').read())`. If you want to use the startup file in a script, you must do this explicitly in the script:

    import os
    filename = os.environ.get('PYTHONSTARTUP')
    if filename and os.path.isfile(filename):
        with open(filename) as fobj:
            startup_file = fobj.read()
        exec(startup_file)

<span id="tut-customize"></span>

### <span class="section-number">16.1.4. </span>The Customization Modules<a href="#the-customization-modules" class="headerlink" title="Permalink to this headline">¶</a>

Python provides two hooks to let you customize it: `sitecustomize` and `usercustomize`. To see how it works, you need first to find the location of your user site-packages directory. Start Python and run this code:

    >>> import site
    >>> site.getusersitepackages()
    '/home/user/.local/lib/python3.5/site-packages'

Now you can create a file named `usercustomize.py` in that directory and put anything you want in it. It will affect every invocation of Python, unless it is started with the <a href="https://docs.python.org/3/using/cmdline.html#cmdoption-s" class="reference internal"><code class="xref std std-option docutils literal notranslate">-s</code></a> option to disable the automatic import.

`sitecustomize` works in the same way, but is typically created by an administrator of the computer in the global site-packages directory, and is imported before `usercustomize`. See the documentation of the <a href="https://docs.python.org/3/library/site.html#module-site" class="reference internal" title="site: Module responsible for site-specific configuration."><code class="sourceCode python">site</code></a> module for more details.

Footnotes

<span class="brackets"><a href="#id1" class="fn-backref">1</a></span>  
A problem with the GNU Readline package may prevent this.

### [Table of Contents](https://docs.python.org/3/contents.html)

- <a href="#" class="reference internal">16. Appendix</a>
  - <a href="#interactive-mode" class="reference internal">16.1. Interactive Mode</a>
    - <a href="#error-handling" class="reference internal">16.1.1. Error Handling</a>
    - <a href="#executable-python-scripts" class="reference internal">16.1.2. Executable Python Scripts</a>
    - <a href="#the-interactive-startup-file" class="reference internal">16.1.3. The Interactive Startup File</a>
    - <a href="#the-customization-modules" class="reference internal">16.1.4. The Customization Modules</a>

#### Previous topic

[<span class="section-number">15. </span>Floating Point Arithmetic: Issues and Limitations](floatingpoint.html 'previous chapter')

#### Next topic

[Python Setup and Usage](https://docs.python.org/3/using/index.html 'next chapter')

### This Page

- [Report a Bug](https://docs.python.org/3/bugs.html)
- [Show Source](https://github.com/python/cpython/blob/3.9/Doc/tutorial/appendix.rst)

### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](https://docs.python.org/3/using/index.html 'Python Setup and Usage') |
- [previous](floatingpoint.html '15. Floating Point Arithmetic: Issues and Limitations') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-
