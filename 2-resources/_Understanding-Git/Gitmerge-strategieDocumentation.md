# Git - merge-strategies Documentation

> The merge mechanism (git merge and git pull commands) allows the
backend merge strategies to be chosen with -s option.  Some strategies
can also take their own options, which can be passed by giving -X<option>
arguments to git merge and/or git pull.

The merge mechanism (`git merge` and `git pull` commands) allows the backend _merge strategies_ to be chosen with `-s` option. Some strategies can also take their own options, which can be passed by giving `-X<option>` arguments to `git merge` and/or `git pull`.

[](#Documentation/merge-strategies.txt-resolve)resolve

This can only resolve two heads (i.e. the current branch and another branch you pulled from) using a 3-way merge algorithm. It tries to carefully detect criss-cross merge ambiguities and is considered generally safe and fast.

[](#Documentation/merge-strategies.txt-recursive)recursive

This can only resolve two heads using a 3-way merge algorithm. When there is more than one common ancestor that can be used for 3-way merge, it creates a merged tree of the common ancestors and uses that as the reference tree for the 3-way merge. This has been reported to result in fewer merge conflicts without causing mismerges by tests done on actual merge commits taken from Linux 2.6 kernel development history. Additionally this can detect and handle merges involving renames, but currently cannot make use of detected copies. This is the default merge strategy when pulling or merging one branch.

The _recursive_ strategy can take the following options:

[](#Documentation/merge-strategies.txt-ours)ours

This option forces conflicting hunks to be auto-resolved cleanly by favoring _our_ version. Changes from the other tree that do not conflict with our side are reflected in the merge result. For a binary file, the entire contents are taken from our side.

This should not be confused with the _ours_ merge strategy, which does not even look at what the other tree contains at all. It discards everything the other tree did, declaring _our_ history contains all that happened in it.

[](#Documentation/merge-strategies.txt-theirs)theirs

This is the opposite of _ours_; note that, unlike _ours_, there is no _theirs_ merge strategy to confuse this merge option with.

[](#Documentation/merge-strategies.txt-patience)patience

With this option, _merge-recursive_ spends a little extra time to avoid mismerges that sometimes occur due to unimportant matching lines (e.g., braces from distinct functions). Use this when the branches to be merged have diverged wildly. See also [git-diff\[1\]](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/git-diff) `--patience`.

[](#Documentation/merge-strategies.txt-diff-algorithmpatienceminimalhistogrammyers)diff-algorithm=\[patience|minimal|histogram|myers\]

Tells _merge-recursive_ to use a different diff algorithm, which can help avoid mismerges that occur due to unimportant matching lines (such as braces from distinct functions). See also [git-diff\[1\]](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/git-diff) `--diff-algorithm`.

[](#Documentation/merge-strategies.txt-ignore-space-change)ignore-space-change

[](#Documentation/merge-strategies.txt-ignore-all-space)ignore-all-space

[](#Documentation/merge-strategies.txt-ignore-space-at-eol)ignore-space-at-eol

[](#Documentation/merge-strategies.txt-ignore-cr-at-eol)ignore-cr-at-eol

Treats lines with the indicated type of whitespace change as unchanged for the sake of a three-way merge. Whitespace changes mixed with other changes to a line are not ignored. See also [git-diff\[1\]](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/git-diff) `-b`, `-w`, `--ignore-space-at-eol`, and `--ignore-cr-at-eol`.

*   If _their_ version only introduces whitespace changes to a line, _our_ version is used;
    
*   If _our_ version introduces whitespace changes but _their_ version includes a substantial change, _their_ version is used;
    
*   Otherwise, the merge proceeds in the usual way.
    

[](#Documentation/merge-strategies.txt-renormalize)renormalize

This runs a virtual check-out and check-in of all three stages of a file when resolving a three-way merge. This option is meant to be used when merging branches with different clean filters or end-of-line normalization rules. See "Merging branches with differing checkin/checkout attributes" in [gitattributes\[5\]](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/gitattributes) for details.

[](#Documentation/merge-strategies.txt-no-renormalize)no-renormalize

Disables the `renormalize` option. This overrides the `merge.renormalize` configuration variable.

[](#Documentation/merge-strategies.txt-no-renames)no-renames

Turn off rename detection. This overrides the `merge.renames` configuration variable. See also [git-diff\[1\]](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/git-diff) `--no-renames`.

[](#Documentation/merge-strategies.txt-find-renamesltngt)find-renames\[=<n>\]

Turn on rename detection, optionally setting the similarity threshold. This is the default. This overrides the _merge.renames_ configuration variable. See also [git-diff\[1\]](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/git-diff) `--find-renames`.

[](#Documentation/merge-strategies.txt-rename-thresholdltngt)rename-threshold=<n>

Deprecated synonym for `find-renames=<n>`.

[](#Documentation/merge-strategies.txt-subtreeltpathgt)subtree\[=<path>\]

This option is a more advanced form of _subtree_ strategy, where the strategy makes a guess on how two trees must be shifted to match with each other when merging. Instead, the specified path is prefixed (or stripped from the beginning) to make the shape of two trees to match.

[](#Documentation/merge-strategies.txt-octopus)octopus

This resolves cases with more than two heads, but refuses to do a complex merge that needs manual resolution. It is primarily meant to be used for bundling topic branch heads together. This is the default merge strategy when pulling or merging more than one branch.

[](#Documentation/merge-strategies.txt-ours)ours

This resolves any number of heads, but the resulting tree of the merge is always that of the current branch head, effectively ignoring all changes from all other branches. It is meant to be used to supersede old development history of side branches. Note that this is different from the -Xours option to the _recursive_ merge strategy.

[](#Documentation/merge-strategies.txt-subtree)subtree

This is a modified recursive strategy. When merging trees A and B, if B corresponds to a subtree of A, B is first adjusted to match the tree structure of A, instead of reading the trees at the same level. This adjustment is also done to the common ancestor tree.

With the strategies that use 3-way merge (including the default, _recursive_), if a change is made on both branches, but later reverted on one of the branches, that change will be present in the merged result; some people find this behavior confusing. It occurs because only the heads and the merge base are considered when performing a merge, not the individual commits. The merge algorithm therefore considers the reverted change as no change at all, and substitutes the changed version instead.


[Source](https://git-scm.com/docs/merge-strategies)