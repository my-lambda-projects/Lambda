sched \-\-- Timed Event Scheduler
=================================

::: {.module synopsis="Generic event scheduler."}
sched
:::

Purpose

:   Generic event scheduler.

The `sched` module implements a generic event scheduler for running
tasks at specific times. The scheduler class uses a `time` function to
learn the current time, and a `delay` function to wait for a specific
period of time. The actual units of time are not important, which makes
the interface flexible enough to be used for many purposes.

The `time` function is called without any arguments, and should return a
number representing the current time. The `delay` function is called
with a single integer argument, using the same scale as the time
function, and should wait that many time units before returning. By
default `monotonic()` and `sleep()` from `time`{.interpreted-text
role="mod"} are used, but the examples in this section use
`time.time()`, which also meets the requirements, because it makes the
output easier to understand.

To support multi-threaded applications, the delay function is called
with argument 0 after each event is generated, to ensure that other
threads also have a chance to run.

Running Events With a Delay
---------------------------

Events can be scheduled to run after a delay, or at a specific time. To
schedule them with a delay, use the `enter()` method, which takes four
arguments.

-   A number representing the delay
-   A priority value
-   The function to call
-   A tuple of arguments for the function

This example schedules two different events to run after two and three
seconds respectively. When the event\'s time comes up, `print_event()`
is called and prints the current time and the name argument passed to
the event.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sched\_basic.py
:::

Running the program produces:

``` {.sourceCode .none}
$ python3 sched_basic.py

START: Sun Sep  4 16:21:01 2016
EVENT: Sun Sep  4 16:21:03 2016 elapsed=2 name=first
EVENT: Sun Sep  4 16:21:04 2016 elapsed=3 name=second
```

The time printed for the first event is two seconds after start, and the
time for the second event is three seconds after start.

Overlapping Events
------------------

The call to `run()` blocks until all of the events have been processed.
Each event is run in the same thread, so if an event takes longer to run
than the delay between events, there will be overlap. The overlap is
resolved by postponing the later event. No events are lost, but some
events may be called later than they were scheduled. In the next
example, `long_event()` sleeps but it could just as easily delay by
performing a long calculation or by blocking on I/O.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sched\_overlap.py
:::

The result is the second event is run immediately after the first
finishes, since the first event took long enough to push the clock past
the desired start time of the second event.

``` {.sourceCode .none}
$ python3 sched_overlap.py

START: Sun Sep  4 16:21:04 2016
BEGIN EVENT : Sun Sep  4 16:21:06 2016 first
FINISH EVENT: Sun Sep  4 16:21:08 2016 first
BEGIN EVENT : Sun Sep  4 16:21:08 2016 second
FINISH EVENT: Sun Sep  4 16:21:10 2016 second
```

Event Priorities
----------------

If more than one event is scheduled for the same time their priority
values are used to determine the order they are run.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sched\_priority.py
:::

This example needs to ensure that they are scheduled for the exact same
time, so the `enterabs()` method is used instead of `enter()`. The first
argument to `enterabs()` is the time to run the event, instead of the
amount of time to delay.

``` {.sourceCode .none}
$ python3 sched_priority.py

START: Sun Sep  4 16:21:10 2016
EVENT: Sun Sep  4 16:21:12 2016 second
EVENT: Sun Sep  4 16:21:12 2016 first
```

Canceling Events
----------------

Both `enter()` and `enterabs()` return a reference to the event that can
be used to cancel it later. Because `run()` blocks, the event has to be
canceled in a different thread. For this example, a thread is started to
run the scheduler and the main processing thread is used to cancel the
event.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sched\_cancel.py
:::

Two events were scheduled, but the first was later canceled. Only the
second event runs, so the counter variable is only incremented one time.

``` {.sourceCode .none}
$ python3 sched_cancel.py

START: Sun Sep  4 16:21:13 2016
EVENT: Sun Sep  4 16:21:16 2016 E2
NOW: 1
FINAL: 1
```

::: {.seealso}
-   `sched`{.interpreted-text role="pydoc"}
-   `time`{.interpreted-text role="mod"} \-- The `time` module.
:::
