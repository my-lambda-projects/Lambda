tabnanny \-\-- Indentation validator
====================================

::: {.module synopsis="Scan Python source code looking for suspicious indentation."}
tabnanny
:::

Purpose

:   Scan Python source code looking for suspicious indentation.

Consistent use of indentation is important in a langauge like Python,
where white-space is significant. The `tabnanny` module provides a
scanner to report on ambiguous use of indentation.

Running from the Command Line
-----------------------------

The simplest way to use `tabnanny` is to run it from the command line,
passing the names of files to check. If you pass directory names, the
directories are scanned recursively to find `.py` files to check.

Running tabnanny across the PyMOTW source code exposed one old module
with tabs instead of spaces.

``` {.sourceCode .none}
$ python3 -m tabnanny .
./source/queue/fetch_podcasts.py 65 "    \t\tparsed_url = \
urlparse(enclosure['url'])\n"
```

Line 65 of `fetch_podcasts.py` had two tabs instead of 8 spaces. This
wasn\'t apparent in a text editor, which was configured to with tabstops
set to 4 spaces, so visually there was no difference.

::: {.literalinclude lines="64-68"}
../queue/fetch\_podcasts.py
:::

Correcting line 65 and running tabnanny again showed another error on
line 66. One last problem showed up on line 67.

If you want to scan files, but not see the details about the error, use
the `-q` option to suppress all information except the filename.

``` {.sourceCode .none}
$ python3 -m tabnanny -q .
./source/queue/fetch_podcasts.py
```

To see more information about the files being scanned, use the `-v`
option.

``` {.sourceCode .none}
'source/queue/': listing directory
'source/queue/fetch_podcasts.py': *** Line 65: trouble in tab
city! ***
offending line: "    \t\tparsed_url = urlparse(enclosure['url'])
\n"
indent not greater e.g. at tab sizes 1, 2
'source/queue/queue_fifo.py': Clean bill of health.
'source/queue/queue_lifo.py': Clean bill of health.
'source/queue/queue_priority.py': Clean bill of health.
```

::: {.note}
::: {.admonition-title}
Note
:::

Running these examples against the PyMOTW source files won\'t report the
same errors, since the issues have been fixed.
:::

::: {.seealso}
-   `tabnanny`{.interpreted-text role="pydoc"}
-   `tokenize`{.interpreted-text role="mod"} \-- Lexical scanner for
    Python source code.
-   [flake8](https://pypi.python.org/pypi/flake8) \-- modular source
    code checker
-   [pycodestyle](https://pycodestyle.readthedocs.io/en/latest/) \--
    Python style guide checker
-   [pylint](https://pypi.python.org/pypi/pylint) \-- python code static
    checker
:::
