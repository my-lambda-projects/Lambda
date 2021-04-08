(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.I=b.prototype}
function pa(){this.m=!1;this.l=null;this.i=void 0;this.h=1;this.A=this.j=0;this.o=null}
function qa(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
pa.prototype.u=function(a){this.i=a};
function ra(a,b){a.o={va:b,Sa:!0};a.h=a.j||a.A}
pa.prototype.return=function(a){this.o={return:a};this.h=this.A};
function w(a,b,c){a.h=c;return{value:b}}
function sa(a){a.j=0;var b=a.o.va;a.o=null;return b}
function ta(a){this.h=new pa;this.i=a}
function ua(a,b){qa(a.h);var c=a.h.l;if(c)return va(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return wa(a)}
function va(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.m=!1,e;var f=e.value}catch(g){return a.h.l=null,ra(a.h,g),wa(a)}a.h.l=null;d.call(a.h,f);return wa(a)}
function wa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.m=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ra(a.h,c)}a.h.m=!1;if(a.h.o){b=a.h.o;a.h.o=null;if(b.Sa)throw b.va;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function xa(a){this.next=function(b){qa(a.h);a.h.l?b=va(a,a.h.l.next,b,a.h.u):(a.h.u(b),b=wa(a));return b};
this.throw=function(b){qa(a.h);a.h.l?b=va(a,a.h.l["throw"],b,a.h.u):(ra(a.h,b),b=wa(a));return b};
this.return=function(b){return ua(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){b=new xa(new ta(b));oa&&a.prototype&&oa(b,a.prototype);return b}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ia});
t("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
function ya(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ya(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ya(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||oa});
function za(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Aa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)za(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Aa});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.o=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.o)}};
b.prototype.K=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.T(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.m(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.U(h,g):this.m(g)};
b.prototype.o=function(g){this.A(2,g)};
b.prototype.m=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.L();this.C()};
b.prototype.L=function(){var g=this;e(function(){if(g.F()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.C=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.T=function(g){var h=this.l();g.ca(h.resolve,h.reject)};
b.prototype.U=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(A){try{l(r(A))}catch(G){n(G)}}:q}
var l,n,p=new b(function(r,q){l=r;n=q});
this.ca(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ca=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).ca(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(A){return function(G){r[A]=G;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).ca(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==ya(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)za(b,d)&&c.push([d,b[d]]);return c}});
function Ba(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.keys",function(a){return a?a:function(){return Ba(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ba(this,function(b,c){return c})}});
t("Array.prototype.entries",function(a){return a?a:function(){return Ba(this,function(b,c){return[b,c]})}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!za(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!za(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&za(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&za(k,g)&&za(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&za(k,g)&&za(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.i[l];if(n&&za(h.i,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,G:p}}return{id:l,list:n,index:-1,G:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.G?l.G.value=k:(l.G={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.G),this.h.previous.next=l.G,this.h.previous=l.G,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.G&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.G.previous.next=h.G.next,h.G.next.previous=h.G.previous,h.G.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).G};
e.prototype.get=function(h){return(h=d(this,h).G)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)za(b,d)&&c.push(b[d]);return c}});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ca(a){if(a&&a!=y)return Da(a.document);null===Ea&&(Ea=Da(y.document));return Ea}
var Fa=/^[\w+/_-]+[=]{0,2}$/,Ea=null;function Da(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Fa.test(a)?a:""}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ga(){}
function Ha(a){a.la=void 0;a.getInstance=function(){return a.la?a.la:a.la=new a}}
function Ia(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ja(a){var b=Ia(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ka(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function La(a){return Object.prototype.hasOwnProperty.call(a,Ma)&&a[Ma]||(a[Ma]=++Na)}
var Ma="closure_uid_"+(1E9*Math.random()>>>0),Na=0;function Oa(a,b,c){return a.call.apply(a.bind,arguments)}
function Pa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Oa:C=Pa;return C.apply(null,arguments)}
function Qa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ra(a,b){z(a,b,void 0)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ak=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Sa(a){return a}
;function Ta(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ta);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b&&(this.Ga=b)}
D(Ta,Error);Ta.prototype.name="CustomError";function Ua(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Va(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Wa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Xa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ya=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Za=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function $a(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function ab(a,b){b=Wa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function bb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function cb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ja(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function db(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function fb(a){var b=gb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function hb(a){for(var b in a)return!1;return!0}
function ib(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function jb(){var a=F("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function kb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function lb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function mb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=mb(a[c]);return b}
var nb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ob(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<nb.length;f++)c=nb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var pb;function qb(){if(void 0===pb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Sa,createScript:Sa,createScriptURL:Sa})}catch(c){y.console&&y.console.error(c.message)}pb=a}else pb=a}return pb}
;function rb(a,b){this.h=b===sb?a:""}
m=rb.prototype;m.W=!0;m.V=function(){return this.h.toString()};
m.ka=!0;m.ha=function(){return 1};
m.toString=function(){return this.h+""};
function tb(a){if(a instanceof rb&&a.constructor===rb)return a.h;Ia(a);return"type_error:TrustedResourceUrl"}
var sb={};var ub=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function vb(a,b){if(b)a=a.replace(wb,"&amp;").replace(xb,"&lt;").replace(yb,"&gt;").replace(zb,"&quot;").replace(Ab,"&#39;").replace(Bb,"&#0;");else{if(!Cb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(wb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(xb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(yb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(zb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ab,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Bb,"&#0;"))}return a}
var wb=/&/g,xb=/</g,yb=/>/g,zb=/"/g,Ab=/'/g,Bb=/\x00/g,Cb=/[\x00&<>"']/;function Db(a,b){this.h=b===Eb?a:""}
m=Db.prototype;m.W=!0;m.V=function(){return this.h.toString()};
m.ka=!0;m.ha=function(){return 1};
m.toString=function(){return this.h.toString()};
function Fb(a){if(a instanceof Db&&a.constructor===Db)return a.h;Ia(a);return"type_error:SafeUrl"}
var Gb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Hb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Ib=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Jb(a){if(a instanceof Db)return a;a="object"==typeof a&&a.W?a.V():String(a);Ib.test(a)||(a="about:invalid#zClosurez");return new Db(a,Eb)}
var Eb={},Kb=new Db("about:invalid#zClosurez",Eb);var Lb;a:{var Mb=y.navigator;if(Mb){var Nb=Mb.userAgent;if(Nb){Lb=Nb;break a}}Lb=""}function I(a){return-1!=Lb.indexOf(a)}
;function Ob(a,b,c){this.h=c===Pb?a:"";this.i=b}
m=Ob.prototype;m.ka=!0;m.ha=function(){return this.i};
m.W=!0;m.V=function(){return this.h.toString()};
m.toString=function(){return this.h.toString()};
var Pb={};function Qb(a,b){var c=qb();a=c?c.createHTML(a):a;return new Ob(a,b,Pb)}
;function Rb(a,b){b=b instanceof Db?b:Jb(b);a.href=Fb(b)}
function Sb(a,b){a.src=tb(b);(b=Ca(a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
;function Tb(a){return a=vb(a,void 0)}
function Ub(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Vb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wb(a){return a?decodeURI(a):a}
function Xb(a){return Wb(a.match(Vb)[3]||null)}
function Yb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Yb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Zb(a){var b=[],c;for(c in a)Yb(c,a[c],b);return b.join("&")}
function $b(a,b){b=Zb(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var ac=/#|$/;function J(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function bc(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function cc(a){cc[" "](a);return a}
cc[" "]=Ga;var dc=I("Opera"),ec=I("Trident")||I("MSIE"),fc=I("Edge"),gc=I("Gecko")&&!(-1!=Lb.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),hc=-1!=Lb.toLowerCase().indexOf("webkit")&&!I("Edge");function ic(){var a=y.document;return a?a.documentMode:void 0}
var jc;a:{var kc="",lc=function(){var a=Lb;if(gc)return/rv:([^\);]+)(\)|;)/.exec(a);if(fc)return/Edge\/([\d\.]+)/.exec(a);if(ec)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hc)return/WebKit\/(\S+)/.exec(a);if(dc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
lc&&(kc=lc?lc[1]:"");if(ec){var mc=ic();if(null!=mc&&mc>parseFloat(kc)){jc=String(mc);break a}}jc=kc}var nc=jc,oc;if(y.document&&ec){var pc=ic();oc=pc?pc:parseInt(nc,10)||void 0}else oc=void 0;var qc=oc;var rc=bc()||I("iPod"),sc=I("iPad"),tc=I("Safari")&&!((I("Chrome")||I("CriOS"))&&!I("Edge")||I("Coast")||I("Opera")||I("Edge")||I("Edg/")||I("OPR")||I("Firefox")||I("FxiOS")||I("Silk")||I("Android"))&&!(bc()||I("iPad")||I("iPod"));var uc={},vc=null;
function wc(a){var b=3;Ja(a);void 0===b&&(b=0);if(!vc){vc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));uc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===vc[h]&&(vc[h]=g)}}}b=uc[b];c=[];for(d=0;d<a.length;d+=3){var k=a[d],l=(e=d+1<a.length)?a[d+1]:0;h=(f=d+2<a.length)?a[d+2]:0;g=k>>2;k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;f||(h=64,e||(l=64));c.push(b[g],b[k],b[l]||"",b[h]||"")}return c.join("")}
;var K=window;var xc=!ec||9<=Number(qc);function yc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=yc.prototype;m.clone=function(){return new yc(this.x,this.y)};
m.equals=function(a){return a instanceof yc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function zc(a,b){this.width=a;this.height=b}
m=zc.prototype;m.clone=function(){return new zc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ac(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Bc(a,b){db(b,function(c,d){c&&"object"==typeof c&&c.W&&(c=c.V());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Cc.hasOwnProperty(d)?a.setAttribute(Cc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Cc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Dc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!xc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Tb(g.name),'"');if(g.type){f.push(' type="',Tb(g.type),'"');var h={};ob(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Ec(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Bc(f,g));2<d.length&&Fc(e,f,d);return f}
function Fc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ja(f)||Ka(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ka(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}E(g?bb(f):f,d)}}}
function Ec(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Gc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Hc(a){var b=Ic;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Jc(){var a=[];Hc(function(b){a.push(b)});
return a}
var Ic={wb:"allow-forms",xb:"allow-modals",yb:"allow-orientation-lock",zb:"allow-pointer-lock",Ab:"allow-popups",Bb:"allow-popups-to-escape-sandbox",Cb:"allow-presentation",Db:"allow-same-origin",Eb:"allow-scripts",Fb:"allow-top-navigation",Gb:"allow-top-navigation-by-user-activation"},Kc=Va(function(){return Jc()});
function Lc(){var a=Ec(document,"IFRAME"),b={};E(Kc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Mc(a){Nc();var b=qb();a=b?b.createScriptURL(a):a;return new rb(a,sb)}
var Nc=Ga;function Oc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Pc=(new Date).getTime();function Qc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Rc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var A=e[1],G=e[2],H=e[3],W=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var R=H^A&(G^H);var M=1518500249}else R=A^G^H,M=1859775393;else 60>q?(R=A&G|H&(A|G),M=2400959708):(R=A^G^H,M=3395469782);R=((p<<5|p>>>27)&4294967295)+R+W+M+r[q]&4294967295;W=H;H=G;G=(A<<30|A>>>2)&4294967295;A=p;p=R}e[0]=e[0]+p&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+G&4294967295;e[3]=e[3]+H&4294967295;e[4]=e[4]+W&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],A=0,G=p.length;A<G;++A)q.push(p.charCodeAt(A));p=q}r||(r=p.length);q=0;if(0==l)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<r;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var A=24;0<=A;A-=8)p[r++]=e[q]>>A&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Ha:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Sc(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,Tc(Qc(d),a,c||null)].join(" "):null}
function Tc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),Uc(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=Uc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Uc(a){var b=Rc();b.update(a);return b.Ha().toLowerCase()}
;var Vc={};function Wc(a){this.h=a||{cookie:""}}
m=Wc.prototype;m.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ma:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Hk;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ma}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ub(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ma:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ub(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Xc=new Wc("undefined"==typeof document?null:document);function Yc(a){return!!Vc.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Zc(a,b,c,d){(a=y[a])||(a=(new Wc(document)).get(b));return a?Sc(a,c,d):null}
function $c(a){var b=void 0===b?!1:b;var c=Qc(String(y.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;Yc(e)&&(f=f||y.__1PSAPISID);if(f)e=!0;else{var g=new Wc(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Yc(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?y.__SAPISID:y.__APISID,e||(e=new Wc(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Sc(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Yc(b)&&((b=Zc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Zc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function ad(){this.h=[];this.i=-1}
ad.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.h[a]!=b&&(this.h[a]=b,this.i=-1)};
ad.prototype.get=function(a){return!!this.h[a]};
function bd(a){-1==a.i&&(a.i=Za(a.h,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function cd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
cd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function dd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var ed;
function fd(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=Ec(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ra;c.ra=null;e()}};
return function(e){d.next={ra:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function gd(a){y.setTimeout(function(){throw a;},0)}
;function hd(){this.i=this.h=null}
hd.prototype.add=function(a,b){var c=id.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
hd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var id=new cd(function(){return new jd},function(a){return a.reset()});
function jd(){this.next=this.scope=this.h=null}
jd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
jd.prototype.reset=function(){this.next=this.scope=this.h=null};function kd(a,b){ld||md();nd||(ld(),nd=!0);od.add(a,b)}
var ld;function md(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);ld=function(){a.then(pd)}}else ld=function(){var b=pd;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!I("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(ed||(ed=fd()),ed(b)):y.setImmediate(b)}}
var nd=!1,od=new hd;function pd(){for(var a;a=od.remove();){try{a.h.call(a.scope)}catch(b){gd(b)}dd(id,a)}nd=!1}
;function qd(){this.i=-1}
;function rd(){this.i=64;this.h=[];this.m=[];this.u=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.o=this.j=0;this.reset()}
D(rd,qd);rd.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.j=0};
function sd(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
rd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.m,f=this.j;d<b;){if(0==f)for(;d<=c;)sd(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){sd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){sd(this,e);f=0;break}}this.j=f;this.o+=b}};
rd.prototype.digest=function(){var a=[],b=8*this.o;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.m[c]=b&255,b/=256;sd(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function td(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ud(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,vd[c])c=vd[c];else{c=String(c);if(!vd[c]){var f=/function\s+([^\(]+)/m.exec(c);vd[c]=f?f[1]:"[Anonymous]"}c=vd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ud(a,b){b||(b={});b[wd(a)]=!0;var c=a.stack||"";(a=a.Ga)&&!b[wd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ud(a,b));return c}
function wd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var vd={};function xd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function yd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ja(d)?yd.apply(null,d):xd(d)}}
;function L(){this.h=this.h;this.o=this.o}
L.prototype.h=!1;L.prototype.dispose=function(){this.h||(this.h=!0,this.B())};
function zd(a,b){a.h?b():(a.o||(a.o=[]),a.o.push(b))}
L.prototype.B=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function Ad(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Bd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Cd(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ad(a).match(/\S+/g)||[],b=0<=Wa(a,b));return b}
function Dd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Cd(a,"inverted-hdpi")&&Bd(a,Xa(a.classList?a.classList:Ad(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Ed="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function Fd(){}
Fd.prototype.next=function(){throw Ed;};
Fd.prototype.M=function(){return this};
function Gd(a){if(a instanceof Fd)return a;if("function"==typeof a.M)return a.M(!1);if(Ja(a)){var b=0,c=new Fd;c.next=function(){for(;;){if(b>=a.length)throw Ed;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Hd(a,b){if(Ja(a))try{E(a,b,void 0)}catch(c){if(c!==Ed)throw c;}else{a=Gd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Ed)throw c;}}}
function Id(a){if(Ja(a))return bb(a);a=Gd(a);var b=[];Hd(a,function(c){b.push(c)});
return b}
;function Jd(a,b){this.i={};this.h=[];this.O=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Jd)for(c=Kd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Kd(a){Ld(a);return a.h.concat()}
m=Jd.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;b=b||Md;Ld(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Md(a,b){return a===b}
m.isEmpty=function(){return 0==this.j};
m.clear=function(){this.i={};this.O=this.j=this.h.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.j--,this.O++,this.h.length>2*this.j&&Ld(this),!0):!1};
function Ld(a){if(a.j!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.j!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.j++,this.h.push(a),this.O++);this.i[a]=b};
m.forEach=function(a,b){for(var c=Kd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Jd(this)};
m.M=function(a){Ld(this);var b=0,c=this.O,d=this,e=new Fd;e.next=function(){if(c!=d.O)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Ed;var f=d.h[b++];return a?f:d.i[f]};
return e};var Nd=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ga,b),y.removeEventListener("test",Ga,b)}catch(c){}return a}();function Od(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Od.prototype.stopPropagation=function(){this.j=!0};
Od.prototype.preventDefault=function(){this.defaultPrevented=!0};function Pd(a,b){Od.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
D(Pd,Od);var Qd={2:"touch",3:"pen",4:"mouse"};
Pd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(gc){a:{try{cc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Qd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Pd.I.preventDefault.call(this)};
Pd.prototype.stopPropagation=function(){Pd.I.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Pd.prototype.preventDefault=function(){Pd.I.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Rd="closure_listenable_"+(1E6*Math.random()|0);var Sd=0;function Td(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.da=e;this.key=++Sd;this.Y=this.ba=!1}
function Ud(a){a.Y=!0;a.listener=null;a.h=null;a.src=null;a.da=null}
;function Vd(a){this.src=a;this.listeners={};this.h=0}
Vd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Wd(a,b,d,e);-1<g?(b=a[g],c||(b.ba=!1)):(b=new Td(b,this.src,f,!!d,e),b.ba=c,a.push(b));return b};
Vd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Wd(e,b,c,d);return-1<b?(Ud(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Xd(a,b){var c=b.type;c in a.listeners&&ab(a.listeners[c],b)&&(Ud(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Wd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Y&&f.listener==b&&f.capture==!!c&&f.da==d)return e}return-1}
;var Yd="closure_lm_"+(1E6*Math.random()|0),Zd={},$d=0;function ae(a,b,c,d,e){if(d&&d.once)be(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ae(a,b[f],c,d,e);else c=ce(c),a&&a[Rd]?de(a,b,c,Ka(d)?!!d.capture:!!d,e):ee(a,b,c,!1,d,e)}
function ee(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ka(e)?!!e.capture:!!e,h=fe(a);h||(a[Yd]=h=new Vd(a));c=h.add(b,c,d,g,f);if(!c.h){d=ge();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)Nd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(he(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");$d++}}
function ge(){function a(c){return b.call(a.src,a.listener,c)}
var b=ie;return a}
function be(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)be(a,b[f],c,d,e);else c=ce(c),a&&a[Rd]?a.i.add(String(b),c,!0,Ka(d)?!!d.capture:!!d,e):ee(a,b,c,!0,d,e)}
function je(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)je(a,b[f],c,d,e);else(d=Ka(d)?!!d.capture:!!d,c=ce(c),a&&a[Rd])?a.i.remove(String(b),c,d,e):a&&(a=fe(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Wd(b,c,d,e)),(c=-1<a?b[a]:null)&&ke(c))}
function ke(a){if("number"!==typeof a&&a&&!a.Y){var b=a.src;if(b&&b[Rd])Xd(b.i,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(he(c),d):b.addListener&&b.removeListener&&b.removeListener(d);$d--;(c=fe(b))?(Xd(c,a),0==c.h&&(c.src=null,b[Yd]=null)):Ud(a)}}}
function he(a){return a in Zd?Zd[a]:Zd[a]="on"+a}
function ie(a,b){if(a.Y)a=!0;else{b=new Pd(b,this);var c=a.listener,d=a.da||a.src;a.ba&&ke(a);a=c.call(d,b)}return a}
function fe(a){a=a[Yd];return a instanceof Vd?a:null}
var le="__closure_events_fn_"+(1E9*Math.random()>>>0);function ce(a){if("function"===typeof a)return a;a[le]||(a[le]=function(b){return a.handleEvent(b)});
return a[le]}
;function me(){L.call(this);this.i=new Vd(this);this.F=this;this.u=null}
D(me,L);me.prototype[Rd]=!0;me.prototype.addEventListener=function(a,b,c,d){ae(this,a,b,c,d)};
me.prototype.removeEventListener=function(a,b,c,d){je(this,a,b,c,d)};
function ne(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.F;c=b.type||b;"string"===typeof b?b=new Od(b,a):b instanceof Od?b.target=b.target||a:(e=b,b=new Od(c,a),ob(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=oe(g,c,!0,b)&&e}b.j||(g=b.h=a,e=oe(g,c,!0,b)&&e,b.j||(e=oe(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=oe(g,c,!1,b)&&e}
me.prototype.B=function(){me.I.B.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ud(d[e]);delete a.listeners[c];a.h--}}this.u=null};
function de(a,b,c,d,e){a.i.add(String(b),c,!1,d,e)}
function oe(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Y&&g.capture==c){var h=g.listener,k=g.da||g.src;g.ba&&Xd(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function pe(a){var b=[];qe(new re,a,b);return b.join("")}
function re(){}
function qe(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),qe(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),se(d,c),c.push(":"),qe(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":se(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var te={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ue=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function se(a,b){b.push('"',a.replace(ue,function(c){var d=te[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),te[c]=d);return d}),'"')}
;function ve(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function O(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.o=this.m=!1;if(a!=Ga)try{var b=this;a.call(void 0,function(c){we(b,2,c)},function(c){we(b,3,c)})}catch(c){we(this,3,c)}}
function xe(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
xe.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var ye=new cd(function(){return new xe},function(a){a.reset()});
function ze(a,b,c){var d=ye.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Ae(a){return new O(function(b,c){c(a)})}
O.prototype.then=function(a,b,c){return Be(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
O.prototype.$goog_Thenable=!0;function Ce(a,b){return Be(a,null,b,void 0)}
O.prototype.cancel=function(a){if(0==this.h){var b=new De(a);kd(function(){Ee(this,b)},this)}};
function Ee(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Ee(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Fe(c),Ge(c,e,3,b)))}a.j=null}else we(a,3,b)}
function He(a,b){a.i||2!=a.h&&3!=a.h||Ie(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Be(a,b,c,d){var e=ze(null,null,null);e.h=new O(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof De?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;He(a,e);return e.h}
O.prototype.C=function(a){this.h=0;we(this,2,a)};
O.prototype.F=function(a){this.h=0;we(this,3,a)};
function we(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.C,f=a.F;if(d instanceof O){He(d,ze(e||Ga,f||null,a));var g=!0}else if(ve(d))d.then(e,f,a),g=!0;else{if(Ka(d))try{var h=d.then;if("function"===typeof h){Je(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.u=c,a.h=b,a.j=null,Ie(a),3!=b||c instanceof De||Ke(a,c))}}
function Je(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ie(a){a.m||(a.m=!0,kd(a.A,a))}
function Fe(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
O.prototype.A=function(){for(var a;a=Fe(this);)Ge(this,a,this.h,this.u);this.m=!1};
function Ge(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,Le(b,c,d);else try{b.j?b.i.call(b.context):Le(b,c,d)}catch(e){Me.call(null,e)}dd(ye,b)}
function Le(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Ke(a,b){a.o=!0;kd(function(){a.o&&Me.call(null,b)})}
var Me=gd;function De(a){Ta.call(this,a)}
D(De,Ta);De.prototype.name="cancel";function P(a){L.call(this);this.u=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
D(P,L);m=P.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function Ne(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=$a(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.X(b)}}
m.X=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ga):(c&&ab(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.P=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Oe(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.X(c)}}return 0!=e}return!1};
function Oe(a,b,c){kd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(E(b,this.X,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.B=function(){P.I.B.call(this);this.clear();this.l.length=0};function Pe(a){this.h=a}
Pe.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,pe(b))};
Pe.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Pe.prototype.remove=function(a){this.h.remove(a)};function Qe(a){this.h=a}
D(Qe,Pe);function Re(a){this.data=a}
function Se(a){return void 0===a||a instanceof Re?a:new Re(a)}
Qe.prototype.set=function(a,b){Qe.I.set.call(this,a,Se(b))};
Qe.prototype.i=function(a){a=Qe.I.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Qe.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Te(a){this.h=a}
D(Te,Qe);Te.prototype.set=function(a,b,c){if(b=Se(b)){if(c){if(c<Date.now()){Te.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Te.I.set.call(this,a,b)};
Te.prototype.i=function(a){var b=Te.I.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Te.prototype.remove.call(this,a);else return b}};function Ue(){}
;function Ve(){}
D(Ve,Ue);Ve.prototype.clear=function(){var a=Id(this.M(!0)),b=this;E(a,function(c){b.remove(c)})};function We(a){this.h=a}
D(We,Ve);m=We.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.M=function(a){var b=0,c=this.h,d=new Fd;d.next=function(){if(b>=c.length)throw Ed;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Xe(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
D(Xe,We);function Ye(a,b){this.i=a;this.h=null;if(ec&&!(9<=Number(qc))){Ze||(Ze=new Jd);this.h=Ze.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Ze.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
D(Ye,Ve);var $e={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ze=null;function af(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return $e[b]})}
m=Ye.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(af(a),b);bf(this)};
m.get=function(a){a=this.h.getAttribute(af(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(af(a));bf(this)};
m.M=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Fd;d.next=function(){if(b>=c.length)throw Ed;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);bf(this)};
function bf(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function cf(a,b){this.i=a;this.h=b+"::"}
D(cf,Ve);cf.prototype.set=function(a,b){this.i.set(this.h+a,b)};
cf.prototype.get=function(a){return this.i.get(this.h+a)};
cf.prototype.remove=function(a){this.i.remove(this.h+a)};
cf.prototype.M=function(a){var b=this.i.M(!0),c=this,d=new Fd;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};function df(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var ef=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",ef,void 0);function ff(a){df(ef,arguments)}
function F(a,b){return a in ef?ef[a]:b}
;var gf=[];function hf(a){gf.forEach(function(b){return b(a)})}
function jf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){kf(b)}}:a}
function kf(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=F("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),ff("ERRORS",b));hf(a)}
function lf(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=F("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),ff("ERRORS",b))}
;var mf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",mf,void 0);function nf(a){df(mf,arguments)}
;function Q(a){a=of(a);return"string"===typeof a&&"false"===a?!1:!!a}
function pf(a,b){a=of(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function of(a){var b=F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:F("EXPERIMENT_FLAGS",{})[a]}
;var qf=0;z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++qf},void 0);var rf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function sf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in rf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function tf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
sf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
sf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
sf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var gb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",gb,void 0);var uf=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",uf,void 0);
function vf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return fb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ka(e[4])&&Ka(d)&&kb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var wf=Va(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function xf(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=vf(a,b,c,d);if(e)return e;e=++uf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new sf(h);if(!Gc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new sf(h);
h.currentTarget=a;return c.call(a,h)};
g=jf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),wf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);gb[e]=[a,b,c,g,d];return e}
function yf(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in gb){var c=gb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?wf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete gb[b]}}))}
;var zf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function S(a,b){"function"===typeof a&&(a=jf(a));return window.setTimeout(a,b)}
function Af(a){window.clearTimeout(a)}
;function Bf(a){this.C=a;this.i=null;this.m=0;this.A=null;this.u=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.J=xf(window,"mousemove",C(this.K,this));a=C(this.F,this);"function"===typeof a&&(a=jf(a));this.L=window.setInterval(a,25)}
D(Bf,L);Bf.prototype.K=function(a){void 0===a.h&&tf(a);var b=a.h;void 0===a.i&&tf(a);this.i=new yc(b,a.i)};
Bf.prototype.F=function(){if(this.i){var a=zf();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.C();this.u=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
Bf.prototype.B=function(){window.clearInterval(this.L);yf(this.J)};function Cf(){}
function Df(a,b){return Ef(a,0,b)}
function Ff(a,b){return Ef(a,1,b)}
function Gf(a,b){Ef(a,2,b)}
;function Hf(){Cf.apply(this,arguments)}
v(Hf,Cf);function Ef(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):S(a,c||0)}
function If(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):Af(a)}}
Hf.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
Hf.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
Ha(Hf);Hf.getInstance();var Jf={};
function Kf(a){var b=void 0===a?{}:a;a=void 0===b.Ka?!0:b.Ka;b=void 0===b.Xa?!1:b.Xa;if(null==B("_lact",window)){var c=parseInt(F("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&Lf();xf(document,"keydown",Lf);xf(document,"keyup",Lf);xf(document,"mousedown",Lf);xf(document,"mouseup",Lf);a&&(b?xf(window,"touchmove",function(){Mf("touchmove",200)},{passive:!0}):(xf(window,"resize",function(){Mf("resize",200)}),xf(window,"scroll",function(){Mf("scroll",200)})));
new Bf(function(){Mf("mouse",100)});
xf(document,"touchstart",Lf,{passive:!0});xf(document,"touchend",Lf,{passive:!0})}}
function Mf(a,b){Jf[a]||(Jf[a]=!0,Ff(function(){Lf();Jf[a]=!1},b))}
function Lf(){null==B("_lact",window)&&Kf();var a=Date.now();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function Nf(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function Of(){var a=Pf;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function Qf(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var Rf=/^[\w.]*$/,Sf={q:!0,search_query:!0};function Tf(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Uf(f[0]||""),h=Uf(f[1]||"");g in c?Array.isArray(c[g])?cb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(Tf);k.args=[{key:l,value:f[1],query:a,method:Vf==n?"unchanged":n}];Sf.hasOwnProperty(l)||lf(k)}}return c}
var Vf=String(Tf);function Wf(a){var b=[];db(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Xf(a){"?"==a.charAt(0)&&(a=a.substr(1));return Tf(a,"&")}
function Yf(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Xf(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return $b(a,e)+d}
function Zf(a){if(!b)var b=window.location.href;var c=a.match(Vb)[1]||null,d=Xb(a);c&&d?(a=a.match(Vb),b=b.match(Vb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Xb(b)==d&&(Number(b.match(Vb)[4]||null)||null)==(Number(a.match(Vb)[4]||null)||null):!0;return a}
function Uf(a){return a&&a.match(Rf)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function $f(a){var b=ag;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Pc;e.flash="0";a:{try{var f=b.h.top.location.href}catch(N){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?K:g;try{var h=g.history.length}catch(N){h=0}e.u_his=h;e.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(e.u_h=K.screen.height,e.u_w=K.screen.width,
e.u_ah=K.screen.availHeight,e.u_aw=K.screen.availWidth,e.u_cd=K.screen.colorDepth);K.navigator&&K.navigator.plugins&&(e.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(e.u_nmime=K.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(N){}try{var n=h.outerWidth;var p=h.outerHeight}catch(N){}try{var r=h.innerWidth;var q=h.innerHeight}catch(N){}try{var A=h.screenLeft;var G=h.screenTop}catch(N){}try{r=h.innerWidth,q=h.innerHeight}catch(N){}try{var H=h.screen.availWidth;
var W=h.screen.availTop}catch(N){}k=[A,G,k,l,H,W,n,p,r,q];l=b.h.top;try{var R=(l||window).document,M="CSS1Compat"==R.compatMode?R.documentElement:R.body;var ja=(new zc(M.clientWidth,M.clientHeight)).round()}catch(N){ja=new zc(-12245933,-12245933)}R=ja;ja={};M=new ad;y.SVGElement&&y.document.createElementNS&&M.set(0);l=Lc();l["allow-top-navigation-by-user-activation"]&&M.set(1);l["allow-popups-to-escape-sandbox"]&&M.set(2);y.crypto&&y.crypto.subtle&&M.set(3);y.TextDecoder&&y.TextEncoder&&M.set(4);
M=bd(M);ja.bc=M;ja.bih=R.height;ja.biw=R.width;ja.brdim=k.join();b=b.i;b=(ja.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ja.wgl=!!K.WebGLRenderingContext,ja);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ag=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return Wf($f(a))},void 0);var bg="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function cg(){if(!bg)return null;var a=bg();return"open"in a?a:null}
function dg(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var eg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
fg="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),gg=!1;
function hg(a,b){b=void 0===b?{}:b;var c=Zf(a),d=Q("web_ajax_ignore_global_headers_if_set"),e;for(e in eg){var f=F(eg[e]);!f||!c&&Xb(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!Xb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Xb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Xb(a))b["X-YouTube-Ad-Signals"]=Wf($f(void 0));return b}
function ig(a){var b=window.location.search,c=Xb(a);Q("debug_handle_relative_url_for_query_forward_killswitch")||c||!Zf(a)||(c=document.location.hostname);var d=Wb(a.match(Vb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Xf(b),f={};E(fg,function(g){e[g]&&(f[g]=e[g])});
return Yf(a,f||{},!1)}
function jg(a,b){var c=b.format||"JSON";a=kg(a,b);var d=lg(a,b),e=!1,f=mg(a,function(k){if(!e){e=!0;h&&Af(h);var l=dg(k),n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=ng(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=S(function(){e||(e=!0,f.abort(),Af(h),g.call(b.context||y,f))},b.timeout)}return f}
function kg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=F("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=Yf(a,b||{},!0);return a}
function lg(a,b){var c=F("XSRF_FIELD_NAME",void 0),d=F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=F("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Xb(a)&&!b.withCredentials&&Xb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Xf(e),ob(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Zb(e));f=e||f&&!hb(f);!gg&&f&&
"POST"!=b.method&&(gg=!0,kf(Error("AJAX request with postData should use POST")));return e}
function ng(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,lf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?og(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=pg(g)})}d&&qg(e);
return e}
function qg(a){if(Ka(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Qb(a[b],null);a[c]=d}else qg(a[b])}}
function og(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function pg(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function mg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&jf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=cg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;Q("debug_forward_web_query_parameters")&&(a=ig(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=hg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var rg=rc||sc;function sg(a){var b=Lb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var tg={},ug=0;
function vg(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!sg("cobalt")){if(a){a instanceof Db||(a="object"==typeof a&&a.W?a.V():String(a),Ib.test(a)?a=new Db(a,Eb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Hb))&&Gb.test(b[1])?new Db(a,Eb):null));a=Fb(a||Kb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Ob)){b="object"==typeof a;var f=null;b&&a.ka&&(f=a.ha());a=Qb(vb(b&&a.W?a.V():String(a)),f)}a instanceof Ob&&a.constructor===Ob?a=a.h:(Ia(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(pe(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Dc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)mg(a,b,"POST",e,d);else if(F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)mg(a,b,"GET","",d);else{b:{try{var g=new Ua({url:a});if(g.j&&g.i||g.l){var h=Wb(a.match(Vb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(ac);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var r=c;break d}}c+=3}r=-1}if(0>r)var q=null;else{var A=a.indexOf("&",r);if(0>A||A>l)A=l;r+=3;q=decodeURIComponent(a.substr(r,A-r).replace(/\+/g," "))}k="1"!==q}f=!k;break b}}catch(G){}f=!1}f?wg(a)?(b&&b(),f=!0):f=!1:f=!1;f||xg(a,b)}}
function yg(a){var b=void 0===b?"":b;wg(a,b)||vg(a,void 0,void 0,void 0,b)}
function wg(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function xg(a,b){var c=new Image,d=""+ug++;tg[d]=c;c.onload=c.onerror=function(){b&&tg[d]&&b();delete tg[d]};
c.src=a}
;var zg=y.ytPubsubPubsubInstance||new P,Ag=y.ytPubsubPubsubSubscribedKeys||{},Bg=y.ytPubsubPubsubTopicToKeys||{},Cg=y.ytPubsubPubsubIsSynchronous||{};function Dg(a,b){var c=Eg();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Ag[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Cg[a]?f():S(f,0)}catch(g){kf(g)}},void 0);
Ag[d]=!0;Bg[a]||(Bg[a]=[]);Bg[a].push(d);return d}return 0}
function Fg(a){var b=Eg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),E(a,function(c){b.unsubscribeByKey(c);delete Ag[c]}))}
function Gg(a,b){var c=Eg();c&&c.publish.apply(c,arguments)}
function Hg(a){var b=Eg();if(b)if(b.clear(a),a)Ig(a);else for(var c in Bg)Ig(c)}
function Eg(){return y.ytPubsubPubsubInstance}
function Ig(a){Bg[a]&&(a=Bg[a],E(a,function(b){Ag[b]&&delete Ag[b]}),a.length=0)}
P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.X;P.prototype.publish=P.prototype.P;P.prototype.clear=P.prototype.clear;z("ytPubsubPubsubInstance",zg,void 0);z("ytPubsubPubsubTopicToKeys",Bg,void 0);z("ytPubsubPubsubIsSynchronous",Cg,void 0);z("ytPubsubPubsubSubscribedKeys",Ag,void 0);var Jg=window,T=Jg.ytcsi&&Jg.ytcsi.now?Jg.ytcsi.now:Jg.performance&&Jg.performance.timing&&Jg.performance.now&&Jg.performance.timing.navigationStart?function(){return Jg.performance.timing.navigationStart+Jg.performance.now()}:function(){return(new Date).getTime()};var Kg=pf("initial_gel_batch_timeout",1E3),Lg=Math.pow(2,16)-1,Mg=null,Ng=0,Og=void 0,Pg=0,Qg=0,Rg=0,Sg=!0,Tg=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Tg,void 0);var Ug=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Ug,void 0);
function Vg(a,b){if("log_event"===a.endpoint){var c="";a.D&&(Ug[a.D.token]=Wg(a.D),c=a.D.token);var d=Tg.get(c)||[];Tg.set(c,d);d.push(a.payload);b&&(Og=new b);a=pf("web_logging_max_batch")||100;b=T();d.length>=a?Xg({writeThenSend:!0}):10<=b-Rg&&(Yg(),Rg=b)}}
function Zg(a,b){if("log_event"===a.endpoint){var c="";a.D&&(Ug[a.D.token]=Wg(a.D),c=a.D.token);var d=new Map;d.set(c,[a.payload]);b&&(Og=new b);return new O(function(e){Og&&Og.isReady()?$g(d,e,{bypassNetworkless:!0}):e()})}}
function Xg(a){a=void 0===a?{}:a;new O(function(b){Af(Pg);Af(Qg);Qg=0;Og&&Og.isReady()?($g(Tg,b,a),Tg.clear()):(Yg(),b())})}
function Yg(){Q("web_gel_timeout_cap")&&!Qg&&(Qg=S(function(){Xg({writeThenSend:!0})},6E4));
Af(Pg);var a=F("LOGGING_BATCH_TIMEOUT",pf("web_gel_debounce_ms",1E4));Q("shorten_initial_gel_batch_timeout")&&Sg&&(a=Kg);Pg=S(function(){Xg({writeThenSend:!0})},a)}
function $g(a,b,c){var d=Og;c=void 0===c?{}:c;var e=Math.round(T()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=mb({context:ah(d.h||bh())});h.events=k;(k=Ug[g])&&ch(h,g,k);delete Ug[g];dh(h,e);Q("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&yg("/generate_204");eh(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();Ng=Math.round(T()-e)},
onError:function(){f--;f||b()},
ya:c});Sg=!1}}
function dh(a,b){a.requestTimeMs=String(b);Q("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);if(b=F("EVENT_ID",void 0)){var c=F("BATCH_CLIENT_COUNTER",void 0)||0;c||(c=Math.floor(Math.random()*Lg/2));c++;c>Lg&&(c=1);ff("BATCH_CLIENT_COUNTER",c);b={serializedEventId:b,clientCounter:String(c)};a.serializedClientEventId=b;Mg&&Ng&&Q("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Mg,roundtripMs:String(Ng)});Mg=b;Ng=0}}
function ch(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Wg(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var fh=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",fh,void 0);function gh(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||T());e[a]=b;a=Nf();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};Q("log_sequence_info_on_gel_web")&&d.N&&(a=e.context,b=d.N,fh[b]=b in fh?fh[b]+1:0,a.sequence={index:fh[b],groupKey:b},d.Ia&&delete fh[d.N]);(d.Ik?Zg:Vg)({endpoint:"log_event",payload:e,D:d.D},c)}
;function hh(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function ih(a,b,c,d,e){Xc.set(""+a,b,{ma:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var U=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",U,void 0);function jh(){this.h=F("ALT_PREF_COOKIE_NAME","PREF");this.i=F("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Xc.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(U[d]=c.toString())}}}
jh.prototype.get=function(a,b){kh(a);lh(a);a=void 0!==U[a]?U[a].toString():null;return null!=a?a:b?b:""};
jh.prototype.set=function(a,b){kh(a);lh(a);if(null==b)throw Error("ExpectedNotNull");U[a]=b.toString()};
jh.prototype.remove=function(a){kh(a);lh(a);delete U[a]};
jh.prototype.clear=function(){for(var a in U)delete U[a]};
function lh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function kh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function mh(a){a=void 0!==U[a]?U[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ha(jh);var nh={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},oh={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function ph(){var a=y.navigator;return a?a.connection:void 0}
;function qh(){return"INNERTUBE_API_KEY"in ef&&"INNERTUBE_API_VERSION"in ef}
function bh(){return{innertubeApiKey:F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:F("INNERTUBE_API_VERSION",void 0),La:F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ma:F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Oa:F("INNERTUBE_CONTEXT_HL",void 0),Na:F("INNERTUBE_CONTEXT_GL",void 0),Pa:F("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ra:!!F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Qa:!!F("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:F("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function ah(a){var b={client:{hl:a.Oa,gl:a.Na,clientName:a.Ma,clientVersion:a.innertubeContextClientVersion,configInfo:a.La}},c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=F("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=F("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=F("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!Q("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=hh()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!Q("music_web_display_mode_killswitch")){var h;b.client.xa=null!=(h=b.client.xa)?h:{};b.client.xa.webDisplayMode=hh()}a.appInstallData&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);
F("DELEGATED_SESSION_ID")&&!Q("pageid_as_header_web")&&(b.user={onBehalfOfUser:F("DELEGATED_SESSION_ID")});a:{if(h=ph()){a=nh[h.type||"unknown"]||"CONN_UNKNOWN";h=nh[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);Q("web_log_effective_connection_type")&&(a=ph(),a=null!==a&&void 0!==a&&a.effectiveType?oh.hasOwnProperty(a.effectiveType)?oh[a.effectiveType]:
"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(Xf(F("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function rh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.zk||F("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().yk:b=$c([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=F("SESSION_INDEX",0),Q("pageid_as_header_web")&&(d["X-Goog-PageId"]=F("DELEGATED_SESSION_ID")));return d}
;function sh(a){a=Object.assign({},a);delete a.Authorization;var b=$c();if(b){var c=new rd;c.update(F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=wc(c.digest())}return a}
;function th(a){var b=new Xe;(b=b.isAvailable()?a?new cf(b,a):b:null)||(a=new Ye(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Te(a):null;this.i=document.domain||window.location.hostname}
th.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(pe(b))}catch(f){return}else e=escape(b);ih(a,e,c,this.i)};
th.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Xc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
th.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Xc.remove(""+a,"/",void 0===b?"youtube.com":b)};var uh;function vh(){uh||(uh=new th("yt.innertube"));return uh}
function wh(a,b,c,d){if(d)return null;d=vh().get("nextId",!0)||1;var e=vh().get("requests",!0)||{};e[d]={method:a,request:b,authState:sh(c),requestTime:Math.round(T())};vh().set("nextId",d+1,86400,!0);vh().set("requests",e,86400,!0);return d}
function xh(a){var b=vh().get("requests",!0)||{};delete b[a];vh().set("requests",b,86400,!0)}
function yh(a){var b=vh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=sh(rh(!1));kb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),eh(a,d.method,e,{}));delete b[c]}}vh().set("requests",b,86400,!0)}}
;function zh(a,b){this.version=a;this.args=b}
;function Ah(a,b){this.topic=a;this.h=b}
Ah.prototype.toString=function(){return this.topic};var Bh=B("ytPubsub2Pubsub2Instance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.X;P.prototype.publish=P.prototype.P;P.prototype.clear=P.prototype.clear;z("ytPubsub2Pubsub2Instance",Bh,void 0);var Ch=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Ch,void 0);var Dh=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Dh,void 0);var Eh=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Eh,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Fh(a,b){var c=Gh();c&&c.publish.call(c,a.toString(),a,b)}
function Hh(a){var b=Ih,c=Gh();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Ch[d])try{if(f&&b instanceof Ah&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.O){var l=new h;h.O=l.version}var n=h.O}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
bb(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){kf(p)}},Eh[b.toString()]?B("yt.scheduler.instance")?Ff(g):S(g,0):g())});
Ch[d]=!0;Dh[b.toString()]||(Dh[b.toString()]=[]);Dh[b.toString()].push(d);return d}
function Jh(){var a=Kh,b=Hh(function(c){a.apply(void 0,arguments);Lh(b)});
return b}
function Lh(a){var b=Gh();b&&("number"===typeof a&&(a=[a]),E(a,function(c){b.unsubscribeByKey(c);delete Ch[c]}))}
function Gh(){return B("ytPubsub2Pubsub2Instance")}
;function Mh(){}
;var Nh=[],Oh=!1;function Ph(a){Oh||(Nh.push({type:"ERROR",payload:a}),10<Nh.length&&Nh.shift())}
function Qh(a,b){Oh||(Nh.push({type:"EVENT",eventType:a,payload:b}),10<Nh.length&&Nh.shift())}
;var Rh=function(){var a;return function(){a||(a=new th("ytidb"));return a}}();
function Sh(){var a;return null===(a=Rh())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function Th(a,b,c){this.h=void 0===a?!1:a;this.failureMessage=b;this.j=c;(a=Sh())||(a={createdTimestampMs:T(),isSupported:this.h,resultCount:0,hasSucceededOnce:this.h});this.i=a;var d;if(Uh()){var e;this.i.isSupported===this.h?e=Object.assign(Object.assign({},this.i),{resultCount:this.i.resultCount+1}):e={isSupported:this.h,resultCount:1,createdTimestampMs:T(),hasSucceededOnce:this.i.hasSucceededOnce||this.h};null===(d=Rh())||void 0===d?void 0:d.set("LAST_RESULT_ENTRY_KEY",e,2592E3,!0)}}
function Vh(a,b){return new Th(!1,a instanceof Error?a.message:"",void 0===b?!1:b)}
Th.prototype.isSupported=function(){return this.h};
Th.prototype.log=function(){Uh()&&Qh("IS_SUPPORTED_COMPLETED",{isSupported:this.h,lastIsSupported:this.i.isSupported,failureMessage:this.failureMessage,sameResultCount:this.i.resultCount,sameResultDurationMs:Math.floor(T()-this.i.createdTimestampMs),canDetectDataOnFailure:this.j})};
function Uh(){var a;return!!(Q("ytidb_analyze_is_supported")&&(null===(a=Rh())||void 0===a?0:a.h))}
;function Wh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
v(Wh,Error);function Xh(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Yh(a){return a.substr(0,a.indexOf(":"))||a}
;var Zh={},$h=(Zh.AUTH_INVALID="No user identifier specified.",Zh.EXPLICIT_ABORT="Transaction was explicitly aborted.",Zh.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Zh.MISSING_OBJECT_STORE="Object store not created.",Zh.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Zh.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Zh.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Zh.EXECUTE_TRANSACTION_ON_CLOSED_DB=
"Can't start a transaction on a closed database",Zh),ai={},bi=(ai.AUTH_INVALID="ERROR",ai.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",ai.EXPLICIT_ABORT="IGNORED",ai.IDB_NOT_SUPPORTED="ERROR",ai.MISSING_OBJECT_STORE="ERROR",ai.QUOTA_EXCEEDED="WARNING",ai.QUOTA_MAYBE_EXCEEDED="WARNING",ai.UNKNOWN_ABORT="WARNING",ai),ci={},di=(ci.AUTH_INVALID=!1,ci.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,ci.EXPLICIT_ABORT=!1,ci.IDB_NOT_SUPPORTED=!1,ci.MISSING_OBJECT_STORE=!1,ci.QUOTA_EXCEEDED=!1,ci.QUOTA_MAYBE_EXCEEDED=!0,
ci.UNKNOWN_ABORT=!0,ci);function V(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?$h[a]:c;d=void 0===d?bi[a]:d;e=void 0===e?di[a]:e;Wh.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,V.prototype)}
v(V,Wh);function ei(a){V.call(this,"MISSING_OBJECT_STORE",{Dk:a},$h.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,ei.prototype)}
v(ei,V);var fi=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function gi(a,b,c){b=Yh(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof V)return d;if("QuotaExceededError"===d.name)return new V("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(tc&&"UnknownError"===d.name)return new V("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&fi.some(function(e){return d.message.includes(e)}))return new V("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new V("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",Ek:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
;function hi(a){if(!a)throw Error();throw a;}
function ii(a){return a}
function X(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];try{this.i(c,b)}catch(e){b(e)}}
X.all=function(a){return new X(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={S:0};f.S<a.length;f={S:f.S},++f.S)ji(X.resolve(a[f.S]).then(function(g){return function(h){d[g.S]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
X.resolve=function(a){return new X(function(b,c){a instanceof X?a.then(b,c):b(a)})};
X.reject=function(a){return new X(function(b,c){c(a)})};
X.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:ii,e=null!==b&&void 0!==b?b:hi;return new X(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){ki(c,c,d,f,g)}),c.onRejected.push(function(){li(c,c,e,f,g)})):"FULFILLED"===c.state.status?ki(c,c,d,f,g):"REJECTED"===c.state.status&&li(c,c,e,f,g)})};
function ji(a,b){a.then(void 0,b)}
function ki(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof X?mi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function li(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof X?mi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function mi(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof X?mi(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ni(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function oi(a){return new Promise(function(b,c){ni(a,b,c)})}
function Y(a){return new X(function(b,c){ni(a,b,c)})}
;function pi(a,b){return new X(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function qi(a){return new Promise(function(b){Gf(function(){b()},a)})}
function ri(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}
m=ri.prototype;m.add=function(a,b,c){return si(this,[a],{mode:"readwrite",H:!0},function(d){return ti(d,a).add(b,c)})};
m.clear=function(a){return si(this,[a],{mode:"readwrite",H:!0},function(b){return ti(b,a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return si(this,[a],{mode:"readonly",H:!0},function(c){return ti(c,a).count(b)})};
function ui(a,b,c){a=a.h.createObjectStore(b,c);return new vi(a)}
m.delete=function(a,b){return si(this,[a],{mode:"readwrite",H:!0},function(c){return ti(c,a).delete(b)})};
m.get=function(a,b){return si(this,[a],{mode:"readonly",H:!0},function(c){return ti(c,a).get(b)})};
function wi(a,b,c,d){return si(a,[b],{mode:"readwrite",H:!0},function(e){e=ti(e,b);return Y(e.h.put(c,d))})}
function si(a,b,c,d){return J(a,function f(){var g=this,h,k,l,n,p,r,q,A,G,H,W,R,M,ja;return x(f,function(N){switch(N.h){case 1:var eb={mode:"readonly",H:!1};"string"===typeof c?eb.mode=c:eb=c;h=eb;g.transactionCount++;k=Q("ytidb_transaction_exponential_backoff_retries");l=h.H?pf("ytidb_transaction_try_count",1):1;n=500;p=0;case 2:if(r){N.h=3;break}p++;q=Math.round(T());N.j=4;A=g.h.transaction(b,h.mode);eb=new xi(A);eb=yi(eb,d);return w(N,eb,6);case 6:return G=N.i,H=Math.round(T()),zi(g,q,H,p,void 0,
b.join(),h),N.return(G);case 4:W=sa(N);R=Math.round(T());M=gi(W,g.h.name,b.join());if((ja=M instanceof V&&!M.h)||p>=l){zi(g,q,R,p,M,b.join(),h);r=M;N.h=2;break}if(!k){N.h=2;break}return w(N,qi(n),9);case 9:n*=2;N.h=2;break;case 3:return N.return(Promise.reject(r))}})})}
function zi(a,b,c,d,e,f,g){b=c-b;e?(e instanceof V&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Qh("QUOTA_EXCEEDED",{dbName:Yh(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof V&&"UNKNOWN_ABORT"===e.type&&(Qh("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c-a.j}),a.i=!0),Ai(a,!1,d,f,b),Ph(e)):Ai(a,!0,d,f,b)}
function Ai(a,b,c,d,e){Qh("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c})}
function vi(a){this.h=a}
m=vi.prototype;m.add=function(a,b){return Y(this.h.add(a,b))};
m.clear=function(){return Y(this.h.clear()).then(function(){})};
m.count=function(a){return Y(this.h.count(a))};
function Bi(a,b){return Ci(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Bi(this,a):Y(this.h.delete(a))};
m.get=function(a){return Y(this.h.get(a))};
m.index=function(a){return new Di(this.h.index(a))};
m.getName=function(){return this.h.name};
function Ci(a,b,c){a=a.h.openCursor(b.query,b.direction);return Ei(a).then(function(d){return pi(d,c)})}
function xi(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=V;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function yi(a,b){var c=new Promise(function(d,e){ji(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
xi.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new V("EXPLICIT_ABORT");};
xi.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function ti(a,b){b=a.h.objectStore(b);var c=a.i.get(b);c||(c=new vi(b),a.i.set(b,c));return c}
function Di(a){this.h=a}
Di.prototype.count=function(a){return Y(this.h.count(a))};
Di.prototype.delete=function(a){return Fi(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
Di.prototype.get=function(a){return Y(this.h.get(a))};
Di.prototype.getKey=function(a){return Y(this.h.getKey(a))};
function Fi(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Ei(a).then(function(d){return pi(d,c)})}
function Gi(a,b){this.request=a;this.cursor=b}
function Ei(a){return Y(a).then(function(b){return null===b?null:new Gi(a,b)})}
m=Gi.prototype;m.advance=function(a){this.cursor.advance(a);return Ei(this.request)};
m.continue=function(a){this.cursor.continue(a);return Ei(this.request)};
m.delete=function(){return Y(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Y(this.cursor.update(a))};function Hi(a,b,c){return J(this,function e(){var f,g,h,k,l,n,p,r,q,A;return x(e,function(G){if(1==G.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.jb,n=g.upgrade,p=g.closed,q=function(){r||(r=new ri(f.result,{closed:p}));return r},f.addEventListener("upgradeneeded",function(H){if(null===H.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");H.dataLoss&&"none"!==H.dataLoss&&Qh("IDB_DATA_CORRUPTED",{reason:H.dataLossMessage||"unknown reason",dbName:Yh(a)});var W=q(),R=new xi(f.transaction);n&&n(W,H.oldVersion,H.newVersion,R)}),h&&f.addEventListener("blocked",function(){h()}),w(G,oi(f),2);
A=G.i;k&&A.addEventListener("versionchange",function(){k(q())});
A.addEventListener("close",function(){Qh("IDB_UNEXPECTEDLY_CLOSED",{dbName:Yh(a),dbVersion:A.version});l&&l()});
return G.return(q())})})}
function Ii(a,b,c){c=void 0===c?{}:c;return Hi(a,b,c)}
function Ji(a,b){b=void 0===b?{}:b;return J(this,function d(){var e,f,g;return x(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return w(h,oi(e),0)})})}
;function Ki(a,b){this.name=a;this.options=b;this.j=!1}
Ki.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Ii(a,b,c)};
Ki.prototype.delete=function(a){a=void 0===a?{}:a;return Ji(this.name,a)};
Ki.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,jb:c,upgrade:this.options.upgrade},e=function(){return J(a,function g(){var h=this,k,l,n;return x(g,function(p){switch(p.h){case 1:return p.j=2,w(p,h.i(h.name,h.options.version,d),4);case 4:k=p.i;a:{var r=u(Object.keys(h.options.za));for(var q=r.next();!q.done;q=r.next())if(q=q.value,!k.h.objectStoreNames.contains(q)){r=q;break a}r=void 0}l=r;if(void 0===l){p.h=5;break}if(h.j){p.h=6;break}h.j=!0;return w(p,h.delete(),7);case 7:return p.return(e());case 6:throw new ei(l);case 5:return p.return(k);
case 2:n=sa(p);if(n instanceof DOMException?"VersionError"===n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"===n.name:n instanceof Object&&"message"in n&&"An attempt was made to open a database using a lower version than the existing version."===n.message)return p.return(h.i(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw n;}})})};
this.h=b=e()}return this.h};var Li=new Ki("YtIdbMeta",{za:{databases:!0},upgrade:function(a,b){1>b&&ui(a,"databases",{keyPath:"actualName"})}});
function Mi(a){return J(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Li.open(),2);d=e.i;return e.return(si(d,["databases"],{H:!0,mode:"readwrite"},function(f){var g=ti(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return Y(g.h.put(a,void 0)).then(function(){})})}))})})}
function Ni(a){return J(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Li.open(),2);d=e.i;return e.return(d.delete("databases",a))})})}
function Oi(){return J(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,Li.open(),2);if(3!=e.h)return c=e.i,w(e,c.count("databases"),3);d=e.i;return e.return(0<d)})})}
function Pi(a){return J(this,function c(){var d,e;return x(c,function(f){return 1==f.h?(d=[],w(f,Li.open(),2)):3!=f.h?(e=f.i,w(f,si(e,["databases"],{H:!0,mode:"readonly"},function(g){d.length=0;return Ci(ti(g,"databases"),{},function(h){a(h.getValue())&&d.push(h.getValue());return h.continue()})}),3)):f.return(d)})})}
function Qi(){return Pi(function(a){return"LogsDatabaseV2"===a.publicName&&void 0!==a.userIdentifier})}
;var Ri;
function Si(){return J(this,function b(){var c,d,e,f,g;return x(b,function(h){switch(h.h){case 1:if(Q("ytidb_is_supported_cache_success_result")&&(c=Sh(),null===c||void 0===c?0:c.hasSucceededOnce))return h.return(new Th(!0));var k;if(k=rg)k=/WebKit\/([0-9]+)/.exec(Lb),k=!!(k&&600<=parseInt(k[1],10));k&&(k=/WebKit\/([0-9]+)/.exec(Lb),k=!(k&&602<=parseInt(k[1],10)));if(k)return h.return(Vh(Error("YtIdb is not supported on iOS 8 or 9")));if(fc)return h.return(Vh(Error("YtIdb is not supported on Edge")));try{if(d=
self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return h.return(Vh(Error("Non-prefixed indexedDB APIs are missing")))}catch(l){return h.return(Vh(l))}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return h.return(Vh(Error("IDBTransaction.prototype.objectStoreNames is missing")));h.j=2;e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(h,Mi(e),4);case 4:return w(h,Ni("yt-idb-test-do-not-use"),5);
case 5:return h.return(new Th(!0));case 2:f=sa(h);if(!Uh()){h.h=6;break}h.j=7;return w(h,Oi(),9);case 9:return g=h.i,h.return(Vh(f,g));case 7:return sa(h),h.return(Vh(f));case 6:return h.return(Vh(f))}})})}
function Ti(){if(void 0!==Ri)return Ri;Oh=!0;return Ri=Si().then(function(a){Oh=!1;a.log();return a.isSupported()})}
;function Ui(){var a=new V("AUTH_INVALID");Ph(a);throw a;throw Error("Datasync ID not set");}
function Vi(a,b,c,d){var e;return J(this,function g(){var h,k;return x(g,function(l){switch(l.h){case 1:return w(l,Wi({caller:"openDbImpl",publicName:a,version:b}),2);case 2:return Xh(a),c?h={actualName:a,publicName:a,userIdentifier:void 0}:h=Ui(),h.clearDataOnAuthChange=null!==(e=d.clearDataOnAuthChange)&&void 0!==e?e:!1,l.j=3,w(l,Mi(h),5);case 5:return w(l,Ii(h.actualName,b,d),6);case 6:return l.return(l.i);case 3:return k=sa(l),l.j=7,w(l,Ni(h.actualName),9);case 9:l.h=8;l.j=0;break;case 7:sa(l);
case 8:throw k;}})})}
function Wi(a){return J(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Ti(),2);if(!e.i)throw d=new V("IDB_NOT_SUPPORTED",{context:a}),Ph(d),d;e.h=0})})}
function Xi(a,b,c){c=void 0===c?{}:c;return Vi(a,b,!1,c)}
function Yi(a,b,c){c=void 0===c?{}:c;return Vi(a,b,!0,c)}
function Zi(a,b){b=void 0===b?{}:b;return J(this,function d(){var e;return x(d,function(f){if(1==f.h)return w(f,Ti(),2);if(3!=f.h){if(!f.i)return f.return();Xh(a);e=Ui();return w(f,Ji(e.actualName,b),3)}return w(f,Ni(e.actualName),0)})})}
function $i(a,b){var c=this;a=a.map(function(d){return J(c,function f(){return x(f,function(g){return 1==g.h?w(g,Ji(d.actualName,b),2):w(g,Ni(d.actualName),0)})})});
return Promise.all(a).then(function(){})}
function aj(){var a=void 0===a?{}:a;return J(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Ti(),2);if(3!=e.h){if(!e.i)return e.return();Xh("LogsDatabaseV2");return w(e,Qi(),3)}d=e.i;return w(e,$i(d,a),0)})})}
function bj(a,b){b=void 0===b?{}:b;return J(this,function d(){return x(d,function(e){if(1==e.h)return w(e,Ti(),2);if(3!=e.h){if(!e.i)return e.return();Xh(a);return w(e,Ji(a,b),3)}return w(e,Ni(a),0)})})}
;function cj(a,b){Ki.call(this,a,b);this.options=b;Xh(a)}
v(cj,Ki);cj.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ca?Yi:Xi)(a,b,Object.assign(Object.assign({},c),{clearDataOnAuthChange:this.options.clearDataOnAuthChange}))};
cj.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ca?bj:Zi)(this.name,a)};
function dj(a){var b;return function(){b||(b=new cj("LogsDatabaseV2",a));return b}}
;function ej(){X.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
v(ej,X);ej.reject=X.reject;ej.resolve=X.resolve;ej.all=X.all;var fj;function gj(){if(!fj){var a={};fj=dj({za:(a.LogsRequestsStore=!0,a.sapisid=!0,a.SWHealthLog=!0,a),Ca:!Q("nwl_use_ytidb_partitioning"),upgrade:function(b,c){2>c&&(ui(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).h.createIndex("newRequest",["status","authHash","interface","timestamp"],{unique:!1}),ui(b,"sapisid"));3>c&&ui(b,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:3})}return fj().open()}
function hj(a){return J(this,function c(){var d,e,f,g,h;return x(c,function(k){switch(k.h){case 1:return d={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(k,ij(),2);case 2:return e=k.i,w(k,gj(),3);case 3:return f=k.i,g=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:e,interface:F("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(k,wi(f,"LogsRequestsStore",g),4);case 4:return h=k.i,d.kb=T(),jj(d),k.return(h)}})})}
function kj(a){return J(this,function c(){var d,e,f,g,h,k,l,n;return x(c,function(p){switch(p.h){case 1:return d={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(p,ij(),2);case 2:return e=p.i,f=F("INNERTUBE_CONTEXT_CLIENT_NAME",0),g=[a,e,f,0],h=[a,e,f,T()],k=IDBKeyRange.bound(g,h),w(p,gj(),3);case 3:return l=p.i,n=void 0,w(p,si(l,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(r){return Fi(ti(r,"LogsRequestsStore").index("newRequest"),{query:k,direction:"prev"},function(q){q.getValue()&&
(n=q.getValue(),"NEW"===a&&(n.status="QUEUED",q.update(n)))})}),4);
case 4:return d.kb=T(),jj(d),p.return(n)}})})}
function lj(a){return J(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,gj(),2);d=e.i;return e.return(si(d,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(f){var g=ti(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",Y(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function mj(a){return J(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,gj(),2);d=e.i;return e.return(si(d,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(f){var g=ti(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,Y(g.h.put(h,void 0)).then(function(){return h})):ej.resolve(void 0)})}))})})}
function nj(a){return J(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,gj(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function oj(){return J(this,function b(){var c;return x(b,function(d){if(1==d.h)return w(d,gj(),2);c=d.i;return d.return(c.clear("LogsRequestsStore"))})})}
function pj(){return J(this,function b(){var c;return x(b,function(d){if(1==d.h)return w(d,gj(),2);c=d.i;return d.return(c.clear("SWHealthLog"))})})}
function qj(){return J(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,gj(),2);if(3!=e.h)return c=e.i,d=T()-2592E6,w(e,si(c,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(f){return Ci(ti(f,"LogsRequestsStore"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),3);
Q("web_clean_sw_logs_store")?e=w(e,si(c,["SWHealthLog"],{mode:"readwrite",H:!0},function(f){return Ci(ti(f,"SWHealthLog"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0):(e.h=0,e=void 0);
return e})})}
function rj(){return J(this,function b(){return x(b,function(c){return 1==c.h?w(c,aj(),2):w(c,bj("LogsDatabaseV2"),0)})})}
function ij(){return J(this,function b(){var c;return x(b,function(d){if(1==d.h){Mh.h||(Mh.h=new Mh);var e={};var f=$c([]);f&&(e.Authorization=f,f=void 0,void 0===f&&(f=Number(F("SESSION_INDEX",0)),f=isNaN(f)?0:f),e["X-Goog-AuthUser"]=f,"INNERTUBE_HOST_OVERRIDE"in ef||(e["X-Origin"]=window.location.origin),Q("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in ef&&(e["X-Goog-PageId"]=F("DELEGATED_SESSION_ID")));e instanceof O||(f=new O(Ga),we(f,2,e),e=f);return w(d,e,2)}c=d.i;e=d.return;f=sh(c);var g=
new rd;g.update(JSON.stringify(f,Object.keys(f).sort()));f=g.digest();g="";for(var h=0;h<f.length;h++)g+="0123456789ABCDEF".charAt(Math.floor(f[h]/16))+"0123456789ABCDEF".charAt(f[h]%16);return e.call(d,g)})})}
function sj(a){return J(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,gj(),2);d=e.i;return w(e,wi(d,"sapisid",a,"sapisid"),0)})})}
function tj(){return J(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,gj(),2);if(3!=e.h)return c=e.i,w(e,c.get("sapisid","sapisid"),3);d=e.i;return e.return(d||"")})})}
function jj(a){var b=pf("nwl_latency_sampling_rate",.01);.02<b||Math.random()<=b&&Fh("nwl_transaction_latency_payload",a)}
;var uj=["__Secure-1PAPISID","SAPISID","__Secure-3PAPISID"];function vj(){for(var a=u(uj),b=a.next();!b.done;b=a.next())if(b=Xc.get(b.value))return b;return"LOGGED_OUT"}
function wj(){me.call(this);this.pollingInterval=3E3;this.j=[null,null,null];this.m=!1;xj(this)}
v(wj,me);function yj(){wj.h||(wj.h=new wj);var a=wj.h;a.m=!0;a.verifyUser();zj(a)}
wj.prototype.verifyUser=function(){var a=xj(this),b=a.Ua;if(!a.ib)return zj(this),!0;ne(this,"ytsessionchange");b&&ne(this,"ytuserinvalid");zj(this);return!1};
function xj(a){var b=uj.map(function(e){var f;return null!==(f=Xc.get(e))&&void 0!==f?f:""}),c=b.some(function(e,f){return a.j&&""!==a.j[f]&&""===e}),d=b.some(function(e,f){return a.j&&a.j[f]!==e});
a.j=b;return{Ua:c,ib:d}}
function zj(a){a.m&&(Aj(a),a.l=Df(function(){a.verifyUser()},a.pollingInterval))}
function Aj(a){a.l&&(If(a.l),a.l=void 0)}
;var Bj;function Cj(){Bj||(Bj=new th("yt.offline"));return Bj}
function Dj(a){if(Q("offline_error_handling")){var b=Cj().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Cj().set("errors",b,2592E3,!0)}}
;function Ej(){me.call(this);this.l=this.A=this.C=this.m=!1;this.j=Fj();this.l=Q("validate_network_status");Gj(this);Hj(this)}
v(Ej,me);function Fj(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Hj(a){window.addEventListener("online",function(){return J(a,function c(){var d=this;return x(c,function(e){if(1==e.h){if(!d.l){d.j=!0;e.h=2;return}return w(e,Ij(d),3)}2!=e.h&&(d.j=e.i);d.m&&d.j&&ne(d,"ytnetworkstatus-online");Jj(d);if(d.A&&Q("offline_error_handling")){var f=Cj().get("errors",!0);if(f){for(var g in f)if(f[g]){var h=new Wh(g,"sent via offline_errors");h.name=f[g].name;h.stack=f[g].stack;h.level=f[g].level;kf(h)}Cj().set("errors",{},2592E3,!0)}}e.h=0})})})}
function Gj(a){window.addEventListener("offline",function(){return J(a,function c(){var d=this;return x(c,function(e){if(1==e.h){if(!d.l){d.j=!1;e.h=2;return}return w(e,Ij(d),3)}2!=e.h&&(d.j=e.i);d.m&&!d.j&&ne(d,"ytnetworkstatus-offline");Jj(d);e.h=0})})})}
function Jj(a){a.C&&(lf(new Wh("NetworkStatusManager state did not match poll",T()-0)),a.C=!1)}
function Ij(a){return J(a,function c(){var d;return x(c,function(e){switch(e.h){case 1:return e.j=2,w(e,fetch("/generate_204",{method:"HEAD"}),4);case 4:d=!0;e.h=3;e.j=0;break;case 2:sa(e),d=!1;case 3:return e.return(d)}})})}
;function Kj(a){a=void 0===a?{}:a;me.call(this);var b=this;this.l=this.A=0;Ej.h||(Ej.h=new Ej);this.j=Ej.h;this.j.m=!0;a.Ta&&(this.j.A=!0);a.ea?(this.ea=a.ea,de(this.j,"ytnetworkstatus-online",function(){Lj(b,"publicytnetworkstatus-online")}),de(this.j,"ytnetworkstatus-offline",function(){Lj(b,"publicytnetworkstatus-offline")})):(de(this.j,"ytnetworkstatus-online",function(){ne(b,"publicytnetworkstatus-online")}),de(this.j,"ytnetworkstatus-offline",function(){ne(b,"publicytnetworkstatus-offline")}))}
v(Kj,me);function Mj(){var a=Nj().j;a.l||a.j===Fj()||lf(new Wh("NetworkStatusManager isOnline does not match window status"));return a.j}
function Lj(a,b){a.ea?a.l?(If(a.A),a.A=Ff(function(){a.m!==b&&(ne(a,b),a.m=b,a.l=T())},a.ea-(T()-a.l))):(ne(a,b),a.m=b,a.l=T()):ne(a,b)}
;var Oj=!1,Pj=!1,Qj=0,Rj;function Sj(){J(this,function b(){var c,d,e,f;return x(b,function(g){switch(g.h){case 1:return w(g,Ti(),2);case 2:(c=g.i)&&(Pj=!0);d=Q("networkless_logging");if(c&&d)return Q("nwl_use_ytidb_partitioning")?w(g,bj("LogsDatabaseV2"),8):w(g,aj(),8);if(!c){g.h=0;break}return w(g,rj(),0);case 8:return yj(),document.addEventListener("ytsessionchange",function(){Tj()}),w(g,tj(),11);
case 11:e=g.i;f=vj();if(e===f){g.h=12;break}Tj();return w(g,sj(f),12);case 12:if(!(Q("enable_nwl_cleaning_logic")&&Math.random()<=pf("nwl_cleaning_rate",.1))){g.h=14;break}return w(g,qj(),14);case 14:Oj=!0;Uj();Mj()&&Vj();de(Nj(),"publicytnetworkstatus-online",Vj);de(Nj(),"publicytnetworkstatus-offline",Wj);if(!Q("networkless_immediately_drop_sw_health_store")){g.h=16;break}return w(g,Xj(),16);case 16:if(Q("networkless_immediately_drop_all_requests"))return w(g,rj(),0);g.h=0}})})}
function Yj(a,b){function c(d){var e=Mj();if(!Oj||!d||e&&Q("vss_networkless_bypass_write"))jg(a,b);else{var f={url:a,options:b,timestamp:T(),status:"NEW",sendCount:0};hj(f).then(function(g){f.id=g;(Mj()||Q("networkless_always_online"))&&Zj(f)}).catch(function(g){Zj(f);
Mj()?kf(g):Dj(g)})}}
b=void 0===b?{}:b;Q("skip_is_supported_killswitch")?Ti().then(function(d){c(d)}):c(Pj)}
function ak(a,b){function c(d){if(Oj&&d){var e={url:a,options:b,timestamp:T(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?nj(e.id):f=!0;g(h,k)};
jg(e.url,e.options);hj(e).then(function(h){e.id=h;f&&nj(e.id)}).catch(function(h){Mj()?kf(h):Dj(h)})}else jg(a,b)}
b=void 0===b?{}:b;Q("skip_is_supported_killswitch")?Ti().then(function(d){c(d)}):c(Pj)}
function Vj(){var a=this;Qj||(Qj=Ff(function(){return J(a,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,kj("NEW"),2);if(3!=e.h)return d=e.i,d?w(e,Zj(d),3):(Wj(),e.return());Qj=0;Vj();e.h=0})})},100))}
function Wj(){If(Qj);Qj=0}
function Zj(a){return J(this,function c(){var d;return x(c,function(e){switch(e.h){case 1:if(void 0===a.id){e.h=2;break}return w(e,lj(a.id),3);case 3:(d=e.i)?a=d:lf(Error("The request cannot be found in the database."));case 2:if(bk(a,2592E6)){e.h=4;break}lf(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.h=5;break}return w(e,nj(a.id),5);case 5:return e.return();case 4:var f=a=ck(a),g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:f.options)||void 0===
g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(T());(a=f)&&jg(a.url,a.options);e.h=0}})})}
function ck(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return J(b,function h(){return x(h,function(k){if(1==k.h)return void 0===(null===a||void 0===a?void 0:a.id)?(k.h=2,k=void 0):k=1>a.sendCount?w(k,mj(a.id),6):w(k,nj(a.id),2),k;2!=k.h&&Ff(function(){Mj()&&Vj()},5E3);
c(e,f);k.h=0})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return J(b,function h(){return x(h,function(k){if(1==k.h)return void 0===(null===a||void 0===a?void 0:a.id)?(k.h=2,k=void 0):k=w(k,nj(a.id),2),k;d(e,f);k.h=0})})};
return a}
function bk(a,b){a=a.timestamp;return T()-a>=b?!1:!0}
function Uj(){var a=this;kj("QUEUED").then(function(b){b&&!bk(b,12E4)&&Ff(function(){return J(a,function d(){return x(d,function(e){if(1==e.h)return void 0===b.id?(e.h=2,e=void 0):e=w(e,mj(b.id),2),e;Uj();e.h=0})})})})}
function Tj(){oj().catch(function(a){kf(a)})}
function Xj(){return J(this,function b(){return x(b,function(c){return c.return(pj().catch(function(d){kf(d)}))})})}
function Nj(){Rj||(Rj=new Kj({Ta:!0}));return Rj}
;function dk(a){var b=this;this.h=null;a?this.h=a:qh()&&(this.h=bh());Df(function(){yh(b)},5E3)}
dk.prototype.isReady=function(){!this.h&&qh()&&(this.h=bh());return!!this.h};
function eh(a,b,c,d){function e(r){r=void 0===r?!1:r;var q;if(d.retry&&"www.youtube-nocookie.com"!=h&&(r||(q=wh(b,c,l,k)),q)){var A=g.onSuccess,G=g.onFetchSuccess;g.onSuccess=function(H,W){xh(q);A(H,W)};
c.onFetchSuccess=function(H,W){xh(q);G(H,W)}}try{r&&d.retry&&!d.ya.bypassNetworkless?(g.method="POST",!d.ya.writeThenSend&&Q("nwl_send_fast_on_unload")?ak(p,g):Yj(p,g)):(g.method="POST",g.postParams||(g.postParams={}),jg(p,g))}catch(H){if("InvalidAccessError"==H.name)q&&(xh(q),q=0),lf(Error("An extension is blocking network request."));
else throw H;}q&&Df(function(){yh(a)},5E3)}
!F("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&lf(new Wh("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Wh("innertube xhrclient not ready",b,c,d);kf(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(r,q){if(d.onSuccess)d.onSuccess(q)},
onFetchSuccess:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,q){if(d.onError)d.onError(q)},
onFetchError:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.h.Pa)&&(h=f);var k=a.h.Ra||!1,l=rh(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&(g.headers["x-origin"]=window.location.origin);f="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var n={alt:"json"};a.h.Qa&&g.headers.Authorization||(n.key=a.h.innertubeApiKey);var p=Yf(""+h+f,n||{},!0);Oj?Ti().then(function(r){e(r)}):e(!1)}
;function ek(a,b,c){c=void 0===c?{}:c;var d=dk;F("ytLoggingEventsDefaultDisabled",!1)&&dk==dk&&(d=null);gh(a,b,d,c)}
;var fk=[{wa:function(a){return"Cannot read property '"+a.key+"'"},
na:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{wa:function(a){return"Cannot call '"+a.key+"'"},
na:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function gk(){this.h=[];this.i=[]}
var hk;function ik(){hk||(hk=new gk);return hk}
;var jk=new P;function kk(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=lk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=lk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=lk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function lk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function mk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=nk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=kk(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?nk(f+".ve",g,h,k):0;d+=f;d+=nk(e,a[e],b,c);if(500<d)break}}else c[b]=ok(a),d+=c[b].length;else c[b]=ok(a),d+=c[b].length;return d}
function nk(a,b,c,d){c+="."+a;a=ok(b);d[c]=a;return c.length+a.length}
function ok(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var pk=new Set,qk=0,rk=0,sk=0,tk=[],uk=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function vk(a){wk(a,"WARNING")}
function wk(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),Q("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=qk))){var g=td(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=mk(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var n=
a.params;if("object"===typeof a.params)for(l in n){if(n[l]){var p="params."+l,r=ok(n[l]);c[p]=r;k+=p.length+r.length;if(500<k)break}}else c.params=ok(n)}if(tk.length)for(l=0;l<tk.length&&!(k=mk(tk[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=
ik();c=u(a.i);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.Ck)){a=d.weight;break a}a=u(a.h);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Fa(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(fk);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.na[l.name])for(e=u(c.na[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=
d[g+1];l.message=c.wa(f);break}l.params||(l.params={});a=ik();l.params["params.errorServiceSignature"]="msg="+a.i.length+"&cb="+a.h.length;l.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!pk.has(l.message)){"ERROR"===b?(jk.P("handleError",l),Q("record_app_crashed_web")&&0===sk&&1===l.sampleWeight&&
(sk++,ek("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),rk++):"WARNING"===b&&jk.P("handleWarning",l);if(Q("kevlar_gel_error_routing")){a=b;b:{c=u(uk);for(d=c.next();!d.done;d=c.next())if(sg(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);c=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),
d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};e={pageUrl:window.location.href,kvPairs:[]};F("FEXP_EXPERIMENTS")&&(e.experimentIds=F("FEXP_EXPERIMENTS"));if(f=l.params)for(g=u(Object.keys(f)),h=g.next();!h.done;h=g.next())h=h.value,e.kvPairs.push({key:"client."+h,value:String(f[h])});
f=F("SERVER_NAME",void 0);g=F("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(ek("clientError",c),("ERROR"===a||Q("errors_flush_gel_always_killswitch"))&&Xg())}if(!Q("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,level:b,"client.name":a.name},postParams:{url:F("PAGE_NAME",window.location.href),
file:l.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=F("SERVER_NAME",void 0);c=F("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}jg(F("ECATCHER_REPORT_HOST",
"")+"/error_204",b)}pk.add(l.message);qk++}}}
function xk(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:fa(u(c)))}
;var yk={Qb:29434,Sb:3611,He:3854,Zf:42993,Ii:4724,tj:96370,lb:27686,mb:85013,nb:23462,pb:42016,qb:62407,rb:26926,ob:43781,sb:51236,tb:79148,ub:50160,vb:77504,Hb:87907,Ib:18630,Jb:54445,Kb:80935,Lb:105675,Mb:37521,Nb:47786,Ob:98349,Pb:6827,Rb:7282,Vb:32276,Ub:76278,Wb:93911,Xb:106531,Yb:27259,Zb:27262,ac:27263,dc:21759,ec:27107,fc:62936,hc:49568,ic:38408,jc:80637,kc:68727,lc:68728,mc:80353,nc:80356,oc:74610,pc:45707,qc:83962,sc:83970,tc:46713,uc:89711,wc:74612,xc:93265,yc:74611,Ac:113533,Bc:93252,
Cc:99357,Ec:94521,Fc:114252,Gc:113532,Hc:94522,Dc:94583,Ic:88E3,Jc:93253,Kc:93254,Lc:94387,Mc:94388,Nc:93255,Oc:97424,zc:72502,Pc:110111,Qc:76019,Sc:117092,Tc:117093,Rc:89431,Uc:110466,Vc:77240,Wc:60508,Xc:105350,Yc:73393,Zc:113534,bd:92098,cd:84517,dd:83759,ed:80357,fd:86113,gd:72598,hd:72733,jd:107349,kd:118203,ld:117431,md:117429,nd:117430,od:117432,pd:120080,qd:117259,rd:121692,sd:97615,td:31402,ud:84774,vd:95117,wd:98930,xd:98931,yd:98932,zd:43347,Ad:45474,Bd:100352,Cd:84758,Dd:98443,Ed:117985,
Fd:74613,Gd:74614,Hd:64502,Id:74615,Jd:74616,Kd:122224,Ld:74617,Md:77820,Nd:74618,Od:93278,Pd:93274,Qd:93275,Rd:93276,Sd:22110,Td:29433,Vd:120541,Xd:82047,Yd:113550,Zd:75836,ae:75837,be:42352,ce:84512,de:76065,ee:75989,ge:16623,he:32594,ie:27240,je:32633,ke:74858,me:3945,le:16989,ne:45520,oe:25488,pe:25492,qe:25494,re:55760,se:14057,te:18451,ue:57204,we:57203,xe:17897,ye:57205,ze:18198,Ae:17898,Be:17909,Ce:43980,De:46220,Ee:11721,Fe:49954,Ge:96369,Ie:56251,Je:25624,Ke:16906,Le:99999,Me:68172,Ne:27068,
Oe:47973,Pe:72773,Qe:26970,Re:26971,Se:96805,Te:17752,Ue:73233,Ve:109512,We:22256,Xe:14115,Ye:22696,Ze:89278,af:89277,bf:109513,cf:43278,df:43459,ef:43464,ff:89279,gf:43717,hf:55764,jf:22255,kf:89281,lf:40963,mf:43277,nf:43442,pf:91824,qf:120137,rf:96367,sf:36850,tf:72694,uf:37414,vf:36851,wf:121343,xf:73491,yf:54473,zf:43375,Af:46674,Bf:32473,Cf:72901,Df:72906,Ef:50947,Ff:50612,Gf:50613,Hf:50942,If:84938,Jf:84943,Kf:84939,Lf:84941,Mf:84944,Nf:84940,Of:84942,Pf:35585,Qf:51926,Rf:79983,Sf:63238,Tf:18921,
Uf:63241,Vf:57893,Wf:41182,Xf:33424,Yf:22207,ag:36229,cg:22206,dg:22205,eg:18993,fg:19001,gg:18990,hg:18991,ig:18997,jg:18725,kg:19003,lg:36874,mg:44763,ng:33427,og:67793,pg:22182,qg:37091,rg:34650,sg:50617,tg:47261,ug:22287,vg:25144,wg:97917,xg:62397,yg:36961,zg:108035,Ag:27426,Bg:27857,Cg:27846,Dg:27854,Eg:69692,Fg:61411,Gg:39299,Hg:38696,Ig:62520,Jg:36382,Kg:108701,Lg:50663,Mg:36387,Ng:14908,Og:37533,Pg:105443,Qg:61635,Rg:62274,Sg:65702,Tg:65703,Ug:65701,Vg:76256,Wg:37671,Xg:49953,Zg:36216,ah:28237,
bh:39553,dh:29222,eh:26107,fh:38050,gh:26108,ih:120745,hh:26109,jh:26110,kh:66881,lh:28236,mh:14586,nh:57929,oh:74723,ph:44098,qh:44099,rh:23528,sh:61699,th:59149,uh:101951,vh:97346,wh:118051,xh:95102,yh:64882,zh:119505,Ah:63595,Bh:63349,Ch:95101,Dh:75240,Eh:27039,Fh:68823,Gh:21537,Hh:83464,Ih:75707,Jh:83113,Kh:101952,Lh:101953,Nh:79610,Oh:24402,Ph:24400,Qh:32925,Rh:57173,Sh:122502,Th:64423,Uh:64424,Vh:33986,Wh:100828,Xh:21409,Yh:11070,Zh:11074,ai:17880,bi:14001,di:30709,fi:30707,gi:30711,hi:30710,
ii:30708,ci:26984,ji:63648,ki:63649,li:51879,mi:111059,ni:5754,oi:20445,ri:110386,si:113746,ti:66557,vi:17310,wi:28631,xi:21589,yi:68012,zi:60480,Ai:31571,Bi:76980,Ci:41577,Di:45469,Ei:38669,Fi:13768,Gi:13777,Hi:62985,Ji:59369,Ki:43927,Li:43928,Mi:12924,Ni:100355,Qi:56219,Ri:27669,Si:10337,Pi:47896,Ti:122629,Ui:121258,Vi:107598,Wi:96639,Xi:107536,Yi:96661,Zi:96658,aj:116646,bj:121122,cj:96660,dj:104443,ej:96659,fj:106442,gj:63667,hj:63668,ij:63669,jj:78314,kj:55761,lj:96368,mj:67374,nj:48992,oj:49956,
pj:31961,qj:26388,rj:23811,sj:5E4,uj:47355,vj:47356,wj:37935,xj:45521,yj:21760,zj:83769,Aj:49977,Bj:49974,Cj:93497,Dj:93498,Ej:34325,Fj:115803,Gj:123707,Hj:100081,Ij:35309,Jj:68314,Kj:25602,Lj:100339,Mj:59018,Nj:18248,Oj:50625,Pj:9729,Qj:37168,Rj:37169,Sj:21667,Tj:16749,Uj:18635,Vj:39305,Wj:18046,Xj:53969,Yj:8213,Zj:93926,ak:102852,bk:110099,ck:22678,dk:69076,fk:100856,gk:17736,hk:3832,ik:55759,jk:64031,kk:93044,lk:93045,mk:34388,nk:17657,pk:17655,qk:39579,rk:39578,sk:77448,tk:8196,uk:11357,vk:69877,
wk:8197,xk:82039};function zk(a,b,c){L.call(this);var d=this;c=c||F("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.C="*";this.l=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.C=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.u||0<=Wa(d.u,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.u=this.i=this.m=null;window.addEventListener("message",this.A)}
v(zk,L);zk.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.C)}catch(d){lf(d)}}};
zk.prototype.B=function(){window.removeEventListener("message",this.A);L.prototype.B.call(this)};function Ak(){this.l=[];this.isReady=!1;this.o={};var a=this.i=new zk(!!F("WIDGET_ID_ENFORCE")),b=this.Ya.bind(this);a.m=b;a.u=null;this.i.channel="widget";if(a=F("WIDGET_ID"))this.i.sessionId=a}
m=Ak.prototype;m.Ya=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.o[a]||"onReady"===a||(this.addEventListener(a,Bk(this,a)),this.o[a]=!0)):this.oa(a,b,c)};
m.oa=function(){};
function Bk(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.Ja=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.ja());this.sendMessage("onReady");E(this.l,this.Ba,this);this.l=[]};
m.ja=function(){return null};
function Ck(a,b){a.sendMessage("infoDelivery",b)}
m.Ba=function(a){this.isReady?this.i.sendMessage(a):this.l.push(a)};
m.sendMessage=function(a,b){this.Ba({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.i=null};function Dk(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Ek(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Fk(a)}
function Fk(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Gk(a,b,c,d){if(Ka(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Hk(a){Ak.call(this);this.h=a;this.j=[];this.addEventListener("onReady",C(this.Va,this));this.addEventListener("onVideoProgress",C(this.fb,this));this.addEventListener("onVolumeChange",C(this.gb,this));this.addEventListener("onApiChange",C(this.Za,this));this.addEventListener("onPlaybackQualityChange",C(this.bb,this));this.addEventListener("onPlaybackRateChange",C(this.cb,this));this.addEventListener("onStateChange",C(this.eb,this));this.addEventListener("onWebglSettingsChanged",C(this.hb,
this))}
v(Hk,Ak);m=Hk.prototype;m.oa=function(a,b,c){if(this.h.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Dk(a)){var d=b;if(Ka(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Fk.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Ek.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Gk.apply(window,d)}d=e}b.length=1;b[0]=d}this.h.handleExternalCall(a,b,c);Dk(a)&&Ck(this,this.ja())}};
m.Va=function(){var a=this.Ja.bind(this);this.i.i=a};
m.addEventListener=function(a,b){this.j.push({eventType:a,listener:b});this.h.addEventListener(a,b)};
m.ja=function(){if(!this.h)return null;var a=this.h.getApiInterface();ab(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.h[e]();b[f]=g}catch(h){}}}b.videoData=this.h.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.eb=function(a){a={playerState:a,currentTime:this.h.getCurrentTime(),duration:this.h.getDuration(),videoData:this.h.getVideoData(),videoStartBytes:0,videoBytesTotal:this.h.getVideoBytesTotal(),videoLoadedFraction:this.h.getVideoLoadedFraction(),playbackQuality:this.h.getPlaybackQuality(),availableQualityLevels:this.h.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getVideoUrl&&(a.videoUrl=
this.h.getVideoUrl());this.h.getVideoContentRect&&(a.videoContentRect=this.h.getVideoContentRect());this.h.getProgressState&&(a.progressState=this.h.getProgressState());this.h.getPlaylist&&(a.playlist=this.h.getPlaylist());this.h.getPlaylistIndex&&(a.playlistIndex=this.h.getPlaylistIndex());this.h.getStoryboardFormat&&(a.storyboardFormat=this.h.getStoryboardFormat());Ck(this,a)};
m.bb=function(a){Ck(this,{playbackQuality:a})};
m.cb=function(a){Ck(this,{playbackRate:a})};
m.Za=function(){for(var a=this.h.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.h.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.h.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.gb=function(){Ck(this,{muted:this.h.isMuted(),volume:this.h.getVolume()})};
m.fb=function(a){a={currentTime:a,videoBytesLoaded:this.h.getVideoBytesLoaded(),videoLoadedFraction:this.h.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getProgressState&&(a.progressState=this.h.getProgressState());Ck(this,a)};
m.hb=function(){var a={sphericalProperties:this.h.getSphericalProperties()};Ck(this,a)};
m.dispose=function(){Ak.prototype.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.h.removeEventListener(b.eventType,b.listener)}this.j=[]};function Ik(){var a=lb(Jk),b;return Ce(new O(function(c,d){a.onSuccess=function(e){dg(e)?c(e):d(new Kk("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Kk("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Kk("Request timed out","net.timeout",e))};
b=jg("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof De&&b.abort();
return Ae(c)})}
function Kk(a,b,c){Ta.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Kk,Ta);function Lk(){this.i=0;this.h=null}
Lk.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),ve(a)?a:Mk(a)):2===this.i&&b?(a=b.call(c,this.h),ve(a)?a:Nk(a)):this};
Lk.prototype.getValue=function(){return this.h};
Lk.prototype.$goog_Thenable=!0;function Nk(a){var b=new Lk;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function Mk(a){var b=new Lk;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function Ok(a){Ta.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Pk;this.isTimeout=a instanceof Kk&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof De}
v(Ok,Ta);Ok.prototype.name="BiscottiError";function Pk(){Ta.call(this,"Biscotti ID is missing from server")}
v(Pk,Ta);Pk.prototype.name="BiscottiMissingError";var Jk={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Qk=null;
function Pf(){if(Q("disable_biscotti_fetch_on_html5_clients"))return Ae(Error("Fetching biscotti ID is disabled."));if(Q("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!Xc.get("CONSENT","").startsWith("YES+"))return Ae(Error("User has not consented - not fetching biscotti id."));if("1"==jb())return Ae(Error("Biscotti ID is not available in private embed mode"));Qk||(Qk=Ce(Ik().then(Rk),function(a){return Sk(2,a)}));
return Qk}
function Rk(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Pk;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Pk;a=a.id;Qf(a);Qk=Mk(a);Tk(18E5,2);return a}
function Sk(a,b){b=new Ok(b);Qf("");Qk=Nk(b);0<a&&Tk(12E4,a-1);throw b;}
function Tk(a,b){S(function(){Ce(Ik().then(Rk,function(c){return Sk(b,c)}),Ga)},a)}
function Uk(){try{var a=B("yt.ads.biscotti.getId_");return a?a():Pf()}catch(b){return Ae(b)}}
;function Vk(a){if("1"!=jb()){a&&Of();try{Uk().then(function(){},function(){}),S(Vk,18E5)}catch(b){kf(b)}}}
;var Wk=Date.now().toString();
function Xk(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Wk)for(a=1,b=0;b<Wk.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Wk.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Yk,Zk=y.ytLoggingDocDocumentNonce_;Zk||(Zk=Xk(),Ra("ytLoggingDocDocumentNonce_",Zk));Yk=Zk;var $k={Ud:0,Tb:1,cc:2,Yg:3,Wd:4,ek:5,Mh:6,Oi:7,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE"};function al(a){this.h=a}
function bl(a){return new al({trackingParams:a})}
al.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
al.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
al.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function cl(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function dl(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function el(a){return F(dl(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",el,void 0);function fl(a){return(a=el(void 0===a?0:a))?new al({veType:a,youtubeData:void 0}):null}
function gl(){var a=F("csn-to-ctt-auth-info");a||(a={},ff("csn-to-ctt-auth-info",a));return a}
function hl(a){a=void 0===a?0:a;var b=F(cl(a));if(!b&&!F("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null}
z("yt_logging_screen.getCurrentCsn",hl,void 0);function il(a,b,c){var d=gl();(c=hl(c))&&delete d[c];b&&(d[a]=b)}
function jl(a){return gl()[a]}
z("yt_logging_screen.getCttAuthInfo",jl,void 0);function kl(a,b,c,d){c=void 0===c?0:c;if(a!==F(cl(c))||b!==F(dl(c)))il(a,d,c),ff(cl(c),a),ff(dl(c),b),b=function(){setTimeout(function(){a&&gh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Yk,clientScreenNonce:a},dk)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",kl,void 0);function ll(a){zh.call(this,1,arguments);this.csn=a}
v(ll,zh);var Ih=new Ah("screen-created",ll),ml=[],ol=nl,pl=0;function ql(a,b,c,d){c={csn:b,parentVe:c.getAsJson(),childVes:Ya(d,function(f){return f.getAsJson()})};
d=u(d);for(var e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(hb(e)||!e.trackingParams&&!e.veType)&&vk(Error("Child VE logged with no data"));d={D:jl(b),N:b};"UNDEFINED_CSN"==b?rl("visualElementAttached",c,d):a?gh("visualElementAttached",c,a,d):ek("visualElementAttached",c,d)}
function nl(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return wc(b)}
function rl(a,b,c){ml.push({payloadName:a,payload:b,options:c});pl||(pl=Jh())}
function Kh(a){if(ml){for(var b=u(ml),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,gh(c.payloadName,c.payload,null,c.options));ml.length=0}pl=0}
;function sl(){this.i=new Set;this.h=new Set;this.j=new Map}
sl.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ha(sl);function tl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!ul(a)||c.some(function(e){return!ul(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())vl(a,d.value);return a}
function vl(a,b){for(var c in b)if(ul(b[c])){if(c in a&&!ul(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});vl(a[c],b[c])}else if(wl(b[c])){if(c in a&&!wl(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);xl(a[c],b[c])}else a[c]=b[c];return a}
function xl(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,ul(c)?a.push(vl({},c)):wl(c)?a.push(xl([],c)):a.push(c);return a}
function ul(a){return"object"===typeof a&&!Array.isArray(a)}
function wl(a){return"object"===typeof a&&Array.isArray(a)}
;function yl(a,b){zh.call(this,1,arguments)}
v(yl,zh);function zl(a,b){zh.call(this,1,arguments)}
v(zl,zh);var Al=new Ah("aft-recorded",yl),Bl=new Ah("timing-sent",zl);var Cl=window;function Dl(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var El=Cl.performance||Cl.mozPerformance||Cl.msPerformance||Cl.webkitPerformance||new Dl;var Fl=!1;C(El.clearResourceTimings||El.webkitClearResourceTimings||El.mozClearResourceTimings||El.msClearResourceTimings||El.oClearResourceTimings||Ga,El);function Gl(a){var b=Hl(a);if(b.aft)return b.aft;a=F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Il(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Ra("ytcsi."+(a||"")+"data_",b));return b}
function Jl(a){a=Il(a);a.info||(a.info={});return a.info}
function Hl(a){a=Il(a);a.tick||(a.tick={});return a.tick}
function Kl(a){var b=Il(a).nonce;b||(b=Xk(),Il(a).nonce=b);return b}
function Ll(a){var b=Hl(a||""),c=Gl(a);c&&!Fl&&(Fh(Al,new yl(Math.round(c-b._start),a)),Fl=!0)}
;function Ml(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function Nl(a){a=a||"";var b=B("ytcsi.reference");b||(Ml(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Ml(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Ol=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",Ol,void 0);function Pl(){this.h=0}
function Ql(){Pl.h||(Pl.h=new Pl);return Pl.h}
Pl.prototype.tick=function(a,b,c){Rl(this,"tick_"+a+"_"+b)||ek("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Pl.prototype.info=function(a,b){var c=Object.keys(a).join("");Rl(this,"info_"+c+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,ek("latencyActionInfo",a))};
Pl.prototype.span=function(a,b){var c=Object.keys(a).join("");Rl(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,ek("latencyActionSpan",a))};
function Rl(a,b){Ol[b]=Ol[b]||{count:0};var c=Ol[b];c.count++;c.time=T();a.h||(a.h=Df(function(){var d=T(),e;for(e in Ol)Ol[e]&&6E4<d-Ol[e].time&&delete Ol[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Wh("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||vk(c)),!0):!1}
;var Z={},Sl=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.aida="appInstallDataAgeMs",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid="requestIds",Z.GetBrowse_rid=
"requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",Z.ncnp="webInfo.nonPreloadedNodeCount",
Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",Z.ssdm="shellStartupDurationMs",Z.br_trs=
"tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",Z.rcl="mwebInfo.responseContentLength",Z.GetSettings_rid=
"requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),Tl="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Ul={},Vl=(Ul.ccs="CANARY_STATE_",Ul.mver="MEASUREMENT_VERSION_",
Ul.pis="PLAYER_INITIALIZED_STATE_",Ul.yt_pt="LATENCY_PLAYER_",Ul.pa="LATENCY_ACTION_",Ul.yt_vst="VIDEO_STREAM_TYPE_",Ul),Wl="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Xl(a){return!!F("FORCE_CSI_ON_GEL",!1)||Q("csi_on_gel")||!!Il(a).useGel}
function Yl(a){a=Il(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
;function Zl(a,b,c){if(null!==b)if(Jl(c)[a]=b,Xl(c)){var d=b;b=Yl(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in Sl){b=Sl[a];0<=Wa(Tl,b)&&(d=!!d);a in Vl&&"string"===typeof d&&(d=Vl[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=tl({},e)}else 0<=Wa(Wl,a)||vk(new Wh("Unknown label logged with GEL CSI",
a)),f=void 0;f&&Xl(c)&&(b=Nl(c||""),tl(b.info,f),b=Yl(c),b.gelInfos||(b.gelInfos={}),tl(b.gelInfos,f),c=Kl(c),Ql().info(f,c))}else Nl(c||"").info[a]=b}
function $l(a,b,c){var d=Hl(c);if(!b&&"_"!==a[0]){var e=a;El.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),El.mark(e))}e=b||T();d[a]=e;e=Yl(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||T();if(Xl(c)){Nl(c||"").tick[a]=b||T();e=Kl(c);if("_start"===a){var f=Ql();Rl(f,"baseline_"+e)||ek("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Ql().tick(a,e,b);Ll(c);e=!0}else e=!1;if(!e){if(!B("yt.timing."+(c||"")+"pingSent_")&&(f=F((c||"")+"TIMING_ACTION",void 0),e=
Hl(c),B("ytglobal.timing"+(c||"")+"ready_")&&f&&"_start"in Hl(void 0)&&Gl(c)))if(Ll(c),c)am(c);else{f=!0;var g=F("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&am(c)}Nl(c||"").tick[a]=b||T()}return d[a]}
function am(a){if(!Xl(a)){var b=Hl(a),c=Jl(a),d=b._start,e=F("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:F((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Gl(a);var h=Hl(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Jl(a).yt_pvis&&"youtube"===e&&(Zl("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var n in c)"_"!==n.charAt(0)&&(f[n]=c[n]);b.ps=T();n={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),n[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;c="";for(var r in f)f.hasOwnProperty(r)&&(c+="&"+r+"="+f[r]);f="/csi_204?"+c.substring(1);window.navigator&&window.navigator.sendBeacon&&(b||Q("always_send_csi_204_with_beacon"))?yg(f):vg(f);z("yt.timing."+(a||"")+"pingSent_",!0,void 0);Fh(Bl,new zl(n.aft+(Number(g)||0),a))}}
var bm=window;bm.ytcsi&&(bm.ytcsi.info=Zl,bm.ytcsi.tick=$l);function cm(){this.l=[];this.o=[];this.h=[];this.i=new Set;this.m=new Map}
function dm(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=hl(c),h=fl(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&ql(a.client,g,h,[bl(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&ql(a.client,g,h,[bl(d.playerResponse.trackingParams)]))})}
function em(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.l.push([b,c]);else{var e=hl(d);c=c||fl(d);e&&c&&ql(a.client,e,c,[b])}}
cm.prototype.clickCommand=function(a,b,c){c=hl(void 0===c?0:c);if(!a.clickTrackingParams||!c)return!1;var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:bl(a.clickTrackingParams).getAsJson(),gestureType:e};b&&(a.clientData=b);b={D:jl(c),N:c};"UNDEFINED_CSN"==c?rl("visualElementGestured",a,b):d?gh("visualElementGestured",a,d,b):ek("visualElementGestured",a,b);return!0};
function fm(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){gm(a,b,c);var f=fl(c.layer);if(f){for(var g=u(a.l),h=g.next();!h.done;h=g.next())h=h.value,em(a,h[0],h[1]||f,c.layer);f=u(a.o);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=hl(g);var l=k[0]||fl(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={D:jl(h),N:h},"UNDEFINED_CSN"==h?rl("visualElementStateChanged",k,l):g?gh("visualElementStateChanged",k,g,l):ek("visualElementStateChanged",
k,l))}}};
hl(c.layer)||a.j();if(c.ta)for(var d=u(c.ta),e=d.next();!e.done;e=d.next())dm(a,e.value,c.layer);else wk(Error("Delayed screen needs a data promise."))}
function gm(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Wa?c.Wa:c.layer;var e=hl(d);d=fl(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));try{var g=a.client,h=f,k=c.sa,l=c.D,n=ol(),p={csn:n,pageVe:(new al({veType:b,youtubeData:void 0})).getAsJson()};h&&h.visualElement?p.implicitGesture={parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()}:h&&vk(new Wh("newScreen() parent element does not have a VE - rootVe",
b));k&&(p.cloneCsn=k);k={D:l,N:n};g?gh("screenCreated",p,g,k):ek("screenCreated",p,k);Fh(Ih,new ll(n));var r=n}catch(q){xk(q,{Gk:b,rootVe:d,parentVisualElement:void 0,Bk:e,Fk:f,sa:c.sa});wk(q);return}kl(r,b,c.layer,c.D);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=Q("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values($k));for(f=b.next();!f.done;f=b.next())if(hl(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,g=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:g},f={D:jl(e),N:e,
Ia:f},"UNDEFINED_CSN"==e?rl("visualElementHidden",d,f):b?gh("visualElementHidden",d,b,f):ek("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=r||"");Zl("csn",r);sl.getInstance().clear();d=fl(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(Q("web_mark_root_visible")||Q("music_web_mark_root_visible"))&&(e=r,r=Q("use_default_events_client")?void 0:dk,b={csn:e,ve:d.getAsJson(),eventType:1},f={D:jl(e),N:e},"UNDEFINED_CSN"==e?rl("visualElementShown",b,f):r?gh("visualElementShown",
b,r,f):ek("visualElementShown",b,f));a.i.delete(c.layer||0);a.j=void 0;e=u(a.m);for(r=e.next();!r.done;r=e.next())r=u(r.value),b=r.next().value,r.next().value.has(c.layer)&&d&&em(a,b,d,c.layer)}
;function hm(a){a&&(a.dataset?a.dataset[im("loaded")]="true":a.setAttribute("data-loaded","true"))}
function jm(a,b){return a?a.dataset?a.dataset[im(b)]:a.getAttribute("data-"+b):null}
var km={};function im(a){return km[a]||(km[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var lm=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,mm=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function nm(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(lm,""),c=c.replace(mm,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else om(a,b,c)}
function om(a,b,c){c=void 0===c?null:c;var d=pm(a),e=document.getElementById(d),f=e&&jm(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Dg(d,b),b=""+La(b),qm[b]=f),g||(e=rm(a,d,function(){jm(e,"loaded")||(hm(e),Gg(d),S(Qa(Hg,d),0))},c)))}
function rm(a,b,c,d){d=void 0===d?null:d;var e=Ec(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Sb(e,Mc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function sm(a){a=pm(a);var b=document.getElementById(a);b&&(Hg(a),b.parentNode.removeChild(b))}
function tm(a,b){a&&b&&(a=""+La(b),(a=qm[a])&&Fg(a))}
function pm(a){var b=document.createElement("a");Rb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ub(a)}
var qm={};var um=[],vm=!1;function wm(){if(!Q("disable_ad_status_on_html5_clients")&&(!Q("condition_ad_status_fetch_on_consent_cookie_html5_clients")||Xc.get("CONSENT","").startsWith("YES+"))&&"1"!=jb()){var a=function(){vm=!0;"google_ad_status"in window?ff("DCLKSTAT",1):ff("DCLKSTAT",2)};
try{nm("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}um.push(Ff(function(){if(!(vm||"google_ad_status"in window)){try{tm("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}vm=!0;ff("DCLKSTAT",3)}},5E3))}}
function xm(){var a=Number(F("DCLKSTAT",0));return isNaN(a)?0:a}
;function ym(){this.i=!1;this.h=null}
ym.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.i=!0,nm(b,function(){g.i=!1;var h=0<=b.indexOf("/th/");(h?window.trayride:window.botguard)?zm(g,c,!!f,h,d):(sm(b),vk(new Wh("Unable to load Botguard","from "+b)))},e)):a&&(e=Ec(document,"SCRIPT"),e.textContent=a,e.nonce=Ca(),document.head.appendChild(e),document.head.removeChild(e),((a=a.includes("trayride"))?window.trayride:window.botguard)?zm(this,c,!!f,a,d):vk(Error("Unable to load Botguard from JS")))};
function zm(a,b,c,d,e){var f,g;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{Am(a,new d(b,e?function(){return e(b)}:Ga))}catch(h){h instanceof Error&&vk(h)}else{try{Am(a,new d(b))}catch(h){h instanceof Error&&vk(h)}e&&e(b)}else vk(Error("Failed to finish initializing VM"))}
ym.prototype.invoke=function(a){a=void 0===a?{}:a;return this.h?this.h.hasOwnProperty("hot")?this.h.hot(void 0,void 0,a):this.h.invoke(void 0,void 0,a):null};
ym.prototype.dispose=function(){this.h=null};
function Am(a,b){a.h=b}
;var Bm=new ym;function Cm(){return!!Bm.h}
function Dm(a){a=void 0===a?{}:a;return Bm.invoke(a)}
;function Em(a){L.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Aa,this)}
v(Em,L);m=Em.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.R("RECEIVING"))};
m.R=function(a,b){this.started&&!this.h&&this.connection.R(a,b)};
m.Aa=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Fm(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Gm(a,c))&&this.R(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.ab.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.ab=function(a,b){this.started&&!this.h&&this.connection.R(a,this.ia(a,b))};
m.ia=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.B=function(){var a=this.connection;a.h||Ne(a.i,"command",this.Aa,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);L.prototype.B.call(this)};function Hm(a,b){Em.call(this,b);this.api=a;this.start()}
v(Hm,Em);Hm.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Hm.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Fm(a,b){switch(a){case "loadVideoById":return a=Fk(b),[a];case "cueVideoById":return a=Fk(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Gk(b),[a];case "cuePlaylist":return a=Gk(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Gm(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Hm.prototype.ia=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Em.prototype.ia.call(this,a,b)};
Hm.prototype.B=function(){Em.prototype.B.call(this);delete this.api};function Im(a){a=void 0===a?!1:a;L.call(this);this.i=new P(a);zd(this,Qa(xd,this.i))}
D(Im,L);Im.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
Im.prototype.l=function(a,b){this.h||this.i.P.apply(this.i,arguments)};function Jm(a,b,c){Im.call(this);this.j=a;this.destination=b;this.id=c}
v(Jm,Im);Jm.prototype.R=function(a,b){this.h||this.j.R(this.destination,this.id,a,b)};
Jm.prototype.B=function(){this.destination=this.j=null;Im.prototype.B.call(this)};function Km(a,b,c){L.call(this);this.destination=a;this.origin=c;this.i=xf(window,"message",this.j.bind(this));this.connection=new Jm(this,a,b);zd(this,Qa(xd,this.connection))}
v(Km,L);Km.prototype.R=function(a,b,c,d){this.h||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(pe(a),this.origin))};
Km.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h||c.l("command",b.command,b.data,a.origin))}};
Km.prototype.B=function(){yf(this.i);this.destination=null;L.prototype.B.call(this)};function Lm(){L.call(this);this.i=[]}
v(Lm,L);Lm.prototype.B=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.Fa)}L.prototype.B.call(this)};function Mm(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||lb(b);this.assets=a.assets||{};this.attrs=a.attrs||lb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Mm.prototype.clone=function(){var a=new Mm,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ia(c)?a[b]=lb(c):a[b]=c}return a};var Nm=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Om(a){a=a||"";if(window.spf){var b=a.match(Nm);spf.style.load(a,b?b[1]:"",void 0)}else Pm(a)}
function Pm(a){var b=Qm(a),c=document.getElementById(b),d=c&&jm(c,"loaded");d||c&&!d||(c=Rm(a,b,function(){jm(c,"loaded")||(hm(c),Gg(b),S(Qa(Hg,b),0))}))}
function Rm(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Mc(a);d.rel="stylesheet";d.href=tb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Qm(a){var b=Ec(document,"A");Rb(b,new Db(a,Eb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ub(a)}
;function Sm(a,b,c,d){L.call(this);var e=this;this.F=b;this.webPlayerContextConfig=d;this.fa=!1;this.api={};this.U=this.m=null;this.J=new P;this.i={};this.L=this.Z=this.elementId=this.ga=this.config=null;this.K=!1;this.l=this.A=null;this.aa={};this.Da=["onReady"];this.lastError=null;this.qa=NaN;this.C={};this.Ea=new Lm(this);this.T=0;this.j=this.u=a;zd(this,Qa(xd,this.J));Tm(this);Um(this);zd(this,Qa(xd,this.Ea));c?this.T=S(function(){e.loadNewVideoConfig(c)},0):d&&(Vm(this),Wm(this))}
v(Sm,L);m=Sm.prototype;m.getId=function(){return this.F};
m.loadNewVideoConfig=function(a){if(!this.h){this.T&&(Af(this.T),this.T=0);var b=a||{};b instanceof Mm||(b=new Mm(b));this.config=b;this.setConfig(a);Wm(this);this.isReady()&&Xm(this)}};
function Vm(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.F,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.F:a.config.attrs.id=a.F);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.ga=a;this.config=Ym(a);Vm(this);this.Z||(this.Z=Zm(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=Oc(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=Oc(Number(a)||a))};
function Xm(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function $m(a){var b=!0,c=an(a);c&&a.config&&(a=bn(a),b=jm(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function Wm(a){if(!a.h&&!a.K){var b=$m(a);if(b&&"html5"===(an(a)?"html5":null))a.L="html5",a.isReady()||cn(a);else if(dn(a),a.L="html5",b&&a.l&&a.u)a.u.appendChild(a.l),cn(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=en(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?Ym(a.config):void 0;d&&d(a.u,e,a.webPlayerContextConfig);cn(a)};
a.K=!0;b?a.A():(nm(bn(a),a.A),(b=fn(a))&&Om(b),gn(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function an(a){var b=Ac(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function cn(a){var b;if(!a.h){var c=an(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.K=!1,!en(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||hn(a)):a.qa=S(function(){cn(a)},50)}}
function hn(a){Tm(a);a.fa=!0;var b=an(a);if(b){a.m=jn(a,b,"addEventListener");a.U=jn(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=jn(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.m&&a.m(g,a.i[g]);Xm(a);a.Z&&a.Z(a.api);a.J.P("onReady",a.api)}
function jn(a,b,c){var d=b[c];return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];try{return a.lastError=null,d.apply(b,f)}catch(h){"sendAbandonmentPing"!==c&&(h.params=c,a.lastError=h,lf(h))}}}
function Tm(a){a.fa=!1;if(a.U)for(var b in a.i)a.i.hasOwnProperty(b)&&a.U(b,a.i[b]);for(var c in a.C)a.C.hasOwnProperty(c)&&Af(Number(c));a.C={};a.m=null;a.U=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.ga};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.fa};
function Um(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Gg("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Gg("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Gg("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=Zm(this,b);d&&(0<=Wa(this.Da,a)||this.i[a]||(b=kn(this,a),this.m&&this.m(a,b)),this.J.subscribe(a,d),"onReady"===a&&this.isReady()&&S(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h||(b=Zm(this,b))&&Ne(this.J,a,b)};
function Zm(a,b){var c=b;if("string"===typeof b){if(a.aa[b])return a.aa[b];c=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];(f=B(b))&&f.apply(y,e)};
a.aa[b]=c}return c?c:null}
function kn(a,b){var c="ytPlayer"+b+a.F;a.i[b]=c;y[c]=function(d){var e=S(function(){if(!a.h){a.J.P(b,d);var f=a.C,g=String(e);g in f&&delete f[g]}},0);
ib(a.C,String(e))};
return c}
m.getPlayerType=function(){return this.L||(an(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function dn(a){a.cancel();Tm(a);a.L=null;a.config&&(a.config.loaded=!1);var b=an(a);b&&($m(a)||!gn(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.u)for(a=a.u;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.A&&tm(bn(this),this.A);Af(this.qa);this.K=!1};
m.B=function(){dn(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){kf(b)}this.aa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.ga=this.config=this.api=null;delete this.u;delete this.j;L.prototype.B.call(this)};
function gn(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function bn(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function fn(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function en(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===Tf(d||"","&")[b]}
function Ym(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?lb(e):e}return b}
;var ln={},mn="player_uid_"+(1E9*Math.random()>>>0);function nn(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Ac(d):d;var e=mn+"_"+La(d),f=ln[e];if(f&&c)return on(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Sm(d,e,a,b);ln[e]=f;Gg("player-added",f.api);zd(f,function(){delete ln[f.getId()]});
return f.api}
function on(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var pn=null,qn=null,rn=null;function sn(){var a=pn.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function tn(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=F("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=F("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Xb(window.location.href);g&&f.push(g);g=Xb(d);if(0<=Wa(f,g)||!g&&0==d.lastIndexOf("/",0))if(Q("autoescape_tempdata_url")&&(f=document.createElement("a"),Rb(f,d),d=f.href),d){g=d.match(Vb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:hl()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Ub(d).toString(36),e=e?Zb(e):"",ih(b,e,k||5))}else k=b,e="ST-"+Ub(d).toString(36),k=k?Zb(k):"",ih(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=$b(a,l)+n;a=a instanceof Db?a:Jb(a);c.href=Fb(a)}return!0}
;z("yt.setConfig",ff,void 0);z("yt.config.set",ff,void 0);z("yt.setMsg",nf,void 0);z("yt.msgs.set",nf,void 0);z("yt.logging.errors.log",wk,void 0);
z("writeEmbed",function(){var a=F("PLAYER_CONFIG",void 0);if(!a){var b=F("PLAYER_VARS",void 0);b&&(a={args:b})}Vk(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=F("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);if((c=F("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;
if(!c.serializedForcedExperimentIds){var d=window.location.href;-1!=d.indexOf("?")?(d=(d||"").split("#")[0],d=d.split("?",2),d=Xf(1<d.length?d[1]:d[0])):d={};d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}pn=nn(a,c,!1)}else pn=nn(a);pn.addEventListener("onVideoDataChange",sn);a=F("POST_MESSAGE_ID","player");F("ENABLE_JS_API")?rn=new Hk(pn):F("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(qn=new Km(window.parent,a,b),rn=new Hm(pn,qn.connection));wm();F("EXPERIMENT_FLAGS").networkless_logging_web_embedded&&
Sj()},void 0);
var un=jf(function(){$l("ol");var a=jh.getInstance(),b=!!((mh("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Cd(document.body,"exp-invert-logo"))if(c&&!Cd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Cd(d,"inverted-hdpi")){var e=Ad(d);Bd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Cd(document.body,"inverted-hdpi")&&Dd();if(b!=c){b="f"+(Math.floor(119/31)+1);d=mh(b)||0;d=c?d|67108864:
d&-67108865;0==d?delete U[b]:(c=d.toString(16),U[b]=c.toString());c=!0;Q("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in U)d.push(f+"="+encodeURIComponent(String(U[f])));ih(b,d.join("&"),63072E3,a.i,c)}cm.h||(cm.h=new cm);a=cm.h;f=16623;var g=void 0===g?{}:g;Object.values(yk).includes(f)||(vk(new Wh("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.l=[];a.o=[];g.ta?fm(a,f,g):gm(a,f,g)}),vn=jf(function(){pn&&
pn.sendAbandonmentPing&&pn.sendAbandonmentPing();
F("PL_ATT")&&Bm.dispose();for(var a=0,b=um.length;a<b;a++)If(um[a]);um.length=0;sm("//static.doubleclick.net/instream/ad_status.js");vm=!1;ff("DCLKSTAT",0);yd(rn,qn);pn&&(pn.removeEventListener("onVideoDataChange",sn),pn.destroy())});
window.addEventListener?(window.addEventListener("load",un),window.addEventListener("unload",vn)):window.attachEvent&&(window.attachEvent("onload",un),window.attachEvent("onunload",vn));Ra("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Cm);Ra("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Dm);Ra("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||xm);
Ra("yt.player.exports.navigate",B("yt.player.exports.navigate")||tn);Ra("yt.util.activity.init",B("yt.util.activity.init")||Kf);Ra("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||Nf);Ra("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||Lf);}).call(this);
