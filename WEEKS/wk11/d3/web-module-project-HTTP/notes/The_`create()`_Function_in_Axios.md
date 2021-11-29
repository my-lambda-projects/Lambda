Sep 18, 2019

The [`axios.create()` function](https://github.com/axios/axios#creating-an-instance) creates a new Axios _instance_. When you `require('axios')`, you get back an the default Axios instance. The reason why you would create an instance is to set custom defaults for your application.

For example, suppose you wanted to add a [timeout to all your Axios requests](https://medium.com/@masnun/handling-timeout-in-axios-479269d83c68). You could create a new Axios instance with a default timeout of 1000 milliseconds:

```
const axios = require('axios');
const instance = axios.create({ timeout: 1000 });



axios.constructor === instance.constructor;



await instance.get('https://httpbin.org/get?hello=world');
```

Another common use case is [setting the `baseURL` for all requests](https://github.com/axios/axios#axioscreateconfig). This is convenient so you don't have to type out the absolute URL every time.

```
const axios = require('axios').create({
  baseURL: 'https://httpbin.org'
});


const res = await axios.get('/get?hello=world');
```

---

## More Axios Tutorials

- [How to Use JSON with Axios](https://masteringjs.io/tutorials/axios/json)
- [How to Use the User-Agent Header in Axios](https://masteringjs.io/tutorials/axios/user-agent)
- [Axios Multipart Form Data](https://masteringjs.io/tutorials/axios/axios-multi-form-data)
- [How to use Axios' create() Method with POST Requests](https://masteringjs.io/tutorials/axios/create-post)
- [Axios Response \`data\` Property](https://masteringjs.io/tutorials/axios/data)
- [Calling Axios as a Function](https://masteringjs.io/tutorials/axios/call)
- [How to Use axios.all() to Make Concurrent HTTP Requests](https://masteringjs.io/tutorials/axios/all)
