pkgutil \-\-- Package Utilities
===============================

::: {.module synopsis="Package utilities"}
pkgutil
:::

Purpose

:   Add to the module search path for a specific package and work with
    resources included in a package.

The `pkgutil` module includes functions for changing the import rules
for Python packages and for loading non-code resources from files
distributed within a package.

Package Import Paths
--------------------

The `extend_path()` function is used to modify the search path and
change the way sub-modules are imported from within a package so that
several different directories can be combined as though they are one.
This can be used to override installed versions of packages with
development versions, or to combine platform-specific and shared modules
into a single package namespace.

The most common way to call `extend_path()` is by adding two lines to
the `__init__.py` inside the package.

``` {.sourceCode .none}
import pkgutil
__path__ = pkgutil.extend_path(__path__, __name__)
```

`extend_path()` scans `sys.path` for directories that include a
subdirectory named for the package given as the second argument. The
list of directories is combined with the path value passed as the first
argument and returned as a single list, suitable for use as the package
import path.

An example package called `demopkg`{.interpreted-text role="mod"}
includes two files, `__init__.py` and `shared.py`. The `__init__.py`
file in `demopkg1` contains `print` statements to show the search path
before and after it is modified, to highlight the difference.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
demopkg1/\_\_init\_\_.py
:::

The `extension` directory, with add-on features for
`demopkg`{.interpreted-text role="mod"}, contains three more source
files. There is an `__init__.py` at each directory level, and a
`not_shared.py`.

``` {.sourceCode .none}
$ find extension -name '*.py'

extension/__init__.py
extension/demopkg1/__init__.py
extension/demopkg1/not_shared.py
```

This simple test program imports the `demopkg1`{.interpreted-text
role="mod"} package.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
pkgutil\_extend\_path.py
:::

When this test program is run directly from the command line, the
`not_shared`{.interpreted-text role="mod"} module is not found.

::: {.note}
::: {.admonition-title}
Note
:::

The full file system paths in these examples have been shortened to
emphasize the parts that change.
:::

``` {.sourceCode .none}
$ python3 pkgutil_extend_path.py

demopkg1.__path__ before:
['.../demopkg1']

demopkg1.__path__ after:
['.../demopkg1']

demopkg1           : .../demopkg1/__init__.py
demopkg1.shared    : .../demopkg1/shared.py
demopkg1.not_shared: Not found (No module named 'demopkg1.not_sh
ared')
```

However, if the `extension` directory is added to the `PYTHONPATH` and
the program is run again, different results are produced.

``` {.sourceCode .none}
$ PYTHONPATH=extension python3 pkgutil_extend_path.py

demopkg1.__path__ before:
['.../demopkg1']

demopkg1.__path__ after:
['.../demopkg1',
 '.../extension/demopkg1']

demopkg1           : .../demopkg1/__init__.py
demopkg1.shared    : .../demopkg1/shared.py
demopkg1.not_shared: .../extension/demopkg1/not_shared.py
```

The version of `demopkg1`{.interpreted-text role="mod"} inside the
`extension` directory has been added to the search path, so the
`not_shared`{.interpreted-text role="mod"} module is found there.

Extending the path in this manner is useful for combining
platform-specific versions of packages with common packages, especially
if the platform-specific versions include C extension modules.

Development Versions of Packages
--------------------------------

While developing enhancements to a project, it is common to need to test
changes to an installed package. Replacing the installed copy with a
development version may be a bad idea, since it is not necessarily
correct and other tools on the system are likely to depend on the
installed package.

A completely separate copy of the package could be configured in a
development environment using `virtualenv` or `venv`{.interpreted-text
role="mod"}, but for small modifications the overhead of setting up a
virtual environment with all of the dependencies may be excessive.

Another option is to use `pkgutil` to modify the module search path for
modules that belong to the package under development. In this case,
however, the path must be reversed so development version overrides the
installed version.

Given a package `demopkg2`{.interpreted-text role="mod"} containing an
`__init__.py` and `overloaded.py`, with the function under development
located in `demopkg2/overloaded.py`. The installed version contains

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
demopkg2/overloaded.py
:::

