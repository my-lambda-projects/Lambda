## Array

- (53) Maximum Subarray
- (54) Spiral Matrix
- (57) Insert Interval
- (73) Set Matrix Zeroes
- (75) Sort Colors
- (88) Merge Sorted Array
- (118) Pascal's Triangle
- (119) Pascal's Triangle II
- (169) Majority Element
- (229) Majority Element II
- (238) Product of Array Except Self
- (243) Shortest Word Distance
- (277) Find the Celebrity
- (347) Top K Frequent Elements
- (349) Intersection of Two Arrays
- (442) Find All Duplicates in an Array
- (605) Can Place Flowers
- (624) Maximum Distance in Arrays
- (723) Candy Crush
- (896) Monotonic Array
- (933) Number of Recent Calls
- (941) Valid Mountain Array
- (977) Squares of a Sorted Array
- (1103) Distribute Candies to People

## Binary Search

- (15) 3Sum
- (16) 3Sum Closest
- (18) 4Sum
- (29) Divide Two Integers
- (33) Search in Rotated Sorted Array
- (34) Find First and Last Position of Element in Sorted Array
- (35) Search Insert Position
- (50) Pow(x, n)
- (69) Sqrt(x)
- (153) Find Minimum in Rotated Sorted Array
- (154) Find Minimum in Rotated Sorted Array II
- (162) Find Peak Element
- (167) Two Sum II - Input array is sorted
- (278) First Bad Version
- (354) Russian Doll Envelopes
- (374) Guess Number Higher or Lower
- (436) Find Right Interval
- (497) Random Point in Non-overlapping Rectangles
- (528) Random Pick with Weight
- (825) Friends Of Appropriate Ages
- (981) Time Based Key-Value Store
- (1060) Missing Element in Sorted Array
- (1428) Leftmost Column with at Least a One

## Tree

- (94) Binary Tree Inorder Traversal
- (95) Unique Binary Search Trees II  
   Binary tree inorder traversal with the time complexity of O(4^n), this is because the problem meets the Segner's recurrent relation: C*0 = 1 and C*(n+1) is the sum of C*i\*C*(n-i) where i is in the range of 0 to n.
- (98) Validate Binary Search Tree
- (102) Binary Tree Level Order Traversal
- (105) Construc Binary Tree from Inorder
- (106) Construct Binary Tree from Inorder and Postorder Traversal  
   Due to postorder, the traversal order is `left->right->root`, when we construct the tree with the value from list of postorder, we need to the follow the order of `root->right->left`.
- (107) Binary Tree Level Order Traversal II  
   BFS uses `deque` to pop the left element and add to the right.
- (111) Minimum Depth of Binary Tree  
   This can be solved with BFS and DFS.
- (116) Populating Next Right Pointers in Each Node
- (117) Populating Next Right Pointers in Each Node II
- (226) Invert Binary Tree
- (230) Kth Smallest Element in a BST
- (272) Closest Binary Search Tree Value II
- (285) Inorder Successor in BST
- (297) Serialize and Deserialize Binary Tree
- (366) Find Leaves of Binary Tree
- (426) Convert Binary Search Tree to Sorted Doubly Linked List
- (1305) All Elements in Two Binary Search Trees
- (450) Delete Node in a BST
- (530) Minimum Absolute Difference in BST
- (543) Diameter of Binary Tree
- (545) Boundary of Binary Tree
- (549) Binary Tree Longest Consecutive Sequence II
- (938) Range Sum of BST
- (1022) Sum of Root To Leaf Binary Numbers
- (1026) Maximum Difference Between Node and Ancestor
- (1123) Lowest Common Ancestor of Deepest Leaves
- (404) Sum of Left Leaves
- (958) Check Completeness of a Binary Tree
- (173) Binary Search Tree Iterator
- (199) Binary Tree Right Side View  
   BFS + append right node first
- (257) Binary Tree Paths
- (270) Closest Binary Search Tree Value
- (653) Two Sum IV - Input is a BST
- (654) Maximum Binary Tree
- (701) Insert into a Binary Search Tree

## Backtracking

- (37) Sudoku Solver
- (526) Beautiful Arrangement
- (638) Shopping Offers

## Design

