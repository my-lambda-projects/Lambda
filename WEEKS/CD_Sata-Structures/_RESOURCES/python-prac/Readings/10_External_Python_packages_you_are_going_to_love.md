# 10 External Python packages you are going to love

> by Adam Goldschmidt 10 External Python packages you are going to lovePhoto by Brina Blum on UnsplashPython is an experiment in how much freedom programmers need. Too much freedom and nobody can read another’s code; too little and expressiveness is endangered. - Guido van RossumThis freedom that Guido talks

![10 External Python packages you are going to love](https://cdn-media-1.freecodecamp.org/images/0*Metg2GPm6OTYWKZh)

by Adam Goldschmidt

![](https://cdn-media-1.freecodecamp.org/images/Tehd4MeGX2yYQUFUtdcWWNbUE7Qk9qFsZ9-Z)

Photo by [Brina Blum](https://unsplash.com/@brina_blum?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)

> Python is an experiment in how much freedom programmers need. Too much freedom and nobody can read another’s code; too little and expressiveness is endangered. - Guido van Rossum

This freedom that Guido talks about is part of what makes Python so popular. That popularity, among other, is what attracts more and more developers to use the language - eventually leading to some really amazing open source projects.

I usually find myself project hunting on GitHub once a day. Throughout this article, I will try to cover 10 wonderful packages that you may or may not be familiar with. I will start from the less trendy and end up with… well, Flask.

### Let’s begin!

![](https://cdn-media-1.freecodecamp.org/images/oGpPuDrsAM6KYONzQCrIZXv1xAEIv-oVuIUT)

#### [Loguru](https://github.com/Delgan/loguru) — Logging made easy

![](https://cdn-media-1.freecodecamp.org/images/DWrohhPZvoWbH4s8apMbg8nXZOtf3m0lAhvk)

This is a really awesome package I regularly use in my projects. It describes itself as “a library which aims to bring enjoyable logging in Python”. This package just lets you easily configure your logs out of the box.

All you have to do after installing is to import the module:

    from loguru import logger

And you’re free to use it out of the box:

    logger.debug("Hello, cool debugger")

The documentation is good and there are many customization options.

#### [more-itertools](https://github.com/erikrose/more-itertools)

A variety of interesting methods that could sometimes come very useful, such as `peekable`:

    >>> p = peekable(['a', 'b'])>>> p.peek()'a'>>> next(p)'a'

or `chunked`:

    >>> list(chunked([1, 2, 3, 4, 5, 6], 3))[[1, 2, 3], [4, 5, 6]]

#### [MonkeyType](https://github.com/Instagram/MonkeyType) — Static type annotations generator

    monkeytype run myscript.py

This package automatically generates type annotations for you, either in a stub file or in the source code itself, by collecting runtime types. Right, Python doesn’t enforce you to use annotations — but I believe they are very important for readability of the code (and sometimes for avoiding errors), which is also why there are 2 more packages in this list that are handling type annotations :)

#### [Pyright](https://github.com/Microsoft/pyright) — Static type checker

![](https://cdn-media-1.freecodecamp.org/images/B5KVRNqA90q0PqVY18dvfvc7m7rbjYYVf1EP)

Exciting new package coming from Microsoft. The inital commit was just 17 days ago! This package is the competitor of Mypy (also on this list). To be honest, I haven’t yet had the chance to use it, but I definitely plan to. I currently use mypy as a type checker, but I’ll give this one a try!

#### [requests-async](https://github.com/encode/requests-async) — support for `async`/`await` syntax for `requests`

This is a new package I discovered the other day on GitHub, and it seems pretty promising. We all know the [requests](https://github.com/kennethreitz/requests) package, that lets us easily handle HTTP requests in our code. Well, this package implements `async` and `await` words for these requests:

    import requests_async as requests​response = await requests.get('https://example.org')print(response.status_code)print(response.text)

Pretty cool right?

#### [HTTPie](https://github.com/jakubroztocil/httpie) — Modern command line cURL

![](https://cdn-media-1.freecodecamp.org/images/UAD--5ZtcqjDRRKA4Y1oXEWzob6GTM94sXGa)

Those of you who have used cURL before, must know it’s not that fun. Having to remember the parameters names, making sure your data is encapsulated… Well, HTTPie aims to make this much easier. Here’s one of their examples, of submitting form data:

    http -f POST example.org hello=World

#### [pipenv](https://github.com/pypa/pipenv) — Better packaging for Python

When I start a new project, I always create a new `virtualenv` and install some basic packages with `pip`. I then need to save these packages names in a file, be it `setup.py` or `requirements.txt`. Those of you who have worked with `npm`, know it’s much simpler there. All you need to do is write `npm —save` and the package name is saved in your `package.json`. That’s why I first created [pypkgfreeze](https://github.com/AdamGold/pypkgfreeze), a simple package to “freeze” the versions of your currently used `pip` packages into `setup.py`.

Anyway, pipenv is an interesting solution that aims to merge the two worlds - They describe it best in their repo page:

It automatically creates and manages a virtualenv for your projects, as well as adds/removes packages from your `Pipfile` as you install/uninstall packages. It also generates the ever-important `Pipfile.lock`, which is used to produce deterministic builds.

You can try it out [here](https://rootnroll.com/d/pipenv/).

#### [mypy](https://github.com/python/mypy) — Static type checker

As I said before, this is the package I currently use as my standard static type checker. It helps me keep my code readable and elegant (I think).

#### [black](https://github.com/ambv/black)

![](https://cdn-media-1.freecodecamp.org/images/dQoUny7l5N6sWs2GCECZKHALf59t9398hNNp)

I have tried many Python formatters, and `black` is clearly my favourite. The syntax looks neat, and the command line runs quick and can either check the files or actually edit them - very useful for CI/CD. You can even try it [here!](<chrome-extension://cjedbglnccaioiolemnfhjncicchinao/%5Bhttps://black.now.sh%5D(https://black.now.sh/)>)

#### [flask](https://github.com/pallets/flask)
