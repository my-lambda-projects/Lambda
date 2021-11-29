json \-\-- JavaScript Object Notation
=====================================

::: {.module synopsis="JavaScript Object Notation Serializer"}
json
:::

Purpose

:   Encode Python objects as JSON strings, and decode JSON strings into
    Python objects.

The `json` module provides an API similar to `pickle`{.interpreted-text
role="mod"} for converting in-memory Python objects to a serialized
representation known as JavaScript Object Notation (JSON). Unlike
pickle, JSON has the benefit of having implementations in many languages
(especially JavaScript). It is most widely used for communicating
between the web server and client in a REST API, but is also useful for
other inter-application communication needs.

Encoding and Decoding Simple Data Types
---------------------------------------

The encoder understands Python\'s native types by default (`str`, `int`,
`float`, `list`, `tuple`, and `dict`).

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
json\_simple\_types.py
:::

Values are encoded in a manner superficially similar to Python\'s
`repr()` output.

``` {.sourceCode .none}
$ python3 json_simple_types.py

DATA: [{'a': 'A', 'b': (2, 4), 'c': 3.0}]
JSON: [{"a": "A", "b": [2, 4], "c": 3.0}]
```

Encoding, then re-decoding may not give exactly the same type of object.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
json\_simple\_types\_decode.py
:::

In particular, tuples become lists.

``` {.sourceCode .none}
$ python3 json_simple_types_decode.py

DATA   : [{'a': 'A', 'b': (2, 4), 'c': 3.0}]
ENCODED: [{"a": "A", "b": [2, 4], "c": 3.0}]
DECODED: [{'a': 'A', 'b': [2, 4], 'c': 3.0}]
ORIGINAL: <class 'tuple'>
DECODED : <class 'list'>
```

Human-consumable vs. Compact Output
-----------------------------------

Another benefit of JSON over `pickle`{.interpreted-text role="mod"} is
that the results are human-readable. The `dumps()` function accepts
several arguments to make the output even nicer. For example, the
`sort_keys` flag tells the encoder to output the keys of a dictionary in
sorted, instead of random, order.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
json\_sort\_keys.py
:::

Sorting makes it easier to scan the results by eye, and also makes it
possible to compare JSON output in tests.

``` {.sourceCode .none}
$ python3 json_sort_keys.py

DATA: [{'a': 'A', 'b': (2, 4), 'c': 3.0}]
JSON: [{"a": "A", "b": [2, 4], "c": 3.0}]
SORT: [{"a": "A", "b": [2, 4], "c": 3.0}]
UNSORTED MATCH: True
SORTED MATCH  : True
```

For highly-nested data structures, specify a value for `indent` so the
output is formatted nicely as well.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
json\_indent.py
:::

When indent is a non-negative integer, the output more closely resembles
that of `pprint`{.interpreted-text role="mod"}, with leading spaces for
each level of the data structure matching the indent level.

``` {.sourceCode .none}
$ python3 json_indent.py

DATA: [{'a': 'A', 'b': (2, 4), 'c': 3.0}]
NORMAL: [{"a": "A", "b": [2, 4], "c": 3.0}]
INDENT: [
  {
    "a": "A",
    "b": [
      2,
      4
    ],
    "c": 3.0
  }
]
```

Verbose output like this increases the number of bytes needed to
transmit the same amount of data, however, so it is not intended for use
in a production environment. In fact, it is possible to adjust the
settings for separating data in the encoded output to make it even more
compact than the default.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
json\_compact\_encoding.py
:::

The `separators` argument to `dumps()` should be a tuple containing the
strings to separate items in a list and keys from values in a
dictionary. The default is `(', ', ': ')`. By removing the whitespace, a
more compact output is produced.

``` {.sourceCode .none}
$ python3 json_compact_encoding.py

DATA: [{'a': 'A', 'b': (2, 4), 'c': 3.0}]
repr(data)             : 35
dumps(data)            : 35
dumps(data, indent=2)  : 73
dumps(data, separators): 29
```

Encoding Dictionaries
---------------------

The JSON format expects the keys to a dictionary to be strings. Trying
to encode a dictionary with non-string types as keys produces a
`TypeError`. One way to work around that limitation is to tell the
encoder to skip over non-string keys using the `skipkeys` argument:

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
json\_skipkeys.py
:::

Rather than raising an exception, the non-string key is ignored.

``` {.sourceCode .none}
$ python3 json_skipkeys.py

First attempt
ERROR: keys must be str, int, float, bool or None, not tuple

Second attempt
[{"a": "A", "b": [2, 4], "c": 3.0}]
```

Working with Custom Types
-------------------------

All of the examples so far have used Pythons built-in types because
those are supported by `json` natively. It is common to need to encode
custom classes, as well, and there are two ways to do that.

Given this class to encode:

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
json\_myobj.py
:::

The simple way of encoding a `MyObj` instance is to define a function to
convert an unknown type to a known type. It does not need to do the
encoding, so it should just convert one object to another.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
json\_dump\_default.py
:::

In `convert_to_builtin_type()`, instances of classes not recognized by
`json` are converted to dictionaries with enough information to
re-create the object if a program has access to the Python modules
necessary.

``` {.sourceCode .none}
$ python3 json_dump_default.py

First attempt
ERROR: Object of type MyObj is not JSON serializable

With default
default( <MyObj(instance value goes here)> )
{"__class__": "MyObj", "__module__": "json_myobj", "s": "instance
value goes here"}
```

