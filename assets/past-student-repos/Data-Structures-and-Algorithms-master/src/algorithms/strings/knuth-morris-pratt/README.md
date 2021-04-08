# Knuth-Morris-Pratt

The **Knuth-Morris-Pratt** algorithm is a string matching algorithm that searches for occurrences of a **pattern string** `P` within another string `S`. It does so by employing the observation that when a mismatch occurs, the word itself embodies sufficient information to determine where the next match could begin.

## Prefix Table
KMP uses a pre-generated table called a **prefix table**. The prefix table allows us to skip certain comparisons.

The values in the prefix table are the **length** of the longest proper **prefix** that maches a proper **suffix**.
```
A C A C A G T
0 0 1 2 3 0 0

A
AC
ACA
ACAC

A
CA
ACA
CACA
```
## Terminology

#### Proper prefix:

Characters in a string excluding one or more characters at the end.

```
string   = 'AYYYYY'
prefixes = ['A', 'AY', 'AYY', 'AYYY', 'AYYYY']
```

#### Proper suffix:

Characters in a string excluding one or more characters at the beginning.

```
string   = 'LMAOO'
suffixes = ['MAOO', 'AOO', 'OO', 'O']
```

#### _References_

_[Wikipedia — Knuth–Morris–Pratt algorithm](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm)_

[↑](#Knuth-Morris-Pratt)