# Virtual Environment Setup:

## Installing packages using pip and virtual environments

This guide discusses how to install packages using [pip](https://packaging.python.org/key_projects/#pip) and a virtual environment manager: either [venv](https://packaging.python.org/key_projects/#venv) for Python 3 or [virtualenv](https://packaging.python.org/key_projects/#virtualenv) for Python 2. These are the lowest-level tools for managing Python packages and are recommended if higher-level tools do not suit your needs.

Note

This doc uses the term **package** to refer to a [Distribution Package](https://packaging.python.org/glossary/#term-Distribution-Package) which is different from an [Import Package](https://packaging.python.org/glossary/#term-Import-Package) that which is used to import modules in your Python source code.

### Installing pip

[pip](https://packaging.python.org/key_projects/#pip) is the reference Python package manager. It’s used to install and update packages. You’ll need to make sure you have the latest version of pip installed.Unix/macOS

Debian and most other distributions include a [python-pip](https://packages.debian.org/stable/python-pip) package; if you want to use the Linux distribution-provided versions of pip, see [Installing pip/setuptools/wheel with Linux Package Managers](https://packaging.python.org/guides/installing-using-linux-tools/).

You can also install pip yourself to ensure you have the latest version. It’s recommended to use the system pip to bootstrap a user installation of pip:

```text
python3 -m pip install --user --upgrade pip

python3 -m pip --version
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)

Afterwards, you should have the latest version of pip installed in your user site:

```text
pip 21.1.3 from $HOME/.local/lib/python3.9/site-packages (python 3.9)
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

### Installing virtualenv

Note

If you are using Python 3.3 or newer, the [`venv`](https://docs.python.org/3/library/venv.html#module-venv) module is the preferred way to create and manage virtual environments. venv is included in the Python standard library and requires no additional installation. If you are using venv, you may skip this section.

[virtualenv](https://packaging.python.org/key_projects/#virtualenv) is used to manage Python packages for different projects. Using virtualenv allows you to avoid installing Python packages globally which could break system tools or other projects. You can install virtualenv using pip.Unix/macOS

```text
python3 -m pip install --user virtualenv
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

### Creating a virtual environment

[venv](https://packaging.python.org/key_projects/#venv) \(for Python 3\) and [virtualenv](https://packaging.python.org/key_projects/#virtualenv) \(for Python 2\) allow you to manage separate package installations for different projects. They essentially allow you to create a “virtual” isolated Python installation and install packages into that virtual installation. When you switch projects, you can simply create a new virtual environment and not have to worry about breaking the packages installed in the other environments. It is always recommended to use a virtual environment while developing Python applications.

To create a virtual environment, go to your project’s directory and run venv. If you are using Python 2, replace `venv` with `virtualenv` in the below commands.Unix/macOS

```text
python3 -m venv env
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

The second argument is the location to create the virtual environment. Generally, you can just create this in your project and call it `env`.

venv will create a virtual Python installation in the `env` folder.

Note

You should exclude your virtual environment directory from your version control system using `.gitignore` or similar.

### Activating a virtual environment

Before you can start installing or using packages in your virtual environment you’ll need to _activate_ it. Activating a virtual environment will put the virtual environment-specific `python` and `pip` executables into your shell’s `PATH`.Unix/macOS

```text
source env/bin/activate
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

You can confirm you’re in the virtual environment by checking the location of your Python interpreter:Unix/macOS

```text
which python
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

It should be in the `env` directory:Unix/macOS

```text
.../env/bin/python
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

As long as your virtual environment is activated pip will install packages into that specific environment and you’ll be able to import and use packages in your Python application.

### Leaving the virtual environment

If you want to switch projects or otherwise leave your virtual environment, simply run:

```text
deactivate
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)

If you want to re-enter the virtual environment just follow the same instructions above about activating a virtual environment. There’s no need to re-create the virtual environment.

### Installing packages

Now that you’re in your virtual environment you can install packages. Let’s install the [Requests](https://pypi.org/project/requests/) library from the [Python Package Index \(PyPI\)](https://packaging.python.org/glossary/#term-Python-Package-Index-PyPI):Unix/macOS

```text
python3 -m pip install requests
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

pip should download requests and all of its dependencies and install them:

```text
Collecting requests
  Using cached requests-2.18.4-py2.py3-none-any.whl
Collecting chardet<3.1.0,>=3.0.2 (from requests)
  Using cached chardet-3.0.4-py2.py3-none-any.whl
Collecting urllib3<1.23,>=1.21.1 (from requests)
  Using cached urllib3-1.22-py2.py3-none-any.whl
Collecting certifi>=2017.4.17 (from requests)
  Using cached certifi-2017.7.27.1-py2.py3-none-any.whl
Collecting idna<2.7,>=2.5 (from requests)
  Using cached idna-2.6-py2.py3-none-any.whl
Installing collected packages: chardet, urllib3, certifi, idna, requests
Successfully installed certifi-2017.7.27.1 chardet-3.0.4 idna-2.6 requests-2.18.4 urllib3-1.22
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)

### Installing specific versions

pip allows you to specify which version of a package to install using [version specifiers](https://packaging.python.org/glossary/#term-Version-Specifier). For example, to install a specific version of `requests`:Unix/macOS

```text
python3 -m pip install requests==2.18.4
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

To install the latest `2.x` release of requests:Unix/macOS

```text
python3 -m pip install requests>=2.0.0,<3.0.0
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

To install pre-release versions of packages, use the `--pre` flag:Unix/macOS

```text
python3 -m pip install --pre requests
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

### Installing extras

Some packages have optional [extras](https://setuptools.readthedocs.io/en/latest/setuptools.html#declaring-extras-optional-features-with-their-own-dependencies). You can tell pip to install these by specifying the extra in brackets:Unix/macOS

```text
python3 -m pip install requests[security]
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

### Installing from source

pip can install a package directly from source, for example:Unix/macOS

```text
cd google-auth
python3 -m pip install .
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

Additionally, pip can install packages from source in [development mode](https://setuptools.readthedocs.io/en/latest/userguide/development_mode.html), meaning that changes to the source directory will immediately affect the installed package without needing to re-install:Unix/macOS

```text
python3 -m pip install --editable .
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

### Installing from version control systems

pip can install packages directly from their version control system. For example, you can install directly from a git repository:

```text
git+https://github.com/GoogleCloudPlatform/google-auth-library-python.git#egg=google-auth
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)

For more information on supported version control systems and syntax, see pip’s documentation on [VCS Support](https://pip.pypa.io/en/latest/cli/pip_install/#vcs-support).

### Installing from local archives

If you have a local copy of a [Distribution Package](https://packaging.python.org/glossary/#term-Distribution-Package)’s archive \(a zip, wheel, or tar file\) you can install it directly with pip:Unix/macOS

```text
python3 -m pip install requests-2.18.4.tar.gz
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

If you have a directory containing archives of multiple packages, you can tell pip to look for packages there and not to use the [Python Package Index \(PyPI\)](https://packaging.python.org/glossary/#term-Python-Package-Index-PyPI) at all:Unix/macOS

```text
python3 -m pip install --no-index --find-links=/local/dir/ requests
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

This is useful if you are installing packages on a system with limited connectivity or if you want to strictly control the origin of distribution packages.

### Using other package indexes

If you want to download packages from a different index than the [Python Package Index \(PyPI\)](https://packaging.python.org/glossary/#term-Python-Package-Index-PyPI), you can use the `--index-url` flag:Unix/macOS

```text
python3 -m pip install --index-url http://index.example.com/simple/ SomeProject
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

If you want to allow packages from both the [Python Package Index \(PyPI\)](https://packaging.python.org/glossary/#term-Python-Package-Index-PyPI) and a separate index, you can use the `--extra-index-url` flag instead:Unix/macOS

```text
python3 -m pip install --extra-index-url http://index.example.com/simple/ SomeProject
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

### Upgrading packages

pip can upgrade packages in-place using the `--upgrade` flag. For example, to install the latest version of `requests` and all of its dependencies:Unix/macOS

```text
python3 -m pip install --upgrade requests
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

### Using requirements files

Instead of installing packages individually, pip allows you to declare all dependencies in a [Requirements File](https://pip.pypa.io/en/latest/user_guide/#requirements-files). For example you could create a `requirements.txt` file containing:

```text
requests==2.18.4
google-auth==1.1.0
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)

And tell pip to install all of the packages in this file using the `-r` flag:Unix/macOS

```text
python3 -m pip install -r requirements.txt
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

### Freezing dependencies

Pip can export a list of all installed packages and their versions using the `freeze` command:Unix/macOS

```text
python3 -m pip freeze
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)Windows

Which will output a list of package specifiers such as:

```text
cachetools==2.0.1
certifi==2017.7.27.1
chardet==3.0.4
google-auth==1.1.1
idna==2.6
pyasn1==0.3.6
pyasn1-modules==0.1.4
requests==2.18.4
rsa==3.4.2
six==1.11.0
urllib3==1.22
```

![Copy to clipboard](https://packaging.python.org/_static/copy-button.svg)

This is useful for creating [Requirements Files](https://pip.pypa.io/en/latest/user_guide/#requirements-files) that can re-create the exact versions of all packages installed in an environment.
