# Lists

List type is another sequence type defined by the list class of python. List allows you add, delete or process elements in very simple ways. List is very similar to arrays.

You can create list using the following syntax.

here each elements in the list is separated by comma and enclosed by a pair of square brackets \(`[]`\). Elements in the list can be of same type or different type. For e.g:

Other ways of creating list.

You can use index operator \(`[]`\) to access individual elements in the list. List index starts from `0`.

Slice operator \(`[start:end]`\) allows to fetch sublist from the list. It works similar to string.

Similar to string `start` index is optional, if omitted it will be `0`.

The `end` index is also optional, if omitted it will be set to the last index of the list.

**note:**

If `start >= end`, `list[start : end]` will return an empty list. If end specifies a position which is beyond the `end` of the list, Python will use the length of the list for `end` instead.

The `+` operator joins the two list.

The `*` operator replicates the elements in the list.

The `in` operator is used to determine whether the elements exists in the list. On success it returns `True` on failure it returns `False`.

Similarly `not in` is the opposite of `in` operator.

As already discussed list is a sequence and also iterable. Means you can use for loop to loop through all the elements of the list.

1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35

&gt;&gt;&gt; list1 \= \[2, 3, 4, 1, 32, 4\] &gt;&gt;&gt; list1.append\(19\) &gt;&gt;&gt; list1 \[2, 3, 4, 1, 32, 4, 19\] &gt;&gt;&gt; list1.count\(4\) \# Return the count for number 4 2 &gt;&gt;&gt; list2 \= \[99, 54\] &gt;&gt;&gt; list1.extend\(list2\) &gt;&gt;&gt; list1 \[2, 3, 4, 1, 32, 4, 19, 99, 54\] &gt;&gt;&gt; list1.index\(4\) \# Return the index of number 4 2 &gt;&gt;&gt; list1.insert\(1, 25\) \# Insert 25 at position index 1 &gt;&gt;&gt; list1 \[2, 25, 3, 4, 1, 32, 4, 19, 99, 54\] &gt;&gt;&gt; &gt;&gt;&gt; list1 \= \[2, 25, 3, 4, 1, 32, 4, 19, 99, 54\] &gt;&gt;&gt; list1.pop\(2\) 3 &gt;&gt;&gt; list1 \[2, 25, 4, 1, 32, 4, 19, 99, 54\] &gt;&gt;&gt; list1.pop\(\) 54 &gt;&gt;&gt; list1 \[2, 25, 4, 1, 32, 4, 19, 99\] &gt;&gt;&gt; list1.remove\(32\) \# Remove number 32 &gt;&gt;&gt; list1 \[2, 25, 4, 1, 4, 19, 99\] &gt;&gt;&gt; list1.reverse\(\) \# Reverse the list &gt;&gt;&gt; list1 \[99, 19, 4, 1, 4, 25, 2\] &gt;&gt;&gt; list1.sort\(\) \# Sort the list &gt;&gt;&gt; list1 \[1, 2, 4, 4, 19, 25, 99\] &gt;&gt;&gt;

List comprehension provides a concise way to create list. It consists of square brackets containing expression followed by for clause then zero or more for or if clauses.
