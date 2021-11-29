def add(param1, param2):
    return param1 + param2


def centuryFromYear(year):
    return ((year - 1) // 100) + 1


def checkPalindrome(inputString):
    return inputString == inputString[::-1]


def adjacentElementsProduct(inputArray):
    max = inputArray[0] * inputArray[1]
    for i in range(len(inputArray) - 1):
        if inputArray[i] * inputArray[i + 1] > max:
            max = inputArray[i] * inputArray[i + 1]
    return max


def shapeArea(n):
    sum = n * 2 - 1
    for i in range(1, (n * 2) - 1, 2):
        sum += i * 2
    return sum


def makeArrayConsecutive2(statues):
    return max(statues) - min(statues) - len(statues) + 1


def almostIncreasingSequence(sequence):
    i = 0
    while i < len(sequence) - 1:
        if not sequence[i] < sequence[i + 1]:
            if increasingSequence(
                sequence[:i] + sequence[i + 1 :]
            ) or increasingSequence(sequence[: i + 1] + sequence[i + 2 :]):
                return True
            else:
                return False
        i += 1
    return True


def increasingSequence(sequence):
    for i in range(len(sequence) - 1):
        if not sequence[i] < sequence[i + 1]:
            return False
    return True


def matrixElementsSum(matrix):
    if len(matrix) > 1:
        for row in range(1, len(matrix)):
            for room in range(len(matrix[row])):
                if matrix[row - 1][room] == 0:
                    matrix[row][room] = 0
    sum = 0
    for row in matrix:
        for room in row:
            sum += room
    return sum


def allLongestStrings(inputArray):
    length = max([len(word) for word in inputArray])
    result = [word for word in inputArray if len(word) == length]
    return result


def commonCharacterCount(s1, s2):
    count = 0
    word2 = list(s2)
    for letter in s1:
        if letter in word2:
            word2.remove(letter)
            count += 1
    return count


def isLucky(n):
    string = str(n)
    top = [int(x) for x in string[: len(string) // 2]]
    bottom = [int(x) for x in string[len(string) // 2 :]]
    return sum(top) == sum(bottom)


def sortByHeight(a):
    treePositions = [x for x in range(len(a)) if a[x] == -1]
    people = sorted([x for x in a if x != -1])
    for tree in treePositions:
        people.insert(tree, -1)
    return people


import re


def reverseParentheses(s):
    while "(" in s:
        match = re.search("\([^()]*\)", s)
        match_string = match.group(0)[1 : len(match.group(0)) - 1]
        reversed_match_string = match_string[::-1]
        s = s[: match.start()] + reversed_match_string + s[match.end() :]
    return s


def alternatingSums(a):
    team1 = sum(a[0::2])
    team2 = sum(a[1::2])
    return [team1, team2]


def addBorder(picture):
    picture = ["*" + string + "*" for string in picture]
    picture = [("*" * len(picture[0]))] + picture + [("*" * len(picture[0]))]
    return picture


def areSimilar(a, b):
    diff = [i for i in range(len(a)) if a[i] != b[i]]
    if len(diff) == 2:
        b[diff[0]], b[diff[1]] = b[diff[1]], b[diff[0]]
    return a == b


def arrayChange(inputArray):
    count = 0
    for i in range(1, len(inputArray)):
        if inputArray[i - 1] >= inputArray[i]:
            difference = inputArray[i - 1] - inputArray[i]
            inputArray[i] += difference + 1
            count += difference + 1
    return count


def palindromeRearranging(inputString):
    inputList = sorted(inputString)
    foundMiddle = False
    while len(inputList) > 1:
        if inputList[0] == inputList[1]:
            del inputList[1]
        elif not foundMiddle:
            foundMiddle = True
        else:
            return False
        del inputList[0]
    return len(inputList) == 0 or not foundMiddle


def areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight):
    sameHands = yourLeft == friendsLeft and yourRight == friendsRight
    differentHands = yourLeft == friendsRight and yourRight == friendsLeft
    return sameHands or differentHands


def arrayMaximalAdjacentDifference(inputArray):
    diffs = []
    for i in range(len(inputArray) - 1):
        diffs.append(abs(inputArray[i] - inputArray[i + 1]))
    return max(diffs)


def isIPv4Address(inputString):
    strings = [string for string in inputString.split(".")]
    for string in strings:
        if not string.isdecimal():
            return False
    nums = [int(num) for num in strings]
    return max(nums) <= 255 and min(nums) >= 0 and len(nums) == 4


def avoidObstacles(inputArray):
    for length in range(2, max(inputArray) + 2):
        done = True
        jump = length
        while jump < (max(inputArray) + length):
            if jump in inputArray:
                done = False
                break
            jump += length
        if done:
            return length


def boxBlur(image):
    outImage = []
    for row in range(1, len(image) - 1):
        line = []
        for pixel in range(1, len(image[row]) - 1):
            total = (
                image[row - 1][pixel - 1]
                + image[row - 1][pixel]
                + image[row - 1][pixel + 1]
                + image[row][pixel - 1]
                + image[row][pixel]
                + image[row][pixel + 1]
                + image[row + 1][pixel - 1]
                + image[row + 1][pixel]
                + image[row + 1][pixel + 1]
            )
            line.append(total // 9)
        outImage.append(line)
    return outImage


def minesweeper(matrix):
    TOP = 0
    BOTTOM = len(matrix) - 1
    LEFT = 0
    RIGHT = len(matrix[0]) - 1

    outMatrix = []
    for row in range(len(matrix)):
        outRow = []
        for cell in range(len(matrix[row])):
            outRow.append(0)
            if row != TOP:
                outRow[cell] += matrix[row - 1][cell]
            if row != BOTTOM:
                outRow[cell] += matrix[row + 1][cell]
            if cell != LEFT:
                outRow[cell] += matrix[row][cell - 1]
            if cell != RIGHT:
                outRow[cell] += matrix[row][cell + 1]
            if row != TOP and cell != LEFT:
                outRow[cell] += matrix[row - 1][cell - 1]
            if row != TOP and cell != RIGHT:
                outRow[cell] += matrix[row - 1][cell + 1]
            if row != BOTTOM and cell != LEFT:
                outRow[cell] += matrix[row + 1][cell - 1]
            if row != BOTTOM and cell != RIGHT:
                outRow[cell] += matrix[row + 1][cell + 1]
        outMatrix.append(outRow)
    return outMatrix


def arrayReplace(inputArray, elemToReplace, substitutionElem):
    return [x if x != elemToReplace else substitutionElem for x in inputArray]


def evenDigitsOnly(n):
    return all(
        (True if digit in ("0", "2", "4", "6", "8") else False for digit in str(n))
    )


def variableName(name):
    return name.replace("_", "").isalnum() and not name[0].isdigit()


def alphabeticShift(inputString):
    return "".join([chr(ord(x) + 1) if x != "z" else "a" for x in inputString])


def chessBoardCellColor(cell1, cell2):
    color1 = ((ord(cell1[0]) - ord("A")) + ord(cell1[1]) - ord("1")) % 2 == 0
    color2 = ((ord(cell2[0]) - ord("A")) + ord(cell2[1]) - ord("1")) % 2 == 0
    return color1 == color2


def circleOfNumbers(n, firstNumber):
    return (firstNumber + (n / 2)) % n


def depositProfit(deposit, rate, threshold):
    year = 0
    while deposit < threshold:
        deposit *= 1 + (rate / 100)
        year += 1
    return year


def absoluteValuesSumMinimization(a):
    sums = {}
    for num in a:
        total = sum([abs(a[i] - num) for i in range(len(a))])
        if total in sums:
            sums[total] = min(num, sums[total])
        else:
            sums[total] = num
        print(sums)
    return sums[min(sums)]


import itertools


def stringsRearrangement(inputArray):
    permutations = itertools.permutations(inputArray)
    for array in permutations:
        if testArrangement(array):
            return True
    return False


def testArrangement(array):
    for i in range(len(array) - 1):
        if sum([a != b for a, b in zip(array[i], array[i + 1])]) != 1:
            return False
    return True


def extractEachKth(inputArray, k):
    return [inputArray[x] for x in range(len(inputArray)) if (x + 1) % k != 0]


def firstDigit(inputString):
    for char in inputString:
        if char.isdigit():
            return char


def differentSymbolsNaive(s):
    return len(set(s))


def arrayMaxConsecutiveSum(inputArray, k):
    sums = [sum(inputArray[:k])]
    for i in range(1, len(inputArray) - k + 1):
        sums.append(sums[i - 1] - inputArray[i - 1] + inputArray[i + k - 1])
    return max(sums)


def growingPlant(upSpeed, downSpeed, desiredHeight):
    height = 0
    days = 1
    height += upSpeed
    while height < desiredHeight:
        days += 1
        height -= downSpeed
        height += upSpeed
    return days


def knapsackLight(value1, weight1, value2, weight2, maxW):
    if weight1 + weight2 <= maxW:
        return value1 + value2
    if weight1 <= maxW and (weight2 > maxW or value1 >= value2):
        return value1
    if weight2 <= maxW and (weight1 > maxW or value2 >= value1):
        return value2
    return 0


def longestDigitsPrefix(inputString):
    for char in range(len(inputString)):
        if not inputString[char].isdigit():
            return inputString[:char]
    return inputString


def digitDegree(n):
    degree = 0
    while len(str(n)) > 1:
        n = sum((int(digit) for digit in str(n)))
        degree += 1
    return degree


def bishopAndPawn(bishop, pawn):
    return abs(ord(bishop[0]) - ord(pawn[0])) == abs(ord(bishop[1]) - ord(pawn[1]))


def isBeautifulString(inputString):
    for letter in range(ord("a"), ord("z")):
        if inputString.count(chr(letter)) < inputString.count(chr(letter + 1)):
            return False
    return True


def findEmailDomain(address):
    return address[address.rfind("@") + 1 :]


def buildPalindrome(st):
    if st == st[::-1]:  # Check for initial palindrome
        return st
    index = 0
    subStr = st[index:]
    while subStr != subStr[::-1]:  # while substring is not a palindrome
        index += 1
        subStr = st[index:]
    return st + st[index - 1 :: -1]


def electionsWinners(votes, k):
    winners = 0
    current_winner = max(votes)
    for candidate in votes:
        if k > 0 and candidate + k > current_winner:
            winners += 1
        if k == 0 and candidate == current_winner and votes.count(candidate) == 1:
            winners += 1
    return winners


def isMAC48Address(inputString):
    hex_chars = (
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
    )
    groups = inputString.split("-")
    if len(groups) != 6:
        return False
    if not all((len(group) == 2 for group in groups)):
        return False
    if not all((group[0] in hex_chars and group[1] in hex_chars for group in groups)):
        return False
    return True


def isDigit(symbol):
    return symbol.isdigit()


def lineEncoding(s):
    count = 1
    output = []
    for char in range(1, len(s)):
        if s[char] == s[char - 1]:
            count += 1
        else:
            if count > 1:
                output.append(str(count) + s[char - 1])
            else:
                output.append(s[char - 1])
            count = 1
    if s[len(s) - 1] == s[len(s) - 2]:
        output.append(str(count) + s[len(s) - 1])
    else:
        output.append(s[len(s) - 1])
    return "".join(output)


def chessKnight(cell):
    moves = 0
    # Starting at the top left, going counter-clockwise
    if ord(cell[0]) >= ord("b") and ord(cell[1]) <= ord("6"):
        moves += 1
    if ord(cell[0]) >= ord("c") and ord(cell[1]) <= ord("7"):
        moves += 1
    if ord(cell[0]) >= ord("c") and ord(cell[1]) >= ord("2"):
        moves += 1
    if ord(cell[0]) >= ord("b") and ord(cell[1]) >= ord("3"):
        moves += 1
    if ord(cell[0]) <= ord("g") and ord(cell[1]) >= ord("3"):
        moves += 1
    if ord(cell[0]) <= ord("f") and ord(cell[1]) >= ord("2"):
        moves += 1
    if ord(cell[0]) <= ord("f") and ord(cell[1]) <= ord("7"):
        moves += 1
    if ord(cell[0]) <= ord("g") and ord(cell[1]) <= ord("6"):
        moves += 1

    return moves


def deleteDigit(n):
    num = str(n)
    highest = 0
    for digit in range(len(num)):
        output = num[:digit] + num[digit + 1 :]
        if int(output) > int(highest):
            highest = output
    return int(highest)


def longestWord(text):
    longest = []
    word = []
    for char in text:
        if ord("A") <= ord(char) <= ord("Z") or ord("a") <= ord(char) <= ord("z"):
            word.append(char)
        else:
            if len(word) > len(longest):
                longest = word
            word = []
    if len(word) > len(longest):
        longest = word
    return "".join(longest)


def validTime(time):
    groups = time.split(":")
    if len(groups) != 2:
        return False
    if not (groups[0].isdigit() and groups[1].isdigit()):
        return False
    if int(groups[0]) > 23 or int(groups[1]) > 59:
        return False
    return True


def sumUpNumbers(inputString):
    total = 0
    current_num = []
    for char in inputString:
        if char.isdigit():
            current_num.append(char)
        else:
            if len(current_num) > 0:
                num = int("".join(current_num))
                total += num
                current_num = []
    if len(current_num) > 0:
        num = int("".join(current_num))
        total += num
    return total


def differentSquares(matrix):
    squares = set()
    for row in range(len(matrix) - 1):
        for cell in range(len(matrix[row]) - 1):
            square = (
                (matrix[row][cell], matrix[row][cell + 1]),
                (matrix[row + 1][cell], matrix[row + 1][cell + 1]),
            )
            squares.add(square)
    return len(squares)


def digitsProduct(product):
    # New idea: add product to factors
    # while max(factors) > 10: split that num into factors
    if product == 0:
        return 10

    factors = [product]
    while max(factors) > 9:
        factored = findFactors(max(factors))
        if factored:
            factors.remove(max(factors))
            factors.extend(factored)
        else:
            return -1

    while factors.count(3) >= 2:
        factors.remove(3)
        factors.remove(3)
        factors.append(9)

    while factors.count(2) > 2:
        factors.remove(2)
        factors.remove(2)
        factors.remove(2)
        factors.append(8)

    while factors.count(2) > 1:
        factors.remove(2)
        factors.remove(2)
        factors.append(4)

    while 2 in factors and 3 in factors:
        factors.remove(2)
        factors.remove(3)
        factors.append(6)

    return int("".join(map(str, sorted(factors))))


def findFactors(n):
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return i, n // i
    return False


def fileNaming(names):
    outnames = []
    for name in names:
        if name in outnames:
            k = 1
            while "{}({})".format(name, k) in outnames:
                k += 1
            name = "{}({})".format(name, k)
        outnames.append(name)
    return outnames


def messageFromBinaryCode(code):
    output = []
    for i in range(0, len(code), 8):
        letter = chr(int(code[i : i + 8], 2))
        output.append(letter)
    return "".join(output)


def spiralNumbers(n):
    LEFT = "left"
    RIGHT = "right"
    UP = "up"
    DOWN = "down"
    direction = RIGHT
    spiral = [[0 for i in range(n)] for j in range(n)]
    row = 0
    cell = 0
    for num in range(1, (n * n) + 1):
        spiral[row][cell] = num
        if direction == RIGHT:
            if cell != n - 1 and spiral[row][cell + 1] == 0:
                cell += 1
            else:
                direction = DOWN
                row += 1
        elif direction == DOWN:
            if row != n - 1 and spiral[row + 1][cell] == 0:
                row += 1
            else:
                direction = LEFT
                cell -= 1
        elif direction == LEFT:
            if cell != 0 and spiral[row][cell - 1] == 0:
                cell -= 1
            else:
                direction = UP
                row -= 1
        elif direction == UP:
            if row != 0 and spiral[row - 1][cell] == 0:
                row -= 1
            else:
                direction = RIGHT
                cell += 1
    return spiral


print(spiralNumbers(5))


def sudoku(grid):
    match = [i for i in range(1, 10)]
    for row in grid:
        if sorted(row) != match:
            return False
    for column_index in range(9):
        column = [grid[row_index][column_index] for row_index in range(9)]
        if sorted(column) != match:
            return False
    for row in range(0, 9, 3):
        for column in range(0, 9, 3):
            box = []
            box.extend(grid[row][column : column + 3])
            box.extend(grid[row + 1][column : column + 3])
            box.extend(grid[row + 2][column : column + 3])
            if sorted(box) != match:
                return False
    return True


def addTwoDigits(n):
    return (n // 10) + (n % 10)


def largestNumber(n):
    return int("9" * n)


def candies(n, m):
    return (m // n) * n


def seatsInTheater(nCols, nRows, col, row):
    return (nCols - col + 1) * (nRows - row)


def maxMultiple(divisor, bound):
    for num in range(bound, 1, -1):
        if num % divisor == 0:
            return num
    return 0


def circleOfNumbers(n, firstNumber):
    return (firstNumber + (n // 2)) % n


def lateRide(n):
    hours = n // 60
    minutes = n % 60
    return (hours // 10) + (hours % 10) + (minutes // 10) + (minutes % 10)


def phoneCall(min1, min2_10, min11, s):
    if s < min1:
        return 0
    if s == min1:
        return 1
    if s <= min1 + (min2_10 * 9):
        s -= min1
        return (s // min2_10) + 1
    s -= min1
    s -= min2_10 * 9
    return (s // min11) + 10


def reachNextLevel(experience, threshold, reward):
    return experience + reward >= threshold


def knapsackLight(value1, weight1, value2, weight2, maxW):
    if weight1 + weight2 <= maxW:
        return value1 + value2
    if weight1 <= maxW and weight2 <= maxW:
        return max(value1, value2)
    if weight1 <= maxW:
        return value1
    if weight2 <= maxW:
        return value2
    return 0


def extraNumber(a, b, c):
    if a == b:
        return c
    if a == c:
        return b
    return a


def isInfiniteProcess(a, b):
    return a > b or (a % 2 != b % 2)


def arithmeticExpression(a, b, c):
    return a + b == c or a - b == c or a * b == c or a / b == c


def tennisSet(score1, score2):
    if max(score1, score2) == 6 and min(score1, score2) < 5:
        return True
    if 5 <= min(score1, score2) <= 6 and max(score1, score2) == 7:
        return True
    return False


def willYou(young, beautiful, loved):
    return (young and beautiful) != loved


def metroCard(lastNumberOfDays):
    if lastNumberOfDays == 30 or lastNumberOfDays == 28:
        return [31]
    return [28, 30, 31]


def killKthBit(n, k):
    return n & ~(2 ** (k - 1))


def arrayPacking(a):
    binary_array = [bin(num)[2:].rjust(8, "0") for num in a]
    out_string = "".join(binary_array[::-1])
    return int(out_string, 2)


def rangeBitCount(a, b):
    array = list(range(a, b + 1))
    binary_array = [bin(num) for num in array]
    count_array = [binary.count("1") for binary in binary_array]
    return sum(count_array)


def mirrorBits(a):
    binary = bin(a)[2:]
    return int(binary[::-1], 2)


def secondRightmostZeroBit(n):
    return 2 ** bin(n)[::-1].find("0", bin(n)[::-1].find("0") + 1)


def swapAdjacentBits(n):
    return ((n >> 1) & 1431655765) | ((n << 1) & 2863311530)


def differentRightmostBit(n, m):
    return 2 ** bin((n ^ m))[::-1].find("1")


def equalPairOfBits(n, m):
    return 2 ** bin(~(n ^ m))[::-1].find("1")


def leastFactorial(n):
    factorial = 1
    index = 1
    while factorial < n:
        index += 1
        factorial *= index
    return factorial


def countSumOfTwoRepresentations2(n, l, r):
    count = 0
    a = max(n - r, l)
    b = n - a
    while a <= r and a <= b:
        count += 1
        a += 1
        b -= 1
    return count


def magicalWell(a, b, n):
    total = 0
    for i in range(n):
        total += a * b
        a += 1
        b += 1
    return total


def lineUp(commands):
    count = 0
    smart_student = 0
    dumb_student = 0
    for command in commands:
        if command == "L":
            smart_student = (smart_student - 1) % 4
            dumb_student = (dumb_student + 1) % 4
        elif command == "R":
            smart_student = (smart_student + 1) % 4
            dumb_student = (dumb_student - 1) % 4
        elif command == "A":
            smart_student = (smart_student + 2) % 4
            dumb_student = (dumb_student + 2) % 4

        if smart_student == dumb_student:
            count += 1
    return count


def additionWithoutCarrying(param1, param2):
    # Convert numbers to strings
    str1 = str(param1)
    str2 = str(param2)
    # Pad both to the same length with zeroes (to the left of the numbers)
    length = max(len(str2), len(str1))
    str1 = str1.rjust(length, "0")
    str2 = str2.rjust(length, "0")
    output = []
    for num1, num2 in zip(str1, str2):
        result = str(int(num1) + int(num2))[-1]
        output.append(result)
    return int("".join(output))


def appleBoxes(k):
    red = 0
    yellow = 0
    for i in range(1, k + 1, 2):
        yellow += i * i
    for i in range(2, k + 1, 2):
        red += i * i

    return red - yellow


def increaseNumberRoundness(n):
    string = str(n)
    # Check for immediate rejection
    if "0" not in string or len(string) < 2:
        return False
    # Since we know there's a 0, if it's not on
    # the left, then we know to accept
    if string[-1] != "0":
        return True
    # If there is only one 0, it must be at the end, so reject.
    if string.count("0") == 1:
        return False
    # If there are any numbers between the first 0
    # and the end of the string, then accept.
    first_zero = string.find("0")
    zero_sandwich = string[first_zero:]
    return zero_sandwich.count("0") != len(zero_sandwich)


def rounders(value):
    length = len(str(value))
    magnitude = length - 1
    for i in range(length - 1):
        value = int((value / 10) + 0.5)
    return value * (10 ** magnitude)


def candles(candlesNumber, makeNew):
    totalBurned = 0
    leftovers = 0
    while candlesNumber > 0:
        totalBurned += candlesNumber
        leftovers += candlesNumber
        candlesNumber = 0
        candlesNumber = leftovers // makeNew
        leftovers = leftovers % makeNew
    return totalBurned


def countBlackCells(n, m):
    gcd = find_gcd(n, m)
    line_cells = n + m - gcd
    line_corner_cells = (gcd - 1) * 2
    return line_cells + line_corner_cells


def find_gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a


def createArray(size):
    return [1] * size


def arrayReplace(inputArray, elemToReplace, substitutionElem):
    output = [
        elem if elem != elemToReplace else substitutionElem for elem in inputArray
    ]
    return output


def firstReverseTry(arr):
    if len(arr) < 2:
        return arr
    if len(arr) < 4:
        return arr[::-1]
    return arr[-1:] + arr[1:-1] + arr[:1]


def concatenateArrays(a, b):
    return a + b


def removeArrayPart(inputArray, l, r):
    return inputArray[:l] + inputArray[r + 1 :]


def isSmooth(arr):
    if arr[0] != arr[-1]:
        return False
    if len(arr) % 2 == 0:
        middle = arr[len(arr) // 2] + arr[(len(arr) // 2) - 1]
    else:
        middle = arr[len(arr) // 2]
    return arr[0] == middle


def replaceMiddle(arr):
    if len(arr) % 2 != 0:
        return arr
    right_middle = len(arr) // 2
    middle_value = arr[right_middle] + arr[right_middle - 1]
    return arr[: right_middle - 1] + [middle_value] + arr[right_middle + 1 :]


def makeArrayConsecutive2(statues):
    count = 0
    for i in range(min(statues), max(statues)):
        if i not in statues:
            count += 1
    return count


def isPower(n):
    if n == 1:
        return True

    a = 2
    b = 2
    while a ** 2 <= n:
        while a ** b <= n:
            if a ** b == n:
                return True
            b += 1
        b = 2
        a += 1
    return False


def isSumOfConsecutive2(n):
    count = 0
    right = 2
    arr = [1, 2]
    while right <= (n // 2) + 1:
        total = sum(arr)
        if total == n:
            count += 1
            del arr[0]
        elif total < n:
            right += 1
            arr.append(right)
        elif total > n:
            del arr[0]
    return count


def squareDigitsSequence(a0):
    sequence = [a0]
    while sequence[-1] not in sequence[:-1]:
        next_value = 0
        for digit in str(sequence[-1]):
            next_value += int(digit) ** 2
        sequence.append(next_value)
    return len(sequence)


def pagesNumberingWithInk(current, numberOfDigits):
    numberOfDigits -= len(str(current))
    next_digits = len(str(current + 1))
    while numberOfDigits >= next_digits:
        current += 1
        numberOfDigits -= next_digits
        next_digits = len(str(current))
    return current


def comfortableNumbers(l, r):
    count = 0
    for a in range(l, r):
        for b in range(a + 1, r + 1):
            a_sum = sum(int(digit) for digit in str(a))
            b_sum = sum(int(digit) for digit in str(b))
            if b <= a + a_sum and a >= b - b_sum:
                count += 1
    return count


def weakNumbers(n):
    all_factors = [count_factors(num) for num in range(1, n + 1)]
    weaknesses = []
    for num, num_factors in enumerate(all_factors, 1):
        weakness = 0
        for factor in all_factors[:num]:
            if factor > num_factors:
                weakness += 1
        weaknesses.append(weakness)
        weakest = max(weaknesses)
        return [weakest, weaknesses.count(weakest)]


def count_factors(n):
    factors = 0
    for i in range(1, n + 1):
        if n % i == 0:
            factors += 1
    return factors


print(weakNumbers(500))

import math


def rectangleRotation(a, b):
    n = a / (2 ** 0.5)
    m = b / (2 ** 0.5)
    points = (math.floor(n) * math.floor(m)) + (math.ceil(n) * math.ceil(m))
    if math.floor(n) % 2 != math.floor(m) % 2:
        points -= 1
    return points


# rectangleRotation(6, 4)
print(rectangleRotation(8, 6))
