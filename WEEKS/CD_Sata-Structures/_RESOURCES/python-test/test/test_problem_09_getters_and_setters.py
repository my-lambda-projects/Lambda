from random import randint
import unittest


class TestBetweenOneAndTen(unittest.TestCase):
    def test_has_default_value_one(self):
        from problem_09_getters_and_setters import BetweenOneAndTen

        o = BetweenOneAndTen()
        self.assertEqual(o.value, 1)

    def test_can_set_and_retrieve_value_between_one_and_ten(self):
        from problem_09_getters_and_setters import BetweenOneAndTen

        o = BetweenOneAndTen()
        value = randint(1, 10)
        o.value = value
        self.assertEqual(o.value, value)

    def test_cannot_set_value_outside_one_and_ten(self):
        from problem_09_getters_and_setters import BetweenOneAndTen

        o = BetweenOneAndTen()
        value = randint(-1000, -1)
        o.value = value
        self.assertEqual(o.value, 1)
        value = randint(11, 1000)
        o.value = value
        self.assertEqual(o.value, 1)
