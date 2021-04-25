# https://youtu.be/r0xWh4QqS9Q
# https://piazza.com/class/j63w1pdyopf7kj?cid=83

from functools import reduce
from collections import Counter

def findMean(numbers):
  sum = reduce(lambda x, y: x + y, numbers)
  mean = sum / len(numbers)
  return mean

def findMedian(numbers):
  numbers.sort()
  mid = len(numbers) // 2
  if len(numbers) % 2 is 0:
    return findMean([numbers[mid], numbers[mid-1]])
  return numbers[mid]

# Non-Pythonic solution
# def findMode(numbers):
#   mode = None
#   mapping = {x: 0 for x in numbers}
#   greatestFrequency = 0
#   for n in numbers:
#     mapping[n] += 1
#     if mapping[n] > greatestFrequency:
#       greatestFrequency = mapping[n]
#       mode = n
#   return mode

# Pythonic solution
def findMode(numbers):
  counter = Counter(numbers)
  return counter.most_common(1)[0][0]

def meanMedianMode(numbers):
  mmm_dict = {
    'mean': findMean(numbers),
    'median': findMedian(numbers),
    'mode': findMode(numbers)
  }

  return mmm_dict
