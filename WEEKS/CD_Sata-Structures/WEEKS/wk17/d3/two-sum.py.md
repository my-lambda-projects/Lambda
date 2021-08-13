[

![Tylor Borgeson](https://miro.medium.com/fit/c/96/96/2*yPQ43Px-go0EQ_XxuTbVkg.jpeg)

](https://medium.com/@tylor.borgeson?source=post_page-----c1d84b029d35--------------------------------)

![](https://miro.medium.com/max/1400/1*ETTIDamOmYZ7u7YjJvGuFA.jpeg)

Photo by [ThisisEngineering RAEng](https://unsplash.com/@thisisengineering?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/whiteboard?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Given an array of integers, return **indices** of the two numbers such that they add up to a specific `target`.

You may assume that each input would have **_exactly_** one solution, and you may not use the _same_ element twice.

**Example:**

Given nums = \[2, 7, 11, 15\], target = 9,Because nums\[**0**\] + nums\[**1**\] = 2 + 7 = 9,  
return \[**0**, **1**\].

One thing that I really appreciate about this problem is that there are multiple ways of solving this problem, with each solution requiring a different way of thinking before you even arrive at the idea of the solution.

## The Brute-force solution:

The first way you could go about solving this challenge is likely the way that most people come up with when they first see the problem. This solution’s pseudocode looks something like this:

for each number X in list of numbers:  
 for each number Y in list of numbers starting from X:  
 if X+Y equal target number, return indices

The issue is that you have a worst case run time of O(n²). If the two numbers you are searching for are at the end of the list, you would need to go through all of the numbers multiple times, once in the “X” loop and each respective time in the “Y” loop.

This would give you the correct answer but the runtime is slow, and in the case of a large number of numbers it could be very problematic.

def twoSum(self, nums: List\[int\], target: int) -> List\[int\]:  
 for i in range(len(nums)):  
 for j in range(i+1, len(nums)):  
 if nums\[i\] + nums\[j\] == target:  
 return \[i, j\]

![](https://miro.medium.com/max/60/1*yAjKjrwEN5TvciGpBINZSA.png?q=20)

![](https://miro.medium.com/max/1400/1*yAjKjrwEN5TvciGpBINZSA.png)

This solution was quite slow even though the memory usage wasn’t too bad

If you this is your final solution in an interview at a large company, where they may place a lot of emphasis on efficiency, you might be in trouble.

## The Dictionary Solution:

After spending some time thinking about this problem, I came to a different solution which required, as I mentioned above, a different angle of thinking.

This solution makes use of a Dictionary (or Key Value Map), which, as I [mentioned in a previous post](https://levelup.gitconnected.com/valid-parentheses-interview-problem-in-python3-f98fb99c9cf?source=friends_link&sk=bab7bcf161a856966dd7f9ba951ca5a5), is very useful in interview challenges due to its’ super quick value look up.

The idea was, instead of looking for two numbers to add up to the target number, do the following:

instantiate an empty dictionaryfor each number in list of numbers:  
 result = subtract number from target number  
 look for result in the dictionary (instant lookup)  
 if found:  
 return index of number and index of dictionary lookup result  
 else:  
 add number to dictionary as key with value being the index

Switching the way of thinking from the “number1 + number2 = target” to “target - number1 = number2” was at first not too easy, but doing so allowed not only for the use of the Key Value Map but also requires only one iteration of the number list, meaning a worst case run time of O(n) which is significantly better than the O(n²) from the Brute Force approach.

def twoSum(self, nums: List\[int\], target: int) -> List\[int\]:  
 dictionary = {}  
 answer = \[\]

                for i in range(len(nums)):
            secondNumber = target-nums\[i\]
            if(secondNumber in dictionary.keys()):
                secondIndex = nums.index(secondNumber)
                if(i != secondIndex):
                    return sorted(\[i, secondIndex\])

                            dictionary.update({nums\[i\]: i})

![](https://miro.medium.com/max/60/1*2IRll46NMBaFpgam1Ygb4A.png?q=20)

![](https://miro.medium.com/max/1400/1*2IRll46NMBaFpgam1Ygb4A.png)

With a 48ms and an average memory usage, I was pretty happy with the solution.
