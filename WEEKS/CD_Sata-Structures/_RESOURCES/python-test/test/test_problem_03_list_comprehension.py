from inspect import getsourcelines
from random import randint
import unittest


class TestListComprehension(unittest.TestCase):
    def setUp(self):
        self.expected = []
        self.input = []
        for i in range(100):
            s = "A" * randint(0, 10)
            self.input.append(s)
            if len(s) > 5:
                self.expected.append(s)

    def test_function_returns_proper_value(self):
        from problem_03_list_comprehension import my_comprehension

        result = my_comprehension(self.input)
        self.assertListEqual(self.expected, result)

    def test_function_appears_to_have_one_line_with_a_list_comprehension(self):
        from problem_03_list_comprehension import my_comprehension

        lines = getsourcelines(my_comprehension)[0]
        self.assertEqual(len(lines), 2, "my_comprehension has more then one body line")
        line = lines[1]

        has_braces = line.find("[") > -1 and line.find("]") > -1
        has_for = line.find("for") > -1
        has_in = line.find("in") > -1
        has_if = line.find("if") > -1
        self.assertTrue(
            has_braces and has_for and has_in and has_if,
            "my_comprehension does not appear to contain a comprehension",
        )
