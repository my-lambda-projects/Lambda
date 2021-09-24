# Copyright (c) 2010 Doug Hellmann.  All rights reserved.
#
"""Show the globals exposed in a test.
"""
# end_pymotw_header
class TestGlobals:
    def one(self):
        """
        >>> var = 'value'
        >>> 'var' in globals()
        True
        """

    def two(self):
        """
        >>> 'var' in globals()
        False
        """
