# Processing Lists
# - any, all
# - filter
# - map
# - zip
# - custom sort

print("all() - any item that is false")
titles1 = ["Mr", "Mrs", "Ms"]
titles2 = ["Mr", "Mrs", "Ms", ""]
titles3 = []
print(all(titles1), titles1)
print(all(titles2), titles2)
print(all(titles3), titles3)

print("any() - looking for any item to be true")
feedback1 = ["", "", "", ""]
feedback2 = ["So much fun!", "", "", ""]
feedback3 = []
print(any(feedback1), feedback1)
print(any(feedback2), feedback2)
print(any(feedback3), feedback3)
