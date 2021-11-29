math \-\-- Mathematical Functions
=================================

::: {.module synopsis="Mathematical functions"}
math
:::

Purpose

:   Provides functions for specialized mathematical operations.

The `math` module implements many of the IEEE functions that would
normally be found in the native platform C libraries for complex
mathematical operations using floating point values, including
logarithms and trigonometric operations.

Special Constants
-----------------

Many math operations depend on special constants. `math` includes values
for π (pi), e, nan (not a number), and infinity.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_constants.py
:::

Both π and e are limited in precision only by the platform\'s floating
point C library.

``` {.sourceCode .none}
$ python3 math_constants.py

  π: 3.141592653589793115997963468544
  e: 2.718281828459045090795598298428
nan: nan
inf: inf
```

Testing for Exceptional Values
------------------------------

Floating point calculations can result in two types of exceptional
values. The first of these, `inf` (infinity), appears when the `double`
used to hold a floating point value overflows from a value with a large
absolute value.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_isinf.py
:::

When the exponent in this example grows large enough, the square of `x`
no longer fits inside a `double`, and the value is recorded as infinite.

``` {.sourceCode .none}
$ python3 math_isinf.py

 e  x      x**2   isinf 
--- ------ ------ ------
  0 1      1      False 
 20 1e+20  1e+40  False 
 40 1e+40  1e+80  False 
 60 1e+60  1e+120 False 
 80 1e+80  1e+160 False 
100 1e+100 1e+200 False 
120 1e+120 1e+240 False 
140 1e+140 1e+280 False 
160 1e+160 inf    True  
180 1e+180 inf    True  
200 1e+200 inf    True  
```

Not all floating point overflows result in `inf` values, however.
Calculating an exponent with floating point values, in particular,
raises `OverflowError` instead of preserving the `inf` result.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_overflow.py
:::

This discrepancy is caused by an implementation difference in the
library used by C Python.

``` {.sourceCode .none}
$ python3 math_overflow.py

x    = 1e+200
x*x  = inf
x**2 = (34, 'Result too large')
```

Division operations using infinite values are undefined. The result of
dividing a number by infinity is `nan` (not a number).

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_isnan.py
:::

`nan` does not compare as equal to any value, even itself, so to check
for `nan` use `isnan()`.

``` {.sourceCode .none}
$ python3 math_isnan.py

x = inf
isnan(x) = False
y = x / x = nan
y == nan = False
isnan(y) = True
```

Use `isfinite()` to check for regular numbers or either of the special
values `inf` or `nan`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_isfinite.py
:::

`isfinite()` returns false for either of the exceptional cases, and true
otherwise.

``` {.sourceCode .none}
$ python3 math_isfinite.py

 0.00 True
 1.00 True
 3.14 True
 2.72 True
  inf False
  nan False
```

Comparing
---------

Comparisons for floating point values can be error prone, with each step
of the computation potentially introducing errors due to the numerical
representation. The `isclose()` function uses a stable algorithm to
minimize these errors and provide a way for relative as well as absolute
comparisons. The formula used is equivalent to

``` {.sourceCode .none}
abs(a-b) <= max(rel_tol * max(abs(a), abs(b)), abs_tol)
```

By default, `isclose()` uses relative comparison with the tolerance set
to `1e-09`, meaning that the difference between the values must be less
than or equal to `1e-09` times the larger absolute value between `a` and
`b`. Passing a keyword argument `rel_tol` to `isclose()` changes the
tolerance. In this example, the values must be within 10% of each other.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_isclose.py
:::

The comparison between `0.1` and `0.09` fails because of the error
representing `0.1`.

``` {.sourceCode .none}
$ python3 math_isclose.py

   a        b     rel_tol  abs(a-b) tolerance  close  
-------- -------- -------- -------- -------- --------
 1000.00   900.00     0.10   100.00   100.00     True
  100.00    90.00     0.10    10.00    10.00     True
   10.00     9.00     0.10     1.00     1.00     True
    1.00     0.90     0.10     0.10     0.10     True
    0.10     0.09     0.10     0.01     0.01    False
```

