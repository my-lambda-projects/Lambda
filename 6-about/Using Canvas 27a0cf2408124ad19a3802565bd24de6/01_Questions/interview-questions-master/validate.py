#!/usr/bin/env python3
"""
Validate interview questions YAML on stdin and output normalized JSON questions on stdout.

    validate.py schema.json < interview-questions.yml
"""

import sys
import json
import copy

import yaml
import jsonschema

__author__ = 'doctorj'
__date__ = '2016-04-11'


PRIORITY_DEFAULT = 3


class QValidator(object):
    """Validate a single question against the schema."""
    def __init__(self, schema, field_vals={}):          # pylint: disable=dangerous-default-value
        """Create a new QValidator with the given `schema` dict.

        :param dict(str, list(str)) field_vals: For each key present, ensure the
            corresponding key in a question maps to a subset of the given value.
        """
        jsonschema.Draft4Validator.check_schema(schema)
        self.validator = jsonschema.Draft4Validator(schema)
        assert isinstance(field_vals, dict)
        assert all(isinstance(val, list) for val in field_vals.values())
        self.field_vals = {field: frozenset(vals) for field, vals in field_vals.items()}

    def validate(self, question):
        """:Return: `question` dict if valid according to schema.

        :raises ValueError: If `question` is invalid."""
        issues = list(self.validator.iter_errors(question))
        if issues:
            raise ValueError('Question "{}":\n{}'.format(question.get('q', '<none>'), issues[0]))
        for field, valid in self.field_vals.items():
            invalid = frozenset(question.get(field, ())) - valid
            if invalid:
                raise ValueError('Question "{}":\nInvalid value(s) for "{}" field: {}'.format(question.get('q', '<none>'), field, ', '.join(invalid)))
        return question


def listify(value):
    """:Return: an empty list if `value` is None, a list containing `value` if value is not a list, otherwise `value`."""
    if not value:
        return []
    elif isinstance(value, list):
        return value
    else:
        return [value]


def normalize(question):
    """:Return: (a copy of) the `question` dict with defaults filled in."""
    q = copy.deepcopy(question)
    q.setdefault('a', None)
    q.setdefault('pri', PRIORITY_DEFAULT)
    for val in ('followup', 'ref', 'tags', 'who', 'where'):
        q[val] = listify(q.get(val))
    return q


def main(args):
    """Read YAML on stdin, parse, validate, print JSON objects one to a line on stdout."""
    if len(args) < 2 or args[1] == '--help' or sys.stdin.isatty():
        print(__doc__, file=sys.stderr)
        sys.exit(1)

    data = yaml.load(sys.stdin)
    with open(args[1]) as schemafile:
        schema = json.load(schemafile)
    validator = QValidator(schema, {k: v for k, v in data.items() if k != 'qs'})

    assert 'qs' in data, "Could not find `qs` key in YAML file."
    try:
        questions = tuple(normalize(validator.validate(q)) for q in data['qs'])
    except ValueError as err:
        print(str(err), file=sys.stderr)
        sys.exit(1)
    else:
        json.dump(questions, sys.stdout, indent=2, sort_keys=True)


if __name__ == '__main__':
    main(sys.argv)
