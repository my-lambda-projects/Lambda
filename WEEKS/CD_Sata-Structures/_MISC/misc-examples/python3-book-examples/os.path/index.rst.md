os.path \-\-- Platform-independent Manipulation of Filenames
============================================================

::: {.module synopsis="Platform-independent manipulation of filenames."}
os.path
:::

Purpose

:   Parse, build, test, and otherwise work on filenames and paths.

Writing code to work with files on multiple platforms is easy using the
functions included in the `os.path` module. Even programs not intended
to be ported between platforms should use `os.path` for reliable
filename parsing.

Parsing Paths
-------------

The first set of functions in `os.path` can be used to parse strings
representing filenames into their component parts. It is important to
realize that these functions do not depend on the paths actually
existing; they operate solely on the strings.

Path parsing depends on a few variable defined in `os`{.interpreted-text
role="mod"}:

-   `os.sep` - The separator between portions of the path (e.g., \"`/`\"
    or \"`\`\").
-   `os.extsep` - The separator between a filename and the file
    \"extension\" (e.g., \"`.`\").
-   `os.pardir` - The path component that means traverse the directory
    tree up one level (e.g., \"`..`\").
-   `os.curdir` - The path component that refers to the current
    directory (e.g., \"`.`\").

The `split()` function breaks the path into two separate parts and
returns a `tuple` with the results. The second element of the `tuple` is
the last component of the path, and the first element is everything that
comes before it.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ospath\_split.py
:::

When the input argument ends in `os.sep`, the last element of the path
is an empty string.

``` {.sourceCode .none}
$ python3 ospath_split.py

 '/one/two/three' : ('/one/two', 'three')
'/one/two/three/' : ('/one/two/three', '')
              '/' : ('/', '')
              '.' : ('', '.')
               '' : ('', '')
```

The `basename()` function returns a value equivalent to the second part
of the `split()` value.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ospath\_basename.py
:::

The full path is stripped down to the last element, whether that refers
to a file or directory. If the path ends in the directory separator
(`os.sep`), the base portion is considered to be empty.

``` {.sourceCode .none}
$ python3 ospath_basename.py

 '/one/two/three' : 'three'
'/one/two/three/' : ''
              '/' : ''
              '.' : '.'
               '' : ''
```

The `dirname()` function returns the first part of the split path:

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ospath\_dirname.py
:::

Combining the results of `basename()` with `dirname()` gives the
original path.

``` {.sourceCode .none}
$ python3 ospath_dirname.py

 '/one/two/three' : '/one/two'
'/one/two/three/' : '/one/two/three'
              '/' : '/'
              '.' : ''
               '' : ''
```

`splitext()` works like `split()`, but divides the path on the extension
separator, rather than the directory separator.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ospath\_splitext.py
:::

Only the last occurrence of `os.extsep` is used when looking for the
extension, so if a filename has multiple extensions the results of
splitting it leaves part of the extension on the prefix.

``` {.sourceCode .none}
$ python3 ospath_splitext.py

       'filename.txt' : ('filename', '.txt')
           'filename' : ('filename', '')
'/path/to/filename.txt' : ('/path/to/filename', '.txt')
                  '/' : ('/', '')
                   '' : ('', '')
  'my-archive.tar.gz' : ('my-archive.tar', '.gz')
      'no-extension.' : ('no-extension', '.')
```

`commonprefix()` takes a list of paths as an argument and returns a
single string that represents a common prefix present in all of the
paths. The value may represent a path that does not actually exist, and
the path separator is not included in the consideration, so the prefix
might not stop on a separator boundary.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ospath\_commonprefix.py
:::

In this example, the common prefix string is `/one/two/three`, even
though one path does not include a directory named `three`.

``` {.sourceCode .none}
$ python3 ospath_commonprefix.py

PATH: /one/two/three/four
PATH: /one/two/threefold
PATH: /one/two/three/

PREFIX: /one/two/three
```

`commonpath()` does honor path separators, and returns a prefix that
does not include partial path values.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ospath\_commonpath.py
:::

Because `"threefold"` does not have a path separator after `"three"` the
common prefix is `/one/two`.

``` {.sourceCode .none}
$ python3 ospath_commonpath.py

PATH: /one/two/three/four
PATH: /one/two/threefold
PATH: /one/two/three/

PREFIX: /one/two
```

Building Paths
--------------

Besides taking existing paths apart, it is frequently necessary to build
paths from other strings. To combine several path components into a
single value, use `join()`:

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ospath\_join.py
:::

If any argument to join begins with `os.sep`, all of the previous
arguments are discarded and the new one becomes the beginning of the
return value.

``` {.sourceCode .none}
$ python3 ospath_join.py

('one', 'two', 'three') : 'one/two/three'
('/', 'one', 'two', 'three') : '/one/two/three'
('/one', '/two', '/three') : '/three'
```

It is also possible to work with paths that include \"variable\"
components that can be expanded automatically. For example,
`expanduser()` converts the tilde (`~`) character to the name of a
user\'s home directory.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ospath\_expanduser.py
:::

If the user\'s home directory cannot be found, the string is returned
unchanged, as with `~nosuchuser` in this example.

``` {.sourceCode .none}
$ python3 ospath_expanduser.py

            '~' : '/Users/dhellmann'
   '~dhellmann' : '/Users/dhellmann'
  '~nosuchuser' : '~nosuchuser'
```

`expandvars()` is more general, and expands any shell environment
variables present in the path.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ospath\_expandvars.py
:::

No validation is performed to ensure that the variable value results in
the name of a file that already exists.

``` {.sourceCode .none}
$ python3 ospath_expandvars.py

/path/to/VALUE
```

Normalizing Paths
-----------------

Paths assembled from separate strings using `join()` or with embedded
variables might end up with extra separators or relative path
components. Use `normpath()` to clean them up:

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ospath\_normpath.py
:::

Path segments made up of `os.curdir` and `os.pardir` are evaluated and
collapsed.

``` {.sourceCode .none}
$ python3 ospath_normpath.py

     'one//two//three' : 'one/two/three'
   'one/./two/./three' : 'one/two/three'
'one/../alt/two/three' : 'alt/two/three'
```

To convert a relative path to an absolute filename, use `abspath()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ospath\_abspath.py
:::

The result is a complete path, starting at the top of the file system
tree.

``` {.sourceCode .none}
$ python3 ospath_abspath.py

                  '.' : '/usr'
                 '..' : '/'
    './one/two/three' : '/usr/one/two/three'
   '../one/two/three' : '/one/two/three'
```

File Times
----------

Besides working with paths, `os.path` includes functions for retrieving
file properties, similar to the ones returned by `os.stat()`:

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ospath\_properties.py
:::

`os.path.getatime()` returns the access time, `os.path.getmtime()`
returns the modification time, and `os.path.getctime()` returns the
creation time. `os.path.getsize()` returns the amount of data in the
file, represented in bytes.

``` {.sourceCode .none}
$ python3 ospath_properties.py

File         : ospath_properties.py
Access time  : Sun Mar 18 16:21:22 2018
Modified time: Fri Nov 11 17:18:44 2016
Change time  : Fri Nov 11 17:18:44 2016
Size         : 481
```

Testing Files
-------------

When a program encounters a path name, it often needs to know whether
the path refers to a file, directory, or symlink and whether it exists.
`os.path` includes functions for testing all of these conditions.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ospath\_tests.py
:::

All of the test functions return boolean values.

``` {.sourceCode .none}
$ ln -s /does/not/exist broken_link
$ python3 ospath_tests.py

File        : 'ospath_tests.py'
Absolute    : False
Is File?    : True
Is Dir?     : False
Is Link?    : False
Mountpoint? : False
Exists?     : True
Link Exists?: True

File        : ''
Absolute    : False
Is File?    : False
Is Dir?     : False
Is Link?    : False
Mountpoint? : False
Exists?     : False
Link Exists?: False

File        : '/'
Absolute    : True
Is File?    : False
Is Dir?     : True
Is Link?    : False
Mountpoint? : True
Exists?     : True
Link Exists?: True

File        : './broken_link'
Absolute    : False
Is File?    : False
Is Dir?     : False
Is Link?    : True
Mountpoint? : False
Exists?     : False
Link Exists?: True
```

::: {.seealso}
-   `os.path`{.interpreted-text role="pydoc"}
-   `Python 2 to 3 porting notes for os.path <porting-os.path>`{.interpreted-text
    role="ref"}
-   `pathlib`{.interpreted-text role="mod"} \-- Paths as objects.
-   `os`{.interpreted-text role="mod"} \-- The `os` module is a parent
    of `os.path`.
-   `time`{.interpreted-text role="mod"} \-- The time module includes
    functions to convert between the representation used by the time
    property functions in `os.path` and easy-to-read strings.
:::
