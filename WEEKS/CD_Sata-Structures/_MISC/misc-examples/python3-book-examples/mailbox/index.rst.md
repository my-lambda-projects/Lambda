mailbox \-\-- Manipulate Email Archives
=======================================

::: {.module synopsis="Access and manipulate email archives."}
mailbox
:::

Purpose

:   Work with email messages in various local file formats.

The `mailbox` module defines a common API for accessing email messages
stored in local disk formats, including:

-   Maildir
-   mbox
-   MH
-   Babyl
-   MMDF

There are base classes for `Mailbox` and `Message`, and each mailbox
format includes a corresponding pair of subclasses to implement the
details for that format.

mbox
----

The mbox format is the simplest to show in documentation, since it is
entirely plain text. Each mailbox is stored as a single file, with all
of the messages concatenated together. Each time a line starting with
`"From "` (\"From\" followed by a single space) is encountered it is
treated as the beginning of a new message. Any time those characters
appear at the beginning of a line in the message body, they are escaped
by prefixing the line with `">"`.

### Creating an mbox Mailbox

Instantiate the `mbox` class by passing the filename to the constructor.
If the file does not exist, it is created when `add()` is used to append
messages.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
mailbox\_mbox\_create.py
:::

The result of this script is a new mailbox file with two email messages.

``` {.sourceCode .none}
$ python3 mailbox_mbox_create.py

From MAILER-DAEMON Sun Mar 18 20:20:59 2018
From: Author <author@example.com>
To: Recipient <recipient@example.com>
Subject: Sample message 1

This is the body.
>From (will not be escaped).
There are 3 lines.

From MAILER-DAEMON Sun Mar 18 20:20:59 2018
From: Author <author@example.com>
To: Recipient <recipient@example.com>
Subject: Sample message 2

This is the second body.
```

### Reading an mbox Mailbox

To read an existing mailbox, open it and treat the `mbox` object like a
dictionary. The keys are arbitrary values defined by the mailbox
instance and are not necessary meaningful other than as internal
identifiers for message objects.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
mailbox\_mbox\_read.py
:::

The open mailbox supports the iterator protocol, but unlike true
dictionary objects the default iterator for a mailbox works on the
*values* instead of the *keys*.

``` {.sourceCode .none}
$ python3 mailbox_mbox_read.py

Sample message 1
Sample message 2
```

### Removing Messages from an mbox Mailbox

To remove an existing message from an mbox file, either use its key with
`remove`{.interpreted-text role="meth"} or use `del`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
mailbox\_mbox\_remove.py
:::

The `lock`{.interpreted-text role="meth"} and `unlock`{.interpreted-text
role="meth"} methods are used to prevent issues from simultaneous access
to the file, and `flush`{.interpreted-text role="meth"} forces the
changes to be written to disk.

``` {.sourceCode .none}
$ python3 mailbox_mbox_remove.py

Removing: 1
From MAILER-DAEMON Sun Mar 18 20:20:59 2018
From: Author <author@example.com>
To: Recipient <recipient@example.com>
Subject: Sample message 1

This is the body.
>From (will not be escaped).
There are 3 lines.
```

Maildir
-------

The Maildir format was created to eliminate the problem of concurrent
modification to an mbox file. Instead of using a single file, the
mailbox is organized as directory where each message is contained in its
own file. This also allows mailboxes to be nested, so the API for a
Maildir mailbox is extended with methods to work with sub-folders.

### Creating a Maildir Mailbox

The only real difference between creating a `Maildir` and `mbox` is that
the argument to the constructor is a directory name instead of a file
name. As before, if the mailbox does not exist, it is created when
messages are added.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
mailbox\_maildir\_create.py
:::

When messages are added to the mailbox, they go to the `new`
subdirectory.

::: {.warning}
::: {.admonition-title}
Warning
:::

Although it is safe to write to the same maildir from multiple
processes, `add`{.interpreted-text role="meth"} is not thread-safe. Use
a semaphore or other locking device to prevent simultaneous
modifications to the mailbox from multiple threads of the same process.
:::

``` {.sourceCode .none}
$ python3 mailbox_maildir_create.py

Example
  Directories: ['new', 'cur', 'tmp']
Example/new
  Directories: []

*** Example/new/1521404460.M306174P41689Q2.hubert.local
From: Author <author@example.com>
To: Recipient <recipient@example.com>
Subject: Sample message 2

This is the second body.

********************

*** Example/new/1521404460.M303200P41689Q1.hubert.local
From: Author <author@example.com>
To: Recipient <recipient@example.com>
Subject: Sample message 1

This is the body.
From (will not be escaped).
There are 3 lines.

********************
Example/cur
  Directories: []
Example/tmp
  Directories: []
```

After they are read, a client could move them to the `cur` subdirectory
using the `set_subdir()` method of the `MaildirMessage`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
mailbox\_maildir\_set\_subdir.py
:::

Although a maildir includes a \"`tmp`\" directory, the only valid
arguments for `set_subdir()` are \"`cur`\" and \"`new`\".

``` {.sourceCode .none}
$ python3 mailbox_maildir_set_subdir.py

Before:
new    "Sample message 2"
new    "Sample message 1"

After:
cur    "Sample message 2"
cur    "Sample message 1"

Example
  Directories: ['new', 'cur', 'tmp']
Example/new
  Directories: []
Example/cur
  Directories: []
Example/cur/1521404460.M306174P41689Q2.hubert.local
Example/cur/1521404460.M303200P41689Q1.hubert.local
Example/tmp
  Directories: []
```

### Reading a Maildir Mailbox

Reading from an existing Maildir mailbox works just like an mbox
mailbox.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
mailbox\_maildir\_read.py
:::

The messages are not guaranteed to be read in any particular order.

``` {.sourceCode .none}
$ python3 mailbox_maildir_read.py

Sample message 2
Sample message 1
```

### Removing Messages from a Maildir Mailbox

To remove an existing message from a Maildir mailbox, either pass its
key to `remove`{.interpreted-text role="meth"} or use `del`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
mailbox\_maildir\_remove.py
:::

There is no way to compute the key for a message, so use
`items`{.interpreted-text role="meth"} or `iteritems`{.interpreted-text
role="meth"} to retrieve the key and message object from the mailbox at
the same time.

``` {.sourceCode .none}
$ python3 mailbox_maildir_remove.py

Removing: 1521404460.M306174P41689Q2.hubert.local
Example
  Directories: ['new', 'cur', 'tmp']
Example/new
  Directories: []
Example/cur
  Directories: []

*** Example/cur/1521404460.M303200P41689Q1.hubert.local
From: Author <author@example.com>
To: Recipient <recipient@example.com>
Subject: Sample message 1

This is the body.
From (will not be escaped).
There are 3 lines.

********************
Example/tmp
  Directories: []
```

### Maildir folders

Subdirectories or *folders* of a Maildir mailbox can be managed directly
through the methods of the `Maildir` class. Callers can list, retrieve,
create, and remove sub-folders for a given mailbox.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
mailbox\_maildir\_folders.py
:::

The directory name for the folder is constructed by prefixing the folder
name with a period (`.`).

``` {.sourceCode .none}
$ python3 mailbox_maildir_folders.py

Example
Example/new
Example/cur
Example/cur/1521404460.M303200P41689Q1.hubert.local
Example/tmp
Example
Example/.subfolder
Example/.subfolder/maildirfolder
Example/.subfolder/new
Example/.subfolder/cur
Example/.subfolder/tmp
Example/new
Example/cur
Example/cur/1521404460.M303200P41689Q1.hubert.local
Example/tmp
Example
Example/.subfolder
Example/.subfolder/.second_level
Example/.subfolder/.second_level/maildirfolder
Example/.subfolder/.second_level/new
Example/.subfolder/.second_level/cur
Example/.subfolder/.second_level/tmp
Example/.subfolder/maildirfolder
Example/.subfolder/new
Example/.subfolder/cur
Example/.subfolder/tmp
Example/new
Example/cur
Example/cur/1521404460.M303200P41689Q1.hubert.local
Example/tmp
Example
Example/.subfolder
Example/.subfolder/maildirfolder
Example/.subfolder/new
Example/.subfolder/cur
Example/.subfolder/tmp
Example/new
Example/cur
Example/cur/1521404460.M303200P41689Q1.hubert.local
Example/tmp
Before: []

##############################

subfolder created: ['subfolder']
subfolder contents: []

##############################

second_level created: ['second_level']

##############################

second_level removed: []
```

Message Flags
-------------

Messages in mailboxes have flags for tracking aspects such as whether or
not the message has been read, flagged as important by the reader, or
marked for deletion later. Flags are stored as a sequence of
format-specific letter codes and the `Message` classes have methods to
retrieve and change the values of the flags. This example shows the
flags on the messages in the `Example` maildir before adding the flag to
indicate that the message is considered important.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
mailbox\_maildir\_add\_flag.py
:::

By default messages have no flags. Adding a flag changes the message in
memory, but does not update the message on disk. To update the message
on disk store the message object in the mailbox using its existing
identifier.

``` {.sourceCode .none}
$ python3 mailbox_maildir_add_flag.py

Before:
       "Sample message 1"

After:
F      "Sample message 1"
```

Adding flags with `add_flag()` preserves any existing flags. Using
`set_flags()` writes over any existing set of flags, replacing it with
the new values passed to the method.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
mailbox\_maildir\_set\_flags.py
:::

The `F` flag added by the previous example is lost when `set_flags()`
replaces the flags with `S` in this example.

``` {.sourceCode .none}
$ python3 mailbox_maildir_set_flags.py

Before:
F      "Sample message 1"

After:
S      "Sample message 1"
```

Other Formats
-------------

`mailbox` supports a few other formats, but none are as popular as mbox
or Maildir. MH is another multi-file mailbox format used by some mail
handlers. Babyl and MMDF are single-file formats with different message
separators than mbox. The single-file formats support the same API as
mbox, and MH includes the folder-related methods found in the Maildir
class.

::: {.seealso}
-   `mailbox`{.interpreted-text role="pydoc"}
-   `Python 2 to 3 porting notes for mailbox <porting-mailbox>`{.interpreted-text
    role="ref"}
-   [mbox manpage from qmail](http://www.qmail.org/man/man5/mbox.html)
    \-- Documentation for the mbox format.
-   [Maildir manpage from
    qmail](http://www.qmail.org/man/man5/maildir.html) \-- Documentation
    for the Maildir format.
-   `email`{.interpreted-text role="mod"} \-- The `email` module.
-   `imaplib`{.interpreted-text role="mod"} \-- The `imaplib` module can
    work with saved email messages on an IMAP server.
:::
