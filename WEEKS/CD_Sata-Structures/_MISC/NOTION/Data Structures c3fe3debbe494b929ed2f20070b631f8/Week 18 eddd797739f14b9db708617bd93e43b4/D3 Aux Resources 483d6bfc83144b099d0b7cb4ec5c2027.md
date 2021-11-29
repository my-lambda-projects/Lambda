# D3 Aux Resources

[Hash table - Wikipedia](https://en.wikipedia.org/wiki/Hash_table)

[https://docs.python.org/3/library/stdtypes.html](https://docs.python.org/3/library/stdtypes.html)

##

Converting between different number bases is actually fairly simple, but the thinking behind it can seem a bit confusing at first. And while the topic of different bases may seem somewhat pointless to you, the rise of computers and computer graphics has increased the need for knowledge of how to work with different (non-decimal) base systems, particularly [binary](https://www.purplemath.com/modules/numbbase.htm#Binary) systems (ones and zeroes) and [hexadecimal](https://www.purplemath.com/modules/numbbase3.htm#Hexidecimal) systems (the numbers zero through nine, followed by the letters A through F).

In our customary base-ten system, we have digits for the numbers zero through nine. We do not have a single-digit numeral for "ten". (The [Romans did](https://www.purplemath.com/modules/romannum.htm), in their character "X".) Yes, we write "10", but this stands for "1 ten and 0 ones". This is two digits; we have no single solitary digit that stands for "ten".

Instead, when we need to count to one more than nine, we zero out the ones column and add one to the tens column. When we get too big in the tens column -- when we need one more than nine tens and nine ones ("99"), we zero out the tens and ones columns, and add one to the ten-times-ten, or hundreds, column. The next column is the ten-times-ten-times-ten, or thousands, column. And so forth, with each bigger column being ten times larger than the one before. We place digits in each column, telling us how many copies of that power of ten we need.

The only reason base-ten math seems "natural" and the other bases don't is that you've been doing base-ten since you were a child. And (nearly) every civilization has used base-ten math probably for the simple reason that we have ten fingers. If instead we lived in a cartoon world, where we would have only four fingers on each hand (count them next time you're watching TV or reading the comics), then the "natural" base system would likely have been base-eight, or "octal".

Let's look at base-two, or binary, numbers. How would you write, for instance, 1210 ("twelve, base ten") as a binary number? You would have to convert to base-two columns, the analogue of base-ten columns. In base ten, you have columns or "places" for 100 = 1, 101 = 10, 102 = 100, 103 = 1000, and so forth. Similarly in base two, you have columns or "places" for 20 = 1, 21 = 2, 22 = 4, 23 = 8, 24 = 16, and so forth.

The first column in base-two math is the units column. But only "0" or "1" can go in the units column. When you get to "two", you find that there is no single solitary digit that stands for "two" in base-two math. Instead, you put a "1" in the twos column and a "0" in the units column, indicating "1 two and 0 ones". The base-ten "two" (210) is written in binary as 102.

A "three" in base two is actually "1 two and 1 one", so it is written as 112. "Four" is actually two-times-two, so we zero out the twos column and the units column, and put a "1" in the fours column; 410 is written in binary form as 1002. Here is a listing of the first few numbers:

[Untitled](D3%20Aux%20Resources%20483d6bfc83144b099d0b7cb4ec5c2027/Untitled%20Database%20f3fdb973499a4794ab971abb4a46a259.csv)
