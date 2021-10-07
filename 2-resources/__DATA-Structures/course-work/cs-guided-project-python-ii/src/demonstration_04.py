"""
Challenge #4:

Create a function that changes specific words into emoticons. Given a sentence
as a string, replace the words `smile`, `grin`, `sad`, and `mad` with their
corresponding emoticons.

word -> emoticon
---
smile -> :D
grin -> :)
sad -> :(
mad	-> :P

Examples:
- emotify("Make me smile") ➞ "Make me :D"
- emotify("Make me grin") ➞ "Make me :)"
- emotify("Make me sad") ➞ "Make me :("

Notes:
- The sentence always starts with "Make me".
- Try to solve this without using conditional statements like if/else.
"""


def emotify(txt):
    # Your code here
    # ````another option```
    # new = txt.split(' ')
    # print(new)
    # ````````````
    new_list = list(txt)
    # print(new_list)
    sliced_list = new_list[8:]
    emotion = "".join(sliced_list)
    print(emotion)
    if emotion == "smile":
        return "Make me :D"
    elif emotion == "grin":
        return "Make me :)"
    else:
        return "Make me :("


print(emotify("Make me smile"))
print(emotify("Make me grin"))
print(emotify("Make me sad"))
