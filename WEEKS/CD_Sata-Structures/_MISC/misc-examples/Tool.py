from Product import Product


class Tool(Product):
    def __init__(self, name, price, category):
        super().__init__(name, price)
        self.category = category

    def __str__(self):
        return f"{super().__str__()} is a {self.category}"
