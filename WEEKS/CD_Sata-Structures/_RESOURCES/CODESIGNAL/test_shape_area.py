import unittest
from ddt import ddt, data, unpack

from source import shape_area as func


@ddt
class TestShapeArea(unittest.TestCase):
    @data((2, 5), (3, 13), (1, 1), (5, 41), (7000, 97986001))
    @unpack
    def test_positive(self, number, result) -> None:
        self.assertEqual(func.shape_area(number), result)

    @data((0, 0), (None, 0), (10001, 0), (-10, 0), ("a", 0))
    @unpack
    def test_negative(self, number, result) -> None:
        if number is None:
            self.assertEqual(func.shape_area(), result)
        else:
            self.assertEqual(func.shape_area(number), result)


if __name__ == "__main__":
    unittest.main()
