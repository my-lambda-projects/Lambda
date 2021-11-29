# It's lunch time, and three friends are planning to go to a restaurant together. There are n restaurants available, so to make it easier to choose, they number the restaurants from 1 to n and each friend puts the restaurants in order from most preferable to least preferable.

You are given a two-dimensional array of integers preferences, where preferences[0] represents the preferences of the first friend, preferences[1] - of the second one and preferences[2] - of the third one. For example, if preferences[i] = [3, 1, 2], this means that the ith friend likes restaurant 3 the most, followed by restaurant 1, and they like restaurant 2 the least.

Your task is to help the friends to choose a restaurant, according to the following criteria: They'll agree on restaurant i if there are no other restaurants that two or more of the friends would prefer more than i.

If the friends can't agree on a restaurant, return -1.

Example

For

preferences = [[1, 2, 3, 4],                [3, 1, 4, 2],                [4, 2, 1, 3]]

the output should be preferredRestaurant(preferences) = 1. Restaurant 1 is friend 1's first choice; they wouldn't prefer any other restaurant. Friend 2 would only prefer restaurant 3 over restaurant 1. Friend 3 would prefer either restaurant 4 or 2 over restaurant 1.

Even though friends 2 and 3 have other preferences, there's no one other restaurant that they'd both prefer to go to. So the friends will choose restaurant 1.

For

preferences = [[1, 2, 3],                [2, 3, 1],                [3, 1, 2]]

the output should be preferredRestaurant(preferences) = -1. Restaurant 1 is more preferable by the first and the third friends than the restaurant 2. Restaurant 2 is more preferable by the first and the second friends than the restaurant 3. Restaurant 3 is more preferable by the second and the third friends than the restaurant 1.

None of the restaurants meet their criteria, so the friends can't agree on a restaurant. Input/Output

[execution time limit] 3 seconds (java)

[input] array.array.integer preferences

An array of 3 arrays of integers, representing the restaurant preferences of three friends. It is guaranteed that the preferences array for each friend is correct, i.e. it contains a permutation of numbers from 1 to n.

Guaranteed constraints: preferences.length = 3, 1 ≤ preferences[0].length ≤ 105, preferences[i].length = preferences[0].length.

[output] integer
