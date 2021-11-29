def top_k_frequent(words, k):

    d = dict()

    for i in words:

        if i not in d:
            d[i] = 1

        else:
            temp = d[i]
            temp += 1
            d[i] = temp

    if len(d) < k:
        return []

    occu = dict()

    for num, freq in d.items():

        if freq not in occu:
            occu[freq] = [num]

        else:
            temp = occu[freq]
            temp.append(num)
            occu[freq] = temp

    k = len(occu) - k

    for num, a in occu.items():
        if k == 0:
            return a
        k -= 1


if __name__ == "__main__":
    words = ["the", "sky", "is", "cloudy", "the", "the", "the", "cloudy", "is", "is"]
k = 3
print(top_k_frequent(words, k))