To use a fixed or \"absolute\" tolerance, pass `abs_tol` instead of
`rel_tol`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_isclose\_abs\_tol.py
:::

For an absolute tolerance, the difference between the input values must
be less than the tolerance given.

``` {.sourceCode .none}
$ python3 math_isclose_abs_tol.py

   a          b      abs_tol   abs(a-b)   close  
-------- ----------- -------- ---------- --------
    1.00   1.0000001    1e-08 0.000000100    False
    1.00  1.00000001    1e-08 0.000000010     True
    1.00 1.000000001    1e-08 0.000000001     True
```

`nan` and `inf` are special cases.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_isclose\_inf.py
:::

`nan` is never close to another value, including itself. `inf` is only
close to itself.

``` {.sourceCode .none}
$ python3 math_isclose_inf.py

nan, nan: False
nan, 1.0: False
inf, inf: True
inf, 1.0: False
```

Converting Floating Point Values to Integers
--------------------------------------------

The `math` module includes three functions for converting floating point
values to whole numbers. Each takes a different approach, and will be
useful in different circumstances.

The simplest is `trunc()`, which truncates the digits following the
decimal, leaving only the significant digits making up the whole number
portion of the value. `floor()` converts its input to the largest
preceding integer, and `ceil()` (ceiling) produces the largest integer
following sequentially after the input value.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_integers.py
:::

`trunc()` is equivalent to converting to `int` directly.

``` {.sourceCode .none}
$ python3 math_integers.py

  i    int  trunk floor ceil 
----- ----- ----- ----- -----
 -1.5  -1.0  -1.0  -2.0  -1.0
 -0.8   0.0   0.0  -1.0   0.0
 -0.5   0.0   0.0  -1.0   0.0
 -0.2   0.0   0.0  -1.0   0.0
  0.0   0.0   0.0   0.0   0.0
  0.2   0.0   0.0   0.0   1.0
  0.5   0.0   0.0   0.0   1.0
  0.8   0.0   0.0   0.0   1.0
  1.0   1.0   1.0   1.0   1.0
```

Alternate Representations of Floating Point Values
--------------------------------------------------

`modf()` takes a single floating point number and returns a tuple
containing the fractional and whole number parts of the input value.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_modf.py
:::

Both numbers in the return value are floats.

``` {.sourceCode .none}
$ python3 math_modf.py

0/2 = (0.0, 0.0)
1/2 = (0.5, 0.0)
2/2 = (0.0, 1.0)
3/2 = (0.5, 1.0)
4/2 = (0.0, 2.0)
5/2 = (0.5, 2.0)
```

`frexp()` returns the mantissa and exponent of a floating point number,
and can be used to create a more portable representation of the value.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_frexp.py
:::

`frexp()` uses the formula `x = m * 2**e`, and returns the values `m`
and `e`.

``` {.sourceCode .none}
$ python3 math_frexp.py

   x       m       e   
------- ------- -------
   0.10    0.80      -3
   0.50    0.50       0
   4.00    0.50       3
```

`ldexp()` is the inverse of `frexp()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_ldexp.py
:::

Using the same formula as `frexp()`, `ldexp()` takes the mantissa and
exponent values as arguments and returns a floating point number.

``` {.sourceCode .none}
$ python3 math_ldexp.py

   m       e       x   
------- ------- -------
   0.80      -3    0.10
   0.50       0    0.50
   0.50       3    4.00
```

Positive and Negative Signs
---------------------------

The absolute value of a number is its value without a sign. Use `fabs()`
to calculate the absolute value of a floating point number.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_fabs.py
:::

In practical terms, the absolute value of a `float` is represented as a
positive value.

``` {.sourceCode .none}
$ python3 math_fabs.py

