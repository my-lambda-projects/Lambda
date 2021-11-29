    #!/usr/bin/env python
    #
    # Copyright 2006 Doug Hellmann.
    #
    #
    #                         All Rights Reserved
    #
    # Permission to use, copy, modify, and distribute this software and
    # its documentation for any purpose and without fee is hereby
    # granted, provided that the above copyright notice appear in all
    # copies and that both that copyright notice and this permission
    # notice appear in supporting documentation, and that the name of Doug
    # Hellmann not be used in advertising or publicity pertaining to
    # distribution of the software without specific, written prior
    # permission.
    #
    # DOUG HELLMANN DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE,
    # INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS, IN
    # NO EVENT SHALL DOUG HELLMANN BE LIABLE FOR ANY SPECIAL, INDIRECT OR
    # CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
    # OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT,
    # NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
    # CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
    #

    """Convert an input m3u file to an RSS podcast feed.

    """

    __module_id__ = "$Id$"

    #
    # Import system modules
    #
    import fileinput
    import os
    import sys
    import time

    #
    # Import local modules
    #
    from m3utorsslib.CommandLineApp import CommandLineApp
    from m3utorsslib import id3reader # from http://nedbatchelder.com/code/modules/id3reader.html
    from m3utorsslib import mp3 # from http://ibofobi.dk/svn/Jukebox/jukebox/mp3.py

    #
    # Module
    #

    def mp3secs(mp3file):
        """From http://www.nedbatchelder.com/code/utilities/m3utree_py.html
        """
        secs = 0
        secs = sum([mp3.time(h) for h,f in mp3.frames(mp3file)])
        return secs

    class m3utorss(CommandLineApp):
        """Convert an input m3u file to an RSS podcast feed.
        """

        title = 'm3utorss generated feed'
        def optionHandler_title(self, title):
            """The title for the RSS feed.
            """
            self.title = title
            return

        description = None
        def optionHandler_description(self, description):
            """The description for the feed.
            """
            self.description = description
            return
        optionHandler_d = optionHandler_description

        link = None
        def optionHandler_link(self, link):
            """The link for the feed.
            """
            self.link = link
            return
        optionHandler_d = optionHandler_link

        url_prefix = None
        def optionHandler_prefix(self, url_prefix):
            """The URL prefix for the MP3 files.
            """
            self.url_prefix = url_prefix
            return
        optionHandler_p = optionHandler_prefix

        include_comments = True
        def optionHandler_comments(self):
            """Include comments. (default)
            """
            self.include_comments = True
            return
        def optionHandler_no_comments(self):
            """Do not include comments.
            """
            self.include_comments = False
            return

        def startRSS(self):
            print '<rss xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0">'
            return

        def endRSS(self):
            print '</rss>'
            return

        def generateChannelInfo(self):
            print '<channel>'
            print ' <title>%s</title>' % self.title

            for tag, value in [ ('description', self.description),
                                ('link', self.link),
                                ]:
                if value is not None:
                    print ' <%s>%s</%s>' % (tag, value, tag)

            print ' <pubDate>%s</pubDate>' % time.asctime()
            print ' <generator>http://www.doughellmann.com/projects/m3utorss/</generator>'
            print '</channel>'
            return

        def generateItem(self, mp3filename):
            sys.stderr.write('Working on: %s\n' % mp3filename)
            print '  <item>'

            # Read some info from the mp3 file
            mp3file = open(mp3filename, 'rb')
            try:
                mp3file.seek(0)
                id3 = id3reader.Reader(mp3file)

                # who?
                performer = id3.getValue('performer')

                # what?
                album = id3.getValue('album')
                title = id3.getValue('title')
                comment = id3.getValue('comment')
            finally:
                mp3file.close()

            # title
            if album and title:
                print '    <title>%s - %s</title>' % (album, title)
            elif title:
                print '    <title>%s</title>' % title

            # creator
            if performer:
                print '    <dc:creator>%s</dc:creator>' % performer

            # description
            if comment:
                print '    <description>%s</description>' % comment

            # Build the link...
            mp3_base = os.path.basename(mp3filename)
            if self.url_prefix:
                if self.url_prefix.endswith('/'):
                    sep = ''
                else:
                    sep = '/'
                link = self.url_prefix + sep + mp3_base
            else:
                # Assume a relative link
                link = mp3_base
            print '    <link>%s</link>' % link

            # How big is the file?
            statinfo = os.stat(mp3filename)
            file_size = statinfo.st_size
            print '    <enclosure url="%s" type="audio/mpeg" length="%s" />' % (link, file_size)

            # pubDate
            print '  </item>'
            return

        def main(self, *m3ufilenames):

            self.startRSS()

            self.generateChannelInfo()

            for line in fileinput.input(m3ufilenames):
                mp3filename = line.strip()
                if not mp3filename or mp3filename.startswith('#'):
                    continue
                self.generateItem(mp3filename)

            self.endRSS()
            return 0


    if __name__ == '__main__':
        try:
            exit_code = m3utorss().run()
        except m3utorss.HelpRequested:
            exit_code = 0

        sys.exit(exit_code)
