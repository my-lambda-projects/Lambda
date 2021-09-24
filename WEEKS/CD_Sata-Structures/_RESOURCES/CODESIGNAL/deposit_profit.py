def depositProfit(deposit, rate, threshold):
    years = 0
    while deposit < threshold:
        deposit += deposit * (rate / 100)
        years += 1
    return years
