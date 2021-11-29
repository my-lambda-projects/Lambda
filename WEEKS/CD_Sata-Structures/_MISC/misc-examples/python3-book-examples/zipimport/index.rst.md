zipimport \-\-- Load Python Code from ZIP Archives {#zipimport-ref}
==================================================

::: {.module synopsis="Load Python code from ZIP archives."}
zipimport
:::

Purpose

:   Import Python modules saved as members of ZIP archives.

The `zipimport` module implements the `zipimporter` class, which can be
used to find and load Python modules inside ZIP archives. The
`zipimporter` supports the import hooks API specified in PEP 302; this
is how Python Eggs work.

It is not usually necessary to use the `zipimport` module directly,
since it is possible to import directly from a ZIP archive as long as
that archive appears in `sys.path`. However, it is instructive to study
how the importer API can be used, to learn the features available and
understand how module importing works. Knowing how the ZIP importer
works will also help debug issues that may come up when distributing
applications packaged as ZIP archives created with `zipfile.PyZipFile`.

Example
-------

These examples reuse some of the code from the discussion of
`zipfile`{.interpreted-text role="mod"} to create an example ZIP archive
containing a few Python modules.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
zipimport\_make\_example.py
:::

Run `zipimport_make_example.py` before any of the rest of the examples
to create a ZIP archive containing all of the modules in the example
directory, along with some test data needed for the examples in this
section.

``` {.sourceCode .none}
$ python3 zipimport_make_example.py

__init__.pyc
example_package/__init__.pyc
zipimport_find_module.pyc
zipimport_get_code.pyc
zipimport_get_data.pyc
zipimport_get_data_nozip.pyc
zipimport_get_data_zip.pyc
zipimport_get_source.pyc
zipimport_is_package.pyc
zipimport_load_module.pyc
zipimport_make_example.pyc
zipimport_get_source.py
example_package/README.txt
```

Finding a Module
----------------

Given the full name of a module, `find_module()` will try to locate that
module inside the ZIP archive.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
zipimport\_find\_module.py
:::

If the module is found, the `zipimporter` instance is returned.
Otherwise, `None` is returned.

``` {.sourceCode .none}
$ python3 zipimport_find_module.py

zipimport_find_module : <zipimporter object
"zipimport_example.zip">
not_there : None
```

Accessing Code
--------------

The `get_code()` method loads the code object for a module from the
archive.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
zipimport\_get\_code.py
:::

The code object is not the same as a `module` object, but is used to
create one.

``` {.sourceCode .none}
$ python3 zipimport_get_code.py

<code object <module> at 0x1012b4ae0, file
"./zipimport_get_code.py", line 6>
```

To load the code as a usable module, use `load_module()` instead.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
zipimport\_load\_module.py
:::

The result is a module object configured as though the code had been
loaded from a regular import.

``` {.sourceCode .none}
$ python3 zipimport_load_module.py

<code object <module> at 0x1007b4c00, file
"./zipimport_get_code.py", line 6>
Name   : zipimport_get_code
Loader : <zipimporter object "zipimport_example.zip">
Code   : <code object <module> at 0x1007b4c00, file
"./zipimport_get_code.py", line 6>
```

Source
------

As with the `inspect`{.interpreted-text role="mod"} module, it is
possible to retrieve the source code for a module from the ZIP archive,
if the archive includes the source. In the case of the example, only
`zipimport_get_source.py` is added to `zipimport_example.zip` (the rest
of the modules are just added as the `.pyc` files).

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
zipimport\_get\_source.py
:::

If the source for a module is not available, `get_source()` returns
`None`.

``` {.sourceCode .none}
$ python3 zipimport_get_source.py

================================================================
zipimport_get_code
================================================================
None

================================================================
zipimport_get_source
================================================================
#!/usr/bin/env python3
#
# Copyright 2007 Doug Hellmann.
#
"""Retrieving the source code for a module within a zip archive.
"""

#end_pymotw_header
import zipimport

modules = [
    'zipimport_get_code',
    'zipimport_get_source',
]

importer = zipimport.zipimporter('zipimport_example.zip')
for module_name in modules:
    source = importer.get_source(module_name)
    print('=' * 80)
    print(module_name)
    print('=' * 80)
    print(source)
    print()
```

Packages
--------

To determine if a name refers to a package instead of a regular module,
use `is_package()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
zipimport\_is\_package.py
:::

In this case, `zipimport_is_package` came from a module and the
`example_package` is a package.

``` {.sourceCode .none}
$ python3 zipimport_is_package.py

zipimport_is_package False
example_package True
```

Data
----

There are times when source modules or packages need to be distributed
with non-code data. Images, configuration files, default data, and test
fixtures are just a few examples of this. Frequently, the module
`__path__` or `__file__` attributes are used to find these data files
relative to where the code is installed.

For example, with a \"normal\" module, the file system path can be
constructed from the `__file__` attribute of the imported package like
this:

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
zipimport\_get\_data\_nozip.py
:::

The output will depend on where the sample code is located on the file
system.

``` {.sourceCode .none}
$ python3 zipimport_get_data_nozip.py

.../example_package/README.txt :
This file represents sample data which could be embedded in the
ZIP archive.  You could include a configuration file, images, or
any other sort of noncode data.
```

If the `example_package` is imported from the ZIP archive instead of the
file system, using `__file__` does not work.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
zipimport\_get\_data\_zip.py
:::

The `__file__` of the package refers to the ZIP archive, and not a
directory, so building up the path to the `README.txt` file gives the
wrong value.

``` {.sourceCode .none}
$ python3 zipimport_get_data_zip.py

zipimport_example.zip/example_package/__init__.pyc
zipimport_example.zip/example_package/README.txt :
Traceback (most recent call last):
  File "zipimport_get_data_zip.py", line 20, in <module>
    print(open(data_filename, 'rt').read())
NotADirectoryError: [Errno 20] Not a directory:
'zipimport_example.zip/example_package/README.txt'
```

A more reliable way to retrieve the file is to use the `get_data()`
method. The `zipimporter` instance that loaded the module can be
accessed through the `__loader__` attribute of the imported module:

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
zipimport\_get\_data.py
:::

`pkgutil.get_data()` uses this interface to access data from within a
package. The value returned is a byte string, which needs to be decoded
to a unicode string before printing.

``` {.sourceCode .none}
$ python3 zipimport_get_data.py

zipimport_example.zip/example_package/__init__.pyc
This file represents sample data which could be embedded in the
ZIP archive.  You could include a configuration file, images, or
any other sort of noncode data.
```

The `__loader__` is not set for modules not imported via `zipimport`.

::: {.seealso}
-   `zipimport`{.interpreted-text role="pydoc"}
-   `Python 2 to 3 porting notes for zipimport <porting-zipimport>`{.interpreted-text
    role="ref"}
-   `imp`{.interpreted-text role="mod"} \-- Other import-related
    functions.
-   `pkgutil`{.interpreted-text role="mod"} \-- Provides a more generic
    interface to `get_data()`.
-   `zipfile`{.interpreted-text role="mod"} \-- Read and write ZIP
    archive files.
-   `302`{.interpreted-text role="pep"} \-- New Import Hooks
:::
