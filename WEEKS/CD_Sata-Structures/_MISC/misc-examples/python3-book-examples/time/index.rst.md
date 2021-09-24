time \-\-- Clock Time
=====================

::: {.module synopsis="Clock time"}
time
:::

Purpose

:   Functions for manipulating clock time.

The `time` module provides access to several different types of clocks,
each useful for different purposes. The standard system calls like
`time()` report the system \"wall clock\" time. The `monotonic()` clock
can be used to measure elapsed time in a long-running process because it
is guaranteed never to move backwards, even if the system time is
changed. For performance testing, `perf_counter()` provides access to
the clock with the highest available resolution to make short time
measurements more accurate. The CPU time is available through `clock()`,
and `process_time()` returns the combined processor time and system
time.

::: {.note}
::: {.admonition-title}
Note
:::

The implementations expose C library functions for manipulating dates
and times. Since they are tied to the underlying C implementation, some
details (such as the start of the epoch and maximum date value
supported) are platform-specific. Refer to the library documentation for
complete details.
:::

Comparing Clocks
----------------

Implementation details for the clocks varies by platform. Use
`get_clock_info()` to access basic information about the current
implementation, including the clock\'s resolution.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
time\_get\_clock\_info.py
:::

This output for macOS shows that the monotonic and perf\_counter clocks
are implemented using the same underlying system call.

``` {.sourceCode .none}
$ python3 time_get_clock_info.py

monotonic:
    adjustable    : False
    implementation: mach_absolute_time()
    monotonic     : True
    resolution    : 1e-09
    current       : 0.047857746

perf_counter:
    adjustable    : False
    implementation: mach_absolute_time()
    monotonic     : True
    resolution    : 1e-09
    current       : 0.047930006

process_time:
    adjustable    : False
    implementation: getrusage(RUSAGE_SELF)
    monotonic     : True
    resolution    : 1e-06
    current       : 0.074122

time:
    adjustable    : True
    implementation: gettimeofday()
    monotonic     : False
    resolution    : 1e-06
    current       : 1544377423.803307
```

Wall Clock Time
---------------

One of the core functions of the `time` module is `time()`, which
returns the number of seconds since the start of the \"epoch\" as a
floating point value.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
time\_time.py
:::

The epoch is the start of measurement for time, which for Unix systems
is 0:00 on January 1, 1970. Although the value is always a float, actual
precision is platform-dependent.

``` {.sourceCode .none}
$ python3 time_time.py

The time is: 1544377423.849656
```

The float representation is useful when storing or comparing dates, but
not as useful for producing human readable representations. For logging
or printing time `ctime()` can be more useful.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
time\_ctime.py
:::

The second `print()` call in this example shows how to use `ctime()` to
format a time value other than the current time.

``` {.sourceCode .none}
$ python3 time_ctime.py

The time is      : Sun Dec  9 12:43:43 2018
15 secs from now : Sun Dec  9 12:43:58 2018
```

