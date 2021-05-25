***
##### !EASTER EGGS: Click on the ▶︎ black ▶︎ triangles ▶︎ to reveal the EASTER EGGS!
***
# Lambda-School-mini-bootcamp-2
### **Start date: May 15, 2017:**

<details><summary>Course Resources</summary><p>

- https://lambdaschool.com/mini-bootcamp/
- [Slack channel](https://lambdaschool.slack.com)
- [Lesson archive](https://lambdaschool.com/mini-bootcamp/archive)
***
- [My Codepen](https://codepen.io/mixelpix/)
- [My Github](https://github.com/mixelpixel)
  - GitHub page hosting: https://pages.github.com
- [Lambda University](http://www.lambdauniversity.com  )
- [mini Python Bootcamp](http://lambdaschool.com/mini-bootcamp/python)
  - [Pre-coursework](https://lambdaschool.teachable.com/p/pre-bootcamp/)
  - [miniBootcamp #1 (HTTP, Python, Flask, JavaScript)](https://docs.google.com/document/d/1qH-AbzE5h1tuAUPlGb6NbDujBJJy-k-WN-2xZ-8cV28/edit#heading=h.t89roya3gxli)
- [mini JavaScript Bootcamp](http://lambdaschool.com/mini-bootcamp/javascript)

</p></details>

<details><summary>Additional resources</summary><p>

- **Web Browsers:**
  - ["How browsers work internally" by Tali Garsiel (~30min)](https://vimeo.com/44182484)
  - ["How Browsers Work: Behind the scenes of modern web browsers" by By Tali Garsiel and Paul Irish](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)
- **HTML 5:**
  - [HTML5 Tutorial & SEO considerations](http://www.html-5-tutorial.com/)
- **`git` & GitHub tutorials:**
  - https://try.github.io/
  - http://learngitbranching.js.org
  - http://ohshitgit.com
- **Text Encoding and Unicode:**
  - [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)
    - http://www.unicode.org
    - put the `<meta charset = 'utf-8'>` head tag FIRST!
  - [What Every Programmer Absolutely, Positively Needs To Know About Encodings And Character Sets To Work With Text](http://kunststube.net/encoding/)
    - Encoding vs. Unicode "Code Points":
    > _"Unicode first and foremost defines a table of code points for characters. That's a fancy way of saying "65 stands for A, 66 stands for B and 9,731 stands for ☃" (seriously, it does). How these code points are actually encoded into bits is a different topic." ... "Characters are referred to by their "Unicode code point". Unicode code points are written in hexadecimal (to keep the numbers shorter), preceded by a "U+" (that's just what they do, it has no other meaning than "this is a Unicode code point")."_

  - [The Great Escapism (Or: What You Need To Know To Work With Text Within Text)](http://kunststube.net/escapism/)
  - [Handling Unicode Front To Back In A Web App](http://kunststube.net/frontback/)

</p></details>

# Week 1 - [TEXT EDITORS](https://atom.io), [HTML AND CSS](https://www.w3.org/standards/webdesign/htmlcss)
## **"The basics of code, how it works on the web, and what websites are made of."**
##### In addition to [w3c](https://www.w3.org) for CSS & HTML, for HTML, see also: https://whatwg.org
##### HTTP is per [w3c](https://www.w3.org) & http://ietf.org
### Monday, May 15, 2017, Lecture 1:
1. Mini Bootcamp Lesson 1: HTML & CSS
  - [LESSON 1: HTML & CSS](https://youtu.be/nLs9I8MRbO0)
  - [Lecture 1 example on CodePen.io: "Words"](https://codepen.io/mixelpix/pen/PmxXov)
  - [Lecture 1 example on CodePen.io: "divs"](https://codepen.io/mixelpix/pen/XRyoJg)
    <details><summary>Lecture 1 notes</summary><ul>
      <li>
        <a href="https://youtu.be/nLs9I8MRbO0?t=12m">Lecture 1 starts@ ~12min</a><br>
        There's good information in the first twelve minutes, don't skip it.
      </li>

      <h2>HTML</h2>
      <li>
        <a href="https://justinjackson.ca/words.html">Words</a>
      </li>
      <li>
        Declaring the type of document: &lt;!DOCTYPE html&gt;<br>
        html = Hyper-Text Markup Language<br>
        HTML consists of matching &lt;tag_type&gt; openings and &lt;/tag_type&gt; closings.<br>
        Whatever is inside the open/close tag set belongs to that tag area.<br>
        I.e. &lt;open&gt; tag_area &lt;close&gt;<br>
        To declare a closing, the tag type is prepended with a forward slash: /<br>
        I.e. &lt;tag_type&gt; tag_area &lt;/tag_type&gt;<br>
        E.g. &lt;html&gt; html_area &lt;/html&gt;<br>
        HTML involves "nesting" tags inside each other per sections, containers, divisions, etc. E.g.<br><b>
        &lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;...&lt;/head&gt;&lt;body&gt;...&lt;/body&gt;&lt;/html&gt;</b>
      </li>
      <li>
        &lt;html lang="en"&gt;...&lt;/html&gt;<br>
        per <a href="https://www.w3.org/International/questions/qa-html-language-declarations">w3.org: language declaration</a><br>
        <i>"Always use a language attribute on the html element. This is inherited by all other elements, and so will set a default language for the text in the document head element."</i><br>
      </li>
      <li>Basic html document layout:<br><ol>
        <li>&lt;!DOCTYPE html&gt; - doc. type declaration,</li>
        <li>&lt;html&gt; &lt;/html&gt; - html container</li>
        <li>&lt;head&gt; &lt;/head&gt; contains meta-info mostly for the browser,</li>
        <li>&lt;body&gt; &lt;/body&gt; is the actual body of the page</li></ol>
      <li>Title and meta info in head<br>
        Title tag determines browser tab text.<br>
        &lt;html&gt; &lt;head&gt; &lt;title&gt;Browser Tab Text&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;/body&gt; &lt;/html&gt;
      </li>
      <li>body contains what you see</li>
      <li>
        image tags (and some other tags) don't need to be closed<br>
        &lt;img src="url_goes_here"&gt;<br>
        ...& it makes NO difference, but you <i>can</i> use a closing tag:<br>
        &lt;img src="url_goes_here"/&gt;
      </li>
      <li>anchor tags for links, p tags for paragraphs, h# for headers, etc...</li>
      <li>Whitespace is pretty much ignored; however, whitepsaces (and tabs) can make things much more "human-readable"</li>
      <li>html comments are ignored by the html parser:<br>
      &lt;!-- <i>comments go here</i> --&gt;<br>
      &lt;!--<br><i>
      comments<br>
      can<br>
      also<br>
      be<br>
      across<br>
      multiple<br>
      lines<br>
      --&gt;</i>
      </li>

      <h2>CSS</h2>
      <li>CSS = Cascading Style Sheet</li>
      <li>
        CSS link syntax in the html file (tells the html doc where to find the corresponding css file)<br>
        &lt;html&gt; &lt;head&gt; &lt;title&gt;Browser Tab Text&lt;/title&gt; <b>&lt;link to CSS file&gt;</b> &lt;/head&gt; &lt;body&gt; &lt;/body&gt; &lt;/html&gt;<br>
        e.g. &lt;link rel="stylesheet" type="text/css" <b>href="homework.css"</b>&gt;
      </li>
      <li>convention is to put .css in the same directory as the .html, but it can be put in any directory so long as the "link href="" points to its location</li>
      <li>per <a href="https://www.w3schools.com/tags/tag_link.asp">w3schools.com: CSS link syntax</a>
      <li>
        HTML "super power": use the browser element inspector to see how web pages are constructed with html and css!<br>
        e.g. to find a hexadecimal color code (e.g. #4CAF50)
      </li>
      <li>
        Basic CSS syntax:<br>
        <b>tag_type {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;declaration: specification;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;...<br>
        }</b><br>
      </li>
      <li>
        more CSS syntax:<ul>
        <li>classes are prepended with a period, i.e. <b>.class_name{...}</b> e.g.,<br>
        <b>.some_class_name{...}</b> in the CSS file, and,<br>
        <b>&lt;html_tag class="some_class_name"&gt;...&lt;/html_tag&gt;</b> in the HTML file.</li>
        <li>id's are prepended with a has, i.e. <b>#id_name{...}</b> e.g.,<br>
        <b>#some_id_name{...}</b> in the CSS file, and,<br>
        <b>&lt;html_tag id="some_id_name"&gt;...&lt;/html_tag&gt;</b> in the HTML file.</ul>
      </li>
      <li>
        ID vs CLASS:<ul>
          <li>ID's are UNIQUE to a single instance</li><ul>
            <li>Each element can have only one ID</li>
            <li>Each page can have only one element with that ID</li></ul>
          <li>CLASSes are used to group element</li><ul>
            <li>You can use the same class on multiple elements.</li>
            <li>You can use multiple classes on the same element.</li></ul>
          </ul>
        More id vs class per <a href="https://css-tricks.com/the-difference-between-id-and-class/">CSS-Tricks.com</a> and <a href="http://stackoverflow.com/q/84378/5225057">stack question/answer</a>
      </li>
      <li>
      CSS order of precedence: most exact vs top to bottom cascade (vs importance)<ol>
        <li>Importance</li>
        <li>Specificity</li>
        <li>Source Order</li></ol>
      For more info, per <a href="https://www.w3.org/wiki/Inheritance_and_cascade">w3.org: "Inheritance and Cascade"</a>
      </li>
      <li>Per <a href="https://www.w3schools.com/css/css_combinators.asp">w3schools: CSS Combinators</a></li>
      <li>CSS comments are between forward slash and star: /&#42; <i>comments go here</i> &#42;/ and they can span multiple lines as well.</li>

      <h2>Additional Notes</h2>
      <li><a href="http://stackoverflow.com/a/31032477/5225057">HTML specs, percentage vs. height</a></li>
      <li><a href="https://www.w3schools.com/tags/tag_meta.asp">HTML meta tags</a></li>
      <li><a href="https://www.computerhope.com/issues/ch001034.htm">How do I indent or tab text on my web page or in HTML?</a></li>
      <li><a href="http://www.theukwebdesigncompany.com/articles/entity-escape-characters.php">HTML Escape Characters: Complete List</a></li>
      <li><b>I cannot recommend strongly enough: DO NOT TAKE NOTES IN HTML!!!!!! XD</b></li>
    </ul></details>

2. Homework assignment:
  - [Replicate the images in HTML and CSS code.](https://github.com/SunJieMing/LS-Web-Intro-I)
    1. [Homework assignment 1 on github](https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/tree/master/Lesson1/homework1)
      - [Homework assignment 1 on CodePen](https://codepen.io/mixelpix/pen/gWQZby)<details><summary>Click here for the image</summary><img src="https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/blob/master/Lesson1/homework1/homework1.png"></details>
    2. [Homework assignment 2 on github](https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/tree/master/Lesson1/homework2)
      - [Homework assignment 2 on CodePen](https://codepen.io/mixelpix/pen/NjEeqP)<details><summary>Click here for the image</summary><img src="https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/blob/master/Lesson1/homework2/homework2.png"></details>
    3. [Homework assignment 3 on github](https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/tree/master/Lesson1/homework3)
      - [Homework assignment 3 on CodePen](https://codepen.io/mixelpix/pen/ZKmVGe)<details><summary>Click here for the image</summary><img src="https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/blob/master/Lesson1/homework3/homework3.png"></details>

### Friday, May 19, 2017, Lecture 2:
1. Mini Bootcamp Lesson 2: Responsive Web Design
  - [LESSON 2: Responsive Web Design](https://youtu.be/oXziWoSD8vQ)
  - [Lesson 2 lecture example on CodePen: "Boxes and divs"](https://codepen.io/mixelpix/pen/zwMMVz)
  - [Lecture 2 notes](Lesson2)

2. Homework assignment:
  - [Replicate this web page](http://blackrockdigital.github.io/startbootstrap-clean-blog/post.html)
  - [Completed homework on GitHub](https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/tree/master/Lesson2/homework/)
  - [Completed homework on CodePen](https://codepen.io/mixelpix/pen/bWOKMo)

  <details><summary>Click here for a full screen capture</summary><img src="https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/blob/master/Lesson2/homework/homework_screencapture.png"></details>

***
# Week 2 - INTRO TO JAVASCRIPT
## **"An in-depth introduction to the language of the web."**
##### JavaScript maintained by [Mozilla](https://developer.mozilla.org/en/docs/Web/JavaScript) & [ECMA](https://www.ecma-international.org/ecma-262/7.0/#sec-property-accessors-runtime-semantics-evaluation)
##### [`git`](https://git-scm.com/downloads), [GitHub](https://github.com) & [Atom](https://atom.io)
- [JavaScript and ECMA Specification](http://www.w3resource.com/javascript/introduction/ECMA-and-javascript.php)
### Monday, May 22, 2017, Lecture 3
1. Mini Bootcamp Lesson 3: Command Line, `git` & Github
 - [LESSON 3: Command Line, Git & Github](https://youtu.be/dTQDhVChVzg)
 - NOTES: command line: pwd/cd/ls etc.
 - NOTES: git: fork, clone, status, add, commit, push, etc.
2. Homework assignment:
 - [Working with GitHub](https://github.com/austenallred/lswebhomework3)
 - [Completed homework](https://github.com/mixelpixel/lswebhomework3/tree/master)
 - <details><summary>Click here for the modified Tweet</summary><img src="https://github.com/mixelpixel/lswebhomework3/blob/master/Inspect_Element_mods.png"></details>

### Friday, May 26, 2017, Lecture 4
1. Mini Bootcamp Lesson 4: JavaScript and the DOM (Domain Object Model)
 - [LESSON 4: JavaScript and the DOM](https://youtu.be/GBNtL_51l5A)
 - [Lesson 4 Notes](Lesson4)
2. Homework assignment:
 - [JavaScript and the DOM](https://github.com/austenallred/lswebhomework4)
 - [Completed homework: GitHub](https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/tree/master/Lesson4)
 - [Completed homework: CodePen](https://codepen.io/mixelpix/pen/LyKGrZ)
***
# Week 3 - INTRO TO JAVASCRIPT
## **"Arrays, objects, and Array/Object class methods."**
### Friday, June 2, 2017, Lecture 5
1. Mini Bootcamp Lesson 5: Statements, Variables, and For Loops from JavaScript
 - [LESSON 5](https://youtu.be/UwNMelsm28Y)
 - [Lesson 5 notes](Lesson5)
2. Homework assignment:
 - [Fizz Buzz](https://github.com/austenallred/lswebhomework5)
 - [Completed homework: GitHub](https://github.com/mixelpixel/Lambda-School-mini-bootcamp-2/tree/master/Lesson5)
 - [Completed homework: CodePen](https://codepen.io/mixelpix/pen/NgWaMz)
***
# Week 4 - INTERMEDIATE JAVASCRIPT
## **"Prototype, this, closure, and callbacks."**
### Monday, June 5, 2017, Lecture 6
1. Mini Bootcamp Lesson 6: Functions, Parameters, Arguments
 - [LESSON 6](https://youtu.be/WmFRlpd1GTM)
 - [Lesson 6 notes](Lesson6)
2. Homework assignment:
 - [npm tests, etc.](https://github.com/austenallred/lswebhomework6)
 - [Completed homework: GitHub]()

### Friday, June 9, 2017, Lecture 7
## **Arrays, Objects, & Methods.**
1. Mini Bootcamp Lesson 7:
 - [LESSON 7](https://youtu.be/CDg9qtuGNAo)
 - [Lesson 7 Notes](Lesson7)
2. Homework assignment:
 - [npm tests, Feynman descriptions](https://github.com/austenallred/lswebhomework7)
 - [Completed homework](https://github.com/mixelpixel/lswebhomework7/tree/master)
 ***
# Week 5 - ADVANCED JAVASCRIPT
## **"Callback Functions"**
### Monday, June 12, 2017, Lecture 8
1. Mini Bootcamp Lesson 8:
- [LESSON 8](https://youtu.be/ffc6Le_UBQI)
- [Lesson 8 notes](Lesson8)
2. Homework assignment:
- [Callbacks](https://github.com/SunJieMing/lswebhomework8)
- [Completed homework: GitHub](https://github.com/mixelpixel/lswebhomework8/tree/master)
***
# fin.
