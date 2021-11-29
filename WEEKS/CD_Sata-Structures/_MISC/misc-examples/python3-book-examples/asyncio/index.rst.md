# asyncio \-\-- Asynchronous I/O, event loop, and concurrency tools

::: {.module synopsis="Asynchronous I/O, event loop, and concurrency tools"} asyncio :::

Purpose

: An asynchronous I/O and concurrency framework.

The `asyncio` module provides tools for building concurrent applications using coroutines. While the `threading`{.interpreted-text role="mod"} module implements concurrency through application threads and `multiprocessing`{.interpreted-text role="mod"} implements concurrency using system processes, `asyncio` uses a single-threaded, single-process approach in which parts of an application cooperate to switch tasks explicitly at optimal times. Most often this context switching occurs when the program would otherwise block waiting to read or write data, but `asyncio` also includes support for scheduling code to run at a specific future time, to enable one coroutine to wait for another to complete, for handling system signals, and for recognizing other events that may be reasons for an application to change what it is working on.

::: {.toctree} concepts coroutines scheduling futures tasks control synchronization io_protocol io_coroutine ssl dns subprocesses unix_signals executors debugging :::

::: {.note} ::: {.admonition-title} Note :::

In Python 3.5, `asyncio` is still a _provisional_ module. The API was stablized in Python 3.6, and most of the changes were backported to later patch releases of Python 3.5. As a result, the module may work slightly differently under different versions of Python 3.5. :::

::: {.seealso}

- `asyncio`{.interpreted-text role="pydoc"}
- `3156`{.interpreted-text role="pep"} \-- _Asynchronous IO Support Rebooted: the \"asyncio\" Module_
- `380`{.interpreted-text role="pep"} \-- _Syntax for Delegating to a Subgenerator_
- `492`{.interpreted-text role="pep"} \-- _Coroutines with async and await syntax_
- `concurrent.futures`{.interpreted-text role="mod"} \-- Manage Pools of Concurrent Tasks
- `socket`{.interpreted-text role="mod"} \-- Low-level network communication
- `select`{.interpreted-text role="mod"} \-- Low-level asynchronous I/O tools
- `socketserver`{.interpreted-text role="mod"} \-- Framework for creating network servers
- [asyncio: What\'s New in Python 3.6](https://docs.python.org/3/whatsnew/3.6.html#asyncio) \--Summary of the changes to `asyncio` as the API stablized in Python 3.6.
- [trollius](https://pypi.python.org/pypi/trollius) \-- A port of Tulip, the original version of asyncio, to Python 2.
- [The New asyncio Module in Python 3.4: Event Loops](http://www.drdobbs.com/open-source/the-new-asyncio-module-in-python-34-even/240168401) \-- Article by Gastón Hillar in Dr. Dobb\'s
- [Exploring Python 3\'s Asyncio by Example](http://www.giantflyingsaucer.com/blog/?p=5557) \-- Blog post by Chat Lung
- [A Web Crawler With asyncio Coroutines](http://aosabook.org/en/500L/a-web-crawler-with-asyncio-coroutines.html) \-- An article in _The Architecture of Open Source Applications_ by A. Jesse Jiryu Davis and Guido van Rossum
- [Playing with asyncio](http://www.getoffmalawn.com/blog/playing-with-asyncio) \--blog post by Nathan Hoad
- [Async I/O and Python](https://blogs.gnome.org/markmc/2013/06/04/async-io-and-python/) \-- blog post by Mark McLoughlin
- [A Curious Course on Coroutines and Concurrency](http://www.dabeaz.com/coroutines/) \-- PyCon 2009 tutorial by David Beazley
- [How the heck does async/await work in Python 3.5?](http://www.snarky.ca/how-the-heck-does-async-await-work-in-python-3-5) \-- blog post by Brett Cannon
- _Unix Network Programming, Volume 1: The Sockets Networking API, 3/E_ By W. Richard Stevens, Bill Fenner, and Andrew M. Rudoff. Published by Addison-Wesley Professional, 2004. ISBN-10: 0131411551

- _Foundations of Python Network Programminng, 3/E_ By Brandon Rhodes and John Goerzen. Published by Apress, 2014. ISBN-10: 1430258543 :::
