sysconfig \-\-- Interpreter Compile-time Configuration
======================================================

::: {.module synopsis="Interpreter Compile-time Configuration"}
sysconfig
:::

Purpose

:   Access the configuration settings used to build Python.

The features of `sysconfig` have been extracted from
`distutils`{.interpreted-text role="mod"} to create a stand-alone
module. It includes functions for determining the settings used to
compile and install the current interpreter.

Configuration Variables
-----------------------

Access the build-time configuration settings is provided through two
functions. `get_config_vars()` returns a dictionary mapping the
configuration variable names to values.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sysconfig\_get\_config\_vars.py
:::

The level of detail available through the `sysconfig` API depends on the
platform where a program is running. On POSIX systems such as Linux and
OS X, the `Makefile` used to build the interpreter and `config.h` header
file generated for the build are parsed and all of the variables found
within are available. On non-POSIX systems such as Windows, the settings
are limited to a few paths, filename extensions, and version details.

``` {.sourceCode .none}
$ python3 sysconfig_get_config_vars.py

Found 668 configuration settings

Some highlights:

 Installation prefixes:
  prefix=/Library/Frameworks/Python.framework/Versions/3.7
  exec_prefix=/Library/Frameworks/Python.framework/Versions/3.7

 Version info:
  py_version=3.7.1
  py_version_short=3.7
  py_version_nodot=37

 Base directories:
  base=/Users/dhellmann/Envs/pymotw37
  platbase=/Users/dhellmann/Envs/pymotw37
  userbase=/Users/dhellmann/Library/Python/3.7
  srcdir=/Library/Frameworks/Python.framework/Versions/3.7/lib/p
ython3.7/config-3.7m-darwin

 Compiler and linker flags:
  LDFLAGS=-arch x86_64 -g
  BASECFLAGS=-Wno-unused-result -Wsign-compare -Wunreachable-
code -fno-common -dynamic
  Py_ENABLE_SHARED=0
```

Passing variable names to `get_config_vars()` changes the return value
to a `list` created by appending all of the values for those variables
together.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sysconfig\_get\_config\_vars\_by\_name.py
:::

This example builds a list of all of the installation base directories
where modules can be found on the current system.

``` {.sourceCode .none}
$ python3 sysconfig_get_config_vars_by_name.py

Base directories:
   /Users/dhellmann/Envs/pymotw37
   /Users/dhellmann/Envs/pymotw37
   /Users/dhellmann/Library/Python/3.7
```

When only a single configuration value is needed, use `get_config_var()`
to retrieve it.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sysconfig\_get\_config\_var.py
:::

If the variable is not found, `get_config_var()` returns `None` instead
of raising an exception.

``` {.sourceCode .none}
$ python3 sysconfig_get_config_var.py

User base directory: /Users/dhellmann/Library/Python/3.7
Unknown variable   : None
```

Installation Paths
------------------

`sysconfig` is primarily meant to be used by installation and packaging
tools. As a result, while it provides access to general configuration
settings such as the interpreter version, it is focused on the
information needed to locate parts of the Python distribution currently
installed on a system. The locations used for installing a package
depend on the *scheme* used.

A scheme is a set of platform-specific default directories organized
based on the platform\'s packaging standards and guidelines. There are
different schemes for installing into a site-wide location or a private
directory owned by the user. The full set of schemes can be accessed
with `get_scheme_names()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sysconfig\_get\_scheme\_names.py
:::

There is no concept of a \"current scheme\" per se. The default scheme
depends on the platform, and the actual scheme used depends on options
given to the installation program. If the current system is running a
POSIX-compliant operating system, the default is `posix_prefix`.
Otherwise the default is the operating system name, as defined by
`os.name`.

``` {.sourceCode .none}
$ python3 sysconfig_get_scheme_names.py

nt
nt_user
osx_framework_user
posix_home
posix_prefix
posix_user
```

Each scheme defines a set of paths used for installing packages. For a
list of the path names, use `get_path_names()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sysconfig\_get\_path\_names.py
:::

