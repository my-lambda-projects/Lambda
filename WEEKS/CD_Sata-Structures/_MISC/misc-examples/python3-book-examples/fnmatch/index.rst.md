fnmatch \-\-- Unix-style Glob Pattern Matching
==============================================

::: {.module synopsis="Compare filenames with Unix-style glob patterns."}
fnmatch
:::

Purpose

:   Handle Unix-style filename comparisons.

The `fnmatch` module is used to compare filenames against glob-style
patterns such as used by Unix shells.

Simple Matching
---------------

`fnmatch()` compares a single filename against a pattern and returns a
boolean, indicating whether or not they match. The comparison is
case-sensitive when the operating system uses a case-sensitive file
system.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
fnmatch\_fnmatch.py
:::

In this example, the pattern matches all files starting with
`'fnmatch_'` and ending in `'.py'`.

``` {.sourceCode .none}
$ python3 fnmatch_fnmatch.py

Pattern : fnmatch_*.py

Filename: fnmatch_filter.py         True
Filename: fnmatch_fnmatch.py        True
Filename: fnmatch_fnmatchcase.py    True
Filename: fnmatch_translate.py      True
Filename: index.rst                 False
```

To force a case-sensitive comparison, regardless of the file system and
operating system settings, use `fnmatchcase()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
fnmatch\_fnmatchcase.py
:::

Since the OS X system used to test this program uses a case-sensitive
file system, no files match the modified pattern.

``` {.sourceCode .none}
$ python3 fnmatch_fnmatchcase.py

Pattern : FNMATCH_*.PY

Filename: fnmatch_filter.py         False
Filename: fnmatch_fnmatch.py        False
Filename: fnmatch_fnmatchcase.py    False
Filename: fnmatch_translate.py      False
Filename: index.rst                 False
```

Filtering
---------

To test a sequence of filenames, use `filter()`, which returns a list of
the names that match the pattern argument.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
fnmatch\_filter.py
:::

In this example, `filter()` returns the list of names of the example
source files associated with this section.

``` {.sourceCode .none}
$ python3 fnmatch_filter.py

Pattern : fnmatch_*.py

Files   :
['fnmatch_filter.py',
 'fnmatch_fnmatch.py',
 'fnmatch_fnmatchcase.py',
 'fnmatch_translate.py',
 'index.rst']

Matches :
['fnmatch_filter.py',
 'fnmatch_fnmatch.py',
 'fnmatch_fnmatchcase.py',
 'fnmatch_translate.py']
```

Translating Patterns
--------------------

Internally, `fnmatch` converts the glob pattern to a regular expression
and uses the `re`{.interpreted-text role="mod"} module to compare the
name and pattern. The `translate()` function is the public API for
converting glob patterns to regular expressions.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
fnmatch\_translate.py
:::

Some of the characters are escaped to make a valid expression.

``` {.sourceCode .none}
$ python3 fnmatch_translate.py

Pattern : fnmatch_*.py
Regex   : (?s:fnmatch_.*\.py)\Z
```

::: {.seealso}
-   `fnmatch`{.interpreted-text role="pydoc"}
-   `glob`{.interpreted-text role="mod"} \-- The glob module combines
    `fnmatch` matching with `os.listdir()` to produce lists of files and
    directories matching patterns.
-   `re`{.interpreted-text role="mod"} \-- Regular expression pattern
    matching.
:::
