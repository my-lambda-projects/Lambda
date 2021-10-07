### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](whatnow.html '13. What Now?') |
- [previous](stdlib2.html '11. Brief Tour of the Standard Library — Part II') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-

<span id="tut-venv"></span>

# <span class="section-number">12. </span>Virtual Environments and Packages<a href="#virtual-environments-and-packages" class="headerlink" title="Permalink to this headline">¶</a>

## <span class="section-number">12.1. </span>Introduction<a href="#introduction" class="headerlink" title="Permalink to this headline">¶</a>

Python applications will often use packages and modules that don’t come as part of the standard library. Applications will sometimes need a specific version of a library, because the application may require that a particular bug has been fixed or the application may be written using an obsolete version of the library’s interface.

This means it may not be possible for one Python installation to meet the requirements of every application. If application A needs version 1.0 of a particular module but application B needs version 2.0, then the requirements are in conflict and installing either version 1.0 or 2.0 will leave one application unable to run.

The solution for this problem is to create a <a href="https://docs.python.org/3/glossary.html#term-virtual-environment" class="reference internal"><span class="xref std std-term">virtual environment</span></a>, a self-contained directory tree that contains a Python installation for a particular version of Python, plus a number of additional packages.

Different applications can then use different virtual environments. To resolve the earlier example of conflicting requirements, application A can have its own virtual environment with version 1.0 installed while application B has another virtual environment with version 2.0. If application B requires a library be upgraded to version 3.0, this will not affect application A’s environment.

## <span class="section-number">12.2. </span>Creating Virtual Environments<a href="#creating-virtual-environments" class="headerlink" title="Permalink to this headline">¶</a>

The module used to create and manage virtual environments is called <a href="https://docs.python.org/3/library/venv.html#module-venv" class="reference internal" title="venv: Creation of virtual environments."><code class="sourceCode python">venv</code></a>. <a href="https://docs.python.org/3/library/venv.html#module-venv" class="reference internal" title="venv: Creation of virtual environments."><code class="sourceCode python">venv</code></a> will usually install the most recent version of Python that you have available. If you have multiple versions of Python on your system, you can select a specific Python version by running `python3` or whichever version you want.

To create a virtual environment, decide upon a directory where you want to place it, and run the <a href="https://docs.python.org/3/library/venv.html#module-venv" class="reference internal" title="venv: Creation of virtual environments."><code class="sourceCode python">venv</code></a> module as a script with the directory path:

    python3 -m venv tutorial-env

This will create the `tutorial-env` directory if it doesn’t exist, and also create directories inside it containing a copy of the Python interpreter, the standard library, and various supporting files.

A common directory location for a virtual environment is `.venv`. This name keeps the directory typically hidden in your shell and thus out of the way while giving it a name that explains why the directory exists. It also prevents clashing with `.env` environment variable definition files that some tooling supports.

Once you’ve created a virtual environment, you may activate it.

On Windows, run:

    tutorial-env\Scripts\activate.bat

On Unix or MacOS, run:

    source tutorial-env/bin/activate

(This script is written for the bash shell. If you use the **csh** or **fish** shells, there are alternate `activate.csh` and `activate.fish` scripts you should use instead.)

Activating the virtual environment will change your shell’s prompt to show what virtual environment you’re using, and modify the environment so that running `python` will get you that particular version and installation of Python. For example:

    $ source ~/envs/tutorial-env/bin/activate
    (tutorial-env) $ python
    Python 3.5.1 (default, May  6 2016, 10:59:36)
      ...
    >>> import sys
    >>> sys.path
    ['', '/usr/local/lib/python35.zip', ...,
    '~/envs/tutorial-env/lib/python3.5/site-packages']
    >>>

## <span class="section-number">12.3. </span>Managing Packages with pip<a href="#managing-packages-with-pip" class="headerlink" title="Permalink to this headline">¶</a>

You can install, upgrade, and remove packages using a program called **pip**. By default `pip` will install packages from the Python Package Index, &lt;<a href="https://pypi.org/" class="reference external">https://pypi.org</a>&gt;. You can browse the Python Package Index by going to it in your web browser.

`pip` has a number of subcommands: “install”, “uninstall”, “freeze”, etc. (Consult the <a href="https://docs.python.org/3/installing/index.html#installing-index" class="reference internal"><span class="std std-ref">Installing Python Modules</span></a> guide for complete documentation for `pip`.)

