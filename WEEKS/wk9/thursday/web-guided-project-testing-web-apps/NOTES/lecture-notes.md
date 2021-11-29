
Advanced React
Unit 3: Advanced Web Apps

Advanced React
- Class Components
- The React Lifecycle
- Composing Non-Visual Behaviors
- Testing Web Applications
Advanced React
Composing Non-Visual Behaviors
- Understanding Separation of Concerns
- Understanding Stateful Logic
- Use custom hooks to add behaviors
New focus...
Component Architecture
What is Stateful Logic?
What is Stateful Logic?
Any code that is used to manipulate data.
Why is Stateful Logic?
Why is Stateful Logic?
Because Separation of Concerns
Separation of Concerns
Each component/module/function should be as small as possible and do ONE thing.
Separation of Concerns
Each component/module/function should be as small as possible and do ONE thing.
Keeps your code DRY and reusable.
Separation of Concerns
Each component/module/function should be as small as possible and do ONE thing.
Keeps your code DRY and reusable.
Make each piece easy to test.
How can we break down our
components into smaller,
focused, reusable parts?
How can we break down our components
into smaller, focused, reusable parts?
● Identify the code that can be modularized.
● Move that code into its own file.
● Identify the dependances and connect them to module.
● Replace hard code with module.
● Test that app works the same as before.
Modularizing our components:
- Subcomponents (Presentation Logic )
- Services (Data Logic)
- Custom Hooks (Stateful Logic)
Stateful logic just means code
that manipulates state...
Stateful logic just means code
that manipulates state...
...but not the state itself!
Takeaways:
- Separation of Concerns is good!
- Component Code can be separated into
- Presentation Logic
- Data Logic
- Stateful Logic
- Break them up to help keep things dry, reusable, efficient and
testable.
Break



---
---

## TOC:

---

