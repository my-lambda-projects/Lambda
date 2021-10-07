# Python3 Regex

Regex or Regular Expressions are an important part of Python Programming or any other Programming Language. It is used for searching and even replacing the specified text pattern. In the regular expression, a set of characters together form the search pattern. It is also known as reg-ex pattern. Tough thing about Regex is not learning or understanding it but remembering syntax and how to form pattern according to our requirements. So here we have provided a regex cheat sheet containing all the different character classes, special characters, modifiers, sets etc. which are used in regular expression.

#### Basic Characters:

| Expression | Explanations |
| :-- | :-- |
| **^** | Matches the expression to its right, at the start of a string before it experiences a line break |
| **$** | Matches the expression to its left, at the end of a string before it experiences a line break |
| **.** | Matches any character except newline |
| **a** | Matches exactly one character a |
| **xy** | Matches the string xy |
| **a\|b** | Matches expression a or b. If a is matched first, b is left untried. |

**Example:**Python3

```text
import re

print(re.search(r"^x","xenon"))
print(re.search(r"s$","geeks"))
```

**Output:**

```text
<re.Match object; span=(0, 1), match='x'>
<re.Match object; span=(4, 5), match='s'>
```

**Explanation:**

First import the regex module with the command **import re**

Then, in the first example, we are searching for “**^x”** in the word **“xenon”** using regex. **^** this character matches the expression to its right, at the start of a string. So, **^x** will search for character x in the beginning of the string. Since **xenon** starts with **x,** it will find the match and will return the match\('x'\) and its position\(0,1\)

Similarly, in the second example **s$** will search for the character **s** at the end of the string, now since geeks end with **s**, so it will find the match and will return the match\('s'\) and its position\(4,5\).

#### Quantifiers:

| Expressions | Explanations                                                   |
| :---------- | :------------------------------------------------------------- |
| **+**       | Matches the expression to its left 1 or more times.            |
| **\***      | Matches the expression to its left 0 or more times.            |
| **?**       | Matches the expression to its left 0 or 1 times                |
| **{p}**     | Matches the expression to its left p times, and not less.      |
| **{p, q}**  | Matches the expression to its left p to q times, and not less. |
| **{p, }**   | Matches the expression to its left p or more times.            |
| **{ , q}**  | Matches the expression to its left up to q times               |

Their default searching method is Greedy. But if ? is added to qualifiers \(+, \*, and ? itself\) it will perform matches in a non-greedy manner.

**Examples:**Python3

```text
import re

print(re.search(r"9+","289908"))
print(re.search(r"\d{3}","hello1234"))
```

**Output:**

```text
<re.Match object; span=(2, 4), match='99'>
<re.Match object; span=(5, 8), match='123'>
```

**Explanation:**

In the first example, **9+** will search for the number **9** one or more times. Since **289908** contains **9** two times, the regex will match it and will print the match\('99'\) and its position\(2,4\)

In the second example, **\d{3}** will search for digits exactly 3 times. Since **hello1234** have digits, it will match exactly 3 digits which will be encountered first that are 123 and not 4, because **{3}** will match for exactly 3 digits. So it will print the match\('123'\) and its position\(5,8\)

#### Character Classes:

| Expressions | Explanations |
| :-- | :-- |
| **\w** | Matches alphanumeric characters, that is a-z, A-Z, 0-9, and underscore\(\_\) |
| **\W** | Matches non-alphanumeric characters, that is except a-z, A-Z, 0-9 and \_ |
| **\d** | Matches digits, from 0-9. |
| **\D** | Matches any non-digits. |
| **\s** | Matches whitespace characters, which also include the \t, \n, \r, and space characters. |
| **\S** | Matches non-whitespace characters. |
| **\A** | Matches the expression to its right at the absolute start of a string whether in single or multi-line mode. |
| **\Z** | Matches the expression to its left at the absolute end of a string whether in single or multi-line mode. |
| **\n** | Matches a newline character |
| **\t** | Matches tab character |
| **\b** | Matches the word boundary \(or empty string\) at the start and end of a word. |
| **\B** | Matches where \b does not, that is, non-word boundary |

**Examples:**Python3

```text
import re

print(re.search(r"\s","xenon is a gas"))
print(re.search(r"\D+\d*","123geeks123"))
```

**Output:**

```text
<re.Match object; span=(5, 6), match=' '>
<re.Match object; span=(3, 11), match='geeks123'>
```

**Explanation:**

In the first example, **\s** will search for the blank space and whenever it encounters the first blank space it will print out that match. Since **xenon is a gas** that contains blank spaces, it will encounter the first blank space and print out that match\(' '\) and its position\(5,6\)

