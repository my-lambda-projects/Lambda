# def compute_score(score):
# score_clone = score[:]  # ["5","-2","4","C","D","9","+","+"]
# score_list = []
# item_score = 0
# # "D" for double data, "C" for invalid score, "+", sum of last 2 valid
# operations = ["C", "D", "+"]
# score_int = [int(a) for a in score if a != "C" and a != "D" and a != "+"]
# prev_round = 0
# for item in score:
#     if item in operations:
#         if item == "C":
#             # score for preceeding round is invalid
#             #item_score = -(int(score[score.index(item) - 1]))
#             score_clone = score_clone.remove(score[score.index(item) - 1])
#             # score_list.append(item_score)
#             prev_round = score.index(item)
#         if item == "D":
#             # twice the last round's point then add to preceeding rounds

#             item_score = score_int * 2 score.index(item)
#             score_list.append(item_score)
#         if item == "+":
#             # aggregate of valid points
#             item_score = sum(score_int)
#     if item not in operations:
#         total_score_list.append(item)
# total_score = sum(total_score_list)
# return total_score


def compute_baseball_score(scores):

    #  Cast each score to int
    scores_int = []
    for score in scores:
        try:
            scores_int.append(int(score))
        except ValueError:
            scores_int.append(score)

    stack = []

    for score in scores_int:
        if score == "C":
            #  invalid last round
            stack.pop()

        elif score == "D":
            #  twice the last round plus preceeding rounds
            last_round = stack[-1] * 2
            stack.append(last_round)

        elif score == "+":
            #  sum of last 2 valid rounds
            stack.append(stack[-1] + stack[-2])

        #  if an int, i.e. an input score
        else:
            stack.append(score)
    #  Final list of points
    print(stack)
    final_score = sum(stack)

    return final_score


score_list = ["5", "-2", "4", "C", "D", "9", "+", "+"]
print(compute_baseball_score(score_list))
