# Aux Resources

{% embed url="https://gist.github.com/bgoonz/4006e76c6a67b9023e0839ea863ab14f" %}

First things first, the repo with all the exercises of this lecture is right here:

> > > [https://github.com/hugoestradas/Python_Basics](https://github.com/hugoestradas/Python_Basics)

Let's begin!

1\) Find prime factors.

For the very basics, let's start with something unusual: Public Key Encryption. This technique relies on certain really large numbers being computationally hard to factor to keep data secure.  
In this first exercise I'll factor some numbers that are easy to deal with; the goal is to create a Python function to find all prime factors, I'll do it by taking an integer value as input and the return or output will be a list of prime factors.

In this solution I decided to search for factors by dividing the given sequentially larger values \(starting from 2\) to see which one divide evenly into it, without leaving a remainder behind:

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--3fCWFcAG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/gguflc6uhxagim57hi3u.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--3fCWFcAG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/gguflc6uhxagim57hi3u.png)

As you can see I'm calling the function with the 500 number, so it will begin with 2 as the original divisor, then it'll go on keep dividing until the remainder is no longer an even number, in this case resulting in the result of 2, 2, 5, and finally 5:

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--RCk0QtXb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/hj2b5jw0i74ef35vb7se.PNG)](https://res.cloudinary.com/practicaldev/image/fetch/s--RCk0QtXb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/hj2b5jw0i74ef35vb7se.PNG)

2\) Identifying Palindromes.

This a very usual programming and software engineering exercise, maybe you already did it on colleague, school or watching another tutorial, it's a very cool puzzle to solve because involves pattern recognition, logic and of course coding.

In case it's your first time dealing with palindromes, a palindrome is a word or text that reads exactly the same, either forwards or backwards.

Again, I'll write a function to detect palindromes, where my input will be the string I'm checking and the result or output is going to be a boolean value \(false/true\):

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--rphnyM23--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/n4ei7nrn43w256y9khhu.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--rphnyM23--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/n4ei7nrn43w256y9khhu.png)

Going line by line, first I'm importing the "re" library, which contains regular expressions to extract letters from an input string, then I'm defining a "palindrome" function that receives a "string" parameter.  
Then I use the lower operator in the input string to convert all of the letters to lowercase, then I pass the result to the regular expression "findall" function with a pattern that will search for combinations of one or more letters. Tat will produce a list with all of the matched sub-strings that I merged together into a single string using the "join" function.

Then I slice the entire string, with the stride set to negative one, meaning I'll get a copy of the original string in reverse order.

Finally, I'm comparing both strings and return it:

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--cy2hp3eC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/s3x9sf5iuxcidw18vcxs.PNG)](https://res.cloudinary.com/practicaldev/image/fetch/s--cy2hp3eC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/s3x9sf5iuxcidw18vcxs.PNG)

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--17F9_bAz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/x5j64hmaku5ypesczr6r.PNG)](https://res.cloudinary.com/practicaldev/image/fetch/s--17F9_bAz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/x5j64hmaku5ypesczr6r.PNG)

3\) Sort a string.

Another common task in programming is sorting things.

The goal is to create a Python function that sorts the words within a given string.

The input will be a list of words separated by spaces, and the result or output will be the same string of words sorted alphabetically:

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--zVK1VTlN--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/z9omnkkrd1p8f00cwuk4.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--zVK1VTlN--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/z9omnkkrd1p8f00cwuk4.png)

My "sorted" function starts with the "split" method, which breaks apart the input string at each of the spaces and gives me a list of the individual word.

Then, to ignore the capitalization \(if there is any\) in the loop I convert each word within the list into lower case, to later on sort the entire list:

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--z9FKfN4L--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/j0kxw95kagrhie8l6w5y.PNG)](https://res.cloudinary.com/practicaldev/image/fetch/s--z9FKfN4L--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/j0kxw95kagrhie8l6w5y.PNG)

4\) The waiting game.

For this exercise I'll write a Python function, which is when invoked it'll print a message to wait a random amount of time.

The user press enters, then the timer starts. The user's goal is to wait the specified number of seconds in the message, and then press enter again.

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s---TjnJiEv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/r5tn2pfns2gzwv864vpu.png)](https://res.cloudinary.com/practicaldev/image/fetch/s---TjnJiEv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/r5tn2pfns2gzwv864vpu.png)

For this exercise I used to modules, "time" module to measure the amount of time,  
and the "random" module to generate a random number of seconds.

The input function prompts the user to press enter to begin and then blocks the  
execution until the user hits enter again.

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--L8hbntYT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/yqkq6s70sacxwnv4fpgi.PNG)](https://res.cloudinary.com/practicaldev/image/fetch/s--L8hbntYT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/yqkq6s70sacxwnv4fpgi.PNG)

5\) Generate a new password.

For this final example, I'll implement a function based on the "Diceware" method, which is a method for creating passphrases and passwords using the numbers of an ordinary dice as hardware random number generator. It involves a list of over 7000 different words.

Instead of rolling a physical dice, I'll write a Python function that simulates this behavior.

The input will be a number of words in a passphrase and the output or result will be a string of random words, separated by spaces.

For this one, I could've used the "random" module, but instead I went for the "secret" module, since the random module is not recommended when dealing with cryptographic procedures:

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--6tfjaRvc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/cnrvpdjez317i5v5lh2u.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--6tfjaRvc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/cnrvpdjez317i5v5lh2u.png)

My function begins by getting the number of words, then opening the "diceware.wordlist.asc" file with a context manager and then uses "readlines" function to get a list with each of the lines within the file.

The top of the file diceware that I used has two extra lines before the word list actually begins, and at the bottom there are also several extra lines for a PGP signature:

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--2qFdTdRG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/km8x5n9agn37w99u41e6.PNG)](https://res.cloudinary.com/practicaldev/image/fetch/s--2qFdTdRG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/km8x5n9agn37w99u41e6.PNG)

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--kj4w26ts--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/pwrz9ae5omrkl3ay52j5.PNG)](https://res.cloudinary.com/practicaldev/image/fetch/s--kj4w26ts--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/pwrz9ae5omrkl3ay52j5.PNG)

So I indexed out the 7K \(7776\) lines from the middle of the file that I actually care about. Remembering that each of these lines contain both a five-digit number and the corresponding word, I used the split method to break them apart, and then build the list containing just the words.

Then I used the "secrets.choice" function within another list comprehension to build a list with the desired number of random words.

And finally, I used the join method to combine the random words into a single string with spaces between them:

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--hZBb-kUj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/5diuv6ikyernk1nnewe5.PNG)](https://res.cloudinary.com/practicaldev/image/fetch/s--hZBb-kUj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/5diuv6ikyernk1nnewe5.PNG)
