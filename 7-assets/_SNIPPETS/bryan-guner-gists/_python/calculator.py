formation_num = 32 # defining no of signs, we are using it on on multiple places
print('*' * formation_num) # for formation

title = '   A simple python calculator'
print(title)
print('-' * formation_num) # for formation

num1 = float(input('   Type first number: '))
num2 = float(input('   Type second number: '))
operator = input('   Type operator: ')

addition = num1 + num2
subtraction = num1 - num2
multiplication = num1 * num2
division = num1 / num2

if operator == '+':
   print(f'   Result: {num1} + {num2} = {addition}')
elif operator == '-':
   print(f'   Result: {num1} - {num2} = {subtraction}')
elif operator == '*':
   print(f'   Result: {num1} * {num2} = {multiplication}')
elif operator == '/':
   print(f'   Result: {num1} / {num2} = {division}')
else :
   print('   Sorry! unrecognizable operator')

print('*' * formation_num) # for formation