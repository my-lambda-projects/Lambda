from collections import defaultdict
import time


def crosswordFormation(words):
    possible_crosswords = 0

    # check case where all the words are the same or have one letter repeated

    # setup a map charting the word to each letter to a list of the indices of the letters
    word_map = defaultdict(lambda: defaultdict(list))
    for word in words:
        for i in range(len(word)):
            word_map[word][word[i]].append(i)

    seen = set()

    # first, use nested loops to get all combinations of the words (4! = 24)
    for word in words:
        print(words)
        curr_set = set(words[::])
        curr_set.discard(word)
        print(curr_set)
        for left_down in curr_set:
            two_words_set = set(curr_set.copy())
            two_words_set.discard(left_down)
            for bottom_word in two_words_set:
                right_down = set(two_words_set.copy())
                right_down.discard(bottom_word)
                right_down = right_down.pop()

                # check that the word combination has not already been seen
                # as a rotation
                if not any(
                    [
                        isRotated(a, (word, left_down, bottom_word, right_down))
                        for a in seen
                    ]
                ):
                    seen.add((word, left_down, bottom_word, right_down))
                else:
                    continue
                # now need to look letter by letter
                # and match the letters in the words in each position
                for i in range(len(word)):
                    top_letter = word[i]
                    down_match_inds = word_map[left_down][top_letter]
                    for j in down_match_inds:
                        # special case where the middle rectangle area is zero
                        if j + 2 >= len(left_down):
                            continue
                        for k in range(j + 2, len(left_down)):
                            second_intersection_letter = left_down[k]
                            left_bottom_match_inds = word_map[bottom_word][
                                second_intersection_letter
                            ]
                            for l in left_bottom_match_inds:
                                # special case where middle rectangle area would be zero
                                if i + 2 >= len(word):
                                    continue
                                for m in range(i + 2, len(word)):
                                    second_top_letter = word[m]
                                    second_top_match_inds = [
                                        a
                                        for a in word_map[right_down][second_top_letter]
                                        if a + 2 <= len(right_down)
                                    ]
                                    for n in second_top_match_inds:
                                        for o in range(n + 2, len(right_down)):
                                            bottom_right_letter = right_down[o]
                                            second_bottom_letter_match_inds = [
                                                a
                                                for a in word_map[bottom_word][
                                                    bottom_right_letter
                                                ]
                                                if a >= l + 2
                                            ]
                                            for item in second_bottom_letter_match_inds:
                                                if o - n == k - j and m - i == item - l:
                                                    possible_crosswords += 1

    return possible_crosswords * 2


def isRotated(a, b):
    a = list(a)
    b = list(b)
    if a[0] == b[1] and a[1] == b[0] and a[2] == b[3] and a[3] == b[2]:
        return True

    return False


words = ["aaaaaaaaaaaaaa", "aaaaaaaaaaaaab", "aaaaaaaaaaaaca", "aaaaaaaaaaadaa"]
start = time.clock()
print(crosswordFormation(words))
print(time.clock() - start)
