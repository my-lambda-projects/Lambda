def areSimilar(a, b):
    for i in range(len(a)):
        sorted_a, sorted_b = sorted(a), sorted(b)
        if sorted_a != sorted_b:
            return False

        inversions = 0
        for i in range(len(a)):
            if a[i] != b[i]:
                inversions += 1
        return inversions == 2 or inversions == 0
