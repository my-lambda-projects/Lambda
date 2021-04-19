# Day of Week That Is k Days Later

# Days of the week are represented as three-letter strings. 
    # "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
# Write a javaScript function solution that, given a string 
    # S representing the day of the week and an integer K 
    # (between 0 and 500), returns the day of the week that 
    # is K days later. 

# For example, given S = "Wed" and K = 2, the function 
    # should return "Fri".
# Given S = "Sat" and K = 23, the function should return 
    # "Mon".


## time complexity:  O(1)
## space complexity:  O(1)

def k_days_later(s, k):
    days_of_week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    remainder = k % 7
    s_index = days_of_week.index(s)
    move_forward = remainder + s_index
    if move_forward < 7:
        return days_of_week[move_forward]
    else:
        correct_day_index = move_forward - 7
        return days_of_week[correct_day_index]

# 0
print(k_days_later("Wed", 2))
print("----")
# 2
print(k_days_later("Sat", 23))
print("----")
print(k_days_later("Sat", 300))