- [localStorage in JavaScript: A complete guide - LogRocket Blog](#localstorage-in-javascript-a-complete-guide---logrocket-blog)
  - [What is the Web Storage API?](#what-is-the-web-storage-api)
    - [What is the difference between `sessionStorage` and `localStorage`?](#what-is-the-difference-between-sessionstorage-and-localstorage)
  - [What is `localStorage` in JavaScript?](#what-is-localstorage-in-javascript)
    - [Where is `localStorage` stored?](#where-is-localstorage-stored)
  - [What is `Window.localStorage`?](#what-is-windowlocalstorage)
  - [How does `localStorage` work?](#how-does-localstorage-work)
    - [`setItem()`: How to store values in `localStorage`](#setitem-how-to-store-values-in-localstorage)
    - [`getItem()`: How to get items from `localStorage`](#getitem-how-to-get-items-from-localstorage)
    - [`removeItem()`: How to delete `localStorage` sessions](#removeitem-how-to-delete-localstorage-sessions)
    - [`clear()`: How to delete all items in `localStorage`](#clear-how-to-delete-all-items-in-localstorage)
    - [`key()`: How to get the name of a key in `localStorage`](#key-how-to-get-the-name-of-a-key-in-localstorage)
  - [`localStorage` browser support](#localstorage-browser-support)
  - [`localStorage` limitations](#localstorage-limitations)
  - [Local Storage: Debug JavaScript errors easier by understanding the context](#local-storage-debug-javascript-errors-easier-by-understanding-the-context)
- [JSON - JavaScript | MDN](#json---javascript--mdn)
  - [Description](#description)
    - [JavaScript and JSON differences](#javascript-and-json-differences)
    - [Full JSON syntax](#full-json-syntax)
  - [Static methods](#static-methods)
  - [Examples](#examples)
    - [Example JSON](#example-json)
  - [Specifications](#specifications)
  - [Browser compatibility](#browser-compatibility)
- [Building Your Own Hooks – React](#building-your-own-hooks--react)
  - [Using a Custom Hook](#using-a-custom-hook)
    - [Tip: Pass Information Between Hooks](#tip-pass-information-between-hooks)
  - [`useYourImagination()`](#useyourimagination)
- [Compose React hooks like composing React components](#compose-react-hooks-like-composing-react-components)
  - [Why custom hooks are so powerful](#why-custom-hooks-are-so-powerful)
- [Learn Stateful and Stateless components in ReactJS - CronJ](#learn-stateful-and-stateless-components-in-reactjs---cronj)
  - [**State**](#state)
  - [**Components**](#components)
    - [**Stateful Components**](#stateful-components)
    - [**Stateless Components**](#stateless-components)
    - [**Stateful vs. Stateless**](#stateful-vs-stateless)
  - [**When should I make a component stateful or stateless?**](#when-should-i-make-a-component-stateful-or-stateless)
    - [**Conclusion**](#conclusion)
- [Software Design - Separation Of Concerns - with examples](#software-design---separation-of-concerns---with-examples)
    - [You will learn](#you-will-learn)
  - [Free Courses - Learn in 10 Steps](#free-courses---learn-in-10-steps)
    - [Software Design Principles](#software-design-principles)
    - [What Is Separation Of Concerns?](#what-is-separation-of-concerns)
    - [Separation Of Concerns In Action](#separation-of-concerns-in-action)
      - [Layered Architecture](#layered-architecture)
      - [Organizing Microservices](#organizing-microservices)
      - [Identifying Common Components](#identifying-common-components)
    - [Summary](#summary)
- [Computed Property Names in JavaScript - ui.dev](#computed-property-names-in-javascript---uidev)
    - [One more thing](#one-more-thing)


------
---





# localStorage in JavaScript: A complete guide - LogRocket Blog

> Arm yourself with the knowledge and power of localStorage in JavaScript applications with these five different storage methods.

_**Editor’s note: This post was updated on 29 December 2020.**_

In this tutorial, we’ll show you how to use the `localStorage` mechanism and `Window.localStorage` property and review the basics of web storage in JavaScript.

We’ll cover the following in detail:

- [localStorage in JavaScript: A complete guide - LogRocket Blog](#localstorage-in-javascript-a-complete-guide---logrocket-blog)
  - [What is the Web Storage API?](#what-is-the-web-storage-api)
    - [What is the difference between `sessionStorage` and `localStorage`?](#what-is-the-difference-between-sessionstorage-and-localstorage)
  - [What is `localStorage` in JavaScript?](#what-is-localstorage-in-javascript)
    - [Where is `localStorage` stored?](#where-is-localstorage-stored)
  - [What is `Window.localStorage`?](#what-is-windowlocalstorage)
  - [How does `localStorage` work?](#how-does-localstorage-work)
    - [`setItem()`: How to store values in `localStorage`](#setitem-how-to-store-values-in-localstorage)
    - [`getItem()`: How to get items from `localStorage`](#getitem-how-to-get-items-from-localstorage)
    - [`removeItem()`: How to delete `localStorage` sessions](#removeitem-how-to-delete-localstorage-sessions)
    - [`clear()`: How to delete all items in `localStorage`](#clear-how-to-delete-all-items-in-localstorage)
    - [`key()`: How to get the name of a key in `localStorage`](#key-how-to-get-the-name-of-a-key-in-localstorage)
  - [`localStorage` browser support](#localstorage-browser-support)
  - [`localStorage` limitations](#localstorage-limitations)
  - [Local Storage: Debug JavaScript errors easier by understanding the context](#local-storage-debug-javascript-errors-easier-by-understanding-the-context)
- [JSON - JavaScript | MDN](#json---javascript--mdn)
  - [Description](#description)
    - [JavaScript and JSON differences](#javascript-and-json-differences)
    - [Full JSON syntax](#full-json-syntax)
  - [Static methods](#static-methods)
  - [Examples](#examples)
    - [Example JSON](#example-json)
  - [Specifications](#specifications)
  - [Browser compatibility](#browser-compatibility)
- [Building Your Own Hooks – React](#building-your-own-hooks--react)
  - [Using a Custom Hook](#using-a-custom-hook)
    - [Tip: Pass Information Between Hooks](#tip-pass-information-between-hooks)
  - [`useYourImagination()`](#useyourimagination)
- [Compose React hooks like composing React components](#compose-react-hooks-like-composing-react-components)
  - [Why custom hooks are so powerful](#why-custom-hooks-are-so-powerful)
- [Learn Stateful and Stateless components in ReactJS - CronJ](#learn-stateful-and-stateless-components-in-reactjs---cronj)
  - [**State**](#state)
  - [**Components**](#components)
    - [**Stateful Components**](#stateful-components)
    - [**Stateless Components**](#stateless-components)
    - [**Stateful vs. Stateless**](#stateful-vs-stateless)
  - [**When should I make a component stateful or stateless?**](#when-should-i-make-a-component-stateful-or-stateless)
    - [**Conclusion**](#conclusion)
- [Software Design - Separation Of Concerns - with examples](#software-design---separation-of-concerns---with-examples)
    - [You will learn](#you-will-learn)
  - [Free Courses - Learn in 10 Steps](#free-courses---learn-in-10-steps)
    - [Software Design Principles](#software-design-principles)
    - [What Is Separation Of Concerns?](#what-is-separation-of-concerns)
    - [Separation Of Concerns In Action](#separation-of-concerns-in-action)
      - [Layered Architecture](#layered-architecture)
      - [Organizing Microservices](#organizing-microservices)
      - [Identifying Common Components](#identifying-common-components)
    - [Summary](#summary)
- [Computed Property Names in JavaScript - ui.dev](#computed-property-names-in-javascript---uidev)
    - [One more thing](#one-more-thing)

What is the Web Storage API?
----------------------------

The [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) is a set of mechanisms that enable browsers to store key-value pairs. It is designed to be much more intuitive than using cookies.

The key-value pairs represent storage objects, which are similar to objects except they remain intact during page loads, and are always strings. You can access these values like an object or using the `getItem()` method (more on that later).

### What is the difference between `sessionStorage` and `localStorage`?

The Web Storage API consists of two mechanisms: `sessionStorage` and `localStorage`. Both `sessionStorage` and `localStorage` maintain a separate storage area for each available origin for the duration of the page session.

The main difference between `sessionStorage` and `localStorage` is that `sessionStorage` only maintains a storage area while the browser is open (including when the page reloads or restores) while `localStorage` continues to store data after the browser is closed. In other words, whereas data stored in `sessionStorage` is cleared when the page is closed, data stored in `localStorage` does not expire.

In this tutorial, we’ll focus on how to use `localStorage` in JavaScript.

What is `localStorage` in JavaScript?
-------------------------------------

`localStorage` is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date. This means the data stored in the browser will persist even after the browser window is closed.

For a visual refresher on how to use `localStorage` in JavaScript, check out the video tutorial below:

### Where is `localStorage` stored?

In Google Chrome, [web storage](https://en.wikipedia.org/wiki/Web_storage) data is saved in an SQLite file in a subfolder in the user’s profile. The subfolder is located at `\AppData\Local\Google\Chrome\User Data\Default\Local Storage` on Windows machines and `~/Library/Application Support/Google/Chrome/Default/Local Storage` on macOS

Firefox saves storage objects in an SQLite file called `webappsstore.sqlite`, which is also located in the user’s profile folder.

What is `Window.localStorage`?
------------------------------

The `localStorage` mechanism is available via the `[Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)` property. `Window.localStorage` is part of the `[Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)` interface in JavaScript, which represents a window containing a DOM document.

The `Window` interface features a wide range of functions, constructors, objects, and namespaces. `Window.localStorage` is a read-only property that returns a reference to the local storage object used to store data that is only accessible to the origin that created it.

How does `localStorage` work?
-----------------------------

To use `localStorage` in your web applications, there are five methods to choose from:

1.  `setItem()`: Add key and value to `localStorage`
2.  `getItem()`: This is how you get items from `localStorage`
3.  `removeItem()`: Remove an item by key from `localStorage`
4.  `clear()`: Clear all `localStorage`
5.  `key()`: Passed a number to retrieve the key of a `localStorage`

### `setItem()`: How to store values in `localStorage`

Just as the name implies, this method allows you to store values in the `localStorage` object.

It takes two parameters: a key and a value. The key can be referenced later to fetch the value attached to it.

window.localStorage.setItem('name', 'Obaseki Nosa');

Where `name` is the key and `Obaseki Nosa` is the value. Also note that `localStorage` can only store strings.

To store arrays or objects, you would have to convert them to strings.

To do this, we use the `JSON.stringify()` method before passing to `setItem()`.

const person \= { name: "Obaseki Nosa", location: "Lagos", } window.localStorage.setItem('user', JSON.stringify(person));

### `getItem()`: How to get items from `localStorage`

To get items from localStorage, use the `getItem()` method. `getItem()` allows you to access the data stored in the browser’s `localStorage` object.

`getItem()` accepts only one parameter, which is the `key`, and returns the `value` as a string.

To retrieve a user key:

window.localStorage.getItem('user');

This returns a string with value as:

“{“name”:”Obaseki Nosa”,”location”:”Lagos”}”

To use this value, you would have to convert it back to an object.

To do this, we make use of the `JSON.parse()` method, which converts a JSON string into a JavaScript object.

JSON.parse(window.localStorage.getItem('user'));

### `removeItem()`: How to delete `localStorage` sessions

To delete local storage sessions, use the `removeItem()` method.

When passed a key name, the `removeItem()` method removes that key from the storage if it exists. If there is no item associated with the given key, this method will do nothing.

window.localStorage.removeItem('name');

### `clear()`: How to delete all items in `localStorage`

Use the `clear()` method to delete all items in `localStorage`.

This method, when invoked, clears the entire storage of all records for that domain. It does not receive any parameters.

window.localStorage.clear();

### `key()`: How to get the name of a key in `localStorage`

The `key()` method comes in handy in situations where you need to loop through keys and allows you to pass a number or index to `localStorage` to retrieve the name of the key.

var KeyName \= window.localStorage.key(index);

`localStorage` browser support
------------------------------

`localStorage` as a type of web storage is an HTML5 specification. It is supported by major browsers including IE8. To be sure the browser supports `localStorage`, you can check using the following snippet:

if (typeof(Storage) !== "undefined") {  } else {  }

`localStorage` limitations
--------------------------

As easy as it is to use `localStorage`, it is also easy to misuse it. The following are limitations, and also ways to NOT use `localStorage`:

*   Do not store sensitive user information in `localStorage`
*   It is not a substitute for a server based database as information is only stored on the browser
*   `localStorage` is limited to 5MB across all major browsers
*   `localStorage` is quite insecure as it has no form of data protection and can be accessed by any code on your web page
*   `localStorage` is synchronous, meaning each operation called would only execute one after the other

With these, we have been armed with the power of `[localStorage](https://blog.logrocket.com/web-storage-made-simple-use-local-storage-state/)` in our web applications.

[Local Storage](https://logrocket.com/signup/): Debug JavaScript errors easier by understanding the context
-------------------------------------------------------------------------------------------------------

Debugging code is always a tedious task. But the more you understand your errors the easier it is to fix them.

[Local Storage](https://logrocket.com/signup/) allows you to understand these errors in new and unique ways. Our frontend monitoring solution tracks user engagement with your JavaScript frontends to give you the ability to find out exactly what the user did that led to an error.

[![Local Storage Dashboard Free Trial Banner](https://blog.logrocket.com/wp-content/uploads/2020/06/reproduce-javascript-errors.gif)](https://logrocket.com/signup/)

LogRocket records console logs, page load times, stacktraces, slow network requests/responses with headers + bodies, browser metadata, and custom logs. Understanding the impact of your JavaScript code will never be easier!

[Try it for free](https://logrocket.com/signup/).

# JSON - JavaScript | MDN

> The JSON object contains methods
    for parsing JavaScript Object
      Notation (JSON) and converting values to JSON. It can't be
    called or constructed, and aside from its two method properties, it has no interesting
    functionality of its own.

The **`JSON`** object contains methods for parsing [JavaScript Object Notation](https://json.org/) ([JSON](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Glossary/JSON)) and converting values to JSON. It can't be called or constructed, and aside from its two method properties, it has no interesting functionality of its own.

[Description](#description "Permalink to Description")
------------------------------------------------------

### [JavaScript and JSON differences](#javascript_and_json_differences "Permalink to JavaScript and JSON differences")

JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and [`null`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/null). It is based upon JavaScript syntax but is distinct from it: some JavaScript is _not_ JSON.

**Objects and Arrays**

Property names must be double-quoted strings; [trailing commas](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Trailing_commas) are forbidden.

**Numbers**

Leading zeros are prohibited. A decimal point must be followed by at least one digit. `NaN` and `Infinity` are unsupported.

**Any JSON text is a valid JavaScript expression...**

...But only in JavaScript engines that have implemented the [proposal to make all JSON text valid ECMA-262](https://github.com/tc39/proposal-json-superset). In engines that haven't implemented the proposal, U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR are allowed in string literals and property keys in JSON; but their use in these features in JavaScript string literals is a [`SyntaxError`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError).

Consider this example where [`JSON.parse()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) parses the string as JSON and [`Global_Objects/eval`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) executes the string as JavaScript:

    let code = '"\u2028\u2029"'
    JSON.parse(code)  
    eval(code)        
    

Other differences include allowing only double-quoted strings and having no provisions for [`undefined`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) or comments. For those who wish to use a more human-friendly configuration format based on JSON, there is [JSON5](https://json5.org/), used by the Babel compiler, and the more commonly used [YAML](https://en.wikipedia.org/wiki/YAML).

### [Full JSON syntax](#full_json_syntax "Permalink to Full JSON syntax")

The full JSON syntax is as follows:
```json
    JSON = null
        or true or false
        or JSONNumber
        or JSONString
        or JSONObject
        or JSONArray
    
    JSONNumber = - PositiveNumber
              or PositiveNumber
    PositiveNumber = DecimalNumber
                  or DecimalNumber . Digits
                  or DecimalNumber . Digits ExponentPart
                  or DecimalNumber ExponentPart
    DecimalNumber = 0
                 or OneToNine Digits
    ExponentPart = e Exponent
                or E Exponent
    Exponent = Digits
            or + Digits
            or - Digits
    Digits = Digit
          or Digits Digit
    Digit = 0 through 9
    OneToNine = 1 through 9
    
    JSONString = ""
              or " StringCharacters "
    StringCharacters = StringCharacter
                    or StringCharacters StringCharacter
    StringCharacter = any character
                      except " or \ or U+0000 through U+001F
                   or EscapeSequence
    EscapeSequence = \" or \/ or \\ or \b or \f or \n or \r or \t
                  or \u HexDigit HexDigit HexDigit HexDigit
    HexDigit = 0 through 9
            or A through F
            or a through f
    
    JSONObject = { }
              or { Members }
    Members = JSONString : JSON
           or Members , JSONString : JSON
    
    JSONArray = [ ]
             or [ ArrayElements ]
    ArrayElements = JSON
                 or ArrayElements , JSON
```

Insignificant [whitespace](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Glossary/Whitespace) may be present anywhere except within a `JSONNumber` (numbers must contain no whitespace) or `JSONString` (where it is interpreted as the corresponding character in the string, or would cause an error). The tab character ([U+0009](https://unicode-table.com/en/0009/)), carriage return ([U+000D](https://unicode-table.com/en/000D/)), line feed ([U+000A](https://unicode-table.com/en/000A/)), and space ([U+0020](https://unicode-table.com/en/0020/)) characters are the only valid whitespace characters.

[Static methods](#static_methods "Permalink to Static methods")
---------------------------------------------------------------

[`JSON.parse(text[, reviver])`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

Parse the string `text` as JSON, optionally transform the produced value and its properties, and return the value. Any violations of the JSON syntax, including those pertaining to the differences between JavaScript and JSON, cause a [`SyntaxError`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) to be thrown. The `reviver` option allows for interpreting what the `replacer` has used to stand in for other datatypes.

[`JSON.stringify(value[, replacer[, space]])`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner. By default, all instances of [`undefined`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) are replaced with [`null`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/null), and other unsupported native data types are censored. The `replacer` option allows for specifying other behavior.

[Examples](#examples "Permalink to Examples")
---------------------------------------------

### [Example JSON](#example_json "Permalink to Example JSON")

    {
      "browsers": {
        "firefox": {
          "name": "Firefox",
          "pref_url": "about:config",
          "releases": {
            "1": {
              "release_date": "2004-11-09",
              "status": "retired",
              "engine": "Gecko",
              "engine_version": "1.7"
            }
          }
        }
      }
    }
    

[Specifications](#specifications "Permalink to Specifications")
---------------------------------------------------------------

| Specification                                                 |
| ------------------------------------------------------------- |
| [Unknown specification                                        |
| \# sec-json-object](https://tc39.es/ecma262/#sec-json-object) |

[Browser compatibility](#browser_compatibility "Permalink to Browser compatibility")
------------------------------------------------------------------------------------


# Building Your Own Hooks – React

> A JavaScript library for building user interfaces

_Hooks_ are a new addition in React 16.8. They let you use state and other React features without writing a class.

Building your own Hooks lets you extract component logic into reusable functions.

When we were learning about [using the Effect Hook](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/hooks-effect.html#example-using-hooks-1), we saw this component from a chat application that displays a message indicating whether a friend is online or offline:
```js
    import React, { useState, useEffect } from 'react';
    
    function FriendStatus(props) {
      const [isOnline, setIsOnline] = useState(null);  useEffect(() => {    function handleStatusChange(status) {      setIsOnline(status.isOnline);    }    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);    return () => {      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);    };  });
      if (isOnline === null) {
        return 'Loading...';
      }
      return isOnline ? 'Online' : 'Offline';
    }
```
Now let’s say that our chat application also has a contact list, and we want to render names of online users with a green color. We could copy and paste similar logic above into our `FriendListItem` component but it wouldn’t be ideal:
```js
    import React, { useState, useEffect } from 'react';
    
    function FriendListItem(props) {
      const [isOnline, setIsOnline] = useState(null);  useEffect(() => {    function handleStatusChange(status) {      setIsOnline(status.isOnline);    }    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);    return () => {      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);    };  });
      return (
        <li style={{ color: isOnline ? 'green' : 'black' }}>
          {props.friend.name}
        </li>
      );
    }
```
Instead, we’d like to share this logic between `FriendStatus` and `FriendListItem`.

Traditionally in React, we’ve had two popular ways to share stateful logic between components: [render props](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/render-props.html) and [higher-order components](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/higher-order-components.html). We will now look at how Hooks solve many of the same problems without forcing you to add more components to the tree.

When we want to share logic between two JavaScript functions, we extract it to a third function. Both components and Hooks are functions, so this works for them too!

**A custom Hook is a JavaScript function whose name starts with ”`use`” and that may call other Hooks.** For example, `useFriendStatus` below is our first custom Hook:
```js
    import { useState, useEffect } from 'react';
    
    function useFriendStatus(friendID) {  const [isOnline, setIsOnline] = useState(null);
    
      useEffect(() => {
        function handleStatusChange(status) {
          setIsOnline(status.isOnline);
        }
    
        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
          ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
      });
    
      return isOnline;
    }
```
There’s nothing new inside of it — the logic is copied from the components above. Just like in a component, make sure to only call other Hooks unconditionally at the top level of your custom Hook.

Unlike a React component, a custom Hook doesn’t need to have a specific signature. We can decide what it takes as arguments, and what, if anything, it should return. In other words, it’s just like a normal function. Its name should always start with `use` so that you can tell at a glance that the [rules of Hooks](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/hooks-rules.html) apply to it.

The purpose of our `useFriendStatus` Hook is to subscribe us to a friend’s status. This is why it takes `friendID` as an argument, and returns whether this friend is online:
```js
    function useFriendStatus(friendID) {
      const [isOnline, setIsOnline] = useState(null);
    
      
    
      return isOnline;
    }
```
Now let’s see how we can use our custom Hook.

[](#using-a-custom-hook)Using a Custom Hook
-------------------------------------------

In the beginning, our stated goal was to remove the duplicated logic from the `FriendStatus` and `FriendListItem` components. Both of them want to know whether a friend is online.

Now that we’ve extracted this logic to a `useFriendStatus` hook, we can _just use it:_
```js
    function FriendStatus(props) {
      const isOnline = useFriendStatus(props.friend.id);
      if (isOnline === null) {
        return 'Loading...';
      }
      return isOnline ? 'Online' : 'Offline';
    }

    function FriendListItem(props) {
      const isOnline = useFriendStatus(props.friend.id);
      return (
        <li style={{ color: isOnline ? 'green' : 'black' }}>
          {props.friend.name}
        </li>
      );
    }
```
**Is this code equivalent to the original examples?** Yes, it works in exactly the same way. If you look closely, you’ll notice we didn’t make any changes to the behavior. All we did was to extract some common code between two functions into a separate function. **Custom Hooks are a convention that naturally follows from the design of Hooks, rather than a React feature.**

**Do I have to name my custom Hooks starting with “`use`”?** Please do. This convention is very important. Without it, we wouldn’t be able to automatically check for violations of [rules of Hooks](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/hooks-rules.html) because we couldn’t tell if a certain function contains calls to Hooks inside of it.

**Do two components using the same Hook share state?** No. Custom Hooks are a mechanism to reuse _stateful logic_ (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.

**How does a custom Hook get isolated state?** Each _call_ to a Hook gets isolated state. Because we call `useFriendStatus` directly, from React’s point of view our component just calls `useState` and `useEffect`. And as we [learned](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/hooks-state.html#tip-using-multiple-state-variables) [earlier](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns), we can call `useState` and `useEffect` many times in one component, and they will be completely independent.

### [](#tip-pass-information-between-hooks)Tip: Pass Information Between Hooks

Since Hooks are functions, we can pass information between them.

To illustrate this, we’ll use another component from our hypothetical chat example. This is a chat message recipient picker that displays whether the currently selected friend is online:
```js
    const friendList = [
      { id: 1, name: 'Phoebe' },
      { id: 2, name: 'Rachel' },
      { id: 3, name: 'Ross' },
    ];
    
    function ChatRecipientPicker() {
      const [recipientID, setRecipientID] = useState(1);  const isRecipientOnline = useFriendStatus(recipientID);
      return (
        <>
          <Circle color={isRecipientOnline ? 'green' : 'red'} />      <select
            value={recipientID}
            onChange={e => setRecipientID(Number(e.target.value))}
          >
            {friendList.map(friend => (
              <option key={friend.id} value={friend.id}>
                {friend.name}
              </option>
            ))}
          </select>
        </>
      );
    }
```
We keep the currently chosen friend ID in the `recipientID` state variable, and update it if the user chooses a different friend in the `<select>` picker.

Because the `useState` Hook call gives us the latest value of the `recipientID` state variable, we can pass it to our custom `useFriendStatus` Hook as an argument:
```js
      const [recipientID, setRecipientID] = useState(1);
      const isRecipientOnline = useFriendStatus(recipientID);
```
This lets us know whether the _currently selected_ friend is online. If we pick a different friend and update the `recipientID` state variable, our `useFriendStatus` Hook will unsubscribe from the previously selected friend, and subscribe to the status of the newly selected one.

[](#useyourimagination)`useYourImagination()`
---------------------------------------------

Custom Hooks offer the flexibility of sharing logic that wasn’t possible in React components before. You can write custom Hooks that cover a wide range of use cases like form handling, animation, declarative subscriptions, timers, and probably many more we haven’t considered. What’s more, you can build Hooks that are just as easy to use as React’s built-in features.

Try to resist adding abstraction too early. Now that function components can do more, it’s likely that the average function component in your codebase will become longer. This is normal — don’t feel like you _have to_ immediately split it into Hooks. But we also encourage you to start spotting cases where a custom Hook could hide complex logic behind a simple interface, or help untangle a messy component.

For example, maybe you have a complex component that contains a lot of local state that is managed in an ad-hoc way. `useState` doesn’t make centralizing the update logic any easier so you might prefer to write it as a [Redux](https://redux.js.org/) reducer:
```js
    function todosReducer(state, action) {
      switch (action.type) {
        case 'add':
          return [...state, {
            text: action.text,
            completed: false
          }];
        
        default:
          return state;
      }
    }
```
Reducers are very convenient to test in isolation, and scale to express complex update logic. You can further break them apart into smaller reducers if necessary. However, you might also enjoy the benefits of using React local state, or might not want to install another library.

So what if we could write a `useReducer` Hook that lets us manage the _local_ state of our component with a reducer? A simplified version of it might look like this:

```js
    function useReducer(reducer, initialState) {
      const [state, setState] = useState(initialState);
    
      function dispatch(action) {
        const nextState = reducer(state, action);
        setState(nextState);
      }
    
      return [state, dispatch];
    }

```
Now we could use it in our component, and let the reducer drive its state management:

```js
    function Todos() {
      const [todos, dispatch] = useReducer(todosReducer, []);
      function handleAddClick(text) {
        dispatch({ type: 'add', text });
      }
    
      
    }

```
The need to manage local state with a reducer in a complex component is common enough that we’ve built the `useReducer` Hook right into React. You’ll find it together with other built-in Hooks in the [Hooks API reference](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/hooks-reference.html).

# Compose React hooks like composing React components

> Why custom hooks are so powerful

Why custom hooks are so powerful
--------------------------------

![](https://miro.medium.com/max/2476/1*zC_n4m8fnaQe255fTX3GyA.png)

This short article shows code examples how [React Hooks](https://reactjs.org/docs/hooks-intro.html) are analogous to components in terms of composition. Let’s jump into the code:

Let’s use a minimalistic example. Here’s a component:

```js
const **Person** = ({ person }) => (  
  <div>  
    <div className="personFirstName">  
      <span>First Name:<span>  
      <span>{person.firstName}</span>  
    </div>  
    <div className="personLastName">  
      <span>Last Name:<span>  
      <span>{person.lastName}</span>  
    </div>  
  </div>  
);

```
Well, this component is a little bit big, so let’s split it into functions and compose them:

```js
const **FirstName** = ({ name }) => (  
  <div className="personFirstName">  
    <span>First Name:<span>  
    <span>{name}</span>  
  </div>  
);const **LastName** = ({ name }) => (  
  <div className="personLastName">  
    <span>Last Name:<span>  
    <span>{name}</span>  
  </div>  
);const **Person** = ({ person }) => (  
  <div>  
    <**FirstName** name={person.**firstName**} />  
    <**LastName** name={person.**lastName**} />  
  </div>  
);

```
Now, it looks organized. Why did we do this? Because, now we can use the `FirstName` component in other components. In short, reusability.

What about React Hooks? Let’s suppose we have `usePerson` hook, which returns the `Person` object. It’s not important how it’s implemented, but for example, we can assume it’s with `useContext` as a simple concrete case.

```js
const **Person** = () => {  
  const person = **usePerson**();  
  const firstName = person.firstName;  
  const lastName = person.lastName;  
  return <div>{firstName}{' '}{lastName}</div>  
};

```
This is over-simplified, but let us split it into functions and compose them.

```js
const **useFirstName** = () => {  
  const person = **usePerson**();  
  return person.firstName;  
};const **useLastName** = () => {  
  const person = **usePerson**();  
  return person.lastName;  
};const **Person** = () => {  
  const firstName = **useFirstName**();  
  const lastName = **useLastName**();  
  return <div>{firstName}{' '}{lastName}</div>;  
};

```
I hope you get the idea. Now, you can reuse `useFirstName` hook in other components.

Composition matters. A component can be built with other components, so can a hook be built with other Hooks.


# Learn Stateful and Stateless components in ReactJS - CronJ

> Have you ever encountered the question of what stateful components are? What  stateless components are? When should I make a component stateful or stateless?

Have you ever encountered the question of what stateful components are? What  stateless components are? When should I make a component stateful or stateless?

If so, don’t worry, you’ve come to the right place. So, let’s first try to understand what state and components are before we talk about stateful vs. stateless?

**State**
---------

A State is an object inside the constructor method of a class which is a must in the stateful components. It is used for internal communication inside a component. It allows you to create components that are interactive and reusable. It is mutable and can only be changed by using setState() method.

**Simple Example of Stateful Component which has two properties.**
```js
    import React, { Component } from 'react';
    
    class StateExample extends Component {
    
       constructor(){
    
           super();
    
           this.state={
    
               first_name: '',
    
               last_name: ''
    
           }
    
       }
    
       render(){
    
          <div>
    
    <p>State Component </p>
    
    </div>
    
       }
    
    }
    export default StateExample;
 ```   

**Components**
--------------

A React application is divided into smaller molecules, and each [molecule represents a component](https://www.cronj.com/blog/react-js-tutorial/topics/react-component/). In other words, a component is the basic building of a React application. It can be either a class component or a functional component.

React components are independent and reusable and contains JSX(JavaScript XML Syntax) which a combination of JS + HTML. It may take props as the parameter and returns a Document Object Model(DOM) element that describes how the User Interface(UI) should appear.

**Class Component(Stateful)**
```js
    import React, { Component } from 'react';
    
    class StateExample extends Component {
    
       constructor(){
    
           super();
    
           this.state={
    
               first_name: 'Shruti',
    
               last_name: 'Priya'
    
           }
    
       }
    
       render(){
    
           return (
    
               <div>
    
        <p> Class Component </p>
    
                   <p>{this.state.first_name}</p>
    
                   <p>{this.state.last_name}</p>
    
               </div>
    
           )
    
       }
    
    }
    export default StateExample;
```
**Functional Component(Stateless)**
```js
    import React from 'react';
    
    function Example(props) {
    
        return(
    
            <div>
    
            <p>{props.first_name}</p>
    
            <p>{props.last_name}</p>
    
            </div>
    
        )
    
    }
    export default Example;
```
### **Stateful Components**

Stateful components are those [components](https://www.cronj.com/blog/difference-container-component-react-js/) which have a state. The state gets initialized in the constructor. It stores information about the component’s state change in memory. It may get changed depending upon the action of the component or child components.

### **Stateless Components**

Stateless components are those components which don’t have any state at all, which means you can’t use _this.setState_ inside these components. It is like a normal function with no render method. It has no lifecycle, so it is not possible to use lifecycle methods such as _componentDidMount_ and other hooks. When react renders our stateless component, all that it needs to do is just call the stateless component and pass down the props.

### **Stateful vs. Stateless**

A stateless component can render props, whereas a stateful component can render both props and state. A significant thing to note here is to comprehend the syntax distinction. In stateless components, the props are displayed like _{props.name}_ but in stateful components, the props and state are rendered like _{this.props.name}_ and _{this.state.name}_ respectively. A stateless component renders output which depends upon props value, but a stateful component render depends upon the value of the state. A functional component is always a stateless component, but the class component can be stateless or stateful.

There are many distinct names to stateful and stateless components.

– Container components vs Presentational components

– Smart components vs Dumb components

I’m sure you guys must have guessed by just looking at the names which are stateful and stateless. Haven’t you?

**State and Props used in stateful component**
```js
    import React, { Component } from 'react';
    
    class StateAndProps extends Component {
    
       constructor(props){
    
           super(props);
    
           this.state={
    
           value: '50'
    
           }
    
       }
    
       render(){
    
          return (
    
               <div>
    
                   <p>{this.state.value}</p>
    
                   <p>{this.props.value}</p>
    
                   </div>
    
           )
    
       }
    
    }
    export default StateAndProps;
```
**When should I make a component stateful or stateless?**
---------------------------------------------------------

It’s pretty straightforward that you should make your component stateful whenever you want to have a dynamic output (means that the output will change whenever the state changes), and you want to share the properties of parent component with the children components. On the other side, if there is no state necessity, you should make the component stateless.

### **Conclusion**

Stateless components are more elegant and usually are the right choice for building the presentational components because they are just functions, you won’t find it challenging to write and understand them, and moreover, they are very straightforward to test.

There is no need for _‘this’_ keyword that has always been a significant cause of confusion. Stateful components are difficult to test. Moreover, it tends to combine logic and presentation together in one single class, which is again a wrong choice for the separation issues.


# Software Design - Separation Of Concerns - with examples

> Spring Boot Tutorials. Hands-on examples. - Basics of Spring Boot. Covers Spring Boot Starter Projects, Spring Initializr, Creating REST Services, Unit and Integration tests, Profiles, Spring Boot Data JPA, Actuator and Security

[![Image](https://www.springboottutorial.com/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://links.in28minutes.com/in28minutes-Microservices) [![Image](https://www.springboottutorial.com/images/Course-gcp-aws.png "Google Cloud Certification")](https://www.udemy.com/course/google-cloud-platform-for-aws-professionals/)

Software architects and programmers love having Separation of Concerns. What is it? Why is it important? Let’s get started.

### You will learn

*   What is Separation Of Concerns?
*   What are common examples of implementing Separation Of Concerns in software?

Free Courses - Learn in 10 Steps
--------------------------------

*   [FREE 5 DAY CHALLENGE - Learn Spring and Spring Boot](https://links.in28minutes.com/SBT-Page-Top-LearningChallenge-SpringBoot)
*   [Learn Spring Boot in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-springboot)
*   [Learn Docker in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-docker)
*   [Learn Kubernetes in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-k8s)
*   [Learn AWS in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-aws-beanstalk)

### Software Design Principles

This is the second article in a series of articles on important Software Design Principles:

*   [1 - Introduction to Four Principles Of Simple Design](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/four-principles-of-simple-design)
*   [2 - Software Design - Separation Of Concerns - with examples](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/software-design-seperation-of-concerns-with-examples)
*   [3 - Object Oriented Software Design - Solid Principles - with examples](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/software-design-solid-principles)
*   [4 - Software Design - Single Responsibility Principle - with examples](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/software-design-single-responsibility-principle)
*   [5 - Software Design - Open Closed Principle - with examples](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/software-design-open-closed-principle)
*   [6 - Software Design - What is Dependency Inversion Principle?](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/software-design-dependency-inversion-principle)

### What Is Separation Of Concerns?

Separation Of Concerns is an important design and architectural principle.

> Every element of a software application - a component, a layer,a package,a class or a method should have one concern and implement it well.

All methods with similar concerns will grouped into a class.

All classes with similar concerns will be grouped into packages.

So on and so forth.

### Separation Of Concerns In Action

#### Layered Architecture

Organizing an application into separate layers is one way of separating out concerns.

For example, the following is the typical architecture of a web application:

![image info](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/Capture-039-02.png)

Here are some of the important responsibilities of each of these layers

*   The Web layer only bothers about how to present data to its users
*   The Business layer focuses on implementing the core application logic, correctly and efficiently
*   The Data layer takes responsibility of talking to the data store.

You can see that each layer has a concern and implements it well.

#### Organizing Microservices

Another good example of Separation Of Concerns is how you split your microservices. Have a look at the diagram below:

![image info](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/Capture-039-03.png)

All the microservices shown are part of a movie application. But each one of them has its own independent concern.

#### Identifying Common Components

Separation of concerns is also an important factor in building common application and infrastructure components.

Since a large part of the functionality of microservices is common to all of them, it makes sense to extract out the common components. Here is an example:

![image info](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/Capture-039-04.png)

All microservices need features such as security and logging. By identifying common components in your service such as Security and Logging, and providing well defined interfaces with each microservice, the implementation of the microservices gets simpler.

The same is the case with common infrastructure components. Any microservice can interact with them and use their functionality.

A few examples of Separation of Concern in infrastructure components

*   Naming Server - Microservice3 can locate the identity of Microservice2.
*   API Gateway - Centralized access to all microservices. You can implement cross cutting microservice concerns here.
*   Distributed Tracing and Centralized Logging - You can trace microservices and find out what’s happening behind the scenes.

Do check out our video on this:

[![image info](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/Capture-039-01.png)](https://www.youtube.com/watch?v=GRTQ896UWaI)

### Summary

In this article, we looked at separation of concerns, and several examples of it in action - such as in a layered architecture, in the way microservices are split and organized, and in the way common components and infrastructure are identified and extracted out in a microservices architecture.

---




# Computed Property Names in JavaScript - ui.dev

> In this post you'll learn how to have an expression be computed as a property name on an object in JavaScript using ES6's (ES2015) Computed Property Names feature.

ES6’s “Computed Property Names” feature allows you to have an expression (a piece of code that results in a single value like a variable or function invocation) be computed as a property name on an object.

For example, say you wanted to create a function that took in two arguments (`key`, `value`) and returned an object using those arguments. Before Computed Property Names, because the property name on the object was a variable (`key`), you’d have to create the object first, then use bracket notation to assign that property to the value.
```js
    function objectify (key, value) {
      let obj = {}
      obj[key] = value
      return obj
    }
    
    objectify('name', 'Tyler') 
```
However, now with Computed Property Names, you can use object literal notation to assign the expression as a property on the object without having to create it first. So the code above can now be rewritten like this.
```js
    function objectify (key, value) {
      return {
        [key]: value
      }
    }
    
    objectify('name', 'Tyler') 
```
Where `key` can be any expression as long as it’s wrapped in brackets, `[]`.

* * *

### One more thing

Hear me out - most JavaScript newsletters suck. That's why we made [Bytes](https://bytes.dev/?s=ui.dev).

The goal was to create a JavaScript newsletter that was both insightful and entertaining. Over 80,000 subscribers later and well, [reviews don't lie](https://twitter.com/search?q=%22ui.dev%22%20%22bytes%22&src=typed_query)

I pinky promise you'll love it, but [here's a recent issue](https://bytes.dev/sample?s=ui.dev) so you can decide for yourself.

Delivered to over 80,000 developers every Monday

