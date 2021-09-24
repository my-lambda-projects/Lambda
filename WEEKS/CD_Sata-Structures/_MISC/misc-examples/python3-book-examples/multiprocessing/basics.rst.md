multiprocessing Basics
======================

The simplest way to spawn a second process is to instantiate a `Process`
object with a target function and call `start()` to let it begin
working.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
multiprocessing\_simple.py
:::

The output includes the word \"Worker\" printed five times, although it
may not come out entirely clean, depending on the order of execution,
because each process is competing for access to the output stream.

``` {.sourceCode .none}
$ python3 multiprocessing_simple.py

Worker
Worker
Worker
Worker
Worker
```

It usually more useful to be able to spawn a process with arguments to
tell it what work to do. Unlike with `threading`, in order to pass
arguments to a `multiprocessing` `Process` the arguments must be able to
be serialized using `pickle`{.interpreted-text role="mod"}. This example
passes each worker a number to be printed.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
multiprocessing\_simpleargs.py
:::

The integer argument is now included in the message printed by each
worker.

``` {.sourceCode .none}
$ python3 multiprocessing_simpleargs.py

Worker: 0
Worker: 1
Worker: 2
Worker: 3
Worker: 4
```

Importable Target Functions
===========================

One difference between the `threading` and `multiprocessing` examples is
the extra protection for `__main__` used in the `multiprocessing`
examples. Due to the way the new processes are started, the child
process needs to be able to import the script containing the target
function. Wrapping the main part of the application in a check for
`__main__` ensures that it is not run recursively in each child as the
module is imported. Another approach is to import the target function
from a separate script. For example, `multiprocessing_import_main.py`
uses a worker function defined in a second module.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
multiprocessing\_import\_main.py
:::

The worker function is defined in `multiprocessing_import_worker.py`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
multiprocessing\_import\_worker.py
:::

Calling the main program produces output similar to the first example.

``` {.sourceCode .none}
$ python3 multiprocessing_import_main.py

Worker
Worker
Worker
Worker
Worker
```

Determining the Current Process
===============================

Passing arguments to identify or name the process is cumbersome, and
unnecessary. Each `Process` instance has a name with a default value
that can be changed as the process is created. Naming processes is
useful for keeping track of them, especially in applications with
multiple types of processes running simultaneously.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
multiprocessing\_names.py
:::

The debug output includes the name of the current process on each line.
The lines with `Process-3` in the name column correspond to the unnamed
process `worker_2`.

``` {.sourceCode .none}
$ python3 multiprocessing_names.py

worker 1 Starting
worker 1 Exiting
Process-3 Starting
Process-3 Exiting
my_service Starting
my_service Exiting
```

Daemon Processes
================

By default, the main program will not exit until all of the children
have exited. There are times when starting a background process that
runs without blocking the main program from exiting is useful, such as
in services where there may not be an easy way to interrupt the worker,
or where letting it die in the middle of its work does not lose or
corrupt data (for example, a task that generates \"heart beats\" for a
service monitoring tool).

To mark a process as a daemon, set its `daemon`{.interpreted-text
role="attr"} attribute to `True`. The default is for processes to not be
daemons.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
multiprocessing\_daemon.py
:::

The output does not include the \"Exiting\" message from the daemon
process, since all of the non-daemon processes (including the main
program) exit before the daemon process wakes up from its two second
sleep.

``` {.sourceCode .none}
$ python3 multiprocessing_daemon.py

Starting: daemon 36250
Starting: non-daemon 36256
Exiting : non-daemon 36256
```

The daemon process is terminated automatically before the main program
exits, which avoids leaving orphaned processes running. This can be
verified by looking for the process id value printed when the program
runs, and then checking for that process with a command like `ps`.

Waiting for Processes
=====================

To wait until a process has completed its work and exited, use the
`join()` method.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
multiprocessing\_daemon\_join.py
:::

Since the main process waits for the daemon to exit using `join()`, the
\"Exiting\" message is printed this time.

``` {.sourceCode .none}
$ python3 multiprocessing_daemon_join.py

Starting: non-daemon
Exiting : non-daemon
Starting: daemon
Exiting : daemon
```

By default, `join()` blocks indefinitely. It is also possible to pass a
timeout argument (a float representing the number of seconds to wait for
the process to become inactive). If the process does not complete within
the timeout period, `join()` returns anyway.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
multiprocessing\_daemon\_join\_timeout.py
:::

Since the timeout passed is less than the amount of time the daemon
sleeps, the process is still \"alive\" after `join()` returns.

