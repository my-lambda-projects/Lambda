def calculateSubstringsLengthK(s, k):
    """
    Return substrings of size k in s
    """
    substrings, index = [], 0
    while index + k <= len(s):
        substrings.append(s[index : index + k])
        index += k
    return substrings


def messageFromBinaryCode(code):
    """
    Return encrypted message from binary code
    """
    substrings, encrypted_message = calculateSubstringsLengthK(code, 8), ""
    for substring in substrings:
        ascii_code = int(substring, 2)
        encrypted_message += chr(ascii_code)
    return encrypted_message
