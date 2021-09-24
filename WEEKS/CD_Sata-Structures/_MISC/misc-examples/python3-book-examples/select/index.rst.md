select \-\-- Wait for I/O Efficiently
=====================================

::: {.module synopsis="Wait for I/O Efficiently"}
select
:::

Purpose

:   Wait for notification that an input or output channel is ready.

The `select` module provides access to platform-specific I/O monitoring
functions. The most portable interface is the POSIX function `select()`,
which is available on Unix and Windows. The module also includes
`poll()`, a Unix-only API, and several options that only work with
specific variants of Unix.

::: {.note}
::: {.admonition-title}
Note
:::

The new `selectors`{.interpreted-text role="mod"} module provides a
higher-level interface built on top of the APIs in `select`. It is
easier to build portable code using `selectors`, so use that module
unless the low-level APIs provided by `select` are somehow required.
:::

Using select()
--------------

Python\'s `select()` function is a direct interface to the underlying
operating system implementation. It monitors sockets, open files, and
pipes (anything with a `fileno()` method that returns a valid file
descriptor) until they become readable or writable or a communication
error occurs. `select()` makes it easier to monitor multiple connections
at the same time, and is more efficient than writing a polling loop in
Python using socket timeouts, because the monitoring happens in the
operating system network layer, instead of the interpreter.

::: {.note}
::: {.admonition-title}
Note
:::

Using Python\'s file objects with `select()` works for Unix, but is not
supported under Windows.
:::

The echo server example from the `socket`{.interpreted-text role="mod"}
section can be extended to watch for more than one connection at a time
by using `select()`. The new version starts out by creating a
non-blocking TCP/IP socket and configuring it to listen on an address.

::: {.literalinclude caption="" lines="10-26"}
select\_echo\_server.py
:::

The arguments to `select()` are three lists containing communication
channels to monitor. The first is a list of the objects to be checked
for incoming data to be read, the second contains objects that will
receive outgoing data when there is room in their buffer, and the third
those that may have an error (usually a combination of the input and
output channel objects). The next step in the server is to set up the
lists containing input sources and output destinations to be passed to
`select()`.

::: {.literalinclude lines="28-32"}
select\_echo\_server.py
:::

Connections are added to and removed from these lists by the server main
loop. Since this version of the server is going to wait for a socket to
become writable before sending any data (instead of immediately sending
the reply), each output connection needs a queue to act as a buffer for
the data to be sent through it.

::: {.literalinclude lines="34-35"}
select\_echo\_server.py
:::

The main portion of the server program loops, calling `select()` to
block and wait for network activity.

::: {.literalinclude lines="37-44"}
select\_echo\_server.py
:::

