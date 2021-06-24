# PUT Requests with Axios

> Sending an HTTP PUT request with Axios is easy. Here's what you need to know.

Apr 3, 2020

The easiest way to make a PUT request with [Axios](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/axios) is the [`axios.put()` function](https://github.com/axios/axios#example). The first parameter to `axios.put()` is the URL, and the 2nd is the [HTTP request body](https://en.wikipedia.org/wiki/HTTP_message_body).

    const res = await axios.put('https://httpbin.org/put', { hello: 'world' });
    
    res.data.json; 

By default, if the 2nd parameter to `axios.put()` is an object, Axios serializes the object to JSON using [the `JSON.stringify()` function](http://thecodebarbarian.com/the-80-20-guide-to-json-stringify-in-javascript). If the 2nd parameter is an object, Axios also sets the [`content-type` header to `application/json`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type), so most web frameworks, like [Express](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/tutorials/express/json), will be able to automatically convert the request body into a JavaScript object for you.

    const res = await axios.put('https://httpbin.org/put', { hello: 'world' });
    
    res.data.headers['Content-Type']; 

Form-Encoded Request Bodies
---------------------------

If you pass a string as the `body` parameter to `axios.put()`, Axios will set the `content-type` header to [`application/x-www-form-urlencoded`](https://dev.to/sidthesloth92/understanding-html-form-encoding-url-encoded-and-multipart-forms-3lpa). That means the request body should be a bunch of key/value pairs separated by `&`, like `key1=value1&key2=value2`.

    const res = await axios.put('https://httpbin.org/put', 'hello=world');
    
    res.data.form; 
    res.data.headers['Content-Type']; 

* * *

More Axios Tutorials
--------------------

*   [How to Use JSON with Axios](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/tutorials/axios/json)
*   [How to Use the User-Agent Header in Axios](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/tutorials/axios/user-agent)
*   [Axios Multipart Form Data](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/tutorials/axios/axios-multi-form-data)
*   [How to use Axios' create() Method with POST Requests](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/tutorials/axios/create-post)
*   [Axios Response \`data\` Property](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/tutorials/axios/data)
*   [Calling Axios as a Function](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/tutorials/axios/call)
*   [How to Use axios.all() to Make Concurrent HTTP Requests](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/tutorials/axios/all)


[Source](https://masteringjs.io/tutorials/axios/put)
