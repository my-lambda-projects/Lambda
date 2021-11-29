# Copyright (c) 2009 Doug Hellmann All rights reserved.
#
"""
"""

# end_pymotw_header
import gettext

# Set up message catalog access
t = gettext.translation("example_domain", "locale", fallback=True)
_ = t.gettext

print(_("This message is in the script."))
