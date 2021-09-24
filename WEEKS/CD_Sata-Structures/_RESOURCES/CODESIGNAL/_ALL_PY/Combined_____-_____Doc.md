

"""Several people are standing in a row and need to be divided into two teams. The first person goes into team 1,
the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. Return an array of two integers,
where the first element is the total weight of team 1, and the second element is the total weight
of team 2 after the division is complete.

Example:
- For a = [50, 60, 60, 45, 70], the output should be alternatingSums(a) = [180, 105]."""


def alternatingSums(a):
    # Step 1: We begin by creating an array, called "alt_sum", that includes only two elements of value 0.
    alt_sum = [0, 0]
    # Step 2: Moreover, we define the variable "length", which is the numerical value of the length of input array a.
    length = len(a)
    # Step 3: Starting from the first element of input array "a" and working all the way through its length,
    # we check whether the element's index is even or odd. If the element i is even, we add its value to the
    # first element of the "alt_sum" array, whilst if it is odd we add it to the second element.
    for i in range(0, length):
        if i % 2 == 0:
            alt_sum[0] += a[i]
        else:
            alt_sum[1] += a[i]
    # Step 4: To conclude, we return the alt_sum array.
    return alt_sum

def isSuspiciousRespondent(ans1, ans2, ans3):
    return ans1 == ans2 == ans3

def differentSymbolsNaive(s):
    return len(set(s))

def findTheRemainder(a, b):
    return a % b

def validTime(time):
    time_split = time.split(":")
    if 00 <= int(time_split[0]) <= 23 and 00 <= int(time_split[1]) <= 59:
        return True
    return False

n, = eval(dir()[0])
r = ""

while n:
    n -= 1
    r = chr(n % 26 + 65) + r
    n //= 26
return r

# def returnTwelve(n):
#     return n if n > 12 else 12

# n, = eval(dir()[0])
# return n if n > 12 else 12

returnTwelve = lambda n: 12 if n < 12 else n

addTwoDigits = lambda n: n % 10 + n // 10
# return sum(int(i) for i in str(n))

x, y = eval(dir()[0])
return str(int(x) * int(y))

# multiplyTwoStrings

def caseUnification(s):
    u = sum(1 for x in s if x.isupper())
    if u > (len(s) / 2):
        return s.upper()
    else:
        return s.lower()

# def sumUpDigits(s):
#    return sum(int(i) for i in s if i.isdigit())

eval(lambda s: sum(int(i) for i in s if i.isdigit()))

def sumUpNumbers(inputString):
    def getNumbers(str):
        nums = re.findall(r"[0-9]+", str)
        return nums

    numbers = getNumbers(inputString)
    total = 0
    for i in numbers:
        total += int(i)
    return total

def absoluteValuesSumMinimization(a):
    sums = []
    for i in range(len(a)):
        sum = 0
        for j in range(len(a)):
            sum += abs(a[i] - a[j])
        sums.append(sum)
    return a[sums.index(min(sums))]

# def cubeVolume(n):
#     return n ** 3

cubeVolume = lambda n: n ** 3

def magicalWell(a, b, n):
    s, m = 0, 0
    while m < n:
        s += a * b
        a += 1
        b += 1
        m += 1
    return s

def electionsWinners(votes, k):
    max_vote = max(votes)
    len_vote = len(votes)
    if k == 0 and votes.count(max_vote) == 1:
        return 1
    return len([i for i in range(len_vote) if votes[i] + k > max_vote])

def longestWord(text):
    word_split = re.findall(r"[\w']+", text)
    longest_word = ""
    for word in word_split:
        if len(word) > len(longest_word) and word.isalpha():
            longest_word = word
    return longest_word



def absolute_value_sum(mylist, x):
    running_sum = 0
    for number in mylist:
        running_sum += abs(number - x)
    return running_sum


def absoluteValuesSumMinimization(a):
    mydict = {}
    for i in range(len(a)):
        mydict[a[i]] = absolute_value_sum(a, a[i])
    return min(mydict, key=mydict.get)

def add(param1, param2):
    return param1 + param2

def add(param1, param2):
    return param1 + param2
addTwoDigits = lambda n: n % 10 + n // 10
# return sum(int(i) for i in str(n))
def addBorder(picture):
    picture_with_border = []
    for i in range(len(picture)):
        # Add the main border to the picture
        if i == 0:
            picture_with_border.append("*" * (len(picture[i]) + 2))

        picture_with_border.append("*" + "".join(picture[i]) + "*")

        # Add the main border to the picture
        if i == len(picture) - 1:
            picture_with_border.append("*" * (len(picture[i]) + 2))
    return picture_with_border

def addTwoDigits(n):
	"""
	Return sum of the two digits in n
	"""
    digits = str(n)
    return sum([int(digit) for digit in digits])


# https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m
# Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.


def adjacent_elements_product(inputArray: list = None) -> int:
    if inputArray is None:
        return 0
    if isinstance(inputArray, list) and 2 <= len(inputArray) <= 10:
        adjacent = inputArray[0] * inputArray[1]
        for i in range(len(inputArray) - 1):
            if -1000 <= inputArray[i] <= 1000 and -1000 <= inputArray[i + 1] <= 1000:
                tmp = inputArray[i] * inputArray[i + 1]
                if tmp > adjacent:
                    adjacent = tmp
            else:
                return 0
        return adjacent
    return 0

def allLongestStrings(inputArray):
    # sortedList = sorted(inputArray, key=len, reverse=True)
    max_string_length, longest_strings = max(inputArray, key=len), []
    for i in range(len(inputArray)):
        if len(inputArray[i]) == len(max_string_length):
            longest_strings.append(inputArray[i])
    return longest_strings

def is_increasing_sequence(sequence):
    for i in range(len(sequence) - 1):
        if sequence[i] >= sequence[i + 1]:
            return i
    return -1


def almostIncreasingSequence(sequence):
    j = is_increasing_sequence(sequence)
    if j == -1:
        return True
    if is_increasing_sequence(sequence[j - 1 : j] + sequence[j + 1 :]) == -1:
        return True  # Deleting earlier element makes it increasing
    if is_increasing_sequence(sequence[j : j + 1] + sequence[j + 2 :]) == -1:
        return True  # Deleting later element makes it increasing
    return False

def alphabeticShift(inputString):
    outputString = ""
    for i in range(len(inputString)):
        outputString += chr((ord(inputString[i]) + 1 - 97) % 26 + 97)
    return outputString

def alternatingSums(a):
    team1, team2 = [], []
    for i in range(len(a)):
        if i % 2 == 0:
            team1.append(a[i])
        else:
            team2.append(a[i])
    return [sum(team1), sum(team2)]

def areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight):
    myStrongestArm = max(yourLeft, yourRight)
    myWeakestArm = min(yourLeft, yourRight)
    friendStrongestArm = max(friendsLeft, friendsRight)
    friendWeakestArm = min(friendsLeft, friendsRight)
    if myStrongestArm == friendStrongestArm and myWeakestArm == friendWeakestArm:
        return True
    else:
        return False

def areSimilar(a, b):
    for i in range(len(a)):
        sorted_a, sorted_b = sorted(a), sorted(b)
        if sorted_a != sorted_b:
            return False

        inversions = 0
        for i in range(len(a)):
            if a[i] != b[i]:
                inversions += 1
        return inversions == 2 or inversions == 0

def arithmeticExpression(a, b, c):
    """
    Consider an arithmetic expression of the form a#b=c. 
    Check whether it is possible to replace # with one of 
    the four signs: +, -, * or / to obtain a correct
    """
    return (
        True if (a + b == c) or (a - b == c) or (a * b == c) or (a / b == c) else False
    )

# Nique toi Sylvere

L, = eval(dir()[0])
s = 0


while len(L) > 1:
    L = numpy.add(L[:-1:2], L[1::2]) if s % 2 == 0 else numpy.multiply(L[:-1:2], L[1::2])
    s += 1

return L[0]

L, = eval(dir()[0])
s = 0


while len(L) > 1:
    L = numpy.add(L[:-1:2], L[1::2]) if s % 2 == 0 else numpy.multiply(L[:-1:2], L[1::2])
    s += 1

return L[0]

def arrayChange(inputArray):
    moves = 0
    current = inputArray[0]
    for number in inputArray[1:]:
        if number <= current:
            moves += current - number + 1
            current += 1
        else:
            current = number
    return moves

def maxSum(arr, n, k):

    # k must be greater
    if n < k:

        print("Invalid")
        return -1

    # Compute sum of first
    # window of size k
    res = 0
    for i in range(k):
        res += arr[i]

    # Compute sums of remaining windows by
    # removing first element of previous
    # window and adding last element of
    # current window.
    curr_sum = res
    for i in range(k, n):

        curr_sum += arr[i] - arr[i - k]
        res = max(res, curr_sum)

    return res


def arrayMaxConsecutiveSum(inputArray, k):
    """Find maximal possible sum of k consecutive elements in list of integers
    
    Args:
        intputArray(int): List of integers
        k(int): Number of consecutive elements
    
    Return
        Maximum sum of k consecutive elements
    
    Raises:
    """
    return maxSum(inputArray, len(inputArray), k)

def arrayMaximalAdjacentDifference(inputArray):
    max_diff = -15
    for i in range(len(inputArray) - 1):
        max_diff = max(abs(inputArray[i] - inputArray[i + 1]), max_diff)
    return max_diff

def arrayReplace(inputArray, elemToReplace, substitutionElem):
    for i in range(len(inputArray)):
        if inputArray[i] == elemToReplace:
            inputArray[i] = substitutionElem
    return inputArray

def avoidObstacles(inputArray):
    sortedlist = sorted(inputArray)  # Sort list in ascending order
    jump_dist = 1  # Set jump distance to 1 initially
    obstacle_hit = True  # Flag to check if current jump distance hit an obstacle

    while obstacle_hit:
        obstacle_hit = False  # Set flag to false as we check next jump distance
        jump_dist += (
            1
        )  # Increment jump distance as we check if next value hits no obstacles
        # Check if jumping with current length hits an obstacle
        for i in range(len(sortedlist)):
            if sortedlist[i] % jump_dist == 0:
                obstacle_hit = True
                break
    return jump_dist

def bankRequests(accounts, requests):
    request = []
    for elements in requests:
        request.append(elements.split(" "))
    errores = 0
    for elements in request:

        if(bank(accounts, elements) == [-2]):
            errores += 1
        else:
            accounts = bank(accounts, elements)

    if(errores > 0):
        return [errores*-1]
    else:
        return accounts 


def bank(accounts, request):
    type = request[0]
    print(accounts)
    if type == "withdraw":
        index = (int(request[1])-1)
        if index < len(accounts):
            print(index)
            value = int(request[2])
            if accounts[index] >= value:
                accounts[index] -= value
            else:
                return [-2]
        else:
            return [-2]
    elif type == "transfer":
        index = int(request[1])-1  # i
        index2 = int(request[2])-1  # j
        if index < len(accounts) and index2 < len(accounts):
            print(index, index2)
            value = int(request[3])
            if accounts[index] >= value:
                accounts[index] -= value
                accounts[index2] += value
            else:
                return [-2]
        else:
            return [-2]
    elif type == "deposit":
        index = int(request[1])-1
        if index < len(accounts):
            print(index)
            value = int(request[2])
            accounts[index] += value
        else:
            return [-2]

    return accounts


def main():
    accounts = [10, 100, 20, 50, 30]
    requests = ["withdraw  10", "transfer 5 1 20",
                "deposit 5 20", "transfer 3 4 15"]
    print(bankRequests(accounts, requests))


if __name__ == '__main__':
    main()

import traceback


def bankRequests(accounts, requests):
    """Shubidubi"""
    request = []

    for elements in requests:  # Se le da un split a todos los elementos de la matriz con parámetro de espacio
        request.append(elements.split(" "))

    errores = 0

    for elements in request:        try:
            accounts = bank(accounts, elements)

        except Exception as err:
            errores += 1

    if(errores > 0):
        return [errores*-1]
    else:
        return accounts


def bank(accounts, request):
    type = request[0]
    print(accounts)
    if type == "withdraw":
        index = (int(request[1])-1)
        value = int(request[2])
        if accounts[index] >= value:
            accounts[index] -= value
        else:
            return "Error"

    elif type == "transfer":
        index = int(request[1])-1  # i
        index2 = int(request[2])-1  # j
        if index < len(accounts) and index2 < len(accounts):
            print(index, index2)
            value = int(request[3])
            if accounts[index] >= value:
                accounts[index] -= value
                accounts[index2] += value
            else:
                return [-2]
        else:
            return [-2]
    elif type == "deposit":
        index = int(request[1])-1
        if index < len(accounts):
            print(index)
            value = int(request[2])
            accounts[index] += value
        else:
            return [-2]

    return accounts


def main():
    accounts = [10, 100, 20, 50, 30]
    requests = ["withdraw  10", "transfer 5 1 20",
                "deposit 5 20", "transfer 3 4 15"]
    accounts
    print(bankRequests(accounts, requests))


if __name__ == '__main__':
    main()



def bankRequests(accounts, requests):
    map(lambda x: x.split(), requests)
    print(requests)


