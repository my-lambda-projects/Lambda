(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[126],{"+Qka":function(e,t,a){var r=a("fmRc"),n=a("t2Dn"),i=a("cq/+"),o=a("T1AV"),s=a("GoyQ"),_=a("mTTR"),l=a("itsj")
function c(e,t,a,d,u){if(e===t)return
i(t,(function(i,_){u||(u=new r)
if(s(i))o(e,t,_,a,c,d,u)
else{var h=d?d(l(e,_),i,_+"",e,t,u):void 0
void 0===h&&(h=i)
n(e,_,h)}}),_)}e.exports=c},"/7Jz":function(e,t,a){"use strict"
a.r(t)
a.d(t,"StyleSheet",(function(){return ct}))
a.d(t,"StyleSheetServer",(function(){return dt}))
a.d(t,"StyleSheetTestUtils",(function(){return ut}))
a.d(t,"css",(function(){return ht}))
a.d(t,"minify",(function(){return ft}))
a.d(t,"flushToStyleTag",(function(){return bt}))
a.d(t,"injectAndGetClassName",(function(){return mt}))
a.d(t,"defaultSelectorHandlers",(function(){return pt}))
a.d(t,"reset",(function(){return gt}))
a.d(t,"resetInjectedStyle",(function(){return vt}))
var r=a("9kyW")
var n=a.n(r)
var i=a("IEa/")
var o=a.n(i)
function s(e){s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
return s(e)}function _(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true}):e[t]=a
return e}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{}
var r=Object.keys(a)
"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))))
r.forEach((function(t){_(e,t,a[t])}))}return e}function c(e){return d(e)||u(e)||h()}function d(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t]
return a}}function u(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var f=/([A-Z])/g
var b=function(e){return"-".concat(e.toLowerCase())}
var m=function(e){var t=e.replace(f,b)
if("m"===t[0]&&"s"===t[1]&&"-"===t[2])return"-".concat(t)
return t}
var p={animationIterationCount:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridRow:true,gridColumn:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true}
function g(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var v=["Webkit","ms","Moz","O"]
Object.keys(p).forEach((function(e){v.forEach((function(t){p[g(t,e)]=p[e]}))}))
var k=function(e,t){return"number"===typeof t?p[e]?""+t:t+"px":""+t}
var y=function(e,t){return j(k(e,t))}
var w=function(e,t){return n()(e).toString(36)}
var x=function(e){return w(JSON.stringify(e))}
var j=function(e){return"!"===e[e.length-10]&&" !important"===e.slice(-11)?e:"".concat(e," !important")}
var O="undefined"!==typeof Map
var S=function(){function e(){this.elements={}
this.keyOrder=[]}var t=e.prototype
t.forEach=function(e){for(var t=0;t<this.keyOrder.length;t++)e(this.elements[this.keyOrder[t]],this.keyOrder[t])}
t.set=function(t,a,r){if(this.elements.hasOwnProperty(t)){if(r){var n=this.keyOrder.indexOf(t)
this.keyOrder.splice(n,1)
this.keyOrder.push(t)}}else this.keyOrder.push(t)
if(null==a){this.elements[t]=a
return}if(O&&a instanceof Map||a instanceof e){var i=this.elements.hasOwnProperty(t)?this.elements[t]:new e
a.forEach((function(e,t){i.set(t,e,r)}))
this.elements[t]=i
return}if(!Array.isArray(a)&&"object"===s(a)){var o=this.elements.hasOwnProperty(t)?this.elements[t]:new e
var _=Object.keys(a)
for(var l=0;l<_.length;l+=1)o.set(_[l],a[_[l]],r)
this.elements[t]=o
return}this.elements[t]=a}
t.get=function(e){return this.elements[e]}
t.has=function(e){return this.elements.hasOwnProperty(e)}
t.addStyleType=function(t){var a=this
if(O&&t instanceof Map||t instanceof e)t.forEach((function(e,t){a.set(t,e,true)}))
else{var r=Object.keys(t)
for(var n=0;n<r.length;n++)this.set(r[n],t[r[n]],true)}}
return e}()
function z(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function C(e,t){return t={exports:{}},e(t,t.exports),t.exports}function A(e){return e&&e.default||e}var T=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=a
function a(e){return e.charAt(0).toUpperCase()+e.slice(1)}}))
z(T)
var E=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=n
var a=r(T)
function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r){if(e.hasOwnProperty(t)){var n={}
var i=e[t]
var o=(0,a.default)(t)
var s=Object.keys(r)
for(var _=0;_<s.length;_++){var l=s[_]
if(l===t)for(var c=0;c<i.length;c++)n[i[c]+o]=r[t]
n[l]=r[l]}return n}return r}}))
z(E)
var M=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=a
function a(e,t,a,r,n){for(var i=0,o=e.length;i<o;++i){var s=e[i](t,a,r,n)
if(s)return s}}}))
z(M)
var L=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=r
function a(e,t){-1===e.indexOf(t)&&e.push(t)}function r(e,t){if(Array.isArray(t))for(var r=0,n=t.length;r<n;++r)a(e,t[r])
else a(e,t)}}))
z(L)
var P=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=a
function a(e){return e instanceof Object&&!Array.isArray(e)}}))
z(P)
var R=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=s
var a=o(E)
var r=o(M)
var n=o(L)
var i=o(P)
function o(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.prefixMap,o=e.plugins
return function e(s){for(var _ in s){var l=s[_]
if((0,i.default)(l))s[_]=e(l)
else if(Array.isArray(l)){var c=[]
for(var d=0,u=l.length;d<u;++d){var h=(0,r.default)(o,_,l[d],s,t);(0,n.default)(c,h||l[d])}c.length>0&&(s[_]=c)}else{var f=(0,r.default)(o,_,l,s,t)
f&&(s[_]=f)
s=(0,a.default)(t,_,s)}}return s}}}))
var I=z(R)
var N=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=a
function a(e,t){if("string"===typeof t&&"text"===t)return["-webkit-text","text"]}}))
var F=z(N)
var q=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=r
var a=/-webkit-|-moz-|-ms-/
function r(e){return"string"===typeof e&&a.test(e)}e.exports=t["default"]}))
z(q)
var B=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var a=r(q)
function r(e){return e&&e.__esModule?e:{default:e}}var n=["-webkit-","-moz-",""]
function i(e,t){if("string"===typeof t&&!(0,a.default)(t)&&t.indexOf("calc(")>-1)return n.map((function(e){return t.replace(/calc\(/g,e+"calc(")}))}}))
var D=z(B)
var W=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var a=r(q)
function r(e){return e&&e.__esModule?e:{default:e}}var n=["-webkit-",""]
function i(e,t){if("string"===typeof t&&!(0,a.default)(t)&&t.indexOf("cross-fade(")>-1)return n.map((function(e){return t.replace(/cross-fade\(/g,e+"cross-fade(")}))}}))
var H=z(W)
var U=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=n
var a=["-webkit-","-moz-",""]
var r={"zoom-in":true,"zoom-out":true,grab:true,grabbing:true}
function n(e,t){if("cursor"===e&&r.hasOwnProperty(t))return a.map((function(e){return e+t}))}}))
var K=z(U)
var V=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var a=r(q)
function r(e){return e&&e.__esModule?e:{default:e}}var n=["-webkit-",""]
function i(e,t){if("string"===typeof t&&!(0,a.default)(t)&&t.indexOf("filter(")>-1)return n.map((function(e){return t.replace(/filter\(/g,e+"filter(")}))}}))
var G=z(V)
var Z=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=r
var a={flex:["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex","flex"],"inline-flex":["-webkit-inline-box","-moz-inline-box","-ms-inline-flexbox","-webkit-inline-flex","inline-flex"]}
function r(e,t){if("display"===e&&a.hasOwnProperty(t))return a[t]}}))
var X=z(Z)
var Y=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=o
var a={"space-around":"distribute","space-between":"justify","flex-start":"start","flex-end":"end"}
var r={alignContent:"msFlexLinePack",alignSelf:"msFlexItemAlign",alignItems:"msFlexAlign",justifyContent:"msFlexPack",order:"msFlexOrder",flexGrow:"msFlexPositive",flexShrink:"msFlexNegative",flexBasis:"msFlexPreferredSize"}
var n={auto:"1 1 auto",inherit:"inherit",initial:"0 1 auto",none:"0 0 auto",unset:"unset"}
var i=/^\d+(\.\d+)?$/
function o(e,t,o){Object.prototype.hasOwnProperty.call(r,e)&&(o[r[e]]=a[t]||t)
if("flex"===e){if(Object.prototype.hasOwnProperty.call(n,t)){o.msFlex=n[t]
return}if(i.test(t)){o.msFlex=t+" 1 0%"
return}var s=t.split(/\s/)
switch(s.length){case 1:o.msFlex="1 1 "+t
return
case 2:i.test(s[1])?o.msFlex=s[0]+" "+s[1]+" 0%":o.msFlex=s[0]+" 1 "+s[1]
return
default:o.msFlex=t}}}}))
var Q=z(Y)
var J=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=n
var a={"space-around":"justify","space-between":"justify","flex-start":"start","flex-end":"end","wrap-reverse":"multiple",wrap:"multiple"}
var r={alignItems:"WebkitBoxAlign",justifyContent:"WebkitBoxPack",flexWrap:"WebkitBoxLines",flexGrow:"WebkitBoxFlex"}
function n(e,t,n){if("flexDirection"===e&&"string"===typeof t){t.indexOf("column")>-1?n.WebkitBoxOrient="vertical":n.WebkitBoxOrient="horizontal"
t.indexOf("reverse")>-1?n.WebkitBoxDirection="reverse":n.WebkitBoxDirection="normal"}r.hasOwnProperty(e)&&(n[r[e]]=a[t]||t)}}))
var $=z(J)
var ee=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=o
var a=r(q)
function r(e){return e&&e.__esModule?e:{default:e}}var n=["-webkit-","-moz-",""]
var i=/linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi
function o(e,t){if("string"===typeof t&&!(0,a.default)(t)&&i.test(t))return n.map((function(e){return t.replace(i,(function(t){return e+t}))}))}}))
var te=z(ee)
var ae=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
var a=function(){function e(e,t){var a=[]
var r=true
var n=false
var i=void 0
try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=true){a.push(o.value)
if(t&&a.length===t)break}}catch(e){n=true
i=e}finally{try{!r&&s["return"]&&s["return"]()}finally{if(n)throw i}}return a}return function(t,a){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,a)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()
t.default=s
function r(e){return"number"===typeof e&&!isNaN(e)}var n=["center","end","start","stretch"]
var i={"inline-grid":["-ms-inline-grid","inline-grid"],grid:["-ms-grid","grid"]}
var o={alignSelf:function(e,t){n.indexOf(e)>-1&&(t.msGridRowAlign=e)},gridColumn:function(e,t){if(r(e))t.msGridColumn=e
else{var n=e.split("/").map((function(e){return+e})),i=a(n,2),s=i[0],_=i[1]
o.gridColumnStart(s,t)
o.gridColumnEnd(_,t)}},gridColumnEnd:function(e,t){var a=t.msGridColumn
r(e)&&r(a)&&(t.msGridColumnSpan=e-a)},gridColumnStart:function(e,t){r(e)&&(t.msGridColumn=e)},gridRow:function(e,t){if(r(e))t.msGridRow=e
else{var n=e.split("/").map((function(e){return+e})),i=a(n,2),s=i[0],_=i[1]
o.gridRowStart(s,t)
o.gridRowEnd(_,t)}},gridRowEnd:function(e,t){var a=t.msGridRow
r(e)&&r(a)&&(t.msGridRowSpan=e-a)},gridRowStart:function(e,t){r(e)&&(t.msGridRow=e)},gridTemplateColumns:function(e,t){t.msGridColumns=e},gridTemplateRows:function(e,t){t.msGridRows=e},justifySelf:function(e,t){n.indexOf(e)>-1&&(t.msGridColumnAlign=e)}}
function s(e,t,a){if("display"===e&&t in i)return i[t]
if(e in o){var r=o[e]
r(t,a)}}}))
var re=z(ae)
var ne=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var a=r(q)
function r(e){return e&&e.__esModule?e:{default:e}}var n=["-webkit-",""]
function i(e,t){if("string"===typeof t&&!(0,a.default)(t)&&t.indexOf("image-set(")>-1)return n.map((function(e){return t.replace(/image-set\(/g,e+"image-set(")}))}}))
var ie=z(ne)
var oe=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=r
var a={marginBlockStart:["WebkitMarginBefore"],marginBlockEnd:["WebkitMarginAfter"],marginInlineStart:["WebkitMarginStart","MozMarginStart"],marginInlineEnd:["WebkitMarginEnd","MozMarginEnd"],paddingBlockStart:["WebkitPaddingBefore"],paddingBlockEnd:["WebkitPaddingAfter"],paddingInlineStart:["WebkitPaddingStart","MozPaddingStart"],paddingInlineEnd:["WebkitPaddingEnd","MozPaddingEnd"],borderBlockStart:["WebkitBorderBefore"],borderBlockStartColor:["WebkitBorderBeforeColor"],borderBlockStartStyle:["WebkitBorderBeforeStyle"],borderBlockStartWidth:["WebkitBorderBeforeWidth"],borderBlockEnd:["WebkitBorderAfter"],borderBlockEndColor:["WebkitBorderAfterColor"],borderBlockEndStyle:["WebkitBorderAfterStyle"],borderBlockEndWidth:["WebkitBorderAfterWidth"],borderInlineStart:["WebkitBorderStart","MozBorderStart"],borderInlineStartColor:["WebkitBorderStartColor","MozBorderStartColor"],borderInlineStartStyle:["WebkitBorderStartStyle","MozBorderStartStyle"],borderInlineStartWidth:["WebkitBorderStartWidth","MozBorderStartWidth"],borderInlineEnd:["WebkitBorderEnd","MozBorderEnd"],borderInlineEndColor:["WebkitBorderEndColor","MozBorderEndColor"],borderInlineEndStyle:["WebkitBorderEndStyle","MozBorderEndStyle"],borderInlineEndWidth:["WebkitBorderEndWidth","MozBorderEndWidth"]}
function r(e,t,r){if(Object.prototype.hasOwnProperty.call(a,e)){var n=a[e]
for(var i=0,o=n.length;i<o;++i)r[n[i]]=t}}}))
var se=z(oe)
var _e=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=a
function a(e,t){if("position"===e&&"sticky"===t)return["-webkit-sticky","sticky"]}}))
var le=z(_e)
var ce=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var a=["-webkit-","-moz-",""]
var r={maxHeight:true,maxWidth:true,width:true,height:true,columnWidth:true,minWidth:true,minHeight:true}
var n={"min-content":true,"max-content":true,"fill-available":true,"fit-content":true,"contain-floats":true}
function i(e,t){if(r.hasOwnProperty(e)&&n.hasOwnProperty(t))return a.map((function(e){return e+t}))}}))
var de=z(ce)
var ue=/[A-Z]/g
var he=/^ms-/
var fe={}
function be(e){return"-"+e.toLowerCase()}function me(e){if(fe.hasOwnProperty(e))return fe[e]
var t=e.replace(ue,be)
return fe[e]=he.test(t)?"-"+t:t}var pe=Object.freeze({default:me})
var ge=A(pe)
var ve=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=n
var a=r(ge)
function r(e){return e&&e.__esModule?e:{default:e}}function n(e){return(0,a.default)(e)}e.exports=t["default"]}))
z(ve)
var ke=C((function(e,t){Object.defineProperty(t,"__esModule",{value:true})
t.default=l
var a=i(ve)
var r=i(q)
var n=i(T)
function i(e){return e&&e.__esModule?e:{default:e}}var o={transition:true,transitionProperty:true,WebkitTransition:true,WebkitTransitionProperty:true,MozTransition:true,MozTransitionProperty:true}
var s={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-"}
function _(e,t){if((0,r.default)(e))return e
var n=e.split(/,(?![^()]*(?:\([^()]*\))?\))/g)
for(var i=0,o=n.length;i<o;++i){var _=n[i]
var l=[_]
for(var c in t){var d=(0,a.default)(c)
if(_.indexOf(d)>-1&&"order"!==d){var u=t[c]
for(var h=0,f=u.length;h<f;++h)l.unshift(_.replace(d,s[u[h]]+d))}}n[i]=l.join(",")}return n.join(",")}function l(e,t,a,r){if("string"===typeof t&&o.hasOwnProperty(e)){var i=_(t,r)
var s=i.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter((function(e){return!/-moz-|-ms-/.test(e)})).join(",")
if(e.indexOf("Webkit")>-1)return s
var l=i.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter((function(e){return!/-webkit-|-ms-/.test(e)})).join(",")
if(e.indexOf("Moz")>-1)return l
a["Webkit"+(0,n.default)(e)]=s
a["Moz"+(0,n.default)(e)]=l
return i}}}))
var ye=z(ke)
var we=["Webkit"]
var xe=["Moz"]
var je=["ms"]
var Oe=["Webkit","Moz"]
var Se=["Webkit","ms"]
var ze=["Webkit","Moz","ms"]
var Ce={plugins:[F,D,H,K,G,X,Q,$,te,re,ie,se,le,de,ye],prefixMap:{transform:Se,transformOrigin:Se,transformOriginX:Se,transformOriginY:Se,backfaceVisibility:we,perspective:we,perspectiveOrigin:we,transformStyle:we,transformOriginZ:we,animation:we,animationDelay:we,animationDirection:we,animationFillMode:we,animationDuration:we,animationIterationCount:we,animationName:we,animationPlayState:we,animationTimingFunction:we,appearance:Oe,userSelect:ze,fontKerning:we,textEmphasisPosition:we,textEmphasis:we,textEmphasisStyle:we,textEmphasisColor:we,boxDecorationBreak:we,clipPath:we,maskImage:we,maskMode:we,maskRepeat:we,maskPosition:we,maskClip:we,maskOrigin:we,maskSize:we,maskComposite:we,mask:we,maskBorderSource:we,maskBorderMode:we,maskBorderSlice:we,maskBorderWidth:we,maskBorderOutset:we,maskBorderRepeat:we,maskBorder:we,maskType:we,textDecorationStyle:Oe,textDecorationSkip:Oe,textDecorationLine:Oe,textDecorationColor:Oe,filter:we,fontFeatureSettings:Oe,breakAfter:ze,breakBefore:ze,breakInside:ze,columnCount:Oe,columnFill:Oe,columnGap:Oe,columnRule:Oe,columnRuleColor:Oe,columnRuleStyle:Oe,columnRuleWidth:Oe,columns:Oe,columnSpan:Oe,columnWidth:Oe,writingMode:Se,flex:Se,flexBasis:we,flexDirection:Se,flexGrow:we,flexFlow:Se,flexShrink:we,flexWrap:Se,alignContent:we,alignItems:we,alignSelf:we,justifyContent:we,order:we,transitionDelay:we,transitionDuration:we,transitionProperty:we,transitionTimingFunction:we,backdropFilter:we,scrollSnapType:Se,scrollSnapPointsX:Se,scrollSnapPointsY:Se,scrollSnapDestination:Se,scrollSnapCoordinate:Se,shapeImageThreshold:we,shapeImageMargin:we,shapeImageOutside:we,hyphens:ze,flowInto:Se,flowFrom:Se,regionFragment:Se,textOrientation:we,boxSizing:xe,textAlignLast:xe,tabSize:xe,wrapFlow:je,wrapThrough:je,wrapMargin:je,touchAction:je,textSizeAdjust:Se,borderImage:we,borderImageOutset:we,borderImageRepeat:we,borderImageSlice:we,borderImageSource:we,borderImageWidth:we}}
var Ae=I(Ce)
var Te=[function(e,t,a){if(":"!==e[0])return null
return a(t+e)},function(e,t,a){if("@"!==e[0])return null
var r=a(t)
return["".concat(e,"{").concat(r.join(""),"}")]}]
var Ee=function e(t,a,r,n,i){var o=new S
for(var s=0;s<a.length;s++)o.addStyleType(a[s])
var _=new S
var l=[]
o.forEach((function(a,o){var s=r.some((function(s){var _=s(o,t,(function(t){return e(t,[a],r,n,i)}))
if(null!=_){if(Array.isArray(_))l.push.apply(l,c(_))
else{console.warn("WARNING: Selector handlers should return an array of rules.Returning a string containing multiple rules is deprecated.",s)
l.push("@media all {".concat(_,"}"))}return true}}))
s||_.set(o,a,true)}))
var d=Re(t,_,n,i,r)
d&&l.unshift(d)
return l}
var Me=function(e,t,a){if(!t)return
var r=Object.keys(t)
for(var n=0;n<r.length;n++){var i=r[n]
e.has(i)&&e.set(i,t[i](e.get(i),a),false)}}
var Le=function(e,t,a){return"".concat(m(e),":").concat(a(e,t),";")}
var Pe=function(e,t){e[t]=true
return e}
var Re=function(e,t,a,r,n){Me(t,a,n)
var i=Object.keys(t.elements).reduce(Pe,Object.create(null))
var o=Ae(t.elements)
var s=Object.keys(o)
if(s.length!==t.keyOrder.length)for(var _=0;_<s.length;_++)if(!i[s[_]]){var l=void 0
l="W"===s[_][0]?s[_][6].toLowerCase()+s[_].slice(7):"o"===s[_][1]?s[_][3].toLowerCase()+s[_].slice(4):s[_][2].toLowerCase()+s[_].slice(3)
if(l&&i[l]){var c=t.keyOrder.indexOf(l)
t.keyOrder.splice(c,0,s[_])}else t.keyOrder.unshift(s[_])}var d=false===r?k:y
var u=[]
for(var h=0;h<t.keyOrder.length;h++){var f=t.keyOrder[h]
var b=o[f]
if(Array.isArray(b))for(var m=0;m<b.length;m++)u.push(Le(f,b[m],d))
else u.push(Le(f,b,d))}return u.length?"".concat(e,"{").concat(u.join(""),"}"):""}
var Ie=null
var Ne=function(e){if(null==Ie){Ie=document.querySelector("style[data-aphrodite]")
if(null==Ie){var t=document.head||document.getElementsByTagName("head")[0]
Ie=document.createElement("style")
Ie.type="text/css"
Ie.setAttribute("data-aphrodite","")
t.appendChild(Ie)}}var a=Ie.styleSheet||Ie.sheet
if(a.insertRule){var r=a.cssRules.length
e.forEach((function(e){try{a.insertRule(e,r)
r+=1}catch(e){}}))}else Ie.innerText=(Ie.innerText||"")+e.join("")}
var Fe={fontFamily:function e(t){if(Array.isArray(t)){var a={}
t.forEach((function(t){a[e(t)]=true}))
return Object.keys(a).join(",")}if("object"===s(t)){He(t.src,"@font-face",[t],false)
return'"'.concat(t.fontFamily,'"')}return t},animationName:function e(t,a){if(Array.isArray(t))return t.map((function(t){return e(t,a)})).join(",")
if("object"===s(t)){var r="keyframe_".concat(x(t))
var n="@keyframes ".concat(r,"{")
t instanceof S?t.forEach((function(e,t){n+=Ee(t,[e],a,Fe,false).join("")})):Object.keys(t).forEach((function(e){n+=Ee(e,[t[e]],a,Fe,false).join("")}))
n+="}"
We(r,[n])
return r}return t}}
var qe={}
var Be=[]
var De=false
var We=function(e,t){var a
if(qe[e])return
if(!De){if("undefined"===typeof document)throw new Error("Cannot automatically buffer without a document")
De=true
o()(Xe)}(a=Be).push.apply(a,c(t))
qe[e]=true}
var He=function(e,t,a,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[]
if(qe[e])return
var i=Ee(t,a,n,Fe,r)
We(e,i)}
var Ue=function(){Be=[]
qe={}
De=false
Ie=null}
var Ke=function(e){delete qe[e]}
var Ve=function(){if(De)throw new Error("Cannot buffer while already buffering")
De=true}
var Ge=function(){De=false
var e=Be
Be=[]
return e}
var Ze=function(){return Ge().join("")}
var Xe=function(){var e=Ge()
e.length>0&&Ne(e)}
var Ye=function(){return Object.keys(qe)}
var Qe=function(e){e.forEach((function(e){qe[e]=true}))}
var Je=function(e){return"_definition"in e&&"_name"in e&&"_len"in e}
var $e=function e(t,a,r,n){for(var i=0;i<t.length;i+=1)if(t[i])if(Array.isArray(t[i]))n+=e(t[i],a,r,n)
else{if(!Je(t[i]))throw new Error("Invalid Style Definition: Styles should be defined using the StyleSheet.create method.")
a.push(t[i]._name)
r.push(t[i]._definition)
n+=t[i]._len}return n}
var et=function(e,t,a){var r=[]
var n=[]
var i=$e(t,r,n,0)
if(0===r.length)return""
var o
o=1===r.length?"_".concat(r[0]):"_".concat(w(r.join())).concat((i%36).toString(36))
He(o,".".concat(o),n,e,a)
return o}
var tt=function(e,t){return"".concat(t,"_").concat(w(e))}
var at=function(){return w}
var rt=at()
var nt={create:function(e){var t={}
var a=Object.keys(e)
for(var r=0;r<a.length;r+=1){var n=a[r]
var i=e[n]
var o=JSON.stringify(i)
t[n]={_len:o.length,_name:rt(o,n),_definition:i}}return t},rehydrate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
Qe(e)}}
var it="undefined"!==typeof window?null:{renderStatic:function(e){Ue()
Ve()
var t=e()
var a=Ze()
return{html:t,css:{content:a,renderedClassNames:Ye()}}}}
var ot=null
function st(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Te
return{StyleSheet:l({},nt,{extend:function(a){var r=a.map((function(e){return e.selectorHandler})).filter((function(e){return e}))
return st(e,t.concat(r))}}),StyleSheetServer:it,StyleSheetTestUtils:ot,minify:function(e){rt=e?w:tt},css:function(){for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n]
return et(e,r,t)},flushToStyleTag:Xe,injectAndGetClassName:et,defaultSelectorHandlers:Te,reset:Ue,resetInjectedStyle:Ke}}var _t=true
var lt=st(_t)
var ct=lt.StyleSheet,dt=lt.StyleSheetServer,ut=lt.StyleSheetTestUtils,ht=lt.css,ft=lt.minify,bt=lt.flushToStyleTag,mt=lt.injectAndGetClassName,pt=lt.defaultSelectorHandlers,gt=lt.reset,vt=lt.resetInjectedStyle},"/FUP":function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.ReactCSS=t.loop=t.handleActive=t.handleHover=t.hover=void 0
var r=a("W3HW")
var n=b(r)
var i=a("lreK")
var o=b(i)
var s=a("KfSR")
var _=b(s)
var l=a("VYtm")
var c=b(l)
var d=a("XQvf")
var u=b(d)
var h=a("B5Mt")
var f=b(h)
function b(e){return e&&e.__esModule?e:{default:e}}t.hover=c.default
t.handleHover=c.default
t.handleActive=u.default
t.loop=f.default
var m=t.ReactCSS=function(e){for(var t=arguments.length,a=Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r]
var i=(0,n.default)(a)
var s=(0,o.default)(e,i)
return(0,_.default)(s)}
t.default=m},"3WF5":function(e,t,a){var r=a("eUgh"),n=a("ut/Y"),i=a("l9OW"),o=a("Z0cm")
function s(e,t){var a=o(e)?r:i
return a(e,n(t,3))}e.exports=s},"9kyW":function(e,t,a){"use strict"
function r(e){var t=5381,a=e.length
while(a)t=33*t^e.charCodeAt(--a)
return t>>>0}e.exports=r},Ag8Z:function(e,t,a){var r=a("JC6p"),n=a("EwQA")
function i(e,t){return e&&r(e,n(t))}e.exports=i},AnK5:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.EditableInput=void 0
var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a]
r.enumerable=r.enumerable||false
r.configurable=true
"value"in r&&(r.writable=true)
Object.defineProperty(e,r.key,r)}}return function(t,a,r){a&&e(t.prototype,a)
r&&e(t,r)
return t}}()
var n=a("q1tI")
var i=_(n)
var o=a("/FUP")
var s=_(o)
function _(e){return e&&e.__esModule?e:{default:e}}function l(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true}):e[t]=a
return e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=1
var f=38
var b=40
var m=[f,b]
var p=function(e){return m.indexOf(e)>-1}
var g=function(e){return Number(String(e).replace(/%/g,""))}
var v=t.EditableInput=function(e){u(t,e)
function t(e){c(this,t)
var a=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))
a.handleBlur=function(){a.state.blurValue&&a.setState({value:a.state.blurValue,blurValue:null})}
a.handleChange=function(e){a.setUpdatedValue(e.target.value,e)}
a.handleKeyDown=function(e){var t=g(e.target.value)
if(!isNaN(t)&&p(e.keyCode)){var r=a.getArrowOffset()
var n=e.keyCode===f?t+r:t-r
a.setUpdatedValue(n,e)}}
a.handleDrag=function(e){if(a.props.dragLabel){var t=Math.round(a.props.value+e.movementX)
t>=0&&t<=a.props.dragMax&&a.props.onChange&&a.props.onChange(a.getValueObjectWithLabel(t),e)}}
a.handleMouseDown=function(e){if(a.props.dragLabel){e.preventDefault()
a.handleDrag(e)
window.addEventListener("mousemove",a.handleDrag)
window.addEventListener("mouseup",a.handleMouseUp)}}
a.handleMouseUp=function(){a.unbindEventListeners()}
a.unbindEventListeners=function(){window.removeEventListener("mousemove",a.handleDrag)
window.removeEventListener("mouseup",a.handleMouseUp)}
a.state={value:String(e.value).toUpperCase(),blurValue:String(e.value).toUpperCase()}
return a}r(t,[{key:"componentDidUpdate",value:function(e,t){this.props.value===this.state.value||e.value===this.props.value&&t.value===this.state.value||(this.input===document.activeElement?this.setState({blurValue:String(this.props.value).toUpperCase()}):this.setState({value:String(this.props.value).toUpperCase(),blurValue:!this.state.blurValue&&String(this.props.value).toUpperCase()}))}},{key:"componentWillUnmount",value:function(){this.unbindEventListeners()}},{key:"getValueObjectWithLabel",value:function(e){return l({},this.props.label,e)}},{key:"getArrowOffset",value:function(){return this.props.arrowOffset||h}},{key:"setUpdatedValue",value:function(e,t){var a=this.props.label?this.getValueObjectWithLabel(e):e
this.props.onChange&&this.props.onChange(a,t)
this.setState({value:e})}},{key:"render",value:function(){var e=this
var t=(0,s.default)({default:{wrap:{position:"relative"}},"user-override":{wrap:this.props.style&&this.props.style.wrap?this.props.style.wrap:{},input:this.props.style&&this.props.style.input?this.props.style.input:{},label:this.props.style&&this.props.style.label?this.props.style.label:{}},"dragLabel-true":{label:{cursor:"ew-resize"}}},{"user-override":true},this.props)
return i.default.createElement("div",{style:t.wrap},i.default.createElement("input",{style:t.input,ref:function(t){return e.input=t},value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,onBlur:this.handleBlur,placeholder:this.props.placeholder,spellCheck:"false"}),this.props.label&&!this.props.hideLabel?i.default.createElement("span",{style:t.label,onMouseDown:this.handleMouseDown},this.props.label):null)}}])
return t}(n.PureComponent||n.Component)
t.default=v},B5Mt:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
var r=function(e,t){var a={}
var r=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
a[e]=t}
0===e&&r("first-child")
e===t-1&&r("last-child");(0===e||e%2===0)&&r("even")
1===Math.abs(e%2)&&r("odd")
r("nth-child",e)
return a}
t.default=r},BKMn:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.PhotoshopPointerCircle=void 0
var r=a("q1tI")
var n=s(r)
var i=a("/FUP")
var o=s(i)
function s(e){return e&&e.__esModule?e:{default:e}}var _=t.PhotoshopPointerCircle=function(e){var t=e.hsl
var a=(0,o.default)({default:{picker:{width:"12px",height:"12px",borderRadius:"6px",boxShadow:"inset 0 0 0 1px #fff",transform:"translate(-6px, -6px)"}},"black-outline":{picker:{boxShadow:"inset 0 0 0 1px #000"}}},{"black-outline":t.l>.5})
return n.default.createElement("div",{style:a.picker})}
t.default=_},Ba7A:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.Swatch=void 0
var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}
var n=a("q1tI")
var i=d(n)
var o=a("/FUP")
var s=d(o)
var _=a("japM")
var l=a("Nq3d")
var c=d(l)
function d(e){return e&&e.__esModule?e:{default:e}}var u=13
var h=t.Swatch=function(e){var t=e.color,a=e.style,n=e.onClick,o=void 0===n?function(){}:n,_=e.onHover,l=e.title,d=void 0===l?t:l,h=e.children,f=e.focus,b=e.focusStyle,m=void 0===b?{}:b
var p="transparent"===t
var g=(0,s.default)({default:{swatch:r({background:t,height:"100%",width:"100%",cursor:"pointer",position:"relative",outline:"none"},a,f?m:{})}})
var v=function(e){return o(t,e)}
var k=function(e){return e.keyCode===u&&o(t,e)}
var y=function(e){return _(t,e)}
var w={}
_&&(w.onMouseOver=y)
return i.default.createElement("div",r({style:g.swatch,onClick:v,title:d,tabIndex:0,onKeyDown:k},w),h,p&&i.default.createElement(c.default,{borderRadius:g.swatch.borderRadius,boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.1)"}))}
t.default=(0,_.handleFocus)(h)},BkRI:function(e,t,a){var r=a("OBhP")
var n=1,i=4
function o(e){return r(e,n|i)}e.exports=o},CpOe:function(e,t,a){"use strict"
var r=/[{}#]+/g
var n=/[{}\s]+/
var i=/[{}]+/g
var o="'"
var s="''"
var _="#"
e.exports=function(e){return l(e,null)}
function l(e,t){return e.map((function(e){if("string"===typeof e)return c(e,t)
return d(e,t)})).join("")}function c(e,t){var a="plural"===t?r:i
return e.replace(/'/g,s).replace(a,"'$&'")}function d(e,t){if(e[0]===_)return _
if("number"===typeof e[2])return f(e)
return u(e)}function u(e){var t=e[0]
var a=e[1]
var r=e[2]
var n="object"===typeof r?","+b(r,a)+"\n":r?", "+h(r)+" ":" "
return"{ "+t+(a?", "+a:"")+n+"}"}function h(e){if(!n.test(e))return e.replace(/'/g,s)
return o+e.replace(/'/g,s)+o}function f(e){var t=e[0]
var a=e[1]
var r=e[2]
var n=e[3]
return"{ "+t+", "+a+","+(r?" offset:"+r:"")+b(n,a)+"\n}"}function b(e,t){var a=Object.keys(e)
var r=a.reduce((function(e,t){return Math.max(e,t.length)}),0)
return a.map((function(a){return"\n  "+m(a,r)+" {"+l(e[a],t)+"}"})).join("")}function m(e,t){var a=""
for(var r=e.length;r<t;++r)a+=" "
return a+e}},DzJC:function(e,t,a){var r=a("sEfC"),n=a("GoyQ")
var i="Expected a function"
function o(e,t,a){var o=true,s=true
if("function"!=typeof e)throw new TypeError(i)
if(n(a)){o="leading"in a?!!a.leading:o
s="trailing"in a?!!a.trailing:s}return r(e,t,{leading:o,maxWait:t,trailing:s})}e.exports=o},EwQA:function(e,t,a){var r=a("zZ0H")
function n(e){return"function"==typeof e?e:r}e.exports=n},FeGr:function(e,t,a){"use strict";(function(t){e.exports=a
function a(e){if(!r.length){n()
true}r[r.length]=e}var r=[]
var n
var i=0
var o=1024
function s(){while(i<r.length){var e=i
i+=1
r[e].call()
if(i>o){for(var t=0,a=r.length-i;t<a;t++)r[t]=r[t+i]
r.length-=i
i=0}}r.length=0
i=0
false}var _="undefined"!==typeof t?t:self
var l=_.MutationObserver||_.WebKitMutationObserver
n="function"===typeof l?c(s):d(s)
a.requestFlush=n
function c(e){var t=1
var a=new l(e)
var r=document.createTextNode("")
a.observe(r,{characterData:true})
return function(){t=-t
r.data=t}}function d(e){return function(){var t=setTimeout(r,0)
var a=setInterval(r,50)
function r(){clearTimeout(t)
clearInterval(a)
e()}}}a.makeRequestCallFromTimer=d}).call(this,a("yLpj"))},FkO2:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
var r=t.type="@@redux-batch-middleware/BATCH"
t.batch=function(e){var t=e.dispatch
return function(e){return function(a){Array.isArray(a)?t({type:r,payload:a}):e(a)}}}
t.batching=function(e){return function t(a,n){return n.type===r?n.payload.reduce(t,a):e(a,n)}}},GEYT:function(e,t,a){var r=a("xEkU"),n="complete",i="canceled",o="skipped"
function s(e,t,a){if(h(e))e.scrollTo(t,a)
else{e.scrollLeft=t
e.scrollTop=a}}function _(e,t,a){var r,n,i,o,s,_=e.getBoundingClientRect(),l=a&&null!=a.left?a.left:.5,c=a&&null!=a.top?a.top:.5,d=l,u=c
if(h(t)){n=_.left+window.scrollX-window.innerWidth*d+Math.min(_.width,window.innerWidth)*d
i=_.top+window.scrollY-window.innerHeight*u+Math.min(_.height,window.innerHeight)*u
n=Math.max(Math.min(n,document.body.scrollWidth-window.innerWidth*d),0)
i=Math.max(Math.min(i,document.body.scrollHeight-window.innerHeight*u),0)
o=n-window.scrollX
s=i-window.scrollY}else{r=t.getBoundingClientRect()
var f=_.top-(r.top-t.scrollTop)
var b=_.left-(r.left-t.scrollLeft)
n=b+_.width*d-t.clientWidth*d
i=f+_.height*u-t.clientHeight*u
n=Math.max(Math.min(n,t.scrollWidth-t.clientWidth),0)
i=Math.max(Math.min(i,t.scrollHeight-t.clientHeight),0)
o=n-t.scrollLeft
s=i-t.scrollTop}return{x:n,y:i,differenceX:o,differenceY:s}}function l(e){r((function(){var t=e._scrollSettings
if(!t)return
var a=_(t.target,e,t.align),r=Date.now()-t.startTime,i=Math.min(1/t.time*r,1)
if(r>t.time+20||Math.abs(a.differenceY)<=1&&Math.abs(a.differenceX)<=1){s(e,a.x,a.y)
e._scrollSettings=null
return t.end(n)}var o=1-t.ease(i)
s(e,a.x-a.differenceX*o,a.y-a.differenceY*o)
l(e)}))}function c(e){return h(e)?{top:0,left:0,right:window.innerWidth,bottom:window.innerHeight}:e.getBoundingClientRect?e.getBoundingClientRect():null}function d(e,t){var a=c(e)
var r=c(t)
return a&&r&&a.bottom<=r.bottom&&a.right<=r.right&&a.top>=r.top&&a.left>=r.left}function u(e,t,a,r){var n,s=!t._scrollSettings,_=t._scrollSettings,c=Date.now()
_&&_.end(i)
function u(e,a){t._scrollSettings=null
r(e)
t.removeEventListener("touchstart",n)}t._scrollSettings={startTime:_?_.startTime:Date.now(),target:e,time:a.time+(_?c-_.startTime:0),ease:a.ease,align:a.align,end:u}
n=u.bind(null,i)
t.addEventListener("touchstart",n)
if(s&&!d(e,t)){l(t)
return true}u(o)
return false}function h(e){return e===window}function f(e,t,a){if(!e)return
if("function"===typeof t){a=t
t=null}t||(t={})
t.time=isNaN(t.time)?1e3:t.time
t.ease=t.ease||function(e){return 1-Math.pow(1-e,e/2)}
var r=e.parentElement,n={traversed:0,validated:0,scrolled:0}
function i(e){n.validated-1||a&&a(e)}while(r){if((!t.validTarget||t.validTarget(r,n))&&(h(r)||(r.scrollHeight!==r.clientHeight||r.scrollWidth!==r.clientWidth)&&"hidden"!==getComputedStyle(r).overflow)){n.validated++
n.scrolled+=u(e,r,t,i)?1:0}n.traversed++
r=r.parentElement
if(!r)return
"BODY"===r.tagName&&(r=window)}}e.exports.scrollIntoView=f},HlQe:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.Hue=void 0
var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a]
r.enumerable=r.enumerable||false
r.configurable=true
"value"in r&&(r.writable=true)
Object.defineProperty(e,r.key,r)}}return function(t,a,r){a&&e(t.prototype,a)
r&&e(t,r)
return t}}()
var n=a("q1tI")
var i=d(n)
var o=a("/FUP")
var s=d(o)
var _=a("srvI")
var l=c(_)
function c(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])
t.default=e
return t}function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b=t.Hue=function(e){f(t,e)
function t(){var e
var a,r,n
u(this,t)
for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s]
return n=(a=(r=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r),r.handleChange=function(e){var t=l.calculateChange(e,r.props.direction,r.props.hsl,r.container)
t&&"function"===typeof r.props.onChange&&r.props.onChange(t,e)},r.handleMouseDown=function(e){r.handleChange(e)
window.addEventListener("mousemove",r.handleChange)
window.addEventListener("mouseup",r.handleMouseUp)},r.handleMouseUp=function(){r.unbindEventListeners()},a),h(r,n)}r(t,[{key:"componentWillUnmount",value:function(){this.unbindEventListeners()}},{key:"unbindEventListeners",value:function(){window.removeEventListener("mousemove",this.handleChange)
window.removeEventListener("mouseup",this.handleMouseUp)}},{key:"render",value:function(){var e=this
var t=this.props.direction,a=void 0===t?"horizontal":t
var r=(0,s.default)({default:{hue:{absolute:"0px 0px 0px 0px",borderRadius:this.props.radius,boxShadow:this.props.shadow},container:{padding:"0 2px",position:"relative",height:"100%",borderRadius:this.props.radius},pointer:{position:"absolute",left:100*this.props.hsl.h/360+"%"},slider:{marginTop:"1px",width:"4px",borderRadius:"1px",height:"8px",boxShadow:"0 0 2px rgba(0, 0, 0, .6)",background:"#fff",transform:"translateX(-2px)"}},vertical:{pointer:{left:"0px",top:-100*this.props.hsl.h/360+100+"%"}}},{vertical:"vertical"===a})
return i.default.createElement("div",{style:r.hue},i.default.createElement("div",{className:"hue-"+a,style:r.container,ref:function(t){return e.container=t},onMouseDown:this.handleMouseDown,onTouchMove:this.handleChange,onTouchStart:this.handleChange},i.default.createElement("style",null,"\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          "),i.default.createElement("div",{style:r.pointer},this.props.pointer?i.default.createElement(this.props.pointer,this.props):i.default.createElement("div",{style:r.slider}))))}}])
return t}(n.PureComponent||n.Component)
t.default=b},IDhZ:function(e,t,a){"use strict"
var r=a("MgzW"),n=a("q1tI")
function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])
return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o="function"===typeof Symbol&&Symbol.for,s=o?Symbol.for("react.portal"):60106,_=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,d=o?Symbol.for("react.provider"):60109,u=o?Symbol.for("react.context"):60110,h=o?Symbol.for("react.concurrent_mode"):60111,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.suspense_list"):60120,p=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116,v=o?Symbol.for("react.block"):60121,k=o?Symbol.for("react.fundamental"):60117,y=o?Symbol.for("react.scope"):60119
function w(e){if(-1===e._status){e._status=0
var t=e._ctor
t=t()
e._result=t
t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}}function x(e){if(null==e)return null
if("function"===typeof e)return e.displayName||e.name||null
if("string"===typeof e)return e
switch(e){case _:return"Fragment"
case s:return"Portal"
case c:return"Profiler"
case l:return"StrictMode"
case b:return"Suspense"
case m:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case u:return"Context.Consumer"
case d:return"Context.Provider"
case f:var t=e.render
t=t.displayName||t.name||""
return e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef")
case p:return x(e.type)
case v:return x(e.render)
case g:if(e=1===e._status?e._result:null)return x(e)}return null}var j=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
j.hasOwnProperty("ReactCurrentDispatcher")||(j.ReactCurrentDispatcher={current:null})
j.hasOwnProperty("ReactCurrentBatchConfig")||(j.ReactCurrentBatchConfig={suspense:null})
var O={}
function S(e,t){for(var a=0|e._threadCount;a<=t;a++)e[a]=e._currentValue2,e._threadCount=a+1}function z(e,t,a,r){if(r&&(r=e.contextType,"object"===typeof r&&null!==r))return S(r,a),r[a]
if(e=e.contextTypes){a={}
for(var n in e)a[n]=t[n]
t=a}else t=O
return t}for(var C=new Uint16Array(16),A=0;15>A;A++)C[A]=A+1
C[15]=0
var T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E=Object.prototype.hasOwnProperty,M={},L={}
function P(e){if(E.call(L,e))return!0
if(E.call(M,e))return!1
if(T.test(e))return L[e]=!0
M[e]=!0
return!1}function R(e,t,a,r){if(null!==a&&0===a.type)return!1
switch(typeof t){case"function":case"symbol":return!0
case"boolean":if(r)return!1
if(null!==a)return!a.acceptsBooleans
e=e.toLowerCase().slice(0,5)
return"data-"!==e&&"aria-"!==e
default:return!1}}function I(e,t,a,r){if(null===t||"undefined"===typeof t||R(e,t,a,r))return!0
if(r)return!1
if(null!==a)switch(a.type){case 3:return!t
case 4:return!1===t
case 5:return isNaN(t)
case 6:return isNaN(t)||1>t}return!1}function N(e,t,a,r,n,i){this.acceptsBooleans=2===t||3===t||4===t
this.attributeName=r
this.attributeNamespace=n
this.mustUseProperty=a
this.propertyName=e
this.type=t
this.sanitizeURL=i}var F={}
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){F[e]=new N(e,0,!1,e,null,!1)}));[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0]
F[t]=new N(t,1,!1,e[1],null,!1)}));["contentEditable","draggable","spellCheck","value"].forEach((function(e){F[e]=new N(e,2,!1,e.toLowerCase(),null,!1)}));["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){F[e]=new N(e,2,!1,e,null,!1)}))
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){F[e]=new N(e,3,!1,e.toLowerCase(),null,!1)}));["checked","multiple","muted","selected"].forEach((function(e){F[e]=new N(e,3,!0,e,null,!1)}));["capture","download"].forEach((function(e){F[e]=new N(e,4,!1,e,null,!1)}));["cols","rows","size","span"].forEach((function(e){F[e]=new N(e,6,!1,e,null,!1)}));["rowSpan","start"].forEach((function(e){F[e]=new N(e,5,!1,e.toLowerCase(),null,!1)}))
var q=/[\-:]([a-z])/g
function B(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(q,B)
F[t]=new N(t,1,!1,e,null,!1)}))
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(q,B)
F[t]=new N(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)}));["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(q,B)
F[t]=new N(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)}));["tabIndex","crossOrigin"].forEach((function(e){F[e]=new N(e,1,!1,e.toLowerCase(),null,!1)}))
F.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach((function(e){F[e]=new N(e,1,!1,e.toLowerCase(),null,!0)}))
var D=/["'&<>]/
function W(e){if("boolean"===typeof e||"number"===typeof e)return""+e
e=""+e
var t=D.exec(e)
if(t){var a,r="",n=0
for(a=t.index;a<e.length;a++){switch(e.charCodeAt(a)){case 34:t="&quot;"
break
case 38:t="&amp;"
break
case 39:t="&#x27;"
break
case 60:t="&lt;"
break
case 62:t="&gt;"
break
default:continue}n!==a&&(r+=e.substring(n,a))
n=a+1
r+=t}e=n!==a?r+e.substring(n,a):r}return e}function H(e,t){var a=F.hasOwnProperty(e)?F[e]:null
var r;(r="style"!==e)&&(r=null!==a?0===a.type:2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1]))
if(r||I(e,t,a,!1))return""
if(null!==a){e=a.attributeName
r=a.type
if(3===r||4===r&&!0===t)return e+'=""'
a.sanitizeURL&&(t=""+t)
return e+'="'+W(t)+'"'}return P(e)?e+'="'+W(t)+'"':""}function U(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t}var K="function"===typeof Object.is?Object.is:U,V=null,G=null,Z=null,X=!1,Y=!1,Q=null,J=0
function $(){if(null===V)throw Error(i(321))
return V}function ee(){if(0<J)throw Error(i(312))
return{memoizedState:null,queue:null,next:null}}function te(){null===Z?null===G?(X=!1,G=Z=ee()):(X=!0,Z=G):null===Z.next?(X=!1,Z=Z.next=ee()):(X=!0,Z=Z.next)
return Z}function ae(e,t,a,r){for(;Y;)Y=!1,J+=1,Z=null,a=e(t,r)
G=V=null
J=0
Z=Q=null
return a}function re(e,t){return"function"===typeof t?t(e):t}function ne(e,t,a){V=$()
Z=te()
if(X){var r=Z.queue
t=r.dispatch
if(null!==Q&&(a=Q.get(r),void 0!==a)){Q.delete(r)
r=Z.memoizedState
do{r=e(r,a.action),a=a.next}while(null!==a)
Z.memoizedState=r
return[r,t]}return[Z.memoizedState,t]}e=e===re?"function"===typeof t?t():t:void 0!==a?a(t):t
Z.memoizedState=e
e=Z.queue={last:null,dispatch:null}
e=e.dispatch=ie.bind(null,V,e)
return[Z.memoizedState,e]}function ie(e,t,a){if(!(25>J))throw Error(i(301))
if(e===V)if(Y=!0,e={action:a,next:null},null===Q&&(Q=new Map),a=Q.get(t),void 0===a)Q.set(t,e)
else{for(t=a;null!==t.next;)t=t.next
t.next=e}}function oe(){}var se=0,_e={readContext:function(e){var t=se
S(e,t)
return e[t]},useContext:function(e){$()
var t=se
S(e,t)
return e[t]},useMemo:function(e,t){V=$()
Z=te()
t=void 0===t?null:t
if(null!==Z){var a=Z.memoizedState
if(null!==a&&null!==t){e:{var r=a[1]
if(null===r)r=!1
else{for(var n=0;n<r.length&&n<t.length;n++)if(!K(t[n],r[n])){r=!1
break e}r=!0}}if(r)return a[0]}}e=e()
Z.memoizedState=[e,t]
return e},useReducer:ne,useRef:function(e){V=$()
Z=te()
var t=Z.memoizedState
return null===t?(e={current:e},Z.memoizedState=e):t},useState:function(e){return ne(re,e)},useLayoutEffect:function(){},useCallback:function(e){return e},useImperativeHandle:oe,useEffect:oe,useDebugValue:oe,useResponder:function(e,t){return{props:t,responder:e}},useDeferredValue:function(e){$()
return e},useTransition:function(){$()
return[function(e){e()},!1]}},le={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"}
function ce(e){switch(e){case"svg":return"http://www.w3.org/2000/svg"
case"math":return"http://www.w3.org/1998/Math/MathML"
default:return"http://www.w3.org/1999/xhtml"}}var de={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},ue=r({menuitem:!0},de),he={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fe=["Webkit","ms","Moz","O"]
Object.keys(he).forEach((function(e){fe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1)
he[t]=he[e]}))}))
var be=/([A-Z])/g,me=/^ms-/,pe=n.Children.toArray,ge=j.ReactCurrentDispatcher,ve={listing:!0,pre:!0,textarea:!0},ke=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,ye={},we={}
function xe(e){if(void 0===e||null===e)return e
var t=""
n.Children.forEach(e,(function(e){null!=e&&(t+=e)}))
return t}var je=Object.prototype.hasOwnProperty,Oe={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null}
function Se(e,t){if(void 0===e)throw Error(i(152,x(t)||"Component"))}function ze(e,t,a){function o(n,o){var s=o.prototype&&o.prototype.isReactComponent,_=z(o,t,a,s),l=[],c=!1,d={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===l)return null},enqueueReplaceState:function(e,t){c=!0
l=[t]},enqueueSetState:function(e,t){if(null===l)return null
l.push(t)}}
if(s){if(s=new o(n.props,_,d),"function"===typeof o.getDerivedStateFromProps){var u=o.getDerivedStateFromProps.call(null,n.props,s.state)
null!=u&&(s.state=r({},s.state,u))}}else if(V={},s=o(n.props,_,d),s=ae(o,n.props,s,_),null==s||null==s.render){e=s
Se(e,o)
return}s.props=n.props
s.context=_
s.updater=d
d=s.state
void 0===d&&(s.state=d=null)
if("function"===typeof s.UNSAFE_componentWillMount||"function"===typeof s.componentWillMount)if("function"===typeof s.componentWillMount&&"function"!==typeof o.getDerivedStateFromProps&&s.componentWillMount(),"function"===typeof s.UNSAFE_componentWillMount&&"function"!==typeof o.getDerivedStateFromProps&&s.UNSAFE_componentWillMount(),l.length){d=l
var h=c
l=null
c=!1
if(h&&1===d.length)s.state=d[0]
else{u=h?d[0]:s.state
var f=!0
for(h=h?1:0;h<d.length;h++){var b=d[h]
b="function"===typeof b?b.call(s,u,n.props,_):b
null!=b&&(f?(f=!1,u=r({},u,b)):r(u,b))}s.state=u}}else l=null
e=s.render()
Se(e,o)
if("function"===typeof s.getChildContext&&(n=o.childContextTypes,"object"===typeof n)){var m=s.getChildContext()
for(var p in m)if(!(p in n))throw Error(i(108,x(o)||"Unknown",p))}m&&(t=r({},t,m))}for(;n.isValidElement(e);){var s=e,_=s.type
if("function"!==typeof _)break
o(s,_)}return{child:e,context:t}}var Ce=function(){function e(e,t){n.isValidElement(e)?e.type!==_?e=[e]:(e=e.props.children,e=n.isValidElement(e)?[e]:pe(e)):e=pe(e)
e={type:null,domNamespace:le.html,children:e,childIndex:0,context:O,footer:""}
var a=C[0]
if(0===a){var r=C
a=r.length
var o=2*a
if(!(65536>=o))throw Error(i(304))
var s=new Uint16Array(o)
s.set(r)
C=s
C[0]=a+1
for(r=a;r<o-1;r++)C[r]=r+1
C[o-1]=0}else C[0]=C[a]
this.threadID=a
this.stack=[e]
this.exhausted=!1
this.currentSelectValue=null
this.previousWasTextNode=!1
this.makeStaticMarkup=t
this.suspenseDepth=0
this.contextIndex=-1
this.contextStack=[]
this.contextValueStack=[]}var t=e.prototype
t.destroy=function(){if(!this.exhausted){this.exhausted=!0
this.clearProviders()
var e=this.threadID
C[e]=C[0]
C[0]=e}}
t.pushProvider=function(e){var t=++this.contextIndex,a=e.type._context,r=this.threadID
S(a,r)
var n=a[r]
this.contextStack[t]=a
this.contextValueStack[t]=n
a[r]=e.props.value}
t.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],a=this.contextValueStack[e]
this.contextStack[e]=null
this.contextValueStack[e]=null
this.contextIndex--
t[this.threadID]=a}
t.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]}
t.read=function(e){if(this.exhausted)return null
var t=se
se=this.threadID
var a=ge.current
ge.current=_e
try{for(var r=[""],n=!1;r[0].length<e;){if(0===this.stack.length){this.exhausted=!0
var o=this.threadID
C[o]=C[0]
C[0]=o
break}var s=this.stack[this.stack.length-1]
if(n||s.childIndex>=s.children.length){var _=s.footer
""!==_&&(this.previousWasTextNode=!1)
this.stack.pop()
if("select"===s.type)this.currentSelectValue=null
else if(null!=s.type&&null!=s.type.type&&s.type.type.$$typeof===d)this.popProvider(s.type)
else if(s.type===b){this.suspenseDepth--
var l=r.pop()
if(n){n=!1
var c=s.fallbackFrame
if(!c)throw Error(i(303))
this.stack.push(c)
r[this.suspenseDepth]+="\x3c!--$!--\x3e"
continue}r[this.suspenseDepth]+=l}r[this.suspenseDepth]+=_}else{var u=s.children[s.childIndex++],h=""
try{h+=this.render(u,s.context,s.domNamespace)}catch(e){if(null!=e&&"function"===typeof e.then)throw Error(i(294))
throw e}r.length<=this.suspenseDepth&&r.push("")
r[this.suspenseDepth]+=h}}return r[0]}finally{ge.current=a,se=t}}
t.render=function(e,t,a){if("string"===typeof e||"number"===typeof e){a=""+e
if(""===a)return""
if(this.makeStaticMarkup)return W(a)
if(this.previousWasTextNode)return"\x3c!-- --\x3e"+W(a)
this.previousWasTextNode=!0
return W(a)}t=ze(e,t,this.threadID)
e=t.child
t=t.context
if(null===e||!1===e)return""
if(!n.isValidElement(e)){if(null!=e&&null!=e.$$typeof){a=e.$$typeof
if(a===s)throw Error(i(257))
throw Error(i(258,a.toString()))}e=pe(e)
this.stack.push({type:null,domNamespace:a,children:e,childIndex:0,context:t,footer:""})
return""}var o=e.type
if("string"===typeof o)return this.renderDOM(e,t,a)
switch(o){case l:case h:case c:case m:case _:return e=pe(e.props.children),this.stack.push({type:null,domNamespace:a,children:e,childIndex:0,context:t,footer:""}),""
case b:throw Error(i(294))}if("object"===typeof o&&null!==o)switch(o.$$typeof){case f:V={}
var v=o.render(e.props,e.ref)
v=ae(o.render,e.props,v,e.ref)
v=pe(v)
this.stack.push({type:null,domNamespace:a,children:v,childIndex:0,context:t,footer:""})
return""
case p:return e=[n.createElement(o.type,r({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:a,children:e,childIndex:0,context:t,footer:""}),""
case d:return o=pe(e.props.children),a={type:e,domNamespace:a,children:o,childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(a),""
case u:o=e.type
v=e.props
var x=this.threadID
S(o,x)
o=pe(v.children(o[x]))
this.stack.push({type:e,domNamespace:a,children:o,childIndex:0,context:t,footer:""})
return""
case k:throw Error(i(338))
case g:switch(o=e.type,w(o),o._status){case 1:return e=[n.createElement(o._result,r({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:a,children:e,childIndex:0,context:t,footer:""}),""
case 2:throw o._result
default:throw Error(i(295))}case y:throw Error(i(343))}throw Error(i(130,null==o?o:typeof o,""))}
t.renderDOM=function(e,t,a){var n=e.type.toLowerCase()
a===le.html&&ce(n)
if(!ye.hasOwnProperty(n)){if(!ke.test(n))throw Error(i(65,n))
ye[n]=!0}var o=e.props
if("input"===n)o=r({type:void 0},o,{defaultChecked:void 0,defaultValue:void 0,value:null!=o.value?o.value:o.defaultValue,checked:null!=o.checked?o.checked:o.defaultChecked})
else if("textarea"===n){var s=o.value
if(null==s){s=o.defaultValue
var _=o.children
if(null!=_){if(null!=s)throw Error(i(92))
if(Array.isArray(_)){if(!(1>=_.length))throw Error(i(93))
_=_[0]}s=""+_}null==s&&(s="")}o=r({},o,{value:void 0,children:""+s})}else if("select"===n)this.currentSelectValue=null!=o.value?o.value:o.defaultValue,o=r({},o,{value:void 0})
else if("option"===n){_=this.currentSelectValue
var l=xe(o.children)
if(null!=_){var c=null!=o.value?o.value+"":l
s=!1
if(Array.isArray(_)){for(var d=0;d<_.length;d++)if(""+_[d]===c){s=!0
break}}else s=""+_===c
o=r({selected:void 0,children:void 0},o,{selected:s,children:l})}}if(s=o){if(ue[n]&&(null!=s.children||null!=s.dangerouslySetInnerHTML))throw Error(i(137,n,""))
if(null!=s.dangerouslySetInnerHTML){if(null!=s.children)throw Error(i(60))
if(!("object"===typeof s.dangerouslySetInnerHTML&&"__html"in s.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=s.style&&"object"!==typeof s.style)throw Error(i(62,""))}s=o
_=this.makeStaticMarkup
l=1===this.stack.length
c="<"+e.type
for(v in s)if(je.call(s,v)){var u=s[v]
if(null!=u){if("style"===v){d=void 0
var h="",f=""
for(d in u)if(u.hasOwnProperty(d)){var b=0===d.indexOf("--"),m=u[d]
if(null!=m){if(b)var p=d
else if(p=d,we.hasOwnProperty(p))p=we[p]
else{var g=p.replace(be,"-$1").toLowerCase().replace(me,"-ms-")
p=we[p]=g}h+=f+p+":"
f=d
b=null==m||"boolean"===typeof m||""===m?"":b||"number"!==typeof m||0===m||he.hasOwnProperty(f)&&he[f]?(""+m).trim():m+"px"
h+=b
f=";"}}u=h||null}d=null
e:if(b=n,m=s,-1===b.indexOf("-"))b="string"===typeof m.is
else switch(b){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":b=!1
break e
default:b=!0}b?Oe.hasOwnProperty(v)||(d=v,d=P(d)&&null!=u?d+'="'+W(u)+'"':""):d=H(v,u)
d&&(c+=" "+d)}}_||l&&(c+=' data-reactroot=""')
var v=c
s=""
de.hasOwnProperty(n)?v+="/>":(v+=">",s="</"+e.type+">")
e:{_=o.dangerouslySetInnerHTML
if(null!=_){if(null!=_.__html){_=_.__html
break e}}else if(_=o.children,"string"===typeof _||"number"===typeof _){_=W(_)
break e}_=null}null!=_?(o=[],ve.hasOwnProperty(n)&&"\n"===_.charAt(0)&&(v+="\n"),v+=_):o=pe(o.children)
e=e.type
a=null==a||"http://www.w3.org/1999/xhtml"===a?ce(e):"http://www.w3.org/2000/svg"===a&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":a
this.stack.push({domNamespace:a,type:n,children:o,childIndex:0,context:t,footer:s})
this.previousWasTextNode=!1
return v}
return e}(),Ae={renderToString:function(e){e=new Ce(e,!1)
try{return e.read(Infinity)}finally{e.destroy()}},renderToStaticMarkup:function(e){e=new Ce(e,!0)
try{return e.read(Infinity)}finally{e.destroy()}},renderToNodeStream:function(){throw Error(i(207))},renderToStaticNodeStream:function(){throw Error(i(208))},version:"16.13.1"}
e.exports=Ae.default||Ae},"IEa/":function(e,t,a){"use strict"
var r=a("FeGr")
var n=[]
var i=[]
var o=r.makeRequestCallFromTimer(s)
function s(){if(i.length)throw i.shift()}e.exports=_
function _(e){var t
t=n.length?n.pop():new l
t.task=e
r(t)}function l(){this.task=null}l.prototype.call=function(){try{this.task.call()}catch(e){if(_.onerror)_.onerror(e)
else{i.push(e)
o()}}finally{this.task=null
n[n.length]=this}}},"IF+P":function(e,t,a){"use strict"
e.exports=(e,t,a,r)=>{const n=(e+(r||"")).toString().includes("%")
if("string"===typeof e){const n=e.match(/(0?\.?\d{1,3})%?\b/g).map(Number)
e=n[0]
t=n[1]
a=n[2]
r=n[3]}else void 0!==r&&(r=parseFloat(r))
if("number"!==typeof e||"number"!==typeof t||"number"!==typeof a||e>255||t>255||a>255)throw new TypeError("Expected three numbers below 256")
if("number"===typeof r){if(!n&&r>=0&&r<=1)r=Math.round(255*r)
else{if(!(n&&r>=0&&r<=100))throw new TypeError("Expected alpha value (".concat(r,") as a fraction or percentage"))
r=Math.round(255*r/100)}r=(256|r).toString(16).slice(1)}else r=""
return(a|t<<8|e<<16|1<<24).toString(16).slice(1)+r}},KAy6:function(e,t,a){"use strict"
e.exports=a("IDhZ")},KR5x:function(e,t,a){"use strict"
a.d(t,"a",(function(){return v}))
var r=a("1OyB")
var n=a("vuIU")
var i=a("Ji7U")
var o=a("LK+K")
var s=a("q1tI")
var _=a.n(s)
var l=a("17x9")
var c=a.n(l)
var d=a("cClk")
var u=a("sTNg")
var h=a("nAyT")
var f=a("M8//")
var b,m,p,g
var v=(b=Object(h["a"])("7.0.0",null,"Use TextArea from ui-text-area instead."),b(m=(g=p=function(e){Object(i["a"])(a,e)
var t=Object(o["a"])(a)
function a(){var e
Object(r["a"])(this,a)
for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e._textArea=null
return e}Object(n["a"])(a,[{key:"focus",value:function(){this._textArea&&this._textArea.focus()}},{key:"render",value:function(){var e=this
return _.a.createElement(f["a"],Object.assign({ref:function(t){e._textArea=t}},this.props))}},{key:"minHeight",get:function(){return this._textArea&&this._textArea.minHeight}},{key:"invalid",get:function(){return this._textArea&&this._textArea.invalid}},{key:"id",get:function(){return this._textArea&&this._textArea.id}},{key:"focused",get:function(){return this._textArea&&this._textArea.focused}},{key:"value",get:function(){return this._textArea&&this._textArea.value}}])
a.displayName="TextArea"
return a}(s["Component"]),p.propTypes={label:c.a.node.isRequired,id:c.a.string,size:c.a.oneOf(["small","medium","large"]),layout:c.a.oneOf(["stacked","inline"]),autoGrow:c.a.bool,resize:c.a.oneOf(["none","both","horizontal","vertical"]),width:c.a.string,height:c.a.string,maxHeight:c.a.oneOfType([c.a.number,c.a.string]),messages:c.a.arrayOf(u["e"].message),inline:c.a.bool,placeholder:c.a.string,disabled:c.a.bool,readOnly:c.a.bool,required:c.a.bool,textareaRef:c.a.func,defaultValue:c.a.string,value:Object(d["a"])(c.a.string),onChange:c.a.func},p.defaultProps={size:"medium",autoGrow:true,resize:"none",inline:false,messages:[],disabled:false,readOnly:false,textareaRef:function(e){},layout:"stacked",id:void 0,value:void 0,defaultValue:void 0,onChange:void 0,required:false,placeholder:void 0,width:void 0,height:void 0,maxHeight:void 0},g))||m)},KfSR:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.autoprefix=void 0
var r=a("Ag8Z")
var n=o(r)
var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}
function o(e){return e&&e.__esModule?e:{default:e}}var s={borderRadius:function(e){return{msBorderRadius:e,MozBorderRadius:e,OBorderRadius:e,WebkitBorderRadius:e,borderRadius:e}},boxShadow:function(e){return{msBoxShadow:e,MozBoxShadow:e,OBoxShadow:e,WebkitBoxShadow:e,boxShadow:e}},userSelect:function(e){return{WebkitTouchCallout:e,KhtmlUserSelect:e,MozUserSelect:e,msUserSelect:e,WebkitUserSelect:e,userSelect:e}},flex:function(e){return{WebkitBoxFlex:e,MozBoxFlex:e,WebkitFlex:e,msFlex:e,flex:e}},flexBasis:function(e){return{WebkitFlexBasis:e,flexBasis:e}},justifyContent:function(e){return{WebkitJustifyContent:e,justifyContent:e}},transition:function(e){return{msTransition:e,MozTransition:e,OTransition:e,WebkitTransition:e,transition:e}},transform:function(e){return{msTransform:e,MozTransform:e,OTransform:e,WebkitTransform:e,transform:e}},absolute:function(e){var t=e&&e.split(" ")
return{position:"absolute",top:t&&t[0],right:t&&t[1],bottom:t&&t[2],left:t&&t[3]}},extend:function(e,t){var a=t[e]
if(a)return a
return{extend:e}}}
var _=t.autoprefix=function(e){var t={};(0,n.default)(e,(function(e,a){var r={};(0,n.default)(e,(function(e,t){var a=s[t]
a?r=i({},r,a(e)):r[t]=e}))
t[a]=r}))
return t}
t.default=_},LsHQ:function(e,t,a){var r=a("EA7m"),n=a("mv/X")
function i(e){return r((function(t,a){var r=-1,i=a.length,o=i>1?a[i-1]:void 0,s=i>2?a[2]:void 0
o=e.length>3&&"function"==typeof o?(i--,o):void 0
if(s&&n(a[0],a[1],s)){o=i<3?void 0:o
i=1}t=Object(t)
while(++r<i){var _=a[r]
_&&e(t,_,r,o)}return t}))}e.exports=i},Lwbf:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
var r={}
var n=t.render=function(e,t,a,r){if("undefined"===typeof document&&!r)return null
var n=r?new r:document.createElement("canvas")
n.width=2*a
n.height=2*a
var i=n.getContext("2d")
if(!i)return null
i.fillStyle=e
i.fillRect(0,0,n.width,n.height)
i.fillStyle=t
i.fillRect(0,0,a,a)
i.translate(a,a)
i.fillRect(0,0,a,a)
return n.toDataURL()}
t.get=function(e,t,a,i){var o=e+"-"+t+"-"+a+(i?"-server":"")
if(r[o])return r[o]
var s=n(e,t,a,i)
r[o]=s
return s}},"M8//":function(e,t,a){"use strict"
a.d(t,"a",(function(){return R}))
var r=a("rePB")
var n=a("1OyB")
var i=a("vuIU")
var o=a("JX7q")
var s=a("Ji7U")
var _=a("LK+K")
var l=a("q1tI")
var c=a.n(l)
var d=a("17x9")
var u=a.n(d)
var h=a("TSYQ")
var f=a.n(h)
var b=a("cClk")
var m=a("sTNg")
var p=a("QF4Q")
var g=a("yfCu")
var v=a("8o96")
var k=a("ISHz")
var y=a("/UXv")
var w=a("eGSd")
var x=a("BTe1")
var j=a("HMVb")
var O=a("J2CL")
var S=a("oXx0")
var z=a("jtGx")
function C(e){var t=e.colors,a=e.borders,r=e.spacing,n=e.typography,i=e.forms
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,color:t.textDarkest,background:t.backgroundLightest,borderWidth:a.widthSmall,borderStyle:a.style,borderTopColor:t.borderMedium,borderRightColor:t.borderMedium,borderBottomColor:t.borderMedium,borderLeftColor:t.borderMedium,borderRadius:a.radiusMedium,padding:r.small,focusOutlineColor:t.borderBrand,focusOutlineWidth:a.widthMedium,focusOutlineStyle:a.style,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:n.fontSizeSmall,smallHeight:i.inputHeightSmall,mediumFontSize:n.fontSizeMedium,mediumHeight:i.inputHeightMedium,largeFontSize:n.fontSizeLarge,largeHeight:i.inputHeightLarge}}C.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusOutlineColor:e["ic-brand-primary"]}}
var A,T,E,M,L
var P={componentId:"chpSa",template:function(e){return"\n\n.chpSa_byIz{position:relative}\n\n.chpSa_cPAP{border:".concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit","*1.5);bottom:-0.25rem;box-sizing:border-box;display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.chpSa_blLZ{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:").concat(e.background||"inherit",";border:medium none currentColor;border-bottom-color:").concat(e.borderBottomColor||"inherit",";border-collapse:separate;border-image:none;border-left-color:").concat(e.borderLeftColor||"inherit",";border-radius:0;border-radius:").concat(e.borderRadius||"inherit",";border-right-color:").concat(e.borderRightColor||"inherit",";border-spacing:0;border-style:").concat(e.borderStyle||"inherit",";border-top-color:").concat(e.borderTopColor||"inherit",";border-width:").concat(e.borderWidth||"inherit",";bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:start;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;white-space:pre-wrap;widows:2;width:auto;width:100%;word-spacing:normal;word-wrap:break-word;z-index:auto}\n\n[dir=ltr] .chpSa_blLZ{text-align:left}\n\n[dir=rtl] .chpSa_blLZ{text-align:right}\n\n.chpSa_blLZ:focus~.chpSa_cPAP{opacity:1;transform:scale(1)}\n\n.chpSa_blLZ[aria-invalid],.chpSa_blLZ[aria-invalid]:focus,.chpSa_blLZ[aria-invalid]:focus~.chpSa_cPAP{border-color:").concat(e.errorBorderColor||"inherit","}\n\n.chpSa_blLZ:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.chpSa_blLZ::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.chpSa_blLZ.chpSa_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.chpSa_doqw{font-size:").concat(e.smallFontSize||"inherit","}\n\n.chpSa_ycrn{font-size:").concat(e.mediumFontSize||"inherit","}\n\n.chpSa_cMDj{font-size:").concat(e.largeFontSize||"inherit","}")},layout:"chpSa_byIz",outline:"chpSa_cPAP",textarea:"chpSa_blLZ",disabled:"chpSa_ywdX",small:"chpSa_doqw",medium:"chpSa_ycrn",large:"chpSa_cMDj"}
var R=(A=Object(S["a"])(),T=Object(O["j"])(C,P),A(E=T(E=(L=M=function(e){Object(s["a"])(a,e)
var t=Object(_["a"])(a)
function a(){var e
Object(n["a"])(this,a)
e=t.call(this)
e._textareaResize=function(t){var a=e._textarea.style.height
if(a!=e._height){e._manuallyResized=true
e._textarea.style.overflowY="auto"
e._container.style.minHeight=a}}
e.grow=function(t){if(!e._textarea||e._manuallyResized)return
var a=e._textarea.offsetHeight-e._textarea.clientHeight
var r=""
e._textarea.style.height="auto"
e._textarea.style.overflowY="hidden"
r=e._textarea.scrollHeight+a+"px"
var n=Object(j["a"])(e.props.maxHeight,Object(p["a"])(Object(o["a"])(e)))
if(e.props.maxHeight&&e._textarea.scrollHeight>n)e._textarea.style.overflowY="auto"
else if(e.props.height)if(""===e._textarea.value)r=e.props.height
else if(Object(j["a"])(e.props.height,Object(p["a"])(Object(o["a"])(e)))>e._textarea.scrollHeight){e._textarea.style.overflowY="auto"
r=e.props.height}var i=Object(j["a"])(r)>n
i||(e._container.style.minHeight=r)
e._height=r
e._textarea.style.height=r
e._textarea.scrollTop=e._textarea.scrollHeight}
e.handleChange=function(t){var a=e.props,r=a.onChange,n=a.value,i=a.disabled,o=a.readOnly
if(i||o){t.preventDefault()
return}"undefined"===typeof n&&e.autoGrow()
"function"===typeof r&&r(t)}
e.handleContainerRef=function(t){e._container=t}
e._defaultId=Object(x["a"])("TextArea")
return e}Object(i["a"])(a,[{key:"componentDidMount",value:function(){this.autoGrow()}},{key:"componentWillReceiveProps",value:function(e){this.autoGrow()}},{key:"componentWillUnmount",value:function(){this._listener&&this._listener.remove()
this._textareaResizeListener&&this._textareaResizeListener.remove()
this._request&&this._request.cancel()
this._debounced&&this._debounced.cancel()}},{key:"autoGrow",value:function(){if(this.props.autoGrow){this._debounced||(this._debounced=Object(w["a"])(this.grow,200,{leading:false,trailing:true}))
this._listener||(this._listener=Object(g["a"])(window,"resize",this._debounced))
this._textarea&&!this._textareaResizeListener&&(this._textareaResizeListener=Object(v["a"])(this._textarea,this._textareaResize,["height"]))
this._request=Object(k["a"])(this.grow)}}},{key:"focus",value:function(){this._textarea.focus()}},{key:"render",value:function(){var e,t=this
var n=this.props,i=n.autoGrow,o=n.placeholder,s=n.value,_=n.defaultValue,l=n.disabled,d=n.readOnly,u=n.required,h=n.width,b=n.height,p=n.maxHeight,g=n.textareaRef,v=n.resize,k=n.size
var y=Object(z["a"])(this.props,a.propTypes)
var w=(e={},Object(r["a"])(e,P.textarea,true),Object(r["a"])(e,P[k],true),Object(r["a"])(e,P.disabled,l),e)
var x={width:h,resize:v,height:i?null:b,maxHeight:p}
var j=c.a.createElement("textarea",Object.assign({},y,{value:s,defaultValue:_,placeholder:o,ref:function(e){t._textarea=e
for(var a=arguments.length,r=new Array(a>1?a-1:0),n=1;n<a;n++)r[n-1]=arguments[n]
g.apply(t,[e].concat(r))},style:x,id:this.id,required:u,"aria-required":u,"aria-invalid":this.invalid?"true":null,disabled:l||d,className:f()(w),onChange:this.handleChange}))
return c.a.createElement(m["a"],Object.assign({},Object(z["c"])(this.props,m["a"].propTypes),{vAlign:"top",id:this.id,ref:function(e){t._node=e}}),c.a.createElement("div",{className:P.layout,style:{width:h,maxHeight:p},ref:this.handleContainerRef},j,l||d?null:c.a.createElement("span",{className:P.outline,"aria-hidden":"true"})))}},{key:"minHeight",get:function(){return this._textarea.style.minHeight}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"focused",get:function(){return Object(y["a"])(this._textarea)}},{key:"value",get:function(){return this._textarea.value}}])
a.displayName="TextArea"
return a}(l["Component"]),M.propTypes={label:u.a.node.isRequired,id:u.a.string,size:u.a.oneOf(["small","medium","large"]),layout:u.a.oneOf(["stacked","inline"]),autoGrow:u.a.bool,resize:u.a.oneOf(["none","both","horizontal","vertical"]),width:u.a.string,height:u.a.string,maxHeight:u.a.oneOfType([u.a.number,u.a.string]),messages:u.a.arrayOf(m["e"].message),inline:u.a.bool,placeholder:u.a.string,disabled:u.a.bool,readOnly:u.a.bool,required:u.a.bool,textareaRef:u.a.func,defaultValue:u.a.string,value:Object(b["a"])(u.a.string),onChange:u.a.func},M.defaultProps={size:"medium",autoGrow:true,resize:"none",inline:false,messages:[],disabled:false,readOnly:false,textareaRef:function(e){},layout:"stacked",id:void 0,value:void 0,defaultValue:void 0,onChange:void 0,required:false,placeholder:void 0,width:void 0,height:void 0,maxHeight:void 0},L))||E)||E)},NOPk:function(e,t,a){"use strict"
var r=a("ZoNA")
var n="AAAAAAACEEEEIIIIDNOOOOO.OUUUUY..aaaaaaaceeeeiiiidnooooo.ouuuuy.yAaAaAaCcCcCcCcDdDdEeEeEeEeEeGgGgGgGgHhHhIiIiIiIiIiIiJjKkkLlLlLlLlJlNnNnNnnNnOoOoOoOoRrRrRrSsSsSsSsTtTtTtUuUuUuUuUuUuWwYyYZzZzZz."
function i(e){var t=""
var a=e.length
var r=n.length
for(var i=0;i<a;++i){var o=e[i]
var s=o.charCodeAt(0)-192
if(s>=0&&s<r){var _=n[s]
"."!==_&&(o=_)}t+=o}return t}function o(e){return i(e).toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"").slice(0,50)}e.exports=function(e){return o(r(e))}
e.exports.underscore=o},Nq3d:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.Checkboard=void 0
var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}
var n=a("q1tI")
var i=d(n)
var o=a("/FUP")
var s=d(o)
var _=a("Lwbf")
var l=c(_)
function c(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])
t.default=e
return t}function d(e){return e&&e.__esModule?e:{default:e}}var u=t.Checkboard=function(e){var t=e.white,a=e.grey,o=e.size,_=e.renderers,c=e.borderRadius,d=e.boxShadow,u=e.children
var h=(0,s.default)({default:{grid:{borderRadius:c,boxShadow:d,absolute:"0px 0px 0px 0px",background:"url("+l.get(t,a,o,_.canvas)+") center left"}}})
return(0,n.isValidElement)(u)?i.default.cloneElement(u,r({},u.props,{style:r({},u.props.style,h.grid)})):i.default.createElement("div",{style:h.grid})}
u.defaultProps={size:8,white:"transparent",grey:"rgba(0,0,0,.08)",renderers:{}}
t.default=u},Ojt5:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.Raised=void 0
var r=a("q1tI")
var n=d(r)
var i=a("17x9")
var o=d(i)
var s=a("/FUP")
var _=d(s)
var l=a("QkVN")
var c=d(l)
function d(e){return e&&e.__esModule?e:{default:e}}var u=t.Raised=function(e){var t=e.zDepth,a=e.radius,r=e.background,i=e.children,o=e.styles,s=void 0===o?{}:o
var l=(0,_.default)((0,c.default)({default:{wrap:{position:"relative",display:"inline-block"},content:{position:"relative"},bg:{absolute:"0px 0px 0px 0px",boxShadow:"0 "+t+"px "+4*t+"px rgba(0,0,0,.24)",borderRadius:a,background:r}},"zDepth-0":{bg:{boxShadow:"none"}},"zDepth-1":{bg:{boxShadow:"0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"}},"zDepth-2":{bg:{boxShadow:"0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"}},"zDepth-3":{bg:{boxShadow:"0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"}},"zDepth-4":{bg:{boxShadow:"0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"}},"zDepth-5":{bg:{boxShadow:"0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"}},square:{bg:{borderRadius:"0"}},circle:{bg:{borderRadius:"50%"}}},s),{"zDepth-1":1===t})
return n.default.createElement("div",{style:l.wrap},n.default.createElement("div",{style:l.bg}),n.default.createElement("div",{style:l.content},i))}
u.propTypes={background:o.default.string,zDepth:o.default.oneOf([0,1,2,3,4,5]),radius:o.default.number,styles:o.default.object}
u.defaultProps={background:"#fff",zDepth:1,radius:2,styles:{}}
t.default=u},QkVN:function(e,t,a){var r=a("+Qka"),n=a("LsHQ")
var i=n((function(e,t,a){r(e,t,a)}))
e.exports=i},RhCJ:function(e,t,a){"use strict"
a.d(t,"a",(function(){return r}))
function r(e,t,a){if("input"===e.as){if("children"===t&&e.children||void 0==e.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(a,' as="input"`'))}else{if("value"===t&&void 0!=e.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(a,' as="input"`'))
if(!e.children)return new Error("Prop `children` should be supplied unless `".concat(a,' as="input"`.'))}return}},T1AV:function(e,t,a){var r=a("t2Dn"),n=a("5Tg0"),i=a("yP5f"),o=a("Q1l4"),s=a("+iFO"),_=a("03A+"),l=a("Z0cm"),c=a("3L66"),d=a("DSRE"),u=a("lSCD"),h=a("GoyQ"),f=a("YO3V"),b=a("c6wG"),m=a("itsj"),p=a("jeLo")
function g(e,t,a,g,v,k,y){var w=m(e,a),x=m(t,a),j=y.get(x)
if(j){r(e,a,j)
return}var O=k?k(w,x,a+"",e,t,y):void 0
var S=void 0===O
if(S){var z=l(x),C=!z&&d(x),A=!z&&!C&&b(x)
O=x
if(z||C||A)if(l(w))O=w
else if(c(w))O=o(w)
else if(C){S=false
O=n(x,true)}else if(A){S=false
O=i(x,true)}else O=[]
else if(f(x)||_(x)){O=w
_(w)?O=p(w):h(w)&&!u(w)||(O=s(x))}else S=false}if(S){y.set(x,O)
v(O,x,g,k,y)
y["delete"](x)}r(e,a,O)}e.exports=g},TDWj:function(e){e.exports=JSON.parse('{"ar":{"accessibility_checker_b3af1f6c":"المتحقق من إمكانية الوصول","action_to_take_b626a99a":"إجراء مقرر اتخاذه:","add_a_caption_2a915239":"إضافة تسمية توضيحية","add_alt_text_for_the_image_48cd88aa":"إضافة نص بديل للصورة","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"يجب أن تكون الروابط المتجاورة بنفس عنوان URL رابطًا فرديًا.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"يجب ألا يتضمن نص السمة البديلة أكثر من 120 حرفًا.","apply_781a2546":"تطبيق","change_alt_text_92654906":"تغيير النص البديل","change_heading_tag_to_paragraph_a61e3113":"تغيير علامة العنوان إلى فقرة","change_text_color_1aecb912":"تغيير لون النص","check_accessibility_3c78211c":"التحقق من إمكانية الوصول","checking_for_accessibility_issues_fac18c6d":"التحقق من مشاكل إمكانية الوصول","close_accessibility_checker_29d1c51e":"إغلاق المتحقق من إمكانية الوصول","close_d634289d":"إغلاق","column_e1ae5c64":"عمود","column_group_1c062368":"مجموعة العمود","decorative_image_fde98579":"صورة تزيين","element_starting_with_start_91bf4c3b":"عنصر يبدأ بـ { start }","fix_heading_hierarchy_f60884c4":"إصلاح هيكل العنوان","format_as_a_list_142210c3":"التنسيق في صورة قائمة","header_column_f27433cb":"عمود الرأس","header_row_and_column_ec5b9ec":"صف وعمود الرأس","header_row_f33eb169":"صف الرأس","heading_levels_should_not_be_skipped_3947c0e0":"يجب ألا يتم تجاوز مستويات العنوان.","heading_starting_with_start_42a3e7f9":"يبدأ العنوان بـ { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"يجب ألا تتضمن العناوين أكثر من 120 حرفًا.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"يجب ألا يتم استخدام أسماء ملفات الصور كسمة ببديلة لوصف محتوى الصورة.","image_with_filename_file_aacd7180":"صورة باسم الملف { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"يجب أن تتضمن الصور سمة بديلة تصف محتوى الصورة.","issue_num_total_f94536cf":"مشكلة { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"تنتقل لوحات المفاتيح إلى الروابط باستخدام المفتاح Tab. يمكن أن يسبب رابطان متجاوران يوجهان إلى نفس الوجهة في إرباك مستخدمي لوحة المفاتيح.","learn_more_about_adjacent_links_2cb9762c":"معرفة المزيد عن الارتباطات المتجاورة","learn_more_about_color_contrast_c019dfb9":"معرفة المزيد عن تباين اللون","learn_more_about_organizing_page_headings_8a7caa2e":"معرفة المزيد عن تنظيم عناوين الصفحات","learn_more_about_table_headers_5f5ee13":"معرفة المزيد عن رؤوس الجداول","learn_more_about_using_alt_text_for_images_5698df9a":"معرفة المزيد عن استخدام النص البديل للصور","learn_more_about_using_captions_with_tables_36fe496f":"معرفة المزيد عن استخدام التسميات التوضيحية مع الجداول","learn_more_about_using_filenames_as_alt_text_264286af":"معرفة المزيد عن استخدام أسماء الملفات كنصوص بديلة","learn_more_about_using_lists_4e6eb860":"معرفة المزيد عن استخدام القوائم","learn_more_about_using_scope_attributes_with_table_20df49aa":"معرفة المزيد عن استخدام سمات النطاق مع الجداول","leave_as_is_4facfe55":"ترك كما هو","link_with_text_starting_with_start_b3fcbe71":"رابط بنص يبدأ بـ { start }","lists_should_be_formatted_as_lists_f862de8d":"يجب تنسيق القوائم في صورة قوائم","merge_links_2478df96":"دمج الروابط","next_40e12421":"التالي","no_accessibility_issues_were_detected_f8d3c875":"لم يتم الكشف عن مشاكل إمكانية الوصول.","no_headers_9bc7dc7f":"بلا رؤوس","none_3b5e34d2":"بلا","paragraph_starting_with_start_a59923f8":"فقرة تبدأ بـ { start }","prev_f82cbc48":"السابق","remove_heading_style_5fdc8855":"إزالة نمط العنوان","row_fc0944a7":"صف","row_group_979f5528":"مجموعة الصف","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"لا يمكن لقارئات الشاشة تحديد المعروض في صورة بدون نص بديل وفي الغالب تكون أسماء الملفات سلسلة بلا معنى من الأرقام والأحرف التي لا تصف السياق أو المعنى.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"لا يمكن لقارئات الشاشة تحديد المعروض في صورة بدون نص بديل يصف محتوى الصورة ومعناها. يجب أن يكون النص البديل بسيطًا وموجزًا.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"لا يمكن لقارئات الشاشة تحديد المعروض في صورة بدون نص بديل يصف محتوى الصورة ومعناها.","screen_readers_cannot_interpret_tables_without_the_bd861652":"لا يمكن لقارئات الشاشة تفسير الجداول بدون بنية ملائمة. تزود رؤوس الجدول إرشادات ونطاقًا للمحتوى.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"لا يمكن لقارئات الشاشة تفسير الجداول بدون بنية ملائمة. تصف التسميات التوضيحية للجدول السياق والفهم العام للجدول.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"لا يمكن لقارئات الشاشة تفسير الجداول بدون بنية ملائمة. تزود رؤوس الجدول إرشادات ونظرة عامة على المحتوى.","set_header_scope_8c548f40":"تعيين نطاق الرأس","set_table_header_cfab13a0":"تعيين رأس الجدول","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"يتصفح المستخدمون الذين يتمتعون بالقدرة على الإبصار صفحات الويب بشكل سريع، بحثًا عن عناوين كبيرة أو بخط عريض. ويعتمد مستخدمو قارئة الشاشة على الرؤوس لفهم السياق. يجب أن توظف الرؤوس البنية الملائمة.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"يتصفح المستخدمون الذين يتمتعون بالقدرة على الإبصار صفحات الويب بشكل سريع، بحثًا عن عناوين كبيرة أو بخط عريض. ويعتمد مستخدمو قارئة الشاشة على الرؤوس لفهم السياق. يجب أن تكون الرؤوس موجزة في نطاق البنية الملائمة.","table_header_starting_with_start_ffcabba6":"يبدأ رأس الجدول بـ { start }","table_starting_with_start_e7232848":"يبدأ الجدول بـ { start }","tables_headers_should_specify_scope_5abf3a8e":"يجب أن تحدد رؤوس الجداول نطاقًا.","tables_should_include_a_caption_describing_the_con_e91e78fc":"يجب أن تتضمن الجداول تسمية توضيحية تصف محتويات الجدول.","tables_should_include_at_least_one_header_48779eac":"يجب أن تتضمن الجداول رأسًا واحدًا على الأقل.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"تصعب قراءة النص بدون درجة تباين كافية بين النص والخلفية، خاصةً لمن يعانون من ضعف الرؤية.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"يجب أن يعرض النص الأكبر من 18 نقطة (أو 14 نقطة بخط عريض) معدل تباين لا يقل عن 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"يجب أن يعرض النص الأصغر من 18 نقطة (أو 14 نقطة بخط عريض) معدل تباين لا يقل عن 4.5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"عند استخدام العلامة التي تنسق العناصر في صورة قوائم  ولكنها لا تشير إلى علاقة القوائم، فقد يواجه المستخدمون صعوبة في التنقل بين المعلومات.","why_523b3d8c":"السبب"},"cy":{"accessibility_checker_b3af1f6c":"Gwiriwr Hygyrchedd","action_to_take_b626a99a":"Cam gweithredu i\'\'w gymryd:","add_a_caption_2a915239":"Ychwanegu capsiwn","add_alt_text_for_the_image_48cd88aa":"Ychwanegu testun amgen ar gyfer y ddelwedd","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Dylai dolenni cyfagos â’r un URL fod yn un ddolen.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Ni ddylai testun priodoli gynnwys mwy na 120 nod.","apply_781a2546":"Rhoi ar waith","change_alt_text_92654906":"Newid testun amgen","change_heading_tag_to_paragraph_a61e3113":"Newid tag y pennawd yn baragraff","change_text_color_1aecb912":"Newid lliw\'\'r testun","check_accessibility_3c78211c":"Gwirio Hygyrchedd","checking_for_accessibility_issues_fac18c6d":"Wrthi’n chwilio am broblemau o ran hygyrchedd","close_accessibility_checker_29d1c51e":"Cau\'\'r Gwiriwr Hygyrchedd","close_d634289d":"Cau","column_e1ae5c64":"Colofn","column_group_1c062368":"Grŵp y golofn","decorative_image_fde98579":"Delwedd addurniadol","element_starting_with_start_91bf4c3b":"Elfen yn dechrau gyda { start }","fix_heading_hierarchy_f60884c4":"Pennu hierarchaeth penawdau","format_as_a_list_142210c3":"Fformatio ar ffurf rhestr","header_column_f27433cb":"Colofn y pennawd","header_row_and_column_ec5b9ec":"Colofn a rhes y pennawd","header_row_f33eb169":"Rhes y pennawd","heading_levels_should_not_be_skipped_3947c0e0":"Ni ddylid anwybyddu lefelau penawdau.","heading_starting_with_start_42a3e7f9":"Pennawd yn dechrau gyda { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Ni ddylai penawdau gynnwys mwy na 120 nod.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Ni ddylid defnyddio enwau ffeiliau delweddau fel y nodwedd amgen wrth ddisgrifio cynnwys delweddau.","image_with_filename_file_aacd7180":"Delwedd â’r enw ffeil { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Dylai delweddau gynnwys nodwedd amgen sy’n disgrifio cynnwys y ddelwedd.","issue_num_total_f94536cf":"Problem { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Mae bysellfyrddau’n symud i ddolenni drwy ddefnyddio’r fysell ‘Tab’. Gall dwy ddolen gyfagos â\'\'r un gyrchfan fod yn ddryslyd i ddefnyddwyr bysellfyrddau.","learn_more_about_adjacent_links_2cb9762c":"Dysgu mwy am ddolenni cyfagos","learn_more_about_color_contrast_c019dfb9":"Dysgu mwy am gyferbynnedd lliw","learn_more_about_organizing_page_headings_8a7caa2e":"Dysgu mwy am drefnu penawdau tudalennau","learn_more_about_table_headers_5f5ee13":"Dysgu mwy am benawdau tablau","learn_more_about_using_alt_text_for_images_5698df9a":"Dysgu mwy am ddefnyddio testun amgen ar gyfer delweddau","learn_more_about_using_captions_with_tables_36fe496f":"Dysgu mwy am ddefnyddio capsiynau gyda thablau","learn_more_about_using_filenames_as_alt_text_264286af":"Dysgu mwy am ddefnyddio enwau ffeiliau fel testun amgen","learn_more_about_using_lists_4e6eb860":"Dysgu mwy am ddefnyddio rhestrau","learn_more_about_using_scope_attributes_with_table_20df49aa":"Dysgu mwy am ddefnyddio priodoleddau cwmpas gyda thablau","leave_as_is_4facfe55":"Gadael fel y mae","link_with_text_starting_with_start_b3fcbe71":"Dolen â thestun yn dechrau gyda { start }","lists_should_be_formatted_as_lists_f862de8d":"Dylai rhestrau gael eu fformatio ar ffurf rhestrau.","merge_links_2478df96":"Cyfuno dolenni","next_40e12421":"Nesaf","no_accessibility_issues_were_detected_f8d3c875":"Heb ganfod problemau o ran hygyrchedd.","no_headers_9bc7dc7f":"Dim pennawd","none_3b5e34d2":"Dim","paragraph_starting_with_start_a59923f8":"Paragraff yn dechrau gyda { start }","prev_f82cbc48":"Blaenorol","remove_heading_style_5fdc8855":"Tynnu arddull y pennawd","row_fc0944a7":"Rhes","row_group_979f5528":"Grŵp y rhes","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Does dim modd defnyddio darllenwyr sgrin i bennu beth sy’n cael ei ddangos mewn delwedd heb destun amgen, dim ond rhesi o rifau a llythrennau diystyr yw enwau ffeiliau yn aml, ac nid ydynt yn disgrifio\'\'r cyd-destun na’r ystyr.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Does dim modd i ddarllenwyr sgrin bennu beth sy’n cael ei ddangos mewn delwedd heb destun amgen, sy’n disgrifio cynnwys ac ystyr y ddelwedd. Dylai’r testun amgen fod ym syml ac yn gryno.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Does dim modd i ddarllenwyr sgrin bennu beth sy’n cael ei ddangos mewn delwedd heb destun amgen, sy’n disgrifio cynnwys ac ystyr y ddelwedd.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Ni all darllenwyr sgrin ddehongli tablau heb y strwythur priodol. Mae penawdau tablau yn nodi cyfeiriad ac ystod y cynnwys.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Ni all darllenwyr sgrin ddehongli tablau heb y strwythur priodol. Mae capsiynau tablau’n disgrifio cyd-destun y tabl ac yn rhoi dealltwriaeth gyffredinol ohono.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Ni all darllenwyr sgrin ddehongli tablau heb y strwythur priodol. Mae penawdau tablau yn rhoi trosolwg o’r cynnwys a’i gyfeiriad.","set_header_scope_8c548f40":"Pennu ystod y pennawd","set_table_header_cfab13a0":"Pennu pennawd y tabl","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Mae defnyddwyr sy\'\'n gweld yn dda yn pori drwy dudalennau gwe yn gyflym, gan chwilio am benawdau mawr neu drwm. Mae defnyddwyr darllenwyr sgrin yn dibynnu ar benawdau i ddeall y cyd-destun. Dylai penawdau ddefnyddio\'\'r strwythur priodol.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Mae defnyddwyr sy\'\'n gweld yn dda yn pori drwy dudalennau gwe yn gyflym, gan chwilio am benawdau mawr neu drwm. Mae defnyddwyr darllenydd sgrin yn dibynnu ar benawdau i ddeall y cyd-destun. Dylai penawdau fod yn gryno yn unol â\'\'r strwythur priodol.","table_header_starting_with_start_ffcabba6":"Pennawd tabl yn dechrau gyda { start }","table_starting_with_start_e7232848":"Tabl yn dechrau gyda { start }","tables_headers_should_specify_scope_5abf3a8e":"Dylai penawdau tablau bennu’r ystod.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Dylai tablau gynnwys capsiwn sy’n disgrifio cynnwys y tabl.","tables_should_include_at_least_one_header_48779eac":"Dylai tablau gynnwys o leiaf un pennawd.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Mae’r testun yn anodd ei ddarllen heb gyferbynnedd digonol rhwng y testun a’r cefndir, yn enwedig i bobl sydd â golwg sâl.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Dylai testun mwy na 18pt (neu 14pt trwm) fod â chyferbyniad 3:1 o leiaf.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Dylai testun llai na 18pt (neu 14pt trwm) fod â chyferbyniad 4.5:1 o leiaf.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Pan fydd marcio’n cael ei ddefnyddio, sy’n fformatio eitemau’n weledol ar ffurf rhestr ond sydd ddim yn nodi perthynas y rhestr, mae’n bosib y bydd defnyddwyr yn cael trafferth i ddod o hyd i’r wybodaeth.","why_523b3d8c":"Pam"},"da-x-k12":{"accessibility_checker_b3af1f6c":"Tilgægelighedskontrol","action_to_take_b626a99a":"Handling, der skal tages:","add_a_caption_2a915239":"Tilføj billedtekst","add_alt_text_for_the_image_48cd88aa":"Tilføj alternativ tekst til billedet","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Tilstødende links med samme URL skal være et enkelt link.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alternativ attributtekst må ikke indeholde mere end 120 tegn.","apply_781a2546":"Tildel","change_alt_text_92654906":"Skift alternativ tekst","change_heading_tag_to_paragraph_a61e3113":"Skift overskrift-tag til afsnit","change_text_color_1aecb912":"Skift tekstfarve","check_accessibility_3c78211c":"Kontroller tilgængelighed","checking_for_accessibility_issues_fac18c6d":"Kontrollerer tilgængelighedsproblemer","close_accessibility_checker_29d1c51e":"Luk tilgægelighedskontrol","close_d634289d":"Luk","column_e1ae5c64":"Kolonne","column_group_1c062368":"Kolonnegruppe","decorative_image_fde98579":"Dekorativt billede","element_starting_with_start_91bf4c3b":"Element begynder med { start }","fix_heading_hierarchy_f60884c4":"Ret overskriftshierarki","format_as_a_list_142210c3":"Listeformat","header_column_f27433cb":"Overskriftskolonne","header_row_and_column_ec5b9ec":"Overskriftsrække- og kolonne","header_row_f33eb169":"Overskriftsrække","heading_levels_should_not_be_skipped_3947c0e0":"Overskriftsniveauer bør ikke springes over.","heading_starting_with_start_42a3e7f9":"Overskrift, der starter med { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Overskrifter må ikke indeholde mere end 120 tegn.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Billedfilnavne bør ikke bruges som den alternative attribut, der beskriver billedindholdet.","image_with_filename_file_aacd7180":"Billede med filnavn { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Billeder skal indeholde en alternativ attribut, der beskriver billedindholdet.","issue_num_total_f94536cf":"Udstedelse { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Tastaturer navigerer til links ved hjælp af Tab-tasten. To tilstødende links, der fører til samme destination, kan være forvirrende for tastaturbrugere.","learn_more_about_adjacent_links_2cb9762c":"Få mere at vide om tilstødende links","learn_more_about_color_contrast_c019dfb9":"Få mere at vide om farvekontrast","learn_more_about_organizing_page_headings_8a7caa2e":"Få mere at vide om at organisere sideoverskrifter","learn_more_about_table_headers_5f5ee13":"Få mere at vide om tabeloverskrifter","learn_more_about_using_alt_text_for_images_5698df9a":"Få mere at vide om at bruge alt-tekst til billeder","learn_more_about_using_captions_with_tables_36fe496f":"Få mere at vide om brug af billedtekster med tabeller","learn_more_about_using_filenames_as_alt_text_264286af":"Få mere at vide om at bruge filnavne som alt-tekst","learn_more_about_using_lists_4e6eb860":"Få mere at vide om at bruge lister","learn_more_about_using_scope_attributes_with_table_20df49aa":"Få mere at vide om at bruge anvendelsesområde-attributter med tabeller","leave_as_is_4facfe55":"Lad det være, som det er","link_with_text_starting_with_start_b3fcbe71":"Link med tekst, der begynder med { start }","lists_should_be_formatted_as_lists_f862de8d":"Lister skal have listeformat.","merge_links_2478df96":"Sammenlæg links","next_40e12421":"Næste","no_accessibility_issues_were_detected_f8d3c875":"Der blev ikke fundet nogen tilgængelighedsproblemer.","no_headers_9bc7dc7f":"Ingen overskrifter","none_3b5e34d2":"Ingen","paragraph_starting_with_start_a59923f8":"Paragraf begynder med { start }","prev_f82cbc48":"Forrige","remove_heading_style_5fdc8855":"Fjern overskriftsstil","row_fc0944a7":"Række","row_group_979f5528":"Rækkegruppe","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Skærmlæsere kan ikke bestemme, hvad der vises i et billede uden alternativ tekst, og filnavne er ofte en meningsløs række tal og bogstaver, der ikke beskriver konteksten eller betydningen.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Skærmlæsere kan ikke bestemme, hvad der vises i et billede uden alternativ tekst, der beskriver billedets indhold og betydning. Alternativ tekst skal være enkel og kortfattet.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Skærmlæsere kan ikke bestemme, hvad der vises i et billede uden alternativ tekst, der beskriver billedets indhold og betydning.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Skærmlæsere kan ikke fortolke tabeller uden den rette struktur. Tabeloverskrifter giver en ide om indholdet og dets omfang.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Skærmlæsere kan ikke fortolke tabeller uden den rette struktur. Tabelbetegnelser beskriver tabellens kontekst og generelle indhold.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Skærmlæsere kan ikke fortolke tabeller uden den rette struktur. Tabeloverskrifter giver en ide om indholdet og en oversigt over det.","set_header_scope_8c548f40":"Indstil overskriftens omfang","set_table_header_cfab13a0":"Indstil tabellens overskrift","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Brugere, der er i stand til at se, gennemser websider hurtigt og leder efter store overskrifter. Skærmlæsere er afhængige af overskrifter for kontekstuel forståelse. Overskrifter bør anvende den rigtige struktur.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Brugere, der er i stand til at se, gennemser websider hurtigt og leder efter store overskrifter. Skærmlæsere er afhængige af overskrifter for kontekstuel forståelse. Overskrifter bør være kortfattede inden for den rigtige struktur.","table_header_starting_with_start_ffcabba6":"Tabeloverskrift, der starter med { start }","table_starting_with_start_e7232848":"Tabel, der starter med { start }","tables_headers_should_specify_scope_5abf3a8e":"Tabeloverskrifter skal angive omfang.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabeller skal indeholde en billedtekst, der beskriver tabellens indhold.","tables_should_include_at_least_one_header_48779eac":"Tabeller skal indeholde mindst et overskrift.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Tekst er vanskelig at læse uden tilstrækkelig kontrast mellem tekst og baggrund, især for personer med dårligt syn.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Tekst større end 18pt (eller fed 14pt) skal have et kontrastforhold på mindst 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Tekst mindre end 18pt (eller fed 14pt) skal have et kontrastforhold på mindst 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Når der anvendes fremhævelse, der visuelt formaterer elementer i listeform, men som ikke angiver listeforholdet, kan brugere have svært ved at navigere gennem oplysningerne.","why_523b3d8c":"Hvorfor"},"da":{"accessibility_checker_b3af1f6c":"Tilgægelighedskontrol","action_to_take_b626a99a":"Handling, der skal tages:","add_a_caption_2a915239":"Tilføj billedtekst","add_alt_text_for_the_image_48cd88aa":"Tilføj alternativ tekst til billedet","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Tilstødende links med samme URL skal være et enkelt link.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alternativ attributtekst må ikke indeholde mere end 120 tegn.","apply_781a2546":"Tildel","change_alt_text_92654906":"Skift alternativ tekst","change_heading_tag_to_paragraph_a61e3113":"Skift overskrift-tag til afsnit","change_text_color_1aecb912":"Skift tekstfarve","check_accessibility_3c78211c":"Kontroller tilgængelighed","checking_for_accessibility_issues_fac18c6d":"Kontrollerer tilgængelighedsproblemer","close_accessibility_checker_29d1c51e":"Luk tilgægelighedskontrol","close_d634289d":"Luk","column_e1ae5c64":"Kolonne","column_group_1c062368":"Kolonnegruppe","decorative_image_fde98579":"Dekorativt billede","element_starting_with_start_91bf4c3b":"Element begynder med { start }","fix_heading_hierarchy_f60884c4":"Ret overskriftshierarki","format_as_a_list_142210c3":"Listeformat","header_column_f27433cb":"Overskriftskolonne","header_row_and_column_ec5b9ec":"Overskriftsrække- og kolonne","header_row_f33eb169":"Overskriftsrække","heading_levels_should_not_be_skipped_3947c0e0":"Overskriftsniveauer bør ikke springes over.","heading_starting_with_start_42a3e7f9":"Overskrift, der starter med { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Overskrifter må ikke indeholde mere end 120 tegn.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Billedfilnavne bør ikke bruges som den alternative attribut, der beskriver billedindholdet.","image_with_filename_file_aacd7180":"Billede med filnavn { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Billeder skal indeholde en alternativ attribut, der beskriver billedindholdet.","issue_num_total_f94536cf":"Udstedelse { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Tastaturer navigerer til links ved hjælp af Tab-tasten. To tilstødende links, der fører til samme destination, kan være forvirrende for tastaturbrugere.","learn_more_about_adjacent_links_2cb9762c":"Få mere at vide om tilstødende links","learn_more_about_color_contrast_c019dfb9":"Få mere at vide om farvekontrast","learn_more_about_organizing_page_headings_8a7caa2e":"Få mere at vide om at organisere sideoverskrifter","learn_more_about_table_headers_5f5ee13":"Få mere at vide om tabeloverskrifter","learn_more_about_using_alt_text_for_images_5698df9a":"Få mere at vide om at bruge alt-tekst til billeder","learn_more_about_using_captions_with_tables_36fe496f":"Få mere at vide om brug af billedtekster med tabeller","learn_more_about_using_filenames_as_alt_text_264286af":"Få mere at vide om at bruge filnavne som alt-tekst","learn_more_about_using_lists_4e6eb860":"Få mere at vide om at bruge lister","learn_more_about_using_scope_attributes_with_table_20df49aa":"Få mere at vide om at bruge anvendelsesområde-attributter med tabeller","leave_as_is_4facfe55":"Lad det være, som det er","link_with_text_starting_with_start_b3fcbe71":"Link med tekst, der begynder med { start }","lists_should_be_formatted_as_lists_f862de8d":"Lister skal have listeformat.","merge_links_2478df96":"Sammenlæg links","next_40e12421":"Næste","no_accessibility_issues_were_detected_f8d3c875":"Der blev ikke fundet nogen tilgængelighedsproblemer.","no_headers_9bc7dc7f":"Ingen overskrifter","none_3b5e34d2":"Ingen","paragraph_starting_with_start_a59923f8":"Paragraf begynder med { start }","prev_f82cbc48":"Forrige","remove_heading_style_5fdc8855":"Fjern overskriftsstil","row_fc0944a7":"Række","row_group_979f5528":"Rækkegruppe","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Skærmlæsere kan ikke bestemme, hvad der vises i et billede uden alternativ tekst, og filnavne er ofte en meningsløs række tal og bogstaver, der ikke beskriver konteksten eller betydningen.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Skærmlæsere kan ikke bestemme, hvad der vises i et billede uden alternativ tekst, der beskriver billedets indhold og betydning. Alternativ tekst skal være enkel og kortfattet.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Skærmlæsere kan ikke bestemme, hvad der vises i et billede uden alternativ tekst, der beskriver billedets indhold og betydning.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Skærmlæsere kan ikke fortolke tabeller uden den rette struktur. Tabeloverskrifter giver en ide om indholdet og dets omfang.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Skærmlæsere kan ikke fortolke tabeller uden den rette struktur. Tabelbetegnelser beskriver tabellens kontekst og generelle indhold.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Skærmlæsere kan ikke fortolke tabeller uden den rette struktur. Tabeloverskrifter giver en ide om indholdet og en oversigt over det.","set_header_scope_8c548f40":"Indstil overskriftens omfang","set_table_header_cfab13a0":"Indstil tabellens overskrift","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Brugere, der er i stand til at se, gennemser websider hurtigt og leder efter store overskrifter. Skærmlæsere er afhængige af overskrifter for kontekstuel forståelse. Overskrifter bør anvende den rigtige struktur.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Brugere, der er i stand til at se, gennemser websider hurtigt og leder efter store overskrifter. Skærmlæsere er afhængige af overskrifter for kontekstuel forståelse. Overskrifter bør være kortfattede inden for den rigtige struktur.","table_header_starting_with_start_ffcabba6":"Tabeloverskrift, der starter med { start }","table_starting_with_start_e7232848":"Tabel, der starter med { start }","tables_headers_should_specify_scope_5abf3a8e":"Tabeloverskrifter skal angive omfang.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabeller skal indeholde en billedtekst, der beskriver tabellens indhold.","tables_should_include_at_least_one_header_48779eac":"Tabeller skal indeholde mindst et overskrift.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Tekst er vanskelig at læse uden tilstrækkelig kontrast mellem tekst og baggrund, især for personer med dårligt syn.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Tekst større end 18pt (eller fed 14pt) skal have et kontrastforhold på mindst 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Tekst mindre end 18pt (eller fed 14pt) skal have et kontrastforhold på mindst 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Når der anvendes fremhævelse, der visuelt formaterer elementer i listeform, men som ikke angiver listeforholdet, kan brugere have svært ved at navigere gennem oplysningerne.","why_523b3d8c":"Hvorfor"},"de":{"accessibility_checker_b3af1f6c":"Zugangskontrolle","action_to_take_b626a99a":"Auszuführende Tätigkeiten:","add_a_caption_2a915239":"Eine Beschriftung hinzufügen","add_alt_text_for_the_image_48cd88aa":"Alternativen Text für das Bild hinzufügen","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Nebenstehende Links mit dem gleichen URL sollten ein einziger Link sein.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Der alternative Text sollte nicht länger als 120 Zeichen sein.","apply_781a2546":"Anwenden","change_alt_text_92654906":"Alt. Text ändern","change_heading_tag_to_paragraph_a61e3113":"Überschrifts-Tag zu Absatz ändern","change_text_color_1aecb912":"Textfarbe ändern","check_accessibility_3c78211c":"Zugänglichkeit prüfen","checking_for_accessibility_issues_fac18c6d":"Zugangsprobleme werden überprüft","close_accessibility_checker_29d1c51e":"Zugangsprüfung schließen","close_d634289d":"Schließen","column_e1ae5c64":"Spalte","column_group_1c062368":"Spaltengruppe","decorative_image_fde98579":"Dekoratives Bild","element_starting_with_start_91bf4c3b":"Element beginnt mit { start }","fix_heading_hierarchy_f60884c4":"Feste Überschriftshierarchie","format_as_a_list_142210c3":"Format als Liste","header_column_f27433cb":"Überschrift Spalte","header_row_and_column_ec5b9ec":"Überschrift Zeile und Spalte","header_row_f33eb169":"Überschrift Zeile","heading_levels_should_not_be_skipped_3947c0e0":"Die Überschriftsebene darf nicht übersprungen werden.","heading_starting_with_start_42a3e7f9":"Überschrift beginnt mit { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Überschriften dürfen nicht länger als 120 Zeichen sein.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Bilddateinamen dürfen für das Alt-Attribut zur Beschreibung des Bildinhalts nicht verwendet werden.","image_with_filename_file_aacd7180":"Bild mit dem Dateinamen { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Bilder müssen ein Alt-Attribut zur Beschreibung des Bildinhalts haben.","issue_num_total_f94536cf":"Fehler { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Tastaturnavigation zu Links mithilfe der Tabulatortaste. Zwei benachbarte Links, die direkt zum gleichen Ziel führen, können für den Tastaturbenutzer verwirrend sein.","learn_more_about_adjacent_links_2cb9762c":"Weitere Informationen über nebenstehende Links","learn_more_about_color_contrast_c019dfb9":"Weitere Informationen über Farbkontrast","learn_more_about_organizing_page_headings_8a7caa2e":"Weitere Informationen über das Organisieren der Seitenüberschriften","learn_more_about_table_headers_5f5ee13":"Weitere Informationen über Tabellenkopfzeilen","learn_more_about_using_alt_text_for_images_5698df9a":"Weitere Informationen zur Verwendung von alternativem Text für Bilder","learn_more_about_using_captions_with_tables_36fe496f":"Weitere Informationen zur Verwendung von Tabellenbeschriftungen","learn_more_about_using_filenames_as_alt_text_264286af":"Weitere Informationen zur Verwendung von Dateinamen als alternativen Text","learn_more_about_using_lists_4e6eb860":"Weitere Informationen zur Verwendung von Listen","learn_more_about_using_scope_attributes_with_table_20df49aa":"Weitere Informationen zur Verwendung von Bereichsattributen bei Tabellen","leave_as_is_4facfe55":"Lassen, wie es ist","link_with_text_starting_with_start_b3fcbe71":"Link mit Text, beginnend mit { start }","lists_should_be_formatted_as_lists_f862de8d":"Listen sollten als Listen formatiert werden.","merge_links_2478df96":"Links zusammenführen","next_40e12421":"Weiter","no_accessibility_issues_were_detected_f8d3c875":"Es wurden keine Zugangsprobleme festgestellt.","no_headers_9bc7dc7f":"Keine Header","none_3b5e34d2":"Keine","paragraph_starting_with_start_a59923f8":"Absatz, beginnend mit { start }","prev_f82cbc48":"Vorher","remove_heading_style_5fdc8855":"Überschriftsstil entfernen","row_fc0944a7":"Zeile","row_group_979f5528":"Zeilengruppe","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Ohne alternativen Text kann ein Bildschirmbetrachter nicht bestimmen, was auf einem Bild gezeigt wird, zumal die Dateinamen oft sinnlose Zeichenfolgen aus Zahlen und Buchstaben sind, die weder den Kontext noch die Bedeutung erläutern.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Ohne alternativen Text, der den Kontext und die Bedeutung erläutert, kann ein Bildschirmbetrachter nicht bestimmen, was auf einem Bild gezeigt wird. Alternativer Text sollte einfach und präzise sein.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Ohne alternativen Text, der den Kontext und die Bedeutung erläutert, kann ein Bildschirmbetrachter nicht bestimmen, was auf einem Bild gezeigt wird.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Bildschirmbetrachter können Tabellen ohne die entsprechende Struktur nicht interpretieren. Tabellenüberschriften liefern die Richtung und den Anwendungsbereich des Inhalts.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Bildschirmbetrachter können Tabellen ohne die entsprechende Struktur nicht interpretieren. Tabellenbeschriftungen beschreiben den Kontext und die allgemeine Bedeutung der Tabelle.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Bildschirmbetrachter können Tabellen ohne die entsprechende Struktur nicht interpretieren. Tabellenüberschriften weisen die Richtung und geben eine Übersicht über den Inhalt.","set_header_scope_8c548f40":"Den Anwendungsbereich der Überschrift festlegen","set_table_header_cfab13a0":"Tabellenüberschrift festlegen","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Sehende Benutzer durchsuchen Webseiten schnell nach groß- oder fettgedruckten Überschriften. Benutzer von Bildschirmbetrachtern sind für ein kontextbezogenes Verständnis auf Überschriften angewiesen. Überschriften sollten die entsprechende Struktur verwenden.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Sehende Benutzer durchsuchen Webseiten schnell nach groß- oder fettgedruckten Überschriften. Benutzer von Bildschirmbetrachtern sind für ein kontextbezogenes Verständnis auf Überschriften angewiesen. Überschriften sollten die entsprechende Struktur knapp wiedergeben.","table_header_starting_with_start_ffcabba6":"Tabellenüberschriften, beginnend mit { start }","table_starting_with_start_e7232848":"Tabelle, beginnend mit { start }","tables_headers_should_specify_scope_5abf3a8e":"Tabellenüberschriften sollten den Geltungsbereich angeben.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabellen sollten über eine Bildunterschrift verfügen, die den Inhalt der Tabelle beschreibt.","tables_should_include_at_least_one_header_48779eac":"Tabellen sollten mindestens eine Überschrift haben.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Der Text ist, insbesondere für Menschen mit Sehschwäche, schwer zu lesen, wenn der Kontrast zwischen Text und Hintergrund nicht ausreicht.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Text, der größer als 18 Punkte ist (bei Fettdruck 14 Punkte), sollte einen Mindestkontrastverhältnis von 3:1 haben.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Text, der kleiner als 18 Punkte ist (bei Fettdruck 14 Punkte), sollte einen Mindestkontrastverhältnis von 4,5:1 haben.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Wenn Markup verwendet wird, das die Elemente optisch als Liste formatiert, die Listenbeziehung jedoch nicht zeigt, haben Benutzer möglicherweise Schwierigkeiten, in diesen Informationen zu navigieren.","why_523b3d8c":"Warum?"},"en-AU":{"accessibility_checker_b3af1f6c":"Accessibility Checker","action_to_take_b626a99a":"Action to take:","add_a_caption_2a915239":"Add a caption","add_alt_text_for_the_image_48cd88aa":"Add alt text for the image","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Adjacent links with the same URL should be a single link.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alt attribute text should not contain more than 120 characters.","apply_781a2546":"Apply","change_alt_text_92654906":"Change alt text","change_heading_tag_to_paragraph_a61e3113":"Change heading tag to paragraph","change_text_color_1aecb912":"Change text colour","check_accessibility_3c78211c":"Check Accessibility","checking_for_accessibility_issues_fac18c6d":"Checking for accessibility issues","close_accessibility_checker_29d1c51e":"Close Accessibility Checker","close_d634289d":"Close","column_e1ae5c64":"Column","column_group_1c062368":"Column group","decorative_image_fde98579":"Decorative image","element_starting_with_start_91bf4c3b":"Element starting with { start }","fix_heading_hierarchy_f60884c4":"Fix heading hierarchy","format_as_a_list_142210c3":"Format as a list","header_column_f27433cb":"Header column","header_row_and_column_ec5b9ec":"Header row and column","header_row_f33eb169":"Header row","heading_levels_should_not_be_skipped_3947c0e0":"Heading levels should not be skipped.","heading_starting_with_start_42a3e7f9":"Heading starting with { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Headings should not contain more than 120 characters.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Image filenames should not be used as the alt attribute describing the image content.","image_with_filename_file_aacd7180":"Image with filename { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Images should include an alt attribute describing the image content.","issue_num_total_f94536cf":"Issue { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Keyboards navigate to links using the Tab key. Two adjacent links that direct to the same destination can be confusing to keyboard users.","learn_more_about_adjacent_links_2cb9762c":"Learn more about adjacent links","learn_more_about_color_contrast_c019dfb9":"Learn more about colour contrast","learn_more_about_organizing_page_headings_8a7caa2e":"Learn more about organising page headings","learn_more_about_table_headers_5f5ee13":"Learn more about table headers","learn_more_about_using_alt_text_for_images_5698df9a":"Learn more about using alt text for images","learn_more_about_using_captions_with_tables_36fe496f":"Learn more about using captions with tables","learn_more_about_using_filenames_as_alt_text_264286af":"Learn more about using filenames as alt text","learn_more_about_using_lists_4e6eb860":"Learn more about using lists","learn_more_about_using_scope_attributes_with_table_20df49aa":"Learn more about using scope attributes with tables","leave_as_is_4facfe55":"Leave as is","link_with_text_starting_with_start_b3fcbe71":"Link with text starting with { start }","lists_should_be_formatted_as_lists_f862de8d":"Lists should be formatted as lists.","merge_links_2478df96":"Merge links","next_40e12421":"Next","no_accessibility_issues_were_detected_f8d3c875":"No accessibility issues were detected.","no_headers_9bc7dc7f":"No headers","none_3b5e34d2":"None","paragraph_starting_with_start_a59923f8":"Paragraph starting with { start }","prev_f82cbc48":"Prev","remove_heading_style_5fdc8855":"Remove heading style","row_fc0944a7":"Row","row_group_979f5528":"Row group","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Screen readers cannot determine what is displayed in an image without alternative text, and filenames are often meaningless strings of numbers and letters that do not describe the context or meaning.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Screen readers cannot determine what is displayed in an image without alternative text which describes the content and meaning of the image. Alternative text should be simple and concise.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Screen readers cannot determine what is displayed in an image without alternative text that describes the content and meaning of the image.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Screen readers cannot interpret tables without the proper structure. Table headers provide direction and content scope.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Screen readers cannot interpret tables without the proper structure. Table captions describe the context and general understanding of the table.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Screen readers cannot interpret tables without the proper structure. Table headers provide direction and overview of the content.","set_header_scope_8c548f40":"Set header scope","set_table_header_cfab13a0":"Set table header","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Sighted users browse web pages quickly, looking for large or bolded headings. Screen reader users rely on headers for contextual understanding. Headers should use the proper structure.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Sighted users browse web pages quickly, looking for large or bolded headings. Screen reader users rely on headers for contextual understanding. Headers should be concise within the proper structure.","table_header_starting_with_start_ffcabba6":"Table header starting with { start }","table_starting_with_start_e7232848":"Table starting with { start }","tables_headers_should_specify_scope_5abf3a8e":"Table headers should specify scope.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tables should include a caption describing the contents of the table.","tables_should_include_at_least_one_header_48779eac":"Tables should include at least one header.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Text is difficult to read without sufficient contrast between the text and the background, especially for those with low vision.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Text larger than 18pt (or bold 14pt) should display a minimum contrast ratio of 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Text smaller than 18pt (or bold 14pt) should display a minimum contrast ratio of 4.5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"When markup is used that visually formats items as a list but does not indicate the list relationship, users may have difficulty in navigating the information.","why_523b3d8c":"Why"},"en-GB":{"accessibility_checker_b3af1f6c":"Accessibility checker","action_to_take_b626a99a":"Action to take:","add_a_caption_2a915239":"Add a caption","add_alt_text_for_the_image_48cd88aa":"Add alt text for the image","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Adjacent links with the same URL should be a single link.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alt attribute text should not contain more than 120 characters.","apply_781a2546":"Apply","change_alt_text_92654906":"Change alt text","change_heading_tag_to_paragraph_a61e3113":"Change heading tag to paragraph","change_text_color_1aecb912":"Change text colour","check_accessibility_3c78211c":"Check accessibility","checking_for_accessibility_issues_fac18c6d":"Checking for accessibility issues","close_accessibility_checker_29d1c51e":"Close accessibility checker","close_d634289d":"Close","column_e1ae5c64":"Column","column_group_1c062368":"Column group","decorative_image_fde98579":"Decorative image","element_starting_with_start_91bf4c3b":"Element starting with { start }","fix_heading_hierarchy_f60884c4":"Fix heading hierarchy","format_as_a_list_142210c3":"Format as a list","header_column_f27433cb":"Header column","header_row_and_column_ec5b9ec":"Header row and column","header_row_f33eb169":"Header row","heading_levels_should_not_be_skipped_3947c0e0":"Heading levels should not be skipped.","heading_starting_with_start_42a3e7f9":"Heading starting with { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Headings should not contain more than 120 characters.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Image filenames should not be used as the alt attribute describing the image content.","image_with_filename_file_aacd7180":"Image with filename { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Images should include an alt attribute describing the image content.","issue_num_total_f94536cf":"Issue { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Keyboards navigate to links using the Tab key. Two adjacent links that direct to the same destination can be confusing to keyboard users.","learn_more_about_adjacent_links_2cb9762c":"Learn more about adjacent links","learn_more_about_color_contrast_c019dfb9":"Learn more about colour contrast","learn_more_about_organizing_page_headings_8a7caa2e":"Learn more about organising page headings","learn_more_about_table_headers_5f5ee13":"Learn more about table headers","learn_more_about_using_alt_text_for_images_5698df9a":"Learn more about using alt text for images","learn_more_about_using_captions_with_tables_36fe496f":"Learn more about using captions with tables","learn_more_about_using_filenames_as_alt_text_264286af":"Learn more about using filenames as alt text","learn_more_about_using_lists_4e6eb860":"Learn more about using lists","learn_more_about_using_scope_attributes_with_table_20df49aa":"Learn more about using scope attributes with tables","leave_as_is_4facfe55":"Leave as is","link_with_text_starting_with_start_b3fcbe71":"Link with text starting with { start }","lists_should_be_formatted_as_lists_f862de8d":"Lists should be formatted as lists.","merge_links_2478df96":"Merge links","next_40e12421":"Next","no_accessibility_issues_were_detected_f8d3c875":"No accessibility issues were detected.","no_headers_9bc7dc7f":"No headers","none_3b5e34d2":"None","paragraph_starting_with_start_a59923f8":"Paragraph starting with { start }","prev_f82cbc48":"Prev","remove_heading_style_5fdc8855":"Remove heading style","row_fc0944a7":"Row","row_group_979f5528":"Row group","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Screen readers cannot determine what is displayed in an image without alternative text, and filenames are often meaningless strings of numbers and letters that do not describe the context or meaning.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Screen readers cannot determine what is displayed in an image without alternative text, which describes the content and meaning of the image. Alternative text should be simple and concise.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Screen readers cannot determine what is displayed in an image without alternative text, which describes the content and meaning of the image.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Screen readers cannot interpret tables without the proper structure. Table headers provide direction and content scope.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Screen readers cannot interpret tables without the proper structure. Table captions describe the context and general understanding of the table.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Screen readers cannot interpret tables without the proper structure. Table headers provide direction and overview of the content.","set_header_scope_8c548f40":"Set header scope","set_table_header_cfab13a0":"Set table header","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Sighted users browse web pages quickly, looking for large or bolded headings. Screen reader users rely on headers for contextual understanding. Headers should use the proper structure.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Sighted users browse web pages quickly, looking for large or bolded headings. Screen reader users rely on headers for contextual understanding. Headers should be concise within the proper structure.","table_header_starting_with_start_ffcabba6":"Table header starting with { start }","table_starting_with_start_e7232848":"Table starting with { start }","tables_headers_should_specify_scope_5abf3a8e":"Tables headers should specify scope.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tables should include a caption describing the contents of the table.","tables_should_include_at_least_one_header_48779eac":"Tables should include at least one header.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Text is difficult to read without sufficient contrast between the text and the background, especially for those with low vision.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Text larger than 18pt (or bold 14pt) should display a minimum contrast ratio of 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Text smaller than 18pt (or bold 14pt) should display a minimum contrast ratio of 4.5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"When mark-up is used, it visually formats items as a list but does not indicate the list relationship, users may have difficulty in navigating the information.","why_523b3d8c":"Why"},"en":{"accessibility_checker_b3af1f6c":"Accessibility Checker","action_to_take_b626a99a":"Action to take:","add_a_caption_2a915239":"Add a caption","add_alt_text_for_the_image_48cd88aa":"Add alt text for the image","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Adjacent links with the same URL should be a single link.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alt attribute text should not contain more than 120 characters.","apply_781a2546":"Apply","change_alt_text_92654906":"Change alt text","change_heading_tag_to_paragraph_a61e3113":"Change heading tag to paragraph","change_text_color_1aecb912":"Change text color","check_accessibility_3c78211c":"Check Accessibility","checking_for_accessibility_issues_fac18c6d":"Checking for accessibility issues","close_accessibility_checker_29d1c51e":"Close Accessibility Checker","close_d634289d":"Close","column_e1ae5c64":"Column","column_group_1c062368":"Column group","decorative_image_fde98579":"Decorative image","element_starting_with_start_91bf4c3b":"Element starting with { start }","fix_heading_hierarchy_f60884c4":"Fix heading hierarchy","format_as_a_list_142210c3":"Format as a list","header_column_f27433cb":"Header column","header_row_and_column_ec5b9ec":"Header row and column","header_row_f33eb169":"Header row","heading_levels_should_not_be_skipped_3947c0e0":"Heading levels should not be skipped.","heading_starting_with_start_42a3e7f9":"Heading starting with { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Headings should not contain more than 120 characters.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Image filenames should not be used as the alt attribute describing the image content.","image_with_filename_file_aacd7180":"Image with filename { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Images should include an alt attribute describing the image content.","issue_num_total_f94536cf":"Issue { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Keyboards navigate to links using the Tab key. Two adjacent links that direct to the same destination can be confusing to keyboard users.","learn_more_about_adjacent_links_2cb9762c":"Learn more about adjacent links","learn_more_about_color_contrast_c019dfb9":"Learn more about color contrast","learn_more_about_organizing_page_headings_8a7caa2e":"Learn more about organizing page headings","learn_more_about_table_headers_5f5ee13":"Learn more about table headers","learn_more_about_using_alt_text_for_images_5698df9a":"Learn more about using alt text for images","learn_more_about_using_captions_with_tables_36fe496f":"Learn more about using captions with tables","learn_more_about_using_filenames_as_alt_text_264286af":"Learn more about using filenames as alt text","learn_more_about_using_lists_4e6eb860":"Learn more about using lists","learn_more_about_using_scope_attributes_with_table_20df49aa":"Learn more about using scope attributes with tables","leave_as_is_4facfe55":"Leave as is","link_with_text_starting_with_start_b3fcbe71":"Link with text starting with { start }","lists_should_be_formatted_as_lists_f862de8d":"Lists should be formatted as lists.","merge_links_2478df96":"Merge links","next_40e12421":"Next","no_accessibility_issues_were_detected_f8d3c875":"No accessibility issues were detected.","no_headers_9bc7dc7f":"No headers","none_3b5e34d2":"None","paragraph_starting_with_start_a59923f8":"Paragraph starting with { start }","prev_f82cbc48":"Prev","remove_heading_style_5fdc8855":"Remove heading style","row_fc0944a7":"Row","row_group_979f5528":"Row group","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Screen readers cannot determine what is displayed in an image without alternative text, and filenames are often meaningless strings of numbers and letters that do not describe the context or meaning.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Screen readers cannot determine what is displayed in an image without alternative text, which describes the content and meaning of the image. Alternative text should be simple and concise.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Screen readers cannot determine what is displayed in an image without alternative text, which describes the content and meaning of the image.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Screen readers cannot interpret tables without the proper structure. Table headers provide direction and content scope.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Screen readers cannot interpret tables without the proper structure. Table captions describe the context and general understanding of the table.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Screen readers cannot interpret tables without the proper structure. Table headers provide direction and overview of the content.","set_header_scope_8c548f40":"Set header scope","set_table_header_cfab13a0":"Set table header","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Sighted users browse web pages quickly, looking for large or bolded headings. Screen reader users rely on headers for contextual understanding. Headers should use the proper structure.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Sighted users browse web pages quickly, looking for large or bolded headings. Screen reader users rely on headers for contextual understanding. Headers should be concise within the proper structure.","table_header_starting_with_start_ffcabba6":"Table header starting with { start }","table_starting_with_start_e7232848":"Table starting with { start }","tables_headers_should_specify_scope_5abf3a8e":"Tables headers should specify scope.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tables should include a caption describing the contents of the table.","tables_should_include_at_least_one_header_48779eac":"Tables should include at least one header.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Text is difficult to read without sufficient contrast between the text and the background, especially for those with low vision.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Text larger than 18pt (or bold 14pt) should display a minimum contrast ratio of 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Text smaller than 18pt (or bold 14pt) should display a minimum contrast ratio of 4.5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"When markup is used that visually formats items as a list but does not indicate the list relationship, users may have difficulty in navigating the information.","why_523b3d8c":"Why"},"es":{"accessibility_checker_b3af1f6c":"Verificador de accesibilidad","action_to_take_b626a99a":"Acción a tomar:","add_a_caption_2a915239":"Agregar un subtítulo","add_alt_text_for_the_image_48cd88aa":"Agregar texto alternativo para la imagen","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Los enlaces adyacentes con la misma URL deben ser un solo enlace.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"El texto del atributo alt no debe tener más de 120 caracteres.","apply_781a2546":"Aplicar","change_alt_text_92654906":"Texto alternativo de la imagen","change_heading_tag_to_paragraph_a61e3113":"Cambiar etiqueta del título a párrafo","change_text_color_1aecb912":"Cambiar color del texto","check_accessibility_3c78211c":"Cambiar accesibilidad","checking_for_accessibility_issues_fac18c6d":"Comprobando problemas de accesibilidad","close_accessibility_checker_29d1c51e":"Cerrar verificador de accesibilidad","close_d634289d":"Cerrar","column_e1ae5c64":"Columna","column_group_1c062368":"Grupo de columnas","decorative_image_fde98579":"Imagen decorativa","element_starting_with_start_91bf4c3b":"Elemento que comienza con { start }","fix_heading_hierarchy_f60884c4":"Fijar jerarquía de títulos","format_as_a_list_142210c3":"Formatear como lista","header_column_f27433cb":"Columna de encabezado","header_row_and_column_ec5b9ec":"Fila y columna de encabezado","header_row_f33eb169":"Fila de encabezado","heading_levels_should_not_be_skipped_3947c0e0":"Los niveles de los títulos no deben omitirse.","heading_starting_with_start_42a3e7f9":"Título que comienza con { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Los títulos no deben tener más de 120 caracteres.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Los nombres de archivo de las imágenes no deben usarse como el atributo alt que describe el contenido de la imagen.","image_with_filename_file_aacd7180":"Imagen con nombre de archivo { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Las imágenes deben incluir un atributo alt que describa el contenido de la imagen.","issue_num_total_f94536cf":"Problema { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Los teclados navegan por los enlaces mediante la tecla Tab. Dos enlaces adyacentes que dirigen al mismo destino pueden ser confusos para los usuarios del teclado.","learn_more_about_adjacent_links_2cb9762c":"Obtenga más información sobre los enlaces adyacentes","learn_more_about_color_contrast_c019dfb9":"Obtenga más información sobre el contraste de colores","learn_more_about_organizing_page_headings_8a7caa2e":"Obtenga más información sobre la organización de los títulos de página","learn_more_about_table_headers_5f5ee13":"Obtenga más información sobre los títulos de tablas","learn_more_about_using_alt_text_for_images_5698df9a":"Obtenga más información sobre texto alternativo para las imágenes","learn_more_about_using_captions_with_tables_36fe496f":"Obtenga más información sobre el uso de leyendas con tablas","learn_more_about_using_filenames_as_alt_text_264286af":"Obtenga más información sobre el uso de nombres de archivo como texto alternativo","learn_more_about_using_lists_4e6eb860":"Obtenga más información sobre el uso de listas","learn_more_about_using_scope_attributes_with_table_20df49aa":"Obtenga más información sobre el uso de atributos de alcance con tablas","leave_as_is_4facfe55":"Dejar sin cambios","link_with_text_starting_with_start_b3fcbe71":"Vincular con texto que comienza con { start }","lists_should_be_formatted_as_lists_f862de8d":"Las listas deben tener el formato de listas.","merge_links_2478df96":"Fusionar enlaces","next_40e12421":"Siguiente","no_accessibility_issues_were_detected_f8d3c875":"No se detectaron problemas de accesibilidad.","no_headers_9bc7dc7f":"Sin encabezados","none_3b5e34d2":"Ninguno","paragraph_starting_with_start_a59923f8":"Párrafo que comienza con { start }","prev_f82cbc48":"Previo","remove_heading_style_5fdc8855":"Eliminar estilo del título","row_fc0944a7":"Fila","row_group_979f5528":"Grupo de filas","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Los lectores de pantalla no pueden determinar lo que se muestra en una imagen sin texto alternativo, y los nombres de archivo con frecuencia son secuencias de números y letras sin sentido que no describen el contexto o significado.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Los lectores de pantalla no pueden determinar lo que se muestra en una imagen sin texto alternativo, el cual describe el contexto y el significado de la imagen. El texto alternativo debe ser simple y conciso.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Los lectores de pantalla no pueden determinar lo que se muestra en una imagen sin texto alternativo, el cual describe el contexto y el significado de la imagen.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Los lectores de pantalla no pueden interpretar tablas sin la estructura apropiada. Los encabezados de tablas brindan orientación y el alcance del contenido.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Los lectores de pantalla no pueden interpretar tablas sin la estructura apropiada. Los subtítulos de las tablas describen el contexto y la comprensión general de la tabla.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Los lectores de pantalla no pueden interpretar tablas sin la estructura apropiada. Los encabezados de tablas brindan orientación y una descripción del contenido.","set_header_scope_8c548f40":"Establecer alcance del encabezado","set_table_header_cfab13a0":"Establecer encabezado de la tabla","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Los usuarios detectados navegan rápido por las páginas web, buscando títulos grandes o en negrita. Los usuarios del lector de pantalla solo utilizan los encabezados para una comprensión contextual. Los encabezados deben tener la estructura apropiada.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Los usuarios detectados navegan rápido por las páginas web, buscando títulos grandes o en negrita. Los usuarios del lector de pantalla solo utilizan los encabezados para una comprensión contextual. Los encabezados deben ser concisos dentro de la estructura apropiada.","table_header_starting_with_start_ffcabba6":"Encabezado de tabla que comienza con { start }","table_starting_with_start_e7232848":"Tabla que comienza con { start }","tables_headers_should_specify_scope_5abf3a8e":"Los encabezados de las tablas deben especificar el alcance.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Las tablas deben incluir un subtítulo que describa el contenido de la tabla.","tables_should_include_at_least_one_header_48779eac":"Las tablas deben incluir al menos un encabezado.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"El El texto es difícil de leer si no hay contraste suficiente entre el texto y el fondo, especialmente para aquellas personas con visión reducida.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"El texto de tamaño mayor de 18pt (o 14pt en negrita) debe mostrar una relación de contraste mínima de 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"El texto de tamaño menor de 18pt (o 14pt en negrita) debe mostrar una relación de contraste mínima de 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Cuando se usa el marcado que formatea visualmente los elementos como una lista pero no indica la relación de la lista, los usuarios pueden tener dificultades para navegar por la información.","why_523b3d8c":"Por qué"},"fr-CA":{"accessibility_checker_b3af1f6c":"Vérificateur d\'\'accessibilité","action_to_take_b626a99a":"Mesures à prendre :","add_a_caption_2a915239":"Ajoutez une légende","add_alt_text_for_the_image_48cd88aa":"Ajouter texte alt pour l\'\'image","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Liens adjacents avec la même URL devrait être une liaison unique.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Le texte alt ne peut pas être constitué de plus de 120 caractères.","apply_781a2546":"Appliquer","change_alt_text_92654906":"Modifier le texte alternatif (texte Alt)","change_heading_tag_to_paragraph_a61e3113":"Modifier la balise d’entête au paragraphe","change_text_color_1aecb912":"Modifier la couleur du texte","check_accessibility_3c78211c":"Vérifier l\'\'accessibilité","checking_for_accessibility_issues_fac18c6d":"Vérification des problèmes d\'\'accessibilité","close_accessibility_checker_29d1c51e":"Fermer le vérificateur d\'\'accessibilité","close_d634289d":"Fermer","column_e1ae5c64":"Colonne","column_group_1c062368":"Groupe de colonnes","decorative_image_fde98579":"Image décorative","element_starting_with_start_91bf4c3b":"Élément commençant par { start }","fix_heading_hierarchy_f60884c4":"Corriger la hiérarchie d’entête","format_as_a_list_142210c3":"Formater comme une liste","header_column_f27433cb":"Entête de colonne","header_row_and_column_ec5b9ec":"Ligne et colonne d\'\'entête","header_row_f33eb169":"Ligne d\'\'entête","heading_levels_should_not_be_skipped_3947c0e0":"Les niveaux d\'\'entête ne doivent pas être ignorés.","heading_starting_with_start_42a3e7f9":"Entête commençant par { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Les entêtes ne doivent pas contenir plus de 120 caractères.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Les fichiers d\'\'image ne doivent pas être utilisés comme l\'\'attribut alt décrivant le contenu de l\'\'image.","image_with_filename_file_aacd7180":"Image avec nom de fichier { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Les images doivent inclure un attribut alt décrivant le contenu de l\'\'image.","issue_num_total_f94536cf":"Problème { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Les claviers naviguent vers les liens à l\'\'aide de la touche de tabulation. Deux liens adjacents qui vous dirigent vers la même destination peuvent être source de confusion pour les utilisateurs de clavier.","learn_more_about_adjacent_links_2cb9762c":"En apprendre davantage  sur les liens adjacents","learn_more_about_color_contrast_c019dfb9":"En apprendre davantage sur les contraste des couleurs","learn_more_about_organizing_page_headings_8a7caa2e":"En apprendre davantage sur l\'\'organisation des en-têtes de page","learn_more_about_table_headers_5f5ee13":"En apprendre davantage sur les entêtes de tableau","learn_more_about_using_alt_text_for_images_5698df9a":"En apprendre davantage sur l\'\'utilisation du texte alt pour les images","learn_more_about_using_captions_with_tables_36fe496f":"En apprendre davantage sur l\'\'utilisation des légendes avec des tableaux","learn_more_about_using_filenames_as_alt_text_264286af":"En apprendre davantage sur l\'\'utilisation de nom de fichier en tant que texte alt","learn_more_about_using_lists_4e6eb860":"En apprendre davantage sur les listes","learn_more_about_using_scope_attributes_with_table_20df49aa":"En apprendre davantage sur l\'\'utilisation des attributs de portée avec les tableaux","leave_as_is_4facfe55":"Laisser comme tel","link_with_text_starting_with_start_b3fcbe71":"Lien avec texte commençant par { start }","lists_should_be_formatted_as_lists_f862de8d":"Les listes doivent être formatées comme une liste.","merge_links_2478df96":"Fusionner les liens","next_40e12421":"Suivant","no_accessibility_issues_were_detected_f8d3c875":"Aucun problème d\'\'accessibilité détecté.","no_headers_9bc7dc7f":"Aucun entête","none_3b5e34d2":"Aucun","paragraph_starting_with_start_a59923f8":"Paragraphe commençant par { start }","prev_f82cbc48":"Précédent","remove_heading_style_5fdc8855":"Retirer le style d’entête","row_fc0944a7":"Ligne","row_group_979f5528":"Groupe de ligne","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Les lecteurs d\'\'écran ne peuvent pas déterminer ce qui est affiché dans une image sans texte alternatif, et les noms de fichiers sont souvent des chaînes de chiffres et de lettres dénuées de sens qui ne décrivent pas le contexte ou le sens.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Les lecteurs d\'\'écran ne peuvent pas déterminer ce qui est affiché dans une image sans texte alternatif, qui décrit le contenu et la signification de l\'\'image. Le texte alternatif devrait être simple et concis.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Les lecteurs d\'\'écran ne peuvent pas déterminer ce qui est affiché dans une image sans texte alternatif, qui décrit le contenu et la signification de l\'\'image.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Les lecteurs d\'\'écran ne peuvent pas interpréter les tableaux sans la structure appropriée. Les entêtes de tableau fournissent une orientation et portée du contenu.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Les lecteurs d\'\'écran ne peuvent pas interpréter les tableaux sans la structure appropriée. Les légendes de tableau décrivent le contexte et la compréhension générale du tableau.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Les lecteurs d\'\'écran ne peuvent pas interpréter les tableaux sans la structure appropriée. Les entêtes de tableau fournissent une orientation et l’aperçu du contenu.","set_header_scope_8c548f40":"Définir la portée de l’entête","set_table_header_cfab13a0":"Définir l\'\'entête du tableau","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Les utilisateurs voyants parcourent rapidement les pages Web, à la recherche d’entêtes en gros caractères ou en caractères gras. Les utilisateurs de lecteurs d\'\'écran comptent sur les entêtes pour une compréhension contextuelle. Les entêtes devraient utiliser la structure appropriée.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Les utilisateurs voyants parcourent rapidement les pages Web, à la recherche d’entêtes en gros caractères ou en caractères gras. Les utilisateurs de lecteurs d\'\'écran comptent sur les entêtes pour une compréhension contextuelle. Les entêtes devraient être concis au sein de la structure appropriée.","table_header_starting_with_start_ffcabba6":"Entête de tableau commençant par { start }","table_starting_with_start_e7232848":"Tableau commençant par { start }","tables_headers_should_specify_scope_5abf3a8e":"Les entêtes de tableau doivent spécifier la portée.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Les tableaux devraient comporter une légende décrivant le contenu du tableau.","tables_should_include_at_least_one_header_48779eac":"Les tableaux doivent inclure au moins un entête.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Le texte est difficile à lire sans contraste suffisant entre le texte et l\'\'arrière-plan, en particulier pour ceux ayant une vision faible.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Un texte d\'\'une police supérieure à 18pt (ou 14pt gras) doit afficher un rapport de contraste minimum de 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Un texte avec une police plus petite que 18pt (ou 14pt gras) doit afficher un rapport de contraste minimum de 4.5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Lorsque le langage de balisage est utilisé pour formater visuellement les éléments sous forme de liste, mais n\'\'indique pas la relation de la liste, les utilisateurs peuvent avoir de la difficulté à naviguer dans l\'\'information.","why_523b3d8c":"Pourquoi"},"fr":{"accessibility_checker_b3af1f6c":"Vérificateur d’accessibilité","action_to_take_b626a99a":"Mesures à prendre :","add_a_caption_2a915239":"Ajouter une légende","add_alt_text_for_the_image_48cd88aa":"Ajouter un texte alternatif à l’image","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Les liens adjacents ayant la même URL devraient être rassemblés en un seul lien.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Le texte de l’attribut alt ne devrait pas contenir plus de 120 caractères.","apply_781a2546":"Appliquer","change_alt_text_92654906":"Modifier le texte alternatif","change_heading_tag_to_paragraph_a61e3113":"Transformer la balise en-tête en paragraphe","change_text_color_1aecb912":"Changer la couleur du texte","check_accessibility_3c78211c":"Vérifier l’accessibilité","checking_for_accessibility_issues_fac18c6d":"Vérification des éventuels problèmes d’accessibilité...","close_accessibility_checker_29d1c51e":"Fermer le vérificateur d’accessibilité","close_d634289d":"Fermer","column_e1ae5c64":"Colonne","column_group_1c062368":"Groupe de colonnes","decorative_image_fde98579":"Image décorative","element_starting_with_start_91bf4c3b":"Élément commençant par { start }","fix_heading_hierarchy_f60884c4":"Corriger la hiérarchie des en-têtes","format_as_a_list_142210c3":"Présenter sous forme de liste","header_column_f27433cb":"Colonne d’en-tête","header_row_and_column_ec5b9ec":"Rangée et colonne d’en-tête","header_row_f33eb169":"Rangée d’en-tête","heading_levels_should_not_be_skipped_3947c0e0":"Vous devez éviter de sauter certains niveaux d’en-tête.","heading_starting_with_start_42a3e7f9":"En-tête commençant par { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Les en-têtes ne devraient pas contenir plus de 120 caractères.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Les noms de fichiers des images ne devraient pas servir d’attribut alt décrivant le contenu de l’image.","image_with_filename_file_aacd7180":"Image ayant le nom de fichier { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Les images devraient contenir un attribut alt décrivant leur contenu.","issue_num_total_f94536cf":"Problème { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Au clavier, on navigue parmi les liens à l’aide de la touche tabulation. Lorsque deux liens adjacents renvoient à la même destination, cela peut porter à confusion pour les utilisateurs au clavier.","learn_more_about_adjacent_links_2cb9762c":"Apprenez-en davantage sur les liens adjacents","learn_more_about_color_contrast_c019dfb9":"Apprenez-en davantage sur le contraste couleur","learn_more_about_organizing_page_headings_8a7caa2e":"Apprenez-en davantage sur la façon d’organiser les en-têtes de page","learn_more_about_table_headers_5f5ee13":"Apprenez-en davantage sur les en-tête de tableaux","learn_more_about_using_alt_text_for_images_5698df9a":"Apprenez-en davantage sur l’utilisation de texte dans les images","learn_more_about_using_captions_with_tables_36fe496f":"Apprenez-en davantage sur l’utilisation de légendes dans les tableaux","learn_more_about_using_filenames_as_alt_text_264286af":"Apprenez-en davantage sur l’utilisation de noms de fichiers comme texte alternatif","learn_more_about_using_lists_4e6eb860":"Apprenez-en davantage sur l’utilisation des listes","learn_more_about_using_scope_attributes_with_table_20df49aa":"Apprenez-en davantage sur l’utilisation de l\'\'attribut Scope dans les tableaux","leave_as_is_4facfe55":"Laisser en l’état","link_with_text_starting_with_start_b3fcbe71":"Lien contenant du texte commençant par { start }","lists_should_be_formatted_as_lists_f862de8d":"Les listes doivent être présentées sous forme de listes.","merge_links_2478df96":"Fusionner les liens","next_40e12421":"Suivant","no_accessibility_issues_were_detected_f8d3c875":"Aucun problème d’accessibilité détecté.","no_headers_9bc7dc7f":"Pas d’en-têtes","none_3b5e34d2":"Aucun","paragraph_starting_with_start_a59923f8":"Paragraphe commençant par { start }","prev_f82cbc48":"Précédent","remove_heading_style_5fdc8855":"Supprimer le style « en-tête »","row_fc0944a7":"Rangée","row_group_979f5528":"Groupe de rangées","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Les lecteurs d’écran ne peuvent déterminer ce qui est visible sur une image sans texte alternatif, et les noms de fichiers sont souvent une suite de caractères sans signification qui ne décrivent pas correctement le contexte ou le sens.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Les lecteurs d’écran ne peuvent déterminer ce qui est visible sur une image sans texte alternatif, lequel décrit le contenu et la signification de l’image. Le texte alternatif doit rester simple et concis.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Les lecteurs d’écran ne peuvent déterminer ce qui est visible sur une image sans texte alternatif, lequel décrit le contenu et la signification de l’image.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Les lecteurs d’écran ne peuvent interpréter les tableaux sans structure adaptée. Les en-têtes de tableau indiquent la direction et l’étendue du contenu.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Les lecteurs d’écran ne peuvent interpréter les tableaux sans structure adaptée. Les légendes décrivent le contexte et la compréhension globale à tirer du tableau.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Les lecteurs d’écran ne peuvent interpréter les tableaux sans structure adaptée. Les en-têtes de tableau indiquent la direction ainsi qu’une vue d’ensemble du contenu.","set_header_scope_8c548f40":"Paramétrer l’étendue de l’en-tête","set_table_header_cfab13a0":"Paramétrer un en-tête de tableau","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Les utilisateurs voyants naviguent rapidement entre les pages, à la recherche d’en-têtes en caractères grands et gras. Les lecteurs d’écrans utilisent les en-têtes pour une compréhension en contexte. Les en-têtes doivent utiliser une structure appropriée.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Les utilisateurs voyants naviguent rapidement entre les pages, à la recherche d’en-têtes en caractères grands et gras. Les lecteurs d’écrans utilisent les en-têtes pour une compréhension en contexte. Les en-têtes doivent faire preuve de concision au sein d’une structure appropriée.","table_header_starting_with_start_ffcabba6":"En-tête de tableau commençant par { start }","table_starting_with_start_e7232848":"Tableau commençant par { start }","tables_headers_should_specify_scope_5abf3a8e":"Les en-têtes de tableaux devraient indiquer une étendue.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Les tableaux devraient comprendre une légende décrivant leur contenu.","tables_should_include_at_least_one_header_48779eac":"Les tableaux devraient comprendre au moins un en-tête.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Le texte est difficile à lire sans un contraste suffisant entre le texte et l\'\'arrière-plan, surtout pour ceux qui ont une vue faible.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Les textes d’une taille supérieure à 18pt (ou 14pt en gras) devraient respecter un ratio de contraste d’au moins 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Les textes de moins de 18pt (ou 14pt en gras) devraient respecter un ratio de contraste d’au moins 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Lorsqu\'\'on utilise des balises qui formatent visuellement les éléments sous forme de liste, mais qui n\'\'indiquent pas la relation entre les listes, les utilisateurs peuvent avoir de la difficulté à naviguer dans l\'\'information.","why_523b3d8c":"Pourquoi"},"ht":{"accessibility_checker_b3af1f6c":"Verifikatè Aksesibilite","action_to_take_b626a99a":"Aksyon ki dwe fèt:","add_a_caption_2a915239":"Ajoute yon soutit","add_alt_text_for_the_image_48cd88aa":"Ajoute lòt tèks pou imaj la","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Lyen Adjasan ak menm URL yo dwe yon lyen inik.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Lòt atribi tèks yo pata dwe gen plis pase 120 karaktè.","apply_781a2546":"Aplike","change_alt_text_92654906":"Chanje tèks alt","change_heading_tag_to_paragraph_a61e3113":"Chanje etikèt antèt la an paragraf","change_text_color_1aecb912":"Chanje koulè tèks","check_accessibility_3c78211c":"Verifye Aksesibilite","checking_for_accessibility_issues_fac18c6d":"Pwoblèm verifikasyon Aksesibilite","close_accessibility_checker_29d1c51e":"Fèmen Verifikatè Aksesibilite","close_d634289d":"Fèmen","column_e1ae5c64":"Kolonn","column_group_1c062368":"Gwoup Kolonn","decorative_image_fde98579":"Imaj Dekoratif","element_starting_with_start_91bf4c3b":"Eleman kòmanse a { start }","fix_heading_hierarchy_f60884c4":"Fikse yerachi antèt","format_as_a_list_142210c3":"Fòmate tankou lis","header_column_f27433cb":"Kolonn antèt","header_row_and_column_ec5b9ec":"Ranje ak kolonn antèt","header_row_f33eb169":"Ranje antèt","heading_levels_should_not_be_skipped_3947c0e0":"Nivo antèt la pata dwe sote.","heading_starting_with_start_42a3e7f9":"Antèt kòmanse pa { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Antèt yo Atribi tèks alt pata dwe genyen plis pase 120 karaktè.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Non fichye imaj yo pata dwe itilize kòm atribi alt ki dekri kontni imaj la.","image_with_filename_file_aacd7180":"Imaj ak non fichye { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Imaj yo dwe gen yon atribi alt ki dekri kontni imaj la.","issue_num_total_f94536cf":"Pwoblèm { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Klavye navige nan lyen yo ak touch Tab la. De lyen adjasan ki dirije nan menm destinasyon an ka pèmèt moun k ap itilize klavye yo twompe yo.","learn_more_about_adjacent_links_2cb9762c":"Aprann plis sou lyen adjasan yo","learn_more_about_color_contrast_c019dfb9":"Aprann plis sou kontras koulè yo","learn_more_about_organizing_page_headings_8a7caa2e":"Aprann plis sou òganizasyon antèt paj","learn_more_about_table_headers_5f5ee13":"Aprann plis sou antèt tablo yo","learn_more_about_using_alt_text_for_images_5698df9a":"Aprann plis sou tèks alt pou imaj yo","learn_more_about_using_captions_with_tables_36fe496f":"Aprann plis sou itilizasyon lejand nan tablo yo","learn_more_about_using_filenames_as_alt_text_264286af":"Aprann plis sou itilizasyon non fichye yo tankou tèks alt","learn_more_about_using_lists_4e6eb860":"Aprann plis sou itilizasyon lis yo","learn_more_about_using_scope_attributes_with_table_20df49aa":"Aprann plis sou itilizasyon atribi pòte yo ak tablo yo","leave_as_is_4facfe55":"Kite tankou","link_with_text_starting_with_start_b3fcbe71":"Lyen ak tèks ki kòmanse pa { start }","lists_should_be_formatted_as_lists_f862de8d":"Lis yo dwe fòmate tankou lis.","merge_links_2478df96":"Fizyone lyen","next_40e12421":"Pwochen","no_accessibility_issues_were_detected_f8d3c875":"Nou pa t detekte okenn pwoblèm aksesibilite.","no_headers_9bc7dc7f":"Okenn antèt","none_3b5e34d2":"Okenn","paragraph_starting_with_start_a59923f8":"Paragraf kòmanse ak { start }","prev_f82cbc48":"Anvan","remove_heading_style_5fdc8855":"Elimine stil antèt","row_fc0944a7":"Ranje","row_group_979f5528":"Gwoup ranje","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Lektè ekran yo paka wè kisa ki afiche nan yon imaj san tèks altènatif, epi non fichye yo souvan se yon anchenman chif ak lèt ki pa dekri kontèks oswa sans.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Lektè ekran yo paka wè kisa ki afiche nan yon imaj san tèks altènatif, ki dekri kontni ak siyifikasyon imaj la. Tèks altènatif ta dwe senp e klè.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Lektè ekran yo paka wè kisa ki afiche nan yon imaj san tèks altènatif, ki dekri kontni ak siyifikasyon imaj la.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Lektè ekran yo paka entèrete tablo san estrikti ki apwopriye. Antèt tablo yo bay enstriksyon ak kapasite kontni an.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Lektè ekran yo paka entèrete tablo san estrikti ki apwopriye. Lejand tablo yo dekri kontèks ak konpreyansyon jeneral tablo a.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Lektè ekran yo paka entèrete tablo san estrikti ki apwopriye. Antèt tablo yo bay enstriksyon ak rezime kontni an.","set_header_scope_8c548f40":"Defini kapasite antèt","set_table_header_cfab13a0":"Defini antèt tablo","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Itilizatè prevwayan yo navige sou paj wèb yo byen vit, pou yo ka chèche antèt ki gwo oswa an gra. Itilizatè lektè ekran yo konte sou antèt yo pou konpreyansyon kontekstyèl. Antèt yo dwe itilize estrikti ki apwopriye.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Itilizatè prevwayan yo navige sou paj wèb yo byen vit, pou yo ka chèche antèt ki gwo oswa an gra. Itilizatè lektè ekran yo konte sou antèt yo pou konpreyansyon kontekstyèl. Antèt yo dwe klè nan estrikti ki apwopriye.","table_header_starting_with_start_ffcabba6":"Antèt tablo kòmanse a { start }","table_starting_with_start_e7232848":"Tablo kòmanse a { start }","tables_headers_should_specify_scope_5abf3a8e":"Antèt tablo yo dwe presize kapasite.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tablo yo dwe gen lejand ki dekri kontni tablo a.","tables_should_include_at_least_one_header_48779eac":"Tablo yo dwe gen omwen yon antèt.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Li difisil pou li tèks la si pa gen ase kontras ant tèks la ak fon an, espesyalman pou moun ki pa wè byen yo.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Tèks ki pi gwo ke 18pt (oswa an gra 14pt) ta dwe afiche yon to kontras de 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Tèks ki pi piti ke 18pt (oswa an gra 14pt) ta dwe afiche yon to kontras de 4.5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Lè yo itilize balizaj pou yo ka fòmate eleman yo vizyèlman tankou lis men ki pa di relasyon lis la, itilizatè yo ka rankontre difikilte pou navige nan enfómasyon yo. ","why_523b3d8c":"Poukisa"},"is":{"accessibility_checker_b3af1f6c":"Athugun á aðgangi","action_to_take_b626a99a":"Aðgerð sem grípa á til:","add_a_caption_2a915239":"Bæta við yfirskrift","add_alt_text_for_the_image_48cd88aa":"Bæta við öðrum texta fyrir myndina","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Samliggjandi tenglar með sömu vefslóð eiga að vera stakur tengill.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Annar texti ætti ekki að vera lengri en 120 stafir.","apply_781a2546":"Virkja","change_alt_text_92654906":"Breyta öðrum texta","change_heading_tag_to_paragraph_a61e3113":"Breyta tagi hauss í málsgrein","change_text_color_1aecb912":"Breyta lit á texta","check_accessibility_3c78211c":"Kanna aðgengileika","checking_for_accessibility_issues_fac18c6d":"Er að kanna vandamál varðandi aðgengileika","close_accessibility_checker_29d1c51e":"Loka Accessibility CheckerAthugun á aðgangi","close_d634289d":"Loka","column_e1ae5c64":"Dálkur","column_group_1c062368":"Dálkahópur","decorative_image_fde98579":"Skreytingarmynd","element_starting_with_start_91bf4c3b":"Atriði byrjar á { start }","fix_heading_hierarchy_f60884c4":"Lagfæra stigveldi hauss","format_as_a_list_142210c3":"Sníða sem lista","header_column_f27433cb":"Dálkur fyrir haus","header_row_and_column_ec5b9ec":"Röð og dálkur fyrir haus","header_row_f33eb169":"Röð fyrir haus","heading_levels_should_not_be_skipped_3947c0e0":"Ekki ætti að sleppa stigi hauss.","heading_starting_with_start_42a3e7f9":"Haus byrjar á { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Haus ætti ekki að innihalda fleiri en 120 stafi.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Ekki ætti að nota skrárheiti myndar sem annan texta til að lýsa innihaldi myndar.","image_with_filename_file_aacd7180":"Mynd með skrárheitinu { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Myndir ættu að fela í sér annan texta sem lýsir innihaldi myndarinnar.","issue_num_total_f94536cf":"Vandamál { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Nota dálklykil til að fara á tengla. Tveir samliggjandi tenglar sem vísa á sama ákvörðunarstað geta valdið ruglingi hjá þeim sem nota lyklaborð.","learn_more_about_adjacent_links_2cb9762c":"Fá að vita meira um samliggjandi tengla","learn_more_about_color_contrast_c019dfb9":"Fá að vita meira um litaandstæður","learn_more_about_organizing_page_headings_8a7caa2e":"Fá að vita meira um skipulag á síðuhausum","learn_more_about_table_headers_5f5ee13":"Fá að vita meira um töfluhausa","learn_more_about_using_alt_text_for_images_5698df9a":"Fá að vita meira um notkun baktexta fyrir myndir","learn_more_about_using_captions_with_tables_36fe496f":"Fá að vita meira um notkun skýringartexta með töflum","learn_more_about_using_filenames_as_alt_text_264286af":"Fá að vita meira um notkun skráaheita sem baktexta","learn_more_about_using_lists_4e6eb860":"Fá að vita meira um notkun lista","learn_more_about_using_scope_attributes_with_table_20df49aa":"Fá að vita meira um notkun umfangseiginda með töflum","leave_as_is_4facfe55":"Halda óbreyttu","link_with_text_starting_with_start_b3fcbe71":"Tengill með texta byrjar á { start }","lists_should_be_formatted_as_lists_f862de8d":"Lista ætti að sníða sem lista.","merge_links_2478df96":"Fella tengla saman","next_40e12421":"Næsti","no_accessibility_issues_were_detected_f8d3c875":"Engin vandamál fundust varðandi aðgengi .","no_headers_9bc7dc7f":"Engir hausar","none_3b5e34d2":"Enginn","paragraph_starting_with_start_a59923f8":"Málsgrein byrjar á { start }","prev_f82cbc48":"Fyrri","remove_heading_style_5fdc8855":"Fjarlægja stíl fyrirsagnar","row_fc0944a7":"Röð","row_group_979f5528":"Raðahópur","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Skjálesarar geta ekki ákvarðað efni myndar án annars texta, og skrárheiti eru oft merkingarlausir strengir með tölustöfum og bókstöfum sem lýsa ekki innhaldinu eða merkingunni.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Skjálesarar geta ekki ákvarðað efni myndar án annars texta sem lýsir innihaldi og merkingu myndarinnar. Annar texti ætti að vera einfaldur og hnitmiðaður.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Skjálesarar geta ekki ákvarðað efni myndar án annars texta sem lýsir innihaldi og merkingu myndarinnar.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Skjálesarar geta ekki túlkað töflur nema þær séu á réttu formi. Töfluhausar gefa upplýsingar um efni og innihald.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Skjálesarar geta ekki túlkað töflur nema þær séu á réttu formi. Yfirskrift töflu lýsir innihaldi hennar og gefur almennar upplýsingar um töfluna.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Skjálesarar geta ekki túlkað töflur nema þær séu á réttu formi. Töfluhausar gefa upplýsingar um efni og yfirlit yfir það sem fram kemur í töflunni.","set_header_scope_8c548f40":"Stilla gildissvið hauss","set_table_header_cfab13a0":"Stilla töfluhaus","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Notendur sem sjá fara hratt í gegnum vefsíður og leita að stórum eða feitletruðum hausum. Skjálesarar nýta sér hausa til að skilja samhengi. Hausar ættu að vera uppbyggðir á réttan hátt.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Notendur sem sjá fara hratt í gegnum vefsíður og leita að stórum eða feitletruðum hausum. Skjálesarar nýta sér hausa til að skilja samhengi. Hausar ættu að vera hnitmiðaðir og uppbyggðir á réttan hátt.","table_header_starting_with_start_ffcabba6":"Haus töflu byrjar á { start }","table_starting_with_start_e7232848":"Tafla byrjar á { start }","tables_headers_should_specify_scope_5abf3a8e":"Töfluhausar ættu að tiltaka gildissvið.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Töflur ættu að hafa yfirskrift sem lýsir innihaldi töflunnar.","tables_should_include_at_least_one_header_48779eac":"Töflur ættu að hafa að minnsta kosti einn haus.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Ef ekki eru nægileg birtuskil milli leturs og bakgrunns er erfitt að lesa texta, sérstaklega ef um er að ræða einstakling sem sér illa.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Hlutfall hámarks- og lágmarksbirtu fyrir letur sem er stærra en 18 punkta (14 punkta ef feitletrað) ætti að vera að lágmarki 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Hlutfall hámarks- og lágmarksbirtu fyrir letur sem er minna en 18 punkta (14 punkta ef feitletrað) ætti að vera að lágmarki 5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Þegar merkingar eru notaðar sem sníða atriði sjónrænt sem lista en sýna ekki lista-sambandið, gætu notendur átt í erfiðleikum við að átta sig á upplýsingunum.","why_523b3d8c":"Hvers vegna"},"it":{"accessibility_checker_b3af1f6c":"Verifica accessibilità","action_to_take_b626a99a":"Azione da intraprendere:","add_a_caption_2a915239":"Aggiungi una didascalia","add_alt_text_for_the_image_48cd88aa":"Aggiungi testo alternativo per l\'\'immagine","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"I link adiacenti con lo stesso URL devono essere un singolo link.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Il testo alternativo degli attributi non deve contenere più di 120 caratteri.","apply_781a2546":"Applica","change_alt_text_92654906":"Cambia testo alternativo","change_heading_tag_to_paragraph_a61e3113":"Cambia tag di intestazione in paragrafo","change_text_color_1aecb912":"Cambia colore del testo","check_accessibility_3c78211c":"Verifica l\'\'accessibilità","checking_for_accessibility_issues_fac18c6d":"Verifica i problemi di accessibilità","close_accessibility_checker_29d1c51e":"Chiudi verifica accessibilità","close_d634289d":"Chiudi","column_e1ae5c64":"Colonna","column_group_1c062368":"Gruppo di colonne","decorative_image_fde98579":"Immagine decorativa","element_starting_with_start_91bf4c3b":"Elemento che inizia con { start }","fix_heading_hierarchy_f60884c4":"Correggi gerarchia intestazioni","format_as_a_list_142210c3":"Formatta come elenco","header_column_f27433cb":"Colonna intestazione","header_row_and_column_ec5b9ec":"Riga e colonna di intestazione","header_row_f33eb169":"Riga di intestazione","heading_levels_should_not_be_skipped_3947c0e0":"I livelli di intestazione non devono essere ignorati.","heading_starting_with_start_42a3e7f9":"Intestazione che inizia con { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Le intestazioni non devono contenere più di 120 caratteri.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"I nomi dei file immagine non devono essere utilizzati come attributo alternativo che descrive il contenuto dell\'\'immagine.","image_with_filename_file_aacd7180":"Immagine con nome file { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Le immagini devono includere un attributo alternativo che descrive il contenuto dell\'\'immagine.","issue_num_total_f94536cf":"Problema { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Le tastiere indirizzano ai link utilizzando il tasto TAB. Due link adiacenti che indirizzando alla stessa destinazione possono confondere gli utenti della tastiera.","learn_more_about_adjacent_links_2cb9762c":"Per saperne di più sui link adiacenti","learn_more_about_color_contrast_c019dfb9":"Per saperne di più sul contrasto di colore","learn_more_about_organizing_page_headings_8a7caa2e":"Per saperne di più sull\'\'organizzazione delle intestazioni di pagina","learn_more_about_table_headers_5f5ee13":"Per saperne di più sulle intestazioni delle tabelle","learn_more_about_using_alt_text_for_images_5698df9a":"Per saperne di più sull\'\'utilizzo di testo alternativo per le immagini","learn_more_about_using_captions_with_tables_36fe496f":"Per saperne di più sull\'\'uso delle didascalie con tabelle","learn_more_about_using_filenames_as_alt_text_264286af":"Per saperne di più sull\'\'utilizzo dei nomi dei file come testo alternativo","learn_more_about_using_lists_4e6eb860":"Per saperne di più sull\'\'uso degli elenchi","learn_more_about_using_scope_attributes_with_table_20df49aa":"Per saperne di più sull\'\'uso degli attributi dell\'\'ambito con le tabelle","leave_as_is_4facfe55":"Lascia così","link_with_text_starting_with_start_b3fcbe71":"Link al testo che inizia con { start }","lists_should_be_formatted_as_lists_f862de8d":"Gli elenchi devono essere formattati come elenchi.","merge_links_2478df96":"Unisci link","next_40e12421":"Successivo","no_accessibility_issues_were_detected_f8d3c875":"Nessun problema di accessibilità rilevato.","no_headers_9bc7dc7f":"Nessuna intestazione","none_3b5e34d2":"Nessuno","paragraph_starting_with_start_a59923f8":"Paragrafo che inizia con { start }","prev_f82cbc48":"Precedente","remove_heading_style_5fdc8855":"Rimuovi stile intestazione","row_fc0944a7":"Riga","row_group_979f5528":"Gruppo di righe","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Gli screen reader non possono determinare cosa viene visualizzato in un\'\'immagine senza testo alternativo e i nomi file sono spesso stringhe di numeri e lettere senza senso che non descrivono il contesto o il significato.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Gli screen reader non possono determinare cosa viene visualizzato in un\'\'immagine senza testo alternativo, che descrive il contenuto e il significato dell\'\'immagine. Il testo alternativo deve essere semplice e conciso.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Gli screen reader non possono determinare cosa viene visualizzato in un\'\'immagine senza testo alternativo, che descrive il contenuto e il significato dell\'\'immagine.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Gli screen reader non possono interpretare le tabelle senza la struttura corretta. Le intestazioni della tabella fornisco indicazioni e ambito del contenuto.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Gli screen reader non possono interpretare le tabelle senza la struttura corretta. Le didascalie della tabella descrivono il contesto e le informazioni generali della tabella.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Gli screen reader non possono interpretare le tabelle senza la struttura corretta. Le intestazioni della tabella forniscono indicazioni e panoramica del contenuto.","set_header_scope_8c548f40":"Imposta ambito di intestazione","set_table_header_cfab13a0":"Imposta intestazione tabella","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Gli utenti senza problemi di vista esplorano le pagine web velocemente, cercando intestazioni in grassetto o di grandi dimensioni. Gli utenti di screen reader si affidano alle intestazioni per la comprensione contestuale. Le intestazioni devono utilizzare la struttura appropriata.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Gli utenti senza problemi di vista esplorano le pagine web velocemente, cercando intestazioni in grassetto o di grandi dimensioni. Gli utenti di screen reader si affidano alle intestazioni per la comprensione contestuale. Le intestazioni devono essere concise nella struttura appropriata.","table_header_starting_with_start_ffcabba6":"Intestazione tabella che inizia con { start }","table_starting_with_start_e7232848":"Tabella che inizia con { start }","tables_headers_should_specify_scope_5abf3a8e":"Le intestazioni delle tabelle devono specificare l\'\'ambito.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Le tabelle devono includere una didascalia che descrive i contenuti della tabella.","tables_should_include_at_least_one_header_48779eac":"Le tabelle devono includere almeno un\'\'intestazione.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Il testo è difficile da leggere senza un contrasto sufficiente tra il testo e lo sfondo, specialmente per gli ipovedenti.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Il testo con dimensioni maggiori di 18 pt (o in grassetto 14 pt) deve visualizzare un rapporto di contrasto minimo pari a 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Il testo con dimensioni minori di 18 pt (o in grassetto 14 pt) deve visualizzare un rapporto di contrasto minimo pari a 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Quando viene utilizzato il markup che formatta visivamente gli elementi come elenco ma non indica la relazione tra gli elenchi, gli utenti potrebbero avere difficoltà a spostarsi tra le informazioni.","why_523b3d8c":"Perché"},"ja":{"accessibility_checker_b3af1f6c":"アクセシビリティチェッカー","action_to_take_b626a99a":"実行するアクション：","add_a_caption_2a915239":"キャプションを追加","add_alt_text_for_the_image_48cd88aa":"画像の代替テキストを追加する","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"同じURLを持つ隣接リンクは1つのリンクでなければなりません。","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"代替属性テキストは120文字を超えてはなりません。","apply_781a2546":"適用","change_alt_text_92654906":"代替テキストを変更","change_heading_tag_to_paragraph_a61e3113":"見出しタグを段落に変更する","change_text_color_1aecb912":"テキストの色を変更する","check_accessibility_3c78211c":"アクセシビリティをチェックする","checking_for_accessibility_issues_fac18c6d":"アクセシビリティ問題をチェック","close_accessibility_checker_29d1c51e":"アクセシビリティチェッカーを閉じる","close_d634289d":"閉じる","column_e1ae5c64":"列","column_group_1c062368":"列グループ","decorative_image_fde98579":"装飾の画像","element_starting_with_start_91bf4c3b":"{ start } で始まる要素","fix_heading_hierarchy_f60884c4":"見出しヒエアルキーを修正する","format_as_a_list_142210c3":"リスト形式","header_column_f27433cb":"ヘッダー列","header_row_and_column_ec5b9ec":"ヘッダーの行と列","header_row_f33eb169":"ヘッダー行","heading_levels_should_not_be_skipped_3947c0e0":"見出しレベルはスキップしないでください。","heading_starting_with_start_42a3e7f9":"{ start } で始まる見出し","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"見出しテキストは120文字を超えてはなりません。","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"画像ファイル名は、画像コンテンツを記述する alt 属性として使用しないでください。","image_with_filename_file_aacd7180":"ファイル名 { file } の画像","images_should_include_an_alt_attribute_describing__b86d6a86":"画像には、画像の内容を記述する alt 属性が含まれていなければなりません。","issue_num_total_f94536cf":"問題 { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"キーボードは Tab キーを使用してリンクにナビゲートします。同じ宛先に向かう2つの隣接リンクがあると、キーボードユーザーに混乱を招く可能性があります。","learn_more_about_adjacent_links_2cb9762c":"隣接リンクの詳細","learn_more_about_color_contrast_c019dfb9":"カラーコントラストの詳細","learn_more_about_organizing_page_headings_8a7caa2e":"ページヘッダーの整理の詳細","learn_more_about_table_headers_5f5ee13":"表ヘッダーの詳細","learn_more_about_using_alt_text_for_images_5698df9a":"代替テキストを画像に使用する方法の詳細","learn_more_about_using_captions_with_tables_36fe496f":"表でキャプションを使用する方法の詳細","learn_more_about_using_filenames_as_alt_text_264286af":"ファイル名を代替テキストに使用する方法の詳細","learn_more_about_using_lists_4e6eb860":"リスト使用の詳細","learn_more_about_using_scope_attributes_with_table_20df49aa":"表でスコープ属性を使用する方法の詳細","leave_as_is_4facfe55":"そのままにする","link_with_text_starting_with_start_b3fcbe71":"{ start } で始まるテキストとのリンク","lists_should_be_formatted_as_lists_f862de8d":"リストはリスト形式にしなければなりません。","merge_links_2478df96":"リンクをマージする","next_40e12421":"次","no_accessibility_issues_were_detected_f8d3c875":"アクセシビリティの問題は検出されませんでした。","no_headers_9bc7dc7f":"ヘッダーなし","none_3b5e34d2":"なし","paragraph_starting_with_start_a59923f8":"{ start } で始まる段落","prev_f82cbc48":"前へ","remove_heading_style_5fdc8855":"見出しスタイルを削除する","row_fc0944a7":"列","row_group_979f5528":"列グループ","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"スクリーンリーダーは、代替テキストなしでは画像に表示される内容を判別することはできません。また、ファイル名は、しばいば文脈や意味を記述しない無意味な数字や文字列であることがあります。","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"スクリーンリーダーは、画像の内容と意味を説明する代替テキストなしでは画像に表示される内容を判別することはできません。代替テキストは簡潔かつ簡潔でなければなりません。","screen_readers_cannot_determine_what_is_displayed__a57e6723":"スクリーンリーダーは、画像の内容と意味を説明する代替テキストなしでは画像に表示される内容を判別することはできません。","screen_readers_cannot_interpret_tables_without_the_bd861652":"スクリーンリーダーは、適切な構造なしでは表を解釈できません。表のヘッダーは、方向と内容の範囲を提供します。","screen_readers_cannot_interpret_tables_without_the_e62912d5":"スクリーンリーダーは、適切な構造なしでは表を解釈できません。表のキャプションは、表の文脈と一般的な理解を記述するものです。","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"スクリーンリーダーは、適切な構造なしでは表を解釈できません。表のヘッダーは、コンテンツの方向と概要を提供します。","set_header_scope_8c548f40":"ヘッダースコープを設定する","set_table_header_cfab13a0":"表のヘッダーを設定する","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"視認ユーザーは大きく太字の見出しを探し、Webページをすばやく参照します。スクリーンリーダーのユーザーは、文脈に基づいた理解を行う際にヘッダーに依存しています。ヘッダーは適切な構造を使用しなければなりません。","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"視認ユーザーは大きく太字の見出しを探し、Webページをすばやく参照します。スクリーンリーダーのユーザーは、文脈に基づいた理解を行う際にヘッダーに依存しています。ヘッダーは適切な構造内で簡潔でなければなりません。","table_header_starting_with_start_ffcabba6":"{ start } で始まる表ヘッダー","table_starting_with_start_e7232848":"{ start } で始まる表","tables_headers_should_specify_scope_5abf3a8e":"表のヘッダーは範囲を指定しなければなりません。","tables_should_include_a_caption_describing_the_con_e91e78fc":"表には、表の内容を説明するキャプションが含まれていなければなりません。","tables_should_include_at_least_one_header_48779eac":"表には、少なくとも1つのヘッダーが含まれていなければなりません。","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"テキストは、テキストと背景との間に十分なコントラストがなければ、特に視力の弱い人にとっては読みにくくなります。","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"18pt（または太字14pt）より大きいテキストは、3：1の最小コントラスト比で表示しなければなりません。","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"18pt（または太字14pt）より小きいテキストは、4.5：1の最小コントラスト比で表示しなければなりません。","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"アイテムをリスト形式に視覚的にフォーマットするマークアップが使用されますが、リストの関係を示唆するものではなく、ユーザが情報をナビゲートするのは難しいかもしれません。","why_523b3d8c":"理由"},"ko":{},"mi":{"accessibility_checker_b3af1f6c":"Kaitirotiro te whakaurutanga","action_to_take_b626a99a":"Mahi hei mahi:","add_a_caption_2a915239":"Tāpiri he tapanga","add_alt_text_for_the_image_48cd88aa":"Tāpiri kuputuhi alt mo te pakoko","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Ko ngā hononga hono ki te URL kotahi me kotahi te hononga.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Kia kaua te kuputuhi huanga Alt e nui atu i te 120 ngā reta.","apply_781a2546":"Tono","change_alt_text_92654906":"Huri kē alt kuputuhi","change_heading_tag_to_paragraph_a61e3113":"Hurihia te pane tūtohu ki te parawae","change_text_color_1aecb912":"Huria te tae o te kuputuhi","check_accessibility_3c78211c":"Āta titiro te whakaurutanga","checking_for_accessibility_issues_fac18c6d":"Āta titiro mo ngā take whakauru","close_accessibility_checker_29d1c51e":"Kati Kaitirotiro Whakaurutanga","close_d634289d":"Katia","column_e1ae5c64":"Pou","column_group_1c062368":"Rōpū pou","decorative_image_fde98579":"Whakapaipai āhua","element_starting_with_start_91bf4c3b":"Te tīmatanga o te kaupapa { start }","fix_heading_hierarchy_f60884c4":"Whakatikahia te hiranga o te pane","format_as_a_list_142210c3":"Whakahōputu hei rārangi","header_column_f27433cb":"Pane pou","header_row_and_column_ec5b9ec":"Pane rārangi me te pou","header_row_f33eb169":"Pane rārangi","heading_levels_should_not_be_skipped_3947c0e0":"Ko ngā taumata pane kaore e pekehia.","heading_starting_with_start_42a3e7f9":"Pane e tīmata ana me { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Kia kaua ngā pane e nui atu i te 120 ngā reta.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Kaua e whakamahia ngā kōnae ingoa ki te whakamahi i te alt huanga e whakātu ana i te ihirangi pakoko.","image_with_filename_file_aacd7180":"Āhua me te kōnae ingoa { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Ko ngā āhua me whakauru he alt huanga e whakāhua ana i te ihirangi āhua","issue_num_total_f94536cf":"Take { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Ka whakaterehia e ngā papa pātuhi ngā hononga ki te whakamahi i Ripa kī. Ngā hononga e rua e tata ana e tika ana ki te haerenga rite ka pōraruraru ki ngā papa pātuhi kaiwhakamahi.","learn_more_about_adjacent_links_2cb9762c":"Ako ano i ngā hono tata","learn_more_about_color_contrast_c019dfb9":"Ako anō i ngā tae whakarerekē","learn_more_about_organizing_page_headings_8a7caa2e":"Ako anō i ngā whakahaere ngā pane whārangi","learn_more_about_table_headers_5f5ee13":"Ako anō i ngā pane rārangi","learn_more_about_using_alt_text_for_images_5698df9a":"Ako anō i te mahi i ngā alt kuputuhi mo ngā āhua","learn_more_about_using_captions_with_tables_36fe496f":"Ako anō i te mahi i ngā kōrero me ngā rārangi","learn_more_about_using_filenames_as_alt_text_264286af":"Ako anō i te mahi i ngā ingoa kōnae i te alt kuputuhi","learn_more_about_using_lists_4e6eb860":"Ako anō i te mahi i ngā rārangi","learn_more_about_using_scope_attributes_with_table_20df49aa":"Ako anō i te mahi i ngā whānuitanga huanga me ngā rārangi","leave_as_is_4facfe55":"Waiho ki tēnei","link_with_text_starting_with_start_b3fcbe71":"Hono me te kuputuhi e tīmata ana me { start }","lists_should_be_formatted_as_lists_f862de8d":"Me whakaritehia ngā rārangi hei rārangi.","merge_links_2478df96":"Whakapiri ngā hononga","next_40e12421":"E haere ake nei","no_accessibility_issues_were_detected_f8d3c875":"Kaore he whakaurunga take i kitea.","no_headers_9bc7dc7f":"Kaore ngā pane","none_3b5e34d2":"Kaore","paragraph_starting_with_start_a59923f8":"Parawae e tīmata ana me { start }","prev_f82cbc48":"Mua","remove_heading_style_5fdc8855":"Tango pane kāhua","row_fc0944a7":"Rārangi","row_group_979f5528":"Rōpū rārangi","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Kaore e taea e ngā kaipānui mata te whakatau i ngā mea e whakātuhia ana i roto i te āhua me te kore kuputuhi rerekē, a, he maha ngā taura o ngā tau me ngā reta kaore i te whakāhua i te horopaki te tikanga rānei.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Kaore e taea e ngā kaipānui mata te whakatau i ngā mea e whakāturia ana i roto i te āhua me te kore kuputuhi rerekē, e whakātu ana i te ihirangi me te tikanga o te pakoko. Me ngāwari me te hāngai tōtika te kuputuhi rerekē.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Kaore e taea e ngā kaipānui mata te whakatau i ngā mea e whakāturia ana i roto i te āhua me te kore kuputuhi rerekē, e whakātu ana i te ihirangi me te tikanga o te pakoko.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Kaore e taea e ngā kaipānui mata ki te whakamāori i ngā papa kaore te hanganga tika. Ko ngā  pane ripanga e whakarato ana i te aronga me te kohinga ihirangi.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Kaore e taea e ngā kaipānui mata ki te whakamāori i ngā papa kaore te hanganga tika. Ko ngā panuku tapanga e whakaatu ana i te horopaki me te mātauranga whānui o te ripanga.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Kaore e taea e ngā kaipānui mata ki te whakamāori i ngā papa kaore te hanganga tika. Ko ngā pane ripanga whakarato ana i te ahunga me te tirohanga o te ihirangi.","set_header_scope_8c548f40":"Whakatau horopaki pane","set_table_header_cfab13a0":"Whakatau pane ripanga","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Ngā kaiwhakamahi e āhei ana ki te tiro pūtirotiro tere i te ngā whārangi tukutuku, me te rapu i ngā pane nui, maia rānei. Ka whakawhirinaki ngā kaiwhakamahi pānui mata ki ngā pane mo te māramatanga o te horopaki. Me whakamahi ngā pane i te hanganga tika.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Ngā kaiwhakamahi e āhei ana ki te tiro pūtirotiro tere i te ngā whārangi tukutuku, me te rapu i ngā pane nui, maia rānei. Ka whakawhirinaki ngā kaiwhakamahi pānui mata ki ngā pane mo te māramatanga o te horopaki. Me whai kiko ngā pane ki roto i te hanganga tika.","table_header_starting_with_start_ffcabba6":"Ka timata te pane ripanga mei te { start }","table_starting_with_start_e7232848":"Ripanga e timata ana me { start }","tables_headers_should_specify_scope_5abf3a8e":"Me tautuhi ngā pane ripanga ki te whakaputa te hōkai.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Me whakauru ngā ripanga ki tētahi tuhinga e whakaatu ana i ngā ihirangi o te ripanga.","tables_should_include_at_least_one_header_48779eac":"Me whakauru ngā ripanga i te iti rawa o te pane kotahi.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"He uaua te panui, kaore he rerekētanga i waenga i te tuhinga me te papamuri, ina koa mo te hunga e iti ana te kite.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Ko te kuputuhi nui ake i te 18pt (me te maia 14pt) me whakātu i te ōwehenga rerekē iti o te 3: 1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Ko te kuputuhi iti atu i te 18pt (me te maia 14pt) me whakātu i te ōwehenga rerekē iti o te 4.5: 1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Ina whakamahia te tohu tohu i ngā taonga tautuhi tirohanga hei rārangi, ēngari kaore e tohu i te hononga o te rārangi, he uaua ki ngā kaiwhakamahi te whakawhiti i ngā kōrero.","why_523b3d8c":"He aha"},"nb-x-k12":{"accessibility_checker_b3af1f6c":"Tilgjengelighetstester","action_to_take_b626a99a":"Handling å utføre:","add_a_caption_2a915239":"Legg til overskrift","add_alt_text_for_the_image_48cd88aa":"Legg til alternativ tekst for bildet","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Lenker ved siden av hverandre med samme URL bør være samme lenke.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alt-attributter bør ikke inneholde mer enn 120 tegn.","apply_781a2546":"Bruk","change_alt_text_92654906":"Endre alternativ tekst","change_heading_tag_to_paragraph_a61e3113":"Endre titteltagg til setning","change_text_color_1aecb912":"Endre tekstfarge","check_accessibility_3c78211c":"Test tilgjengelighet","checking_for_accessibility_issues_fac18c6d":"Tester for tilgjengelighetsproblemer","close_accessibility_checker_29d1c51e":"Lukk tilgjengelighetstester","close_d634289d":"Lukk","column_e1ae5c64":"Kolonne","column_group_1c062368":"Kolonnegruppe","decorative_image_fde98579":"Dekorativt bilde","element_starting_with_start_91bf4c3b":"Element som starter med { start }","fix_heading_hierarchy_f60884c4":"Reparer tittelhierarki","format_as_a_list_142210c3":"Formater som liste","header_column_f27433cb":"Tittelkolonne","header_row_and_column_ec5b9ec":"Tittelrad og kolonne","header_row_f33eb169":"Tittelrad","heading_levels_should_not_be_skipped_3947c0e0":"Tittelnivåer bør ikke hoppes over","heading_starting_with_start_42a3e7f9":"Tittel som starter med { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Titler bør ikke inneholde mer enn 120 tegn.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Bildefilnavn bør ikke brukes som den alt-attributt som beskriver bildeinnholdet.","image_with_filename_file_aacd7180":"Bilde med filnavn { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Bilder burde inneholde en alt-attributt som beskriver bildeinnholdet.","issue_num_total_f94536cf":"Problem { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Tastatur navigerer til lenker ved å bruke tabulatortasten. To lenker som viser til samme destinasjon kan være forvirrende for tastaturbrukere.","learn_more_about_adjacent_links_2cb9762c":"Lær mer om lenker ved siden av","learn_more_about_color_contrast_c019dfb9":"Lær mer om fargekontrast","learn_more_about_organizing_page_headings_8a7caa2e":"Lær mer om hvordan organisere sideoverskrifter","learn_more_about_table_headers_5f5ee13":"Lær mer om tabelloverskrifter","learn_more_about_using_alt_text_for_images_5698df9a":"Lær mer om hvordan bruke alt tekst for bilder","learn_more_about_using_captions_with_tables_36fe496f":"Lær mer om hvordan bruke bildetekst med tabeller","learn_more_about_using_filenames_as_alt_text_264286af":"Lær mer om hvordan bruke filnavn som alt tekst","learn_more_about_using_lists_4e6eb860":"Lær mer om hvordan bruke lister","learn_more_about_using_scope_attributes_with_table_20df49aa":"Lær mer om hvordan bruke omfangsatributter med tabeller","leave_as_is_4facfe55":"La det være","link_with_text_starting_with_start_b3fcbe71":"Lenke med tekst som starter med { start }","lists_should_be_formatted_as_lists_f862de8d":"Lister må formateres som lister.","merge_links_2478df96":"Slå sammen lenker","next_40e12421":"Neste","no_accessibility_issues_were_detected_f8d3c875":"Ingen tiljengelighetsproblemer ble oppdaget.","no_headers_9bc7dc7f":"Ingen titler","none_3b5e34d2":"Ingen","paragraph_starting_with_start_a59923f8":"Setning som starter med { start }","prev_f82cbc48":"Forrige","remove_heading_style_5fdc8855":"Fjern tittelstil","row_fc0944a7":"Rad","row_group_979f5528":"Radgruppe","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Skjermlesere kan ikke avgjøre hva som vises i et bilde uten alternativ tekst, og filnavn er ofte meningsløse strenger av bokstaver og siffer som ikke beskriver konteksten eller meningen.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Skjermlesere kan ikke avgjøre hva som vises i et bilde uten alternativ tekst som beskriver innholdet og meningen med bildet. Alternativ tekst bør være kort og konsis.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Skjermlesere kan ikke avgjøre hva som vises i et bilde uten alternativ tekst som beskriver innholdet og meningen med bildet.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Skjermlesere kan ikke tolke tabeller uten skikkelig struktur. Tabelltitler gir rettledning og indikerer innholdsomfang.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Skjermlesere kan ikke tolke tabeller uten skikkelig struktur. Tabelloverskrifter beskriver konteksten og den generelle forståelsen av tabellen.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Skjermlesere kan ikke tolke tabeller uten skikkelig struktur. Tabelltitler gir rettledning og  oversikt over innholdet.","set_header_scope_8c548f40":"Sett tittelomfang","set_table_header_cfab13a0":"Sett tabelltittel","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Seende brukere surfer nettsider kjapt, og ser etter store eller uthevede titler. Brukere av skjermlesere er avhengige av titler for å forstå konteksten. Titler bør bruke korrekt struktur.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Seende brukere surfer nettsider kjapt, og ser etter store eller uthevede titler. Brukere av skjermlesere er avhengige av titler for å forstå konteksten. Titler bør være konsise innenfor den korrekte strukturen.","table_header_starting_with_start_ffcabba6":"Tabelltittel starter med { start }","table_starting_with_start_e7232848":"Tabell starter med { start }","tables_headers_should_specify_scope_5abf3a8e":"Tabelltitler bør spesifisere omfang.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabeller bør inkludere en overskrift som beskriver innholdet i tabellen.","tables_should_include_at_least_one_header_48779eac":"Tabeller bør inkludere minst en tittel.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Teksten er vanskelig å lese uten tilstrekkelig kontrast mellom tekst og bakgrunn, spesielt for svaksynte.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Tekst større enn 18pkt (eller tykk 14pkt) bør vises med en minimums kontrastrate på 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Tekst mindre enn 18pkt (eller tykk 14pkt) bør vises med en minimums kontrastrate på 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Når det brukes markering som visuelt formaterer elementer som en liste men ikke indikerer et listeforhold kan brukere finne det vanskelig å navigere informasjonen.","why_523b3d8c":"Hvorfor"},"nb":{"accessibility_checker_b3af1f6c":"Tilgjengelighetstester","action_to_take_b626a99a":"Handling å utføre:","add_a_caption_2a915239":"Legg til overskrift","add_alt_text_for_the_image_48cd88aa":"Legg til alternativ tekst for bildet","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Lenker ved siden av hverandre med samme URL bør være samme lenke.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alt-attributter bør ikke inneholde mer enn 120 tegn.","apply_781a2546":"Legg til","change_alt_text_92654906":"Endre alternativ tekst","change_heading_tag_to_paragraph_a61e3113":"Endre titteltagg til setning","change_text_color_1aecb912":"Endre tekstfarge","check_accessibility_3c78211c":"Test tilgjengelighet","checking_for_accessibility_issues_fac18c6d":"Tester for tilgjengelighetsproblemer","close_accessibility_checker_29d1c51e":"Lukk tilgjengelighetstester","close_d634289d":"Lukk","column_e1ae5c64":"Kolonne","column_group_1c062368":"Kolonnegruppe","decorative_image_fde98579":"Dekorativt bilde","element_starting_with_start_91bf4c3b":"Element som starter med { start }","fix_heading_hierarchy_f60884c4":"Reparer tittelhierarki","format_as_a_list_142210c3":"Formater som liste","header_column_f27433cb":"Tittelkolonne","header_row_and_column_ec5b9ec":"Tittelrad og kolonne","header_row_f33eb169":"Tittelrad","heading_levels_should_not_be_skipped_3947c0e0":"Tittelnivåer bør ikke hoppes over","heading_starting_with_start_42a3e7f9":"Tittel som starter med { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Titler bør ikke inneholde mer enn 120 tegn.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Bildefilnavn bør ikke brukes som den alt-attributt som beskriver bildeinnholdet.","image_with_filename_file_aacd7180":"Bilde med filnavn { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Bilder burde inneholde en alt-attributt som beskriver bildeinnholdet.","issue_num_total_f94536cf":"Problem { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Tastatur navigerer til lenker ved å bruke tabulatortasten. To lenker som viser til samme destinasjon kan være forvirrende for tastaturbrukere.","learn_more_about_adjacent_links_2cb9762c":"Lær mer om lenker ved siden av","learn_more_about_color_contrast_c019dfb9":"Lær mer om fargekontrast","learn_more_about_organizing_page_headings_8a7caa2e":"Lær mer om hvordan organisere sideoverskrifter","learn_more_about_table_headers_5f5ee13":"Lær mer om tabelloverskrifter","learn_more_about_using_alt_text_for_images_5698df9a":"Lær mer om hvordan bruke alt tekst for bilder","learn_more_about_using_captions_with_tables_36fe496f":"Lær mer om hvordan bruke bildetekst med tabeller","learn_more_about_using_filenames_as_alt_text_264286af":"Lær mer om hvordan bruke filnavn som alt tekst","learn_more_about_using_lists_4e6eb860":"Lær mer om hvordan bruke lister","learn_more_about_using_scope_attributes_with_table_20df49aa":"Lær mer om hvordan bruke omfangsatributter med tabeller","leave_as_is_4facfe55":"La det være","link_with_text_starting_with_start_b3fcbe71":"Lenke med tekst som starter med { start }","lists_should_be_formatted_as_lists_f862de8d":"Lister må formateres som lister.","merge_links_2478df96":"Slå sammen lenker","next_40e12421":"Neste","no_accessibility_issues_were_detected_f8d3c875":"Ingen tiljengelighetsproblemer ble oppdaget.","no_headers_9bc7dc7f":"Ingen titler","none_3b5e34d2":"Ingen","paragraph_starting_with_start_a59923f8":"Setning som starter med { start }","prev_f82cbc48":"Forrige","remove_heading_style_5fdc8855":"Fjern tittelstil","row_fc0944a7":"Rad","row_group_979f5528":"Radgruppe","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Skjermlesere kan ikke avgjøre hva som vises i et bilde uten alternativ tekst, og filnavn er ofte meningsløse strenger av bokstaver og siffer som ikke beskriver konteksten eller meningen.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Skjermlesere kan ikke avgjøre hva som vises i et bilde uten alternativ tekst som beskriver innholdet og meningen med bildet. Alternativ tekst bør være kort og konsis.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Skjermlesere kan ikke avgjøre hva som vises i et bilde uten alternativ tekst som beskriver innholdet og meningen med bildet.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Skjermlesere kan ikke tolke tabeller uten skikkelig struktur. Tabelltitler gir rettledning og indikerer innholdsomfang","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Skjermlesere kan ikke tolke tabeller uten skikkelig struktur. Tabelloverskrifter beskriver konteksten og den generelle forståelsen av tabellen.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Skjermlesere kan ikke tolke tabeller uten skikkelig struktur. Tabelltitler gir rettledning og  oversikt over innholdet.","set_header_scope_8c548f40":"Sett tittelomfang","set_table_header_cfab13a0":"Sett tabelltittel","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Seende brukere surfer nettsider kjapt, og ser etter store eller uthevede titler. Brukere av skjermlesere er avhengige av titler for å forstå konteksten. Titler bør bruke korrekt struktur.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Seende brukere surfer nettsider kjapt, og ser etter store eller uthevede titler. Brukere av skjermlesere er avhengige av titler for å forstå konteksten. Titler bør være konsise innenfor den korrekte strukturen.","table_header_starting_with_start_ffcabba6":"Tabelltittel starter med { start }","table_starting_with_start_e7232848":"Tabell starter med { start }","tables_headers_should_specify_scope_5abf3a8e":"Tabelltitler bør spesifisere omfang.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabeller bør inkludere en overskrift som beskriver innholdet i tabellen.","tables_should_include_at_least_one_header_48779eac":"Tabeller bør inkludere minst en tittel.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Teksten er vanskelig å lese uten tilstrekkelig kontrast mellom tekst og bakgrunn, spesielt for svaksynte. ","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Tekst større enn 18pkt (eller tykk 14pkt) bør vises med en minimums kontrastrate på 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Tekst mindre enn 18pkt (eller tykk 14pkt) bør vises med en minimums kontrastrate på 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Når det brukes markering som visuellt formaterer elementer som en liste men ikke indikerer et listeforhold kan brukere finne det vanskelig å navigere informasjonen.","why_523b3d8c":"Hvorfor"},"nl":{"accessibility_checker_b3af1f6c":"Toegankelijkheidscontrole","action_to_take_b626a99a":"Te ondernemen actie:","add_a_caption_2a915239":"Ondertiteling toevoegen","add_alt_text_for_the_image_48cd88aa":"Alt-tekst toevoegen voor de afbeelding","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Aangrenzende koppelingen met dezelfde URL moeten één koppeling zijn.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alt-tekst mag niet meer dan 120 tekens bevatten.","apply_781a2546":"Toepassen","change_alt_text_92654906":"Alt-tekst wijzigen","change_heading_tag_to_paragraph_a61e3113":"Koptekstlabel bij alinea","change_text_color_1aecb912":"Tekstkleur wijzigen","check_accessibility_3c78211c":"Toegankelijkheid controleren","checking_for_accessibility_issues_fac18c6d":"Controleren op toegankelijkheidsproblemen","close_accessibility_checker_29d1c51e":"Toegankelijkheidscontrole sluiten","close_d634289d":"Sluiten","column_e1ae5c64":"Kolom","column_group_1c062368":"Kolomgroep","decorative_image_fde98579":"Decoratieve afbeelding","element_starting_with_start_91bf4c3b":"Element dat begint met { start }","fix_heading_hierarchy_f60884c4":"Hiërarchie van kopteksten corrigeren","format_as_a_list_142210c3":"Opmaken als lijst","header_column_f27433cb":"Koptekstkolom","header_row_and_column_ec5b9ec":"Koptekstrij en -kolom","header_row_f33eb169":"Koptekstrij","heading_levels_should_not_be_skipped_3947c0e0":"Koptekstniveaus mogen niet worden overgeslagen.","heading_starting_with_start_42a3e7f9":"Koptekst die begint met { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Kopteksten mogen niet meer dan 120 tekens bevatten.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Namen van afbeeldingsbestanden mogen niet worden gebruikt als alt-kenmerk voor beschrijving van de inhoud van de afbeelding.","image_with_filename_file_aacd7180":"Afbeelding met bestandsnaam { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Afbeeldingen moeten een alt-kenmerk hebben dat de inhoud van de afbeelding beschrijft.","issue_num_total_f94536cf":"Probleem { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Gebruik de Tab-toets op het toetsenbord om te navigeren naar koppelingen. Twee aangrenzende koppelingen die naar dezelfde bestemming leiden, kunnen verwarrend werken bij gebruik van het toetsenbord.","learn_more_about_adjacent_links_2cb9762c":"Meer informatie over aangrenzende links","learn_more_about_color_contrast_c019dfb9":"Meer informatie over kleurcontrast","learn_more_about_organizing_page_headings_8a7caa2e":"Meer informatie over ordenen van paginakopteksten","learn_more_about_table_headers_5f5ee13":"Meer informatie over tabelkopteksten","learn_more_about_using_alt_text_for_images_5698df9a":"Meer informatie over gebruik van alt-tekst voor afbeeldingen","learn_more_about_using_captions_with_tables_36fe496f":"Meer informatie over gebruik van ondertiteling met tabellen","learn_more_about_using_filenames_as_alt_text_264286af":"Meer informatie over gebruik van bestandsnamen als alt-tekst","learn_more_about_using_lists_4e6eb860":"Meer informatie over gebruik van lijsten","learn_more_about_using_scope_attributes_with_table_20df49aa":"Meer informatie over gebruik van bereikattributen met tabellen","leave_as_is_4facfe55":"Ongewijzigd laten","link_with_text_starting_with_start_b3fcbe71":"Koppeling maken naar tekst die begint met { start }","lists_should_be_formatted_as_lists_f862de8d":"Lijsten moeten als lijst worden opgemaakt.","merge_links_2478df96":"Koppelingen samenvoegen","next_40e12421":"Volgende","no_accessibility_issues_were_detected_f8d3c875":"Geen toegankelijkheidsproblemen gevonden.","no_headers_9bc7dc7f":"Geen kopteksten","none_3b5e34d2":"Geen","paragraph_starting_with_start_a59923f8":"Alinea die begint met { start }","prev_f82cbc48":"Vorige","remove_heading_style_5fdc8855":"Koptekststijl verwijderen","row_fc0944a7":"Rij","row_group_979f5528":"Rijgroep","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Schermlezers kunnen niet bepalen wat er wordt weergegeven in een afbeelding zonder alt-tekst en bestandsnamen zijn vaak betekenisloze tekenreeksen van cijfers en letters die niets over de inhoud of betekenis prijsgeven.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Schermlezers kunnen niet bepalen wat er wordt weergegeven in een afbeelding zonder alt-tekst, die de inhoud en betekenis van de afbeelding beschrijft. Alt-tekst moet eenvoudig en beknopt zijn.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Schermlezers kunnen niet bepalen wat er wordt weergegeven in een afbeelding zonder alt-tekst, die de inhoud en betekenis van de afbeelding beschrijft.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Schermlezers kunnen geen tabellen zonder de juiste structuur interpreteren. Tabelkoppen geven een aanduiding van de inhoud.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Schermlezers kunnen geen tabellen zonder de juiste structuur interpreteren. Tabelbijschriften geven de context en een algemeen beeld van de tabel.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Schermlezers kunnen geen tabellen zonder de juiste structuur interpreteren. Tabelkoppen geven een aanduiding van de inhoud.","set_header_scope_8c548f40":"Kopbeschrijving instellen","set_table_header_cfab13a0":"Tablekop instellen","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Slechtzienden bladeren snel door webpagina\'\'s, op zoek naar grote of vette koppen. Gebruikers van schermlezers zijn afhankelijk van koppen om een idee van de context te krijgen. Koppen moeten de juiste structuur hebben.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Slechtzienden bladeren snel door webpagina\'\'s, op zoek naar grote of vette koppen. Gebruikers van schermlezers zijn afhankelijk van koppen om een idee van de context te krijgen. Koppen moeten beknopt zijn en de juiste structuur hebben.","table_header_starting_with_start_ffcabba6":"Tabelkop die begint met { start }","table_starting_with_start_e7232848":"Tabel die begint met { start }","tables_headers_should_specify_scope_5abf3a8e":"Tabelkoppen moeten de context aangeven.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabellen moeten een bijschrift bevatten dat de inhoud van de tabel aangeeft.","tables_should_include_at_least_one_header_48779eac":"Tabellen moeten minstens één kop hebben.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Tekst is moeilijk te lezen zonder voldoende contrast tussen de tekst en de achtergrond, met name voor slechtzienden.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Voor tekst groter dan 18pt (of vet 14pt) geldt een miinimum contrastverhouding van 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Voor tekst kleiner dan 18pt (of vet 14pt) geldt een miinimum contrastverhouding van 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Wanneer een markering is gebruikt die items visueel opmaakt als een lijst maar de lijstrelatie niet aangeeft, kan het voor gebruikers moeilijk zijn om door de informatie te navigeren.","why_523b3d8c":"Waarom"},"pl":{"accessibility_checker_b3af1f6c":"Kontrola dostępności","action_to_take_b626a99a":"Wymagane działanie:","add_a_caption_2a915239":"Dodaj napis","add_alt_text_for_the_image_48cd88aa":"Dodaj alternatywny tekst dla obrazka","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Sąsiadujące łącza o tym samym adresie URL powinny stanowić pojedyncze łącze.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alternatywny tekst nie może zawierać więcej niż 120 znaków.","apply_781a2546":"Zastosuj","change_alt_text_92654906":"Zmień alternatywny tekst","change_heading_tag_to_paragraph_a61e3113":"Zmień tag nagłówka na akapit","change_text_color_1aecb912":"Zmień kolor tekstu","check_accessibility_3c78211c":"Sprawdź dostępność","checking_for_accessibility_issues_fac18c6d":"Sprawdź problemy z dostępnością","close_accessibility_checker_29d1c51e":"Zamknij kontrolę dostępności","close_d634289d":"Zamknij","column_e1ae5c64":"Kolumna","column_group_1c062368":"Grupa kolumn","decorative_image_fde98579":"Obraz dekoracyjny","element_starting_with_start_91bf4c3b":"Element rozpoczynający się od { start }","fix_heading_hierarchy_f60884c4":"Przypnij hierarchię nagłówków","format_as_a_list_142210c3":"Formatuj jako listę","header_column_f27433cb":"Kolumna nagłówka","header_row_and_column_ec5b9ec":"Wiersz i kolumna nagłówka","header_row_f33eb169":"Wiersz nagłówka","heading_levels_should_not_be_skipped_3947c0e0":"Poziomów nagłówka nie można pomijać.","heading_starting_with_start_42a3e7f9":"Nagłówek rozpoczynający się od { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Nagłówki nie powinny zawierać więcej niż 120 znaków.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Nazw plików obrazu nie można używać jako alternatywnego atrybutu opisującego zawartość obrazu.","image_with_filename_file_aacd7180":"Plik obrazu z nazwą { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Obrazy powinny obejmować alternatywny atrybut opisujący zawartość obrazu.","issue_num_total_f94536cf":"Problem { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Klawiatury pozwalają przejść do łączy za pomocą klawisza Tab. Dwa sąsiednie łącza prowadzącego do tej samej lokalizacji mogą wprowadzać użytkowników klawiatury w błąd.","learn_more_about_adjacent_links_2cb9762c":"Uzyskaj więcej informacji na temat sąsiadujących linków","learn_more_about_color_contrast_c019dfb9":"Uzyskaj więcej informacji na temat kontrastu barw","learn_more_about_organizing_page_headings_8a7caa2e":"Uzyskaj więcej informacji na temat organizacji nagłówków na stronie","learn_more_about_table_headers_5f5ee13":"Uzyskaj więcej informacji na temat nagłówków tabeli","learn_more_about_using_alt_text_for_images_5698df9a":"Uzyskaj więcej informacji na temat alternatywnego tekstu dla obrazów","learn_more_about_using_captions_with_tables_36fe496f":"Uzyskaj więcej informacji na temat napisów i tabel","learn_more_about_using_filenames_as_alt_text_264286af":"Uzyskaj więcej informacji na temat nazw plików jako alternatywnego tekstu","learn_more_about_using_lists_4e6eb860":"Uzyskaj więcej informacji na temat korzystania z list","learn_more_about_using_scope_attributes_with_table_20df49aa":"Uzyskaj więcej informacji na temat atrybutów zakresu i tabel","leave_as_is_4facfe55":"Pozostaw jako","link_with_text_starting_with_start_b3fcbe71":"Powiąż z tekstem, który się zaczyna od słów { start }","lists_should_be_formatted_as_lists_f862de8d":"Listy należy sformatować jako listy.","merge_links_2478df96":"Scal łącza","next_40e12421":"Następny","no_accessibility_issues_were_detected_f8d3c875":"Nie wykryto problemów z dostępnością.","no_headers_9bc7dc7f":"Brak nagłówków","none_3b5e34d2":"Brak","paragraph_starting_with_start_a59923f8":"Akapit rozpoczynający się od { start }","prev_f82cbc48":"Poprz","remove_heading_style_5fdc8855":"Usuń styl nagłówka","row_fc0944a7":"Wiersz","row_group_979f5528":"Grupa wierszy","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Czytniki ekranu nie mogą określić, co jest wyświetlone na obrazie bez alternatywnego tekstu, a nazwy plików są często pozbawionymi znaczenia ciągami cyfr i liter, które nie opisują kontekstu.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Czytniki ekranu nie mogą określić, co jest wyświetlone na obrazie bez alternatywnego tekstu, który opisywałby zawartość i znaczenie obrazu. Tekst alternatywny powinien być prosty i zwięzły.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Czytniki ekranu nie mogą określić, co jest wyświetlone na obrazie bez alternatywnego tekstu, który opisywałby zawartość i znaczenie obrazu.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Czytniki ekranu nie mogą interpretować tabel bez odpowiedniej struktury. Nagłówki tabel zapewniają wskazówki i wskazują na zakres zawartości.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Czytniki ekranu nie mogą interpretować tabel bez odpowiedniej struktury. Napisy w tabelach opisują kontekst i ogólne przesłanie tabeli.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Czytniki ekranu nie mogą interpretować tabel bez odpowiedniej struktury. Nagłówki tabeli zapewniają wskazówki i streszczenie zawartości.","set_header_scope_8c548f40":"Ustaw zakres nagłówka","set_table_header_cfab13a0":"Ustaw nagłówek tabeli","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Użytkownicy z dobrym wzrokiem szybciej przeglądają strony internetowe, odszukując duże lub zapisane pogrubioną czcionką nagłówki. Użytkownicy czytników ekranu polegają na nagłówkach dla zrozumienia kontekstu. Nagłówki muszą wykorzystywać odpowiednią strukturę.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Użytkownicy z dobrym wzrokiem szybciej przeglądają strony internetowe, odszukując duże lub zapisane pogrubioną czcionką nagłówki. Użytkownicy czytników ekranu polegają na nagłówkach dla zrozumienia kontekstu. Nagłówki w prawidłowej strukturze muszą być zwięzłe.","table_header_starting_with_start_ffcabba6":"Nagłówek tabeli rozpoczynający się od { start }","table_starting_with_start_e7232848":"Tabela rozpoczynająca się od { start }","tables_headers_should_specify_scope_5abf3a8e":"Nagłówki tabeli powinny określać zakres.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabele powinny obejmować opis zawartości tabeli.","tables_should_include_at_least_one_header_48779eac":"Tabele powinny zawierać co najmniej jeden nagłówek.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Tekst jest trudny do czytania bez wystarczającego kontrastu między tekstem i tłem, szczególnie w przypadku osób ze słabym wzrokiem.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Tekst o czcionce powyżej 18 pt (lub pogrubionej 14 pt) powinien korzystać ze współczynnika kontrastu co najmniej 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Tekst o czcionce poniżej 18 pt (lub pogrubionej 14 pt) powinien korzystać ze współczynnika kontrastu co najmniej 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Gdy używane jest oznaczenie, które wizualnie formatuje elementy jako listę, ale nie wskazuje na relacje w liście, użytkownicy mogą mieć problem z nawigowaniem po informacjach.","why_523b3d8c":"Dlaczego"},"pt-BR":{"accessibility_checker_b3af1f6c":"Verificador de acessibilidade:","action_to_take_b626a99a":"Ação a tomar:","add_a_caption_2a915239":"Adicionar legendas","add_alt_text_for_the_image_48cd88aa":"Adicionar texto alternativo para a imagem","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Links adjacentes com a mesma URL devem ser um único link.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Texto do atributo alternativo não deve ter mais de 120 caracteres.","apply_781a2546":"Aplicar","change_alt_text_92654906":"Alterar texto alternativo","change_heading_tag_to_paragraph_a61e3113":"Alterar tag do título para parágrafo","change_text_color_1aecb912":"Alterar cor do texto","check_accessibility_3c78211c":"Verificar acessibilidade","checking_for_accessibility_issues_fac18c6d":"Verificando problemas de acessibilidade","close_accessibility_checker_29d1c51e":"Fechar Verificador de acessibilidade","close_d634289d":"Fechar","column_e1ae5c64":"Coluna","column_group_1c062368":"Grupo de colunas","decorative_image_fde98579":"Imagem decorativa","element_starting_with_start_91bf4c3b":"Elemento começando com { start }","fix_heading_hierarchy_f60884c4":"Corrigir hierarquia de títulos","format_as_a_list_142210c3":"Formatar como uma lista","header_column_f27433cb":"Coluna do cabeçalho","header_row_and_column_ec5b9ec":"Linha e coluna do cabeçalho","header_row_f33eb169":"Linha do cabeçalho","heading_levels_should_not_be_skipped_3947c0e0":"Níveis de títulos não devem ser pulados.","heading_starting_with_start_42a3e7f9":"Título começando com { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Títulos não devem ter mais de 120 caracteres.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Nomes de arquivos da imagem não devem ser usados como atributo alternativo descrevendo o conteúdo da imagem.","image_with_filename_file_aacd7180":"Imagem com nome de arquivo { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Imagens devem incluir um atributo alternativo descrevendo o conteúdo da imagem.","issue_num_total_f94536cf":"Problema { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Teclados navegam para links usando a tecla Tab. Dois links adjacentes que direcionam para o mesmo destino podem ser confusos para usuários de teclado.","learn_more_about_adjacent_links_2cb9762c":"Saiba mais sobre links adjacentes","learn_more_about_color_contrast_c019dfb9":"Saiba mais sobre o contraste de cores","learn_more_about_organizing_page_headings_8a7caa2e":"Saiba mais sobre a organização de cabeçalhos da página","learn_more_about_table_headers_5f5ee13":"Saiba mais sobre cabeçalhos de tabelas","learn_more_about_using_alt_text_for_images_5698df9a":"Saiba mais sobre o uso de texto alternativo para imagens","learn_more_about_using_captions_with_tables_36fe496f":"Saiba mais sobre o uso de legendas com tabelas","learn_more_about_using_filenames_as_alt_text_264286af":"Saiba mais sobre o uso de nomes de arquivos como texto alternativo","learn_more_about_using_lists_4e6eb860":"Saiba mais sobre o uso de listas","learn_more_about_using_scope_attributes_with_table_20df49aa":"Saiba mais sobre o uso de atributos de escopo com tabelas","leave_as_is_4facfe55":"Deixar como está","link_with_text_starting_with_start_b3fcbe71":"Link com texto começando com { start }","lists_should_be_formatted_as_lists_f862de8d":"Listas devem ser formatadas como listas.","merge_links_2478df96":"Mesclar links","next_40e12421":"Próximo","no_accessibility_issues_were_detected_f8d3c875":"Sem problemas de acessibilidades detectados.","no_headers_9bc7dc7f":"Sem cabeçalhos","none_3b5e34d2":"Nenhum","paragraph_starting_with_start_a59923f8":"Parágrafo começando com { start }","prev_f82cbc48":"Ant","remove_heading_style_5fdc8855":"Remover estilo do título","row_fc0944a7":"Linha","row_group_979f5528":"Grupo de linhas","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Leitores de tela não podem determinar o que é exibido em uma imagem sem texto alternativo, e nomes de arquivos geralmente são strings sem significados de números e letras que não descrevem o contexto ou significado.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Leitores de tela não podem determinar o que é exibido em uma imagem sem texto alternativo, que descreve o conteúdo e significado da imagem. Texto alternativo deve ser simples e conciso.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Leitores de tela não podem determinar o que é exibido em uma imagem sem texto alternativo, que descreve o conteúdo e significado da imagem.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Leitores de tela não podem interpretar tabelas sem a estrutura adequada. Cabeçalhos de tabelas fornecem direção e âmbito do conteúdo.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Leitores de tela não podem interpretar tabelas sem a estrutura adequada. Legendas de tabelas descrevem o contexto e entendimento geral da tabela.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Leitores de tela não podem interpretar tabelas sem a estrutura adequada. Cabeçalhos de tabelas fornecem direção e visão geral do conteúdo.","set_header_scope_8c548f40":"Definir âmbito do cabeçalho","set_table_header_cfab13a0":"Definir cabeçalho da tabela","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Deficientes visuais navegam rapidamente nas páginas web, buscando títulos grandes ou negritos. Usuários de leitores de tela dependem dos cabeçalhos para entendimento contextual. Os cabeçalhos devem usar a estrutura adequada.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Deficientes visuais navegam rapidamente nas páginas web, buscando títulos grandes ou negritos. Usuários de leitores de tela dependem dos cabeçalhos para entendimento contextual. Os cabeçalhos devem ser concisos dentro da estrutura adequada.","table_header_starting_with_start_ffcabba6":"Cabeçalho de tabela começando com { start }","table_starting_with_start_e7232848":"Tabela começando com { start }","tables_headers_should_specify_scope_5abf3a8e":"Cabeçalhos de tabela devem especificar o âmbito.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabelas devem incluir uma legenda descrevendo o conteúdo da tabela.","tables_should_include_at_least_one_header_48779eac":"Tabelas devem incluir pelo menos um cabeçalho.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Texto é difícil de ler sem contraste suficiente entre o texto e o plano de fundo, especialmente para aqueles com pouca visão.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Texto maior do que 18pt (ou negrito 14pt) deve exibir uma razão mínima de contraste de 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Texto menor do que 18pt (ou negrito 14pt) deve exibir uma razão mínima de contraste de 4.5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Quando marcação é usada, que visualmente formata itens como uma lista, mas não indica o relacionamento da lista, os usuários podem ter dificuldade em navegar pelas informações.","why_523b3d8c":"Por que"},"pt-PT":{"accessibility_checker_b3af1f6c":"Verificador de acessibilidade","action_to_take_b626a99a":"Ação a tomar:","add_a_caption_2a915239":"Adicionar uma legenda","add_alt_text_for_the_image_48cd88aa":"Adicionar texto alternativo para a imagem","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Ligações adjacentes com o mesmo URL devem ser uma única ligação.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"O texto do atributo Alt não deve conter mais de 120 caracteres.","apply_781a2546":"Aplicar","change_alt_text_92654906":"Alterar texto alternativo","change_heading_tag_to_paragraph_a61e3113":"Alterar a etiqueta de título para o parágrafo","change_text_color_1aecb912":"Mudar a cor do texto","check_accessibility_3c78211c":"Verificar Acessibilidade","checking_for_accessibility_issues_fac18c6d":"Verificar problemas de acessibilidade","close_accessibility_checker_29d1c51e":"Fechar Verificador de acessibilidade","column_e1ae5c64":"Coluna","column_group_1c062368":"Grupo de coluna","decorative_image_fde98579":"Imagem decorativa","element_starting_with_start_91bf4c3b":"Elemento a começar com { start }","fix_heading_hierarchy_f60884c4":"Fixar hierarquia","header_column_f27433cb":"Coluna de cabeçalho","header_row_and_column_ec5b9ec":"Cabeçalho linha e coluna","header_row_f33eb169":"Linha de cabeçalho","heading_levels_should_not_be_skipped_3947c0e0":"Os níveis de título não devem ser ignorados.","heading_starting_with_start_42a3e7f9":"Título começando com { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Os títulos não devem conter mais de 120 caracteres.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Os nomes dos arquivos de imagem não devem ser usados ​​como o atributo alt descrevendo o conteúdo da imagem.","image_with_filename_file_aacd7180":"Imagem com nome de ficheiro { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"As imagens devem incluir um atributo alt descrevendo o conteúdo da imagem.","issue_num_total_f94536cf":"Questão { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Os teclados navegam para ligações usando a tecla Tab. Dois links adjacentes que direcionam para o mesmo destino podem confundir os utilizadores de teclado.","learn_more_a79a7918":"Aprender mais","leave_as_is_4facfe55":"Deixe como está","link_with_text_starting_with_start_b3fcbe71":"Ligação com texto a começar com { start }","merge_links_2478df96":"Criar ligações","next_40e12421":"Próximo","no_accessibility_issues_were_detected_f8d3c875":"Não foram detectados problemas de acessibilidade.","no_headers_9bc7dc7f":"Sem cabeçalho","none_3b5e34d2":"Nenhum","paragraph_starting_with_start_a59923f8":"Parágrafo começando com { start }","prev_f82cbc48":"Voltar","remove_heading_style_5fdc8855":"Remova estilo de cabeçalho","row_fc0944a7":"Linha","row_group_979f5528":"Grupo de linhas","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Os leitores de ecrã não podem determinar o que é exibido numa imagem sem texto alternativo, e os nomes dos ficheiros geralmente são sem sentido de sequências de números e letras que não descrevem o contexto ou o significado.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Os leitores de ecrã não podem determinar o que é exibido numa imagem sem texto alternativo, que descreve o conteúdo e o significado da imagem. O texto alternativo deve ser simples e conciso.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Os leitores de ecrã não podem determinar o que é exibido numa imagem sem texto alternativo, que descreve o conteúdo e o significado da imagem.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Os leitores de ecrã não podem interpretar tabelas sem a estrutura adequada. Os cabeçalhos de tabela fornecem escopo de direção e conteúdo.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Os leitores de ecrã não podem interpretar tabelas sem a estrutura adequada. As legendas da tabela descrevem o contexto e a compreensão geral da tabela.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Os leitores de ecrã não podem interpretar tabelas sem a estrutura adequada. Cabeçalhos de tabela fornecem orientação e visão geral do conteúdo.","set_header_scope_8c548f40":"Definir o alcance do cabeçalho","set_table_header_cfab13a0":"Definir cabeçalho da tabela","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Utilizadores vistos navegam nas páginas da Web rapidamente, procurando títulos em grande ou em negrito. Os utilizadores do leitor de ecrã dependem de cabeçalhos para a compreensão contextual. Os cabeçalhos devem usar a estrutura adequada.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Utilizadores vistos navegam nas páginas da Web rapidamente, procurando títulos em grande ou em negrito. Os utilizadores do leitor de ecrã dependem de cabeçalhos para a compreensão contextual. Os cabeçalhos devem ser concisos dentro da estrutura adequada.","table_header_starting_with_start_ffcabba6":"Cabeçalho da tabela começando com { start }","table_starting_with_start_e7232848":"Tabela começando com { start }","tables_headers_should_specify_scope_5abf3a8e":"Os cabeçalhos das tabelas devem especificar o escopo.","tables_should_include_a_caption_describing_the_con_e91e78fc":"As tabelas devem incluir uma legenda descrevendo o conteúdo da tabela.","tables_should_include_at_least_one_header_48779eac":"As tabelas devem incluir pelo menos um cabeçalho.","text_is_difficult_to_read_without_suffcient_contra_27b82183":"O texto é difícil de ler sem um suficiente contraste entre o texto e o fundo, especialmente para aqueles com baixa visão.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"O texto maior que 18pt (ou em negrito 14pt) deve exibir uma relação mínima de contraste de 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"O texto menor que 18pt (ou em negrito 14pt) deve exibir uma relação de contraste mínima de 4.5:1.","why_523b3d8c":"Por quê"},"pt":{"accessibility_checker_b3af1f6c":"Verificador de acessibilidade","action_to_take_b626a99a":"Ação a tomar:","add_a_caption_2a915239":"Adicionar uma legenda","add_alt_text_for_the_image_48cd88aa":"Adicionar texto alternativo para a imagem","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Ligações adjacentes com o mesmo URL devem ser uma única ligação.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"O texto do atributo Alt não deve conter mais de 120 caracteres.","apply_781a2546":"Aplicar","change_alt_text_92654906":"Alterar texto alternativo","change_heading_tag_to_paragraph_a61e3113":"Alterar a etiqueta de título para o parágrafo","change_text_color_1aecb912":"Mudar a cor do texto","check_accessibility_3c78211c":"Verificar Acessibilidade","checking_for_accessibility_issues_fac18c6d":"Verificar problemas de acessibilidade","close_accessibility_checker_29d1c51e":"Fechar Verificador de acessibilidade","close_d634289d":"Fechar","column_e1ae5c64":"Coluna","column_group_1c062368":"Grupo de coluna","decorative_image_fde98579":"Imagem decorativa","element_starting_with_start_91bf4c3b":"Elemento a começar com { start }","fix_heading_hierarchy_f60884c4":"Fixar hierarquia","format_as_a_list_142210c3":"Formatar como uma lista","header_column_f27433cb":"Coluna de cabeçalho","header_row_and_column_ec5b9ec":"Cabeçalho linha e coluna","header_row_f33eb169":"Linha de cabeçalho","heading_levels_should_not_be_skipped_3947c0e0":"Os níveis de título não devem ser ignorados.","heading_starting_with_start_42a3e7f9":"Título começando com { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Os títulos não devem conter mais de 120 caracteres.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Os nomes dos arquivos de imagem não devem ser usados ​​como o atributo alt descrevendo o conteúdo da imagem.","image_with_filename_file_aacd7180":"Imagem com nome de ficheiro { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"As imagens devem incluir um atributo alt descrevendo o conteúdo da imagem.","issue_num_total_f94536cf":"Questão { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Os teclados navegam para ligações usando a tecla Tab. Dois links adjacentes que direcionam para o mesmo destino podem confundir os utilizadores de teclado.","learn_more_about_adjacent_links_2cb9762c":"Saiba mais sobre ligações adjacentes","learn_more_about_color_contrast_c019dfb9":"Saiba mais sobre o contraste de cores","learn_more_about_organizing_page_headings_8a7caa2e":"Saiba mais sobre como organizar títulos de página","learn_more_about_table_headers_5f5ee13":"Saiba mais sobre cabeçalhos de tabelas","learn_more_about_using_alt_text_for_images_5698df9a":"Saiba mais sobre como usar o texto alternativo para imagens","learn_more_about_using_captions_with_tables_36fe496f":"Saiba mais sobre como usar legendas com tabelas","learn_more_about_using_filenames_as_alt_text_264286af":"Saiba mais sobre como usar nomes de ficheiros como texto alternativo","learn_more_about_using_lists_4e6eb860":"Saiba mais sobre como usar listas","learn_more_about_using_scope_attributes_with_table_20df49aa":"Saiba mais sobre como usar atributos de escopo com tabelas","leave_as_is_4facfe55":"Deixe como está","link_with_text_starting_with_start_b3fcbe71":"Ligação com texto a começar com { start }","lists_should_be_formatted_as_lists_f862de8d":"As listas devem ser formatadas como listas.","merge_links_2478df96":"Criar ligações","next_40e12421":"Próximo","no_accessibility_issues_were_detected_f8d3c875":"Não foram detectados problemas de acessibilidade.","no_headers_9bc7dc7f":"Sem cabeçalho","none_3b5e34d2":"Nenhum","paragraph_starting_with_start_a59923f8":"Parágrafo começando com { start }","prev_f82cbc48":"Voltar","remove_heading_style_5fdc8855":"Remova estilo de cabeçalho","row_fc0944a7":"Linha","row_group_979f5528":"Grupo de linhas","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Os leitores de ecrã não podem determinar o que é exibido numa imagem sem texto alternativo, e os nomes dos ficheiros geralmente são sem sentido de sequências de números e letras que não descrevem o contexto ou o significado.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Os leitores de ecrã não podem determinar o que é exibido numa imagem sem texto alternativo, que descreve o conteúdo e o significado da imagem. O texto alternativo deve ser simples e conciso.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Os leitores de ecrã não podem determinar o que é exibido numa imagem sem texto alternativo, que descreve o conteúdo e o significado da imagem.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Os leitores de ecrã não podem interpretar tabelas sem a estrutura adequada. Os cabeçalhos de tabela fornecem escopo de direção e conteúdo.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Os leitores de ecrã não podem interpretar tabelas sem a estrutura adequada. As legendas da tabela descrevem o contexto e a compreensão geral da tabela.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Os leitores de ecrã não podem interpretar tabelas sem a estrutura adequada. Cabeçalhos de tabela fornecem orientação e visão geral do conteúdo.","set_header_scope_8c548f40":"Definir o alcance do cabeçalho","set_table_header_cfab13a0":"Definir cabeçalho da tabela","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Utilizadores vistos navegam nas páginas da Web rapidamente, procurando títulos em grande ou em negrito. Os utilizadores do leitor de ecrã dependem de cabeçalhos para a compreensão contextual. Os cabeçalhos devem usar a estrutura adequada.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Utilizadores vistos navegam nas páginas da Web rapidamente, procurando títulos em grande ou em negrito. Os utilizadores do leitor de ecrã dependem de cabeçalhos para a compreensão contextual. Os cabeçalhos devem ser concisos dentro da estrutura adequada.","table_header_starting_with_start_ffcabba6":"Cabeçalho da tabela começando com { start }","table_starting_with_start_e7232848":"Tabela começando com { start }","tables_headers_should_specify_scope_5abf3a8e":"Os cabeçalhos das tabelas devem especificar o escopo.","tables_should_include_a_caption_describing_the_con_e91e78fc":"As tabelas devem incluir uma legenda descrevendo o conteúdo da tabela.","tables_should_include_at_least_one_header_48779eac":"As tabelas devem incluir pelo menos um cabeçalho.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"O texto é difícil de ler sem contraste suficiente entre o texto e o fundo, especialmente para aqueles com baixa visão.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"O texto maior que 18pt (ou em negrito 14pt) deve exibir uma relação mínima de contraste de 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"O texto menor que 18pt (ou em negrito 14pt) deve exibir uma relação de contraste mínima de 4.5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Quando a marcação é usada para formatar itens visualmente como uma lista, mas não indica o relacionamento da lista, os utilizadores podem ter dificuldade em navegar pelas informações.","why_523b3d8c":"Por quê"},"ru":{"accessibility_checker_b3af1f6c":"Контроллер доступности","action_to_take_b626a99a":"Что необходимо сделать:","add_a_caption_2a915239":"Добавить надпись","add_alt_text_for_the_image_48cd88aa":"Добавить альтернативный текст для изображения","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Соседние ссылки с одним и тем же URL-адресом должны быть объединены в одну ссылку.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Альтернативный атрибутивный текст не должен содержать более 120 символов.","apply_781a2546":"Применить","change_alt_text_92654906":"Изменить альтернативный текст","change_heading_tag_to_paragraph_a61e3113":"Изменить тег заголовка параграфа","change_text_color_1aecb912":"Изменить цвет текста","check_accessibility_3c78211c":"Проверить доступность","checking_for_accessibility_issues_fac18c6d":"Проверка на отсутствие проблем, связанных с доступностью","close_accessibility_checker_29d1c51e":"Закрыть контроллер доступности","close_d634289d":"Закрыть","column_e1ae5c64":"Колонка","column_group_1c062368":"Группа колонок","decorative_image_fde98579":"Декоративное изображение","element_starting_with_start_91bf4c3b":"Элемент, начинающийся с { start }","fix_heading_hierarchy_f60884c4":"Исправить иерархию заголовков","format_as_a_list_142210c3":"Форматировать в виде списка","header_column_f27433cb":"Колонка заголовка","header_row_and_column_ec5b9ec":"Строка и колонка заголовка","header_row_f33eb169":"Строка заголовка","heading_levels_should_not_be_skipped_3947c0e0":"Уровни заголовков не должны пропускаться.","heading_starting_with_start_42a3e7f9":"Заголовок, начинающийся с { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Заголовки не должны содержать более 120 символов.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Имена файлов изображений не должны использоваться в качестве альтернативного атрибута с описанием содержимого изображения.","image_with_filename_file_aacd7180":"Изображение с именем файла { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Изображения должны содержать альтернативный атрибут с описанием содержимого изображения.","issue_num_total_f94536cf":"Проблема { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Клавиатуры используются для перехода по ссылкам с помощью клавиши Tab. Две соседние ссылки, ведущие в одно и то же место, могут запутывать пользователей клавиатур.","learn_more_about_adjacent_links_2cb9762c":"Узнать больше о соседних ссылках","learn_more_about_color_contrast_c019dfb9":"Узнать больше о цветовом контрасте","learn_more_about_organizing_page_headings_8a7caa2e":"Узнать больше об организации заголовков страниц","learn_more_about_table_headers_5f5ee13":"Узнать больше о заголовках таблиц","learn_more_about_using_alt_text_for_images_5698df9a":"Узнать больше об использовании замещающего текста для изображений","learn_more_about_using_captions_with_tables_36fe496f":"Узнать больше об использовании заголовков с таблицами","learn_more_about_using_filenames_as_alt_text_264286af":"Узнать больше об использовании имен файлов в качестве замещающего текста","learn_more_about_using_lists_4e6eb860":"Узнать больше об использовании списков","learn_more_about_using_scope_attributes_with_table_20df49aa":"Узнать больше об использовании базовых атрибутов с таблицами","leave_as_is_4facfe55":"Оставить как есть","link_with_text_starting_with_start_b3fcbe71":"Ссылка с текстом, начинающимся с { start }","lists_should_be_formatted_as_lists_f862de8d":"Списки должны быть отформатированы в виде списков.","merge_links_2478df96":"Объединить ссылки","next_40e12421":"Далее","no_accessibility_issues_were_detected_f8d3c875":"Проблем, связанных с доступностью, не обнаружено.","no_headers_9bc7dc7f":"Заголовки отсутствуют","none_3b5e34d2":"Нет","paragraph_starting_with_start_a59923f8":"Параграф, начинающийся с { start }","prev_f82cbc48":"Назад","remove_heading_style_5fdc8855":"Удалить стиль заголовка","row_fc0944a7":"Строка","row_group_979f5528":"Группа строк","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Экранные дикторы не могут определить, что отображено на изображении, без альтернативного текста, и при этом имена файлов зачастую представляют собой бессмысленные наборы цифр и букв, которые не несут в себе описания контекста или значения.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Экранные дикторы не могут определить, что отображено на изображении, без альтернативного текста, содержащего описание контекста и значения изображения. Альтернативный текст должен быть простым и сжатым.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Экранные дикторы не могут определить, что отображено на изображении, без альтернативного текста, содержащего описание контекста и значения изображения.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Экранные дикторы не могут интерпретировать таблицы без надлежащей структуры. Заголовки таблиц содержат направление и объем содержания.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Экранные дикторы не могут интерпретировать таблицы без надлежащей структуры. Надписи в таблицах содержат описание контекста и общее представление о таблице.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Экранные дикторы не могут интерпретировать таблицы без надлежащей структуры. Заголовки таблиц содержат направление и общее описание содержания.","set_header_scope_8c548f40":"Задать объем заголовка","set_table_header_cfab13a0":"Задать заголовок таблицы","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Зрячие пользователи быстро просматривают веб-страницы в поисках крупных или полужирных заголовков. Пользователи экранных дикторов полагаются на заголовки для контекстуального понимания. Заголовки должны иметь надлежащую структуру.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Зрячие пользователи быстро просматривают веб-страницы в поисках крупных или полужирных заголовков. Пользователи экранных дикторов полагаются на заголовки для контекстуального понимания. Заголовки должны быть сжатыми в рамках надлежащей структуры.","table_header_starting_with_start_ffcabba6":"Заголовок таблицы, начинающийся с { start }","table_starting_with_start_e7232848":"Таблица, начинающаяся с { start }","tables_headers_should_specify_scope_5abf3a8e":"Заголовки таблиц должны конкретизировать объем.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Таблицы должны содержать надпись с описанием содержимого таблицы.","tables_should_include_at_least_one_header_48779eac":"Таблицы должны содержать как минимум один заголовок.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Текст трудно поддается чтению без достаточной контрастности между текстом и фоном, особенно для тех, кто плохо видит.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Текст крупнее 18pt (или полужирный 14pt) должен отображаться с минимальным коэффициентом контрастности 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Текст мельче 18pt (или полужирный 14pt) должен отображаться с минимальным коэффициентом контрастности 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Когда используется разметка, которая визуально форматирует элементы в виде списка, но не указывает на отношение списка, пользователи могут испытывать трудности при просмотре информации.","why_523b3d8c":"Почему"},"sl":{"accessibility_checker_b3af1f6c":"Orodje za preverjanje dostopnosti","action_to_take_b626a99a":"Dejanje, ki ga je treba izvesti:","add_a_caption_2a915239":"Dodaj spremno besedilo","add_alt_text_for_the_image_48cd88aa":"Dodaj nadomestno besedilo za sliko","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Sosednje povezave z istim naslovom URL morajo biti ena sama povezava.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Nadomestno besedilo lastnosti ne sme vsebovati več kot 120 znakov.","apply_781a2546":"Uporabi","change_alt_text_92654906":"Spremeni nadomestno besedilo","change_heading_tag_to_paragraph_a61e3113":"Spremeni oznako naslova odstavka","change_text_color_1aecb912":"Spremeni barvo besedila","check_accessibility_3c78211c":"Preveri dostopnost","checking_for_accessibility_issues_fac18c6d":"Preverjanje težav z dostopnostjo","close_accessibility_checker_29d1c51e":"Zapri orodje za preverjanje dostopnosti","close_d634289d":"Zapri","column_e1ae5c64":"Stolpec","column_group_1c062368":"Skupina stolpcev","decorative_image_fde98579":"Dekorativna slika","element_starting_with_start_91bf4c3b":"Element, ki se začne s/z { start }","fix_heading_hierarchy_f60884c4":"Popravi hierarhijo naslovov","format_as_a_list_142210c3":"Oblikuj kot seznam","header_column_f27433cb":"Stolpec z glavo","header_row_and_column_ec5b9ec":"Vrstica in stolpec z glavo","header_row_f33eb169":"Vrstica z glavo","heading_levels_should_not_be_skipped_3947c0e0":"Ravni naslovov ni dovoljeno preskočiti.","heading_starting_with_start_42a3e7f9":"Naslov, ki se začne s/z { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Naslovi ne smejo vsebovati več kot 120 znakov.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Imen datotek slik ni dovoljeno uporabljati kot nadomestno lastnost za opis vsebine slike.","image_with_filename_file_aacd7180":"Slika z imenom datoteke { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Slike morajo vsebovati nadomestno lastnost, ki opisuje vsebino slike.","issue_num_total_f94536cf":"Težava { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Navigacija do povezav poteka s tabulatorkami. Dve sosednji povezavi, ki usmerjata na isti cilj, lahko zmedeta uporabnike tipkovnic.","learn_more_about_adjacent_links_2cb9762c":"Več o sosednjih povezavah","learn_more_about_color_contrast_c019dfb9":"Več o barvnem kontrastu","learn_more_about_organizing_page_headings_8a7caa2e":"Več o organiziranju naslovov strani","learn_more_about_table_headers_5f5ee13":"Več o glavah preglednic","learn_more_about_using_alt_text_for_images_5698df9a":"Več o uporabi nadomestnega besedila za slike","learn_more_about_using_captions_with_tables_36fe496f":"Več o uporabi napisov pri preglednicah","learn_more_about_using_filenames_as_alt_text_264286af":"Več o uporabi imen datotek kot nadomestno besedilo","learn_more_about_using_lists_4e6eb860":"Več o uporabi seznamov","learn_more_about_using_scope_attributes_with_table_20df49aa":"Več o uporabi atributov obsega pri preglednicah","leave_as_is_4facfe55":"Ne spreminjaj","link_with_text_starting_with_start_b3fcbe71":"Poveži z besedilom, ki se začne s/z { start }","lists_should_be_formatted_as_lists_f862de8d":"Seznami morajo biti oblikovani kot seznami.","merge_links_2478df96":"Spoji povezave","next_40e12421":"Naprej","no_accessibility_issues_were_detected_f8d3c875":"Ni zaznanih težav z dostopnostjo.","no_headers_9bc7dc7f":"Ni glav.","none_3b5e34d2":"Brez","paragraph_starting_with_start_a59923f8":"Odstavek, ki se začne s/z { start }","prev_f82cbc48":"Nazaj","remove_heading_style_5fdc8855":"Odstrani slog naslova","row_fc0944a7":"Vrstica","row_group_979f5528":"Skupina vrstic","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Brez nadomestnega besedila bralniki zaslonov ne morejo določiti, kaj je prikazano na sliki, imena datotek pa so pogosto nizi številk in črk brez smisla, ki ne opisujejo konteksta ali pomena.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Brez nadomestnega besedila, ki opisuje vsebino in pomen slike, bralniki zaslonov ne morejo določiti, kaj je prikazano na sliki. Nadomestno besedilo mora biti enostavno in jedrnato.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Brez nadomestnega besedila, ki opisuje vsebino in pomen slike, bralniki zaslonov ne morejo določiti, kaj je prikazano na sliki.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Bralniki zaslonov ne morejo tolmačiti preglednic brez pravilne zgradbe. Glave preglednic zagotavljajo smer in obseg vsebine.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Bralniki zaslonov ne morejo tolmačiti preglednic brez pravilne zgradbe. Spremno besedilo preglednic opisuje kontekst in splošno razumevanje preglednice.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Bralniki zaslonov ne morejo tolmačiti preglednic brez pravilne zgradbe. Glave preglednic zagotavljajo smeri in pregled vsebine.","set_header_scope_8c548f40":"Nastavi obseg glave","set_table_header_cfab13a0":"Nastavi glavo preglednice","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Slabovidni uporabniki hitro brskajo po spletnih straneh in iščejo velike ali krepko zapisane naslove. Uporabniki bralnikov zaslonov se za razumevanje konteksta zanašajo na glave. Pri glavah mora biti uporabljena pravilna zgradba.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Slabovidni uporabniki hitro brskajo po spletnih straneh in iščejo velike ali krepko zapisane naslove. Uporabniki bralnikov zaslonov se za razumevanje konteksta zanašajo na glave. Glave morajo biti jedrnate in imeti pravilno zgradbo.","table_header_starting_with_start_ffcabba6":"Glava preglednice, ki se začne s/z { start }","table_starting_with_start_e7232848":"Preglednica, ki se začne s/z { start }","tables_headers_should_specify_scope_5abf3a8e":"Pri glavah preglednic mora biti naveden obseg.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Preglednice morajo vsebovati spremno besedilo z opisom vsebine preglednice.","tables_should_include_at_least_one_header_48779eac":"Preglednice morajo vključevati vsaj eno glavo.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Brez zadostnega kontrasta med besedilom in ozadjem je branje težavno, še posebej za slabovidne.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Pri besedilu, ki je večje od 18 pik (če je krepko, pa od 14 pik), mora biti kontrastno razmerje najmanj 3 : 1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Pri besedilu, ki je manjše od 18 pik (če je krepko, pa od 14 pik), mora biti kontrastno razmerje najmanj 4,5 : 1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Če je uporabljeno označevanje, ki vizualno oblikuje elemente kot seznam, ne kaže pa razmerja seznama, imajo lahko uporabniki težave pri navigiranju po informacijah.","why_523b3d8c":"Zakaj"},"sv-x-k12":{"accessibility_checker_b3af1f6c":"Tillgänglighetskontrollör","action_to_take_b626a99a":"Åtgärd att vidta:","add_a_caption_2a915239":"Lägg till en bildtext","add_alt_text_for_the_image_48cd88aa":"Lägg till alt text för bilden","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Intilliggande länkar med samma webbadress ska vara en enda länk.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alt attributtext ska inte innehålla mer än 120 tecken.","apply_781a2546":"Tillämpa","change_alt_text_92654906":"Ändra alt text","change_heading_tag_to_paragraph_a61e3113":"Ändra rubrikmärkning till stycke","change_text_color_1aecb912":"Ändra textfärg","check_accessibility_3c78211c":"Kontrollera tillgänglighet","checking_for_accessibility_issues_fac18c6d":"Kontrollerar tillgänglighetsproblem","close_accessibility_checker_29d1c51e":"Stäng tillgänglighetskontrollen","close_d634289d":"Stäng","column_e1ae5c64":"Kolumn","column_group_1c062368":"Kolumngrupp","decorative_image_fde98579":"Dekorativ-bild","element_starting_with_start_91bf4c3b":"Element som börjar med { start }","fix_heading_hierarchy_f60884c4":"Fast rubrik hierarki","format_as_a_list_142210c3":"Formatera som lista","header_column_f27433cb":"Rubrikkolumn","header_row_and_column_ec5b9ec":"Rubrikrad och kolumn","header_row_f33eb169":"Rubrikrad","heading_levels_should_not_be_skipped_3947c0e0":"Rubriknivåer bör inte hoppas över.","heading_starting_with_start_42a3e7f9":"Rubriker börjar med { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Rubrikerna får inte innehålla mer än 120 tecken.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Bildfilnamn ska inte användas som alt attribut som beskriver bildinnehållet.","image_with_filename_file_aacd7180":"Bild med filnamn { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Bilder ska innehålla ett alt attribut som beskriver bildinnehållet.","issue_num_total_f94536cf":"Problem { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Tangentbord navigerar till länkar via Tab-tangenten. Två intilliggande länkar som leder till samma destination kan vara förvirrande för användare av tangentbord.","learn_more_about_adjacent_links_2cb9762c":"Läs mer om närliggande länkar","learn_more_about_color_contrast_c019dfb9":"Läs mer om färgkontras","learn_more_about_organizing_page_headings_8a7caa2e":"Läs mer om att ordna sidhuvuden","learn_more_about_table_headers_5f5ee13":"Läs mer om tabellrubriker","learn_more_about_using_alt_text_for_images_5698df9a":"Läs mer om att använda alternativtexter för bilder","learn_more_about_using_captions_with_tables_36fe496f":"Läs mer om att använda rubriker med tabeller","learn_more_about_using_filenames_as_alt_text_264286af":"Läs mer om att använda filnamn som alternativtext","learn_more_about_using_lists_4e6eb860":"Läs mer om att använda listor","learn_more_about_using_scope_attributes_with_table_20df49aa":"Läs mer om att använda omfångsattribut med tabeller","leave_as_is_4facfe55":"Lämna som det är","link_with_text_starting_with_start_b3fcbe71":"Länk med text som börjar med { start }","lists_should_be_formatted_as_lists_f862de8d":"Listor ska formateras som listor.","merge_links_2478df96":"Sammanfoga länkar","next_40e12421":"Nästa","no_accessibility_issues_were_detected_f8d3c875":"Inga tillgänglighetsproblem upptäcktes.","no_headers_9bc7dc7f":"Inga rubriker","none_3b5e34d2":"Ingen","paragraph_starting_with_start_a59923f8":"Stycke som börjar med { start }","prev_f82cbc48":"Föregående","remove_heading_style_5fdc8855":"Ta bort rubrikstil","row_fc0944a7":"Rad","row_group_979f5528":"Radgrupp","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Skärmläsare kan inte bestämma vad som visas i en bild utan alternativ text, och filnamn är ofta meningslösa strängar av siffror och bokstäver som inte beskriver sammanhanget eller betydelsen.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Skärmläsare kan inte bestämma vad som visas i en bild utan alternativ text, som beskriver innehållet och innebörden av bilden. Alternativ text ska vara enkel och koncis.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Skärmläsare kan inte bestämma vad som visas i en bild utan alternativ text, som beskriver innehållet och innebörden av bilden.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Skärmläsare kan inte tolka tabeller utan rätt struktur. Tabellrubriker ger riktning och innehållsomfattning.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Skärmläsare kan inte tolka tabeller utan rätt struktur. Tabelltexter beskriver sammanhanget och den allmänna förståelsen av tabellen.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Skärmläsare kan inte tolka tabeller utan rätt struktur. Tabellrubriker tillhandahåller riktning och överblick över innehållet.","set_header_scope_8c548f40":"Ange huvudomfattning","set_table_header_cfab13a0":"Ange tabellrubrik","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Visade användare bläddrar snabbt på webbsidor och letar efter stora eller fetstil rubriker. Användare av skärmläsare använder sig av rubriker för kontextuell förståelse. Rubriker ska använda rätt struktur.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Visade användare bläddrar snabbt på webbsidor och letar efter stora eller fetstil rubriker. Användare av skärmläsare använder sig av rubriker för kontextuell förståelse. Rubriker ska vara koncisa inom den korrekta strukturen.","table_header_starting_with_start_ffcabba6":"Tabellrubriker börjar med { start }","table_starting_with_start_e7232848":"Tabell börjar med { start }","tables_headers_should_specify_scope_5abf3a8e":"Tabellrubriker ska ange omfattning.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabeller ska innehålla en bildtext som beskriver innehållet i tabellen.","tables_should_include_at_least_one_header_48779eac":"Tabeller ska innehålla minst en rubrik.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Texten är svår att läsa utan tillräcklig kontrast mellan text och bakgrund, speciellt för de med nedsatt syn.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Text som är större än 18pt (eller fetstil 14pt) ska visa ett minimum-kontrastförhållande på 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Text som är mindre än 18pt (eller fet 14pt) ska visa ett lägsta kontrastförhållande på 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Om kodningen visuellt formaterar objekt som listor men inte visar listans relation kan användare få svårt att navigera i informationen.","why_523b3d8c":"Varför"},"sv":{"accessibility_checker_b3af1f6c":"Tillgänglighetskontrollör","action_to_take_b626a99a":"Åtgärd att vidta:","add_a_caption_2a915239":"Lägg till en bildtext","add_alt_text_for_the_image_48cd88aa":"Lägg till alt text för bilden","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Intilliggande länkar med samma webbadress ska vara en enda länk.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alt attributtext ska inte innehålla mer än 120 tecken.","apply_781a2546":"Tillämpa","change_alt_text_92654906":"Ändra alt text","change_heading_tag_to_paragraph_a61e3113":"Ändra rubrikmärkning till stycke","change_text_color_1aecb912":"Ändra textfärg","check_accessibility_3c78211c":"Kontrollera tillgänglighet","checking_for_accessibility_issues_fac18c6d":"Kontrollerar tillgänglighetsproblem","close_accessibility_checker_29d1c51e":"Stäng tillgänglighetskontrollen","close_d634289d":"Stäng","column_e1ae5c64":"Kolumn","column_group_1c062368":"Kolumngrupp","decorative_image_fde98579":"Dekorativ-bild","element_starting_with_start_91bf4c3b":"Element som börjar med { start }","fix_heading_hierarchy_f60884c4":"Fast rubrik hierarki","format_as_a_list_142210c3":"Formatera som lista","header_column_f27433cb":"Rubrikkolumn","header_row_and_column_ec5b9ec":"Rubrikrad och kolumn","header_row_f33eb169":"Rubrikrad","heading_levels_should_not_be_skipped_3947c0e0":"Rubriknivåer bör inte hoppas över.","heading_starting_with_start_42a3e7f9":"Rubriker börjar med { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Rubrikerna får inte innehålla mer än 120 tecken.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Bildfilnamn ska inte användas som alt attribut som beskriver bildinnehållet.","image_with_filename_file_aacd7180":"Bild med filnamn { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Bilder ska innehålla ett alt attribut som beskriver bildinnehållet.","issue_num_total_f94536cf":"Problem { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Tangentbord navigerar till länkar via Tab-tangenten. Två intilliggande länkar som leder till samma destination kan vara förvirrande för användare av tangentbord.","learn_more_about_adjacent_links_2cb9762c":"Läs mer om närliggande länkar","learn_more_about_color_contrast_c019dfb9":"Läs mer om färgkontras","learn_more_about_organizing_page_headings_8a7caa2e":"Läs mer om att ordna sidhuvuden","learn_more_about_table_headers_5f5ee13":"Läs mer om tabellrubriker","learn_more_about_using_alt_text_for_images_5698df9a":"Läs mer om att använda alternativtexter för bilder","learn_more_about_using_captions_with_tables_36fe496f":"Läs mer om att använda rubriker med tabeller","learn_more_about_using_filenames_as_alt_text_264286af":"Läs mer om att använda filnamn som alternativtext","learn_more_about_using_lists_4e6eb860":"Läs mer om att använda listor","learn_more_about_using_scope_attributes_with_table_20df49aa":"Läs mer om att använda omfångsattribut med tabeller","leave_as_is_4facfe55":"Lämna som det är","link_with_text_starting_with_start_b3fcbe71":"Länk med text som börjar med { start }","lists_should_be_formatted_as_lists_f862de8d":"Listor ska formateras som listor.","merge_links_2478df96":"Sammanfoga länkar","next_40e12421":"Nästa","no_accessibility_issues_were_detected_f8d3c875":"Inga tillgänglighetsproblem upptäcktes.","no_headers_9bc7dc7f":"Inga rubriker","none_3b5e34d2":"Ingen","paragraph_starting_with_start_a59923f8":"Stycke som börjar med { start }","prev_f82cbc48":"Föregående","remove_heading_style_5fdc8855":"Ta bort rubrikstil","row_fc0944a7":"Rad","row_group_979f5528":"Radgrupp","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Skärmläsare kan inte bestämma vad som visas i en bild utan alternativ text, och filnamn är ofta meningslösa strängar av siffror och bokstäver som inte beskriver sammanhanget eller betydelsen.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Skärmläsare kan inte bestämma vad som visas i en bild utan alternativ text, som beskriver innehållet och innebörden av bilden. Alternativ text ska vara enkel och koncis.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Skärmläsare kan inte bestämma vad som visas i en bild utan alternativ text, som beskriver innehållet och innebörden av bilden.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Skärmläsare kan inte tolka tabeller utan rätt struktur. Tabellrubriker ger riktning och innehållsomfattning.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Skärmläsare kan inte tolka tabeller utan rätt struktur. Tabelltexter beskriver sammanhanget och den allmänna förståelsen av tabellen.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Skärmläsare kan inte tolka tabeller utan rätt struktur. Tabellrubriker tillhandahåller riktning och överblick över innehållet.","set_header_scope_8c548f40":"Ange huvudomfattning","set_table_header_cfab13a0":"Ange tabellrubrik","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Visade användare bläddrar snabbt på webbsidor och letar efter stora eller fetstil rubriker. Användare av skärmläsare använder sig av rubriker för kontextuell förståelse. Rubriker ska använda rätt struktur.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Visade användare bläddrar snabbt på webbsidor och letar efter stora eller fetstil rubriker. Användare av skärmläsare använder sig av rubriker för kontextuell förståelse. Rubriker ska vara koncisa inom den korrekta strukturen.","table_header_starting_with_start_ffcabba6":"Tabellrubriker börjar med { start }","table_starting_with_start_e7232848":"Tabell börjar med { start }","tables_headers_should_specify_scope_5abf3a8e":"Tabellrubriker ska ange omfattning.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabeller ska innehålla en bildtext som beskriver innehållet i tabellen.","tables_should_include_at_least_one_header_48779eac":"Tabeller ska innehålla minst en rubrik.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Texten är svår att läsa utan tillräcklig kontrast mellan text och bakgrund, speciellt för de med nedsatt syn.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Text som är större än 18pt (eller fetstil 14pt) ska visa ett minimum-kontrastförhållande på 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Text som är mindre än 18pt (eller fet 14pt) ska visa ett lägsta kontrastförhållande på 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Om kodningen visuellt formaterar objekt som listor men inte visar listans relation kan användare få svårt att navigera i informationen.","why_523b3d8c":"Varför"},"zh-HK":{"accessibility_checker_b3af1f6c":"可訪問性檢查器","action_to_take_b626a99a":"執行的動作：","add_a_caption_2a915239":"添加字幕","add_alt_text_for_the_image_48cd88aa":"為圖像添加替代文字","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"URL 相同的相鄰連結應為單一連結。","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"替代屬性文字不應包含多於 120 個字元。","apply_781a2546":"應用","change_alt_text_92654906":"變更替代文字","change_heading_tag_to_paragraph_a61e3113":"變更標題標籤為段落","change_text_color_1aecb912":"變更文字顏色","check_accessibility_3c78211c":"檢查可訪問性","checking_for_accessibility_issues_fac18c6d":"檢查可訪問性問題","close_accessibility_checker_29d1c51e":"關閉可訪問性檢查器","close_d634289d":"關閉","column_e1ae5c64":"欄","column_group_1c062368":"欄組","decorative_image_fde98579":"裝飾圖像","element_starting_with_start_91bf4c3b":"以 { start } 開始的元素","fix_heading_hierarchy_f60884c4":"固定標題階層","format_as_a_list_142210c3":"使用清單格式","header_column_f27433cb":"標題欄","header_row_and_column_ec5b9ec":"標題行與欄","header_row_f33eb169":"標題行","heading_levels_should_not_be_skipped_3947c0e0":"不應跳過標題層。","heading_starting_with_start_42a3e7f9":"以 { start } 開始的標題","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"標題不應包含多於 120 個字元。","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"圖像檔案名稱不應用作說明圖像內容的替代屬性。","image_with_filename_file_aacd7180":"檔案名稱為 { file } 的圖像","images_should_include_an_alt_attribute_describing__b86d6a86":"圖像應包括說明圖像內容的替代屬性。","issue_num_total_f94536cf":"問題 { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"使用 Tab 鍵以鍵盤導航至連結。目的地相同的兩個相連連結可能對鍵盤使用者造成混亂。","learn_more_about_adjacent_links_2cb9762c":"了解更多有關相鄰連結","learn_more_about_color_contrast_c019dfb9":"了解更多有關顏色對比","learn_more_about_organizing_page_headings_8a7caa2e":"了解更多有關組織頁面標題","learn_more_about_table_headers_5f5ee13":"了解更多有關表格標題","learn_more_about_using_alt_text_for_images_5698df9a":"了解更多有關使用圖像的 alt 文字","learn_more_about_using_captions_with_tables_36fe496f":"了解更多有關使用表格的字幕","learn_more_about_using_filenames_as_alt_text_264286af":"了解更多有關使用檔案名稱作為 alt 文字","learn_more_about_using_lists_4e6eb860":"了解更多有關使用清單","learn_more_about_using_scope_attributes_with_table_20df49aa":"了解更多有關使用有表格的範圍屬性","leave_as_is_4facfe55":"不需變更","link_with_text_starting_with_start_b3fcbe71":"文字以 { start } 開始的連結","lists_should_be_formatted_as_lists_f862de8d":"列表應使用清單格式。","merge_links_2478df96":"合併連結","next_40e12421":"下一個","no_accessibility_issues_were_detected_f8d3c875":"並無偵察任何可訪問性問題","no_headers_9bc7dc7f":"無標題","none_3b5e34d2":"無","paragraph_starting_with_start_a59923f8":"以 { start } 開始的段落","prev_f82cbc48":"預覽","remove_heading_style_5fdc8855":"移除標題樣式","row_fc0944a7":"行","row_group_979f5528":"行組","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"沒有替代文字，屏幕閱讀器不能判斷圖像所顯示的是什麼，而檔案名稱一般都是無意義的數字與字母串，並不能說明內容或意義。","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"沒有說明圖像內容與意義的替代文字，屏幕閱讀器不能判斷圖像所顯示的是什麼。替代文字應為精簡。","screen_readers_cannot_determine_what_is_displayed__a57e6723":"沒有說明圖像內容與意義的替代文字，屏幕閱讀器不能判斷圖像所顯示的是什麼。","screen_readers_cannot_interpret_tables_without_the_bd861652":"沒有適當的結構，屏幕閱讀器不能解讀表格。表格標題能提供方向與內容範圍。","screen_readers_cannot_interpret_tables_without_the_e62912d5":"沒有適當的結構，屏幕閱讀器不能解讀表格。表格字幕說明表格的內容與一般理解。","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"沒有適當的結構，屏幕閱讀器不能解讀表格。表格標題能提供方向與內容概要。","set_header_scope_8c548f40":"設定標題範圍","set_table_header_cfab13a0":"設定表格標題","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"有視力的使用者能迅速瀏覽網頁，尋找大型或粗體標題。屏幕閱讀器使用者依靠標題理解內容背景。標題應使用適當的結構。","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"有視力的使用者能迅速瀏覽網頁，尋找大型或粗體標題。屏幕閱讀器使用者依靠標題理解內容背景。標題應使用適當的結構，並保持精簡。","table_header_starting_with_start_ffcabba6":"以 { start } 開始的表格標題","table_starting_with_start_e7232848":"以 { start } 開始的表格","tables_headers_should_specify_scope_5abf3a8e":"表格標題應指定範圍。","tables_should_include_a_caption_describing_the_con_e91e78fc":"表格應包括字幕說明表格內容。","tables_should_include_at_least_one_header_48779eac":"表格應包括最少一個標題。","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"文字與背景之間對比不足，難以閱讀文字，對於視力較差的人尤其如是。","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"大小為 18pt（或粗體 14pt）以上的文字的色彩比最少應達到 3:1。","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"大小為 18pt（或粗體 14pt）以下的文字的色彩比最少應達到 4.5:1。","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"如果使用標記使項目看起來像清單，但並未標示其清單關係，使用者瀏覽資訊時或會有困難。","why_523b3d8c":"為什麼"},"zh":{"accessibility_checker_b3af1f6c":"辅助功能检查器","action_to_take_b626a99a":"要执行的操作：","add_a_caption_2a915239":"添加说明","add_alt_text_for_the_image_48cd88aa":"为图像添加替换文本","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"具有相同 URL 的相邻链接应该为一个单链接。","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"替换属性文本不得超过 120 个字符。","apply_781a2546":"申请","change_alt_text_92654906":"更改替换文本","change_heading_tag_to_paragraph_a61e3113":"更改段落的标题标签","change_text_color_1aecb912":"更改文本颜色","check_accessibility_3c78211c":"检查辅助功能","checking_for_accessibility_issues_fac18c6d":"正在检查辅助功能问题","close_accessibility_checker_29d1c51e":"关闭辅助功能检查器","close_d634289d":"关闭","column_e1ae5c64":"列","column_group_1c062368":"列组","decorative_image_fde98579":"装饰图片","element_starting_with_start_91bf4c3b":"以{ start }开始的元素","fix_heading_hierarchy_f60884c4":"固定标题层次结构","format_as_a_list_142210c3":"使用列表格式","header_column_f27433cb":"标题列","header_row_and_column_ec5b9ec":"标题行和列","header_row_f33eb169":"标题行","heading_levels_should_not_be_skipped_3947c0e0":"不得跳过标题级别。","heading_starting_with_start_42a3e7f9":"以{ start }开始的标题","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"标题不得超过 120 个字符。","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"不得使用图像文件名作为描述图像内容的替换属性。","image_with_filename_file_aacd7180":"文件名为{ file }的图像","images_should_include_an_alt_attribute_describing__b86d6a86":"图像应包括一个描述图像内容的替换属性。","issue_num_total_f94536cf":"问题{ num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"键盘使用 Tab 键导航至链接。转至相同目的地的两个相邻链接可以对键盘用户造成混淆。","learn_more_about_adjacent_links_2cb9762c":"详细了解相邻链接","learn_more_about_color_contrast_c019dfb9":"详细了解色彩对比度","learn_more_about_organizing_page_headings_8a7caa2e":"详细了解组织页面标题","learn_more_about_table_headers_5f5ee13":"详细了解表标题","learn_more_about_using_alt_text_for_images_5698df9a":"详细了解为使用图片替换文本","learn_more_about_using_captions_with_tables_36fe496f":"详细了解将标题与表格一起使用","learn_more_about_using_filenames_as_alt_text_264286af":"详细了解使用文件名作为替换文本","learn_more_about_using_lists_4e6eb860":"详细了解使用列表","learn_more_about_using_scope_attributes_with_table_20df49aa":"详细了解将范围属性与表格一起使用","leave_as_is_4facfe55":"保持原状","link_with_text_starting_with_start_b3fcbe71":"具有以{ start }开始的文本的链接","lists_should_be_formatted_as_lists_f862de8d":"列表应使用列表格式。","merge_links_2478df96":"合并链接","next_40e12421":"下一步","no_accessibility_issues_were_detected_f8d3c875":"没有发现辅助功能问题。","no_headers_9bc7dc7f":"无标题","none_3b5e34d2":"无","paragraph_starting_with_start_a59923f8":"以{ start }开始的段落","prev_f82cbc48":"上一个","remove_heading_style_5fdc8855":"删除标题样式","row_fc0944a7":"行","row_group_979f5528":"行组","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"如果没有替换文本，且文件名通常是不描述上下文或意义的无意义的数字和字母字符串，则屏幕读取器无法确定图像显示的内容。","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"如果没有描述图像内容和意义的替换文本，则屏幕读取器无法确定图像显示的内容。替换文本应简单明了。","screen_readers_cannot_determine_what_is_displayed__a57e6723":"如果没有描述图像内容和意义的替换文本，则屏幕读取器无法确定图像显示的内容。","screen_readers_cannot_interpret_tables_without_the_bd861652":"屏幕读取器无法解读不具有正确结构的表格。表格标题提供说明和内容范围。","screen_readers_cannot_interpret_tables_without_the_e62912d5":"屏幕读取器无法解读不具有正确结构的表格。表格说明描述表格的上下文和对表格的一般理解。","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"屏幕读取器无法解读不具有正确结构的表格。表格标题提供说明和内容概述。","set_header_scope_8c548f40":"设置标题范围","set_table_header_cfab13a0":"设置表格标题","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"视力好的用户快速浏览网页，查找大号字体或粗体标题。屏幕读取器用户依赖于标题了解上下文。标题应使用正确的结构。","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"视力好的用户快速浏览网页，查找大号字体或粗体标题。屏幕读取器用户依赖于标题了解上下文。标题应在正确的结构内保持简洁。","table_header_starting_with_start_ffcabba6":"以{ start }开始的表格标题","table_starting_with_start_e7232848":"以{ start }开始的表格","tables_headers_should_specify_scope_5abf3a8e":"表格标题应确定范围。","tables_should_include_a_caption_describing_the_con_e91e78fc":"表格应包括描述表格内容的说明。","tables_should_include_at_least_one_header_48779eac":"表格应包括至少一个标题。","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"文字和背景之间的对比度不足，因此文字阅读困难，尤其是对于视力较弱的人员而言。","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"文字大于 18 磅（或粗体 14 磅）时显示的对比度应至少为 3:1。","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"文字小于 18 磅（或粗体 14 磅）时显示的对比度应至少为 4.5:1。","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"如果对使用列表格式显示的项目使用标记，但不指示列表关系，用户可能在浏览信息时会遇到困难。","why_523b3d8c":"原因"}}')},THLb:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.calculateChange=function(e,t,a,r,n){var i=n.clientWidth
var o=n.clientHeight
var s="number"===typeof e.pageX?e.pageX:e.touches[0].pageX
var _="number"===typeof e.pageY?e.pageY:e.touches[0].pageY
var l=s-(n.getBoundingClientRect().left+window.pageXOffset)
var c=_-(n.getBoundingClientRect().top+window.pageYOffset)
if("vertical"===a){var d=void 0
d=c<0?0:c>o?1:Math.round(100*c/o)/100
if(t.a!==d)return{h:t.h,s:t.s,l:t.l,a:d,source:"rgb"}}else{var u=void 0
u=l<0?0:l>i?1:Math.round(100*l/i)/100
if(r!==u)return{h:t.h,s:t.s,l:t.l,a:u,source:"rgb"}}return null}},TM95:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
var r=a("yOY4")
Object.defineProperty(t,"Alpha",{enumerable:true,get:function(){return d(r).default}})
var n=a("Nq3d")
Object.defineProperty(t,"Checkboard",{enumerable:true,get:function(){return d(n).default}})
var i=a("AnK5")
Object.defineProperty(t,"EditableInput",{enumerable:true,get:function(){return d(i).default}})
var o=a("HlQe")
Object.defineProperty(t,"Hue",{enumerable:true,get:function(){return d(o).default}})
var s=a("Ojt5")
Object.defineProperty(t,"Raised",{enumerable:true,get:function(){return d(s).default}})
var _=a("ccyi")
Object.defineProperty(t,"Saturation",{enumerable:true,get:function(){return d(_).default}})
var l=a("UGzO")
Object.defineProperty(t,"ColorWrap",{enumerable:true,get:function(){return d(l).default}})
var c=a("Ba7A")
Object.defineProperty(t,"Swatch",{enumerable:true,get:function(){return d(c).default}})
function d(e){return e&&e.__esModule?e:{default:e}}},UGzO:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.ColorWrap=void 0
var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}
var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a]
r.enumerable=r.enumerable||false
r.configurable=true
"value"in r&&(r.writable=true)
Object.defineProperty(e,r.key,r)}}return function(t,a,r){a&&e(t.prototype,a)
r&&e(t,r)
return t}}()
var i=a("q1tI")
var o=d(i)
var s=a("sEfC")
var _=d(s)
var l=a("p8yl")
var c=d(l)
function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b=t.ColorWrap=function(e){var t=function(t){f(a,t)
function a(e){u(this,a)
var t=h(this,(a.__proto__||Object.getPrototypeOf(a)).call(this))
t.handleChange=function(e,a){var r=c.default.simpleCheckForValidColor(e)
if(r){var n=c.default.toState(e,e.h||t.state.oldHue)
t.setState(n)
t.props.onChangeComplete&&t.debounce(t.props.onChangeComplete,n,a)
t.props.onChange&&t.props.onChange(n,a)}}
t.handleSwatchHover=function(e,a){var r=c.default.simpleCheckForValidColor(e)
if(r){var n=c.default.toState(e,e.h||t.state.oldHue)
t.props.onSwatchHover&&t.props.onSwatchHover(n,a)}}
t.state=r({},c.default.toState(e.color,0))
t.debounce=(0,_.default)((function(e,t,a){e(t,a)}),100)
return t}n(a,[{key:"render",value:function(){var t={}
this.props.onSwatchHover&&(t.onSwatchHover=this.handleSwatchHover)
return o.default.createElement(e,r({},this.props,this.state,{onChange:this.handleChange},t))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return r({},c.default.toState(e.color,t.oldHue))}}])
return a}(i.PureComponent||i.Component)
t.propTypes=r({},e.propTypes)
t.defaultProps=r({},e.defaultProps,{color:{h:250,s:.5,l:.2,a:1}})
return t}
t.default=b},URgk:function(e,t,a){(function(e){var r="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window
var n=Function.prototype.apply
t.setTimeout=function(){return new i(n.call(setTimeout,r,arguments),clearTimeout)}
t.setInterval=function(){return new i(n.call(setInterval,r,arguments),clearInterval)}
t.clearTimeout=t.clearInterval=function(e){e&&e.close()}
function i(e,t){this._id=e
this._clearFn=t}i.prototype.unref=i.prototype.ref=function(){}
i.prototype.close=function(){this._clearFn.call(r,this._id)}
t.enroll=function(e,t){clearTimeout(e._idleTimeoutId)
e._idleTimeout=t}
t.unenroll=function(e){clearTimeout(e._idleTimeoutId)
e._idleTimeout=-1}
t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId)
var t=e._idleTimeout
t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))}
a("YBdB")
t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate
t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,a("yLpj"))},VTJ5:function(e,t,a){"use strict"
a.d(t,"a",(function(){return w}))
var r=a("1OyB")
var n=a("vuIU")
var i=a("Ji7U")
var o=a("LK+K")
var s=a("q1tI")
var _=a.n(s)
var l=a("17x9")
var c=a.n(l)
var d=a("uSnb")
var u=a("nAyT")
var h=a("J2CL")
var f=a("oXx0")
function b(e){var t=e.colors
return{trackColor:t.textLight,color:t.textBrand,xSmallSize:"1.5em",xSmallBorderWidth:"0.25em",smallSize:"3em",smallBorderWidth:"0.375em",mediumSize:"5em",mediumBorderWidth:"0.5em",largeSize:"7em",largeBorderWidth:"0.75em",inverseTrackColor:t.textDarkest,inverseColor:t.textBrand}}b.canvas=function(e){return{color:e["ic-brand-primary"],inverseColor:e["ic-brand-primary"],inverseTrackColor:e["ic-brand-font-color-dark"]}}
var m,p,g,v,k,y
var w=(m=Object(u["a"])("7.0.0",null,"Use Spinner from ui-spinner instead."),p=Object(f["a"])(),g=Object(h["j"])(b),m(v=p(v=g(v=(y=k=function(e){Object(i["a"])(a,e)
var t=Object(o["a"])(a)
function a(){Object(r["a"])(this,a)
return t.apply(this,arguments)}Object(n["a"])(a,[{key:"render",value:function(){return _.a.createElement(d["a"],this.props)}}])
a.displayName="Spinner"
return a}(s["Component"]),k.propTypes={title:c.a.string,renderTitle:c.a.oneOfType([c.a.func,c.a.node]),size:c.a.oneOf(["x-small","small","medium","large"]),variant:c.a.oneOf(["default","inverse"]),margin:h["c"].spacing,elementRef:c.a.func,as:c.a.elementType},k.defaultProps={as:"div",size:"medium",variant:"default",margin:void 0,elementRef:void 0,renderTitle:void 0,title:void 0},y))||v)||v)||v)},VVms:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.calculateChange=function(e,t,a){var r=a.getBoundingClientRect(),n=r.width,i=r.height
var o="number"===typeof e.pageX?e.pageX:e.touches[0].pageX
var s="number"===typeof e.pageY?e.pageY:e.touches[0].pageY
var _=o-(a.getBoundingClientRect().left+window.pageXOffset)
var l=s-(a.getBoundingClientRect().top+window.pageYOffset)
_<0?_=0:_>n&&(_=n)
l<0?l=0:l>i&&(l=i)
var c=_/n
var d=1-l/i
return{h:t.h,s:c,v:d,a:t.a,source:"hsv"}}},VYtm:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.hover=void 0
var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}
var n=a("q1tI")
var i=o(n)
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=t.hover=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"span"
return function(a){l(n,a)
function n(){var a
var o,l,c
s(this,n)
for(var d=arguments.length,u=Array(d),h=0;h<d;h++)u[h]=arguments[h]
return c=(o=(l=_(this,(a=n.__proto__||Object.getPrototypeOf(n)).call.apply(a,[this].concat(u))),l),l.state={hover:false},l.handleMouseOver=function(){return l.setState({hover:true})},l.handleMouseOut=function(){return l.setState({hover:false})},l.render=function(){return i.default.createElement(t,{onMouseOver:l.handleMouseOver,onMouseOut:l.handleMouseOut},i.default.createElement(e,r({},l.props,l.state)))},o),_(l,c)}return n}(i.default.Component)}
t.default=c},W3HW:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.flattenNames=void 0
var r=a("4qC0")
var n=d(r)
var i=a("Ag8Z")
var o=d(i)
var s=a("YO3V")
var _=d(s)
var l=a("3WF5")
var c=d(l)
function d(e){return e&&e.__esModule?e:{default:e}}var u=t.flattenNames=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
var a=[];(0,c.default)(t,(function(t){Array.isArray(t)?e(t).map((function(e){return a.push(e)})):(0,_.default)(t)?(0,o.default)(t,(function(e,t){true===e&&a.push(t)
a.push(t+"-"+e)})):(0,n.default)(t)&&a.push(t)}))
return a}
t.default=u},XQvf:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.active=void 0
var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}
var n=a("q1tI")
var i=o(n)
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=t.active=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"span"
return function(a){l(n,a)
function n(){var a
var o,l,c
s(this,n)
for(var d=arguments.length,u=Array(d),h=0;h<d;h++)u[h]=arguments[h]
return c=(o=(l=_(this,(a=n.__proto__||Object.getPrototypeOf(n)).call.apply(a,[this].concat(u))),l),l.state={active:false},l.handleMouseDown=function(){return l.setState({active:true})},l.handleMouseUp=function(){return l.setState({active:false})},l.render=function(){return i.default.createElement(t,{onMouseDown:l.handleMouseDown,onMouseUp:l.handleMouseUp},i.default.createElement(e,r({},l.props,l.state)))},o),_(l,c)}return n}(i.default.Component)}
t.default=c},YBdB:function(e,t,a){(function(e,t){(function(e,a){"use strict"
if(e.setImmediate)return
var r=1
var n={}
var i=false
var o=e.document
var s
function _(e){"function"!==typeof e&&(e=new Function(""+e))
var t=new Array(arguments.length-1)
for(var a=0;a<t.length;a++)t[a]=arguments[a+1]
var i={callback:e,args:t}
n[r]=i
s(r)
return r++}function l(e){delete n[e]}function c(e){var t=e.callback
var r=e.args
switch(r.length){case 0:t()
break
case 1:t(r[0])
break
case 2:t(r[0],r[1])
break
case 3:t(r[0],r[1],r[2])
break
default:t.apply(a,r)}}function d(e){if(i)setTimeout(d,0,e)
else{var t=n[e]
if(t){i=true
try{c(t)}finally{l(e)
i=false}}}}function u(){s=function(e){t.nextTick((function(){d(e)}))}}function h(){if(e.postMessage&&!e.importScripts){var t=true
var a=e.onmessage
e.onmessage=function(){t=false}
e.postMessage("","*")
e.onmessage=a
return t}}function f(){var t="setImmediate$"+Math.random()+"$"
var a=function(a){a.source===e&&"string"===typeof a.data&&0===a.data.indexOf(t)&&d(+a.data.slice(t.length))}
e.addEventListener?e.addEventListener("message",a,false):e.attachEvent("onmessage",a)
s=function(a){e.postMessage(t+a,"*")}}function b(){var e=new MessageChannel
e.port1.onmessage=function(e){var t=e.data
d(t)}
s=function(t){e.port2.postMessage(t)}}function m(){var e=o.documentElement
s=function(t){var a=o.createElement("script")
a.onreadystatechange=function(){d(t)
a.onreadystatechange=null
e.removeChild(a)
a=null}
e.appendChild(a)}}function p(){s=function(e){setTimeout(d,0,e)}}var g=Object.getPrototypeOf&&Object.getPrototypeOf(e)
g=g&&g.setTimeout?g:e
"[object process]"==={}.toString.call(e.process)?u():h()?f():e.MessageChannel?b():o&&"onreadystatechange"in o.createElement("script")?m():p()
g.setImmediate=_
g.clearImmediate=l})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,a("yLpj"),a("8oxB"))},YDsC:function(e,t){var a={r:0,g:0,b:0,a:0}
var r={r:255,g:255,b:255,a:1}
function n(e){var t=/rgba?\((\d+),\s(\d+),\s(\d+)(,\s([\d\.]+))?\)/
var r=t.exec(e)
if(!r)return a
return{r:parseInt(r[1],10),g:parseInt(r[2],10),b:parseInt(r[3],10),a:parseFloat(r[5]||1)}}function i(e,t){var r=t.a+e.a*(1-t.a)
if(0===r)return a
return{r:(t.r*t.a+e.r*e.a*(1-t.a))/r,g:(t.g*t.a+e.g*e.a*(1-t.a))/r,b:(t.b*t.a+e.b*e.a*(1-t.a))/r,a:r}}function o(e){e.a<1&&(e=i(r,e))
var t=s(e.r)
var a=s(e.g)
var n=s(e.b)
return.2126*t+.7152*a+.0722*n}function s(e){var t=e/255
if(t<=.03928)return t/12.92
return Math.pow((t+.055)/1.055,2.4)}function _(e,t){var a=[o(e),o(t)]
a.sort((function(e,t){return t-e}))
return(a[0]+.05)/(a[1]+.05)}function l(e){var t=[]
var a=e
while(null!=a){var o=n(window.getComputedStyle(a).backgroundColor)
o.a>0&&t.push(o)
if(1===o.a)break
a=a.parentElement}return t.reduceRight(i,r)}function c(e){var t=n(window.getComputedStyle(e).color)
var a=l(e)
var r=i(a,t)
return[r,a]}function d(e){var t=c(e)
return _(t[0],t[1])}function u(e){var t=window.getComputedStyle(e)
var a=parseFloat(t.fontSize)/1.333
var r=t.fontWeight
var n="bold"===r||parseInt(r,10)>=600
return n?a>=14:a>=18}function h(e){var t=d(e)
return u(e)?t>=3:t>=4.5}t=e.exports=h
t.isLargeText=u
t.contrastRatio=d
t.parseRGBA=n},ZREj:function(e,t){e.exports=function(e){return function(t){t.preventDefault()
return"function"===typeof e&&true===e.call(this,t)}}},ZoNA:function(e,t,a){"use strict"
var r=a("O92E")
var n=a("CpOe")
e.exports=function(e){return n(r(e)).replace(/\s+/g," ")}},bNQv:function(e,t,a){var r=a("gFfm"),n=a("SKAX"),i=a("EwQA"),o=a("Z0cm")
function s(e,t){var a=o(e)?r:n
return a(e,i(t))}e.exports=s},bQgK:function(e,t,a){(function(t){(function(){var a,r,n,i,o,s
if("undefined"!==typeof performance&&null!==performance&&performance.now)e.exports=function(){return performance.now()}
else if("undefined"!==typeof t&&null!==t&&t.hrtime){e.exports=function(){return(a()-o)/1e6}
r=t.hrtime
a=function(){var e
e=r()
return 1e9*e[0]+e[1]}
i=a()
s=1e9*t.uptime()
o=i-s}else if(Date.now){e.exports=function(){return Date.now()-n}
n=Date.now()}else{e.exports=function(){return(new Date).getTime()-n}
n=(new Date).getTime()}}).call(this)}).call(this,a("8oxB"))},ccyi:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.Saturation=void 0
var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a]
r.enumerable=r.enumerable||false
r.configurable=true
"value"in r&&(r.writable=true)
Object.defineProperty(e,r.key,r)}}return function(t,a,r){a&&e(t.prototype,a)
r&&e(t,r)
return t}}()
var n=a("q1tI")
var i=h(n)
var o=a("/FUP")
var s=h(o)
var _=a("DzJC")
var l=h(_)
var c=a("VVms")
var d=u(c)
function u(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])
t.default=e
return t}function h(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=t.Saturation=function(e){m(t,e)
function t(e){f(this,t)
var a=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
a.handleChange=function(e){"function"===typeof a.props.onChange&&a.throttle(a.props.onChange,d.calculateChange(e,a.props.hsl,a.container),e)}
a.handleMouseDown=function(e){a.handleChange(e)
window.addEventListener("mousemove",a.handleChange)
window.addEventListener("mouseup",a.handleMouseUp)}
a.handleMouseUp=function(){a.unbindEventListeners()}
a.throttle=(0,l.default)((function(e,t,a){e(t,a)}),50)
return a}r(t,[{key:"componentWillUnmount",value:function(){this.throttle.cancel()
this.unbindEventListeners()}},{key:"unbindEventListeners",value:function(){window.removeEventListener("mousemove",this.handleChange)
window.removeEventListener("mouseup",this.handleMouseUp)}},{key:"render",value:function(){var e=this
var t=this.props.style||{},a=t.color,r=t.white,n=t.black,o=t.pointer,_=t.circle
var l=(0,s.default)({default:{color:{absolute:"0px 0px 0px 0px",background:"hsl("+this.props.hsl.h+",100%, 50%)",borderRadius:this.props.radius},white:{absolute:"0px 0px 0px 0px",borderRadius:this.props.radius},black:{absolute:"0px 0px 0px 0px",boxShadow:this.props.shadow,borderRadius:this.props.radius},pointer:{position:"absolute",top:-100*this.props.hsv.v+100+"%",left:100*this.props.hsv.s+"%",cursor:"default"},circle:{width:"4px",height:"4px",boxShadow:"0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",borderRadius:"50%",cursor:"hand",transform:"translate(-2px, -2px)"}},custom:{color:a,white:r,black:n,pointer:o,circle:_}},{custom:!!this.props.style})
return i.default.createElement("div",{style:l.color,ref:function(t){return e.container=t},onMouseDown:this.handleMouseDown,onTouchMove:this.handleChange,onTouchStart:this.handleChange},i.default.createElement("style",null,"\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        "),i.default.createElement("div",{style:l.white,className:"saturation-white"},i.default.createElement("div",{style:l.black,className:"saturation-black"}),i.default.createElement("div",{style:l.pointer},this.props.pointer?i.default.createElement(this.props.pointer,this.props):i.default.createElement("div",{style:l.circle}))))}}])
return t}(n.PureComponent||n.Component)
t.default=p},dKDz:function(e,t,a){"use strict"
var r=/["'&<>]/
e.exports=n
function n(e){var t=""+e
var a=r.exec(t)
if(!a)return t
var n
var i=""
var o=0
var s=0
for(o=a.index;o<t.length;o++){switch(t.charCodeAt(o)){case 34:n="&quot;"
break
case 38:n="&amp;"
break
case 39:n="&#39;"
break
case 60:n="&lt;"
break
case 62:n="&gt;"
break
default:continue}s!==o&&(i+=t.substring(s,o))
s=o+1
i+=n}return s!==o?i+t.substring(s,o):i}},itsj:function(e,t){function a(e,t){if("constructor"===t&&"function"===typeof e[t])return
if("__proto__"==t)return
return e[t]}e.exports=a},japM:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.handleFocus=void 0
var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}
var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a]
r.enumerable=r.enumerable||false
r.configurable=true
"value"in r&&(r.writable=true)
Object.defineProperty(e,r.key,r)}}return function(t,a,r){a&&e(t.prototype,a)
r&&e(t,r)
return t}}()
var i=a("q1tI")
var o=s(i)
function s(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.handleFocus=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"span"
return function(a){c(i,a)
function i(){var e
var t,a,r
_(this,i)
for(var n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s]
return r=(t=(a=l(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(o))),a),a.state={focus:false},a.handleFocus=function(){return a.setState({focus:true})},a.handleBlur=function(){return a.setState({focus:false})},t),l(a,r)}n(i,[{key:"render",value:function(){return o.default.createElement(t,{onFocus:this.handleFocus,onBlur:this.handleBlur},o.default.createElement(e,r({},this.props,this.state)))}}])
return i}(o.default.Component)}},jeLo:function(e,t,a){var r=a("juv8"),n=a("mTTR")
function i(e){return r(e,n(e))}e.exports=i},l9OW:function(e,t,a){var r=a("SKAX"),n=a("MMmD")
function i(e,t){var a=-1,i=n(e)?Array(e.length):[]
r(e,(function(e,r,n){i[++a]=t(e,r,n)}))
return i}e.exports=i},lreK:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.mergeClasses=void 0
var r=a("Ag8Z")
var n=_(r)
var i=a("BkRI")
var o=_(i)
var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}
function _(e){return e&&e.__esModule?e:{default:e}}var l=t.mergeClasses=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
var a=e.default&&(0,o.default)(e.default)||{}
t.map((function(t){var r=e[t]
r&&(0,n.default)(r,(function(e,t){a[t]||(a[t]={})
a[t]=s({},a[t],r[t])}))
return t}))
return a}
t.default=l},"mv/X":function(e,t,a){var r=a("ljhN"),n=a("MMmD"),i=a("wJg7"),o=a("GoyQ")
function s(e,t,a){if(!o(a))return false
var s=typeof t
if("number"==s?n(a)&&i(t,a.length):"string"==s&&t in a)return r(a[t],e)
return false}e.exports=s},p8yl:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.red=t.getContrastingColor=t.isValidHex=t.toState=t.simpleCheckForValidColor=void 0
var r=a("xkGU")
var n=s(r)
var i=a("Zss7")
var o=s(i)
function s(e){return e&&e.__esModule?e:{default:e}}t.simpleCheckForValidColor=function(e){var t=["r","g","b","a","h","s","l","v"]
var a=0
var r=0;(0,n.default)(t,(function(t){if(e[t]){a+=1
isNaN(e[t])||(r+=1)
if("s"===t||"l"===t){var n=/^\d+%$/
n.test(e[t])&&(r+=1)}}}))
return a===r&&e}
var _=t.toState=function(e,t){var a=e.hex?(0,o.default)(e.hex):(0,o.default)(e)
var r=a.toHsl()
var n=a.toHsv()
var i=a.toRgb()
var s=a.toHex()
if(0===r.s){r.h=t||0
n.h=t||0}var _="000000"===s&&0===i.a
return{hsl:r,hex:_?"transparent":"#"+s,rgb:i,hsv:n,oldHue:e.h||t||r.h,source:e.source}}
t.isValidHex=function(e){var t="#"===String(e).charAt(0)?1:0
return e.length!==4+t&&e.length<7+t&&(0,o.default)(e).isValid()}
t.getContrastingColor=function(e){if(!e)return"#fff"
var t=_(e)
if("transparent"===t.hex)return"rgba(0,0,0,0.4)"
var a=(299*t.rgb.r+587*t.rgb.g+114*t.rgb.b)/1e3
return a>=128?"#000":"#fff"}
t.red={hsl:{a:1,h:0,l:.5,s:1},hex:"#ff0000",rgb:{r:255,g:0,b:0,a:1},hsv:{h:0,s:1,v:1,a:1}}
t.default=t},sAx5:function(e,t,a){"use strict"
a.d(t,"a",(function(){return T}))
var r=a("rePB")
var n=a("1OyB")
var i=a("vuIU")
var o=a("Ji7U")
var s=a("LK+K")
var _=a("q1tI")
var l=a.n(_)
var c=a("17x9")
var d=a.n(c)
var u=a("TSYQ")
var h=a.n(u)
var f=a("cClk")
var b=a("sTNg")
var m=a("BTe1")
var p=a("nAyT")
var g=a("jtGx")
var v=a("/UXv")
var k=a("J2CL")
var y=a("oXx0")
function w(e){var t=e.colors,a=e.typography,r=e.borders,n=e.spacing,i=e.forms
return{fontFamily:a.fontFamily,fontWeight:a.fontWeightNormal,borderWidth:r.widthSmall,borderStyle:r.style,borderColor:t.borderMedium,borderRadius:r.radiusMedium,iconColor:t.textDarkest,color:t.textDarkest,background:t.backgroundLightest,padding:n.small,focusOutlineWidth:r.widthMedium,focusOutlineStyle:r.style,focusOutlineColor:t.borderBrand,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:a.fontSizeSmall,smallHeight:i.inputHeightSmall,mediumFontSize:a.fontSizeMedium,mediumHeight:i.inputHeightMedium,largeFontSize:a.fontSizeLarge,largeHeight:i.inputHeightLarge}}w.canvas=function(e){return{color:e["ic-brand-font-color-dark"],iconColor:e["ic-brand-font-color-dark"],focusBorderColor:e["ic-brand-primary"],focusOutlineColor:e["ic-brand-primary"]}}
var x,j,O,S,z,C
var A={componentId:"bwOAM",template:function(e){return"\n\n.bwOAM_byIz{display:block;position:relative}\n\n.bwOAM_dnnz{align-items:center;display:flex;fill:".concat(e.iconColor||"inherit",";height:100%;inset-inline-end:").concat(e.padding||"inherit",";inset-inline-start:auto;pointer-events:none;position:absolute;top:0}\n\n[dir=ltr] .bwOAM_dnnz{left:auto;right:").concat(e.padding||"inherit","}\n\n[dir=rtl] .bwOAM_dnnz{left:").concat(e.padding||"inherit",";right:auto}\n\n.bwOAM_cPAP{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit","*1.5);bottom:-0.25rem;box-sizing:border-box;display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.bwOAM_cwos,input[type].bwOAM_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:").concat(e.background||"inherit",";border:medium none currentColor;border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-collapse:separate;border-image:none;border-radius:0;border-radius:").concat(e.borderRadius||"inherit",";border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;line-height:1;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;outline:none;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;transition:all 0.2s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n.bwOAM_cwos::-ms-clear,input[type].bwOAM_cwos::-ms-clear{display:none}\n\n.bwOAM_cwos:focus,input[type].bwOAM_cwos:focus{box-shadow:none}\n\n.bwOAM_cwos:focus~.bwOAM_cPAP,input[type].bwOAM_cwos:focus~.bwOAM_cPAP{opacity:1;transform:scale(1)}\n\n.bwOAM_cwos[aria-invalid],.bwOAM_cwos[aria-invalid]:focus,.bwOAM_cwos[aria-invalid]~.bwOAM_cPAP,input[type].bwOAM_cwos[aria-invalid],input[type].bwOAM_cwos[aria-invalid]:focus,input[type].bwOAM_cwos[aria-invalid]~.bwOAM_cPAP{border-color:").concat(e.errorBorderColor||"inherit","}\n\n.bwOAM_cwos:-ms-input-placeholder,input[type].bwOAM_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.bwOAM_cwos::placeholder,input[type].bwOAM_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.bwOAM_cwos.bwOAM_ywdX,input[type].bwOAM_cwos.bwOAM_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.bwOAM_cwos.bwOAM_doqw,input[type].bwOAM_cwos.bwOAM_doqw{font-size:").concat(e.smallFontSize||"inherit",";height:").concat(e.smallHeight||"inherit","}\n\n.bwOAM_cwos.bwOAM_ycrn,input[type].bwOAM_cwos.bwOAM_ycrn{font-size:").concat(e.mediumFontSize||"inherit",";height:").concat(e.mediumHeight||"inherit","}\n\n.bwOAM_cwos.bwOAM_cMDj,input[type].bwOAM_cwos.bwOAM_cMDj{font-size:").concat(e.largeFontSize||"inherit",";height:").concat(e.largeHeight||"inherit","}\n\n.bwOAM_cwos.bwOAM_Suqk,input[type].bwOAM_cwos.bwOAM_Suqk{-webkit-padding-end:calc(").concat(e.padding||"inherit","*2 + 1em);-webkit-padding-start:").concat(e.padding||"inherit",";padding-inline-end:calc(").concat(e.padding||"inherit","*2 + 1em);padding-inline-start:").concat(e.padding||"inherit","}\n\n[dir=ltr] .bwOAM_cwos.bwOAM_Suqk,[dir=ltr] input[type].bwOAM_cwos.bwOAM_Suqk{padding-left:").concat(e.padding||"inherit",";padding-right:calc(").concat(e.padding||"inherit","*2 + 1em)}\n\n[dir=rtl] .bwOAM_cwos.bwOAM_Suqk,[dir=rtl] input[type].bwOAM_cwos.bwOAM_Suqk{padding-left:calc(").concat(e.padding||"inherit","*2 + 1em);padding-right:").concat(e.padding||"inherit","}\n\n.bwOAM_cwos.bwOAM_EMjX,input[type].bwOAM_cwos.bwOAM_EMjX{text-align:start}\n\n[dir=ltr] .bwOAM_cwos.bwOAM_EMjX,[dir=ltr] input[type].bwOAM_cwos.bwOAM_EMjX{text-align:left}\n\n[dir=rtl] .bwOAM_cwos.bwOAM_EMjX,[dir=rtl] input[type].bwOAM_cwos.bwOAM_EMjX{text-align:right}\n\n.bwOAM_cwos.bwOAM_ImeN,[dir=ltr] .bwOAM_cwos.bwOAM_ImeN,[dir=ltr] input[type].bwOAM_cwos.bwOAM_ImeN,[dir=rtl] .bwOAM_cwos.bwOAM_ImeN,[dir=rtl] input[type].bwOAM_cwos.bwOAM_ImeN,input[type].bwOAM_cwos.bwOAM_ImeN{text-align:center}")},layout:"bwOAM_byIz",icon:"bwOAM_dnnz",outline:"bwOAM_cPAP",input:"bwOAM_cwos",disabled:"bwOAM_ywdX",small:"bwOAM_doqw",medium:"bwOAM_ycrn",large:"bwOAM_cMDj",hasIcon:"bwOAM_Suqk","textAlign--start":"bwOAM_EMjX","textAlign--center":"bwOAM_ImeN"}
var T=(x=Object(p["a"])("7.0.0",null,"Use TextInput from ui-text-input instead."),j=Object(y["a"])(),O=Object(k["j"])(w,A),x(S=j(S=O(S=(C=z=function(e){Object(o["a"])(a,e)
var t=Object(s["a"])(a)
function a(e){var r
Object(n["a"])(this,a)
r=t.call(this)
r.handleInputRef=function(e){r._input=e
r.props.inputRef(e)}
r._defaultId=Object(m["a"])("TextInput")
r._messagesId=Object(m["a"])("TextInput-messages")
return r}Object(i["a"])(a,[{key:"focus",value:function(){this._input.focus()}},{key:"renderIcon",value:function(){var e=this.props.icon
return"function"===typeof e?l.a.createElement("span",{className:A.icon,"aria-hidden":"true"},l.a.createElement(e,null)):null}},{key:"render",value:function(){var e
var t=this.props,n=t.type,i=t.size,o=t.textAlign,s=t.placeholder,_=t.value,c=t.defaultValue,d=t.disabled,u=t.readOnly,f=t.required,m=t.width,p=t.icon
var v=Object(g["a"])(this.props,a.propTypes)
var k=(e={},Object(r["a"])(e,A.input,true),Object(r["a"])(e,A[i],i),Object(r["a"])(e,A["textAlign--".concat(o)],o),Object(r["a"])(e,A.hasIcon,p),Object(r["a"])(e,A.disabled,d),e)
var y=m?{width:m}:null
var w=""
v["aria-describedby"]&&(w="".concat(v["aria-describedby"]))
this.hasMessages&&(w+=this._messagesId)
return l.a.createElement(b["a"],Object.assign({},Object(g["c"])(this.props,b["a"].propTypes),{id:this.id,messagesId:this._messagesId}),l.a.createElement("span",{className:A.layout},l.a.createElement("input",Object.assign({},v,{value:_,style:y,defaultValue:c,placeholder:s,ref:this.handleInputRef,type:n,id:this.id,required:f,"aria-required":f,"aria-invalid":this.invalid?"true":null,disabled:d||u,className:h()(k),"aria-describedby":""!==w?w:null})),d||u?null:l.a.createElement("span",{className:A.outline,"aria-hidden":"true"}),this.renderIcon()))}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"focused",get:function(){return Object(v["a"])(this._input)}},{key:"value",get:function(){return this._input.value}}])
a.displayName="TextInput"
return a}(_["Component"]),z.propTypes={type:d.a.oneOf(["text","email","url","tel","search","password"]),label:d.a.node.isRequired,id:d.a.string,messages:d.a.arrayOf(b["e"].message),size:d.a.oneOf(["small","medium","large"]),layout:d.a.oneOf(["stacked","inline"]),textAlign:d.a.oneOf(["start","center"]),width:d.a.string,inline:d.a.bool,placeholder:d.a.string,disabled:d.a.bool,readOnly:d.a.bool,required:d.a.bool,inputRef:d.a.func,defaultValue:d.a.string,value:Object(f["a"])(d.a.string),icon:d.a.func},z.defaultProps={id:void 0,width:void 0,placeholder:void 0,required:false,defaultValue:void 0,value:void 0,icon:void 0,inline:false,type:"text",size:"medium",textAlign:"start",messages:[],disabled:false,readOnly:false,inputRef:function(e){},layout:"stacked"},C))||S)||S)||S)},srvI:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.calculateChange=function(e,t,a,r){var n=r.clientWidth
var i=r.clientHeight
var o="number"===typeof e.pageX?e.pageX:e.touches[0].pageX
var s="number"===typeof e.pageY?e.pageY:e.touches[0].pageY
var _=o-(r.getBoundingClientRect().left+window.pageXOffset)
var l=s-(r.getBoundingClientRect().top+window.pageYOffset)
if("vertical"===t){var c=void 0
if(l<0)c=359
else if(l>i)c=0
else{var d=-100*l/i+100
c=360*d/100}if(a.h!==c)return{h:c,s:a.s,l:a.l,a:a.a,source:"hsl"}}else{var u=void 0
if(_<0)u=0
else if(_>n)u=359
else{var h=100*_/n
u=360*h/100}if(a.h!==u)return{h:u,s:a.s,l:a.l,a:a.a,source:"hsl"}}return null}},syYy:function(e,t,a){"use strict"
var r=a("vAQ1")
var n=a("ZoNA")
var i=a("NOPk").underscore
e.exports=function(e){e=n(e)
var t=i(e)
var a=r(e.length+":"+e).toString(16)
return t+"_"+a}},t2Dn:function(e,t,a){var r=a("hypo"),n=a("ljhN")
function i(e,t,a){(void 0!==a&&!n(e[t],a)||void 0===a&&!(t in e))&&r(e,t,a)}e.exports=i},t6i0:function(e,t){function a(){var e=window.pageYOffset
if("number"==typeof e)return{top:e,left:window.pageXOffset}
return{top:document.documentElement.scrollTop,left:document.documentElement.scrollLeft}}function r(e){return parseInt(e,10)}e.exports=function(e){var t=e.getBoundingClientRect()
var n=a()
return{top:r(t.top+n.top),left:r(t.left+n.left),width:r(t.right-t.left),height:r(t.bottom-t.top)}}},uKUS:function(e,t,a){"use strict"
var r=a("q1tI")
var n=a.n(r)
var i=a("i8i4")
var o=a.n(i)
var s=a("ZREj")
var _=a.n(s)
var l=a("17x9")
var c=a.n(l)
var d={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,width:"1px",position:"absolute"}
var u=function(e){var t=e.message,a=e["aria-live"]
return n.a.createElement("div",{style:d,role:"log","aria-live":a},t||"")}
u.propTypes={}
var h=u
function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=function(e){m(t,e)
function t(){var a,r,n
f(this,t)
for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s]
return n=(a=(r=b(this,e.call.apply(e,[this].concat(o))),r),r.state={assertiveMessage1:"",assertiveMessage2:"",politeMessage1:"",politeMessage2:""},r.setAlternatePolite=false,r.setAlternateAssertive=false,a),b(r,n)}t.prototype.componentWillReceiveProps=function(e){var t=this.props,a=t.politeMessage,r=t.assertiveMessage
var n=e.politeMessage,i=e.assertiveMessage
if(a!==n){this.setState({politeMessage1:this.setAlternatePolite?"":n,politeMessage2:this.setAlternatePolite?n:""})
this.setAlternatePolite=!this.setAlternatePolite}if(r!==i){this.setState({assertiveMessage1:this.setAlternateAssertive?"":i,assertiveMessage2:this.setAlternateAssertive?i:""})
this.setAlternateAssertive=!this.setAlternateAssertive}}
t.prototype.render=function(){var e=this.state,t=e.assertiveMessage1,a=e.assertiveMessage2,r=e.politeMessage1,i=e.politeMessage2
return n.a.createElement("div",null,n.a.createElement(h,{"aria-live":"assertive",message:t}),n.a.createElement(h,{"aria-live":"assertive",message:a}),n.a.createElement(h,{"aria-live":"polite",message:r}),n.a.createElement(h,{"aria-live":"polite",message:i}))}
return t}(r["Component"])
p.propTypes={}
var g=p
var v,k
function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function x(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var j=(k=v=function(e){x(t,e)
function t(a){y(this,t)
var r=w(this,e.call(this,a))
r.state={announcePoliteMessage:"",announceAssertiveMessage:""}
r.announcePolite=r.announcePolite.bind(r)
r.announceAssertive=r.announceAssertive.bind(r)
return r}t.prototype.getChildContext=function(){return{announcePolite:this.announcePolite,announceAssertive:this.announceAssertive}}
t.prototype.announcePolite=function(e){this.setState({announcePoliteMessage:e})}
t.prototype.announceAssertive=function(e){this.setState({announceAssertiveMessage:e})}
t.prototype.render=function(){var e=this.state,t=e.announcePoliteMessage,a=e.announceAssertiveMessage
return n.a.createElement("div",null,n.a.createElement(g,{assertiveMessage:a,politeMessage:t}),this.props.children)}
return t}(r["Component"]),v.childContextTypes={announcePolite:c.a.func.isRequired,announceAssertive:c.a.func.isRequired},k)
var O=j
var S,z
function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function T(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var E=(z=S=function(e){T(t,e)
function t(a){C(this,t)
var r=A(this,e.call(this,a))
r.announce=r.announce.bind(r)
return r}t.prototype.componentDidMount=function(){this.announce()}
t.prototype.componentDidUpdate=function(e){var t=this.props.message
t!==e.message&&this.announce()}
t.prototype.componentWillUnmount=function(){var e=this.props.clearOnUnmount
if(true===e||"true"===e){this.context.announceAssertive("")
this.context.announcePolite("")}}
t.prototype.announce=function(){var e=this.props,t=e.message,a=e["aria-live"]
"assertive"===a&&this.context.announceAssertive(t||"")
"polite"===a&&this.context.announcePolite(t||"")}
t.prototype.render=function(){return null}
return t}(r["Component"]),S.contextTypes={announcePolite:c.a.func.isRequired,announceAssertive:c.a.func.isRequired},z)
E.propTypes={}
var M=E
var L=a("WfMV")
var P=a("Mmr1")
var R=a("Xx/m")
var I=a("7Hz5")
var N=a("zpiH")
var F=a("S4Kx")
var q=a("gSD+")
var B=a("5JRF")
var D=a("RBOd")
var W=a("VTJ5")
var H=a("DNiq")
var U=a("pE3M")
var K=a("KR5x")
var V=a("sAx5")
var G=a("lr1R")
var Z=a("xbKj")
var X=a("XnDF")
var Y=a("VTBJ")
var Q=a("1OyB")
var J=a("vuIU")
var $=a("Ji7U")
var ee=a("LK+K")
var te=a("hPGw")
var ae=n.a.createElement("path",{d:"M960,1807.05882 C492.875294,1807.05882 112.941176,1427.12471 112.941176,960 C112.941176,492.875294 492.875294,112.941176 960,112.941176 C1427.12471,112.941176 1807.05882,492.875294 1807.05882,960 C1807.05882,1427.12471 1427.12471,1807.05882 960,1807.05882 M960,0 C430.644706,0 0,430.644706 0,960 C0,1489.35529 430.644706,1920 960,1920 C1489.35529,1920 1920,1489.35529 1920,960 C1920,430.644706 1489.35529,0 960,0 M960.056471,1355.18118 L1016.52706,1355.29412 L960.056471,1355.29412 L960.056471,1355.18118 L960.056471,1355.18118 Z M752.64,409.648941 C836.329412,344.933647 944.301176,323.248941 1049.33647,350.354824 C1164.19765,380.058353 1257.6,473.460706 1287.30353,588.321882 C1310.68235,678.787765 1298.03294,771.625412 1251.84,849.780706 C1206.32471,926.806588 1130.65412,983.728941 1044.25412,1005.86541 C1030.47529,1009.36659 1016.47059,1020.66071 1016.47059,1037.71482 L1016.47059,1037.71482 L1016.47059,1129.42306 L903.529412,1129.42306 L903.529412,1037.71482 C903.529412,971.644235 949.835294,913.592471 1016.24471,896.425412 C1073.84471,881.743059 1124.21647,843.794824 1154.59765,792.406588 C1185.43059,740.114824 1193.78824,677.658353 1177.97647,616.557176 C1158.32471,540.886588 1096.77176,479.333647 1021.10118,459.681882 C950.174118,441.498353 877.552941,455.728941 821.76,498.985412 C766.08,542.128941 734.117647,607.296 734.117647,677.658353 L734.117647,677.658353 L621.176471,677.658353 C621.176471,572.058353 669.063529,474.364235 752.64,409.648941 Z M960.056471,1242.35294 C897.712941,1242.35294 847.115294,1293.06353 847.115294,1355.29412 C847.115294,1417.52471 897.712941,1468.23529 960.056471,1468.23529 C1022.28706,1468.23529 1072.99765,1417.52471 1072.99765,1355.29412 C1072.99765,1293.06353 1022.28706,1242.35294 960.056471,1242.35294 L960.056471,1242.35294 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var re=function(e){Object($["a"])(a,e)
var t=Object(ee["a"])(a)
function a(){Object(Q["a"])(this,a)
return t.apply(this,arguments)}Object(J["a"])(a,[{key:"render",value:function(){return n.a.createElement(te["a"],Object.assign({},this.props,{name:"IconQuestion",viewBox:"0 0 1920 1920"}),ae)}}])
a.displayName="IconQuestionLine"
return a}(r["Component"])
re.glyphName="question"
re.variant="Line"
re.propTypes=Object(Y["a"])({},te["a"].propTypes)
var ne=a("J2CL")
var ie=a("YDsC")
var oe=a.n(ie)
var se=a("TM95")
function _e(){const e={width:"10px",height:"10px",border:"1px solid rgba(0, 0, 0, 0.6)",borderRadius:"6px",transform:"translate(-6px, -1px)",backgroundColor:"rgb(248, 248, 248)",boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.37)"}
return n.a.createElement("div",{style:e})}var le=a("BKMn")
var ce=a.n(le)
function de(e){return n.a.createElement("div",null,n.a.createElement("div",{style:{position:"relative",height:150,marginTop:10}},n.a.createElement(se["Saturation"],Object.assign({},e,{pointer:ce.a}))),n.a.createElement("div",{style:{position:"relative",height:10,marginTop:10}},n.a.createElement(se["Hue"],Object.assign({},e,{pointer:_e}))),n.a.createElement("div",{style:{position:"relative",height:10,marginTop:10}},n.a.createElement(se["Alpha"],Object.assign({},e,{pointer:_e}))))}var ue=Object(se["ColorWrap"])(de)
class he extends n.a.Component{constructor(){super(...arguments)
this.state={width:200}
this.handlePickerChange=e=>{this.props.onChange({target:{name:this.props.name,value:he.stringifyRGBA(e.rgb)}})}}static stringifyRGBA(e){if(1===e.a)return"rgb(".concat(e.r,", ").concat(e.g,", ").concat(e.b,")")
return"rgba(".concat(e.r,", ").concat(e.g,", ").concat(e.b,", ").concat(e.a,")")}componentDidMount(){this.setState({width:o.a.findDOMNode(this).offsetWidth})}render(){return n.a.createElement(F["a"],{as:"div"},n.a.createElement(V["a"],this.props),n.a.createElement(ue,{color:oe.a.parseRGBA(this.props.value),onChange:this.handlePickerChange}))}}function fe(){return n.a.createElement("svg",{viewBox:"0 0 245 310",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("g",{fill:"none",fillRule:"evenodd"},n.a.createElement("path",{d:"M166.886 39.098c1.975 25.644-22.325 55.153-31.764 55.89-8.258.645-37.972-24.727-39.947-50.37C93.2 18.972 108.168 3.644 127.97 2.12 147.774.6 164.91 13.455 166.887 39.1",fill:"#E24270"}),n.a.createElement("path",{d:"M166.886 39.098c1.975 25.644-22.325 55.153-31.764 55.89-8.258.645-37.972-24.727-39.947-50.37C93.2 18.972 108.168 3.644 127.97 2.12 147.774.6 164.91 13.455 166.887 39.1z",stroke:"#BB0049",strokeWidth:"3"}),n.a.createElement("path",{d:"M136.38 99s-4.393 25.27 16.675 79.635c21.835 56.343.905 87.365.905 87.365",stroke:"#808285",strokeWidth:"2"}),n.a.createElement("path",{d:"M134.786 96.263l-3.607 5.22c-.618.895.493 1.963 1.373 1.322l3.045-2.215 4.22 2.174c.804.414 1.576-.6.957-1.253l-5.04-5.32c-.268-.28-.73-.246-.95.073",fill:"#E24270"}),n.a.createElement("path",{d:"M134.786 96.263l-3.607 5.22c-.618.895.493 1.963 1.373 1.322l3.045-2.215 4.22 2.174c.804.414 1.576-.6.957-1.253l-5.04-5.32c-.268-.28-.73-.246-.95.073z",stroke:"#BB0049",strokeWidth:"3"}),n.a.createElement("path",{d:"M223.18 86.916c-3.846 20.83-28.086 39.36-35.276 38.015-6.292-1.174-23.187-27.46-19.34-48.29 3.845-20.827 18.185-29.973 33.267-27.136 15.083 2.838 25.196 16.583 21.35 37.412",fill:"#F7941D"}),n.a.createElement("path",{d:"M223.18 86.916c-3.846 20.83-28.086 39.36-35.276 38.015-6.292-1.174-23.187-27.46-19.34-48.29 3.845-20.827 18.185-29.973 33.267-27.136 15.083 2.838 25.196 16.583 21.35 37.412z",stroke:"#F15A29",strokeWidth:"3"}),n.a.createElement("path",{d:"M188.264 127s11.83 8.563-1.903 44.83c-43.046 113.684 27.63 102.178-5.446 114.17",stroke:"#808285",strokeWidth:"2"}),n.a.createElement("path",{d:"M189.094 124.174l-2.923 3.936c-.5.674.195 1.637.86 1.19l2.3-1.54 2.786 2.126c.53.405 1.148-.353.765-.938l-3.117-4.753c-.165-.25-.49-.262-.67-.02",fill:"#F7941D"}),n.a.createElement("path",{d:"M189.094 124.174l-2.923 3.936c-.5.674.195 1.637.86 1.19l2.3-1.54 2.786 2.126c.53.405 1.148-.353.765-.938l-3.117-4.753c-.165-.25-.49-.262-.67-.02z",stroke:"#F15A29",strokeWidth:"2"}),n.a.createElement("path",{fill:"#E24270",d:"M7.366 125L0 121.366 3.634 114 11 117.634"}),n.a.createElement("path",{fill:"#2BB673",d:"M205.793 189L201 181.793l7.206-4.793 4.794 7.206M38.793 227L34 219.794 41.206 215 46 222.207"}),n.a.createElement("path",{fill:"#C739AE",d:"M241.365 119L234 115.365l3.635-7.365 7.365 3.635"}),n.a.createElement("path",{d:"M59.82 132.916c3.846 20.828 28.086 39.36 35.277 38.015 6.29-1.174 23.187-27.46 19.34-48.29-3.845-20.827-18.186-29.973-33.268-27.136-15.083 2.838-25.196 16.583-21.35 37.412",fill:"#27AAE1"}),n.a.createElement("path",{d:"M59.82 132.916c3.846 20.828 28.086 39.36 35.277 38.015 6.29-1.174 23.187-27.46 19.34-48.29-3.845-20.827-18.186-29.973-33.268-27.136-15.083 2.838-25.196 16.583-21.35 37.412z",stroke:"#1B75BC",strokeWidth:"3"}),n.a.createElement("path",{d:"M95.578 173s-12.91 7.878.553 38.35c22.452 50.803-11.7 39.804 2.025 97.65",stroke:"#808285",strokeWidth:"2"}),n.a.createElement("path",{d:"M93.906 170.174l2.923 3.936c.5.674-.195 1.637-.86 1.19l-2.3-1.54-2.786 2.126c-.53.404-1.148-.353-.765-.938l3.117-4.753c.165-.25.49-.262.67-.02",fill:"#27AAE1"}),n.a.createElement("path",{d:"M93.906 170.174l2.923 3.936c.5.674-.195 1.637-.86 1.19l-2.3-1.54-2.786 2.126c-.53.404-1.148-.353-.765-.938l3.117-4.753c.165-.25.49-.262.67-.02z",stroke:"#1B75BC",strokeWidth:"2"})))}var be=a("/HcR")
var me=a.n(be)
var pe=a("TDWj")
var ge=a("syYy")
var ve=a.n(ge)
const ke=me.a.namespace()
ke.setup({translations:pe,generateId:ve.a})
var ye=ke
function we(e){const t=/([^\/]*?)(\?.*)?$/
const a=t.exec(e)
return a&&a[1]}function xe(e,t){const a=/\w+/g
const r=[]
let n
while(t>0&&(n=a.exec(e))){--t
r.push(n[0])}let i=r.join(" ")
null!=n&&a.exec(e)&&(i+="…")
return i}const je=4
function Oe(e){if(!e||!e.tagName)return null
switch(e.tagName){case"IMG":return ye("Image with filename {file}",{file:we(e.src)})
case"TABLE":return ye("Table starting with {start}",{start:xe(e.textContent,je)})
case"A":return ye("Link with text starting with {start}",{start:xe(e.textContent,je)})
case"P":return ye("Paragraph starting with {start}",{start:xe(e.textContent,je)})
case"TH":return ye("Table header starting with {start}",{start:xe(e.textContent,je)})
case"H1":case"H2":case"H3":case"H4":case"H5":return ye("Heading starting with {start}",{start:xe(e.textContent,je)})
default:return ye("Element starting with {start}",{start:xe(e.textContent,je)})}}var Se=a("t6i0")
var ze=a.n(Se)
const Ce=3
function Ae(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ze.a
let r=arguments.length>3?arguments[3]:void 0
const n=a(e)
const i=r||t.getBoundingClientRect()
const o={top:i.top,left:i.left,width:i.right-i.left,height:i.bottom-i.top}
return{width:o.width,height:o.height,left:n.left+o.left,top:n.top+o.top}}function Te(){Array.from(document.querySelectorAll(".a11y-checker-selection-indicator")).forEach(e=>{e.parentNode.removeChild(e)})}function Ee(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ce
Te()
const r=e.getContainer().querySelector("iframe")
const n=document.createElement("div")
n.className="a11y-checker-selection-indicator"
const i=Ae(r,t)
n.setAttribute("style","\n    border: 2px solid #000;\n    background-color: #008EE2;\n    position: absolute;\n    display: block;\n    borderRadius: 5px;\n    z-index: 9998;\n    left: ".concat(i.left-a,"px;\n    top: ").concat(i.top-a,"px;\n    width: ").concat(i.width+2*a,"px;\n    height: ").concat(i.height+2*a,"px;\n    opacity: 0.5;\n  "))
document.body.appendChild(n)
n.style.opacity=.8
n.style.transition="opacity 0.4s"
const o=()=>{const e=t.getBoundingClientRect()
const i=Ae(r,t,ze.a,e)
const s=ze()(r)
n.style.left="".concat(i.left-a,"px")
n.style.top="".concat(i.top-a,"px")
n.style.display="block"
if(e.top<0){const t=i.height+e.top
t<0&&(n.style.display="none")
const a=i.height-t
n.style.height="".concat(t,"px")
n.style.marginTop="".concat(a,"px")}if(e.bottom>s.height){const t=i.height+(s.height-e.bottom)
t<0&&(n.style.display="none")
n.style.height="".concat(t,"px")}window.requestAnimationFrame(o)}
window.requestAnimationFrame(o)}const Me=1
const Le=25
const Pe=Array.prototype.indexOf
function Re(e,t,a){const r=[{node:e,index:0}]
const n=()=>{let e=Le
while(r.length>0&&e>0){const a=r.length-1
const n=r[a].node.childNodes[r[a].index]
if(n){r[a].index+=1
if(n.nodeType===Me){t(n)
r.push({node:n,index:0})
e-=0}}else r.pop()}setTimeout(r.length>0?n:a,0)}
n()}function Ie(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ee
if(null==t)return
t.scrollIntoView()
a(e,t)}function Ne(e,t){e.childNodes.length>0?e.insertBefore(t,e.childNodes[0]):e.appendChild(t)}function Fe(e,t){const a=e.ownerDocument.createElement(t)
while(e.firstChild)a.appendChild(e.firstChild)
for(let t=e.attributes.length-1;t>=0;--t)a.attributes.setNamedItem(e.attributes[t].cloneNode())
e.parentNode.replaceChild(a,e)
return a}function qe(e,t){const a=[]
let r=t
while(true){if(r==e)return a
const t=r.parentNode
if(null==t)return null
a.push(Pe.call(t.childNodes,r))
r=t}}function Be(e,t){let a=e
let r
while(void 0!==(r=t.pop())){a=a.childNodes[r]
if(null==a)return null}return a}function De(e){const t=e.getElementsByTagName("a")
return!!t.length&&t[0].textContent===e.textContent}function We(e){const t=e.split(";")
return t.reduce((e,t)=>{const a=t.split(":")
2===a.length&&(e[a[0].trim()]=a[1].trim())
return e},{})}function He(e){let t=Object.keys(e).map(t=>"".concat(t,":").concat(e[t])).join(";")
t&&(t="".concat(t,";"))
return t}function Ue(e){const t=Array.from(e.childNodes)
return t.some(e=>e.nodeType===Node.TEXT_NODE)}var Ke={id:"img-alt",test:e=>{if("IMG"!==e.tagName)return true
const t=e.getAttribute("alt")
const a=e.hasAttribute("data-decorative")
return t&&""!==t.replace(/\s/g,"")||a},data:e=>{const t=e.getAttribute("alt")
const a=e.hasAttribute("data-decorative")
return{alt:t||"",decorative:!t&&a}},form:()=>[{label:ye("Add alt text for the image"),dataKey:"alt",disabledIf:e=>e.decorative},{label:ye("Decorative image"),dataKey:"decorative",checkbox:true}],update:(e,t)=>{if(t.decorative){e.setAttribute("alt","")
e.setAttribute("data-decorative","true")}else{e.setAttribute("alt",t.alt)
e.removeAttribute("data-decorative")}return e},message:()=>ye("Images should include an alt attribute describing the image content."),why:()=>ye("Screen readers cannot determine what is displayed in an image without alternative text, which describes the content and meaning of the image."),link:"https://www.w3.org/TR/WCAG20-TECHS/H37.html",linkText:()=>ye("Learn more about using alt text for images")}
a("x1Tw")
const Ve=/^\S+\.\S+$/
var Ge={id:"img-alt-filename",test:e=>!Ve.test(e.getAttribute("alt")),data:e=>{const t=e.getAttribute("alt")
return{alt:t||""}},form:()=>[{label:ye("Change alt text"),dataKey:"alt"}],update:(e,t)=>{e.setAttribute("alt",t.alt)
return e},message:()=>ye("Image filenames should not be used as the alt attribute describing the image content."),why:()=>ye("Screen readers cannot determine what is displayed in an image without alternative text, and filenames are often meaningless strings of numbers and letters that do not describe the context or meaning."),link:"https://www.w3.org/TR/WCAG20-TECHS/F30.html",linkText:()=>ye("Learn more about using filenames as alt text")}
var Ze={id:"table-caption",test:e=>{if("TABLE"!==e.tagName)return true
const t=e.querySelector("caption")
return!!t&&""!==t.textContent.replace(/\s/g,"")},data:e=>({caption:""}),form:()=>[{label:ye("Add a caption"),dataKey:"caption"}],update:(e,t)=>{let a=e.querySelector("caption")
if(!a){a=e.ownerDocument.createElement("caption")
Ne(e,a)}a.textContent=t.caption
return e},message:()=>ye("Tables should include a caption describing the contents of the table."),why:()=>ye("Screen readers cannot interpret tables without the proper structure. Table captions describe the context and general understanding of the table."),link:"https://www.w3.org/TR/WCAG20-TECHS/H39.html",linkText:()=>ye("Learn more about using captions with tables")}
const Xe=Array.prototype.forEach
var Ye={id:"table-header",test:e=>{if("TABLE"!==e.tagName)return true
return e.querySelector("th")},data:e=>({header:"none"}),form:()=>[{label:ye("Set table header"),dataKey:"header",options:[["none",ye("No headers")],["row",ye("Header row")],["col",ye("Header column")],["both",ye("Header row and column")]]}],update:(e,t)=>{Xe.call(e.querySelectorAll("th"),e=>{Fe(e,"td")})
if("none"===t.header)return e
const a="row"===t.header||"both"===t.header
const r="col"===t.header||"both"===t.header
const n=e.querySelectorAll("tr")
for(let e=0;e<n.length;++e){if(0===e&&a){Xe.call(n[e].querySelectorAll("td"),e=>{const t=Fe(e,"th")
t.setAttribute("scope","col")})
continue}if(!r)break
const t=n[e].querySelector("td")
if(t){const e=Fe(t,"th")
e.setAttribute("scope","row")}}return e},message:()=>ye("Tables should include at least one header."),why:()=>ye("Screen readers cannot interpret tables without the proper structure. Table headers provide direction and overview of the content."),link:"https://www.w3.org/TR/WCAG20-TECHS/H43.html",linkText:()=>ye("Learn more about table headers")}
const Qe=["row","col","rowgroup","colgroup"]
var Je={id:"table-header-scope",test:e=>{if("TH"!==e.tagName)return true
return-1!==Qe.indexOf(e.getAttribute("scope"))},data:e=>({scope:e.getAttribute("scope")||"none"}),form:()=>[{label:ye("Set header scope"),dataKey:"scope",options:[["none",ye("None")],["row",ye("Row")],["col",ye("Column")],["rowgroup",ye("Row group")],["colgroup",ye("Column group")]]}],update:(e,t)=>{"none"===t.header?e.removeAttribute("scope"):e.setAttribute("scope",t.scope)
return e},message:()=>ye("Tables headers should specify scope."),why:()=>ye("Screen readers cannot interpret tables without the proper structure. Table headers provide direction and content scope."),link:"https://www.w3.org/TR/WCAG20-TECHS/H63.html",linkText:()=>ye("Learn more about using scope attributes with tables")}
var $e=a("IF+P")
var et=a.n($e)
var tt={id:"small-text-contrast",test:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const a=true==t.disableContrastCheck
const r=!Ue(e)
if(a||r||De(e)||oe.a.isLargeText(e))return true
return oe()(e)},data:e=>{const t=window.getComputedStyle(e)
return{color:t.color}},form:()=>[{label:ye("Change text color"),dataKey:"color",color:true}],update:(e,t)=>{e.style.color=t.color
const a=We(e.getAttribute("data-mce-style")||"")
t&&t.color&&t.color.indexOf("#")<0?a.color="#".concat(et()(t.color)):a.color=t.color
e.setAttribute("data-mce-style",He(a))
return e},message:()=>ye("Text smaller than 18pt (or bold 14pt) should display a minimum contrast ratio of 4.5:1."),why:()=>ye("Text is difficult to read without sufficient contrast between the text and the background, especially for those with low vision."),link:"https://www.w3.org/TR/WCAG20-TECHS/G17.html",linkText:()=>ye("Learn more about color contrast")}
var at={id:"large-text-contrast",test:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const a=true==t.disableContrastCheck
const r=!Ue(e)
if(a||r||De(e)||!oe.a.isLargeText(e))return true
return oe()(e)},data:tt.data,form:tt.form,update:tt.update,message:()=>ye("Text larger than 18pt (or bold 14pt) should display a minimum contrast ratio of 3:1."),why:()=>ye("Text is difficult to read without sufficient contrast between the text and the background, especially for those with low vision."),link:"https://www.w3.org/TR/WCAG20-TECHS/G17.html",linkText:()=>ye("Learn more about color contrast")}
const rt=(e,t)=>{if(!e||!t||"A"!==e.tagName||"A"!==t.tagName)return false
return e.getAttribute("href")===t.getAttribute("href")}
const nt=e=>e.nodeType!==Node.TEXT_NODE||e.textContent.match(/\S/)
const it=e=>{const t=e.firstElementChild
if(!t)return null
if([...e.childNodes].filter(nt).length>1)return null
return t}
const ot=e=>{let t=e
let a=it(t)
while(a){if("IMG"===a.tagName)return a
t=a
a=it(t)}return null}
const st=e=>e.replace(/\s+/g," ").trim()
const _t=(e,t)=>{let a=ot(e)
let r=ot(t)
return a&&!r&&st(a.getAttribute("alt"))===st(t.textContent)?a:r&&!a&&st(r.getAttribute("alt"))===st(e.textContent)?r:null}
var lt={id:"adjacent-links",test:function(e){if("A"!=e.tagName)return true
return!rt(e,e.nextElementSibling)},data:e=>({combine:false}),form:()=>[{label:ye("Merge links"),checkbox:true,dataKey:"combine"}],update:function(e,t){const a=e.parentNode
if(t.combine){const t=e.nextElementSibling
const r=_t(e,t)
if(r){r.setAttribute("data-decorative","true")
r.setAttribute("alt","")}a.removeChild(t)
e.innerHTML+=" ".concat(t.innerHTML)}return e},rootNode:function(e){return e.parentNode},message:()=>ye("Adjacent links with the same URL should be a single link."),why:()=>ye("Keyboards navigate to links using the Tab key. Two adjacent links that direct to the same destination can be confusing to keyboard users."),link:"https://www.w3.org/TR/WCAG20-TECHS/H2.html",linkText:()=>ye("Learn more about adjacent links")}
const ct=e=>{const t={H1:true,H2:true,H3:true,H4:true,H5:true,H6:true}
return e&&true===t[e.tagName]}
const dt=e=>{const t=Array.prototype.slice.call(e.querySelectorAll("H1,H2,H3,H4,H5,H6"))
if(t.length>0)return t.reverse()[0]
if(ct(e))return e
return}
const ut=e=>{let t=[]
if(!e||!e.parentElement||!e.parentElement.children)return t
const a=e.parentElement.children
for(var r=0;r<a.length;r++){if(a[r]===e)break
t.unshift(a[r])}return t}
const ht=e=>{const t=ut(e)
let a
for(let e=0;e<t.length;e++){a=dt(t[e])
if(a)break}return a}
const ft=e=>{let t
if(!e||"BODY"===e.tagName)return
if(ct(e))return e
t=ht(e)
t||(t=ft(e.parentElement))
return t}
const bt=e=>{let t=ht(e)
t||(t=ft(e.parentElement))
return t}
const mt=e=>bt(e)
const pt=e=>{const t=+e.tagName.substring(1)
const a={}
for(var r=t-1;r<=6;r++)a["H".concat(r)]=true
return a}
var gt={id:"headings-sequence",test:e=>{const t={H2:true,H3:true,H4:true,H5:true,H6:true}
if(true!==t[e.tagName])return true
const a=pt(e)
const r=mt(e)
if(r)return a[r.tagName]
return true},data:e=>({action:"nothing"}),form:()=>[{label:ye("Action to take:"),dataKey:"action",options:[["nothing",ye("Leave as is")],["elem",ye("Fix heading hierarchy")],["modify",ye("Remove heading style")]]}],update:(e,t)=>{if(!t||!t.action||"nothing"===t.action)return e
switch(t.action){case"elem":{const t=mt(e)
const a=t?+t.tagName.substring(1):0
return Fe(e,"H".concat(a+1))}case"modify":return Fe(e,"p")}},message:()=>ye("Heading levels should not be skipped."),why:()=>ye("Sighted users browse web pages quickly, looking for large or bolded headings. Screen reader users rely on headers for contextual understanding. Headers should use the proper structure."),link:"https://www.w3.org/TR/WCAG20-TECHS/G141.html",linkText:()=>ye("Learn more about organizing page headings")}
const vt=120
var kt={"max-alt-length":vt,id:"img-alt-length",test:e=>{if("IMG"!==e.tagName)return true
const t=e.getAttribute("alt")
return null==t||t.length<=vt},data:e=>{const t=e.getAttribute("alt")
return{alt:t||""}},form:()=>[{label:ye("Change alt text"),dataKey:"alt",textarea:true}],update:(e,t)=>{e.setAttribute("alt",t.alt)
return e},message:()=>ye("Alt attribute text should not contain more than 120 characters."),why:()=>ye("Screen readers cannot determine what is displayed in an image without alternative text, which describes the content and meaning of the image. Alternative text should be simple and concise."),link:""}
const yt=125
const wt={H1:true,H2:true,H3:true,H4:true,H5:true,H6:true}
var xt={"max-heading-length":yt,id:"paragraphs-for-headings",test:e=>{if(!wt[e.tagName])return true
return e.textContent.length<=yt},data:e=>({change:false}),form:()=>[{label:ye("Change heading tag to paragraph"),checkbox:true,dataKey:"change"}],update:(e,t)=>{let a=e
t.change&&(a=Fe(e,"p"))
return a},message:()=>ye("Headings should not contain more than 120 characters."),why:()=>ye("Sighted users browse web pages quickly, looking for large or bolded headings. Screen reader users rely on headers for contextual understanding. Headers should be concise within the proper structure."),link:""}
const jt="[A-Z]+|[a-z]+|[0-9]+"
const Ot=["*","-"].map(e=>"\\"+e).join("|")
const St=[".",")"].map(e=>"\\"+e).join("|")
const zt=new RegExp("^\\s*(?:(?:[".concat(Ot,"])|(?:(").concat(jt,")[").concat(St,"]))\\s+"))
const Ct=e=>"P"===e.tagName&&zt.test(e.textContent)
const At=e=>{if(e.nodeType===Node.TEXT_NODE){e.textContent=e.textContent.replace(zt,"")
return true}for(let t of e.childNodes){let e=At(t)
if(e)return true}return false}
const Tt=(e,t)=>{while(e.firstChild)t.appendChild(e.firstChild)}
const Et=e=>{let t=[]
let a=e.firstChild
while(a){let e=t[t.length-1]
if("BR"===a.tagName){t.push(document.createElement("p"))
a=a.nextSibling
continue}e&&e.appendChild(a)
a=a.nextSibling}const r=e.nextSibling
t.forEach(t=>{e.parentNode.insertBefore(t,r)})}
var Mt={id:"list-structure",test:function(e){const t=Ct(e)
const a=!e.previousElementSibling||!Ct(e.previousElementSibling)
return!(t&&a)},data:e=>{const t=e.textContent.match(zt)
return{orderedStart:t[1]?t[1]:null,formatAsList:false}},form:()=>[{label:ye("Format as a list"),checkbox:true,dataKey:"formatAsList"}],update:function(e,t){const a=e.parentNode
if(t.formatAsList){const r=Boolean(t.orderedStart)
const n=document.createElement(r?"ol":"ul")
if(r){n.setAttribute("type",t.orderedStart)
n.setAttribute("start",t.orderedStart)}let i=e
while(i){if(!Ct(i))break
const t=Boolean(i.textContent.match(zt)[1])
if(r!==t)break
Et(i)
const a=document.createElement("li")
n.appendChild(a)
Tt(i,a)
let o=i.nextElementSibling
i!==e&&i.parentNode.removeChild(i)
i=o
At(a)}a.replaceChild(n,e)
return n}return e},rootNode:function(e){return e.parentNode},message:()=>ye("Lists should be formatted as lists."),why:()=>ye("When markup is used that visually formats items as a list but does not indicate the list relationship, users may have difficulty in navigating the information."),link:"https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H48",linkText:()=>ye("Learn more about using lists")}
var Lt=[Ke,Ge,Ze,Ye,Je,tt,at,lt,gt,kt,xt,Mt]
const Pt=()=>{}
class Rt extends n.a.Component{constructor(){super(...arguments)
this.state={open:false,checking:false,errors:[],formState:{},formStateValid:false,errorIndex:0,config:{},showWhyPopover:false}
this.updateFormState=e=>{let t=e.target
const a=Object.assign({},this.state.formState)
"checkbox"===t.type?a[t.name]=t.checked:a[t.name]=t.value
this.setState({formState:a,formStateValid:this.formStateValid(a)})}}componentDidMount(){this.props.editor.on("Remove",e=>{this.setState({open:false})})}setConfig(e){this.setState({config:e})}check(e){"function"!==typeof e&&(e=Pt)
this.setState({open:true,checking:true,errors:[],errorIndex:0},()=>{"function"===typeof this.state.config.beforeCheck?this.state.config.beforeCheck(this.props.editor,()=>{this._check(()=>{"function"===typeof this.state.config.afterCheck?this.state.config.afterCheck(this.props.editor,e):e()})}):"function"===typeof this.state.config.afterCheck?this._check(()=>{this.state.config.afterCheck(this.props.editor,e)}):this._check(e)})}_check(e){const t=this.props.getBody()
const a=[]
t&&Re(t,e=>{const t=Lt.concat(this.props.additionalRules)
for(let r of t){if(e.hasAttribute("data-ignore-a11y-check"))continue
Promise.resolve(r.test(e,this.state.config)).then(t=>{t||a.push({node:e,rule:r})})}},()=>{this.setState({errorIndex:0,errors:a,checking:false},()=>{this.selectCurrent()
e()})})}firstError(){this.state.errors.length>0&&this.setErrorIndex(0)}nextError(){const e=(this.state.errorIndex+1)%this.state.errors.length
this.setErrorIndex(e)}prevError(){const e=this.state.errors.length
const t=(e+this.state.errorIndex-1)%e
this.setErrorIndex(t)}setErrorIndex(e){this.onLeaveError()
e>=this.state.errors.length&&(e=0)
this.setState({errorIndex:e},()=>this.selectCurrent())}selectCurrent(){Te()
const e=this.errorNode()
if(e){this.getFormState()
Ie(this.props.editor,e)}else this.firstError()}error(){return this.state.errors[this.state.errorIndex]}errorNode(){const e=this.error()
return e&&e.node}errorRootNode(){const e=this.errorRule()
const t=e&&e.rootNode&&e.rootNode(this.errorNode())
return t||this.errorNode()}updateErrorNode(e){const t=this.error()
t&&(t.node=e)}errorRule(){const e=this.error()
return e&&e.rule}errorMessage(){const e=this.errorRule()
return e&&e.message()}getFormState(){const e=this.errorRule()
const t=this.errorNode()
e&&t&&this.setState({formState:e.data(t),formStateValid:false})}formStateValid(e){e=e||this.state.formState
let t=this.tempNode(true)
const a=this.errorRule()
if(!t||!a)return false
t=a.update(t,e)
this._tempNode===this._tempTestNode&&(this._tempNode=t)
this._tempTestNode=t
return a.test(t)}fixIssue(){const e=this.errorRule()
let t=this.errorNode()
if(e&&t){this.removeTempNode()
e.update(t,this.state.formState)
this.updateErrorNode(t)
this._closeButtonRef&&this._closeButtonRef.focus()
const a=this.state.errorIndex
this.check(()=>this.setErrorIndex(a))}}newTempRootNode(e){const t=e.cloneNode(true)
const a=qe(e,this.errorNode())
this._tempTestNode=Be(t,a)
return t}tempNode(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
if(!this._tempNode||e){const t=this.errorRootNode()
if(t){const a=this.newTempRootNode(t)
if(e&&this._tempNode){const e=this._tempNode.parentNode
e.insertBefore(a,this._tempNode)
e.removeChild(this._tempNode)}else{const e=t.parentNode
e.insertBefore(a,t)
e.removeChild(t)}this._tempNode=a}}return this._tempTestNode}removeTempNode(){const e=this.errorRootNode()
if(this._tempNode&&e){const t=this._tempNode.parentNode
t.insertBefore(e,this._tempNode)
t.removeChild(this._tempNode)
this._tempNode=null
this._tempTestNode=null}}onLeaveError(){this.removeTempNode()}handleClose(){this.onLeaveError()
Te()
this.setState({open:false})}render(){const e=this.errorRule()
const t=ye("Issue { num }/{ total }",{num:this.state.errorIndex+1,total:this.state.errors.length})
return n.a.createElement(O,null,n.a.createElement(I["a"],{"data-mce-component":true,label:ye("Accessibility Checker"),open:this.state.open,onDismiss:()=>this.handleClose(),placement:"end",contentRef:e=>this.trayElement=e},n.a.createElement(P["a"],{placement:"start",offset:"x-small",onClick:()=>this.handleClose(),buttonRef:e=>this._closeButtonRef=e},ye("Close Accessibility Checker")),n.a.createElement(F["a"],{as:"div",padding:"x-large large"},n.a.createElement(q["a"],{level:"h3",as:"h2",margin:"medium 0"}," "+ye("Accessibility Checker")),this.state.errors.length>0&&n.a.createElement(F["a"],{as:"div"},n.a.createElement(M,{"aria-live":"polite",message:"\n                  ".concat(t,"\n                  ").concat(Oe(this.errorNode()),"\n                  ").concat(this.errorMessage(),"\n                ")}),n.a.createElement(F["a"],{as:"div",margin:"large 0 medium 0"},n.a.createElement(G["a"],{vAlign:"middle",hAlign:"space-between",colSpacing:"none"},n.a.createElement(Z["a"],null,n.a.createElement(X["a"],null,n.a.createElement(B["a"],{weight:"bold"},t)),n.a.createElement(X["a"],{width:"auto"},n.a.createElement(N["a"],{on:"click",show:this.state.showWhyPopover,shouldContainFocus:true,shouldReturnFocus:true},n.a.createElement(N["a"].Trigger,null,n.a.createElement(R["a"],{variant:"icon",icon:re,onDismiss:()=>{this.setState({showWhyPopover:false})},onClick:()=>this.setState({showWhyPopover:true})},n.a.createElement(L["a"],null,ye("Why")))),n.a.createElement(N["a"].Content,null,n.a.createElement(F["a"],{padding:"medium",display:"block",width:"16rem"},n.a.createElement(P["a"],{placement:"end",offset:"x-small",variant:"icon",onClick:()=>this.setState({showWhyPopover:false})},ye("Close")),n.a.createElement(B["a"],null,n.a.createElement("p",null,e.why()),n.a.createElement("p",null,e.link&&e.link.length&&n.a.createElement(ne["a"],{theme:{[D["a"].theme]:{textDecoration:"underline"}}},n.a.createElement(D["a"],{href:e.link,target:"_blank"},e.linkText()))))))))))),n.a.createElement("form",{onSubmit:_()(()=>this.fixIssue())},n.a.createElement(B["a"],{as:"div"},this.errorMessage()),e.form().map(e=>n.a.createElement(F["a"],{as:"div",key:e.dataKey,margin:"medium 0 0"},this.renderField(e))),n.a.createElement(F["a"],{as:"div",margin:"medium 0"},n.a.createElement(G["a"],{vAlign:"middle",hAlign:"space-between",colSpacing:"none"},n.a.createElement(Z["a"],null,n.a.createElement(X["a"],null,n.a.createElement(R["a"],{onClick:()=>this.prevError(),margin:"0 small 0 0","aria-label":"Previous"},ye("Prev")),n.a.createElement(R["a"],{onClick:()=>this.nextError()},ye("Next"))),n.a.createElement(X["a"],{width:"auto"},n.a.createElement(R["a"],{type:"submit",variant:"primary",disabled:!this.state.formStateValid},ye("Apply")))))))),0===this.state.errors.length&&!this.state.checking&&n.a.createElement(F["a"],null,n.a.createElement(B["a"],null,n.a.createElement("p",null,ye("No accessibility issues were detected."))),n.a.createElement(fe,null)),this.state.checking&&n.a.createElement("div",null,n.a.createElement(M,{message:ye("Checking for accessibility issues"),"aria-live":"polite"}),n.a.createElement(W["a"],{renderTitle:()=>ye("Checking for accessibility issues"),margin:"medium auto"})))))}renderField(e){const t=!!e.disabledIf&&e.disabledIf(this.state.formState)
switch(true){case!!e.options:return n.a.createElement(H["a"],{label:e.label,selectedOption:this.state.formState[e.dataKey]&&{value:this.state.formState[e.dataKey]},onChange:(t,a)=>{this.updateFormState({target:{name:e.dataKey,value:a.value}})},disabled:t},e.options.map(e=>n.a.createElement("option",{key:e[0],value:e[0]},e[1])))
case e.checkbox:return n.a.createElement(U["a"],{label:e.label,name:e.dataKey,checked:this.state.formState[e.dataKey],onChange:this.updateFormState,disabled:t})
case e.color:return n.a.createElement(he,{label:e.label,name:e.dataKey,value:this.state.formState[e.dataKey],onChange:this.updateFormState})
case e.textarea:return n.a.createElement(K["a"],{label:e.label,name:e.dataKey,value:this.state.formState[e.dataKey],onChange:this.updateFormState,disabled:t})
default:return n.a.createElement(V["a"],{label:e.label,name:e.dataKey,value:this.state.formState[e.dataKey],onChange:this.updateFormState,disabled:t})}}}Rt.defaultProps={additionalRules:[]}
let It
const Nt=[]
const Ft=document.createElement("div")
Ft.className="tinymce-a11y-checker-container"
document.body.appendChild(Ft)
tinymce.create("tinymce.plugins.AccessibilityChecker",{init:function(e){e.addCommand("openAccessibilityChecker",(function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r]
o.a.render(n.a.createElement(Rt,{getBody:e.getBody.bind(e),editor:e}),Ft,(function(){It=this
Nt.forEach(e=>e(It))
It.check(...a)}))}))
"4"===tinymce.majorVersion?e.addButton("check_a11y",{title:ye("Check Accessibility"),cmd:"openAccessibilityChecker",icon:"a11y"}):e.ui.registry.addButton("check_a11y",{title:ye("Check Accessibility"),onAction:t=>e.execCommand("openAccessibilityChecker"),icon:"a11y"})}})
tinymce.PluginManager.add("a11y_checker",tinymce.plugins.AccessibilityChecker)
function qt(e){if(null!=It)return e(It)
Nt.push(e)}function Bt(e){const t=ye.setup()
t.locale=e
ye.setup(t)}var Dt=a("DSFK")
var Wt=a("25BE")
var Ht=a("BsWD")
var Ut=a("PYwp")
function Kt(e){return Object(Dt["a"])(e)||Object(Wt["a"])(e)||Object(Ht["a"])(e)||Object(Ut["a"])()}const Vt=()=>{}
function Gt(e={},t=Vt){const a=Array.from(e.dom.doc.styleSheets),r=Kt(a),n=(r[0],r.slice(1))
const i=window.ENV.url_for_high_contrast_tinymce_editor_css
n.forEach(e=>e.disabled=true)
let o=0
const s=()=>{o++}
const _=()=>{o===i.length?t():setTimeout(_,100)}
i.forEach(t=>{e.dom.styleSheetLoader.load(t,s)})
_()}function Zt(e={},t=Vt){Array.from(e.dom.doc.styleSheets).forEach(e=>{window.ENV.url_for_high_contrast_tinymce_editor_css.includes(e.href)?e.ownerNode.parentElement.removeChild(e.ownerNode):e.disabled=false})
t()}qt(e=>e.setConfig({beforeCheck:Gt,afterCheck:Zt}))
if(ENV&&ENV.LOCALE){let e=ENV.LOCALE
"zh-Hant"===e&&(e="zh-HK")
Bt(e)}},xEkU:function(e,t,a){(function(t){var r=a("bQgK"),n="undefined"===typeof window?t:window,i=["moz","webkit"],o="AnimationFrame",s=n["request"+o],_=n["cancel"+o]||n["cancelRequest"+o]
for(var l=0;!s&&l<i.length;l++){s=n[i[l]+"Request"+o]
_=n[i[l]+"Cancel"+o]||n[i[l]+"CancelRequest"+o]}if(!s||!_){var c=0,d=0,u=[],h=1e3/60
s=function(e){if(0===u.length){var t=r(),a=Math.max(0,h-(t-c))
c=a+t
setTimeout((function(){var e=u.slice(0)
u.length=0
for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(a))}u.push({handle:++d,callback:e,cancelled:false})
return d}
_=function(e){for(var t=0;t<u.length;t++)u[t].handle===e&&(u[t].cancelled=true)}}e.exports=function(e){return s.call(n,e)}
e.exports.cancel=function(){_.apply(n,arguments)}
e.exports.polyfill=function(e){e||(e=n)
e.requestAnimationFrame=s
e.cancelAnimationFrame=_}}).call(this,a("yLpj"))},xkGU:function(e,t,a){e.exports=a("bNQv")},yOY4:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.Alpha=void 0
var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}
var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a]
r.enumerable=r.enumerable||false
r.configurable=true
"value"in r&&(r.writable=true)
Object.defineProperty(e,r.key,r)}}return function(t,a,r){a&&e(t.prototype,a)
r&&e(t,r)
return t}}()
var i=a("q1tI")
var o=f(i)
var s=a("/FUP")
var _=f(s)
var l=a("THLb")
var c=h(l)
var d=a("Nq3d")
var u=f(d)
function h(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])
t.default=e
return t}function f(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var g=t.Alpha=function(e){p(t,e)
function t(){var e
var a,r,n
b(this,t)
for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s]
return n=(a=(r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r),r.handleChange=function(e){var t=c.calculateChange(e,r.props.hsl,r.props.direction,r.props.a,r.container)
t&&"function"===typeof r.props.onChange&&r.props.onChange(t,e)},r.handleMouseDown=function(e){r.handleChange(e)
window.addEventListener("mousemove",r.handleChange)
window.addEventListener("mouseup",r.handleMouseUp)},r.handleMouseUp=function(){r.unbindEventListeners()},r.unbindEventListeners=function(){window.removeEventListener("mousemove",r.handleChange)
window.removeEventListener("mouseup",r.handleMouseUp)},a),m(r,n)}n(t,[{key:"componentWillUnmount",value:function(){this.unbindEventListeners()}},{key:"render",value:function(){var e=this
var t=this.props.rgb
var a=(0,_.default)({default:{alpha:{absolute:"0px 0px 0px 0px",borderRadius:this.props.radius},checkboard:{absolute:"0px 0px 0px 0px",overflow:"hidden",borderRadius:this.props.radius},gradient:{absolute:"0px 0px 0px 0px",background:"linear-gradient(to right, rgba("+t.r+","+t.g+","+t.b+", 0) 0%,\n           rgba("+t.r+","+t.g+","+t.b+", 1) 100%)",boxShadow:this.props.shadow,borderRadius:this.props.radius},container:{position:"relative",height:"100%",margin:"0 3px"},pointer:{position:"absolute",left:100*t.a+"%"},slider:{width:"4px",borderRadius:"1px",height:"8px",boxShadow:"0 0 2px rgba(0, 0, 0, .6)",background:"#fff",marginTop:"1px",transform:"translateX(-2px)"}},vertical:{gradient:{background:"linear-gradient(to bottom, rgba("+t.r+","+t.g+","+t.b+", 0) 0%,\n           rgba("+t.r+","+t.g+","+t.b+", 1) 100%)"},pointer:{left:0,top:100*t.a+"%"}},overwrite:r({},this.props.style)},{vertical:"vertical"===this.props.direction,overwrite:true})
return o.default.createElement("div",{style:a.alpha},o.default.createElement("div",{style:a.checkboard},o.default.createElement(u.default,{renderers:this.props.renderers})),o.default.createElement("div",{style:a.gradient}),o.default.createElement("div",{style:a.container,ref:function(t){return e.container=t},onMouseDown:this.handleMouseDown,onTouchMove:this.handleChange,onTouchStart:this.handleChange},o.default.createElement("div",{style:a.pointer},this.props.pointer?o.default.createElement(this.props.pointer,this.props):o.default.createElement("div",{style:a.slider}))))}}])
return t}(i.PureComponent||i.Component)
t.default=g},zpiH:function(e,t,a){"use strict"
a.d(t,"a",(function(){return F}))
var r=a("Ff2n")
var n=a("vuIU")
var i=a("1OyB")
var o=a("Ji7U")
var s=a("LK+K")
var _=a("q1tI")
var l=a.n(_)
var c=a("17x9")
var d=a.n(c)
var u=a("UCAh")
var h=a("jsCG")
var f=a("FOOe")
var b=a("dpqJ")
var m=a("cClk")
var p=a("AdN2")
var g=a("lzgt")
var v=a("nAyT")
var k=a("J2CL")
var y=a("oXx0")
var w,x,j,O,S,z,C,A,T,E,M,L,P,R
var I=(w=Object(y["a"])(),w(x=(O=j=function(e){Object(o["a"])(a,e)
var t=Object(s["a"])(a)
function a(){Object(i["a"])(this,a)
return t.apply(this,arguments)}return a}(g["a"]),j.displayName="PopoverTrigger",O))||x)
var N=(S=Object(y["a"])(),S(z=(A=C=function(e){Object(o["a"])(a,e)
var t=Object(s["a"])(a)
function a(){Object(i["a"])(this,a)
return t.apply(this,arguments)}return a}(g["a"]),C.displayName="PopoverContent",A))||z)
var F=(T=Object(v["a"])("7.0.0",null,"Use Popover from ui-popover instead."),E=Object(y["a"])(),M=Object(f["a"])(),T(L=E(L=M(L=(R=P=function(e){Object(o["a"])(a,e)
var t=Object(s["a"])(a)
function a(){var e
Object(i["a"])(this,a)
for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o]
e=t.call.apply(t,[this].concat(n))
e.show=function(t){e._popover&&e._popover.show(t)}
e.hide=function(t,a){e._popover&&e._popover.hide(t,a)}
e.toggle=function(t){e._popover&&e._popover.toggle(t)}
return e}Object(n["a"])(a,[{key:"render",value:function(){var e=this
var t=this.props,n=t.show,i=t.defaultShow,o=t.label,s=t.variant,_=t.alignArrow,c=t.trackPosition,d=t.onShow,u=t.onDismiss,f=t.onToggle,b=t.children,m=Object(r["a"])(t,["show","defaultShow","label","variant","alignArrow","trackPosition","onShow","onDismiss","onToggle","children"])
var p=g["a"].pick(a.Trigger,b)
var v=g["a"].pick(a.Content,b)
return l.a.createElement(h["a"],Object.assign({},m,{isShowingContent:n,defaultIsShowingContent:i,screenReaderLabel:o,color:"inverse"===s?"primary-inverse":"primary",shouldAlignArrow:_,shouldTrackPosition:c,onShowContent:function(){f(true)},onHideContent:function(e,t){var a=t.documentClick
u(e,a)
f(false)},onPositioned:d,ref:function(t){return e._popover=t},renderTrigger:p,__dangerouslyIgnoreExperimentalWarnings:true}),v)}},{key:"placement",get:function(){return this._popover&&this._popover.placement}},{key:"shown",get:function(){return this._popover&&this._popover.shown}},{key:"defaultFocusElement",get:function(){return this._popover&&this._popover.defaultFocusElement}}])
a.displayName="Popover"
return a}(_["Component"]),P.Trigger=I,P.Content=N,P.propTypes={children:b["a"].oneOf([I,N]),placement:u["a"].placement,on:d.a.oneOfType([d.a.oneOf(["click","hover","focus"]),d.a.arrayOf(d.a.oneOf(["click","hover","focus"]))]),variant:d.a.oneOf(["default","inverse"]),shadow:k["c"].shadow,stacking:k["c"].stacking,defaultShow:d.a.bool,show:Object(m["a"])(d.a.bool,"onToggle","defaultShow"),contentRef:d.a.func,onToggle:d.a.func,onClick:d.a.func,onFocus:d.a.func,onBlur:d.a.func,onKeyDown:d.a.func,onShow:d.a.func,onMouseOver:d.a.func,onMouseOut:d.a.func,onDismiss:d.a.func,withArrow:d.a.bool,label:d.a.string,defaultFocusElement:d.a.oneOfType([d.a.element,d.a.func]),shouldRenderOffscreen:d.a.bool,shouldContainFocus:d.a.bool,shouldReturnFocus:d.a.bool,shouldCloseOnDocumentClick:d.a.bool,shouldCloseOnEscape:d.a.bool,offsetX:d.a.oneOfType([d.a.string,d.a.number]),offsetY:d.a.oneOfType([d.a.string,d.a.number]),onPositionChanged:d.a.func,onPositioned:d.a.func,trackPosition:d.a.bool,constrain:u["a"].constrain,mountNode:u["a"].mountNode,insertAt:d.a.oneOf(["bottom","top"]),liveRegion:d.a.oneOfType([d.a.arrayOf(d.a.element),d.a.element,d.a.func]),positionTarget:d.a.oneOfType([p["a"],d.a.func]),alignArrow:d.a.bool,id:d.a.string,shouldFocusContentOnTriggerBlur:d.a.bool},P.defaultProps={children:null,onToggle:function(e){},onClick:function(e){},onFocus:function(e){},onBlur:function(e){},onMouseOver:function(e){},onMouseOut:function(e){},onShow:function(e){},onDismiss:function(e,t){},placement:"bottom center",stacking:"topmost",shadow:"resting",offsetX:0,offsetY:0,variant:"default",on:["hover","focus"],contentRef:function(e){},defaultShow:false,withArrow:true,trackPosition:true,constrain:"window",onPositioned:function(e){},onPositionChanged:function(e){},shouldRenderOffscreen:false,shouldContainFocus:false,shouldReturnFocus:true,shouldCloseOnDocumentClick:true,shouldFocusContentOnTriggerBlur:false,shouldCloseOnEscape:true,defaultFocusElement:null,label:null,mountNode:null,insertAt:"bottom",liveRegion:null,positionTarget:null,alignArrow:false,id:void 0,show:void 0,closeButtonRef:void 0,closeButtonLabel:void 0,onKeyDown:void 0},R))||L)||L)||L)}}])

//# sourceMappingURL=126-c-2b9538109b.js.map