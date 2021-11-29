class Department:
    def __init__(self, name, products=[]):
        # this is a string
        self.name = name
        # this takes in a list of products (has_a) / (has_many)
        self.products = products

    def __str__(self):
        output = f"  {self.name}\n"
        if len(self.products) < 1:
            output = f"No products found in {self.name}"

        for product in self.products:
            output += f"\t{product}\n"

        return output
