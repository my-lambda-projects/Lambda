ensurepip \-\-- Install the Python Package Installer
====================================================

::: {.module synopsis="Install the Python Package Installer, pip"}
ensurepip
:::

Purpose

:   Install pip, the Python package installer.

While Python is the \"Batteries Included\" programming language and
comes with a wide variety of modules in the standard library, there are
even more libraries, frameworks, and tools available to be installed
from the [Python Package Index](https://pypi.python.org/pypi). To
install those packages, a developer needs the installer tool `pip`.
Installing a tool meant to install tools presents an interesting
bootstrapping issue, which `ensurepip` solves.

Installing `pip`
----------------

This example uses a virtual environment configured without `pip`
installed.

``` {.sourceCode .none}
$ python3 -m venv --without-pip /tmp/demoenv
$ ls -F /tmp/demoenv/bin

activate
activate.csh
activate.fish
python@
python3@
```

Run `ensurepip` from the command line using the `-m` option to the
Python interpreter. By default a copy of pip that is delivered with the
standard library is installed. This version can then be used to install
an updated version of pip. To ensure a recent version of `pip` is
installed immediately, use the `--upgrade` option with `ensurepip`.

``` {.sourceCode .none}
$ /tmp/demoenv/bin/python3 -m ensurepip --upgrade

Ignoring indexes: https://pypi.python.org/simple
Collecting setuptools
Collecting pip
Installing collected packages: setuptools, pip
Successfully installed pip-8.1.1 setuptools-20.10.1
```

This installs `pip3` and `pip3.5` as commands in the virtual
environment, with the `setuptools` dependency needed to support those
commands.

``` {.sourceCode .none}
$ ls -F /tmp/demoenv/bin

activate
activate.csh
activate.fish
easy_install-3.5*
pip3*
pip3.5*
python@
python3@
```

::: {.seealso}
-   `ensurepip`{.interpreted-text role="pydoc"}
-   `venv`{.interpreted-text role="mod"} \-- Virtual environments
-   `453`{.interpreted-text role="pep"} \-- Explicit bootstrapping of
    pip in Python installations
-   [Installing Python
    Modules](https://docs.python.org/3.5/installing/index.html#installing-index)
    \-- Instructions for installing extra packages for use with Python.
-   [Python Package Index](https://pypi.python.org/pypi) \-- Hosting
    site for extension modules for Python programmers.
-   [pip](https://pypi.python.org/pypi/pip) \-- Tool for installing
    Python packages.
:::
