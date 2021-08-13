### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](stdlib2.html '11. Brief Tour of the Standard Library — Part II') |
- [previous](classes.html '9. Classes') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-

<span id="tut-brieftour"></span>

# <span class="section-number">10. </span>Brief Tour of the Standard Library<a href="#brief-tour-of-the-standard-library" class="headerlink" title="Permalink to this headline">¶</a>

<span id="tut-os-interface"></span>

## <span class="section-number">10.1. </span>Operating System Interface<a href="#operating-system-interface" class="headerlink" title="Permalink to this headline">¶</a>

The <a href="https://docs.python.org/3/library/os.html#module-os" class="reference internal" title="os: Miscellaneous operating system interfaces."><code class="sourceCode python">os</code></a> module provides dozens of functions for interacting with the operating system:

    >>> import os
    >>> os.getcwd()      # Return the current working directory
    'C:\\Python39'
    >>> os.chdir('/server/accesslogs')   # Change current working directory
    >>> os.system('mkdir today')   # Run the command mkdir in the system shell
    0

Be sure to use the `import os` style instead of `from os import *`. This will keep <a href="https://docs.python.org/3/library/os.html#os.open" class="reference internal" title="os.open"><code class="sourceCode python">os.<span class="bu">open</span>()</code></a> from shadowing the built-in <a href="https://docs.python.org/3/library/functions.html#open" class="reference internal" title="open"><code class="sourceCode python"><span class="bu">open</span>()</code></a> function which operates much differently.

The built-in <a href="https://docs.python.org/3/library/functions.html#dir" class="reference internal" title="dir"><code class="sourceCode python"><span class="bu">dir</span>()</code></a> and <a href="https://docs.python.org/3/library/functions.html#help" class="reference internal" title="help"><code class="sourceCode python"><span class="bu">help</span>()</code></a> functions are useful as interactive aids for working with large modules like <a href="https://docs.python.org/3/library/os.html#module-os" class="reference internal" title="os: Miscellaneous operating system interfaces."><code class="sourceCode python">os</code></a>:

    >>> import os
    >>> dir(os)
    <returns a list of all module functions>
    >>> help(os)
    <returns an extensive manual page created from the module's docstrings>

For daily file and directory management tasks, the <a href="https://docs.python.org/3/library/shutil.html#module-shutil" class="reference internal" title="shutil: High-level file operations, including copying."><code class="sourceCode python">shutil</code></a> module provides a higher level interface that is easier to use:

    >>> import shutil
    >>> shutil.copyfile('data.db', 'archive.db')
    'archive.db'
    >>> shutil.move('/build/executables', 'installdir')
    'installdir'

<span id="tut-file-wildcards"></span>

## <span class="section-number">10.2. </span>File Wildcards<a href="#file-wildcards" class="headerlink" title="Permalink to this headline">¶</a>

The <a href="https://docs.python.org/3/library/glob.html#module-glob" class="reference internal" title="glob: Unix shell style pathname pattern expansion."><code class="sourceCode python">glob</code></a> module provides a function for making file lists from directory wildcard searches:

    >>> import glob
    >>> glob.glob('*.py')
    ['primes.py', 'random.py', 'quote.py']

<span id="tut-command-line-arguments"></span>

## <span class="section-number">10.3. </span>Command Line Arguments<a href="#command-line-arguments" class="headerlink" title="Permalink to this headline">¶</a>

Common utility scripts often need to process command line arguments. These arguments are stored in the <a href="https://docs.python.org/3/library/sys.html#module-sys" class="reference internal" title="sys: Access system-specific parameters and functions."><code class="sourceCode python">sys</code></a> module’s _argv_ attribute as a list. For instance the following output results from running `python demo.py one two three` at the command line:

    >>> import sys
    >>> print(sys.argv)
    ['demo.py', 'one', 'two', 'three']

The <a href="https://docs.python.org/3/library/argparse.html#module-argparse" class="reference internal" title="argparse: Command-line option and argument parsing library."><code class="sourceCode python">argparse</code></a> module provides a more sophisticated mechanism to process command line arguments. The following script extracts one or more filenames and an optional number of lines to be displayed:

    import argparse

    parser = argparse.ArgumentParser(prog = 'top',
        description = 'Show top lines from each file')
    parser.add_argument('filenames', nargs='+')
    parser.add_argument('-l', '--lines', type=int, default=10)
    args = parser.parse_args()
    print(args)

