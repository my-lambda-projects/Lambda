(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[3],{"3Zzb":function(e,t,n){"use strict"
n.d(t,"a",(function(){return w}))
var o=n("1OyB")
var i=n("vuIU")
var r=n("Ji7U")
var a=n("LK+K")
var s=n("q1tI")
var u=n.n(s)
var c=n("17x9")
var l=n.n(c)
var f=n("i8i4")
var h=n.n(f)
var d=n("AdN2")
var p=n("VTBJ")
var v=n("Ff2n")
var m=n("jtGx")
var b=n("FOOe")
var y,O,_,g
var E=(y=Object(b["a"])(),y(O=(g=_=function(e){Object(r["a"])(n,e)
var t=Object(a["a"])(n)
function n(e){var i
Object(o["a"])(this,n)
i=t.call(this,e)
i.state={mountNode:i.findMountNode(e)}
return i}Object(i["a"])(n,[{key:"componentDidMount",value:function(){this.props.open&&"function"===typeof this.props.onOpen&&this.props.onOpen(this.DOMNode)}},{key:"componentDidUpdate",value:function(e){var t=this.findMountNode(this.props)
t!==this.state.mountNode&&this.setState({mountNode:t})
this.props.open&&!e.open&&"function"===typeof this.props.onOpen&&this.props.onOpen(this.DOMNode)
!this.props.open&&e.open&&"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"componentWillUnmount",value:function(){this.removeNode()
this.props.open&&"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"render",value:function(){var e=this.props.children
return this.props.open&&u.a.Children.count(e)>0?h.a.createPortal(e,this.insertNode()):null}},{key:"removeNode",value:function(){if(this.DOMNode&&this.DOMNode.parentNode&&"function"===typeof this.DOMNode.parentNode.removeChild){this.DOMNode.parentNode.removeChild(this.DOMNode)
this.DOMNode=null
this.props.elementRef(this.DOMNode)}}},{key:"insertNode",value:function(){var e=this.props,t=(e.open,e.insertAt),n=(e.onOpen,e.onClose,e.mountNode,e.children,e.elementRef),o=Object(v["a"])(e,["open","insertAt","onOpen","onClose","mountNode","children","elementRef"])
if(!this.DOMNode){var i=document.createElement("span")
var r=Object(p["a"])({},Object(m["b"])(o),{dir:this.dir})
Object.keys(r).forEach((function(e){i.setAttribute(e,r[e])}))
n(i)
this.DOMNode=i}this.DOMNode.parentNode!==this.state.mountNode&&("bottom"===t?this.state.mountNode.appendChild(this.DOMNode):this.state.mountNode.insertBefore(this.DOMNode,this.state.mountNode.firstChild))
return this.DOMNode}},{key:"findMountNode",value:function(e){var t
"function"===typeof e.mountNode?t=e.mountNode():e.mountNode&&(t=e.mountNode)
t&&t.nodeName||(t=document.body)
return t}},{key:"node",get:function(){return this.DOMNode}}])
n.displayName="ReactPortal"
return n}(u.a.Component),_.propTypes={open:l.a.bool,onOpen:l.a.func,onClose:l.a.func,mountNode:l.a.oneOfType([d["a"],l.a.func]),insertAt:l.a.oneOf(["bottom","top"]),children:l.a.node,elementRef:l.a.func},_.defaultProps={open:false,insertAt:"bottom",onOpen:function(e){},onClose:function(){},mountNode:void 0,children:null,elementRef:function(e){}},g))||O)
var k=n("0mOT")
var N,D,C,j
var R=(N=Object(b["a"])(),N(D=(j=C=function(e){Object(r["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(i["a"])(n,[{key:"componentDidMount",value:function(){this.renderPortal(this.props)}},{key:"shouldComponentUpdate",value:function(e,t){return!(Object(k["a"])(this.props,e)&&Object(k["a"])(this.state,t))}},{key:"componentWillReceiveProps",value:function(e){this.renderPortal(e)}},{key:"componentWillUnmount",value:function(){this.removePortal(this.props)}},{key:"render",value:function(){return null}},{key:"renderPortal",value:function(e){var t=this
var n=e.open,o=e.insertAt,i=e.onOpen,r=(e.onClose,e.elementRef),a=e.children,s=Object(v["a"])(e,["open","insertAt","onOpen","onClose","elementRef","children"])
var c=!this.DOMNode
var l=this.mountNode
var f=a
"string"===typeof f&&f.length>0&&(f=u.a.createElement("span",null,f))
if(n&&u.a.Children.count(f)>0){if(!this.DOMNode){var d=document.createElement("span")
var b=Object(p["a"])({},Object(m["b"])(s),{dir:this.dir})
Object.keys(b).forEach((function(e){d.setAttribute(e,b[e])}))
r(d)
this.DOMNode=d}this.DOMNode.parentNode!==l&&("bottom"===o?l.appendChild(this.DOMNode):l.insertBefore(this.DOMNode,l.firstChild))
var y=function(){(c||!t.props.open&&n)&&"function"===typeof i&&i(t.DOMNode)}
h.a.unstable_renderSubtreeIntoContainer(this,f,this.DOMNode,y)}else this.removePortal(e)}},{key:"removePortal",value:function(e){var t
if(this.DOMNode){t=h.a.unmountComponentAtNode(this.DOMNode)
this.DOMNode.parentNode&&this.DOMNode.parentNode.removeChild(this.DOMNode)
this.DOMNode=null
this.props.elementRef(this.DOMNode)}t&&"function"===typeof e.onClose&&e.onClose()}},{key:"mountNode",get:function(){var e
"function"===typeof this.props.mountNode?e=this.props.mountNode():this.props.mountNode&&(e=this.props.mountNode)
e&&e.nodeName||(e=document.body)
return e}},{key:"DOMNode",get:function(){return this._node},set:function(e){this._node=e}},{key:"node",get:function(){return this.DOMNode}}])
n.displayName="SubtreePortal"
return n}(s["Component"]),C.propTypes={open:l.a.bool,onOpen:l.a.func,onClose:l.a.func,mountNode:l.a.oneOfType([d["a"],l.a.func]),insertAt:l.a.oneOf(["bottom","top"]),children:l.a.node,elementRef:l.a.func},C.defaultProps={open:false,insertAt:"bottom",onOpen:function(e){},onClose:function(){},mountNode:null,children:null,elementRef:function(e){}},j))||D)
var F="function"===typeof h.a.createPortal
var w=function(e){Object(r["a"])(n,e)
var t=Object(a["a"])(n)
function n(){var e
Object(o["a"])(this,n)
for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a]
e=t.call.apply(t,[this].concat(r))
e.handleElementRef=function(t){if(t){e.DOMNode=t
"function"===typeof e.props.elementRef&&e.props.elementRef(t)}}
return e}Object(i["a"])(n,[{key:"render",value:function(){return F?u.a.createElement(E,Object.assign({},this.props,{elementRef:this.handleElementRef})):u.a.createElement(R,Object.assign({},this.props,{elementRef:this.handleElementRef}))}}])
n.displayName="Portal"
return n}(s["Component"])
w.propTypes={open:l.a.bool,onOpen:l.a.func,onClose:l.a.func,mountNode:l.a.oneOfType([d["a"],l.a.func]),insertAt:l.a.oneOf(["bottom","top"]),children:l.a.node,elementRef:l.a.func}
w.defaultProps={open:false,insertAt:"bottom",onOpen:function(e){},onClose:function(){},mountNode:null,children:null,elementRef:function(e){}}},AdN2:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var o=n("17x9")
var i=n.n(o)
var r=!!("undefined"!==typeof window&&window.document&&window.document.createElement)
var a=r?i.a.oneOfType([i.a.element,i.a.instanceOf(Element)]):i.a.element},EgqM:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var o=n("QF4Q")
var i=n("i/8D")
function r(e,t){var n=Object(o["a"])(e)
var i=Object(o["a"])(t)
return!(!n||!i)&&(n.contains?n.contains(i):n.compareDocumentPosition?n===i||!!(16&n.compareDocumentPosition(i)):a(n,i))}function a(e,t){var n=t
while(n){if(n===e)return true
n=n.parentNode}return false}var s=i["a"]?r:a},ISHz:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var o=n("i/8D")
var i=function(){var e
if(o["a"]&&window.requestAnimationFrame&&window.cancelAnimationFrame)e=function(e){var t=window.requestAnimationFrame(e)
return{cancel:function(){return window.cancelAnimationFrame(t)}}}
else{var t=(new Date).getTime()
e=function(e){var n=(new Date).getTime()
var o=Math.max(0,16-(n-t))
var i=setTimeout(e,o)
t=n
return{cancel:function(){return clearTimeout(i)}}}}return e}()},"K7t/":function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var o=n("QF4Q")
var i=n("EgqM")
var r=n("pgSO")
function a(e){var t=e&&Object(o["a"])(e)
var n=Object(r["a"])()
return t&&(n===t||Object(i["a"])(t,n))}},MicT:function(e,t,n){"use strict"
n.d(t,"a",(function(){return _}))
var o=n("VTBJ")
var i=n("Ff2n")
var r=n("1OyB")
var a=n("vuIU")
var s=n("Ji7U")
var u=n("LK+K")
n("DEX3")
var c=n("q1tI")
var l=n.n(c)
var f=n("17x9")
var h=n.n(f)
var d=n("KgFQ")
var p=n("jtGx")
var v=n("ISHz")
var m=n("QF4Q")
var b=n("lxKu")
var y=[]
var O=function e(){Object(r["a"])(this,e)}
O.focusRegion=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var n
n="string"===typeof t?O.getEntry(e,t):O.addEntry(e,t)
if(n&&n.region&&"function"===typeof n.region.focus){n.region.focus()
return n.region}"[FocusRegionManager] Could not focus region with element: ".concat(e)}
O.activateRegion=function(e,t){var n=O.addEntry(e,t),o=n.region
return o}
O.getActiveEntry=function(){return y.find((function(e){var t=e.region
return t.focused}))}
O.findEntry=function(e,t){var n
n=t?y.findIndex((function(e){return e.id===t})):y.findIndex((function(t){return t.element===e}))
return n}
O.getEntry=function(e,t){return y[O.findEntry(e,t)]}
O.addEntry=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var n=new b["a"](e,t)
var o=O.getActiveEntry()
var i=n.keyboardFocusable
y.forEach((function(e){var t=e.region
t&&t.deactivate(t.focused&&!i&&{keyboard:false})}))
n.activate()
t.shouldFocusOnOpen&&n.focus()
var r={id:n.id,element:e,region:n,children:[],parent:o}
y.push(r)
o&&o.children.push(r)
return r}
O.removeEntry=function(e,t){var n=O.findEntry(e,t)
var o=y[n]
n>-1&&y.splice(n,1)
return o}
O.isFocused=function(e,t){var n=O.getActiveEntry()
return t?n&&n.region&&n.id===t:n&&n.region&&n.element===e}
O.clearEntries=function(){y=[]}
O.blurRegion=function(e,t){var n=O.removeEntry(e,t)
if(n){var o=n.children,i=n.region,r=n.parent
i&&i.deactivate()
o&&o.forEach((function(e){var t=e.id,n=e.element
var o=O.removeEntry(n,t)
o&&o.region&&o.region.deactivate()}))
r&&r.region&&r.region.activate()
i&&i.blur()}}
var _=function(e){Object(s["a"])(n,e)
var t=Object(u["a"])(n)
function n(){var e
Object(r["a"])(this,n)
for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a]
e=t.call.apply(t,[this].concat(i))
e._raf=[]
e._focusRegion=null
e.getRef=function(t){e._root=t}
return e}Object(a["a"])(n,[{key:"componentDidMount",value:function(){this.props.open&&this.open()}},{key:"componentDidUpdate",value:function(e){var t=this.props.open
t&&!e.open?this.open():!t&&e.open&&this.close()
this._focusRegion&&this._focusRegion.updateElement(this.contentElement)}},{key:"componentWillUnmount",value:function(){this.props.open&&this.close()
this._raf.forEach((function(e){return e.cancel()}))
this._raf=[]}},{key:"open",value:function(){var e=this
var t=this.props,n=(t.open,t.contentElement,Object(i["a"])(t,["open","contentElement"]))
this._raf.push(Object(v["a"])((function(){e._focusRegion=O.activateRegion(e.contentElement,Object(o["a"])({},n))})))}},{key:"close",value:function(){this._focusRegion&&O.blurRegion(this.contentElement,this._focusRegion.id)}},{key:"focus",value:function(){if(!this.props.open||!this.contentElement)return
this._focusRegion&&O.focusRegion(this.contentElement,this._focusRegion.id)}},{key:"blur",value:function(){if(!this.props.open||!this.contentElement)return
this.close()}},{key:"render",value:function(){var e=Object(d["a"])(n,this.props)
return this.props.open?l.a.createElement(e,Object.assign({},Object(p["a"])(this.props,n.propTypes),{ref:this.getRef,role:this.props.label?"dialog":null,"aria-label":this.props.label,className:this.props.className}),this.props.children):null}},{key:"contentElement",get:function(){var e=Object(m["a"])(this.props.contentElement)
e||(e=Object(m["a"])(this._root))
return e}},{key:"focused",get:function(){return this.contentElement&&this._focusRegion&&O.isFocused(this.contentElement,this._focusRegion.id)}}])
n.displayName="Dialog"
return n}(c["Component"])
_.propTypes={children:h.a.node,as:h.a.elementType,display:h.a.oneOf(["auto","block","inline-block"]),label:h.a.string,open:h.a.bool,onBlur:h.a.func,onDismiss:h.a.func,defaultFocusElement:h.a.oneOfType([h.a.element,h.a.func]),contentElement:h.a.oneOfType([h.a.element,h.a.func]),liveRegion:h.a.oneOfType([h.a.arrayOf(h.a.element),h.a.element,h.a.func]),shouldContainFocus:h.a.oneOfType([h.a.bool,h.a.oneOf(["keyboard","screenreader"])]),shouldReturnFocus:h.a.bool,shouldCloseOnDocumentClick:h.a.bool,shouldCloseOnEscape:h.a.bool,shouldFocusOnOpen:h.a.bool}
_.defaultProps={children:null,display:void 0,label:void 0,open:false,shouldFocusOnOpen:true,shouldContainFocus:false,shouldReturnFocus:false,shouldCloseOnDocumentClick:true,shouldCloseOnEscape:true,defaultFocusElement:null,contentElement:null,liveRegion:null,onBlur:function(e){},onDismiss:function(e){}}},lxKu:function(e,t,n){"use strict"
n.d(t,"a",(function(){return k}))
var o=n("1OyB")
var i=n("vuIU")
n("DEX3")
var r=n("3zPy")
var a=n.n(r)
var s=n("EgqM")
var u=n("DUTp")
var c=n("yfCu")
function l(e){try{return e.contentDocument||e.contentWindow.document}catch(e){return null}}var f=n("no2R")
var h=n("BTe1")
var d=function(){function e(t){var n=this
var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shouldContainFocus:true,liveRegion:[]}
Object(o["a"])(this,e)
this._observer=null
this._attributes=[]
this._nodes=[]
this._parents=[]
this.handleDOMMutation=function(e){e.forEach((function(e){var t=Array.from(e.addedNodes)
var o=Array.from(e.removedNodes)
n.hideNodes(t)
o.forEach((function(e){"iframe"!==e.tagName.toLowerCase()&&n.restoreNode(e)
var t=n.parseIframeBodies(e)
t.forEach((function(e){n.restoreNode(e)}))}))}))}
var r="function"===typeof i.liveRegion?i.liveRegion():i.liveRegion
this._liveRegion=Array.isArray(r)?r:[r]
this._contextElement=t
this._options=i}Object(i["a"])(e,[{key:"updateElement",value:function(e){this._contextElement=e}},{key:"muteNode",value:function(e){var t=this
if(e&&"script"!==e.tagName.toLowerCase()){["role","aria-label","aria-hidden"].forEach((function(n){var o=e.getAttribute(n)
if(null!==o){t._attributes.push([e,n,o])
e.removeAttribute(n)}}))
this._observer.observe(e,{childList:true})}}},{key:"hideNodes",value:function(e){var t=this
e.forEach((function(e){if(e&&1===e.nodeType&&"script"!==e.tagName.toLowerCase()&&-1===t._parents.indexOf(e)&&-1===t._nodes.indexOf(e)&&-1===t._liveRegion.indexOf(e)&&!t._contextElement.contains(e)){"iframe"!==e.tagName.toLowerCase()&&t.hideNode(e)
var n=t.parseIframeBodies(e)
n.forEach((function(e){t.hideNode(e)}))}}))}},{key:"hideNode",value:function(e){if("true"!==e.getAttribute("aria-hidden")){e.setAttribute("aria-hidden","true")
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
var p=n("ISHz")
var v=n("K7t/")
var m=n("QF4Q")
var b=n("kR0I")
var y=n("gpCx")
var O=n("pgSO")
var _=n("/UXv")
function g(e,t,n){var o=Object(m["a"])(e)
var i=Object(f["a"])(o)
if(!i.length){t.preventDefault()
return}if(Object(v["a"])(e)){var r=Object(O["a"])();-1===i.indexOf(r)&&i.push(r)}var a=i[t.shiftKey?0:i.length-1]
var s=Object(_["a"])(a)||Object(_["a"])(o)||!Object(v["a"])(e)
if(!s)return
if("function"===typeof n){n()
return}t.preventDefault()
var u=i[t.shiftKey?i.length-1:0]
u.focus()}var E=function(){function e(t,n){var i=this
Object(o["a"])(this,e)
this._contextElement=null
this._focusLaterElement=null
this._needToFocus=false
this._listeners=[]
this._raf=[]
this._active=false
this.handleDismiss=function(e){i._options.onDismiss(e)}
this.handleKeyDown=function(e){e.keyCode===a.a.codes.tab&&g(i._contextElement,e)}
this.handleClick=function(e){i._wasDocumentClick=true}
this.handleWindowBlur=function(e){if(i._wasDocumentClick){i._wasDocumentClick=false
return}i._needToFocus=true}
this.handleFocus=function(e){if(i._needToFocus){i._needToFocus=false
if(!i._contextElement)return
i._raf.push(Object(p["a"])((function(){if(Object(v["a"])(i._contextElement))return
i.focusDefaultElement()})))}}
this.handleFirstTabbableKeyDown=function(e){e.keyCode===a.a.codes.tab&&e.shiftKey&&i._options.onBlur(e)}
this.handleLastTabbableKeyDown=function(e){e.keyCode!==a.a.codes.tab||e.shiftKey||i._options.onBlur(e)}
this._contextElement=Object(m["a"])(t)
this._options=n||{shouldContainFocus:true,shouldReturnFocus:true,onBlur:function(e){},onDismiss:function(e){},defaultFocusElement:null}
this._options.shouldReturnFocus&&(this._focusLaterElement=this.activeElement)}Object(i["a"])(e,[{key:"updateElement",value:function(e){this._contextElement=Object(m["a"])(e)}},{key:"focusDefaultElement",value:function(){var e=this.defaultFocusElement,t=this.shouldContainFocus
e?e.focus():t&&this.activeElement.blur()}},{key:"focus",value:function(){var e=this
if(this.focused)return
this._raf.push(Object(p["a"])((function(){e.focusDefaultElement()})))}},{key:"blur",value:function(){if(this._options.shouldReturnFocus&&this._focusLaterElement){try{this._focusLaterElement.focus()}catch(e){"\n          [KeyboardFocusRegion] You tried to return focus to ".concat(this._focusLaterElement,"\n          but it is not in the DOM anymore: ").concat(e,"\n          ")}this._focusLaterElement=null}}},{key:"activate",value:function(){var e=this.defaultFocusElement,t=this.shouldContainFocus
if(!this._active&&(e||t)){if(t)this._listeners.push(Object(c["a"])(this.doc,"keydown",this.handleKeyDown))
else{this._listeners.push(Object(c["a"])(this.firstTabbable||e,"keydown",this.handleFirstTabbableKeyDown))
this._listeners.push(Object(c["a"])(this.lastTabbable||e,"keydown",this.handleLastTabbableKeyDown))}this._listeners.push(Object(c["a"])(this.doc,"click",this.handleClick,true))
this._listeners.push(Object(c["a"])(this.win,"blur",this.handleWindowBlur,false))
this._listeners.push(Object(c["a"])(this.doc,"focus",this.handleFocus,true))
this._active=true}}},{key:"deactivate",value:function(){if(this._active){this._listeners.forEach((function(e){e.remove()}))
this._listeners=[]
this._raf.forEach((function(e){return e.cancel()}))
this._raf=[]
this._preventCloseOnDocumentClick=false
this._active=false}}},{key:"focused",get:function(){return Object(v["a"])(this._contextElement)}},{key:"shouldContainFocus",get:function(){var e=this._options.shouldContainFocus
return true===e||Array.isArray(e)&&e.includes["keyboard"]}},{key:"focusable",get:function(){return Object(b["a"])(this._contextElement,(function(){return true}),true)||[]}},{key:"tabbable",get:function(){return Object(f["a"])(this._contextElement)||[]}},{key:"firstTabbable",get:function(){return this.tabbable[0]}},{key:"lastTabbable",get:function(){return this.tabbable.pop()}},{key:"firstFocusable",get:function(){return this.focusable[0]}},{key:"lastFocusable",get:function(){return this.focusable.pop()}},{key:"doc",get:function(){return Object(u["a"])(this._contextElement)}},{key:"win",get:function(){return Object(y["a"])(this._contextElement)}},{key:"activeElement",get:function(){return Object(O["a"])(this.doc)}},{key:"defaultFocusElement",get:function(){var e=this._options.defaultFocusElement
var t=Object(m["a"])("function"===typeof e?e():e)
if(t&&this._contextElement&&this._contextElement.contains(t))return t
var n=this.firstTabbable
if(n)return n
if(this.focusable.includes(this._contextElement))return this._contextElement
return null}}])
return e}()
var k=function(){function e(t,n){var i=this
Object(o["a"])(this,e)
this._contextElement=null
this._preventCloseOnDocumentClick=false
this._listeners=[]
this._active=false
this.handleDismiss=function(e,t){i._options.onDismiss(e,t)}
this.captureDocumentClick=function(e){var t=e.target
i._preventCloseOnDocumentClick=0!==e.button||Object(s["a"])(i._contextElement,t)}
this.handleDocumentClick=function(e){i._options.shouldCloseOnDocumentClick&&!i._preventCloseOnDocumentClick&&i.handleDismiss(e,true)}
this.handleFrameClick=function(e,t){Object(s["a"])(i._contextElement,t)||i.handleDismiss(e,true)}
this.handleKeyUp=function(e){i._options.shouldCloseOnEscape&&e.keyCode===a.a.codes.escape&&!e.defaultPrevented&&i.handleDismiss(e)}
this._options=n||{shouldCloseOnDocumentClick:true,shouldCloseOnEscape:true,onDismiss:function(e){}}
this._contextElement=t
this._screenReaderFocusRegion=new d(t,n)
this._keyboardFocusRegion=new E(t,n)
this._id=Object(h["a"])()}Object(i["a"])(e,[{key:"updateElement",value:function(e){this._contextElement=e
this._keyboardFocusRegion&&this._keyboardFocusRegion.updateElement(e)
this._screenReaderFocusRegion&&this._screenReaderFocusRegion.updateElement(e)}},{key:"activate",value:function(){var e=this
if(!this._active){var t=Object(u["a"])(this._contextElement)
this._keyboardFocusRegion.activate()
this._screenReaderFocusRegion.activate()
if(this._options.shouldCloseOnDocumentClick){this._listeners.push(Object(c["a"])(t,"click",this.captureDocumentClick,true))
this._listeners.push(Object(c["a"])(t,"click",this.handleDocumentClick))
Array.from(t.getElementsByTagName("iframe")).forEach((function(t){var n=l(t)
n&&e._listeners.push(Object(c["a"])(n,"mouseup",(function(n){e.handleFrameClick(n,t)})))}))}this._options.shouldCloseOnEscape&&this._listeners.push(Object(c["a"])(t,"keyup",this.handleKeyUp))
this._active=true}}},{key:"deactivate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.keyboard,n=void 0===t||t
if(this._active){this._listeners.forEach((function(e){e.remove()}))
this._listeners=[]
n&&this._keyboardFocusRegion.deactivate()
this._screenReaderFocusRegion.deactivate()
this._active=false}}},{key:"focus",value:function(){this._active
this._keyboardFocusRegion.focus()}},{key:"blur",value:function(){this._active
this._keyboardFocusRegion.blur()}},{key:"id",get:function(){return this._id}},{key:"focused",get:function(){return this._active}},{key:"keyboardFocusable",get:function(){return(Object(f["a"])(this._contextElement)||[]).length>0}}])
return e}()},no2R:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var o=n("kR0I")
function i(e,t){return Object(o["a"])(e,(function(e){return!r(e.getAttribute("tabindex"))}),t)}function r(e){return!isNaN(e)&&e<0}},yfCu:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var o=n("QF4Q")
function i(e,t,n,i){var r=e===window||e===document?e:Object(o["a"])(e)
r.addEventListener(t,n,i)
return{remove:function(){r.removeEventListener(t,n,i)}}}}}])

//# sourceMappingURL=3-c-7ad3678ded.js.map