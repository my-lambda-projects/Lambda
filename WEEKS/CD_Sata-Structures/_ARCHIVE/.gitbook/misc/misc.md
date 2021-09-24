# Misc

Links:

{% embed url="https://gist.github.com/bgoonz/9fb85e86115881a212a293c9829aade2" %}

## Read From File ![](https://www.practicepython.org/assets/img/chili-liz-20x20.png)

### Exercise 22 \(and [Solution](https://www.practicepython.org/solution/2014/12/14/22-read-from-file-solutions.html)\) <a id="exercise-22-and-solution"></a>

Given a `.txt` file that has a list of a bunch of names, count how many of each name there are in the file, and print out the results to the screen. I have a `.txt` file for you, if you want to [use it](http://www.practicepython.org/assets/nameslist.txt)!

Extra:

- Instead of using the `.txt` file from above \(or instead of, if you want the challenge\), take [this `.txt` file](http://www.practicepython.org/assets/Training_01.txt), and count how many of each “category” of each image there are. This text file is actually a list of files corresponding to the [SUN database](http://sundatabase.mit.edu/) scene recognition database, and lists the file directory hierarchy for the images. Once you take a look at the first line or two of the file, it will be clear which part represents the scene category. To do this, you’re going to have to remember a bit about string parsing in Python 3. I talked a little bit about it [in this post](https://www.practicepython.org/exercise/2014/03/12/06-string-lists.html).

### Discussion <a id="discussion"></a>

Topics:

1. Reading a file
2. Dictionaries

#### Reading a File <a id="reading-a-file"></a>

Reading a file is very analogous to writing a file, as [I discussed before in Exercise 21](https://www.practicepython.org/exercise/2014/11/30/21-write-to-a-file.html). But, the best source is always the [official Python 3.3 documentation](https://docs.python.org/3.3/tutorial/inputoutput.html#reading-and-writing-files).

Simply, reading to a file takes two steps:

1. Opening the file for reading
2. Read!

Opening a file for reading is the same as opening for writing, just using a different flag:

```text
  with open('file_to_read.txt', 'r') as open_file:
    all_text = open_file.read()
```

Note how the `'r'` flag stands for “read”. The code sample from above reads the entire `open_file` all at once into the `all_text` variable. But, this means that we now have a long string in `all_text` that can then be manipulated in Python using any string methods you want.

Another way of reading data from the file is line by line:

```text
  with open('file_to_read.txt', 'r') as open_file:
  	line = open_file.readline()
  	while line:
    	print(line)
    	line = open_file.readline()
```

Instead of `print(line)`, you can imagine doing anything you want to the line of text… If you save it to a variable, you have a string that you can then use something like `.strip()` or `.split()` with.

#### Dictionaries <a id="dictionaries"></a>

Dictionaries are Python’s way of associating two pieces of data together. The [official documentation](https://docs.python.org/3.3/tutorial/datastructures.html#dictionaries) says it all.

```text
  student_scores = {'Adama': 100, 'Starbuck': 75, 'Apollo': 80, 'Athena': 85, 'Agathon': 90}
```

The strings \(or whatever happens to the left of the `:` sign\), are called `keys`. When I want to access the `values` \(the things to the right of the `:` sign\), I need to ask the dictionary for the value associated with the key:

```text
  adama_score = student_scores['Adama']
```

You can then modify the score and save it back to the dictionary:

```text
  adama_score = student_scores['Adama']
  adama_score += 100	% adama_score is now 200. This doesn't change the dictionary value
  student_scores['Adama'] = adama_score		% the score in the dictionary is now updated
```

I can’t ask the dictionary for the key associated with a value, but I can get a list of all the keys, and the same for all the values:

```text
  all_scores = student_scores.keys()
  all_names = student_scores.values()
```

I can use the `in` keyword \(just like in lists\), do `dictionary comprehensions` like list comprehensions \(these are cool, take a look at the [official bit about these](https://docs.python.org/3.3/tutorial/datastructures.html#dictionaries)\), and iterate over the elements in the dictionary \(the syntax is just a little bit different\).

```text
  for pair in student_scores.items():
  	print(pair)
```

And this prints out pairs of keys and values that look like: `(Adama, 100)`, etc.

Because dictionaries are not ordered, looping through them does not guarantee the key / value pairs coming out in a particular order. So be careful.
