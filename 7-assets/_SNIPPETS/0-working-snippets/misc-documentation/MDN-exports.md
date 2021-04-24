# export

> The export statement is used when creating JavaScript modules to export live bindings to functions, objects, or primitive values from the module so they can be used by other programs with the import statement. Bindings that are exported can still be modified locally; when imported, although they can only be read by the importing module the value updates whenever it is updated by the exporting module.

The **`export`** statement is used when creating JavaScript modules to export live bindings to functions, objects, or primitive values from the module so they can be used by other programs with the [`import`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Statements/import) statement. Bindings that are exported can still be modified locally; when imported, although they can only be read by the importing module the value updates whenever it is updated by the exporting module.

Exported modules are in [strict mode](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Strict_mode) whether you declare them as such or not. The export statement cannot be used in embedded scripts.

Syntax
------

There are two types of exports:

1.  Named Exports (Zero or more exports per module)
2.  Default Exports (One per module)

// Exporting individual features
export let name1, name2, …, nameN; // also var, const
export let name1 = …, name2 = …, …, nameN; // also var, const
export function functionName(){...}
export class ClassName {...}

// Export list
export { name1, name2, …, nameN };

// Renaming exports
export { variable1 as name1, variable2 as name2, …, nameN };

// Exporting destructured assignments with renaming
export const { name1, name2: bar } = o;

// Default exports
export default _expression_;
export default function (…) { … } // also class, function\*
export default function name1(…) { … } // also class, function\*
export { name1 as default, … };

// Aggregating modules
export \* from …; // does not set the default export
export \* as name1 from …; // Draft ECMAScript® 2O21
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;

`nameN`

Identifier to be exported (so that it can be imported via [`import`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Statements/import) in another script).

Description
-----------

There are two different types of export, **named** and **default**. You can have multiple named exports per module but only one default export. Each type corresponds to one of the above syntax:

Named exports:

    
    export { myFunction, myVariable }; 
    
    
    
    export let myVariable = Math.sqrt(2);
    export function myFunction() { ... };
    

Default exports:

    
    export { myFunction as default };
    
    
    export default function () { ... } 
    export default class { .. }
    
    
    

Named exports are useful to export several values. During the import, it is mandatory to use the same name of the corresponding object.

But a default export can be imported with any name for example:

    
    let k; export default k = 12;
    

    
    import m from './test'; 
    console.log(m);        
    

You can also rename named exports to avoid naming conflicts:

export { myFunction as function1, myVariable as variable };

### Re-exporting / Aggregating

It is also possible to "import/export" from different modules in a parent module so that they are available to import from that module. In other words, one can create a single module concentrating various exports from various modules.

This can be achieved with the "export from" syntax:

    export { default as function1,
             function2 } from 'bar.js';
    

Which is comparable to a combination of import and export:

    import { default as function1,
             function2 } from 'bar.js';
    export { function1, function2 };
    

But where `function1` and `function2` do not become available inside the current module.

**Note:** The following is syntactically invalid despite its import equivalent:

    import DefaultExport from 'bar.js'; 
    

    export DefaultExport from 'bar.js'; 

The correct way of doing this is to rename the export:

    export { default as DefaultExport } from 'bar.js';
    

Examples
--------

### Using named exports

In a module `my-module.js`, we could include the following code:

    
    function cube(x) {
      return x * x * x;
    }
    
    const foo = Math.PI + Math.SQRT2;
    
    var graph = {
      options: {
          color:'white',
          thickness:'2px'
      },
      draw: function() {
          console.log('From graph draw function');
      }
    }
    
    export { cube, foo, graph };
    

Then in the top-level module included in your HTML page, we could have:

    import { cube, foo, graph } from './my-module.js';
    
    graph.options = {
        color:'blue',
        thickness:'3px'
    };
     
    graph.draw();
    console.log(cube(3)); 
    console.log(foo);    

It is important to note the following:

*   You need to include this script in your HTML with a [`<script>`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTML/Element/script "The HTML <script> element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code.") element of type="module", so that it gets recognised as a module and dealt with appropriately.
*   You can't run JS modules via a `file://` URL — you'll get [CORS](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/CORS) errors. You need to run it via an HTTP server.

### Using the default export

If we want to export a single value or to have a fallback value for your module, you could use a default export:

    
    
    export default function cube(x) {
      return x * x * x;
    }
    

Then, in another script, it is straightforward to import the default export:

    import cube from './my-module.js';
    console.log(cube(3)); 
    

### Using export from

Let's take an example where we have the following hierarchy:

*   `childModule1.js`: exporting `myFunction` and `myVariable`
*   `childModule2.js`: exporting `myClass`
*   `parentModule.js`: acting as an aggregator (and doing nothing else)
*   top level module: consuming the exports of `parentModule.js`

This is what it would look like using code snippets:

    
    let myFunction = ...; 
    let myVariable = ...; 
    export {myFunction, myVariable};
    

    
    let myClass = ...; 
    export myClass;
    

    
    
    
    export { myFunction, myVariable } from 'childModule1.js';
    export { myClass } from 'childModule2.js';
    

    
    
    
    import { myFunction, myVariable, myClass } from 'parentModule.js'

Specifications
--------------

