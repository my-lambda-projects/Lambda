***
#### EASTER EGGS: Click on the ▶︎ black ▶︎ triangles ▶︎ to reveal the EASTER EGGS!
***
# Lecture 4 Notes - JavaScript and the DOM
## [@1m30s](https://youtu.be/GBNtL_51l5A?t=1m30s) LECTURE STARTS
### **Q: What is the D.O.M.?**

<details><summary><strong>A: Document Object Model</strong></summary><p>

![Document Object Model](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png)

</p></details>

- Elements in the DOM can be manipulated and iterated over "on the fly" with JavaScript.
- You have control over the entire DOM by using JavaScript.

### [@3m50s](https://youtu.be/GBNtL_51l5A?t=3m50s) Linking HTML to JavaScript
- link to a JavaScript file
  - generally done towards the bottom of the body for performance (so everything else can load first.)
  ```html
  <script src="path_to/script.js"></script>
  ```
  - Editing the page content and what it looks like ONLY using JavaScript!
### [@8m21s](https://youtu.be/GBNtL_51l5A?t=8m21s) Changing an HTML elements text per its ID
- modifying the header tag with the "about header" id, i.e. <h1 id="about_me">
```js
document.getElementById('about_header').innerHTML = 'JavaScript\'s About Me';
```
### [@15m18s](https://youtu.be/GBNtL_51l5A?t=15m18s) Creating an HTML element and text
- creating a DIV element and some text to go in it:
```js
var elem = document.createElement('div');  // <--- declare a variable that gets an element named DIV
elem.innerHTML = '<p>Hello World!</p>'     // <--- any HTML
document.body.appendChild(elem);           // <--- puts it as the LAST item in the BODY container
```
- This is EQUIVALENT TO:
```html
<html>
  <head></head>
  <body>
    <ul>
      <li>Nickname: <span id="nickname">mixelpix</span>
      <li>Favorites: <span id="favorites"></span>
      <li>Hometown: <span id="hometown"></span>
    </ul>

    <div><p>Hello World!</p></div>         <!--    THIS!!!    -->

    </body>

    <script src="homework4.js"></script>

</html>
```
### [@20m](https://youtu.be/GBNtL_51l5A?t=20m) Q&A, Homework
- `document.ready` function?
- Google is your friend for JavaScript methods
- e.g. https://www.w3schools.com/jsref for "JavaScript and HTML DOM Reference"
- "zero'ing out" an element
- targeting a class:
```js
document.querySelector('.someClass').innerHTML = "abcdef";
```
```html
<ul>
  <li class="someClass">Nickname: <span id="nickname">mixelpix</span>
  <li>Favorites: <span id="favorites"></span>
  <li>Hometown: <span id="hometown"></span>
</ul>
```
- getElement for IDs, getElements for Classes.
- jQuery vs getElement/s
