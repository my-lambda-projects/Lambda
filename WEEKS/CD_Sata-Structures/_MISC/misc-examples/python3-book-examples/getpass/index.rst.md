getpass \-\-- Secure Password Prompt
====================================

::: {.module synopsis="Prompt for a password securely"}
getpass
:::

Purpose

:   Prompt the user for a value, usually a password, without echoing
    what they type to the console.

Many programs that interact with the user via the terminal need to ask
the user for password values without showing what the user types on the
screen. The `getpass` module provides a portable way to handle such
password prompts securely.

Example
-------

The `getpass()` function prints a prompt, then reads input from the user
until they press return. The input is returned as a string to the
caller.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
getpass\_defaults.py
:::

The default prompt, if none is specified by the caller, is
\"`Password:`\".

``` {.sourceCode .none}
$ python3 getpass_defaults.py

Password:
You entered: sekret
```

The prompt can be changed to any value needed.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
getpass\_prompt.py
:::

Some programs ask for a pass phrase instead of a simple password, to
give better security.

``` {.sourceCode .none}
$ python3 getpass_prompt.py

What is your favorite color?
Right.  Off you go.

$ python3 getpass_prompt.py

What is your favorite color?
Auuuuugh!
```

By default, `getpass()` uses `sys.stdout` to print the prompt string.
For a program that may produce useful output on `sys.stdout`, it is
frequently better to send the prompt to another stream such as
`sys.stderr`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
getpass\_stream.py
:::

Using `sys.stderr` for the prompt means standard output can be
redirected (to a pipe or file) without seeing the password prompt. The
value entered by the user is still not echoed back to the screen.

``` {.sourceCode .none}
$ python3 getpass_stream.py >/dev/null

Password:
```

Using getpass Without a Terminal
--------------------------------

Under Unix, `getpass()` always requires a tty it can control via
`termios`{.interpreted-text role="mod"}, so input echoing can be
disabled. This means values will not be read from a non-terminal stream
redirected to standard input. Instead, `getpass` tries to get to the tty
for a process, and no error is raised if they can access it.

``` {.sourceCode .none}
$ echo "not sekret" | python3 getpass_defaults.py

Password: 
You entered: sekret
```

It is up to the caller to detect when the input stream is not a tty, and
use an alternate method for reading in that case.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
getpass\_noterminal.py
:::

With a tty:

``` {.sourceCode .none}
$ python3 ./getpass_noterminal.py

Using getpass:
Read:  sekret
```

Without a tty:

``` {.sourceCode .none}
$ echo "sekret" | python3 ./getpass_noterminal.py

Using readline
Read:  sekret
```

::: {.seealso}
-   `getpass`{.interpreted-text role="pydoc"}
-   `readline`{.interpreted-text role="mod"} \-- Interactive prompt
    library.
:::
