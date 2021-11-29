# lets write up a transposition table to encode and decode ROT 13 (Caesar's Cipher)
# This is a varient of ROT-13 but the same idea applies
# it uses a hash table to store the encode table

encode_table = {
    "A": "H",
    "B": "Z",
    "C": "Y",
    "D": "W",
    "E": "O",
    "F": "R",
    "G": "J",
    "H": "D",
    "I": "P",
    "J": "T",
    "K": "I",
    "L": "G",
    "M": "L",
    "N": "C",
    "O": "E",
    "P": "X",
    "Q": "K",
    "R": "U",
    "S": "N",
    "T": "F",
    "U": "A",
    "V": "M",
    "W": "B",
    "X": "Q",
    "Y": "V",
    "Z": "S",
    "a": "h",
    "b": "z",
    "c": "y",
    "d": "w",
    "e": "o",
    "f": "r",
    "g": "j",
    "h": "d",
    "i": "p",
    "j": "t",
    "k": "i",
    "l": "g",
    "m": "l",
    "n": "c",
    "o": "e",
    "p": "x",
    "q": "k",
    "r": "u",
    "s": "n",
    "t": "f",
    "u": "a",
    "v": "m",
    "w": "b",
    "x": "q",
    "y": "v",
    "z": "s",
    " ": " ",
}

# now lets plan what we need next

decode_table = {}

# iterate over the encode table reversing the key and value
for k, v in encode_table.items():
    decode_table[v] = k

# O(1) + O(m)


def encode(s):
    ret_val = ""

    for c in s:
        # if c.isspace():
        #     continue
        # c = c.upper()
        ret_val += encode_table[c]

    return ret_val


def decode(s):
    ret_val = ""

    for c in s:
        ret_val += decode_table[c]

    return ret_val


# DOGGEBEUGW
# HELLOWORLD

# Tests
if __name__ == "__main__":
    plaintext = "This is a better charset for the cipher"

    ciphertext = encode(plaintext)

    print(f"Ciphertext: {ciphertext}")

    plaintext2 = decode(ciphertext)

    print(f"Plaintext:  {plaintext2}")
