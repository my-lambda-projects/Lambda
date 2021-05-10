# cc72 permutationPalindrome https://repl.it/student/submissions/1878345

from collections import Counter
import timeit

def is_permutation_palindrome(string):
  unpaired_chars = set()

  for char in string:
    if char in unpaired_chars:
      unpaired_chars.remove(char)
    else:
      unpaired_chars.add(char)
  return len(unpaired_chars) <= 1

def is_permutation_palindrome2(string):
  return sum(v % 2 for v in Counter(string).values()) <= 1

def wrapper(func, *args, **kwargs):
  def wrapped():
    return func(*args, **kwargs)
  return wrapped

string1 = 'asdfdsa'
wrapped1 = wrapper(is_permutation_palindrome, string1);
wrapped2 = wrapper(is_permutation_palindrome2, string1);


print(timeit.timeit(wrapped1))
print(timeit.timeit(wrapped2))
