tarfile \-\-- Tar Archive Access
================================

::: {.module synopsis="Tar archive access"}
tarfile
:::

Purpose

:   Tar archive access.

The `tarfile` module provides read and write access to Unix tar
archives, including compressed files. In addition to the POSIX
standards, several GNU tar extensions are supported. Unix special file
types such as hard and soft links, and device nodes are also handled.

::: {.note}
::: {.admonition-title}
Note
:::

Although `tarfile` implements a Unix format, it can be used to create
and read tar archives under Microsoft Windows, too.
:::

Testing Tar Files
-----------------

The `is_tarfile()` function returns a boolean indicating whether or not
the filename passed as an argument refers to a valid tar archive.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tarfile\_is\_tarfile.py
:::

If the file does not exist, `is_tarfile()` raises an `IOError`.

``` {.sourceCode .none}
$ python3 tarfile_is_tarfile.py

     README.txt  False
    example.tar  True
bad_example.tar  False
   notthere.tar  [Errno 2] No such file or directory:
'notthere.tar'
```

Reading Metadata from an Archive
--------------------------------

Use the `TarFile` class to work directly with a tar archive. It supports
methods for reading data about existing archives as well as modifying
the archives by adding additional files.

To read the names of the files in an existing archive, use `getnames()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tarfile\_getnames.py
:::

The return value is a list of strings with the names of the archive
contents.

``` {.sourceCode .none}
$ python3 tarfile_getnames.py

['index.rst', 'README.txt']
```

In addition to names, metadata about the archive members is available as
instances of `TarInfo` objects.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tarfile\_getmembers.py
:::

Load the metadata via `getmembers()` and `getmember()`.

``` {.sourceCode .none}
$ python3 tarfile_getmembers.py

index.rst
  Modified: Fri Aug 19 16:27:54 2016
  Mode    : 0o644
  Type    : b'0'
  Size    : 9878 bytes

README.txt
  Modified: Fri Aug 19 16:27:54 2016
  Mode    : 0o644
  Type    : b'0'
  Size    : 75 bytes
```

If the name of the archive member is known in advance, its `TarInfo`
object can be retrieved with `getmember()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tarfile\_getmember.py
:::

If the archive member is not present, `getmember()` raises a `KeyError`.

``` {.sourceCode .none}
$ python3 tarfile_getmember.py

README.txt is 75 bytes
ERROR: Did not find notthere.txt in tar archive
```

Extracting Files from an Archive
--------------------------------

To access the data from an archive member within a program, use the
`extractfile()` method, passing the member\'s name.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tarfile\_extractfile.py
:::

The return value is a file-like object from which the contents of the
archive member can be read.

``` {.sourceCode .none}
$ python3 tarfile_extractfile.py

README.txt :
The examples for the tarfile module use this file and
example.tar as data.

ERROR: Did not find notthere.txt in tar archive
```

To unpack the archive and write the files to the file system, use
`extract()` or `extractall()` instead.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tarfile\_extract.py
:::

The member or members are read from the archive and written to the file
system, starting in the directory named in the arguments.

``` {.sourceCode .none}
$ python3 tarfile_extract.py

['README.txt']
```

The standard library documentation includes a note stating that
`extractall()` is safer than `extract()`, especially for working with
streaming data where rewinding to read an earlier part of the input is
not possible, and it should be used in most cases.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tarfile\_extractall.py
:::

With `extractall()`, the first argument is the name of the directory
where the files should be written.

``` {.sourceCode .none}
$ python3 tarfile_extractall.py

['README.txt', 'index.rst']
```

To extract specific files from the archive, pass their names or
`TarInfo` metadata containers to `extractall()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tarfile\_extractall\_members.py
:::

When a `members` list is provided, only the named files are extracted.

``` {.sourceCode .none}
$ python3 tarfile_extractall_members.py

['README.txt']
```

Creating New Archives
---------------------

To create a new archive, open the `TarFile` with a mode of `'w'`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tarfile\_add.py
:::

Any existing file is truncated and a new archive is started. To add
files, use the `add()` method.

``` {.sourceCode .none}
$ python3 tarfile_add.py

creating archive
adding README.txt

Contents:
README.txt
```

Using Alternate Archive Member Names
------------------------------------

It is possible to add a file to an archive using a name other than the
original filename by constructing a `TarInfo` object with an alternate
`arcname` and passing it to `addfile()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tarfile\_addfile.py
:::

The archive includes only the changed filename:

``` {.sourceCode .none}
$ python3 tarfile_addfile.py

creating archive
adding README.txt as RENAMED.txt

Contents:
RENAMED.txt
```

Writing Data from Sources Other Than Files
------------------------------------------

Sometimes it is necessary to write data into an archive directly from
memory. Rather than writing the data to a file, then adding that file to
the archive, you can use `addfile()` to add data from an open file-like
handle that returns bytes.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tarfile\_addfile\_string.py
:::

By first constructing a `TarInfo` object, the archive member can be
given any name desired. After setting the size, the data is written to
the archive using `addfile()` and a `BytesIO`{.interpreted-text
role="mod"} buffer as a source of the data.

``` {.sourceCode .none}
$ python3 tarfile_addfile_string.py

Contents:
made_up_file.txt
This is the data to write to the archive.
```

Appending to Archives
---------------------

In addition to creating new archives, it is possible to append to an
existing file by using mode `'a'`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tarfile\_append.py
:::

The resulting archive ends up with two members:

``` {.sourceCode .none}
$ python3 tarfile_append.py

creating archive
contents:
['README.txt']
adding index.rst
contents:
['README.txt', 'index.rst']
```

Working with Compressed Archives
--------------------------------

Besides regular tar archive files, the `tarfile` module can work with
archives compressed via the gzip or bzip2 protocols. To open a
compressed archive, modify the mode string passed to `open()` to include
`":gz"` or `":bz2"`, depending on the desired compression method.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
tarfile\_compression.py
:::

When opening an existing archive for reading, specify `"r:*"` to have
`tarfile` determine the compression method to use automatically.

``` {.sourceCode .none}
$ python3 tarfile_compression.py

FILENAME                       SIZE      
README.txt                     75        
tarfile_compression.tar        10240      ['README.txt']
tarfile_compression.tar.gz     213        ['README.txt']
tarfile_compression.tar.bz2    199        ['README.txt']
```

::: {.seealso}
-   `tarfile`{.interpreted-text role="pydoc"}
-   [GNU tar
    manual](http://www.gnu.org/software/tar/manual/html_node/Standard.html)
    \-- Documentation of the tar format, including extensions.
-   `zipfile`{.interpreted-text role="mod"} \-- Similar access for ZIP
    archives.
-   `gzip`{.interpreted-text role="mod"} \-- GNU zip compression
-   `bz2`{.interpreted-text role="mod"} \-- bzip2 compression
:::
