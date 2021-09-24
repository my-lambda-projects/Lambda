def firstNotRepeatingCharacter(s):
    character_count, character_index, non_repeat_index = {}, {}, {}

    # Iterate through string and count
    # character occurences and note
    # index of first repetition
    for i in range(len(s)):
        if s[i] not in character_count:
            character_count[s[i]] = 1
            character_index[s[i]] = i
        elif s[i] in character_count:
            if character_count[s[i]] < 2:
                character_count[s[i]] += 1
                character_index[s[i]] = i

    for char in character_count:
        if character_count[char] == 1:
            non_repeat_index[char] = character_index[char]

    if not non_repeat_index:
        return "_"
    else:
        minimal_index_key = min(non_repeat_index, key=non_repeat_index.get)
        return minimal_index_key
