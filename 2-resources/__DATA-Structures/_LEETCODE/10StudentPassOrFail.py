"""

#10. Write a Python program to accept student_no, student_name,
marks in three subjects. Find total marks and average and print
them. Check whether he is passed or not and display along with
grade.
Grade-average >= 80 - Distinction
average >= 60 - First Class
average >= 50 - Second Class
average >= 35 - Third Class
else
- Fail

"""
student_no = int(input("Enter the Student Number: "))
student_name = input("Enter the name of the student: ")
marks_1 = int(input("Enter the marks in subject 1: "))
marks_2 = int(input("Enter the marks in subject 2: "))
marks_3 = int(input("Enter the marks in subject 3: "))

total_marks = marks_1 + marks_2 + marks_3

print(
    "Total number of marks secured by the student {} is {}".format(
        student_name, total_marks
    )
)

average_marks = total_marks / 3

print("The average of the marks secured by the student {}".format(average_marks))

if average_marks >= 80:
    print("Distinction")
elif average_marks >= 60:
    print("First Class")
elif average_marks >= 50:
    print("Second Class")
elif average_marks >= 35:
    print("Thrid Class")
else:
    print("Fail")
