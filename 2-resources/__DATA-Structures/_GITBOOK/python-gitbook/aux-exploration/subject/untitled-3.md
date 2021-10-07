# server-side-scripting

## 9. Server-side scripting

We now have the Python tools we need to create our first [web applications](http://en.wikipedia.org/wiki/Web_application). The process of creating web applications is called [web application development](http://en.wikipedia.org/wiki/Web_application_development), the [raison d’être](http://en.wiktionary.org/wiki/raison_d%27%C3%AAtre) for this book.

### 9.1. Web documents and web servers

The [World Wide Web](http://en.wikipedia.org/wiki/World_Wide_Web) – or more simply _the web_ – is a global system of linked documents accessed through the [Internet](http://en.wikipedia.org/wiki/Internet), which is itself a global [computer network](http://en.wikipedia.org/wiki/Computer_network).

The web uses a [client-server model](http://en.wikipedia.org/wiki/Client%E2%80%93server_model) through which [web pages](http://en.wikipedia.org/wiki/Web_page) are retrieved from [web servers](http://en.wikipedia.org/wiki/Web_server) and then viewed in software applications running on the [client](http://en.wikipedia.org/wiki/Client_%28computing%29) computer called [web browsers](http://en.wikipedia.org/wiki/Web_browser).

### 9.2. URLs

Web pages are located using an addressing system called a [uniform resource locator](http://en.wikipedia.org/wiki/URL) or **URL**. A URL looks like this:

> [http://openbookproject.net/books/bpp4awd](http://openbookproject.net/books/bpp4awd)

This URL consists of three parts. The beginning of the URL, `http://` is the [URI scheme](http://en.wikipedia.org/wiki/URI_scheme) or **protocol**. This one is using the [Hypertext Transfer Protocol](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) or **HTTP**. Other schemes you are likely to encounter include [HTTPS](http://en.wikipedia.org/wiki/HTTP_Secure), [FTP](http://en.wikipedia.org/wiki/File_Transfer_Protocol), and [SSH](http://en.wikipedia.org/wiki/Secure_Shell). The middle part, `openbookproject.net`, specifies the [server](http://en.wikipedia.org/wiki/Server_%28computing%29) where this resources resides. The last part, `/books/bpp4awd` identifies the specific resource on this server.

The process of asking for a web page is called an **HTTP request**, and the exchange of messages between the client and the server is called the [request-response-cycle](http://en.wikipedia.org/wiki/Request-response).

### 9.3. HTML

[HTML](http://en.wikipedia.org/wiki/Html) stands for **HyperText Mark-up Language**. An HTML document is all [plain text](http://en.wikipedia.org/wiki/Plain_text). Because it must be able to express the structure of this text, information about which text is a heading, which text is paragraph, and so on, a few characters have a special meaning, somewhat like backslashes in Python strings. The “less than” and “greater than” characters are used to create **HTML tags**. Most tags occure in pairs, with a _start tag_ and an _end tag_, with text data between them. The start and end tag together with the enclosed text form an [HTML element](http://en.wikipedia.org/wiki/Html_element).

Elements provide extra information about the data in the document. They can stand on their own, for example to mark the place where a picture should appear in the page, or they can contain text and other elements, for example when they mark the start and end of a paragraph.

Some elements are compulsory, a whole HTML document must always be contained in an `html` element. Here is an example of an HTML document:

```text
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>The Zen of Python, by Tim Peters</title>
</head>

<body>
<h1>The Zen of Python, by Tim Peters</h1>

<blockquote>
<p>
Beautiful is better than ugly.<br>
Explicit is better than implicit.<br>
Simple is better than complex.<br>
Complex is better than complicated.<br>
Flat is better than nested.<br>
Sparse is better than dense.<br>
Readability counts.<br>
Special cases aren't special enough to break the rules.<br>
Although practicality beats purity.<br>
Errors should never pass silently.<br>
Unless explicitly silenced.<br>
In the face of ambiguity, refuse the temptation to guess.<br>
There should be one-- and preferably only one --obvious way to do it.<br>
Although that way may not be obvious at first unless you're Dutch.<br>
Now is better than never.<br>
Although never is often better than *right* now.<br>
If the implementation is hard to explain, it's a bad idea.<br>
If the implementation is easy to explain, it may be a good idea.<br>
Namespaces are one honking great idea -- let's do more of those!<br>
</p>

<p>-- Tim Peters</p>
</blockquote>

<figure>
<img src="timpeters.jpg" alt="Tim Peters">
<figcaption>
Tim Peters at Pycon 2004 (8/22/04)
</figcaption>
</figure>

</body>
</html>
```

A rendered version of this web page can be see [here](https://www.openbookproject.net/books/bpp4awd/_static/ch10/zen.html).

Elements that contain text or other tags are first opened with `<tagname>`, and afterwards finished with `</tagname>`. The `html` element always contains two children: `head` and `body`. The first contains information _about_ the document, the second contains the actual document.

Most tag names are cryptic abbreviations. `h1` stands for “heading 1”, the top level heading. There are also `h2` to `h6` for successive subheadings. `p` means “paragraph”, and `img` stands for “image”. The `img` element does not contain any text or other tags, but it does have some extra information, `src="timpeters.jpg"` and `alt="Tim Peters"`, which are called [attributes](http://en.wikipedia.org/wiki/HTML_attribute). In this case, they contain information about the image file that should be shown here.

Because `<` and `>` have a special meaning in HTML documents, they can not be written directly in the text of the document. If you want to display `5 < 10` in an HTML document, you have to write “`5 &lt; 10`”, where `&lt;` represents the less than than sign \(`<`\). `&gt;` is used for `>`, and because these codes also give the ampersand character a special meaning, a plain `&` is written as `&amp;` .

These are the only bare basics of HTML, but they should be enough to get you through this chapter. As an aspiring web developer, you will want to learn more about HTML as soon as you can.

### 9.4. CSS

[CSS](http://en.wikipedia.org/wiki/CSS) stands for **Cascading Style Sheets**. CSS is a styling language designed to describe the look and formatting \(the [presentation semantics](http://en.wikipedia.org/wiki/Presentation_semantics)\) of web pages. Together with HTML and JavaScript, it makes up the third of the three languages that can be natively consumed by web browsers.

CSS syntax consists of a collection of _styles_ or _rules_. Each rule is composed of a _selector_ and a _declaration block_. The selector determines \(selects\) which HTML elements the style will apply to. The declaration block is in turm composed of a sequence of _property-value pairs_. The property is separated from the value by a colon \(`:`\), and property-value pairs are separated from each other by a semi-colon \(`;`\).

Here is an example of a style sheet:

```text
body {
    margin: 60px;
    padding: 40px;
    background-color: Cornsilk;
    border: 1px solid gray;
}
h1 {
    margin-left: -20px;
    color: orange;
    font-family: Helvetica, sans-serif;
}
img {
    padding: 20px;
    border: 1px solid black;
    background-color: WhiteSmoke;
}
blockquote {
    padding: 10px;
    border: 1px dashed SaddleBrown;
}
blockquote p {
    font-style: italic;
}
blockquote p.author {
    font-style: normal;
    margin-left: 30px;
    color: DarkGoldenrod;
}
figure {
    display: table;
    margin-right: auto;
    margin-left: auto;
    width: 800px;
}
figure img {
    width: 700px;
}
figcaption {
    text-align: center;
}
```

Styles can be applied internally to an html document using **style elements** \(between `<style type="text/css"></style>` tags\) in the document header. Here is the preceding quote web page with the style included:

```text
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>The Zen of Python, by Tim Peters</title>
<style type="text/css">
body {
    margin: 60px;
    padding: 40px;
    background-color: Cornsilk;
    border: 1px solid gray;
}
h1 {
    margin-left: -20px;
    color: orange;
    font-family: Helvetica, sans-serif;
}
img {
    padding: 20px;
    border: 1px solid black;
    background-color: WhiteSmoke;
}
blockquote {
    padding: 10px;
    border: 1px dashed SaddleBrown;
}
blockquote p {
    font-style: italic;
}
blockquote p.author {
    font-style: normal;
    margin-left: 30px;
    color: DarkGoldenrod;
}
figure {
    display: block;
    width: 800px;
}
figure img {
    width: 700px;
}
figcaption {
    text-align: center;
}
</style>
</head>

<body>
<h1>The Zen of Python, by Tim Peters</h1>

<blockquote>
<p>
Beautiful is better than ugly.<br>
Explicit is better than implicit.<br>
Simple is better than complex.<br>
Complex is better than complicated.<br>
Flat is better than nested.<br>
Sparse is better than dense.<br>
Readability counts.<br>
Special cases aren't special enough to break the rules.<br>
Although practicality beats purity.<br>
Errors should never pass silently.<br>
Unless explicitly silenced.<br>
In the face of ambiguity, refuse the temptation to guess.<br>
There should be one-- and preferably only one --obvious way to do it.<br>
Although that way may not be obvious at first unless you're Dutch.<br>
Now is better than never.<br>
Although never is often better than *right* now.<br>
If the implementation is hard to explain, it's a bad idea.<br>
If the implementation is easy to explain, it may be a good idea.<br>
Namespaces are one honking great idea -- let's do more of those!<br>
</p>

<p class="author">-- Tim Peters</p>
</blockquote>

<figure>
<img src="timpeters.jpg" alt="Tim Peters">
<figcaption>
Tim Peters at Pycon 2004 (8/22/04)
</figcaption>
</figure>

</body>
</html>
```

[Here](https://www.openbookproject.net/books/bpp4awd/_static/ch10/styled_zen.html) is this web page rendered by your browser.

`class` and `id` attributes can be added to HTML elements for the purpose of styling them with CSS. In this example, the second parapraph element in the blockquote has been given a classed named “author”. This example also makes use of a number of [Web colors](http://en.wikipedia.org/wiki/Web_colors).

Learning more about HTML and CSS

A working knowledge of HTML and CSS is a prerequisit for creating web applications. Presentation of the details is outside the scope of this book. A quick but sufficient introduction to both of these topics can be found in [Getting Down with HTML](http://www.openbookproject.net/tutorials/getdown/html) and [Getting Down with CSS](http://www.openbookproject.net/tutorials/getdown/css).

### 9.5. Client-side scripting \(JavaScript\)

In some cases, it is also practical to have a program that runs _after_ the page has been sent, when the user is looking at it. This is called [client-side scripting](http://en.wikipedia.org/wiki/Client-side_scripting), because the program runs on the client computer. Client-side web scripting is what [JavaScript](http://en.wikipedia.org/wiki/JavaScript) was invented for.

The scripts are enclosed in **script elements** \(between `<script></script>` tags\), usually in the document head. In addition to knowing how to [render](http://en.wiktionary.org/wiki/render) HTML styled with CSS, almost all current web browsers have built-in [JavaScript engines](http://en.wikipedia.org/wiki/JavaScript_engine) that enable them to interpret JavaScript source included in script elements.

It is also possible to include JavaScript source in a separate file. Browsers load JavaScript files when they find a start `<script>` tag in a web page with a `src` attribute whose value is the URL of file containing the JavaScript code. The extension `.js` is usually used for files containing JavaScript code. These files can be located on the same machine with the web page or anywhere on the web. The browser will fetch all these extra files from their servers, so it can add them to the document.

Like Python, JavaScript is a [programming language](https://en.wikipedia.org/wiki/Programming_language). As an aspiring web developer, you will need to learn JavaScript in addition to HTML and CSS.

### 9.6. Server-side scripting with Python

Although a URL can simply point at a file, it is also possible for a web-server to do something more than just looking up a file and sending it to the client. It can process the file in some way first, or even create it dynamically upon receiving the URL request.

Programs that transform or generate documents on a server are what [web applications](http://en.wikipedia.org/wiki/Web_application) are made of.

### 9.7. Forms

To get information \(data\) from the client to the server, HTML uses [forms](http://en.wikipedia.org/wiki/Html_form).

A basic HTTP request is a simple request for a file. When this file is not really a passive file, but a server-side program, it can become useful to include information other than a filename in the request. For this purpose, HTTP requests are allowed to contain additional ‘parameters’. Here is an example:

```text
http://www.google.com/search?q=aztec%20empire
```

After the filename \(`/search`\), the URL continues with a question mark, after which the parameters follow. This request has one parameter, called `q` \(for “query”, presumably\), whose value is `aztec empire`. The `%20` part corresponds to a space. There are a number of characters that can not occur in these values, such as spaces, ampersands, or question marks. These are “escaped” by replacing them with a `%` followed by their numerical value, which serves the same purpose as the backslashes used in strings and regular expressions, but is even more unreadable.

Note

The value a character gets is decided by the ASCII standard, which assigns the numbers 0 to 127 to a set of letters and symbols used by the Latin alphabet. This standard is a precursor of the Unicode standard.

When a request contains more than one parameter, they are separated by ampersands, as in…:

```text
http://www.google.com/search?q=aztec%20empire&lang=nl
```

A [form](http://en.wikipedia.org/wiki/Html_form), basically, is a way to make it easy for browser-users to create such parameterised URLs. It contains a number of fields, such as input boxes for text, checkboxes that can be “checked” and “unchecked”, or thingies that allow you to choose from a given set of values. It also usually contains a “submit” button and, invisible to the user, an “action” URL to which it should be sent. When the submit button is clicked, or enter is pressed, the information that was entered in the fields is added to this action URL as parameters, and the browser will request this URL.

Here is the HTML for a simple form

```text
<form name="userinfo" method="get" action="info.html">
  <p>Please give us your information, so that we can send
  you spam.</p>
  <p>Name: <input type="text" name="name"/></p>
  <p>E-Mail: <input type="text" name="email"/></p>
  <p>Sex: <select name="sex">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select></p>
  <p><input name="send" type="submit" value="Send!"/></p>
</form>
```

The name of the form can be used to access it with JavaScript, as we shall see in a moment. The names of the fields determine the names of the HTTP parameters that are used to store their values. Sending this form might produce a URL like this:

```text
http://planetspam.com/info.html?name=Ted&email=ted@zork.com&sex=Male
```

There are quite a few other tags and properties that can be used in forms, but in this book we will stick with simple ones, so that we can concentrate on JavaScript.

### 9.8. `get` and `post`

The `method="get"` property of the example form shown above indicates that this form should encode the values it is given as URL parameters, as shown before. There is an alternative method for sending parameters, which is called `post`. An HTTP request using the `post` method contains, in addition to a URL, a block of data. A form using the `post` method puts the values of its parameters in this data block instead of in the URL.

When sending big chunks of data, the `get` method will result in URLs that are a mile wide, so `post` is usually more convenient. But the difference between the two methods is not just a question of convenience. Traditionally, `get` requests are used for requests that just ask the server for some document, while `post` requests are used to take an action that changes something on the server. For example, getting a list of recent messages on an Internet forum would be a `get` request, while adding a new message would be a `post` request. There is a good reason why most pages follow this distinction ― programs that automatically explore the web, such as those used by search engines, will generally only make `get` requests. If changes to a site can be made by `get` requests, these well-meaning ‘crawlers’ could do all kinds of damage.

### 9.9. Glossary

client

A program that accesses the services offered by a server.network

A collection of computers and hardware components interconnected by communications channels enabling the sharing of information and resources.protocol

A system of digital message formats and rules for exchanging messages in and between computing systems.server

A program offers services to client programs.web application

A computer program that uses a web browser as a client.web browser

A computer application for retrieving, presenting and traversing web pages.web page

A document that is viewable in a web browser. Web pages are usually written in HTML and styled with CSS.web server

A software application for serving web pages.World Wide Web

The global system of linked documents accessed through the Internet.

### 9.10. Exercises

- [Chapter 9 Exercise Set 0: Chapter Review](https://www.openbookproject.net/books/bpp4awd/exercises/ch09/ch09s00.html#ch09s00)
- [Chapter 9 exercise set 1](https://www.openbookproject.net/books/bpp4awd/exercises/ch09/ch09s01.html#ch09s01)
- [Chapter 9 exercise set 2](https://www.openbookproject.net/books/bpp4awd/exercises/ch09/ch09s02.html#ch09s02)