1.1
0.0
0.0
1.1
```

To determine the sign of a value, either to give a set of values the
same sign or to compare two values, use `copysign()` to set the sign of
a known good value.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_copysign.py
:::

An extra function like `copysign()` is needed because comparing nan and
-nan directly with other values does not work.

``` {.sourceCode .none}
$ python3 math_copysign.py

  f     s    < 0   > 0   = 0 
----- ----- ----- ----- -----
 -1.0    -1 True  False False
  0.0     1 False False True 
  1.0     1 False True  False
 -inf    -1 True  False False
  inf     1 False True  False
  nan    -1 False False False
  nan     1 False False False
```

Commonly Used Calculations
--------------------------

Representing precise values in binary floating point memory is
challenging. Some values cannot be represented exactly, and the more
often a value is manipulated through repeated calculations, the more
likely a representation error will be introduced. `math` includes a
function for computing the sum of a series of floating point numbers
using an efficient algorithm that minimizes such errors.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_fsum.py
:::

Given a sequence of ten values, each equal to `0.1`, the expected value
for the sum of the sequence is `1.0`. Since `0.1` cannot be represented
exactly as a floating point value, however, errors are introduced into
the sum unless it is calculated with `fsum()`.

``` {.sourceCode .none}
$ python3 math_fsum.py

Input values: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]
sum()       : 0.99999999999999988898
for-loop    : 0.99999999999999988898
math.fsum() : 1.00000000000000000000
```

`factorial()` is commonly used to calculate the number of permutations
and combinations of a series of objects. The factorial of a positive
integer `n`, expressed `n!`, is defined recursively as `(n-1)! * n` and
stops with `0! == 1`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_factorial.py
:::

`factorial()` only works with whole numbers, but does accept `float`
arguments as long as they can be converted to an integer without losing
value.

``` {.sourceCode .none}
$ python3 math_factorial.py

 0      1
 1      1
 2      2
 3      6
 4     24
 5    120
Error computing factorial(6.1): factorial() only accepts integral
 values
```

`gamma()` is like `factorial()`, except it works with real numbers and
the value is shifted down by one (gamma is equal to `(n - 1)!`).

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_gamma.py
:::

Since zero causes the start value to be negative, it is not allowed.

``` {.sourceCode .none}
$ python3 math_gamma.py

Error computing gamma(0): math domain error
1.1   0.95
2.2   1.10
3.3   2.68
4.4  10.14
5.5  52.34
6.6 344.70
```

`lgamma()` returns the natural logarithm of the absolute value of gamma
for the input value.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_lgamma.py
:::

Using `lgamma()` retains more precision than calculating the logarithm
separately using the results of `gamma()`.

``` {.sourceCode .none}
$ python3 math_lgamma.py

Error computing lgamma(0): math domain error
1.1 -0.04987244125984036103 -0.04987244125983997245
2.2 0.09694746679063825923 0.09694746679063866168
3.3 0.98709857789473387513 0.98709857789473409717
4.4 2.31610349142485727469 2.31610349142485727469
5.5 3.95781396761871651080 3.95781396761871606671
6.6 5.84268005527463252236 5.84268005527463252236
```

The modulo operator (`%`) computes the remainder of a division
expression (i.e., `5 % 2 = 1`). The operator built into the language
works well with integers but, as with so many other floating point
operations, intermediate calculations cause representational issues that
result in a loss of data. `fmod()` provides a more accurate
implementation for floating point values.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_fmod.py
:::

A potentially more frequent source of confusion is the fact that the
algorithm used by `fmod()` for computing modulo is also different from
that used by `%`, so the sign of the result is different.

``` {.sourceCode .none}
$ python3 math_fmod.py

 x    y     %   fmod 
---- ---- ----- -----
 5.0  2.0  1.00  1.00
 5.0 -2.0 -1.00  1.00
-5.0  2.0  1.00 -1.00
```

Use `gcd()` to find the largest integer that can divide evenly into two
integers, the greatest common divisor.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_gcd.py
:::

If both values are `0`, the result is `0`.

``` {.sourceCode .none}
$ python3 math_gcd.py

