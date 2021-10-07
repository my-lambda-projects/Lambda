from random import randint
import unittest


class TestBindArgument(unittest.TestCase):
    def test_takes_two_arguments_and_returns_a_function(self):
        from problem_10_functions import bind_argument

        result = bind_argument(1, lambda x: x)

        self.assertTrue(callable(result))

    def test_binds_argument_to_function_and_calls_on_invocation_of_return_value(self):
        from problem_10_functions import bind_argument

        delta = randint(1, 100)
        result = bind_argument(1, lambda x: x + delta)

        self.assertEqual(result(), 1 + delta)
