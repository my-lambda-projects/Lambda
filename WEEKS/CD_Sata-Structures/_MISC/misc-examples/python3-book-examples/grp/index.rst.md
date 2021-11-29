grp \-\-- Unix Group Database
=============================

::: {.module synopsis="Unix Group Database"}
grp
:::

Purpose

:   Read group data from Unix group database.

The `grp` module can be used to read information about Unix groups from
the group database (usually `/etc/group`). The read-only interface
returns tuple-like objects with named attributes for the standard fields
of a group record.

+-------+------------+------------------------------+
| Index | Attribute  | Meaning                      |
+=======+============+==============================+
| > 0   | gr\_name   | Name                         |
+-------+------------+------------------------------+
| > 1   | gr\_passwd | Password, if any (encrypted) |
+-------+------------+------------------------------+
| > 2   | gr\_gid    | Numerical id (integer)       |
+-------+------------+------------------------------+
| > 3   | gr\_mem    | Names of group members       |
+-------+------------+------------------------------+

The name and password values are both strings, the GID is an integer,
and the members are reported as a list of strings.

Querying All Groups
-------------------

This example prints a report of all of the \"real\" groups on a system,
including their members (where \"real\" is defined as having a name not
starting with \"`_`\"). To load the entire password database, use
`getgrall()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
grp\_getgrall.py
:::

The return value is a list with an undefined order, so it needs to be
sorted before printing the report.

``` {.sourceCode .none}
$ python3 grp_getgrall.py

34
Name                            GID         Members            
------------------------------- ----------- -------------------
accessibility                            90                    
admin                                    80 root               
authedusers                              50                    
bin                                       7                    
certusers                                29 root, _jabber,
                                            _postfix, _cyrus,
                                            _calendar, _dovecot
com.apple.access_disabled               396                    
com.apple.access_ftp                    395                    
com.apple.access_screensharing          398                    
com.apple.access_sessionkey             397                    
com.apple.access_ssh                    399                    
com.apple.sharepoint.group.1            701 dhellmann          
consoleusers                             53                    
daemon                                    1 root               
dialer                                   68                    
everyone                                 12                    
group                                    16                    
interactusers                            51                    
kmem                                      2 root               
localaccounts                            61                    
mail                                      6 _teamsserver       
netaccounts                              62                    
netusers                                 52                    
network                                  69                    
nobody                           4294967294                    
nogroup                                  -1                    
operator                                  5 root               
owner                                    10                    
procmod                                   9 root               
procview                                  8 root               
staff                                    20 root               
sys                                       3 root               
tty                                       4 root               
utmp                                     45                    
wheel                                     0 root               
```

Group Memberships for a User
----------------------------

Another common task might be to print a list of all the groups for a
given user:

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
grp\_groups\_for\_user.py
:::

The set of unique group names is sorted before they are printed.

``` {.sourceCode .none}
$ python3 grp_groups_for_user.py

dhellmann belongs to: _appserveradm, _appserverusr, _lpadmin, ad
min, com.apple.sharepoint.group.1
```

Finding a Group By Name
-----------------------

As with `pwd`{.interpreted-text role="mod"}, it is also possible to
query for information about a specific group, either by name or numeric
id.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
grp\_getgrnam.py
:::

The `admin` group has two members:

``` {.sourceCode .none}
$ python3 grp_getgrnam.py

Name    : admin
GID     : 80
Password: *
Members : root, dhellmann
```

Finding a Group by ID
---------------------

To identify the group running the current process, combine `getgrgid()`
with `os.getgid()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
grp\_getgrgid\_process.py
:::

``` {.sourceCode .none}
$ python3 grp_getgrgid_process.py

Currently running with GID=20 name=staff
```

And to get the group name based on the permissions on a file, look up
the group returned by `os.stat()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
grp\_getgrgid\_fileowner.py
:::

The file status record includes ownership and permission data for the
file or directory.

``` {.sourceCode .none}
$ python3 grp_getgrgid_fileowner.py

grp_getgrgid_fileowner.py is owned by staff (20)
```

::: {.seealso}
-   `grp`{.interpreted-text role="pydoc"}
-   `pwd`{.interpreted-text role="mod"} \-- Read user data from the
    password database.
-   `spwd`{.interpreted-text role="mod"} \-- Read user data from the
    shadow password database.
-   `os`{.interpreted-text role="mod"} \-- Operating system interfaces.
:::
