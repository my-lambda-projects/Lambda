# python-setup

## Installing Python Modules

Email

[distutils-sig@python.org](mailto:distutils-sig%40python.org)

As a popular open source development project, Python has an active supporting community of contributors and users that also make their software available for other Python developers to use under open source license terms.

This allows Python users to share and collaborate effectively, benefiting from the solutions others have already created to common \(and sometimes even rare!\) problems, as well as potentially contributing their own solutions to the common pool.

This guide covers the installation part of the process. For a guide to creating and sharing your own Python projects, refer to the [distribution guide](https://docs.python.org/3/distributing/index.html#distributing-index).

Note

For corporate and other institutional users, be aware that many organisations have their own policies around using and contributing to open source software. Please take such policies into account when making use of the distribution and installation tools provided with Python.

### Key terms

- `pip` is the preferred installer program. Starting with Python 3.4, it is included by default with the Python binary installers.
- A _virtual environment_ is a semi-isolated Python environment that allows packages to be installed for use by a particular application, rather than being installed system wide.
- `venv` is the standard tool for creating virtual environments, and has been part of Python since Python 3.3. Starting with Python 3.4, it defaults to installing `pip` into all created virtual environments.
- `virtualenv` is a third party alternative \(and predecessor\) to `venv`. It allows virtual environments to be used on versions of Python prior to 3.4, which either don’t provide `venv` at all, or aren’t able to automatically install `pip` into created environments.
- The [Python Packaging Index](https://pypi.org/) is a public repository of open source licensed packages made available for use by other Python users.
- the [Python Packaging Authority](https://www.pypa.io/) is the group of developers and documentation authors responsible for the maintenance and evolution of the standard packaging tools and the associated metadata and file format standards. They maintain a variety of tools, documentation, and issue trackers on both [GitHub](https://github.com/pypa) and [Bitbucket](https://bitbucket.org/pypa/).
- `distutils` is the original build and distribution system first added to the Python standard library in 1998. While direct use of `distutils` is being phased out, it still laid the foundation for the current packaging and distribution infrastructure, and it not only remains part of the standard library, but its name lives on in other ways \(such as the name of the mailing list used to coordinate Python packaging standards development\).

Changed in version 3.5: The use of `venv` is now recommended for creating virtual environments.

See also

[Python Packaging User Guide: Creating and using virtual environments](https://packaging.python.org/installing/#creating-virtual-environments)

### Basic usage

The standard packaging tools are all designed to be used from the command line.

The following command will install the latest version of a module and its dependencies from the Python Packaging Index:

```text
python -m pip install SomePackage
```

Note

For POSIX users \(including Mac OS X and Linux users\), the examples in this guide assume the use of a [virtual environment](https://docs.python.org/3/glossary.html#term-virtual-environment).

For Windows users, the examples in this guide assume that the option to adjust the system PATH environment variable was selected when installing Python.

It’s also possible to specify an exact or minimum version directly on the command line. When using comparator operators such as `>`, `<` or some other special character which get interpreted by shell, the package name and the version should be enclosed within double quotes:

```text
python -m pip install SomePackage==1.0.4    # specific version
python -m pip install "SomePackage>=1.0.4"  # minimum version
```

Normally, if a suitable module is already installed, attempting to install it again will have no effect. Upgrading existing modules must be requested explicitly:

```text
python -m pip install --upgrade SomePackage
```

More information and resources regarding `pip` and its capabilities can be found in the [Python Packaging User Guide](https://packaging.python.org/).

Creation of virtual environments is done through the [`venv`](https://docs.python.org/3/library/venv.html#module-venv) module. Installing packages into an active virtual environment uses the commands shown above.

See also

[Python Packaging User Guide: Installing Python Distribution Packages](https://packaging.python.org/installing/)

### How do I …?

These are quick answers or links for some common tasks.

#### … install `pip` in versions of Python prior to Python 3.4?

Python only started bundling `pip` with Python 3.4. For earlier versions, `pip` needs to be “bootstrapped” as described in the Python Packaging User Guide.

See also

[Python Packaging User Guide: Requirements for Installing Packages](https://packaging.python.org/installing/#requirements-for-installing-packages)

#### … install packages just for the current user?

Passing the `--user` option to `python -m pip install` will install a package just for the current user, rather than for all users of the system.

#### … install scientific Python packages?

A number of scientific Python packages have complex binary dependencies, and aren’t currently easy to install using `pip` directly. At this point in time, it will often be easier for users to install these packages by [other means](https://packaging.python.org/science/) rather than attempting to install them with `pip`.

See also

[Python Packaging User Guide: Installing Scientific Packages](https://packaging.python.org/science/)

#### … work with multiple versions of Python installed in parallel?

On Linux, Mac OS X, and other POSIX systems, use the versioned Python commands in combination with the `-m` switch to run the appropriate copy of `pip`:

```text
python2   -m pip install SomePackage  # default Python 2
python2.7 -m pip install SomePackage  # specifically Python 2.7
python3   -m pip install SomePackage  # default Python 3
python3.4 -m pip install SomePackage  # specifically Python 3.4
```

Appropriately versioned `pip` commands may also be available.

On Windows, use the `py` Python launcher in combination with the `-m` switch:

```text
py -2   -m pip install SomePackage  # default Python 2
py -2.7 -m pip install SomePackage  # specifically Python 2.7
py -3   -m pip install SomePackage  # default Python 3
py -3.4 -m pip install SomePackage  # specifically Python 3.4
```

### Common installation issues

#### Installing into the system Python on Linux

On Linux systems, a Python installation will typically be included as part of the distribution. Installing into this Python installation requires root access to the system, and may interfere with the operation of the system package manager and other components of the system if a component is unexpectedly upgraded using `pip`.

On such systems, it is often better to use a virtual environment or a per-user installation when installing packages with `pip`.

#### Pip not installed

It is possible that `pip` does not get installed by default. One potential fix is:

```text
python -m ensurepip --default-pip
```

There are also additional resources for [installing pip.](https://packaging.python.org/tutorials/installing-packages/#install-pip-setuptools-and-wheel)

#### Installing binary extensions

Python has typically relied heavily on source based distribution, with end users being expected to compile extension modules from source as part of the installation process.

With the introduction of support for the binary `wheel` format, and the ability to publish wheels for at least Windows and Mac OS X through the Python Packaging Index, this problem is expected to diminish over time, as users are more regularly able to install pre-built extensions rather than needing to build them themselves.

Some of the solutions for installing [scientific software](https://packaging.python.org/science/) that are not yet available as pre-built `wheel` files may also help with obtaining other binary extensions without needing to build them locally.

---

## Alternate Python Setup:

---

##

## Python Installation Instructions

Python is the second programming language we will use in this course.

> Note: We do not install the python using the installer from the python.org website in this course. If you have one installed you should uninstall it before installing this version of python.

Currently the curriculum for this course is compatible with Python 3.9.

### Installing pyenv

The first thing we need is to install the Python version manager \([pyenv](https://github.com/pyenv/pyenv)\). This is similar to the `nvm` tool we used to install Node.JS, except it controls what versions of python we use on our system.

To install pyenv we use the [pyenv-installer](https://github.com/pyenv/pyenv-installer)

From the installation instructions on the [pyenv-installer](https://github.com/pyenv/pyenv-installer) website, it says we run the following command:

```text
curl https://pyenv.run | bash
```

Unlike `nvm`, `pyenv` does not automatically add it's startup lines to your shell startup file.

The files that you have to change will depend on which shell you are running \(you can check which shell you have by running `echo $SHELL`\). Follow the instructions to update the startup files associated with the shell that you are running.

#### If your shell is `zsh`

1. Open up your `.profile` file with the following command.

```text
code ~/.profile
```

1. Add the following lines to your `.profile`.

```text
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
```

1. Open up your `.zprofile` file with the following command.

```text
code ~/.zprofile
```

1. Add the following lines to your `.zprofile`. \(Yes, these are the same as above.\)

```text
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
```

1. Open your `.zshrc` with the following command

```text
code ~/.zshrc
```

1. Add the following line.

```text
eval "$(pyenv init -)"
```

#### If your shell is `bash`

1. Open up your `.profile` file with the following command.

```text
code ~/.profile
```

1. Add the following lines.

```text
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
```

1. Check if you have a `.bash_profile`. Run the following at the command line if you don't know.

```text
if [ -f ~/.bash_profile ]; then echo "bash_profile exists"; else echo "bash_profile does not exist"; fi
```

If you don't have a `.bash_profile`, you can skip the rest of this step. If you do, open up your `.bash_profile` file with the following command.

```text
code ~/.bash_profile
```

1. Add the following lines to your `.bash_profile`. \(Yes, these are the same as above.\)

```text
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
```

1. Open your `.bashrc` with the following command

```text
code ~/.bashrc
```

1. Add the following line.

```text
eval "$(pyenv init -)"
```

To get your startup file to execute, restart your terminal.

### Installing dependencies on Windows and Ubuntu

If you use macOS you can skip this step.

For Windows and Ubuntu users you will need to install some extra dependencies for python. \(See here for more information about the prerequisites: [pyenv Prerequities](https://github.com/pyenv/pyenv/wiki/Common-build-problems)\)

First run this command to update your apt repositories:

```text
sudo apt update
```

and then run this command to install the packages listed on the pyenv.

```text
sudo apt-get install -y build-essential libssl-dev zlib1g-dev libbz2-dev \
libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev \
xz-utils tk-dev libffi-dev liblzma-dev python-openssl git
```

### Installing python itself

Now we are ready to install python. We will be installing Python version 3.9.4.

Then run this command to install python \(you'll notice pyenv makes us put in the _exact_ version instead of being able to just say `3.9` or `3`\)

```text
pyenv install 3.9.4
```

After some time this should complete without any errors. It could take a while since you are compiling python from source code.

Once this is finished we also need to tell pyenv this is our default version of python using this command:

```text
pyenv global 3.9.4
```

Ensure that these changes take effect by closing your terminal and opening a new one. Then, we can verify our python is the correct version by typing

```text
python --version
python3 --version
```

Both of these commands should show 3.9.4

### Pipenv

Another piece of software we will use in class is Pipenv. Don't worry about what this is right now, it's just enough to install it.

```text
pip install pipenv
```

Then after you have installed pipenv, add this line to your shell startup file \(either your `.bashrc` or your `.zshrc`\) somewhere after the `eval "$(pyenv init -)"`.

```text
export PIPENV_VENV_IN_PROJECT=1
```

Congratulations! If you've completed all these steps you are ready to code in Python!
