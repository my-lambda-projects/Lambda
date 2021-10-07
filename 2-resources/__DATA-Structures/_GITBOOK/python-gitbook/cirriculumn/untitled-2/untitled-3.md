# D1- Module 01 - Number Bases and Character Encoding

{% embed url="https://gist.github.com/bgoonz/85cf385ba5382cea548c2b6083cd1b3f" %}

## Objective 01 - Understand random access memory \(RAM\) as it relates to data structures

### Overview <a id="overview"></a>

Your computer has something called random access memory \(RAM\). Sometimes, people say "memory" when referring to RAM.

### Follow Along <a id="follow-along"></a>

One thing that might come to your mind is that there are different types of memory on your computer. What about storing things like videos, text documents, and applications? Are those in "memory"? There is a distinction between "storage" and "memory". Things like videos and files are stored on a disc, not in RAM. RAM is faster than disc storage, but there isn't as much space available. Disc storage has more space, but it is slower.

Think of RAM like a set of numbered, sequential mailboxes. Just like a set of mailboxes with numbered addresses, RAM is also sequential and has numbered addresses.

Now, just like you can put something in a mailbox, you can also put something in RAM. Things that you put in RAM, we can call variables. Each "box" in RAM has an **address**.

Each one of the "boxes" \(memory addresses\) in our set of mailboxes \(RAM\) holds 8 bits. You can think of each bit like a tiny switch that can either be "on" or "off." "On" is represented by a `1`, and "off" is represented by a `0`.

Bits are often thought about in groups. A group of 8 bits is called a byte. Each "box" in RAM can hold 1 byte \(8 bits\).

Now, a computer has more than just disc storage and RAM inside of it. There is also a processor. And, in between the processor and the RAM is something called a memory controller. The memory controller can access each box in RAM directly. It is as if the memory controller had tubes connected to each box of the set of mailboxes. Through those tubes, the memory controller can send and receive information directly to each box in RAM.

Why is the direct connection between the memory controller and each box in RAM meaningful? It's so that the memory controller can jump around to which box it wants to communicate with quickly. Even though the boxes are in sequential order, the memory controller doesn't have to go through the boxes in order. It can access the first one, then jump to one somewhere in the middle, and then access one at the end. Because there is a direct connection, this is done quickly.

Whenever you use a computer, you are very concerned with the speed of the computer you are using. So, computer designers made a way to optimize for speed when accessing items in RAM. Whenever a processor accesses a box in RAM, it also accesses and stores the boxes near it. Often, if you are accessing one thing in RAM, it's likely that the next thing you need to access is nearby. That's why keeping a copy of nearby items in the cache speeds things up.

