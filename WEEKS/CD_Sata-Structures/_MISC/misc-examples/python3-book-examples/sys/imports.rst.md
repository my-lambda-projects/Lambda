Modules and Imports {#sys-imports}
===================

Most Python programs end up as a combination of several modules with a
main application importing them. Whether using the features of the
standard library or organizing custom code in separate files to make it
easier to maintain, understanding and managing the dependencies for a
program is an important aspect of development. `sys` includes
information about the modules available to an application, either as
built-ins or after being imported. It also defines hooks for overriding
the standard import behavior for special cases.

Imported Modules {#sys-modules}
----------------

`sys.modules` is a dictionary mapping the names of imported modules to
the module object holding the code.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_modules.py
:::

The contents of `sys.modules` change as new modules are imported.

``` {.sourceCode .none}
$ python3 sys_modules.py

__main__, _abc, _bootlocale, _codecs, _collections,
_collections_abc, _frozen_importlib, _frozen_importlib_external,
_functools, _heapq, _imp, _io, _locale, _operator, _signal,
_sre, _stat, _thread, _warnings, _weakref, abc, builtins,
codecs, collections, contextlib, copyreg, encodings,
encodings.aliases, encodings.latin_1, encodings.utf_8, enum,
functools, genericpath, heapq, importlib, importlib._bootstrap,
importlib._bootstrap_external, importlib.abc,
importlib.machinery, importlib.util, io, itertools, keyword,
marshal, operator, os, os.path, posix, posixpath, re, reprlib,
site, sphinxcontrib, sre_compile, sre_constants, sre_parse,
stat, sys, textwrap, types, warnings, zipimport
```

Built-in Modules
----------------

The Python interpreter can be compiled with some C modules built right
in, so they do not need to be distributed as separate shared libraries.
These modules do not appear in the list of imported modules managed in
`sys.modules` because they were not technically imported. The only way
to find the available built-in modules is through
`sys.builtin_module_names`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_builtins.py
:::

The output of this script will vary, especially if run with a
custom-built version of the interpreter. This output was created using a
copy of the interpreter installed from the standard python.org installer
for OS X.

``` {.sourceCode .none}
$ python3 sys_builtins.py

_abc, _ast, _codecs, _collections, _functools, _imp, _io,
_locale, _operator, _signal, _sre, _stat, _string, _symtable,
_thread, _tracemalloc, _warnings, _weakref, atexit, builtins,
errno, faulthandler, gc, itertools, marshal, posix, pwd, sys,
time, xxsubtype, zipimport
```

::: {.seealso}
-   [Build Instructions](https://hg.python.org/cpython/file/tip/README)
    \--Instructions for building Python, from the README distributed
    with the source.
:::

Import Path {#sys-path}
-----------

The search path for modules is managed as a Python list saved in
`sys.path`. The default contents of the path include the directory of
the script used to start the application and the current working
directory.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_path\_show.py
:::

The first directory in the search path is the home for the sample script
itself. That is followed by a series of platform-specific paths where
compiled extension modules (written in C) might be installed, and then
the global `site-packages` directory is listed last.

``` {.sourceCode .none}
$ python3 sys_path_show.py

/Users/dhellmann/Documents/PyMOTW/pymotw-3/source/sys
.../python35.zip
.../lib/python3.5
.../lib/python3.5/plat-darwin
.../python3.5/lib-dynload
.../lib/python3.5/site-packages
```

The import search-path list can be modified before starting the
interpreter by setting the shell variable `PYTHONPATH` to a
colon-separated list of directories.

``` {.sourceCode .none}
$ PYTHONPATH=/my/private/site-packages:/my/shared/site-packages \
> python3 sys_path_show.py

/Users/dhellmann/Documents/PyMOTW/pymotw-3/source/sys
/my/private/site-packages
/my/shared/site-packages
.../python35.zip
.../lib/python3.5
.../lib/python3.5/plat-darwin
.../python3.5/lib-dynload
.../lib/python3.5/site-packages
```

A program can also modify its path by adding elements to `sys.path`
directly.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_path\_modify.py
:::

Reloading an imported module re-imports the file, and uses the same
`module` object to hold the results. Changing the path between the
initial import and the call to `reload()` means a different module may
be loaded the second time.

``` {.sourceCode .none}
$ python3 sys_path_modify.py

Base directory: .
Imported example from: ./package_dir_a/example.py
   This is example A
Reloaded example from: ./package_dir_b/example.py
   This is example B
```

Custom Importers
----------------

Modifying the search path lets a programmer control how standard Python
modules are found. But, what if a program needs to import code from
somewhere other than the usual `.py` or `.pyc` files on the file system?
`302`{.interpreted-text role="pep"} solves this problem by introducing
the idea of *import hooks*, which can trap an attempt to find a module
on the search path and take alternative measures to load the code from
somewhere else or apply pre-processing to it.

Custom importers are implemented in two separate phases. The *finder* is
responsible for locating a module and providing a *loader* to manage the
actual import. Custom module finders are added by appending a factory to
the `sys.path_hooks` list. On import, each part of the path is given to
a finder until one claims support (by not raising `ImportError`). That
finder is then responsible for searching data storage represented by its
path entry for named modules.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_path\_hooks\_noisy.py
:::

This example illustrates how the finders are instantiated and queried.
The `NoisyImportFinder` raises `ImportError` when instantiated with a
path entry that does not match its special trigger value, which is
obviously not a real path on the file system. This test prevents the
`NoisyImportFinder` from breaking imports of real modules.

``` {.sourceCode .none}
$ python3 sys_path_hooks_noisy.py

Path hook: <class 'zipimport.zipimporter'>
Path hook: <function
FileFinder.path_hook.<locals>.path_hook_for_FileFinder at
0x101afb6a8>
Path hook: <class '__main__.NoisyImportFinder'>
importing target_module
Checking NoisyImportFinder_PATH_TRIGGER: works
Looking for 'target_module'
Import failed: No module named 'target_module'
```

Importing from a Shelve
-----------------------

When the finder locates a module, it is responsible for returning a
*loader* capable of importing that module. This example illustrates a
custom importer that saves its module contents in a database created by
`shelve`{.interpreted-text role="mod"}.

First, a script is used to populate the shelf with a package containing
a sub-module and sub-package.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_shelve\_importer\_create.py
:::

A real packaging script would read the contents from the file system,
but using hard-coded values is sufficient for a simple example like
this.

``` {.sourceCode .none}
$ python3 sys_shelve_importer_create.py

Created /tmp/pymotw_import_example.shelve with:
   data:README
   package.__init__
   package.module1
   package.subpackage.__init__
   package.subpackage.module2
   package.with_error
```

The custom importer needs to provide finder and loader classes that know
how to look in a shelf for the source of a module or package.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_shelve\_importer.py
:::

Now `ShelveFinder` and `ShelveLoader` can be used to import code from a
shelf. For example, importing the `package`{.interpreted-text
role="mod"} just created:

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_shelve\_importer\_package.py
:::

The shelf is added to the import path the first time an import occurs
after the path is modified. The finder recognizes the shelf and returns
a loader, which is used for all imports from that shelf. The initial
package-level import creates a new module object and then uses `exec` to
run the source loaded from the shelf. It uses the new module as the
namespace so that names defined in the source are preserved as
module-level attributes.

``` {.sourceCode .none}
$ python3 sys_shelve_importer_package.py

Import of "package":
shelf added to import path: /tmp/pymotw_import_example.shelve

looking for 'package'
  in /tmp/pymotw_import_example.shelve
  found it as package.__init__
loading source for 'package' from shelf
creating a new module object for 'package'
adding path for package
execing source...
package imported
done

Examine package details:
  message    : This message is in package.__init__
  __name__   : package
  __package__: package
  __file__   : /tmp/pymotw_import_example.shelve/package
  __path__   : ['/tmp/pymotw_import_example.shelve']
  __loader__ : <sys_shelve_importer.ShelveLoader object at
0x104589b70>

Global settings:
sys.modules entry:
<module 'package' (<sys_shelve_importer.ShelveLoader object at
0x104589b70>)>
```

Custom Package Importing
------------------------

Loading other modules and sub-packages proceeds in the same way.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_shelve\_importer\_module.py
:::

The finder receives the entire dotted name of the module to load, and
returns a `ShelveLoader` configured to load modules from the path entry
pointing to the shelf file. The fully qualified module name is passed to
the loader\'s `load_module`{.interpreted-text role="meth"} method, which
constructs and returns a `module` instance.

``` {.sourceCode .none}
$ python3 sys_shelve_importer_module.py

Import of "package.module1":
shelf added to import path: /tmp/pymotw_import_example.shelve

looking for 'package'
  in /tmp/pymotw_import_example.shelve
  found it as package.__init__
loading source for 'package' from shelf
creating a new module object for 'package'
adding path for package
execing source...
package imported
done

looking for 'package.module1'
  in /tmp/pymotw_import_example.shelve
  found it as package.module1
loading source for 'package.module1' from shelf
creating a new module object for 'package.module1'
imported as regular module
execing source...
package.module1 imported
done

Examine package.module1 details:
  message    : This message is in package.module1
  __name__   : package.module1
  __package__: package
  __file__   : /tmp/pymotw_import_example.shelve/package.module1
  __path__   : /tmp/pymotw_import_example.shelve
  __loader__ : <sys_shelve_importer.ShelveLoader object at
0x10457dc18>

Import of "package.subpackage.module2":

looking for 'package.subpackage'
  in /tmp/pymotw_import_example.shelve
  found it as package.subpackage.__init__
loading source for 'package.subpackage' from shelf
creating a new module object for 'package.subpackage'
adding path for package
execing source...
package.subpackage imported
done

looking for 'package.subpackage.module2'
  in /tmp/pymotw_import_example.shelve
  found it as package.subpackage.module2
loading source for 'package.subpackage.module2' from shelf
creating a new module object for 'package.subpackage.module2'
imported as regular module
execing source...
package.subpackage.module2 imported
done

Examine package.subpackage.module2 details:
  message    : This message is in package.subpackage.module2
  __name__   : package.subpackage.module2
  __package__: package.subpackage
  __file__   :
/tmp/pymotw_import_example.shelve/package.subpackage.module2
  __path__   : /tmp/pymotw_import_example.shelve
  __loader__ : <sys_shelve_importer.ShelveLoader object at
0x1045b5080>
```

Reloading Modules in a Custom Importer
--------------------------------------

Reloading a module is handled slightly differently. Instead of creating
a new module object, the existing object is re-used.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_shelve\_importer\_reload.py
:::

By re-using the same object, existing references to the module are
preserved even if class or function definitions are modified by the
reload.

``` {.sourceCode .none}
$ python3 sys_shelve_importer_reload.py

First import of "package":
shelf added to import path: /tmp/pymotw_import_example.shelve

looking for 'package'
  in /tmp/pymotw_import_example.shelve
  found it as package.__init__
loading source for 'package' from shelf
creating a new module object for 'package'
adding path for package
execing source...
package imported
done

Reloading "package":

looking for 'package'
  in /tmp/pymotw_import_example.shelve
  found it as package.__init__
loading source for 'package' from shelf
reusing module from import of 'package'
adding path for package
execing source...
package imported
done
```

Handling Import Errors
----------------------

When a module cannot be located by any finder, `ImportError` is raised
by the main import code.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_shelve\_importer\_missing.py
:::

Other errors during the import are propagated.

``` {.sourceCode .none}
$ python3 sys_shelve_importer_missing.py

shelf added to import path: /tmp/pymotw_import_example.shelve

looking for 'package'
  in /tmp/pymotw_import_example.shelve
  found it as package.__init__
loading source for 'package' from shelf
creating a new module object for 'package'
adding path for package
execing source...
package imported
done

looking for 'package.module3'
  in /tmp/pymotw_import_example.shelve
  not found
Failed to import: No module named 'package.module3'
```

Package Data
------------

In addition to defining the API for loading executable Python code, PEP
302 defines an optional API for retrieving package data intended for
distributing data files, documentation, and other non-code resources
used by a package. By implementing `get_data()`, a loader can allow
calling applications to support retrieval of data associated with the
package without considering how the package is actually installed
(especially without assuming that the package is stored as files on a
file system).

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_shelve\_importer\_get\_data.py
:::

`get_data()` takes a path based on the module or package that owns the
data, and returns the contents of the resource \"file\" as a byte
string, or raises `IOError` if the resource does not exist.

``` {.sourceCode .none}
$ python3 sys_shelve_importer_get_data.py

shelf added to import path: /tmp/pymotw_import_example.shelve

looking for 'package'
  in /tmp/pymotw_import_example.shelve
  found it as package.__init__
loading source for 'package' from shelf
creating a new module object for 'package'
adding path for package
execing source...
package imported
done
looking for data
  in /tmp/pymotw_import_example.shelve
  for '/tmp/pymotw_import_example.shelve/README'

==============
package README
==============

This is the README for ``package``.

looking for data
  in /tmp/pymotw_import_example.shelve
  for '/tmp/pymotw_import_example.shelve/foo'
ERROR: Could not load "foo" 
```

::: {.seealso}
-   `pkgutil`{.interpreted-text role="mod"} \-- Includes `get_data()`
    for retrieving data from a package.
:::

Importer Cache
--------------

Searching through all of the hooks each time a module is imported can
become expensive. To save time, `sys.path_importer_cache` is maintained
as a mapping between a path entry and the loader that can use the value
to find modules.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_path\_importer\_cache.py
:::

A `FileFinder` is used for path locations found on the file system.
Locations on the path not supported by any finder are associated with a
`None`, since they cannot be used to import modules. The output below
has been truncated due to formatting constraints.

``` {.sourceCode .none}
$ python3 sys_path_importer_cache.py

PATH:
  /Users/dhellmann/Documents/PyMOTW/Python3/pymotw-3/source/sys
  .../lib/python35.zip
  .../lib/python3.5
  .../lib/python3.5/plat-darwin
  .../lib/python3.5/lib-dynload
  .../lib/python3.5/site-packages

IMPORTERS:
  sys_path_importer_cache.py: None
  .../lib/python3.5/encodings: FileFinder(
      '.../lib/python3.5/encodings')
  .../lib/python3.5/lib-dynload: FileFinder(
      '.../lib/python3.5/lib-dynload')
  .../lib/python3.5/lib-dynload: FileFinder(
      '.../lib/python3.5/lib-dynload')
  .../lib/python3.5/site-packages: FileFinder(
      '.../lib/python3.5/site-packages')
  .../lib/python3.5: FileFinder(
      '.../lib/python3.5/')
  .../lib/python3.5/plat-darwin: FileFinder(
      '.../lib/python3.5/plat-darwin')
  .../lib/python3.5: FileFinder(
      '.../lib/python3.5')
  .../lib/python35.zip: None
  .../lib/python3.5/plat-darwin: FileFinder(
      '.../lib/python3.5/plat-darwin')
```

Meta Path
---------

The `sys.meta_path` further extends the sources of potential imports by
allowing a finder to be searched *before* the regular `sys.path` is
scanned. The API for a finder on the meta-path is the same as for a
regular path. The difference is that the metafinder is not limited to a
single entry in `sys.path` \-- it can search anywhere at all.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_meta\_path.py
:::

Each finder on the meta-path is interrogated before `sys.path` is
searched, so there is always an opportunity to have a central importer
load modules without explicitly modifying `sys.path`. Once the module is
\"found,\" the loader API works in the same way as for regular loaders
(although this example is truncated for simplicity).

``` {.sourceCode .none}
$ python3 sys_meta_path.py

Creating NoisyMetaImportFinder for foo

looking for 'foo' with path None
 ... found prefix, returning loader
loading foo

looking for 'foo.bar' with path ['path-entry-goes-here']
 ... found prefix, returning loader
loading foo.bar

looking for 'bar' with path None
 ... not the right prefix, cannot load
```

::: {.seealso}
-   `importlib`{.interpreted-text role="mod"} \-- Base classes and other
    tools for creating custom importers.
-   `zipimport`{.interpreted-text role="mod"} \-- Implements importing
    Python modules from inside ZIP archives.
-   [The Internal Structure of Python
    Eggs](http://setuptools.readthedocs.io/en/latest/formats.html?highlight=egg)
    \-- setuptools documentation for the egg format
-   [Wheel](http://wheel.readthedocs.org/en/latest/) \--Documentation
    for `wheel` archive format for installable Python code.
-   `302`{.interpreted-text role="pep"} \-- Import Hooks
-   `366`{.interpreted-text role="pep"} \-- Main module explicit
    relative imports
-   `427`{.interpreted-text role="pep"} \-- The Wheel Binary Package
    Format 1.0
-   [Import this, that, and the other thing: custom
    importers](http://pyvideo.org/pycon-us-2010/pycon-2010--import-this--that--and-the-other-thin.html)
    \--Brett Cannon\'s PyCon 2010 presentation.
:::
