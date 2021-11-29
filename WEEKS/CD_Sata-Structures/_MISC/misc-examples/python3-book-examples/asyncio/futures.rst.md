# Producing Results Asynchronously

A `Future` represents the result of work that has not been completed yet. The event loop can watch for a `Future` object\'s state to indicate that it is done, allowing one part of an application to wait for another part to finish some work.

## Waiting for a Future

A `Future` acts like a coroutine, so any techniques useful for waiting for a coroutine can also be used to wait for the future to be marked done. This example passes the future to the event loop\'s `run_until_complete()` method.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} asyncio_future_event_loop.py :::

The state of the `Future` changes to done when `set_result()` is called, and the `Future` instance retains the result given to the method for retrieval later.

```{.sourceCode .none}
$ python3 asyncio_future_event_loop.py

scheduling mark_done
entering event loop
setting future result to 'the result'
returned result: 'the result'
closing event loop
future result: 'the result'
```

A `Future` can also be used with the `await` keyword, as in this example.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} asyncio_future_await.py :::

The result of the `Future` is returned by `await`, so it is frequently possible to have the same code work with a regular coroutine and a `Future` instance.

```{.sourceCode .none}
$ python3 asyncio_future_await.py

scheduling mark_done
setting future result to 'the result'
returned result: 'the result'
```

## Future Callbacks

In addition to working like a coroutine, a `Future` can invoke callbacks when it is completed. Callbacks are invoked in the order they are registered.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} asyncio_future_callback.py :::

The callback should expect one argument, the `Future` instance. To pass additional arguments to the callbacks, use `functools.partial()` to create a wrapper.

```{.sourceCode .none}
$ python3 asyncio_future_callback.py

registering callbacks on future
setting result of future
1: future done: the result
2: future done: the result
```
