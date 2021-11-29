I always forget this …

To recursively remove all those pesky _.pyc_ files from a git repo, run this command:

    $ find . -name "*.pyc" -exec git rm -f {} \;

Then make sure to add a _.gitignore_ in the root of the repo and add the line: `*.pyc`
