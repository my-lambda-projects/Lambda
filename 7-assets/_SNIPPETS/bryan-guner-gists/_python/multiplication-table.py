# take a number as an input from user and print a multiplication table of that number

def multiplication_table():
   value = int(input('please type a number: '))
   for num in range(1, 11):
      print(f'{value} * {num} = {value * num}' )


multiplication_table()