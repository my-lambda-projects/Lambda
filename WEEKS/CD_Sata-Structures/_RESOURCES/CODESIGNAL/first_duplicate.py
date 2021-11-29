def firstDuplicate(a):
    number_frequencies, number_indices, duplicate_index = {}, {}, {}

    # Iterate through list and increment frequency count
    # if number not in dict. Also, note the index asscoiated
    # with the value
    for i in range(len(a)):
        if a[i] not in number_frequencies:
            number_frequencies[a[i]] = 1
            number_indices[a[i]] = i
        elif a[i] in number_frequencies:
            if number_frequencies[a[i]] < 2:
                number_frequencies[a[i]] += 1
                number_indices[a[i]] = i

    for number in number_frequencies:
        if number_frequencies[number] == 2:
            duplicate_index[number] = number_indices[number]

    if not duplicate_index:
        return -1
    else:
        minimal_index_key = min(duplicate_index, key=duplicate_index.get)
        return minimal_index_key
