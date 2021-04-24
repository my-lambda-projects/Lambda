area = 250
type(area)


def calculateArea(width, height):
    return width * height

type(calculateArea)


rectangleArea = calculateArea(300, 200)
print(rectangleArea)
type(rectangleArea)



class Rectangle:
    pass



issubclass(Rectangle, object)



class Rectangle(object):
    pass



class Rectangle:
    def __init__(self, width, height):
        print("I'm initializing a new Rectangle instance.")
        self.width = width
        self.height = height




rectangle1 = Rectangle(293, 117)
rectangle2 = Rectangle(293, 137)



rectangleError = Rectangle()


class Rectangle:
    def __init__(self, width, height):
        print("I'm initializing a new Rectangle instance.")
        self.width = width
        self.height = height
	def __del__(self):
    	print('A Rectangle instance is being destroyed.')


rectangleToDestroy1 = Rectangle(293, 117)
rectangleToDestroy2 = Rectangle(293, 137)
rectangleToDestroy1 = None
rectangleToDestroy2 = None


rectangle3 = Rectangle(364, 257)
referenceToRectangle3 = rectangle3
rectangle3 = None



referenceToRectangle3 = None



class Rectangle:
    def __init__(self, width, height):
        print("I'm initializing a new Rectangle instance.")
        self.width = width
        self.height = height
	def __del__(self):
    	print('A Rectangle instance is being destroyed.')
	def calculate_area(self):
    	return self.width * self.height



rectangle4 = Rectangle(143, 187)
print(rectangle4.calculate_area())



def calculateArea(width, height):
    return Rectangle(width, height).calculate_area()

print(calculateArea(143, 187))





