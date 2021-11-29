Parsing an XML Document {#xml.etree.ElementTree.parsing}
=======================

Parsed XML documents are represented in memory by `ElementTree` and
`Element` objects connected in a tree structure based on the way the
nodes in the XML document are nested.

Parsing an entire document with `parse()` returns an `ElementTree`
instance. The tree knows about all of the data in the input document,
and the nodes of the tree can be searched or manipulated in place. While
this flexibility can make working with the parsed document more
convenient, it typically takes more memory than an event-based parsing
approach since the entire document must be loaded at one time.

The memory footprint of small, simple documents such as this list of
podcasts represented as an OPML outline is not significant:

::: {.cssclass}
xml-caption

::: {.literalinclude caption="" language="xml"}
podcasts.opml
:::
:::

To parse the file, pass an open file handle to `parse()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ElementTree\_parse\_opml.py
:::

It will read the data, parse the XML, and return an `ElementTree`
object.

``` {.sourceCode .none}
$ python3 ElementTree_parse_opml.py

<xml.etree.ElementTree.ElementTree object at 0x1013e5630>
```

Traversing the Parsed Tree
==========================

To visit all of the children in order, use `iter()` to create a
generator that iterates over the `ElementTree` instance.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ElementTree\_dump\_opml.py
:::

This example prints the entire tree, one tag at a time.

``` {.sourceCode .none}
$ python3 ElementTree_dump_opml.py

opml
head
title
dateCreated
dateModified
body
outline
outline
outline
outline
outline
```

To print only the groups of names and feed URLs for the podcasts,
leaving out of all of the data in the header section by iterating over
only the `outline` nodes and print the `text` and `xmlUrl` attributes by
looking up the values in the `attrib`{.interpreted-text role="attr"}
dictionary.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ElementTree\_show\_feed\_urls.py
:::

The `'outline'` argument to `iter()` means processing is limited to only
nodes with the tag `'outline'`.

``` {.sourceCode .none}
$ python3 ElementTree_show_feed_urls.py

Non-tech
  99% Invisible
    http://feeds.99percentinvisible.org/99percentinvisible
Python
  Talk Python to Me
    https://talkpython.fm/episodes/rss
  Podcast.__init__
    http://podcastinit.podbean.com/feed/
```

Finding Nodes in a Document
===========================

Walking the entire tree like this, searching for relevant nodes, can be
error prone. The previous example had to look at each outline node to
determine if it was a group (nodes with only a `text`{.interpreted-text
role="attr"} attribute) or podcast (with both `text`{.interpreted-text
role="attr"} and `xmlUrl`{.interpreted-text role="attr"}). To produce a
simple list of the podcast feed URLs, without names or groups, the logic
could be simplified using `findall()` to look for nodes with more
descriptive search characteristics.

As a first pass at converting the first version, an XPath argument can
be used to look for all outline nodes.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ElementTree\_find\_feeds\_by\_tag.py
:::

The logic in this version is not substantially different than the
version using `getiterator()`. It still has to check for the presence of
the URL, except that it does not print the group name when the URL is
not found.

``` {.sourceCode .none}
$ python3 ElementTree_find_feeds_by_tag.py

http://feeds.99percentinvisible.org/99percentinvisible
https://talkpython.fm/episodes/rss
http://podcastinit.podbean.com/feed/
```

It is possible to take advantage of the fact that the outline nodes are
only nested two levels deep. Changing the search path to
`.//outline/outline` means the loop will process only the second level
of outline nodes.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ElementTree\_find\_feeds\_by\_structure.py
:::

All of the outline nodes nested two levels deep in the input are
expected to have the `xmlURL` attribute referring to the podcast feed,
so the loop can skip checking for the attribute before using it.

``` {.sourceCode .none}
$ python3 ElementTree_find_feeds_by_structure.py

http://feeds.99percentinvisible.org/99percentinvisible
https://talkpython.fm/episodes/rss
http://podcastinit.podbean.com/feed/
```

This version is limited to the existing structure, though, so if the
outline nodes are ever rearranged into a deeper tree, it will stop
working.

Parsed Node Attributes
======================

The items returned by `findall()` and `iter()` are `Element` objects,
each representing a node in the XML parse tree. Each `Element` has
attributes for accessing data pulled out of the XML. This can be
illustrated with a somewhat more contrived example input file,
`data.xml`.

::: {.cssclass}
xml-caption, with-linenos

::: {.literalinclude caption="" language="xml" linenos=""}
data.xml
:::
:::

The XML attributes of a node are available in the
`attrib`{.interpreted-text role="attr"} property, which acts like a
dictionary.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ElementTree\_node\_attributes.py
:::

The node on line five of the input file has two attributes,
`name`{.interpreted-text role="attr"} and `foo`{.interpreted-text
role="attr"}.

``` {.sourceCode .none}
$ python3 ElementTree_node_attributes.py

with_attributes
  foo  = "bar"
  name = "value"
```

The text content of the nodes is available, along with the *tail* text,
which comes after the end of a close tag.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ElementTree\_node\_text.py
:::

The `child` node on line three contains embedded text, and the node on
line four has text with a tail (including whitespace).

``` {.sourceCode .none}
$ python3 ElementTree_node_text.py

child
  child node text: Regular text.
  and tail text  : 

child_with_tail
  child node text: Regular text.
  and tail text  : "Tail" text.
```

XML entity references embedded in the document are converted to the
appropriate characters before values are returned.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ElementTree\_entity\_references.py
:::

The automatic conversion means the implementation detail of representing
certain characters in an XML document can be ignored.

``` {.sourceCode .none}
$ python3 ElementTree_entity_references.py

entity_expansion
  in attribute: This & That
  in text     : That & This
```

Watching Events While Parsing
=============================

The other API for processing XML documents is event-based. The parser
generates `start` events for opening tags and `end` events for closing
tags. Data can be extracted from the document during the parsing phase
by iterating over the event stream, which is convenient if it is not
necessary to manipulate the entire document afterwards and there is no
need to hold the entire parsed document in memory.

Events can be one of:

`start`

:   A new tag has been encountered. The closing angle bracket of the tag
    was processed, but not the contents.

`end`

:   The closing angle bracket of a closing tag has been processed. All
    of the children were already processed.

`start-ns`

:   Start a namespace declaration.

`end-ns`

:   End a namespace declaration.

`iterparse()` returns an iterable that produces tuples containing the
name of the event and the node triggering the event.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ElementTree\_show\_all\_events.py
:::

By default, only `end` events are generated. To see other events, pass
the list of desired event names to `iterparse()`, as in this example.

``` {.sourceCode .none}
$ python3 ElementTree_show_all_events.py

start            opml         4312612200
..start          head         4316174520
....start        title        4316254440
....end          title        4316254440
....start        dateCreated  4316254520
....end          dateCreated  4316254520
....start        dateModified 4316254680
....end          dateModified 4316254680
..end            head         4316174520
..start          body         4316254840
....start        outline      4316254920
......start      outline      4316255080
......end        outline      4316255080
....end          outline      4316254920
....start        outline      4316255160
......start      outline      4316255240
......end        outline      4316255240
......start      outline      4316255320
......end        outline      4316255320
....end          outline      4316255160
..end            body         4316254840
end              opml         4312612200
```

The event-style of processing is more natural for some operations, such
as converting XML input to some other format. This technique can be used
to convert list of podcasts from the earlier examples from an XML file
to a CSV file, so they can be loaded into a spreadsheet or database
application.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ElementTree\_write\_podcast\_csv.py
:::

This conversion program does not need to hold the entire parsed input
file in memory, and processing each node as it is encountered in the
input is more efficient.

``` {.sourceCode .none}
$ python3 ElementTree_write_podcast_csv.py

"Non-tech","99% Invisible","http://feeds.99percentinvisible.org/\
99percentinvisible","http://99percentinvisible.org"
"Python","Talk Python to Me","https://talkpython.fm/episodes/rss\
","https://talkpython.fm"
"Python","Podcast.__init__","http://podcastinit.podbean.com/feed\
/","http://podcastinit.com"
```

::: {.note}
::: {.admonition-title}
Note
:::

The output from `ElementTree_write_podcast_csv.py` has been reformatted
to fit on this page. The output lines ending with `\` indicate an
artificial line break.
:::

Creating a Custom Tree Builder
==============================

A potentially more efficient means of handling parse events is to
replace the standard tree builder behavior with a custom version. The
`XMLParser` parser uses a `TreeBuilder` to process the XML and call
methods on a target class to save the results. The usual output is an
`ElementTree` instance created by the default `TreeBuilder` class.
Replacing `TreeBuilder` with another class allows it to receive the
events before the `Element` nodes are instantiated, saving that portion
of the overhead.

The XML-to-CSV converter from the previous section can be re-implemented
as a tree builder.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ElementTree\_podcast\_csv\_treebuilder.py
:::

`PodcastListToCSV` implements the `TreeBuilder` protocol. Each time a
new XML tag is encountered, `start()` is called with the tag name and
attributes. When a closing tag is seen, `end()` is called with the name.
In between, `data()` is called when a node has content (the tree builder
is expected to keep up with the \"current\" node). When all of the input
is processed, `close()` is called. It can return a value, which will be
returned to the user of the `TreeBuilder`.

``` {.sourceCode .none}
$ python3 ElementTree_podcast_csv_treebuilder.py

"Non-tech","99% Invisible","http://feeds.99percentinvisible.org/\
99percentinvisible","http://99percentinvisible.org"
"Python","Talk Python to Me","https://talkpython.fm/episodes/rss\
","https://talkpython.fm"
"Python","Podcast.__init__","http://podcastinit.podbean.com/feed\
/","http://podcastinit.com"
```

::: {.note}
::: {.admonition-title}
Note
:::

The output from `ElementTree_podcast_csv_treebuidler.py` has been
reformatted to fit on this page. The output lines ending with `\`
indicate an artificial line break.
:::

Parsing Strings
===============

To work with smaller bits of XML text, especially string literals that
might be embedded in the source of a program, use `XML()` and the string
containing the XML to be parsed as the only argument.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ElementTree\_XML.py
:::

Unlike with `parse()`, the return value is an `Element` instance instead
of an `ElementTree`. An `Element` supports the iterator protocol
directly, so there is no need to call `getiterator()`.

``` {.sourceCode .none}
$ python3 ElementTree_XML.py

parsed = <Element 'root' at 0x10079eef8>
group
child
  text: "This is child "a"."
  id   = "a"
child
  text: "This is child "b"."
  id   = "b"
group
child
  text: "This is child "c"."
  id   = "c"
```

For structured XML that uses the `id`{.interpreted-text role="attr"}
attribute to identify unique nodes of interest, `XMLID()` is a
convenient way to access the parse results.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ElementTree\_XMLID.py
:::

`XMLID()` returns the parsed tree as an `Element` object, along with a
dictionary mapping the `id`{.interpreted-text role="attr"} attribute
strings to the individual nodes in the tree.

``` {.sourceCode .none}
$ python3 ElementTree_XMLID.py

a = <Element 'child' at 0x10133aea8>
b = <Element 'child' at 0x10133aef8>
c = <Element 'child' at 0x10133af98>
```
