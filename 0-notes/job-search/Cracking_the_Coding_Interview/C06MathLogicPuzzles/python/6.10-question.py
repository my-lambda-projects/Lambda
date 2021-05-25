# 6.10 Poison

# You have 100 bottles of soda and exactly one is poisoned.
# You have 10 test strips which can be used to detect poison.
# A single drop of poison will turn the test strip positive permanently.
# You can put any number of drops on a test strip at once and you can reuse a 
    # test strip as many times as you'd like as long as the results are negative.
# However, you can only run tests once per day.
# It takes 7 days to return a result.
# How would you figure out the poisoned bottle in as few days as possible?

# FOLLOW UP:  Write code to simulate your approach.

# use binary search; drop half on one test strip and half again until you find it.
# first day = 50 negative (strip 1)
# second day = 25 negative (strip 2)
# third day = 12 negative (strip 3)
# fourth day = 6 negative (strip 4)
# fifth day = run rest of them on single strips
# if all negative then remaining untested bottle is poisoned one
# 12 days