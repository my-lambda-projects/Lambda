enum \-- Enumeration Type
=========================

::: {.module synopsis="Defines enumeration type"}
enum
:::

The `enum` module defines an enumeration type with iteration and
comparison capabilities. It can be used to create well-defined symbols
for values, instead of using literal integers or strings.

Creating Enumerations
---------------------

A new enumeration is defined using the `class` syntax by subclassing
`Enum` and adding class attributes describing the values.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
enum\_create.py
:::

The members of the `Enum` are converted to instances as the class is
parsed. Each instance has a `name` property corresponding to the member
name and a `value` property corresponding to the value assigned to the
name in the class definition.

``` {.sourceCode .none}
$ python3 enum_create.py


Member name: wont_fix
Member value: 4
```

Iteration
---------

Iterating over the enum *class* produces the individual members of the
enumeration.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
enum\_iterate.py
:::

The members are produced in the order they are declared in the class
definition. The names and values are not used to sort them in any way.

``` {.sourceCode .none}
$ python3 enum_iterate.py

new             = 7
incomplete      = 6
invalid         = 5
wont_fix        = 4
in_progress     = 3
fix_committed   = 2
fix_released    = 1
```

Comparing Enums
---------------

Because enumeration members are not ordered, they support only
comparison by identity and equality.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
enum\_comparison.py
:::

The greater-than and less-than comparison operators raise `TypeError`
exceptions.

``` {.sourceCode .none}
$ python3 enum_comparison.py

Equality: False True
Identity: False True
Ordered by value:
  Cannot sort: '<' not supported between instances of 'BugStatus
' and 'BugStatus'
```

Use the `IntEnum` class for enumerations where the members need to
behave more like numbers\-\--for example, to support comparisons.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
enum\_intenum.py
:::

``` {.sourceCode .none}
$ python3 enum_intenum.py

Ordered by value:
  fix_released
  fix_committed
  in_progress
  wont_fix
  invalid
  incomplete
  new
```

Unique Enumeration Values
-------------------------

Enum members with the same value are tracked as alias references to the
same member object. Aliases do not cause repeated values to be present
in the iterator for the `Enum`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
enum\_aliases.py
:::

Because `by_design` and `closed` are aliases for other members, they do
not appear separately in the output when iterating over the `Enum`. The
canonical name for a member is the first name attached to the value.

``` {.sourceCode .none}
$ python3 enum_aliases.py

new             = 7
incomplete      = 6
invalid         = 5
wont_fix        = 4
in_progress     = 3
fix_committed   = 2
fix_released    = 1

Same: by_design is wont_fix:  True
Same: closed is fix_released:  True
```

To require all members to have unique values, add the `@unique`
decorator to the `Enum`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
enum\_unique\_enforce.py
:::

Members with repeated values trigger a `ValueError` exception when the
`Enum` class is being interpreted.

``` {.sourceCode .none}
$ python3 enum_unique_enforce.py

Traceback (most recent call last):
  File "enum_unique_enforce.py", line 11, in <module>
    class BugStatus(enum.Enum):
  File ".../lib/python3.7/enum.py", line 848, in unique
    (enumeration, alias_details))
ValueError: duplicate values found in <enum 'BugStatus'>:
by_design -> wont_fix, closed -> fix_released
```

Creating Enumerations Programmatically
--------------------------------------

In some cases, it is more convenient to create enumerations
programmatically, rather than hard-coding them in a class definition.
For those situations, `Enum` also supports passing the member names and
values to the class constructor.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
enum\_programmatic\_create.py
:::

The `value` argument is the name of the enumeration, which is used to
build the representation of members. The `names` argument lists the
members of the enumeration. When a single string is passed, it is split
on whitespace and commas, and the resulting tokens are used as names for
the members, which are automatically assigned values starting with `1`.

``` {.sourceCode .none}
$ python3 enum_programmatic_create.py

Member: BugStatus.new

All members:
fix_released    = 1
fix_committed   = 2
in_progress     = 3
wont_fix        = 4
invalid         = 5
incomplete      = 6
new             = 7
```

For more control over the values associated with members, the `names`
string can be replaced with a sequence of two-part tuples or a
dictionary mapping names to values.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
enum\_programmatic\_mapping.py
:::

In this example, a list of two-part tuples is given instead of a single
string containing only the member names. This makes it possible to
reconstruct the `BugStatus` enumeration with the members in the same
order as the version defined in `enum_create.py`.

``` {.sourceCode .none}
$ python3 enum_programmatic_mapping.py

All members:
new             = 7
incomplete      = 6
invalid         = 5
wont_fix        = 4
in_progress     = 3
fix_committed   = 2
fix_released    = 1
```

Non-integer Member Values
-------------------------

Enum member values are not restricted to integers. In fact, any type of
object can be associated with a member. If the value is a tuple, the
members are passed as individual arguments to `__init__()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
enum\_tuple\_values.py
:::

In this example, each member value is a tuple containing the numerical
ID (such as might be stored in a database) and a list of valid
transitions away from the current state.

``` {.sourceCode .none}
$ python3 enum_tuple_values.py

Name: BugStatus.in_progress
Value: (3, ['new', 'fix_committed'])
Custom attribute: ['new', 'fix_committed']
Using attribute: True
```

For more complex cases, tuples might become unwieldy. Since member
values can be any type of object, dictionaries can be used for cases
where there are a lot of separate attributes to track for each enum
value. Complex values are passed directly to `__init__()` as the only
argument other than `self`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
enum\_complex\_values.py
:::

This example expresses the same data as the previous example, using
dictionaries rather than tuples.

``` {.sourceCode .none}
$ python3 enum_complex_values.py

Name: BugStatus.in_progress
Value: {'num': 3, 'transitions': ['new', 'fix_committed']}
Custom attribute: ['new', 'fix_committed']
Using attribute: True
```

::: {.seealso}
-   `enum`{.interpreted-text role="pydoc"}
-   `435`{.interpreted-text role="pep"} \-- Adding an Enum type to the
    Python standard library
-   [flufl.enum](http://pythonhosted.org/flufl.enum/) \-- The original
    inspiration for `enum`, by Barry Warsaw.
:::
