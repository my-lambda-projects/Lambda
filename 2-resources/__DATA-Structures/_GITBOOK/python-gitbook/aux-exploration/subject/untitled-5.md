# Employee Manager

## Coding Challenge: Employee Management

This code is the very beginning of an employee management system for a company. There are three failing tests that need to be fixed.

- The test code can be assumed to be perfect. Only edit `employees.py`.
- The code is Python 2 and Python 3 compatible and has no dependencies.

#### Running the tests

```text
python -m unittests tests

```

```python
class Employee(object):
    def __init__(self, first_name, last_name, job):
        self.first_name = first_name
        self.last_name = last_name
        self.job = job

    def __eq__(self, other):
        if isinstance(other, self.__class__):
            same_name = self.first_name == other.first_name and self.last_name == other.last_name
            same_job = self.job == other.job
            if same_name and same_job:
                return True
        return False

    def __repr__(self):
        return 'Employee(first_name={}, last_name={}, job={})'.format(self.first_name, self.last_name, repr(self.job))


class Job(object):
    def __init__(self, title, salary):
        self.title = title
        self.salary = salary

    def __str__(self):
        print(self.title)

    def __repr__(self):
        return 'Job(title={}, salary={})'.format(self.title, self.salary)


def sort_employees_by_salary(employee_list):
    """
    Returns a new employee list, sorted by low to high salary then last_name
    """
    employee_list.sort(key=lambda employee: (employee.last_name, employee.job.salary))
    return employee_list

```

{% file src="../../.gitbook/assets/employees.py" caption="employees.py" %}

```python
from unittest import TestCase

from employees import Employee, Job, sort_employees_by_salary


class TestEmployees(TestCase):
    def setUp(self):
        agent = Job('Agent', 40000)
        manager = Job('Manager', 50000)

        self.alice = Employee('Alice', 'Anaheim', manager)
        self.bob = Employee('Bob', 'Bodega', agent)
        self.cindy = Employee('Cindy', 'Camille', agent)
        self.dan = Employee('Dan', 'Dirk', manager)

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
        job_title = 'Agent'
        job = Job(job_title, 40000)
        self.assertEqual(str(job), job_title)

```

{% file src="../../.gitbook/assets/tests.py" caption="test.py" %}
