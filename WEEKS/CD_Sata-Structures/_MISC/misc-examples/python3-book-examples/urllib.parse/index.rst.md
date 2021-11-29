urllib.parse \-\-- Split URLs into Components
=============================================

::: {.module synopsis="Split URL into components"}
urllib.parse
:::

Purpose

:   Split URL into components

The `urllib.parse` module provides functions for manipulating URLs and
their component parts, to either break them down or build them up.

Parsing
-------

The return value from the `urlparse()` function is a `ParseResult`
object that acts like a `tuple` with six elements.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
urllib\_parse\_urlparse.py
:::

The parts of the URL available through the tuple interface are the
scheme, network location, path, path segment parameters (separated from
the path by a semicolon), query, and fragment.

``` {.sourceCode .none}
$ python3 urllib_parse_urlparse.py

ParseResult(scheme='http', netloc='netloc', path='/path',
params='param', query='query=arg', fragment='frag')
```

Although the return value acts like a tuple, it is really based on a
`namedtuple`, a subclass of `tuple` that supports accessing the parts of
the URL via named attributes as well as indexes. In addition to being
easier to use for the programmer, the attribute API also offers access
to several values not available in the `tuple` API.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
urllib\_parse\_urlparseattrs.py
:::

The `username` and `password` are available when present in the input
URL, and set to `None` when not. The `hostname` is the same value as
`netloc`, in all lower case and with the port value stripped. And the
`port` is converted to an integer when present and `None` when not.

``` {.sourceCode .none}
$ python3 urllib_parse_urlparseattrs.py

scheme  : http
netloc  : user:pwd@NetLoc:80
path    : /path
params  : param
query   : query=arg
fragment: frag
username: user
password: pwd
hostname: netloc
port    : 80
```

The `urlsplit()` function is an alternative to `urlparse()`. It behaves
a little differently, because it does not split the parameters from the
URL. This is useful for URLs following `2396`{.interpreted-text
role="rfc"}, which supports parameters for each segment of the path.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
urllib\_parse\_urlsplit.py
:::

Since the parameters are not split out, the tuple API will show five
elements instead of six, and there is no `params` attribute.

``` {.sourceCode .none}
$ python3 urllib_parse_urlsplit.py

SplitResult(scheme='http', netloc='user:pwd@NetLoc:80',
path='/p1;para/p2;para', query='query=arg', fragment='frag')
scheme  : http
netloc  : user:pwd@NetLoc:80
path    : /p1;para/p2;para
query   : query=arg
fragment: frag
username: user
password: pwd
hostname: netloc
port    : 80
```

To simply strip the fragment identifier from a URL, such as when finding
a base page name from a URL, use `urldefrag()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
urllib\_parse\_urldefrag.py
:::

The return value is a `DefragResult`, based on `namedtuple`, containing
the base URL and the fragment.

``` {.sourceCode .none}
$ python3 urllib_parse_urldefrag.py

original: http://netloc/path;param?query=arg#frag
url     : http://netloc/path;param?query=arg
fragment: frag
```

Unparsing
---------

There are several ways to assemble the parts of a split URL back
together into a single string. The parsed URL object has a `geturl()`
method.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
urllib\_parse\_geturl.py
:::

`geturl()` only works on the object returned by `urlparse()` or
`urlsplit()`.

``` {.sourceCode .none}
$ python3 urllib_parse_geturl.py

ORIG  : http://netloc/path;param?query=arg#frag
PARSED: http://netloc/path;param?query=arg#frag
```

A regular tuple containing strings can be combined into a URL with
`urlunparse()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
urllib\_parse\_urlunparse.py
:::

While the `ParseResult` returned by `urlparse()` can be used as a tuple,
this example explicitly creates a new tuple to show that `urlunparse()`
works with normal tuples, too.

``` {.sourceCode .none}
$ python3 urllib_parse_urlunparse.py

ORIG  : http://netloc/path;param?query=arg#frag
PARSED: <class 'urllib.parse.ParseResult'>
ParseResult(scheme='http', netloc='netloc', path='/path',
params='param', query='query=arg', fragment='frag')
TUPLE : <class 'tuple'> ('http', 'netloc', '/path', 'param',
'query=arg', 'frag')
NEW   : http://netloc/path;param?query=arg#frag
```

If the input URL included superfluous parts, those may be dropped from
the reconstructed URL.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
urllib\_parse\_urlunparseextra.py
:::

