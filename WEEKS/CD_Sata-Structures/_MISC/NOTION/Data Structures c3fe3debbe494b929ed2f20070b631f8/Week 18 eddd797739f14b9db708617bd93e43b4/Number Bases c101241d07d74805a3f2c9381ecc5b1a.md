# Number Bases

In our customary base-ten system, we have digits for the numbers zero through nine. We do not have a single-digit numeral for "ten". (The [Romans did](https://www.purplemath.com/modules/romannum.htm), in their character "X".) Yes, we write "10", but this stands for "1 ten and 0 ones". This is two digits; we have no single solitary digit that stands for "ten".

Instead, when we need to count to one more than nine, we zero out the ones column and add one to the tens column. When we get too big in the tens column -- when we need one more than nine tens and nine ones ("99"), we zero out the tens and ones columns, and add one to the ten-times-ten, or hundreds, column. The next column is the ten-times-ten-times-ten, or thousands, column. And so forth, with each bigger column being ten times larger than the one before. We place digits in each column, telling us how many copies of that power of ten we need.

The only reason base-ten math seems "natural" and the other bases don't is that you've been doing base-ten since you were a child. And (nearly) every civilization has used base-ten math probably for the simple reason that we have ten fingers. If instead we lived in a cartoon world, where we would have only four fingers on each hand (count them next time you're watching TV or reading the comics), then the "natural" base system would likely have been base-eight, or "octal".

## **Binary**

_Advertisement_

Let's look at base-two, or binary, numbers. How would you write, for instance, 1210 ("twelve, base ten") as a binary number? You would have to convert to base-two columns, the analogue of base-ten columns. In base ten, you have columns or "places" for 100 = 1, 101 = 10, 102 = 100, 103 = 1000, and so forth. Similarly in base two, you have columns or "places" for 20 = 1, 21 = 2, 22 = 4, 23 = 8, 24 = 16, and so forth.

The first column in base-two math is the units column. But only "0" or "1" can go in the units column. When you get to "two", you find that there is no single solitary digit that stands for "two" in base-two math. Instead, you put a "1" in the twos column and a "0" in the units column, indicating "1 two and 0 ones". The base-ten "two" (210) is written in binary as 102.

A "three" in base two is actually "1 two and 1 one", so it is written as 112. "Four" is actually two-times-two, so we zero out the twos column and the units column, and put a "1" in the fours column; 410 is written in binary form as 1002. Here is a listing of the first few numbers:

[Untitled](Number%20Bases%20c101241d07d74805a3f2c9381ecc5b1a/Untitled%20Database%20b78c6fedd51544969147618390ee0af8.csv)

---

_Content Continues Below_

---

Converting between binary and decimal numbers is fairly simple, as long as you remember that each digit in the binary number represents a power of two.

- **Convert 1011001012 to the corresponding base-ten number.**

I will list the digits in order, as they appear in the number they've given me. Then, in another row, I'll count these digits off from the RIGHT, starting with zero:

[Untitled](Number%20Bases%20c101241d07d74805a3f2c9381ecc5b1a/Untitled%20Database%2020b595a630a041a6847c08ce103f133b.csv)

The first row above (labelled "digits") contains the digits from the binary number; the second row (labelled "numbering") contains the power of 2 (the base) corresponding to each digit. I will use this listing to convert each digit to the power of two that it represents:

1×28 + 0×27 + 1×26 + 1×25 + 0×24 + 0×23 + 1×22 + 0×21 + 1×20

= 1×256 + 0×128 + 1×64 + 1×32 + 0×16 + 0×8 + 1×4 + 0×2 + 1×1

= 256 + 64 + 32 + 4 + 1

= 357

Then **1011001012 converts to 35710.**

---

Converting decimal numbers to binaries is nearly as simple: just divide by 2.

- **Convert 35710 to the corresponding binary number.**

To do this conversion, I need to divide repeatedly by 2, keeping track of the remainders as I go. Watch below:

![https://www.purplemath.com/modules/base/baseanim.gif](https://www.purplemath.com/modules/base/baseanim.gif)

As you can see, after dividing repeatedly by 2, I ended up with these remainders:

![https://www.purplemath.com/modules/base/base01.gif](https://www.purplemath.com/modules/base/base01.gif)

These remainders tell me what the binary number is. I read the numbers from around the outside of the division, starting on top with the final value and its remainder, and wrapping my way around and down the right-hand side of the sequential division. Then:

**35710 converts to 1011001012.**

---

_Affiliate_

---

This method of conversion will work for converting to any non-decimal base. Just don't forget to include that first digit on the top, before the list of remainders. If you're interested, an explanation of why this method works is available [here](https://www.purplemath.com/modules/base_why.htm).

You can convert from base-ten (decimal) to any other base. When you study this topic in class, you will probably be expected to convert numbers to various other bases, so let's look at [a few more examples](https://www.purplemath.com/modules/numbbase2.htm)...

Page 1[Page 2](https://www.purplemath.com/modules/numbbase2.htm)[Page 3](https://www.purplemath.com/modules/numbbase3.htm)
