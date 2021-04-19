# 3.3 Stack of Plates

# Imagine a literal stack of plates.
# If the stack gets too high, it might topple.
# Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold.
# Implement a data structure SetOfStacks that mimics this.
# SetOfStacks should be composed of several stacks and should create a new stack once
    # the previous one exceeds capacity.
# SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack.
    # That is, pop() should return the same values as it would if there were just a single stack.


class Stacks:
    def __init__(self):
        self.SetofStacks = []
        self.threshold = 10

    def pop(self):
        # last
        length_main = len(self.SetofStacks)
        length_sub = len(self.SetofStacks[length_main])
        deleted = self.SetofStacks[length_main][length_sub]
        del self.SetofStacks[length_main][length_sub]
        return deleted

    def push(self, item):
        # first
        # get count of items in each stack
        lengths = []
        stack_length = len(self.SetofStacks)
        current_threshold = self.threshold
        for x in range(0, stack_length):
            lengths.append(len(self.SetofStacks[x]))
        for x in range(0, stack_length):
            length = len(self.SetofStacks[x])
            # if first stack is at threshold then
            if length >= current_threshold:
                # remove last item of last stack
                deleted = self.pop()
                for y in range(length, 0, -1):
                    current_length = len(self.SetofStacks[y])
                    item_to_move = self.SetofStacks[y][current_length]
                    # move last item of previous stack to last stack
                    self.SetofStacks[y+1].insert(0, item_to_move)
                    # repeat until you get to first stack
                # then add item to top of first stack
                self.SetofStacks[0].insert(0, item)
            # else if first stack not at threshold then:
            else:
                # add item to top of first stack
                self.SetofStacks[0].insert(0, item)
        return self.SetofStacks
