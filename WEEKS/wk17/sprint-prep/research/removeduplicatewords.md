# How did they do all that in one line? A solution for the kata: Remove Duplicate Words

> I've been at it again: solving CodeWars kata then marveling at the one-line solutions voted best prac...

I've been at it again: solving CodeWars kata then marveling at the one-line solutions voted best practice by the CodeWars community.

The challenge is to take a string of words with words repeated, then return the words without repetition, leaving the words in order of their first appearance in the input string.

To emphasize how impressed I was to see it solved in one line, here's my solution (which by the way was the same as the solution with the second most votes for best practice).

    def remove_duplicate_words(s):
        """ removes duplicate words from a string

        s:   a string of words separated by spaces
        """
        s = s.split()
        unique = []
        for word in s:
            if word not in unique:
                unique.append(word)
        s = ' '.join(unique)


        return s

Enter fullscreen mode Exit fullscreen mode

And here's the one-liner:

    def remove_duplicate_words(s):
        return ' '.join(dict.fromkeys(s.split()))

Enter fullscreen mode Exit fullscreen mode

Note: I mean one line of function body.

That's pretty dense, so I'm going to break it down. I like to start from the inside.

    s.split()

Enter fullscreen mode Exit fullscreen mode

Note that s is the input string. This expression returns a list of the words in the string. By default the .split method splits the string at space characters and throws out the spaces.

On to the next step

    dict.fromkeys(s.split())

Enter fullscreen mode Exit fullscreen mode

This step is interesting. It creates a dictionary (more on why a dictionary later) with the keys for the dictionary supplied by the words in the list of words.

But there's something missing. Aren't dictionaries in Python supposed to have keys _and_ values? It turns out that when you use dict.fromkeys to form a dictionary with no values in the argument, it just enters None for each value.

To clarify this, here's what it looks like if you print this a dict formed in this manner from the input string s = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'. Here's the dictionary: {'alpha': None, 'beta': None, 'gamma': None, 'delta': None}

We're almost there.

    ' '.join(dict.fromkeys(s.split()))

Enter fullscreen mode Exit fullscreen mode

Note the syntax here. It's calling the method .join on a string with one space. Since the argument is a dictionary, this will output the a string with words taken from the keys, separated by spaces. (Note: I'm not sure why it ignores the values. I tested and it does this even if there is a value (like 4) for one of the keys).

All that's left is to return the value of this expression. Note that while it might seem more intuitive to do something like this:

    output = ' '.join(dict.fromkeys(s.split()))
    return output

Enter fullscreen mode Exit fullscreen mode

It's perfectly legal to do this in one line by putting the expression directly after return, as in the one line solution:

    return ' '.join(dict.fromkeys(s.split()))

Enter fullscreen mode Exit fullscreen mode

And there it is.

A further note: you may be wondering: why bother with a dict with empty keys? Why not just use a set. To understand this you need to understand two things. First: Although the description doesn't explicitly state this, the example makes it clear that the words in the output string need to be in the order of their first appearance in the input string. Second: sets are unordered but, as of Python 3.6 and continuing into Python 3.7, dictionaries are ordered according to insertion order.

So now it should be clear why a dictionary was the correct choice, even though set would seem the more obvious answer. (And, with a strict reading of the challenge description, you could argue that it would be a correct solution, but the automated testing functions on CodeWars would beg to disagree.)

So there you have it: One line to do what took me six. Although my function had more documentation, so I give myself points there.

By the way, the code and a copy of this description are on my repo [here](https://github.com/erik-kristofer-anderson/Codewars/tree/master/2019-08-21_remove_duplicate_words).

I'm looking forward to showing you the next one!

[Source](https://dev.to/ekand/how-did-they-do-all-that-in-one-line-a-solution-for-the-kata-remove-duplicate-words-28n1?signin=true)
