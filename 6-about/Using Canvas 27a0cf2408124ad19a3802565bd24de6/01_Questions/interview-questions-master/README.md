# Questions to Ask a Potential Tech Employer  [![build status](https://gitlab.com/doctorj/interview-questions/badges/master/build.svg)](https://gitlab.com/doctorj/interview-questions/commits/master)

## "...Do you have any questions for me?"

We've all gotten to that point at the end of an interview when it comes your turn to ask the questions.
We've all probably blanked in the stress of the moment, fumbled a question about the free snacks, and ended up
in a job we regretted because we didn't know what to ask.  Here's help.

This is a list of things to ask a potential employer when you're interviewing for a technology job.
It's compiled from books, the web, contributors, and personal experience.  Asking good questions will not only
give you a better idea of what a company is like, but they will respect you for digging (if they don't -- run!).

You can view [the list of questions](https://gitlab.com/doctorj/interview-questions/blob/master/interview-questions.yml)
as YAML source, derived [JSON](https://doctorj.gitlab.io/interview-questions/interview-questions.json), JSONP-friendly
[JavaScript](https://doctorj.gitlab.io/interview-questions/interview-questions.js), and
printer-friendly [HTML](https://doctorj.gitlab.io/interview-questions/).

The list includes ideas from the [Joel Test](http://www.joelonsoftware.com/articles/fog0000000043.html),
[The Pragmatic Programmer](https://pragprog.com/the-pragmatic-programmer/extracts/tips),
[Making Software](http://shop.oreilly.com/product/9780596808303.do),
[Yishan Wong](http://www.algeri-wong.com/yishan/engineering-management.html),
[Hacker News](https://news.ycombinator.com/item?id=11449133),
[Rands in Repose](http://randsinrepose.com/), and various research studies.

Some questions are just for information and have no "correct" answer ("What's the makeup of your team?").  Most
follow generally settled wisdom ("Do you have unit tests?").  A few have opinionated or controversial answers
("Could your manager step in and do your job?").  If you don't like a question, just ignore it; feel free to submit
an alternative.

The list is in [YAML](https://en.wikipedia.org/wiki/YAML) format so it's human- and machine-readable;
you can filter the questions for the company, position, or interviewer;
and sort by priority.  It's also easy to merge in your own questions or have domain-specific "question packs."
Priorities (`pri`) are a rough sorting of importance from 1 (high) to 3 (low); the default is 3.
Don't get too worked up over priority; it's easy to change them to suit your preference.

Contributions welcome -- add your question to the bottom and submit a PR, or just make a new issue with your question.
Evidence- or consensus-based questions with a link to references are preferred, but it is recognized that hiring is still
a squishy subject.  Standard questions like salary and benefits are not included (but of course you should still ask them!).


## How to use

Before an interview, go through the questions, pick out the ones you want to ask, and order them by importance to you.
I like to print them out, without the answers, with space under each question to write in as many answers as there will
be interviewers.  `validate.py` will convert your YAML to JSON, see `filter.sh` for basic filter and sort, and `render.py`
to get basic HTML.

When it comes time for you to ask questions (typically at the end of the interview), take out your questions and start by
saying something like, "I have a bunch of questions here, so I'll just go down the list and you can stop me when you have to go."
Many interviewers are not accustomed to being barraged with questions, and you want to respect their time.
Typically not much time is allotted for your questions, so you want to move quickly and cover as many questions as possible,
but still leave psychological space for the interviewer to reflect, open up, and give candid answers.  You want it to feel like
a conversation, rather than a reverse interview.  That is an art.  Practice by interviewing with companies where you don't
really care if they hire you or not.

Most questions should be asked to every interviewer (of the appropriate type), so you can get a meaningful sample of answers.
Asking six people "How many hours did you work last week?" will give you a better picture than asking one person "How many hours
a week did you work for the last six weeks?"  This technique borrows from survey methodology to avoid faulty memories and
[all sorts of memory biases](https://en.wikipedia.org/wiki/List_of_cognitive_biases#Memory_errors_and_biases).

Interviewers are often curious about someone so curious; they may ask why you asked a particular question, or what answer
you were looking for; feel free to share and send them here.


## After the interview

After the interviews, if you feel you didn't get enough complete answers out of your interviewers, don't be afraid to
come back for more.  You can say something like, "I'm really interested in the company and position, and I think we
both want to make sure it's a great match.  I'd like to come back and spend a little more time getting to know each
other." Many companies worry about making the interview process too long and fret about not having enough
information about candidates; showing you're interested and willing to invest more time can by itself give you an
advantage. A great time to visit is after they've made an offer but before you accept.  Getting to know the people
may be more important than any questions you could ask.  Another good source of information is to track down former
employees and ask them why they left.

You may choose to review the answers and assign a score to each question, weight it by how important the question is to
you, and compute a score for the company.  Or you could compute a score for several dimensions and graph it on
a radar chart to summarize the company's strengths and weaknesses.  Feel free to share what you come up with.


## Contributing

### Question Guidelines
 * Prefer evidence- or consensus-based questions; provide a reference link.
 * Prefer behavioral questions ("Tell me about the last time that...") to hypothetical ("Imagine that...").
 * Avoid questions to which you're obviously looking for a certain answer.  Instead of "Is it easy to order new software
   or hardware?" try "What's the process for ordering new software or hardware?"
 * See if you can replace a yes/no question with one whose answer you would definitely know if the yes/no was really true.
   So instead of "Do you use source control?" ask "What do you use for source control?"
   It's fine to start with the yes/no version and immediately follow up with the detailed version.
 * For questions whose answers might reflect negatively on the company or interviewer, try to make it as easy or likely
   to give a negative answer as a positive one.  Ask yourself if anyone would really be likely to give a negative answer.
   Suggest a glass-half-full way to give the negative answer. Instead of "Do you learn from your co-workers?" ask
   "Do you learn more from you co-workers or on your own?"
 * Standard questions like salary and benefits are not included.

Edit the appropriate `.yml` file; copy an existing `q`, paste it at the bottom, and edit.  Submit a pull request and it
will automatically be validated.

You can test your changes locally with something like

    $ ./validate.py schema.json < questions.yml

If it validates, it outputs a JSON list of question objects; if not, it should give you a more-or-less helpful message.
You will need Python 3 with the PyYAML, jsonschema, and jinja2 packages installed.  `python3 -m pip install -r requirements.txt`
should do it.

Tools for filtering and ordering questions, converting to various formats, pretty-printing, etc. would be very welcome.
Question files for specific industries, roles, stacks, etc. are also welcome.


## Question Format

Questions are key-value pairs; all are optional except the question.  Most values are strings or lists of strings.

* `q`: The question.
* `a`: An answer, if appropriate.  Keep it brief but explain why a particular answer is important when looking for a job.
* `followup`: Question(s) to ask after the main `q`; generally contingent on the answer.  String or list.
* `tags`: The topic(s) of the question.  List of strings.  Valid values are in the top-level document `tag` key:
  `[process, culture, people, tech, management, hiring, issues]`.
* `pri`: Integer priority used to order questions so you can ask the important ones first.  1 (highest) to 3 (lowest).  Defaults to lowest.
* `ref`: Reference the source of the question or desired answer.  URL or list of URLs.
* `who`: Type of person to ask the question to, so you can tailor the questions to the interviewer.  List of strings.
  Valid values are in the top-level document `who` key: `[engineer, manager, exec, hr, other]`.  Missing means appropriate for anyone.
* `where`: Type of company for which the question is appropriate.  Valid values are in the top-level document `where` key:
  `[startup, bigco]`.  Missing means appropriate for most companies.

There is a [JSON Schema](https://gitlab.com/doctorj/interview-questions/blob/master/schema.json) against which questions
are validated.

----
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /></a><br />
<span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">Questions to ask a potential tech employer</span>
is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.