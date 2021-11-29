from inspect import getsourcelines
from random import randint
import unittest


class TestForLoop(unittest.TestCase):
    def setUp(self):
        self.expected = []
        self.input = []
        for i in range(100):
            s = "A" * randint(0, 10)
            self.input.append(s)
            if len(s) > 5:
                self.expected.append(s)

    def test_function_returns_proper_value(self):
        from problem_02_for_loop import my_for_loop

        result = my_for_loop(self.input)
        self.assertListEqual(self.expected, result)

    def test_function_appears_to_use_a_for_loop(self):
        from problem_02_for_loop import my_for_loop

        lines = [
            line
            for line in getsourcelines(my_for_loop)[0]
            if line.strip().startswith("for")
        ]
        self.assertTrue(len(lines) > 0)