and `demopkg2/__init__.py` contains

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
demopkg2/\_\_init\_\_.py
:::

`reverse()` is used to ensure that any directories added to the search
path by `pkgutil` are scanned for imports *before* the default location.

This program imports `demopkg2.overloaded`{.interpreted-text role="mod"}
and calls `func()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
pkgutil\_devel.py
:::

Running it without any special path treatment produces output from the
installed version of `func()`.

``` {.sourceCode .none}
$ python3 pkgutil_devel.py

demopkg2           : .../demopkg2/__init__.py
demopkg2.overloaded: .../demopkg2/overloaded.py

This is the installed version of func().
```

A development directory containing

``` {.sourceCode .none}
$ find develop/demopkg2 -name '*.py'

develop/demopkg2/__init__.py
develop/demopkg2/overloaded.py
```

and a modified version of `overloaded`{.interpreted-text role="mod"}

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
develop/demopkg2/overloaded.py
:::

will be loaded when the test program is run with the `develop` directory
in the search path.

``` {.sourceCode .none}
$ PYTHONPATH=develop python3 pkgutil_devel.py

demopkg2           : .../demopkg2/__init__.py
demopkg2.overloaded: .../develop/demopkg2/overloaded.py

This is the development version of func().
```

Managing Paths with PKG Files
-----------------------------

The first example illustrated how to extend the search path using extra
directories included in the `PYTHONPATH`. It is also possible to add to
the search path using `*.pkg` files containing directory names. PKG
files are similar to the PTH files used by the `site`{.interpreted-text
role="mod"} module. They can contain directory names, one per line, to
be added to the search path for the package.

Another way to structure the platform-specific portions of the
application from the first example is to use a separate directory for
each operating system, and include a `.pkg` file to extend the search
path.

This example uses the same `demopkg1`{.interpreted-text role="mod"}
files, and also includes the following files.

``` {.sourceCode .none}
$ find os_* -type f

os_one/demopkg1/__init__.py
os_one/demopkg1/not_shared.py
os_one/demopkg1.pkg
os_two/demopkg1/__init__.py
os_two/demopkg1/not_shared.py
os_two/demopkg1.pkg
```

The PKG files are named `demopkg1.pkg` to match the package being
extended. They both contain one line.

    demopkg

This demo program shows the version of the module being imported.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
pkgutil\_os\_specific.py
:::

A simple wrapper script can be used to switch between the two packages.

::: {.literalinclude caption="" language="bash"}
with\_os.sh
:::

When run with `"one"` or `"two"` as the arguments, the path is adjusted.

``` {.sourceCode .none}
$ ./with_os.sh one

PYTHONPATH=os_one

demopkg1.__path__ before:
['.../demopkg1']

demopkg1.__path__ after:
['.../demopkg1',
 '.../os_one/demopkg1',
 'demopkg']

demopkg1: .../demopkg1/__init__.py
demopkg1.shared: .../demopkg1/shared.py
demopkg1.not_shared: .../os_one/demopkg1/not_shared.py

$ ./with_os.sh two

PYTHONPATH=os_two

demopkg1.__path__ before:
['.../demopkg1']

demopkg1.__path__ after:
['.../demopkg1',
 '.../os_two/demopkg1',
 'demopkg']

demopkg1: .../demopkg1/__init__.py
demopkg1.shared: .../demopkg1/shared.py
demopkg1.not_shared: .../os_two/demopkg1/not_shared.py
```

PKG files can appear anywhere in the normal search path, so a single PKG
file in the current working directory could also be used to include a
development tree.

Nested Packages
---------------

For nested packages, it is only necessary to modify the path of the
top-level package. For example, with this directory structure

``` {.sourceCode .none}
$ find nested -name '*.py'

nested/__init__.py
nested/second/__init__.py
nested/second/deep.py
nested/shallow.py
```

Where `nested/__init__.py` contains

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
nested/\_\_init\_\_.py
:::

and a development tree like

``` {.sourceCode .none}
$ find develop/nested -name '*.py'

