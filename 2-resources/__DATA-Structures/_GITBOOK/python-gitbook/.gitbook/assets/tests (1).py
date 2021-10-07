from unittest import TestCase

from employees import Employee, Job, sort_employees_by_salary


class TestEmployees(TestCase):
    def setUp(self):
        agent = Job("Agent", 40000)
        manager = Job("Manager", 50000)

        self.alice = Employee("Alice", "Anaheim", manager)
        self.bob = Employee("Bob", "Bodega", agent)
        self.cindy = Employee("Cindy", "Camille", agent)
        self.dan = Employee("Dan", "Dirk", manager)

        self.employee_list = [self.dan, self.cindy, self.bob, self.alice]

    def test_equal(self):
        self.assertEqual(self.alice, self.alice)

    def test_not_equal(self):
        self.assertNotEqual(self.alice, self.bob)

    def test_sort_employees_by_salary_no_side_effects(self):
        frozen_employee_list = list(self.employee_list)
        sort_employees_by_salary(self.employee_list)
        for frozen_employee, employee in zip(frozen_employee_list, self.employee_list):
            self.assertEqual(frozen_employee, employee)

    def test_sort_employees_by_salary_sorting_works(self):
        sorted_employee_list = sort_employees_by_salary(self.employee_list)
        expected = [self.bob, self.cindy, self.alice, self.dan]
        self.assertEqual(sorted_employee_list, expected)


class TestJobs(TestCase):
    def test_str(self):
        job_title = "Agent"
        job = Job(job_title, 40000)
        self.assertEqual(str(job), job_title)