In the second example, **\D+\d\*** will search for one or more non-digits characters followed by 0 or more digits. In our case, **geeks123** best fits the description as it contains 1 or more non-digits characters\(geeks\) followed by 0 or more digit characters\(123\). So it will print the match\('geeks123'\) and its position\(3,11\).

#### Sets:

| Expressions | Explanations |
| :-- | :-- |
| **\[abc\]** | Matches either a, b, or c. It does not match abc. |
| **\[a-z\]** | Matches any alphabet from a to z. |
| **\[A-Z\]** | Matches any alphabets in capital from A to Z |
| **\[a\-p\]** | Matches a, -, or p. It matches - because \ escapes it. |
| **\[-z\]** | Matches - or z |
| **\[a-z0-9\]** | Matches characters from a to z or from 0 to 9. |
| **\[\(+\*\)\]** | Special characters become literal inside a set, so this matches \(, +, \*, or \) |
| **\[^ab5\]** | Adding ^ excludes any character in the set. Here, it matches characters that are not a, b, or 5. |
| **\\[a\\]** | Matches \[a\] because both parentheses \[ \] are escaped |

**Examples:**Python3

```text
import re

print(re.search(r"[^abc]","abcde"))
print(re.search(r"[a-p]","xenon"))
```

**Output:**

```text
<re.Match object; span=(3, 4), match='d'>
<re.Match object; span=(1, 2), match='e'>
```

**Explanation:**

In the first example, **\[^abc\]** will search for anything except a, b and c, so regex will match the first character which is not a or b or c and will print out that match. Since **abcde** contains **d** as its first match that is neither a nor b nor c, it will print out that match. So match would be \('d'\) and its position would be \(3,4\)

In the second example, **\[a-p\]** will search for the character between a to p. In **xenon** the first word between a-p is **e** it will print out that search. So match would be \('e'\) and its position would be \(1,2\)

#### Groups:

