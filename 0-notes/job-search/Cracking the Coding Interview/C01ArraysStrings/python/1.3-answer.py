# URLify

# Write a method to replace all spaces in a string with '%20'.  You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string.

# If implementing in Java, please use a character array so that you can perform this operation in place.

def urlify(string):
    replaced = string.replace(" ", "%20")
    print(replaced)
    return replaced


urlify("Hello, World.")
urlify("Erica L. Ingram")
urlify("https://www.aquoco.co/well there")
urlify("Does this pass your own tests?")