2
10
25
1
0
```

Exponents and Logarithms
------------------------

Exponential growth curves appear in economics, physics, and other
sciences. Python has a built-in exponentiation operator (\"`**`\"), but
`pow()` can be useful when a callable function is needed as an argument
to another function.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_pow.py
:::

Raising `1` to any power always returns `1.0`, as does raising any value
to a power of `0.0`. Most operations on the not-a-number value `nan`
return `nan`. If the exponent is less than `1`, `pow()` computes a root.

``` {.sourceCode .none}
$ python3 math_pow.py

  2.0 ** 3.000 =  8.000
  2.1 ** 3.200 = 10.742
  1.0 ** 5.000 =  1.000
  2.0 ** 0.000 =  1.000
  2.0 **   nan =    nan
  9.0 ** 0.500 =  3.000
 27.0 ** 0.333 =  3.000
```

Since square roots (exponent of `1/2`) are used so frequently, there is
a separate function for computing them.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_sqrt.py
:::

Computing the square roots of negative numbers requires *complex
numbers*, which are not handled by `math`. Any attempt to calculate a
square root of a negative value results in a `ValueError`.

``` {.sourceCode .none}
$ python3 math_sqrt.py

3.0
1.7320508075688772
Cannot compute sqrt(-1): math domain error
```

The logarithm function finds `y` where `x = b ** y`. By default, `log()`
computes the natural logarithm (the base is *e*). If a second argument
is provided, that value is used as the base.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_log.py
:::

Logarithms where `x` is less than one yield negative results.

``` {.sourceCode .none}
$ python3 math_log.py

2.0794415416798357
3.0
-1.0
```

There are three variations of `log()`. Given floating point
representation and rounding errors, the computed value produced by
`log(x, b)` has limited accuracy, especially for some bases. `log10()`
computes `log(x, 10)`, using a more accurate algorithm than `log()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_log10.py
:::

The lines in the output with trailing `*` highlight the inaccurate
values.

``` {.sourceCode .none}
$ python3 math_log10.py

i       x        accurate       inaccurate      mismatch
-- ------------ ---------- -------------------- --------
 0          1.0 0.00000000 0.000000000000000000      
 1         10.0 1.00000000 1.000000000000000000      
 2        100.0 2.00000000 2.000000000000000000      
 3       1000.0 3.00000000 2.999999999999999556   *  
 4      10000.0 4.00000000 4.000000000000000000      
 5     100000.0 5.00000000 5.000000000000000000      
 6    1000000.0 6.00000000 5.999999999999999112   *  
 7   10000000.0 7.00000000 7.000000000000000000      
 8  100000000.0 8.00000000 8.000000000000000000      
 9 1000000000.0 9.00000000 8.999999999999998224   *  
```

Similar to `log10()`, `log2()` calculates the equivalent of
`math.log(x, 2)`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_log2.py
:::

Depending on the underlying platform, using the built-in and
special-purpose function can offer better performance and accuracy by
using special-purpose algorithms for base 2 that are not found in the
more general purpose function.

``` {.sourceCode .none}
$ python3 math_log2.py

 i   x   log2 
-- ----- -----
 0   1.0   0.0
 1   2.0   1.0
 2   4.0   2.0
 3   8.0   3.0
 4  16.0   4.0
 5  32.0   5.0
 6  64.0   6.0
 7 128.0   7.0
 8 256.0   8.0
 9 512.0   9.0
```

`log1p()` calculates the Newton-Mercator series (the natural logarithm
of `1+x`).

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_log1p.py
:::

`log1p()` is more accurate for values of `x` very close to zero because
it uses an algorithm that compensates for round-off errors from the
initial addition.

``` {.sourceCode .none}
$ python3 math_log1p.py

x       : 1e-25
1 + x   : 1.0
log(1+x): 0.0
log1p(x): 1e-25
```

`exp()` computes the exponential function (`e**x`).

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_exp.py
:::

As with other special-case functions, it uses an algorithm that produces
more accurate results than the general-purpose equivalent
`math.pow(math.e, x)`.

