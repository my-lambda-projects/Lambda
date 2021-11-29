\_R # Resources:

- [holy grail](https://gist.github.com/bgoonz/df74dfa73bb5edd239ac738a14104eee)

# 1. Remove spaces from file and folder names and then remove numbers from files and folder names....

### Description: need to : `sudo apt install rename`

> Notes: Issue when renaming file without numbers collides with existing file name...

###### code:

```sh
find . -name "* *" -type d | rename 's/ /_/g'
find . -name "* *" -type f | rename 's/ /_/g'
```

````sh

```sh
find $dir -type f | sed 's|\(.*/\)[^A-Z]*\([A-Z].*\)|mv \"&\" \"\1\2\"|' | sh

find $dir -type d | sed 's|\(.*/\)[^A-Z]*\([A-Z].*\)|mv \"&\" \"\1\2\"|' | sh

for i in *.html; do mv "$i" "${i%-*}.html"; done

for i in *.*; do mv "$i" "${i%-*}.${i##*.}"; done

---
### Description: combine the contents of every file in the contaning directory.


>Notes: this includes the contents of the file it's self...


###### code:


```js
//APPEND-DIR.js
const fs = require('fs');
let cat = require('child_process')
  .execSync('cat *')
  .toString('UTF-8');
fs.writeFile('output.md', cat, err => {
  if (err) throw err;
});


````

---

# 2. Download Website Using Wget:

### Description:

> Notes: ==> sudo apt install wget

###### code:

```sh

wget --limit-rate=200k --no-clobber --convert-links --random-wait -r -p -E -e robots=off -U mozilla https://bootcamp42.gitbook.io/python/

```

---

# 3. Clean Out Messy Git Repo:

### Description: recursively removes git related folders as well as internal use files / attributions in addition to empty folders

> Notes: To clear up clutter in repositories that only get used on your local machine.

###### code:

```sh


find . -empty -type d -print -delete


find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +


find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +


```

---

# 4. clone all of a user's git repositories

### Description: clone all of a user or organization's git repositories.

> Notes:

###### code:

# Generalized:

```sh



CNTX={users|orgs}; NAME={username|orgname}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=100" |
  grep -e 'git_url*' |
  cut -d \" -f 4 |
  xargs -L1 git clone
```

# Clone all Git User

```sh
CNTX={users}; NAME={bgoonz}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=200"?branch=master |
  grep -e 'git_url*' |
  cut -d \" -f 4 |
  xargs -L1 git clone


```

# Clone all Git Organization:

```sh

CNTX={organizations}; NAME={TheAlgorithms}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=200"?branch=master |
  grep -e 'git_url*' |
  cut -d \" -f 4 |
  xargs -L1 git clone


```

---

# 5. Git Workflow

### Description:

###### code:

```sh
git pull
git init
git add .
git commit -m"update"
git push -u origin master
```

```sh
git init
git add .
git commit -m"update"
git push -u origin main
```

```sh

git init
git add .
git commit -m"update"
git push -u origin bryan-guner
```

```sh
git init
git add .
git commit -m"update"
git push -u origin gh-pages
```

```sh
git init
git add .
git commit -m"update"
git push -u origin preview
```

---

# 6. Recursive Unzip In Place

### Description: recursively unzips folders and then deletes the zip file by the same name.

> Notes:

###### code:

```sh

find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;



find . -name "*.zip" -type f -print -delete

```

---

# 7. git pull keeping local changes:

### Description:

> Notes:

###### code:

```sh


git stash
git pull
git stash pop


```

---

# 8. Prettier Code Formatter:

### Description:

> Notes:

###### code:

```sh

sudo npm i prettier -g

prettier --write .



```

---

# 9. Pandoc

### Description:

> Notes:

###### code:

```sh

find ./ -iname "*.md" -type f -exec sh -c 'pandoc --standalone "${0}" -o "${0%.md}.html"' {} \;



find ./ -iname "*.html" -type f -exec sh -c 'pandoc --wrap=none --from html --to markdown_strict "${0}" -o "${0%.html}.md"' {} \;



find ./ -iname "*.docx" -type f -exec sh -c 'pandoc "${0}" -o "${0%.docx}.md"' {} \;


```

---

# 10. Gitpod Installs

### Description:

> Notes:

###### code:

```sh
sudo apt install tree
sudo apt install pandoc -y
sudo apt install rename -y
sudo apt install black -y
sudo apt install wget -y
npm i lebab -g
npm i prettier -g
npm i npm-recursive-install -g


```

```sh
black .

prettier --write .
npm-recursive-install
```

---

# 11. Repo Utils Package:

### Description: my standard repo utis package

> Notes:

###### code:

```sh
npm i @bgoonz11/repoutils

```

---

# 12. Unix Tree Package Usage:

### Description:

> Notes:

###### code:

```sh
tree -d -I  'node_modules'

tree  -I  'node_modules'

tree -f  -I  'node_modules' >TREE.md

tree -f -L 2  >README.md

tree -f  -I  'node_modules' >listing-path.md


tree -f  -I  'node_modules' -d >TREE.md

tree -f >README.md

```

---

# 13. Find & Replace string in file & folder names recursively..

### Description:

> Notes:

###### code:

```sh

find . -type f -exec rename 's/string1/string2/g' {} +


find . -type d -exec rename 's/-master//g' {} +


find . -type f -exec rename 's/\.download//g' {} +




find . -type d -exec rename 's/-main//g' {} +



rename 's/\.js\.download$/.js/' *.js\.download


rename 's/\.html\.markdown$/.md/' *.html\.markdown


find . -type d -exec rename 's/es6//g' {} +


```

---

# 14. Remove double extensions :

### Description:

> Notes:

###### code:

```sh
#!/bin/bash

for file in *.md.md
do
    mv "${file}" "${file%.md}"
done

#!/bin/bash

for file in *.html.html
do
    mv "${file}" "${file%.html}"
done
```

```sh


#!/bin/bash

for file in *.html.png
do
    mv "${file}" "${file%.png}"
done

for file in *.jpg.jpg
do
    mv "${file}" "${file%.png}"
done

```

---

# 15. Truncate folder names down to 12 characters:

### Description:

> Notes:

###### code:

```sh

for d in ./*; do mv $d ${d:0:12}; done

```

---

# 16.Appendir.js

### Description: combine the contents of every file in the contaning directory.

> Notes: this includes the contents of the file it's self...

###### code:

```js
//APPEND-DIR.js
const fs = require('fs');
let cat = require('child_process').execSync('cat *').toString('UTF-8');
fs.writeFile('output.md', cat, (err) => {
  if (err) throw err;
});
```

---

# 17. Replace space in filename with underscore

### Description: followed by replace `'#' with '_'` in directory name

> Notes: Can be re-purposed to find and replace any set of strings in file or folder names.

###### code:

```sh
find . -name "* *" -type f | rename 's/_//g'

find . -name "* *" -type d | rename 's/#/_/g'

```

---

# 18. Filter & delete files by name and extension

### Description:

> Notes:

###### code:

```sh
find . -name '.bin' -type d -prune -exec rm -rf '{}' +

find . -name '*.html' -type d -prune -exec rm -rf '{}' +

find . -name 'nav-index' -type d -prune -exec rm -rf '{}' +

find . -name 'node-gyp' -type d -prune -exec rm -rf '{}' +

find . -name 'deleteme.txt' -type f -prune -exec rm -rf '{}' +

find . -name 'right.html' -type f -prune -exec rm -rf '{}' +

find . -name 'left.html' -type f -prune -exec rm -rf '{}' +

```

---

# 19. Remove lines containing string:

### Description:

> Notes: Remove lines not containing `'.js'`

```sh

sudo sed -i '/\.js/!d' ./*scrap2.md


```

###### code:

```sh
sudo sed -i '/githubusercontent/d' ./*sandbox.md


sudo sed -i '/githubusercontent/d' ./*scrap2.md



sudo sed -i '/github\.com/d' ./*out.md


sudo sed -i '/author/d' ./*

```

---

# 20. Remove duplicate lines from a text file

### Description:

> Notes: //...syntax of uniq...// $uniq [OPTION] [INPUT[OUTPUT]] The syntax of this is quite easy to understand. Here, INPUT refers to the input file in which repeated lines need to be filtered out and if INPUT isn’t specified then uniq reads from the standard input. OUTPUT refers to the output file in which you can store the filtered output generated by uniq command and as in case of INPUT if OUTPUT isn’t specified then uniq writes to the standard output.

Now, let’s understand the use of this with the help of an example. Suppose you have a text file named kt.txt which contains repeated lines that needs to be omitted. This can simply be done with uniq.

###### code:

```sh
sudo apt install uniq
uniq -u input.txt output.txt

```

---

# 21. Remove lines containing string:

### Description:

> Notes:

###### code:

```sh
sudo sed -i '/githubusercontent/d' ./*sandbox.md


sudo sed -i '/githubusercontent/d' ./*scrap2.md


sudo sed -i '/github\.com/d' ./*out.md

---
title: add_days
tags: date,intermediate
firstSeen: 2020-10-28T16:19:04+02:00
lastUpdated: 2020-10-28T16:19:04+02:00
---

sudo sed -i '/title:/d' ./*output.md
sudo sed -i '/firstSeen/d' ./*output.md
sudo sed -i '/lastUpdated/d' ./*output.md
sudo sed -i '/tags:/d' ./*output.md

sudo sed -i '/badstring/d' ./*


sudo sed -i '/stargazers/d' ./repo.txt
sudo sed -i '/node_modules/d' ./index.html
sudo sed -i '/right\.html/d' ./index.html
sudo sed -i '/right\.html/d' ./right.html



```

---

# 22. Zip directory excluding .git and node_modules all the way down (Linux)

### Description:

> Notes:

###### code:

```sh


#!/bin/bash
TSTAMP=`date '+%Y%m%d-%H%M%S'`
zip -r $1.$TSTAMP.zip $1 -x "**.git/*" -x "**node_modules/*" `shift; echo $@;`

printf "\nCreated: $1.$TSTAMP.zip\n"

# usage:
# - zipdir thedir
# - zip thedir -x "**anotherexcludedsubdir/*"    (important the double quotes to prevent glob expansion)

# if in windows/git-bash, add 'zip' command this way:
# https://stackoverflow.com/a/55749636/1482990


```

---

# 23. Delete files containing a certain string:

### Description:

> Notes:

###### code:

```sh
find . | xargs grep -l www.redhat.com | awk '{print "rm "$1}' > doit.sh
vi doit.sh // check for murphy and his law
source doit.sh

```

---

# 24.

### Description:

> Notes:

###### code:

```sh

#!/bin/sh

# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"

out=""

html="sitemap.html"
out="basename $out.html"
html="sitemap.html"
cmd() {

  echo '  <!DOCTYPE html>'
  echo '<html>'
  echo '<head>'

  echo '  <meta http-equiv="Content-Type" content="text/html">'

  echo '  <meta name="Author" content="Bryan Guner">'
  echo '<link rel="stylesheet" href="./assets/prism.css">'
  echo ' <link rel="stylesheet" href="./assets/style.css">'
  echo ' <script async defer src="./assets/prism.js"></script>'

  echo "  <title> directory </title>"
    echo '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/mdn-article.css">'
  echo '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/markdown-to-html-style.css">'
  echo ""
  echo '<style>'


echo '    a {'
echo '      color: black;'
echo '    }'
echo ''
echo '    li {'
echo '      border: 1px solid black !important;'
echo '      font-size: 20px;'
echo '      letter-spacing: 0px;'
echo '      font-weight: 700;'
echo '      line-height: 16px;'
echo '      text-decoration: none !important;'
echo '      text-transform: uppercase;'
echo '      background: #194ccdaf !important;'
echo '      color: black !important;'
echo '      border: none;'
echo '      cursor: pointer;'
echo '      justify-content: center;'
echo '      padding: 30px 60px;'
echo '      height: 48px;'
echo '      text-align: center;'
echo '      white-space: normal;'
echo '      border-radius: 10px;'
echo '      min-width: 45em;'
echo '      padding: 1.2em 1em 0;'
echo '      box-shadow: 0 0 5px;'
echo '      margin: 1em;'
echo '      display: grid;'
echo '      -webkit-border-radius: 10px;'
echo '      -moz-border-radius: 10px;'
echo '      -ms-border-radius: 10px;'
echo '      -o-border-radius: 10px;'
echo '    }'
echo '  </style>'
  echo '</head>'

  echo '<body>'

  echo ""

  # continue with the HTML stuff

  echo ""

  echo ""

  echo "<ul>"

  awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing

  # awk '{print "<li>"};

  # 	{print " <a href=\""$1"\">",$1,"</a></li>&nbsp;"}' \ $listing

  echo ""

  echo "</ul>"

  echo "</body>"

  echo "</html>"

}

cmd $listing --sort=extension >>$html

```

---

# 25. Index of Iframes

### Description: Creates an index.html file that contains all the files in the working directory or any of it's sub folders as iframes instead of anchor tags.

> Notes: Useful Follow up Code:

```sh





```

###### code:

```sh


#!/bin/sh

# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"

out=""

html="index.html"
out="basename $out.html"
html="index.html"
cmd() {

  echo '  <!DOCTYPE html>'
  echo '<html>'
  echo '<head>'

  echo '  <meta http-equiv="Content-Type" content="text/html">'

  echo '  <meta name="Author" content="Bryan Guner">'
  echo '<link rel="stylesheet" href="./assets/prism.css">'
  echo ' <link rel="stylesheet" href="./assets/style.css">'
  echo ' <script async defer src="./assets/prism.js"></script>'

  echo "  <title> directory </title>"

  echo ""
  echo '<style>'


echo '    a {'
echo '      color: black;'
echo '    }'
echo ''
echo '    li {'
echo '      border: 1px solid black !important;'
echo '      font-size: 20px;'
echo '      letter-spacing: 0px;'
echo '      font-weight: 700;'
echo '      line-height: 16px;'
echo '      text-decoration: none !important;'
echo '      text-transform: uppercase;'
echo '      background: #194ccdaf !important;'
echo '      color: black !important;'
echo '      border: none;'
echo '      cursor: pointer;'
echo '      justify-content: center;'
echo '      padding: 30px 60px;'
echo '      height: 48px;'
echo '      text-align: center;'
echo '      white-space: normal;'
echo '      border-radius: 10px;'
echo '      min-width: 45em;'
echo '      padding: 1.2em 1em 0;'
echo '      box-shadow: 0 0 5px;'
echo '      margin: 1em;'
echo '      display: grid;'
echo '      -webkit-border-radius: 10px;'
echo '      -moz-border-radius: 10px;'
echo '      -ms-border-radius: 10px;'
echo '      -o-border-radius: 10px;'
echo '    }'
echo '  </style>'
  echo '</head>'

  echo '<body>'

  echo ""

  # continue with the HTML stuff

  echo ""

  echo ""

  echo "<ul>"

  awk '{print "<iframe src=\""$1"\">","</iframe>"}' $listing

  # awk '{print "<li>"};

  # 	{print " <a href=\""$1"\">",$1,"</a></li>&nbsp;"}' \ $listing

  echo ""

  echo "</ul>"

  echo "</body>"

  echo "</html>"

}

cmd $listing --sort=extension >>$html

```

---

# 26. Filter Corrupted Git Repo For Troublesome File:

### Description:

> Notes:

###### code:

```sh

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/_index.html' HEAD


```

---

# 27. OVERWRITE LOCAL CHANGES:

### Description:

Important: If you have any local changes, they will be lost. With or without --hard option, any local commits that haven't been pushed will be lost.[*] If you have any files that are not tracked by Git (e.g. uploaded user content), these files will not be affected.

> Notes: First, run a fetch to update all origin/<branch> refs to latest:

###### code:

```sh

git fetch --all
# Backup your current branch:

git branch backup-master
# Then, you have two options:

git reset --hard origin/master
# OR If you are on some other branch:

git reset --hard origin/<branch_name>
# Explanation:
# git fetch downloads the latest from remote without trying to merge or rebase anything.

# Then the git reset resets the master branch to what you just fetched. The --hard option changes all the files in your working tree to match the files in origin/master
git fetch --all
git reset --hard origin/master

```

---

# 28. Remove Submodules:

### Description: To remove a submodule you need to:

> Notes:

> Delete the relevant section from the .gitmodules file. Stage the .gitmodules changes git add .gitmodules Delete the relevant section from .git/config. Run git rm --cached path_to_submodule (no trailing slash). Run rm -rf .git/modules/path_to_submodule (no trailing slash). Commit git commit -m "Removed submodule " Delete the now untracked submodule files rm -rf path_to_submodule

###### code:

```sh
git submodule deinit
```

---

# 29. GET GISTS

### Description:

> Notes:

###### code:

```sh
sudo apt install wget



wget -q -O - https://api.github.com/users/bgoonz/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n3 wget


wget -q -O - https://api.github.com/users/amitness/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n3 wget


wget -q -O - https://api.github.com/users/drodsou/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n1 wget

wget -q -O - https://api.github.com/users/thomasmb/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n1 wget


```

---

# 30. Remove Remote OriginL

### Description:

> Notes:

###### code:

```sh

git remote remove origin

```

---

# 31. just clone .git folder:

### Description:

> Notes:

###### code:

```sh


git clone --bare --branch=master --single-branch https://github.com/bgoonz/My-Web-Dev-Archive.git

```

---

# 32. Undo recent pull request:

### Description:

> Notes:

###### code:

```sh

git reset --hard master@{"10 minutes ago"}


```

---

# 33. Lebab

### Description: ES5 --> ES6

> Notes:

###### code:

```sh
# Safe:

 lebab --replace ./ --transform arrow
 lebab --replace ./ --transform arrow-return
 lebab --replace ./ --transform for-of
 lebab --replace ./ --transform for-each
 lebab --replace ./ --transform arg-rest
 lebab --replace ./ --transform arg-spread
 lebab --replace ./ --transform obj-method
 lebab --replace ./ --transform obj-shorthand
 lebab --replace ./ --transform multi-var


# ALL:


lebab --replace ./ --transform obj-method
lebab --replace ./ --transform class
lebab --replace ./ --transform arrow
lebab --replace ./ --transform let
lebab --replace ./ --transform arg-spread
lebab --replace ./ --transform arg-rest
lebab --replace ./ --transform for-each
lebab --replace ./ --transform for-of
lebab --replace ./ --transform commonjs
lebab --replace ./ --transform exponent
lebab --replace ./ --transform multi-var
lebab --replace ./ --transform template
lebab --replace ./ --transform default-param
lebab --replace ./ --transform  destruct-param
lebab --replace ./ --transform includes
lebab --replace ./ --transform obj-method
lebab --replace ./ --transform class
lebab --replace ./ --transform arrow
lebab --replace ./ --transform arg-spread
lebab --replace ./ --transform arg-rest
lebab --replace ./ --transform for-each
lebab --replace ./ --transform for-of
lebab --replace ./ --transform commonjs
lebab --replace ./ --transform exponent
lebab --replace ./ --transform multi-var
lebab --replace ./ --transform template
lebab --replace ./ --transform default-param
lebab --replace ./ --transform  destruct-param
lebab --replace ./ --transform includes


```

---

# 34. Troubleshoot Ubuntu Input/Output Error

### Description: Open Powershell as Administrator...

> Notes:

###### code:

```ps1

 wsl.exe --shutdown

 Get-Service LxssManager | Restart-Service


```

---

# 35. Export Medium as Markdown

### Description:

> Notes:

###### code:

```sh
npm i mediumexporter -g


mediumexporter https://medium.com/codex/fundamental-data-structures-in-javascript-8f9f709c15b4 >ds.md


```

---

# 36. Delete files in violation of a given size range (100MB for git)

### Description:

> Notes:

###### code:

```sh

find . -size +75M -a -print -a -exec rm -f {} \;




find . -size +98M -a -print -a -exec rm -f {} \;

```

---

# 37. download all links of given file type

### Description:

> Notes:

###### code:

```sh


wget -r -A.pdf https://overapi.com/git


```

---

# 38. Kill all node processes

### Description:

> Notes:

###### code:

```sh
killall -s KILL node

```

---

# 39. Remove string from file names recursively

### Description: In the example below I am using this command to remove the string "-master" from all file names in the working directory and all of it's sub directories.

###### code:

```sh
find <mydir> -type f -exec sed -i 's/<string1>/<string2>/g' {} +




find . -type f -exec rename 's/-master//g' {} +

```

> Notes: The same could be done for folder names by changing the _-type f_ flag (for file) to a _-type d_ flag (for directory)

```sh
find <mydir> -type d -exec sed -i 's/<string1>/<string2>/g' {} +




find . -type d -exec rename 's/-master//g' {} +

```

---

# 40. Remove spaces from file and folder names recursively

### Description: replaces spaces in file and folder names with an `_` underscore

> Notes: need to run `sudo apt install rename` to use this command

###### code:

```sh

find . -name "* *" -type d | rename 's/ /_/g'
find . -name "* *" -type f | rename 's/ /_/g'
```

---

# 41. Powershell remove numbers and dashes from file names:

### Description:

> Notes:

###### code:

```ps1



Dir | Rename-Item –NewName { $_.name –replace " ","_" }

Dir | Rename-Item –NewName { $_.name –replace "1","" }

Dir | Rename-Item –NewName { $_.name –replace "2","" }

Dir | Rename-Item –NewName { $_.name –replace "3","" }

Dir | Rename-Item –NewName { $_.name –replace "4","" }

Dir | Rename-Item –NewName { $_.name –replace "5","" }

Dir | Rename-Item –NewName { $_.name –replace "6","" }

Dir | Rename-Item –NewName { $_.name –replace "7","" }

Dir | Rename-Item –NewName { $_.name –replace "8","" }

Dir | Rename-Item –NewName { $_.name –replace "9","" }

Dir | Rename-Item –NewName { $_.name –replace "9","" }

Dir | Rename-Item –NewName { $_.name –replace "-","" }

Dir | Rename-Item –NewName { $_.name –replace "0","" }



```

---

# 42.

### Description: Remove lines contaning string from file at the end of the following commands... or any line not contaning that string by `!d`

> Notes:

###### code:

```sh


sudo sed -i '/\.html/!d' ./sitemap.html


sudo sed -i '/\.html/!d' ./index.html


sed -i "/"""/,/""":/d" your_file


sudo sed -i '/\.git/d' ./index.html
sudo sed -i '/node_modules/d' ./index.html
sudo sed -i '/right\.html/d' ./index.html
sudo sed -i '/sol\~/d' ./right.html
sudo sed -i '/\.json/d' ./index.html
sudo sed -i '/\.gif/d' ./index.html
sudo sed -i '/\.png/d' ./index.html
sudo sed -i '/\.css/d' ./index.html
sudo sed -i '/\.js/d' ./index.html
sudo sed -i '/\.php/d' ./index.html
sudo sed -i '/\.md/d' ./index.html
sudo sed -i '/\.svg/d' ./index.html
sudo sed -i '/\.jpeg/d' ./index.html
sudo sed -i '/\.jpg/d' ./index.html
sudo sed -i '/\.scss/d' ./index.html
sudo sed -i '/scss/d' ./index.html
sudo sed -i '/\.txt/d' ./index.html
sudo sed -i '/\.ttf/d' ./index.html
sudo sed -i '/\.pdf/d' ./index.html
sudo sed -i '/\.mp4/d' ./index.html
sudo sed -i '/\.pug/d' ./index.html
sudo sed -i '/\.DS_store/d' ./index.html
sudo sed -i '/\.DS_Store/d' ./index.html
sudo sed -i '/\.sql/d' ./index.html
sudo sed -i '/\.py/d' ./index.html
sudo sed -i '/\.xlsx/d' ./index.html
sudo sed -i '/\.JPG/d' ./index.html
sudo sed -i '/\.TTF/d' ./index.html
sudo sed -i '/\.ttf/d' ./index.html
sudo sed -i '/\.eot/d' ./index.html
sudo sed -i '/\.ttc/d' ./index.html
sudo sed -i '/\.PNG/d' ./index.html
sudo sed -i '/\.java/d' ./index.html
sudo sed -i '/\.png/d' ./index.html
sudo sed -i '/\.jpeg/d' ./index.html
sudo sed -i '/\.gif/d' ./index.html
sudo sed -i '/\.go/d' ./index.html
sudo sed -i '/\.vue/d' ./index.html




```

---

# 43. DIRHTML.py

### Description: Generate a directory structure html file for content navigation

> Notes: creates a sitemap.html file in every directory

> python3 dirhtml.py -r ./

###### code:

```py
#!/usr/bin/env python3
# ---

# -handle symlinked files and folders: displayed with custom icons

# By default only the current folder is processed.

# Use -r or --recursive to process nested folders.

import argparse
import datetime
import os
import sys
from pathlib import Path
from urllib.parse import quote

DEFAULT_OUTPUT_FILE = "sitemap.html"


def process_dir(top_dir, opts):
    glob_patt = opts.filter or "*"

    path_top_dir: Path
    path_top_dir = Path(top_dir)
    index_file = None

    index_path = Path(path_top_dir, opts.output_file)

    if opts.verbose:
        print(f"Traversing dir {path_top_dir.absolute()}")

    try:
        index_file = open(index_path, "w")
    except Exception as e:
        print("cannot create file %s %s" % (index_path, e))
        return

    index_file.write(
        """<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    * { padding: 0; margin: 0; }
    body {
        font-family: sans-serif;
        text-rendering: optimizespeed;
        background-color: #ffffff;
    }
    a {
        color: #006ed3;
        text-decoration: none;
    }
    a:hover,
    h1 a:hover {
        color: #319cff;
    }
    header,
    #summary {
        padding-left: 5%;
        padding-right: 5%;
    }
    th:first-child,
    td:first-child {
        width: 5%;
    }
    th:last-child,
    td:last-child {
        width: 5%;
    }
    header {
        padding-top: 25px;
        padding-bottom: 15px;
        background-color: #f2f2f2;
    }
    h1 {
        font-size: 20px;
        font-weight: normal;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
        color: #999;
    }
    h1 a {
        color: #000;
        margin: 0 4px;
    }
    h1 a:hover {
        text-decoration: underline;
    }
    h1 a:first-child {
        margin: 0;
    }
    main {
        display: block;
    }
    .meta {
        font-size: 12px;
        font-family: Verdana, sans-serif;
        border-bottom: 1px solid #9C9C9C;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .meta-item {
        margin-right: 1em;
    }
    #filter {
        padding: 4px;
        border: 1px solid #CCC;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    tr {
        border-bottom: 1px dashed #dadada;
    }
    tbody tr:hover {
        background-color: #ffffec;
    }
    th,
    td {
        text-align: left;
        padding: 10px 0;
    }
    th {
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 16px;
        white-space: nowrap;
    }
    th a {
        color: black;
    }
    th svg {
        vertical-align: middle;
    }
    td {
        white-space: nowrap;
        font-size: 14px;
    }
    td:nth-child(2) {
        width: 80%;
    }
    td:nth-child(3) {
        padding: 0 20px 0 20px;
    }
    th:nth-child(4),
    td:nth-child(4) {
        text-align: right;
    }
    td:nth-child(2) svg {
        position: absolute;
    }
    td .name {
        margin-left: 1.75em;
        word-break: break-all;
        overflow-wrap: break-word;
        white-space: pre-wrap;
    }
    td .goup {
        margin-left: 1.75em;
        padding: 0;
        word-break: break-all;
        overflow-wrap: break-word;
        white-space: pre-wrap;
    }
    .icon {
        margin-right: 5px;
    }
    tr.clickable {
        cursor: pointer;
    }
    tr.clickable a {
        display: block;
    }
    @media (max-width: 600px) {
        * {
            font-size: 1.06rem;
        }
        .hideable {
            display: none;
        }
        td:nth-child(2) {
            width: auto;
        }
        th:nth-child(3),
        td:nth-child(3) {
            padding-right: 5%;
            text-align: right;
        }
        h1 {
            color: #000;
        }
        h1 a {
            margin: 0;
        }
        #filter {
            max-width: 100px;
        }
    }
    </style>
</head>
<body>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="0" width="0" style="position: absolute;">
    <defs>
        <!-- Go-up -->
        <g id="go-up">
            <path d="M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z" fill="#696969"/>
        </g>
        <!-- Folder -->
        <g id="folder" fill-rule="nonzero" fill="none">
            <path d="M285.22 37.55h-142.6L110.9 0H31.7C14.25 0 0 16.9 0 37.55v75.1h316.92V75.1c0-20.65-14.26-37.55-31.7-37.55z" fill="#FFA000"/>
            <path d="M285.22 36H31.7C14.25 36 0 50.28 0 67.74v158.7c0 17.47 14.26 31.75 31.7 31.75H285.2c17.44 0 31.7-14.3 31.7-31.75V67.75c0-17.47-14.26-31.75-31.7-31.75z" fill="#FFCA28"/>
        </g>
        <g id="folder-shortcut" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="folder-shortcut-group" fill-rule="nonzero">
                <g id="folder-shortcut-shape">
                    <path d="M285.224876,37.5486902 L142.612438,37.5486902 L110.920785,0 L31.6916529,0 C14.2612438,0 0,16.8969106 0,37.5486902 L0,112.646071 L316.916529,112.646071 L316.916529,75.0973805 C316.916529,54.4456008 302.655285,37.5486902 285.224876,37.5486902 Z" id="Shape" fill="#FFA000"></path>
                    <path d="M285.224876,36 L31.6916529,36 C14.2612438,36 0,50.2838568 0,67.7419039 L0,226.451424 C0,243.909471 14.2612438,258.193328 31.6916529,258.193328 L285.224876,258.193328 C302.655285,258.193328 316.916529,243.909471 316.916529,226.451424 L316.916529,67.7419039 C316.916529,50.2838568 302.655285,36 285.224876,36 Z" id="Shape" fill="#FFCA28"></path>
                </g>
                <path d="M126.154134,250.559184 C126.850974,251.883673 127.300549,253.006122 127.772602,254.106122 C128.469442,255.206122 128.919016,256.104082 129.638335,257.002041 C130.559962,258.326531 131.728855,259 133.100057,259 C134.493737,259 135.415364,258.55102 136.112204,257.67551 C136.809044,257.002041 137.258619,255.902041 137.258619,254.577551 C137.258619,253.904082 137.258619,252.804082 137.033832,251.457143 C136.786566,249.908163 136.561779,249.032653 136.561779,248.583673 C136.089726,242.814286 135.864939,237.920408 135.864939,233.273469 C135.864939,225.057143 136.786566,217.514286 138.180246,210.846939 C139.798713,204.202041 141.889234,198.634694 144.429328,193.763265 C147.216689,188.869388 150.678411,184.873469 154.836973,181.326531 C158.995535,177.779592 163.626149,174.883673 168.481552,172.661224 C173.336954,170.438776 179.113983,168.665306 185.587852,167.340816 C192.061722,166.218367 198.760378,165.342857 205.481514,164.669388 C212.18017,164.220408 219.598146,163.995918 228.162535,163.995918 L246.055591,163.995918 L246.055591,195.514286 C246.055591,197.736735 246.752431,199.510204 248.370899,201.059184 C250.214153,202.608163 252.079886,203.506122 254.372715,203.506122 C256.463236,203.506122 258.531277,202.608163 260.172223,201.059184 L326.102289,137.797959 C327.720757,136.24898 328.642384,134.47551 328.642384,132.253061 C328.642384,130.030612 327.720757,128.257143 326.102289,126.708163 L260.172223,63.4469388 C258.553756,61.8979592 256.463236,61 254.395194,61 C252.079886,61 250.236632,61.8979592 248.393377,63.4469388 C246.77491,64.9959184 246.07807,66.7693878 246.07807,68.9918367 L246.07807,100.510204 L228.162535,100.510204 C166.863084,100.510204 129.166282,117.167347 115.274437,150.459184 C110.666301,161.54898 108.350993,175.310204 108.350993,191.742857 C108.350993,205.279592 113.903236,223.912245 124.760454,247.438776 C125.00772,248.112245 125.457294,249.010204 126.154134,250.559184 Z" id="Shape" fill="#FFFFFF" transform="translate(218.496689, 160.000000) scale(-1, 1) translate(-218.496689, -160.000000) "></path>
            </g>
        </g>
        <!-- File -->
        <g id="file" stroke="#000" stroke-width="25" fill="#FFF" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 24.12v274.76c0 6.16 5.87 11.12 13.17 11.12H239c7.3 0 13.17-4.96 13.17-11.12V136.15S132.6 13 128.37 13H26.17C18.87 13 13 17.96 13 24.12z"/>
            <path d="M129.37 13L129 113.9c0 10.58 7.26 19.1 16.27 19.1H249L129.37 13z"/>
        </g>
        <g id="file-shortcut" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="file-shortcut-group" transform="translate(13.000000, 13.000000)">
                <g id="file-shortcut-shape" stroke="#000000" stroke-width="25" fill="#FFFFFF" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0,11.1214886 L0,285.878477 C0,292.039924 5.87498876,296.999983 13.1728373,296.999983 L225.997983,296.999983 C233.295974,296.999983 239.17082,292.039942 239.17082,285.878477 L239.17082,123.145388 C239.17082,123.145388 119.58541,2.84217094e-14 115.369423,2.84217094e-14 L13.1728576,2.84217094e-14 C5.87500907,-1.71479982e-05 0,4.96022995 0,11.1214886 Z" id="rect1171"></path>
                    <path d="M116.37005,0 L116,100.904964 C116,111.483663 123.258008,120 132.273377,120 L236,120 L116.37005,0 L116.37005,0 Z" id="rect1794"></path>
                </g>
                <path d="M47.803141,294.093878 C48.4999811,295.177551 48.9495553,296.095918 49.4216083,296.995918 C50.1184484,297.895918 50.5680227,298.630612 51.2873415,299.365306 C52.2089688,300.44898 53.3778619,301 54.7490634,301 C56.1427436,301 57.0643709,300.632653 57.761211,299.916327 C58.4580511,299.365306 58.9076254,298.465306 58.9076254,297.381633 C58.9076254,296.830612 58.9076254,295.930612 58.6828382,294.828571 C58.4355724,293.561224 58.2107852,292.844898 58.2107852,292.477551 C57.7387323,287.757143 57.5139451,283.753061 57.5139451,279.95102 C57.5139451,273.228571 58.4355724,267.057143 59.8292526,261.602041 C61.44772,256.165306 63.5382403,251.610204 66.0783349,247.62449 C68.8656954,243.620408 72.3274172,240.35102 76.4859792,237.44898 C80.6445412,234.546939 85.2751561,232.177551 90.1305582,230.359184 C94.9859603,228.540816 100.76299,227.089796 107.236859,226.006122 C113.710728,225.087755 120.409385,224.371429 127.13052,223.820408 C133.829177,223.453061 141.247152,223.269388 149.811542,223.269388 L167.704598,223.269388 L167.704598,249.057143 C167.704598,250.87551 168.401438,252.326531 170.019905,253.593878 C171.86316,254.861224 173.728893,255.595918 176.021722,255.595918 C178.112242,255.595918 180.180284,254.861224 181.82123,253.593878 L247.751296,201.834694 C249.369763,200.567347 250.291391,199.116327 250.291391,197.297959 C250.291391,195.479592 249.369763,194.028571 247.751296,192.761224 L181.82123,141.002041 C180.202763,139.734694 178.112242,139 176.044201,139 C173.728893,139 171.885639,139.734694 170.042384,141.002041 C168.423917,142.269388 167.727077,143.720408 167.727077,145.538776 L167.727077,171.326531 L149.811542,171.326531 C88.5120908,171.326531 50.8152886,184.955102 36.9234437,212.193878 C32.3153075,221.267347 30,232.526531 30,245.971429 C30,257.046939 35.5522422,272.291837 46.4094607,291.540816 C46.6567266,292.091837 47.1063009,292.826531 47.803141,294.093878 Z" id="Shape-Copy" fill="#000000" fill-rule="nonzero" transform="translate(140.145695, 220.000000) scale(-1, 1) translate(-140.145695, -220.000000) "></path>
            </g>
        </g>
    </defs>
    </svg>
<header>
    <h1>"""
        f"{path_top_dir.name}"
        """</h1>
                 </header>
                 <main>
                 <div class="listing">
                     <table aria-describedby="summary">
                         <thead>
                         <tr>
                             <th></th>
                             <th>Name</th>
                             <th>Size</th>
                             <th class="hideable">
                                 Modified
                             </th>
                             <th class="hideable"></th>
                         </tr>
                         </thead>
                         <tbody>
                         <tr class="clickable">
                             <td></td>
                             <td><a href=".."><svg width="1.5em" height="1em" version="1.1" viewBox="0 0 24 24"><use xlink:href="#go-up"></use></svg>
                 <span class="goup">..</span></a></td>
                             <td>&mdash;</td>
                             <td class="hideable">&mdash;</td>
                             <td class="hideable"></td>
                         </tr>
                 """
    )

    # sort dirs first
    sorted_entries = sorted(
        path_top_dir.glob(glob_patt), key=lambda p: (p.is_file(), p.name)
    )

    entry: Path
    for entry in sorted_entries:

        # don't include sitemap.html in the file listing
        if entry.name.lower() == opts.output_file.lower():
            continue

        if entry.is_dir() and opts.recursive:
            process_dir(entry, opts)

        # From Python 3.6, os.access() accepts path-like objects
        if (not entry.is_symlink()) and not os.access(str(entry), os.W_OK):
            print(
                f"*** WARNING *** entry {entry.absolute()} is not writable! SKIPPING!"
            )
            continue
        if opts.verbose:
            print(f"{entry.absolute()}")

        size_bytes = -1  ## is a folder
        size_pretty = "&mdash;"
        last_modified = "-"
        last_modified_human_readable = "-"
        last_modified_iso = ""
        try:
            if entry.is_file():
                size_bytes = entry.stat().st_size
                size_pretty = pretty_size(size_bytes)

            if entry.is_dir() or entry.is_file():
                last_modified = datetime.datetime.fromtimestamp(
                    entry.stat().st_mtime
                ).replace(microsecond=0)
                last_modified_iso = last_modified.isoformat()
                last_modified_human_readable = last_modified.strftime("%c")

        except Exception as e:
            print("ERROR accessing file name:", e, entry)
            continue

        entry_path = str(entry.name)

        if entry.is_dir() and not entry.is_symlink():
            entry_type = "folder"
            if os.name not in ("nt",):
                # append trailing slash to dirs, unless it's windows
                entry_path = os.path.join(entry.name, "")

        elif entry.is_dir() and entry.is_symlink():
            entry_type = "folder-shortcut"
            print("dir-symlink", entry.absolute())

        elif entry.is_file() and entry.is_symlink():
            entry_type = "file-shortcut"
            print("file-symlink", entry.absolute())

        else:
            entry_type = "file"

        index_file.write(
            f"""
        <tr class="file">
            <td></td>
            <td>
                <a href="{quote(entry_path)}">
                    <svg width="1.5em" height="1em" version="1.1" viewBox="0 0 265 323"><use xlink:href="#{entry_type}"></use></svg>
                    <span class="name">{entry.name}</span>
                </a>
            </td>
            <td data-order="{size_bytes}">{size_pretty}</td>
            <td class="hideable"><time datetime="{last_modified_iso}">{last_modified_human_readable}</time></td>
            <td class="hideable"></td>
        </tr>
"""
        )

    index_file.write(
        """
            </tbody>
        </table>
    </div>
</main>
</body>
</html>"""
    )
    if index_file:
        index_file.close()


# bytes pretty-printing
UNITS_MAPPING = [
    (1024 ** 5, " PB"),
    (1024 ** 4, " TB"),
    (1024 ** 3, " GB"),
    (1024 ** 2, " MB"),
    (1024 ** 1, " KB"),
    (1024 ** 0, (" byte", " bytes")),
]


def pretty_size(bytes, units=UNITS_MAPPING):
    """Human-readable file sizes.
    ripped from https://pypi.python.org/pypi/hurry.filesize/
    """
    for factor, suffix in units:
        if bytes >= factor:
            break
    amount = int(bytes / factor)

    if isinstance(suffix, tuple):
        singular, multiple = suffix
        if amount == 1:
            suffix = singular
        else:
            suffix = multiple
    return str(amount) + suffix


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="""DESCRIPTION:
    Generate directory index files (recursive is OFF by default).
    Start from current dir or from folder passed as first positional argument.
    Optionally filter by file types with --filter "*.py". """
    )

    parser.add_argument(
        "top_dir",
        nargs="?",
        action="store",
        help="top folder from which to start generating indexes, "
        "use current folder if not specified",
        default=os.getcwd(),
    )

    parser.add_argument(
        "--filter", "-f", help="only include files matching glob", required=False
    )

    parser.add_argument(
        "--output-file",
        "-o",
        metavar="filename",
        default=DEFAULT_OUTPUT_FILE,
        help=f'Custom output file, by default "{DEFAULT_OUTPUT_FILE}"',
    )

    parser.add_argument(
        "--recursive",
        "-r",
        action="store_true",
        help="recursively process nested dirs (FALSE by default)",
        required=False,
    )

    parser.add_argument(
        "--verbose",
        "-v",
        action="store_true",
        help="***WARNING: can take longer time with complex file tree structures on slow terminals***"
        " verbosely list every processed file",
        required=False,
    )

    config = parser.parse_args(sys.argv[1:])
    process_dir(config.top_dir, config)

```

---

# 44. Recursivley convert .ipynb to html

### Description:

> Notes:

###### code:

```sh

function RecurseDirs ()
{
    oldIFS=$IFS
    IFS=$'\n'
    for f in "$@"
    do

  # YOUR CODE HERE!

ipython nbconvert  *.ipynb --to html




        if [[ -d "${f}" ]]; then
            cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS
}
RecurseDirs "./"



```

---

# 45.

### Description:

> Notes:

###### code:

```sh


```

---

# 46.

### Description:

> Notes:

###### code:

```sh


```

---

# 47.

### Description:

> Notes:

###### code:

```sh


```

---

# 48.

### Description:

> Notes:

###### code:

```sh


```

---

# 49.

### Description:

> Notes:

###### code:

```sh


```

---

# 50.

### Description:

> Notes:

###### code:

```sh


```

---

# 51.

### Description:

> Notes:

###### code:

```sh


```

---

# 52.

### Description:

> Notes:

###### code:

```sh


```

---

# 53.

### Description:

> Notes:

###### code:

```sh


```

---

# 54.

### Description:

> Notes:

###### code:

```sh


```

---

# 55.

### Description:

> Notes:

###### code:

```sh


```

---

# 56.

### Description:

> Notes:

###### code:

```sh


```

---

# 57.

### Description:

> Notes:

###### code:

```sh


```

---

# 58.

### Description:

> Notes:

###### code:

```sh


```

---

# 59.

### Description:

> Notes:

###### code:

```sh


```

---

# 60.

### Description:

> Notes:

###### code:

```sh


```

---

# 61.

### Description:

> Notes:

###### code:

```sh


```

---

# 62.

### Description:

> Notes:

###### code:

```sh


```

---

# 63.

### Description:

> Notes:

###### code:

```sh


```

---

# 64.

### Description:

> Notes:

###### code:

```sh


```

---

# 65.

### Description:

> Notes:

###### code:

```sh


```

---

# 66.

### Description:

> Notes:

###### code:

```sh


```

---

# 67.

### Description:

> Notes:

###### code:

```sh


```

---

# 68.

### Description:

> Notes:

###### code:

```sh


```

---

# 69.

### Description:

> Notes:

###### code:

```sh


```

---

# 70.

### Description:

> Notes:

###### code:

```sh


```

---

# 71.

### Description:

> Notes:

###### code:

```sh


```

---

# 72.

### Description:

> Notes:

###### code:

```sh


```

---

# 73.

### Description:

> Notes:

###### code:

```sh


```

---

# 74.

### Description:

> Notes:

###### code:

```sh


```

---

# 75.

### Description:

> Notes:

###### code:

```sh


```

---

# 76.

### Description:

> Notes:

###### code:

```sh


```

---

# 77.

### Description:

> Notes:

###### code:

```sh


```

---

# 78.

### Description:

> Notes:

###### code:

```sh


```

---

# 79.

### Description:

> Notes:

###### code:

```sh


```

---

# 80.

### Description:

> Notes:

###### code:

```sh


```

---

# 81.

### Description:

> Notes:

###### code:

```sh


```

---

# 82.

### Description:

> Notes:

###### code:

```sh


```

---

# 83.

### Description:

> Notes:

###### code:

```sh


```

---

# 84.

### Description:

> Notes:

###### code:

```sh


```

---

# 85.

### Description:

> Notes:

###### code:

```sh


```

---

# 86.

### Description:

> Notes:

###### code:

```sh


```

---

# 87.

### Description:

> Notes:

###### code:

```sh


```

---

# 88.

### Description:

> Notes:

###### code:

```sh


```

---

# 89.

### Description:

> Notes:

###### code:

```sh


```

---

# 90.

### Description:

> Notes:

###### code:

```sh


```

---

# 91. Unzip PowerShell

### Description:

> Notes:

###### code:

```ps1

PARAM (
    [string] $ZipFilesPath = "./",
    [string] $UnzipPath = "./RESULT"
)

$Shell = New-Object -com Shell.Application
$Location = $Shell.NameSpace($UnzipPath)

$ZipFiles = Get-Childitem $ZipFilesPath -Recurse -Include *.ZIP

$progress = 1
foreach ($ZipFile in $ZipFiles) {
    Write-Progress -Activity "Unzipping to $($UnzipPath)" -PercentComplete (($progress / ($ZipFiles.Count + 1)) * 100) -CurrentOperation $ZipFile.FullName -Status "File $($Progress) of $($ZipFiles.Count)"
    $ZipFolder = $Shell.NameSpace($ZipFile.fullname)


    $Location.Copyhere($ZipFolder.items(), 1040) # 1040 - No msgboxes to the user - http://msdn.microsoft.com/en-us/library/bb787866%28VS.85%29.aspx
    $progress++
}


```

---

# 92. return to bash from zsh

### Description:

> Notes:

###### code:

```sh
 sudo apt --purge remove zsh

```

---

# 93. Symbolic Link

### Description: to working directory

> Notes:

###### code:

```sh

ln -s "$(pwd)" ~/NameOfLink

ln -s "$(pwd)" ~/Downloads

```

---

# 94. auto generate readme

### Description: rename existing readme to blueprint.md

> Notes:

###### code:

```sh

npx @appnest/readme generate


```

---

# 95. Log into postgres:

### Description:

> Notes:

###### code:

```sh
sudo -u postgres psql
```

---

# 96. URL To Subscribe To YouTube Channel

### Description:

> Notes:

###### code:

```txt

https://www.youtube.com/channel/UC1HDa0wWnIKUf-b4yY9JecQ?sub_confirmation=1

```

---

# 97. Embed Repl.it In Medium Post:

###### code:

```txt

https://repl.it/@bgoonz/Data-Structures-Algos-Codebase?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com


https://repl.it/@bgoonz/node-db1-project?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com

https://repl.it/@bgoonz/interview-prac?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com


https://repl.it/@bgoonz/Database-Prac?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com


```

---

# 98.

### Description:

> Notes:

###### code:

```sh


find . -name *right.html  -type f -exec sed -i 's/target="_parent"//g' {} +


find . -name *right.html  -type f -exec sed -i 's/target="_parent"//g' {} +

```

---

# 99. Cheat Sheet

### Description:

> Notes:

###### code:

```sh
#!/bin/bash
##############################################################################
# SHORTCUTS and HISTORY
##############################################################################

CTRL+A  # move to beginning of line
CTRL+B  # moves backward one character
CTRL+C  # halts the current command
CTRL+D  # deletes one character backward or logs out of current session, similar to exit
CTRL+E  # moves to end of line
CTRL+F  # moves forward one character
CTRL+G  # aborts the current editing command and ring the terminal bell
CTRL+H  # deletes one character under cursor (same as DELETE)
CTRL+J  # same as RETURN
CTRL+K  # deletes (kill) forward to end of line
CTRL+L  # clears screen and redisplay the line
CTRL+M  # same as RETURN
CTRL+N  # next line in command history
CTRL+O  # same as RETURN, then displays next line in history file
CTRL+P  # previous line in command history
CTRL+Q  # resumes suspended shell output
CTRL+R  # searches backward
CTRL+S  # searches forward or suspends shell output
CTRL+T  # transposes two characters
CTRL+U  # kills backward from point to the beginning of line
CTRL+V  # makes the next character typed verbatim
CTRL+W  # kills the word behind the cursor
CTRL+X  # lists the possible filename completions of the current word
CTRL+Y  # retrieves (yank) last item killed
CTRL+Z  # stops the current command, resume with fg in the foreground or bg in the background

ALT+B   # moves backward one word
ALT+D   # deletes next word
ALT+F   # moves forward one word
ALT+H   # deletes one character backward
ALT+T   # transposes two words
ALT+.   # pastes last word from the last command. Pressing it repeatedly traverses through command history.
ALT+U   # capitalizes every character from the current cursor position to the end of the word
ALT+L   # uncapitalizes every character from the current cursor position to the end of the word
ALT+C   # capitalizes the letter under the cursor. The cursor then moves to the end of the word.
ALT+R   # reverts any changes to a command you’ve pulled from your history if you’ve edited it.
ALT+?   # list possible completions to what is typed
ALT+^   # expand line to most recent match from history

CTRL+X then (   # start recording a keyboard macro
CTRL+X then )   # finish recording keyboard macro
CTRL+X then E   # recall last recorded keyboard macro
CTRL+X then CTRL+E   # invoke text editor (specified by $EDITOR) on current command line then execute resultes as shell commands

BACKSPACE  # deletes one character backward
DELETE     # deletes one character under cursor

history   # shows command line history
!!        # repeats the last command
!<n>      # refers to command line 'n'
!<string> # refers to command starting with 'string'

exit      # logs out of current session


##############################################################################
# BASH BASICS
##############################################################################

env                 # displays all environment variables

echo $SHELL         # displays the shell you're using
echo $BASH_VERSION  # displays bash version

bash                # if you want to use bash (type exit to go back to your previously opened shell)
whereis bash        # locates the binary, source and manual-page for a command
which bash          # finds out which program is executed as 'bash' (default: /bin/bash, can change across environments)

clear               # clears content on window (hide displayed lines)


##############################################################################
# FILE COMMANDS
##############################################################################


ls                            # lists your files in current directory, ls <dir> to print files in a specific directory
ls -l                         # lists your files in 'long format', which contains the exact size of the file, who owns the file and who has the right to look at it, and when it was last modified
ls -a                         # lists all files in 'long format', including hidden files (name beginning with '.')
ln -s <filename> <link>       # creates symbolic link to file
readlink <filename>           # shows where a symbolic links points to
tree                          # show directories and subdirectories in easilly readable file tree
mc                            # terminal file explorer (alternative to ncdu)
touch <filename>              # creates or updates (edit) your file
mktemp -t <filename>            # make a temp file in /tmp/ which is deleted at next boot (-d to make directory)
cat <filename>                # prints file raw content (will not be interpreted)
any_command > <filename>      # '>' is used to perform redirections, it will set any_command's stdout to file instead of "real stdout" (generally /dev/stdout)
more <filename>               # shows the first part of a file (move with space and type q to quit)
head <filename>               # outputs the first lines of file (default: 10 lines)
tail <filename>               # outputs the last lines of file (useful with -f option) (default: 10 lines)
vim <filename>                # opens a file in VIM (VI iMproved) text editor, will create it if it doesn't exist
mv <filename1> <dest>         # moves a file to destination, behavior will change based on 'dest' type (dir: file is placed into dir; file: file will replace dest (tip: useful for renaming))
cp <filename1> <dest>         # copies a file
rm <filename>                 # removes a file
find . -name <name> <type>    # searches for a file or a directory in the current directory and all its sub-directories by its name
diff <filename1> <filename2>  # compares files, and shows where they differ
wc <filename>                 # tells you how many lines, words and characters there are in a file. Use -lwc (lines, word, character) to ouput only 1 of those informations
sort <filename>               # sorts the contents of a text file line by line in alphabetical order, use -n for numeric sort and -r for reversing order.
sort -t -k <filename>         # sorts the contents on specific sort key field starting from 1, using the field separator t.
rev                           # reverse string characters (hello becomes olleh)
chmod -options <filename>     # lets you change the read, write, and execute permissions on your files (more infos: SUID, GUID)
gzip <filename>               # compresses files using gzip algorithm
gunzip <filename>             # uncompresses files compressed by gzip
gzcat <filename>              # lets you look at gzipped file without actually having to gunzip it
lpr <filename>                # prints the file
lpq                           # checks out the printer queue
lprm <jobnumber>              # removes something from the printer queue
genscript                     # converts plain text files into postscript for printing and gives you some options for formatting
dvips <filename>              # prints .dvi files (i.e. files produced by LaTeX)
grep <pattern> <filenames>    # looks for the string in the files
grep -r <pattern> <dir>       # search recursively for pattern in directory
head -n file_name | tail +n   # Print nth line from file.
head -y lines.txt | tail +x   # want to display all the lines from x to y. This includes the xth and yth lines.


##############################################################################
# DIRECTORY COMMANDS
##############################################################################


mkdir <dirname>               # makes a new directory
rmdir <dirname>               # remove an empty directory
rmdir -rf <dirname>           # remove a non-empty directory
mv <dir1> <dir2>              # rename a directory from <dir1> to <dir2>
cd                            # changes to home
cd ..                         # changes to the parent directory
cd <dirname>                  # changes directory
cp -r <dir1> <dir2>           # copy <dir1> into <dir2> including sub-directories
pwd                           # tells you where you currently are
cd ~                          # changes to home.
cd -                          # changes to previous working directory

##############################################################################
# SSH, SYSTEM INFO & NETWORK COMMANDS
##############################################################################


ssh user@host            # connects to host as user
ssh -p <port> user@host  # connects to host on specified port as user
ssh-copy-id user@host    # adds your ssh key to host for user to enable a keyed or passwordless login

whoami                   # returns your username
passwd                   # lets you change your password
quota -v                 # shows what your disk quota is
date                     # shows the current date and time
cal                      # shows the month's calendar
uptime                   # shows current uptime
w                        # displays whois online
finger <user>            # displays information about user
uname -a                 # shows kernel information
man <command>            # shows the manual for specified command
df                       # shows disk usage
du <filename>            # shows the disk usage of the files and directories in filename (du -s give only a total)
last <yourUsername>      # lists your last logins
ps -u yourusername       # lists your processes
kill <PID>               # kills the processes with the ID you gave
killall <processname>    # kill all processes with the name
top                      # displays your currently active processes
lsof                     # lists open files
bg                       # lists stopped or background jobs ; resume a stopped job in the background
fg                       # brings the most recent job in the foreground
fg <job>                 # brings job to the foreground

ping <host>              # pings host and outputs results
whois <domain>           # gets whois information for domain
dig <domain>             # gets DNS information for domain
dig -x <host>            # reverses lookup host
wget <file>              # downloads file

time <command>             # report time consumed by command execution


##############################################################################
# VARIABLES
##############################################################################


varname=value                # defines a variable
varname=value command        # defines a variable to be in the environment of a particular subprocess
echo $varname                # checks a variable's value
echo $$                      # prints process ID of the current shell
echo $!                      # prints process ID of the most recently invoked background job
echo $?                      # displays the exit status of the last command
read <varname>               # reads a string from the input and assigns it to a variable
read -p "prompt" <varname>   # same as above but outputs a prompt to ask user for value
column -t <filename>         # display info in pretty columns (often used with pipe)
let <varname> = <equation>   # performs mathematical calculation using operators like +, -, *, /, %
export VARNAME=value         # defines an environment variable (will be available in subprocesses)

array[0]=valA                # how to define an array
array[1]=valB
array[2]=valC
array=([2]=valC [0]=valA [1]=valB)  # another way
array=(valA valB valC)              # and another

${array[i]}                  # displays array's value for this index. If no index is supplied, array element 0 is assumed
${#array[i]}                 # to find out the length of any element in the array
${#array[@]}                 # to find out how many values there are in the array

declare -a                   # the variables are treated as arrays
declare -f                   # uses function names only
declare -F                   # displays function names without definitions
declare -i                   # the variables are treated as integers
declare -r                   # makes the variables read-only
declare -x                   # marks the variables for export via the environment

${varname:-word}             # if varname exists and isn't null, return its value; otherwise return word
${varname:word}              # if varname exists and isn't null, return its value; otherwise return word
${varname:=word}             # if varname exists and isn't null, return its value; otherwise set it word and then return its value
${varname:?message}          # if varname exists and isn't null, return its value; otherwise print varname, followed by message and abort the current command or script
${varname:+word}             # if varname exists and isn't null, return word; otherwise return null
${varname:offset:length}     # performs substring expansion. It returns the substring of $varname starting at offset and up to length characters

${variable#pattern}          # if the pattern matches the beginning of the variable's value, delete the shortest part that matches and return the rest
${variable##pattern}         # if the pattern matches the beginning of the variable's value, delete the longest part that matches and return the rest
${variable%pattern}          # if the pattern matches the end of the variable's value, delete the shortest part that matches and return the rest
${variable%%pattern}         # if the pattern matches the end of the variable's value, delete the longest part that matches and return the rest
${variable/pattern/string}   # the longest match to pattern in variable is replaced by string. Only the first match is replaced
${variable//pattern/string}  # the longest match to pattern in variable is replaced by string. All matches are replaced

${#varname}                  # returns the length of the value of the variable as a character string

*(patternlist)               # matches zero or more occurrences of the given patterns
+(patternlist)               # matches one or more occurrences of the given patterns
?(patternlist)               # matches zero or one occurrence of the given patterns
@(patternlist)               # matches exactly one of the given patterns
!(patternlist)               # matches anything except one of the given patterns

$(UNIX command)              # command substitution: runs the command and returns standard output


##############################################################################
# FUNCTIONS
##############################################################################


# The function refers to passed arguments by position (as if they were positional parameters), that is, $1, $2, and so forth.
# $@ is equal to "$1" "$2"... "$N", where N is the number of positional parameters. $# holds the number of positional parameters.


function functname() {
  shell commands
}

unset -f functname  # deletes a function definition
declare -f          # displays all defined functions in your login session


##############################################################################
# FLOW CONTROLS
##############################################################################


statement1 && statement2  # and operator
statement1 || statement2  # or operator

-a                        # and operator inside a test conditional expression
-o                        # or operator inside a test conditional expression

# STRINGS

str1 == str2               # str1 matches str2
str1 != str2               # str1 does not match str2
str1 < str2                # str1 is less than str2 (alphabetically)
str1 > str2                # str1 is greater than str2 (alphabetically)
str1 \> str2               # str1 is sorted after str2
str1 \< str2               # str1 is sorted before str2
-n str1                    # str1 is not null (has length greater than 0)
-z str1                    # str1 is null (has length 0)

# FILES

-a file                   # file exists or its compilation is successful
-d file                   # file exists and is a directory
-e file                   # file exists; same -a
-f file                   # file exists and is a regular file (i.e., not a directory or other special type of file)
-r file                   # you have read permission
-s file                   # file exists and is not empty
-w file                   # your have write permission
-x file                   # you have execute permission on file, or directory search permission if it is a directory
-N file                   # file was modified since it was last read
-O file                   # you own file
-G file                   # file's group ID matches yours (or one of yours, if you are in multiple groups)
file1 -nt file2           # file1 is newer than file2
file1 -ot file2           # file1 is older than file2

# NUMBERS

-lt                       # less than
-le                       # less than or equal
-eq                       # equal
-ge                       # greater than or equal
-gt                       # greater than
-ne                       # not equal

if condition
then
  statements
[elif condition
  then statements...]
[else
  statements]
fi

for x in {1..10}
do
  statements
done

for name [in list]
do
  statements that can use $name
done

for (( initialisation ; ending condition ; update ))
do
  statements...
done

case expression in
  pattern1 )
    statements ;;
  pattern2 )
    statements ;;
esac

select name [in list]
do
  statements that can use $name
done

while condition; do
  statements
done

until condition; do
  statements
done

##############################################################################
# COMMAND-LINE PROCESSING CYCLE
##############################################################################


# The default order for command lookup is functions, followed by built-ins, with scripts and executables last.
# There are three built-ins that you can use to override this order: `command`, `builtin` and `enable`.

command  # removes alias and function lookup. Only built-ins and commands found in the search path are executed
builtin  # looks up only built-in commands, ignoring functions and commands found in PATH
enable   # enables and disables shell built-ins

eval     # takes arguments and run them through the command-line processing steps all over again


##############################################################################
# INPUT/OUTPUT REDIRECTORS
##############################################################################


cmd1|cmd2  # pipe; takes standard output of cmd1 as standard input to cmd2
< file     # takes standard input from file
> file     # directs standard output to file
>> file    # directs standard output to file; append to file if it already exists
>|file     # forces standard output to file even if noclobber is set
n>|file    # forces output to file from file descriptor n even if noclobber is set
<> file    # uses file as both standard input and standard output
n<>file    # uses file as both input and output for file descriptor n
n>file     # directs file descriptor n to file
n<file     # takes file descriptor n from file
n>>file    # directs file description n to file; append to file if it already exists
n>&        # duplicates standard output to file descriptor n
n<&        # duplicates standard input from file descriptor n
n>&m       # file descriptor n is made to be a copy of the output file descriptor
n<&m       # file descriptor n is made to be a copy of the input file descriptor
&>file     # directs standard output and standard error to file
<&-        # closes the standard input
>&-        # closes the standard output
n>&-       # closes the ouput from file descriptor n
n<&-       # closes the input from file descripor n

|tee <file># output command to both terminal and a file (-a to append to file)


##############################################################################
# PROCESS HANDLING
##############################################################################


# To suspend a job, type CTRL+Z while it is running. You can also suspend a job with CTRL+Y.
# This is slightly different from CTRL+Z in that the process is only stopped when it attempts to read input from terminal.
# Of course, to interrupt a job, type CTRL+C.

myCommand &  # runs job in the background and prompts back the shell

jobs         # lists all jobs (use with -l to see associated PID)

fg           # brings a background job into the foreground
fg %+        # brings most recently invoked background job
fg %-        # brings second most recently invoked background job
fg %N        # brings job number N
fg %string   # brings job whose command begins with string
fg %?string  # brings job whose command contains string

kill -l               # returns a list of all signals on the system, by name and number
kill PID              # terminates process with specified PID
kill -s SIGKILL 4500  # sends a signal to force or terminate the process
kill -15 913          # Ending PID 913 process with signal 15 (TERM)
kill %1               # Where %1 is the number of job as read from 'jobs' command.

ps           # prints a line of information about the current running login shell and any processes running under it
ps -a        # selects all processes with a tty except session leaders

trap cmd sig1 sig2  # executes a command when a signal is received by the script
trap "" sig1 sig2   # ignores that signals
trap - sig1 sig2    # resets the action taken when the signal is received to the default

disown <PID|JID>    # removes the process from the list of jobs

wait                # waits until all background jobs have finished
sleep <number>      # wait # of seconds before continuing

pv                  # display progress bar for data handling commands. often used with pipe like |pv
yes                 # give yes response everytime an input is requested from script/process


##############################################################################
# TIPS & TRICKS
##############################################################################


# set an alias
cd; nano .bash_profile
> alias gentlenode='ssh admin@gentlenode.com -p 3404'  # add your alias in .bash_profile

# to quickly go to a specific directory
cd; nano .bashrc
> shopt -s cdable_vars
> export websites="/Users/mac/Documents/websites"

source .bashrc
cd $websites


##############################################################################
# DEBUGGING SHELL PROGRAMS
##############################################################################


bash -n scriptname  # don't run commands; check for syntax errors only
set -o noexec       # alternative (set option in script)

bash -v scriptname  # echo commands before running them
set -o verbose      # alternative (set option in script)

bash -x scriptname  # echo commands after command-line processing
set -o xtrace       # alternative (set option in script)

trap 'echo $varname' EXIT  # useful when you want to print out the values of variables at the point that your script exits

function errtrap {
  es=$?
  echo "ERROR line $1: Command exited with status $es."
}

trap 'errtrap $LINENO' ERR  # is run whenever a command in the surrounding script or function exits with non-zero status

function dbgtrap {
  echo "badvar is $badvar"
}

trap dbgtrap DEBUG  # causes the trap code to be executed before every statement in a function or script
# ...section of code in which the problem occurs...
trap - DEBUG  # turn off the DEBUG trap

function returntrap {
  echo "A return occurred"
}

trap returntrap RETURN  # is executed each time a shell function or a script executed with the . or source commands finishes executing

##############################################################################
# COLORS AND BACKGROUNDS
##############################################################################
# note: \e or \x1B also work instead of \033
# Reset
Color_Off='\033[0m' # Text Reset

# Regular Colors
Black='\033[0;30m'  # Black
Red='\033[0;31m'    # Red
Green='\033[0;32m'  # Green
Yellow='\033[0;33m' # Yellow
Blue='\033[0;34m'   # Blue
Purple='\033[0;35m' # Purple
Cyan='\033[0;36m'   # Cyan
White='\033[0;97m'  # White

# Additional colors
LGrey='\033[0;37m'  # Ligth Gray
DGrey='\033[0;90m'  # Dark Gray
LRed='\033[0;91m'   # Ligth Red
LGreen='\033[0;92m' # Ligth Green
LYellow='\033[0;93m'# Ligth Yellow
LBlue='\033[0;94m'  # Ligth Blue
LPurple='\033[0;95m'# Light Purple
LCyan='\033[0;96m'  # Ligth Cyan


# Bold
BBlack='\033[1;30m' # Black
BRed='\033[1;31m'   # Red
BGreen='\033[1;32m' # Green
BYellow='\033[1;33m'# Yellow
BBlue='\033[1;34m'  # Blue
BPurple='\033[1;35m'# Purple
BCyan='\033[1;36m'  # Cyan
BWhite='\033[1;37m' # White

# Underline
UBlack='\033[4;30m' # Black
URed='\033[4;31m'   # Red
UGreen='\033[4;32m' # Green
UYellow='\033[4;33m'# Yellow
UBlue='\033[4;34m'  # Blue
UPurple='\033[4;35m'# Purple
UCyan='\033[4;36m'  # Cyan
UWhite='\033[4;37m' # White

# Background
On_Black='\033[40m' # Black
On_Red='\033[41m'   # Red
On_Green='\033[42m' # Green
On_Yellow='\033[43m'# Yellow
On_Blue='\033[44m'  # Blue
On_Purple='\033[45m'# Purple
On_Cyan='\033[46m'  # Cyan
On_White='\033[47m' # White

# Example of usage
echo -e "${Green}This is GREEN text${Color_Off} and normal text"
echo -e "${Red}${On_White}This is Red test on White background${Color_Off}"
# option -e is mandatory, it enable interpretation of backslash escapes
printf "${Red} This is red \n"


```

---
