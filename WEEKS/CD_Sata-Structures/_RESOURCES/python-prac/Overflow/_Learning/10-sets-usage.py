# Sets
# - declare
# - union, intersection, symmetric_difference, difference
# - Examples
# -- unique tags
# -- users taking two actions

purchasingEmails = ("bob@gmail.com", "sam@yahoo.com", "riley@rileymail.org")
helpEmails = ("jo@josbilling.com", "bob@gmail.com", "sam@yahoo.com")

print("Users making a purchase and also calling help desk")
print(set(purchasingEmails) & set(helpEmails))
