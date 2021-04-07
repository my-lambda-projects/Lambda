(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[51],{"1KsK":function(e,t,n){"use strict"
var o=Object.prototype.toString
e.exports=function(e){var t=o.call(e)
var n="[object Arguments]"===t
n||(n="[object Array]"!==t&&null!==e&&"object"===typeof e&&"number"===typeof e.length&&e.length>=0&&"[object Function]"===o.call(e.callee))
return n}},"1seS":function(e,t,n){"use strict"
var o=Array.prototype.slice
var r=n("1KsK")
var i=Object.keys
var a=i?function(e){return i(e)}:n("sYn3")
var l=Object.keys
a.shim=function(){if(Object.keys){var e=function(){var e=Object.keys(arguments)
return e&&e.length===arguments.length}(1,2)
e||(Object.keys=function(e){if(r(e))return l(o.call(e))
return l(e)})}else Object.keys=a
return Object.keys||a}
e.exports=a},"2Nju":function(e,t,n){"use strict"
var o=n("UVaH")()
var r=o&&"symbol"===typeof Symbol.toStringTag
var i
var a
var l
var s
if(r){i=Function.call.bind(Object.prototype.hasOwnProperty)
a=Function.call.bind(RegExp.prototype.exec)
l={}
var c=function(){throw l}
s={toString:c,valueOf:c}
"symbol"===typeof Symbol.toPrimitive&&(s[Symbol.toPrimitive]=c)}var u=Object.prototype.toString
var p=Object.getOwnPropertyDescriptor
var d="[object RegExp]"
e.exports=r?function(e){if(!e||"object"!==typeof e)return false
var t=p(e,"lastIndex")
var n=t&&i(t,"value")
if(!n)return false
try{a(e,s)}catch(e){return e===l}}:function(e){if(!e||"object"!==typeof e&&"function"!==typeof e)return false
return u.call(e)===d}},"45zb":function(e,t,n){"use strict"
var o="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag
var r=Object.prototype.toString
var i=function(e){if(o&&e&&"object"===typeof e&&Symbol.toStringTag in e)return false
return"[object Arguments]"===r.call(e)}
var a=function(e){if(i(e))return true
return null!==e&&"object"===typeof e&&"number"===typeof e.length&&e.length>=0&&"[object Array]"!==r.call(e)&&"[object Function]"===r.call(e.callee)}
var l=function(){return i(arguments)}()
i.isLegacyArguments=a
e.exports=l?i:a},"5xAX":function(e,t,n){"use strict"
var o=n("82c2")
var r=n("RLeF")
var i=n("VwiP")
var a=n("V+xs")
var l=n("HH6Z")
var s=r(i)
o(s,{getPolyfill:a,implementation:i,shim:l})
e.exports=s},"6ayh":function(e,t,n){"use strict"
var o
var r=TypeError
var i=Object.getOwnPropertyDescriptor
if(i)try{i({},"")}catch(e){i=null}var a=function(){throw new r}
var l=i?function(){try{return a}catch(e){try{return i(arguments,"callee").get}catch(e){return a}}}():a
var s=n("UVaH")()
var c=Object.getPrototypeOf||function(e){return e.__proto__}
var u
var p=u?c(u):o
var d
var f=d?d.constructor:o
var h
var g=h?c(h):o
var y=h?h():o
var b="undefined"===typeof Uint8Array?o:c(Uint8Array)
var m={"%Array%":Array,"%ArrayBuffer%":"undefined"===typeof ArrayBuffer?o:ArrayBuffer,"%ArrayBufferPrototype%":"undefined"===typeof ArrayBuffer?o:ArrayBuffer.prototype,"%ArrayIteratorPrototype%":s?c([][Symbol.iterator]()):o,"%ArrayPrototype%":Array.prototype,"%ArrayProto_entries%":Array.prototype.entries,"%ArrayProto_forEach%":Array.prototype.forEach,"%ArrayProto_keys%":Array.prototype.keys,"%ArrayProto_values%":Array.prototype.values,"%AsyncFromSyncIteratorPrototype%":o,"%AsyncFunction%":f,"%AsyncFunctionPrototype%":f?f.prototype:o,"%AsyncGenerator%":h?c(y):o,"%AsyncGeneratorFunction%":g,"%AsyncGeneratorPrototype%":g?g.prototype:o,"%AsyncIteratorPrototype%":y&&s&&Symbol.asyncIterator?y[Symbol.asyncIterator]():o,"%Atomics%":"undefined"===typeof Atomics?o:Atomics,"%Boolean%":Boolean,"%BooleanPrototype%":Boolean.prototype,"%DataView%":"undefined"===typeof DataView?o:DataView,"%DataViewPrototype%":"undefined"===typeof DataView?o:DataView.prototype,"%Date%":Date,"%DatePrototype%":Date.prototype,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%ErrorPrototype%":Error.prototype,"%eval%":eval,"%EvalError%":EvalError,"%EvalErrorPrototype%":EvalError.prototype,"%Float32Array%":"undefined"===typeof Float32Array?o:Float32Array,"%Float32ArrayPrototype%":"undefined"===typeof Float32Array?o:Float32Array.prototype,"%Float64Array%":"undefined"===typeof Float64Array?o:Float64Array,"%Float64ArrayPrototype%":"undefined"===typeof Float64Array?o:Float64Array.prototype,"%Function%":Function,"%FunctionPrototype%":Function.prototype,"%Generator%":u?c(u()):o,"%GeneratorFunction%":p,"%GeneratorPrototype%":p?p.prototype:o,"%Int8Array%":"undefined"===typeof Int8Array?o:Int8Array,"%Int8ArrayPrototype%":"undefined"===typeof Int8Array?o:Int8Array.prototype,"%Int16Array%":"undefined"===typeof Int16Array?o:Int16Array,"%Int16ArrayPrototype%":"undefined"===typeof Int16Array?o:Int8Array.prototype,"%Int32Array%":"undefined"===typeof Int32Array?o:Int32Array,"%Int32ArrayPrototype%":"undefined"===typeof Int32Array?o:Int32Array.prototype,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":s?c(c([][Symbol.iterator]())):o,"%JSON%":"object"===typeof JSON?JSON:o,"%JSONParse%":"object"===typeof JSON?JSON.parse:o,"%Map%":"undefined"===typeof Map?o:Map,"%MapIteratorPrototype%":"undefined"!==typeof Map&&s?c((new Map)[Symbol.iterator]()):o,"%MapPrototype%":"undefined"===typeof Map?o:Map.prototype,"%Math%":Math,"%Number%":Number,"%NumberPrototype%":Number.prototype,"%Object%":Object,"%ObjectPrototype%":Object.prototype,"%ObjProto_toString%":Object.prototype.toString,"%ObjProto_valueOf%":Object.prototype.valueOf,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"===typeof Promise?o:Promise,"%PromisePrototype%":"undefined"===typeof Promise?o:Promise.prototype,"%PromiseProto_then%":"undefined"===typeof Promise?o:Promise.prototype.then,"%Promise_all%":"undefined"===typeof Promise?o:Promise.all,"%Promise_reject%":"undefined"===typeof Promise?o:Promise.reject,"%Promise_resolve%":"undefined"===typeof Promise?o:Promise.resolve,"%Proxy%":"undefined"===typeof Proxy?o:Proxy,"%RangeError%":RangeError,"%RangeErrorPrototype%":RangeError.prototype,"%ReferenceError%":ReferenceError,"%ReferenceErrorPrototype%":ReferenceError.prototype,"%Reflect%":"undefined"===typeof Reflect?o:Reflect,"%RegExp%":RegExp,"%RegExpPrototype%":RegExp.prototype,"%Set%":"undefined"===typeof Set?o:Set,"%SetIteratorPrototype%":"undefined"!==typeof Set&&s?c((new Set)[Symbol.iterator]()):o,"%SetPrototype%":"undefined"===typeof Set?o:Set.prototype,"%SharedArrayBuffer%":"undefined"===typeof SharedArrayBuffer?o:SharedArrayBuffer,"%SharedArrayBufferPrototype%":"undefined"===typeof SharedArrayBuffer?o:SharedArrayBuffer.prototype,"%String%":String,"%StringIteratorPrototype%":s?c(""[Symbol.iterator]()):o,"%StringPrototype%":String.prototype,"%Symbol%":s?Symbol:o,"%SymbolPrototype%":s?Symbol.prototype:o,"%SyntaxError%":SyntaxError,"%SyntaxErrorPrototype%":SyntaxError.prototype,"%ThrowTypeError%":l,"%TypedArray%":b,"%TypedArrayPrototype%":b?b.prototype:o,"%TypeError%":r,"%TypeErrorPrototype%":r.prototype,"%Uint8Array%":"undefined"===typeof Uint8Array?o:Uint8Array,"%Uint8ArrayPrototype%":"undefined"===typeof Uint8Array?o:Uint8Array.prototype,"%Uint8ClampedArray%":"undefined"===typeof Uint8ClampedArray?o:Uint8ClampedArray,"%Uint8ClampedArrayPrototype%":"undefined"===typeof Uint8ClampedArray?o:Uint8ClampedArray.prototype,"%Uint16Array%":"undefined"===typeof Uint16Array?o:Uint16Array,"%Uint16ArrayPrototype%":"undefined"===typeof Uint16Array?o:Uint16Array.prototype,"%Uint32Array%":"undefined"===typeof Uint32Array?o:Uint32Array,"%Uint32ArrayPrototype%":"undefined"===typeof Uint32Array?o:Uint32Array.prototype,"%URIError%":URIError,"%URIErrorPrototype%":URIError.prototype,"%WeakMap%":"undefined"===typeof WeakMap?o:WeakMap,"%WeakMapPrototype%":"undefined"===typeof WeakMap?o:WeakMap.prototype,"%WeakSet%":"undefined"===typeof WeakSet?o:WeakSet,"%WeakSetPrototype%":"undefined"===typeof WeakSet?o:WeakSet.prototype}
var v=n("D3zA")
var O=v.call(Function.call,String.prototype.replace)
var x=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g
var w=/\\(\\)?/g
var _=function(e){var t=[]
O(e,x,(function(e,n,o,r){t[t.length]=o?O(r,w,"$1"):n||e}))
return t}
var S=function(e,t){if(!(e in m))throw new SyntaxError("intrinsic "+e+" does not exist!")
if("undefined"===typeof m[e]&&!t)throw new r("intrinsic "+e+" exists, but is not available. Please file an issue!")
return m[e]}
e.exports=function(e,t){if("string"!==typeof e||0===e.length)throw new TypeError("intrinsic name must be a non-empty string")
if(arguments.length>1&&"boolean"!==typeof t)throw new TypeError('"allowMissing" argument must be a boolean')
var n=_(e)
var o=S("%"+(n.length>0?n[0]:"")+"%",t)
for(var a=1;a<n.length;a+=1)if(null!=o)if(i&&a+1>=n.length){var l=i(o,n[a])
if(!t&&!(n[a]in o))throw new r("base intrinsic for "+e+" exists, but the property is not available.")
o=l&&"get"in l&&!("originalValue"in l.get)?l.get:o[n[a]]}else o=o[n[a]]
return o}},"82c2":function(e,t,n){"use strict"
var o=n("1seS")
var r="function"===typeof Symbol&&"symbol"===typeof Symbol("foo")
var i=Object.prototype.toString
var a=Array.prototype.concat
var l=Object.defineProperty
var s=function(e){return"function"===typeof e&&"[object Function]"===i.call(e)}
var c=function(){var e={}
try{l(e,"x",{enumerable:false,value:e})
for(var t in e)return false
return e.x===e}catch(e){return false}}
var u=l&&c()
var p=function(e,t,n,o){if(t in e&&(!s(o)||!o()))return
u?l(e,t,{configurable:true,enumerable:false,value:n,writable:true}):e[t]=n}
var d=function(e,t){var n=arguments.length>2?arguments[2]:{}
var i=o(t)
r&&(i=a.call(i,Object.getOwnPropertySymbols(t)))
for(var l=0;l<i.length;l+=1)p(e,i[l],t[i[l]],n[i[l]])}
d.supportsDescriptors=!!u
e.exports=d},AXvA:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var o=n("HMVb")
function r(e,t){var n=Object.keys(e)
if(1!==n.length)throw new Error("Expected exactly one key in query object.")
var r=n[0]
var a=["minHeight","maxHeight","minWidth","maxWidth"]
if(-1===a.indexOf(r))throw new Error("Invalid key `".concat(r,"` in query object. Valid keys should consist of one of the following: ")+"".concat(a.join(", ")," (case sensitive)"))
var l=e[r]
if("string"!==typeof l&&"number"!==typeof l)throw new Error("The value of the query object must be a string or number.")
if(!l)throw new Error("No value supplied for query object")
return"(".concat(i(r.toLowerCase()),": ").concat(Object(o["a"])(l,t),"px)")}function i(e){return e.slice(0,3)+"-"+e.slice(3)}},D3zA:function(e,t,n){"use strict"
var o=n("aI7X")
e.exports=Function.prototype.bind||o},DNiq:function(e,t,n){"use strict"
n.d(t,"a",(function(){return $e}))
var o=n("1OyB")
var r=n("vuIU")
var i=n("Ji7U")
var a=n("LK+K")
n("DEX3")
var l=n("q1tI")
var s=n.n(l)
var c=n("17x9")
var u=n.n(c)
var p=n("f66B")
var d=n.n(p)
var f=n("dpqJ")
var h=n("cClk")
var g=n("sTNg")
var y=n("u9uf")
var b=n("nAyT")
var m=n("jtGx")
var v=n("oXx0")
var O=n("JX7q")
var x=n("/UXv")
var w=n("rePB")
var _=n("KQm4")
var S=n("TSYQ")
var C=n.n(S)
var j=n("3zPy")
var k=n.n(j)
var T=n("MicT")
var K=n("rW8M")
var E=n("6SzX")
var P=n("Ff2n")
var D=n("J2CL")
var I=n("AdN2")
var A=n("lzgt")
var z=n("UCAh")
var R=n("tbLP")
var M=function(e){var t=e.stacking
return{zIndex:t.topmost}}
var F,B,W,Q,N,L,U,Z,H,q,X,J,V,$
var Y={componentId:"bgLNT",template:function(e){return"\n\n.bgLNT_bGBk{box-sizing:border-box;z-index:".concat(e.zIndex||"inherit","}")},root:"bgLNT_bGBk"}
var G=(F=Object(v["a"])(),F(B=(Q=W=function(e){Object(i["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}return n}(A["a"]),W.displayName="PositionTarget",W.locatorAttribute="data-position-target",Q))||B)
var ee=(N=Object(v["a"])(),N(L=(Z=U=function(e){Object(i["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}return n}(A["a"]),U.displayName="PositionContent",U.propTypes={children:u.a.node,placement:z["a"].placement},U.locatorAttribute="data-position-content",Z))||L)
var te=(H=Object(b["a"])("7.0.0",null,"Use @instructure/ui-position instead"),q=Object(v["a"])(),X=Object(D["j"])(M,Y),H(J=q(J=X(J=($=V=function(e){Object(i["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.children,o=e.id,r=e.trackPosition,i=e.placement,a=e.offsetX,l=e.offsetY,c=e.mountNode,u=e.target,p=e.insertAt,d=e.over,f=e.onPositioned,h=e.onPositionChanged,g=e.constrain,y=Object(P["a"])(e,["children","id","trackPosition","placement","offsetX","offsetY","mountNode","target","insertAt","over","onPositioned","onPositionChanged","constrain"])
var b=A["a"].pick(n.Target,t)
var m=A["a"].pick(n.Content,t)
return s.a.createElement(R["a"],Object.assign({},y,{target:u,renderTarget:b,id:o,shouldTrackPosition:r,placement:i,offsetX:a,offsetY:l,mountNode:c,insertAt:p,constrain:g,shouldPositionOverTarget:d,onPositioned:f,onPositionChanged:h}),m)}}])
n.displayName="Position"
return n}(l["Component"]),V.Target=G,V.Content=ee,V.locatorAttribute="data-position",V.propTypes={children:u.a.node,target:u.a.oneOfType([I["a"],u.a.func]),over:u.a.bool,placement:z["a"].placement,offsetX:u.a.oneOfType([u.a.string,u.a.number]),offsetY:u.a.oneOfType([u.a.string,u.a.number]),onPositionChanged:u.a.func,onPositioned:u.a.func,trackPosition:u.a.bool,mountNode:z["a"].mountNode,insertAt:u.a.oneOf(["bottom","top"]),constrain:z["a"].constrain,id:u.a.string},V.defaultProps={trackPosition:true,placement:"bottom center",offsetX:0,offsetY:0,mountNode:null,target:null,insertAt:"bottom",over:false,onPositioned:function(e){},onPositionChanged:function(e){},constrain:"window",children:null,id:void 0},$))||J)||J)||J)
var ne=n("QF4Q")
var oe=n("K7t/")
var re=n("9yTY")
var ie=n("BTe1")
var ae=n("VTBJ")
var le=n("hPGw")
var se=s.a.createElement("path",{d:"M526.298905 0L434 92.1683552 1301.63582 959.934725 434 1827.57054 526.298905 1920 1486.23363 959.934725z",fillRule:"evenodd",stroke:"none",strokeWidth:"1",transform:"matrix(0 1 1 0 .153 -.153)"})
var ce=function(e){Object(i["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){return s.a.createElement(le["a"],Object.assign({},this.props,{name:"IconArrowOpenDown",viewBox:"0 0 1920 1920"}),se)}}])
n.displayName="IconArrowOpenDownLine"
return n}(l["Component"])
ce.glyphName="arrow-open-down"
ce.variant="Line"
ce.propTypes=Object(ae["a"])({},le["a"].propTypes)
var ue=n("n12J")
var pe=n("uSnb")
function de(e){if("string"===typeof e)return e
if(!e||"object"!==typeof e)return null
if("undefined"!==typeof e.id&&null!==e.id)return e.id
if("undefined"!==typeof e.value&&null!==e.value)return e.value
return null}function fe(e){var t=e.colors,n=e.typography,o=(e.borders,e.spacing),r=e.stacking
e.forms
return{zIndex:r.topmost,fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,groupFontWeight:n.fontWeightBold,lineHeight:n.lineHeightCondensed,labelColor:t.textDarkest,background:t.backgroundLightest,highlightedBackground:t.backgroundBrand,activeBackground:t.backgroundDark,activeLabelColor:t.textLightest,padding:"".concat(o.xSmall," ").concat(o.small),iconPaddingEnd:o.small,groupPadding:o.medium,smallFontSize:n.fontSizeSmall,mediumFontSize:n.fontSizeMedium,largeFontSize:n.fontSizeLarge}}fe.canvas=function(e){return{labelColor:e["ic-brand-font-color-dark"],highlightedBackground:e["ic-brand-primary"]}}
var he,ge,ye,be,me
var ve={componentId:"eZsEe",template:function(e){return"\n\n.eZsEe_dKpE{box-sizing:border-box;list-style-type:none;margin:0;overflow:auto;padding:0}\n\n.eZsEe_ecYO{-ms-user-select:none;-webkit-user-select:none;align-items:center;background:".concat(e.background||"inherit",";cursor:pointer;display:flex;font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.mediumFontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit",";outline:none;padding:").concat(e.padding||"inherit",";transition:background 0.2s;user-select:none}\n\n.eZsEe_ecYO.eZsEe_doqw{font-size:").concat(e.smallFontSize||"inherit","}\n\n.eZsEe_ecYO.eZsEe_ycrn{font-size:").concat(e.mediumFontSize||"inherit","}\n\n.eZsEe_ecYO.eZsEe_cMDj{font-size:").concat(e.largeFontSize||"inherit","}\n\n.eZsEe_ecYO.eZsEe_cNcI:not(.eZsEe_fckf){background:").concat(e.highlightedBackground||"inherit","}\n\n.eZsEe_ecYO.eZsEe_fGhm:not(.eZsEe_fckf){background:").concat(e.activeBackground||"inherit","}\n\n.eZsEe_ecYO.eZsEe_ywdX:not(.eZsEe_fckf){cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.eZsEe_ecYO.eZsEe_fckf{cursor:not-allowed;font-weight:").concat(e.groupFontWeight||"inherit",";pointer-events:none}\n\n.eZsEe_ecYO.eZsEe_dXHE{-webkit-padding-start:").concat(e.groupPadding||"inherit",";padding-inline-start:").concat(e.groupPadding||"inherit","}\n\n[dir=ltr] .eZsEe_ecYO.eZsEe_dXHE{padding-left:").concat(e.groupPadding||"inherit","}\n\n[dir=rtl] .eZsEe_ecYO.eZsEe_dXHE{padding-right:").concat(e.groupPadding||"inherit","}\n\n.eZsEe_blJt{color:").concat(e.labelColor||"inherit","}\n\n.eZsEe_cNcI:not(.eZsEe_fckf) .eZsEe_blJt,.eZsEe_fGhm:not(.eZsEe_fckf) .eZsEe_blJt{color:").concat(e.activeLabelColor||"inherit","}\n\n.eZsEe_dnnz{-webkit-margin-end:").concat(e.iconPaddingEnd||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.iconPaddingEnd||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .eZsEe_dnnz{margin-left:0;margin-right:").concat(e.iconPaddingEnd||"inherit","}\n\n[dir=rtl] .eZsEe_dnnz{margin-left:").concat(e.iconPaddingEnd||"inherit",";margin-right:0}\n\n.eZsEe_crZr{z-index:").concat(e.zIndex||"inherit","}")},optionsList:"eZsEe_dKpE",option:"eZsEe_ecYO",small:"eZsEe_doqw",medium:"eZsEe_ycrn",large:"eZsEe_cMDj",highlighted:"eZsEe_cNcI",groupLabel:"eZsEe_fckf",selected:"eZsEe_fGhm",disabled:"eZsEe_ywdX",groupItem:"eZsEe_dXHE",label:"eZsEe_blJt",icon:"eZsEe_dnnz",container:"eZsEe_crZr"}
var Oe=(he=Object(v["a"])(),ge=Object(D["j"])(fe,ve),he(ye=ge(ye=(me=be=function(e){Object(i["a"])(n,e)
var t=Object(a["a"])(n)
function n(){var e
Object(o["a"])(this,n)
for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a]
e=t.call.apply(t,[this].concat(i))
e.optionHeight=5
e.handleClick=function(t,n){if(n.disabled||n.groupLabel){t.preventDefault()
return}e.props.onSelect(t,n)}
return e}Object(r["a"])(n,[{key:"renderStaticOption",value:function(e){var t=this.props,n=t.size,o=t.onStaticClick
return s.a.createElement("li",{tabIndex:"-1",role:"option","aria-disabled":"true","aria-selected":"false",className:C()(ve.option,Object(w["a"])({},ve[n],n)),onClick:o},s.a.createElement("span",{className:ve.label},e))}},{key:"renderIcon",value:function(e){if("undefined"!==typeof e&&null!==e){var t=e
return s.a.createElement("span",{className:ve.icon},s.a.createElement(t,null))}}},{key:"renderOptions",value:function(){var e=this
var t=this.props,n=t.options,o=t.optionsId,r=t.loadingText,i=t.emptyOption,a=t.selectedOption,l=t.onHighlightOption,c=t.size,u=t.highlightedIndex
if(r)return this.renderStaticOption(s.a.createElement(pe["a"],{size:"x-small",renderTitle:r}))
if(0===n.length)return this.renderStaticOption(i)
return n.map((function(t,n){var r
var i=t.children,p=t.id,d=t.icon,f=t.groupLabel,h=t.groupItem
var g=de(a)===p
var y=t.disabled||f
var b={onMouseEnter:function(){return l(n)},onClick:function(n){return e.handleClick(n,t)}}
return s.a.createElement("li",Object.assign({},b,{role:"option",key:p,id:"".concat(o,"_").concat(p),className:C()(ve.option,(r={},Object(w["a"])(r,ve.selected,g),Object(w["a"])(r,ve[c],c),Object(w["a"])(r,ve.highlighted,n===u),Object(w["a"])(r,ve.disabled,y),Object(w["a"])(r,ve.groupLabel,f),Object(w["a"])(r,ve.groupItem,h),r)),tabIndex:"-1","aria-selected":g?"true":"false","aria-disabled":y?"true":null}),s.a.createElement("span",{className:ve.label},d&&e.renderIcon(d),i))}))}},{key:"render",value:function(){var e=this
var t=this.props,n=t.optionsId,o=t.menuRef,r=t.visibleOptionsCount,i=t.maxWidth,a=Object(P["a"])(t,["optionsId","menuRef","visibleOptionsCount","maxWidth"])
return s.a.createElement(ue["a"],{style:a.style,className:ve.container,maxWidth:i||0,borderWidth:"small",borderRadius:"medium",shadow:"resting",background:"primary"},!!this.props.expanded&&s.a.createElement("ul",{className:ve.optionsList,id:n,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,onBlur:this.props.onBlur,onClick:function(e){e.stopPropagation()
e.nativeEvent.stopImmediatePropagation()},tabIndex:"-1",ref:function(t){o(t)
t&&(e.optionHeight=t.querySelector("li").clientHeight)},role:"listbox",style:{maxHeight:"".concat(r*this.optionHeight,"px")}},this.renderOptions()))}}])
n.displayName="SelectOptionsList"
return n}(l["Component"]),be.propTypes={selectedOption:u.a.oneOfType([u.a.string,u.a.shape({label:u.a.string.isRequired,value:u.a.string.isRequired,id:u.a.oneOfType([u.a.string,u.a.number]),children:u.a.node,disabled:u.a.bool,icon:u.a.func,groupLabel:u.a.bool})]),options:u.a.arrayOf(u.a.shape({label:u.a.string.isRequired,value:u.a.string.isRequired,id:u.a.oneOfType([u.a.string,u.a.number]),children:u.a.node,disabled:u.a.bool,icon:u.a.func,groupLabel:u.a.bool})),optionsId:u.a.string,menuRef:u.a.func,visibleOptionsCount:u.a.oneOfType([u.a.string,u.a.number]),loadingText:u.a.string,emptyOption:u.a.node,onHighlightOption:u.a.func,onSelect:u.a.func,onKeyDown:u.a.func,onKeyUp:u.a.func,size:u.a.oneOf(["small","medium","large"]),maxWidth:u.a.string,onStaticClick:u.a.func,onBlur:u.a.func,highlightedIndex:u.a.number,expanded:u.a.bool,disabled:u.a.bool},be.defaultProps={selectedOption:null,options:[],visibleOptionsCount:8,loadingText:null,emptyOption:"---",size:"medium",expanded:false,menuRef:function(e){},onHighlightOption:function(e){},onSelect:function(e,t){},onStaticClick:function(e){},disabled:false,optionsId:void 0,highlightedIndex:void 0,maxWidth:void 0,onKeyDown:void 0,onKeyUp:void 0,onBlur:void 0},me))||ye)||ye)
function xe(e){var t=e.colors,n=e.typography,o=e.borders,r=e.spacing,i=(e.stacking,e.forms)
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,borderWidth:o.widthSmall,borderStyle:o.style,borderColor:t.borderMedium,borderRadius:o.radiusMedium,color:t.textDarkest,iconColor:t.textDarkest,background:t.backgroundLightest,inputPadding:r.small,focusOutlineWidth:o.widthMedium,focusOutlineColor:t.borderBrand,focusOutlineStyle:o.style,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:n.fontSizeSmall,smallHeight:i.inputHeightSmall,mediumFontSize:n.fontSizeMedium,mediumHeight:i.inputHeightMedium,largeFontSize:n.fontSizeLarge,largeHeight:i.inputHeightLarge}}xe.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusBorderColor:e["ic-brand-primary"],focusOutlineColor:e["ic-brand-primary"]}}
var we,_e,Se,Ce,je
var ke={componentId:"bgKsu",template:function(e){return"\n\n.bgKsu_engK{display:block;position:relative}\n\n.bgKsu_engK:before{border:".concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;box-sizing:border-box;content:"";display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.bgKsu_engK.bgKsu_eWbJ:before{opacity:1;transform:scale(1)}\n\n.bgKsu_engK.bgKsu_eWbJ.bgKsu_fszt:before{border-color:').concat(e.errorOutlineColor||"inherit","}\n\n.bgKsu_dtDb{background:").concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";box-sizing:border-box;display:flex;flex-wrap:wrap;font-family:").concat(e.fontFamily||"inherit",";margin:0;min-width:0.0625rem;overflow:hidden}\n\n.bgKsu_dtDb.bgKsu_fszt,.bgKsu_dtDb.bgKsu_fszt.bgKsu_eWbJ{border-color:").concat(e.errorBorderColor||"inherit","}\n\n.bgKsu_dtDb.bgKsu_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.bgKsu_dtDb.bgKsu_doqw{font-size:").concat(e.smallFontSize||"inherit","}\n\n.bgKsu_dtDb.bgKsu_ycrn{font-size:").concat(e.mediumFontSize||"inherit","}\n\n.bgKsu_dtDb.bgKsu_cMDj{font-size:").concat(e.largeFontSize||"inherit","}\n\n.bgKsu_ccod{display:flex;flex:1 1 auto;position:relative}\n\n.bgKsu_cwos,input[type].bgKsu_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;cursor:default;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:inherit;font-size:medium;font-size:inherit;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;line-height:1;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.inputPadding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:start;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n[dir=ltr] .bgKsu_cwos,[dir=ltr] input[type].bgKsu_cwos{text-align:left}\n\n[dir=rtl] .bgKsu_cwos,[dir=rtl] input[type].bgKsu_cwos{text-align:right}\n\n.bgKsu_cwos::-ms-clear,input[type].bgKsu_cwos::-ms-clear{display:none}\n\n.bgKsu_cwos.bgKsu_bfxl,input[type].bgKsu_cwos.bgKsu_bfxl{cursor:text}\n\n.bgKsu_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button,input[type].bgKsu_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button{display:none!important}\n\n.bgKsu_cwos:-ms-input-placeholder,input[type].bgKsu_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.bgKsu_cwos::placeholder,input[type].bgKsu_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.bgKsu_doqw .bgKsu_cwos,.bgKsu_doqw input[type].bgKsu_cwos{min-height:calc(").concat(e.smallHeight||"inherit"," - 0.125rem)}\n\n.bgKsu_ycrn .bgKsu_cwos,.bgKsu_ycrn input[type].bgKsu_cwos{min-height:calc(").concat(e.mediumHeight||"inherit"," - 0.125rem)}\n\n.bgKsu_cMDj .bgKsu_cwos,.bgKsu_cMDj input[type].bgKsu_cwos{min-height:calc(").concat(e.largeHeight||"inherit"," - 0.125rem)}\n\n.bgKsu_ewVP{-webkit-margin-end:0;-webkit-margin-start:").concat(e.inputPadding||"inherit",";align-items:center;display:flex;height:100%;margin-inline-end:0;margin-inline-start:").concat(e.inputPadding||"inherit","}\n\n[dir=ltr] .bgKsu_ewVP{margin-left:").concat(e.inputPadding||"inherit",";margin-right:0}\n\n[dir=rtl] .bgKsu_ewVP{margin-left:0;margin-right:").concat(e.inputPadding||"inherit","}\n\n.bgKsu_dnnz{-webkit-margin-end:").concat(e.inputPadding||"inherit",";-webkit-margin-start:0;align-self:center;display:flex;fill:").concat(e.iconColor||"inherit",";flex-shrink:0;margin-inline-end:").concat(e.inputPadding||"inherit",";margin-inline-start:0;pointer-events:none}\n\n[dir=ltr] .bgKsu_dnnz{margin-left:0;margin-right:").concat(e.inputPadding||"inherit","}\n\n[dir=rtl] .bgKsu_dnnz{margin-left:").concat(e.inputPadding||"inherit",";margin-right:0}\n\n.bgKsu_blJt{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:inherit;font-size:medium;font-size:inherit;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:inherit;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;line-height:inherit;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:inherit;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n[dir=ltr] .bgKsu_blJt,[dir=rtl] .bgKsu_blJt{text-align:inherit}")},inputWidth:"bgKsu_engK",focus:"bgKsu_eWbJ",invalid:"bgKsu_fszt",inputContainer:"bgKsu_dtDb",disabled:"bgKsu_ywdX",small:"bgKsu_doqw",medium:"bgKsu_ycrn",large:"bgKsu_cMDj",inputLayout:"bgKsu_ccod",input:"bgKsu_cwos",editable:"bgKsu_bfxl",inputIcon:"bgKsu_ewVP",icon:"bgKsu_dnnz",label:"bgKsu_blJt"}
var Te=(we=Object(v["a"])(),_e=Object(D["j"])(xe,ke),we(Se=_e(Se=(je=Ce=function(e){Object(i["a"])(n,e)
var t=Object(a["a"])(n)
function n(e){var r
Object(o["a"])(this,n)
r=t.call(this,e)
r._menu=null
r._input=null
r._inputContainer=null
r._timeouts=[]
r.timeoutId=null
r.open=function(){r.setState((function(){return{expanded:true}}),(function(){r.highlightSelectedOption()
r.props.onOpen()}))}
r.close=function(e,t){r.setState((function(n){n.expanded&&r.props.onClose(e,t)
return{expanded:false}}))}
r.select=function(e,t){r.props.onSelect(e,t)
if(r.props.closeOnSelect){e.preventDefault()
r.close(e,t)}}
r.highlightSelectedOption=function(){var e=0
r.selectedIndex>0&&(e=r.selectedIndex)
r._timeouts.push(setTimeout((function(){r.highlightOption(e)}),0))}
r.highlightOption=function(e){var t=r.props.options[e]
if(!r.props.loadingText&&t){if(t.disabled||t.groupLabel){e>r.state.highlightedIndex&&e+1<r.props.options.length?r.highlightOption(e+1):e<r.state.highlightedIndex&&e-1>=0&&r.highlightOption(e-1)
return}r.setState({highlightedIndex:e})
r.props.onHighlight(e)
var n=Object(ne["a"])(r._menu)
if(n){var o=n.querySelectorAll("li")[e]
var i=n.scrollTop
var a=o.offsetTop
var l=i+n.clientHeight
var s=a+o.clientHeight
s>l?n.scrollTop=s-n.clientHeight:a<i&&(n.scrollTop=a)}}}
r.handleHomeKey=function(e){r.props.options.length>0&&r.highlightOption(0)}
r.handleEndKey=function(e){r.props.options.length>0&&r.highlightOption(r.props.options.length-1)}
r.handleEnterKey=function(e){r.expanded&&!r.props.loadingText&&r.props.options.length&&r.select(e,r.props.options[r.state.highlightedIndex])}
r.handleUpArrowKey=function(e){if(r.expanded){var t=Math.max(0,r.state.highlightedIndex-1)
var n=r.props.options[t]
var o=r._menu.querySelectorAll("li")[t]
r.highlightOption(t)
o&&n&&!n.disabled&&!n.groupLabel&&o.focus()}else r.open()}
r.handleDownArrowKey=function(e){if(r.expanded){var t=Math.min(r.props.options.length-1,r.state.highlightedIndex+1)
var n=r.props.options[t]
var o=r._menu.querySelectorAll("li")[t]
r.highlightOption(t)
o&&n&&!n.disabled&&!n.groupLabel&&o.focus()}else r.open()}
r.handleSpaceKey=function(e){if(!r.expanded){e.preventDefault()
r.open()}}
r.keyMap={up:r.handleUpArrowKey,down:r.handleDownArrowKey,home:r.handleHomeKey,end:r.handleEndKey,enter:r.handleEnterKey,space:r.handleSpaceKey}
r.handlePositioned=function(){r.setState({positioned:true},(function(){return r.props.onPositioned()}))}
r.handleKeyDown=function(e){var t=k.a.names[e.keyCode]
if(r.keyMap.hasOwnProperty(t)){"enter"===t&&!r.expanded||"space"===t||e.preventDefault()
r.keyMap[t](e)}else r._input&&r.props.editable&&r._input.focus()
"tab"===t&&r._input.focus()
r.props.onKeyDown(e)}
r.handleKeyUp=function(e){var t=k.a.names[e.keyCode]
if("esc"===t&&r.expanded){e.preventDefault()
r._input&&r._input.focus()
r.close(e)}r.props.onKeyUp(e)}
r.handleMouseDown=function(e){e.preventDefault()}
r.handleFocus=function(e){r.setState((function(){return{focus:true}}))
r.props.onFocus(e)}
r.handleBlur=function(e){e.persist()
var t=r._inputContainer.contains(e.relatedTarget)
!t&&r.expanded&&(t=r._menu.contains(e.relatedTarget))
r.setState((function(){return{focus:t}}),(function(){r.expanded&&!t&&r._timeouts.push(setTimeout((function(){Object(oe["a"])(r._menu)||r.close(e)}),0))
t||r.props.onBlur(e)}))}
r.handleClick=function(e){e.preventDefault()
if(r.props.disabled||r.props.readOnly)return
if(r.expanded)r.close()
else{r._input&&!Object(x["a"])(r._input)&&r._input.focus()
r.open()}r.props.onClick(e)}
r.handleChange=function(e){r.expanded||r.open()
r.props.onInputChange(e,e.target.value)}
r.handleMenuRef=function(e){r._menu=e}
r.handleInputRef=function(e){r._input=e}
r.handleInputContainerRef=function(e){r._inputContainer=e}
r.state={focus:false,highlightedIndex:r.getSelectedIndex(e),expanded:false,positioned:false}
r._defaultId=Object(ie["a"])("Select")
r._optionsId=Object(ie["a"])("Select-Options")
r._assistId=Object(ie["a"])("Select-assistiveText")
return r}Object(r["a"])(n,[{key:"getSelectedIndex",value:function(e){if(e.selectedOption){var t=e.options.findIndex((function(t){return de(t)===de(e.selectedOption)}))
return Math.max(t,0)}return-1}},{key:"componentWillReceiveProps",value:function(e){this.props.options!==e.options&&this.highlightSelectedOption()}},{key:"componentWillUnmount",value:function(){this._timeouts.forEach((function(e){return clearTimeout(e)}))}},{key:"renderIcon",value:function(){if("function"===typeof this.props.selectedOption.icon){var e=this.props.selectedOption.icon
return s.a.createElement("span",{className:ke.inputIcon},s.a.createElement(e,null))}}},{key:"render",value:function(){var e,t
var o=this.props,r=o.size,i=o.disabled,a=o.readOnly,l=o.editable,c=o.required,u=o.width,p=o.options,d=o.selectedOption,f=o.loadingText,h=o.emptyOption,y=o.visibleOptionsCount,b=o.children,v=o.onStaticClick,O=o.assistiveText,x=o.layout,S=o.announcement,j=o.constrain
var k=Object(m["a"])(this.props,n.propTypes,["allowEmpty","assistiveText","value"].concat(Object(_["a"])(Object.keys(g["a"].propTypes))))
var P=p[this.state.highlightedIndex]
P&&this.expanded?k["aria-activedescendant"]="".concat(this._optionsId,"_").concat(P.id):k["aria-activedescendant"]=null
var D=s.a.createElement("label",{htmlFor:this.id,className:ke.label},this.props.label)
Object(K["a"])(this.props.label)||(D=s.a.createElement(E["a"],null,D))
return s.a.createElement(g["c"],Object.assign({},Object(m["c"])(this.props,g["c"].propTypes),{as:"span",label:D,id:this.id,vAlign:"inline"===x?"middle":null,onMouseDown:this.handleMouseDown}),s.a.createElement("span",{style:{width:u||"auto"},className:C()(ke.inputWidth,(e={},Object(w["a"])(e,ke.invalid,this.invalid),Object(w["a"])(e,ke.focus,this.state.focus),e))},s.a.createElement("span",{ref:this.handleInputContainerRef,className:C()(ke.inputContainer,(t={},Object(w["a"])(t,ke.invalid,this.invalid),Object(w["a"])(t,ke.disabled,i),Object(w["a"])(t,ke[r],r),Object(w["a"])(t,ke.focus,this.state.focus),t))},b,s.a.createElement("span",{className:ke.inputLayout,onClick:this.handleClick},d&&this.renderIcon(),s.a.createElement("input",Object.assign({},k,{id:this.id,className:C()(ke.input,Object(w["a"])({},ke.editable,l)),onFocus:this.handleFocus,onChange:l?this.handleChange:null,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur,type:"text",ref:Object(re["a"])(this.props.inputRef,this.handleInputRef),role:"combobox","aria-expanded":this.expanded,"aria-owns":this.expanded?this._optionsId:null,"aria-describedby":this._assistId,"aria-controls":this.expanded?this._optionsId:null,"aria-autocomplete":l?"list":null,"aria-haspopup":"true",autoComplete:l?"off":null,required:c,"aria-required":c,"aria-invalid":this.invalid?"true":null,readOnly:!l,disabled:i||a})),s.a.createElement(ce,{width:"0.875rem",height:"0.875rem",className:ke.icon})))),s.a.createElement(T["a"],{open:this.state.expanded},s.a.createElement(te,{trackPosition:this.expanded,placement:this.placement,onPositioned:this.handlePositioned,target:this._inputContainer,constrain:j},s.a.createElement(te.Content,null,s.a.createElement(Oe,{options:p,selectedOption:d,optionsId:this._optionsId,menuRef:this.handleMenuRef,visibleOptionsCount:y,loadingText:f,emptyOption:h,onStaticClick:v,onHighlightOption:this.highlightOption,onSelect:this.select,expanded:this.state.expanded,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur,highlightedIndex:this.state.highlightedIndex,maxWidth:this.props.optionsMaxWidth})))),s.a.createElement("span",{id:this._assistId,style:{display:"none"}},O),s.a.createElement(E["a"],null,s.a.createElement("span",{role:"log","aria-live":"polite","aria-atomic":"true"},S)))}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"expanded",get:function(){return this.state.positioned&&this.state.expanded}},{key:"placement",get:function(){return this.state.expanded?this.props.placement||"bottom stretch":"offscreen"}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"selectedIndex",get:function(){return this.getSelectedIndex(this.props)}}])
n.displayName="SelectField"
return n}(l["Component"]),Ce.propTypes={selectedOption:u.a.oneOfType([u.a.string,u.a.shape({label:u.a.string.isRequired,value:u.a.string.isRequired,id:u.a.oneOfType([u.a.string,u.a.number]),children:u.a.node,disabled:u.a.bool,icon:u.a.func,groupLabel:u.a.bool})]),options:u.a.arrayOf(u.a.shape({label:u.a.string.isRequired,value:u.a.string.isRequired,id:u.a.oneOfType([u.a.string,u.a.number]),children:u.a.node,disabled:u.a.bool,icon:u.a.func,groupLabel:u.a.bool})),placement:y["a"].placement,label:u.a.node.isRequired,messages:u.a.arrayOf(g["e"].message),size:u.a.oneOf(["small","medium","large"]),layout:u.a.oneOf(["stacked","inline"]),optionsMaxWidth:u.a.string,loadingText:u.a.string,editable:u.a.bool,emptyOption:u.a.node,visibleOptionsCount:u.a.oneOfType([u.a.string,u.a.number]),assistiveText:u.a.string,announcement:u.a.string,onPositioned:u.a.func,onSelect:u.a.func,onStaticClick:u.a.func,onHighlight:u.a.func,width:u.a.string,inline:u.a.bool,children:u.a.node,onFocus:u.a.func,onBlur:u.a.func,onKeyDown:u.a.func,onKeyUp:u.a.func,onClick:u.a.func,onInputChange:u.a.func,onOpen:u.a.func,onClose:u.a.func,id:u.a.string,inputRef:u.a.func,closeOnSelect:u.a.bool,constrain:y["a"].constrain,disabled:u.a.bool,readOnly:u.a.bool,required:u.a.bool},Ce.defaultProps={emptyOption:"---",selectedOption:null,size:"medium",loadingText:null,announcement:null,options:[],visibleOptionsCount:8,closeOnSelect:true,editable:false,inline:false,constrain:"window",onPositioned:function(){},onSelect:function(e,t){},onStaticClick:function(e){},onHighlight:function(e){},onClick:function(e){},onInputChange:function(e){},onFocus:function(e){},onBlur:function(e){},onKeyDown:function(e){},onKeyUp:function(e){},onOpen:function(e){},onClose:function(e){},disabled:false,readOnly:false,required:false,inputRef:void 0,id:void 0,children:null,width:void 0,assistiveText:void 0,optionsMaxWidth:void 0,layout:void 0,messages:void 0,placement:void 0},je))||Se)||Se)
var Ke,Ee,Pe,De
var Ie=u.a.shape({label:u.a.string.isRequired,value:u.a.string.isRequired,id:u.a.oneOfType([u.a.string,u.a.number]),children:u.a.node})
var Ae=(Ke=Object(v["a"])(),Ke(Ee=(De=Pe=function(e){Object(i["a"])(n,e)
var t=Object(a["a"])(n)
function n(e){var r
Object(o["a"])(this,n)
r=t.call(this,e)
r._input=null
r.focus=function(){r._input&&r._input.focus()}
r.matchSelectedOption=function(e,t){var n=r._input.value
var o
o=t?e.filteredOptions.find((function(e){return e.value===t.value})):e.filteredOptions.find((function(e){return e.label.toLowerCase()===n.toLowerCase()}))
return o}
r.handleClose=function(e,t){return r.setState((function(n,o){var i=r._input.value
var a=r.matchSelectedOption(n,t)
var l=t||n.selectedOption
if(a){r._input.value=a.label
l&&de(a)===de(l)||o.onChange(e,a)}else if(l){if(o.allowEmpty&&""===r._input.value){o.onChange(e,null)
return{filterText:null,filteredOptions:o.options,selectedOption:null}}r.props.allowCustom||(r._input.value=l.label)}else r.props.allowCustom||(r._input.value="")
r._input.value!==i&&r.props.onInputChange(null,r._input.value)
return{filterText:r.props.allowCustom?r._input.value:null,filteredOptions:o.options,selectedOption:a||l}}),r.props.onClose)}
r.handleInputChange=function(e,t){r.props.onInputChange(e,t)
var n=t.toLowerCase()
r.state.filterText!==n&&r.setState((function(e,t){var o=t.filter(r.props.options,n||"")
var i=e.selectedOption
t.allowCustom&&0===o.length&&(i=void 0)
return{filterText:n,filteredOptions:o,selectedOption:i}}))}
r.handleSelect=function(e,t){if(r._input.value!==t.label){r._input.value=t.label
r.props.onInputChange(null,r._input.value)}r.setState({filterText:null,filteredOptions:r.props.options,selectedOption:t},(function(){return r.focus()}))
r.props.onChange(e,t)}
r.handleInputRef=function(e){r._input=e
for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o]
r.props.inputRef.apply(Object(O["a"])(r),[e].concat(n))}
r.state={filterText:null,filteredOptions:e.options,selectedOption:r.getSelectedOptionFromProps(e)}
return r}Object(r["a"])(n,[{key:"findSelectedOption",value:function(e,t){var n=de(t)
var o=e.find((function(e){return de(e)===n}))
return o||t}},{key:"getSelectedOptionFromProps",value:function(e,t){return t?this.findSelectedOption(e.options,t):this.findSelectedOption(e.options,e.selectedOption||e.defaultSelectedOption)}},{key:"componentDidMount",value:function(){this.state.selectedOption&&(this._input.value=this.state.selectedOption.label||"")}},{key:"componentWillReceiveProps",value:function(e){var t=this
var n=!d()(this.props.options,e.options)
var o=this.props.selectedOption!=e.selectedOption&&!d()(this.props.selectedOption,e.selectedOption)&&!this.props.disabled&&!this.props.readOnly
var r=this.props.value!==e.value;(n||o||r)&&this.setState((function(r){var i=o?null:r.selectedOption
var a=t.getSelectedOptionFromProps(e,i)
var l=r.filterText||""
e.allowCustom&&o&&!t.props.selectedOption&&(l=a&&a.label||"")
var s=e.filter(e.options,l)
var c=a&&a.label||e.value||""
if((e.allowCustom||null===r.filterText)&&t._input.value!==c){t._input.value=c
e.onInputChange(null,t._input.value)}n&&e.onOptionsChange(s)
return{selectedOption:a,filteredOptions:s}}))}},{key:"render",value:function(){return s.a.createElement(Te,Object.assign({},Object(m["a"])(this.props,n.propTypes),{editable:this.props.allowCustom||this.props.editable,inputRef:this.handleInputRef,options:this.state.filteredOptions,selectedOption:this.state.selectedOption,disabled:this.props.disabled,readOnly:this.props.readOnly,onSelect:this.handleSelect,onStaticClick:this.focus,onClose:this.handleClose,onInputChange:this.handleInputChange,optionsMaxWidth:this.props.optionsMaxWidth,closeOnSelect:this.props.closeOnSelect}))}},{key:"focused",get:function(){return Object(x["a"])(this._input)}},{key:"value",get:function(){var e=this.state.selectedOption
if(e)return e.value
if(this.props.allowCustom)return this._input.value
return null}}])
n.displayName="SelectSingle"
return n}(l["Component"]),Pe.propTypes={options:u.a.arrayOf(Ie),inputRef:u.a.func,selectedOption:Object(h["a"])(u.a.oneOfType([u.a.string,Ie]),"onChange","defaultSelectedOption"),optionsMaxWidth:u.a.string,defaultSelectedOption:u.a.oneOfType([u.a.string,Ie]),editable:u.a.bool,allowEmpty:u.a.bool,allowCustom:u.a.bool,disabled:u.a.bool,readOnly:u.a.bool,filter:u.a.func,onClose:u.a.func,onChange:u.a.func,onInputChange:u.a.func,onOptionsChange:u.a.func,closeOnSelect:u.a.bool,value:u.a.string},Pe.defaultProps={options:void 0,selectedOption:void 0,defaultSelectedOption:void 0,value:void 0,filter:void 0,readOnly:false,disabled:false,allowCustom:false,allowEmpty:false,editable:false,optionsMaxWidth:void 0,inputRef:function(e){},onClose:function(){},onChange:function(e,t){},onInputChange:function(e,t){},onOptionsChange:function(e){},closeOnSelect:true},De))||Ee)
var ze=n("FpxZ")
function Re(e){var t=e.spacing
return{tagTopMargin:t.xxxSmall,tagStartMargin:t.xxSmall}}Re.canvas=function(e){return{}}
var Me,Fe,Be,We,Qe
var Ne={componentId:"bknox",template:function(e){return"\n\n.bknox_dTVD{-webkit-margin-end:0;-webkit-margin-start:".concat(e.tagStartMargin||"inherit",";margin-inline-end:0;margin-inline-start:").concat(e.tagStartMargin||"inherit",";margin-top:calc(").concat(e.tagTopMargin||"inherit"," + 0.125rem)}\n\n[dir=ltr] .bknox_dTVD{margin-left:").concat(e.tagStartMargin||"inherit",";margin-right:0}\n\n[dir=rtl] .bknox_dTVD{margin-left:0;margin-right:").concat(e.tagStartMargin||"inherit","}\n\n.bknox_dTVD:last-of-type{margin-bottom:").concat(e.tagTopMargin||"inherit","}")},tag:"bknox_dTVD"}
var Le=u.a.shape({label:u.a.string.isRequired,value:u.a.string.isRequired,id:u.a.oneOfType([u.a.string,u.a.number]),dismissible:u.a.bool,children:u.a.node})
var Ue=(Me=Object(v["a"])(),Fe=Object(D["j"])(Re,Ne),Me(Be=Fe(Be=(Qe=We=function(e){Object(i["a"])(n,e)
var t=Object(a["a"])(n)
function n(e){var r
Object(o["a"])(this,n)
r=t.call(this,e)
r._input=null
r.focus=function(){r._input&&r._input.focus()}
r.cleanInput=function(){if(""!==r._input.value){r._input.value=""
r.props.onInputChange(null,"")}}
r.matchSelectedOptions=function(e,t){return t?e.filteredOptions.filter((function(e){return t.find((function(t){return t.value===e.value}))})):[e.filteredOptions.find((function(e){return e.label.toLowerCase()===r._input.value.toLowerCase()}))].filter((function(e){return e}))}
r.amendMatchesToState=function(e,t,n,o){if(n&&n.length>0){var i=[].concat(Object(_["a"])(e.selectedOption),Object(_["a"])(n))
"function"===typeof o&&o(i)
return{filteredOptions:r.getFilteredOptions(t,"",i),selectedOption:i}}return{filteredOptions:r.getFilteredOptions(t,"",e.selectedOption)}}
r.handleClose=function(e){return r.setState((function(t,n){var o=r.matchSelectedOptions(t)
r.cleanInput()
return r.amendMatchesToState(t,n,o,(function(t){n.onChange(e,t)}))}),r.props.onClose)}
r.handleInputChange=function(e,t){r.props.onInputChange(e,t)
var n=t.toLowerCase()
r.state.filterText!==n&&r.setState((function(e,t){return{filterText:n,filteredOptions:r.getFilteredOptions(t,n,e.selectedOption)}}))}
r.handleKeyDown=function(e){var t=r.state,n=t.filterText,o=t.selectedOption,i=t.selectedOption.length;("Backspace"===e.key||"Delete"===e.key)&&i>0&&""===n&&Object(x["a"])(r._input)&&r.dismiss(e,o[i-1])
r.props.onKeyDown(e)}
r.handleSelect=function(e,t){r.cleanInput()
var n=[].concat(Object(_["a"])(r.state.selectedOption),[t])
r.setState((function(e,t){var o=r.isControlled?e.selectedOption:n
return{filterText:"",filteredOptions:r.getFilteredOptions(t,"",o),selectedOption:o}}),r.focus)
r.props.onChange(e,n)}
r.dismiss=function(e,t){e.preventDefault()
e.stopPropagation()
var n=de(t)
var o=r.state.selectedOption.filter((function(e){return de(e)!==n}))
r.setState((function(e,t){var n=r.isControlled?e.selectedOption:o
return{filteredOptions:r.getFilteredOptions(t,e.filterText,n),selectedOption:n}}),r.focus)
r.props.onChange(e,o)}
r.handleInputRef=function(e){r._input=e
for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o]
r.props.inputRef.apply(Object(O["a"])(r),[e].concat(n))}
var i=r.getSelectedOptionFromProps(e)
var a=r.getFilteredOptions(e,"",i)
r.state={filterText:"",selectedOption:i,filteredOptions:a}
return r}Object(r["a"])(n,[{key:"getOptionMap",value:function(e){return e.reduce((function(e,t){e[de(t)]=t
return e}),{})}},{key:"findSelectedOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
var n=this.getOptionMap(e)
return t.map((function(e){var t=de(e)
var o=n[t]
if("object"===typeof e)return Object(ae["a"])({},e,{},o)
return o||e}))}},{key:"getSelectedOptionFromProps",value:function(e,t){return t?this.findSelectedOptions(e.options,t):this.findSelectedOptions(e.options,e.selectedOption||e.defaultSelectedOption)}},{key:"getFilteredOptions",value:function(e,t){var n=e.filter,o=e.options
var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]
var i=n(o,t)
var a=this.getOptionMap(r)
return i.filter((function(e){return!a[de(e)]}))}},{key:"componentWillReceiveProps",value:function(e){var t=this
var n=!d()(this.props.options,e.options)
var o=!d()(this.props.selectedOption,e.selectedOption)&&!this.props.disabled&&!this.props.readOnly;(n||o)&&this.setState((function(r){var i=o?null:r.selectedOption
var a=t.getSelectedOptionFromProps(e,i)
var l=t.getFilteredOptions(e,r.filterText,a)
n&&t.props.onOptionsChange(l)
return{selectedOption:a,filteredOptions:l}}))}},{key:"renderTags",value:function(){var e=this
return this.state.selectedOption.filter((function(e){return e&&e.label})).map((function(t,n){var o=false!==t.dismissible
var r={}
o&&(r={dismissible:true,onClick:function(n){return e.dismiss(n,t)},onMouseDown:function(e){e.stopPropagation()}})
return s.a.createElement(ze["a"],Object.assign({className:Ne.tag,key:de(t)+t.label,title:t.label,text:e.props.formatSelectedOption(t,n),size:e.props.size,disabled:e.props.disabled,readOnly:e.props.readOnly},r))}))}},{key:"renderInputs",value:function(){var e=this
return this.state.selectedOption.filter((function(e){return e&&e.label})).map((function(t,n){return s.a.createElement("input",{type:"hidden",key:de(t)+t.label,name:e.props.name,value:t.value})}))}},{key:"render",value:function(){var e=this
return s.a.createElement(Te,Object.assign({},Object(m["a"])(this.props,n.propTypes),{ref:function(t){e._field=t},inputRef:this.handleInputRef,editable:this.props.editable,options:this.state.filteredOptions,size:this.props.size,disabled:this.props.disabled,readOnly:this.props.readOnly,onSelect:this.handleSelect,onStaticClick:this.focus,onClose:this.handleClose,onInputChange:this.handleInputChange,onKeyDown:this.handleKeyDown,optionsMaxWidth:this.props.optionsMaxWidth,closeOnSelect:this.props.closeOnSelect}),this.renderTags(),this.renderInputs())}},{key:"focused",get:function(){return Object(oe["a"])(this._field)}},{key:"value",get:function(){return this.state.selectedOption.map((function(e){return e&&e.value}))}},{key:"isControlled",get:function(){return!!this.props.selectedOption}}])
n.displayName="SelectMultiple"
return n}(l["Component"]),We.propTypes={options:u.a.arrayOf(Le),inputRef:u.a.func,selectedOption:Object(h["a"])(u.a.arrayOf(u.a.oneOfType([u.a.string,Le])),"onChange","defaultSelectedOption"),defaultSelectedOption:u.a.arrayOf(u.a.oneOfType([u.a.string,Le])),editable:u.a.bool,name:u.a.string,size:u.a.oneOf(["small","medium","large"]),optionsMaxWidth:u.a.string,filter:u.a.func,formatSelectedOption:u.a.func,disabled:u.a.bool,readOnly:u.a.bool,onClose:u.a.func,onChange:u.a.func,onInputChange:u.a.func,onOptionsChange:u.a.func,onKeyDown:u.a.func,closeOnSelect:u.a.bool,allowCustom:u.a.oneOf([false])},We.defaultProps={inputRef:function(){},formatSelectedOption:function(e){return e.children||e.label},onClose:function(){},onChange:function(e,t){},onInputChange:function(e){},onOptionsChange:function(e){},onKeyDown:function(e){},closeOnSelect:true,allowCustom:false,readOnly:false,disabled:false,filter:void 0,optionsMaxWidth:void 0,size:void 0,name:void 0,editable:false,selectedOption:void 0,defaultSelectedOption:void 0,options:void 0},Qe))||Be)||Be)
function Ze(e){var t=l["Children"].map(e,(function(e){var t=e.props,n=t.label,o=t.value,r=t.children
if("optgroup"===e.type){var i=[]
var a=o||n
i.push(s.a.createElement("option",Object.assign({},e.props,{value:a,group:a,groupLabel:true,disabled:true}),n))
l["Children"].forEach(r,(function(e,t){i.push(s.a.createElement("option",Object.assign({},e.props,{group:a,groupItem:true}),e.props.children))}))
return i}return e}))
return l["Children"].map(t,(function(e){var t=e.props,n=t.label,o=t.id,r=t.value,i=t.children,a=t.disabled,l=t.icon,s=t.group,c=t.groupLabel,u=t.groupItem
return{id:o||r,label:n||i,children:i||n,disabled:a||false,value:r,icon:l||null,group:s||null,groupLabel:c||false,groupItem:u||false}}))||[]}var He,qe,Xe,Je,Ve
var $e=(He=Object(v["a"])(),qe=Object(b["a"])("7.0.0",null,"Use SimpleSelect from ui-simple-select for basic configurations or Select from ui-select for more complex configuations."),He(Xe=qe(Xe=(Ve=Je=function(e){Object(i["a"])(n,e)
var t=Object(a["a"])(n)
function n(e){var r
Object(o["a"])(this,n)
r=t.call(this,e)
r._input=null
r.focus=function(){r._subComponent&&r._subComponent.focus()}
r.handleRef=function(e){r._subComponent=e}
var i=Ze(e.children)
e.allowCustom&&e.multiple
r.state={options:i}
return r}Object(r["a"])(n,[{key:"componentWillReceiveProps",value:function(e){var t=Ze(e.children)
d()(this.state.options,t)||this.setState({options:t})}},{key:"render",value:function(){var e=this.props.multiple?Ue:Ae
var t=this.props.defaultOption
t||this.props.allowCustom||(t=this.props.value)
if(!this.props.editable&&!this.props.allowCustom&&!this.props.multiple&&"undefined"===typeof t)for(var n=0;this.state.options.length;n++){var o=this.state.options[n]
if(!o.disabled){t=o
break}}return s.a.createElement(e,Object.assign({ref:this.handleRef},Object(m["a"])(this.props,{},["multiple","defaultOption",this.props.multiple?"":"formatSelectedOption"]),{options:this.state.options,defaultSelectedOption:t,closeOnSelect:this.props.closeOnSelect}))}},{key:"focused",get:function(){return this._subComponent&&this._subComponent.focused}},{key:"invalid",get:function(){return!!this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"value",get:function(){return this._subComponent&&this._subComponent.value}}])
n.displayName="Select"
return n}(l["Component"]),Je.propTypes={multiple:u.a.bool,editable:u.a.bool,children:f["a"].oneOf(["option","optgroup"]),inputRef:u.a.func,value:u.a.string,selectedOption:Object(h["a"])(u.a.oneOfType([u.a.string,u.a.shape({label:u.a.string.isRequired,value:u.a.string.isRequired,id:u.a.oneOfType([u.a.string,u.a.number]),children:u.a.node,disabled:u.a.bool,icon:u.a.func,groupLabel:u.a.bool}),u.a.arrayOf(u.a.oneOfType([u.a.string,u.a.shape({label:u.a.string.isRequired,value:u.a.string.isRequired,id:u.a.oneOfType([u.a.string,u.a.number]),children:u.a.node,disabled:u.a.bool,icon:u.a.func,groupLabel:u.a.bool})]))]),"onChange","defaultOption"),defaultOption:u.a.oneOfType([u.a.string,u.a.shape({label:u.a.string.isRequired,value:u.a.string.isRequired,id:u.a.oneOfType([u.a.string,u.a.number]),children:u.a.node,disabled:u.a.bool,icon:u.a.func,groupLabel:u.a.bool}),u.a.arrayOf(u.a.oneOfType([u.a.string,u.a.shape({label:u.a.string.isRequired,value:u.a.string.isRequired,id:u.a.oneOfType([u.a.string,u.a.number]),children:u.a.node,disabled:u.a.bool,icon:u.a.func,groupLabel:u.a.bool})]))]),allowEmpty:u.a.bool,allowCustom:u.a.bool,id:u.a.string,placement:y["a"].placement,messages:u.a.arrayOf(g["e"].message),size:u.a.oneOf(["small","medium","large"]),layout:u.a.oneOf(["stacked","inline"]),optionsMaxWidth:u.a.string,loadingText:u.a.string,emptyOption:u.a.node,visibleOptionsCount:u.a.oneOfType([u.a.string,u.a.number]),assistiveText:u.a.string,announcement:u.a.string,filter:u.a.func,formatSelectedOption:u.a.func,disabled:u.a.bool,readOnly:u.a.bool,onPositioned:u.a.func,onOpen:u.a.func,onClose:u.a.func,onChange:u.a.func,onInputChange:u.a.func,onOptionsChange:u.a.func,onBlur:u.a.func,onClick:u.a.func,closeOnSelect:u.a.bool,constrain:y["a"].constrain},Je.defaultProps={multiple:false,editable:false,allowEmpty:true,allowCustom:false,emptyOption:"---",selectedOption:null,size:"medium",loadingText:null,visibleOptionsCount:8,optionsMaxWidth:null,inputRef:function(e){},filter:function(e,t){return e.filter((function(e){return e.label.toLowerCase().startsWith(t.toLowerCase())}))},formatSelectedOption:function(e){return e.label||e.children},closeOnSelect:true,constrain:"window",onBlur:void 0,onClick:void 0,onOptionsChange:void 0,onInputChange:void 0,onChange:void 0,onClose:void 0,onOpen:void 0,onPositioned:void 0,readOnly:false,disabled:false,announcement:void 0,assistiveText:void 0,layout:void 0,messages:void 0,placement:void 0,id:void 0,defaultOption:void 0,value:void 0,children:null},Ve))||Xe)||Xe)},DmXP:function(e,t,n){"use strict"
var o=Date.prototype.getDay
var r=function(e){try{o.call(e)
return true}catch(e){return false}}
var i=Object.prototype.toString
var a="[object Date]"
var l="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag
e.exports=function(e){if("object"!==typeof e||null===e)return false
return l?r(e):i.call(e)===a}},FpZJ:function(e,t,n){"use strict"
e.exports=function(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false
if("symbol"===typeof Symbol.iterator)return true
var e={}
var t=Symbol("test")
var n=Object(t)
if("string"===typeof t)return false
if("[object Symbol]"!==Object.prototype.toString.call(t))return false
if("[object Symbol]"!==Object.prototype.toString.call(n))return false
var o=42
e[t]=o
for(t in e)return false
if("function"===typeof Object.keys&&0!==Object.keys(e).length)return false
if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return false
var r=Object.getOwnPropertySymbols(e)
if(1!==r.length||r[0]!==t)return false
if(!Object.prototype.propertyIsEnumerable.call(e,t))return false
if("function"===typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(e,t)
if(i.value!==o||true!==i.enumerable)return false}return true}},FpxZ:function(e,t,n){"use strict"
n.d(t,"a",(function(){return P}))
var o=n("rePB")
var r=n("1OyB")
var i=n("vuIU")
var a=n("Ji7U")
var l=n("LK+K")
var s=n("q1tI")
var c=n.n(s)
var u=n("17x9")
var p=n.n(u)
var d=n("TSYQ")
var f=n.n(d)
var h=n("VTBJ")
var g=n("hPGw")
var y=c.a.createElement("path",{d:"M797.319865 985.881673L344.771525 1438.43001 533.333333 1626.99182 985.881673 1174.44348 1438.43001 1626.99182 1626.99182 1438.43001 1174.44348 985.881673 1626.99182 533.333333 1438.43001 344.771525 985.881673 797.319865 533.333333 344.771525 344.771525 533.333333z",fillRule:"nonzero",stroke:"none",strokeWidth:"1"})
var b=function(e){Object(a["a"])(n,e)
var t=Object(l["a"])(n)
function n(){Object(r["a"])(this,n)
return t.apply(this,arguments)}Object(i["a"])(n,[{key:"render",value:function(){return c.a.createElement(g["a"],Object.assign({},this.props,{name:"IconX",viewBox:"0 0 1920 1920"}),y)}}])
n.displayName="IconXSolid"
return n}(s["Component"])
b.glyphName="x"
b.variant="Solid"
b.propTypes=Object(h["a"])({},g["a"].propTypes)
var m=n("n12J")
var v=n("J2CL")
var O=n("jtGx")
var x=n("/UXv")
var w=n("oXx0")
var _=n("o4+2")
function S(e){var t=e.borders,n=e.colors,r=e.forms,i=e.spacing,a=e.typography
var l=function(e,n){var r
var i=n.borderColor,a=n.borderRadius,l=n.borderStyle,s=n.borderWidth,c=n.hoverColor,u=n.iconColor,p=n.iconHoverColor,d=n.mainColor,f=n.textColor
return r={},Object(o["a"])(r,"".concat(e,"BackgroundHover"),c||Object(_["a"])(d,5)),Object(o["a"])(r,"".concat(e,"Background"),d),Object(o["a"])(r,"".concat(e,"BorderColor"),i),Object(o["a"])(r,"".concat(e,"BorderRadius"),a||"999rem"),Object(o["a"])(r,"".concat(e,"BorderStyle"),l||t.style),Object(o["a"])(r,"".concat(e,"BorderWidth"),s||t.widthSmall),Object(o["a"])(r,"".concat(e,"Color"),f),Object(o["a"])(r,"".concat(e,"IconColor"),u||f),Object(o["a"])(r,"".concat(e,"IconHoverColor"),p||u||f),r}
return Object(h["a"])({fontFamily:a.fontFamily,heightSmall:"1.3125rem",heightMedium:r.inputHeightSmall,heightLarge:r.inputHeightMedium,fontSizeSmall:a.fontSizeXSmall,fontSizeMedium:a.fontSizeSmall,fontSizeLarge:a.fontSizeMedium,padding:"0 ".concat(i.xSmall),paddingSmall:"0 ".concat(i.xSmall),focusOutlineColor:n.borderBrand,focusOutlineWidth:t.widthMedium,focusOutlineStyle:t.style,maxWidth:"10rem",iconMargin:i.small,transitionTiming:"0.2s"},l("default",{borderColor:n.borderMedium,iconColor:n.textDarkest,iconHoverColor:n.textBrand,mainColor:n.textLight,textColor:n.textDarkest}),{},l("inline",{borderColor:n.borderDark,borderRadius:t.radiusMedium,iconColor:n.textDark,iconHoverColor:n.textDark,mainColor:n.textLightest,textColor:n.textDarkest}))}S["canvas-a11y"]=S["canvas-high-contrast"]=function(e){var t=e.colors
return{defaultBackground:t.backgroundLightest,defaultBorderColor:t.borderDarkest}}
S.canvas=function(e){return{focusOutlineColor:e["ic-brand-primary"],textColor:e["ic-brand-font-color-dark"],defaultIconColor:e["ic-brand-font-color-dark"],defaultIconHoverColor:e["ic-brand-primary"],defaultColor:e["ic-brand-font-color-dark"]}}
var C,j,k,T,K
var E={componentId:"DyQTK",template:function(e){return"\n\n.DyQTK_eAEM{-ms-user-select:none;-webkit-user-select:none;align-items:center;box-sizing:border-box;display:inline-flex;font-family:".concat(e.fontFamily||"inherit",";text-align:center;user-select:none;vertical-align:middle}\n\n[dir=ltr] .DyQTK_eAEM,[dir=rtl] .DyQTK_eAEM{text-align:center}\n\n.DyQTK_doqw{font-size:").concat(e.fontSizeSmall||"inherit",";padding:").concat(e.paddingSmall||"inherit","}\n\n.DyQTK_doqw .DyQTK_eWKC{line-height:calc(").concat(e.heightSmall||"inherit"," - ").concat(e.defaultBorderWidth||"inherit","*2)}\n\n.DyQTK_doqw .DyQTK_dnnz{font-size:0.75rem}\n\n.DyQTK_ycrn{font-size:calc(").concat(e.fontSizeMedium||"inherit"," - 0.0625rem);padding:").concat(e.padding||"inherit","}\n\n.DyQTK_ycrn .DyQTK_eWKC{line-height:calc(").concat(e.heightMedium||"inherit"," - ").concat(e.defaultBorderWidth||"inherit","*2)}\n\n.DyQTK_ycrn .DyQTK_dnnz{font-size:0.75rem}\n\n.DyQTK_cMDj{font-size:calc(").concat(e.fontSizeLarge||"inherit"," - 0.0625rem);padding:").concat(e.padding||"inherit","}\n\n.DyQTK_cMDj .DyQTK_eWKC{line-height:calc(").concat(e.heightLarge||"inherit"," - ").concat(e.defaultBorderWidth||"inherit","*2)}\n\n.DyQTK_cMDj .DyQTK_dnnz{font-size:0.875rem}\n\n.DyQTK_EwaR{outline:none;overflow:visible;position:relative;touch-action:manipulation;transition:background-color ").concat(e.transitionTiming||"inherit","}\n\n.DyQTK_EwaR:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",';bottom:-0.3125rem;box-sizing:border-box;content:"";left:-0.3125rem;opacity:0;pointer-events:none;position:absolute;right:-0.3125rem;top:-0.3125rem;transform:scale(0.9);transition:all ').concat(e.transitionTiming||"inherit","}\n\n.DyQTK_EwaR:not(.DyQTK_erdA){cursor:pointer}\n\n.DyQTK_EwaR:focus:before{opacity:1;transform:scale(1)}\n\n.DyQTK_EwaR.DyQTK_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.DyQTK_dnnz{-webkit-margin-end:0;-webkit-margin-start:").concat(e.iconMargin||"inherit",";cursor:pointer;margin-inline-end:0;margin-inline-start:").concat(e.iconMargin||"inherit",";transform:translateY(0.0625rem);transition:all ").concat(e.transitionTiming||"inherit","}\n\n[dir=ltr] .DyQTK_dnnz{margin-left:").concat(e.iconMargin||"inherit",";margin-right:0}\n\n[dir=rtl] .DyQTK_dnnz{margin-left:0;margin-right:").concat(e.iconMargin||"inherit","}\n\n.DyQTK_eWKC{max-width:").concat(e.maxWidth||"inherit",";overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n\n.DyQTK_ddES{background-color:").concat(e.defaultBackground||"inherit",";border:").concat(e.defaultBorderWidth||"inherit"," ").concat(e.defaultBorderStyle||"inherit"," ").concat(e.defaultBorderColor||"inherit",";border-radius:").concat(e.defaultBorderRadius||"inherit",";color:").concat(e.defaultColor||"inherit","}\n\n.DyQTK_ddES.DyQTK_EwaR:before{border-radius:").concat(e.defaultBorderRadius||"inherit","}\n\n.DyQTK_ddES.DyQTK_EwaR:hover{background-color:").concat(e.defaultBackgroundHover||"inherit","}\n\n.DyQTK_ddES.DyQTK_erdA .DyQTK_dnnz{color:").concat(e.defaultIconColor||"inherit","}\n\n.DyQTK_ddES.DyQTK_erdA:hover .DyQTK_dnnz{color:").concat(e.defaultIconHoverColor||"inherit","}\n\n.DyQTK_eXrk{background-color:").concat(e.inlineBackground||"inherit",";border:").concat(e.inlineBorderWidth||"inherit"," ").concat(e.inlineBorderStyle||"inherit"," ").concat(e.inlineBorderColor||"inherit",";border-radius:").concat(e.inlineBorderRadius||"inherit",";color:").concat(e.inlineColor||"inherit",";cursor:text;margin:0 0.1875rem 0.1875rem}\n\n.DyQTK_eXrk.DyQTK_EwaR:before{border-radius:calc(").concat(e.inlineBorderRadius||"inherit","*1.5)}\n\n.DyQTK_eXrk.DyQTK_EwaR:hover{background-color:").concat(e.inlineBackgroundHover||"inherit","}\n\n.DyQTK_eXrk.DyQTK_erdA .DyQTK_dnnz{background-color:").concat(e.inlineIconColor||"inherit",";border-radius:50%;color:").concat(e.inlineBackground||"inherit",";font-size:0.75rem;inset-inline-end:0;inset-inline-start:auto;padding:0.25rem;position:absolute;top:0;transform:translate(40%,-40%)}\n\n[dir=ltr] .DyQTK_eXrk.DyQTK_erdA .DyQTK_dnnz{left:auto;right:0}\n\n[dir=rtl] .DyQTK_eXrk.DyQTK_erdA .DyQTK_dnnz{left:0;right:auto}\n\n.DyQTK_eXrk.DyQTK_erdA:hover .DyQTK_dnnz{background-color:").concat(e.inlineIconHoverColor||"inherit","}\n\n[dir=rtl] .DyQTK_eXrk.DyQTK_erdA .DyQTK_dnnz{transform:translate(-40%,-40%)}")},tagRoot:"DyQTK_eAEM",small:"DyQTK_doqw",text:"DyQTK_eWKC",icon:"DyQTK_dnnz",medium:"DyQTK_ycrn",large:"DyQTK_cMDj",button:"DyQTK_EwaR",dismissible:"DyQTK_erdA",disabled:"DyQTK_ywdX",default:"DyQTK_ddES",inline:"DyQTK_eXrk"}
var P=(C=Object(w["a"])(),j=Object(v["j"])(S,E),C(k=j(k=(K=T=function(e){Object(a["a"])(n,e)
var t=Object(l["a"])(n)
function n(){var e
Object(r["a"])(this,n)
for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a]
e=t.call.apply(t,[this].concat(i))
e.focus=function(){e._container&&e._container.focus()}
e.handleClick=function(t){var n=e.props,o=n.disabled,r=n.readOnly,i=n.onClick
if(o||r){t.preventDefault()
t.stopPropagation()}else"function"===typeof i&&i(t)}
e.handleRef=function(t){e._container=t}
return e}Object(i["a"])(n,[{key:"render",value:function(){var e
var t=this.props,r=t.className,i=t.dismissible,a=t.disabled,l=t.readOnly,s=t.size,u=t.text,p=t.title,d=t.onClick,h=t.margin,g=t.variant
var y=(e={},Object(o["a"])(e,E.tagRoot,true),Object(o["a"])(e,E[g],true),Object(o["a"])(e,E[s],s),Object(o["a"])(e,E.dismissible,i),Object(o["a"])(e,E.button,d),Object(o["a"])(e,E.disabled,a),e)
var v=m["a"].omitViewProps(Object(O["a"])(this.props,n.propTypes),n)
return c.a.createElement(m["a"],Object.assign({},v,{ref:this.handleRef,elementRef:this.props.elementRef,className:f()(r,y),as:d?"button":"span",margin:h,type:d?"button":null,onClick:d?this.handleClick:null,disabled:a||l,display:null,title:p||("string"===typeof u?u:null)}),c.a.createElement("span",{className:E.text},u),d&&i?c.a.createElement(b,{className:E.icon}):null)}},{key:"focused",get:function(){return Object(x["a"])(this._container)}}])
n.displayName="Tag"
return n}(s["Component"]),T.propTypes={className:p.a.string,text:p.a.oneOfType([p.a.string,p.a.node]).isRequired,title:p.a.string,disabled:p.a.bool,readOnly:p.a.bool,dismissible:p.a.bool,margin:v["c"].spacing,onClick:p.a.func,elementRef:p.a.func,size:p.a.oneOf(["small","medium","large"]),variant:p.a.oneOf(["default","inline"])},T.defaultProps={size:"medium",dismissible:false,variant:"default",elementRef:void 0,className:void 0,title:void 0,disabled:false,readOnly:false,margin:void 0,onClick:void 0},K))||k)||k)},HH6Z:function(e,t,n){"use strict"
var o=n("82c2").supportsDescriptors
var r=n("V+xs")
var i=Object.getOwnPropertyDescriptor
var a=Object.defineProperty
var l=TypeError
var s=Object.getPrototypeOf
var c=/a/
e.exports=function(){if(!o||!s)throw new l("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors")
var e=r()
var t=s(c)
var n=i(t,"flags")
n&&n.get===e||a(t,"flags",{configurable:true,enumerable:false,get:e})
return e}},RLeF:function(e,t,n){"use strict"
var o=n("D3zA")
var r=n("6ayh")
var i=r("%Function.prototype.apply%")
var a=r("%Function.prototype.call%")
var l=r("%Reflect.apply%",true)||o.call(a,i)
var s=r("%Object.defineProperty%",true)
if(s)try{s({},"a",{value:1})}catch(e){s=null}e.exports=function(){return l(o,a,arguments)}
var c=function(){return l(o,i,arguments)}
s?s(e.exports,"apply",{value:c}):e.exports.apply=c},UVaH:function(e,t,n){"use strict";(function(t){var o=t.Symbol
var r=n("FpZJ")
e.exports=function(){if("function"!==typeof o)return false
if("function"!==typeof Symbol)return false
if("symbol"!==typeof o("foo"))return false
if("symbol"!==typeof Symbol("bar"))return false
return r()}}).call(this,n("yLpj"))},"V+xs":function(e,t,n){"use strict"
var o=n("VwiP")
var r=n("82c2").supportsDescriptors
var i=Object.getOwnPropertyDescriptor
var a=TypeError
e.exports=function(){if(!r)throw new a("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors")
if("gim"===/a/gim.flags){var e=i(RegExp.prototype,"flags")
if(e&&"function"===typeof e.get&&"boolean"===typeof/a/.dotAll)return e.get}return o}},VwiP:function(e,t,n){"use strict"
var o=Object
var r=TypeError
e.exports=function(){if(null!=this&&this!==o(this))throw new r("RegExp.prototype.flags getter called on non-object")
var e=""
this.global&&(e+="g")
this.ignoreCase&&(e+="i")
this.multiline&&(e+="m")
this.dotAll&&(e+="s")
this.unicode&&(e+="u")
this.sticky&&(e+="y")
return e}},aI7X:function(e,t,n){"use strict"
var o="Function.prototype.bind called on incompatible "
var r=Array.prototype.slice
var i=Object.prototype.toString
var a="[object Function]"
e.exports=function(e){var t=this
if("function"!==typeof t||i.call(t)!==a)throw new TypeError(o+t)
var n=r.call(arguments,1)
var l
var s=function(){if(this instanceof l){var o=t.apply(this,n.concat(r.call(arguments)))
if(Object(o)===o)return o
return this}return t.apply(e,n.concat(r.call(arguments)))}
var c=Math.max(0,t.length-n.length)
var u=[]
for(var p=0;p<c;p++)u.push("$"+p)
l=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this,arguments); }")(s)
if(t.prototype){var d=function(){}
d.prototype=t.prototype
l.prototype=new d
d.prototype=null}return l}},bbcx:function(e,t,n){"use strict"
var o=function(e){return e!==e}
e.exports=function(e,t){if(0===e&&0===t)return 1/e===1/t
if(e===t)return true
if(o(e)&&o(t))return true
return false}},f66B:function(e,t,n){var o=n("1seS")
var r=n("45zb")
var i=n("bbcx")
var a=n("2Nju")
var l=n("5xAX")
var s=n("DmXP")
var c=Date.prototype.getTime
function u(e,t,n){var o=n||{}
if(o.strict?i(e,t):e===t)return true
if(!e||!t||"object"!==typeof e&&"object"!==typeof t)return o.strict?i(e,t):e==t
return f(e,t,o)}function p(e){return null===e||void 0===e}function d(e){if(!e||"object"!==typeof e||"number"!==typeof e.length)return false
if("function"!==typeof e.copy||"function"!==typeof e.slice)return false
if(e.length>0&&"number"!==typeof e[0])return false
return true}function f(e,t,n){var i,f
if(typeof e!==typeof t)return false
if(p(e)||p(t))return false
if(e.prototype!==t.prototype)return false
if(r(e)!==r(t))return false
var h=a(e)
var g=a(t)
if(h!==g)return false
if(h||g)return e.source===t.source&&l(e)===l(t)
if(s(e)&&s(t))return c.call(e)===c.call(t)
var y=d(e)
var b=d(t)
if(y!==b)return false
if(y||b){if(e.length!==t.length)return false
for(i=0;i<e.length;i++)if(e[i]!==t[i])return false
return true}if(typeof e!==typeof t)return false
try{var m=o(e)
var v=o(t)}catch(e){return false}if(m.length!==v.length)return false
m.sort()
v.sort()
for(i=m.length-1;i>=0;i--)if(m[i]!=v[i])return false
for(i=m.length-1;i>=0;i--){f=m[i]
if(!u(e[f],t[f],n))return false}return true}e.exports=u},sYn3:function(e,t,n){"use strict"
var o
if(!Object.keys){var r=Object.prototype.hasOwnProperty
var i=Object.prototype.toString
var a=n("1KsK")
var l=Object.prototype.propertyIsEnumerable
var s=!l.call({toString:null},"toString")
var c=l.call((function(){}),"prototype")
var u=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]
var p=function(e){var t=e.constructor
return t&&t.prototype===e}
var d={$applicationCache:true,$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$onmozfullscreenchange:true,$onmozfullscreenerror:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true}
var f=function(){if("undefined"===typeof window)return false
for(var e in window)try{if(!d["$"+e]&&r.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{p(window[e])}catch(e){return true}}catch(e){return true}return false}()
var h=function(e){if("undefined"===typeof window||!f)return p(e)
try{return p(e)}catch(e){return false}}
o=function(e){var t=null!==e&&"object"===typeof e
var n="[object Function]"===i.call(e)
var o=a(e)
var l=t&&"[object String]"===i.call(e)
var p=[]
if(!t&&!n&&!o)throw new TypeError("Object.keys called on a non-object")
var d=c&&n
if(l&&e.length>0&&!r.call(e,0))for(var f=0;f<e.length;++f)p.push(String(f))
if(o&&e.length>0)for(var g=0;g<e.length;++g)p.push(String(g))
else for(var y in e)d&&"prototype"===y||!r.call(e,y)||p.push(String(y))
if(s){var b=h(e)
for(var m=0;m<u.length;++m)b&&"constructor"===u[m]||!r.call(e,u[m])||p.push(u[m])}return p}}e.exports=o},u9uf:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var o=n("17x9")
var r=n.n(o)
var i=n("AdN2")
var a=n("AXvA")
var l={validQuery:function(e,t,n){try{Object(a["a"])(e[t])}catch(e){return new Error("Invalid query prop supplied to `".concat(n,"`. ").concat(e.message))}},placement:r.a.oneOf(["top","end","bottom","start","top start","start top","start center","start bottom","bottom start","bottom center","bottom end","end bottom","end center","end top","top end","top center","center end","center start","top stretch","bottom stretch","end stretch","start stretch","offscreen"]),mountNode:r.a.oneOfType([i["a"],r.a.func]),constrain:r.a.oneOfType([i["a"],r.a.func,r.a.oneOf(["window","scroll-parent","parent","none"])])}}}])

//# sourceMappingURL=51-c-74deba9c12.js.map