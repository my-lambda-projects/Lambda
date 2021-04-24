Here is a safe way:

grep -lrIZ foo . | xargs -0 rm -f --
-l prints file names of files matching the search pattern.
-r performs a recursive search for the pattern foo in the given directory ..  If this doesn't work, try -R.
-I (capital i) causes binary files like PDFs to be skipped.
-Z ensures that file names are zero- (i.e., nul-)terminated so that a name containing white space does not get interpreted in the wrong way (i.e., as multiple names instead of one).
xargs -0 feeds the file names from grep to rm -f, separating words by zero (nul) bytes (remember the -Z option from grep).
-- is often forgotten but it is very important to mark the end of options and allow for removal of files whose names begin with -.
If you would like to see which files are about to be deleted, simply remove the | xargs -0 rm -f -- part, and leave off the Z option to grep.