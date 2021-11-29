# Python: Find the second most repeated word in a given string - w3resource

> Python Exercises, Practice and Solution: Write a Python program to find the second most repeated word in a given string.

Last update on February 26 2020 08:09:13 (UTC/GMT +8 hours)

## Python String: Exercise-56 with Solution

Write a Python program to find the second most repeated word in a given string.

**Sample Solution**:-

**Python Code:**

    def word_count(str):
        freq = dict()


        for word in words:
            if word in freq:
                freq[word] += 1
            else:
                freq[word] = 1

        freq_x = sorted(freq.items(), key=lambda kv: kv[1])
        #print(freq_x)
        return freq_x[-2]

    print(word_count("Both of these issues are fixed by postponing the evaluation of annotations. Instead of compiling code which executes expressions in annotations at their definition time, the compiler stores the annotation in a string form equivalent to the AST of the expression in question. If needed, annotations can be resolved at runtime using typing.get_type_hints(). In the common case where this is not required, the annotations are cheaper to store (since short strings are interned by the interpreter) and make startup time faster."))

Sample Output:

('of', 4)

**Pictorial Presentation:**

![Python String: Find the second most repeated word in a given string.](https://www.w3resource.com/w3r_images/python-data-type-string-image-exercise-56.svg)

**Flowchart:**

![Flowchart: Find the second most repeated word in a given string.](https://www.w3resource.com/w3r_images/python-data-type-string-exercise-flowchart-56.png)

## Visualize Python code execution:

The following tool visualize what the computer is doing step-by-step as it executes the said program:

**Python Code Editor:**

**Have another way to solve this solution? Contribute your code (and comments) through Disqus.**

**Previous:** [Write a Python program to find the first repeated word in a given string.](https://www.w3resource.com/python-exercises/string/python-data-type-string-exercise-55.php)  
**Next:**[Write a Python program to remove spaces from a given string.](https://www.w3resource.com/python-exercises/string/python-data-type-string-exercise-57.php)

Based on 34 votes, average difficulty level of this exercise is Medium .

## Python: Tips of the Day

**Shorthand Conditional Assignment:**

//y = x if condition_met else another_x.

> > > some_condition = True
> > >
> > > # the expanded format
> > >
> > > if some_condition: ... x = 5 ... else: ... x = 3 print(f'x is {x}') x is 5
> > >
> > > # the shorthand way
> > >
> > > x = 5 if some_condition else 3 print(f'x is {x}') x is 5

[Source](https://www.w3resource.com/python-exercises/string/python-data-type-string-exercise-56.php)