develop/nested/__init__.py
develop/nested/second/__init__.py
develop/nested/second/deep.py
develop/nested/shallow.py
```

Both the `shallow`{.interpreted-text role="mod"} and
`deep`{.interpreted-text role="mod"} modules contain a simple function
to print out a message indicating whether or not they come from the
installed or development version.

This test program exercises the new packages.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
pkgutil\_nested.py
:::

When `pkgutil_nested.py` is run without any path manipulation, the
installed version of both modules are used.

``` {.sourceCode .none}
$ python3 pkgutil_nested.py

nested.shallow: .../nested/shallow.py
This func() comes from the installed version of nested.shallow

nested.second.deep: .../nested/second/deep.py
This func() comes from the installed version of nested.second.de
ep
```

When the `develop` directory is added to the path, the development
version of both functions override the installed versions.

``` {.sourceCode .none}
$ PYTHONPATH=develop python3 pkgutil_nested.py

nested.shallow: .../develop/nested/shallow.py
This func() comes from the development version of nested.shallow

nested.second.deep: .../develop/nested/second/deep.py
This func() comes from the development version of nested.second.
deep
```

Package Data
------------

In addition to code, Python packages can contain data files such as
templates, default configuration files, images, and other supporting
files used by the code in the package. The `get_data()` function gives
access to the data in the files in a format-agnostic way, so it does not
matter if the package is distributed as an EGG, part of a frozen binary,
or regular files on the file system.

With a package `pkgwithdata`{.interpreted-text role="mod"} containing a
`templates` directory

``` {.sourceCode .none}
$ find pkgwithdata -type f

pkgwithdata/__init__.py
pkgwithdata/templates/base.html
```

The file `pkgwithdata/templates/base.html` contains a simple HTML
template.

::: {.literalinclude caption="" language="html"}
pkgwithdata/templates/base.html
:::

This program uses `get_data()` to retrieve the template contents and
print them out.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
pkgutil\_get\_data.py
:::

The arguments to `get_data()` are the dotted name of the package, and a
filename relative to the top of the package. The return value is a byte
sequence, so it is decoded from UTF-8 before being printed.

``` {.sourceCode .none}
$ python3 pkgutil_get_data.py

<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">
<html> <head>
<title>PyMOTW Template</title>
</head>

<body>
<h1>Example Template</h1>

<p>This is a sample data file.</p>

</body>
</html>
```

`get_data()` is distribution format-agnostic because it uses the import
hooks defined in PEP 302 to access the package contents. Any loader that
provides the hooks can be used, including the ZIP archive importer in
`zipfile`{.interpreted-text role="mod"}.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
pkgutil\_get\_data\_zip.py
:::

This example uses `PyZipFile.writepy()` to create a ZIP archive
containing a copy of the `pkgwithdata`{.interpreted-text role="mod"}
package, including a renamed version of the template file. It then adds
the ZIP archive to the import path before using `pkgutil` to load the
template and print it. Refer to the discussion of
`zipfile`{.interpreted-text role="mod"} for more details about using
`writepy()`.

``` {.sourceCode .none}
$ python3 pkgutil_get_data_zip.py

Loading pkgwithdata from
pkgwithdatainzip.zip/pkgwithdata/__init__.pyc

Template:
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">
<html> <head>
<title>PyMOTW Template</title>
</head>

<body>
<h1>Example Template</h1>

<p>This is a sample data file.</p>

</body>
</html>
```

::: {.seealso}
-   `pkgutil`{.interpreted-text role="pydoc"}
-   [virtualenv](http://pypi.python.org/pypi/virtualenv) \-- Ian
    Bicking\'s virtual environment script.
-   `distutils`{.interpreted-text role="mod"} \-- Packaging tools from
    Python standard library.
-   [setuptools](https://setuptools.readthedocs.io/en/latest/) \--
    Next-generation packaging tools.
-   `302`{.interpreted-text role="pep"} \-- Import Hooks
-   `zipfile`{.interpreted-text role="mod"} \-- Create importable ZIP
    archives.
-   `zipimport`{.interpreted-text role="mod"} \-- Importer for packages
    in ZIP archives.
:::