You can install the latest version of a package by specifying a package’s name:

    (tutorial-env) $ python -m pip install novas
    Collecting novas
      Downloading novas-3.1.1.3.tar.gz (136kB)
    Installing collected packages: novas
      Running setup.py install for novas
    Successfully installed novas-3.1.1.3

You can also install a specific version of a package by giving the package name followed by `==` and the version number:

    (tutorial-env) $ python -m pip install requests==2.6.0
    Collecting requests==2.6.0
      Using cached requests-2.6.0-py2.py3-none-any.whl
    Installing collected packages: requests
    Successfully installed requests-2.6.0

If you re-run this command, `pip` will notice that the requested version is already installed and do nothing. You can supply a different version number to get that version, or you can run `pip install --upgrade` to upgrade the package to the latest version:

    (tutorial-env) $ python -m pip install --upgrade requests
    Collecting requests
    Installing collected packages: requests
      Found existing installation: requests 2.6.0
        Uninstalling requests-2.6.0:
          Successfully uninstalled requests-2.6.0
    Successfully installed requests-2.7.0

`pip uninstall` followed by one or more package names will remove the packages from the virtual environment.

`pip show` will display information about a particular package:

    (tutorial-env) $ pip show requests
    ---
    Metadata-Version: 2.0
    Name: requests
    Version: 2.7.0
    Summary: Python HTTP for Humans.
    Home-page: http://python-requests.org
    Author: Kenneth Reitz
    Author-email: me@kennethreitz.com
    License: Apache 2.0
    Location: /Users/akuchling/envs/tutorial-env/lib/python3.4/site-packages
    Requires:

`pip list` will display all of the packages installed in the virtual environment:

    (tutorial-env) $ pip list
    novas (3.1.1.3)
    numpy (1.9.2)
    pip (7.0.3)
    requests (2.7.0)
    setuptools (16.0)

`pip freeze` will produce a similar list of the installed packages, but the output uses the format that `pip install` expects. A common convention is to put this list in a `requirements.txt` file:

    (tutorial-env) $ pip freeze > requirements.txt
    (tutorial-env) $ cat requirements.txt
    novas==3.1.1.3
    numpy==1.9.2
    requests==2.7.0

The `requirements.txt` can then be committed to version control and shipped as part of an application. Users can then install all the necessary packages with `install -r`:

    (tutorial-env) $ python -m pip install -r requirements.txt
    Collecting novas==3.1.1.3 (from -r requirements.txt (line 1))
      ...
    Collecting numpy==1.9.2 (from -r requirements.txt (line 2))
      ...
    Collecting requests==2.7.0 (from -r requirements.txt (line 3))
      ...
    Installing collected packages: novas, numpy, requests
      Running setup.py install for novas
    Successfully installed novas-3.1.1.3 numpy-1.9.2 requests-2.7.0

`pip` has many more options. Consult the <a href="https://docs.python.org/3/installing/index.html#installing-index" class="reference internal"><span class="std std-ref">Installing Python Modules</span></a> guide for complete documentation for `pip`. When you’ve written a package and want to make it available on the Python Package Index, consult the <a href="https://docs.python.org/3/distributing/index.html#distributing-index" class="reference internal"><span class="std std-ref">Distributing Python Modules</span></a> guide.

### [Table of Contents](https://docs.python.org/3/contents.html)

- <a href="#" class="reference internal">12. Virtual Environments and Packages</a>
  - <a href="#introduction" class="reference internal">12.1. Introduction</a>
  - <a href="#creating-virtual-environments" class="reference internal">12.2. Creating Virtual Environments</a>
  - <a href="#managing-packages-with-pip" class="reference internal">12.3. Managing Packages with pip</a>

#### Previous topic

[<span class="section-number">11. </span>Brief Tour of the Standard Library — Part II](stdlib2.html 'previous chapter')

#### Next topic

[<span class="section-number">13. </span>What Now?](whatnow.html 'next chapter')

### This Page

- [Report a Bug](https://docs.python.org/3/bugs.html)
- [Show Source](https://github.com/python/cpython/blob/3.9/Doc/tutorial/venv.rst)

### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](whatnow.html '13. What Now?') |
- [previous](stdlib2.html '11. Brief Tour of the Standard Library — Part II') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-