| Specification |
| --- |
| [ECMAScript (ECMA-262)  
The definition of 'Exports' in that specification.](https://tc39.es/ecma262/#sec-exports) |

Browser compatibility
---------------------

The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out [https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) and send us a pull request.

[Update compatibility data on GitHub](https://github.com/mdn/browser-compat-data)

|  | Desktop | Mobile | Server |
| --- | --- | --- | --- |
|  | Chrome | Edge | Firefox | Internet Explorer | Opera | Safari | Android webview | Chrome for Android | Firefox for Android | Opera for Android | Safari on iOS | Samsung Internet | Node.js |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `export` | Chrome Full support 61 | Edge Full support 16
Full support 16

Full support 15

Disabled

Disabled From version 15: this feature is behind the `Experimental JavaScript Features` preference.





 | Firefox Full support 60

Full support 60

No support 54 — 60

Disabled

Disabled From version 54 until version 60 (exclusive): this feature is behind the `dom.moduleScripts.enabled` preference. To change preferences in Firefox, visit about:config.





 | IE No support No | Opera Full support 48 | Safari Full support 10.1 | WebView Android No support No | Chrome Android Full support 61 | Firefox Android Full support 60

Full support 60

No support 54 — 60

Disabled

Disabled From version 54 until version 60 (exclusive): this feature is behind the `dom.moduleScripts.enabled` preference. To change preferences in Firefox, visit about:config.





 | Opera Android Full support 45 | Safari iOS Full support 10.3 | Samsung Internet Android Full support 8.0 | nodejs Full support 13.2.0

Notes

Full support 13.2.0

Notes

Notes Modules must either have a filename ending in `.mjs`, or the nearest parent `package.json` file must contain `"type": "module"`. See Node's [ECMAScript Modules documentation](https://nodejs.org/api/esm.html#esm_enabling) for more details.

Full support 12.0.0

Notes Disabled

Notes Modules must either have a filename ending in `.mjs`, or the nearest parent `package.json` file must contain `"type": "module"`. See Node's [ECMAScript Modules documentation](https://nodejs.org/docs/latest-v12.x/api/esm.html#esm_enabling) for more details.

Disabled From version 12.0.0: this feature is behind the `--experimental-modules` runtime flag.

Full support 8.5.0

Notes Disabled

Notes Module filenames must end with `.mjs`, not .js. See Node's [ECMAScript Modules documentation](https://nodejs.org/docs/latest-v8.x/api/esm.html#esm_enabling) for more details.

Disabled From version 8.5.0: this feature is behind the `--experimental-modules` runtime flag.





 |
| [`default` keyword with `export`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Statements/default) | Chrome Full support 61 | Edge Full support 16

Full support 16

Full support 15

Disabled

Disabled From version 15: this feature is behind the `Experimental JavaScript Features` preference.





 | Firefox Full support 60

Full support 60

No support 54 — 60

Disabled

Disabled From version 54 until version 60 (exclusive): this feature is behind the `dom.moduleScripts.enabled` preference. To change preferences in Firefox, visit about:config.





 | IE No support No | Opera Full support 48 | Safari Full support 10.1 | WebView Android No support No | Chrome Android Full support 61 | Firefox Android Full support 60

Full support 60

No support 54 — 60

Disabled

Disabled From version 54 until version 60 (exclusive): this feature is behind the `dom.moduleScripts.enabled` preference. To change preferences in Firefox, visit about:config.





 | Opera Android Full support 45 | Safari iOS Full support 10.3 | Samsung Internet Android Full support 8.0 | nodejs Full support 13.2.0

Notes

Full support 13.2.0

Notes

Notes Modules must either have a filename ending in `.mjs`, or the nearest parent `package.json` file must contain `"type": "module"`. See Node's [ECMAScript Modules documentation](https://nodejs.org/api/esm.html#esm_enabling) for more details.

Full support 12.0.0

Notes Disabled

Notes Modules must either have a filename ending in `.mjs`, or the nearest parent `package.json` file must contain `"type": "module"`. See Node's [ECMAScript Modules documentation](https://nodejs.org/docs/latest-v12.x/api/esm.html#esm_enabling) for more details.

Disabled From version 12.0.0: this feature is behind the `--experimental-modules` runtime flag.

Full support 8.5.0

Notes Disabled

Notes Module filenames must end with `.mjs`, not .js. See Node's [ECMAScript Modules documentation](https://nodejs.org/docs/latest-v8.x/api/esm.html#esm_enabling) for more details.

Disabled From version 8.5.0: this feature is behind the `--experimental-modules` runtime flag.





 |
| `export * as namespace` | Chrome Full support 72 | Edge Full support 79 | Firefox Full support 80 | IE No support No | Opera Full support 60 | Safari No support No | WebView Android No support No | Chrome Android Full support 72 | Firefox Android No support No | Opera Android Full support 51 | Safari iOS No support No | Samsung Internet Android Full support 11.0 | nodejs Full support 12.0.0 |

#### What happens next?

Our team will review your report. Once we verify the information you have supplied we will update this browser compatability table accordingly.

#### Can I keep track of my report?

You can join the GitHub repository to see updates and commits for this table data:

[https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data)

Our goal is to provide accurate, real values for all our compatibility data tables. Notifying MDN of inaccurate data or supplying new data pushes us further towards our goal of providing 100% real values to the developer community.  
Thank you for helping.

Please select the browser or browsers which are affected.

Briefly outline the issue you are highlighting. Minimum 10 and maximum 1,000 characters.

Browser documentation and release notes are good supporting items to accompany your message. A demo hosted on services like Codepen or JSBin are perfect for providing real examples of your findings.

Connection error:Sorry, we can’t seem to reach the server. We are working to fix the problem. Please try again later.

### Legend

Full support 

Full support

No support 

No support

See implementation notes.

See implementation notes.

User must explicitly enable this feature.

User must explicitly enable this feature.

See also
--------

*   [`import`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Statements/import)
*   [JavaScript modules](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Modules) guide
*   [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks blog post by Jason Orendorff
*   [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), Hacks blog post by Lin Clark
*   [Axel Rauschmayer's book: "Exploring JS: Modules"](http://exploringjs.com/es6/ch_modules.html)


[Source](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)