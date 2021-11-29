def even_odd_count(filename):
    import os

    fp = os.path.join(os.getcwd(), filename)

    with open(fp, "r") as data:
        stack = []
        for line in data:
            #  Push each int to stack
            stack.extend([int(num) for num in line.split()])

        even_count = 0
        odd_count = 0
        for num in stack:
            #  If the last bit is 1
            #  increment odd_count
            if num & 1:
                odd_count += 1
            else:
                even_count += 1

        #  Returns a tuple (index 0 -> event, index 1 -> odd)
        return even_count, odd_count


fn = "numbers.txt"
print("Even numbers in the file list:", even_odd_count(fn)[0])
print("Odd numbers in the file list:", even_odd_count(fn)[1])
