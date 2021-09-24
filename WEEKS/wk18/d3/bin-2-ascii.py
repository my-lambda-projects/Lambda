def csBinaryToASCII(binary):
    string_blocks = (binary[i : i + 8] for i in range(0, len(binary), 8))
    string = "".join(chr(int(char, 2)) for char in string_blocks)
    return string


print(csBinaryToASCII("011011000110000101101101011000100110010001100001"))