def main():
    acco < unts = [10, 100, 20, 50, 30]
    requests = ["withdraw 2 10", "transfer 5 1 20",
                "deposit 5 20", "transfer 3 4 15"]
    bankRequests(accounts, requests)


if __name__ == '__main__':
    main()


def hayDuplicados(lista):
    lista.sort()
    for i in range(lista):
        if i+1 <= len(lista):
            if lista[i] == lista[i+1]:
                return True

    return False


def borrarDuplicados(lista):
    lista = [set(lista)]

def bishopAndPawn(bishop, pawn):
    x = "abcdefgh"
    return abs(int(x.index(bishop[0])) - int(x.index(pawn[0]))) == abs(
        int(bishop[1]) - int(pawn[1])
    )

def square_matrix(square):
    # Calculate sum of all the pixels in 3 * 3 matrix
    tot_sum = 0
    for i in range(3):
        for j in range(3):
            tot_sum += square[i][j]

    return tot_sum // 9  # return the average of the sum of pixels


def boxBlur(image):
    square = []  # This will store the 3 * 3 matrix
    # which will be used to find its blurred pixel

    square_row = []  # This will store one row of a 3 * 3 matrix and
    # will be appended in square

    blur_row = []  # Here we will store the resulting blurred
    # pixels possible in one row
    # and will append this in the blur_img

    blur_img = []  # This is the resulting blurred image

    # number of rows in the given image
    n_rows = len(image)

    # number of columns in the given image
    n_col = len(image[0])

    # rp is row pointer and cp is column pointer
    rp, cp = 0, 0

    # This while loop will be used to
    # calculate all the blurred pixel in the first row
    while rp <= n_rows - 3:
        while cp <= n_col - 3:

            for i in range(rp, rp + 3):

                for j in range(cp, cp + 3):

                    # append all the pixels in a row of 3 * 3 matrix
                    square_row.append(image[i][j])

                # append the row in the square i.e. 3 * 3 matrix
                square.append(square_row)
                square_row = []

            # calculate the blurred pixel for given 3 * 3 matrix
            # i.e. square and append it in blur_row
            blur_row.append(square_matrix(square))
            square = []

            # increase the column pointer
            cp = cp + 1

        # append the blur_row in blur_image
        blur_img.append(blur_row)
        blur_row = []
        rp = rp + 1  # increase row pointer
        cp = 0  # start column pointer from 0 again

    # Return the resulting pixel matrix
    return blur_img

