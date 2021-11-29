# Copyright 2009 Doug Hellmann.
#
#
#                         All Rights Reserved
#

#

#
"""
"""

# end_pymotw_header
import grp
import textwrap

# Load all of the user data, sorted by username
all_groups = grp.getgrall()
interesting_groups = {g.gr_name: g for g in all_groups if not g.gr_name.startswith("_")}
print(len(interesting_groups.keys()))

# Find the longest length for a few fields
name_length = max(len(k) for k in interesting_groups) + 1
gid_length = max(len(str(u.gr_gid)) for u in interesting_groups.values()) + 1

# Set the members field width to avoid table columns
# wrapping
members_width = 19

# Print report headers
fmt = " ".join(["{:<{name_length}}", "{:{gid_length}}", "{:<{members_width}}"])
print(
    fmt.format(
        "Name",
        "GID",
        "Members",
        name_length=name_length,
        gid_length=gid_length,
        members_width=members_width,
    )
)
print("-" * name_length, "-" * gid_length, "-" * members_width)

# Print the data
prefix = " " * (name_length + gid_length + 2)
for name, g in sorted(interesting_groups.items()):
    # Format members to start in the column on the same line but
    # wrap as needed with an indent sufficient to put the
    # subsequent lines in the members column. The two indent
    # prefixes need to be the same to compute the wrap properly,
    # but the first should not be printed so strip it.
    members = textwrap.fill(
        ", ".join(g.gr_mem),
        initial_indent=prefix,
        subsequent_indent=prefix,
        width=members_width + len(prefix),
    ).strip()
    print(
        fmt.format(
            g.gr_name,
            g.gr_gid,
            members,
            name_length=name_length,
            gid_length=gid_length,
            members_width=members_width,
        )
    )