When run at the command line with `python top.py --lines=5 alpha.txt beta.txt`, the script sets `args.lines` to `5` and `args.filenames` to `['alpha.txt', 'beta.txt']`.

<span id="tut-stderr"></span>

## <span class="section-number">10.4. </span>Error Output Redirection and Program Termination<a href="#error-output-redirection-and-program-termination" class="headerlink" title="Permalink to this headline">¶</a>

The <a href="https://docs.python.org/3/library/sys.html#module-sys" class="reference internal" title="sys: Access system-specific parameters and functions."><code class="sourceCode python">sys</code></a> module also has attributes for _stdin_, _stdout_, and _stderr_. The latter is useful for emitting warnings and error messages to make them visible even when _stdout_ has been redirected:

    >>> sys.stderr.write('Warning, log file not found starting a new one\n')
    Warning, log file not found starting a new one

The most direct way to terminate a script is to use `sys.exit()`.

<span id="tut-string-pattern-matching"></span>

## <span class="section-number">10.5. </span>String Pattern Matching<a href="#string-pattern-matching" class="headerlink" title="Permalink to this headline">¶</a>

The <a href="https://docs.python.org/3/library/re.html#module-re" class="reference internal" title="re: Regular expression operations."><code class="sourceCode python">re</code></a> module provides regular expression tools for advanced string processing. For complex matching and manipulation, regular expressions offer succinct, optimized solutions:

    >>> import re
    >>> re.findall(r'\bf[a-z]*', 'which foot or hand fell fastest')
    ['foot', 'fell', 'fastest']
    >>> re.sub(r'(\b[a-z]+) \1', r'\1', 'cat in the the hat')
    'cat in the hat'

When only simple capabilities are needed, string methods are preferred because they are easier to read and debug:

    >>> 'tea for too'.replace('too', 'two')
    'tea for two'

<span id="tut-mathematics"></span>

## <span class="section-number">10.6. </span>Mathematics<a href="#mathematics" class="headerlink" title="Permalink to this headline">¶</a>

The <a href="https://docs.python.org/3/library/math.html#module-math" class="reference internal" title="math: Mathematical functions (sin() etc.)."><code class="sourceCode python">math</code></a> module gives access to the underlying C library functions for floating point math:

    >>> import math
    >>> math.cos(math.pi / 4)
    0.70710678118654757
    >>> math.log(1024, 2)
    10.0

The <a href="https://docs.python.org/3/library/random.html#module-random" class="reference internal" title="random: Generate pseudo-random numbers with various common distributions."><code class="sourceCode python">random</code></a> module provides tools for making random selections:

    >>> import random
    >>> random.choice(['apple', 'pear', 'banana'])
    'apple'
    >>> random.sample(range(100), 10)   # sampling without replacement
    [30, 83, 16, 4, 8, 81, 41, 50, 18, 33]
    >>> random.random()    # random float
    0.17970987693706186
    >>> random.randrange(6)    # random integer chosen from range(6)
    4

The <a href="https://docs.python.org/3/library/statistics.html#module-statistics" class="reference internal" title="statistics: Mathematical statistics functions"><code class="sourceCode python">statistics</code></a> module calculates basic statistical properties (the mean, median, variance, etc.) of numeric data:

    >>> import statistics
    >>> data = [2.75, 1.75, 1.25, 0.25, 0.5, 1.25, 3.5]
    >>> statistics.mean(data)
    1.6071428571428572
    >>> statistics.median(data)
    1.25
    >>> statistics.variance(data)
    1.3720238095238095

The SciPy project &lt;<a href="https://scipy.org/" class="reference external">https://scipy.org</a>&gt; has many other modules for numerical computations.

<span id="tut-internet-access"></span>

## <span class="section-number">10.7. </span>Internet Access<a href="#internet-access" class="headerlink" title="Permalink to this headline">¶</a>

