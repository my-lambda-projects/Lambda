# Milk Bottles
# https://leetcode.com/discuss/interview-question/707939/Microsoft-or-Azure-or-Milk-Bottles

# If i can exchange 3 empty bottles for one full bottle, given that i have 18 full milk bottles 
    # initially, how many milk bottles can i drink?

# Generalize this for 'n' bottles

def bottles(n):
    bottles_to_drink = int((3*n-1)/2)
    return bottles_to_drink

print(bottles(18))