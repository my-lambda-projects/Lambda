# Configuring Ubuntu for Python Web Development

_Note:_ the following instructions assume that you are connected to the Internet and that you have both the `main` and `universe` package repositories enabled. All unix shell commands are assumed to be running from your home directory \($HOME\). Finally, any command that begins with `sudo` assums that you have administrative rights on your machine. If you do not — please ask your system administrator about installing the software you need.

What follows are instructions for setting up an Ubuntu 16.04 \(Xenial\) home environment for use with this book. I use Ubuntu GNU/Linux for both development and testing of the book, so it is the only system about which I can personally answer setup and configuration questions.

In the spirit of software freedom and open collaboration, please contact me if you would like to maintain a similar appendix for your own favorite system. I’d be more than happy to link to it or put it on the Open Book Project site, provided you agree to answer user feedback concerning it.

Thanks![Jeffrey Elkner](mailto:jeff%40elkner.net)Arlington, Virginia

### Python3

Ubuntu 16.04 comes with both Python 2 and Python 3 installed. Typing `python` at the shell prompt still launches Python 2. Use the command `python3` for Python 3.

In addition to the [debian packages](http://en.wikipedia.org/wiki/Debian_package) in the [Ubuntu Package archive](http://packages.ubuntu.com/), we will be using Python software from the [Python Package Index](https://pypi.python.org/pypi) or PyPI. The tool for installing packages from PyPI is called [pip](http://en.wikipedia.org/wiki/Pip_%28package_manager%29). Since we want Python 3 packages installed which will work with the Python 3 already on our Ubuntu system, we will use the Ubuntu _python3-pip_ debian package.

To add this package run following from the unix command prompt:

```text
$ sudo apt install python3-pip
```

Now would also be a good time to install a few other packages you will want to have on your system:

```text
$ sudo apt install python3-tk pep8 bzr
```

This will install the [Tkinter](http://en.wikipedia.org/wiki/Tkinter) GUI toolkit, the [pep8](http://www.python.org/dev/peps/pep-0008) Python style checker, and the [bzr](http://en.wikipedia.org/wiki/Bazaar_%28software%29) revision control system which we will use to grab some program examples.

### Bottle

[Bottle](http://bottlepy.org/) is a micro [web application framework](http://en.wikipedia.org/wiki/Web_application_framework) written in Python. It is used in this book to introduce [web application](http://en.wikipedia.org/wiki/Web_application) development.

To install `bottle` run:

```text
$ sudo apt install python3-bottle
```

Then try:

```text
>>> import bottle
```

at the python prompt to varify that it is working.

### Vim

[Vim](http://www.vim.org/) can be used very effectively for Python development, but Ubuntu only comes with the `vim-tiny` package installed by default, so it doesn’t support color syntax highlighting or auto-indenting.

To use Vim, do the following:

1. From the unix command prompt, run:

   ```text
   $ sudo apt install vim
   ```

2. Create a file in your home directory named `.vimrc` that contains the following:

   ```text
   syntax enable
   filetype indent on
   set et
   set sw=4
   set smarttab
   map <f3> :w\|!python3 % <cr>
   map <f4> :w\|!python3 -m doctest -v % <cr>
   map <f8> :w\|!pep8 % -v <cr>
   ```

When you edit a file with a `.py` extension, you should now have color systax highlighting and auto indenting. Pressing the `<f3>` key should run your program, and bring you back to the editor when the program completes. `<f4>` runs the program with the verbose \(`-v`\) switch set, which will be helpful when running doctests. `<f8>` will run the pep8 style checker against your program source, which is useful in helping you learn to write Python programs with good styling.

To learn to use vim, run the following command at a unix command prompt:

```text
$ vimtutor
```

### $HOME environment

The following creates a useful environment in your [home directory](http://en.wikipedia.org/wiki/Home_directory) for using `pip3` to install packages into your home directory and for adding your own Python libraries and executable scripts:

1. From the command prompt in your home directory, create `bin` and `lib` subdirectories of your `.local` directory by running the following command:

   ```text
   $ mkdir .local/lib .local/bin
   ```

2. Now add a `my_python` subdirectory to `.local/lib`:

   ```text
   $ mkdir .local/lib/my_python
   ```

3. Add the following lines to the bottom of your `.bashrc` in your home directory:

   ```text
   EDITOR=vim
   PATH=$HOME/.local/bin$PATH
   PYTHONPATH=$HOME/.local/lib/my_python

   export EDITOR PATH PYTHONPATH
   ```

   This will set your prefered editor to Vim, add your own `.local/bin` directory as a place to put executable scripts, and add `.local/lib/my_python` to your Python search path so modules you put there will be found by Python.

   Then run:

   ```text
   $ . .bashrc
   ```

   to set these [environment varialbles](http://en.wikipedia.org/wiki/Environment_variable) and prepend the `.local/bin` directory to your [search path](http://en.wikipedia.org/wiki/Path_%28variable%29) \(note: logging out and back in will accomplish the same result\).

### Lumpy

Lumpy is python module that generates [UML](http://en.wikipedia.org/wiki/Unified_Modeling_Language) diagrams. It was written by [Allen B. Downey](http://en.wikipedia.org/wiki/Allen_B._Downey) as part of his [Swampy](http://www.greenteapress.com/thinkpython/swampy) suite of Python programs written for use with his textbooks.

The version here is modified to work with Python 3 on Ubuntu 16.04. Click on [`lumpy.py`](https://www.openbookproject.net/books/bpp4awd/_downloads/4a0cd061f1926fc15f143fb811df283d/lumpy.py) to download the module. Put this file in your `.local/lib/my_python` directory after your [$HOME environment](https://www.openbookproject.net/books/bpp4awd/app_a.html#configuring-home) is configured.

Lumpy is used in several of the exercises in this book to help illustrate python [data structures](http://en.wikipedia.org/wiki/Data_structure).

### Making a python script executable and runnable from anywhere

On unix systems, Python scripts can be made _executable_ using the following process:

1. Add this line as the first line in the script:

   ```text
   #!/usr/bin/env python3
   ```

2. At the unix command prompt, type the following to make `myscript.py` executable:

   ```text
   $ chmod +x myscript.py
   ```

3. Move `myscript.py` into your `.local/bin` directory, and it will be runnable from anywhere.
