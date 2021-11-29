pyclbr \-\-- Class Browser
==========================

::: {.module synopsis="Class browser"}
pyclbr
:::

Purpose

:   Implements an API suitable for use in a source code editor for
    making a class browser.

`pyclbr` can scan Python source to find classes and stand-alone
functions. The information about class, method, and function names and
line numbers is gathered using `tokenize`{.interpreted-text role="mod"}
*without* importing the code.

The examples in this section use the following source file as input.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
pyclbr\_example.py
:::

Scanning for Classes
--------------------

There are two public functions exposed by `pyclbr`. The first,
`readmodule()`, takes the name of the module as argument returns a
mapping of class names to `Class` objects containing the metadata about
the class source.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
pyclbr\_readmodule.py
:::

The metadata for the class includes the file and line number where it is
defined, as well as the names of super classes. The methods of the class
are saved as a mapping between method name and line number. The output
shows the classes and methods listed in order based on their line number
in the source file.

``` {.sourceCode .none}
$ python3 pyclbr_readmodule.py

Class: Base
  File: pyclbr_example.py [11]
  Method: method1 [15]

Class: Sub1
  File: pyclbr_example.py [19]
  Super classes: ['Base']

Class: Sub2
  File: pyclbr_example.py [24]
  Super classes: ['Base']

Class: Mixin
  File: pyclbr_example.py [29]
  Method: method2 [33]

Class: MixinUser
  File: pyclbr_example.py [37]
  Super classes: ['Sub2', 'Mixin']
  Method: method1 [41]
  Method: method2 [44]
  Method: method3 [47]
```

Scanning for Functions
----------------------

The other public function in `pyclbr` is `readmodule_ex()`. It does
everything that `readmodule()` does, and adds functions to the result
set.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
pyclbr\_readmodule\_ex.py
:::

Each `Function` object has properties much like the `Class` object.

``` {.sourceCode .none}
$ python3 pyclbr_readmodule_ex.py

Function: my_function [51]
```

::: {.seealso}
-   `pyclbr`{.interpreted-text role="pydoc"}
-   `inspect`{.interpreted-text role="mod"} \-- The `inspect` module can
    discover more metadata about classes and functions, but requires
    importing the code.
-   `tokenize`{.interpreted-text role="mod"} \-- The `tokenize` module
    parses Python source code into tokens.
:::