- (146) LRU Cache
- (170) Two Sum III - Data structure design
- (244) Shortest Word Distance II
- (359) Logger Rate Limiter
- (362) Design Hit Counter
- (380) Insert Delete GetRandom O(1)
- (381) Insert Delete GetRandom O(1) - Duplicates allowed
- (432) All O`one Data Structure
- (705) Design HashSet
- (706) Deisgn HashMap
- (715) Range Module
- (855) Exam Room
- (1117) Building H2O
- (1286) Iterator for Combination
- (1622) Fancy Sequence

## Graph

- (310) Minimum Height Trees  
  If the left nodes are more than 2, we can keep deleting two leaf nodes and treat the remaining one as root to get the minimum height. If there are two nodes left, both of them can work as root for minimum tree height.
- (1557) Minimum Number of Vertices to Reach All Nodes

## Topological Sort

- (269) Alien Dictionary

## BFS

- (126) Word Ladder II
- (127) Word Ladder
- (130) Surrounded Regions
- (133) Clone Graph
- (207) Course Schedule
- (314) Binary Tree Vertical Order Traversal
- (317) Shortest Distance from All Buildings
- (429) N-ary Tree Level Order Traversal
- (513) Find Bottom Left Tree Value
- (514) Freedom Trail
- (515) Find Largest Value in Each Tree Row  
   This is very similar to 513.
- (542) 01 Matrix
- (559) Maximum Depth of N-ary Tree
- (690) Employee Importance
- (743) Network Delay Time
- (787) Cheapest Flights Within K Stops This is very similar to 743.
- (752) Open the Lock
- (773) Sliding Puzzle
- (815) Bus Routes
- (847) Shortest Path Visiting All Nodes
- (967) Numbers With Same Consecutive Differences
- (987) Vertical Order Traversal of a Binary Tree
- (994) Rotting Oranges
- (1602) Find Nearest Right Node in Binary Tree

## Priority Queue

- (407) Trapping Rain Water II
- (675) Cut Off Trees for Golf Event
- (692) Top K Frequent Words

## DFS

- (22) Generate Parentheses
- (37) Sudoku Solver
- (39) Combination Sum recursion should start with candidates[i:] not candidates[i+1:]
- (40) Combination Sum II
- (77) Combinations
- (78) Subsets
- (79) Word Search
- (90) Subsets II
- (108) Convert Sorted Array to Binary Search Tree
- (110) Balanced Binary Tree
- (112) Path Sum
- (113) Path Sum II
- (129) Sum Root to Leaf Numbers
- (139) Word Break
- (200) Number of Islands
- (216) Combination Sum III
- (282) Expression Add Operators
- (291) Word Pattern II
- (301) Remove Invalid Parentheses
- (332) Reconstruct Itinerary
- (337) House Robber III
- (339) Nested List Weight Sum
- (351) Android Unlock Patterns
- (364) Nested List Weight Sum II
- (403) Frog Jump
- (425) Word Squares
- (437) Path Sum III
- (439) Ternary Expression Parser
- (463) Island Perimeter
- (472) Concatenated Words
- (473) Matchsticks to Square
- (488) Zuma Game
- (489) Robot Room Cleaner
- (490) The Maze
- (491) Increasing Subsequences
- (494) Target Sum
- (499) The Maze III
- (510) Inorder Successor in BST II
- (529) Minesweeper
- (531) Lonely Pixel I
- (698) Partition to K Equal Sum Subsets
- (733) Flood Fill
- (785) Is Graph Bipartite?
- (827) Making A Large Island
- (980) Unique Paths III
- (1059) All Paths from Source Lead to Destination
- (1192) Critical Connections in a Network
- (1240) Tiling a Rectangle with the Fewest Squares
- (1291) Sequential Digits
- (1376) Time Needed to Inform All Employees
- (1593) Split a String Into the Max Number of Unique Substrings

## Union Find

- (128) Longest Consecutive Sequence
- (261) Graph Valid Tree
- (323) Number of Connected Components in an Undirected Graph
- (547) Friend Circles
- (721) Accounts Merge
- (952) Union Find

## Dynamic Programming

- (10) Regular Expression Matching
- (44) Wildcard Matching
- (62) Unique Paths
- (63) Unique Paths II
- (70) Climbing Stairs
- (72) Edit Distance
- (91) Decode Ways
- (152) Maximum Product Subarray
- (198) House Robber
- (221) Maximal Square
- (265) Paint House II
- (279) Perfect Squares
- (304) Range Sum Query 2D - Immutable
- (309) Best Time to Buy and Sell Stock with Cooldown
- (464) Can I Win
- (509) Fibonacci Number
- (516) Longest Palindrome Subsequence
- (576) Out of Boundary Paths
- (600) Non-negative Integers without Consecutive Ones
- (741) Cherry Pickup
- (887) Super Egg Drop dp[M][k] means that, given K eggs and M moves, what is the maximum number of floor that we can check. Take a move, if the egg breaks, we can check dp[m-1][k-1] floors if the egg doesn't break, then we can check dp[m-1][k] floors
- (983) Minimum Cost For Tickets
- (1216) Valid Palindrome III

## Greedy

- (45) Jump Game II
- (55) Jump Game
- (134) Gas Station
- (392) Is Subsequence
- (484) Find Permutation
- (670) Maximum Swap
- (763) Partition Labels

## Recursion

- (544) Output Contest Matches

## Monotonic Stack

- (42) Trapping Rain Water

## Two Pointers

- (11) Container With Most Water
- (485) Max Consecutive Ones
- (674) Longest Continuous Increasing Subsequence
- (713) Subarray Product Less Than K
- (905) Sort Array By Parity
- (1004) Max Consecutive Ones III
- (1047) Remove All Adjacent Duplicates In String

## Python Tricks

- (14) Longest Common Prefix
- (38) Count and Say
- (621) Task Scheduler

## String

- (17) Letter Combinations of a Phone Number
- (58) Length of Last Word
- (67) Add Binary
- (68) Text Justification
- (127) Valid Palindrome
- (157) Read N Characters Given Read4
- (158) Read N Characters Given Read4 II - Call multiple times
- (165) Compare Version Numbers
- (227) Basic Calculator II
- (242) Valid Anagram
- (249) Group Shifted Strings
- (412) Fizz Buzz
- (415) Add Strings
- (420) Strong Password Checker
- (459) Repeated Substring Pattern
- (520) Detect Capital
- (527) Word Abbreviation
- (796) Rotate String
- (819) Most Common Word
- (824) Goat Latin
- (937) Reorder Data in Log Files
- (940) Distinct Subsequences II
- (1153) String Transforms Into Another String
- (1370) Increasing Decreasing String

## Bit Manipulation

- (421) Maximum XOR of Two Numbers in an Array

## Linked List

- (19) Remove Nth Node From End of List
- (24) Swap Nodes in Pairs
- (25) Reverse Nodes in k-Group
- (61) Rotate List
- (83) Remove Duplicates from Sorted List
- (138) Copy List with Random Pointer
- (143) Reorder List
- (206) Reverse Linked List
- (234) Palindrome Linked List
- (708) Insert into a Sorted Circular Linked List
- (876) Middle of the Linked List

## Two Pointers

- (30) Substring with Concatenation of All Words
- (283) Move Zeros
- (350) Intersection of Two Arrays II
- (680) Valid Palindrome II
- (977) Squares of a Sorted Array
- (986) Interval List Intersections

## Stack

- (32) Longest Valid Parentheses
- (56) Merge Intervals
- (71) Simplify Path
- (150) Evaluate Reverse Polish Notation
- (394) Decode String
- (402) Remove K Digits
- (456) 132 Pattern
- (636) Exclusive Time of Functions
- (946) Validate Stack Sequences
- (1021) Remove Outermost Parentheses
- (1190) Reverse Substrings Between Each Pair of Parentheses
- (1249) Minimum Remove to Make Valid Parentheses

## Set

- (36) Valid Sudoku

## Hash Table

- (205) Isomorphic Strings
- (249) Group Shifted Strings
- (290) Word Pattern
- (299) Bulls and Cows
- (350) Intersection of Two Arrays II
- (389) Find the Difference
- (409) Longest Palindrome
- (532) K-diff Pairs in an Array
- (554) Brick Wall
- (890) Find and Replace Pattern
- (953) Verifying an Alien Dictionary

## Ordered Map

- (846) Hand of Straights

## Trie

- (208) Implement Trie (Prefix Tree)
- (211) Add and Search Word - Data structure design
- (212) Word Search II
- (648) Replace Words
- (1032) Stream of Characters

## Presum

- (437) Path Sum III
- (560) Subarray Sum Equals K

## Sort

- (274) H-Index
- (296) Best Meeting Point

### Bucket Sort

- (220) Contains Duplicate III

### Quick Sort

- (215) Kth Largest Element in an Array

## Intervals

- (56)
- (57)
- (252) Meeting Room
- (253) Meeting Room II
- (435) Non-overlapping Intervals
- (452) Minimum Number of Arrows to Burst Balloons
- (495) Teemo Attacking
- (729) My Calendar I
- (731) My Calendar II
- (732) My Calendar III
- (1288) Remove Covered Intervals

## Buy/Sell Stocks

- (121) Best Time to Buy and Sell Stock
- (122) Best Time to Buy and Sell Stock II
- (123) Best Time to Buy and Sell Stock III
- (188) Best Time to Buy and Sell Stock IV
- (309) Best Time to Buy and Sell Stock with Cooldown
- (714) Best Time to Buy and Sell Stock with Transaction Fee

## Sliding Window

- (30) Substring with Concatenation of All Words
- (76) Minimum Window Substring
- (159) Longest Substring with At Most Two Distinct Characters
- (340) Longest Substring with At Most K Distinct Characters
- (346) Moving Average from Data Stream
- (438) Find All Anagrams in a String
- (689) Maximum Sum of 3 Non-Overlapping Subarrays

## DFA

- (65) Valid Number

## Brainteaser

- (41) First Missing Positive
- (777) Swap Adjacent in LR String

## Math

- (258) Add Digits  
   Digit root: (n - 1) % 9 + 1
- (273) Integer to English Words
- (342) Power of Four
- (470) Implement Rand10() Using Rand7()
- (523) Continuous Subarray Sum
- (593) Valid Square
- (829) Consecutive Numbers Sum
- (949) Largest Time for Given Digits
- (963) Minimum Area Rectangle II2
- (969) Pancake Sorting
- (1009) Complement of Base 10 Integer
- (1041) Robot Bounded In Circle

## Sampling

- (398) Random Pick Index

## Matrix

- (311) Sparse Matrix Multiplication

## Line Sweep

- (391) Perfect Rectangle
- (699) Falling Squares
- (1109) Corporate Flight Bookings

## Sorting

- (179) Largest Number

## Binary Indexed Tree

- (307) Range Sum Query - Mutable
