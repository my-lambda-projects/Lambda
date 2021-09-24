statistics \-\-- Statistical Calculations
=========================================

::: {.module synopsis="Statistical Calculations"}
statistics
:::

Purpose

:   Implementations of common statistical calculations.

The `statistics` module implements many common statistical formulas for
efficient calculations using Python\'s various numerical types (`int`,
`float`, `Decimal`, and `Fraction`).

Averages
--------

There are three forms of averages supported, the mean, the median, and
the mode. Calculate the arithmetic mean with `mean()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
statistics\_mean.py
:::

The return value for integers and floats is always a `float`. For
`Decimal` and `Fraction` input data, the result is of the same type as
the inputs.

``` {.sourceCode .none}
$ python3 statistics_mean.py

5.33
```

Calculate the most common data point in a data set using `mode()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
statistics\_mode.py
:::

The return value is always a member of the input data set. Because
`mode()` treats the input as a set of discrete values, and counts the
recurrences, the inputs do not actually need to be numerical values.

``` {.sourceCode .none}
$ python3 statistics_mode.py

2
```

There are four variations for calculating the median, or middle, value.
The first three are straightforward versions of the usual algorithm,
with different solutions for handling data sets with an even number of
elements.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
statistics\_median.py
:::

`median()` finds the center value, and if the data set has an even
number of values it averages the two middle items. `median_low()` always
returns a value from the input data set, using the lower of the two
middle items for data sets with an even number of items. `median_high()`
similarly returns the higher of the two middle items.

``` {.sourceCode .none}
$ python3 statistics_median.py

median     : 3.50
low        : 2.00
high       : 5.00
```

The fourth version of the median calculation, `median_grouped()`, treats
the inputs as continuous data and calculates the 50% percentile median
by first finding the median range using the provided interval width and
then interpolating within that range using the position of the actual
value(s) from the data set that fall in that range.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
statistics\_median\_grouped.py
:::

As the interval width increases, the median computed for the same data
set changes.

``` {.sourceCode .none}
$ python3 statistics_median_grouped.py

1: 29.50
2: 29.00
3: 28.50
```

Variance
--------

Statistics uses two values to express how disperse a set of values is
relative to the mean. The *variance* is the average of the square of the
difference of each value and the mean, and the *standard deviation* is
the square root of the variance (which is useful because taking the
square root allows the standard deviation to be expressed in the same
units as the input data). Large values for variance or standard
deviation indicate that a set of data is disperse, while small values
indicate that the data is clustered closer to the mean.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
statistics\_variance.py
:::

Python includes two sets of functions for computing variance and
standard deviation, depending on whether the data set represents the
entire population or a sample of the population. This example uses `wc`
to count the number of lines in the input files for all of the example
programs and then uses `pvariance()` and `pstdev()` to compute the
variance and standard deviation for the entire population before using
`variance()` and `stddev()` to compute the sample variance and standard
deviation for a subset created by using the length of every second file
found.

``` {.sourceCode .none}
$ python3 statistics_variance.py

Basic statistics:
  count     : 1282
  min       :   4.00
  max       : 228.00
  mean      :  27.79

Population variance:
  pstdev    :  17.86
  pvariance : 319.04

Estimated variance for sample:
  count     : 641
  stdev     :  16.94
  variance  : 286.99
```

::: {.seealso}
-   `statistics`{.interpreted-text role="pydoc"}
-   [mathtips.com: Median for Discrete and Continuous Frequency Type
    Data (grouped
    data)](http://www.mathstips.com/statistics/median-for-discrete-and-continuous-frequency-type.html)
    \-- Discussion of median for continuous data
-   `450`{.interpreted-text role="pep"} \-- Adding A Statistics Module
    To The Standard Library
:::
