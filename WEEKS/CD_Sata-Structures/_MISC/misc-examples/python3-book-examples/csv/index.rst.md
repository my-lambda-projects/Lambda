csv \-\-- Comma-separated Value Files
=====================================

::: {.module synopsis="Read and write comma separated value files."}
csv
:::

Purpose

:   Read and write comma separated value files.

The `csv` module can be used to work with data exported from
spreadsheets and databases into text files formatted with fields and
records, commonly referred to as *comma-separated value* (CSV) format
because commas are often used to separate the fields in a record.

Reading
-------

Use `reader()` to create a an object for reading data from a CSV file.
The reader can be used as an iterator to process the rows of the file in
order. For example

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
csv\_reader.py
:::

The first argument to `reader()` is the source of text lines. In this
case, it is a file, but any iterable is accepted (a
`StringIO`{.interpreted-text role="mod"} instance, `list`, etc.). Other
optional arguments can be given to control how the input data is parsed.

::: {.literalinclude}
testdata.csv
:::

As it is read, each row of the input data is parsed and converted to a
`list` of strings.

``` {.sourceCode .none}
$ python3 csv_reader.py testdata.csv

['Title 1', 'Title 2', 'Title 3', 'Title 4']
['1', 'a', '08/18/07', 'å']
['2', 'b', '08/19/07', '∫']
['3', 'c', '08/20/07', 'ç']
```

The parser handles line breaks embedded within strings in a row, which
is why a \"row\" is not always the same as a \"line\" of input from the
file.

::: {.literalinclude}
testlinebreak.csv
:::

Fields with line breaks in the input retain the internal line breaks
when they are returned by the parser.

``` {.sourceCode .none}
$ python3 csv_reader.py testlinebreak.csv

['Title 1', 'Title 2', 'Title 3']
['1', 'first line\nsecond line', '08/18/07']
```

Writing
-------

Writing CSV files is just as easy as reading them. Use `writer()` to
create an object for writing, then iterate over the rows, using
`writerow()` to print them.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
csv\_writer.py
:::

The output does not look exactly like the exported data used in the
reader example because it lacks quotes around some of the values.

``` {.sourceCode .none}
$ python3 csv_writer.py testout.csv

Title 1,Title 2,Title 3,Title 4
1,a,08/01/07,å
2,b,08/02/07,∫
3,c,08/03/07,ç
```

### Quoting {#csv-quoting}

The default quoting behavior is different for the writer, so the second
and third columns in the previous example are not quoted. To add
quoting, set the `quoting` argument to one of the other quoting modes.

``` {.sourceCode .none}
writer = csv.writer(f, quoting=csv.QUOTE_NONNUMERIC)
```

In this case, `QUOTE_NONNUMERIC` adds quotes around all columns that
contain values that are not numbers.

``` {.sourceCode .none}
$ python3 csv_writer_quoted.py testout_quoted.csv

"Title 1","Title 2","Title 3","Title 4"
1,"a","08/01/07","å"
2,"b","08/02/07","∫"
3,"c","08/03/07","ç"
```

There are four different quoting options, defined as constants in the
csv module.

`QUOTE_ALL`

:   Quote everything, regardless of type.

`QUOTE_MINIMAL`

:   Quote fields with special characters (anything that would confuse a
    parser configured with the same dialect and options). This is the
    default

`QUOTE_NONNUMERIC`

:   Quote all fields that are not integers or floats. When used with the
    reader, input fields that are not quoted are converted to floats.

`QUOTE_NONE`

:   Do not quote anything on output. When used with the reader, quote
    characters are included in the field values (normally, they are
    treated as delimiters and stripped).

Dialects
--------

There is no well-defined standard for comma-separated value files, so
the parser needs to be flexible. This flexibility means there are many
parameters to control how `csv` parses or writes data. Rather than
passing each of these parameters to the reader and writer separately,
they are grouped together into a *dialect* object.

Dialect classes can be registered by name, so that callers of the `csv`
module do not need to know the parameter settings in advance. The
complete list of registered dialects can be retrieved with
`list_dialects()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
csv\_list\_dialects.py
:::

The standard library includes three dialects: `excel`, `excel-tabs`, and
`unix`. The `excel` dialect is for working with data in the default
export format for Microsoft Excel, and also works with
[LibreOffice](http://www.libreoffice.org). The `unix` dialect quotes all
fields with double-quotes and uses `\n` as the record separator.

``` {.sourceCode .none}
$ python3 csv_list_dialects.py

['excel', 'excel-tab', 'unix']
```

### Creating a Dialect

If, instead of using commas to delimit fields, the input file uses pipes
(`|`), like this

::: {.literalinclude}
testdata.pipes
:::

a new dialect can be registered using the appropriate delimiter.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
csv\_dialect.py
:::

Using the \"pipes\" dialect, the file can be read just as with the
comma-delimited file.

``` {.sourceCode .none}
$ python3 csv_dialect.py

['Title 1', 'Title 2', 'Title 3']
['1', 'first line\nsecond line', '08/18/07']
```

### Dialect Parameters

A dialect specifies all of the tokens used when parsing or writing a
data file. `CSV Dialect Parameters`{.interpreted-text role="table"}
lists the aspects of the file format that can be specified, from the way
columns are delimited to the character used to escape a token.

  -------------------------------------------------------------------------------
  Attribute          Default           Meaning
  ------------------ ----------------- ------------------------------------------
  delimiter          `,`               Field separator (one character)

  doublequote        True              Flag controlling whether quotechar
                                       instances are doubled

  escapechar         None              Character used to indicate an escape
                                       sequence

  lineterminator     `\r\n`            String used by writer to terminate a line

  quotechar          `"`               String to surround fields containing
                                       special values (one character)

  quoting            `QUOTE_MINIMAL`   Controls quoting behavior described
                                       earlier

  skipinitialspace   False             Ignore whitespace after the field
                                       delimiter
  -------------------------------------------------------------------------------

  : CSV Dialect Parameters

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
csv\_dialect\_variations.py
:::

