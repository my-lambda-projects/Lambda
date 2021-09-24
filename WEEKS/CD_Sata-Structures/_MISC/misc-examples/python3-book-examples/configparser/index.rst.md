configparser \-\-- Work with Configuration Files
================================================

::: {.module synopsis="Read/write configuration files similar to Windows INI files"}
configparser
:::

Purpose

:   Read/write configuration files similar to Windows INI files

Use the `configparser` module to manage user-editable configuration
files for an application. The contents of the configuration files can be
organized into groups and several option value types are supported,
including integers, floating point values, and Booleans. Option values
can be combined using Python formatting strings, to build longer values
such as URLs from shorter values like host names and port numbers.

Configuration File Format
-------------------------

The file format used by `configparser` is similar to the format used by
older versions of Microsoft Windows. It consists of one or more named
*sections*, each of which can contain individual *options* with names
and values.

Config file sections are identified by looking for lines starting with
`[` and ending with `]`. The value between the square brackets is the
section name, and can contain any characters except square brackets.

Options are listed one per line within a section. The line starts with
the name of the option, which is separated from the value by a colon
(`:`) or equal sign (`=`). Whitespace around the separator is ignored
when the file is parsed.

Lines starting with semi-colon (`;`) or octothorpe (`#`) are treated as
comments and not visible when accessing the contents of the
configuration file programmatically.

This sample configuration file has a section named `bug_tracker` with
three options, `url`, `username`, and `password`.

::: {.literalinclude}
simple.ini
:::

Reading Configuration Files
---------------------------

The most common use for a configuration file is to have a user or system
administrator edit the file with a regular text editor to set
application behavior defaults and then have the application read the
file, parse it, and act based on its contents. Use the `read()` method
of `ConfigParser`{.interpreted-text role="mod"} to read the
configuration file.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_read.py
:::

This program reads the `simple.ini` file from the previous section and
prints the value of the `url` option from the `bug_tracker` section.

``` {.sourceCode .none}
$ python3 configparser_read.py

http://localhost:8080/bugs/
```

The `read()` method also accepts a list of filenames. Each name in turn
is scanned, and if the file exists it is opened and read.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_read\_many.py
:::

`read()` returns a list containing the names of the files successfully
loaded, so the program can discover which configuration files are
missing and decide whether to ignore them or treat the condition as an
error.

``` {.sourceCode .none}
$ python3 configparser_read_many.py

Found config files: ['multisection.ini', 'simple.ini']
Missing files     : ['also-does-not-exist.ini',
'does_not_exist.ini']
```

### Unicode Configuration Data

Configuration files containing Unicode data should be read using the
proper encoding value. The following example file changes the password
value of the original input to contain Unicode characters and is encoded
using UTF-8.

::: {.literalinclude language="none" caption=""}
unicode.ini
:::

The file is opened with the appropriate decoder, converting the UTF-8
data to native Unicode strings.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_unicode.py
:::

The value returned by `get()` is a Unicode string, so in order to print
it safely it must be re-encoded as UTF-8.

``` {.sourceCode .none}
$ python3 configparser_unicode.py

Password: b'\xc3\x9f\xc3\xa9\xc3\xa7\xc2\xae\xc3\xa9\xe2\x80\xa0
'
Type    : <class 'str'>
repr()  : 'ßéç®é†'
```

Accessing Configuration Settings
--------------------------------

`ConfigParser` includes methods for examining the structure of the
parsed configuration, including listing the sections and options, and
getting their values. This configuration file includes two sections for
separate web services.

::: {.literalinclude}
multisection.ini
:::

And this sample program exercises some of the methods for looking at the
configuration data, including `sections()`, `options()`, and `items()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_structure.py
:::

Both `sections()` and `options()` return lists of strings, while
`items()` returns a list of tuples containing the name-value pairs.

``` {.sourceCode .none}
$ python3 configparser_structure.py

Section: bug_tracker
  Options: ['url', 'username', 'password']
  url = http://localhost:8080/bugs/
  username = dhellmann
  password = SECRET

Section: wiki
  Options: ['url', 'username', 'password']
  url = http://localhost:8080/wiki/
  username = dhellmann
  password = SECRET
