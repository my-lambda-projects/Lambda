from bigO import BigO
from bigO import algorithm


def csRemoveDuplicateWords(input_str):
    return " ".join(dict.fromkeys(input_str.split()))


print(
    csRemoveDuplicateWords(
        "alpha bravo bravo golf golf golf delta alpha bravo bravo golf golf golf delta"
    )
)
print(csRemoveDuplicateWords("my dog is my dog is super smart"))

print(csRemoveDuplicateWords("Your tests are broken broken broken broken broken"))


print(
    csRemoveDuplicateWords(
        "alpha bravo bravo golf golf golf delta alpha bravo bravo golf golf golf delta"
    )
)
print(csRemoveDuplicateWords("my dog is my dog is super smart"))
lib = BigO()
complexity = lib.test(csRemoveDuplicateWords, "random")
complexity = lib.test(csRemoveDuplicateWords, "sorted")
complexity = lib.test(csRemoveDuplicateWords, "reversed")
complexity = lib.test(csRemoveDuplicateWords, "partial")
complexity = lib.test(csRemoveDuplicateWords, "Ksorted")
