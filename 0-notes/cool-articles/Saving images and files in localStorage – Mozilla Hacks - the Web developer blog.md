# Saving images and files in localStorage – Mozilla Hacks - the Web developer blog

> As you might know, localStorage is quite powerful when it comes to quickly storing information in the user's web browser, and it has also been around in all web browsers ...

As you might know, [localStorage](https://developer.mozilla.org/en/DOM/Storage) is quite powerful when it comes to quickly storing information in the user’s web browser, and it has also been around in all web browsers a long time. But how do we store files in it?

_Please also make sure to read [Storing images and files in IndexedDB](http://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/)_.

## Using JSON for powerful control

Let’s start with some basic information about localStorage. When storing information in localStorage, you use key/value pairs, like this:

`localStorage.setItem("name", "Robert");`

And to read it out, you just get the value of that key:

`localStorage.getItem("name");`

That’s all good and well, and being able to save at least 5 MB, you have a lot of options. But since localStorage is just string-based, saving a long string with no form of structure isn’t optimal.  
Therefore, we can utilize the native JSON support in web browsers to turn JavaScript objects to string for saving, and back into objects when reading:

<table data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-json-localstorage-js-L1" data-line-number="1"></td><td id="file-json-localstorage-js-LC1"><span>var</span> <span>cast</span> <span>=</span> <span>{</span></td></tr><tr><td id="file-json-localstorage-js-L2" data-line-number="2"></td><td id="file-json-localstorage-js-LC2"><span>"Adm. Adama"</span> : <span>"Edward James Olmos"</span><span>,</span></td></tr><tr><td id="file-json-localstorage-js-L3" data-line-number="3"></td><td id="file-json-localstorage-js-LC3"><span>"President Roslin"</span> : <span>"Mary McDonnell"</span><span>,</span></td></tr><tr><td id="file-json-localstorage-js-L4" data-line-number="4"></td><td id="file-json-localstorage-js-LC4"><span>"Captain Adama"</span> : <span>"Jamie Bamber"</span><span>,</span></td></tr><tr><td id="file-json-localstorage-js-L5" data-line-number="5"></td><td id="file-json-localstorage-js-LC5"><span>"Gaius Baltar"</span> : <span>"James Callis"</span><span>,</span></td></tr><tr><td id="file-json-localstorage-js-L6" data-line-number="6"></td><td id="file-json-localstorage-js-LC6"><span>"Number Six"</span> : <span>"Tricia Helfer"</span><span>,</span></td></tr><tr><td id="file-json-localstorage-js-L7" data-line-number="7"></td><td id="file-json-localstorage-js-LC7"><span>"Kara Thrace"</span> : <span>" Katee Sackhoff"</span></td></tr><tr><td id="file-json-localstorage-js-L8" data-line-number="8"></td><td id="file-json-localstorage-js-LC8"><span>}</span><span>;</span></td></tr><tr><td id="file-json-localstorage-js-L9" data-line-number="9"></td><td id="file-json-localstorage-js-LC9"></td></tr><tr><td id="file-json-localstorage-js-L10" data-line-number="10"></td><td id="file-json-localstorage-js-LC10"><span>// Stores the JavaScript object as a string</span></td></tr><tr><td id="file-json-localstorage-js-L11" data-line-number="11"></td><td id="file-json-localstorage-js-LC11"><span>localStorage</span><span>.</span><span>setItem</span><span>(</span><span>"cast"</span><span>,</span> <span>JSON</span><span>.</span><span>stringify</span><span>(</span><span>cast</span><span>)</span><span>)</span><span>;</span></td></tr><tr><td id="file-json-localstorage-js-L12" data-line-number="12"></td><td id="file-json-localstorage-js-LC12"></td></tr><tr><td id="file-json-localstorage-js-L13" data-line-number="13"></td><td id="file-json-localstorage-js-LC13"><span>// Parses the saved string into a JavaScript object again</span></td></tr><tr><td id="file-json-localstorage-js-L14" data-line-number="14"></td><td id="file-json-localstorage-js-LC14"><span>JSON</span><span>.</span><span>parse</span><span>(</span><span>localStorage</span><span>.</span><span>getItem</span><span>(</span><span>"cast"</span><span>)</span><span>)</span><span>;</span></td></tr></tbody></table>

---

[Source](https://hacks.mozilla.org/2012/02/saving-images-and-files-in-localstorage/)
