import time


def sum_to_n(n):
    # Record start time
    start = time.time()

    # Execute code
    total = 0
    for num in range(n + 1):
        total += num

    # Record end time
    end = time.time()

    # Return total and time
    return total, end - start


def arithmetic_sum(n):
    start = time.time()
    total = n * (n + 1) // 2
    end = time.time()

    # Return total and time
    return total, end - start


output_template = "{}({}) = {:10d} ({:8.7f} seconds)"

# for i in range(1, 5):
#     print(output_template.format('sum_to_n', i * 1000000, *sum_to_n(i * 1000000)))
# print('-'*80)
for i in range(1, 5):
    print(
        output_template.format(
            "arithmetic_sum", i * 1000000, *arithmetic_sum(i * 1000000)
        )
    )
