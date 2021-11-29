tempfile \-\-- Temporary File System Objects
============================================

::: {.module synopsis="Temporary file system objects"}
tempfile
:::

Purpose

:   Create temporary file system objects.

Creating temporary files with unique names securely, so they cannot be
guessed by someone wanting to break the application or steal the data,
is challenging. The `tempfile` module provides several functions for
creating temporary file system resources securely. `TemporaryFile()`
opens and returns an unnamed file, `NamedTemporaryFile()` opens and
returns a named file, `SpooledTemporaryFile` holds its content in memory
before writing to disk, and `TemporaryDirectory` is a context manager
that removes the directory when the context is closed.

Temporary Files
---------------

Applications that need temporary files to store data, without needing to
share that file with other programs, should use the `TemporaryFile()`
function to create the files. The function creates a file, and on
platforms where it is possible, unlinks it immediately. This makes it
impossible for another program to find or open the file, since there is
no reference to it in the file system table. The file created by
`TemporaryFile()` is removed automatically when it is closed, whether by
calling `close()` or by using the context manager API and `with`
statement.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tempfile\_TemporaryFile.py
:::

This example illustrates the difference in creating a temporary file
using a common pattern for making up a name, versus using the
`TemporaryFile()` function. The file returned by `TemporaryFile()` has
no name.

``` {.sourceCode .none}
$ python3 tempfile_TemporaryFile.py

Building a filename with PID:
temp:
  <_io.BufferedRandom name='/tmp/guess_my_name.12151.txt'>
temp.name:
  '/tmp/guess_my_name.12151.txt'

TemporaryFile:
temp:
  <_io.BufferedRandom name=4>
temp.name:
  4
```

By default, the file handle is created with mode `'w+b'` so it behaves
consistently on all platforms and the caller can write to it and read
from it.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tempfile\_TemporaryFile\_binary.py
:::

After writing, the file handle must be \"rewound\" using `seek()` in
order to read the data back from it.

``` {.sourceCode .none}
$ python3 tempfile_TemporaryFile_binary.py

b'Some data'
```

To open the file in text mode, set `mode` to `'w+t'` when the file is
created.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tempfile\_TemporaryFile\_text.py
:::

The file handle treats the data as text.

``` {.sourceCode .none}
$ python3 tempfile_TemporaryFile_text.py

first
second
```

Named Files
-----------

There are situations where having a named temporary file is important.
For applications spanning multiple processes, or even hosts, naming the
file is the simplest way to pass it between parts of the application.
The `NamedTemporaryFile()` function creates a file without unlinking it,
so it retains its name (accessed with the `name`{.interpreted-text
role="attr"} attribute).

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tempfile\_NamedTemporaryFile.py
:::

The file is removed after the handle is closed.

``` {.sourceCode .none}
$ python3 tempfile_NamedTemporaryFile.py

temp:
  <tempfile._TemporaryFileWrapper object at 0x1011b2d30>
temp.name:
  '/var/folders/5q/8gk0wq888xlggz008k8dr7180000hg/T/tmps4qh5zde'
Exists after close: False
```

Spooled Files
-------------

For temporary files containing relatively small amounts of data, it is
likely to be more efficient to use a `SpooledTemporaryFile` because it
holds the file contents in memory using a `io.BytesIO` or `io.StringIO`
buffer until they reach a threshold size. When the amount of data passes
the threshold, it is \"rolled over\" and written to disk, and then the
buffer is replaced with a normal `TemporaryFile()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tempfile\_SpooledTemporaryFile.py
:::

This example uses private attributes of the `SpooledTemporaryFile` to
determine when the rollover to disk has happened. It is not normally
necessary to check this status except when tuning the buffer size.

``` {.sourceCode .none}
$ python3 tempfile_SpooledTemporaryFile.py