```

A `ConfigParser` also supports the same mapping API as
[dict]{.title-ref}, with the `ConfigParser` acting as one dictionary
containing separate dictionaries for each section.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_structure\_dict.py
:::

Using the mapping API to access the same configuration file produces the
same output.

``` {.sourceCode .none}
$ python3 configparser_structure_dict.py

Section: DEFAULT
  Options: []

Section: bug_tracker
  Options: ['url', 'username', 'password']
  url = http://localhost:8080/bugs/
  username = dhellmann
  password = SECRET

Section: wiki
  Options: ['url', 'username', 'password']
  url = http://localhost:8080/wiki/
  username = dhellmann
  password = SECRET
```

### Testing Whether Values Are Present

To test if a section exists, use `has_section()`, passing the section
name.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_has\_section.py
:::

Testing if a section exists before calling `get()` avoids exceptions for
missing data.

``` {.sourceCode .none}
$ python3 configparser_has_section.py

wiki        : True
bug_tracker : True
dvcs        : False
```

Use `has_option()` to test if an option exists within a section.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_has\_option.py
:::

If the section does not exist, `has_option()` returns `False`.

``` {.sourceCode .none}
$ python3 configparser_has_option.py

wiki section exists: True
wiki.username      : True
wiki.password      : True
wiki.url           : True
wiki.description   : False

none section exists: False
none.username      : False
none.password      : False
none.url           : False
none.description   : False
```

### Value Types

All section and option names are treated as strings, but option values
can be strings, integers, floating point numbers, or Booleans. There are
a range of possible Boolean values that are converted true or false. The
following example file includes one of each.

::: {.literalinclude caption=""}
types.ini
:::

`ConfigParser` does not make any attempt to understand the option type.
The application is expected to use the correct method to fetch the value
as the desired type. `get()` always returns a string. Use `getint()` for
integers, `getfloat()` for floating point numbers, and `getboolean()`
for boolean values.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_value\_types.py
:::

Running this program with the example input produces the following
output.

``` {.sourceCode .none}
$ python3 configparser_value_types.py

Integers:
  positive     : '1'     -> 1
  negative     : '-5'    -> -5

Floats:
  positive     : '0.2'   -> 0.20
  negative     : '-3.14' -> -3.14

Booleans:
  number_true  : '1'     -> True
  number_false : '0'     -> False
  yn_true      : 'yes'   -> True
  yn_false     : 'no'    -> False
  tf_true      : 'true'  -> True
  tf_false     : 'false' -> False
  onoff_true   : 'on'    -> True
  onoff_false  : 'false' -> False
```

Custom type converters can be added by passing conversion functions in
the `converters` argument to `ConfigParser`. Each converter receives a
single input value, and should transform that value into the appropriate
return type.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_custom\_types.py
:::

Adding a converter causes `ConfigParser` to automatically create a
retrieval method for that type, using the name of the type as specified
in `converters`. In this example, the `'datetime'` converter causes a
new `getdatetime()` method to be added.

``` {.sourceCode .none}
$ python3 configparser_custom_types.py

parse_iso_datetime('2015-11-08T11:30:05.905898')
due_date : '2015-11-08T11:30:05.905898' -> datetime.datetime(201
5, 11, 8, 11, 30, 5, 905898)
```

It is also possible to add converter methods directly to a subclass of
`ConfigParser`.

### Options as Flags

Usually, the parser requires an explicit value for each option, but with
the `ConfigParser` parameter `allow_no_value` set to `True` an option
can appear by itself on a line in the input file, and be used as a flag.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_allow\_no\_value.py
:::

When an option has no explicit value, `has_option()` reports that the
option exists and `get()` returns `None`.

``` {.sourceCode .none}
$ python3 configparser_allow_no_value.py

Could not parse: Source contains parsing errors:
'allow_no_value.ini'
    [line  2]: 'turn_feature_on\n'

Trying again with allow_no_value=True

 turn_feature_on
  has_option: True
         get: None

 turn_other_feature_on
  has_option: False
```

### Multi-line Strings

String values can span multiple lines, if subsequent lines are indented.

::: {.literalinclude}
multiline.ini
:::

Within the indented multi-line values, blank lines are treated as part
of the value and preserved.

``` {.sourceCode .none}
$ python3 configparser_multiline.py

This is a multi-line string.
With two paragraphs.

