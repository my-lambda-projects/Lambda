class Employee(object):
    def __init__(self, first_name, last_name, job):
        self.first_name = first_name
        self.last_name = last_name
        self.job = job

    def __eq__(self, other):
        if isinstance(other, self.__class__):
            same_name = (
                self.first_name == other.first_name
                and self.last_name == other.last_name
            )
            same_job = self.job == other.job
            if same_name and same_job:
                return True
        return False

    def __repr__(self):
        return "Employee(first_name={}, last_name={}, job={})".format(
            self.first_name, self.last_name, repr(self.job)
        )


class Job(object):
    def __init__(self, title, salary):
        self.title = title
        self.salary = salary

    def __str__(self):
        print(self.title)

    def __repr__(self):
        return "Job(title={}, salary={})".format(self.title, self.salary)


def sort_employees_by_salary(employee_list):
    """
    Returns a new employee list, sorted by low to high salary then last_name
    """
    employee_list.sort(key=lambda employee: (employee.last_name, employee.job.salary))
    return employee_list
