# Interacting with Domain Name Services

Applications use the network to communicate with servers for domain name service (DNS) operations like converting between hostnames and IP addresses. `asyncio` has convenience methods on the event loop to take care of those operations in the background, to avoid blocking during the queries.

## Address Lookup by Name

Use the coroutine `getaddrinfo()` to convert a hostname and port number to an IP or IPv6 address. As with the version of the function in the `socket`{.interpreted-text role="mod"} module, the return value is a list of tuples containing five pieces of information.

1.  The address family
2.  The address type
3.  The protocol
4.  The canonical name for the server
5.  A socket address tuple suitable for opening a connection to the server on the port originally specified

Queries can be filtered by protocol, as in this example, where only TCP responses are returned.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} asyncio_getaddrinfo.py :::

The example program converts a hostname and protocol name to IP address and port number.

```{.sourceCode .none}
$ python3 asyncio_getaddrinfo.py

pymotw.com          : 66.33.211.242
doughellmann.com    : 66.33.211.240
python.org          : 23.253.135.79
```

## Name Lookup by Address

The coroutine `getnameinfo()` works in the reverse direction, converting an IP address to a hostname and a port number to a protocol name, where possible.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} asyncio_getnameinfo.py :::

This example shows that the IP address for `pymotw.com` refers to a server at DreamHost, the hosting company where the site runs. The second IP address examined is for `python.org`, and it does not resolve back to a hostname.

```{.sourceCode .none}
$ python3 asyncio_getnameinfo.py

66.33.211.242  : n821.com https
104.130.43.121 : 104.130.43.121 https
```

::: {.seealso}

- The `socket`{.interpreted-text role="mod"} module discussion includes a more detailed examination of these operations. :::