``` {.sourceCode .none}
$ python3 math_exp.py

7.38905609893064951876
7.38905609893064951876
7.38905609893065040694
```

`expm1()` is the inverse of `log1p()`, and calculates `e**x - 1`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_expm1.py
:::

Small values of `x` lose precision when the subtraction is performed
separately, like with `log1p()`.

``` {.sourceCode .none}
$ python3 math_expm1.py

1e-25
0.0
1e-25
```

Angles
------

Although degrees are more commonly used in everyday discussions of
angles, radians are the standard unit of angular measure in science and
math. A radian is the angle created by two lines intersecting at the
center of a circle, with their ends on the circumference of the circle
spaced one radius apart.

The circumference is calculated as `2πr`, so there is a relationship
between radians and π, a value that shows up frequently in trigonometric
calculations. That relationship leads to radians being used in
trigonometry and calculus, because they result in more compact formulas.

To convert from degrees to radians, use `radians()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_radians.py
:::

The formula for the conversion is `rad = deg * π / 180`.

``` {.sourceCode .none}
$ python3 math_radians.py

Degrees Radians Expected
------- ------- -------
      0    0.00    0.00
     30    0.52    0.52
     45    0.79    0.79
     60    1.05    1.05
     90    1.57    1.57
    180    3.14    3.14
    270    4.71    4.71
    360    6.28    6.28
```

To convert from radians to degrees, use `degrees()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_degrees.py
:::

The formula is `deg = rad * 180 / π`.

``` {.sourceCode .none}
$ python3 math_degrees.py

Radians  Degrees  Expected
-------- -------- --------
    0.00     0.00     0.00
    0.52    30.00    30.00
    0.79    45.00    45.00
    1.05    60.00    60.00
    1.57    90.00    90.00
    3.14   180.00   180.00
    4.71   270.00   270.00
    6.28   360.00   360.00
```

Trigonometry
------------

Trigonometric functions relate angles in a triangle to the lengths of
its sides. They show up in formulas with periodic properties such as
harmonics, circular motion, or when dealing with angles. All of the
trigonometric functions in the standard library take angles expressed as
radians.

Given an angle in a right triangle, the *sine* is the ratio of the
length of the side opposite the angle to the hypotenuse
(`sin A = opposite/hypotenuse`). The *cosine* is the ratio of the length
of the adjacent side to the hypotenuse (`cos A = adjacent/hypotenuse`).
And the *tangent* is the ratio of the opposite side to the adjacent side
(`tan A = opposite/adjacent`).

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_trig.py
:::

The tangent can also be defined as the ratio of the sine of the angle to
its cosine, and since the cosine is 0 for π/2 and 3π/2 radians, the
tangent is infinite.

``` {.sourceCode .none}
$ python3 math_trig.py

Degrees Radians  Sine   Cosine  Tangent
------- ------- ------- ------- -------
   0.00    0.00    0.00    1.00    0.00
  30.00    0.52    0.50    0.87    0.58
  60.00    1.05    0.87    0.50    1.73
  90.00    1.57    1.00    0.00     inf
 120.00    2.09    0.87   -0.50   -1.73
 150.00    2.62    0.50   -0.87   -0.58
 180.00    3.14    0.00   -1.00   -0.00
 210.00    3.67   -0.50   -0.87    0.58
 240.00    4.19   -0.87   -0.50    1.73
 270.00    4.71   -1.00   -0.00     inf
 300.00    5.24   -0.87    0.50   -1.73
 330.00    5.76   -0.50    0.87   -0.58
 360.00    6.28   -0.00    1.00   -0.00
```

Given a point `(x, y)`, the length of the hypotenuse for the triangle
between the points \[(0, 0), (`x`, 0), (`x`, `y`)\] is
`(x**2 + y**2) ** 1/2`, and can be computed with `hypot()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_hypot.py
:::

Points on the circle always have hypotenuse equal to 1.

``` {.sourceCode .none}
$ python3 math_hypot.py

   X       Y    Hypotenuse
