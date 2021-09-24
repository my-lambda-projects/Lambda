# Pip

To get started with using pip, you should [install Python](https://realpython.com/installing-python/) on your system.

## Ensure you have a working pip[¶](https://pip.pypa.io/en/stable/getting-started/#ensure-you-have-a-working-pip)

As a first step, you should check that you have a working Python with pip installed. This can be done by running the following commands and making sure that the output looks similar.

Linux

$ python --version Python 3.N.N $ python -m pip --version pip X.Y.Z from ... \(python 3.N.N\)

MacOS

$ python --version Python 3.N.N $ python -m pip --version pip X.Y.Z from ... \(python 3.N.N\)

Windows

C:&gt; py --version Python 3.N.N C:&gt; py -m pip --version pip X.Y.Z from ... \(python 3.N.N\)

If that worked, congratulations! You have a working pip in your environment.

If you got output that does not look like the sample above, please read the [Installation](https://pip.pypa.io/en/stable/installation/) page. It provides guidance on how to install pip within a Python environment that doesn’t have it.

## Common tasks[¶](https://pip.pypa.io/en/stable/getting-started/#common-tasks)

### Install a package[¶](https://pip.pypa.io/en/stable/getting-started/#install-a-package)

Linux

$ python -m pip install sampleproject \[...\] Successfully installed sampleproject

MacOS

$ python -m pip install sampleproject \[...\] Successfully installed sampleproject

Windows

C:&gt; py -m pip install sampleproject \[...\] Successfully installed sampleproject

By default, pip will fetch packages from [Python Package Index](https://pypi.org/), a repository of software for the Python programming language where anyone can upload packages.

### Install a package from GitHub[¶](https://pip.pypa.io/en/stable/getting-started/#install-a-package-from-github)

Linux

$ python -m pip install git+[https://github.com/pypa/sampleproject.git@main](https://github.com/pypa/sampleproject.git@main) \[...\] Successfully installed sampleproject

MacOS

$ python -m pip install git+[https://github.com/pypa/sampleproject.git@main](https://github.com/pypa/sampleproject.git@main) \[...\] Successfully installed sampleproject

Windows

C:&gt; py -m pip install git+[https://github.com/pypa/sampleproject.git@main](https://github.com/pypa/sampleproject.git@main) \[...\] Successfully installed sampleproject

See [VCS Support](https://pip.pypa.io/en/stable/topics/vcs-support/) for more information about this syntax.

### Install a package from a distribution file[¶](https://pip.pypa.io/en/stable/getting-started/#install-a-package-from-a-distribution-file)

pip can install directly from distribution files as well. They come in 2 forms:

- [source distribution](https://packaging.python.org/glossary/#term-Source-Distribution-or-sdist) \(usually shortened to “sdist”\)
- [wheel distribution](https://packaging.python.org/glossary/#term-Wheel) \(usually shortened to “wheel”\)

Linux

$ python -m pip install sampleproject-1.0.tar.gz \[...\] Successfully installed sampleproject $ python -m pip install sampleproject-1.0-py3-none-any.whl \[...\] Successfully installed sampleproject

MacOS

$ python -m pip install sampleproject-1.0.tar.gz \[...\] Successfully installed sampleproject $ python -m pip install sampleproject-1.0-py3-none-any.whl \[...\] Successfully installed sampleproject

Windows

C:&gt; py -m pip install sampleproject-1.0.tar.gz \[...\] Successfully installed sampleproject C:&gt; py -m pip install sampleproject-1.0-py3-none-any.whl \[...\] Successfully installed sampleproject

### Install multiple packages using a requirements file[¶](https://pip.pypa.io/en/stable/getting-started/#install-multiple-packages-using-a-requirements-file)

Many Python projects use `requirements.txt` files, to specify the list of packages that need to be installed for the project to run. To install the packages listed in that file, you can run:

Linux

$ python -m pip install -r requirements.txt \[...\] Successfully installed sampleproject

MacOS

$ python -m pip install -r requirements.txt \[...\] Successfully installed sampleproject

Windows

C:&gt; py -m pip install -r requirements.txt \[...\] Successfully installed sampleproject

### Upgrade a package[¶](https://pip.pypa.io/en/stable/getting-started/#upgrade-a-package)

Linux

$ python -m pip install --upgrade sampleproject Uninstalling sampleproject: \[...\] Proceed \(y/n\)? y Successfully uninstalled sampleproject

MacOS

$ python -m pip install --upgrade sampleproject Uninstalling sampleproject: \[...\] Proceed \(y/n\)? y Successfully uninstalled sampleproject

Windows

C:&gt; py -m pip install --upgrade sampleproject Uninstalling sampleproject: \[...\] Proceed \(y/n\)? y Successfully uninstalled sampleproject

### Uninstall a package[¶](https://pip.pypa.io/en/stable/getting-started/#uninstall-a-package)

Linux

$ python -m pip uninstall sampleproject Uninstalling sampleproject: \[...\] Proceed \(y/n\)? y Successfully uninstalled sampleproject

MacOS

$ python -m pip uninstall sampleproject Uninstalling sampleproject: \[...\] Proceed \(y/n\)? y Successfully uninstalled sampleproject

Windows

C:&gt; py -m pip uninstall sampleproject Uninstalling sampleproject: \[...\] Proceed \(y/n\)? y Successfully uninstalled sampleproject

## Next Steps[¶](https://pip.pypa.io/en/stable/getting-started/#next-steps)

It is recommended to learn about what virtual environments are and how to use them. This is covered in the [“Installing Packages”](https://packaging.python.org/tutorials/installing-packages/) tutorial on packaging.python.org.
