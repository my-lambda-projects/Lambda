# Receiving Unix Signals

Unix system event notifications normally interrupt an application, triggering their handler. When used with `asyncio`, signal handler callbacks are interleaved with the other coroutines and callbacks managed by the event loop. This results in fewer interrupted functions, and the resulting need to provide safe-guards for cleaning up incomplete operations.

Signal handlers must be regular callables, not coroutines.

::: {.literalinclude caption="" lines="9-16"} asyncio_signal.py :::

The signal handlers are registered using `add_signal_handler()`. The first argument is the signal and the second is the callback. Callbacks are passed no arguments, so if arguments are needed a function can be wrapped with `functools.partial()`.

::: {.literalinclude lines="19-32"} asyncio_signal.py :::

This example program uses a coroutine to send signals to itself via `os.kill()`. After each signal is sent, the coroutine yields control to allow the handler to be run. In a normal application, there would be more places where application code yields back to the event loop and no artificial yield like this would be needed.

::: {.literalinclude lines="35-47"} asyncio_signal.py :::

The main program runs `send_signals()` until it has sent all of the signals.

::: {.literalinclude lines="50-"} asyncio_signal.py :::

The output shows how the handlers are called when `send_signals()` yields control after sending a signal.

```{.sourceCode .none}
$ python3 asyncio_signal.py

starting send_signals for 21772
sending SIGHUP
yielding control
signal_handler('SIGHUP')
sending SIGHUP
yielding control
signal_handler('SIGHUP')
sending SIGUSR1
yielding control
signal_handler('SIGUSR1')
sending SIGINT
yielding control
signal_handler('SIGINT')
```

::: {.seealso}

- `signal`{.interpreted-text role="mod"} \-- Receive notification of asynchronous system events :::
