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