``` {.sourceCode .none}
$ python3 multiprocessing_daemon_join_timeout.py

Starting: non-daemon
Exiting : non-daemon
d.is_alive() True
```

Terminating Processes
=====================

Although it is better to use the *poison pill* method of signaling to a
process that it should exit (see
`multiprocessing-queues`{.interpreted-text role="ref"}, later in this
chapter), if a process appears hung or deadlocked it can be useful to be
able to kill it forcibly. Calling `terminate()` on a process object
kills the child process.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
multiprocessing\_terminate.py
:::

::: {.note}
::: {.admonition-title}
Note
:::

It is important to `join()` the process after terminating it in order to
give the process management code time to update the status of the object
to reflect the termination.
:::

``` {.sourceCode .none}
$ python3 multiprocessing_terminate.py

BEFORE: <Process(Process-1, initial)> False
DURING: <Process(Process-1, started)> True
TERMINATED: <Process(Process-1, started)> True
JOINED: <Process(Process-1, stopped[SIGTERM])> False
```

Process Exit Status
===================

The status code produced when the process exits can be accessed via the
`exitcode`{.interpreted-text role="attr"} attribute. The ranges allowed
are listed in `Multiprocessing Exit Codes`{.interpreted-text
role="table"}.

  Exit Code   Meaning
  ----------- ---------------------------------------------------------
  `== 0`      no error was produced
  `> 0`       the process had an error, and exited with that code
  `< 0`       the process was killed with a signal of `-1 * exitcode`

  : Multiprocessing Exit Codes

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
multiprocessing\_exitcode.py
:::

Processes that raise an exception automatically get an
`exitcode`{.interpreted-text role="attr"} of 1.

``` {.sourceCode .none}
$ python3 multiprocessing_exitcode.py

Starting process for exit_error
Starting process for exit_ok
Starting process for return_value
Starting process for raises
Starting process for terminated
Process raises:
Traceback (most recent call last):
  File ".../lib/python3.7/multiprocessing/process.py", line 297,
in _bootstrap
    self.run()
  File ".../lib/python3.7/multiprocessing/process.py", line 99,
in run
    self._target(*self._args, **self._kwargs)
  File "multiprocessing_exitcode.py", line 28, in raises
    raise RuntimeError('There was an error!')
RuntimeError: There was an error!
     exit_error.exitcode = 1
        exit_ok.exitcode = 0
   return_value.exitcode = 0
         raises.exitcode = 1
     terminated.exitcode = -15
```

Logging
=======

When debugging concurrency issues, it can be useful to have access to
the internals of the objects provided by `multiprocessing`. There is a
convenient module-level function to enable logging called
`log_to_stderr()`. It sets up a logger object using
`logging`{.interpreted-text role="mod"} and adds a handler so that log
messages are sent to the standard error channel.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
multiprocessing\_log\_to\_stderr.py
:::

By default, the logging level is set to `NOTSET` so no messages are
produced. Pass a different level to initialize the logger to the level
of detail desired.

``` {.sourceCode .none}
$ python3 multiprocessing_log_to_stderr.py

[INFO/Process-1] child process calling self.run()
Doing some work
[INFO/Process-1] process shutting down
[DEBUG/Process-1] running all "atexit" finalizers with priority
>= 0
[DEBUG/Process-1] running the remaining "atexit" finalizers
[INFO/Process-1] process exiting with exitcode 0
[INFO/MainProcess] process shutting down
[DEBUG/MainProcess] running all "atexit" finalizers with
priority >= 0
[DEBUG/MainProcess] running the remaining "atexit" finalizers
```

To manipulate the logger directly (change its level setting or add
handlers), use `get_logger()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
multiprocessing\_get\_logger.py
:::

The logger can also be configured through the `logging` configuration
file API, using the name \"`multiprocessing`\".

``` {.sourceCode .none}
$ python3 multiprocessing_get_logger.py

[INFO/Process-1] child process calling self.run()
Doing some work
[INFO/Process-1] process shutting down
[INFO/Process-1] process exiting with exitcode 0
[INFO/MainProcess] process shutting down
```

Subclassing Process
===================

Although the simplest way to start a job in a separate process is to use
`Process` and pass a target function, it is also possible to use a
custom subclass.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
multiprocessing\_subclass.py
:::

The derived class should override `run`{.interpreted-text role="meth"}
to do its work.

``` {.sourceCode .none}
$ python3 multiprocessing_subclass.py

In Worker-1
In Worker-2
In Worker-3
In Worker-4
In Worker-5
```
