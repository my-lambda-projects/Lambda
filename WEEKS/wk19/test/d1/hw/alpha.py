def csAlphanumericRestriction(input_str): #c is every char in
input string
is_numeric = False
is_alpha = False
for c in input_str:
% if c.isnumeric():
is_numeric = True
elif c.isalpha():
is_alpha = True
else:
‘ return False
return (is_numeric and not is_alpha) or (is_alpha and not
is_numeric)
I
