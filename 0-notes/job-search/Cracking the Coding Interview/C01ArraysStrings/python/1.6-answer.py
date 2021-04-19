# String Compression

# Implement a method to perform basic string compression using the counts of repeated characters.  
# For example, the string aabcccccaaa would become a2b1c5a3.  
# If the compressed string would not become smaller than the original string, your method should 
    # return the original string.  
# You can assume the string has only uppercase and lowercase letters, a-z.

def string_compression(string):
    print('-------------------------')
    substrings = []
    length = len(string)
    compressed = ""
    substring = ""
    count_array =[]
    count = 0
    last_letter = ""
    for x in range(0, length-1):
        if string[x] == last_letter:
            continue
        count += 1
        substring = string[x]
        for y in range(x+1, length):
            if string[y] == string[x]:
                last_letter = string[y]
                count += 1
                substring = substring + string[y]
            else:
                break
        x += count
        # print(str(count))
        substrings.append(substring)
        count_array.append(count)
        substring = ""
        count = 0
    print(str(substrings))
    print(str(count_array))
    print('-------------------------')
    for z in range(0, len(substrings)):
        # print(substrings[z][0])
        compressed = compressed + substrings[z][0] + str(count_array[z])
    if len(compressed) < length:
        print(compressed)
        return compressed
    else: 
        print(string)
        return string 

string_compression("aabcccccaaa")
