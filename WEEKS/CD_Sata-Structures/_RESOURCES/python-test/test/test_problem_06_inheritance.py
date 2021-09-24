import unittest


class TestEmployeeAndManager(unittest.TestCase):
    def test_inheritance_relationship(self):
        from problem_06_inheritance import Employee, Manager

        manager = Manager()

        self.assertIsInstance(manager, Employee)
