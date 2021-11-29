Memory Management and Limits {#sys-limits}
============================

`sys` includes several functions for understanding and controlling
memory usage.

Reference Counts
----------------

The primary implementation of Python (CPython) uses *reference counting*
and *garbage collection* for automatic memory management. An object is
automatically marked to be collected when its reference count drops to
zero. To examine the reference count of an existing object, use
`getrefcount()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_getrefcount.py
:::

The value reported is actually one higher than expected because there is
a temporary reference to the object held by `getrefcount()` itself.

``` {.sourceCode .none}
$ python3 sys_getrefcount.py

At start         : 2
Second reference : 3
After del        : 2
```

::: {.seealso}
-   `gc`{.interpreted-text role="mod"} \-- Control the garbage collector
    via the functions exposed in `gc`.
:::

Object Size
-----------

Knowing how many references an object has may help find cycles or a
memory leak, but it is not enough to determine what objects are
consuming the *most* memory. That requires knowledge about how big
objects are.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_getsizeof.py
:::

`getsizeof()` reports the size of an object in bytes.

``` {.sourceCode .none}
$ python3 sys_getsizeof.py

      list : 64
     tuple : 48
      dict : 240
       str : 50
       str : 55
     bytes : 38
       int : 28
     float : 24
      type : 1056
   MyClass : 56
```

The reported size for a custom class does not include the size of the
attribute values.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_getsizeof\_object.py
:::

This can give a false impression of the amount of memory being consumed.

``` {.sourceCode .none}
$ python3 sys_getsizeof_object.py

WithoutAttributes: 56
WithAttributes: 56
```

For a more complete estimate of the space used by a class, provide a
`__sizeof__()` method to compute the value by aggregating the sizes of
attributes of an object.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_getsizeof\_custom.py
:::

This version adds the base size of the object to the sizes of all of the
attributes stored in the internal `__dict__`.

``` {.sourceCode .none}
$ python3 sys_getsizeof_custom.py

156
```

Recursion
---------

Allowing infinite recursion in a Python application may introduce a
stack overflow in the interpreter itself, leading to a crash. To
eliminate this situation, the interpreter provides a way to control the
maximum recursion depth using `setrecursionlimit()` and
`getrecursionlimit()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_recursionlimit.py
:::

Once the stack size reaches the recursion limit, the interpreter raises
a `RuntimeError` exception so the program has an opportunity to handle
the situation.

``` {.sourceCode .none}
$ python3 sys_recursionlimit.py

Initial limit: 1000
Modified limit: 10
generate_recursion_error(1)
generate_recursion_error(2)
generate_recursion_error(3)
generate_recursion_error(4)
generate_recursion_error(5)
generate_recursion_error(6)
generate_recursion_error(7)
generate_recursion_error(8)
Caught exception: maximum recursion depth exceeded while calling
a Python object
```

Maximum Values
--------------

Along with the runtime configurable values, `sys` includes variables
defining the maximum values for types that vary from system to system.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_maximums.py
:::

`maxsize` is the maximum size of a list, dictionary, string, or other
data structure dictated by the C interpreter\'s size type. `maxunicode`
is the largest integer Unicode point supported by the interpreter as
currently configured.

``` {.sourceCode .none}
$ python3 sys_maximums.py

maxsize   : 9223372036854775807
maxunicode: 1114111
```

Floating Point Values
---------------------

The structure `float_info` contains information about the floating-point
type representation used by the interpreter, based on the underlying
system\'s :c`float`{.interpreted-text role="type"} implementation.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_float\_info.py
:::

These values depend on the compiler and underlying system. These
examples were produced on OS X 10.9.5 on an Intel Core i7.

``` {.sourceCode .none}
$ python3 sys_float_info.py

Smallest difference (epsilon): 2.220446049250313e-16

Digits (dig)              : 15
Mantissa digits (mant_dig): 53

Maximum (max): 1.7976931348623157e+308
Minimum (min): 2.2250738585072014e-308

Radix of exponents (radix): 2

Maximum exponent for radix (max_exp): 1024
Minimum exponent for radix (min_exp): -1021

Max. exponent power of 10 (max_10_exp): 308
Min. exponent power of 10 (min_10_exp): -307

Rounding for addition (rounds): 1
```

::: {.seealso}
-   The `float.h` C header file for the local compiler contains more
    details about these settings.
:::

Integer Values
--------------

The structure `int_info` holds information about the internal
representation of integers used by the interpreter.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_int\_info.py
:::

These examples were produced on OS X 10.9.5 on an Intel Core i7.

``` {.sourceCode .none}
$ python3 sys_int_info.py

Number of bits used to hold each digit: 30
Size in bytes of C type used to hold each digit: 4
```

The C type used to store integers internally is determined when the
interpreter is built. 64-bit architectures automatically use 30-bit
integers by default, and they can be enabled for 32-bit architectures
with the configuration flag `--enable-big-digits`.

::: {.seealso}
-   [Build and C API
    Changes](https://docs.python.org/3.1/whatsnew/3.1.html#build-and-c-api-changes)
    from *What\'s New in Python 3.1*
:::

Byte Ordering
-------------

`byteorder` is set to the native byte order.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_byteorder.py
:::

The value is either `big` for big-endian or `little` for little-endian.

``` {.sourceCode .none}
$ python3 sys_byteorder.py

little
```

::: {.seealso}
-   [Wikipedia: Endianness](https://en.wikipedia.org/wiki/Byte_order)
    \-- Description of big and little endian memory systems.
-   `array`{.interpreted-text role="mod"} and `struct`{.interpreted-text
    role="mod"} \-- Other modules that depend on the byte order of data.
-   

    `float.h` \-- The C header file for the local compiler contains

    :   more details about these settings.
:::
