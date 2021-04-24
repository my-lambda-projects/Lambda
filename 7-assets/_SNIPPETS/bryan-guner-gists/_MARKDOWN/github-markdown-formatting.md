Advanced Formatting in GitHub Markdown
======================================

GitHub Flavored Markdown lets you create useful documents in [GitHub](https://github.com/) and [GitHub Enterprise](https://enterprise.github.com/home) using `.md` files.
Like other varieties of markdown, GitHub Markdown tries to be as readable as possible in its raw form, resulting in an intentionally limited set of formatting options.
However, these options can feel restrictive when dealing with complex content.

Although GitHub Markdown strips out most HTML tags, here are a few tricks that can give you more flexibility when formatting your documents.
These advanced formatting options can make your documents more useable, but they come at the expense of plain text readability, so use with caution.

Check out this excellent [cheatsheet](https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf) for an overview of standard formatting in GitHub Markdown.

- [Advanced Formatting in GitHub Markdown](#advanced-formatting-in-github-markdown)
  - [Images](#images)
  - [Dropdowns](#dropdowns)
  - [Buttons](#buttons)
  - [Anchor links](#anchor-links)
  - [Horizontal line](#horizontal-line)
  - [Extra space](#extra-space)
    - [References](#references)

## Images

<br>

To **left align** and **resize** an image:

<img align="left" width="200" src="https://apaskulin.github.io/waxtechnical/images/pup.jpg">

<br><br>

Use:

```
<img align="left" width="200" src="https://apaskulin.github.io/waxtechnical/images/pup.jpg">
```

---

<br>

To **right align** and **resize** an image:

<img align="right" width="200" src="https://apaskulin.github.io/waxtechnical/images/pup.jpg">

<br><br>

Use:

```
<img align="right" width="200" src="https://apaskulin.github.io/waxtechnical/images/pup.jpg">
```

---

<br>

To **center** and **resize** an image:

<p align="center">
  <img width="300" src="https://apaskulin.github.io/waxtechnical/images/pup.jpg">
</p>

Use:

```
<p align="center">
  <img width="300" src="https://apaskulin.github.io/waxtechnical/images/pup.jpg">
</p>
```
---

<br>

## Dropdowns

To create a dropdown containing **text**:

<details>
<summary>Example</summary>
This is a dropdown with text!
</details>

<br>

Use:

```html
<details>
<summary>Example</summary>
This is a dropdown with text!
</details>
```
---

<br>

To create a dropdown containing a **list**:

<details>
<summary>Example</summary>
<ul><li>This dropdown contains</li>
<li>a list!</li></ul>
</details>

<br>

Use:

```html
<details>
<summary>Example</summary>
<ul><li>This dropdown contains</li>
<li>a list!</li></ul>
</details>
```
---

<br>

To create a dropdown containing an **image**:

<details>
<summary>Example</summary>
<img src="https://apaskulin.github.io/waxtechnical/images/pup.jpg" width="500">
</details>

<br>

Use:

```html
<details>
<summary>Example</summary>
<img src="https://apaskulin.github.io/waxtechnical/images/pup.jpg" width="500">
</details>
```
---

<br>

To create a dropdown containing **code**:

<details>
<summary>Example</summary>
<pre>This dropdown contains<br>a code block!</pre>
</details>

<br>

Use:

```html
<details>
<summary>Example</summary>
<pre>$ This dropdown contains<br>a code block!</pre>
</details>
```
---

<br>

## Buttons

To create a single button:

| [Click here](https://github.com/) |
| --------------------------------- |

Use:

```md
| [Click here](https://github.com/) |
| --------------------------------- |
```
---

<br>

To create a row of buttons:

| [Click here](https://github.com/) | [Or here](https://github.com/) | [Or here](https://github.com/) |
| --------------------------------- | ------------------------------ | ------------------------------ |

Use:

```md
| [Click here](https://github.com/) | [Or here](https://github.com/) | [Or here](https://github.com/) |
| --------------------------------- | ------------------------------ | ------------------------------ |
```
---

<br>

## Anchor links

To link to a heading:

This is an example of an [anchor link](#anchor-links) to a heading.

Use:

```
This is an example of an [anchor link](#anchor-links) to a heading.
```

---

<br>

To create an anchor anywhere on the page, use:

<a name="your-anchor-name">

```
<a name="your-anchor-name">
```

To reference it:

This is an example of an [anchor link](#your-anchor-name) anywhere on the page.

Use:

```
See [creating an anchor link anywhere](#manual-anchor).
```
---

<br>

## Horizontal line

To create a horizontal line:

---

Use:

```
---
```
---

<br>

## Extra space

To add extra space, use one or more:

```
<br>
```

---

<br>

### References

GitHub Flavored Markdown Spec - https://github.github.com/gfm/ \
Advanced Markdown with David Wells - https://github.com/DavidWells/advanced-markdown \
Markdown Cheatsheet PDF - https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf
