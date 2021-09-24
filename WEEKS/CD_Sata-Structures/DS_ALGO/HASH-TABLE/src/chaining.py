# 03 lets see how long the linked list chains get

import random


def longest_linked_list_chain(keys, buckets, loops=10, useSHA=False):
    """
    Rolls `keys` number of random keys into `buckets` buckets
    and counts the collisions.

    Run `loops` number of times.
    """
    # loop over the range of loops
    for _ in range(loops):
        # set key counts
        key_counts = {}
        # loop over the range of buckets
        for i in range(buckets):
            # set the key counts all to zero
            key_counts[i] = 0
        # loop over the range of keys
        for _ in range(keys):
            # generate a random key
            random_key = str(random.random())
            # hash the key based on number of buckets
            hash_index = hash(random_key) % buckets
            # increment key counts at hash index
            key_counts[hash_index] += 1
        # set a largest number count to zero
        largest_num = 0
        # loop over every key in key count
        for key in key_counts:
            # check if the number of collisions in the key count at key is greater than the largest number
            if key_counts[key] > largest_num:
                # set the largest number to the key count at key
                largest_num = key_counts[key]
        # print up the data
        print(
            f"Longest Linked List Chain for {keys} keys in {buckets} buckets (Load Factor: {keys / buckets:.2f}: {largest_num})"
        )


longest_linked_list_chain(4, 16, 5)
longest_linked_list_chain(16, 16, 5)
longest_linked_list_chain(32, 16, 5)
longest_linked_list_chain(1024, 128, 5)
