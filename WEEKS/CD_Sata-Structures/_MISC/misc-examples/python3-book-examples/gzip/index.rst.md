gzip \-\-- Read and Write GNU zip Files
=======================================

::: {.module synopsis="Read and write gzip files"}
gzip
:::

Purpose

:   Read and write gzip files.

The `gzip` module provides a file-like interface to GNU zip files, using
`zlib`{.interpreted-text role="mod"} to compress and uncompress the
data.

Writing Compressed Files
------------------------

The module-level function `open()` creates an instance of the file-like
class `GzipFile`. The usual methods for writing and reading bytes are
provided.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
gzip\_write.py
:::

To write data into a compressed file, open the file with mode `'wb'`.
This example wraps the `GzipFile` with a `TextIOWrapper` from the
`io`{.interpreted-text role="mod"} module to encode Unicode text to
bytes suitable for compression.

``` {.sourceCode .none}
$ python3 gzip_write.py

application/x-gzip; charset=binary
example.txt.gz contains 75 bytes
```

Different amounts of compression can be used by passing a
`compresslevel` argument. Valid values range from 0 to 9, inclusive.
Lower values are faster and result in less compression. Higher values
are slower and compress more, up to a point.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
gzip\_compresslevel.py
:::

The center column of numbers in the output shows the size in bytes of
the files produced by compressing the input. For this input data, the
higher compression values do not necessarily pay off in decreased
storage space. Results will vary, depending on the input data.

``` {.sourceCode .none}
$ python3 gzip_compresslevel.py

Level  Size        Checksum
-----  ----------  ---------------------------------
data       754688  e4c0f9433723971563f08a458715119c
    0      754793  ced7189c324eb73a8388492a9024d391
    1        9846  5356d357f23e0d5b6d85e920929f0e43
    2        8267  8ce46bce238edc095e47e941cebad93d
    3        8227  91662517459db94a744671a6b4295b67
    4        4167  ad304e3aec585640de9f14306fb32083
    5        4167  4381a5d6dff4dd2746387f20411dcfcd
    6        4167  ef3a05112ea382abb53bc4a5bee3a52a
    7        4167  4723a253d1dc8ddecd4ff7b7adf0bc0b
    8        4167  0e1aeba7bdc39f0007039f130d9a28b2
    9        4167  eccf47c4c4f1cca3274e57a1b9b9ddd2
```

A `GzipFile` instance also includes a `writelines()` method that can be
used to write a sequence of strings.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
gzip\_writelines.py
:::

As with a regular file, the input lines need to include a newline
character.

``` {.sourceCode .none}
$ python3 gzip_writelines.py

The same line, over and over.
The same line, over and over.
The same line, over and over.
The same line, over and over.
The same line, over and over.
The same line, over and over.
The same line, over and over.
The same line, over and over.
The same line, over and over.
The same line, over and over.
```

Reading Compressed Data
-----------------------

To read data back from previously compressed files, open the file with
binary read mode (`'rb'`) so no text-based translation of line endings
or Unicode decoding is performed.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
gzip\_read.py
:::

This example reads the file written by `gzip_write.py` from the previous
section, using a `TextIOWrapper` to decode the text after it is
decompressed.

``` {.sourceCode .none}
$ python3 gzip_read.py

Contents of the example file go here.
```

While reading a file, it is also possible to seek and read only part of
the data.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
gzip\_seek.py
:::

The `seek()` position is relative to the *uncompressed* data, so the
caller does not need to know that the data file is compressed.

``` {.sourceCode .none}
$ python3 gzip_seek.py

Entire file:
b'Contents of the example file go here.\n'
Starting at position 5 for 10 bytes:
b'nts of the'

True
```

Working with Streams
--------------------

The `GzipFile` class can be used to wrap other types of data streams so
they can use compression as well. This is useful when the data is being
transmitted over a socket or an existing (already open) file handle. A
`BytesIO`{.interpreted-text role="mod"} buffer can also be used.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
gzip\_BytesIO.py
:::

One benefit of using `GzipFile` over `zlib`{.interpreted-text
role="mod"} is that it supports the file API. However, when re-reading
the previously compressed data, an explicit length is passed to
`read()`. Leaving the length off resulted in a CRC error, possibly
because `BytesIO` returned an empty string before reporting EOF. When
working with streams of compressed data, either prefix the data with an
integer representing the actual amount of data to be read or use the
incremental decompression API in `zlib`{.interpreted-text role="mod"}.

``` {.sourceCode .none}
$ python3 gzip_BytesIO.py

UNCOMPRESSED: 300
b'The same line, over and over.\nThe same line, over and over.\nT
he same line, over and over.\nThe same line, over and over.\nThe 
same line, over and over.\nThe same line, over and over.\nThe sam
e line, over and over.\nThe same line, over and over.\nThe same l
ine, over and over.\nThe same line, over and over.\n'
COMPRESSED: 51
b'1f8b080022caae5a02ff0bc94855284ecc4d55c8c9cc4bd551c82f4b2d5248c
c4b0133f4b8424665916401d3e717802c010000'

REREAD: 300
b'The same line, over and over.\nThe same line, over and over.\nT
he same line, over and over.\nThe same line, over and over.\nThe 
same line, over and over.\nThe same line, over and over.\nThe sam
e line, over and over.\nThe same line, over and over.\nThe same l
ine, over and over.\nThe same line, over and over.\n'
```

::: {.seealso}
-   `gzip`{.interpreted-text role="pydoc"}
-   `zlib`{.interpreted-text role="mod"} \-- The `zlib` module is a
    lower-level interface to gzip compression.
-   `zipfile`{.interpreted-text role="mod"} \-- The `zipfile` module
    gives access to ZIP archives.
-   `bz2`{.interpreted-text role="mod"} \-- The `bz2` module uses the
    bzip2 compression format.
-   `tarfile`{.interpreted-text role="mod"} \-- The `tarfile` module
    includes built-in support for reading compressed tar archives.
-   `io`{.interpreted-text role="mod"} \-- Building-blocks for creating
    input and output pipelines.
:::
