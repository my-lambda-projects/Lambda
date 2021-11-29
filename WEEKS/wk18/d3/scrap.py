def top_k_frequent(words, k):
    # Initializing a dictionary
    d = dict()

    # Iterating through the wordsay
    for i in words:

        # If the element is not in
        # the dictionary, adding it
        # with the frequency as 1
        if i not in d:
            d[i] = 1

        # If the element is already
        # present in the dictionary,
        # increment its frequency
        else:
            temp = d[i]
            temp += 1
            d[i] = temp

    # Now, the dictionary signifies
    # the number of unique elements.
    # If the count of this is
    # less than K, then we cant find
    # the elements whose occurrence is
    # K-th most occurring.
    if len(d) < K:
        return []

    # Initializing a new dictionary
    # to store the elements according
    # to their frequency
    occu = dict()

    # Iterating through the dictionary
    for num, freq in d.items():

        # If the element is not in
        # the dictionary, then store
        # the element in an wordsay
        # with key as the frequency
        if freq not in occu:
            occu[freq] = [num]

        # Else, add the element to
        # the wordsay of elements
        else:
            temp = occu[freq]
            temp.append(num)
            occu[freq] = temp

    # Since the dictionary is sorted
    # and not indexed, find (M - K)-th
    # element where M is the length
    # of the dictionary
    K = len(occu) - K

    # Since we for sure know that the
    # element exists, we iterate
    # through the dictionary and
    # return the element
    for num, a in occu.items():
        if K == 0:
            return a
        K -= 1


# Driver code
if __name__ == "__main__":
    words = ["the", "sky", "is", "cloudy", "the", "the", "the", "cloudy", "is", "is"]
K = 3
print(top_k_frequent(words, K))