This program shows how the same data appears when formatted using
several different dialects.

``` {.sourceCode .none}
$ python3 csv_dialect_variations.py

Dialect: "escaped"

  delimiter   = ','       skipinitialspace = 0
  doublequote = 0         quoting          = QUOTE_NONE
  quotechar   = '"'       lineterminator   = '\r\n'
  escapechar  = '\\'  

col1,1,10/01/2010,Special chars: \" ' \, to parse

Dialect: "excel"

  delimiter   = ','       skipinitialspace = 0
  doublequote = 1         quoting          = QUOTE_MINIMAL
  quotechar   = '"'       lineterminator   = '\r\n'
  escapechar  = None  

col1,1,10/01/2010,"Special chars: "" ' , to parse"

Dialect: "excel-tab"

  delimiter   = '\t'      skipinitialspace = 0
  doublequote = 1         quoting          = QUOTE_MINIMAL
  quotechar   = '"'       lineterminator   = '\r\n'
  escapechar  = None  

col1    1   10/01/2010  "Special chars: "" '     to parse"

Dialect: "singlequote"

  delimiter   = ','       skipinitialspace = 0
  doublequote = 1         quoting          = QUOTE_ALL
  quotechar   = "'"       lineterminator   = '\r\n'
  escapechar  = None  

'col1','1','10/01/2010','Special chars: " '' , to parse'

Dialect: "unix"

  delimiter   = ','       skipinitialspace = 0
  doublequote = 1         quoting          = QUOTE_ALL
  quotechar   = '"'       lineterminator   = '\n'
  escapechar  = None  

"col1","1","10/01/2010","Special chars: "" ' , to parse"
```

### Automatically Detecting Dialects

The best way to configure a dialect for parsing an input file is to know
the correct settings in advance. For data where the dialect parameters
are unknown, the `Sniffer` class can be used to make an educated guess.
The `sniff()` method takes a sample of the input data and an optional
argument giving the possible delimiter characters.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
csv\_dialect\_sniffer.py
:::

`sniff()` returns a `Dialect` instance with the settings to be used for
parsing the data. The results are not always perfect, as demonstrated by
the \"escaped\" dialect in the example.

``` {.sourceCode .none}
$ python3 csv_dialect_sniffer.py

Dialect: "escaped"
In: col1,1,10/01/2010,Special chars \" ' \, to parse
Parsed:
  'col1'
  '1'
  '10/01/2010'
  'Special chars \\" \' \\'
  ' to parse'

Dialect: "excel"
In: col1,1,10/01/2010,"Special chars "" ' , to parse"
Parsed:
  'col1'
  '1'
  '10/01/2010'
  'Special chars " \' , to parse'

Dialect: "excel-tab"
In: col1    1   10/01/2010  "Special chars "" '      to parse"
Parsed:
  'col1'
  '1'
  '10/01/2010'
  'Special chars " \' \t to parse'

Dialect: "singlequote"
In: 'col1','1','10/01/2010','Special chars " '' , to parse'
Parsed:
  'col1'
  '1'
  '10/01/2010'
  'Special chars " \' , to parse'

Dialect: "unix"
In: "col1","1","10/01/2010","Special chars "" ' , to parse"
Parsed:
  'col1'
  '1'
  '10/01/2010'
  'Special chars " \' , to parse'
```

Using Field Names
-----------------

In addition to working with sequences of data, the `csv` module includes
classes for working with rows as dictionaries so that the fields can be
named. The `DictReader` and `DictWriter` classes translate rows to
dictionaries instead of lists. Keys for the dictionary can be passed in,
or inferred from the first row in the input (when the row contains
headers).

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
csv\_dictreader.py
:::

The dictionary-based reader and writer are implemented as wrappers
around the sequence-based classes, and use the same methods and
arguments. The only difference in the reader API is that rows are
returned as `OrderedDict <OrderedDict>`{.interpreted-text role="ref"}
instances instead of lists or tuples (under earlier verison of Python,
the rows were returned as regular `dict` instances).

``` {.sourceCode .none}
$ python3 csv_dictreader.py testdata.csv

OrderedDict([('Title 1', '1'), ('Title 2', 'a'), ('Title 3', 
'08/18/07'), ('Title 4', 'å')])
OrderedDict([('Title 1', '2'), ('Title 2', 'b'), ('Title 3', 
'08/19/07'), ('Title 4', '∫')])
OrderedDict([('Title 1', '3'), ('Title 2', 'c'), ('Title 3', 
'08/20/07'), ('Title 4', 'ç')])
```

The `DictWriter` must be given a list of field names so it knows how to
order the columns in the output.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
csv\_dictwriter.py
:::

The field names are not written to the file automatically, but they can
be written explicitly using the `writeheader()` method.

``` {.sourceCode .none}
$ python3 csv_dictwriter.py testout.csv

Title 1,Title 2,Title 3,Title 4
1,a,08/01/07,å
2,b,08/02/07,∫
3,c,08/03/07,ç
```

::: {.seealso}
-   `csv`{.interpreted-text role="pydoc"}
-   `305`{.interpreted-text role="pep"} \-- CSV File API
-   `Python 2 to 3 porting notes for csv <porting-csv>`{.interpreted-text
    role="ref"}
:::
