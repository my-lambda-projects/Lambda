### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](floatingpoint.html '15. Floating Point Arithmetic: Issues and Limitations') |
- [previous](whatnow.html '13. What Now?') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-

<span id="tut-interacting"></span>

# <span class="section-number">14. </span>Interactive Input Editing and History Substitution<a href="#interactive-input-editing-and-history-substitution" class="headerlink" title="Permalink to this headline">¶</a>

Some versions of the Python interpreter support editing of the current input line and history substitution, similar to facilities found in the Korn shell and the GNU Bash shell. This is implemented using the <a href="https://tiswww.case.edu/php/chet/readline/rltop.html" class="reference external">GNU Readline</a> library, which supports various styles of editing. This library has its own documentation which we won’t duplicate here.

<span id="tut-keybindings"></span>

## <span class="section-number">14.1. </span>Tab Completion and History Editing<a href="#tab-completion-and-history-editing" class="headerlink" title="Permalink to this headline">¶</a>

Completion of variable and module names is <a href="https://docs.python.org/3/library/site.html#rlcompleter-config" class="reference internal"><span class="std std-ref">automatically enabled</span></a> at interpreter startup so that the Tab key invokes the completion function; it looks at Python statement names, the current local variables, and the available module names. For dotted expressions such as `string.a`, it will evaluate the expression up to the final `'.'` and then suggest completions from the attributes of the resulting object. Note that this may execute application-defined code if an object with a <a href="https://docs.python.org/3/reference/datamodel.html#object.__getattr__" class="reference internal" title="object.__getattr__"><code class="sourceCode python"><span class="bu">getattr</span>()</code></a> method is part of the expression. The default configuration also saves your history into a file named `.python_history` in your user directory. The history will be available again during the next interactive interpreter session.

<span id="tut-commentary"></span>

## <span class="section-number">14.2. </span>Alternatives to the Interactive Interpreter<a href="#alternatives-to-the-interactive-interpreter" class="headerlink" title="Permalink to this headline">¶</a>

This facility is an enormous step forward compared to earlier versions of the interpreter; however, some wishes are left: It would be nice if the proper indentation were suggested on continuation lines (the parser knows if an indent token is required next). The completion mechanism might use the interpreter’s symbol table. A command to check (or even suggest) matching parentheses, quotes, etc., would also be useful.

One alternative enhanced interactive interpreter that has been around for quite some time is <a href="https://ipython.org/" class="reference external">IPython</a>, which features tab completion, object exploration and advanced history management. It can also be thoroughly customized and embedded into other applications. Another similar enhanced interactive environment is <a href="https://www.bpython-interpreter.org/" class="reference external">bpython</a>.

### [Table of Contents](https://docs.python.org/3/contents.html)

- <a href="#" class="reference internal">14. Interactive Input Editing and History Substitution</a>
  - <a href="#tab-completion-and-history-editing" class="reference internal">14.1. Tab Completion and History Editing</a>
  - <a href="#alternatives-to-the-interactive-interpreter" class="reference internal">14.2. Alternatives to the Interactive Interpreter</a>

#### Previous topic

[<span class="section-number">13. </span>What Now?](whatnow.html 'previous chapter')

#### Next topic

[<span class="section-number">15. </span>Floating Point Arithmetic: Issues and Limitations](floatingpoint.html 'next chapter')

### This Page

- [Report a Bug](https://docs.python.org/3/bugs.html)
- [Show Source](https://github.com/python/cpython/blob/3.9/Doc/tutorial/interactive.rst)

### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](floatingpoint.html '15. Floating Point Arithmetic: Issues and Limitations') |
- [previous](whatnow.html '13. What Now?') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-
