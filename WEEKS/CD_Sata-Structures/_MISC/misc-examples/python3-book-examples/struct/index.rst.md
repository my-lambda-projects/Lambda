struct \-\-- Binary Data Structures
===================================

::: {.module synopsis="Convert between strings and binary data."}
struct
:::

Purpose

:   Convert between strings and binary data.

The `struct` module includes functions for converting between strings of
bytes and native Python data types such as numbers and strings.

Functions versus Struct Class
-----------------------------

A set of module-level functions is available for working with structured
values, as well as the `Struct` class. Format specifiers are converted
from their string format to a compiled representation, similar to the
way regular expressions are handled. The conversion takes some
resources, so it is typically more efficient to do it once when creating
a `Struct` instance and call methods on the instance instead of using
the module-level functions. All of the following examples use the
`Struct` class.

Packing and Unpacking
---------------------

Structs support *packing* data into strings, and *unpacking* data from
strings using format specifiers made up of characters representing the
type of the data and optional count and endianness indicators. Refer to
the standard library documentation for a complete list of the supported
format specifiers.

In this example, the specifier calls for an integer or long integer
value, a two-byte string, and a floating-point number. The spaces in the
format specifier are included to separate the type indicators, and are
ignored when the format is compiled.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
struct\_pack.py
:::

The example converts the packed value to a sequence of hex bytes for
printing with `binascii.hexlify()`, since some of the characters are
nulls.

``` {.sourceCode .none}
$ python3 struct_pack.py

Original values: (1, b'ab', 2.7)
Format string  : I 2s f
Uses           : 12 bytes
Packed Value   : b'0100000061620000cdcc2c40'
```

Use `unpack()` to extract data from its packed representation.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
struct\_unpack.py
:::

Passing the packed value to `unpack()`, gives basically the same values
back (note the discrepancy in the floating point value).

``` {.sourceCode .none}
$ python3 struct_unpack.py

Unpacked Values: (1, b'ab', 2.700000047683716)
```

Endianness
----------

By default, values are encoded using the native C library notion of
*endianness*. It is easy to override that choice by providing an
explicit endianness directive in the format string.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
struct\_endianness.py
:::

`Byte Order Specifiers for struct`{.interpreted-text role="table"} lists
the byte order specifiers used by `Struct`.

  Code   Meaning
  ------ -----------------
  `@`    Native order
  `=`    Native standard
  `<`    little-endian
  `>`    big-endian
  `!`    Network order

  : Byte Order Specifiers for struct

``` {.sourceCode .none}
$ python3 struct_endianness.py

Original values: (1, b'ab', 2.7)

Format string  : @ I 2s f for native, native
Uses           : 12 bytes
Packed Value   : b'0100000061620000cdcc2c40'
Unpacked Value : (1, b'ab', 2.700000047683716)

Format string  : = I 2s f for native, standard
Uses           : 10 bytes
Packed Value   : b'010000006162cdcc2c40'
Unpacked Value : (1, b'ab', 2.700000047683716)

Format string  : < I 2s f for little-endian
Uses           : 10 bytes
Packed Value   : b'010000006162cdcc2c40'
Unpacked Value : (1, b'ab', 2.700000047683716)

Format string  : > I 2s f for big-endian
Uses           : 10 bytes
Packed Value   : b'000000016162402ccccd'
Unpacked Value : (1, b'ab', 2.700000047683716)

Format string  : ! I 2s f for network
Uses           : 10 bytes
Packed Value   : b'000000016162402ccccd'
Unpacked Value : (1, b'ab', 2.700000047683716)
```

Buffers
-------

Working with binary packed data is typically reserved for
performance-sensitive situations or passing data into and out of
extension modules. These cases can be optimized by avoiding the overhead
of allocating a new buffer for each packed structure. The
`pack_into`{.interpreted-text role="meth"} and
`unpack_from`{.interpreted-text role="meth"} methods support writing to
pre-allocated buffers directly.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
struct\_buffers.py
:::

The `size` attribute of the `Struct` tells us how big the buffer needs
to be.

``` {.sourceCode .none}
$ python3 struct_buffers.py

Original: (1, b'ab', 2.7)

ctypes string buffer
Before  : b'000000000000000000000000'
After   : b'0100000061620000cdcc2c40'
Unpacked: (1, b'ab', 2.700000047683716)

array
Before  : b'000000000000000000000000'
After   : b'0100000061620000cdcc2c40'
Unpacked: (1, b'ab', 2.700000047683716)
```

::: {.seealso}
-   `struct`{.interpreted-text role="pydoc"}
-   `Python 2 to 3 porting notes for struct <porting-struct>`{.interpreted-text
    role="ref"}
-   `array`{.interpreted-text role="mod"} \-- The `array` module, for
    working with sequences of fixed-type values.
-   `binascii`{.interpreted-text role="mod"} \-- The `binascii` module,
    for producing ASCII representations of binary data.
-   [WikiPedia: Endianness](https://en.wikipedia.org/wiki/Endianness)
    \-- Explanation of byte order and endianness in encoding.
:::
