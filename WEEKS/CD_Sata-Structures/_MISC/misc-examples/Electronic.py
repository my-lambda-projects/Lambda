from Product import Product


class Electronic(Product):
    def __init__(self, name, price, power_rating):
        super().__init__(name, price)
        self.power_rating = power_rating

    def __str__(self):
        return f"{super().__str__()} is rated at {self.power_rating}"
