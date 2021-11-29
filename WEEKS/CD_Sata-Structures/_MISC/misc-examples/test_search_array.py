import unittest
from search_array import search


class Test(unittest.TestCase):
    def test_search_array(self):
        self.assertEqual(search([4, 5, 6, 7, 0, 1, 2], 0), 4)
        self.assertEqual(search([4, 5, 6, 7, 0, 1, 2], 3), -1)
        self.assertEqual(search([7, 8, 9, 0, 1, 2, 3, 4, 6], 5), -1)
        self.assertEqual(search([7, 8, 9, 0, 1, 2, 3, 4, 6], 7), 0)
        self.assertEqual(search([7, 8, 9, 0, 1, 2, 3, 4, 6], 6), 8)


if __name__ == "__main__":
    unittest.main()
