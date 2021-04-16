# https://www.tutorialspoint.com/implement-trie-prefix-tree-in-python

# TRIE
    # tree optimized for searching by prefix
    # auto-complete really useful ffor this
    # starts wth root node that doesn't represent anything
    # has bunch of child nodes representing 1 letter
        # each of those has child nodes representing next letter
    # can add weights to certain edges/children so they are suggested first
    # space is its own node
    
# time complexity:     Avg        |   Worst
    # Access:       O(n)          |   O(n)
    # Search:       O(key_length) |   O(n)
    # Insertion:    O(key_length) |   O(n)
    # Deletion:     O(key_length) |   O(n)

# space complexity:  O(ALPHABET_SIZE * key_length * N)

class Trie(object):
    def __init__(self):
        self.child = {}

    def insert(self, word):
        # get current child
        current_child = self.child
        # loop through each letter in word
        for letter in word:
            # if current letter doesn't match current child
            if letter not in current_child:
                # set current letter's dictionary entry in 
                    # current child as empty dictionary
                current_child[letter] = {}
            # set current child as current letter's dictionary 
                # entry in current child
            current_child = current_child[letter]
        # 
        current_child['#'] = 1

    def search(self, word):
        # get current child
        current_child = self.child
        # loop through each letter in word
        for letter in word:
            # if current letter doesn't match current child
            if letter not in current_child:
                return False
            # set current child as current letter's dictionary 
                # entry in current child
            current_child = current_child[letter]
        return '#' in current_child

    def starts_with(self, prefix):
        # get current child
        current_child = self.child
        # loop through each letter in prefix
        for letter in prefix:
            # if current letter doesn't match current child
            if letter not in current_child:
                # not found
                return False
            # set current child as current letter's dictionary 
                # entry in current child
            current_child = current_child[letter]
        # found
        return True

ob1 = Trie()
ob1.insert("apple")
print(ob1.search("apple"))
print(ob1.search("app"))
print(ob1.starts_with("app"))
ob1.insert("app")
print(ob1.search("app"))