Whenever the processor reads something \(say, the player's position in an old adventure game\) out of RAM, it adds it to the cache to use it again in the future. Then, when it needs something else from RAM, it will go to the cache for it. As you can see, the cache helps the processor by saving execution cycles required to go out and read something from RAM.

The processor, not RAM, has the actual cache. The memory controller keeps track of what goes into and comes out of the cache.

We can think of it in several ways. Perhaps, the processor can use the cache as a temporary area to keep a copy of its last actions just in case it needs to reread them.

There is one caveat — it is not as if "everything" goes out to RAM and then gets inserted into the cache. In reality, the cache holds only a handful of memory addresses from RAM. Also, note that these few memory addresses in the cache can be accessed faster than other storage locations.

### Challenge <a id="challenge"></a>

Draw a model of how a processor interacts with the cache, memory controller, and RAM whenever it needs to read or write from memory.

### Additional Resources <a id="additional-resources"></a>

- [https://en.wikipedia.org/wiki/Random-access_memory \(Links to an external site.\)](https://en.wikipedia.org/wiki/Random-access_memory)
- [https://en.wikipedia.org/wiki/Memory_controller \(Links to an external site.\)](https://en.wikipedia.org/wiki/Memory_controller)
- [https://en.wikipedia.org/wiki/CPU_cache \(Links to an external site.\)](https://en.wikipedia.org/wiki/CPU_cache)

![](../../.gitbook/assets/image%20%284%29%20%286%29%20%285%29%20%281%29%20%286%29.png)

## Objective 02 - Convert back and forth from decimal to binary

### Overview <a id="overview"></a>

Computers use the binary number system, so we will represent all of our variables in the binary number system.

Instead of 10 digits like 1, 2, 3, 4, 5, 6, 7, 8, 9, and 0, the binary number system only has two possible digits, 1 and 0. Another way to think of it is that computers only have switches \(bits\) that can be in an "off state" or an "on state."

### Follow Along <a id="follow-along"></a>

Before we try to understand the binary number system, let's review how the decimal number system works. Let's look at the number "1001" in decimal.

Even though there are two "1" digits in this number, they don't represent the same quantity. The leftmost "1" represents one thousand, and the rightmost "1" represents one unit. The "0"s in-between represent the tens place and the hundreds place.

So this "1001" in base ten represents "1 thousand, 0 hundreds, 0 tens, and 1 one."

Each successive digit in the base 10 number system is a power of ten. The ones place is `10^0 = 1`. The tens place is `10^1 = 10`. The hundreds place is `10^2 = 100`. This pattern continues on and on.

This pattern holds for other number systems as well. In the binary system, each successive digit represents a different power of 2. The first digit represents `2^0 = 1`. The second digit represents `2^1 = 2`. The third digit represents `2^2 = 4`. Again, this pattern continues on and on.

So, what if the number "1001" was in binary and not decimal? What would it represent then? Well, if we read it right to left, we have a "1" in the ones place, a "0" in the twos place, a "0" in the fours place, and a "1" in the eights place. We add these values up \(8 + 0 + 0 + 1\) which equals 9.

Below, is a table that shows how to count up to 8 in binary and decimal:

| Decimal | Binary |
| :------ | :----- |
| 0       | 0000   |
| 1       | 0001   |
| 2       | 0010   |
| 3       | 0011   |
| 4       | 0100   |
| 5       | 0101   |
| 6       | 0110   |
| 7       | 0111   |
| 8       | 1000   |

### Challenge <a id="challenge"></a>

Convert the following decimal numbers into binary numbers:

1. 25
2. 63
3. 9
4. 111

### Additional Resources <a id="additional-resources"></a>

- [https://www.mathsisfun.com/binary-number-system.html \(Links to an external site.\)](https://www.mathsisfun.com/binary-number-system.html)
- [https://www.mathsisfun.com/definitions/decimal-number-system.html](https://www.mathsisfun.com/definitions/decimal-number-system.html)

![](../../.gitbook/assets/image%20%284%29%20%286%29%20%285%29%20%281%29%20%286%29.png)

## Objective 03 - Understand how fixed-width integers are stored in memory

### Overview <a id="overview"></a>

We now know that things are stored in RAM using binary, and each "box" in RAM holds 1 byte \(8 bits\). What does that mean for what we can store in RAM? Let's say we have 1 byte of RAM to use. How many different numbers can we represent using only this 1 byte?

Remember that each digit in a binary number is a successive power of 2. If we have 8 bits to use, we can store `2^8 = 256` different numbers in 1 byte.

### Follow Along <a id="follow-along"></a>

Let's see if we can find a pattern:

- With one bit, we can express two numbers \(`0` and `1`\)
- With two bits, for each of the first numbers \(`0` or `1`\), we can put a `0` or a `1` after it, so we can express four numbers
- With three bits, we can express eight numbers.

Every time we add a new bit, we double the number of possible numbers we can express in binary. This pattern can be generalized as `2^n` and `2^8 = 256`.

Often, computers use 4 bytes \(32 bits\) to represent our variables, meaning that we can express as many as 4 billion \(`2^32`\) possible values. Similarly, computers may use 8 bytes \(64 bits\) to represent our variables and can express over 10 billion \(`2^64`\).

The 2^X in the binary number system is called the **bitsize**. Eight bytes of memory are called "8-bit", and 16 bytes are called "16-bit," etc.

In theory, you could use less space to represent smaller integers. For instance, in binary, the number one is represented by `1`. So, technically, to store one in binary, you only need one bit. But computers don't usually do this. Many integers take a fixed amount of space, no matter what number they might have in them. So, even though you only need one bit to represent the number one, the computer would still use 32 or 64 bits to do so.

So, if a variable represents a fixed-width integer, it doesn't matter if it has the value `0` or `123,456`; the amount of space it takes up in RAM is the same.

The computer can store numbers like 3, 60000000, or -14 in 32 bits, one of the "fixed-width integers" we discussed earlier. All of these fixed-width integers take up constant space \(O\(1\)\).

Storing numbers as fixed-width integers introduces a trade-off. We have constant space complexity, and because each integer has a constant and expected number of bits, simple mathematical operations only take constant time. The cost of having an integer as fixed-width is that there is a limit to the number of integers you can represent.

### Challenge <a id="challenge"></a>

1. What is the number of possible integer values you can store with 4 bytes? How did you make that calculation?
2. What is the number of possible integer values you can store with 8 bytes? How did you make that calculation?

### Additional Resources <a id="additional-resources"></a>

- [https://vladris.com/blog/2018/10/13/arithmetic-overflow-and-underflow.html \(Links to an external site.\)](https://vladris.com/blog/2018/10/13/arithmetic-overflow-and-underflow.html)

![](../../.gitbook/assets/image%20%284%29%20%286%29%20%285%29%20%281%29%20%286%29.png)

## Objective 04 - Describe, in general terms, how arrays are stored in memory and the time complexity of lookups

### Overview <a id="overview"></a>

When writing programs, you likely need to store several numbers, not just one integer.

### Follow Along <a id="follow-along"></a>

So, let's say we wanted to write a program that allowed us to keep track of the number of hours we spent studying that day. We will round the number of hours to the nearest whole number to store them as fixed-width integers. Additionally, each day's hours will be represented by eight bits in binary.

So, we will start at memory address 0 in RAM, and each day, store the number of hours we studied in that "box" of RAM. For our first day that we are tracking, we store an 8-bit binary integer in "box" number 0. On the second day, we store an 8-bit binary integer in "box" number 1. This pattern continues.

Now, I'm sure you've already used an array when you are programming. An array is just an ordered sequential collection of data. Well, RAM is already structured like this. Right? Our days where we track the number of hours that we are studying are in sequential order in RAM.

Knowing this information, what can we do if we want to look up how many hours we studied on day 5 \(index 4 because of zero-indexing\)? Because all of the information is stored in sequential order, we can do simple math. If you are looking for the day 5 information \(index 4\), you need to know what the starting item address is 0 and then add 4 \(the index\). Or, if the starting address was 5 and you were looking for the 10th index, you'd go to memory address 15 \(5 + 10\).

This math works because we are using one "box" in memory for each day's record. If we were using 64-bit integers that take up 8 "boxes" in RAM, we would have to slightly adjust our math. In this case, we would have to multiply the index we were looking for by the number of bytes each record was stored in. So, if we were storing 64-bit integers \(8 bytes\) and wanted to find the item with index 4, and the starting index was 0, we would go to memory address `0 + (4 * 8) = 32`.

Because accessing information from a specific index involves this simple mathematical computation, accessing items in an array is a constant time operation. For the mathematical computations to be consistent and straightforward, arrays have to follow specific rules. Each item in the array has to take up the same number of bytes in RAM. Also, each item has to be stored right next to the previous item in RAM. If there are any gaps or interruptions in the array, then the simple mathematical computation for accessing a particular item no longer works.

### Challenge <a id="challenge"></a>

Let's say you need to store an array of 64-bit integers. Your array needs to have enough capacity for 24 integers. How many 1-byte slots of memory need to be allocated to store this array?

### Additional Resources <a id="additional-resources"></a>

- [https://en.wikipedia.org/wiki/Array_data_type](https://en.wikipedia.org/wiki/Array_data_type)

![](../../.gitbook/assets/image%20%284%29%20%286%29%20%285%29%20%281%29%20%286%29.png)

## Objective 05 - Describe character encoding and how strings are stored in memory

### Overview <a id="overview"></a>

In this example, we will store some strings. A string, as we know, is just a bunch of characters or letters. One straightforward way to store a string is an array, so let's see how we can define some mappings to make it easier to store strings in arrays.

### Follow Along <a id="follow-along"></a>

To use our 8-bit slots in memory, we need a way to encode each character in a string in 8-bits. One common character encoding to do this is called "ASCII". Here's how the alphabet is encoded in ASCII:

| Letter | Encoding |
| :----- | :------- |
| A      | 01000001 |
| B      | 01000010 |
| C      | 01000011 |
| D      | 01000100 |
| E      | 01000101 |
| F      | 01000110 |
| G      | 01000111 |
| H      | 01001000 |
| I      | 01001001 |
| J      | 01001010 |
| K      | 01001011 |
| L      | 01001100 |
| M      | 01001101 |
| N      | 01001110 |
| O      | 01001111 |
| P      | 01010000 |
| Q      | 01010001 |
| R      | 01010010 |
| S      | 01010011 |
| T      | 01010100 |
| U      | 01010101 |
| V      | 01010110 |
| W      | 01010111 |
| X      | 01011000 |
| Y      | 01011001 |
| Z      | 01011010 |

Since we can express characters as 8-bit integers, we can express strings as arrays of 8-bit characters.

For example, we could represent LAMBDA like so:

```text
L -> 01001100
A -> 01000001
M -> 01001101
B -> 01000010
D -> 01000100
A -> 01000001
```

Each character, once it was encoded, could be stored as one 8-bit slot in memory.

### Challenge <a id="challenge"></a>

Draw out a model of a section of memory that stores the string `"Computer Science"` as an array of 8-bit ASCII characters.

### Additional Resources <a id="additional-resources"></a>

- [https://www.w3schools.com/charsets/ref_html_ascii.asp](https://www.w3schools.com/charsets/ref_html_ascii.asp)

![](../../.gitbook/assets/image%20%284%29%20%286%29%20%285%29%20%281%29%20%286%29.png)
