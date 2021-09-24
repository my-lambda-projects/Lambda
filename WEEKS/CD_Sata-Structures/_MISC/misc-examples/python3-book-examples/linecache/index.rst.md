linecache \-\-- Read Text Files Efficiently
===========================================

::: {.module synopsis="Read text files efficiently"}
linecache
:::

Purpose

:   Retrieve lines of text from files or imported Python modules,
    holding a cache of the results to make reading many lines from the
    same file more efficient.

The `linecache` module is used within other parts of the Python standard
library when dealing with Python source files. The implementation of the
cache holds the contents of files, parsed into separate lines, in
memory. The API returns the requested line(s) by indexing into a `list`,
and saves time over repeatedly reading the file and parsing lines to
find the one desired. This is especially useful when looking for
multiple lines from the same file, such as when producing a traceback
for an error report.

Test Data
---------

This text produced by a Lorem Ipsum generator is used as sample input.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
linecache\_data.py
:::

Reading Specific Lines
----------------------

The line numbers of files read by the `linecache` module start with 1,
but normally lists start indexing the array from 0.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
linecache\_getline.py
:::

Each line returned includes a trailing newline.

``` {.sourceCode .none}
$ python3 linecache_getline.py

SOURCE:
'fermentum id, nonummy a, nonummy sit amet, ligula. Curabitur'

CACHE:
'fermentum id, nonummy a, nonummy sit amet, ligula. Curabitur\n'
```

Handling Blank Lines
--------------------

The return value always includes the newline at the end of the line, so
if the line is empty the return value is just the newline.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
linecache\_empty\_line.py
:::

Line eight of the input file contains no text.

``` {.sourceCode .none}
$ python3 linecache_empty_line.py

BLANK : '\n'
```

Error Handling
--------------

If the requested line number falls out of the range of valid lines in
the file, `getline()` returns an empty string.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
linecache\_out\_of\_range.py
:::

The input file only has 15 lines, so requesting line 500 is like trying
to read past the end of the file.

``` {.sourceCode .none}
$ python3 linecache_out_of_range.py

NOT THERE: '' includes 0 characters
```

Reading from a file that does not exist is handled in the same way.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
linecache\_missing\_file.py
:::

The module never raises an exception when the caller tries to read data.

``` {.sourceCode .none}
$ python3 linecache_missing_file.py

NO FILE: ''
```

Reading Python Source Files
---------------------------

Since `linecache` is used so heavily when producing tracebacks, one of
its key features is the ability to find Python source modules in the
import path by specifying the base name of the module.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
linecache\_path\_search.py
:::

The cache population code in `linecache` searches `sys.path` for the
named module if it cannot find a file with that name in the current
directory. This example looks for `linecache.py`. Since there is no copy
in the current directory, the file from the standard library is found
instead.

``` {.sourceCode .none}
$ python3 linecache_path_search.py

MODULE:
'This is intended to read lines from modules imported -- hence
if a filename\n'

FILE:
'This is intended to read lines from modules imported -- hence
if a filename\n'
```

::: {.seealso}
-   `linecache`{.interpreted-text role="pydoc"}
:::
