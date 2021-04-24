# VoiceOver and list-style-type: none | Writing | gerardkcohen.me

> With that bit of additional CSS, we are able to return the list
              semantics for VoiceOver users without needing to touch the markup.

Writing

September 26, 2017

**Update 2019:** This article made it's rounds again via Twitter, thanks to a [Twitter thread](https://twitter.com/scottohara/status/1083732668729225216) by Roger Johannson, Sara Souedian, and Scott O'Hara. After much back and forth a new technique has been found, and Scott has posted [Fixing Lists](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html). I also found out that Johnathan Neal has created an interesting [postCSS plugin](https://github.com/jonathantneal/postcss-list-style-safari-fix) to address this. Based on the Twitter conversation, there is no definite answer as to whether which fix works best or if the fix is even still needed. My advice, as always, TEST! TEST! TEST!

**Update 2017:** Thanks to [@HugoGiraudel](https://twitter.com/HugoGiraudel) and [@gumnos](https://twitter.com/gumnos) for pointing out that I can use zero-width space would be a cleaner solution. I have updated the code below to reflect this.

* * *

A bug that keeps hitting me at work is VoiceOver not announcing unordered lists properly when either the `list-style-type` is set to `none` or `display` is set to `inline`.

The expected behavior is that the unordered list is announced with a role of list along with the number of items, for example "list 4 items." Lastly, "end of list" is announced after the last item to again let a user know that there are no more items in the list. For whatever reason, setting the `list-style-type` to `none` or setting `display` to `inline` on the <`li`\>'s will strip this useful information.

This is problematic, for me, because unordered lists are usually used for navigational items, like top-level navigation or side navigation. With most top-level nav, `display: inline;` is used for presenting a horizontal list of items, while `list-style-type: none;` is used to remove the bullets that render by default so you can have stylized list of links. You do this a lot, you know you do.

This is kind of a big deal to so I wanted to see if I could figure out a way to get it working right.

ARIA to the rescue?
-------------------

An obvious solution is to use ARIA roles `list` and `listitem` to restore the semantics.

Returning list semantics with ARIA

This definitely works, but I don't like it. It requires too much markup. I also feel that since CSS caused the issue, I should be able to solve it with CSS.

CSS, the real hero
------------------

It didn't take long before I came up with the following solution. I haven't spent any time trying to figure out why it works yet, which means that I also don't understand what other consequences there are.

For whatever reason, adding some pseudo content before each item will magically return list semantics in VoiceOver.

Returning list semantics with CSS

With that bit of additional CSS, we are able to return the list semantics for VoiceOver users without needing to touch the markup.

Testing
-------

One of the best things about this simple fix is that it does not impact JAWS or NVDA, at least with the versions I have tested:

*   Safari 10.1.2 and VoiceOver/ macOS 10.11.6
*   Safari 10.1.2 and VoiceOver/ macOS 10.12.6
*   Safari 11.0 and VoiceOver/ macOS 10.12.6
*   Safari Technology Preview Release 40 (11.1) and VoiceOver/ macOS 10.12.6
*   Firefox 52.3.0 and NVDA 2015.4 (Thanks Shell!)
*   IE 11 and JAWS 18.0.2324 (Thanks Richard!)

Item Position?
--------------

I was surprised that the JAWS and NVDA was not announcing the position of each item in the list by default, e.g. 1 of 4, 2 of 4, etc. The two testers I talked to said they are not used to hearing that information. VoiceOver 10.11.6 didn't announce either, but 10.12.6 did. I am sure there is some verbosity settings at play here. If you really need, you could always use `aria-setsize` and/ or `aria-posinset`. In any case, I was satisfied knowing that the fixed list announced the same as the default list.

Summary
-------

Adding some pseudo-content before the list item will add the list semantics back to the list, in the most simple case it could be some zero-width space. It could be any pseudo-content, but it definitely needs to be before, not after. Just make sure whatever you add does not get in the way of interacting with the list item.

You can check out the test cases on JSFiddle: [VoiceOver and Lists (JSFiddle)](https://jsfiddle.net/1h2hwu0o/2/)


[Source](https://gerardkcohen.me/writing/2017/voiceover-list-style-type.html)
