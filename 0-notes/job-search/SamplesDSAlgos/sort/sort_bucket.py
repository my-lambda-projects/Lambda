'''
How do we sort the numbers efficiently?

    A simple way is to apply a comparison based sorting algorithm. 
    The lower bound for comparison-based sorting algorithm (merge, heap, quick,
        etc.) is Ω(n Log n), can't do better than n log n.

Count sort can't be used as we use keys as index in count sort. 
Here keys are floating point numbers. 
'''
# BUCKET SORT

    # mainly useful when input is uniformly distributed over a range.
    # buckets created to put elements into
        # number of elements = number of buckets
    # apply insertion sort to each bucket
    # concatenate buckets to get sorted array

# time complexity:  Best O(n+k)   |   Avg O(n+k)   |   Worst O(n^2)
# space complexity:  O(n)


def insertion_sort(bucket):
    bucket_length = len(bucket)
    for bucket_index in range(1, bucket_length):
        # get current item in bucket
        current_item = bucket[bucket_index]
        # get previous bucket index
        previous_bucket_index = bucket_index - 1
        # while previous bucket index is at least 0 AND
            # value of previous bucket item > current bucket item
        while previous_bucket_index >= 0 and bucket[previous_bucket_index] > current_item:
            current_bucket_index = previous_bucket_index + 1
            # set item at current bucket index as value of previous bucket item
            bucket[current_bucket_index] = bucket[previous_bucket_index]
            # subtract one from previous bucket index
            previous_bucket_index -= 1
        current_bucket_index = previous_bucket_index + 1
        # set item at current bucket index as current item
        bucket[current_bucket_index] = current_item
    # return sorted bucket
    return bucket

def bucket_sort(original_array):
    bucket_holder = []
    length = len(original_array)
    slot_num = length

    # create empty buckets
    for bucket in range(slot_num):
        bucket_holder.append([])

    # put array elements in different buckets
    for item in original_array:
        single_bucket_index = int(slot_num * item)
        bucket_holder[single_bucket_index].append(item)

    # sort individual buckets
    for i in range(slot_num):
        bucket_holder[i] = insertion_sort(bucket_holder[i])

    # concatenate the result
    original_array_index = 0
    for bucket in range(slot_num):
        bucket_length = len(bucket_holder[bucket])
        for single_bucket_index in range(bucket_length):
            current_bucket_item = bucket_holder[bucket][single_bucket_index]
            original_array[original_array_index] = current_bucket_item
            original_array_index += 1
    return original_array

x = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]
print("Original Array is " + str(x)) 
print("Sorted Array is   " + str(bucket_sort(x)))

# contributed by Oneil Hsiao
