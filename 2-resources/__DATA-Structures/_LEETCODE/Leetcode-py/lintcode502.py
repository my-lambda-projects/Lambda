"""
Definition of Column:
class Column:
    def __init__(self, key, value):
        self.key = key
        self.value = value
"""


class MiniCassandra:
    def __init__(self):
        self.memory = {}

    """
    @param: row_key: a string
    @param: column_key: An integer
    @param: value: a string
    @return: nothing
    """

    def insert(self, row_key, column_key, value):
        if row_key not in self.memory:
            self.memory[row_key] = {}
        self.memory[row_key][column_key] = value

    """
    @param: row_key: a string
    @param: column_start: An integer
    @param: column_end: An integer
    @return: a list of Columns
    """

    def query(self, row_key, column_start, column_end):
        result = []
        if row_key in self.memory:
            for i in range(column_start, column_end + 1):
                if i in self.memory[row_key]:
                    result.append(Column(i, self.memory[row_key][i]))
        return result
