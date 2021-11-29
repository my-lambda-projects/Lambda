# projects of Python installation and packaging

## PyPA Projects[¶](https://packaging.python.org/key_projects/#pypa-projects)

### bandersnatch[¶](https://packaging.python.org/key_projects/#bandersnatch)

[Issues](https://github.com/pypa/bandersnatch/issues) \| [GitHub](https://github.com/pypa/bandersnatch) \| [PyPI](https://pypi.org/project/bandersnatch)

`bandersnatch` is a PyPI mirroring client designed to efficiently create a complete mirror of the contents of PyPI. Organizations thus save bandwidth and latency on package downloads \(especially in the context of automated tests\) and to prevent heavily loading PyPI’s Content Delivery Network \(CDN\).

### build[¶](https://packaging.python.org/key_projects/#build)

[Docs](https://pypa-build.readthedocs.io/) \| [Issues](https://github.com/pypa/build/issues) \| [GitHub](https://github.com/pypa/build) \| [PyPI](https://pypi.org/project/build)

`build` is a [**PEP 517**](https://www.python.org/dev/peps/pep-0517) compatible Python package builder. It provides a CLI to build packages, as well as a Python API.

### cibuildwheel[¶](https://packaging.python.org/key_projects/#cibuildwheel)

[Docs](https://cibuildwheel.readthedocs.io/) \| [Issues](https://github.com/pypa/cibuildwheel/issues) \| [GitHub](https://github.com/pypa/cibuildwheel) \| [PyPI](https://pypi.org/project/cibuildwheel) \| [Discussions](https://github.com/pypa/cibuildwheel/discussions) \| [Discord \#cibuildwheel](https://discord.com/invite/pypa)

`cibuildwheel` is a Python package that builds [wheels](https://packaging.python.org/glossary/#term-Wheel) for all common platforms and Python versions on most CI systems. Also see [multibuild](https://packaging.python.org/key_projects/#multibuild).

### distlib[¶](https://packaging.python.org/key_projects/#distlib)

[Docs](http://pythonhosted.org/distlib/) \| [Issues](https://bitbucket.org/pypa/distlib/issues?status=new&status=open) \| [Bitbucket](https://bitbucket.org/pypa/distlib) \| [PyPI](https://pypi.org/project/distlib)

`distlib` is a library which implements low-level functions that relate to packaging and distribution of Python software. `distlib` implements several relevant PEPs \(Python Enhancement Proposal standards\) and is useful for developers of third-party packaging tools to make and upload binary and source [distributions](https://packaging.python.org/glossary/#term-Distribution-Package), achieve interoperability, resolve dependencies, manage package resources, and do other similar functions.

Unlike the stricter [packaging](https://packaging.python.org/key_projects/#packaging) project \(below\), which specifically implements modern Python packaging interoperability standards, `distlib` also attempts to provide reasonable fallback behaviours when asked to handle legacy packages and metadata that predate the modern interoperability standards and fall into the subset of packages that are incompatible with those standards.

### packaging[¶](https://packaging.python.org/key_projects/#packaging)

[Docs](https://packaging.pypa.io/) \| [Issues](https://github.com/pypa/packaging/issues) \| [GitHub](https://github.com/pypa/packaging) \| [PyPI](https://pypi.org/project/packaging)

Core utilities for Python packaging used by [pip](https://packaging.python.org/key_projects/#pip) and [setuptools](https://packaging.python.org/key_projects/#setuptools).

The core utilities in the packaging library handle version handling, specifiers, markers, requirements, tags, and similar attributes and tasks for Python packages. Most Python users rely on this library without needing to explicitly call it; developers of the other Python packaging, distribution, and installation tools listed here often use its functionality to parse, discover, and otherwise handle dependency attributes.

This project specifically focuses on implementing the modern Python packaging interoperability standards defined at [PyPA specifications](https://packaging.python.org/specifications/#packaging-specifications), and will report errors for sufficiently old legacy packages that are incompatible with those standards. In contrast, the [distlib](https://packaging.python.org/key_projects/#distlib) project is a more permissive library that attempts to provide a plausible reading of ambiguous metadata in cases where [packaging](https://packaging.python.org/key_projects/#packaging) will instead report on error.

### pip[¶](https://packaging.python.org/key_projects/#pip)

[Docs](https://pip.pypa.io/en/stable/) \| [Issues](https://github.com/pypa/pip/issues) \| [GitHub](https://github.com/pypa/pip) \| [PyPI](https://pypi.org/project/pip/)

The most popular tool for installing Python packages, and the one included with modern versions of Python.

It provides the essential core features for finding, downloading, and installing packages from PyPI and other Python package indexes, and can be incorporated into a wide range of development workflows via its command-line interface \(CLI\).

### Pipenv[¶](https://packaging.python.org/key_projects/#pipenv)

[Docs](https://pipenv.pypa.io/) \| [Source](https://github.com/pypa/pipenv) \| [Issues](https://github.com/pypa/pipenv/issues) \| [PyPI](https://pypi.org/project/pipenv)

Pipenv is a project that aims to bring the best of all packaging worlds to the Python world. It harnesses [Pipfile](https://packaging.python.org/key_projects/#pipfile), [pip](https://packaging.python.org/key_projects/#pip), and [virtualenv](https://packaging.python.org/key_projects/#virtualenv) into one single toolchain. It features very pretty terminal colors.

Pipenv aims to help users manage environments, dependencies, and imported packages on the command line. It also works well on Windows \(which other tools often underserve\), makes and checkes file hashes, to ensure compliance with hash-locked dependency specifiers, and eases uninstallation of packages and dependencies. It is used by Python users and system administrators, but has been less maintained since late 2018.

### Pipfile[¶](https://packaging.python.org/key_projects/#pipfile)

[Source](https://github.com/pypa/pipfile)

`Pipfile` and its sister `Pipfile.lock` are a higher-level application-centric alternative to [pip](https://packaging.python.org/key_projects/#pip)’s lower-level `requirements.txt` file.

### pipx[¶](https://packaging.python.org/key_projects/#pipx)

[Docs](https://pypa.github.io/pipx/) \| [GitHub](https://github.com/pypa/pipx) \| [PyPI](https://pypi.org/project/pipx/)

pipx is a tool to install and run Python command-line applications without causing dependency conflicts with other packages installed on the system.

### Python Packaging User Guide[¶](https://packaging.python.org/key_projects/#python-packaging-user-guide)

[Docs](https://packaging.python.org/en/latest/) \| [Issues](https://github.com/pypa/python-packaging-user-guide/issues) \| [GitHub](https://github.com/pypa/python-packaging-user-guide)

This guide!

### readme_renderer[¶](https://packaging.python.org/key_projects/#readme-renderer)

[GitHub and docs](https://github.com/pypa/readme_renderer/) \| [PyPI](https://pypi.org/project/readme_renderer/)

`readme_renderer` is a library that package developers use to render their user documentation \(README\) files into HTML from markup languages such as Markdown or reStructuredText. Developers call it on its own or via [twine](https://packaging.python.org/key_projects/#twine), as part of their release management process, to check that their package descriptions will properly display on PyPI.

### setuptools[¶](https://packaging.python.org/key_projects/#easy-install)

[Docs](https://setuptools.readthedocs.io/en/latest/) \| [Issues](https://github.com/pypa/setuptools/issues) \| [GitHub](https://github.com/pypa/setuptools) \| [PyPI](https://pypi.org/project/setuptools)

setuptools \(which includes `easy_install`\) is a collection of enhancements to the Python distutils that allow you to more easily build and distribute Python [distributions](https://packaging.python.org/glossary/#term-Distribution-Package), especially ones that have dependencies on other packages.

[distribute](https://pypi.org/project/distribute) was a fork of setuptools that was merged back into setuptools \(in v0.7\), thereby making setuptools the primary choice for Python packaging.

### trove-classifiers[¶](https://packaging.python.org/key_projects/#trove-classifiers)

[Issues](https://github.com/pypa/trove-classifiers/issues) \| [GitHub](https://github.com/pypa/trove-classifiers) \| [PyPI](https://pypi.org/project/trove-classifiers/)

trove-classifiers is the canonical source for [classifiers on PyPI](https://pypi.org/classifiers/), which project maintainers use to [systematically describe their projects](https://packaging.python.org/specifications/core-metadata/#classifier-multiple-use) so that users can better find projects that match their needs on the PyPI.

The trove-classifiers package contains a list of valid classifiers and deprecated classifiers \(which are paired with the classifiers that replace them\). Use this package to validate classifiers used in packages intended for uploading to PyPI. As this list of classifiers is published as code, you can install and import it, giving you a more convenient workflow compared to referring to the [list published on PyPI](https://pypi.org/classifiers/). The [issue tracker](https://github.com/pypa/trove-classifiers/issues) for the project hosts discussions on proposed classifiers and requests for new classifiers.

### twine[¶](https://packaging.python.org/key_projects/#twine)

[Docs](https://twine.readthedocs.io/en/latest/) \| [Issues](https://github.com/pypa/twine/issues) \| [GitHub](https://github.com/pypa/twine) \| [PyPI](https://pypi.org/project/twine)

Twine is the primary tool developers use to upload packages to the Python Package Index or other Python package indexes. It is a command-line program that passes program files and metadata to a web API. Developers use it because it’s the official PyPI upload tool, it’s fast and secure, it’s maintained, and it reliably works.

### virtualenv[¶](https://packaging.python.org/key_projects/#virtualenv)

[Docs](https://virtualenv.pypa.io/en/stable/) \| [Issues](https://github.com/pypa/virtualenv/issues) \| [GitHub](https://github.com/pypa/virtualenv) \| [PyPI](https://pypi.org/project/virtualenv/)

virtualenv is a tool which uses the command-line path environment variable to create isolated Python [Virtual Environments](https://packaging.python.org/glossary/#term-Virtual-Environment), much as [venv](https://packaging.python.org/key_projects/#venv) does. virtualenv provides additional functionality, compared to [venv](https://packaging.python.org/key_projects/#venv), by supporting Python 2.7 and by providing convenient features for configuring, maintaining, duplicating, and troubleshooting the virtual environments. For more information, see the section on [Creating Virtual Environments](https://packaging.python.org/tutorials/installing-packages/#creating-and-using-virtual-environments).

### Warehouse[¶](https://packaging.python.org/key_projects/#warehouse)

[Docs](https://warehouse.pypa.io/) \| [Issues](https://github.com/pypa/warehouse/issues) \| [GitHub](https://github.com/pypa/warehouse)

The current codebase powering the [Python Package Index \(PyPI\)](https://packaging.python.org/glossary/#term-Python-Package-Index-PyPI). It is hosted at [pypi.org](https://pypi.org/). The default source for [pip](https://packaging.python.org/key_projects/#pip) downloads.

### wheel[¶](https://packaging.python.org/key_projects/#wheel)

[Docs](https://wheel.readthedocs.io/en/latest/) \| [Issues](https://github.com/pypa/wheel/issues) \| [GitHub](https://github.com/pypa/wheel) \| [PyPI](https://pypi.org/project/wheel)

Primarily, the wheel project offers the `bdist_wheel` [setuptools](https://packaging.python.org/key_projects/#setuptools) extension for creating [wheel distributions](https://packaging.python.org/glossary/#term-Wheel). Additionally, it offers its own command line utility for creating and installing wheels.

See also [auditwheel](https://github.com/pypa/auditwheel), a tool that package developers use to check and fix Python packages they are making in the binary wheel format. It provides functionality to discover dependencies, check metadata for compliance, and repair the wheel and metadata to properly link and include external shared libraries in a package.

## Non-PyPA Projects[¶](https://packaging.python.org/key_projects/#non-pypa-projects)

### buildout[¶](https://packaging.python.org/key_projects/#buildout)

[Docs](http://www.buildout.org/en/latest/) \| [Issues](https://bugs.launchpad.net/zc.buildout) \| [PyPI](https://pypi.org/project/zc.buildout) \| [GitHub](https://github.com/buildout/buildout/)

Buildout is a Python-based build system for creating, assembling and deploying applications from multiple parts, some of which may be non-Python-based. It lets you create a buildout configuration and reproduce the same software later.

### conda[¶](https://packaging.python.org/key_projects/#conda)

[Docs](http://conda.pydata.org/docs/)

conda is the package management tool for [Anaconda](https://docs.anaconda.com/anaconda/) Python installations. Anaconda Python is a distribution from [Anaconda, Inc](https://www.anaconda.com/download) specifically aimed at the scientific community, and in particular on Windows where the installation of binary extensions is often difficult.

Conda is a completely separate tool from [pip](https://packaging.python.org/key_projects/#pip), virtualenv and wheel, but provides many of their combined features in terms of package management, virtual environment management and deployment of binary extensions.

Conda does not install packages from PyPI and can install only from the official Anaconda repositories, or anaconda.org \(a place for user-contributed _conda_ packages\), or a local \(e.g. intranet\) package server. However, note that [pip](https://packaging.python.org/key_projects/#pip) can be installed into, and work side-by-side with conda for managing [distributions](https://packaging.python.org/glossary/#term-Distribution-Package) from PyPI. Also, [conda skeleton](https://docs.conda.io/projects/conda-build/en/latest/user-guide/tutorials/build-pkgs-skeleton.html) is a tool to make Python packages installable by conda by first fetching them from PyPI and modifying their metadata.

### devpi[¶](https://packaging.python.org/key_projects/#devpi)

[Docs](http://doc.devpi.net/latest/) \| [Issues](https://bitbucket.org/hpk42/devpi/issues) \| [PyPI](https://pypi.org/project/devpi)

devpi features a powerful PyPI-compatible server and PyPI proxy cache with a complementary command line tool to drive packaging, testing and release activities with Python. devpi also provides a browsable and searchable web interface.

### flit[¶](https://packaging.python.org/key_projects/#flit)

[Docs](https://flit.readthedocs.io/en/latest/) \| [Issues](https://github.com/takluyver/flit/issues) \| [PyPI](https://pypi.org/project/flit)

Flit provides a simple way to upload pure Python packages and modules to PyPI. It focuses on [making the easy things easy](https://flit.readthedocs.io/en/latest/rationale.html) for packaging. Flit can generate a configuration file to quickly set up a simple project, build source distributions and wheels, and upload them to PyPI.

Flit uses `pyproject.toml` to configure a project. Flit does not rely on tools such as [setuptools](https://packaging.python.org/key_projects/#setuptools) to build distributions, or [twine](https://packaging.python.org/key_projects/#twine) to upload them to PyPI. Flit requires Python 3, but you can use it to distribute modules for Python 2, so long as they can be imported on Python 3.

### enscons[¶](https://packaging.python.org/key_projects/#enscons)

[Source](https://bitbucket.org/dholth/enscons/src) \| [Issues](https://bitbucket.org/dholth/enscons/issues) \| [PyPI](https://pypi.org/project/enscons)

Enscons is a Python packaging tool based on [SCons](http://scons.org/). It builds [pip](https://packaging.python.org/key_projects/#pip)-compatible source distributions and wheels without using distutils or setuptools, including distributions with C extensions. Enscons has a different architecture and philosophy than [distutils](https://packaging.python.org/key_projects/#distutils). Rather than adding build features to a Python packaging system, enscons adds Python packaging to a general purpose build system. Enscons helps you to build sdists that can be automatically built by [pip](https://packaging.python.org/key_projects/#pip), and wheels that are independent of enscons.

### Hashdist[¶](https://packaging.python.org/key_projects/#hashdist)

[Docs](https://hashdist.readthedocs.io/en/latest/) \| [GitHub](https://github.com/hashdist/hashdist/)

Hashdist is a library for building non-root software distributions. Hashdist is trying to be “the Debian of choice for cases where Debian technology doesn’t work”. The best way for Pythonistas to think about Hashdist may be a more powerful hybrid of [virtualenv](https://packaging.python.org/key_projects/#virtualenv) and [buildout](https://packaging.python.org/key_projects/#buildout). It is aimed at solving the problem of installing scientific software, and making package distribution stateless, cached, and branchable. It is used by some researchers but has been lacking in maintenance since 2016.

### hatch[¶](https://packaging.python.org/key_projects/#hatch)

[GitHub and Docs](https://github.com/ofek/hatch) \| [PyPI](https://pypi.org/project/hatch)

Hatch is a unified command-line tool meant to conveniently manage dependencies and environment isolation for Python developers. Python package developers use Hatch to configure, version, specify dependencies for, and publish packages to PyPI. Under the hood, it uses [twine](https://packaging.python.org/key_projects/#twine) to upload packages to PyPI, and [pip](https://packaging.python.org/key_projects/#pip) to download and install packages.

### multibuild[¶](https://packaging.python.org/key_projects/#multibuild)

[GitHub](https://github.com/matthew-brett/multibuild)

Multibuild is a set of CI scripts for building and testing Python [wheels](https://packaging.python.org/glossary/#term-Wheel) for Linux, macOS, and \(less flexibly\) Windows. Also see [cibuildwheel](https://packaging.python.org/key_projects/#cibuildwheel).

### pex[¶](https://packaging.python.org/key_projects/#pex)

[Docs](https://pex.readthedocs.io/en/latest/) \| [GitHub](https://github.com/pantsbuild/pex/) \| [PyPI](https://pypi.org/project/pex)

pex is both a library and tool for generating `.pex` \(Python EXecutable\) files, standalone Python environments in the spirit of [virtualenv](https://packaging.python.org/key_projects/#virtualenv). `.pex` files are just carefully constructed zip files with a `#!/usr/bin/env python` and special `__main__.py`, and are designed to make deployment of Python applications as simple as `cp`.

### pip-tools[¶](https://packaging.python.org/key_projects/#pip-tools)

[GitHub and Docs](https://github.com/jazzband/pip-tools/) \| [PyPI](https://pypi.org/project/pip-tools/)

pip-tools is a suite of tools meant for Python system administrators and release managers who particularly want to keep their builds deterministic yet stay up to date with new versions of their dependencies. Users can specify particular release of their dependencies via hash, conveniently make a properly formatted list of requirements from information in other parts of their program, update all dependencies \(a feature [pip](https://packaging.python.org/key_projects/#pip) currently does not provide\), and create layers of constraints for the program to obey.

### piwheels[¶](https://packaging.python.org/key_projects/#piwheels)

[Website](https://www.piwheels.org/) \| [Docs](https://piwheels.readthedocs.io/) \| [GitHub](https://github.com/piwheels/piwheels/)

piwheels is a website, and software underpinning it, that fetches source code distribution packages from PyPI and compiles them into binary wheels that are optimized for installation onto Raspberry Pi computers. Raspberry Pi OS pre-configures pip to use piwheels.org as an additional index to PyPI.

### poetry[¶](https://packaging.python.org/key_projects/#poetry)

[Docs](https://python-poetry.org/) \| [GitHub](https://github.com/python-poetry/poetry) \| [PyPI](https://pypi.org/project/poetry/)

poetry is a command-line tool to handle dependency installation and isolation as well as building and packaging of Python packages. It uses `pyproject.toml` and, instead of depending on the resolver functionality within [pip](https://packaging.python.org/key_projects/#pip), provides its own dependency resolver. It attempts to speed users’ experience of installation and dependency resolution by locally caching metadata about dependencies.

### pypiserver[¶](https://packaging.python.org/key_projects/#pypiserver)

[Docs](https://github.com/pypiserver/pypiserver/blob/master/README.rst) \| [GitHub](https://github.com/pypiserver/pypiserver) \| [PyPI](https://pypi.org/project/pypiserver/)

pypiserver is a minimalist application that serves as a private Python package index within organizations, implementing a simple API and browser interface. You can upload private packages using standard upload tools, and users can download and install them with [pip](https://packaging.python.org/key_projects/#pip), without publishing them publicly. Organizations who use pypiserver usually download packages both from pypiserver and from PyPI.

### scikit-build[¶](https://packaging.python.org/key_projects/#scikit-build)

[Docs](https://scikit-build.readthedocs.io/en/latest/) \| [GitHub](https://github.com/scikit-build/scikit-build/) \| [PyPI](https://pypi.org/project/scikit-build)

Scikit-build is an improved build system generator for CPython C/C++/Fortran/Cython extensions that integrates with [setuptools](https://packaging.python.org/key_projects/#setuptools), [wheel](https://packaging.python.org/key_projects/#wheel) and [pip](https://packaging.python.org/key_projects/#pip). It internally uses [cmake](https://pypi.org/project/cmake) \(available on PyPI\) to provide better support for additional compilers, build systems, cross compilation, and locating dependencies and their associated build requirements. To speed up and parallelize the build of large projects, the user can install [ninja](https://pypi.org/project/ninja) \(also available on PyPI\).

### shiv[¶](https://packaging.python.org/key_projects/#shiv)

[Docs](https://shiv.readthedocs.io/en/latest/) \| [GitHub](https://github.com/linkedin/shiv) \| [PyPI](https://pypi.org/project/shiv/)

shiv is a command line utility for building fully self contained Python zipapps as outlined in [**PEP 441**](https://www.python.org/dev/peps/pep-0441), but with all their dependencies included. Its primary goal is making distributing Python applications and command line tools fast & easy.

### Spack[¶](https://packaging.python.org/key_projects/#spack)

[Docs](https://spack.readthedocs.io/) \| [GitHub](https://github.com/llnl/spack/) \| [Paper](http://www.computer.org/csdl/proceedings/sc/2015/3723/00/2807623.pdf) \| [Slides](https://tgamblin.github.io/files/Gamblin-Spack-SC15-Talk.pdf)

A flexible package manager designed to support multiple versions, configurations, platforms, and compilers. Spack is like Homebrew, but packages are written in Python and parameterized to allow easy swapping of compilers, library versions, build options, etc. Arbitrarily many versions of packages can coexist on the same system. Spack was designed for rapidly building high performance scientific applications on clusters and supercomputers.

Spack is not in PyPI \(yet\), but it requires no installation and can be used immediately after cloning from GitHub.

### zest.releaser[¶](https://packaging.python.org/key_projects/#zest-releaser)

[Docs](https://zestreleaser.readthedocs.io/en/latest/) \| [GitHub](https://github.com/zestsoftware/zest.releaser/) \| [PyPI](https://pypi.org/project/zest.releaser/)

`zest.releaser` is a Python package release tool providing an abstraction layer on top of [twine](https://packaging.python.org/key_projects/#twine). Python developers use `zest.releaser` to automate incrementing package version numbers, updating changelogs, tagging releases in source control, and uploading new packages to PyPI.

## Standard Library Projects[¶](https://packaging.python.org/key_projects/#standard-library-projects)

### ensurepip[¶](https://packaging.python.org/key_projects/#ensurepip)

[Docs](https://docs.python.org/3/library/ensurepip.html) \| [Issues](http://bugs.python.org/)

A package in the Python Standard Library that provides support for bootstrapping [pip](https://packaging.python.org/key_projects/#pip) into an existing Python installation or virtual environment. In most cases, end users won’t use this module, but rather it will be used during the build of the Python distribution.

### distutils[¶](https://packaging.python.org/key_projects/#distutils)

[Docs](https://docs.python.org/3/library/distutils.html) \| [Issues](http://bugs.python.org/)

The original Python packaging system, added to the standard library in Python 2.0.

Due to the challenges of maintaining a packaging system where feature updates are tightly coupled to language runtime updates, direct usage of [distutils](https://packaging.python.org/key_projects/#distutils) is now actively discouraged, with [setuptools](https://packaging.python.org/key_projects/#setuptools) being the preferred replacement. [setuptools](https://packaging.python.org/key_projects/#setuptools) not only provides features that plain [distutils](https://packaging.python.org/key_projects/#distutils) doesn’t offer \(such as dependency declarations and entry point declarations\), it also provides a consistent build interface and feature set across all supported Python versions.

### venv[¶](https://packaging.python.org/key_projects/#venv)

[Docs](https://docs.python.org/3/library/venv.html) \| [Issues](http://bugs.python.org/)

A package in the Python Standard Library \(starting with Python 3.3\) for creating [Virtual Environments](https://packaging.python.org/glossary/#term-Virtual-Environment). For more information, see the section on [Creating Virtual Environments](https://packaging.python.org/tutorials/installing-packages/#creating-and-using-virtual-environments).
