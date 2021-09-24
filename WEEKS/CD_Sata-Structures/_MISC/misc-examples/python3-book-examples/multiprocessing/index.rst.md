multiprocessing \-\-- Manage Processes Like Threads
===================================================

::: {.module synopsis="Manage processes like threads."}
multiprocessing
:::

Purpose

:   Provides an API for managing processes.

The `multiprocessing` module includes an API for dividing work up
between multiple processes based on the API for
`threading`{.interpreted-text role="mod"}. In some cases
`multiprocessing` is a drop-in replacement, and can be used instead of
`threading` to take advantage of multiple CPU cores to avoid
computational bottlenecks associated with Python\'s global interpreter
lock.

Due to the similarity, the first few examples here are modified from the
`threading` examples. Features provided by `multiprocessing` but not
available in `threading` are covered later.

::: {.toctree maxdepth="2"}
basics communication mapreduce
:::

::: {.seealso}
-   `multiprocessing`{.interpreted-text role="pydoc"}
-   `threading`{.interpreted-text role="mod"} \-- High-level API for
    working with threads.
-   [MapReduce - Wikipedia](https://en.wikipedia.org/wiki/MapReduce) \--
    Overview of MapReduce on Wikipedia.
-   [MapReduce: Simplified Data Processing on Large
    Clusters](http://research.google.com/archive/mapreduce.html) \--
    Google Labs presentation and paper on MapReduce.
-   `operator`{.interpreted-text role="mod"} \-- Operator tools such as
    `itemgetter`.
:::
