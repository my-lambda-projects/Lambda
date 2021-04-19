
# Install mmh3 and bitarray 3rd party module first 
# pip install mmh3 
# pip install bitarray 

import math 
import mmh3 
from bitarray import bitarray 

# BLOOM FILTER
    # designed to tell you quickly & efficiently if item is in set
    # trade-off is it can't tell you definitely if item is in set
        # can only tell you definitely not
    # has false-positive rate, but not false-negatives
    # useful for filtering articles NOT to show in recommendations
    # more items = higher false-positive rate, which you can mitigate
        # by having larger array
        # trade-off = larger memory footprint
    
    # m & n = length of two strings
# time complexity:     Avg
    # Access:          ---
    # Search:          O(1) 
    # Insertion:       O(1) 
    # Deletion:        ---   

# space complexity:  almost always less than hash (O(n))

# class for Bloom filter, using murmur3 hash function 
class BloomFilter(object):
    def __init__(self, items_count, fp_probability):
        
        # items_count, int:  Number of items expected to be stored in bloom filter 
        # fp_probability, float:  False Positive probability in decimal 
        
        # False positive probability in decimal
        self.fp_probability = fp_probability

        # Size of bit array to use
        self.size = self.get_size(items_count, fp_probability)

        # number of hash functions to use
        self.hash_count = self.get_hash_count(self.size, items_count)

        # Bit array of given size
        self.bit_array = bitarray(self.size)

        # initialize all bits as 0
        self.bit_array.setall(0)

    # add an item to filter 
    def add(self, item):

        digests = []
        for i in range(self.hash_count):

            # create digest for given item.
            # i work as seed to mmh3.hash() function
            # With different seed, digest created is different
            digest = mmh3.hash(item, i) % self.size
            digests.append(digest)

            # set the bit True in bit_array
            self.bit_array[digest] = True

    # Check for existence of an item in filter
    def check(self, item):

        for i in range(self.hash_count):
            digest = mmh3.hash(item, i) % self.size
            if self.bit_array[digest] == False:

                # if any of bit array = false, then it's not present in filter
                return False
                
        # else there is probability that it exist
        return True

    # Return the size of bit array (m) used:  m = -(n * lg(p)) / (lg(2)^2) 
    # n, int:  number of items expected to be stored in filter 
    # p, float:  false positive probability in decimal 
    @classmethod
    def get_size(self, n, p):
        m = -(n * math.log(p))/(math.log(2)**2)
        return int(m)

    # Return the hash function(k) to be used:  k = (m/n) * lg(2) 
    # m, int:  size of bit array 
    # n, int:  number of items expected to be stored in filter 
    @classmethod
    def get_hash_count(self, m, n):
        k = (m/n) * math.log(2)
        return int(k)
