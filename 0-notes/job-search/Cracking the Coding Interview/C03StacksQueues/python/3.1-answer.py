#  3.1 Three in One

# Describe how you could use a single array to implement three stacks.

class Stacks:
    def __init__(self):
        self.array = [None, None, None]
        self.current = [0, 1, 2]
    
    def push(self, item, stack_number):
        if stack_number not in self.current:
            return "Try a different stack number, 0 through 2."
        else:
            current_stack = self.current[stack_number]
            while length <= current_stack:
                length = len(self.array)
                current_stack = self.current[stack_number]
                self.array += [None] * length
                self.array[current_stack] = item
                self.current[stack_number] += 3
    
    def pop(self, stack_number):
        if stack_number not in self.current:
            return "Try a different stack number, 0 through 2."
        current_stack = self.current[stack_number]
        if current_stack > 3:
            current_stack -= 3
        current_stack = self.current[stack_number]
        self.array[current_stack] = None
        print(current_stack)
        return current_stack