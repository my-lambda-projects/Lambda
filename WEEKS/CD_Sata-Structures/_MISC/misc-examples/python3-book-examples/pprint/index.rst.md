pprint \-\-- Pretty-Print Data Structures
=========================================

::: {.module synopsis="Pretty-print data structures"}
pprint
:::

Purpose

:   Pretty-print data structures

The `pprint` module contains a \"pretty printer\" for producing
aesthetically pleasing views of data structures. The formatter produces
representations of data structures that can be parsed correctly by the
interpreter, and that are also easy for a human to read. The output is
kept on a single line, if possible, and indented when split across
multiple lines.

The examples in this section all depend on `pprint_data.py`, which is
shown here.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
pprint\_data.py
:::

Printing
--------

The simplest way to use the module is through the `pprint()` function.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
pprint\_pprint.py
:::

`pprint()` formats an object and writes it to the data stream passed in
as an argument (or `sys.stdout` by default).

``` {.sourceCode .none}
$ python3 pprint_pprint.py

PRINT:
[(1, {'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D'}), (2, {'e': 'E', 'f': 
'F', 'g': 'G', 'h': 'H', 'i': 'I', 'j': 'J', 'k': 'K', 'l': 'L'}), (
3, ['m', 'n']), (4, ['o', 'p', 'q']), (5, ['r', 's', 'tu', 'v', 'x',
 'y', 'z'])]

PPRINT:
[(1, {'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D'}),
 (2,
  {'e': 'E',
   'f': 'F',
   'g': 'G',
   'h': 'H',
   'i': 'I',
   'j': 'J',
   'k': 'K',
   'l': 'L'}),
 (3, ['m', 'n']),
 (4, ['o', 'p', 'q']),
 (5, ['r', 's', 'tu', 'v', 'x', 'y', 'z'])]
```

Formatting
----------

To format a data structure without writing it directly to a stream (for
example, for logging), use `pformat()` to build a string representation.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
pprint\_pformat.py
:::

The formatted string can then be printed or logged independently.

``` {.sourceCode .none}
$ python3 pprint_pformat.py

DEBUG    Logging pformatted data
DEBUG    [(1, {'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D'}),
DEBUG     (2,
DEBUG      {'e': 'E',
DEBUG       'f': 'F',
DEBUG       'g': 'G',
DEBUG       'h': 'H',
DEBUG       'i': 'I',
DEBUG       'j': 'J',
DEBUG       'k': 'K',
DEBUG       'l': 'L'}),
DEBUG     (3, ['m', 'n']),
DEBUG     (4, ['o', 'p', 'q']),
DEBUG     (5, ['r', 's', 'tu', 'v', 'x', 'y', 'z'])]
```

Arbitrary Classes
-----------------

The `PrettyPrinter` class used by `pprint()` can also work with custom
classes, if they define a `__repr__()` method.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
pprint\_arbitrary\_object.py
:::

The representations of the nested objects are combined by the
`PrettyPrinter` to return the full string representation.

``` {.sourceCode .none}
$ python3 pprint_arbitrary_object.py

[node('node-1', []),
 node('node-2', [node('node-2-1', [])]),
 node('node-3', [node('node-3-1', [])])]
```

Recursion
---------

Recursive data structures are represented with a reference to the
original source of the data, given in the format
`<Recursion on typename with id=number>`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
pprint\_recursion.py
:::

In this example, the list `local_data` is added to itself, creating a
recursive reference.

``` {.sourceCode .none}
$ python3 pprint_recursion.py

id(local_data) => 4358913288
['a', 'b', 1, 2, <Recursion on list with id=4358913288>]
```

Limiting Nested Output
----------------------

For very deep data structures, it may not be desirable for the output to
include all of the details. The data may not be formatted properly, the
formatted text might be too large to manage, or some of the data may be
extraneous.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
pprint\_depth.py
:::

Use the `depth` argument to control how far down into the nested data
structure the pretty printer recurses. Levels not included in the output
are represented by ellipsis.

``` {.sourceCode .none}
$ python3 pprint_depth.py

[(...), (...), (...), (...), (...)]
[(1, {...}), (2, {...}), (3, [...]), (4, [...]), (5, [...])]
```

Controlling Output Width
------------------------

The default output width for the formatted text is 80 columns. To adjust
that width, use the `width` argument to `pprint()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
pprint\_width.py
:::

When the width is too small to accommodate the formatted data structure,
the lines are not truncated or wrapped if doing so would introduce
invalid syntax.

``` {.sourceCode .none}
$ python3 pprint_width.py

WIDTH = 80
[(1, {'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D'}),
 (2,
  {'e': 'E',
   'f': 'F',
   'g': 'G',
   'h': 'H',
   'i': 'I',
   'j': 'J',
   'k': 'K',
   'l': 'L'}),
 (3, ['m', 'n']),
 (4, ['o', 'p', 'q']),
 (5, ['r', 's', 'tu', 'v', 'x', 'y', 'z'])]

WIDTH = 5
[(1,
  {'a': 'A',
   'b': 'B',
   'c': 'C',
   'd': 'D'}),
 (2,
  {'e': 'E',
   'f': 'F',
   'g': 'G',
   'h': 'H',
   'i': 'I',
   'j': 'J',
   'k': 'K',
   'l': 'L'}),
 (3,
  ['m',
   'n']),
 (4,
  ['o',
   'p',
   'q']),
 (5,
  ['r',
   's',
   'tu',
   'v',
   'x',
   'y',
   'z'])]
```

The `compact` flag tells `pprint()` to try to fit more data on each
individual line, rather than spreading complex data structures across
lines.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
pprint\_compact.py
:::

This example shows that when a data structure does not fit on a line, it
is split up (as with the second item in the data list). When multiple
elements can fit on a line, as with the third and fourth members, they
are placed that way.

``` {.sourceCode .none}
$ python3 pprint_compact.py

DEFAULT:
[(1, {'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D'}),
 (2,
  {'e': 'E',
   'f': 'F',
   'g': 'G',
   'h': 'H',
   'i': 'I',
   'j': 'J',
   'k': 'K',
   'l': 'L'}),
 (3, ['m', 'n']),
 (4, ['o', 'p', 'q']),
 (5, ['r', 's', 'tu', 'v', 'x', 'y', 'z'])]

COMPACT:
[(1, {'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D'}),
 (2,
  {'e': 'E',
   'f': 'F',
   'g': 'G',
   'h': 'H',
   'i': 'I',
   'j': 'J',
   'k': 'K',
   'l': 'L'}),
 (3, ['m', 'n']), (4, ['o', 'p', 'q']),
 (5, ['r', 's', 'tu', 'v', 'x', 'y', 'z'])]
```

::: {.seealso}
-   `pprint`{.interpreted-text role="pydoc"}
:::
