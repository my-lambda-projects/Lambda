import unittest
from ddt import ddt, data, unpack

from source import century_from_year as func


@ddt
class TestCenturyFromYear(unittest.TestCase):
    @data((1988, 20), (1, 1), (2001, 21), (2000, 20))
    @unpack
    def test_positive(self, year, century) -> None:
        self.assertEqual(func.century_from_year(year), century)

    @data(("abcd", 0), (None, 0), (0, 0), (2010, 0), (-5, 0))
    @unpack
    def test_negative(self, year, century) -> None:
        if year is None:
            self.assertEqual(func.century_from_year(), century)
        else:
            self.assertEqual(func.century_from_year(year), century)


if __name__ == "__main__":
    unittest.main()
