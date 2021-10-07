# Unsorted Examples

### Design your implementation of the linked list. You can choose to use the singly linked list or the doubly linked list.

### A node in a singly linked list should have two attributes: val

### and

### next. val is the value of the current node

### next is a pointer/reference to the next node.

### If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list.

### Assume all nodes in the linked list are 0-indexed.

_Implement these functions in your linked list class:_

{% embed url="https://leetcode.com/problems/design-linked-list" %}

```python

class ListNode:
    def __init__(self, val=None):
        self.val = val
        self.next = None


class MyLinkedList:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.head = None

    def get(self, index: int) -> int:
        """
        Get the value of the index-th node in the linked list. If the index is invalid, return -1.
        """
        if index >= 0 and index <= 1000:
            counter = 0
            node = self.head
            while node:
                if counter == index:
                    return node.val
                node = node.next
                counter += 1
        return -1

    def addAtHead(self, val: int) -> None:
        """
        Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
        """
        if self.head != None:
            newnode = ListNode(val)
            newnode.next = self.head
            self.head = newnode
        else:
            self.head = ListNode(val)

    def addAtTail(self, val: int) -> None:
        """
        Append a node of value val to the last element of the linked list.
        """
        if self.head != None:
            newnode = ListNode(val)
            node = self.head
            while node:
                if node.next == None:
                    node.next = newnode
                    break
                node = node.next
        else:
            self.head = ListNode(val)

    def addAtIndex(self, index: int, val: int) -> None:

# Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.

        if index >= 0 and index <= 1000:
            node = self.head
            counter = 1
            if index == 0:
                if self.head != None:
                    newnode = ListNode(val)
                    newnode.next = self.head
                    self.head = newnode
                else:
                    self.head = ListNode(val)
            else:
                while node:
                    if index == counter:
                        newnode = ListNode(val)
                        temp = node.next
                        node.next = newnode
                        node.next.next = temp
                        break
                    node = node.next
                    counter += 1
        else:
            pass

    def deleteAtIndex(self, index: int) -> None:

#Delete the index-th node in the linked list, if the index is valid.

        node = self.head
        counter = 1
        if node.next != None:
            if index == 0:
                temp = node.next
                self.head = temp
            else:
                while node:
                    if index == counter and node.next != None:
                        node.next = node.next.next
                        break

                    node = node.next
                    counter += 1
```

![](../.gitbook/assets/image%20%2819%29%20%284%29%20%284%29.png)

### Define Count Vowels Function

Count the number of vowels in the user input string using for loop and while loop

Now, let’s define a function named countVowels\(\) which accepts one argument as a string where we need to count Vowels in it.

So, declare a variable count and initialize to 0 which keeps the track of vowel count.

```text
count = 0
```

Now before counting the vowels, first make sure the string is completely lowercase because we are checking vowels from the list where we declared vowel in lowercase only.

So keep it in mind to the first convert string to lowercase and for that, we are going to use **lower\(\)** function of Python.

```text
sentence = sentence.lower()
```

So, we have converted the string to lowercase, now traverse through the string and compare each character of string in the list of vowels whether the character is present in the list or not.

If the character is present in the list, then we simply increment the count variable by 1 otherwise continue to the loop without incrementing the count variable.