temp: <tempfile.SpooledTemporaryFile object at 0x1007b2c88>
False <_io.StringIO object at 0x1007a3d38>
False <_io.StringIO object at 0x1007a3d38>
True <_io.TextIOWrapper name=4 mode='w+t' encoding='utf-8'>
```

To explicitly cause the buffer to be written to disk, call the
`rollover()` or `fileno()` methods.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tempfile\_SpooledTemporaryFile\_explicit.py
:::

In this example, because the buffer size is so much larger than the
amount of data, no file would be created on disk except that
`rollover()` was called.

``` {.sourceCode .none}
$ python3 tempfile_SpooledTemporaryFile_explicit.py

temp: <tempfile.SpooledTemporaryFile object at 0x1007b2c88>
False <_io.StringIO object at 0x1007a3d38>
False <_io.StringIO object at 0x1007a3d38>
False <_io.StringIO object at 0x1007a3d38>
rolling over
True <_io.TextIOWrapper name=4 mode='w+t' encoding='utf-8'>
```

Temporary Directories
---------------------

When several temporary files are needed, it may be more convenient to
create a single temporary directory with `TemporaryDirectory` and open
all of the files in that directory.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tempfile\_TemporaryDirectory.py
:::

The context manager produces the name of the directory, which can then
be used within the context block to build other file names.

``` {.sourceCode .none}
$ python3 tempfile_TemporaryDirectory.py

/var/folders/5q/8gk0wq888xlggz008k8dr7180000hg/T/tmp_urhiioj
Directory exists after? False
Contents after: []
```

Predicting Names
----------------

While less secure than strictly anonymous temporary files, including a
predictable portion in the name makes it possible to find the file and
examine it for debugging purposes. All of the functions described so far
take three arguments to control the filenames to some degree. Names are
generated using the formula:

``` {.sourceCode .none}
dir + prefix + random + suffix
```

All of the values except `random` can be passed as arguments to the
functions for creating temporary files or directories.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tempfile\_NamedTemporaryFile\_args.py
:::

The `prefix` and `suffix` arguments are combined with a random string of
characters to build the filename, and the `dir` argument is taken as-is
and used as the location of the new file.

``` {.sourceCode .none}
$ python3 tempfile_NamedTemporaryFile_args.py

temp:
   <tempfile._TemporaryFileWrapper object at 0x1018b2d68>
temp.name:
   /tmp/prefix_q6wd5czl_suffix
```

Temporary File Location
-----------------------

If an explicit destination is not given using the `dir` argument, the
path used for the temporary files will vary based on the current
platform and settings. The `tempfile` module includes two functions for
querying the settings being used at runtime.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tempfile\_settings.py
:::

`gettempdir()` returns the default directory that will hold all of the
temporary files and `gettempprefix()` returns the string prefix for new
file and directory names.

``` {.sourceCode .none}
$ python3 tempfile_settings.py

gettempdir(): /var/folders/5q/8gk0wq888xlggz008k8dr7180000hg/T
gettempprefix(): tmp
```

The value returned by `gettempdir()` is set based on a straightforward
algorithm of looking through a list of locations for the first place the
current process can create a file. The search list is:

1.  The environment variable `TMPDIR`
2.  The environment variable `TEMP`
3.  The environment variable `TMP`
4.  A fallback, based on the platform. (Windows uses the first available
    of `C:\temp`, `C:\tmp`, `\temp`, or `\tmp`. Other platforms use
    `/tmp`, `/var/tmp`, or `/usr/tmp`.)
5.  If no other directory can be found, the current working directory is
    used.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tempfile\_tempdir.py
:::

Programs that need to use a global location for all temporary files
without using any of these environment variables should set
`tempfile.tempdir` directly by assigning a value to the variable.

``` {.sourceCode .none}
$ python3 tempfile_tempdir.py

gettempdir(): /I/changed/this/path
```

::: {.seealso}
-   `tempfile`{.interpreted-text role="pydoc"}
-   `random`{.interpreted-text role="mod"} \-- Psuedorandom number
    generators, used to introduce random values into temporary file
    names
:::
