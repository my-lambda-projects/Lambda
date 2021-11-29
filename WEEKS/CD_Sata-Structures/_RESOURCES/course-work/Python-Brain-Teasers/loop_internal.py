iterable = range(5)  # range is the iterable
iterator = iter(iterable)  # extract iterator from iterable
while True:
    try:
        n = next(iterator)
        # Code inside "for" loop
        print(n, end=" ")
        n = 5  # Will be overridden by line 5 in next iteration
    except StopIteration:  # iterator signaled it's exhausted
        break
print()  # Code after "for" loop
