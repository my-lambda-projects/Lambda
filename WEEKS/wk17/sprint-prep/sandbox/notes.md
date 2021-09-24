[The python page on time-complexity](https://wiki.python.org/moin/TimeComplexity) shows that slicing lists has a time-complexity of O(k), where "k" is the length of the slice. That's for lists, not strings, but the complexity can't be O(1) for strings since the slicing must handle more characters as the size is increased. The Worst case complexity of slicing is O(n) so off the bat it's already a fairly performant approach in the worst case scenario. My only obstacle to solve this problem was not realizing that the default language in the editor was JavaScript and so for the first 30 minutes of the assignment I was trying to debug the javascript errors that arose from python syntax.

I briefly considered

```py
def csReverseString2(chars):
    new_string = ''
    index = len(chars)
    while index:
        index -= 1                    # index = index - 1
        new_string += chars[index] # new_string = new_string + character
    return new_string
print (csReverseString2("helloworld"))

```

> But i opted not to take this approach favoring time complexity over readability.

---

---

In Python, strings are immutable. Changing a string does not modify the string. It creates a new one.

Strings are sliceable. Slicing a string gives you a new string from one point in the string, backwards or forwards, to another point, by given increments. They take slice notation or a slice object in a subscript:

If I were instead to start with an empty string, and build up a new string from the old one.

## Ie..

```py

def csReverseString2(chars):
    new_string = ''
    index = len(chars)
    while index:
        index -= 1                    # index = index - 1
        new_string += chars[index] # new_string = new_string + character
    return new_string
print (csReverseString2("helloworld"))

```

> This approach is computationally inefficient in time because, remember, strings are immutable - so every time you're appending a character onto your new_string in your mind your computer is actually creating a new one... which incurs it's own time.

*As for space complexity any approach that involves loop & indexes to reverse a string will incur O(n*n) time complexity in the WCS because of the string copies, As well as O(n) space complexity because it uses extra memory to create temporary strings (which are hopefully garbage collected in the loop)... but not a guarantee. It's worth noting that it is not possible to reverse the string with O(1) space complexity because of the immutability of strings: you need twice the memory because string operations cannot be done in-place _(this can be done on list of characters, but the string <=> list conversions use memory)_\*

## chars[::-1] ... on the other hand

- doesn't use a visible loop
- returns a string without the need to convert from/to list
- uses compiled code from python runtime

### I don not know of a more time or space efficient implementation or surely I would have implemented it. If forced to make a tradeoff I would opt for time complexity as space is cheap....

---

---

---

---

#My solution was as follows:

```py
def csRemoveDuplicateWords(input_str):
  return ' '.join(dict.fromkeys(input_str.split()))



print(csRemoveDuplicateWords("alpha bravo bravo golf golf golf delta alpha bravo bravo golf golf golf delta"))
print(csRemoveDuplicateWords("my dog is my dog is super smart") )

print(csRemoveDuplicateWords("Your tests are broken broken broken broken broken") )

```

I got the correct output for the test cases provided in the description but somehow the automated tests did not produce the correct output.

Initially I had

```py
def csRemoveDuplicateWords(input_str):
    input_str=input_str.split()
    unique=[]
    for word in input_str:
      if word not in unique:
        unique.append(word)
        input_str=' '.join(unique)
        return input_str
```

However I wasn't passing the tests and I figured being a relative newbie to python syntax maybe I was making some kind of silly mistake and having taken a long break and run down my allotted time I figured that perhaps builtin methods would prove more fruitful... ultimately both implementations accomplished the stated goal despite not passing the autotest.

I spent a lot of time before I even decided perhaps the tests were misleading and decided to print the output only to realize that my function was infact working.
