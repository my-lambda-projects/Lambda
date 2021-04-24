# 6 Git mistakes you will make — and how to fix them

> Shot yourself in the foot with the world's most popular version control system? Here's how to fix it

### Shot yourself in the foot with the world's most popular version control system? Here's how to fix it

Senior Writer, InfoWorld | Jan 15, 2020 3:00 am PST 

    ![6 Git mistakes you will make — and how to fix them](https://images.techhive.com/images/article/2017/04/5_fumbling_dumb_mistake-100719968-large.jpg)

Thinkstock

A big reason developers use a source control system like Git is to avoid disasters. If you do something as simple as mistakenly delete a file, or you discover that the changes you’ve made to a dozen files were all ill-advised, you can undo what you’ve done with little hassle.

Some Git mistakes are more intimidating and difficult to reverse, even for experienced Git users. But with a little care — and provided you don’t panic — you can roll back from some of the worst Git disasters known to programmers.

Here is a list of several of the bigger Git boo-boos, along with tips for backing out of them _and_ preventing some of them. The further you go down the list, the bigger the disasters get.

Table of Contents

Show More

Git mistake #1: You forgot to add changes to the last commit
------------------------------------------------------------

This is one of the easiest Git blunders to recover from. Let’s say you committed some work to a local branch, then realized you didn’t stage a number of needed files. Or you forgot to add certain details in the commit message.

No fear. First, if you have new changes to be staged, do that. Then type `git commit --amend` to edit the commit message. Once you’re done, hit Esc, then type `:xq` to save and exit from the editor. (This last step is the one that often flusters Git newcomers, who don’t always realize that the built-in Git editor is very much its own animal.)

If you are just changing files, and you don’t need to amend the commit message, you can use `git commit --amend --no-edit` to add the files and skip the message editing process.

One way to avoid this kind of mistake is to tweak the way you make commits in Git. If you’re working on something where you’re constantly making small commits to track incremental revisions, do them in a throwaway branch. As you do this, document the major changes you’re making somewhere — don’t wait until you’re faced with the `git commit` command line to write it all down. Then, when you reach a major milestone, use `git merge --squash` from your throwaway branch to save the results to the work-in-progress branch as a single, clean commit, and use the notes you’ve taken for the commit message.

Git mistake #2: You committed changes to (local) master
-------------------------------------------------------

Another common goof: You’ve dutifully committed a bunch of changes ... but to the master branch of your repo by mistake. What you _really_ wanted to do was commit them to a _new_ branch, or to that `dev` branch you have specifically for breaking changes.

All is not lost. This mistake can be fixed in three commands:

git branch new\-branch  
git reset HEAD~ \--hard  
git checkout new\-branch

The first command creates the new branch we want to work with. The second command resets the main branch to just before the last commit, but leaves the changes you just made in the _new_ branch. Finally, we switch to the new branch where your changes await you.

If you’ve made multiple commits, use `git reset HEAD~<n> --hard`, where `<n>` is the number of commits back you want to go. Or you can use `git reset <nnnn>`, where `<nnnn>` is the hash ID of the target commit if you have that handy.

To avoid this mistake, get into the habit of making new branches and switching to them, even if they’re just going to be discarded, whenever you begin _any_ session with your code.

Git mistake #3: You trashed a file or directory
-----------------------------------------------

Another common disaster is mistakenly trashing the contents of a file ... and only finding out about it many commits to the branch _after_ the fact. Fortunately there is an easy fix.

First, use `git log` or your IDE’s built-in Git tooling to find the hash ID for a commit from before the file was modified. Next, use `git checkout hash_id -- /path/to/file` to check out _only_ that file from the commit in question. Note that the path should be relative to the root of the project. This will place the earlier version of the file in your project’s staging area.

If you simply want to go back _n_ commits, you don’t need the hash ID. You can just issue the command `git checkout HEAD~<n> -- /path/to/file`, where `<n>` is the number of commits back you want to go.

If you want to check out an entire _directory_ of files, then use Git’s wildcard format for file paths. For example, entering `git checkout HEAD~1 -- ./src/**` will take you back one commit and recover everything in the `/src` directory from the root of your project.

Git mistake #4: You accidentally deleted a branch
-------------------------------------------------

Here’s a scenario we all dread: accidentally deleting an entire branch from our repository. This one can be either very easy to recover from or a little more tricky, depending on the circumstances.

First, use `git reflog` to find the last commit made to the branch. Then use the hash ID to create a new branch:

`git checkout -b restored-branch <hash_id>`

Note that this will unfry your bacon only if the branch in question was already merged. If you force-deleted an _unmerged_ branch, you have one more way to find it, provided you haven’t run `git gc` on the repository:

`git fsck --full --no-reflogs --unreachable --lost-found`

This will dump a list of all the commit hashes for objects that are no longer reachable, including deleted branches. Look from the bottom of the list up for an “unreachable commit” entry, and try restoring that hash ID into a new branch to see if it’s the one you trashed. If it isn’t, work your way up the list to the next one, and see what you can recover.

As a general rule, never force-delete a branch by default, as you could easily end up laying waste to an unmerged branch that still has something valuable in it. If you’re habitually force-deleting branches, that’s a sign your work habits with branches need to be less messy.

Git mistake #5: You clobbered the remote branch with `git push`
---------------------------------------------------------------

Once I was working on a local copy of a GitHub repository, and mistakenly pushed my master branch to the remote copy with the `--force` option. I ended up with a public copy of a repo that wasn’t in a usable state at the time. Big oops.

If you’ve made a mistake like this, and your repo was synchronized with the remote repo recently enough, you can use your own copy of the remote repo branch to fix it. Switch to the branch you need to resynchronize, assuming you’re not there already, and issue this command:

`git reset --hard <remote_repo>/<branch>@{1}`

This will reset your copy of `<branch>` to the last synchronized version of `<remote_repo>`. In my case the branch was `master` and the remote repo was `origin`, so I could have used `git reset --hard origin/master@{1}`.

Then use `git push -f <remote_repo> <branch>` to restore the remote repository to its earlier state.

One way to prevent this from happening again is to disallow force-pushing. You can configure this on the remote Git repo with this command:

`git config --system receive.denyNonFastForwards true`

There may come a time when you need to do a force-push, but it’s probably best to toggle this on when you need it and off when you don’t.

Git mistake #6: You committed private information to a public repo
------------------------------------------------------------------

This may be the worst and most difficult Git problem to deal with. You mistakenly committed sensitive data to a public repo, and you want to surgically excise the files from the repo. You need to make sure the sensitive data can’t be found even by going back to an earlier commit, but you need to do that _without touching anything else._

This is doubly hard if the file in question was committed, oh, six weeks ago, and a truckload of other important work has been committed in the meantime. You can’t just roll back to before the file was added; you’ll wreck everything else in the process.

The good news: A few intrepid Git mavens created a tool, the [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/), specifically for the purpose of removing bad data from Git repos. BFG Repo-Cleaner allows you to quickly perform common tasks on a repo like remove all files matching a particular wildcard or containing certain texts. You can even pass in a file that lists all of the unwanted texts.

BFG Repo-Cleaner is essentially automation for a multi-step process using `git filter-branch`. If you would rather do things by hand, GitHub has [a detailed walkthrough](https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository) of the process. But the BFG tool covers the vast majority of common use cases, many of which are baked into the tool’s command line options. Plus, the process is long and complex, and it’s all too easy to shoot yourself in the foot somewhere along the way if you’re doing it by hand.

Note that if you clean data from a local branch that has to be synchronized elsewhere, you won’t be able to sync except by way of a force-push to the remote branches. The entire commit tree has to be rewritten, so you’re in essence writing an entirely new history to remote. You will also need to make sure everyone else pulls a fresh copy of the rewritten repo after your changes, because their repos will no longer be valid either.

Serdar Yegulalp is a senior writer at InfoWorld, focused on machine learning, containerization, devops, the Python ecosystem, and periodic reviews.

Copyright © 2020 IDG Communications, Inc.


[Source](https://www.infoworld.com/article/3512975/6-git-mistakes-you-will-make-and-how-to-fix-them.html)