There are a number of modules for accessing the internet and processing internet protocols. Two of the simplest are <a href="https://docs.python.org/3/library/urllib.request.html#module-urllib.request" class="reference internal" title="urllib.request: Extensible library for opening URLs."><code class="sourceCode python">urllib.request</code></a> for retrieving data from URLs and <a href="https://docs.python.org/3/library/smtplib.html#module-smtplib" class="reference internal" title="smtplib: SMTP protocol client (requires sockets)."><code class="sourceCode python">smtplib</code></a> for sending mail:

    >>> from urllib.request import urlopen
    >>> with urlopen('http://tycho.usno.navy.mil/cgi-bin/timer.pl') as response:
    ...     for line in response:
    ...         line = line.decode('utf-8')  # Decoding the binary data to text.
    ...         if 'EST' in line or 'EDT' in line:  # look for Eastern Time
    ...             print(line)

    <BR>Nov. 25, 09:43:32 PM EST

    >>> import smtplib
    >>> server = smtplib.SMTP('localhost')
    >>> server.sendmail('soothsayer@example.org', 'jcaesar@example.org',
    ... """To: jcaesar@example.org
    ... From: soothsayer@example.org
    ...
    ... Beware the Ides of March.
    ... """)
    >>> server.quit()

(Note that the second example needs a mailserver running on localhost.)

<span id="tut-dates-and-times"></span>

## <span class="section-number">10.8. </span>Dates and Times<a href="#dates-and-times" class="headerlink" title="Permalink to this headline">¶</a>

The <a href="https://docs.python.org/3/library/datetime.html#module-datetime" class="reference internal" title="datetime: Basic date and time types."><code class="sourceCode python">datetime</code></a> module supplies classes for manipulating dates and times in both simple and complex ways. While date and time arithmetic is supported, the focus of the implementation is on efficient member extraction for output formatting and manipulation. The module also supports objects that are timezone aware.

    >>> # dates are easily constructed and formatted
    >>> from datetime import date
    >>> now = date.today()
    >>> now
    datetime.date(2003, 12, 2)
    >>> now.strftime("%m-%d-%y. %d %b %Y is a %A on the %d day of %B.")
    '12-02-03. 02 Dec 2003 is a Tuesday on the 02 day of December.'

    >>> # dates support calendar arithmetic
    >>> birthday = date(1964, 7, 31)
    >>> age = now - birthday
    >>> age.days
    14368

<span id="tut-data-compression"></span>

## <span class="section-number">10.9. </span>Data Compression<a href="#data-compression" class="headerlink" title="Permalink to this headline">¶</a>

Common data archiving and compression formats are directly supported by modules including: <a href="https://docs.python.org/3/library/zlib.html#module-zlib" class="reference internal" title="zlib: Low-level interface to compression and decompression routines compatible with gzip."><code class="sourceCode python">zlib</code></a>, <a href="https://docs.python.org/3/library/gzip.html#module-gzip" class="reference internal" title="gzip: Interfaces for gzip compression and decompression using file objects."><code class="sourceCode python">gzip</code></a>, <a href="https://docs.python.org/3/library/bz2.html#module-bz2" class="reference internal" title="bz2: Interfaces for bzip2 compression and decompression."><code class="sourceCode python">bz2</code></a>, <a href="https://docs.python.org/3/library/lzma.html#module-lzma" class="reference internal" title="lzma: A Python wrapper for the liblzma compression library."><code class="sourceCode python">lzma</code></a>, <a href="https://docs.python.org/3/library/zipfile.html#module-zipfile" class="reference internal" title="zipfile: Read and write ZIP-format archive files."><code class="sourceCode python">zipfile</code></a> and <a href="https://docs.python.org/3/library/tarfile.html#module-tarfile" class="reference internal" title="tarfile: Read and write tar-format archive files."><code class="sourceCode python">tarfile</code></a>.

    >>> import zlib
    >>> s = b'witch which has which witches wrist watch'
    >>> len(s)
    41
    >>> t = zlib.compress(s)
    >>> len(t)
    37
    >>> zlib.decompress(t)
    b'witch which has which witches wrist watch'
    >>> zlib.crc32(s)
    226805979

<span id="tut-performance-measurement"></span>

## <span class="section-number">10.10. </span>Performance Measurement<a href="#performance-measurement" class="headerlink" title="Permalink to this headline">¶</a>

Some Python users develop a deep interest in knowing the relative performance of different approaches to the same problem. Python provides a measurement tool that answers those questions immediately.

