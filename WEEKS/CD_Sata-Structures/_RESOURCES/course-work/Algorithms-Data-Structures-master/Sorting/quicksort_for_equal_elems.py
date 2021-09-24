def quicksort_equal_elements(s):
    """Quicksort from finxter modified to add all elements equal to the pivot
    directly after the pivot, so that quicksort performs faster for cases
    where there are many identical elements in the array to be sorted (e.g.
    there are only 2 values for all elements, or 1 unique value in a large
    array, etc.)"""
    if len(s) < 2:
        return s
    else:
        # upgraded to work for sets with multiple identical numbers!
        return (
            quicksort_equal_elements([x for x in s[1:] if x < s[0]])
            + [s[0]]
            + [x for x in s[1:] if x == s[0]]
            + quicksort_equal_elements([x for x in s[1:] if x > s[0]])
        )
