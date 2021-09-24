def zigzags(input):
    input = iter(input)
    stack = None
    try:
        stack = [next(input)]
        while True:
            if len(stack) < 2:
                stack.append(next(input))
            else:
                stack = stack[-2:]
            a, b = stack
            if a == b:
                yield (a,)
                stack = [b]
                continue
            zig = a > b
            while True:
                prev = stack[-1]
                this = next(input)
                if prev == this or zig == (prev > this):
                    break
                stack.append(this)
                zig = not zig
            yield tuple(stack)
            stack.append(this)
    except StopIteration:
        pass
    if stack:
        yield tuple(stack)


def zigzag(input):
    item = max(zigzags(input), key=len)
    print len(item), item
