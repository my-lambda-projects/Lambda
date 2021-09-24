import unittest
from find_duplicate import find_duplicate


class Test(unittest.TestCase):
    def test_find_duplicate(self):
        self.assertEqual(find_duplicate([1, 3, 4, 2, 2]), 2)
        self.assertEqual(find_duplicate([3, 1, 3, 4, 2]), 3)
        self.assertEqual(find_duplicate([10, 7, 5, 8, 11, 9, 11]), 11)
        self.assertEqual(find_duplicate([100, 90, 80, 50, 20, 10, 101, 100]), 100)
        self.assertEqual(find_duplicate([1050, 270, 1540, 3800, 2, 3000, 1540]), 1540)
        self.assertEqual(
            find_duplicate(
                [100, 55, 4, 98, 10, 18, 90, 95, 43, 11, 47, 67, 89, 42, 49, 79, 100]
            ),
            100,
        )


if __name__ == "__main__":
    unittest.main()