`select()` returns three new lists, containing subsets of the contents
of the lists passed in. All of the sockets in the `readable` list have
incoming data buffered and available to be read. All of the sockets in
the `writable` list have free space in their buffer and can be written
to. The sockets returned in `exceptional` have had an error (the actual
definition of \"exceptional condition\" depends on the platform).

The \"readable\" sockets represent three possible cases. If the socket
is the main \"server\" socket, the one being used to listen for
connections, then the \"readable\" condition means it is ready to accept
another incoming connection. In addition to adding the new connection to
the list of inputs to monitor, this section sets the client socket to
not block.

::: {.literalinclude lines="46-59"}
select\_echo\_server.py
:::

The next case is an established connection with a client that has sent
data. The data is read with `recv()`, then placed on the queue so it can
be sent through the socket and back to the client.

::: {.literalinclude lines="61-71"}
select\_echo\_server.py
:::

A readable socket *without* data available is from a client that has
disconnected, and the stream is ready to be closed.

::: {.literalinclude lines="73-84"}
select\_echo\_server.py
:::

There are fewer cases for the writable connections. If there is data in
the queue for a connection, the next message is sent. Otherwise, the
connection is removed from the list of output connections so that the
next time through the loop `select()` does not indicate that the socket
is ready to send data.

::: {.literalinclude lines="86-100"}
select\_echo\_server.py
:::

Finally, if there is an error with a socket, it is closed.

::: {.literalinclude lines="102-"}
select\_echo\_server.py
:::

The example client program uses two sockets to demonstrate how the
server with `select()` manages multiple connections at the same time.
The client starts by connecting each TCP/IP socket to the server.

::: {.literalinclude caption="" lines="10-30"}
select\_echo\_multiclient.py
:::

Then it sends one piece of the message at a time via each socket and
reads all responses available after writing new data.

::: {.literalinclude lines="32-"}
select\_echo\_multiclient.py
:::

Run the server in one window and the client in another. The output will
look like this, with different port numbers.

``` {.sourceCode .none}
$ python3 select_echo_server.py
starting up on localhost port 10000
waiting for the next event
  connection from ('127.0.0.1', 61003)
waiting for the next event
  connection from ('127.0.0.1', 61004)
waiting for the next event
  received b'This is the message. ' from ('127.0.0.1', 61003)
  received b'This is the message. ' from ('127.0.0.1', 61004)
waiting for the next event
  sending b'This is the message. ' to ('127.0.0.1', 61003)
  sending b'This is the message. ' to ('127.0.0.1', 61004)
waiting for the next event
   ('127.0.0.1', 61003) queue empty
   ('127.0.0.1', 61004) queue empty
waiting for the next event
  received b'It will be sent ' from ('127.0.0.1', 61003)
  received b'It will be sent ' from ('127.0.0.1', 61004)
waiting for the next event
  sending b'It will be sent ' to ('127.0.0.1', 61003)
  sending b'It will be sent ' to ('127.0.0.1', 61004)
waiting for the next event
   ('127.0.0.1', 61003) queue empty
   ('127.0.0.1', 61004) queue empty
waiting for the next event
  received b'in parts.' from ('127.0.0.1', 61003)
waiting for the next event
  received b'in parts.' from ('127.0.0.1', 61004)
  sending b'in parts.' to ('127.0.0.1', 61003)
waiting for the next event
   ('127.0.0.1', 61003) queue empty
  sending b'in parts.' to ('127.0.0.1', 61004)
waiting for the next event
   ('127.0.0.1', 61004) queue empty
waiting for the next event
  closing ('127.0.0.1', 61004)
  closing ('127.0.0.1', 61004)
waiting for the next event
```

The client output shows the data being sent and received using both
sockets.

``` {.sourceCode .none}
$ python3 select_echo_multiclient.py
connecting to localhost port 10000
('127.0.0.1', 61003): sending b'This is the message. '
('127.0.0.1', 61004): sending b'This is the message. '
('127.0.0.1', 61003): received b'This is the message. '
('127.0.0.1', 61004): received b'This is the message. '
('127.0.0.1', 61003): sending b'It will be sent '
('127.0.0.1', 61004): sending b'It will be sent '
('127.0.0.1', 61003): received b'It will be sent '
('127.0.0.1', 61004): received b'It will be sent '
('127.0.0.1', 61003): sending b'in parts.'
('127.0.0.1', 61004): sending b'in parts.'
('127.0.0.1', 61003): received b'in parts.'
('127.0.0.1', 61004): received b'in parts.'
```

Non-blocking I/O With Timeouts
------------------------------

`select()` also takes an optional fourth parameter, which is the number
of seconds to wait before breaking off monitoring if no channels have
become active. Using a timeout value lets a main program call `select()`
as part of a larger processing loop, taking other actions in between
checking for network input.

When the timeout expires, `select()` returns three empty lists. Updating
the server example to use a timeout requires adding the extra argument
to the `select()` call and handling the empty lists after `select()`
returns.

::: {.literalinclude caption="" lines="44-52"}
select\_echo\_server\_timeout.py
:::

This \"slow\" version of the client program pauses after sending each
message, to simulate latency or other delay in transmission.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
select\_echo\_slow\_client.py
:::

Running the new server with the slow client produces:

``` {.sourceCode .none}
$ python3 select_echo_server_timeout.py
starting up on localhost port 10000
waiting for the next event
  timed out, do some other work here
waiting for the next event
  connection from ('127.0.0.1', 61144)
waiting for the next event
  timed out, do some other work here
waiting for the next event
  received b'Part one of the message.' from ('127.0.0.1', 61144)
waiting for the next event
  sending b'Part one of the message.' to ('127.0.0.1', 61144)
waiting for the next event
('127.0.0.1', 61144) queue empty
waiting for the next event
  timed out, do some other work here
waiting for the next event
  received b'Part two of the message.' from ('127.0.0.1', 61144)
waiting for the next event
  sending b'Part two of the message.' to ('127.0.0.1', 61144)
waiting for the next event
('127.0.0.1', 61144) queue empty
waiting for the next event
  timed out, do some other work here
waiting for the next event
closing ('127.0.0.1', 61144)
waiting for the next event
  timed out, do some other work here
```

And this is the client output:

``` {.sourceCode .none}
$ python3 select_echo_slow_client.py
connecting to localhost port 10000
sending b'Part one of the message.'
sending b'Part two of the message.'
received b'Part one of the '
received b'message.Part two'
received b' of the message.'
closing socket
```

Using poll()
------------

The `poll()` function provides similar features to `select()`, but the
underlying implementation is more efficient. The trade-off is that
`poll()` is not supported under Windows, so programs using `poll()` are
less portable.

An echo server built on `poll()` starts with the same socket
configuration code used in the other examples.

::: {.literalinclude caption="" lines="10-29"}
select\_poll\_echo\_server.py
:::

The timeout value passed to `poll()` is represented in milliseconds,
instead of seconds, so in order to pause for a full second the timeout
must be set to `1000`.

::: {.literalinclude lines="31-32"}
select\_poll\_echo\_server.py
:::

Python implements `poll()` with a class that manages the registered data
channels being monitored. Channels are added by calling `register()`
with flags indicating which events are interesting for that channel. The
full set of flags is listed in
`Event Flags for poll()`{.interpreted-text role="table"}.

  Event        Description
  ------------ ------------------------
  `POLLIN`     Input ready
  `POLLPRI`    Priority input ready
  `POLLOUT`    Able to receive output
  `POLLERR`    Error
  `POLLHUP`    Channel closed
  `POLLNVAL`   Channel not open

  : Event Flags for poll()

The echo server will be setting up some sockets just for reading and
others to be read from or written to. The appropriate combinations of
flags are saved to the local variables `READ_ONLY` and `READ_WRITE`.

::: {.literalinclude lines="34-41"}
select\_poll\_echo\_server.py
:::

The `server` socket is registered so that any incoming connections or
data triggers an event.

::: {.literalinclude lines="43-45"}
select\_poll\_echo\_server.py
:::

Since `poll()` returns a list of tuples containing the file descriptor
for the socket and the event flag, a mapping from file descriptor
numbers to objects is needed to retrieve the `socket` to read or write
from it.

::: {.literalinclude lines="47-50"}
select\_poll\_echo\_server.py
:::

The server\'s loop calls `poll()` and then processes the \"events\"
returned by looking up the socket and taking action based on the flag in
the event.

::: {.literalinclude lines="52-62"}
select\_poll\_echo\_server.py
:::

As with `select()`, when the main server socket is \"readable,\" that
really means there is a pending connection from a client. The new
connection is registered with the `READ_ONLY` flags to watch for new
data to come through it.

::: {.literalinclude lines="64-78"}
select\_poll\_echo\_server.py
:::

Sockets other than the server are existing clients and `recv()` is used
to access the data waiting to be read.

::: {.literalinclude lines="80-81"}
select\_poll\_echo\_server.py
:::

If `recv()` returns any data, it is placed into the outgoing queue for
the socket, and the flags for that socket are changed using `modify()`
so `poll()` will watch for the socket to be ready to receive data.

::: {.literalinclude lines="82-89"}
select\_poll\_echo\_server.py
:::

An empty string returned by `recv()` means the client disconnected, so
`unregister()` is used to tell the `poll` object to ignore the socket.

::: {.literalinclude lines="91-100"}
select\_poll\_echo\_server.py
:::

The `POLLHUP` flag indicates a client that \"hung up\" the connection
without closing it cleanly. The server stops polling clients that
disappear.

::: {.literalinclude lines="102-108"}
select\_poll\_echo\_server.py
:::

The handling for writable sockets looks like the version used in the
example for `select()`, except that `modify()` is used to change the
flags for the socket in the poller, instead of removing it from the
output list.

::: {.literalinclude lines="110-124"}
select\_poll\_echo\_server.py
:::

And, finally, any events with `POLLERR` cause the server to close the
socket.

::: {.literalinclude lines="126-"}
select\_poll\_echo\_server.py
:::

When the poll-based server is run together with
`select_echo_multiclient.py` (the client program that uses multiple
sockets), this is the output.

``` {.sourceCode .none}
$ python3 select_poll_echo_server.py
starting up on localhost port 10000
waiting for the next event
waiting for the next event
waiting for the next event
waiting for the next event
  connection ('127.0.0.1', 61253)
waiting for the next event
  connection ('127.0.0.1', 61254)
waiting for the next event
  received b'This is the message. ' from ('127.0.0.1', 61253)
  received b'This is the message. ' from ('127.0.0.1', 61254)
waiting for the next event
  sending b'This is the message. ' to ('127.0.0.1', 61253)
  sending b'This is the message. ' to ('127.0.0.1', 61254)
waiting for the next event
('127.0.0.1', 61253) queue empty
('127.0.0.1', 61254) queue empty
waiting for the next event
  received b'It will be sent ' from ('127.0.0.1', 61253)
  received b'It will be sent ' from ('127.0.0.1', 61254)
waiting for the next event
  sending b'It will be sent ' to ('127.0.0.1', 61253)
  sending b'It will be sent ' to ('127.0.0.1', 61254)
waiting for the next event
('127.0.0.1', 61253) queue empty
('127.0.0.1', 61254) queue empty
waiting for the next event
  received b'in parts.' from ('127.0.0.1', 61253)
  received b'in parts.' from ('127.0.0.1', 61254)
waiting for the next event
  sending b'in parts.' to ('127.0.0.1', 61253)
  sending b'in parts.' to ('127.0.0.1', 61254)
waiting for the next event
('127.0.0.1', 61253) queue empty
('127.0.0.1', 61254) queue empty
waiting for the next event
  closing ('127.0.0.1', 61254)
waiting for the next event
  closing ('127.0.0.1', 61254)
waiting for the next event
```

Platform-specific Options
-------------------------

Less portable options provided by `select` are `epoll`, the *edge
polling* API supported by Linux; `kqueue`, which uses BSD\'s *kernel
queue*; and `kevent`, BSD\'s *kernel event* interface. Refer to the
operating system library documentation for more detail about how they
work.

::: {.seealso}
-   `select`{.interpreted-text role="pydoc"}
-   `selectors`{.interpreted-text role="mod"} \-- Higher-level
    abstraction on top of `select`.
-   [Socket Programming
    HOWOTO](https://docs.python.org/howto/sockets.html) \-- An
    instructional guide by Gordon McMillan, included in the standard
    library documentation.
-   `socket`{.interpreted-text role="mod"} \-- Low-level network
    communication.
-   `SocketServer`{.interpreted-text role="mod"} \-- Framework for
    creating network server applications.
-   `asyncio`{.interpreted-text role="mod"} \-- Asynchronous I/O
    framework
-   *Unix Network Programming, Volume 1: The Sockets Networking API,
    3/E* By W. Richard Stevens, Bill Fenner, and Andrew
    M. Rudoff. Published by Addison-Wesley Professional, 2004. ISBN-10:
    0131411551

-   *Foundations of Python Network Programminng, 3/E* By Brandon Rhodes
    and John Goerzen. Published by Apress, 2014. ISBN-10: 1430258543
:::