In this case, `parameters`, `query`, and `fragment` are all missing in
the original URL. The new URL does not look the same as the original,
but is equivalent according to the standard.

``` {.sourceCode .none}
$ python3 urllib_parse_urlunparseextra.py

ORIG  : http://netloc/path;?#
PARSED: <class 'urllib.parse.ParseResult'>
ParseResult(scheme='http', netloc='netloc', path='/path',
params='', query='', fragment='')
TUPLE : <class 'tuple'> ('http', 'netloc', '/path', '', '', '')
NEW   : http://netloc/path
```

Joining
-------

In addition to parsing URLs, `urlparse`{.interpreted-text role="mod"}
includes `urljoin()` for constructing absolute URLs from relative
fragments.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
urllib\_parse\_urljoin.py
:::

In the example, the relative portion of the path (`"../"`) is taken into
account when the second URL is computed.

``` {.sourceCode .none}
$ python3 urllib_parse_urljoin.py

http://www.example.com/path/anotherfile.html
http://www.example.com/anotherfile.html
```

Non-relative paths are handled in the same way as by `os.path.join()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
urllib\_parse\_urljoin\_with\_path.py
:::

If the path being joined to the URL starts with a slash (`/`), it resets
the URL\'s path to the top level. If it does not start with a slash, it
is appended to the end of the path for the URL.

``` {.sourceCode .none}
$ python3 urllib_parse_urljoin_with_path.py

http://www.example.com/subpath/file.html
http://www.example.com/path/subpath/file.html
```

Encoding Query Arguments {#urllib-urlencode}
------------------------

Before arguments can be added to a URL, they need to be encoded.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
urllib\_parse\_urlencode.py
:::

Encoding replaces special characters like spaces to ensure they are
passed to the server using a format that complies with the standard.

``` {.sourceCode .none}
$ python3 urllib_parse_urlencode.py

Encoded: q=query+string&foo=bar
```

To pass a sequence of values using separate occurrences of the variable
in the query string, set `doseq` to `True` when calling `urlencode()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
urllib\_parse\_urlencode\_doseq.py
:::

The result is a query string with several values associated with the
same name.

``` {.sourceCode .none}
$ python3 urllib_parse_urlencode_doseq.py

Single  : foo=%5B%27foo1%27%2C+%27foo2%27%5D
Sequence: foo=foo1&foo=foo2
```

To decode the query string, use `parse_qs()` or `parse_qsl()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
urllib\_parse\_parse\_qs.py
:::

The return value from `parse_qs()` is a dictionary mapping names to
values, while `parse_qsl()` returns a list of tuples containing a name
and a value.

``` {.sourceCode .none}
$ python3 urllib_parse_parse_qs.py

parse_qs : {'foo': ['foo1', 'foo2']}
parse_qsl: [('foo', 'foo1'), ('foo', 'foo2')]
```

Special characters within the query arguments that might cause parse
problems with the URL on the server side are \"quoted\" when passed to
`urlencode()`. To quote them locally to make safe versions of the
strings, use the `quote()` or `quote_plus()` functions directly.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
urllib\_parse\_quote.py
:::

The quoting implementation in `quote_plus()` is more aggressive about
the characters it replaces.

``` {.sourceCode .none}
$ python3 urllib_parse_quote.py

urlencode() : url=http%3A%2F%2Flocalhost%3A8080%2F~hellmann%2F
quote()     : http%3A//localhost%3A8080/~hellmann/
quote_plus(): http%3A%2F%2Flocalhost%3A8080%2F~hellmann%2F
```

To reverse the quote operations, use `unquote()` or `unquote_plus()`, as
appropriate.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
urllib\_parse\_unquote.py
:::

The encoded value is converted back to a normal string URL.

``` {.sourceCode .none}
$ python3 urllib_parse_unquote.py

http://localhost:8080/~hellmann/
http://localhost:8080/~hellmann/
```

::: {.seealso}
-   `urllib.parse`{.interpreted-text role="pydoc"}
-   `urllib.request`{.interpreted-text role="mod"} \-- Retrieve the
    contents of a resource identified by a URL.
-   `1738`{.interpreted-text role="rfc"} \-- Uniform Resource Locator
    (URL) syntax
-   `1808`{.interpreted-text role="rfc"} \-- Relative URLs
-   `2396`{.interpreted-text role="rfc"} \-- Uniform Resource Identifier
    (URI) generic syntax
-   `3986`{.interpreted-text role="rfc"} \-- Uniform Resource Identifier
    (URI) syntax
:::
