from queue import Queue


f = open("words.txt", "r")
words = f.read().split("\n")
f.close()


word_set = set()
for word in words:
    word_set.add(word.lower())

letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

# get neighbors
def get_neighbors(word):
    neighbors = []
    # turn our word in to a letters list
    letters_list = list(word)

    # for each letters
    for i in range(len(letters_list)):  # O(n)
        # swap each letter
        for letter in letters:  # O(1)
            temp_word = list(letters_list)
            temp_word[i] = letter
            w = "".join(temp_word)
            if w != word and w in word_set:
                neighbors.append(w)
    return neighbors


# BFS with path (Search)
def find_ladders(begin_word, end_word):
    q = Queue()
    visited = set()
    # begin_word = begin_word.lower()
    q.enqueue([begin_word])
    while q.size() > 0:
        path = q.dequeue()
        v = path[-1]

        if v not in visited:
            visited.add(v)
            if v == end_word:
                return path

            for neighbor in get_neighbors(v):
                path_copy = list(path)
                path_copy.append(neighbor)
                q.enqueue(path_copy)


print(find_ladders("sAil", "boat"))  # ['sail', 'bail', 'boil', 'boll', 'bolt', 'boat']
print(find_ladders("hit", "cog"))  # ['hit', 'hot', 'cot', 'cog']
print(find_ladders("hungry", "happy"))  # None
print(find_ladders("abel", "ewes"))  # ['abel', 'axel', 'axes', 'exes', 'ewes']
