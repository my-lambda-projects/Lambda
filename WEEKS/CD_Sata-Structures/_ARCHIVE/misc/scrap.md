### Arrays

```js
list = [a, b, c, d, e];
```

{: .-setup}

```js
list[1]; // → b
list.indexOf(b); // → 1
```

### Subsets

#### Immutable

```js
list.slice(0, 1); // → [a        ]
list.slice(1); // → [  b,c,d,e]
list.slice(1, 2); // → [  b      ]
```

#### Mutative

```js
re = list.splice(1); // re = [b,c,d,e]  list == [a]
re = list.splice(1, 2); // re = [b,c]      list == [a,d,e]
```

### Adding items

#### Mutative

```js
list.push(X); // list == [_,_,_,_,_,X]
list.unshift(X); // list == [X,_,_,_,_,_]
list.splice(2, 0, X); // list == [_,_,X,_,_,_]
```

#### Immutable

```js
list.concat([X, Y]); // → [_,_,_,_,_,X,Y]
```

### Inserting

```js
// after -- [_,_,REF,NEW,_,_]
list.splice(list.indexOf(REF)+1, 0, NEW))
```

```js
// before -- [_,_,NEW,REF,_,_]
list.splice(list.indexOf(REF), 0, NEW))
```

### Replace items

```js
list.splice(2, 1, X); // list == [a,b,X,d,e]
```

### Removing items

```js
list.pop(); // → e    list == [a,b,c,d]
list.shift(); // → a    list == [b,c,d,e]
list.splice(2, 1); // → [c]  list == [a,b,d,e]
```

### Iterables

```js
.filter(n => ...) => array
```

```js
.find(n => ...)  // es6
.findIndex(...)  // es6
```

```js
.every(n => ...) => Boolean // ie9+
.some(n => ..) => Boolean   // ie9+
```

```js
.map(n => ...)   // ie9+
.reduce((total, n) => total) // ie9+
.reduceRight(...)
```

## Date

{: .-left-reference}

### Constructor

```js
// Now
new Date();
```

```js
// ms since epoch
new Date(1419785527580);
```

```js
// Date format
new Date('May 17, 1995 03:24:00');
```

```js
// ISO date format
new Date('2013-03-01T01:10:00');
```

```js
new Date(2014, 2, 1, 13, 0, 59, 0);
```

### Constructor

| `new Date(` | `2014,` | `2,` | `1,` | `13,` | `0,` | `59,` | `0)` | | Date | Year | Month | Day | Hour | Min | Sec | Milli | {: .-css-breakdown}

Months are zero-indexed (eg, January is `0`).

### Conversion

| Method                   | Result                                      |
| ------------------------ | ------------------------------------------- |
| `d.toString()`           | `"Mon Dec 29 2014 00:58:28 GMT+0800 (PHT)"` |
| `d.toTimeString()`       | `"00:58:46 GMT+0800 (PHT)"`                 |
| `d.toUTCString()`        | `"Sun, 28 Dec 2014 16:58:59 GMT"`           |
| ---                      | ---                                         |
| `d.toDateString()`       | `"Thu Jan 10 2013"`                         |
| `d.toISOString()`        | `"2013-01-09T16:00:00.000Z"`                |
| `d.toLocaleString()`     | `"12/29/2014, 12:57:31 AM"`                 |
| `d.toLocaleTimeString()` | `"12:57:31 AM"`                             |
| ---                      | ---                                         |
| `d.getTime()`            | `1419785527580`                             |

## Accessing

### Getters

| Method                 | Result            |
| ---------------------- | ----------------- |
| `.getDate()`           | `1..31`           |
| `.getDay()`            | `0..6` (sun..sat) |
| `.getFullYear()`       | `2014`            |
| `.getMonth()`          | `0..11`           |
| ---                    | ---               |
| `.getHours()`          |                   |
| `.getMinutes()`        |                   |
| `.getSeconds()`        |                   |
| `.getMilliseconds()`   |                   |
| ---                    | ---               |
| `.getTime()`           | ms since epoch    |
| `.getTimezoneOffset()` |                   |

UTC versions are also available (eg, `.getUTCDate()`, `.getUTCDay()`, etc).

### Setters

| Method                       | Result |
| ---------------------------- | ------ |
| `.setDate` _(val)_           |        |
| `.setDay` _(val)_            |        |
| `.setFullYear` _(val)_       |        |
| `.setMonth` _(val)_          |        |
| ---                          | ---    |
| `.setHours` _(val)_          |        |
| `.setMinutes` _(val)_        |        |
| `.setSeconds` _(val)_        |        |
| `.setMilliseconds` _(val)_   |        |
| ---                          | ---    |
| `.setTime` _(val)_           |        |
| `.setTimezoneOffset` _(val)_ |        |

See the getters list.

# Building Interactive Websites with JavaScript: DOM Events with JavaScript Cheatsheet

> When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.

                        More information

### Privacy Preference Center

When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer. [More information](https://cookiepedia.co.uk/giving-consent-to-cookies)

### Manage Consent Preferences

Always Active

Strictly Necessary Cookies

These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.

Functional Cookies

These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.

Targeting Cookies

These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.

Performance Cookies

These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.

### Fetch

{: .-prime}

```js
fetch('/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => ...)
```

{: data-line="4"}

### Response

```js
fetch('/data.json').then((res) => {
  res.text(); // response body (=> Promise)
  res.json(); // parse via JSON (=> Promise)
  res.status; //=> 200
  res.statusText; //=> 'OK'
  res.redirected; //=> false
  res.ok; //=> true
  res.url; //=> 'http://site.com/data.json'
  res.type; //=> 'basic'
  //   ('cors' 'default' 'error'
  //    'opaque' 'opaqueredirect')

  res.headers.get('Content-Type');
});
```

### Request options

```js
fetch('/data.json', {
  method: 'post',
  body: new FormData(form), // post body
  body: JSON.stringify(...),

  headers: {
    'Accept': 'application/json'
  },

  credentials: 'same-origin', // send cookies
  credentials: 'include',     // send cookies, even in CORS

})
```

### Catching errors

```js
fetch('/data.json').then(checkStatus);
```

```js
function checkStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    let err = new Error(res.statusText);
    err.response = res;
    throw err;
  }
}
```

Non-2xx responses are still successful requests. Use another function to turn them to errors.

### Using with node.js

```js
const fetch = require('isomorphic-fetch');
```

See: [isomorphic-fetch](https://npmjs.com/package/isomorphic-fetch) _(npmjs.com)_

## References

{: .-one-column}

- <https://fetch.spec.whatwg.org/>
- <https://www.npmjs.com/package/whatwg-fetch>
