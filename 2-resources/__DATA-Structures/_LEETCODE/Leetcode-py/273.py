class Solution:
    def numberToWords(self, num: "int") -> "str":
        if num == 0:
            return "Zero"
        self.divisors = [1000000000, 1000000, 1000, 100, 1]
        self.thousands = ["Billion", "Million", "Thousand", "Hundred", ""]
        self.units = [
            "",
            "One",
            "Two",
            "Three",
            "Four",
            "Five",
            "Six",
            "Seven",
            "Eight",
            "Nine",
        ]
        self.tens = [
            "",
            "Ten",
            "Twenty",
            "Thirty",
            "Forty",
            "Fifty",
            "Sixty",
            "Seventy",
            "Eighty",
            "Ninety",
        ]
        self.elevens = [
            "",
            "Eleven",
            "Twelve",
            "Thirteen",
            "Fourteen",
            "Fifteen",
            "Sixteen",
            "Seventeen",
            "Eighteen",
            "Nineteen",
        ]
        ret = ""
        for i in range(5):
            if num // self.divisors[i] == 0:
                continue
            ret += (
                self.get_english_word(num // self.divisors[i]).strip()
                + " "
                + self.thousands[i]
                + " "
            )
            num = num % self.divisors[i]
        return ret.strip()

    def get_english_word(self, num: "int") -> "str":
        if num < 10:
            return self.units[num]
        elif 10 < num < 20:
            return self.elevens[num % 10]
        elif num < 100:
            return self.tens[num // 10] + " " + self.get_english_word(num % 10)
        else:
            return (
                self.units[num // 100] + " Hundred " + self.get_english_word(num % 100)
            )
