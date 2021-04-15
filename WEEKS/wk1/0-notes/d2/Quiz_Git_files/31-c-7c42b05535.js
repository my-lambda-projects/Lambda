(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[31],{"+vku":function(e,t,n){"use strict"
var r=Array.isArray
var o=Object.keys
var i=Object.prototype.hasOwnProperty
e.exports=function e(t,n){if(t===n)return true
if(t&&n&&"object"==typeof t&&"object"==typeof n){var a,s,c,l=r(t),d=r(n)
if(l&&d){s=t.length
if(s!=n.length)return false
for(a=s;0!==a--;)if(!e(t[a],n[a]))return false
return true}if(l!=d)return false
var u=t instanceof Date,f=n instanceof Date
if(u!=f)return false
if(u&&f)return t.getTime()==n.getTime()
var h=t instanceof RegExp,p=n instanceof RegExp
if(h!=p)return false
if(h&&p)return t.toString()==n.toString()
var m=o(t)
s=m.length
if(s!==o(n).length)return false
for(a=s;0!==a--;)if(!i.call(n,m[a]))return false
for(a=s;0!==a--;){c=m[a]
if(!e(t[c],n[c]))return false}return true}return t!==t&&n!==n}},"/t/3":function(e,t,n){"use strict"
var r=n("cxn1")
n.d(t,"a",(function(){return r["a"]}))
r["a"]},"A/pL":function(e,t,n){"use strict"
n.d(t,"b",(function(){return r}))
n.d(t,"a",(function(){return i}))
n.d(t,"c",(function(){return o}))
function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
var t=i(e)
return l(a(t),t)}var o={style:1,keyframes:7,media:4}
function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return e.replace(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,"").replace(/@import[^;]*;/gim,"")}function a(e){var t={start:0,end:e.length}
var n=t
var r=e.split("")
r.forEach((function(e,r){switch(e){case"{":n.rules||(n.rules=[])
var o=n
var i=o.rules[o.rules.length-1]
n={start:r+1,parent:o,previous:i}
o.rules.push(n)
break
case"}":n.end=r+1
n=n.parent||t}}))
return t}function s(e,t){var n=e.previous?e.previous.end:e.parent.start
var r=e.start-1
var o=t.substring(n,r)
o=o.replace(/\s+/g," ")
o=o.substring(o.lastIndexOf(";")+1)
return o.trim()}function c(e){if(0!==e.indexOf("@"))return o.style
if(0===e.indexOf("@media"))return o.media
if(e.match(/^@[^\s]*keyframes/))return o.keyframes}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
if(e.parent){e.selector=s(e,t)
e.type=c(e.selector)}e.cssText=t.substring(e.start,e.end-1).trim()
e.rules&&e.rules.length>0&&(e.rules=e.rules.map((function(e){return l(e,t)})))
return e}},"AB+t":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return q}))
n.d(t,"b",(function(){return K}))
n.d(t,"d",(function(){return w}))
n.d(t,"c",(function(){return j}))
var r=n("VTBJ")
var o=n("rePB")
n("NwZX")
var i=n("bPMY")
var a=n("vy5g")
var s=n("/t/3")
n("PWNT")
var c=n("ovsC")
var l=n("iH1r")
var d="@@themeableDefaultTheme"
var u="GLOBAL_THEME_REGISTRY"
e[u]?m(h(e[u])):b()
function f(){return{styleSheet:s["a"],defaultThemeKey:null,components:Object(o["a"])({},d,{}),themes:{},registered:[]}}function h(e){var t=f()
if("undefined"===typeof e)return t
Object.keys(t).forEach((function(t){"undefined"===typeof e[t]&&false}))
return e}function p(){return e[u]}function m(t){e[u]=t}function b(){m(f())}function v(){var e=p(),t=e.defaultThemeKey,n=e.registered
return t||n[n.length-1]||d}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!e)return t
var n=p().themes[e]
if(n)return n
e!==d&&"[themeable] Could not find theme: '".concat(e,"' in the registry.")
return t}function y(e,t){var n=g(e)
var r=n.variables||{}
var o=Object(i["a"])(t)
if(!o&&n.immutable){"[themeable] Theme, '".concat(n.key,"', is immutable. Cannot apply overrides: ").concat(JSON.stringify(t))
return r}var s=Object(i["a"])(r)
if(!s&&!o)return Object(a["a"])(r,t)
if(s)return t||{}
return r}function O(e,t){var n
if(e)n=y(e,t)
else{var r=p().overrides
var o=Object(i["a"])(r)
n=o||Object(i["a"])(t)?o?t:r:Object(a["a"])(r,t)}return y(v(),n)}function _(e,t){return function(n){var o={}
"function"===typeof e&&(o=e(n))
var a={}
"function"===typeof e[t]&&(a=e[t](n))
Object(i["a"])(a)||Object(i["a"])(o)?Object(i["a"])(o)&&(o=a):o=Object(r["a"])({},o,{},a)
return o}}function w(e,t){var n=p(),r=n.components
if("function"!==typeof t)return
r[d][e]=t
Object.keys(t).forEach((function(n){r.hasOwnProperty(n)||(r[n]={})
r[n][e]=_(t,n)}))}function E(e){var t=p(),n=t.components
var o=e||v()
return Object(r["a"])({},n[d],{},n[o])}function k(e,t){var n=p(),r=n.components
return r[e]&&r[e][t]||r[d][t]}function K(e,t){var n=p()
n.registered.length
var r=E(e)
var o={}
var a=O(e,t)
if(Object(i["a"])(a))return
Object.getOwnPropertySymbols(r).forEach((function(e){o[e]=r[e](a)}))
return o}function q(e,t,n){var o=t||v()
var a=g(o)
var s={}
var c=a[e]
if(c)s=c
else{var l=Object(r["a"])({borders:{},breakpoints:{},colors:{},forms:{},media:{},shadows:{},spacing:{},stacking:{},transitions:{},typography:{}},O(t))
var d=k(o,e)
if("function"===typeof d)try{s=d(l)}catch(e){"[themeable] ".concat(e)}}if(Object(i["a"])(n))return a[e]=s
if(a.immutable){"[themeable] Theme '".concat(o,"' is immutable. Cannot apply overrides for '").concat(e.toString(),"': ").concat(JSON.stringify(n))
return s}return Object(i["a"])(s)?n:Object(r["a"])({},s,{},n)}function j(e,t,n){var r=p(),o=r.styleSheet
if(o&&!o.mounted(n)){var i=Object(c["a"])(e,t,n)
o.mount(n,Object(l["a"])(i))}}}).call(this,n("yLpj"))},AGIc:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=n("IFwx")
function o(e,t){var n={}
Object.keys(e||{}).forEach((function(e){n[e]="var(".concat(Object(r["a"])(e,t),")")}))
return n}},IFwx:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
function r(e,t){var n=t?"".concat(t,"-").concat(e):e
return"--".concat(n)}},NwZX:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}))
n.d(t,"b",(function(){return s}))
n.d(t,"c",(function(){return c}))
n("q1tI")
var r=false
function o(e,t,n,r){}function i(t,n){if(e.env.OMIT_INSTUI_DEPRECATION_WARNINGS){if(!t&&!r){r=true
o("warn",false,t,["There are Instructure UI deprecation warnings that are being hidden because the `OMIT_INSTUI_DEPRECATION_WARNINGS` environment variable is set. Remove or unset this variable to see the full list of warnings in your console.","These warnings will give you advance notice of breaking changes and upgrade guidance to keep your code up to date with the latest Instructure UI versions."].join("\n\n"))}}else{for(var i=arguments.length,a=new Array(i>2?i-2:0),s=2;s<i;s++)a[s-2]=arguments[s]
o.apply(void 0,["warn",true,t,n].concat(a))}}var a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return o.apply(void 0,["error",true].concat(t))}
var s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return o.apply(void 0,["warn",true].concat(t))}
var c=function(){return i.apply(void 0,arguments)}}).call(this,n("8oxB"))},PWNT:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r="getRandomVcryp0123456789bfhijklqsuvwxzABCDEFGHIJKLMNOPQSTUWXYZ"
var o=r.length-1
function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n="u".concat(s("",t-1))
return e&&false?"".concat(e,"__").concat(n):n}function a(e){var t=[]
while(0<e--)t.push(Math.floor(256*Math.random()))
return t}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n=""
var i=a(t)
while(0<t--)n+=r[i[t]&o]
return n}},bPMY:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=Object.prototype.hasOwnProperty
function o(e){if("object"!==typeof e)return true
for(var t in e)if(r.call(e,t))return false
return true}},bZJi:function(e,t,n){"use strict"
n.d(t,"a",(function(){return vr}))
var r=n("Ff2n")
var o=n("VTBJ")
var i=n("1OyB")
var a=n("vuIU")
var s=n("Ji7U")
var c=n("LK+K")
var l=n("q1tI")
var d=n.n(l)
var u=n("17x9")
var f=n.n(u)
n("NwZX")
function h(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return function(t){if("function"===typeof e){var r=t.displayName||t.name
var o=e.apply(void 0,[t].concat(n))
o.displayName=r
return o}return t}}}var p=function(){var e=function(){return function(e){return e}}
e.deprecatePropValues=function(){}
e.warnDeprecatedProps=function(){}
e.warnDeprecatedComponent=function(){}
e.changedPackageWarning=function(){}
return e}()
function m(e,t,n){if(t.as&&t.as!==e.defaultProps.as)return t.as
if("function"===typeof n)return n()
if(t.href)return"a"
if(t.to){t.as,"[".concat(e.displayName,"] `as` prop should be provided when using `to`")
return"a"}if("function"===typeof t.onClick)return"button"
return e.defaultProps.as||"span"}var b=n("9uj6")
var v=Object.prototype.hasOwnProperty
var g=function(e,t){var n={}
for(var r in e){if("theme"===r||"children"===r||"className"===r||"style"===r)continue
if(t.includes(r)||!v.call(e,r))continue
n[r]=e[r]}return n}
function y(e,t,n){var r=Object.keys(t||{})
var o=n?r.concat(n):r
return g(e,o)}function O(e,t){var n={}
var r=t.length
var o=-1
var i
while(++o<r){i=t[o]
i in e&&(n[i]=e[i])}return n}function _(e,t,n){var r=Object.keys(t||{})
var o=n?r.concat(n):r
return O(e,o)}function w(e){var t={}
Object.keys(e).filter((function(e){return Object(b["default"])(e)&&"style"!==e&&"className"!==e&&"children"!==e})).forEach((function(n){t[n]=e[n]}))
return t}function E(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.filter((function(e,n){if(null==e)return false
var r=k(t,e)
return 1===r.length||n===r[0]})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.")
if(null===e)return t
return function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o]
e.apply(this,r)
t.apply(this,r)}}),null)}function k(e,t){var n=[]
e.forEach((function(e,r){e===t&&n.push(r)}))
return n}function K(e,t){var n=t.ref
var r=e.ref
var i=Object(o["a"])({},t)
e.props.style&&t.style&&(i.style=Object(o["a"])({},e.props.style,{},t.style))
i.key=e.key||t.key
Object.keys(t).forEach((function(n){0!==n.indexOf("on")||"function"!==typeof t[n]&&"function"!==typeof e.props[n]||(i[n]=E(e.props[n],t[n]))}))
for(var a=arguments.length,s=new Array(a>2?a-2:0),c=2;c<a;c++)s[c-2]=arguments[c]
if(null==r||null==n)return d.a.cloneElement.apply(d.a,[e,i].concat(s))
"Cloning an element with a ref that will be overwritten because the ref is not a function. Use a composable callback-style ref instead. Ignoring ref: ".concat(r)
return d.a.cloneElement.apply(d.a,[e,Object(o["a"])({},i,{ref:function(e){n(e)
r(e)}})].concat(s))}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var n=l["Children"].count(e)
return 0===n?null:"string"===typeof e&&e.length>0||n>1?d.a.createElement("span",t,e):K(Array.isArray(e)?e[0]:e,t)}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if("function"===typeof e){if(!(e.prototype&&e.prototype.isReactComponent))return e(t)
return d.a.createElement(e,t)}return e}var C=!!("undefined"!==typeof window&&window.document&&window.document.createElement)
var T=C?f.a.oneOfType([f.a.element,f.a.instanceOf(Element)]):f.a.element
var U={placement:f.a.oneOf(["top","end","bottom","start","top start","start top","start center","start bottom","bottom start","bottom center","bottom end","end bottom","end center","end top","top end","top center","center end","center start","top stretch","bottom stretch","end stretch","start stretch","offscreen"]),mountNode:f.a.oneOfType([T,f.a.func]),constrain:f.a.oneOfType([T,f.a.func,f.a.oneOf(["window","scroll-parent","parent","none"])])}
var x=n("PWNT")
var S=n("vy5g")
var P=n("rePB")
var B="@@themeable"
var D={CONTEXT_KEY:B,types:Object(P["a"])({},B,f.a.object),makeThemeContext:function(e,t){return Object(P["a"])({},B,{theme:e,immutable:t})},getThemeContext:function(e){if(e)return e[B]}}
var N=n("md7G")
var A=n("foSv")
var R=n("ReuC")
var I=n("rE/H")
var M=n.n(I)
function F(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
var n=""
var r=e.length
var o
var i="="
for(var a=0;a<r;a+=3){o=e.charCodeAt(a)<<16|(a+1<r?e.charCodeAt(a+1)<<8:0)|(a+2<r?e.charCodeAt(a+2):0)
for(var s=0;s<4;s+=1)8*a+6*s>8*e.length?n+=i:n+=t.charAt(o>>>6*(3-s)&63)}return n}function W(e){var t=0
if(0===e.length)return t
for(var n=0;n<e.length;n++){var r=e.charCodeAt(n)
t=(t<<5)-t+r
t|=0}return F(String(t))}function z(e,t){if("undefined"===typeof e)throw new Error("Cannot hash a value which is undefined")
var n=""
var r=e
"string"!==typeof r&&(r="object"===typeof r?M()(r):r.toString())
n=W(r)
t&&(n=n.slice(0,t))
return n}var L=n("+vku")
var H=n.n(L)
var Y=Object.prototype.hasOwnProperty
function V(e,t){if(X(e,t))return true
if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return false
var n=Object.keys(e)
var r=Object.keys(t)
if(n.length!==r.length)return false
for(var o=0;o<n.length;o++)if(!Y.call(t,n[o])||!X(e[n[o]],t[n[o]]))return false
return true}function X(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}var J=n("bPMY")
var G=n("i8i4")
var Z=n.n(G)
function Q(e){var t="function"===typeof e?e():e
if(t===document)return document.documentElement
if(t instanceof Element||t===window||t&&"undefined"!==typeof t.nodeType)return t
if(t)return Z.a.findDOMNode(t)}var $=n("jloi")
function ee(e,t){var n={}
if(e===t||!t)return n
Object.keys(t).forEach((function(r){e[r]!==t[r]&&(n[r]=t[r])}))
return n}function te(e,t,n,r){if(!e||Object(J["a"])(t))return
ne(e,r)
var o=ee(n,t)
o&&!Object(J["a"])(o)&&re(e,Object($["a"])(o,r))}function ne(e,t){var n=e.style
for(var r=n.length-1;r>=0;r--){var o=n[r]
o.indexOf("--".concat(t,"-"))>=0&&e.style.removeProperty(o)}}function re(e,t){Object.keys(t).forEach((function(n){var r=t[n]
r&&e.style.setProperty(n,r)}))}var oe=!!("undefined"!==typeof window&&window.document&&window.document.createElement)
var ie=false
function ae(){if(ie)return
ie=true
if(oe){var e=document.documentElement.getAttribute("dir")
e||document.documentElement.setAttribute("dir","ltr")}}var se=n("AB+t")
var ce={}
var le=h((function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var r=arguments.length>3?arguments[3]:void 0
var o=e.displayName||e.name
var l="".concat(n&&n.componentId||z(e,8))
false
var d=Symbol(l)
var u=function(){}
n&&n.template&&(u="function"===typeof n.template?n.template:function(){return""})
Object(se["d"])(d,t)
var h=function(e){var t=D.getThemeContext(e)
return t||ce}
var p=function(e){var t=h(e),n=t.theme
return n&&n[d]?Object.assign({},n[d]):ce}
var m=function(e,t){return Object(se["a"])(d,e,t)}
var b=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){var e
Object(i["a"])(this,n)
var r=e=t.apply(this,arguments)
e._themeCache=null
e._instanceId=Object(x["a"])(o)
var a=m()
Object(se["c"])(u,a,l)
return Object(N["a"])(e,r)}Object(a["a"])(n,[{key:"componentDidMount",value:function(){this.applyTheme()
ae()
Object(R["a"])(Object(A["a"])(n.prototype),"componentDidMount",this)&&Object(R["a"])(Object(A["a"])(n.prototype),"componentDidMount",this).call(this)}},{key:"shouldComponentUpdate",value:function(e,t,r){var o=!H()(D.getThemeContext(this.context),D.getThemeContext(r))
if(o)return true
if(Object(R["a"])(Object(A["a"])(n.prototype),"shouldComponentUpdate",this))return Object(R["a"])(Object(A["a"])(n.prototype),"shouldComponentUpdate",this).call(this,e,t,r)
return!V(this.props,e)||!V(this.state,t)||!V(this.context,r)}},{key:"componentDidUpdate",value:function(e,t,r){H()(e.theme,this.props.theme)&&H()(p(r),p(this.context))||(this._themeCache=null)
this.applyTheme()
Object(R["a"])(Object(A["a"])(n.prototype),"componentDidUpdate",this)&&Object(R["a"])(Object(A["a"])(n.prototype),"componentDidUpdate",this).call(this,e,t,r)}},{key:"applyTheme",value:function(e){if(Object(J["a"])(this.theme))return
var t=m()
te(e||Q(this),this.theme,t,l)}},{key:"scope",get:function(){return"".concat(l,"__").concat(this._instanceId)}},{key:"theme",get:function(){if(null!==this._themeCache)return this._themeCache
var e=h(this.context),t=e.immutable
var n=p(this.context)
this.props.theme&&!Object(J["a"])(this.props.theme)&&(n?t?this.props.theme:n=Object(J["a"])(n)?this.props.theme:Object.assign({},n,this.props.theme):n=this.props.theme)
"function"===typeof r&&(n=r({theme:n,displayName:o}))
this._themeCache=m(null,n)
return this._themeCache}}])
return n}(e)
b.componentId=l
b.theme=d
b.contextTypes=Object.assign({},e.contextTypes,D.types)
b.propTypes=Object.assign({},e.propTypes,{theme:f.a.object})
b.generateTheme=m
return b}))
le.generateTheme=se["b"]
var de=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(a["a"])(n,[{key:"getChildContext",value:function(){var e=this.props.theme||{}
var t=D.getThemeContext(this.context)||{}
if(t.immutable&&t.theme){this.props.theme,this.props.theme
e=t.theme}else t.theme&&(e=Object(S["a"])(t.theme,e))
return D.makeThemeContext(e,t.immutable||this.props.immutable)}},{key:"render",value:function(){return q(this.props.children)}}])
n.displayName="ApplyTheme"
return n}(l["Component"])
de.propTypes={theme:f.a.object,children:f.a.node,immutable:f.a.bool}
de.defaultProps={theme:void 0,children:null,immutable:false}
de.childContextTypes=D.types
de.contextTypes=D.types
de.generateTheme=le.generateTheme
var ue={SHADOW_TYPES:{resting:"resting",above:"above",topmost:"topmost",none:"none"},STACKING_TYPES:{deepest:"deepest",below:"below",resting:"resting",above:"above",topmost:"topmost"},BORDER_WIDTHS:{0:"0",none:"none",small:"small",medium:"medium",large:"large"},BORDER_RADII:{0:"0",none:"none",small:"small",medium:"medium",large:"large",circle:"circle",pill:"pill"},BACKGROUNDS:{default:"default",inverse:"inverse",transparent:"transparent"},SIZES:{xSmall:"x-small",small:"small",medium:"medium",large:"large",xLarge:"x-large"},SPACING:{0:"0",none:"none",auto:"auto",xxxSmall:"xxx-small",xxSmall:"xx-small",xSmall:"x-small",small:"small",medium:"medium",large:"large",xLarge:"x-large",xxLarge:"xx-large"}}
n("pYVk")
n("IFwx")
n("ovsC")
function fe(e){return e.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}))}function he(e,t,n,r){if("string"!==typeof n||Object(J["a"])(t))return
return n.split(" ").map((function(n){if("auto"===n||"0"===n)return n
if("none"===n)return"0"
if("circle"===n)return"100%"
if("pill"===n)return"999em"
var o=fe("".concat(r,"-").concat(n))
var i=t[o]
"[".concat(e,"] '").concat(o,"' is an invalid '").concat(r,"' value.")
return i||"0"})).join(" ").trim()}function pe(e,t){var n={}
Object.keys(t).forEach((function(r){n[fe("".concat(e,"-").concat(r))]=t[r]}))
return n}function me(e){if("string"!==typeof e)return
var t=e.split(" ")
if(4===t.length){var n=[t[3],t[1]]
t[1]=n[0]
t[3]=n[1]}return t.join(" ")}function be(e){if("string"!==typeof e)return
var t=e.split(" ")
if(2===t.length){var n=[t[1],t[0]]
t[0]=n[0]
t[1]=n[1]}3===t.length&&t.push(t[1])
if(4===t.length){var r=[t[1],t[0],t[3],t[2]]
t[0]=r[0]
t[1]=r[1]
t[2]=r[2]
t[3]=r[3]}return t.join(" ")}n("AGIc")
var ve=ue.SHADOW_TYPES,ge=ue.STACKING_TYPES,ye=ue.BORDER_WIDTHS,Oe=ue.BORDER_RADII,_e=ue.BACKGROUNDS,we=ue.SIZES,Ee=ue.SPACING
var ke={shadow:f.a.oneOf(Object.values(ve)),stacking:f.a.oneOf(Object.values(ge)),borderWidth:Ke(Object.values(ye)),borderRadius:Ke(Object.values(Oe)),background:f.a.oneOf(Object.values(_e)),size:f.a.oneOf(Object.values(we)),spacing:Ke(Object.values(Ee))}
function Ke(e){return function(t,n,r,o){var i=t[n]
if("undefined"===typeof i)return
var a=typeof i
if("string"!==a)return new Error("Invalid ".concat(o," `").concat(n,"` of type `").concat(a,"` supplied to `").concat(r,"`, expected ")+"a string.")
var s=i.split(" ")
var c=s.length
if(!(c>0&&c<5))return new Error("Invalid ".concat(o," `").concat(n,"` `").concat(i,"` supplied to `").concat(r,"`, expected ")+"between one and four of the following valid values: `".concat(e.join(", "),"`."))
for(var l=0;l<c;l++){var d=e.indexOf(s[l])
if(-1===d)return new Error("Invalid ".concat(o," `").concat(n,"` `").concat(s[l],"` supplied to `").concat(r,"`, expected ")+"a one of `".concat(e.join(", "),"`."))}}}n("iH1r")
var qe=n("A/pL")
qe["a"]
qe["c"]
var je=n("ODXe")
var Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.map,n=void 0===t?{}:t,r=e.version,i=e.shouldIncludeOldValues,a=void 0!==i&&i
return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.theme,i=void 0===t?{}:t,s=e.displayName
return Object.entries(i).reduce((function(e,t){var i=Object(je["a"])(t,2),c=i[0],l=i[1]
if(n[c]){Array.isArray(n[c])?"[".concat(s,"] The theme variable `").concat(c,"` has been split into the following values `").concat(n[c].join(", "),"`.").concat(r?" In version ".concat(r,", `").concat(c,"` will no longer work as an override. Override each value individually instead."):""):"[".concat(s,"] The theme variable `").concat(c,"` has been changed to `").concat(n[c],"`.").concat(r?" In version ".concat(r,", `").concat(c,"` will no longer work as an override. Use `").concat(n[c],"` instead."):"")
var d={}
d=Array.isArray(n[c])?n[c].reduce((function(e,t){return Object(o["a"])({},e,Object(P["a"])({},t,l))}),{}):Object(P["a"])({},n[c],l)
return a?Object(o["a"])({},e,{},d,Object(P["a"])({},c,l)):Object(o["a"])({},e,{},d)}return Object(o["a"])({},e,Object(P["a"])({},c,l))}),{})}}
var Te=function(){return function(e){return e}}
var Ue=n("3zPy")
var xe=n.n(Ue)
function Se(e,t){var n=Q(e)
var r=Q(t)
return!(!n||!r)&&(n.contains?n.contains(r):n.compareDocumentPosition?n===r||!!(16&n.compareDocumentPosition(r)):Pe(n,r))}function Pe(e,t){var n=t
while(n){if(n===e)return true
n=n.parentNode}return false}var Be=oe?Se:Pe
function De(e){var t=e&&Q(e)
return t&&t.ownerDocument||document}function Ne(e){var t={top:0,left:0,height:0,width:0}
if(!oe)return t
var n=Q(e)
if(!n)return t
if(n===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var r=e===document?document:De(n)
var o=r&&r.documentElement
if(!o||!Be(o,n))return t
var i=n.getBoundingClientRect()
var a
for(a in i)t[a]=i[a]
if(r!==document){var s=r.defaultView.frameElement
if(s){var c=Ne(s)
t.top+=c.top
t.bottom+=c.top
t.left+=c.left
t.right+=c.left}}return{top:t.top+(window.pageYOffset||o.scrollTop)-(o.clientTop||0),left:t.left+(window.pageXOffset||o.scrollLeft)-(o.clientLeft||0),width:(null==t.width?n.offsetWidth:t.width)||0,height:(null==t.height?n.offsetHeight:t.height)||0,right:r.body.clientWidth-t.width-t.left,bottom:r.body.clientHeight-t.height-t.top}}function Ae(e){var t=e&&Q(e)
var n=De(t)
return n&&(n.defaultView||n.parentWindow)}function Re(e){var t={}
if(oe){var n=e&&Q(e)
t=n?Ae(e).getComputedStyle(n):{}}return t}function Ie(e){var t=[]
if(!oe)return t
var n=Q(e)
if(n){var r=Re(n)||{}
var o=r.position
if("fixed"===o)return[n.ownerDocument]
var i=n
while(i&&1===i.nodeType&&(i=i.parentNode)){var a=void 0
try{a=Re(i)}catch(e){}if("undefined"===typeof a||null===a){t.push(i)
return t}var s=a,c=s.overflow,l=s.overflowX,d=s.overflowY;/(auto|scroll|overlay)/.test(c+d+l)&&("absolute"!==o||["relative","absolute","fixed"].indexOf(a.position)>=0)&&t.push(i)}t.push(n.ownerDocument.body)
n.ownerDocument!==document&&t.push(n.ownerDocument.defaultView)}return t}function Me(e){var t=[]
if(!oe)return t
var n=Q(e)
if(n){var r=n
while((r=r.parentNode)&&r&&1===r.nodeType&&"BODY"!==r.tagName){var o=Re(r)
var i=o.getPropertyValue("-webkit-transform")||o.getPropertyValue("-moz-transform")||o.getPropertyValue("-ms-transform")||o.getPropertyValue("-o-transform")||o.getPropertyValue("transform")||"none"
var a="none"===i||"matrix(1, 0, 0, 1, 0, 0)"===i
"static"===o.position&&a||t.push(r)}t.push(De(n).body)}return t}var Fe={center:"center",start:"end",end:"start",top:"bottom",bottom:"top",stretch:"stretch",offscreen:"offscreen"}
function We(e,t){return Le(e,(function(e,t){return[Fe[e],t]}),t)}function ze(e,t){return Le(e,(function(e,t){return[e,t].map((function(e){return"start"===e||"end"===e?Fe[e]:e}))}),t)}function Le(e,t,n){var r=Array.isArray(e)?e:e.split(" "),o=Object(je["a"])(r,2),i=o[0],a=o[1]
var s=t(i,a).filter((function(e){return e}))
return n?s.join(n):s}function He(e,t,n){if(!e||"offscreen"===n.placement){var r=!n.container&&e
return{placement:n.placement,style:{left:"-9999em",overflow:"hidden",position:"absolute",top:"0",display:r?"none":null}}}var o=new Ve(e,t,n)
return{placement:o.placement,style:o.style}}var Ye=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{top:0,left:0}
Object(i["a"])(this,e)
this.node=Q(t)
"string"===typeof n?this.placement=Qe(n):Array.isArray(n)?this.placement=n:this.placement=["bottom","center"]
this.rect=Ne(this.node)
this._offset=Ge(r,this.size)}Object(a["a"])(e,[{key:"calculateOffset",value:function(e){var t={top:0,start:0,center:"50%",bottom:"100%",end:"100%",stretch:0}
var n=Object(je["a"])(e,2),r=n[0],o=n[1]
if(["start","end"].indexOf(r)>=0){var i=[o,r]
r=i[0]
o=i[1]}var a=0
var s=0
"undefined"!==typeof t[r]&&(a=t[r])
"undefined"!==typeof t[o]&&(s=t[o])
return Xe([Ge({top:a,left:s},this.size),Je(this._offset,this.placement)])}},{key:"normalizeScrollTop",value:function(e){return De(this.node).body===e?0:e.scrollTop}},{key:"width",get:function(){return this.rect.width}},{key:"height",get:function(){return this.rect.height}},{key:"size",get:function(){return{width:this.width,height:this.height}}},{key:"position",get:function(){return{top:this.rect.top,left:this.rect.left}}},{key:"hasVerticalPlacement",get:function(){return["top","bottom"].indexOf(this.placement[0])>=0}},{key:"hasHorizontalPlacement",get:function(){return["start","end"].indexOf(this.placement[0])>=0}},{key:"shouldStretchVertically",get:function(){return"stretch"===this.placement[1]&&this.hasVerticalPlacement}},{key:"shouldStretchHorizontally",get:function(){return"stretch"===this.placement[1]&&this.hasHorizontalPlacement}},{key:"mirroredPlacement",get:function(){return We(this.placement)}},{key:"scrollParentsOffset",get:function(){var e=Ie(this.node)
var t=0
var n=0
for(var r=1;r<e.length;r++){var o=e[r]
var i=e[r-1]
t+=this.normalizeScrollTop(o)-this.normalizeScrollTop(i)
n+=o.scrollLeft-i.scrollLeft}return{top:t,left:n}}},{key:"positionedParentsOffset",get:function(){var e=Me(this.node)
var t=De(this.node)
var n=e.length>1?0:Ne(t.documentElement).top
var r=0
var o=0
for(var i=1;i<e.length;i++){var a=Ne(e[i])
var s=Ne(e[i-1])
n+=s.top-a.top
r+=s.left-a.left
if(e[i]===t.body){n+=a.top
r+=a.left}o+=this.normalizeScrollTop(e[i])}n+=o
return{top:n,left:r}}}])
return e}()
var Ve=function(){function e(t,n,r){Object(i["a"])(this,e)
this.options=r||{}
var o=this.options,a=o.container,s=o.constrain,c=o.placement,l=o.over
if(!t||"offscreen"===c)return
this.container=a||De(t).body
this.element=new Ye(t,c,{top:this.options.offsetY,left:this.options.offsetX})
this.target=new Ye(n||this.container,l?this.element.placement:this.element.mirroredPlacement)
"window"===s?this.constrainTo(Ae(t)):"scroll-parent"===s?this.constrainTo(Ie(this.target.node)[0]):"parent"===s?this.constrainTo(this.container):"function"===typeof s?this.constrainTo(Q(s.call(null))):"object"===typeof s&&this.constrainTo(Q(s))}Object(a["a"])(e,[{key:"overflow",value:function(e){var t=Ae(e)
var n=Ne(e)
var r=Ne(t)
var o=Xe([this.target.position,this.offset])
var i={top:this.element.positionedParentsOffset.top+this.element.scrollParentsOffset.top,left:this.element.positionedParentsOffset.left+this.element.scrollParentsOffset.left}
var a=o.left+i.left
var s=o.left+this.element.width+i.left
var c=o.top+i.top
var l=o.top+this.element.height+i.top
"bottom"===this.element.placement[0]?c-=this.element.height+this.target.height:"top"===this.element.placement[0]&&(l+=this.element.height+this.target.height)
"start"===this.element.placement[1]?a-=this.element.width-this.target.width:"end"===this.element.placement[1]&&(s+=this.element.width-this.target.width)
"top"===this.element.placement[1]?c-=this.element.height-this.target.height:"bottom"===this.element.placement[1]&&(l+=this.element.height-this.target.height)
"end"===this.element.placement[0]?a-=this.element.width+this.target.width:"start"===this.element.placement[0]&&(s+=this.element.width+this.target.width)
var d=e===t?n:{top:r.top+n.top,bottom:n.top+n.height,left:r.left+n.left,right:n.left+n.width}
return{top:c<d.top?d.top-c:0,bottom:l>d.bottom?l-d.bottom:0,left:a<d.left?d.left-a:0,right:s>d.right?s-d.right:0}}},{key:"constrainTo",value:function(e){if(!e)return
var t=this.overflow(e)
var n={top:t.top>0,bottom:t.bottom>0,left:t.left>0,right:t.right>0}
if(this.element.hasVerticalPlacement){if("stretch"!==this.element.placement[1])if(n.left&&n.right){this.element.placement[1]="center"
this.target.placement[1]="center"}else if(n.left){this.element.placement[1]="start"
this.target.placement[1]="start"}else if(n.right){this.element.placement[1]="end"
this.target.placement[1]="end"}if(n.top&&n.bottom){if(t.bottom<t.top){this.element.placement[0]="bottom"
this.target.placement[0]="top"}else if(t.bottom>t.top){this.element.placement[0]="top"
this.target.placement[0]="bottom"}}else if(n.top){this.element.placement[0]="bottom"
this.target.placement[0]="top"}else if(n.bottom){this.element.placement[0]="top"
this.target.placement[0]="bottom"}}else if(this.element.hasHorizontalPlacement){if(n.top&&n.bottom){this.element.placement[1]="center"
this.target.placement[1]="center"}else if(n.top){this.element.placement[1]="top"
this.target.placement[1]="top"}else if(n.bottom){this.element.placement[1]="bottom"
this.target.placement[1]="bottom"}if(n.left&&n.right){if(t.left>t.right){this.element.placement[0]="end"
this.target.placement[0]="start"}else if(t.left<t.right){this.element.placement[0]="start"
this.target.placement[0]="end"}}else if(n.left){this.element.placement[0]="end"
this.target.placement[0]="start"}else if(n.right){this.element.placement[0]="start"
this.target.placement[0]="end"}}}},{key:"offset",get:function(){var e=this.target.calculateOffset(this.element.placement),t=e.top,n=e.left
var r=Xe([this.element.calculateOffset(this.target.placement),this.element.scrollParentsOffset,this.element.positionedParentsOffset])
return{top:t-r.top,left:n-r.left}}},{key:"placement",get:function(){return $e(this.element.placement)}},{key:"minWidth",get:function(){return this.element.shouldStretchVertically?this.target.width:null}},{key:"minHeight",get:function(){return this.element.shouldStretchHorizontally?this.target.height:null}},{key:"position",get:function(){var e=Ae(this.target.node)
var t=Xe([this.target.position,this.offset]),n=t.left,r=t.top
if(oe&&e.matchMedia){var o=e.matchMedia("only screen and (min-resolution: 1.3dppx)").matches||e.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches
if(!o){n=Math.round(n)
r=Math.round(r)}}return{left:n,top:r}}},{key:"style",get:function(){return{top:0,left:0,minWidth:this.minWidth,minHeight:this.minHeight,position:"absolute",transform:"translateX(".concat(this.position.left,"px) translateY(").concat(this.position.top,"px) translateZ(0)")}}}])
return e}()
function Xe(e){return e.reduce((function(e,t){return{top:e.top+t.top,left:e.left+t.left}}),{top:0,left:0})}function Je(e,t){var n=e.top,r=e.left
"bottom"===t[0]&&(n=0-parseFloat(n,10))
"end"===t[0]&&(r=0-parseFloat(r,10))
return{top:n,left:r}}function Ge(e,t){var n=e.left,r=e.top
n="string"===typeof n&&-1!==n.indexOf("%")?parseFloat(n,10)/100*t.width:parseFloat(n,10)
r="string"===typeof r&&-1!==r.indexOf("%")?parseFloat(r,10)/100*t.height:parseFloat(r,10)
return{top:r,left:n}}function Ze(e){var t=Object(je["a"])(e,2),n=t[0],r=t[1]
if("center"===n||"stretch"===n){var o=[r,n]
n=o[0]
r=o[1]}return[n,r]}function Qe(e){var t=e.split(" ")
1===t.length&&(t=[e,"center"])
return Ze(t)}function $e(e){return e.join(" ")}var et=n("TSYQ")
var tt=n.n(et)
function nt(e){return"string"===typeof e?e:e.displayName||e.name}function rt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(e&&e.type){var n=t.map((function(e){return nt(e)}))
return n.indexOf(nt(e.type))>=0}return false}var ot=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(a["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=Object(r["a"])(e,["children"])
return q(t,n)}}])
n.displayName="ComponentIdentifier"
return n}(l["Component"])
ot.propTypes={children:f.a.node}
ot.defaultProps={children:null}
ot.pick=function(e,t){var n
d.a.Children.forEach(t,(function(t){rt(t,[e])&&(n=t)}))
return n}
var it=function(){var e
if(oe&&window.requestAnimationFrame&&window.cancelAnimationFrame)e=function(e){var t=window.requestAnimationFrame(e)
return{cancel:function(){return window.cancelAnimationFrame(t)}}}
else{var t=(new Date).getTime()
e=function(e){var n=(new Date).getTime()
var r=Math.max(0,16-(n-t))
var o=setTimeout(e,r)
t=n
return{cancel:function(){return clearTimeout(o)}}}}return e}()
function at(e,t){var n=Q(e)
var r=[]
var o=Ne(n)||{}
var i=false
function a(){if(false===i){var e=Ne(n)||{}
var s=e.top!==o.top||e.left!==o.left||e.right!==o.right||e.bottom!==o.bottom||e.width!==o.width||e.height!==o.height
s&&"function"===typeof t&&t(e)
o=e
r.push(it(a))}}a()
return{remove:function(){i=true
r.forEach((function(e){return e.cancel()}))}}}function st(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var r,o,i,a
var s=0
var c=[]
var l=false
if("function"!==typeof e)throw new TypeError("Expected a function")
var d=!!n.leading
var u="maxWait"in n
var f=!("trailing"in n)||!!n.trailing
var h=u?Math.max(+n.maxWait||0,t):0
function p(t){var n=r
var a=o
r=o=void 0
s=t
if(true!==l){i=e.apply(a,n)
return i}}function m(e){s=e
c.push(setTimeout(g,t))
return d?p(e):i}function b(e){var n=e-a
var r=e-s
var o=t-n
return u?Math.min(o,h-r):o}function v(e){var n=e-a
var r=e-s
return"undefined"===typeof a||n>=t||n<0||u&&r>=h}function g(){var e=Date.now()
if(v(e))return y(e)
c.push(setTimeout(g,b(e)))}function y(e){w()
if(f&&r)return p(e)
r=o=void 0
return i}function O(){l=true
w()
s=0
r=a=o=void 0}function _(){return 0===c.length?i:y(Date.now())}function w(){c.forEach((function(e){return clearTimeout(e)}))
c=[]}function E(){var e=Date.now()
var n=v(e)
for(var s=arguments.length,l=new Array(s),d=0;d<s;d++)l[d]=arguments[d]
r=l
o=this
a=e
if(n){if(0===c.length)return m(a)
if(u){c.push(setTimeout(g,t))
return p(a)}}0===c.length&&c.push(setTimeout(g,t))
return i}E.cancel=O
E.flush=_
return E}var ct="@@bidirectional"
var lt={ltr:"ltr",rtl:"rtl"}
var dt={CONTEXT_KEY:ct,DIRECTION:lt,types:Object(P["a"])({},ct,f.a.shape({dir:f.a.oneOf(Object.values(lt))})),makeTextDirectionContext:function(e){return Object(P["a"])({},ct,{dir:e})},getTextDirectionContext:function(e){if(e)return e[ct]}}
var ut,ft,ht
var pt=function(){if(ut)return ut
if(oe){var e=document.documentElement
ft=e.getAttribute("dir")
ut=ft||Re(e).direction
if(!ht){ht=new MutationObserver((function(){var t=e.getAttribute("dir")
t&&t!==ft&&(ft=ut=t)}))
ht.observe(e,{attributes:true})}return ut}}
function mt(e){if(oe){if("undefined"===typeof e||e===document.documentElement)return pt()
return e.getAttribute("dir")||Re(e).direction}}var bt=dt.DIRECTION,vt=dt.getTextDirectionContext
var gt=h((function(e){var t,n
return n=t=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(a["a"])(n,[{key:"dir",get:function(){var e=vt(this.context)||{}
return e.dir||this.props.dir||mt()}},{key:"rtl",get:function(){return this.dir===bt.rtl}},{key:"ltr",get:function(){return this.dir===bt.ltr}}])
return n}(e),t.propTypes=Object(o["a"])({},e.propTypes,{dir:f.a.oneOf(Object.values(dt.DIRECTION))}),t.contextTypes=Object(o["a"])({},e.contextTypes,{},dt.types),n}))
gt.DIRECTION=bt
var yt,Ot,_t,wt
var Et=(yt=gt(),yt(Ot=(wt=_t=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(e){var r
Object(i["a"])(this,n)
r=t.call(this,e)
r.state={mountNode:r.findMountNode(e)}
return r}Object(a["a"])(n,[{key:"componentDidMount",value:function(){this.props.open&&"function"===typeof this.props.onOpen&&this.props.onOpen(this.DOMNode)}},{key:"componentDidUpdate",value:function(e){var t=this.findMountNode(this.props)
t!==this.state.mountNode&&this.setState({mountNode:t})
this.props.open&&!e.open&&"function"===typeof this.props.onOpen&&this.props.onOpen(this.DOMNode)
!this.props.open&&e.open&&"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"componentWillUnmount",value:function(){this.removeNode()
this.props.open&&"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"render",value:function(){var e=this.props.children
return this.props.open&&d.a.Children.count(e)>0?Z.a.createPortal(e,this.insertNode()):null}},{key:"removeNode",value:function(){if(this.DOMNode&&this.DOMNode.parentNode&&"function"===typeof this.DOMNode.parentNode.removeChild){this.DOMNode.parentNode.removeChild(this.DOMNode)
this.DOMNode=null
this.props.elementRef(this.DOMNode)}}},{key:"insertNode",value:function(){var e=this.props,t=(e.open,e.insertAt),n=(e.onOpen,e.onClose,e.mountNode,e.children,e.elementRef),i=Object(r["a"])(e,["open","insertAt","onOpen","onClose","mountNode","children","elementRef"])
if(!this.DOMNode){var a=document.createElement("span")
var s=Object(o["a"])({},w(i),{dir:this.dir})
Object.keys(s).forEach((function(e){a.setAttribute(e,s[e])}))
n(a)
this.DOMNode=a}this.DOMNode.parentNode!==this.state.mountNode&&("bottom"===t?this.state.mountNode.appendChild(this.DOMNode):this.state.mountNode.insertBefore(this.DOMNode,this.state.mountNode.firstChild))
return this.DOMNode}},{key:"findMountNode",value:function(e){var t
"function"===typeof e.mountNode?t=e.mountNode():e.mountNode&&(t=e.mountNode)
t&&t.nodeName||(t=document.body)
return t}},{key:"node",get:function(){return this.DOMNode}}])
n.displayName="ReactPortal"
return n}(d.a.Component),_t.propTypes={open:f.a.bool,onOpen:f.a.func,onClose:f.a.func,mountNode:f.a.oneOfType([T,f.a.func]),insertAt:f.a.oneOf(["bottom","top"]),children:f.a.node,elementRef:f.a.func},_t.defaultProps={open:false,insertAt:"bottom",onOpen:function(e){},onClose:function(){},mountNode:void 0,children:null,elementRef:function(e){}},wt))||Ot)
var kt,Kt,qt,jt
var Ct=(kt=gt(),kt(Kt=(jt=qt=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(a["a"])(n,[{key:"componentDidMount",value:function(){this.renderPortal(this.props)}},{key:"shouldComponentUpdate",value:function(e,t){return!(V(this.props,e)&&V(this.state,t))}},{key:"componentWillReceiveProps",value:function(e){this.renderPortal(e)}},{key:"componentWillUnmount",value:function(){this.removePortal(this.props)}},{key:"render",value:function(){return null}},{key:"renderPortal",value:function(e){var t=this
var n=e.open,i=e.insertAt,a=e.onOpen,s=(e.onClose,e.elementRef),c=e.children,l=Object(r["a"])(e,["open","insertAt","onOpen","onClose","elementRef","children"])
var u=!this.DOMNode
var f=this.mountNode
var h=c
"string"===typeof h&&h.length>0&&(h=d.a.createElement("span",null,h))
if(n&&d.a.Children.count(h)>0){if(!this.DOMNode){var p=document.createElement("span")
var m=Object(o["a"])({},w(l),{dir:this.dir})
Object.keys(m).forEach((function(e){p.setAttribute(e,m[e])}))
s(p)
this.DOMNode=p}this.DOMNode.parentNode!==f&&("bottom"===i?f.appendChild(this.DOMNode):f.insertBefore(this.DOMNode,f.firstChild))
var b=function(){(u||!t.props.open&&n)&&"function"===typeof a&&a(t.DOMNode)}
Z.a.unstable_renderSubtreeIntoContainer(this,h,this.DOMNode,b)}else this.removePortal(e)}},{key:"removePortal",value:function(e){var t
if(this.DOMNode){t=Z.a.unmountComponentAtNode(this.DOMNode)
this.DOMNode.parentNode&&this.DOMNode.parentNode.removeChild(this.DOMNode)
this.DOMNode=null
this.props.elementRef(this.DOMNode)}t&&"function"===typeof e.onClose&&e.onClose()}},{key:"mountNode",get:function(){var e
"function"===typeof this.props.mountNode?e=this.props.mountNode():this.props.mountNode&&(e=this.props.mountNode)
e&&e.nodeName||(e=document.body)
return e}},{key:"DOMNode",get:function(){return this._node},set:function(e){this._node=e}},{key:"node",get:function(){return this.DOMNode}}])
n.displayName="SubtreePortal"
return n}(l["Component"]),qt.propTypes={open:f.a.bool,onOpen:f.a.func,onClose:f.a.func,mountNode:f.a.oneOfType([T,f.a.func]),insertAt:f.a.oneOf(["bottom","top"]),children:f.a.node,elementRef:f.a.func},qt.defaultProps={open:false,insertAt:"bottom",onOpen:function(e){},onClose:function(){},mountNode:null,children:null,elementRef:function(e){}},jt))||Kt)
var Tt="function"===typeof Z.a.createPortal
var Ut=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){var e
Object(i["a"])(this,n)
for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a]
e=t.call.apply(t,[this].concat(o))
e.handleElementRef=function(t){if(t){e.DOMNode=t
"function"===typeof e.props.elementRef&&e.props.elementRef(t)}}
return e}Object(a["a"])(n,[{key:"render",value:function(){return Tt?d.a.createElement(Et,Object.assign({},this.props,{elementRef:this.handleElementRef})):d.a.createElement(Ct,Object.assign({},this.props,{elementRef:this.handleElementRef}))}}])
n.displayName="Portal"
return n}(l["Component"])
Ut.propTypes={open:f.a.bool,onOpen:f.a.func,onClose:f.a.func,mountNode:f.a.oneOfType([T,f.a.func]),insertAt:f.a.oneOf(["bottom","top"]),children:f.a.node,elementRef:f.a.func}
Ut.defaultProps={open:false,insertAt:"bottom",onOpen:function(e){},onClose:function(){},mountNode:null,children:null,elementRef:function(e){}}
var xt=function(e){var t=e.stacking
return{zIndex:t.topmost}}
var St,Pt,Bt,Dt,Nt,At,Rt,It,Mt,Ft,Wt,zt,Lt,Ht,Yt,Vt
var Xt={componentId:"eGKPI",template:function(e){return"\n\n.eGKPI_bGBk{box-sizing:border-box;z-index:".concat(e.zIndex||"inherit","}")},root:"eGKPI_bGBk"}
var Jt=(St=p("8.0.0",null,"Use Position's `renderTarget` prop instead."),Pt=Te(),St(Bt=Pt(Bt=(Nt=Dt=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}return n}(ot),Dt.displayName="PositionTarget",Dt.locatorAttribute="data-position-target",Nt))||Bt)||Bt)
var Gt=(At=p("8.0.0",null,"Use Posiition's `children` instead."),Rt=Te(),At(It=Rt(It=(Ft=Mt=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}return n}(ot),Mt.displayName="PositionContent",Mt.propTypes={children:f.a.node,placement:U.placement},Mt.locatorAttribute="data-position-content",Ft))||It)||It)
var Zt=(Wt=p("8.0.0",{trackPosition:"shouldTrackPosition",over:"shouldPositionOverTarget"}),zt=Te(),Lt=le(xt,Xt),Wt(Ht=zt(Ht=Lt(Ht=(Vt=Yt=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(e){var r
Object(i["a"])(this,n)
r=t.call(this,e)
r._timeouts=[]
r.handlePortalOpen=function(){r.position();(r.props.shouldTrackPosition||r.props.trackPosition)&&r.startTracking()
r._timeouts.push(setTimeout((function(){r.state.positioned&&"function"===typeof r.props.onPositioned&&r.props.onPositioned({top:r.state.style.top,left:r.state.style.left,placement:r.state.placement})}),0))}
r.position=function(){r.setState(Object(o["a"])({positioned:true},r.calculatePosition(r.props)))}
r.state=Object(o["a"])({positioned:false},r.calculatePosition(e))
r.position=st(r.position,0,{leading:false,trailing:true})
r._id=r.props.id||Object(x["a"])("Position")
return r}Object(a["a"])(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return!H()(this.state,t)||!V(this.props,e)||!V(this.context,n)}},{key:"componentDidMount",value:function(){this.toggleLocatorAttributes(true)}},{key:"componentDidUpdate",value:function(e,t){this.position()
this.toggleLocatorAttributes(true)
this.props.shouldTrackPosition!==e.shouldTrackPosition?this.props.shouldTrackPosition?this.startTracking():this.stopTracking():this.props.trackPosition!==e.trackPosition&&(this.props.trackPosition?this.startTracking():this.stopTracking())
var n=this.state,r=n.style,o=n.placement
r&&t.style&&(o!==t.placement||r.top!==t.style.top||r.left!==t.style.left)&&this.props.onPositionChanged({top:r.top,left:r.left,placement:o})}},{key:"componentWillUnmount",value:function(){this.position.cancel()
this.stopTracking()
this._timeouts.forEach((function(e){return clearTimeout(e)}))
this.toggleLocatorAttributes(false)}},{key:"toggleLocatorAttributes",value:function(e){this.toggleLocatorAttribute(Q(this._content),n.contentLocatorAttribute,e)
this.toggleLocatorAttribute(Q(this._target),n.targetLocatorAttribute,e)}},{key:"toggleLocatorAttribute",value:function(e,t,n){if(e&&e.hasAttribute){n&&!e.hasAttribute(t)&&e.setAttribute(t,this._id)
!n&&e.hasAttribute(t)&&e.removeAttribute(t)}}},{key:"calculatePosition",value:function(e){return He(this._content,this._target,{placement:e.placement,offsetX:e.offsetX,offsetY:e.offsetY,constrain:e.constrain,container:e.mountNode,over:e.shouldPositionOverTarget||e.over})}},{key:"startTracking",value:function(){this._listener=this._listener||at(this._target,this.position)}},{key:"stopTracking",value:function(){if(this._listener){this._listener.remove()
this._listener=null}}},{key:"renderContent",value:function(){var e=this
var t=ot.pick(n.Content,this.props.children)
t||(t=q(this.props.children))
if(t){var r
t=K(t,Object(P["a"])({ref:function(t){e._content=t},style:Object(o["a"])({},t.props.style,{},this.state.style),className:tt()((r={},Object(P["a"])(r,Xt.root,true),Object(P["a"])(r,t.props.className,t.props.className),r))},n.contentLocatorAttribute,this._id))
t=d.a.createElement(Ut,{open:true,onOpen:this.handlePortalOpen,mountNode:this.props.mountNode,insertAt:this.props.insertAt},t)}return t}},{key:"renderTarget",value:function(){var e=this
var t=ot.pick(n.Target,this.props.children)
t||(t=j(this.props.renderTarget))
if(t)return K(t,Object(P["a"])({ref:function(t){e._target=t}},n.targetLocatorAttribute,this._id))
if(!this.props.target)return null
this._target=j(this.props.target)}},{key:"render",value:function(){var e=Object(P["a"])({},n.locatorAttribute,this._id)
return d.a.createElement("span",e,this.renderTarget(),this.renderContent())}}])
n.displayName="Position"
return n}(l["Component"]),Yt.Target=Jt,Yt.Content=Gt,Yt.locatorAttribute="data-position",Yt.targetLocatorAttribute="data-position-target",Yt.contentLocatorAttribute="data-position-content",Yt.propTypes={renderTarget:f.a.oneOfType([f.a.node,f.a.func]),target:f.a.oneOfType([T,f.a.func]),placement:U.placement,mountNode:U.mountNode,insertAt:f.a.oneOf(["bottom","top"]),constrain:U.constrain,offsetX:f.a.oneOfType([f.a.string,f.a.number]),offsetY:f.a.oneOfType([f.a.string,f.a.number]),id:f.a.string,shouldTrackPosition:f.a.bool,shouldPositionOverTarget:f.a.bool,onPositionChanged:f.a.func,onPositioned:f.a.func,children:f.a.node,trackPosition:f.a.bool,over:f.a.bool},Yt.defaultProps={renderTarget:void 0,target:void 0,placement:"bottom center",mountNode:null,insertAt:"bottom",constrain:"window",offsetX:0,offsetY:0,id:void 0,shouldTrackPosition:true,shouldPositionOverTarget:false,onPositioned:function(e){},onPositionChanged:function(e){},children:null},Vt))||Ht)||Ht)||Ht)
var Qt=f.a.oneOf(["auto","default","none","context-menu","help","pointer","progress","wait","cell","crosshair","text","vertical-text","alias","copy","move","no-drop","not-allowed","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out"])
function $t(e){var t=e.typography,n=e.colors,r=e.borders,i=e.spacing,a=e.shadows,s=e.stacking,c=e.breakpoints
e.transitions
return Object(o["a"])({fontFamily:t.fontFamily,color:n.textDarkest,colorPrimaryInverse:n.textLightest,borderStyle:r.style,borderColorPrimary:n.borderMedium,borderColorSecondary:n.borderDark,borderColorSuccess:n.borderSuccess,borderColorBrand:n.borderBrand,borderColorInfo:n.borderInfo,borderColorAlert:n.borderAlert,borderColorWarning:n.borderWarning,borderColorDanger:n.borderDanger,borderColorTransparent:"transparent",borderRadiusSmall:r.radiusSmall,borderRadiusMedium:r.radiusMedium,borderRadiusLarge:r.radiusLarge,debugOutlineColor:n.borderDebug,backgroundPrimary:n.backgroundLightest,backgroundSecondary:n.backgroundLight,backgroundPrimaryInverse:n.backgroundDarkest,backgroundBrand:n.backgroundBrand,backgroundInfo:n.backgroundInfo,backgroundAlert:n.backgroundAlert,backgroundSuccess:n.backgroundSuccess,backgroundDanger:n.backgroundDanger,backgroundWarning:n.backgroundWarning,arrowSize:"0.5rem",focusOutlineStyle:r.style,focusOutlineWidth:r.widthMedium,focusOutlineOffset:"0.3125rem",focusOutlineInset:"0rem",focusColorInfo:n.borderInfo,focusColorDanger:n.borderDanger,focusColorSuccess:n.borderSuccess,focusColorInverse:n.borderLightest,xSmallMaxWidth:c.xSmall,smallMaxWidth:c.small,mediumMaxWidth:c.medium,largeMaxWidth:c.large},pe("margin",i),{},pe("padding",i),{},pe("shadow",a),{},pe("stacking",s),{},pe("border",r))}$t.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusColorInfo:e["ic-brand-primary"],backgroundBrand:e["ic-brand-primary"],backgroundInfo:e["ic-brand-primary"],borderColorBrand:e["ic-brand-primary"],borderColorInfo:e["ic-brand-primary"]}}
var en={borderColorDefault:"borderColorPrimary",borderColorInverse:"borderColorTransparent",colorInverse:"colorPrimaryInverse",background:"backgroundPrimary",backgroundLight:"backgroundSecondary",backgroundInverse:"backgroundPrimaryInverse"}
var tn=Ce({map:en,version:"8.0.0"})
var nn,rn,on,an,sn,cn
var ln={componentId:"fOyUs",template:function(e){return"\n\n.fOyUs_bGBk{box-sizing:border-box;font-family:".concat(e.fontFamily||"inherit",";max-width:100%;overflow:visible}\n\n.fOyUs_bMes{display:inline}\n\n.fOyUs_UeJS{display:block}\n\n.fOyUs_cuDs{display:inline-block;vertical-align:middle}\n\n.fOyUs_desw{display:flex}\n\n.fOyUs_cKQL{display:inline-flex;vertical-align:middle}\n\n.fOyUs_EMjX{text-align:start}\n\n[dir=ltr] .fOyUs_EMjX{text-align:left}\n\n[dir=rtl] .fOyUs_EMjX{text-align:right}\n\n.fOyUs_ImeN,[dir=ltr] .fOyUs_ImeN,[dir=rtl] .fOyUs_ImeN{text-align:center}\n\n.fOyUs_dBtH{text-align:end}\n\n[dir=ltr] .fOyUs_dBtH{text-align:right}\n\n[dir=rtl] .fOyUs_dBtH{text-align:left}\n\n.fOyUs_fFew{outline:0.0625rem dashed ").concat(e.debugOutlineColor||"inherit","}\n\n.fOyUs_dnJm{border-style:").concat(e.borderStyle||"inherit","}\n\n.fOyUs_eiMX,.fOyUs_dzKA{border-color:").concat(e.borderColorTransparent||"inherit","}\n\n.fOyUs_dsNY,.fOyUs_tIxX{border-color:").concat(e.borderColorPrimary||"inherit","}\n\n.fOyUs_fuLg{border-color:").concat(e.borderColorSecondary||"inherit","}\n\n.fOyUs_cLjf{border-color:").concat(e.borderColorBrand||"inherit","}\n\n.fOyUs_cXDj{border-color:").concat(e.borderColorInfo||"inherit","}\n\n.fOyUs_fjbA{border-color:").concat(e.borderColorSuccess||"inherit","}\n\n.fOyUs_fBpf{border-color:").concat(e.borderColorWarning||"inherit","}\n\n.fOyUs_bMrG{border-color:").concat(e.borderColorAlert||"inherit","}\n\n.fOyUs_fdvn{border-color:").concat(e.borderColorDanger||"inherit","}\n\n.fOyUs_fKyb{background:none;color:").concat(e.color||"inherit","}\n\n.fOyUs_fZwI,.fOyUs_kXoP{background:").concat(e.backgroundPrimary||"inherit",";color:").concat(e.color||"inherit","}\n\n.fOyUs_dUgE,.fOyUs_bvKN{background:").concat(e.backgroundSecondary||"inherit",";color:").concat(e.color||"inherit","}\n\n.fOyUs_fzxW,.fOyUs_elGp{background:").concat(e.backgroundPrimaryInverse||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_NGNZ{background:").concat(e.backgroundBrand||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_fYBY{background:").concat(e.backgroundInfo||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_feZy{background:").concat(e.backgroundAlert||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_qidh{background:").concat(e.backgroundSuccess||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_fKOP{background:").concat(e.backgroundDanger||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_eOYc{background:").concat(e.backgroundWarning||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_fQrx{z-index:").concat(e.stackingTopmost||"inherit","}\n\n.fOyUs_dtZX{z-index:").concat(e.stackingAbove||"inherit","}\n\n.fOyUs_fCiV{z-index:").concat(e.stackingBelow||"inherit","}\n\n.fOyUs_dJEE{z-index:").concat(e.stackingDeepest||"inherit","}\n\n.fOyUs_fxuY{box-shadow:").concat(e.shadowTopmost||"inherit","}\n\n.fOyUs_bxuL{box-shadow:").concat(e.shadowResting||"inherit","}\n\n.fOyUs_bIta{box-shadow:").concat(e.shadowAbove||"inherit","}\n\n.fOyUs_fhgP{overflow-x:hidden}\n\n.fOyUs_dzYG{overflow-x:auto}\n\n.fOyUs_divt{overflow-y:hidden}\n\n.fOyUs_fKlg{overflow-y:auto}\n\n.fOyUs_cBHs{position:relative}\n\n.fOyUs_cSap{position:fixed}\n\n.fOyUs_fuLp{position:absolute}\n\n.fOyUs_bZzT{position:-webkit-sticky;position:sticky}\n\n.fOyUs_eWbJ.fOyUs_cBHs:before{border-color:").concat(e.focusOutlineColorDefault||"inherit",";border-style:").concat(e.focusOutlineStyle||"inherit",";border-width:").concat(e.focusOutlineWidth||"inherit",';content:"";opacity:0;pointer-events:none;position:absolute}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_cnfU:before{transform:scale(0.95);transition:all 0.2s}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_cBtr:before{bottom:calc(').concat(e.focusOutlineOffset||"inherit","*-1);left:calc(").concat(e.focusOutlineOffset||"inherit","*-1);right:calc(").concat(e.focusOutlineOffset||"inherit","*-1);top:calc(").concat(e.focusOutlineOffset||"inherit","*-1)}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_bFwB:before{bottom:").concat(e.focusOutlineInset||"inherit",";left:").concat(e.focusOutlineInset||"inherit",";right:").concat(e.focusOutlineInset||"inherit",";top:").concat(e.focusOutlineInset||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_beQo:before{border-radius:inherit}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_bnCe:before{border-radius:0}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_cBtr.fOyUs_cmRt:before{border-radius:calc(").concat(e.borderRadiusSmall||"inherit"," + ").concat(e.focusOutlineOffset||"inherit"," - ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_cBtr.fOyUs_eeJl:before{border-radius:calc(").concat(e.borderRadiusMedium||"inherit"," + ").concat(e.focusOutlineOffset||"inherit"," - ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_cBtr.fOyUs_TYCL:before{border-radius:calc(").concat(e.borderRadiusLarge||"inherit"," + ").concat(e.focusOutlineOffset||"inherit"," - ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_bFwB.fOyUs_cmRt:before{border-radius:calc(").concat(e.borderRadiusSmall||"inherit"," - ").concat(e.focusOutlineInset||"inherit"," + ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_bFwB.fOyUs_eeJl:before{border-radius:calc(").concat(e.borderRadiusMedium||"inherit"," - ").concat(e.focusOutlineInset||"inherit"," + ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_bFwB.fOyUs_TYCL:before{border-radius:calc(").concat(e.borderRadiusLarge||"inherit"," - ").concat(e.focusOutlineInset||"inherit"," + ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs:focus{outline:none}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_fmDy:focus:before,.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_dvYc:before{opacity:1;transform:scale(1)}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_fuTR:before{border-color:").concat(e.focusColorInfo||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_dwHj:before{border-color:").concat(e.focusColorInverse||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_NhxI:before{border-color:").concat(e.focusColorSuccess||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_fsVi:before{border-color:").concat(e.focusColorDanger||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_bMes{outline-style:none}\n\n.fOyUs_eWbJ.fOyUs_bMes:before{border-style:none}\n\n.fOyUs_eWbJ.fOyUs_bMes.fOyUs_bFwB.fOyUs_fmDy:focus,.fOyUs_eWbJ.fOyUs_bMes.fOyUs_bFwB.fOyUs_dvYc{outline-style:").concat(e.focusOutlineStyle||"inherit",";outline-width:").concat(e.focusOutlineWidth||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_bMes.fOyUs_fuTR{outline-color:").concat(e.focusColorInfo||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_bMes.fOyUs_dwHj{outline-color:").concat(e.focusColorInverse||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_bMes.fOyUs_fsVi{outline-color:").concat(e.focusColorDanger||"inherit","}")},root:"fOyUs_bGBk","display--inline":"fOyUs_bMes","display--block":"fOyUs_UeJS","display--inline-block":"fOyUs_cuDs","display--flex":"fOyUs_desw","display--inline-flex":"fOyUs_cKQL","textAlign--start":"fOyUs_EMjX","textAlign--center":"fOyUs_ImeN","textAlign--end":"fOyUs_dBtH",withVisualDebug:"fOyUs_fFew",withBorder:"fOyUs_dnJm","borderColor--inverse":"fOyUs_eiMX","borderColor--transparent":"fOyUs_dzKA","borderColor--default":"fOyUs_dsNY","borderColor--primary":"fOyUs_tIxX","borderColor--secondary":"fOyUs_fuLg","borderColor--brand":"fOyUs_cLjf","borderColor--info":"fOyUs_cXDj","borderColor--success":"fOyUs_fjbA","borderColor--warning":"fOyUs_fBpf","borderColor--alert":"fOyUs_bMrG","borderColor--danger":"fOyUs_fdvn","background--transparent":"fOyUs_fKyb","background--default":"fOyUs_fZwI","background--primary":"fOyUs_kXoP","background--light":"fOyUs_dUgE","background--secondary":"fOyUs_bvKN","background--inverse":"fOyUs_fzxW","background--primary-inverse":"fOyUs_elGp","background--brand":"fOyUs_NGNZ","background--info":"fOyUs_fYBY","background--alert":"fOyUs_feZy","background--success":"fOyUs_qidh","background--danger":"fOyUs_fKOP","background--warning":"fOyUs_eOYc","stacking--topmost":"fOyUs_fQrx","stacking--above":"fOyUs_dtZX","stacking--below":"fOyUs_fCiV","stacking--deepest":"fOyUs_dJEE","shadow--topmost":"fOyUs_fxuY","shadow--resting":"fOyUs_bxuL","shadow--above":"fOyUs_bIta","overflowX--hidden":"fOyUs_fhgP","overflowX--auto":"fOyUs_dzYG","overflowY--hidden":"fOyUs_divt","overflowY--auto":"fOyUs_fKlg","position--relative":"fOyUs_cBHs","position--fixed":"fOyUs_cSap","position--absolute":"fOyUs_fuLp","position--sticky":"fOyUs_bZzT",focus:"fOyUs_eWbJ",focusAnimation:"fOyUs_cnfU","focusPosition--offset":"fOyUs_cBtr","focusPosition--inset":"fOyUs_bFwB","focusRing--radiusInherit":"fOyUs_beQo","focusRing--radiusNone":"fOyUs_bnCe","focusRing--radiusSmall":"fOyUs_cmRt","focusRing--radiusMedium":"fOyUs_eeJl","focusRing--radiusLarge":"fOyUs_TYCL",shouldUseBrowserFocus:"fOyUs_fmDy",withFocusOutline:"fOyUs_dvYc","focusColor--info":"fOyUs_fuTR","focusColor--inverse":"fOyUs_dwHj","focusColor--success":"fOyUs_NhxI","focusColor--danger":"fOyUs_fsVi"}
var dn=(nn=p("8.0.0",{focused:"withFocusOutline",visualDebug:"withVisualDebug",background:"In version 8.0.0,\n    the value <default> for background will be changed to <primary>,\n    the value <light> for background will be changed to <secondary>,\n    the value <inverse> for background will be changed to <primary-inverse>.\n    Use these values instead."}),rn=gt(),on=le($t,ln,tn),nn(an=rn(an=on(an=(cn=sn=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){var e
Object(i["a"])(this,n)
for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a]
e=t.call.apply(t,[this].concat(o))
e.handleElementRef=function(t){"function"===typeof e.props.elementRef&&e.props.elementRef(t)
e._element=t}
e.verifyUniformValues=function(e,t){if("string"!==typeof t)return false
return t.trim().split(" ").every((function(t){return e===t}))}
return e}Object(a["a"])(n,[{key:"componentDidMount",value:function(){false}},{key:"render",value:function(){var e,t
var i=this.props,a=i.children,s=i.textAlign,c=i.background,l=i.display,u=i.withVisualDebug,f=i.width,h=i.height,p=i.minWidth,b=i.minHeight,v=i.maxWidth,g=i.maxHeight,y=i.overflowX,O=i.overflowY,_=i.stacking,E=i.shadow,k=i.position,K=i.focusPosition,q=i.focusColor,j=i.shouldAnimateFocus,C=i.borderColor,T=i.className,U=Object(r["a"])(i,["children","textAlign","background","display","withVisualDebug","width","height","minWidth","minHeight","maxWidth","maxHeight","overflowX","overflowY","stacking","shadow","position","focusPosition","focusColor","shouldAnimateFocus","borderColor","className"])
var x=m(n,this.props)
var S=this.withFocusOutline
var B="relative"===k||"inline"===l&&"inset"===K?(e={},Object(P["a"])(e,ln.focus,true),Object(P["a"])(e,ln.withFocusOutline,S),Object(P["a"])(e,ln.shouldUseBrowserFocus,"undefined"===typeof S),Object(P["a"])(e,ln[this.focusRingRadius],true),Object(P["a"])(e,ln["focusPosition--".concat(K)],true),Object(P["a"])(e,ln["focusColor--".concat(q)],true),Object(P["a"])(e,ln.focusAnimation,j),e):{}
var D=tt()(Object(o["a"])((t={},Object(P["a"])(t,ln.root,true),Object(P["a"])(t,ln.withVisualDebug,u||this.props.visualDebug),Object(P["a"])(t,ln.withBorder,this.withBorder),Object(P["a"])(t,ln["borderColor--".concat(C)],this.withBorder),Object(P["a"])(t,ln["textAlign--".concat(s)],s),Object(P["a"])(t,ln["background--".concat(c)],c),Object(P["a"])(t,ln["display--".concat(l)],l&&"auto"!==l),Object(P["a"])(t,ln["overflowX--".concat(y)],y&&"visible"!==y),Object(P["a"])(t,ln["overflowY--".concat(O)],O&&"visible"!==O),Object(P["a"])(t,ln["stacking--".concat(_)],_),Object(P["a"])(t,ln["shadow--".concat(E)],E&&"none"!==E),Object(P["a"])(t,ln["position--".concat(k)],"static"!==k),t),B,Object(P["a"])({},T,T)))
return d.a.createElement(x,Object.assign({},w(U),{className:D,style:Object(o["a"])({},this.spacingStyle,{},this.borderStyle,{},this.offsetStyle,{width:f,height:h,minWidth:p,minHeight:b,maxWidth:v,maxHeight:g},this.styleProps),ref:this.handleElementRef}),a)}},{key:"withFocusOutline",get:function(){if("undefined"===typeof this.props.withFocusOutline&&"undefined"===typeof this.props.focused)return
var e=this.props
e.position,e.display,e.focusPosition
var t=this.props.focused||this.props.withFocusOutline
return t}},{key:"focusRingRadius",get:function(){var e=this.props.borderRadius,t=void 0===e?"":e
var n="focusRing--radius"
var r=t.trim().split(" ")[0]
if(this.verifyUniformValues(r,t)){var o=function(e){return"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))}
if(["small","medium","large"].includes(r))return"".concat(n).concat(o(r))
if(["circle","pill"].includes(r))return"".concat(n,"Inherit")}return"".concat(n,"None")}},{key:"withBorder",get:function(){var e=this.props.borderWidth
return e&&"0"!==e&&"none"!==e}},{key:"borderStyle",get:function(){var e=this.props,t=e.borderRadius,n=e.borderWidth
if(this.dir===gt.DIRECTION.rtl){t=be(t)
n=me(n)}return{borderRadius:he("View",this.theme,t,"borderRadius"),borderWidth:he("View",this.theme,n,"borderWidth")}}},{key:"spacingStyle",get:function(){var e=this.props,t=e.margin,n=e.padding
if("rtl"===this.dir){t=me(t)
n=me(n)}return{margin:he("View",this.theme,t,"margin"),padding:he("View",this.theme,n,"padding")}}},{key:"offsetStyle",get:function(){var e=this.props,t=e.insetBlockStart,n=e.insetBlockEnd,r=e.insetInlineStart,i=e.insetInlineEnd
var a="rtl"===this.dir
var s={top:t,insetBlockStart:t}
var c={bottom:n,insetBlockEnd:n}
var l={left:a?i:r,right:a?r:i,insetInlineStart:r,insetInlineEnd:i}
return Object(o["a"])({},s,{},c,{},l)}},{key:"styleProps",get:function(){var e=this.props,t=e.cursor,n=e.style
var r=_(n||{},{},["top","left","position","display","transform","overflow","minWidth","minHeight","filter","flexBasis","backgroundImage","pointerEvents"])
t&&(r.cursor=t)
return r}}])
n.displayName="View"
return n}(l["Component"]),sn.propTypes={as:f.a.elementType,elementRef:f.a.func,display:f.a.oneOf(["auto","inline","block","inline-block","flex","inline-flex"]),overflowX:f.a.oneOf(["auto","hidden","visible"]),overflowY:f.a.oneOf(["auto","hidden","visible"]),margin:ke.spacing,padding:ke.spacing,height:f.a.oneOfType([f.a.string,f.a.number]),width:f.a.oneOfType([f.a.string,f.a.number]),maxHeight:f.a.oneOfType([f.a.string,f.a.number]),maxWidth:f.a.oneOfType([f.a.string,f.a.number]),minHeight:f.a.oneOfType([f.a.string,f.a.number]),minWidth:f.a.oneOfType([f.a.string,f.a.number]),children:f.a.node,textAlign:f.a.oneOf(["start","center","end"]),borderWidth:ke.borderWidth,borderRadius:ke.borderRadius,borderColor:p.deprecatePropValues(f.a.oneOf(["transparent","primary","secondary","brand","info","success","warning","alert","danger","default","inverse"]),["default","inverse"],(function(e){var t=e.propName,n=e.propValue
return"In version 8.0.0, the value '".concat(n,"' for `").concat(t,"` will be changed to ").concat(function(){if("default"===n)return"'primary'"
if("inverse"===n)return"'transparent'"}(),". Use that value instead.")})),background:f.a.oneOf(["transparent","primary","secondary","primary-inverse","brand","info","alert","success","danger","warning","default","light","inverse"]),shadow:ke.shadow,stacking:ke.stacking,cursor:Qt,position:f.a.oneOf(["static","absolute","relative","sticky","fixed"]),insetInlineStart:f.a.string,insetInlineEnd:f.a.string,insetBlockStart:f.a.string,insetBlockEnd:f.a.string,withFocusOutline:f.a.bool,focusPosition:f.a.oneOf(["offset","inset"]),focusColor:f.a.oneOf(["info","inverse","success","danger"]),shouldAnimateFocus:f.a.bool,withVisualDebug:f.a.bool,focused:f.a.bool,visualDebug:f.a.bool},sn.defaultProps={display:"auto",as:void 0,textAlign:void 0,overflowX:"visible",overflowY:"visible",shadow:void 0,stacking:void 0,withVisualDebug:false,cursor:void 0,borderWidth:void 0,borderRadius:void 0,borderColor:"primary",margin:void 0,padding:void 0,elementRef:void 0,background:void 0,children:null,width:void 0,height:void 0,maxWidth:void 0,maxHeight:void 0,minWidth:void 0,minHeight:void 0,position:"static",withFocusOutline:void 0,focusPosition:"offset",focusColor:"info",insetInlineStart:void 0,insetInlineEnd:void 0,insetBlockStart:void 0,insetBlockEnd:void 0,shouldAnimateFocus:true},cn))||an)||an)||an)
dn.omitViewProps=function(e,t){false
return y(e,dn.propTypes)}
function un(e){var t=e.colors,n=e.borders
return{arrowSize:"0.5rem",arrowBorderWidth:n.widthSmall,arrowBackgroundColor:t.white,arrowBorderColor:t.tiara,arrowBackgroundColorInverse:t.licorice,arrowBorderColorInverse:"transparent"}}var fn,hn,pn,mn
var bn={componentId:"dqmEK",template:function(e){return"\n\n.dqmEK_ftAV{box-sizing:border-box;min-height:calc(".concat(e.arrowSize||"inherit","*2)}\n\n.dqmEK_caGd{position:relative}\n\n.dqmEK_eBFr,.dqmEK_bQpq,.dqmEK_cLEU,.dqmEK_bcHE,.dqmEK_dRPE{-webkit-padding-end:0;-webkit-padding-start:").concat(e.arrowSize||"inherit",";padding-inline-end:0;padding-inline-start:").concat(e.arrowSize||"inherit","}\n\n[dir=ltr] .dqmEK_eBFr,[dir=ltr] .dqmEK_bQpq,[dir=ltr] .dqmEK_cLEU,[dir=ltr] .dqmEK_bcHE,[dir=ltr] .dqmEK_dRPE{padding-left:").concat(e.arrowSize||"inherit",";padding-right:0}\n\n[dir=rtl] .dqmEK_eBFr,[dir=rtl] .dqmEK_bQpq,[dir=rtl] .dqmEK_cLEU,[dir=rtl] .dqmEK_bcHE,[dir=rtl] .dqmEK_dRPE{padding-left:0;padding-right:").concat(e.arrowSize||"inherit","}\n\n.dqmEK_bhzm,.dqmEK_bxia,.dqmEK_buog,.dqmEK_ctrk,.dqmEK_dHQY{-webkit-padding-end:").concat(e.arrowSize||"inherit",";-webkit-padding-start:0;padding-inline-end:").concat(e.arrowSize||"inherit",";padding-inline-start:0}\n\n[dir=ltr] .dqmEK_bhzm,[dir=ltr] .dqmEK_bxia,[dir=ltr] .dqmEK_buog,[dir=ltr] .dqmEK_ctrk,[dir=ltr] .dqmEK_dHQY{padding-left:0;padding-right:").concat(e.arrowSize||"inherit","}\n\n[dir=rtl] .dqmEK_bhzm,[dir=rtl] .dqmEK_bxia,[dir=rtl] .dqmEK_buog,[dir=rtl] .dqmEK_ctrk,[dir=rtl] .dqmEK_dHQY{padding-left:").concat(e.arrowSize||"inherit",";padding-right:0}\n\n.dqmEK_bgun,.dqmEK_cOtA,.dqmEK_cFhg,.dqmEK_fjSW{padding-top:").concat(e.arrowSize||"inherit","}\n\n.dqmEK_dLYh,.dqmEK_dqZD,.dqmEK_dNlp,.dqmEK_svmP{padding-bottom:").concat(e.arrowSize||"inherit",'}\n\n.dqmEK_bFHc{left:-999em;position:absolute}\n\n.dqmEK_fAVq,.dqmEK_fAVq:after{border-style:solid;box-sizing:border-box;content:"";display:block;height:0;pointer-events:none;position:absolute;width:0}\n\n.dqmEK_fAVq{border-width:calc(').concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",");display:block}\n\n.dqmEK_fAVq:after{border-width:").concat(e.arrowSize||"inherit","}\n\n.dqmEK_fBgc,.dqmEK_fBgc:after{border-color:").concat(e.arrowBorderColor||"inherit","}\n\n.dqmEK_ejeM,.dqmEK_ejeM:after{border-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n.dqmEK_cLQV,.dqmEK_tpPI,.dqmEK_dOuW,.dqmEK_borX,.dqmEK_igtb{border-bottom-color:transparent;border-inline-end-color:").concat(e.arrowBorderColor||"inherit",";border-inline-end-width:").concat(e.arrowSize||"inherit",";border-inline-start-color:transparent;border-inline-start-width:0;border-top-color:transparent;inset-inline-end:100%;inset-inline-start:auto;margin-top:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));top:50%}\n\n[dir=ltr] .dqmEK_cLQV,[dir=ltr] .dqmEK_tpPI,[dir=ltr] .dqmEK_dOuW,[dir=ltr] .dqmEK_borX,[dir=ltr] .dqmEK_igtb{border-left-color:transparent;border-left-width:0;border-right-color:").concat(e.arrowBorderColor||"inherit",";border-right-width:").concat(e.arrowSize||"inherit",";left:auto;right:100%}\n\n[dir=rtl] .dqmEK_cLQV,[dir=rtl] .dqmEK_tpPI,[dir=rtl] .dqmEK_dOuW,[dir=rtl] .dqmEK_borX,[dir=rtl] .dqmEK_igtb{border-left-color:").concat(e.arrowBorderColor||"inherit",";border-left-width:").concat(e.arrowSize||"inherit",";border-right-color:transparent;border-right-width:0;left:100%;right:auto}\n\n.dqmEK_cLQV:after,.dqmEK_dOuW:after,.dqmEK_borX:after,.dqmEK_igtb:after,.dqmEK_tpPI:after{border-bottom-color:transparent;border-inline-end-color:").concat(e.arrowBackgroundColor||"inherit",";border-inline-end-width:").concat(e.arrowSize||"inherit",";border-inline-start-color:transparent;border-inline-start-width:0;border-top-color:transparent;inset-inline-end:auto;inset-inline-start:").concat(e.arrowBorderWidth||"inherit",";margin-top:calc(-1*").concat(e.arrowSize||"inherit",")}\n\n[dir=ltr] .dqmEK_cLQV:after,[dir=ltr] .dqmEK_dOuW:after,[dir=ltr] .dqmEK_borX:after,[dir=ltr] .dqmEK_igtb:after,[dir=ltr] .dqmEK_tpPI:after{border-left-color:transparent;border-left-width:0;border-right-color:").concat(e.arrowBackgroundColor||"inherit",";border-right-width:").concat(e.arrowSize||"inherit",";left:").concat(e.arrowBorderWidth||"inherit",";right:auto}\n\n[dir=rtl] .dqmEK_cLQV:after,[dir=rtl] .dqmEK_dOuW:after,[dir=rtl] .dqmEK_borX:after,[dir=rtl] .dqmEK_igtb:after,[dir=rtl] .dqmEK_tpPI:after{border-left-color:").concat(e.arrowBackgroundColor||"inherit",";border-left-width:").concat(e.arrowSize||"inherit",";border-right-color:transparent;border-right-width:0;left:auto;right:").concat(e.arrowBorderWidth||"inherit","}\n\n.dqmEK_cLQV.dqmEK_ejeM,.dqmEK_dOuW.dqmEK_ejeM,.dqmEK_borX.dqmEK_ejeM,.dqmEK_igtb.dqmEK_ejeM,.dqmEK_tpPI.dqmEK_ejeM{border-inline-end-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n[dir=ltr] .dqmEK_cLQV.dqmEK_ejeM,[dir=ltr] .dqmEK_dOuW.dqmEK_ejeM,[dir=ltr] .dqmEK_borX.dqmEK_ejeM,[dir=ltr] .dqmEK_igtb.dqmEK_ejeM,[dir=ltr] .dqmEK_tpPI.dqmEK_ejeM{border-right-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n[dir=rtl] .dqmEK_cLQV.dqmEK_ejeM,[dir=rtl] .dqmEK_dOuW.dqmEK_ejeM,[dir=rtl] .dqmEK_borX.dqmEK_ejeM,[dir=rtl] .dqmEK_igtb.dqmEK_ejeM,[dir=rtl] .dqmEK_tpPI.dqmEK_ejeM{border-left-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n.dqmEK_cLQV.dqmEK_ejeM:after,.dqmEK_dOuW.dqmEK_ejeM:after,.dqmEK_borX.dqmEK_ejeM:after,.dqmEK_igtb.dqmEK_ejeM:after,.dqmEK_tpPI.dqmEK_ejeM:after{border-inline-end-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n[dir=ltr] .dqmEK_cLQV.dqmEK_ejeM:after,[dir=ltr] .dqmEK_dOuW.dqmEK_ejeM:after,[dir=ltr] .dqmEK_borX.dqmEK_ejeM:after,[dir=ltr] .dqmEK_igtb.dqmEK_ejeM:after,[dir=ltr] .dqmEK_tpPI.dqmEK_ejeM:after{border-right-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n[dir=rtl] .dqmEK_cLQV.dqmEK_ejeM:after,[dir=rtl] .dqmEK_dOuW.dqmEK_ejeM:after,[dir=rtl] .dqmEK_borX.dqmEK_ejeM:after,[dir=rtl] .dqmEK_igtb.dqmEK_ejeM:after,[dir=rtl] .dqmEK_tpPI.dqmEK_ejeM:after{border-left-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n.dqmEK_eiYi,.dqmEK_evPF,.dqmEK_fzfv,.dqmEK_fnqe,.dqmEK_dOsT{border-bottom-color:transparent;border-inline-end-color:transparent;border-inline-end-width:0;border-inline-start-color:").concat(e.arrowBorderColor||"inherit",";border-inline-start-width:").concat(e.arrowSize||"inherit",";border-top-color:transparent;inset-inline-end:auto;inset-inline-start:100%;margin-top:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));top:50%}\n\n[dir=ltr] .dqmEK_eiYi,[dir=ltr] .dqmEK_evPF,[dir=ltr] .dqmEK_fzfv,[dir=ltr] .dqmEK_fnqe,[dir=ltr] .dqmEK_dOsT{border-left-color:").concat(e.arrowBorderColor||"inherit",";border-left-width:").concat(e.arrowSize||"inherit",";border-right-color:transparent;border-right-width:0;left:100%;right:auto}\n\n[dir=rtl] .dqmEK_eiYi,[dir=rtl] .dqmEK_evPF,[dir=rtl] .dqmEK_fzfv,[dir=rtl] .dqmEK_fnqe,[dir=rtl] .dqmEK_dOsT{border-left-color:transparent;border-left-width:0;border-right-color:").concat(e.arrowBorderColor||"inherit",";border-right-width:").concat(e.arrowSize||"inherit",";left:auto;right:100%}\n\n.dqmEK_eiYi:after,.dqmEK_fzfv:after,.dqmEK_fnqe:after,.dqmEK_dOsT:after,.dqmEK_evPF:after{border-bottom-color:transparent;border-inline-end-color:transparent;border-inline-end-width:0;border-inline-start-color:").concat(e.arrowBackgroundColor||"inherit",";border-inline-start-width:").concat(e.arrowSize||"inherit",";border-top-color:transparent;inset-inline-end:").concat(e.arrowBorderWidth||"inherit",";inset-inline-start:auto;margin-top:calc(-1*").concat(e.arrowSize||"inherit",")}\n\n[dir=ltr] .dqmEK_eiYi:after,[dir=ltr] .dqmEK_fzfv:after,[dir=ltr] .dqmEK_fnqe:after,[dir=ltr] .dqmEK_dOsT:after,[dir=ltr] .dqmEK_evPF:after{border-left-color:").concat(e.arrowBackgroundColor||"inherit",";border-left-width:").concat(e.arrowSize||"inherit",";border-right-color:transparent;border-right-width:0;left:auto;right:").concat(e.arrowBorderWidth||"inherit","}\n\n[dir=rtl] .dqmEK_eiYi:after,[dir=rtl] .dqmEK_fzfv:after,[dir=rtl] .dqmEK_fnqe:after,[dir=rtl] .dqmEK_dOsT:after,[dir=rtl] .dqmEK_evPF:after{border-left-color:transparent;border-left-width:0;border-right-color:").concat(e.arrowBackgroundColor||"inherit",";border-right-width:").concat(e.arrowSize||"inherit",";left:").concat(e.arrowBorderWidth||"inherit",";right:auto}\n\n.dqmEK_eiYi.dqmEK_ejeM,.dqmEK_fzfv.dqmEK_ejeM,.dqmEK_fnqe.dqmEK_ejeM,.dqmEK_dOsT.dqmEK_ejeM,.dqmEK_evPF.dqmEK_ejeM{border-inline-start-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n[dir=ltr] .dqmEK_eiYi.dqmEK_ejeM,[dir=ltr] .dqmEK_fzfv.dqmEK_ejeM,[dir=ltr] .dqmEK_fnqe.dqmEK_ejeM,[dir=ltr] .dqmEK_dOsT.dqmEK_ejeM,[dir=ltr] .dqmEK_evPF.dqmEK_ejeM{border-left-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n[dir=rtl] .dqmEK_eiYi.dqmEK_ejeM,[dir=rtl] .dqmEK_fzfv.dqmEK_ejeM,[dir=rtl] .dqmEK_fnqe.dqmEK_ejeM,[dir=rtl] .dqmEK_dOsT.dqmEK_ejeM,[dir=rtl] .dqmEK_evPF.dqmEK_ejeM{border-right-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n.dqmEK_eiYi.dqmEK_ejeM:after,.dqmEK_fzfv.dqmEK_ejeM:after,.dqmEK_fnqe.dqmEK_ejeM:after,.dqmEK_dOsT.dqmEK_ejeM:after,.dqmEK_evPF.dqmEK_ejeM:after{border-inline-start-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n[dir=ltr] .dqmEK_eiYi.dqmEK_ejeM:after,[dir=ltr] .dqmEK_fzfv.dqmEK_ejeM:after,[dir=ltr] .dqmEK_fnqe.dqmEK_ejeM:after,[dir=ltr] .dqmEK_dOsT.dqmEK_ejeM:after,[dir=ltr] .dqmEK_evPF.dqmEK_ejeM:after{border-left-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n[dir=rtl] .dqmEK_eiYi.dqmEK_ejeM:after,[dir=rtl] .dqmEK_fzfv.dqmEK_ejeM:after,[dir=rtl] .dqmEK_fnqe.dqmEK_ejeM:after,[dir=rtl] .dqmEK_dOsT.dqmEK_ejeM:after,[dir=rtl] .dqmEK_evPF.dqmEK_ejeM:after{border-right-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n.dqmEK_dHiK,.dqmEK_dBdm,.dqmEK_ePhw,.dqmEK_bDBw{-webkit-margin-end:0;-webkit-margin-start:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));border-inline-end-color:transparent;border-inline-start-color:transparent;border-top-color:transparent;border-top-width:0;bottom:100%;margin-inline-end:0;margin-inline-start:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","))}\n\n[dir=ltr] .dqmEK_dHiK,[dir=ltr] .dqmEK_dBdm,[dir=ltr] .dqmEK_ePhw,[dir=ltr] .dqmEK_bDBw{border-left-color:transparent;border-right-color:transparent;margin-left:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));margin-right:0}\n\n[dir=rtl] .dqmEK_dHiK,[dir=rtl] .dqmEK_dBdm,[dir=rtl] .dqmEK_ePhw,[dir=rtl] .dqmEK_bDBw{border-left-color:transparent;border-right-color:transparent;margin-left:0;margin-right:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","))}\n\n.dqmEK_dBdm:after,.dqmEK_ePhw:after,.dqmEK_bDBw:after,.dqmEK_dHiK:after{-webkit-margin-end:0;-webkit-margin-start:calc(-1*").concat(e.arrowSize||"inherit",");border-bottom-color:").concat(e.arrowBackgroundColor||"inherit",";border-inline-end-color:transparent;border-inline-start-color:transparent;border-top-color:transparent;border-top-width:0;margin-inline-end:0;margin-inline-start:calc(-1*").concat(e.arrowSize||"inherit",");top:").concat(e.arrowBorderWidth||"inherit","}\n\n[dir=ltr] .dqmEK_dBdm:after,[dir=ltr] .dqmEK_ePhw:after,[dir=ltr] .dqmEK_bDBw:after,[dir=ltr] .dqmEK_dHiK:after{border-left-color:transparent;border-right-color:transparent;margin-left:calc(-1*").concat(e.arrowSize||"inherit",");margin-right:0}\n\n[dir=rtl] .dqmEK_dBdm:after,[dir=rtl] .dqmEK_ePhw:after,[dir=rtl] .dqmEK_bDBw:after,[dir=rtl] .dqmEK_dHiK:after{border-left-color:transparent;border-right-color:transparent;margin-left:0;margin-right:calc(-1*").concat(e.arrowSize||"inherit",")}\n\n.dqmEK_dBdm.dqmEK_ejeM:after,.dqmEK_ePhw.dqmEK_ejeM:after,.dqmEK_bDBw.dqmEK_ejeM:after,.dqmEK_dHiK.dqmEK_ejeM:after{border-bottom-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n.dqmEK_cjte,.dqmEK_edfl,.dqmEK_ZLAk,.dqmEK_ftdy{-webkit-margin-end:0;-webkit-margin-start:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));border-bottom-color:transparent;border-bottom-width:0;border-inline-end-color:transparent;border-inline-start-color:transparent;margin-inline-end:0;margin-inline-start:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));top:100%}\n\n[dir=ltr] .dqmEK_cjte,[dir=ltr] .dqmEK_edfl,[dir=ltr] .dqmEK_ZLAk,[dir=ltr] .dqmEK_ftdy{border-left-color:transparent;border-right-color:transparent;margin-left:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));margin-right:0}\n\n[dir=rtl] .dqmEK_cjte,[dir=rtl] .dqmEK_edfl,[dir=rtl] .dqmEK_ZLAk,[dir=rtl] .dqmEK_ftdy{border-left-color:transparent;border-right-color:transparent;margin-left:0;margin-right:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","))}\n\n.dqmEK_edfl:after,.dqmEK_ZLAk:after,.dqmEK_ftdy:after,.dqmEK_cjte:after{-webkit-margin-end:0;-webkit-margin-start:calc(-1*").concat(e.arrowSize||"inherit",");border-bottom-color:transparent;border-bottom-width:0;border-inline-end-color:transparent;border-inline-start-color:transparent;border-top-color:").concat(e.arrowBackgroundColor||"inherit",";bottom:").concat(e.arrowBorderWidth||"inherit",";margin-inline-end:0;margin-inline-start:calc(-1*").concat(e.arrowSize||"inherit",")}\n\n[dir=ltr] .dqmEK_edfl:after,[dir=ltr] .dqmEK_ZLAk:after,[dir=ltr] .dqmEK_ftdy:after,[dir=ltr] .dqmEK_cjte:after{border-left-color:transparent;border-right-color:transparent;margin-left:calc(-1*").concat(e.arrowSize||"inherit",");margin-right:0}\n\n[dir=rtl] .dqmEK_edfl:after,[dir=rtl] .dqmEK_ZLAk:after,[dir=rtl] .dqmEK_ftdy:after,[dir=rtl] .dqmEK_cjte:after{border-left-color:transparent;border-right-color:transparent;margin-left:0;margin-right:calc(-1*").concat(e.arrowSize||"inherit",")}\n\n.dqmEK_edfl.dqmEK_ejeM:after,.dqmEK_ZLAk.dqmEK_ejeM:after,.dqmEK_ftdy.dqmEK_ejeM:after,.dqmEK_cjte.dqmEK_ejeM:after{border-top-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n.dqmEK_cjte,.dqmEK_edfl,.dqmEK_dHiK,.dqmEK_dBdm{inset-inline-start:50%}\n\n[dir=ltr] .dqmEK_cjte,[dir=ltr] .dqmEK_edfl,[dir=ltr] .dqmEK_dHiK,[dir=ltr] .dqmEK_dBdm{left:50%}\n\n[dir=rtl] .dqmEK_cjte,[dir=rtl] .dqmEK_edfl,[dir=rtl] .dqmEK_dHiK,[dir=rtl] .dqmEK_dBdm{right:50%}\n\n.dqmEK_ftdy,.dqmEK_bDBw{inset-inline-end:auto;inset-inline-start:calc((").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}\n\n[dir=ltr] .dqmEK_ftdy,[dir=ltr] .dqmEK_bDBw{left:calc((").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2);right:auto}\n\n[dir=rtl] .dqmEK_ftdy,[dir=rtl] .dqmEK_bDBw{left:auto;right:calc((").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}\n\n.dqmEK_ZLAk,.dqmEK_ePhw{inset-inline-end:auto;inset-inline-start:calc(100% - (").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}\n\n[dir=ltr] .dqmEK_ZLAk,[dir=ltr] .dqmEK_ePhw{left:calc(100% - (").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2);right:auto}\n\n[dir=rtl] .dqmEK_ZLAk,[dir=rtl] .dqmEK_ePhw{left:auto;right:calc(100% - (").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}\n\n.dqmEK_dOsT,.dqmEK_igtb{top:calc((").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}\n\n.dqmEK_fzfv,.dqmEK_dOuW{top:calc(100% - (").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}")},contextViewRoot:"dqmEK_ftAV",content:"dqmEK_caGd","placement--center-end":"dqmEK_eBFr","placement--end":"dqmEK_bQpq","placement--end-bottom":"dqmEK_cLEU","placement--end-center":"dqmEK_bcHE","placement--end-top":"dqmEK_dRPE","placement--center-start":"dqmEK_bhzm","placement--start":"dqmEK_bxia","placement--start-bottom":"dqmEK_buog","placement--start-center":"dqmEK_ctrk","placement--start-top":"dqmEK_dHQY","placement--bottom":"dqmEK_bgun","placement--bottom-center":"dqmEK_cOtA","placement--bottom-end":"dqmEK_cFhg","placement--bottom-start":"dqmEK_fjSW","placement--top":"dqmEK_dLYh","placement--top-center":"dqmEK_dqZD","placement--top-end":"dqmEK_dNlp","placement--top-start":"dqmEK_svmP","placement--offscreen":"dqmEK_bFHc",arrow:"dqmEK_fAVq","arrow--default":"dqmEK_fBgc","arrow--inverse":"dqmEK_ejeM","arrow--center-start":"dqmEK_cLQV","arrow--start":"dqmEK_tpPI","arrow--start-bottom":"dqmEK_dOuW","arrow--start-center":"dqmEK_borX","arrow--start-top":"dqmEK_igtb","arrow--center-end":"dqmEK_eiYi","arrow--end":"dqmEK_evPF","arrow--end-bottom":"dqmEK_fzfv","arrow--end-center":"dqmEK_fnqe","arrow--end-top":"dqmEK_dOsT","arrow--top":"dqmEK_dHiK","arrow--top-center":"dqmEK_dBdm","arrow--top-end":"dqmEK_ePhw","arrow--top-start":"dqmEK_bDBw","arrow--bottom":"dqmEK_cjte","arrow--bottom-center":"dqmEK_edfl","arrow--bottom-end":"dqmEK_ZLAk","arrow--bottom-start":"dqmEK_ftdy"}
var vn=(fn=le(un,bn),fn(hn=(mn=pn=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(a["a"])(n,[{key:"render",value:function(){var e,t
var r=this.props,o=r.as,i=r.background,a=r.children,s=r.debug,c=r.elementRef,l=r.height,u=r.width,f=r.maxHeight,h=r.maxWidth,p=r.minHeight,m=r.minWidth,b=r.margin,v=r.padding,g=r.placement,O=r.shadow,_=r.stacking,w=r.style,E=r.textAlign
var k=(e={},Object(P["a"])(e,bn.contextViewRoot,true),Object(P["a"])(e,bn["placement--".concat(g.replace(" ","-"))],true),e)
return d.a.createElement(dn,Object.assign({},y(this.props,n.propTypes),{style:w,className:tt()(k),borderWidth:"none",display:"inline-block",as:o,withVisualDebug:s,elementRef:c,margin:b,stacking:_}),d.a.createElement(dn,{className:bn.content,display:"block",borderRadius:"medium",borderWidth:"small",borderColor:"default"===i?"primary":"transparent",background:"default"===i?"primary":"primary-inverse",withVisualDebug:s,height:l,width:u,maxHeight:f,maxWidth:h,minHeight:p,minWidth:m,padding:v,shadow:O,textAlign:E},d.a.createElement("span",{className:tt()((t={},Object(P["a"])(t,bn.arrow,true),Object(P["a"])(t,bn["arrow--".concat(i)],i),Object(P["a"])(t,bn["arrow--".concat(this.mirroredPlacement)],true),t))}),a))}},{key:"mirroredPlacement",get:function(){return We(this.props.placement,"-")}}])
n.displayName="ContextView"
return n}(l["Component"]),pn.propTypes={as:f.a.elementType,elementRef:f.a.func,margin:ke.spacing,padding:ke.spacing,height:f.a.oneOfType([f.a.string,f.a.number]),width:f.a.oneOfType([f.a.string,f.a.number]),maxHeight:f.a.oneOfType([f.a.string,f.a.number]),maxWidth:f.a.oneOfType([f.a.string,f.a.number]),minHeight:f.a.oneOfType([f.a.string,f.a.number]),minWidth:f.a.oneOfType([f.a.string,f.a.number]),children:f.a.node,textAlign:f.a.oneOf(["start","center","end"]),shadow:ke.shadow,stacking:ke.stacking,background:f.a.oneOf(["default","inverse"]),placement:U.placement,debug:f.a.bool},pn.defaultProps={as:"span",elementRef:function(e){},debug:false,width:"auto",height:"auto",children:null,textAlign:"start",background:"default",shadow:"resting",placement:"center end",margin:void 0,padding:void 0,stacking:void 0,maxWidth:void 0,minWidth:void 0,maxHeight:void 0,minHeight:void 0},mn))||hn)
function gn(e,t,n,r){var o=e===window||e===document?e:Q(e)
o.addEventListener(t,n,r)
return{remove:function(){o.removeEventListener(t,n,r)}}}function yn(e){try{return e.contentDocument||e.contentWindow.document}catch(e){return null}}var On=n("KQm4")
function _n(e,t){var n=e&&Q(e)
if(!n)return false
return n.matches?n.matches(t):n.msMatchesSelector(t)}function wn(e,t,n){var r=Q(e)
if(!r||"function"!==typeof r.querySelectorAll)return[]
var o="a[href],frame,iframe,object,input:not([type=hidden]),select,textarea,button,*[tabindex]"
var i=Array.from(r.querySelectorAll(o))
n&&_n(r,o)&&(i=[].concat(Object(On["a"])(i),[r]))
return i.filter((function(e){return"function"===typeof t?t(e)&&qn(e):qn(e)}))}function En(e){var t=Re(e)
return"inline"!==t.display&&e.offsetWidth<=0&&e.offsetHeight<=0||"none"===t.display}function kn(e){var t=["fixed","absolute"]
if(t.includes(e.style.position.toLowerCase()))return true
if(t.includes(Re(e).getPropertyValue("position").toLowerCase()))return true
return false}function Kn(e){while(e){if(e===document.body)break
if(En(e))return false
if(kn(e))break
e=e.parentNode}return true}function qn(e){return!e.disabled&&Kn(e)}function jn(e,t){return wn(e,(function(e){return!Cn(e.getAttribute("tabindex"))}),t)}function Cn(e){return!isNaN(e)&&e<0}var Tn=function(){function e(t){var n=this
var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shouldContainFocus:true,liveRegion:[]}
Object(i["a"])(this,e)
this._observer=null
this._attributes=[]
this._nodes=[]
this._parents=[]
this.handleDOMMutation=function(e){e.forEach((function(e){var t=Array.from(e.addedNodes)
var r=Array.from(e.removedNodes)
n.hideNodes(t)
r.forEach((function(e){"iframe"!==e.tagName.toLowerCase()&&n.restoreNode(e)
var t=n.parseIframeBodies(e)
t.forEach((function(e){n.restoreNode(e)}))}))}))}
var o="function"===typeof r.liveRegion?r.liveRegion():r.liveRegion
this._liveRegion=Array.isArray(o)?o:[o]
this._contextElement=t
this._options=r}Object(a["a"])(e,[{key:"updateElement",value:function(e){this._contextElement=e}},{key:"muteNode",value:function(e){var t=this
if(e&&"script"!==e.tagName.toLowerCase()){["role","aria-label","aria-hidden"].forEach((function(n){var r=e.getAttribute(n)
if(null!==r){t._attributes.push([e,n,r])
e.removeAttribute(n)}}))
this._observer.observe(e,{childList:true})}}},{key:"hideNodes",value:function(e){var t=this
e.forEach((function(e){var n
var r="function"===typeof e.getAttribute&&(null===(n=e.getAttribute("aria-live"))||void 0===n?void 0:n.toLowerCase())
if(e&&1===e.nodeType&&"script"!==e.tagName.toLowerCase()&&"assertive"!==r&&"polite"!==r&&-1===t._parents.indexOf(e)&&-1===t._nodes.indexOf(e)&&-1===t._liveRegion.indexOf(e)&&!t._contextElement.contains(e)){"iframe"!==e.tagName.toLowerCase()&&t.hideNode(e)
var o=t.parseIframeBodies(e)
o.forEach((function(e){t.hideNode(e)}))}}))}},{key:"hideNode",value:function(e){if("true"!==e.getAttribute("aria-hidden")){e.setAttribute("aria-hidden","true")
this._nodes.push(e)}}},{key:"restoreNode",value:function(e){var t=this._nodes.indexOf(e)
if(t>=0){e.removeAttribute("aria-hidden")
this._nodes.splice(t,1)}}},{key:"parseIframeBodies",value:function(e){if(!e)return[]
var t=[]
"iframe"===e.tagName.toLowerCase()?t.push(e):e.getElementsByTagName&&(t=Array.from(e.getElementsByTagName("iframe")))
return t.map((function(e){var t=null
try{t=e.contentDocument.body}catch(e){"[ui-a11y] could not find a document for iframe: ".concat(e)}return t})).filter((function(e){return null!==e}))}},{key:"activate",value:function(){if(!this._options.shouldContainFocus)return
this._observer=new MutationObserver(this.handleDOMMutation)
var e=this._contextElement
while(e&&1===e.nodeType&&"body"!==e.tagName.toLowerCase()){var t=e.parentElement
if(t){this._parents.push(t)
this.muteNode(t)
this.hideNodes(Array.prototype.slice.call(t.childNodes))}e=e.parentNode}}},{key:"deactivate",value:function(){if(this._observer){this._observer.disconnect()
this._observer=null}this._nodes.forEach((function(e){e.removeAttribute("aria-hidden")}))
this._nodes=[]
this._attributes.forEach((function(e){e[0].setAttribute(e[1],e[2]||"")}))
this._attributes=[]
this._parents=[]}}])
return e}()
function Un(e){try{return(e||document).activeElement}catch(e){}}function xn(e){var t=e&&Q(e)
var n=Un()
return t&&(n===t||Be(t,n))}function Sn(e){var t=e&&Q(e)
return t&&Un()===t}function Pn(e,t,n){var r=Q(e)
var o=jn(r)
if(!o.length){t.preventDefault()
return}if(xn(e)){var i=Un();-1===o.indexOf(i)&&o.push(i)}var a=o[t.shiftKey?0:o.length-1]
var s=Sn(a)||Sn(r)||!xn(e)
if(!s)return
if("function"===typeof n){n()
return}t.preventDefault()
var c=o[t.shiftKey?o.length-1:0]
c.focus()}var Bn=function(){function e(t,n){var r=this
Object(i["a"])(this,e)
this._contextElement=null
this._focusLaterElement=null
this._needToFocus=false
this._listeners=[]
this._raf=[]
this._active=false
this.handleDismiss=function(e){r._options.onDismiss(e)}
this.handleKeyDown=function(e){e.keyCode===xe.a.codes.tab&&Pn(r._contextElement,e)}
this.handleClick=function(e){r._wasDocumentClick=true}
this.handleWindowBlur=function(e){if(r._wasDocumentClick){r._wasDocumentClick=false
return}r._needToFocus=true}
this.handleFocus=function(e){if(r._needToFocus){r._needToFocus=false
if(!r._contextElement)return
r._raf.push(it((function(){if(xn(r._contextElement))return
r.focusDefaultElement()})))}}
this.handleFirstTabbableKeyDown=function(e){e.keyCode===xe.a.codes.tab&&e.shiftKey&&r._options.onBlur(e)}
this.handleLastTabbableKeyDown=function(e){e.keyCode!==xe.a.codes.tab||e.shiftKey||r._options.onBlur(e)}
this._contextElement=Q(t)
this._options=n||{shouldContainFocus:true,shouldReturnFocus:true,onBlur:function(e){},onDismiss:function(e){},defaultFocusElement:null}
this._options.shouldReturnFocus&&(this._focusLaterElement=this.activeElement)}Object(a["a"])(e,[{key:"updateElement",value:function(e){this._contextElement=Q(e)}},{key:"focusDefaultElement",value:function(){var e=this.defaultFocusElement,t=this.shouldContainFocus
e?e.focus():t&&this.activeElement.blur()}},{key:"focus",value:function(){var e=this
if(this.focused)return
this._raf.push(it((function(){e.focusDefaultElement()})))}},{key:"blur",value:function(){if(this._options.shouldReturnFocus&&this._focusLaterElement){try{this._focusLaterElement.focus()}catch(e){"\n          [KeyboardFocusRegion] You tried to return focus to ".concat(this._focusLaterElement,"\n          but it is not in the DOM anymore: ").concat(e,"\n          ")}this._focusLaterElement=null}}},{key:"activate",value:function(){var e=this.defaultFocusElement,t=this.shouldContainFocus
if(!this._active&&(e||t)){if(t)this._listeners.push(gn(this.doc,"keydown",this.handleKeyDown))
else{this._listeners.push(gn(this.firstTabbable||e,"keydown",this.handleFirstTabbableKeyDown))
this._listeners.push(gn(this.lastTabbable||e,"keydown",this.handleLastTabbableKeyDown))}this._listeners.push(gn(this.doc,"click",this.handleClick,true))
this._listeners.push(gn(this.win,"blur",this.handleWindowBlur,false))
this._listeners.push(gn(this.doc,"focus",this.handleFocus,true))
this._active=true}}},{key:"deactivate",value:function(){if(this._active){this._listeners.forEach((function(e){e.remove()}))
this._listeners=[]
this._raf.forEach((function(e){return e.cancel()}))
this._raf=[]
this._preventCloseOnDocumentClick=false
this._active=false}}},{key:"focused",get:function(){return xn(this._contextElement)}},{key:"shouldContainFocus",get:function(){var e=this._options.shouldContainFocus
return true===e||Array.isArray(e)&&e.includes["keyboard"]}},{key:"focusable",get:function(){return wn(this._contextElement,(function(){return true}),true)||[]}},{key:"tabbable",get:function(){return jn(this._contextElement)||[]}},{key:"firstTabbable",get:function(){return this.tabbable[0]}},{key:"lastTabbable",get:function(){return this.tabbable.pop()}},{key:"firstFocusable",get:function(){return this.focusable[0]}},{key:"lastFocusable",get:function(){return this.focusable.pop()}},{key:"doc",get:function(){return De(this._contextElement)}},{key:"win",get:function(){return Ae(this._contextElement)}},{key:"activeElement",get:function(){return Un(this.doc)}},{key:"defaultFocusElement",get:function(){var e=this._options.defaultFocusElement
var t=Q("function"===typeof e?e():e)
if(t&&this._contextElement&&this._contextElement.contains(t))return t
var n=this.firstTabbable
if(n)return n
if(this.focusable.includes(this._contextElement))return this._contextElement
return null}}])
return e}()
var Dn=function(){function e(t,n){var r=this
Object(i["a"])(this,e)
this._contextElement=null
this._preventCloseOnDocumentClick=false
this._listeners=[]
this._active=false
this.handleDismiss=function(e,t){r._options.onDismiss(e,t)}
this.captureDocumentClick=function(e){var t=e.target
r._preventCloseOnDocumentClick=0!==e.button||Be(r._contextElement,t)}
this.handleDocumentClick=function(e){r._options.shouldCloseOnDocumentClick&&!r._preventCloseOnDocumentClick&&r.handleDismiss(e,true)}
this.handleFrameClick=function(e,t){Be(r._contextElement,t)||r.handleDismiss(e,true)}
this.handleKeyUp=function(e){r._options.shouldCloseOnEscape&&e.keyCode===xe.a.codes.escape&&!e.defaultPrevented&&r.handleDismiss(e)}
this._options=n||{shouldCloseOnDocumentClick:true,shouldCloseOnEscape:true,onDismiss:function(e){}}
this._contextElement=t
this._screenReaderFocusRegion=new Tn(t,n)
this._keyboardFocusRegion=new Bn(t,n)
this._id=Object(x["a"])()}Object(a["a"])(e,[{key:"updateElement",value:function(e){this._contextElement=e
this._keyboardFocusRegion&&this._keyboardFocusRegion.updateElement(e)
this._screenReaderFocusRegion&&this._screenReaderFocusRegion.updateElement(e)}},{key:"activate",value:function(){var e=this
if(!this._active){var t=De(this._contextElement)
this._keyboardFocusRegion.activate()
this._screenReaderFocusRegion.activate()
if(this._options.shouldCloseOnDocumentClick){this._listeners.push(gn(t,"click",this.captureDocumentClick,true))
this._listeners.push(gn(t,"click",this.handleDocumentClick))
Array.from(t.getElementsByTagName("iframe")).forEach((function(t){var n=yn(t)
n&&e._listeners.push(gn(n,"mouseup",(function(n){e.handleFrameClick(n,t)})))}))}this._options.shouldCloseOnEscape&&this._listeners.push(gn(t,"keyup",this.handleKeyUp))
this._active=true}}},{key:"deactivate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.keyboard,n=void 0===t||t
if(this._active){this._listeners.forEach((function(e){e.remove()}))
this._listeners=[]
n&&this._keyboardFocusRegion.deactivate()
this._screenReaderFocusRegion.deactivate()
this._active=false}}},{key:"focus",value:function(){this._active
this._keyboardFocusRegion.focus()}},{key:"blur",value:function(){this._active
this._keyboardFocusRegion.blur()}},{key:"id",get:function(){return this._id}},{key:"focused",get:function(){return this._active}},{key:"keyboardFocusable",get:function(){return(jn(this._contextElement)||[]).length>0}}])
return e}()
var Nn=[]
var An=function e(){Object(i["a"])(this,e)}
An.focusRegion=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var n
n="string"===typeof t?An.getEntry(e,t):An.addEntry(e,t)
if(n&&n.region&&"function"===typeof n.region.focus){n.region.focus()
return n.region}"[FocusRegionManager] Could not focus region with element: ".concat(e)}
An.activateRegion=function(e,t){var n=An.addEntry(e,t),r=n.region
return r}
An.getActiveEntry=function(){return Nn.find((function(e){var t=e.region
return t.focused}))}
An.findEntry=function(e,t){var n
n=t?Nn.findIndex((function(e){return e.id===t})):Nn.findIndex((function(t){return t.element===e}))
return n}
An.getEntry=function(e,t){return Nn[An.findEntry(e,t)]}
An.addEntry=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var n=new Dn(e,t)
var r=An.getActiveEntry()
var o=n.keyboardFocusable
Nn.forEach((function(e){var t=e.region
t&&t.deactivate(t.focused&&!o&&{keyboard:false})}))
n.activate()
t.shouldFocusOnOpen&&n.focus()
var i={id:n.id,element:e,region:n,children:[],parent:r}
Nn.push(i)
r&&r.children.push(i)
return i}
An.removeEntry=function(e,t){var n=An.findEntry(e,t)
var r=Nn[n]
n>-1&&Nn.splice(n,1)
return r}
An.isFocused=function(e,t){var n=An.getActiveEntry()
return t?n&&n.region&&n.id===t:n&&n.region&&n.element===e}
An.clearEntries=function(){Nn=[]}
An.blurRegion=function(e,t){var n=An.removeEntry(e,t)
if(n){var r=n.children,o=n.region,i=n.parent
o&&o.deactivate()
r&&r.forEach((function(e){var t=e.id,n=e.element
var r=An.removeEntry(n,t)
r&&r.region&&r.region.deactivate()}))
i&&i.region&&i.region.activate()
o&&o.blur()}}
var Rn=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){var e
Object(i["a"])(this,n)
for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a]
e=t.call.apply(t,[this].concat(o))
e._raf=[]
e._focusRegion=null
e.getRef=function(t){e._root=t}
return e}Object(a["a"])(n,[{key:"componentDidMount",value:function(){this.props.open&&this.open()}},{key:"componentDidUpdate",value:function(e){var t=this.props.open
t&&!e.open?this.open():!t&&e.open&&this.close()
this._focusRegion&&this._focusRegion.updateElement(this.contentElement)}},{key:"componentWillUnmount",value:function(){this.props.open&&this.close()
this._raf.forEach((function(e){return e.cancel()}))
this._raf=[]}},{key:"open",value:function(){var e=this
var t=this.props,n=(t.open,t.contentElement,Object(r["a"])(t,["open","contentElement"]))
this._raf.push(it((function(){e._focusRegion=An.activateRegion(e.contentElement,Object(o["a"])({},n))})))}},{key:"close",value:function(){this._focusRegion&&An.blurRegion(this.contentElement,this._focusRegion.id)}},{key:"focus",value:function(){if(!this.props.open||!this.contentElement)return
this._focusRegion&&An.focusRegion(this.contentElement,this._focusRegion.id)}},{key:"blur",value:function(){if(!this.props.open||!this.contentElement)return
this.close()}},{key:"render",value:function(){var e=m(n,this.props)
return this.props.open?d.a.createElement(e,Object.assign({},y(this.props,n.propTypes),{ref:this.getRef,role:this.props.label?"dialog":null,"aria-label":this.props.label,className:this.props.className}),this.props.children):null}},{key:"contentElement",get:function(){var e=Q(this.props.contentElement)
e||(e=Q(this._root))
return e}},{key:"focused",get:function(){return this.contentElement&&this._focusRegion&&An.isFocused(this.contentElement,this._focusRegion.id)}}])
n.displayName="Dialog"
return n}(l["Component"])
Rn.propTypes={children:f.a.node,as:f.a.elementType,display:f.a.oneOf(["auto","block","inline-block"]),label:f.a.string,open:f.a.bool,onBlur:f.a.func,onDismiss:f.a.func,defaultFocusElement:f.a.oneOfType([f.a.element,f.a.func]),contentElement:f.a.oneOfType([f.a.element,f.a.func]),liveRegion:f.a.oneOfType([f.a.arrayOf(f.a.element),f.a.element,f.a.func]),shouldContainFocus:f.a.oneOfType([f.a.bool,f.a.oneOf(["keyboard","screenreader"])]),shouldReturnFocus:f.a.bool,shouldCloseOnDocumentClick:f.a.bool,shouldCloseOnEscape:f.a.bool,shouldFocusOnOpen:f.a.bool}
Rn.defaultProps={children:null,display:void 0,label:void 0,open:false,shouldFocusOnOpen:true,shouldContainFocus:false,shouldReturnFocus:false,shouldCloseOnDocumentClick:true,shouldCloseOnEscape:true,defaultFocusElement:null,contentElement:null,liveRegion:null,onBlur:function(e){},onDismiss:function(e){}}
function In(e,t){var n=t.currentTarget
var r=t.relatedTarget||t.nativeEvent.toElement
r&&(r===n||Be(n,r))||e(t)}var Mn={}
function Fn(e,t){if(!oe)return 16
var n=e||De(e).documentElement
if(!t&&Mn[n])return Mn[n]
var r=parseInt(Re(n).getPropertyValue("font-size"))
Mn[n]=r
return r}function Wn(e){var t="".concat(e)
return[parseFloat(t,10),t.match(/[\d.\-\+]*\s*(.*)/)[1]||""]}function zn(e,t){var n=t||document.body
if(!e||"number"===typeof e)return e
var r=Wn(e),o=Object(je["a"])(r,2),i=o[0],a=o[1]
return"rem"===a?i*Fn():"em"===a?i*Fn(n):i}var Ln,Hn,Yn,Vn,Xn,Jn,Gn,Zn,Qn,$n,er,tr,nr,rr,or,ir
var ar=(Ln=p("8.0.0",null,"Use Popover's `renderTrigger` prop instead."),Hn=Te(),Ln(Yn=Hn(Yn=(Xn=Vn=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}return n}(ot),Vn.displayName="PopoverTrigger",Xn))||Yn)||Yn)
var sr=(Jn=p("8.0.0",null,"Use Popover's `children` instead."),Gn=Te(),Jn(Zn=Gn(Zn=($n=Qn=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}return n}(ot),Qn.displayName="PopoverContent",$n))||Zn)||Zn)
var cr=(er=p("8.0.0",{show:"isShowingContent",defaultShow:"defaultIsShowingContent",variant:"color",label:"screenReaderLabel",trackPosition:"shouldTrackPosition",alignArrow:"shouldAlignArrow",onShow:"onShowContent",onDismiss:"onHideContent",onToggle:"onShowContent/onHideContent"}),tr=Te(),nr=gt(),er(rr=tr(rr=nr(rr=(ir=or=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(e){var r
Object(i["a"])(this,n)
r=t.call(this,e)
r.show=function(e){"undefined"===typeof r.props.isShowingContent&&"undefined"===typeof r.props.show&&r.setState({isShowingContent:true})
r.props.onShowContent(e)
"function"===typeof r.props.onToggle&&r.props.onToggle(true)}
r.hide=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
var n=r.props,o=n.onHideContent,i=n.isShowingContent,a=n.show,s=n.onToggle,c=n.onDismiss
if("undefined"===typeof i&&"undefined"===typeof a)r.setState((function(n){var r=n.isShowingContent
if(r){o(e,{documentClick:t})
"function"===typeof c&&c(e,t)}return{isShowingContent:false}}))
else if(i||a){o(e,{documentClick:t})
"function"===typeof c&&c(e,t)}"function"===typeof s&&s(false)}
r.toggle=function(e){r.shown?r.hide(e):r.show(e)}
r.handleDialogDismiss=function(){var e
if(!r.props.shouldReturnFocus&&r.props.shouldFocusContentOnTriggerBlur){var t=Q(r._trigger)
t&&"function"===typeof t.focus&&t.focus()}(e=r).hide.apply(e,arguments)}
r.handleDialogBlur=function(e){if(e.keyCode===xe.a.codes.tab&&e.shiftKey&&r.props.shouldFocusContentOnTriggerBlur)return
r.hide(e)}
r.handleTriggerKeyDown=function(e){if(!r.props.shouldFocusContentOnTriggerBlur)return
if(e.keyCode===xe.a.codes.tab&&!e.shiftKey){e.preventDefault()
r._raf.push(it((function(){r._dialog&&r._dialog.focus()})))}}
r.handleTriggerKeyUp=function(e){if(e.keyCode===xe.a.codes.esc&&r.shown&&r.isTooltip){e.preventDefault()
r.hide(e)}}
r.handleTriggerBlur=function(e){r.props.on.indexOf("focus")>-1&&r._raf.push(it((function(){xn(r._view)||r.hide(e)})))}
r.handlePositioned=function(e){var t=e.placement
r.setState(Object(o["a"])({placement:t},r.computeOffsets(t)))
r.props.onPositioned(e)
"function"===typeof r.props.onShow&&r.props.onShow(e)}
r.handlePositionChanged=function(e){var t=e.placement
r.setState(Object(o["a"])({placement:t},r.computeOffsets(t)))
r.props.onPositionChanged(e)}
r.state={placement:e.placement,offsetX:e.offsetX,offsetY:e.offsetY}
"undefined"===typeof e.isShowingContent&&"undefined"===typeof e.show&&(r.state.isShowingContent=e.defaultIsShowingContent||e.defaultShow)
r._id=r.props.id||Object(x["a"])("Popover")
r._raf=[]
r._handleMouseOver=In.bind(null,(function(e){r.show(e)}))
r._handleMouseOut=In.bind(null,(function(e){r.hide(e)}))
return r}Object(a["a"])(n,[{key:"componentDidMount",value:function(){if(this.isTooltip){this._focusRegion=new Dn(this._contentElement,{shouldCloseOnEscape:false,shouldCloseOnDocumentClick:true,onDismiss:this.hide})
this.shown&&this._focusRegion.activate()}}},{key:"componentWillUnmount",value:function(){this._raf.forEach((function(e){return e.cancel()}))
this._raf=[]
if(this._focusRegion){this._focusRegion.deactivate()
this._focusRegion.blur()}}},{key:"shouldComponentUpdate",value:function(e,t){return!V(this.props,e)||!V(this.state,t)}},{key:"componentDidUpdate",value:function(e,t){if(this._focusRegion&&this.isTooltip){if(!e.isShowingContent&&this.props.isShowingContent||!t.isShowingContent&&this.state.isShowingContent){this._focusRegion.activate()
this._focusRegion.focus()}(e.isShowingContent&&!this.props.isShowingContent||t.isShowingContent&&!this.state.isShowingContent)&&this._focusRegion.deactivate()}}},{key:"computeOffsets",value:function(e){var t=this.props,n=t.offsetX,r=t.offsetY
if((this.props.shouldAlignArrow||this.props.alignArrow)&&this._view){var o=Qe(e)[1]
var i=this._view.theme,a=i.arrowSize,s=i.arrowBorderWidth
var c=2*(zn(a)+zn(s))
"start"===o?n=c:"end"===o?n=-c:"top"===o?r=c:"bottom"===o&&(r=-c)}return{offsetX:n,offsetY:r}}},{key:"renderTrigger",value:function(){var e=this
var t=ot.pick(n.Trigger,this.props.children)
t||(t=j(this.props.renderTrigger))
if(t){var r=this.props,o=r.on,i=r.shouldContainFocus
var a
var s
var c
var l
var d
o.indexOf("click")>-1&&(a=function(t){e.toggle(t)})
if(o.indexOf("hover")>-1){l=this._handleMouseOver
c=this._handleMouseOut}o.indexOf("focus")>-1&&(s=function(t){e.show(t)})
d=i?this.shown?"true":"false":null
t=K(t,{ref:function(t){return e._trigger=t},"aria-expanded":d,"data-popover-trigger":true,onKeyDown:E(this.handleTriggerKeyDown,this.props.onKeyDown),onKeyUp:E(this.handleTriggerKeyUp,this.props.onKeyUp),onClick:E(a,this.props.onClick),onBlur:E(this.handleTriggerBlur,this.props.onBlur),onFocus:E(s,this.props.onFocus),onMouseOut:E(c,this.props.onMouseOut),onMouseOver:E(l,this.props.onMouseOver)})}return t}},{key:"renderContent",value:function(){var e=this
var t=ot.pick(n.Content,this.props.children)
t||(t=j(this.props.children))
this.shown&&!this.isTooltip&&(t=d.a.createElement(Rn,{open:this.shown,label:this.props.screenReaderLabel||this.props.label,ref:function(t){return e._dialog=t},display:"block",onBlur:this.handleDialogBlur,onDismiss:this.handleDialogDismiss,liveRegion:this.props.liveRegion,defaultFocusElement:this.props.defaultFocusElement,shouldContainFocus:this.props.shouldContainFocus,shouldReturnFocus:this.props.shouldReturnFocus,shouldFocusOnOpen:!this.props.shouldFocusContentOnTriggerBlur,shouldCloseOnDocumentClick:this.props.shouldCloseOnDocumentClick,shouldCloseOnEscape:this.props.shouldCloseOnEscape},t))
if(this.shown||this.props.shouldRenderOffscreen){var r
var i=this.props.variant
i=i?"inverse"===i?"primary-inverse":"primary":this.props.color
var a={ref:function(t){return e._view=t},elementRef:function(t){e._contentElement=t
e.props.contentRef(t)},background:i,stacking:this.props.stacking,shadow:this.props.shadow,display:"block"}
var s=this.state.placement
if(this.props.withArrow){r=vn
a=Object(o["a"])({},a,{background:"primary"===i?"default":"inverse",placement:this.rtl?ze(s," "):s})}else{r=dn
a=Object(o["a"])({},a,{borderWidth:"small",borderRadius:"medium"})}this.isTooltip&&(a=Object(o["a"])({},a,{style:{pointerEvents:"none"}}))
return d.a.createElement(r,a,t)}return null}},{key:"render",value:function(){var e=this.positionProps
return this.props.positionTarget?d.a.createElement("span",null,this.renderTrigger(),d.a.createElement(Zt,e,this.renderContent())):d.a.createElement(Zt,Object.assign({},e,{renderTarget:this.renderTrigger()}),this.renderContent())}},{key:"isTooltip",get:function(){return this.props.shouldRenderOffscreen&&!this.props.shouldReturnFocus&&!this.props.shouldContainFocus&&!this.props.shouldFocusContentOnTriggerBlur}},{key:"placement",get:function(){var e=this.props.placement
this.rtl&&(e=ze(e," "))
return!this.shown&&this.props.shouldRenderOffscreen?"offscreen":e}},{key:"positionProps",get:function(){return{offsetX:this.state.offsetX,offsetY:this.state.offsetY,shouldTrackPosition:(this.props.shouldTrackPosition||this.props.trackPosition)&&this.shown,insertAt:this.props.insertAt,placement:this.placement,constrain:this.props.constrain,onPositioned:this.handlePositioned,onPositionChanged:this.handlePositionChanged,target:this.props.positionTarget,mountNode:this.props.mountNode,id:this._id}}},{key:"shown",get:function(){return"undefined"===typeof this.props.isShowingContent&&"undefined"===typeof this.props.show?this.state.isShowingContent:this.props.isShowingContent||this.props.show}},{key:"defaultFocusElement",get:function(){return this.props.defaultFocusElement}}])
n.displayName="Popover"
return n}(l["Component"]),or.Trigger=ar,or.Content=sr,or.propTypes={isShowingContent:f.a.bool,defaultIsShowingContent:f.a.bool,on:f.a.oneOfType([f.a.oneOf(["click","hover","focus"]),f.a.arrayOf(f.a.oneOf(["click","hover","focus"]))]),withArrow:f.a.bool,color:f.a.oneOf(["primary","primary-inverse"]),placement:U.placement,shadow:ke.shadow,stacking:ke.stacking,contentRef:f.a.func,defaultFocusElement:f.a.oneOfType([f.a.element,f.a.func]),screenReaderLabel:f.a.string,offsetX:f.a.oneOfType([f.a.string,f.a.number]),offsetY:f.a.oneOfType([f.a.string,f.a.number]),constrain:U.constrain,positionTarget:f.a.oneOfType([T,f.a.func]),mountNode:U.mountNode,insertAt:f.a.oneOf(["bottom","top"]),liveRegion:f.a.oneOfType([f.a.arrayOf(f.a.element),f.a.element,f.a.func]),id:f.a.string,shouldAlignArrow:f.a.bool,shouldTrackPosition:f.a.bool,shouldRenderOffscreen:f.a.bool,shouldContainFocus:f.a.bool,shouldReturnFocus:f.a.bool,shouldCloseOnDocumentClick:f.a.bool,shouldCloseOnEscape:f.a.bool,shouldFocusContentOnTriggerBlur:f.a.bool,onShowContent:f.a.func,onHideContent:f.a.func,onPositioned:f.a.func,onPositionChanged:f.a.func,onClick:f.a.func,onFocus:f.a.func,onBlur:f.a.func,onKeyDown:f.a.func,onKeyUp:f.a.func,onMouseOver:f.a.func,onMouseOut:f.a.func,renderTrigger:f.a.oneOfType([f.a.node,f.a.func]),children:f.a.oneOfType([f.a.node,f.a.func]),show:f.a.bool,defaultShow:f.a.bool,variant:f.a.oneOf(["default","inverse"]),alignArrow:f.a.bool,label:f.a.string,trackPosition:f.a.bool,onShow:f.a.func,onDismiss:f.a.func,onToggle:f.a.func},or.defaultProps={isShowingContent:void 0,defaultIsShowingContent:false,placement:"bottom center",stacking:"topmost",shadow:"resting",offsetX:0,offsetY:0,color:"primary",on:["hover","focus"],contentRef:function(e){},withArrow:true,constrain:"window",defaultFocusElement:void 0,screenReaderLabel:void 0,mountNode:void 0,insertAt:"bottom",liveRegion:void 0,positionTarget:void 0,id:void 0,shouldAlignArrow:false,shouldTrackPosition:true,shouldRenderOffscreen:false,shouldContainFocus:false,shouldReturnFocus:true,shouldCloseOnDocumentClick:true,shouldFocusContentOnTriggerBlur:false,shouldCloseOnEscape:true,onShowContent:function(e){},onHideContent:function(e,t){t.documentClick},onClick:function(e){},onFocus:function(e){},onBlur:function(e){},onMouseOver:function(e){},onMouseOut:function(e){},onKeyDown:function(e){},onKeyUp:function(e){},onPositioned:function(e){},onPositionChanged:function(e){},renderTrigger:null,children:null},ir))||rr)||rr)||rr)
var lr=function(e){var t=e.typography,n=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:n.small}}
var dr,ur,fr,hr,pr,mr
var br={componentId:"eZLSb",template:function(e){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit","}")},root:"eZLSb_bGBk"}
var vr=(dr=p("8.0.0",{tip:"renderTip",variant:"color"}),ur=Te(),fr=le(lr,br),dr(hr=ur(hr=fr(hr=(mr=pr=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){var e
Object(i["a"])(this,n)
for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a]
e=t.call.apply(t,[this].concat(o))
e._id=Object(x["a"])("Tooltip")
e.state={hasFocus:false}
e.handleFocus=function(t){e.setState({hasFocus:true})}
e.handleBlur=function(t){e.setState({hasFocus:false})}
return e}Object(a["a"])(n,[{key:"renderTrigger",value:function(){var e=this.props,t=e.children,r=e.as
var i=this.state.hasFocus
var a={"aria-describedby":this._id}
if(r){var s=m(n,this.props)
var c=y(this.props,n.propTypes)
return d.a.createElement(s,Object.assign({},c,a),t)}return"function"===typeof t?t({focused:i,getTriggerProps:function(e){return Object(o["a"])({},a,{},e)}}):q(this.props.children,a)}},{key:"render",value:function(){var e=this
var t=this.props,n=t.renderTip,o=t.isShowingContent,i=t.defaultIsShowingContent,a=t.on,s=t.placement,c=t.mountNode,l=t.constrain,u=t.offsetX,f=t.offsetY,h=t.positionTarget,p=t.onShowContent,m=t.onHideContent,b=t.tip,v=(t.variant,Object(r["a"])(t,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var g=this.props.variant
g=g?"default"===g?"primary-inverse":"primary":this.props.color
return d.a.createElement(cr,Object.assign({},w(v),{isShowingContent:o,defaultIsShowingContent:i,on:a,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:s,color:"primary"===g?"primary-inverse":"primary",mountNode:c,constrain:l,shadow:"none",offsetX:u,offsetY:f,positionTarget:h,renderTrigger:function(){return e.renderTrigger()},onShowContent:p,onHideContent:m,onFocus:this.handleFocus,onBlur:this.handleBlur}),d.a.createElement("span",{id:this._id,className:br.root,role:"tooltip"},n?j(n):b))}}])
n.displayName="Tooltip"
return n}(l["Component"]),pr.propTypes={children:f.a.oneOfType([f.a.node,f.a.func]).isRequired,renderTip:f.a.oneOfType([f.a.node,f.a.func]),isShowingContent:f.a.bool,defaultIsShowingContent:f.a.bool,as:f.a.elementType,on:f.a.oneOfType([f.a.oneOf(["click","hover","focus"]),f.a.arrayOf(f.a.oneOf(["click","hover","focus"]))]),color:f.a.oneOf(["primary","primary-inverse"]),placement:U.placement,mountNode:U.mountNode,constrain:U.constrain,offsetX:f.a.oneOfType([f.a.string,f.a.number]),offsetY:f.a.oneOfType([f.a.string,f.a.number]),positionTarget:f.a.oneOfType([T,f.a.func]),onShowContent:f.a.func,onHideContent:f.a.func,tip:f.a.node,variant:f.a.oneOf(["default","inverse"])},pr.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(e){},onHideContent:function(e,t){t.documentClick}},mr))||hr)||hr)||hr)},cxn1:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l}))
var r=n("SDpH")
var o="production"
var i=e.env.DEBUG||"development"===o
var a=Boolean(e.env.DISABLE_SPEEDY_STYLESHEET||i)
var s={}
var c
var l={mount:function(e,t){s[e]||(s[e]=d(t))},mounted:function(e){return e in s},flush:function(){c&&c.flush()
s={}
c=null}}
function d(e){var t=u()
var n=[]
e.forEach((function(e){e&&n.push(t.insert(e))}))}function u(){c||(c=f())
return c}function f(){var e=new r["StyleSheet"]({speedy:!a})
e.inject()
return e}}).call(this,n("8oxB"))},iH1r:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
n("VTBJ")
var r=n("A/pL")
function o(e){var t=Object(r["b"])(e)
var n=[]
if(t.rules&&t.rules.length>0)n=t.rules.map((function(e){return i(e)}))
else{var o=i(t)
o&&(n=[o])}return n}function i(e,t){var n=""
var r=t||""
if(e.rules&&e.rules.length>0)n=e.rules.map((function(e){return i(e,n)})).join("\n")
else{n=e.cssText.trim()
n&&(n="  ".concat(n,"\n"))}if(n){var o=e.selector?"".concat(e.selector," {\n"):""
var a=e.selector?"}\n":""
r+="".concat(o).concat(n).concat(a)}return r}},jloi:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=n("IFwx")
function o(e,t){var n={}
Object.keys(e||{}).forEach((function(o){n[Object(r["a"])(o,t)]=e[o]}))
return n}},ovsC:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var r=n("AGIc")
var o=n("jloi")
var i=n("pYVk")
function a(e,t,n){var a=t?Object(r["a"])(t,n):{}
var c=e(a)
var l=t?function(){return Object(o["a"])(t)}:{}
c=Object(i["a"])(c,l)
var d=t?Object(o["a"])(t,n):""
c=[c,s(d)].join("\n")
return c}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var t=[]
for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&"undefined"!==typeof e[n]&&t.push("".concat(n,": ").concat(e[n]))
return t.length>0?"\n      :root {\n        ".concat(t.join(";\n"),";\n      }\n    "):""}},pYVk:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
function r(e,t){var n=o(e,/@media\s*[^(]*\((--[^)]+)\)?/g)
var r=e
if(n.length>0){var i="function"===typeof t?t():t
n.forEach((function(e){var t=new RegExp(e[1].replace(/[\\^$*+?.()|[\]{}]/g,"\\$&"),"gm")
r=r.replace(t,i[e[1]])}))}return r}function o(e,t){var n=[]
var r
var o=t
o.lastIndex=0
o=new RegExp(o.source,"g")
while(null!==(r=o.exec(e))){n.push(r)
o.lastIndex===r.index&&o.lastIndex++}return n}},vy5g:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n("VTBJ")
var o=n("KQm4")
function i(){var e=Array.prototype.slice.call(arguments)
var t={}
e.forEach((function(e){t=a(t,e)}))
return t}function a(e,t){if(s(t)){var n=[].concat(Object(o["a"])(Object.keys(t)),Object(o["a"])(Object.getOwnPropertySymbols(t)))
var i=Object(r["a"])({},e)
n.forEach((function(n){s(e[n])&&s(t[n])?i[n]=a(e[n],t[n]):c(t[n])&&c(e[n])?i[n]=Object(o["a"])(new Set([].concat(Object(o["a"])(e[n]),Object(o["a"])(t[n])))):c(e[n])?i[n]=Object(o["a"])(new Set([].concat(Object(o["a"])(e[n]),[t[n]]))):i[n]=t[n]}))
return i}return Object(r["a"])({},e)}function s(e){return e&&("object"===typeof e||"function"===typeof e)&&!Array.isArray(e)}function c(e){return e&&Array.isArray(e)}}}])

//# sourceMappingURL=31-c-7c42b05535.js.map