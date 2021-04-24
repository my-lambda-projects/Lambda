# if a number is prime or not

def prime_num():
   value = int(input('please type a number: '))
   for num in range(2,value):
      if value % num == 0:
         return f'{value} is not a prime number'
   return f'{value} is a prime number'


print(prime_num())