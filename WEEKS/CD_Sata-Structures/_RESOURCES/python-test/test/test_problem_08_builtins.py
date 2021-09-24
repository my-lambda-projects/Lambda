from random import randint
import unittest


class TestEnumerate(unittest.TestCase):
    def test_indexify_works_on_empty_list(self):
        from problem_08_builtins import indexify

        result = indexify([])

        self.assertListEqual(result, [])

    def test_indexify_works_on_empty_list(self):
        from problem_08_builtins import indexify

        lst = [randint(0, 10), randint(0, 10), randint(0, 10)]

        result = indexify(lst)

        self.assertListEqual(result, [(0, lst[0]), (1, lst[1]), (2, lst[2])])
