from inspect import getsource
from random import randint
import unittest


class TestIfStatement(unittest.TestCase):
    def test_function_returns_proper_value(self):
        from problem_04_if_statement import lossy_transform

        input_ = randint(1, 9)
        self.assertEqual(lossy_transform(input_), 0)
        input_ = randint(10, 46)
        self.assertEqual(lossy_transform(input_), input_ * 2)
        input_ = randint(47, 1000)
        self.assertEqual(lossy_transform(input_), input_ / 3)
        input_ = randint(1001, 1000000)
        self.assertEqual(lossy_transform(input_), None)

    def test_function_appears_to_use_a_while_loop(self):
        from problem_04_if_statement import lossy_transform

        source = getsource(lossy_transform)
        has_if = source.find("if") > -1
        has_elif = source.find("elif") > -1
        has_else = source.find("else") > -1
        self.assertTrue(
            has_if and has_elif and has_else, "Missing if, elif, and/or else."
        )