Monotonic Clocks {#time-monotonic}
----------------

Because `time()` looks at the system clock, and the system clock can be
changed by the user or system services for synchronizing clocks across
multiple computers, calling `time()` repeatedly may produce values that
go forwards and backwards. This can result in unexpected behavior when
trying to measure durations or otherwise use those times for
computation. Avoid those situations by using `monotonic()`, which always
returns values that go forward.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
time\_monotonic.py
:::

The start point for the monotonic clock is not defined, so return values
are only useful for doing calculations with other clock values. In this
example the duration of the sleep is measured using `monotonic()`.

``` {.sourceCode .none}
$ python3 time_monotonic.py

start :      0.02
end   :      0.13
span  :      0.10
```

Processor Clock Time
--------------------

While `time()` returns a wall clock time, `process_time()` returns
processor clock time. The values returned from `process_time()` reflect
the actual time used by the program as it runs.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
time\_process\_time.py
:::

In this example, the formatted `ctime()` is printed along with the
floating point values from `time()`, and `clock()` for each iteration
through the loop.

::: {.note}
::: {.admonition-title}
Note
:::

If you want to run the example on your system, you may have to add more
cycles to the inner loop or work with a larger amount of data to
actually see a difference in the times.
:::

``` {.sourceCode .none}
$ python3 time_process_time.py

Sun Dec  9 12:43:44 2018 : 1544377424.095 0.056
Sun Dec  9 12:43:44 2018 : 1544377424.423 0.675
Sun Dec  9 12:43:44 2018 : 1544377424.790 1.376
Sun Dec  9 12:43:45 2018 : 1544377425.108 1.997
Sun Dec  9 12:43:45 2018 : 1544377425.422 2.594
```

Typically, the processor clock does not tick if a program is not doing
anything.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
time\_clock\_sleep.py
:::

In this example, the loop does very little work by going to sleep after
each iteration. The `time()` value increases even while the application
is asleep, but the `process_time()` value does not.

``` {.sourceCode .none}
$ python3 -u time_clock_sleep.py

Sun Dec  9 12:43:45 2018 - 1544377425.83 - 0.06
Sleeping 3
Sun Dec  9 12:43:48 2018 - 1544377428.83 - 0.06
Sleeping 2
Sun Dec  9 12:43:50 2018 - 1544377430.84 - 0.06
Sleeping 1
Sun Dec  9 12:43:51 2018 - 1544377431.84 - 0.06
```

Calling `sleep()` yields control from the current thread and asks it to
wait for the system to wake it back up. If a program has only one
thread, this effectively blocks the app and it does no work.

Performance Counter
-------------------

It is important to have a high-resolution monotonic clock for measuring
performance. Determining the best clock data source requires
platform-specific knowledge, which Python provides in `perf_counter()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
time\_perf\_counter.py
:::

As with `monotonic()`, the epoch for `perf_counter()` is undefined, and
the values are meant to be used for comparing and computing values, not
as absolute times.

``` {.sourceCode .none}
$ python3 time_perf_counter.py

Sun Dec  9 12:43:52 2018 : 0.366 0.366
Sun Dec  9 12:43:52 2018 : 0.338 0.704
Sun Dec  9 12:43:52 2018 : 0.350 1.054
Sun Dec  9 12:43:53 2018 : 0.315 1.369
Sun Dec  9 12:43:53 2018 : 0.306 1.675
```

Time Components
---------------

Storing times as elapsed seconds is useful in some situations, but there
are times when a program needs to have access to the individual fields
of a date (year, month, etc.). The `time` module defines `struct_time`
for holding date and time values with components broken out so they are
easy to access. There are several functions that work with `struct_time`
values instead of floats.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
time\_struct.py
:::

The `gmtime()` function returns the current time in UTC. `localtime()`
returns the current time with the current time zone applied. `mktime()`
takes a `struct_time` and converts it to the floating point
representation.

``` {.sourceCode .none}
$ python3 time_struct.py

gmtime:
  tm_year : 2018
  tm_mon  : 12
  tm_mday : 9
  tm_hour : 17
  tm_min  : 43
  tm_sec  : 53
  tm_wday : 6
  tm_yday : 343
  tm_isdst: 0

localtime:
  tm_year : 2018
  tm_mon  : 12
  tm_mday : 9
  tm_hour : 12
  tm_min  : 43
  tm_sec  : 53
  tm_wday : 6
  tm_yday : 343
  tm_isdst: 0

mktime: 1544377433.0
```

Working with Time Zones
-----------------------

The functions for determining the current time depend on having the time
zone set, either by the program or by using a default time zone set for
the system. Changing the time zone does not change the actual time, just
the way it is represented.

To change the time zone, set the environment variable `TZ`, then call
`tzset()`. The time zone can be specified with a lot of detail, right
down to the start and stop times for daylight savings time. It is
usually easier to use the time zone name and let the underlying
libraries derive the other information, though.

This example program changes the time zone to a few different values and
shows how the changes affect other settings in the time module.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
time\_timezone.py
:::

The default time zone on the system used to prepare the examples is
US/Eastern. The other zones in the example change the tzname, daylight
flag, and timezone offset value.

``` {.sourceCode .none}
$ python3 time_timezone.py

Default :
  TZ    : (not set)
  tzname: ('EST', 'EDT')
  Zone  : 18000 (5.0)
  DST   : 1
  Time  : Sun Dec  9 12:43:53 2018

GMT :
  TZ    : GMT
  tzname: ('GMT', 'GMT')
  Zone  : 0 (0.0)
  DST   : 0
  Time  : Sun Dec  9 17:43:53 2018

Europe/Amsterdam :
  TZ    : Europe/Amsterdam
  tzname: ('CET', 'CEST')
  Zone  : -3600 (-1.0)
  DST   : 1
  Time  : Sun Dec  9 18:43:53 2018
```

Parsing and Formatting Times
----------------------------

The two functions `strptime()` and `strftime()` convert between
`struct_time` and string representations of time values. There is a long
list of formatting instructions available to support input and output in
different styles. The complete list is documented in the library
documentation for the `time` module.

This example converts the current time from a string to a `struct_time`
instance and back to a string.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
time\_strptime.py
:::

The output string is not exactly like the input, since the day of the
month is prefixed with a zero.

``` {.sourceCode .none}
$ python3 time_strptime.py

Now: Mon Jan  2 16:17:27 2017

Parsed:
  tm_year : 2017
  tm_mon  : 1
  tm_mday : 2
  tm_hour : 16
  tm_min  : 17
  tm_sec  : 27
  tm_wday : 0
  tm_yday : 2
  tm_isdst: -1

Formatted: Mon Jan 02 16:17:27 2017
```

::: {.seealso}
-   `time`{.interpreted-text role="pydoc"}
-   `Python 2 to 3 porting notes for time <porting-time>`{.interpreted-text
    role="ref"}
-   `datetime`{.interpreted-text role="mod"} \-- The `datetime` module
    includes other classes for doing calculations with dates and times.
-   `calendar`{.interpreted-text role="mod"} \-- Work with higher-level
    date functions to produce calendars or calculate recurring events.
:::