------- ------- ----------
   1.00    1.00    1.41
  -1.00   -1.00    1.41
   1.41    1.41    2.00
   3.00    4.00    5.00
   0.71    0.71    1.00
   0.50    0.87    1.00
```

The same function can be used to find the distance between two points.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_distance\_2\_points.py
:::

Use the difference in the `x` and `y` values to move one endpoint to the
origin, and then pass the results to `hypot()`.

``` {.sourceCode .none}
$ python3 math_distance_2_points.py

   X1       Y1       X2       Y2    Distance
-------- -------- -------- -------- --------
    5.00     5.00     6.00     6.00     1.41
   -6.00    -6.00    -5.00    -5.00     1.41
    0.00     0.00     3.00     4.00     5.00
   -1.00    -1.00     2.00     3.00     5.00
```

`math` also defines inverse trigonometric functions.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_inverse\_trig.py
:::

`1.57` is roughly equal to `π/2`, or 90 degrees, the angle at which the
sine is 1 and the cosine is 0.

``` {.sourceCode .none}
$ python3 math_inverse_trig.py

arcsine(0.0)    =  0.00
arccosine(0.0)  =  1.57
arctangent(0.0) =  0.00

arcsine(0.5)    =  0.52
arccosine(0.5)  =  1.05
arctangent(0.5) =  0.46

arcsine(1.0)    =  1.57
arccosine(1.0)  =  0.00
arctangent(1.0) =  0.79
```

Hyperbolic Functions
--------------------

Hyperbolic functions appear in linear differential equations and are
used when working with electromagnetic fields, fluid dynamics, special
relativity, and other advanced physics and mathematics.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_hyperbolic.py
:::

Whereas the cosine and sine functions enscribe a circle, the hyperbolic
cosine and hyperbolic sine form half of a hyperbola.

``` {.sourceCode .none}
$ python3 math_hyperbolic.py

  X     sinh   cosh   tanh 
------ ------ ------ ------
0.0000 0.0000 1.0000 0.0000
0.2000 0.2013 1.0201 0.1974
0.4000 0.4108 1.0811 0.3799
0.6000 0.6367 1.1855 0.5370
0.8000 0.8881 1.3374 0.6640
1.0000 1.1752 1.5431 0.7616
```

Inverse hyperbolic functions `acosh()`, `asinh()`, and `atanh()` are
also available.

Special Functions
-----------------

The Gauss Error function is used in statistics.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_erf.py
:::

For the error function, `erf(-x) == -erf(x)`.

``` {.sourceCode .none}
$ python3 math_erf.py

  x   erf(x) 
----- -------
-3.00 -1.0000
-2.00 -0.9953
-1.00 -0.8427
-0.50 -0.5205
-0.25 -0.2763
 0.00  0.0000
 0.25  0.2763
 0.50  0.5205
 1.00  0.8427
 2.00  0.9953
 3.00  1.0000
```

The complimentary error function is `1 - erf(x)`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
math\_erfc.py
:::

The implementation of `erfc()` avoids precision errors for small values
of `x` when subtracting from 1.

``` {.sourceCode .none}
$ python3 math_erfc.py

  x   erfc(x)
----- -------
-3.00  2.0000
-2.00  1.9953
-1.00  1.8427
-0.50  1.5205
-0.25  1.2763
 0.00  1.0000
 0.25  0.7237
 0.50  0.4795
 1.00  0.1573
 2.00  0.0047
 3.00  0.0000
```

::: {.seealso}
-   `math`{.interpreted-text role="pydoc"}
-   [IEEE floating point arithmetic in
    Python](http://www.johndcook.com/blog/2009/07/21/ieee-arithmetic-python/)
    \-- Blog post by John Cook about how special values arise and are
    dealt with when doing math in Python.
-   [SciPy](http://scipy.org/) \-- Open source libraryes for scientific
    and mathematical calculations in Python.
-   `485`{.interpreted-text role="pep"} \-- \"A function for testing
    approximate equality\"
:::
