def decodeString(s):

    return s[s.find("[") + 1 : s.find("]")]


def main():
    s = "z1[y]zzz2[abc]"
    # zyzzzabcabc
    print(decodeString(s))


if __name__ == "__main__":
    main()
