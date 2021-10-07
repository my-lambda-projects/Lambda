# Zip Function

Output:

```text
The zipped result is : {('Shambhavi', 3, 60), ('Astha', 2, 70),
('Manjeet', 4, 40), ('Nikhil', 1, 50)}
```

**How to unzip?**  
Unzipping means converting the zipped values back to the individual self as they were. This is done with the help of “**\***” operator.

```python
# Python code to demonstrate the working of
# unzip

# initializing lists

name = [ "Manjeet", "Nikhil", "Shambhavi", "Astha" ]
roll_no = [ 4, 1, 3, 2 ]
marks = [ 40, 50, 60, 70 ]

# using zip() to map values
mapped = zip(name, roll_no, marks)

# converting values to print as list
mapped = list(mapped)

# printing resultant values
print ("The zipped result is : ",end="")
print (mapped)

print("\n")

# unzipping values
namz, roll_noz, marksz = zip(*mapped)

print ("The unzipped result: \n",end="")

# printing initial lists
print ("The name list is : ",end="")
print (namz)

print ("The roll_no list is : ",end="")
print (roll_noz)

print ("The marks list is : ",end="")
print (marksz)
```