def isPalindrome(st):
    for i in range(len(st) // 2):
        if st[i] != st[len(st) - 1 - i]:
            return False
    return True


def buildPalindrome(st):
    for i in range(len(st)):
        substring = st[i : len(st)]
        if isPalindrome(substring):
            non_palindrome_part = st[0:i]
            return st + non_palindrome_part[::-1]
    return "String not found"

# -*- coding: utf-8 -*-


def pagarEstacionamiento(apagar):
    total = apagar
    print("Total a pagar:" + str(apagar))
    while apagar > 0:
        moneda = int(
            input("Ingresa la cantidad de la moneda que quieres ingresar: "))
        if moneda == 1 or moneda == 2 or moneda == 5 or moneda == 10 or moneda == 50:
            apagar -= moneda
        else:
            print(
                "Moneda con denominación inválidad, solo puedes meter monedas de 1 , 2, 5, 10, 50")

    cambio = apagar*-1
    print("Pagaste: "+str(total+cambio))
    print("Haz terminado de pagar, tu cambio es: " + str(cambio))


def main():
    pagarEstacionamiento(72)


if __name__ == '__main__':
    main()

def candies(n, m):
    return (m // n) * n

def caseUnification(s):
    u = (sum(1 for x in s if x.isupper()))
    if u > (len(s)/2):
        return s.upper()
    else:
        return s.lower()
# https://app.codesignal.com/arcade/intro/level-1/egbueTZRRL5Mm4TXN
# Given a year, return the century it is in.
# The first century spans from the year 1 up to and including the year 100,
# the second - from the year 101 up to and including the year 200, etc.


def century_from_year(year: int = 0) -> int:
    if isinstance(year, int) and 1 <= year <= 2005:
        century = year // 100
        if year % 100 == 0:
            return century
        else:
            return century + 1
    return 0

checkPalindrome = lambda x: x == x[::-1]
def checkPalindrome(inputString):
    for i in range(len(inputString) // 2):
        if inputString[i] != inputString[len(inputString) - 1 - i]:
            return False
    return True

def chessBoardCellColor(cell1, cell2):
    mydict = {"A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8}
    if (mydict[cell1[0]] + int(cell1[1])) % 2 == (mydict[cell2[0]] + int(cell2[1])) % 2:
        return True
    else:
        return False

"""Chess Knight
"""


def chessKnight(cell):
    valid_count = 0

    # All possible moves for knight
    dirs = [(-2, -1), (-2, 1), (-1, -2), (-1, 2), (1, -2), (1, 2), (2, -1), (2, 1)]

    # For each move of knight, check if it's valid
    for x, y in dirs:
        if (97 <= ord(cell[0]) + x <= 104) and (1 <= int(cell[1]) + y <= 8):
            valid_count += 1
    return valid_count

def circleOfNumbers(n, firstNumber):
	"""
	Return number that is radially opposite firstNumber
	in circle from 1 to n
	"""
    return (firstNumber + (n / 2)) % n
n, = eval(dir()[0])
r = ""

while n:
    n -= 1
    r = chr(n % 26 + 65) + r
    n //= 26
return r

def commonCharacterCount(s1, s2):
    # To store the frequencies of characters
    # of string s1 and s2
    freq1 = [0] * 26
    freq2 = [0] * 26

    # To store the count of valid pairs
    count = 0

    # Update the frequencies of
    # the characters of string s1
    for i in range(len(s1)):
        freq1[ord(s1[i]) - ord("a")] += 1

    # Update the frequencies of
    # the characters of string s2
    for i in range(len(s2)):
        freq2[ord(s2[i]) - ord("a")] += 1

    # Find the count of valid pairs
    for i in range(26):
        count += min(freq1[i], freq2[i])

    return count

a, b = eval(dir()[0])
return a + b

# 28
# return sum(eval(dir()[0]), [])

# 36
# return [x for l in eval(dir()[0]) for x in l]

def constructArray(size):
    lista1 = list(range(1,size+1))
    lista2 = list(range(size,0,-1))
    print(lista1)
    print(lista2)
    resultado = []
    ultimo = True
    for i in range(len(lista1)):
        if(lista1[i] < lista2[i]):
            resultado.append(lista1[i])
            resultado.append(lista2[i])
        else:
            if(len(lista1) % 2 != 0):
                if(ultimo):
                    resultado.append(lista1[i])
                    ultimo = False
    print(resultado)




def main():
    constructArray(7)

if __name__ == '__main__':
    main()  
def constructSubmatrix(matrix, rowsToDelete, columnsToDelete):
    for rows in rowsToDelete:
        del matrix[rows]
    print(matrix)

    resultado = []

    for lista in matrix:  # SACA LAS LISTAS DE LA MATRIZ
        nuevalista = []
        for i in range(len(lista)):  # RECORRE LA LISTA CON I
            if i not in columnsToDelete:
                nuevalista.append(lista[i])

        resultado.append(nuevalista)
        nuevalista = []

    return resultado


def main():
    matriz = [[1, 0, 0, 2],
              [0, 5, 0, 1],
              [0, 0, 3, 5]]
    print(constructSubmatrix(matriz, [1], [0, 2]))


if __name__ == '__main__':
    main()

# gives True if two duplicate numbers in the nums array are within k distance
# (inclusive) of one another, measuring by absolute difference in index

# did relatively well on this one, made a greater-than/less-than flip error on
# the conditional for the true case and needed to rewrite my code to remove
# keys from the dictionary without editing it while looping over it, but
# otherwise went well!

# problem considered medium difficulty, from Palantir


def containsCloseNums(nums, k):
    num_dict = {}
    # setup keys for each number seen, then list their indices
    for i, item in enumerate(nums):
        if item in num_dict:
            num_dict[item].append(i)
        else:
            num_dict[item] = [i]

    # remove all nums that are not repeated
    # first make a set of keys to remove to prevent editing the dictionary size while iterating over it
    removals = set()
    for key in num_dict.keys():
        if len(num_dict[key]) < 2:
            removals.add(key)

    # now remove each key from the num_dict that has fewer than two values
    for key in removals:
        num_dict.pop(key)

    # now check remaining numbers to see if they fall within the desired range
    for key in num_dict.keys():
        last_ind = num_dict[key][0]
        for next_ind in num_dict[key][1:]:
            if next_ind - last_ind <= k:
                return True
            last_ind = next_ind

    return False

# def countSumOfTwoRepresentations3(n, l, r):
#     if r < n // 2 or l > n // 2:
#         return 0
#     return n // 2 - max(l, n-r) + 1
# 87

# countSumOfTwoRepresentations3 = lambda n, l, r: max(n // 2 - max(l, n-r) + 1, 0)
# 66

n, l, r = eval(dir()[0])
return max(n // 2 - max(l, n-r) + 1, 0)
# 50
return sum([1 if i in "aeiou" else 2 for i in eval(dir()[0])[0]])

from collections import defaultdict
import time


def crosswordFormation(words):
    possible_crosswords = 0

    # check case where all the words are the same or have one letter repeated

    # setup a map charting the word to each letter to a list of the indices of the letters
    word_map = defaultdict(lambda: defaultdict(list))
    for word in words:
        for i in range(len(word)):
            word_map[word][word[i]].append(i)

    seen = set()

    # first, use nested loops to get all combinations of the words (4! = 24)
    for word in words:
        print(words)
        curr_set = set(words[::])
        curr_set.discard(word)
        print(curr_set)
        for left_down in curr_set:
            two_words_set = set(curr_set.copy())
            two_words_set.discard(left_down)
            for bottom_word in two_words_set:
                right_down = set(two_words_set.copy())
                right_down.discard(bottom_word)
                right_down = right_down.pop()

                # check that the word combination has not already been seen
                # as a rotation
                if not any(
                    [
                        isRotated(a, (word, left_down, bottom_word, right_down))
                        for a in seen
                    ]
                ):
                    seen.add((word, left_down, bottom_word, right_down))
                else:
                    continue
                # now need to look letter by letter
                # and match the letters in the words in each position
                for i in range(len(word)):
                    top_letter = word[i]
                    down_match_inds = word_map[left_down][top_letter]
                    for j in down_match_inds:
                        # special case where the middle rectangle area is zero
                        if j + 2 >= len(left_down):
                            continue
                        for k in range(j + 2, len(left_down)):
                            second_intersection_letter = left_down[k]
                            left_bottom_match_inds = word_map[bottom_word][
                                second_intersection_letter
                            ]
                            for l in left_bottom_match_inds:
                                # special case where middle rectangle area would be zero
                                if i + 2 >= len(word):
                                    continue
                                for m in range(i + 2, len(word)):
                                    second_top_letter = word[m]
                                    second_top_match_inds = [
                                        a
                                        for a in word_map[right_down][second_top_letter]
                                        if a + 2 <= len(right_down)
                                    ]
                                    for n in second_top_match_inds:
                                        for o in range(n + 2, len(right_down)):
                                            bottom_right_letter = right_down[o]
                                            second_bottom_letter_match_inds = [
                                                a
                                                for a in word_map[bottom_word][
                                                    bottom_right_letter
                                                ]
                                                if a >= l + 2
                                            ]
                                            for item in second_bottom_letter_match_inds:
                                                if o - n == k - j and m - i == item - l:
                                                    possible_crosswords += 1

    return possible_crosswords * 2


def isRotated(a, b):
    a = list(a)
    b = list(b)
    if a[0] == b[1] and a[1] == b[0] and a[2] == b[3] and a[3] == b[2]:
        return True

    return False


words = ["aaaaaaaaaaaaaa", "aaaaaaaaaaaaab", "aaaaaaaaaaaaca", "aaaaaaaaaaadaa"]
start = time.clock()
print(crosswordFormation(words))
print(time.clock() - start)

# def cubeVolume(n):
#     return n ** 3

cubeVolume = lambda n: n ** 3

def deleteDigit(n):
    digits = str(n)
    values = []

    for i in range(len(digits)):
        value = int(digits[:i] + digits[(i + 1) :])
        values.append(int(value))

    return max(values)

def depositProfit(deposit, rate, threshold):
    i = 0
    while deposit < threshold:
        deposit += deposit * rate * .01
        i+=1
    return i
def depositProfit(deposit, rate, threshold):
    years = 0
    while deposit < threshold:
        deposit += deposit * (rate / 100)
        years += 1
    return years

def differentSquares(matrix):
	"""
	Return number of DIFFERENT 2 * 2 squares in rectangular matrix.
    
    Time Complexity: O(N^2)
    Space Complexity: O(N)
	"""
    squares = set()
    for i in range(len(matrix) - 1):
        for j in range(len(matrix[i]) - 1):
            squares.add((matrix[i][j], matrix[i][j + 1], matrix[i + 1][j], matrix[i + 1][j + 1]))
    return len(squares)
def differentSymbolsNaive(s):
    return len(set(s))

def digitRootSort(a):
    a.sort()
    
    a = map(str, a)
    separados = []
    for numeros in a:
        separados.append(list(numeros))

    totales = []
    for i in range(len(separados)):
        sumaElementos = 0
        for x in range(len(separados[i])):
            sumaElementos += int(separados[i][x])

        totales.append(sumaElementos)

    resultado = []
    print(a)
    print(totales)
    while(len(totales) != 0):
        menor = totales[0]
        indice = 0
        for i in range(len(totales)):
            if totales[i] < menor:
                menor = totales[i]
                indice = i

        resultado.append(int(a[indice]))
        a.pop(indice)
        totales.pop(indice)
    print(resultado)
        


def main():
    lista = [13, 20, 7, 4]
    digitRootSort(lista)


if __name__ == '__main__':
    main()

def digitDegree(n):
    number, degree = str(n), 0

    while len(number) != 1:
        number = str(sum([int(digit) for digit in number]))
        degree += 1
    return degree

def digitsProduct(product):
    """
    Given an integer product, find the smallest 
    positive (i.e. greater than 0) integer the 
    product of whose digits is equal to product. 
    If there is no such integer, return -1 instead.
    
    Time Complexity: O(inf)
    Space Complexity: O(1)
    """
    number = 1
    while True:
        p = 1
        digits = [int(x) for x in str(number)]
        for n in digits:
            p = p * n
        if number > 10000:
            return -1
        if p == product:
            return number
        number += 1

n, d = eval(dir()[0])
while n % d < 1:
    n /= d
return n

# def divideAsLongAsPossible(n, d):
#     while n % d == 0:
#         n /= d
#     return n

"""Election Winners

    Given an array of the numbers of votes 
    given to each of the candidates so far, 
    and an integer k equal to the number of 
    voters who haven't cast their vote yet, 
    find the number of candidates who still 
    have a chance to win the election.
    
    The winner of the election must secure 
    strictly more votes than any other candidate. 
    If two or more candidates receive the same 
    (maximum) number of votes, assume there is 
    no winner at all.
"""


def electionsWinners(votes, k):
    """Find number of candidates that have chance to win election
    
    Args:
        votes(int): List of number of votes given to each candidate so far.
        k(int): Number of voters who haven't cast their vote yet.
        
    Return:
        Number of candidates that still have chance to win election
        
    Raises:
    """
    highest = max(votes)
    if k == 0:
        counter = votes.count(highest)
        if counter == 1:
            return 1
        return 0
    return len([vote for vote in votes if vote + k > highest])

def decodeString(s):

    return s[s.find("[")+1:s.find("]")]


def main():
    s = "z1[y]zzz2[abc]"
    #zyzzzabcabc
    print(decodeString(s))


if __name__ == '__main__':
    main()

def evenDigitsOnly(n):
    digits = [int(digit) for digit in str(n)]  # Convert digits to list of strings

    for digit in digits:
        if digit % 2 == 1:
            return False
    return True

import numpy as np

import re

def main():

    for i in range(100, 0, -1):
        print(i)

    for x in range(1, 100, 3):
        print(x)

    pow()


if __name__ == '__main__':
    main()

def extraNumber(a, b, c):
    """
    You're given three integers, a, b and c. It is 
    guaranteed that two of these integers are equal 
    to each other. What is the value of the third integer?
    """
    if a == b:
        return c
    elif a == c:
        return b
    elif b == c:
        return a

def extractEachKth(inputArray, k):
    """Function to remove each kth element from list of integers
    
    Args:
        inputArray(int): List of integers
        k(int): position of elements to remove from list
        
    Return:
        The list with kth elements removed
        
    Raises:
    """
    new_list = []
    for i in range(len(inputArray)):
        if (i + 1) % k != 0:
            new_list.append(inputArray[i])
    return new_list

from collections import defaultdict
import random

# actually, an inverse "islands" problem
# instead of finding all connected items
# find all items with no connections
# need to have an inverse link
# instead of a "common animal" link
# build a goofy "dark edge" graph

# start with all classes connected to all other classes
# then disconnect them when an edge between them is found!
def feedingTime(classes):
    class_graph = defaultdict(set)
    animals = defaultdict(set)
    neg_graph = defaultdict(set)
    c_size = len(classes)

    # fully connected graph
    for i in range(c_size):
        for j in range(c_size):
            if not i == j:
                class_graph[i].add(j)

    # animals graph to classes - constructed here
    for i, c_arr in enumerate(classes):
        for animal in c_arr:
            animals[animal].add(i)

    # now remove edges based on connections
    # need to remove third-party edges as well...
    for i, c_arr in enumerate(classes):
        for animal in c_arr:
            for c_val in animals[animal]:
                class_graph[i].discard(c_val)
                neg_graph[c_val].update(set(animals[animal]))
                neg_graph[c_val].discard(c_val)

    # now find islands as normal!
    # worth a shot
    # need a break condition if the conflicting animals are related when can be added to current
    # then remove from graph!
    check = []

    # check.append(graph_search([9, 5, 1, 4, 6, 2, 7, 3, 8, 0], class_graph.copy(), neg_graph.copy()))

    for i in range(200):
        vals = list(range(c_size))
        random.shuffle(vals)
        curr_graph = class_graph.copy()
        for key in curr_graph.keys():
            l = list(curr_graph[key])
            random.shuffle(l)
            curr_graph[key] = set(l)
        a = graph_search(vals, curr_graph, neg_graph.copy())
        check.append(a)

    print(check)
    print(animals)

    islands = min(check)

    if islands > 5:
        return -1

    return islands


def graph_search(vals, class_graph, neg_graph):
    seen = set()
    islands = []
    for i in vals:
        if i not in seen:
            queue = [i]
            seen.add(i)
            route = set()
            route.add(i)
            found_val = False

            while queue:
                curr = queue.pop(0)
                route.add(curr)
                seen.add(curr)
                for item in class_graph[curr]:
                    # halts the BFS if any connections to another class that has the same animals
                    # should actually only add item if not in conflict with anything in route
                    # not break altogether
                    test = [True if item in neg_graph[a] else False for a in route]
                    if not any(test) and item not in seen:
                        seen.add(item)
                        queue.append(item)
                        route.add(item)
            islands.append(route)
            seen = set()
            for island in islands:
                for a in island:
                    seen.add(a)
    print(islands)
    return len(islands)

    # below is close, but not quite there!
    # classes_assigned = {}
    # day_schedule = []
    # day_animals = defaultdict(set)
    # #make a dictionary of the animals to the class index values
    # animals = defaultdict(list)

    # for i, item in enumerate(classes):
    #     for animal in item:
    #         animals[animal].append(i)

    # #sum and sort animals by number of classes that want to see them
    # animal_counts = []
    # for key in animals.keys():
    #     count = len(animals[key])
    #     animal_counts.append((key, count))

    # animal_counts.sort(key=sort_last)
    # animal_counts.reverse()

    # #case where no schedule in 5 days is possible
    # # if(animal_counts[0][1]>5):
    # #     return -1

    # #add initial conflicting classes for most requested animal
    # start_animal = animal_counts[0][0]
    # for class_val in animals[start_animal]:
    #     day_schedule.append([class_val])
    #     classes_assigned[class_val] = len(day_schedule)-1
    #     day_animals[len(day_schedule)-1].update(set(classes[class_val]))

    # animal_counts.pop(0)

    # animal_counts.reverse()

    # #now assign classes where there are no conflicts
    # for animal, count in animal_counts:
    #     conflict_classes = animals[animal]
    #     for item in conflict_classes:
    #         if(item in classes_assigned):
    #             continue
    #         for i, items in enumerate(day_schedule):
    #             curr_class_animals = set(classes[item])
    #             if(len(day_animals[i].intersection(curr_class_animals)) == 0):
    #                 day_schedule[i].append(item)
    #                 day_animals[i].update(curr_class_animals)
    #                 classes_assigned[item] = i
    #                 break
    #         else:
    #             day_schedule.append([item])
    #             day_animals[len(day_schedule)-1].update(set(classes[item]))
    #             classes_assigned[item] = len(day_schedule)-1

    # print(day_schedule)
    # print(day_animals)
    # print(animals)

    # if len(day_schedule) > 5:
    #     return -1

    # return len(day_schedule)


def sort_last(tup):
    return tup[1]

def fileNaming(names):
    """
    Since two files cannot have equal names, 
    the one which comes later will have an addition 
    to its name in a form of (k), where k is the smallest 
    positive integer such that the obtained name is not 
    used yet. Return an array of names that will be given 
    to the files.
    """
    new_file_names = []
    for name in names:
        if name in new_file_names:
            k = 1
            while "{}({})".format(name, k) in new_file_names:
                k += 1
            name = "{}({})".format(name, k)
        new_file_names.append(name)
    return new_file_names

def findTheRemainder(a, b):
    return a % b
def findEmailDomain(address):
    return address.split("@")[-1]

def firstDigit(inputString):
    """Finds leftmost digit that occurs in a given string
    
    Args:
        inputString(string): input string
    
    Return:
        Leftmost digit occurring in string
        
    Raises:
    """
    for char in inputString:
        if char.isdigit():
            return char

def firstDuplicate(a):
    number_frequencies, number_indices, duplicate_index = {}, {}, {}

    # Iterate through list and increment frequency count
    # if number not in dict. Also, note the index asscoiated
    # with the value
    for i in range(len(a)):
        if a[i] not in number_frequencies:
            number_frequencies[a[i]] = 1
            number_indices[a[i]] = i
        elif a[i] in number_frequencies:
            if number_frequencies[a[i]] < 2:
                number_frequencies[a[i]] += 1
                number_indices[a[i]] = i

    for number in number_frequencies:
        if number_frequencies[number] == 2:
            duplicate_index[number] = number_indices[number]

    if not duplicate_index:
        return -1
    else:
        minimal_index_key = min(duplicate_index, key=duplicate_index.get)
        return minimal_index_key

def firstNotRepeatingCharacter(s):
    character_count, character_index, non_repeat_index = {}, {}, {}

    # Iterate through string and count
    # character occurences and note
    # index of first repetition
    for i in range(len(s)):
        if s[i] not in character_count:
            character_count[s[i]] = 1
            character_index[s[i]] = i
        elif s[i] in character_count:
            if character_count[s[i]] < 2:
                character_count[s[i]] += 1
                character_index[s[i]] = i

    for char in character_count:
        if character_count[char] == 1:
            non_repeat_index[char] = character_index[char]

    if not non_repeat_index:
        return "_"
    else:
        minimal_index_key = min(non_repeat_index, key=non_repeat_index.get)
        return minimal_index_key

def water_collected(heights):
    water_collected = 0
    left_height = []
    right_height = []

    temp_max = heights[0]
    for height in heights:
        if (height > temp_max):
            temp_max = height
        left_height.append(temp_max)

    temp_max = heights[-1]
    for height in reversed(heights):
        if (height > temp_max):
            temp_max = height
        right_height.insert(0, temp_max)

    for i, height in enumerate(heights):
        water_collected += min(left_height[i], right_height[i]) - height
    return water_collected




def main():
    numberOfTowers = input()
    sequenceHeights = input()
    maxVume(numberOfTowers, sequenceHeights)


if __name__ == '__main__':
    main()

# need strings[i] = strings[j] for all patterns[i] = patterns[j] to be true -
# give false if strings[i] != strings[j] and patterns[i] = patterns[j] or
# strings[i] = strings[j] and patterns[j] != patterns[j] - this last condition
# threw me for a bit as an edge case! Need to ensure that each string is unique
# to each key, not just that each key corresponds to the given string!

# from a google interview set, apparently
def areFollowingPatterns(strings, patterns):
    pattern_to_string = {}
    string_to_pattern = {}
    for i in range(len(patterns)):
        # first, check condition that strings are equal for patterns[i]=patterns[j]
        this_pattern = patterns[i]
        if patterns[i] in pattern_to_string:
            if strings[i] != pattern_to_string[this_pattern]:
                return False
        else:
            pattern_to_string[this_pattern] = strings[i]

    # now check condition that patterns are equal for strings[i]=strings[j]
    # if there are more keys than values, then there is not 1:1 correspondence
    if len(pattern_to_string.keys()) != len(set(pattern_to_string.values())):
        return False

    return True

# def fractionComparison(a, b):
#     d = a[0] / a[1]
#     f = b[0] / b[1]
#     if d < f:
#         return "<"
#     elif d > f:
#         return ">"
#     else:
#         return "="

(a, b), (c, d) = eval(dir()[0])
r = (a * d) / (b * c)
return "<" if r < 1 else ">" if r > 1 else "="

# 72 chars
# def fractionReducing(f):
#     return [i / math.gcd(f[0], f[1]) for i in f]

# fractionReducing = lambda f: [i / math.gcd(f[0], f[1]) for i in f]

f, = eval(dir()[0])
return [i / math.gcd(f[0], f[1]) for i in f]
# def gasPrediction(driveDistances, currentGasLevel, avgMileage):
#     a = sum(driveDistances) / 12 / avgMileage
#     print(a)
#     if a > currentGasLevel:
#         return True
#     else:
#         return False

# d, c, a = eval(dir()[0])
# return sum(d) / 12 / a > c

# 39 chars
gasPrediction = lambda d, c, a: sum(d) / 12 / a > c
# greetPerson = lambda n: "Hello, " + n

greetPerson = "Hello, {}".format
import collections


def groupAnagrams(strs):
    # """
    # TimeComplexity: O(n*K*log(K)) where n is the length of strs and K is the length of the longest string
    #  in strs
    # """
    # seen = {}
    # for s in strs:
    #     ele = tuple((sorted(s)))
    #     if ele in seen:
    #         seen[ele].append(s)
    #     else:
    #         seen[ele] = [s]
    # return seen.values()
    """
    Time Complexity: O (N*K)
    """
    d = collections.defaultdict(list)
    for s in strs:
        count = [0] * 26
        for char in s:
            count[ord(char) - 97] += 1
        d[tuple(count)].append(s)
    return d.values()


print(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

def growingPlant(upSpeed, downSpeed, desiredHeight):
    height = 0
    days = 1
    height += upSpeed
    while height < desiredHeight:
        days += 1
        height -= downSpeed
        height += upSpeed
    return days

def halvingSum(n):
    s = 0
    while n:
        s += n
        n //= 2
    return s

# s (int) : Sum
# n (int) : Input number
# def insertDashes(s):
#     return "-".join(s).replace("- -", " ")
# 55

# insertDashes = lambda s: "-".join(s).replace("- -", " ")
# 51

# return "-".join(*eval(dir()[0])).replace("- -", " ")
# 50

# return re.sub("- -", " ", "-".join(*eval(dir()[0])))
# 49

# insertDashes = lambda s: re.sub('\B', '-', s)
# 39

return re.sub('\B', '-', *eval(dir()[0]))
# 38

# def isAdult(age, majority):
#     return age >= majority

isAdult = lambda a, m: a >= m
def isDigit(symbol):
    return symbol.isdigit()

import ipaddress


def isIPv4Address(inputString):
    try:
        ip = ipaddress.ip_address(inputString)
        return True
    except ValueError:
        return False

import re

"""isMAC48Address

    A media access control address (MAC address) 
    is a unique identifier assigned to network 
    interfaces for communications on the physical 
    network segment.
    
    The standard (IEEE 802) format for printing 
    MAC-48 addresses in human-friendly form is six 
    groups of two hexadecimal digits (0 to 9 or A to F), 
    separated by hyphens (e.g. 01-23-45-67-89-AB).    
"""


def isMAC48Address(inputString):
    """Checks if inputString is a valid MAC48 address
    
    Args:
        inputString(string): String to check
        
    Return:
        Boolean indicating if string is valid MAC48 address
        
    Raises:
    """
    if re.match(
        "[0-9a-f]{2}([-:])[0-9a-f]{2}(\\1[0-9a-f]{2}){4}$", inputString.lower()
    ):
        return True
    else:
        return False

def isSum(value):
    s=0
    for i in range(100):
        s+=i
        if s== value:
            return True
def isSuspiciousRespondent(ans1, ans2, ans3):
    return ans1 == ans2 == ans3
def isBeautifulString(inputString):
    b = dict()

    for char in inputString:
        if ord(char) in b:
            b[ord(char)] += 1
        else:
            b[ord(char)] = 1

    for i in b.keys():
        if i == 97:
            continue
        if i - 1 in b:
            if b[i] > b[i - 1]:
                return False
        else:
            return False
    return True

def isCryptSolution(crypt, solution):
    decoded_words, decoded_word = [], ""

    # Decode the words in the cryptarithm
    for i in range(len(crypt)):
        for j in range(len(crypt[i])):
            for k in range(len(solution)):
                if crypt[i][j] == solution[k][0]:
                    decoded_word += solution[k][1]
        decoded_words.append(decoded_word)
        decoded_word = ""

    # Check if the leading digits of
    # any of the words is 0
    for word in decoded_words:
        if word[0] == "0" and len(word) > 1:
            return False

    # Check if it is a valid arithmetic expression
    word1 = int(decoded_words[0])
    word2 = int(decoded_words[1])
    word3 = int(decoded_words[2])

    if word1 + word2 == word3:
        return True
    else:
        return False

def isInfiniteProcess(a, b):
	"""
	Given integers a and b, determine whether the following 
	pseudocode results in an infinite loop
	
	while a is not equal to b do
		increase a by 1
		decrease b by 1
		
	Assume that the program is executed on a virtual machine 
	which can store arbitrary long numbers and execute forever.
	"""
    return a % 2 != b % 2 or a > b
def isLucky(n):
    digits = [int(digit) for digit in str(n)]
    if len(digits) % 2 == 1:
        return False
    else:
        digits = [int(digit) for digit in str(n)]
        mid = len(digits) // 2
        if sum(digits[:mid]) == sum(digits[mid:]):
            return True
        else:
            return False

def knapsackLight(value1, weight1, value2, weight2, maxW):
    val = 0
    if value2 > value1:
        val = value1
        value1 = value2
        value2 = val
        val = weight1
        weight1 = weight2
        weight2 = val

    val = 0
    if weight1 <= maxW:
        val += value1
        maxW -= weight1

    if weight2 <= maxW:
        val += value2

    return val

def largestNumber(n):
    return pow(10, n) - 1

def lateRide(n):
	"""
	Return sum of hours and minutes past 00:00
	"""
    hours = str(n // 60)
    minutes = str(n % 60)
    total = 0
    for digit in hours:
        total += int(digit)
    for digit in minutes:
        total += int(digit)
    return total


"""Line Encoding

    Given a string, return its encoding defined as follows:
    
    First, the string is divided into the least possible number 
    of disjoint substrings consisting of identical characters
    
    Next, each substring with length greater than one is replaced 
    with a concatenation of its length and the repeating character
    
    Finally, all the new strings are concatenated together in the 
    same order and a new string is returned.
    
    Time Complexity: O(n)
    Space Complexity: O(1)
"""


def lineEncoding(s):
    encoding, character_count = "", 1
    for i in range(len(s) - 1):
        if s[i] == s[i + 1]:
            character_count += 1
        else:
            if character_count > 1:
                encoding += str(character_count) + s[i]  # Add substring to encoding
                character_count = 1  # Reset character count
            else:
                encoding += s[i]

    if character_count > 1:
        encoding += str(character_count) + s[len(s) - 1]
    else:
        encoding += s[len(s) - 1]
    return encoding

def longestDigitsPrefix(inputString):
    for i in range(len(inputString)):
        if not inputString[i].isdigit():
            return inputString[:i]
    return inputString

def longestWord(text):
	"""
	Return longest word in text string
	
	Time Complexity: O(n)
	Space Complexity: O(n)
	"""
    word, words = '', []
    for i in range(len(text)):
        if text[i].isalpha():
            word += text[i]
            if i == len(text) - 1:
                words.append(word)
                word = ''
        elif word != '' and not text.isalpha():
            words.append(word)
            word = ''
    print(words)
    return max(words, key = len)
l, s = eval(dir()[0])
r = []
c = 1
    
t = [[int(s[i:i+2]) for i in [1, 4]] +[s[7:9]] for s in l]
t = [f"{x // 60:02d}:{x % 60:02d}:{y:02d},{z.ljust(3, str(0))}" for x, y, z in t] + [s + ',000'] # if I replace str(0) with '0', this increases to 359 characters wtf
    
for a, b in enumerate(l):
    r.extend([str(c), t[a] + ' --> ' + t[a+1], b[11:], ''])
    c += 1
return r[:-1]

def magicalWell(a,b,n):
    s, m = 0, 0
    while m < n:
        s += a * b
        a += 1
        b += 1
        m += 1
    return s
# makeArrayConsecutive = lambda a: [i for i in range(min(a), max(a)) if i not in a]

a, = eval(dir()[0])
return [i for i in range(min(a), max(a)) if i not in a]
def makeArrayConsecutive2(statues):
    additional_statues = 0
    sorted_statues = sorted(statues)  # Sort the statues
    for i in range(len(sorted_statues) - 1):
        if sorted_statues[i + 1] - sorted_statues[i] != 1:
            additional_statues += (sorted_statues[i + 1] - sorted_statues[i]) - 1
    return additional_statues

# "Hard" question, supposed to take 30 min but took me almost 2 hours
# the zeros really threw me a curveball

# asked by MS, Uber, FB apparently


def mapDecoding(message):
    counts = [0, 1]
    size = len(message)

    # special cases
    if size == 0:
        return 1
    if int(message[0]) == 0:
        return 0
    if size == 1:
        return 1
    for i in range(size):
        if int(message[i]) == 0 and not (0 < int(message[i - 1]) <= 2):
            return 0

    former = int(message[0])
    last = int(message[1])
    if former == 1 and last != 0:
        counts.append(2)
    elif former == 2 and 0 < last <= 6:
        counts.append(2)
    else:
        counts.append(1)

    previous_op_count = counts[-1]

    for i in range(2, size):
        curr = int(message[i])
        if curr == 0:
            former = last
            last = curr
            while counts[-1] != previous_op_count:
                counts.pop()
            continue

        if 0 < former <= 2:
            if 0 < last <= 2:
                if (last == 2 and 0 < curr <= 6) or (last == 1 and 0 < curr):
                    previous_op_count = counts[-1]
                    counts.append((counts[-1] + counts[-2]) % (10 ** 9 + 7))
                else:
                    counts.append(counts[-1])
        elif (last == 2 and 0 < curr <= 6) or (last == 1 and 0 < curr):
            previous_op_count = counts[-1]
            counts.append(counts[-1] * 2 % (10 ** 9 + 7))
        else:
            counts.append(counts[-1])

        former = last
        last = curr

    return counts[-1]

def matrixElementsSum(matrix):
    runningsum = 0
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if matrix[i][j] == 0 and i + 1 < len(matrix):
                matrix[i + 1][j] = 0
            runningsum += matrix[i][j]
    return runningsum

def maxSubarray(A):
    # A: inputArray
    # m: Max
    # 
    # 
    m = e = 0
    for i in A:
        e += i
        if e < 0:
            e = 0
        if m < e:
            m = e
    return m
def maxMultiple(divisor, bound):
	"""
	Return number n that is greater than 0, less than
	or equal to bound and divisible by divisor
	"""
    number = 0
    while number <= bound and number % divisor == 0:
        number += divisor
    number -= divisor
    return number
def calculateSubstringsLengthK(s, k):
    """
    Return substrings of size k in s
    """
    substrings, index = [], 0
    while index + k <= len(s):
        substrings.append(s[index : index + k])
        index += k
    return substrings


def messageFromBinaryCode(code):
    """
    Return encrypted message from binary code
    """
    substrings, encrypted_message = calculateSubstringsLengthK(code, 8), ""
    for substring in substrings:
        ascii_code = int(substring, 2)
        encrypted_message += chr(ascii_code)
    return encrypted_message

# find the minimum positive integer that is NOT contained in a given array
# e.g. [1, 5, 2, 3] would give 4
import time

start = time.time()


def solution(A):

    solution.n = 1

    def getMin(num):
        if solution.n == num:
            solution.n += 1
        return num

    B = sorted(A, key=getMin)

    print(solution.n)
    return solution.n


# test cases
solution([1, 3, 5, 7])  # 2
solution([1, 5, 2, 3])  # 4
solution([1, 5, 2, 3, 1, 3, 5, 7])  # 4
solution([7, 6, 5, 4])  # 1
solution([7, 6, 5, 4, 1, 2])  # 3
solution([1, 2])  # 3
solution([-1, 0, 1])  # 2

end = time.time()
print(end - start)

def neighbours(matrix, i, j, rows, columns):
    mines = 0
    # Top left
    if i >= 1 and j >= 1:
        if matrix[i - 1][j - 1]:
            mines += 1
    # Top center
    if i >= 1:
        if matrix[i - 1][j]:
            mines += 1
    # Top right
    if i >= 1 and j < columns - 1:
        if matrix[i - 1][j + 1]:
            mines += 1
    # Middle right
    if j < columns - 1:
        if matrix[i][j + 1]:
            mines += 1
    # Bottom right
    if i < rows - 1 and j < columns - 1:
        if matrix[i + 1][j + 1]:
            mines += 1
    # Bottom center
    if i < rows - 1:
        if matrix[i + 1][j]:
            mines += 1
    # Bottom left
    if i < rows - 1 and j >= 1:
        if matrix[i + 1][j - 1]:
            mines += 1
    # Middle left
    if j >= 1:
        if matrix[i][j - 1]:
            mines += 1
    return mines


def minesweeper(matrix):
    rows, columns = len(matrix), len(matrix[0])
    game_setup = []
    for i in range(rows):
        game_setup_row = []
        for j in range(columns):
            game_setup_row.append(neighbours(matrix, i, j, rows, columns))
        game_setup.append(game_setup_row)
    return game_setup

x, y = eval(dir()[0])
return str(int(x) * int(y))

# multiplyTwoStrings

# def mySubstring(s, l, r):
#     return s[l:r+1]

mySubstring = lambda s, l, r: s[l:r+1]
# https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ
# Given the string, check if it is a palindrome.


def check_palindrome(input_string: str = '') -> bool:
    if 1 <= len(input_string) <= 100000:
        return input_string == input_string[::-1]
    return False

def palindromeRearranging(inputString):
    character_count, odd_frequencies = {}, 0

    # Count character frequencies
    for i in range(len(inputString)):
        if inputString[i] not in character_count:
            character_count[(inputString[i])] = 1
        elif inputString[i] in character_count:
            character_count[(inputString[i])] += 1

    # Count odd character frequencies
    for char in character_count:
        if character_count[char] % 2 == 1:
            odd_frequencies += 1

    if odd_frequencies > 1:
        return False

    return True

#def passwordCheck(s):
#    if any(i.isdigit() for i in s) and any(i.islower() for i in s) and any(i.isupper() for i in s) and len(s) >= 5:
#        return True
#    else:
#        return False

#passwordCheck = lambda s: (any(i.isdigit()) and any(i.islower()) and any(i.isupper())) for i in s and len(s) > 4

# Regex:

#def passwordCheck(s):
#    return len(s) > 4 and all(re.search(p, s) for p in ('[A-Z]', '\d', '[a-z]'))

passwordCheck = lambda s: len(s) > 4 and all(re.search(i, s) for i in ('[A-Z]', '\d', '[a-z]'))
def phoneCall(min1, min2_10, min11, s):
    """
    You have s cents on your account before the call. 
    What is the duration of the longest call (in minutes 
    rounded down to the nearest integer) you can have?
    
    Time Complexity: O(1)
    Space Complexity: O(1)
    """
    # Check if there is enough cents to make
    # a 1 minutes call
    if s < min1:
        return 0
    s -= min1  # Subtract the cost of the minutes
    total_minutes = 1  # We have one minute of call time so far

    # Check if there are enough cents to make
    # a 9 minute call
    if s < 9 * min2_10:
        total_minutes += s // min2_10
        return total_minutes
    s -= 9 * min2_10
    total_minutes += 9

    # Calculate how many more minutes can be
    # purchased
    total_minutes += s // min11
    return total_minutes

import itertools

# Given an array of coins and an array of quantities for each coin with the
# same index, determine how many distinct sums can be made from non-zero
# sets of the coins

# Note: This problem took a little more working-through, with a failed brute-
# force attempt that consisted of finding every combination of coins and
# adding them, which failed when I needed to consider >50k coins
# the overall number of coins was guaranteed to be less than about 1 million,
# so the solution appeared to be a form of divide-and-conquer where each
# possible sum for each coin was put into a set at that coin's index in the
# original coins array, and then the sums were repeatedly combined into an
# aggregate set until every coin possible coin value (given by the coins
# array) had been added into the set of sums

# problem considered "hard," asked by Google


def possibleSums(coins, quantity):
    # sum_map = set()
    # start with brute force
    # total_arr = [coins[i] for i, q in enumerate(quantity) for l in range(q)]

    # for i in range(1, len(total_arr)+1):
    #     combos = itertools.combinations(total_arr, i)
    #     print(combos)
    #     for combo in combos:
    #         sum_map.add(sum(combo))

    # return len(sum_map)

    # faster?
    comb_indices = [i for i in range(len(coins))]
    possible_sums = []
    for i, c in enumerate(coins):
        this_set = set()
        for q in range(1, 1 + quantity[i]):
            this_set.add(c * q)
        possible_sums.append(this_set)
    # print(possible_sums)

    while len(possible_sums) > 1:
        possible_sums[0] = combine_sets(possible_sums[0], possible_sums[1])
        possible_sums.pop(1)

    return len(possible_sums[0])


def combine_sets(set1, set2):
    together_set = set()
    for item1 in set1:
        for item2 in set2:
            together_set.add(item1 + item2)
        together_set.add(item1)

    for item2 in set2:
        together_set.add(item2)
    return together_set

import itertools as i

# *re.findall('...', 'abcdefghijklmno')
# >>> 'abc', 'def', 'ghi', 'jkl', 'mno'

# [0,0,"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"] 
return ["".join(s) for s in i.product(*['0 0 abc def ghi jkl mno pqrs tuv wxyz'.split()[int(i)] for i in eval(dir()[0])[0]]) if s]

def partition(A, lo, hi):
    pivot = A[lo + (hi - lo) // 2]
    i = lo - 1
    j = hi + 1

    while True:
        
        i += 1
        while A[i] < pivot:
            i += 1
        
        j -= 1    
        while A[j] > pivot:
            j -= 1
            
        if i >= j:
            return j
        A[i], A[j] = A[j], A[i]

def quicksort(A, lo, hi):
    if lo < hi:
        p = partition(A, lo, hi)
        quicksort(A, lo, p)
        quicksort(A, p + 1, hi)
    return A

if __name__ == "__main__":
    arr = [8, 3, 5, 1, 7, 2]
    quicksort(arr, 0, len(arr) - 1)
    # >>> [1, 2, 3, 5, 7, 8]

def reachNextLevel(experience, threshold, reward):
    """
    You are playing an RPG game. Currently your 
    experience points (XP) total is equal to experience. 
    To reach the next level your XP should be at least at 
    threshold. If you kill the monster in front of you, 
    you will gain more experience points in the amount 
    of the reward.
    
    Given values experience, threshold and reward, check 
    if you reach the next level after killing the monster.
	
	Time Complexity: O(1)
	Space Complexity: O(1)
    """
    return experience + reward >= threshold

# def removeDuplicateStrings(a):
#     return list(OrderedDict.fromkeys(a))
# 64 

# removeDuplicateStrings = lambda a: list(OrderedDict.fromkeys(a))
# 60

return list(OrderedDict.fromkeys(*eval(dir()[0])))
# 49
# def returnTwelve(n):
#     return n if n > 12 else 12

# n, = eval(dir()[0])
# return n if n > 12 else 12

returnTwelve = lambda n: 12 if n < 12 else n

def reverseInParentheses(inputString):
    opening_brackets_indices = []

    # Iterate through string
    for i in range(len(inputString)):
        # Push opening brackets onto the stack
        if inputString[i] == "(":
            opening_brackets_indices.append(i)
        # Reverse the substring starting after the
        # last encountered opening bracket till
        # the current character
        elif inputString[i] == ")":
            substring_with_parentheses = inputString[
                opening_brackets_indices[-1] : i + 1
            ]
            inputString = (
                inputString[: opening_brackets_indices[-1]]
                + substring_with_parentheses[::-1]
                + inputString[i + 1 :]
            )
            print(inputString)
            del opening_brackets_indices[-1]
    # Store new string with reversed parentheses
    # removed
    new_string_without_parentheses = ""
    for i in range(len(inputString)):
        if inputString[i] != "(" and inputString[i] != ")":
            new_string_without_parentheses += inputString[i]
    return new_string_without_parentheses

# expected to rotate an array in-place without using additional memory
# O(1) space requirement!


def rotateImage(a):
    n = len(a)
    # reflect about the diagonal
    for i in range(n):
        for j in range(i, n):
            a[i][j], a[j][i] = a[j][i], a[i][j]

    # now flip the columns about the center
    for i in range(n):
        for j in range(n // 2):
            a[i][j], a[i][n - 1 - j] = a[i][n - 1 - j], a[i][j]

    return a

def rotateImage(a):
    N = len(a)
    for i in range(N // 2):
        for j in range(i, N - 1 - i):
            temp = a[i][j]
            a[i][j] = a[N - 1 - j][i]
            a[N - 1 - j][i] = a[N - 1 - i][N - 1 - j]
            a[N - 1 - i][N - 1 - j] = a[j][N - 1 - i]
            a[j][N - 1 - i] = temp
    return a

p, s = eval(dir()[0])
r = -1
l = len(p)
for i in range(l):
    for j in range(l):
        c = 0
        d = p[j] - p[i]
        f = s[i] - s[j]

        if d * f < 1:
            continue

        for k in range(l):
            if p[k] * f + s[k] * d == p[i] * f + s[i] * d:
                c += 1
        if c > r:
            r = c
return r
import copy


def runningWater(cap, volume):
    max_buckets = cap[::]
    full_volume = sum(max_buckets)
    seen_volume = set()
    seen = set()
    stack = emptyBuckets(cap, 0, volume)
    for item in stack:
        seen_volume.add(full_volume - item[0])
        seen.add(tuple(item[1]))

    # need this edge case here to pass all tests!
    if volume == full_volume:
        return True

    while stack and volume not in seen_volume:
        curr = stack.pop()
        seen_volume.add(full_volume - curr[0])
        seen.add(tuple(curr[1]))
        # add values for emptied bucket move
        # only if tuples not in seen
        for item in emptyBuckets(curr[1], curr[0], volume):
            if tuple(item[1]) not in seen:
                stack.append(item)
                seen.add(tuple(item[1]))

        # add values for combinations of pouring buckets into other buckets
        # stack.extend([a for a in pourBuckets(curr, max_buckets) if tuple(a[1]) not in seen])
        for item in pourBuckets(curr, max_buckets, seen):
            # if(tuple(item[1]) not in seen):
            stack.append(item)
            seen.add(tuple(item[1]))

    else:
        if volume in seen_volume:
            return True

    return False


def emptyBuckets(buckets, curr_poured, min_volume):
    output = []
    for i in range(3):
        output.append([buckets[i] + curr_poured, []])
        # print(output)
        for j in range(3):
            if j == i:
                output[i][1].append(0)
            else:
                output[i][1].append(buckets[j])
    # print(output)
    for i in range(3):
        if min_volume > sum(output[-1][1]):
            # print(min_volume, output[-1][1])
            # print(output)
            output.pop()
    return output


def pourBuckets(buckets, max_buckets, seen):
    output = []
    # print(buckets)
    for i in range(3):
        for j in range(3):
            if i == j:
                continue
            curr = copy.deepcopy(buckets)
            # pour buckets into other buckets
            if curr[1][j] == max_buckets[j]:
                # bucket to be poured into is full
                # print(buckets, max_buckets)
                # output.append(curr)
                continue
            elif curr[1][i] + curr[1][j] >= max_buckets[j]:
                curr[1][i] = (curr[1][j] + curr[1][i]) - max_buckets[j]
                curr[1][j] = max_buckets[j]
                # print(i, j, buckets, curr)
            # output.append(curr)
            elif curr[1][i] + curr[1][j] < max_buckets[j]:
                curr[1][j] = curr[1][i] + curr[1][j]
                curr[1][i] = 0
            if tuple(curr[1]) not in seen:
                output.append(copy.deepcopy(curr))
    # print(buckets, output)
    return output

def seatsInTheater(nCols, nRows, col, row):
    """
    Given the total number of rows and columns 
    in the theater (nRows and nCols, respectively), 
    and the row and column you're sitting in, return 
    the number of people who sit strictly behind 
    you and in your column or to the left, assuming 
    all seats are occupied.
    """
    return (nRows - row) * (nCols - col + 1)

entrada = int(input("CUANTAS VECES QUIERES PERRO: "))
acumulador = 0
denominador = -1
for i in range(entrada):
    denominador += (i*3)
    acumulador += 1/denominador
print(acumulador)

# https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ
# Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
# A 1-interesting polygon is just a square with a side of length 1.
# An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim,
# side by side.


def shape_area(n: int = None) -> int:
    if n is not None and isinstance(n, int) and 1 <= n <= 10000:
        return (n - 1) ** 2 + n ** 2
    return 0

# Problem required O(n^2) time for the solution, where n is the number of nodes
# Problem outline is to find "single points of failure" in a LAN computer
# network, so that the admin can plan new additions to the network to make it
# more robust. That translates into finding which single cables (edges) can
# be disconnected and cause the entire network to be disconnected.

# This looks a lot like the strongly-connected components problem, in that
# we are trying to figure out how many "clusters" of computers there are that
# are connected by a single cable. We are given an adjacency matrix for the
# connections and are assured the graph is connected.

# My solution (that should work in O(n^2) time) entails first removing computers
# that only have one connection to the network - one cable (edge). After
# removing these computers, we can look at each separate computer in the
# network and disconnect it from all others temporarily. Then we use a BFS
# to determine if the network is disconnected. If so, at least one of the cables
# (edges) attached to that computer could be a single point of failure. We find
# all the possible "problem" computers, then check how they are connected to
# each other to determine how many valid single points of failure there are.

# This part gets a little tricky. The computers causing a single point of failure
# are attached at two ends - that is, if one computer is disconnected on either
# end of the cable, then there will be a failure. So each computer is examined
# to see if it connects to another problem computer, and then if so, the failure
# point is counted once. If there is a bypass cable (e.g. both computers are
# connected to a third computer, so there is no failure if either is
# disconnected from the other, but they occur at a network bottleneck meaning
# that all cables from a computer being disconnected would result in a failure),
# we account for that case by checking if the problem computers are connected
# to a third computer, which would eliminate the problem of the single point
# of failure but is a corner case since we looked at which computers cause
# problems when all cables are disconnected from them.

# The resulting algorithm should take O(n^2) because we look at each computer
# once when it is disconnected and then do a BFS to check connectivity, which
# takes linear time. So n computers times with n search time each yields
# O(n^2). Usually can't do much better than that with an adjacency matrix,
# anyway!


def singlePointOfFailure(connections):
    size = len(connections)
    total = 0
    if size == 1:
        return total

    # print(connections)
    cuttable_nodes = set()
    cut_segments = {}

    single_edges = set()
    while anySingleEdges(connections):
        for i, item in enumerate(connections):
            # add case for singly-connected nodes
            # just cut it here!
            if sum(connections[i]) == 1:
                connections = remove_node(i, connections)
                total += 1
                single_edges.add(i)

    print(connections)
    # print(single_edges)
    # remove single edges here!
    connections = remove_empty_nodes(connections, single_edges)
    # corner case where there are no nodes left!
    if len(connections) == 1:
        return total
    for i, item in enumerate(connections):
        # print(i, connections)
        if i in single_edges:
            continue

        test_graph = remove_node(i, connections)
        # print(test_graph)

        if i == 0:
            [truth, vals] = adjacency_matrix_BFS(1, test_graph)
            if not truth:
                # total += sum(item)
                # print(test_graph)
                cuttable_nodes.add(i)
                cut_segments[i] = vals
                print("added 0")
        else:
            [truth, vals] = adjacency_matrix_BFS(0, test_graph)
            if not truth:
                # total += sum(item)
                cuttable_nodes.add(i)
                cut_segments[i] = vals
                print(i, test_graph)
                print("added", i)
    print(cuttable_nodes)
    # process how to find the nodes that are centrally located (no redundant cuts)
    added_nodes = set()
    size = len(connections)
    for item in cuttable_nodes:
        for i in range(size):
            # test that there are no other connections between the items first
            a = []
            if i in cuttable_nodes and i not in added_nodes:
                for l in range(size):
                    if l in cuttable_nodes:
                        continue
                    a.append((connections[item][l] == 1 and connections[i][l] == 1))
                print(item, i, a)
                if not any(a):
                    total += connections[item][i]

        added_nodes.add(item)

    return total


def anySingleEdges(adj_matrix):
    for item in adj_matrix:
        if sum(item) == 1:
            return True

    return False


def remove_empty_nodes(adj_matrix, nodes):
    if len(nodes) == 0:
        return adj_matrix

    removals = list(nodes)
    print(removals)
    removals.sort()
    removals.reverse()
    for item in removals:
        for i, node in enumerate(adj_matrix):
            if i == item:
                continue
            else:
                adj_matrix[i].pop(item)
        adj_matrix.pop(item)

    print(adj_matrix)
    return adj_matrix


def remove_node(node, adj_matrix):
    size = len(adj_matrix)
    indices = set()
    for i, a in enumerate(adj_matrix[node]):
        if a == 1:
            indices.add(i)

    output = []
    for i, item in enumerate(adj_matrix):
        if i == node:
            this_row = [0 for l in range(size)]
        else:
            this_row = [a if (not l == node) else 0 for l, a in enumerate(item)]
        output.append(this_row)

    return output


# determine if the graph described is connected or not!
def adjacency_matrix_BFS(node, adj_matrix):
    seen = set()
    seen.add(node)
    queue = [i for i, a in enumerate(adj_matrix[node]) if a == 1]
    while queue:
        curr_node = queue.pop(0)
        seen.add(curr_node)
        new_items = [
            i for i, a in enumerate(adj_matrix[curr_node]) if a == 1 and not i in seen
        ]
        queue.extend(new_items)

    if len(adj_matrix) == len(seen) + 1:
        return [True, seen]
    else:
        return [False, seen]

    # older, erroneous code!
    # possible_cuts = [True if sum(a)==1 else False for a in connections]
    # if(not any(possible_cuts)):
    #     return 0
    # else:
    #     indices = [i for i in range(len(connections)) if possible_cuts[i]==True]
    #     if(len(connections)>2):
    #         num_failure_points = len(indices)
    #     elif(len(connections)==2 and len(indices)!=0):
    #         num_failure_points = 1
    #     revised_connections = []
    #     print(indices, num_failure_points)
    #     for i, node in enumerate(connections):
    #         if(i not in indices):
    #             node_update = [0 if i in indices else a for i, a in enumerate(node)]
    #         else:
    #             node_update = [0 for a in node]
    #         revised_connections.append(node_update)

    #     return num_failure_points + singlePointOfFailure(revised_connections)


connections = [
    [0, 1, 1, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
]

test8 = [
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]


print(singlePointOfFailure(test8))


# from online

# def singlePointOfFailure(connections):
#     size = len(connections)
#     total = 0
#     if(size==1):
#         return total
#     cuttable_nodes = set()
#     cut_segments = {}
#     single_edges = set()
#     while(anySingleEdges(connections)):
#         for i, item in enumerate(connections):
#             #add case for singly-connected nodes
#             #just cut it here!
#             if(sum(connections[i])==1):
#                 connections = remove_node(i, connections)
#                 total+=1
#                 single_edges.add(i)
#
#
#     for i, item in enumerate(connections):
#         if(i in single_edges):
#             continue
#
#         test_graph = remove_node(i, connections)
#
#         if(i==0):
#             if(not adjacency_matrix_BFS(1, test_graph, single_edges)):
#                 # total += sum(item)
#                 # print(test_graph)
#                 cuttable_nodes.add(i)
#         else:
#             if(not adjacency_matrix_BFS(0, test_graph, single_edges)):
#                 # total += sum(item)
#                 cuttable_nodes.add(i)
#     print(cuttable_nodes)
#     #process how to find the nodes that are centrally located (no redundant cuts)
#     added_nodes = set()
#     for item in cuttable_nodes:
#         for i in range(size):
#             #test that there are no other connections between the items first
#             a = []
#             if(i in cuttable_nodes and i not in added_nodes):
#                 for l in range(size):
#                     if l in cuttable_nodes:
#                         continue
#                     a.append((connections[item][l]==1 and connections[i][l]==1))
#                 print(item, i, a)
#                 if(not any(a)):
#                     total += connections[item][i]
#
#         added_nodes.add(item)
#
#     return total
#
# def anySingleEdges(adj_matrix):
#     for item in adj_matrix:
#         if sum(item)==1:
#             return True
#
#     return False
#
#
# def remove_node(node, adj_matrix):
#     size = len(adj_matrix)
#     indices = set()
#     for i, a in enumerate(adj_matrix[node]):
#         if a==1:
#             indices.add(i)
#
#     output = []
#     for i, item in enumerate(adj_matrix):
#         if(i==node):
#             this_row = [0 for l in range(size)]
#         else:
#             this_row = [a if(not l==node) else 0 for l, a in enumerate(item)]
#         output.append(this_row)
#
#     return output
#
#
#
# #determine if the graph described is connected or not!
# def adjacency_matrix_BFS(node, adj_matrix, single_edges):
#     seen = single_edges.copy()
#     seen.add(node)
#     queue = [i for i, a in enumerate(adj_matrix[node]) if a==1]
#     while(queue):
#         curr_node = queue.pop(0)
#         seen.add(curr_node)
#         new_items = [i for i, a in enumerate(adj_matrix[curr_node]) if a==1 and not i in seen]
#         queue.extend(new_items)
#
#     if(len(adj_matrix)==len(seen)+1):
#         return [True, seen]
#     else:
#         return [False, seen]

# older, erroneous code!
# possible_cuts = [True if sum(a)==1 else False for a in connections]
# if(not any(possible_cuts)):
#     return 0
# else:
#     indices = [i for i in range(len(connections)) if possible_cuts[i]==True]
#     if(len(connections)>2):
#         num_failure_points = len(indices)
#     elif(len(connections)==2 and len(indices)!=0):
#         num_failure_points = 1
#     revised_connections = []
#     print(indices, num_failure_points)
#     for i, node in enumerate(connections):
#         if(i not in indices):
#             node_update = [0 if i in indices else a for i, a in enumerate(node)]
#         else:
#             node_update = [0 for a in node]
#         revised_connections.append(node_update)

#     return num_failure_points + singlePointOfFailure(revised_connections)

#def smallestMultiple(l, r):
#    for i in range(1,8**7):
#        s = True
#        for j in range(l, r+1):
#            if i%j!=0:
#                s = False
#        if s:
#            return i

def smallestMultiple(l ,r):
    for i in range(1, 16):
        for j in range(l, r+1):
            while True:
                if i % j != 0:
                    break
            return i
def drawRectangle(canvas, r):
    x, y, x1, y1 = r
    canvas[x][y], canvas[x][y1 + y], canvas[x1][y], canvas[x1][y + y1] = ["*"] * 4
    for j in range(y + 1, y + y1):
        canvas[x][j] = "|"
        canvas[x1][j] = "|"
    return canvas


canvas = [
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b"],
]
rectangle = [1, 1, 4, 3]
print(drawRectangle(canvas, rectangle))

def countPalindromes(s):
    """
    countPalindromes(s) takes in a string s and returns the number of palindrome in the string
    :param s: a string
    :return: number of palindrome sub strings
    """
    tot_pal = len(s)
    for i in range(len(s)):
        tot_pal += helper(s, i, i + 1)
        tot_pal += helper(s, i - 1, i + 1)
    return tot_pal


def helper(s, l, r):
    tot = 0
    while (l >= 0) and (r < len(s)) and (s[l] == s[r]):
        tot += 1
        l -= 1
        r += 1
    return tot


print(countPalindromes("aaa"))

def reverseInParentheses(s):
    """
    takes in a string that has substrings inside Parentheses, return a string with all substrings inside the Parentheses
    reversed
    """
    stack = []
    for i in s:
        if i == ")":
            ind = len(stack) - 1
            while stack[ind] != "(":
                ind -= 1
            stack[ind : len(stack) + 1] = stack[ind : len(stack) + 1][::-1]
            stack.pop()
        else:
            stack.append(i)
    return "".join(stack)


print(reverse_in_bracts("abc(klm(nz))"))

def boxBlur(image):
    out = []
    for i in range(len(image) - 2):
        out.append(
            [
                (
                    sum(image[i][j : j + 3])
                    + sum(image[i + 1][j : j + 3])
                    + sum(image[i + 2][j : j + 3])
                )
                // 9
                for j in range(len(image[i]) - 2)
            ]
        )
    return out


image = [[7, 4, 0, 1], [5, 6, 2, 2], [6, 10, 7, 8], [1, 4, 2, 0]]
print(boxBlur(image))

def twoSum(nums, target):
    """
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    """
    h = {}
    for i, v in enumerate(nums):
        if v in h:
            return [h[v], i]
        else:
            rem = target - v
            h[rem] = i


nums = [2, 7, 11, 15]
target = 9
print(twoSum(nums, target))

"""
find the smallest substring that contains all of the distinct chars of the string
"""


def shortestSubstring(s):
    diff_chars, start, big = len(set(s)), 0, len(s)
    end = diff_chars
    while end <= len(s):
        curr = len(set(s[start:end]))
        if curr == diff_chars:
            if end - start < big:
                big = end - start
            start += 1
        else:
            end += 1
    return big


print(shortestSubstring("abbddccabd"))

def minX(arr):
    """
    given an arr, get the min number that can keep the running sum greater than or equal to 1
    """
    m = min(arr)
    if m > 0:
        return (m * -1) + 1
    else:
        m = (m * -1) + 1
    running_sum = m
    for val in arr:
        if running_sum + val >= 1:
            running_sum += val
        else:
            m += 1 - (running_sum + val)
            running_sum = 1
    return m


arr = [-5, -2, -4]
print(minX(arr))

import re


def minimumOnStack(operations):
    l = []
    out = []
    for i in operations:
        if "push" in i:
            l.append(int(i[i.index(" ") + 1 :]))
        elif "pop" in i:
            l.pop()
        else:
            out.append(min(l))
    return out


operations = [
    "push 10",
    "min",
    "push 5",
    "min",
    "push 8",
    "min",
    "pop",
    "min",
    "pop",
    "min",
]
print(minimumOnStack(operations))

def areFollowingPatterns(strings, patterns):
    d = {}
    for ele in range(len(strings)):
        if d.get(strings[ele]):
            if d[strings[ele]] != patterns[ele]:
                return False
        elif patterns[ele] in d.values():
            return False
        else:
            d[strings[ele]] = patterns[ele]
    return True


strings = ["cat", "dog", "doggy"]
patterns = ["a", "b", "b"]

print(areFollowingPatterns(strings, patterns))

import itertools as it


def letter_combinations(digits):
    m = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }

    possibilities = [m[x] for x in digits if x not in ["0", "1"]]
    # using cartesian product
    return ["".join(x) for x in it.product(*possibilities) if x]


print(letter_combinations("42"))

def sudoku2(grid):
    """
    check if sudoku board is true by checking that the same number didn't appear more than one in its row, col,
    surrounding 3*3 sub matrix
    """
    for i in range(9):
        for j in range(9):
            if i % 3 == 0 and j % 3 == 0:
                l = [
                    grid[s_i][s_j]
                    for s_i in range(i, i + 3)
                    for s_j in range(j, j + 3)
                    if grid[s_i][s_j].isdigit()
                ]
                if len(set(l)) != len(l):
                    return False
            if grid[i][j].isdigit():
                if grid[i].count(grid[i][j]) > 1:
                    return False
                if list(zip(*grid))[j].count(grid[i][j]) > 1:
                    return False
    return True


grid = [
    [".", ".", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "8", ".", ".", ".", "3", "."],
    [".", "5", ".", ".", "2", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", ".", "4", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "7"],
    [".", "1", ".", ".", ".", ".", ".", ".", "."],
    ["2", "4", ".", ".", ".", ".", "9", ".", "."],
]
print(sudoku2(grid))

def almostIncreasingSequence(sequence):
    for ind in range(len(sequence) - 1):
        if sequence[ind] < sequence[ind + 1]:
            continue
        else:
            if sequence.count(sequence[ind + 1]) > 1:
                sequence.pop(ind + 1)
            else:
                sequence.pop(ind + 1)
        return sequence == sorted(list(set(sequence)))
    return True


print(almostIncreasingSequence([50, 60, 70, 10, 20]))

def sensorsDifferenceSum(sensor_1, sensor_2):
    """
    given two lists contains the reading of two sensors for the same place, give the total difference between
    there elements
    """
    if len(sensor_1) == 0 or len(sensor_2) == 0:
        return 0
    return abs(sensor_1[0] - sensor_2[0]) + sensorsDifferenceSum(
        sensor_1[1:], sensor_2[1:]
    )


print(sensorsDifferenceSum([1, -2, 4, 10], [2, 5, 3, 10]))

def matrix_elements_sum(matrix):
    hunted = []
    total = 0
    ran = len(matrix[0])
    for row in matrix:
        for no in range(ran):
            if no in hunted:
                continue
            elif row[no] == 0:
                hunted.append(no)
            else:
                total += row[no]
    return total


print(matrix_elements_sum([[0, 1, 5, 1], [0, 2, 0, 3], [0, 0, 1, 1]]))

# def sortByHeight(a):
#     for i in range(len(a)):
#         if a[i] != -1:
#             for j in range(i+1, len(a)):
#                 if a[j]!=-1 and a[j]<a[i]:
#                     a[i], a[j] = a[j], a[i]
#     return a


# def sortByHeight(a):
#     b = sorted(a)[a.count(-1):]
#     return [x if x == -1 else b.pop(0) for x in a]
#
# print(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))

# o(log(n)) solution
def swapDiagonals(matrix):
    j = len(matrix) - 1
    for i in range(len(matrix) // 2):
        matrix[i][i], matrix[i][j - i] = matrix[i][j - i], matrix[i][i]
        matrix[j - i][j - i], matrix[j - i][i] = matrix[j - i][i], matrix[j - i][j - i]
    return matrix


matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

print(swapDiagonals(matrix))

def binarySearch(arr, searchValue):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] < searchValue:
            low = mid + 1
        elif arr[mid] > searchValue:
            high = mid - 1
        else:
            return True

    return False


def binarySearchRec(arr, search_value):
    if len(arr) == 0:
        return False

def check(first, second, target):
    while first < target:
        first += second
    return first


def isPossible(a, b, c, d):
    # Write your code here
    if c < d:
        a = check(a, b, c)
        b = check(b, a, d)
    else:
        b = check(b, a, d)
        a = check(a, b, c)
    if a != c or b != d:
        return "No"
    return "Yes"


print(isPossible(1, 4, 5, 9))

def isLucky(n):
    """
    isLucky takes in an integer and return True if the sum of its right half == sum of the
     right half
    :param n:
    :return:
    """
    # l = list(map(int, str(n)))
    # return sum(l[0:len(l) // 2]) == sum(l[len(l) // 2:])

    s = str(n)
    return sum(map(int, s[: len(s) // 2])) == sum(map(int, s[len(s) // 2 : len(s)]))


n = 1230
print(isLucky(n))

def subarraySum(nums, k):
    """
    Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
    """
    count = 0
    s = 0
    for i in range(len(nums)):
        s += nums[i]
        if s % k == 0:
            count += 1
    return count


nums = [1, 2, 3]
k = 3
print(subarraySum(nums, k))

def beautifulText(inputString, l, r):
    for w in range(l, r + 1):
        i = w
        while i < len(inputString):
            if inputString[i] != " ":
                break
            i += w + 1
        if i == len(inputString):
            return True
    return False


s = "Look at this example of a correct text"
print(beautifulText(s, 5, 15))

"""
Given a grid of 1's and 0's, determine the number of adjacent 1's (adjacent means next to it from up, down, left,
right but not diagonally).
"""

from collections import defaultdict


def onesGroups(grid, quires):
    # global tot
    ans = defaultdict(int)

    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == 1:
                # tot = 0
                tot = dfs(grid, i, j, 0)
                ans[tot] += 1
    for i in range(len(quires)):
        if quires[i] in ans:
            quires[i] = ans[quires[i]]
        else:
            quires[i] = 0
    return quires


def dfs(grid, i, j, tot):
    # using global tot, to not be considered in the recursive stack
    # global tot
    if (
        (i < 0)
        or (j < 0)
        or (j >= len(grid[0]))
        or (i >= len(grid))
        or (grid[i][j] == 0)
    ):
        return tot
    if grid[i][j] == 1:
        tot += 1
    grid[i][j] = 0
    tot = dfs(grid, i + 1, j, tot)  # down
    tot = dfs(grid, i - 1, j, tot)  # up
    tot = dfs(grid, i, j + 1, tot)  # right
    tot = dfs(grid, i, j - 1, tot)  # left
    return tot


grid = [[1, 1, 1, 0, 0], [1, 1, 1, 0, 1], [0, 0, 0, 1, 0]]
quires = [1, 2, 6]
print(onesGroups(grid, quires))

# def findProfession(level, pos):
#     if level == 1:
#         return "Engineer"
#     tot_nodes = 1
#     for i in range(1, level - 1):
#         tot_nodes += i*2
#     pos -= tot_nodes
#     while pos not in range(1, 4):
#         pos = (pos - 1)//4
#         pos += 1
#     if pos == 1 or pos == 4:
#
#
#
#
# print(findProfession(3, 12))
#
#

# def reverse(x):
#     if -2147483648 <= x <= 2147483647:
#         x = str(x)
#         if x[0] != "-":
#             return int(x[::-1])
#         else:
#             return int(x[0] + x[1:][::-1])
#     else:
#         return 0
#
#
# print(reverse(-2147483412))
#


s = set()

s.add(123)
s.add(123)
print(s)

def fileNaming(names):
    for i in range(1, len(names)):
        temp = names[i]
        counter = 1
        while temp in names[0:i]:
            temp = f"{names[i]}({counter})"
            counter += 1
        names[i] = temp
    return names


print(fileNaming(["doc", "doc", "image", "doc(1)", "doc"]))

from calendar import weekday as w


def regularMonths(c):
    m, y = map(int, c.split("-"))
    while y:
        for m in range(m + 1, 12 + 1):
            if w(y, m, 1) == 0:
                return f"{str(m).zfill(2)}-{y}"
        m, y = 0, y + 1


print(regularMonths("07-2024"))

# def extractMatrixColumn(matrix, column):
#     return list(list(zip(*matrix))[column])


def extractMatrixColumn(matrix, col):
    return [matrix[i][col] for i in range(len(matrix))]


matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]]

print(extractMatrixColumn(matrix, 2))

def rotateImage(a):
    if a == None:
        return None
    a.reverse()
    for i in range(len(a)):
        for j in range(i):
            a[i][j], a[j][i] = a[j][i], a[i][j]
    return a


mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

print(rotateImage(mat))

def amendTheSentence(s):
    out_s = s[0].lower()
    for char in s[1:]:
        if char.islower():
            out_s += char
        else:
            out_s += " " + char.lower()
    return out_s


s = "AHMm"
print(amendTheSentence(s))

import re


def isSentenceCorrect(sentence):
    pattern = "^[A-Z][^?!.]*[?.!]$"
    return re.match(pattern, sentence) is not None


print(isSentenceCorrect("This is an example of *correct* sentence!"))

import re


def nthNumber(s, n):
    pattern = rf"([0-9]+){n}"
    return re.match(pattern, s).group(1)


s = "8one 003number 201numbers li-000233le number4443"
n = 4
print(nthNumber(s, n))

def rodCutting(n, v):
    a = v
    for _ in a:
        a = list(map(max, a, (a[0] + y for y in v)))
        x = a.pop(0)
    return x


n = 4
v = [0, 2, 4, 7, 7]
print(rodCutting(n, v))

# def jobOffers(scores, lowerLimits, upperLimits):
#     for l, u in zip(lowerLimits, upperLimits):
#        yield len([1 for score in scores if l <= score <= u])


# get the index of the first number greater than or equals to the lower
def findLower(scores, len_score, v):
    l = 0
    u = len_score - 1
    while l <= u:
        mid = (l + u) // 2
        if scores[mid] >= v:
            u = mid - 1
        else:
            l = mid + 1
    return l


# get the index of the last element that is less than or equal to v
def findUpper(scores, len_score, v):
    l = 0
    u = len_score - 1
    while l <= u:
        mid = (l + u) // 2
        if scores[mid] > v:
            u = mid - 1
        else:
            l = mid + 1
    return u


def jobOffers(scores, lowerLimits, upperLimits):
    scores.sort()
    n = len(scores)
    for index in range(len(lowerLimits)):
        yield findUpper(scores, n, upperLimits[index]) - findLower(
            scores, n, lowerLimits[index]
        ) + 1


for i in jobOffers([1, 2, 2, 3, 5, 6, 7], [1], [7]):
    print(i)

def powerOfTwo(n):
    if n < 1:
        return []
    l = [1]
    i = 1
    while i + i <= n:
        i += i
        l.append(i)
    return l


print(powerOfTwo(10))

from itertools import permutations


def stringPermutations(s):
    return sorted(list({"".join(itm) for itm in permutations(s)}))


print(stringPermutations("CDA"))

# def kLargestNumber(arr, k):
#     m = 0
#     no = 0
#     for i in arr:
#
#
#
#
# k = 3
# arr = [2, 5, 7, 3, 4, 1, 6]
# print(kLargestNumber(arr, k))
#

def rec_bin(n):
    if n == 0:
        return ""

    else:
        return str(n % 2) + rec_bin(n // 2)


print(rec_bin(20))

print(bin(20)[2:])

import re


def swapAdjacentWords(s):
    return re.sub(r"(\w+) (\w+)", r"\2 \1", s)


s = "How are you guys?"
print(swapAdjacentWords(s))

print(1000000 % 6)


# """
# given a string, find and return the len of the max sub_str you can create using two elements of the string only,
# with the condition that any element you choose should alter:
# Ex: aababe
# here a is not a valid char because it doesn't alter, while b and e are valid.
# Ans: 3
# """
#


import re
from collections import Counter


def alternate(s):
    d = Counter(s)
    i = 0
    # validate that each letter is not duplicate next to itself
    while i < len(s):
        if s[i] in d:
            if i + 1 < len(s) and s[i + 1] == s[i]:
                del d[s[i]]
        i += 1
    occ = d.values()
    if len(occ) < 2:
        return 0
    m_1 = max(occ)
    m_2 = 0
    ind = True
    for v in occ:
        if ind and v == m_1:
            ind = False
            continue
        elif m_2 < v <= m_1:
            m_2 = v
    return m_1 + m_2


print(alternate("asdcbsdcagfsdbgdfanfghbsfdab"))

# # iterative solution in O(n) time and O(1) space
# def fib(N):
#     """
#     get the Nth fib number
#     """
#     if N <= 1:
#         return N
#     a, b = 0, 1
#     for _ in range(N - 1):
#         a, b = b, a + b
#     return b


# # recursive solution in o(2^n) time
# def fib(N):
#     if N <= 2:
#         f = 1
#     else:
#         f = fib(N - 1) + fib(N - 2)
#     return f


# Dynamic programing (memoized DP)
def fib(N):
    """
    Avoid redoing the something over and over and store any Fib in a dictionary
    to not do it again
    Time: o(n)
    """
    memo = {}
    if N in memo:
        return memo[N]
    if N <= 2:
        f = 1
    else:
        f = fib(N - 1) + fib(N - 2)
    memo[N] = f
    return f


print(fib(5))

def stepPerms(n):
    """
    given n number of stairs, determine the total number of ways to climb the
    stairs if you can take 1, 2, or 3 steps at a time
    """
    if n < 0:
        return 0
    if n == 0:
        return 1
    else:
        return stepPerms(n - 1) + stepPerms(n - 2) + stepPerms(n - 3)


memo = {}


def stepPermsDP(n):
    """
    given n number of stairs, determine the total number of ways to climb the
    stairs if you can take 1, 2, or 3 steps at a time
    """
    if n in memo:
        return memo[n]
    if n < 0:
        return 0
    if n == 0:
        return 1
    else:
        f = stepPerms(n - 1) + stepPerms(n - 2) + stepPerms(n - 3)
    memo[n] = f
    return f


print(stepPermsDP(20))
print(stepPerms(20))

from collections import Counter


def getLargestString(s, k):
    d = Counter(s)
    ord_s = sorted(d.keys(), reverse=True)
    out = ""
    l_p = 0
    while l_p < len(ord_s):
        if d[ord_s[l_p]] < k:
            out += ord_s[l_p] * d[ord_s[l_p]]
            l_p += 1
            continue
        else:
            out += ord_s[l_p] * k
            d[ord_s[l_p]] -= k
            if d[ord_s[l_p]] > 0:
                if len(ord_s) - l_p > 0 and d[ord_s[l_p + 1]] > 0:
                    out += ord_s[l_p + 1]
                    d[ord_s[l_p + 1]] -= 1
                else:
                    break
    return out


s = "xxzzxx"
print(getLargestString(s, 4))

def island(matrix):
    """
    given a two by two matrix, get the number of islands in it, an island is a series of 1's connected in a
    row or a column
    """
    if (not matrix) or len(matrix) == 0:
        return 0
    number_of_islands = 0
    l = [True] * len(matrix[0])
    for i in range(len(matrix)):
        ind = True
        for j in range(len(matrix[0])):
            if matrix[i][j] == 0:
                l[j] = False
                ind = False
        if ind:
            number_of_islands += 1
    return number_of_islands + sum(l)


print(island([[1, 0, 1], [1, 1, 1]]))

A, = numpy.r_[eval(dir()[0])]
A[A > 0] = sorted(A[A > 0])
return A

def sortByHeight(a):
    heights = []

    # Store all the heights in a list
    for i in range(len(a)):
        if a[i] != -1:
            heights.append(a[i])

    # Sort the heights
    heights = sorted(heights)

    # Replace the heights in the original list
    j = 0
    for i in range(len(a)):
        if a[i] != -1:
            a[i] = heights[j]
            j += 1

    return a

def launchSequenceChecker(systemNames, stepNumbers):
    
from itertools import permutations


def differ_by_one_char(str1, str2):
    """Function to determine if the hamming distance between two strings is 1
    
    Args:
        str1(string): First string.
        str2(string): Second string.

    Returns:
        Boolean indicating if hamming distance is equal to 1.

    Raises:
    
    """
    difference_count = 0
    for i in range(len(str1)):
        if str1[i] != str2[i]:
            difference_count += 1
    return False if difference_count != 1 else True


def stringsRearrangement(inputArray):
    """Function to check if possible to rearrange order of elements where hamming distance is 1
    
    Args:
        inputArray(string): List containing equal-length strings.

    Returns:
        Boolean indicating if it is possible or not.

    Raises:
    
    """
    all_permutation_tuples = permutations(inputArray)

    for permutation in all_permutation_tuples:
        flag = True
        for i in range(len(permutation) - 1):
            if not differ_by_one_char(permutation[i], permutation[i + 1]):
                flag = False
                break
        if flag:
            return True
    return False

def sudoku(grid):
	"""
	Return boolean indicating if Sudoku is valid.
	"""
    seen = set()
    # Iterate through grid
    for i in range(len(grid)):
        for j in range(len(grid[i])):
            current_value = grid[i][j]
            if current_value != '.':
                if (str(current_value) + ' found in row ' + str(i)) in seen or (str(current_value) + ' found in column ' + str(j)) in seen or (str(current_value) + ' found in subgrid ' + str(i//3) + '-' + str(j//3)) in seen:
                    return False
                seen.add(str(current_value) + ' found in row ' + str(i))
                seen.add(str(current_value) + ' found in column ' + str(j))
                seen.add(str(current_value) + ' found in subgrid ' + str(i//3) + '-' + str(j//3))
    return True

def line_is_valid(row):

    tmp_dict = {}
    valid = True

    if len(row) > 0:
        # print(row)
        for r in row:
            if r in tmp_dict:
                tmp_dict[r] += 1
            else:
                tmp_dict[r] = 1

        if tmp_dict[max(tmp_dict, key=tmp_dict.get)] > 1:
            valid = False

    return valid


def grid_is_valid(grid):

    valid = True

    for i in range(len(grid)):
        row = [int(x) for x in grid[i] if x != "."]
        # print(row)
        valid = line_is_valid(row)
        if not valid:
            break

    return valid


def sudoku2(grid):

    result = False

    # check rows:
    rows_valid = grid_is_valid(grid)

    # check columns:
    col_valid = grid_is_valid(list(zip(*grid)))

    # check 3x3 grids:
    grid3x3_valid = True
    for i in range(0, len(grid), 3):

        if not grid3x3_valid:
            break

        sub_mat = grid[i : i + 3]

        for j in range(0, len(grid[0]), 3):

            tmp_list = [x[j : j + 3] for x in sub_mat]
            # print(tmp_list)
            tmp_list = [
                tmp_list[k][l]
                for k in range(len(tmp_list))
                for l in range(len(tmp_list[k]))
            ]

            row = [int(x) for x in tmp_list if x != "."]
            grid3x3_valid = line_is_valid(row)
            # print(grid3x3_valid)

            if not grid3x3_valid:
                break

    if rows_valid and col_valid and grid3x3_valid:
        result = True

    return result

sulkyBoy = lambda x: not x
def sumOfSquares(n):
    return sum([x**2 for x in range(1, n+1)])
#def sumOfTheAngles(n):
#    return (n - 2) * 180

sumOfTheAngles = lambda n: (n - 2) * 180

#n = eval(dir()[0])
#return (n - 2) * 180
def sumOfTwo(a, b, v):
    b = set(b)
    return any(v - i in b for i in a)

#def sumUpDigits(s):
#    return sum(int(i) for i in s if i.isdigit())

eval(lambda s: sum(int(i) for i in s if i.isdigit()))
def sumUpNumbers(inputString):
	"""
	Return the sum of the numbers in the inputString
	
	Time Complexity: O(n)
	Space Complexity: O(1)
	"""
    runningsum, number = 0, ''
    for i in range(len(inputString)):
        if inputString[i].isdigit():
            number += inputString[i]
            if i == len(inputString) - 1:
                runningsum += int(number)
                number = ''
        elif number != '' and not inputString[i].isdigit():
            runningsum += int(number)
            number = ''
    return runningsum
def tennisSet(score1, score2):
    return (
        True
        if score1 == 6
        and score2 < 5
        or score1 < 5
        and score2 == 6
        or score1 == 7
        and 5 <= score2 < 7
        or score2 == 7
        and 5 <= score1 < 7
        else False
    )

import itertools as it

possibilities = ["ab", "cd"]
for i in it.product(*possibilities):
    if i:
        print("".join(i))

import unittest
from ddt import ddt, data, unpack

from source import add as func


@ddt
class TestAdd(unittest.TestCase):
    @data(
        (6, 5, 11),
        (0, 1000, 1000),
        (-2, 4, 2),
        (-100, 100, 0),
        (-100, 89, -11),
        (-1000, -999, -1999),
    )
    @unpack
    def test_add_positive(self, param1, param2, result) -> None:
        self.assertEqual(func.add(param1, param2), result)

    @data(("a", 5, 0), (None, None, 0), (-2, 4, 2), (1001, 67, 0), (-5, -4352, 0))
    @unpack
    def test_add_negative(self, param1, param2, result) -> None:
        if param1 is None and param2 is None:
            self.assertEqual(func.add(), result)
        else:
            self.assertEqual(func.add(param1, param2), result)


if __name__ == "__main__":
    unittest.main()

import unittest
from ddt import ddt, data, unpack

from source import adjacent_elements_product as func


@ddt
class TestAdjacentElementsProduct(unittest.TestCase):
    @data(
        ([3, 6, -2, -5, 7, 3], 21),
        ([-2, -2], 4),
        ([5, 1, 2, 3, 1, 4], 6),
        ([2, 3, 0], 6),
        ([9, 5, 10, 2, 24, -1, -48], 50),
        ([10, 13, 5, 1000], 5000),
        ([45, 3, -1, -1000], 1000),
    )
    @unpack
    def test_positive(self, input_array, result) -> None:
        self.assertEqual(func.adjacent_elements_product(input_array), result)

    @data(
        ([1], 0),
        (None, 0),
        ([6, 8, 0, 23, -5, -9, 10, 9, 45, 46, 11], 0),
        ([1001, 8, 56], 0),
        ([-1002, 5, 7, 56], 0),
    )
    @unpack
    def test_negative(self, input_array, result) -> None:
        if input_array is None:
            self.assertEqual(func.adjacent_elements_product(), result)
        else:
            self.assertEqual(func.adjacent_elements_product(input_array), result)


if __name__ == "__main__":
    unittest.main()

import unittest
from ddt import ddt, data, unpack

from source import century_from_year as func


@ddt
class TestCenturyFromYear(unittest.TestCase):
    @data((1988, 20), (1, 1), (2001, 21), (2000, 20))
    @unpack
    def test_positive(self, year, century) -> None:
        self.assertEqual(func.century_from_year(year), century)

    @data(("abcd", 0), (None, 0), (0, 0), (2010, 0), (-5, 0))
    @unpack
    def test_negative(self, year, century) -> None:
        if year is None:
            self.assertEqual(func.century_from_year(), century)
        else:
            self.assertEqual(func.century_from_year(year), century)


if __name__ == "__main__":
    unittest.main()

import unittest
from ddt import ddt, data, unpack

from source import palindrome as func


@ddt
class TestPalindrome(unittest.TestCase):
    @data(
        ("aabaa", True),
        ("abac", False),
        ("c", True),
        ("testmeplease", False),
        ("hlbeeykoqqqokyeeblh", True),
    )
    @unpack
    def test_positive(self, input_string, result) -> None:
        self.assertEqual(func.check_palindrome(input_string), result)

    @data(("", False), (None, False))
    @unpack
    def test_negative(self, input_string, result) -> None:
        if input_string is None:
            self.assertEqual(func.check_palindrome(), result)
        else:
            self.assertEqual(func.check_palindrome(input_string), result)


if __name__ == "__main__":
    unittest.main()

import unittest
from ddt import ddt, data, unpack

from source import shape_area as func


@ddt
class TestShapeArea(unittest.TestCase):
    @data((2, 5), (3, 13), (1, 1), (5, 41), (7000, 97986001))
    @unpack
    def test_positive(self, number, result) -> None:
        self.assertEqual(func.shape_area(number), result)

    @data((0, 0), (None, 0), (10001, 0), (-10, 0), ("a", 0))
    @unpack
    def test_negative(self, number, result) -> None:
        if number is None:
            self.assertEqual(func.shape_area(), result)
        else:
            self.assertEqual(func.shape_area(number), result)


if __name__ == "__main__":
    unittest.main()

# Find the number of trees that can be cut down from a line of trees, where
# each consecutive tree must be the same height or taller than the one
# before it!


# function to tell if the tree line meets the condition described
def testTreeLine(A):
    if A == sorted(A):
        return True
    else:
        return False


# check if solution is possible
def impossible(A):
    maxIndex = A.index(max(A))
    maxBefore = max(A[0:maxIndex])
    minAfter = min(A[maxIndex:])
    if A[maxIndex] != A[len(A) - 1]:
        if minAfter <= (maxBefore - 2) and len(A[maxIndex + 1 :]) > 1:
            return True
        else:
            return False


# function to see how many trees can be cut down
def numCutTrees(A):
    n = 0
    # check case where no solutions possible
    # for faster result
    if impossible(A):
        return n

    for l in range(len(A)):
        elem = A.pop(l)
        if testTreeLine(A):
            n = n + 1
        A.insert(l, elem)

    return n


N = [1, 2, 3, 4, 4]  # 5
L = [1, 4, 2, 3]  # 1
C = [1, 3, 5, 3]  # 2
D = [1, 4, 3, 5, 3]  # 0
E = [1, 2, 3, 4, 1]  # 1

print(numCutTrees(N))
print(numCutTrees(L))
print(numCutTrees(C))
print(numCutTrees(D))
print(numCutTrees(E))

# 52
# def triangleExistence(t):
#     t.sort()
#     return t[0] + t[1] > t[2]

# 46
# triangleExistence = lambda t: sum(t) - max(t) > max(t)

# 45
# t, = eval(dir()[0])
# 
# t.sort()
# return t[0] + t[1] > t[2]

# 43
# t, = eval(dir()[0])
# return sum(t) - max(t) > max(t)

# 40 
a, b, c = sorted(*eval(dir()[0]))
return a + b > c

# def twoArraysNthElement(array1, array2, n):
#     return sorted(array1 + array2)[n]
#70

# twoArraysNthElement = lambda a, b, n: sorted(a + b)[n]
#46

a, b, n = eval(dir()[0])
return sorted(a + b)[n]
# 40
def validTime(time):
	"""
	Boolean indicating if time is in valid 24hr format
	"""
    tokens = time.split(':')
    hours = int(tokens[0])
    minutes = int(tokens[1])
    return not (hours > 23 or minutes > 59)
def variableName(name):
    if name[0].isdigit():
        return False

    for i in range(len(name)):
        if not name[i].isalnum() and not name[i] == "_":
            return False
    return True

def visitsOnCircularRoad(n, v):
    c = 1
    t = 0
    for i in v :
        t += min(abs(i - c), abs(n - abs(i - c)))
        c = i
    return t

# v = visitsOrder
# n = number of houses
# c = Current position
# t = Time
def zigzags(input):
    input = iter(input)
    stack = None
    try:
        stack = [next(input)]
        while True:
            if len(stack) < 2:
                stack.append(next(input))
            else:
                stack = stack[-2:]
            a, b = stack
            if a == b:
                yield (a,)
                stack = [b]
                continue
            zig = a > b
            while True:
                prev = stack[-1]
                this = next(input)
                if prev == this or zig == (prev > this):
                    break
                stack.append(this)
                zig = not zig
            yield tuple(stack)
            stack.append(this)
    except StopIteration:
        pass
    if stack:
        yield tuple(stack)


def zigzag(input):
    item = max(zigzags(input), key=len)
    print len(item), item