To decode the results and create a `MyObj()` instance, use the
`object_hook` argument to `loads()` to tie in to the decoder so the
class can be imported from the module and used to create the instance.

The `object_hook` is called for each dictionary decoded from the
incoming data stream, providing a chance to convert the dictionary to
another type of object. The hook function should return the object the
calling application should receive instead of the dictionary.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
json\_load\_object\_hook.py
:::

Since `json` converts string values to unicode objects, they need to be
re-encoded as ASCII strings before they can be used as keyword arguments
to the class constructor.

``` {.sourceCode .none}
$ python3 json_load_object_hook.py

MODULE: json_myobj
CLASS: <class 'json_myobj.MyObj'>
INSTANCE ARGS: {'s': 'instance value goes here'}
[<MyObj(instance value goes here)>]
```

Similar hooks are available for the built-in types integers
(`parse_int`), floating point numbers (`parse_float`), and constants
(`parse_constant`).

Encoder and Decoder Classes
---------------------------

Besides the convenience functions already covered, the `json` module
provides classes for encoding and decoding. Using the classes directly
gives access to extra APIs for customizing their behavior.

The `JSONEncoder` uses an iterable interface for producing \"chunks\" of
encoded data, making it easier to write to files or network sockets
without having to represent an entire data structure in memory.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
json\_encoder\_iterable.py
:::

The output is generated in logical units, rather than being based on any
size value.

``` {.sourceCode .none}
$ python3 json_encoder_iterable.py

PART: [
PART: {
PART: "a"
PART: : 
PART: "A"
PART: , 
PART: "b"
PART: : 
PART: [2
PART: , 4
PART: ]
PART: , 
PART: "c"
PART: : 
PART: 3.0
PART: }
PART: ]
```

The `encode()` method is basically equivalent to
`''.join(encoder.iterencode())`, with some extra error checking up
front.

To encode arbitrary objects, override the `default()` method with an
implementation similar to the one used in `convert_to_builtin_type()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
json\_encoder\_default.py
:::

The output is the same as the previous implementation.

``` {.sourceCode .none}
$ python3 json_encoder_default.py

<MyObj(internal data)>
default( <MyObj(internal data)> )
{"__class__": "MyObj", "__module__": "json_myobj", "s": "internal
data"}
```

Decoding text, then converting the dictionary into an object takes a
little more work to set up than the previous implementation, but not
much.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
json\_decoder\_object\_hook.py
:::

And the output is the same as the earlier example.

``` {.sourceCode .none}
$ python3 json_decoder_object_hook.py

MODULE: json_myobj
CLASS: <class 'json_myobj.MyObj'>
INSTANCE ARGS: {'s': 'instance value goes here'}
[<MyObj(instance value goes here)>]
```

Working with Streams and Files
------------------------------

All of the examples so far have assumed that the encoded version of the
entire data structure could be held in memory at one time. With large
data structures, it may be preferable to write the encoding directly to
a file-like object. The convenience functions `load()` and `dump()`
accept references to a file-like object to use for reading or writing.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
json\_dump\_file.py
:::

A socket or normal file handle would work the same way as the `StringIO`
buffer used in this example.

``` {.sourceCode .none}
$ python3 json_dump_file.py

[{"a": "A", "b": [2, 4], "c": 3.0}]
```

Although it is not optimized to read only part of the data at a time,
the `load()` function still offers the benefit of encapsulating the
logic of generating objects from stream input.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
json\_load\_file.py
:::

Just as for `dump()`, any file-like object can be passed to `load()`.

``` {.sourceCode .none}
$ python3 json_load_file.py

[{'a': 'A', 'c': 3.0, 'b': [2, 4]}]
```

Mixed Data Streams
------------------

`JSONDecoder` includes `raw_decode()`, a method for decoding a data
structure followed by more data, such as JSON data with trailing text.
The return value is the object created by decoding the input data, and
an index into that data indicating where decoding left off.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
json\_mixed\_data.py
:::

Unfortunately, this only works if the object appears at the beginning of
the input.

``` {.sourceCode .none}
$ python3 json_mixed_data.py

JSON first:
Object              : [{'a': 'A', 'c': 3.0, 'b': [2, 4]}]
End of parsed input : 35
Remaining text      : ' This text is not JSON.'

JSON embedded:
ERROR: Expecting value: line 1 column 1 (char 0)
```

JSON at the Command Line
------------------------

The `json.tool` module implements a command line program for
reformatting JSON data to be easier to read.

::: {.literalinclude}
example.json
:::

The input file `example.json` contains a mapping with the keys out of
alphabetical order. The first example below shows the data reformatted
in order, and the second example uses `--sort-keys` to sort the mapping
keys before printing the output.

``` {.sourceCode .none}
$ python3 -m json.tool example.json

[
    {
        "a": "A",
        "c": 3.0,
        "b": [
            2,
            4
        ]
    }
]

$ python3 -m json.tool --sort-keys example.json

[
    {
        "a": "A",
        "b": [
            2,
            4
        ],
        "c": 3.0
    }
]
```

::: {.seealso}
-   `json`{.interpreted-text role="pydoc"}
-   `Python 2 to 3 porting notes for json <porting-json>`{.interpreted-text
    role="ref"}
-   [JavaScript Object Notation](http://json.org/) \-- JSON home, with
    documentation and implementations in other languages.
-   [jsonpickle](http://code.google.com/p/jsonpickle/) \--`jsonpickle`
    allows for any Python object to be serialized into JSON.
:::