_**Read =&gt;**_ [_**Check if a number is greater than all those numbers in the list**_](https://codezup.com//check-number-greater-than-numbers-list-python/)

And at last, after traversing through the string, return the count variable back to the function call.

```text
for c in sentence:
    if c in ['a', 'e', 'i', 'o', 'u']:
        count += 1
return count
```

#### Define the Main Condition

Now, we have defined the Count Vowel function above which calculates the count of the number of vowels in the string.

So after this, ask the user to enter string which needs to pass to this above function and then print the count for the vowel.

```text
if __name__ == '__main__':
    userInput = str(input("Enter the string to check for vowels: "))
    count = countVowels(userInput)
    print('Vowel Count: ',count)
```

**Code**

```python
#Using While Loop
'''def countVowels(sentence):

    count = 0
    sentence = sentence.lower()
    i = 0
    while(i<len(sentence)):
        if sentence[i] in ['a', 'e', 'i', 'o', 'u']:
            count += 1
        i+=1;
    return count
'''

#Using For Loop
def countVowels(sentence):

    count = 0
    sentence = sentence.lower()
    for c in sentence:
        if c in ['a', 'e', 'i', 'o', 'u']:
            count += 1
    return count


if __name__ == '__main__':
    userInput = str(input("Enter the string to check for vowels: "))
    count = countVowels(userInput)
    print('Vowel Count: ',count)
```

**Output**

![Python Program to Count the Number of Vowels in a string using a loop Output](https://i0.wp.com/codezup.com/wp-content/uploads/2019/12/Python-Program-to-Count-the-Number-of-Vowels-in-a-string-using-a-loop-Output.png?resize=665%2C242&ssl=1)

![](../.gitbook/assets/image%20%2819%29%20%284%29%20%286%29.png)

### Define Binary Number to Decimal Function

Let’s create a new function to Convert Binary to a Decimal Number named binaryToDecimal\(\) which accepts Binary as an argument.

So let’s store the argument in the separate variables to use that at last while printing what the actual data is.

Along with this, create two new variables “**decimal**” and “**i**” and initialized both to 0.

```text
    binary1 = binary
    decimal, i  = 0, 0
```

Now create a while loop that loops till the number which we received as an argument not become 0.

So the logic behind converting is that first in each iteration, we need to get the last digit of Number either 1 or 0 and then multiply that last digit with the power of 2 and counter i.

_**Read =&gt;**_ [_**Python Program to Calculate LCM of Two Numbers**_](https://codezup.com/python-program-calculate-lcm-numbers/)

And at last, we divide the number by 10 and assign the same number back to binary to reduce it to 0.

```text
    while(binary != 0):
        dec = binary % 10
        decimal = decimal + dec * pow(2, i)
        binary = binary//10
        i += 1
```

Now, simply print the result using the format function in Python.

```text
    print('Decimal equivalent of {} is {}'.format(binary1, decimal))
```

#### Define the Main Method

Let’s create the main method which is going to ask for user input for the Binary Number and then pass that number to function that we created above.

```text
if __name__ == '__main__':
    userInput = int(input('Enter the binary number to check its decimal equivalent: '))
    binaryToDecimal(userInput)
```

**Code**

```text


def binaryToDecimal(binary):
    binary1 = binary
    decimal, i  = 0, 0
    while(binary != 0):
        dec = binary % 10
        decimal = decimal + dec * pow(2, i)
        binary = binary//10
        i += 1
    print('Decimal equivalent of {} is {}'.format(binary1, decimal))

if __name__ == '__main__':
    userInput = int(input('Enter the binary number to check its decimal equivalent: '))
    binaryToDecimal(userInput)
```

**Output**

![Python Program to convert Binary Number to Decimal Number Output](https://i2.wp.com/codezup.com/wp-content/uploads/2019/12/Python-Program-to-convert-Binary-Number-to-Decimal-Number.png?resize=665%2C251&ssl=1)

![](../.gitbook/assets/image%20%2819%29%20%284%29%20%2817%29.png)

### Fibonacci Series With Recursion

Let’s create a new Function named fibonacci_with_recursion\(\) which is going to find the Fibonacci Series till the n-th term by calling it recursively.

So the base condition will be if the number is less than or equal to 1, then simply return the number.

Otherwise, return the callback to Fibonacci function again with decrement value from numbers 1 and 2 and add both function calls.

```text
def fibonacci_with_recursion(number):
    if number <= 1:
        return number
    else:
        return (fibonacci_with_recursion(number - 1) + fibonacci_with_recursion(number - 2))
```

#### Fibonacci Series Without Recursion

Let’s create a new Function named fibonacci_without_recursion\(\) which is going to find the Fibonacci Series till the n-th term by using FOR Loops.

_**Read =&gt;**_ [_**Program to check whether the Number is Prime or Not**_](https://codezup.com/program-check-whether-number-prime-not-python/)

So, the base condition for this function is if the number is equal to 0, then we return output as 0 because of how we calculate the Series if the number is 0.

```text
if number == 0: return 0
```

Now, let’s declare two variables named fibonacci0 for number 0 and initialize it to 0 and fibonacci1 for number 1 and initialize it to 1.

```text
fibonacci0, fibonacci1 = 0, 1
```

Now create a FOR Loop to calculate till the n-th term, so the logic is simple as that assigns the sum of fibonacci0 and fibonacci1 to fibonacci1 and assigns fibonacci0 the value of fibonacci1 at last step.

And after calculating n-th term, simply returns the fibonacci1 because which keeps tracks till the n-th term.

```text
def fibonacci_without_recursion(number):
    if number == 0: return 0
    fibonacci0, fibonacci1 = 0, 1
    print(fibonacci0, end = ' ')
    for i in range(2, number + 1):
        print(fibonacci1, end = ' ')
        fibonacci1, fibonacci0 = fibonacci0 + fibonacci1, fibonacci1
    return fibonacci1
```

#### Define the Main Method

Now let’s create a main method where we need to call these both methods that we have created above for calculating Fibonacci Series using Recursion as well as by For Loops.

First, ask for the user input to enter any number. If the number is less than 0, then simply returns an error message printing that the “**Number must be Positive Number**“.

```text
if __name__ == '__main__':
    userInput = int(input('Enter the number upto which calculate fibonnaci series: '))
    if(userInput<0):
        print("Number must be Positive Number")
    else:
        print("\nUsing Recursion:")
        for i in range(userInput + 1):
            print(fibonacci_with_recursion(i),end=' ')

        print("\n\nUsing LOOP:")
        print(fibonacci_without_recursion(userInput))
```

**Source Code**

```text

def fibonacci_with_recursion(number):
    if number <= 1:
        return number
    else:
        return (fibonacci_with_recursion(number - 1) + fibonacci_with_recursion(number - 2))

def fibonacci_without_recursion(number):
    if number == 0: return 0
    fibonacci0, fibonacci1 = 0, 1
    print(fibonacci0, end = ' ')
    for i in range(2, number + 1):
        print(fibonacci1, end = ' ')
        fibonacci1, fibonacci0 = fibonacci0 + fibonacci1, fibonacci1
    return fibonacci1

if __name__ == '__main__':
    userInput = int(input('Enter the number upto which calculate fibonnaci series: '))
    if(userInput<0):
        print("Number must be Positive Number")
    else:
        print("\nUsing Recursion:")
        for i in range(userInput + 1):
            print(fibonacci_with_recursion(i),end=' ')

        print("\n\nUsing LOOP:")
        print(fibonacci_without_recursion(userInput))
```

**Output**

![Calculate and display n-th term Fibonacci Series in Python Output](https://i2.wp.com/codezup.com/wp-content/uploads/2019/12/Calculate-and-display-n-th-term-Fibonacci-Series-in-Python-Output.png?resize=665%2C302&ssl=1)

![](../.gitbook/assets/image%20%2819%29%20%284%29%20%2812%29.png)

![](../.gitbook/assets/image%20%2819%29%20%284%29%20%2810%29.png)

![](../.gitbook/assets/image%20%2819%29%20%284%29%20%281%29.png)

![](../.gitbook/assets/image%20%2819%29%20%284%29%20%288%29.png)

![](../.gitbook/assets/image%20%2819%29%20%284%29%20%2813%29.png)

![](../.gitbook/assets/image%20%2819%29%20%284%29%20%2818%29.png)

![](../.gitbook/assets/image%20%2819%29%20%284%29%20%2811%29.png)

![](../.gitbook/assets/image%20%2819%29%20%284%29%20%287%29.png)

![](../.gitbook/assets/image%20%2819%29%20%284%29%20%285%29.png)

![](../.gitbook/assets/image%20%2819%29%20%284%29%20%289%29.png)

![](../.gitbook/assets/image%20%2819%29%20%284%29%20%283%29.png)

![](../.gitbook/assets/image%20%2819%29%20%284%29%20%2816%29.png)

![](../.gitbook/assets/image%20%2819%29%20%284%29%20%2815%29.png)

![](../.gitbook/assets/image%20%2819%29%20%284%29.png)

![](../.gitbook/assets/image%20%2819%29%20%284%29%20%282%29.png)
