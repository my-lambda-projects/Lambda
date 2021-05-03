#!/usr/bin/env python3
"""
Render a JSON array of questions from stdin to HTML on stdout.

    ./validate.py schema.json < interview-questions.yml | ./render.py
"""

import sys
import json

import jinja2


__author__ = 'Doctor J'
__date__ = '2016-04-11'


#: HTML template string; passed an array called `questions`
HTML = """<!DOCTYPE html>
<html>
  <head>
  <title>Questions to Ask a Potential Tech Employer</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" href="style.css">
  </head>
<body>

<h1 class="title"><a href="https://gitlab.com/doctorj/interview-questions">Questions to Ask a Potential Tech Employer</a></h1>

{% for q in questions %}
<div class="q">
    <span class="pri">({{ q.pri }})</span> <span class="who">{{ q.who | join(', ') }}</span>
    <p class="q">{{ q.q }}</p>
    <ul class="followup">
    {% for f in q.followup %}
        <li class="followup">{{ f }}</li>
    {% endfor %}
    </ul>
    <p class="a"></p>
</div>
{% endfor %}

</body>
</html>
"""


def to_html(questions):
    """:Return: a string containing the `questions` list rendered to basic HTML."""
    return jinja2.Environment().from_string(HTML).render(questions=questions)


def main(args):
    """Read questions JSON on stdin, render to HTML on stdout."""
    if len(args) != 1 or sys.stdin.isatty():
        print(__doc__, file=sys.stderr)
        sys.exit(1)

    print(to_html(json.load(sys.stdin)))


if __name__ == '__main__':
    main(sys.argv)
