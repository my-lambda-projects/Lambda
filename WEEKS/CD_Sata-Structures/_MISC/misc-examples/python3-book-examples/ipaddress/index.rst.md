ipaddress \-\-- Internet Addresses
==================================

::: {.module synopsis="Classes for working with Internet Protocol (IP)
addresses."}
ipaddress
:::

Purpose

:   Classes for working with Internet Protocol (IP) addresses.

The `ipaddress` module includes classes for working with IPv4 and IPv6
network addresses. The classes support validation, finding addresses and
hosts on a network, and other common operations.

Addresses
---------

The most basic object represents the network address itself. Pass a
string, integer, or byte sequence to `ip_address()` to construct an
address. The return value will be a `IPv4Address` or `IPv6Address`
instance, depending on the type of address being used.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ipaddress\_addresses.py
:::

Both classes can provide various representations of the address for
different purposes, as well as answer basic assertions such as whether
the address is reserved for multicast communication or if it is on a
private network.

``` {.sourceCode .none}
$ python3 ipaddress_addresses.py

IPv4Address('10.9.0.6')
   IP version: 4
   is private: True
  packed form: b'0a090006'
      integer: 168361990

IPv6Address('fdfd:87b5:b475:5e3e:b1bc:e121:a8eb:14aa')
   IP version: 6
   is private: True
  packed form: b'fdfd87b5b4755e3eb1bce121a8eb14aa'
      integer: 337611086560236126439725644408160982186
```

Networks
--------

A network is defined by a range of addresses. It is usually expressed
with a base address and a mask indicating which portions of the address
represent the network, and which portions are remaining to represent
addresses on that network. The mask can be expressed explicitly, or
using a prefix length value as in the example below.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ipaddress\_networks.py
:::

As with addresses, there are two network classes for IPv4 and IPv6
networks. Each class provides properties or methods for accessing values
associated with the network such as the broadcast address and the
addresses on the network available for hosts to use.

``` {.sourceCode .none}
$ python3 ipaddress_networks.py

IPv4Network('10.9.0.0/24')
     is private: True
      broadcast: 10.9.0.255
     compressed: 10.9.0.0/24
   with netmask: 10.9.0.0/255.255.255.0
  with hostmask: 10.9.0.0/0.0.0.255
  num addresses: 256

IPv6Network('fdfd:87b5:b475:5e3e::/64')
     is private: True
      broadcast: fdfd:87b5:b475:5e3e:ffff:ffff:ffff:ffff
     compressed: fdfd:87b5:b475:5e3e::/64
   with netmask: fdfd:87b5:b475:5e3e::/ffff:ffff:ffff:ffff::
  with hostmask: fdfd:87b5:b475:5e3e::/::ffff:ffff:ffff:ffff
  num addresses: 18446744073709551616
```

A network instance is iterable, and yields the addresses on the network.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ipaddress\_network\_iterate.py
:::

This example only prints a few of the addresses, because an IPv6 network
can contain far more addresses than fit in the output.

``` {.sourceCode .none}
$ python3 ipaddress_network_iterate.py

IPv4Network('10.9.0.0/24')
10.9.0.0
10.9.0.1
10.9.0.2

IPv6Network('fdfd:87b5:b475:5e3e::/64')
fdfd:87b5:b475:5e3e::
fdfd:87b5:b475:5e3e::1
fdfd:87b5:b475:5e3e::2
```

Iterating over the network yields addresses, but not all of them are
valid for hosts. For example, the base address of the network and the
broadcast address are both included. To find the addresses that can be
used by regular hosts on the network, use the `hosts()` method, which
produces a generator.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ipaddress\_network\_iterate\_hosts.py
:::

Comparing the output of this example with the previous example shows
that the host addresses do not include the first values produced when
iterating over the entire network.

``` {.sourceCode .none}
$ python3 ipaddress_network_iterate_hosts.py

IPv4Network('10.9.0.0/24')
10.9.0.1
10.9.0.2
10.9.0.3

IPv6Network('fdfd:87b5:b475:5e3e::/64')
fdfd:87b5:b475:5e3e::1
fdfd:87b5:b475:5e3e::2
fdfd:87b5:b475:5e3e::3
```

In addition to the iterator protocol, networks support the `in` operator
to determine if an address is part of a network.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ipaddress\_network\_membership.py
:::

The implementation of `in` uses the network mask to test the address, so
it is much more efficient than expanding the full list of addresses on
the network.

``` {.sourceCode .none}
$ python3 ipaddress_network_membership.py

10.9.0.6
is on 10.9.0.0/24

10.7.0.31
is not on a known network

fdfd:87b5:b475:5e3e:b1bc:e121:a8eb:14aa
is on fdfd:87b5:b475:5e3e::/64

fe80::3840:c439:b25e:63b0
is not on a known network
```

Interfaces
----------

A network interface represents a specific address on a network and can
be represented by a host address and a network prefix or netmask.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
ipaddress\_interfaces.py
:::

The interface object has properties to access the full network and
address separately, as well as several different ways to express the
interface and network mask.

``` {.sourceCode .none}
$ python3 ipaddress_interfaces.py

IPv4Interface('10.9.0.6/24')
network:
   10.9.0.0/24
ip:
   10.9.0.6
IP with prefixlen:
   10.9.0.6/24
netmask:
   10.9.0.6/255.255.255.0
hostmask:
   10.9.0.6/0.0.0.255

IPv6Interface('fdfd:87b5:b475:5e3e:b1bc:e121:a8eb:14aa/64')
network:
   fdfd:87b5:b475:5e3e::/64
ip:
   fdfd:87b5:b475:5e3e:b1bc:e121:a8eb:14aa
IP with prefixlen:
   fdfd:87b5:b475:5e3e:b1bc:e121:a8eb:14aa/64
netmask:
   fdfd:87b5:b475:5e3e:b1bc:e121:a8eb:14aa/ffff:ffff:ffff:ffff::
hostmask:
   fdfd:87b5:b475:5e3e:b1bc:e121:a8eb:14aa/::ffff:ffff:ffff:ffff
```

::: {.seealso}
-   `ipaddress`{.interpreted-text role="pydoc"}
-   `3144`{.interpreted-text role="pep"} \-- IP Address Manipulation
    Library for the Python Standard Library
-   [An introduction to the ipaddress
    module](https://docs.python.org/3.5/howto/ipaddress.html#ipaddress-howto)
-   [Wikipedia: IP address](https://en.wikipedia.org/wiki/IP_address)
    \-- An introduction to IP addresses and networks.
-   *Computer Networks (5th Edition)* \-- By Andrew S. Tanenbaum and
    David J. Wetherall. Published by Pearson, 2010. ISBN-10: 0132126958
:::