For example, it may be tempting to use the tuple packing and unpacking feature instead of the traditional approach to swapping arguments. The <a href="https://docs.python.org/3/library/timeit.html#module-timeit" class="reference internal" title="timeit: Measure the execution time of small code snippets."><code class="sourceCode python">timeit</code></a> module quickly demonstrates a modest performance advantage:

    >>> from timeit import Timer
    >>> Timer('t=a; a=b; b=t', 'a=1; b=2').timeit()
    0.57535828626024577
    >>> Timer('a,b = b,a', 'a=1; b=2').timeit()
    0.54962537085770791

In contrast to <a href="https://docs.python.org/3/library/timeit.html#module-timeit" class="reference internal" title="timeit: Measure the execution time of small code snippets."><code class="sourceCode python">timeit</code></a>’s fine level of granularity, the <a href="https://docs.python.org/3/library/profile.html#module-profile" class="reference internal" title="profile: Python source profiler."><code class="sourceCode python">profile</code></a> and <a href="https://docs.python.org/3/library/profile.html#module-pstats" class="reference internal" title="pstats: Statistics object for use with the profiler."><code class="sourceCode python">pstats</code></a> modules provide tools for identifying time critical sections in larger blocks of code.

<span id="tut-quality-control"></span>

## <span class="section-number">10.11. </span>Quality Control<a href="#quality-control" class="headerlink" title="Permalink to this headline">¶</a>

One approach for developing high quality software is to write tests for each function as it is developed and to run those tests frequently during the development process.

The <a href="https://docs.python.org/3/library/doctest.html#module-doctest" class="reference internal" title="doctest: Test pieces of code within docstrings."><code class="sourceCode python">doctest</code></a> module provides a tool for scanning a module and validating tests embedded in a program’s docstrings. Test construction is as simple as cutting-and-pasting a typical call along with its results into the docstring. This improves the documentation by providing the user with an example and it allows the doctest module to make sure the code remains true to the documentation:

    def average(values):
        """Computes the arithmetic mean of a list of numbers.

        >>> print(average([20, 30, 70]))
        40.0
        """
        return sum(values) / len(values)

    import doctest
    doctest.testmod()   # automatically validate the embedded tests

The <a href="https://docs.python.org/3/library/unittest.html#module-unittest" class="reference internal" title="unittest: Unit testing framework for Python."><code class="sourceCode python">unittest</code></a> module is not as effortless as the <a href="https://docs.python.org/3/library/doctest.html#module-doctest" class="reference internal" title="doctest: Test pieces of code within docstrings."><code class="sourceCode python">doctest</code></a> module, but it allows a more comprehensive set of tests to be maintained in a separate file:

    import unittest

    class TestStatisticalFunctions(unittest.TestCase):

        def test_average(self):
            self.assertEqual(average([20, 30, 70]), 40.0)
            self.assertEqual(round(average([1, 5, 7]), 1), 4.3)
            with self.assertRaises(ZeroDivisionError):
                average([])
            with self.assertRaises(TypeError):
                average(20, 30, 70)

    unittest.main()  # Calling from the command line invokes all tests

<span id="tut-batteries-included"></span>

## <span class="section-number">10.12. </span>Batteries Included<a href="#batteries-included" class="headerlink" title="Permalink to this headline">¶</a>

Python has a “batteries included” philosophy. This is best seen through the sophisticated and robust capabilities of its larger packages. For example:

- The <a href="https://docs.python.org/3/library/xmlrpc.client.html#module-xmlrpc.client" class="reference internal" title="xmlrpc.client: XML-RPC client access."><code class="sourceCode python">xmlrpc.client</code></a> and <a href="https://docs.python.org/3/library/xmlrpc.server.html#module-xmlrpc.server" class="reference internal" title="xmlrpc.server: Basic XML-RPC server implementations."><code class="sourceCode python">xmlrpc.server</code></a> modules make implementing remote procedure calls into an almost trivial task. Despite the modules names, no direct knowledge or handling of XML is needed.

- The <a href="https://docs.python.org/3/library/email.html#module-email" class="reference internal" title="email: Package supporting the parsing, manipulating, and generating email messages."><code class="sourceCode python">email</code></a> package is a library for managing email messages, including MIME and other <span id="index-1" class="target"></span><a href="https://tools.ietf.org/html/rfc2822.html" class="rfc reference external"><strong>RFC 2822</strong></a>-based message documents. Unlike <a href="https://docs.python.org/3/library/smtplib.html#module-smtplib" class="reference internal" title="smtplib: SMTP protocol client (requires sockets)."><code class="sourceCode python">smtplib</code></a> and <a href="https://docs.python.org/3/library/poplib.html#module-poplib" class="reference internal" title="poplib: POP3 protocol client (requires sockets)."><code class="sourceCode python">poplib</code></a> which actually send and receive messages, the email package has a complete toolset for building or decoding complex message structures (including attachments) and for implementing internet encoding and header protocols.

