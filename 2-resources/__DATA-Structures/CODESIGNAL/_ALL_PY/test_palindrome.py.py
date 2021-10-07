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
