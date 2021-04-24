formation_num = 40 # defining no of signs, we are using it on on multiple places
print('*' * formation_num) # for formation

title = 'Python Marksheet'
print(f'\t{title}')
print('-' * formation_num) # for formation

# student info
name = input('\t Name: ')
roll_no = int(input('\t Roll No: ')) 

# total marks per subject, assigned multiple variables in one line
mathematics_marks, physics_marks, chemistry_marks, islamiat_marks, urdu_marks = 100, 100, 100, 100, 75

# input
mathematics = int(input(f'\t Mathematics marks out of {mathematics_marks}: '))
chemistry = int(input(f'\t Chemistry marks out of {chemistry_marks}: '))
physics = int(input(f'\t Physics marks out of {physics_marks}: '))
urdu = int(input(f'\t Urdu marks out of {urdu_marks}: '))
islamiat = int(input(f'\t Islamiat marks out of {islamiat_marks}: '))

# calculating total marks, obtained marks and percentage
total_marks = mathematics_marks + physics_marks + chemistry_marks + islamiat_marks + urdu_marks
obtained_marks = mathematics + chemistry + physics + urdu + islamiat
percentage = round(obtained_marks / total_marks * 100, 2) # round to two decimal point

# defining variables for grades
grade_A = 'Grade: Grade A'
grade_B = 'Grade: Grade B'
grade_C = 'Grade: Grade C'
grade_D = 'Grade: Grade D'
grade_F = 'Grade: Grade F (failed)'

# output
print('≈' * formation_num) # for formation

print(f'   Name: {name}   Roll No: {roll_no }')
print(f'   Total Marks: {total_marks}   Obtained Marks: {obtained_marks}')
print(f'   Percentage: {percentage}%')

# grading
if percentage >= 90:
   print(f'   {grade_A}')
elif percentage >= 80:
   print(f'   {grade_B}')
elif percentage >= 70:
   print(f'   {grade_C}')
elif percentage >= 60:
   print(f'   {grade_C}')
elif percentage < 60:
   print(f'   {grade_D}')

print('*' * formation_num) # for formation