- The <a href="https://docs.python.org/3/library/json.html#module-json" class="reference internal" title="json: Encode and decode the JSON format."><code class="sourceCode python">json</code></a> package provides robust support for parsing this popular data interchange format. The <a href="https://docs.python.org/3/library/csv.html#module-csv" class="reference internal" title="csv: Write and read tabular data to and from delimited files."><code class="sourceCode python">csv</code></a> module supports direct reading and writing of files in Comma-Separated Value format, commonly supported by databases and spreadsheets. XML processing is supported by the <a href="https://docs.python.org/3/library/xml.etree.elementtree.html#module-xml.etree.ElementTree" class="reference internal" title="xml.etree.ElementTree: Implementation of the ElementTree API."><code class="sourceCode python">xml.etree.ElementTree</code></a>, <a href="https://docs.python.org/3/library/xml.dom.html#module-xml.dom" class="reference internal" title="xml.dom: Document Object Model API for Python."><code class="sourceCode python">xml.dom</code></a> and <a href="https://docs.python.org/3/library/xml.sax.html#module-xml.sax" class="reference internal" title="xml.sax: Package containing SAX2 base classes and convenience functions."><code class="sourceCode python">xml.sax</code></a> packages. Together, these modules and packages greatly simplify data interchange between Python applications and other tools.

- The <a href="https://docs.python.org/3/library/sqlite3.html#module-sqlite3" class="reference internal" title="sqlite3: A DB-API 2.0 implementation using SQLite 3.x."><code class="sourceCode python">sqlite3</code></a> module is a wrapper for the SQLite database library, providing a persistent database that can be updated and accessed using slightly nonstandard SQL syntax.

- Internationalization is supported by a number of modules including <a href="https://docs.python.org/3/library/gettext.html#module-gettext" class="reference internal" title="gettext: Multilingual internationalization services."><code class="sourceCode python">gettext</code></a>, <a href="https://docs.python.org/3/library/locale.html#module-locale" class="reference internal" title="locale: Internationalization services."><code class="sourceCode python">locale</code></a>, and the <a href="https://docs.python.org/3/library/codecs.html#module-codecs" class="reference internal" title="codecs: Encode and decode data and streams."><code class="sourceCode python">codecs</code></a> package.

### [Table of Contents](https://docs.python.org/3/contents.html)

- <a href="#" class="reference internal">10. Brief Tour of the Standard Library</a>
  - <a href="#operating-system-interface" class="reference internal">10.1. Operating System Interface</a>
  - <a href="#file-wildcards" class="reference internal">10.2. File Wildcards</a>
  - <a href="#command-line-arguments" class="reference internal">10.3. Command Line Arguments</a>
  - <a href="#error-output-redirection-and-program-termination" class="reference internal">10.4. Error Output Redirection and Program Termination</a>
  - <a href="#string-pattern-matching" class="reference internal">10.5. String Pattern Matching</a>
  - <a href="#mathematics" class="reference internal">10.6. Mathematics</a>
  - <a href="#internet-access" class="reference internal">10.7. Internet Access</a>
  - <a href="#dates-and-times" class="reference internal">10.8. Dates and Times</a>
  - <a href="#data-compression" class="reference internal">10.9. Data Compression</a>
  - <a href="#performance-measurement" class="reference internal">10.10. Performance Measurement</a>
  - <a href="#quality-control" class="reference internal">10.11. Quality Control</a>
  - <a href="#batteries-included" class="reference internal">10.12. Batteries Included</a>

#### Previous topic

[<span class="section-number">9. </span>Classes](classes.html 'previous chapter')

#### Next topic

[<span class="section-number">11. </span>Brief Tour of the Standard Library — Part II](stdlib2.html 'next chapter')

### This Page

- [Report a Bug](https://docs.python.org/3/bugs.html)
- [Show Source](https://github.com/python/cpython/blob/3.9/Doc/tutorial/stdlib.rst)

### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](stdlib2.html '11. Brief Tour of the Standard Library — Part II') |
- [previous](classes.html '9. Classes') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-
