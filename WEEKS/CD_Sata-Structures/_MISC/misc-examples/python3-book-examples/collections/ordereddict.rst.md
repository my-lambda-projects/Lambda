OrderedDict \-\-- Remember the Order Keys are Added to a Dictionary {#OrderedDict}
===================================================================

An `OrderedDict` is a dictionary subclass that remembers the order in
which its contents are added.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
collections\_ordereddict\_iter.py
:::

Before Python 3.6 a regular `dict` did not track the insertion order,
and iterating over it produced the values in order based on how the keys
are stored in the hash table, which is in turn influenced by a random
value to reduce collisions. In an `OrderedDict`, by contrast, the order
in which the items are inserted is remembered and used when creating an
iterator.

``` {.sourceCode .none}
$ python3.5 collections_ordereddict_iter.py

Regular dictionary:
c C
b B
a A

OrderedDict:
a A
b B
c C
```

Under Python 3.6, the built-in `dict` does track insertion order,
although this behavior is a side-effect of an implementation change and
should not be relied on.

``` {.sourceCode .none}
$ python3.6 collections_ordereddict_iter.py

Regular dictionary:
a A
b B
c C

OrderedDict:
a A
b B
c C
```

Equality
--------

A regular `dict` looks at its contents when testing for equality. An
`OrderedDict` also considers the order in which the items were added.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
collections\_ordereddict\_equality.py
:::

In this case, since the two ordered dictionaries are created from values
in a different order, they are considered to be different.

``` {.sourceCode .none}
$ python3 collections_ordereddict_equality.py

dict       : True
OrderedDict: False
```

Reordering
----------

It is possible to change the order of the keys in an `OrderedDict` by
moving them to either the beginning or the end of the sequence using
`move_to_end()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
collections\_ordereddict\_move\_to\_end.py
:::

The `last` argument tells `move_to_end()` whether to move the item to be
the last item in the key sequence (when `True`) or the first (when
`False`).

``` {.sourceCode .none}
$ python3 collections_ordereddict_move_to_end.py

Before:
a A
b B
c C

move_to_end():
a A
c C
b B

move_to_end(last=False):
b B
a A
c C
```

::: {.seealso}
-   [PYTHONHASHSEED](https://docs.python.org/3.5/using/cmdline.html#envvar-PYTHONHASHSEED)
    \-- Environment variable to control the random seed value added to
    the hash algorithm for key locations in the dictionary.
:::
