# cc71 meanMedianMode https://repl.it/student/submissions/1871422
"""
Write a function that, given a list of numbers, calculates the
mean, median, and mode of those numbers. Return a dictionary with
properties for the mean, median and mode.

For example:
mmm_dict = meanMedianMode([1,2,3,4,5,6,7,8,9,10,10])
print(mmm_dict) should print:
{'mean': 5.909090909090909, 'median': 6, 'mode': 10}
"""


def meanMedianMode(nums):
    # MEAN average total all nums, divide total by number of numbers
    total = 0
    for num in nums:
        total += num
    mean = total / len(nums)

    # MEDIAN: https://www.mathsisfun.com/definitions/median.html
    # sort the numbers, if there are two middle numbers, return the average
    median = None
    sortedNums = sorted(nums, key=int)
    middle = len(nums) / 2
    if len(sortedNums) % 2 == 0:
        median = (sortedNums[int(middle - 1)] + sortedNums[int(middle)]) / 2
    else:
        median = sortedNums[int(middle)]

    # MODE https://en.wikipedia.org/wiki/Mode_(statistics)
    mapping = {}
    count = 0
    mode = max(set(nums), key=nums.count)

    # DICT
    MMM = {}
    MMM["mean"] = mean
    MMM["median"] = median
    MMM["mode"] = mode
    return MMM


# TEST SUITE
mmm_dict = meanMedianMode([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10])
print(mmm_dict)  # ~~~> {'mean': 5.909090909090909, 'median': 6, 'mode': 10}
mmm_dict2 = meanMedianMode([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
print(mmm_dict2)
mmm_dict3 = meanMedianMode([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10])
print(mmm_dict3)
mmm_dict4 = meanMedianMode(
    [
        951,
        402,
        984,
        651,
        360,
        69,
        408,
        319,
        601,
        485,
        980,
        507,
        725,
        547,
        544,
        615,
        83,
        165,
        141,
        501,
        263,
        617,
        865,
        575,
        219,
        390,
        984,
        592,
        236,
        105,
        942,
        941,
        386,
        462,
        47,
        418,
        907,
        344,
        236,
        375,
        823,
        566,
        597,
        978,
        328,
        615,
        953,
        345,
        399,
        162,
        758,
        219,
        918,
        237,
        412,
        566,
        826,
        248,
        866,
        950,
        626,
        949,
        687,
        217,
        815,
        67,
        104,
        58,
        512,
        24,
        892,
        894,
        767,
        553,
        81,
        379,
        843,
        831,
        445,
        742,
        717,
        958,
        609,
        842,
        451,
        688,
        753,
        854,
        685,
        93,
        857,
        440,
        380,
        126,
        721,
        328,
        753,
        470,
        743,
        527,
    ]
)
print(mmm_dict4)
mmm_dict5 = meanMedianMode(
    [
        24,
        47,
        58,
        67,
        69,
        81,
        83,
        93,
        104,
        105,
        126,
        141,
        162,
        165,
        217,
        219,
        219,
        236,
        236,
        237,
        248,
        263,
        319,
        328,
        328,
        344,
        345,
        360,
        375,
        379,
        380,
        386,
        390,
        399,
        402,
        408,
        412,
        418,
        440,
        445,
        451,
        462,
        470,
        485,
        501,
        507,
        512,
        527,
        544,
        547,
        553,
        566,
        566,
        575,
        592,
        597,
        601,
        609,
        615,
        615,
        617,
        626,
        651,
        685,
        687,
        688,
        717,
        721,
        725,
        742,
        743,
        753,
        753,
        758,
        767,
        815,
        823,
        826,
        831,
        842,
        843,
        854,
        857,
        865,
        866,
        892,
        894,
        907,
        918,
        941,
        942,
        949,
        950,
        951,
        953,
        958,
        978,
        980,
        984,
        984,
    ]
)
print(mmm_dict5)