They are separated by a completely empty line.
```

Modifying Settings
------------------

While `ConfigParser` is primarily intended to be configured by reading
settings from files, settings can also be populated by calling
`add_section()` to create a new section, and `set()` to add or change an
option.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_populate.py
:::

All options must be set as strings, even if they will be retrieved as
integer, float, or Boolean values.

``` {.sourceCode .none}
$ python3 configparser_populate.py

bug_tracker
  url = 'http://localhost:8080/bugs'
  username = 'dhellmann'
  password = 'secret'
```

Sections and options can be removed from a `ConfigParser` with
`remove_section()` and `remove_option()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_remove.py
:::

Removing a section deletes any options it contains.

``` {.sourceCode .none}
$ python3 configparser_remove.py

Read values:

bug_tracker
  url = 'http://localhost:8080/bugs/'
  username = 'dhellmann'
  password = 'SECRET'
wiki
  url = 'http://localhost:8080/wiki/'
  username = 'dhellmann'
  password = 'SECRET'

Modified values:

bug_tracker
  url = 'http://localhost:8080/bugs/'
  username = 'dhellmann'
```

Saving Configuration Files
--------------------------

Once a `ConfigParser` is populated with desired data, it can be saved to
a file by calling the `write()` method. This makes it possible to
provide a user interface for editing the configuration settings, without
having to write any code to manage the file.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_write.py
:::

The `write()` method takes a file-like object as argument. It writes the
data out in the INI format so it can be parsed again by `ConfigParser`.

``` {.sourceCode .none}
$ python3 configparser_write.py

[bug_tracker]
url = http://localhost:8080/bugs
username = dhellmann
password = secret
```

::: {.warning}
::: {.admonition-title}
Warning
:::

Comments in the original configuration file are not preserved when
reading, modifying, and re-writing a configuration file.
:::

Option Search Path
------------------

`ConfigParser` uses a multi-step search process when looking for an
option.

Before starting the option search, the section name is tested. If the
section does not exist, and the name is not the special value `DEFAULT`,
then `NoSectionError` is raised.

1.  If the option name appears in the `vars` dictionary passed to
    `get()`, the value from `vars` is returned.
2.  If the option name appears in the specified section, the value from
    that section is returned.
3.  If the option name appears in the `DEFAULT` section, that value is
    returned.
4.  If the option name appears in the `defaults` dictionary passed to
    the constructor, that value is returned.

If the name is not found in any of those locations, `NoOptionError` is
raised.

The search path behavior can be demonstrated using this configuration
file.

::: {.literalinclude}
with-defaults.ini
:::

This test program includes default settings for options not specified in
the configuration file, and overrides some values that are defined in
the file.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_defaults.py
:::

The output shows the origin for the value of each option and illustrates
the way defaults from different sources override existing values.

``` {.sourceCode .none}
$ python3 configparser_defaults.py

Defaults before loading file:
  from-default    = 'value from defaults passed to init'
  from-section    = 'value from defaults passed to init'
  init-only       = 'value from defaults passed to init'
  init-and-file   = 'value from defaults passed to init'
  from-vars       = 'value from defaults passed to init'

Defaults after loading file:
  from-default    = 'value from defaults passed to init'
  from-section    = 'value from DEFAULT section'
  file-only       = 'value from DEFAULT section'
  init-only       = 'value from defaults passed to init'
  init-and-file   = 'value from DEFAULT section'
  from-vars       = 'value from DEFAULT section'

Option lookup:
  from-default    = 'value from defaults passed to init'
  from-section    = 'value from section in file'
  section-only    = 'value from section in file'
  file-only       = 'value from DEFAULT section'
  init-only       = 'value from defaults passed to init'
  init-and-file   = 'value from DEFAULT section'
  from-vars       = 'value from vars'

Error cases:
No option 'no-option' in section: 'sect'
No section: 'no-sect'
```

Combining Values with Interpolation
-----------------------------------

`ConfigParser` provides a feature called *interpolation* that can be
used to combine values together. Values containing standard Python
format strings trigger the interpolation feature when they are
retrieved. Options named within the value being fetched are replaced
with their values in turn, until no more substitution is necessary.

The URL examples from earlier in this section can be rewritten to use
interpolation to make it easier to change only part of the value. For
example, this configuration file separates the protocol, hostname, and
port from the URL as separate options.

