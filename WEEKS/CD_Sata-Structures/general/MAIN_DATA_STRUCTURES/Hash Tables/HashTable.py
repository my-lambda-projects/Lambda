"""Write a HashTable class that stores strings
in a hash table, where keys are calculated
using the first two letters of the string."""

class HashTable(object):
    def __init__(self):
        self.table = [None]*10000

    def store(self, string):
        """Input a string that's stored in
        the table."""
        index = self.calculate_hash_value(string)
        if(self.lookup(string)==-1):
            self.table[index] = [string]
        else:
            self.table[index].append(string)
        pass

    def lookup(self, string):
        """Return the hash value if the
        string is already in the table.
        Return -1 otherwise."""
        index = self.calculate_hash_value(string)
        if(self.table[index]!=None):
            return index
        else:
            return -1

    def calculate_hash_value(self, string):
        """Helper function to calulate a
        hash value from a string."""
        hash_val = ord(string[0])*100+ord(string[1])
        return hash_val

# Setup
hash_table = HashTable()

# Test calculate_hash_value
# Should be 8568
print hash_table.calculate_hash_value('UDACITY')

# Test lookup edge case
# Should be -1
print hash_table.lookup('UDACITY')

# Test store
hash_table.store('UDACITY')
# Should be 8568
print hash_table.lookup('UDACITY')

# Test store edge case
hash_table.store('UDACIOUS')
# Should be 8568
print hash_table.lookup('UDACIOUS')

#print(hash_table.table)