| Expressions | Explanations |
| :-- | :-- |
| **\( \)** | Matches the expression inside the parentheses and groups it which we can capture as required |
| **\(?\#...\)** | Read a comment |
| **\(?PAB\)** | Matches the expression AB, which can be retrieved with the group name. |
| **\(?:A\)** | Matches the expression as represented by A, but cannot be retrieved afterwards. |
| **\(?P=group\)** | Matches the expression matched by an earlier group named “group” |

**Examples:**Python3

```text
import re

example = (re.search(r"(?:AB)","ACABC"))
print(example)
print(example.groups())

result = re.search(r"(\w*), (\w*)","geeks, best")
print(result.groups())
```

**Output:**

```text
<re.Match object; span=(2, 4), match='AB'>
()
('geeks', 'best')
```

**Explanation:**

In the first example, **\(?:AB\)** will search and matches the expression **AB** and will print out the match and its position. Since **ACABC** contains **AB,** it will print the match\('AB'\) and its position\(2,4\) but as stated, this cannot be retrieved afterward. So, if we try to print the group of the output, it will show an empty bracket.

In the second example, we have captured two groups, one group which has 0 or more alphanumeric characters followed by comma and space and then followed by another group which has again 0 or more alphanumeric characters. In **geeks, best geeks** and **best** are captured as the first and second groups. So, when we print out these groups we will have \('geeks', 'best\) as the groups captured.

#### Assertions:

| Expression | Explanation |
| :-- | :-- |
| **A\(?=B\)** | This matches the expression A only if it is followed by B. \(Positive look ahead assertion\) |
| **A\(?!B\)** | This matches the expression A only if it is not followed by B. \(Negative look ahead assertion\) |
| **\(?&lt;=B\)A** | This matches the expression A only if B is immediate to its left. \(Positive look behind assertion\) |
| **\(?&lt;!B\)A** | This matches the expression A only if B is not immediately to its left. \(Negative look behind assertion\) |
| **\(?\(\)\|\)** | If else conditional |

**Examples:**Python3

```text
import re

print(re.search(r"z(?=a)", "pizza"))
print(re.search(r"z(?!a)", "pizza"))
```

**Output:**

```text
<re.Match object; span=(3, 4), match='z'>
<re.Match object; span=(2, 3), match='z'>
```

**Explanation:**

In the first example, **z\(?=a\)** will search for the character z which is followed by the character a. Since in **pizza,** we have a character **z** which is immediately followed by the character **a** \(piz**za**\), so there will be a match. Regex will print the match\('z'\) which is followed by **a** with its position\(3,4\)

In the second example, **z\(?!a\)** will search for the character **z** which is **not** followed by the character **a.** Since in **pizza,** we have a character **z** which is not followed by **a** but followed by **z** \(pi**zz**a\), so there will be a match. Regex will print the match\('z'\) not followed by **a** with its position \(2,3\)

#### Flags:

| Expression | Explanation                                            |
| :--------- | :----------------------------------------------------- |
| **a**      | Matches ASCII only                                     |
| **i**      | Ignore case                                            |
| **L**      | Locale character classes                               |
| **m**      | ^ and $ match start and end of the line \(Multi-line\) |
| **s**      | Matches everything including newline as well           |
| **u**      | Matches Unicode character classes                      |
| **x**      | Allow spaces and comments \(Verbose\)                  |

**Examples:**Python3

```text
import re

exp = """hello there
I am from
Geeks for Geeks"""

print(re.search(r"and", "Sun And Moon", flags=re.IGNORECASE))
print(re.findall(r"^\w", exp, flags = re.MULTILINE))
```

**Output:**

```text
<re.Match object; span=(4, 7), match='And'>
['h', 'I', 'G']
```

**Explanation:**

In the first example, the IGNORECASE flag will search for the word **and** irrespective of its case \(whether uppercase or lowercase\), So it ignores the case and matches **And** in the expression. So it will print the match\('And'\) and its position\(4,7\)

In the second example, the MULTILINE flag will search in each and every line and will match when the line is starting an alphanumeric character. Since in Multi-line **hello there I am from Geeks for Geeks,** every line is starting with an alphanumeric character, so it will match every line and will print the match in an array \(\['h', 'I', 'G'\]\).

Note: In MULTILINE flag, we have to use re.findall, since it has many matches \(for every line\)

## What are Regular Expressions? <a id="977d"></a>

Regular Expression is an advanced string searching method that allows users to search for something in a text. This is done by creating a pattern that matches the information that we want to retrieve. Regular Expression has such power that it has been incorporated in many programming languages like Python, Pearl, JavaScript, PHP, and Java.

So, let’s come back to our problem!

We can get the users’ phone numbers by first creating a pattern. Observe that the phone numbers are located between the brackets “\( \)”. It’s a useful information and we can use it to our advantage. To access the goodness of Regular Expressions in Python, we will need to **import** the **re library**.

```text
import re phone_numbers = []
pattern = r"\(([\d\-+]+)\)"with open("log.txt", "r") as file:
    for line in file:
        result = re.search(pattern, line)
        phone_numbers.append(result.group(1))print(phone_numbers)
```

The Output:

```text
['+1-202-555-0189', '+33-93-751-3845', '+49-30-833-931-313']
```

I will go through this code one by one:

1. import re — Importing the Regular Expressions library in Python.
2. phone_numbers = \[\] — Preparing a list to store the phone numbers.
3. pattern = r”\\(\(\[\d\-+\]+\)\\)” — The pattern that we use to locate the phone number, we will go through what each symbols do later in this article!
4. with open\(“log.txt”, “r”\) as file: — Opening the file that we want to process.
5. for line in file: — Iterating\(going through\) each line in the log.txt.
6. result = re.search\(pattern, line\) — Searching for the phone number in the line
7. phone_numbers.append\(result.group\(1\)\) — Adding the customer’s phone number into the phone numbers list
8. print\(phone_numbers\) — Printing the list of phone numbers.

There are many useful functions and characters in the re library, yet learning everything might be overwhelming. Therefore, I have selected the most useful functions and characters that will help you to start implementing RegEx in your Python script.

Let’s start diving in the re library!

## RegEx Raw String <a id="cdd9"></a>

In our example, we use this pattern in log.txt : r”\\(\(\[\d\-+\]+\)\\)”

Are you wondering why should we type an “r” before the string? “r” here stands for the raw string. Python RegEx use a backslash\(\\)to indicate a special sequence or as an escape character. This collides with Python’s usage of the backslash\(\\) for the same purpose in string lateral. Thus, the raw string here is used to avoid confusion between the two. Besides that, it also helps us in making our pattern shorter. Without typing “r”, one might need to type “\\\\” just for indicating a backslash\(\\).

So, don’t forget your “r”!

## **RegEx Special Sequences** <a id="0c7b"></a>

We’ll start off with the simplest syntax in RegEx, the special sequences. Special sequences in RegEx starts with a backslash\(\\). So if you meet a backslash in the RegEx pattern, chances are it is the syntax for a special sequence.

```text
\d               matches a single digit character [0-9]\w               matches any alphabet, digit, or underscore\s               matches a white space character (space, tab, enter)
```

The negations of these sequences are also available by using the capital letter. For example, \D is the negation of \d.

```text
\D               matches a single non-digit character
```

## **RegEx Meta Characters** <a id="7a0c"></a>

We’ll then go through the meta characters which will assist us in reaching our goal. Each one of these characters has its special meaning.

```text
.                matches any character(except for newline character)^                the string starts with a character$                the string ends with a character*                zero or more occurrences +                one or more occurrences?                one or no occurrence {}               exactly the specified number of occurrences|                either or
```

Example :

```text
"c.t"            will match anything like "cat", "c*t", "c1t", etc"^a"             will match "a" from "a cat" but not "eat a cake""cat$"           will match "a cat" but not "cat party""a*b"            will match "b", "ab", "aab", "aaab", ..."a+b"            will match "ab", "aab", "aaab", ..."a?b"            will match "b" or "ab""a{1}b"          will match "ab""a{1,3}b"        will match "ab", "aab", or "aaab""cat|dog"        will match "cat" or "dog"
```

## RegEx Sets <a id="703d"></a>

Sets can be used to match one of the characters inside the square brackets.

```text
[abcd]           matches either a, b, c or d
```

You can also use the special sequences that we have discussed earlier here. Besides that, there is also the dash character that we’ll get to shortly.

```text
[a-z0-9]         matches one of the characters from a-z or 0-9[\w]             matches an alphabet, digit, or underscore
```

The caret character\(^\) stands for except.

```text
[^\d]            matches a character that is not a digit [0-9]
```

To include characters that have special meaning in the set like backslash \(\\) and dash\(-\), you will need to use add a backslash in the front \(\\\) and \(\-\)-the first backslash stands as an escaping character. Escaping character makes characters that have special meaning to be taken literally.

However, characters that don’t have any special meaning like ?\_+\*.\|\(\)${} can be used directly.

## RegEx Function <a id="2fd7"></a>

Lastly, we’ll go through the things that we can do with RegEx by using the functions available!

```text
findall()        Returns a list that contains all matches       search()         Returns a 'match object' if there is a match in          the stringsplit()          Returns a list of string that has been split at each matchsub()            Replaces the matches with a string
```

In all these functions, the arguments are all the same, which are &lt;pattern&gt; and &lt;string&gt;.

Example :

1. findall\(\)

```text
import repattern = r".at"
line = "The big fat cat sat on a cat"
result = re.findall(pattern, line)print(result)
```

The Output :

```text
['fat', 'cat', 'sat', 'cat']
```

2. search\(\)

```text
import repattern = r".* .*"
line = "Ada Lovelace"
result = re.search(pattern, line)print(result)
print(result.group())
print(result.group(0))
```

The Output :

```text
<_sre.SRE_Match object; span=(0, 12), match='Ada Lovelace'>
Ada Lovelace
Ada Lovelace
```

3. split\(\)

```text
import repattern = r"cat"
line = "The big fat cat sat on a cat"
result = re.split(pattern, line)print(result)
```

The Output :

```text
['The big fat ', ' sat on a ', '']
```

4. sub\(\)

```text
import repattern = r"Ada"
line = "Ada Lovelace"
result = re.sub(pattern, r"Tom", line)print(result)
```

The Output :

```text
Tom Lovelace
```

## RegEx Capturing Group <a id="fa62"></a>

The capturing group is very useful when we want to extract information from a match, like in our example, log.txt.

We use this pattern in log.txt : r”\\(\(\[\d\-+\]+\)\\)”

Here, we are using the capturing group just to extract the phone number without including the parentheses character.

The phone number that we want to extract can be accessed with result.group\(1\).

Understanding the capturing group will be easier through examples.

Example :

1. search\(\)

```text
import repattern = r"(.*) (.*)"
line = "Ada Lovelace"
result = re.search(pattern, line)print(result)
print(result.groups())
print(result.group(0))
print(result.group(1))
print(result.group(2))
```

The Output :

```text
<_sre.SRE_Match object; span=(0, 12), match='Ada Lovelace'>
('Ada', 'Lovelace')
Ada Lovelace
Ada
Lovelace
```

2. split\(\)

```text
import repattern = r"(cat)"
line = "The big fat cat sat on a cat"
result = re.split(pattern, line)print(result)
```

The Output :

```text
['The big fat ', 'cat', ' sat on a ', 'cat', '']
```

3. sub\(\)

```text
import repattern = r"(.*) (.*)"
line = "Ada Lovelace"
result1 = re.sub(pattern, r"\2 \1", line)
result2 = re.sub(pattern, r"Tom", line)print(result1)
print(result2)
```

“\1” and “\2” stand for the first and second capturing group respectively.

The Output :

```text
Lovelace Ada
Tom
```