::: {.literalinclude}
interpolation.ini
:::

Interpolation is performed by default each time `get()` is called. Pass
a true value in the `raw` argument to retrieve the original value,
without interpolation.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_interpolation.py
:::

Because the value is computed by `get()`, changing one of the settings
being used by the `url` value changes the return value.

``` {.sourceCode .none}
$ python3 configparser_interpolation.py

Original value       : http://localhost:8080/bugs/
Altered port value   : http://localhost:9090/bugs/
Without interpolation: %(protocol)s://%(server)s:%(port)s/bugs/
```

### Using Defaults

Values for interpolation do not need to appear in the same section as
the original option. Defaults can be mixed with override values.

::: {.literalinclude}
interpolation\_defaults.ini
:::

With this configuration, the value for `url` comes from the `DEFAULT`
section, and the substitution starts by looking in `bug_tracker` and
falling back to `DEFAULT` for pieces not found.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_interpolation\_defaults.py
:::

The `hostname` and `port` values come from the `bug_tracker` section,
but the `protocol` comes from `DEFAULT`.

``` {.sourceCode .none}
$ python3 configparser_interpolation_defaults.py

URL: http://localhost:8080/bugs/
```

### Substitution Errors

Substitution stops after `MAX_INTERPOLATION_DEPTH`{.interpreted-text
role="attr"} steps to avoid problems due to recursive references.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_interpolation\_recursion.py
:::

An `InterpolationDepthError` exception is raised if there are too many
substitution steps.

``` {.sourceCode .none}
$ python3 configparser_interpolation_recursion.py

ERROR: Recursion limit exceeded in value substitution: option 'o
pt' in section 'sect' contains an interpolation key which cannot
 be substituted in 10 steps. Raw value: '%(opt)s'
```

Missing values result in an `InterpolationMissingOptionError` exception.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_interpolation\_error.py
:::

Since no `server` value is defined, the `url` cannot be constructed.

``` {.sourceCode .none}
$ python3 configparser_interpolation_error.py

ERROR: Bad value substitution: option 'url' in section
'bug_tracker' contains an interpolation key 'server' which is
not a valid option name. Raw value:
'http://%(server)s:%(port)s/bugs'
```

### Escaping Special Characters

Since `%` starts the interpolation instructions, a literal `%` in a
value must be escaped as `%%`.

::: {.literalinclude}
escape.ini
:::

Reading the value does not require any special consideration.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_escape.py
:::

When the value is read, the `%%` is converted to `%` automatically.

``` {.sourceCode .none}
$ python3 configparser_escape.py

a literal % must be escaped
```

### Extended Interpolation

`ConfigParser` supports alternate interpolation implementations Passing
an object that supports the API defined by `Interpolation` to the
`interpolation` parameter. For example, using `ExtendedInterpolation`
instead of the default `BasicInterpolation` enables a different syntax
using `${}` to indicate variables.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_extendedinterpolation.py
:::

Extended interpolation supports accessing values from other sections of
the configuration file by prefixing the variable name with the section
name and a colon (`:`).

::: {.literalinclude language="none"}
extended\_interpolation.ini
:::

Referring to values in other sections of the file makes it possible to
share a hierarchy of values, without placing all defaults in the
`DEFAULTS` section.

``` {.sourceCode .none}
$ python3 configparser_extendedinterpolation.py

Original value       : http://localhost:8080/bugs/
Altered port value   : http://localhost:9090/bugs/
Without interpolation: http://${intranet:server}:${intranet:port
}/bugs/
```

### Disabling Interpolation

To disable interpolation, pass `None` instead of an `Interpolation`
object.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
configparser\_nointerpolation.py
:::

This enables any syntax that might have been processed by the
interpolation object to be safely ignored.

``` {.sourceCode .none}
$ python3 configparser_nointerpolation.py

Without interpolation: %(protocol)s://%(server)s:%(port)s/bugs/
```

::: {.seealso}
-   `configparser`{.interpreted-text role="pydoc"}
-   [ConfigObj](http://configobj.readthedocs.org/en/latest/configobj.html)
    \-- An advanced configuration file parser with support for features
    like content validation.
-   `Python 2 to 3 porting notes for configparser <porting-configparser>`{.interpreted-text
    role="ref"}
:::
