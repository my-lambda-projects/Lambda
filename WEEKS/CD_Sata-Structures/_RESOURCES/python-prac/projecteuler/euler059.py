#!/usr/bin/env python
# -*- encoding:utf-8 -*-

"""
Solution to Project Euler Problem 59
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

Each character on a computer is assigned a unique code and the preferred standard is ASCII (American Standard Code for Information Interchange). For example, uppercase A = 65, asterisk (*) = 42, and lowercase k = 107.

A modern encryption method is to take a text file, convert the bytes to ASCII, then XOR each byte with a given value, taken from a secret key. The advantage with the XOR function is that using the same encryption key on the cipher text, restores the plain text; for example, 65 XOR 42 = 107, then 107 XOR 42 = 65.

For unbreakable encryption, the key is the same length as the plain text message, and the key is made up of random bytes. The user would keep the encrypted message and the encryption key in different locations, and without both "halves", it is impossible to decrypt the message.

Unfortunately, this method is impractical for most users, so the modified method is to use a password as a key. If the password is shorter than the message, which is likely, the key is repeated cyclically throughout the message. The balance for this method is using a sufficiently long password key for security, but short enough to be memorable.

Your task has been made easy, as the encryption key consists of three lower case characters. Using cipher1.txt (right click and 'Save Link/Target As...'), a file containing the encrypted ASCII codes, and the knowledge that the plain text must contain common English words, decrypt the message and find the sum of the ASCII values in the original text.
"""
import csv
from itertools import izip, cycle, product
from string import ascii_lowercase, ascii_uppercase

FILENAME ='data/cipher1.txt'
CIPHER = [int(c) for c in csv.reader(open(FILENAME, 'r')).next()]

ALOWER = set(ascii_lowercase)
AUPPER = set(ascii_uppercase)

def rate_for_english(text):
    rate = 0
    for c in text:
        if c in ['e','E']:
            rate += 11
        elif c in ['a', 'A']:
            rate += 9
        elif c in ALOWER:
            rate += 1
        elif c in AUPPER:
            rate += 1
        else:
            rate -= 1
    return rate

def encode(text, key):
    for t, c in izip(text, cycle(key)):
        yield t ^ c

def code2ascii(text):
    return (chr(c) for c in text)

def find_best_rated_key(text):
    best_rate = 0
    best_key = None
    for key in product(*(3*(ascii_lowercase,))):
            key = tuple(ord(k) for k in key)
            coded = encode(text, key)
            rate = rate_for_english(code2ascii(coded))
            if rate > best_rate:
                best_rate = rate
                best_key = key
    return best_rate, best_key

def test():
    pass

def run():
    rate, key = find_best_rated_key(CIPHER)
    print rate, key
    print sum(encode(CIPHER, key))
    print ''.join(code2ascii(encode(CIPHER, key)))

if __name__ == '__main__':
    test()
    run()
