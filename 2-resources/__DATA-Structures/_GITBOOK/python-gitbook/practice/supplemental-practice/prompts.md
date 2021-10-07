# Prompts

| Solve all problems in order. Do not copy and paste, but do refer to previously solved problems. Show me each problem as it's solved if I'm available. |  |
| :-: | :-- |
|  |  |
|  | The Collatz conjecture is a conjecture in mathematics that concerns a sequence defined as follows: start with any positive integer n. Then each term is obtained from the previous term as follows: if the previous term is even, the next term is one half the previous term. If the previous term is odd, the next term is 3 times the previous term plus 1. The conjecture is that no matter what value of n, the sequence will always reach 1. |
|  |  |
|  | Given positive integer n, return a list of the of the Collatz sequence from n to 1. Recursive and iterative. |
|  | 3 -&gt; \[3, 10, 5, 16, 8, 4, 2, 1\] |
|  |  |
|  | Given positive integer n, return the number of steps required to go from n to 1. Recursive and iterative. |
|  | 3 -&gt; 7 |
|  |  |
|  | Given positive integer n, return a list of length n where each 1-index is the number of steps required for that number to reach 1. Recursive and iterative |
|  | 4 -&gt; \[0, 1, 7, 4\] |
|  |  |
|  | The Fibonacci numbers form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. |
|  |  |
|  | Return a list of the first n numbers of the Fibonacci sequence. Recursive and iterative. |
|  | 0 -&gt; \[\] |
|  | 1 -&gt; \[0\] |
|  | 4 -&gt; \[0, 1, 1, 2\] |
|  |  |
|  | Return the nth \(0 index\) number of the Fibonacci sequence. Recursive and iterative. |
|  | 0 -&gt; 0 |
|  | 9 -&gt; 21 |
|  |  |
|  | Return the greatest Fibonacci number less than or equal to n. Recursive and iterative. |
|  | 12 -&gt; 8 |
|  | 13 -&gt; 13 |
|  |  |
|  | Given a whole number, return if that number is a Fibonacci number. Recursive and iterative. |
|  | 1 -&gt; True |
|  | 4 -&gt; False |
|  |  |
|  | Given a whole number n, return a list of n+1 booleans where each item in the list represents if its 0-index is a Fibonacci number. |
|  | 6 -&gt; \[True, True, True, True, False, True, False\] |
|  |  |
|  | Given a string, return a new string keeping only the first occurrence of each character in order. |
|  | 'caardc' -&gt; 'card' |
|  |  |
|  | Given a string, return a new string keeping only the first two occurrences of each character in order. |
|  | 'abacbabbcd' -&gt; 'abacbcd' |
|  |  |
|  | Given a string, return a new string keeping only the last occurrence of each character in order. |
|  | 'caardc' -&gt; 'card' |
|  |  |
|  | Given a dictionary, reverse the keys and value in place. Keys and values are disjoint sets. |
|  | {'a': 0, 'b': 1} -&gt; {0: 'a', 1: 'b'} |