Some of the paths may be the same for a given scheme, but installers
should not make any assumptions about what the actual paths are. Each
name has a particular semantic meaning, so the correct name should be
used to find the path for a given file during installation. Refer to
`Path Names Used in sysconfig`{.interpreted-text role="table"} for a
complete list of the path names and their meaning.

  Name            Description
  --------------- ------------------------------------------------------
  `stdlib`        Standard Python library files, not platform-specific
  `platstdlib`    Standard Python library files, platform-specific
  `platlib`       Site-specific, platform-specific files
  `purelib`       Site-specific, non-platform-specific files
  `include`       Header files, not platform-specific
  `platinclude`   Header files, platform-specific
  `scripts`       Executable script files
  `data`          Data files

  : Path Names Used in sysconfig

``` {.sourceCode .none}
$ python3 sysconfig_get_path_names.py

stdlib
platstdlib
purelib
platlib
include
scripts
data
```

Use `get_paths()` to retrieve the actual directories associated with a
scheme.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sysconfig\_get\_paths.py
:::

This example shows the difference between the system-wide paths used for
`posix_prefix` under a framework build on Mac OS X, and the
user-specific values for `posix_user`.

``` {.sourceCode .none}
$ python3 sysconfig_get_paths.py

posix_prefix
============
prefix = /Users/dhellmann/Envs/pymotw37

data
  .
include
  ./include/python3.7m
platinclude
  ./include/python3.7m
platlib
  ./lib/python3.7/site-packages
platstdlib
  ./lib/python3.7
purelib
  ./lib/python3.7/site-packages
scripts
  ./bin
stdlib
  ./lib/python3.7

posix_user
==========
prefix = /Users/dhellmann/Library/Python/3.7

data
  .
include
  ./include/python3.7
platlib
  ./lib/python3.7/site-packages
platstdlib
  ./lib/python3.7
purelib
  ./lib/python3.7/site-packages
scripts
  ./bin
stdlib
  ./lib/python3.7
```

For an individual path, call `get_path()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sysconfig\_get\_path.py
:::

Using `get_path()` is equivalent to saving the value of `get_paths()`
and looking up the individual key in the dictionary. If several paths
are needed, `get_paths()` is more efficient because it does not
recompute all of the paths each time.

``` {.sourceCode .none}
$ python3 sysconfig_get_path.py

posix_prefix
============
purelib = /Users/dhellmann/Envs/pymotw37/lib/python3.7/site-pack
ages

posix_user
==========
purelib = /Users/dhellmann/Library/Python/3.7/lib/python3.7/site
-packages
```

Python Version and Platform
---------------------------

While `sys`{.interpreted-text role="mod"} includes some basic platform
identification (see `sys-build-time-info`{.interpreted-text
role="ref"}), it is not specific enough to be used for installing binary
packages because `sys.platform` does not always include information
about hardware architecture, instruction size, or other values that
effect the compatibility of binary libraries. For a more precise
platform specifier, use `get_platform()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sysconfig\_get\_platform.py
:::

The interpreter used to prepare this sample output was compiled for Mac
OS X 10.6 compatibility, so that is the version number included in the
platform string.

``` {.sourceCode .none}
$ python3 sysconfig_get_platform.py

macosx-10.9-x86_64
```

As a convenience, the interpreter version from `sys.version_info` is
also available through `get_python_version()` in `sysconfig`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sysconfig\_get\_python\_version.py
:::

`get_python_version()` returns a string suitable for use when building a
version-specific path.

``` {.sourceCode .none}
$ python3 sysconfig_get_python_version.py

sysconfig.get_python_version(): 3.7

sys.version_info:
  major       : 3
  minor       : 7
  micro       : 1
  releaselevel: final
  serial      : 0
```

::: {.seealso}
-   `sysconfig`{.interpreted-text role="pydoc"}
-   `distutils`{.interpreted-text role="mod"} \-- `sysconfig` used to be
    part of the `distutils` package.
-   `site`{.interpreted-text role="mod"} \-- The `site` module describes
    the paths searched when importing in more detail.
-   `os`{.interpreted-text role="mod"} \-- Includes `os.name`, the name
    of the current operating system.
-   `sys`{.interpreted-text role="mod"} \-- Includes other build-time
    information such as the platform.
:::
