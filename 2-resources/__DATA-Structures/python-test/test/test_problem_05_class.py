from random import randint
import unittest


class TestAirport(unittest.TestCase):
    def test_constructor_accepts_name_and_abbreviation_and_new_airport_has_zero_planes(
        self
    ):
        from problem_05_class import Airport

        airport = Airport("Bush Intercontinental", "IAH")

        self.assertEqual(0, airport.get_number_of_planes())

    def test_can_increase_plane_count(self):
        from problem_05_class import Airport

        airport = Airport("Bush Intercontinental", "IAH")

        airport.plane_arrives()
        self.assertEqual(1, airport.get_number_of_planes())

        airport.plane_arrives()
        airport.plane_arrives()
        self.assertEqual(3, airport.get_number_of_planes())

    def test_can_decrease_plane_count(self):
        from problem_05_class import Airport

        airport = Airport("Bush Intercontinental", "IAH")

        airport.plane_arrives()
        airport.plane_departs()
        self.assertEqual(0, airport.get_number_of_planes())

        for i in range(10):
            airport.plane_arrives()
        airport.plane_departs()
        self.assertEqual(9, airport.get_number_of_planes())
        airport.plane_departs()
        self.assertEqual(8, airport.get_number_of_planes())

    def test_repr_returns_proper_string_representation(self):
        from problem_05_class import Airport

        n = randint(0, 10)
        abbr = f"IAH{n}"
        airport = Airport("Bush Intercontinental", abbr)

        for i in range(100):
            airport.plane_arrives()
        departures = randint(0, 100)
        for i in range(departures):
            airport.plane_departs()

        self.assertEqual(f"{airport}", f"<{abbr} {100 - departures}>")
