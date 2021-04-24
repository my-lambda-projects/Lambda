(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[158],{"4LsN":function(e,t,n){"use strict"
n.r(t)
n.d(t,"default",(function(){return ar}))
var r=n("q1tI")
var i=n.n(r)
var o=n("17x9")
var a=n.n(o)
var s=n("/HcR")
var l=n.n(s)
var c=n("j9Ei")
var d=n("Ff2n")
var u=n("1OyB")
var h=n("vuIU")
var p=n("Ji7U")
var f=n("LK+K")
var m=n("4DaC")
var g=n("99Sk")
var b=n("Fqjc")
var v=n("xQs3")
var O=n("92Hi")
var _=n("OGwK")
var q,w,y,E,j
var C=(q=Object(m["a"])(),w=Object(g["g"])(_["a"]),q(y=w(y=(j=E=function(e){Object(p["a"])(n,e)
var t=Object(f["a"])(n)
function n(){var e
Object(u["a"])(this,n)
for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e._baseButton=null
return e}Object(h["a"])(n,[{key:"focus",value:function(){this._baseButton&&this._baseButton.focus()}},{key:"render",value:function(){var e=this
var t=this.props,n=t.children,r=t.renderIcon,o=t.screenReaderLabel,a=t.type,s=t.size,l=t.elementRef,c=t.as,u=t.interaction,h=t.color,p=t.focusColor,f=t.shape,m=t.withBackground,g=t.withBorder,_=t.margin,q=t.cursor,w=t.href,y=Object(d["a"])(t,["children","renderIcon","screenReaderLabel","type","size","elementRef","as","interaction","color","focusColor","shape","withBackground","withBorder","margin","cursor","href"])
var E=this.theme
return i.a.createElement(O["a"],Object.assign({},Object(b["b"])(y),{type:a,size:s,elementRef:l,as:c,interaction:u,color:h,focusColor:p,shape:f,withBackground:m,withBorder:g,margin:_,cursor:q,href:w,renderIcon:n||r,theme:E,ref:function(t){e._baseButton=t}}),i.a.createElement(v["a"],null,o))}},{key:"focused",get:function(){return this._baseButton&&this._baseButton.focused}}])
n.displayName="IconButton"
return n}(r["Component"]),E.propTypes={children:a.a.oneOfType([a.a.node,a.a.func]),renderIcon:a.a.oneOfType([a.a.node,a.a.func]),screenReaderLabel:a.a.string.isRequired,type:a.a.oneOf(["button","submit","reset"]),size:a.a.oneOf(["small","medium","large"]),elementRef:a.a.func,as:a.a.elementType,interaction:a.a.oneOf(["enabled","disabled","readonly"]),color:a.a.oneOf(["primary","primary-inverse","secondary","success","danger"]),focusColor:a.a.oneOf(["info","inverse"]),shape:a.a.oneOf(["rectangle","circle"]),withBackground:a.a.bool,withBorder:a.a.bool,margin:g["a"].spacing,cursor:a.a.string,href:a.a.string},E.defaultProps={children:null,renderIcon:void 0,type:"button",size:"medium",elementRef:function(e){},as:"button",interaction:void 0,color:"secondary",focusColor:void 0,shape:"rectangle",withBackground:true,withBorder:true,margin:"0",cursor:"pointer",href:void 0},j))||y)||y)
var K=n("RqKb")
var k=n("3kkD")
var S=n("kSW8")
var B=n("m8F2")
var R=n("xHhu")
var P=n("dpmv")
var I=n("LvDl")
var M=n("rePB")
var T=n("VTBJ")
var L=n("TSYQ")
var H=n.n(L)
var z=n("AtYc")
var A=n("isoX")
var x=n("dbvw")
var D=n("aakK")
var F=n("HQpS")
var N=n("8PTv")
var W=n("pCm6")
var Z=n("M85a")
var V={placement:a.a.oneOf(["top","end","bottom","start","top start","start top","start center","start bottom","bottom start","bottom center","bottom end","end bottom","end center","end top","top end","top center","center end","center start","top stretch","bottom stretch","end stretch","start stretch","offscreen"]),mountNode:a.a.oneOfType([Z["a"],a.a.func]),constrain:a.a.oneOfType([Z["a"],a.a.func,a.a.oneOf(["window","scroll-parent","parent","none"])])}
n("l/EJ")
var U=n("3zPy")
var X=n.n(U)
var G="getRandomVcryp0123456789bfhijklqsuvwxzABCDEFGHIJKLMNOPQSTUWXYZ"
var Y=G.length-1
function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n="u".concat($("",t-1))
return e&&false?"".concat(e,"__").concat(n):n}function J(e){var t=[]
while(0<e--)t.push(Math.floor(256*Math.random()))
return t}function $(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n=""
var r=J(t)
while(0<t--)n+=G[r[t]&Y]
return n}var ee=function(e){Object(p["a"])(n,e)
var t=Object(f["a"])(n)
function n(){var e
Object(u["a"])(this,n)
for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e._id=e.props.id||Q("Selectable")
e._listId="".concat(e._id,"-list")
e._descriptionId="".concat(e._id,"-description")
e.isSelectedOption=function(t){var n=e.props.selectedOptionId
if(Array.isArray(n))return n.indexOf(t)>-1
return n===t}
e.handleOpenClose=function(t){var n=e.props,r=n.isShowingOptions,i=n.onRequestShowOptions,o=n.onRequestHideOptions
t.preventDefault()
if(r)o(t)
else{Object(W["a"])(e._trigger)||e._trigger.focus()
i(t)}}
e.handleKeyDown=function(t){var n=e.props,r=n.isShowingOptions,i=n.highlightedOptionId,o=n.onRequestHighlightOption,a=n.onRequestHighlightFirstOption,s=n.onRequestHighlightLastOption,l=n.onRequestSelectOption
var c=X.a.names[t.keyCode]
switch(c){case"space":r||e.handleOpenClose(t)
break
case"enter":if(i){t.preventDefault()
l(t,{id:i})}break
case"down":t.preventDefault()
r?o(t,{direction:1}):e.handleOpenClose(t)
break
case"up":t.preventDefault()
r?o(t,{direction:-1}):e.handleOpenClose(t)
break
case"home":if(r){t.preventDefault()
a(t)}break
case"end":if(r){t.preventDefault()
s(t)}}}
e.handleKeyUp=function(t){var n=e.props.isShowingOptions
var r=X.a.names[t.keyCode]
"esc"===r&&n&&e.handleOpenClose(t)}
return e}Object(h["a"])(n,[{key:"render",value:function(){var e=this
var t=this.props,n=t.isShowingOptions,r=t.highlightedOptionId,i=t.onRequestHighlightOption,o=t.onRequestSelectOption,a=t.children,s=t.render,l=void 0===s?a:s
return"function"===typeof l?l({getRootProps:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var n=t.onMouseDown,r=t.onClick,i=Object(d["a"])(t,["onMouseDown","onClick"])
return Object(T["a"])({onClick:Object(x["a"])(e.handleOpenClose,r),onMouseDown:Object(x["a"])((function(t){t.target!==e._trigger&&t.preventDefault()}),n)},i)},getLabelProps:function(t){return Object(T["a"])({htmlFor:e._id},t)},getTriggerProps:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var i=t.ref,o=t.onKeyDown,a=t.onKeyUp,s=Object(d["a"])(t,["ref","onKeyDown","onKeyUp"])
return Object(T["a"])({id:e._id,ref:Object(x["a"])(i,(function(t){return e._trigger=t})),"aria-haspopup":"listbox","aria-expanded":n,"aria-owns":n?e._listId:null,"aria-controls":n?e._listId:null,"aria-describedby":e._descriptionId,"aria-activedescendant":n?r:null,onKeyDown:Object(x["a"])(e.handleKeyDown,o),onKeyUp:Object(x["a"])(e.handleKeyUp,a)},s)},getInputProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var t=e.readOnly,n=Object(d["a"])(e,["readOnly"])
return Object(T["a"])({role:"combobox","aria-autocomplete":t?"none":"both",autoComplete:"off",readOnly:t},n)},getListProps:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var n=t.onMouseDown,r=t.onClick,i=Object(d["a"])(t,["onMouseDown","onClick"])
return Object(T["a"])({id:e._listId,role:"listbox",onMouseDown:Object(x["a"])((function(e){e.preventDefault()}),n),onClick:Object(x["a"])((function(e){e.stopPropagation()
e.nativeEvent.stopImmediatePropagation()}),r)},i)},getOptionProps:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var n=t.id,r=t.onMouseOver,a=t.onClick,s=Object(d["a"])(t,["id","onMouseOver","onClick"])
return Object(T["a"])({id:n,role:"option","aria-selected":e.isSelectedOption(n)?"true":"false",onClick:Object(x["a"])((function(e){o(e,{id:n})}),a),onMouseOver:Object(x["a"])((function(e){i(e,{id:n})}),r)},s)},getDisabledOptionProps:function(e){return Object(T["a"])({"aria-disabled":"true"},e)},getDescriptionProps:function(t){return Object(T["a"])({id:e._descriptionId},t)}}):null}}])
n.displayName="Selectable"
return n}(r["Component"])
ee.propTypes={id:a.a.string,highlightedOptionId:a.a.string,selectedOptionId:a.a.oneOfType([a.a.string,a.a.array]),isShowingOptions:a.a.bool,onRequestShowOptions:a.a.func,onRequestHideOptions:a.a.func,onRequestHighlightOption:a.a.func,onRequestHighlightFirstOption:a.a.func,onRequestHighlightLastOption:a.a.func,onRequestSelectOption:a.a.func,children:a.a.func,render:a.a.func}
ee.defaultProps={id:null,highlightedOptionId:null,selectedOptionId:null,isShowingOptions:false,onRequestShowOptions:function(e){},onRequestHideOptions:function(e){},onRequestHighlightOption:function(e,t){},onRequestHighlightFirstOption:function(e,t){},onRequestHighlightLastOption:function(e,t){},onRequestSelectOption:function(e,t){},children:null,render:void 0}
var te=n("ODXe")
var ne=n("DK17")
var re=n("vFL3")
var ie=n("l3tl")
var oe=n("1Q5T")
function ae(e){var t=[]
if(!ie["a"])return t
var n=Object(ne["a"])(e)
if(n){var r=Object(oe["a"])(n)||{}
var i=r.position
if("fixed"===i)return[n.ownerDocument]
var o=n
while(o&&1===o.nodeType&&(o=o.parentNode)){var a=void 0
try{a=Object(oe["a"])(o)}catch(e){}if("undefined"===typeof a||null===a){t.push(o)
return t}var s=a,l=s.overflow,c=s.overflowX,d=s.overflowY;/(auto|scroll|overlay)/.test(l+d+c)&&("absolute"!==i||["relative","absolute","fixed"].indexOf(a.position)>=0)&&t.push(o)}t.push(n.ownerDocument.body)
n.ownerDocument!==document&&t.push(n.ownerDocument.defaultView)}return t}function se(e){var t=[]
if(!ie["a"])return t
var n=Object(ne["a"])(e)
if(n){var r=n
while((r=r.parentNode)&&r&&1===r.nodeType&&"BODY"!==r.tagName){var i=Object(oe["a"])(r)
var o=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("-moz-transform")||i.getPropertyValue("-ms-transform")||i.getPropertyValue("-o-transform")||i.getPropertyValue("transform")||"none"
var a="none"===o||"matrix(1, 0, 0, 1, 0, 0)"===o
"static"===i.position&&a||t.push(r)}t.push(Object(re["a"])(n).body)}return t}var le=n("rqyi")
var ce={center:"center",start:"end",end:"start",top:"bottom",bottom:"top",stretch:"stretch",offscreen:"offscreen"}
function de(e,t){return he(e,(function(e,t){return[ce[e],t]}),t)}function ue(e,t){return he(e,(function(e,t){return[e,t].map((function(e){return"start"===e||"end"===e?ce[e]:e}))}),t)}function he(e,t,n){var r=Array.isArray(e)?e:e.split(" "),i=Object(te["a"])(r,2),o=i[0],a=i[1]
var s=t(o,a).filter((function(e){return e}))
return n?s.join(n):s}function pe(e,t,n){if(!e||"offscreen"===n.placement){var r=!n.container&&e
return{placement:n.placement,style:{left:"-9999em",overflow:"hidden",position:"absolute",top:"0",display:r?"none":null}}}var i=new me(e,t,n)
return{placement:i.placement,style:i.style}}var fe=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{top:0,left:0}
Object(u["a"])(this,e)
this.node=Object(ne["a"])(t)
"string"===typeof n?this.placement=_e(n):Array.isArray(n)?this.placement=n:this.placement=["bottom","center"]
this.rect=Object(N["a"])(this.node)
this._offset=ve(r,this.size)}Object(h["a"])(e,[{key:"calculateOffset",value:function(e){var t={top:0,start:0,center:"50%",bottom:"100%",end:"100%",stretch:0}
var n=Object(te["a"])(e,2),r=n[0],i=n[1]
if(["start","end"].indexOf(r)>=0){var o=[i,r]
r=o[0]
i=o[1]}var a=0
var s=0
"undefined"!==typeof t[r]&&(a=t[r])
"undefined"!==typeof t[i]&&(s=t[i])
return ge([ve({top:a,left:s},this.size),be(this._offset,this.placement)])}},{key:"normalizeScrollTop",value:function(e){return Object(re["a"])(this.node).body===e?0:e.scrollTop}},{key:"width",get:function(){return this.rect.width}},{key:"height",get:function(){return this.rect.height}},{key:"size",get:function(){return{width:this.width,height:this.height}}},{key:"position",get:function(){return{top:this.rect.top,left:this.rect.left}}},{key:"hasVerticalPlacement",get:function(){return["top","bottom"].indexOf(this.placement[0])>=0}},{key:"hasHorizontalPlacement",get:function(){return["start","end"].indexOf(this.placement[0])>=0}},{key:"shouldStretchVertically",get:function(){return"stretch"===this.placement[1]&&this.hasVerticalPlacement}},{key:"shouldStretchHorizontally",get:function(){return"stretch"===this.placement[1]&&this.hasHorizontalPlacement}},{key:"mirroredPlacement",get:function(){return de(this.placement)}},{key:"scrollParentsOffset",get:function(){var e=ae(this.node)
var t=0
var n=0
for(var r=1;r<e.length;r++){var i=e[r]
var o=e[r-1]
t+=this.normalizeScrollTop(i)-this.normalizeScrollTop(o)
n+=i.scrollLeft-o.scrollLeft}return{top:t,left:n}}},{key:"positionedParentsOffset",get:function(){var e=se(this.node)
var t=Object(re["a"])(this.node)
var n=e.length>1?0:Object(N["a"])(t.documentElement).top
var r=0
var i=0
for(var o=1;o<e.length;o++){var a=Object(N["a"])(e[o])
var s=Object(N["a"])(e[o-1])
n+=s.top-a.top
r+=s.left-a.left
if(e[o]===t.body){n+=a.top
r+=a.left}i+=this.normalizeScrollTop(e[o])}n+=i
return{top:n,left:r}}}])
return e}()
var me=function(){function e(t,n,r){Object(u["a"])(this,e)
this.options=r||{}
var i=this.options,o=i.container,a=i.constrain,s=i.placement,l=i.over
if(!t||"offscreen"===s)return
this.container=o||Object(re["a"])(t).body
this.element=new fe(t,s,{top:this.options.offsetY,left:this.options.offsetX})
this.target=new fe(n||this.container,l?this.element.placement:this.element.mirroredPlacement)
"window"===a?this.constrainTo(Object(le["a"])(t)):"scroll-parent"===a?this.constrainTo(ae(this.target.node)[0]):"parent"===a?this.constrainTo(this.container):"function"===typeof a?this.constrainTo(Object(ne["a"])(a.call(null))):"object"===typeof a&&this.constrainTo(Object(ne["a"])(a))}Object(h["a"])(e,[{key:"overflow",value:function(e){var t=Object(le["a"])(e)
var n=Object(N["a"])(e)
var r=Object(N["a"])(t)
var i=ge([this.target.position,this.offset])
var o={top:this.element.positionedParentsOffset.top+this.element.scrollParentsOffset.top,left:this.element.positionedParentsOffset.left+this.element.scrollParentsOffset.left}
var a=i.left+o.left
var s=i.left+this.element.width+o.left
var l=i.top+o.top
var c=i.top+this.element.height+o.top
"bottom"===this.element.placement[0]?l-=this.element.height+this.target.height:"top"===this.element.placement[0]&&(c+=this.element.height+this.target.height)
"start"===this.element.placement[1]?a-=this.element.width-this.target.width:"end"===this.element.placement[1]&&(s+=this.element.width-this.target.width)
"top"===this.element.placement[1]?l-=this.element.height-this.target.height:"bottom"===this.element.placement[1]&&(c+=this.element.height-this.target.height)
"end"===this.element.placement[0]?a-=this.element.width+this.target.width:"start"===this.element.placement[0]&&(s+=this.element.width+this.target.width)
var d=e===t?n:{top:r.top+n.top,bottom:n.top+n.height,left:r.left+n.left,right:n.left+n.width}
return{top:l<d.top?d.top-l:0,bottom:c>d.bottom?c-d.bottom:0,left:a<d.left?d.left-a:0,right:s>d.right?s-d.right:0}}},{key:"constrainTo",value:function(e){if(!e)return
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
var r=ge([this.element.calculateOffset(this.target.placement),this.element.scrollParentsOffset,this.element.positionedParentsOffset])
return{top:t-r.top,left:n-r.left}}},{key:"placement",get:function(){return qe(this.element.placement)}},{key:"minWidth",get:function(){return this.element.shouldStretchVertically?this.target.width:null}},{key:"minHeight",get:function(){return this.element.shouldStretchHorizontally?this.target.height:null}},{key:"position",get:function(){var e=Object(le["a"])(this.target.node)
var t=ge([this.target.position,this.offset]),n=t.left,r=t.top
if(ie["a"]&&e.matchMedia){var i=e.matchMedia("only screen and (min-resolution: 1.3dppx)").matches||e.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches
if(!i){n=Math.round(n)
r=Math.round(r)}}return{left:n,top:r}}},{key:"style",get:function(){return{top:0,left:0,minWidth:this.minWidth,minHeight:this.minHeight,position:"absolute",transform:"translateX(".concat(this.position.left,"px) translateY(").concat(this.position.top,"px) translateZ(0)")}}}])
return e}()
function ge(e){return e.reduce((function(e,t){return{top:e.top+t.top,left:e.left+t.left}}),{top:0,left:0})}function be(e,t){var n=e.top,r=e.left
"bottom"===t[0]&&(n=0-parseFloat(n,10))
"end"===t[0]&&(r=0-parseFloat(r,10))
return{top:n,left:r}}function ve(e,t){var n=e.left,r=e.top
n="string"===typeof n&&-1!==n.indexOf("%")?parseFloat(n,10)/100*t.width:parseFloat(n,10)
r="string"===typeof r&&-1!==r.indexOf("%")?parseFloat(r,10)/100*t.height:parseFloat(r,10)
return{top:r,left:n}}function Oe(e){var t=Object(te["a"])(e,2),n=t[0],r=t[1]
if("center"===n||"stretch"===n){var i=[r,n]
n=i[0]
r=i[1]}return[n,r]}function _e(e){var t=e.split(" ")
1===t.length&&(t=[e,"center"])
return Oe(t)}function qe(e){return e.join(" ")}var we=n("iXfj")
var ye=n("Be+D")
var Ee=function(e){Object(p["a"])(n,e)
var t=Object(f["a"])(n)
function n(){Object(u["a"])(this,n)
return t.apply(this,arguments)}Object(h["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=Object(d["a"])(e,["children"])
return Object(ye["a"])(t,n)}}])
n.displayName="ComponentIdentifier"
return n}(r["Component"])
Ee.propTypes={children:a.a.node}
Ee.defaultProps={children:null}
Ee.pick=function(e,t){var n
i.a.Children.forEach(t,(function(t){Object(D["a"])(t,[e])&&(n=t)}))
return n}
var je=n("5nfb")
var Ce=n("x7bk")
var Ke=n("3S3D")
function ke(e,t){var n=Object(ne["a"])(e)
var r=[]
var i=Object(N["a"])(n)||{}
var o=false
function a(){if(false===o){var e=Object(N["a"])(n)||{}
var s=e.top!==i.top||e.left!==i.left||e.right!==i.right||e.bottom!==i.bottom||e.width!==i.width||e.height!==i.height
s&&"function"===typeof t&&t(e)
i=e
r.push(Object(Ke["a"])(a))}}a()
return{remove:function(){o=true
r.forEach((function(e){return e.cancel()}))}}}var Se="getRandomVcryp0123456789bfhijklqsuvwxzABCDEFGHIJKLMNOPQSTUWXYZ"
var Be=Se.length-1
function Re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n="u".concat(Ie("",t-1))
return e&&false?"".concat(e,"__").concat(n):n}function Pe(e){var t=[]
while(0<e--)t.push(Math.floor(256*Math.random()))
return t}function Ie(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n=""
var r=Pe(t)
while(0<t--)n+=Se[r[t]&Be]
return n}var Me=n("jkru")
var Te=n.n(Me)
var Le=n("ANCx")
var He=n("NsfV")
var ze=n("+9Lr")
var Ae=function(e){var t=e.stacking
return{zIndex:t.topmost}}
var xe,De,Fe,Ne,We,Ze,Ve,Ue,Xe,Ge,Ye,Qe,Je,$e,et,tt
var nt={componentId:"eGKPI",template:function(e){return"\n\n.eGKPI_bGBk{box-sizing:border-box;z-index:".concat(e.zIndex||"inherit","}")},root:"eGKPI_bGBk"}
var rt=(xe=Object(we["a"])("8.0.0",null,"Use Position's `renderTarget` prop instead."),De=Object(m["a"])(),xe(Fe=De(Fe=(We=Ne=function(e){Object(p["a"])(n,e)
var t=Object(f["a"])(n)
function n(){Object(u["a"])(this,n)
return t.apply(this,arguments)}return n}(Ee),Ne.displayName="PositionTarget",Ne.locatorAttribute="data-position-target",We))||Fe)||Fe)
var it=(Ze=Object(we["a"])("8.0.0",null,"Use Posiition's `children` instead."),Ve=Object(m["a"])(),Ze(Ue=Ve(Ue=(Ge=Xe=function(e){Object(p["a"])(n,e)
var t=Object(f["a"])(n)
function n(){Object(u["a"])(this,n)
return t.apply(this,arguments)}return n}(Ee),Xe.displayName="PositionContent",Xe.propTypes={children:a.a.node,placement:V.placement},Xe.locatorAttribute="data-position-content",Ge))||Ue)||Ue)
var ot=(Ye=Object(we["a"])("8.0.0",{trackPosition:"shouldTrackPosition",over:"shouldPositionOverTarget"}),Qe=Object(m["a"])(),Je=Object(g["g"])(Ae,nt),Ye($e=Qe($e=Je($e=(tt=et=function(e){Object(p["a"])(n,e)
var t=Object(f["a"])(n)
function n(e){var r
Object(u["a"])(this,n)
r=t.call(this,e)
r._timeouts=[]
r.handlePortalOpen=function(){r.position();(r.props.shouldTrackPosition||r.props.trackPosition)&&r.startTracking()
r._timeouts.push(setTimeout((function(){r.state.positioned&&"function"===typeof r.props.onPositioned&&r.props.onPositioned({top:r.state.style.top,left:r.state.style.left,placement:r.state.placement})}),0))}
r.position=function(){r.setState(Object(T["a"])({positioned:true},r.calculatePosition(r.props)))}
r.state=Object(T["a"])({positioned:false},r.calculatePosition(e))
r.position=Object(He["a"])(r.position,0,{leading:false,trailing:true})
r._id=r.props.id||Re("Position")
return r}Object(h["a"])(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return!Te()(this.state,t)||!Object(Le["a"])(this.props,e)||!Object(Le["a"])(this.context,n)}},{key:"componentDidMount",value:function(){this.toggleLocatorAttributes(true)}},{key:"componentDidUpdate",value:function(e,t){this.position()
this.toggleLocatorAttributes(true)
this.props.shouldTrackPosition!==e.shouldTrackPosition?this.props.shouldTrackPosition?this.startTracking():this.stopTracking():this.props.trackPosition!==e.trackPosition&&(this.props.trackPosition?this.startTracking():this.stopTracking())
var n=this.state,r=n.style,i=n.placement
r&&t.style&&(i!==t.placement||r.top!==t.style.top||r.left!==t.style.left)&&this.props.onPositionChanged({top:r.top,left:r.left,placement:i})}},{key:"componentWillUnmount",value:function(){this.position.cancel()
this.stopTracking()
this._timeouts.forEach((function(e){return clearTimeout(e)}))
this.toggleLocatorAttributes(false)}},{key:"toggleLocatorAttributes",value:function(e){this.toggleLocatorAttribute(Object(ne["a"])(this._content),n.contentLocatorAttribute,e)
this.toggleLocatorAttribute(Object(ne["a"])(this._target),n.targetLocatorAttribute,e)}},{key:"toggleLocatorAttribute",value:function(e,t,n){if(e&&e.hasAttribute){n&&!e.hasAttribute(t)&&e.setAttribute(t,this._id)
!n&&e.hasAttribute(t)&&e.removeAttribute(t)}}},{key:"calculatePosition",value:function(e){return pe(this._content,this._target,{placement:e.placement,offsetX:e.offsetX,offsetY:e.offsetY,constrain:e.constrain,container:e.mountNode,over:e.shouldPositionOverTarget||e.over})}},{key:"startTracking",value:function(){this._listener=this._listener||ke(this._target,this.position)}},{key:"stopTracking",value:function(){if(this._listener){this._listener.remove()
this._listener=null}}},{key:"renderContent",value:function(){var e=this
var t=Ee.pick(n.Content,this.props.children)
t||(t=Object(ye["a"])(this.props.children))
if(t){var r
t=Object(je["a"])(t,Object(M["a"])({ref:function(t){e._content=t},style:Object(T["a"])({},t.props.style,{},this.state.style),className:H()((r={},Object(M["a"])(r,nt.root,true),Object(M["a"])(r,t.props.className,t.props.className),r))},n.contentLocatorAttribute,this._id))
t=i.a.createElement(ze["a"],{open:true,onOpen:this.handlePortalOpen,mountNode:this.props.mountNode,insertAt:this.props.insertAt},t)}return t}},{key:"renderTarget",value:function(){var e=this
var t=Ee.pick(n.Target,this.props.children)
t||(t=Object(Ce["a"])(this.props.renderTarget))
if(t)return Object(je["a"])(t,Object(M["a"])({ref:function(t){e._target=t}},n.targetLocatorAttribute,this._id))
if(!this.props.target)return null
this._target=Object(Ce["a"])(this.props.target)}},{key:"render",value:function(){var e=Object(M["a"])({},n.locatorAttribute,this._id)
return i.a.createElement("span",e,this.renderTarget(),this.renderContent())}}])
n.displayName="Position"
return n}(r["Component"]),et.Target=rt,et.Content=it,et.locatorAttribute="data-position",et.targetLocatorAttribute="data-position-target",et.contentLocatorAttribute="data-position-content",et.propTypes={renderTarget:a.a.oneOfType([a.a.node,a.a.func]),target:a.a.oneOfType([Z["a"],a.a.func]),placement:V.placement,mountNode:V.mountNode,insertAt:a.a.oneOf(["bottom","top"]),constrain:V.constrain,offsetX:a.a.oneOfType([a.a.string,a.a.number]),offsetY:a.a.oneOfType([a.a.string,a.a.number]),id:a.a.string,shouldTrackPosition:a.a.bool,shouldPositionOverTarget:a.a.bool,onPositionChanged:a.a.func,onPositioned:a.a.func,children:a.a.node,trackPosition:a.a.bool,over:a.a.bool},et.defaultProps={renderTarget:void 0,target:void 0,placement:"bottom center",mountNode:null,insertAt:"bottom",constrain:"window",offsetX:0,offsetY:0,id:void 0,shouldTrackPosition:true,shouldPositionOverTarget:false,onPositioned:function(e){},onPositionChanged:function(e){},children:null},tt))||$e)||$e)||$e)
function at(e){var t=e.colors,n=e.borders
return{arrowSize:"0.5rem",arrowBorderWidth:n.widthSmall,arrowBackgroundColor:t.white,arrowBorderColor:t.tiara,arrowBackgroundColorInverse:t.licorice,arrowBorderColorInverse:"transparent"}}var st,lt,ct,dt
var ut={componentId:"dqmEK",template:function(e){return"\n\n.dqmEK_ftAV{box-sizing:border-box;min-height:calc(".concat(e.arrowSize||"inherit","*2)}\n\n.dqmEK_caGd{position:relative}\n\n.dqmEK_eBFr,.dqmEK_bQpq,.dqmEK_cLEU,.dqmEK_bcHE,.dqmEK_dRPE{-webkit-padding-end:0;-webkit-padding-start:").concat(e.arrowSize||"inherit",";padding-inline-end:0;padding-inline-start:").concat(e.arrowSize||"inherit","}\n\n[dir=ltr] .dqmEK_eBFr,[dir=ltr] .dqmEK_bQpq,[dir=ltr] .dqmEK_cLEU,[dir=ltr] .dqmEK_bcHE,[dir=ltr] .dqmEK_dRPE{padding-left:").concat(e.arrowSize||"inherit",";padding-right:0}\n\n[dir=rtl] .dqmEK_eBFr,[dir=rtl] .dqmEK_bQpq,[dir=rtl] .dqmEK_cLEU,[dir=rtl] .dqmEK_bcHE,[dir=rtl] .dqmEK_dRPE{padding-left:0;padding-right:").concat(e.arrowSize||"inherit","}\n\n.dqmEK_bhzm,.dqmEK_bxia,.dqmEK_buog,.dqmEK_ctrk,.dqmEK_dHQY{-webkit-padding-end:").concat(e.arrowSize||"inherit",";-webkit-padding-start:0;padding-inline-end:").concat(e.arrowSize||"inherit",";padding-inline-start:0}\n\n[dir=ltr] .dqmEK_bhzm,[dir=ltr] .dqmEK_bxia,[dir=ltr] .dqmEK_buog,[dir=ltr] .dqmEK_ctrk,[dir=ltr] .dqmEK_dHQY{padding-left:0;padding-right:").concat(e.arrowSize||"inherit","}\n\n[dir=rtl] .dqmEK_bhzm,[dir=rtl] .dqmEK_bxia,[dir=rtl] .dqmEK_buog,[dir=rtl] .dqmEK_ctrk,[dir=rtl] .dqmEK_dHQY{padding-left:").concat(e.arrowSize||"inherit",";padding-right:0}\n\n.dqmEK_bgun,.dqmEK_cOtA,.dqmEK_cFhg,.dqmEK_fjSW{padding-top:").concat(e.arrowSize||"inherit","}\n\n.dqmEK_dLYh,.dqmEK_dqZD,.dqmEK_dNlp,.dqmEK_svmP{padding-bottom:").concat(e.arrowSize||"inherit",'}\n\n.dqmEK_bFHc{left:-999em;position:absolute}\n\n.dqmEK_fAVq,.dqmEK_fAVq:after{border-style:solid;box-sizing:border-box;content:"";display:block;height:0;pointer-events:none;position:absolute;width:0}\n\n.dqmEK_fAVq{border-width:calc(').concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",");display:block}\n\n.dqmEK_fAVq:after{border-width:").concat(e.arrowSize||"inherit","}\n\n.dqmEK_fBgc,.dqmEK_fBgc:after{border-color:").concat(e.arrowBorderColor||"inherit","}\n\n.dqmEK_ejeM,.dqmEK_ejeM:after{border-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n.dqmEK_cLQV,.dqmEK_tpPI,.dqmEK_dOuW,.dqmEK_borX,.dqmEK_igtb{border-bottom-color:transparent;border-inline-end-color:").concat(e.arrowBorderColor||"inherit",";border-inline-end-width:").concat(e.arrowSize||"inherit",";border-inline-start-color:transparent;border-inline-start-width:0;border-top-color:transparent;inset-inline-end:100%;inset-inline-start:auto;margin-top:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));top:50%}\n\n[dir=ltr] .dqmEK_cLQV,[dir=ltr] .dqmEK_tpPI,[dir=ltr] .dqmEK_dOuW,[dir=ltr] .dqmEK_borX,[dir=ltr] .dqmEK_igtb{border-left-color:transparent;border-left-width:0;border-right-color:").concat(e.arrowBorderColor||"inherit",";border-right-width:").concat(e.arrowSize||"inherit",";left:auto;right:100%}\n\n[dir=rtl] .dqmEK_cLQV,[dir=rtl] .dqmEK_tpPI,[dir=rtl] .dqmEK_dOuW,[dir=rtl] .dqmEK_borX,[dir=rtl] .dqmEK_igtb{border-left-color:").concat(e.arrowBorderColor||"inherit",";border-left-width:").concat(e.arrowSize||"inherit",";border-right-color:transparent;border-right-width:0;left:100%;right:auto}\n\n.dqmEK_cLQV:after,.dqmEK_dOuW:after,.dqmEK_borX:after,.dqmEK_igtb:after,.dqmEK_tpPI:after{border-bottom-color:transparent;border-inline-end-color:").concat(e.arrowBackgroundColor||"inherit",";border-inline-end-width:").concat(e.arrowSize||"inherit",";border-inline-start-color:transparent;border-inline-start-width:0;border-top-color:transparent;inset-inline-end:auto;inset-inline-start:").concat(e.arrowBorderWidth||"inherit",";margin-top:calc(-1*").concat(e.arrowSize||"inherit",")}\n\n[dir=ltr] .dqmEK_cLQV:after,[dir=ltr] .dqmEK_dOuW:after,[dir=ltr] .dqmEK_borX:after,[dir=ltr] .dqmEK_igtb:after,[dir=ltr] .dqmEK_tpPI:after{border-left-color:transparent;border-left-width:0;border-right-color:").concat(e.arrowBackgroundColor||"inherit",";border-right-width:").concat(e.arrowSize||"inherit",";left:").concat(e.arrowBorderWidth||"inherit",";right:auto}\n\n[dir=rtl] .dqmEK_cLQV:after,[dir=rtl] .dqmEK_dOuW:after,[dir=rtl] .dqmEK_borX:after,[dir=rtl] .dqmEK_igtb:after,[dir=rtl] .dqmEK_tpPI:after{border-left-color:").concat(e.arrowBackgroundColor||"inherit",";border-left-width:").concat(e.arrowSize||"inherit",";border-right-color:transparent;border-right-width:0;left:auto;right:").concat(e.arrowBorderWidth||"inherit","}\n\n.dqmEK_cLQV.dqmEK_ejeM,.dqmEK_dOuW.dqmEK_ejeM,.dqmEK_borX.dqmEK_ejeM,.dqmEK_igtb.dqmEK_ejeM,.dqmEK_tpPI.dqmEK_ejeM{border-inline-end-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n[dir=ltr] .dqmEK_cLQV.dqmEK_ejeM,[dir=ltr] .dqmEK_dOuW.dqmEK_ejeM,[dir=ltr] .dqmEK_borX.dqmEK_ejeM,[dir=ltr] .dqmEK_igtb.dqmEK_ejeM,[dir=ltr] .dqmEK_tpPI.dqmEK_ejeM{border-right-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n[dir=rtl] .dqmEK_cLQV.dqmEK_ejeM,[dir=rtl] .dqmEK_dOuW.dqmEK_ejeM,[dir=rtl] .dqmEK_borX.dqmEK_ejeM,[dir=rtl] .dqmEK_igtb.dqmEK_ejeM,[dir=rtl] .dqmEK_tpPI.dqmEK_ejeM{border-left-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n.dqmEK_cLQV.dqmEK_ejeM:after,.dqmEK_dOuW.dqmEK_ejeM:after,.dqmEK_borX.dqmEK_ejeM:after,.dqmEK_igtb.dqmEK_ejeM:after,.dqmEK_tpPI.dqmEK_ejeM:after{border-inline-end-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n[dir=ltr] .dqmEK_cLQV.dqmEK_ejeM:after,[dir=ltr] .dqmEK_dOuW.dqmEK_ejeM:after,[dir=ltr] .dqmEK_borX.dqmEK_ejeM:after,[dir=ltr] .dqmEK_igtb.dqmEK_ejeM:after,[dir=ltr] .dqmEK_tpPI.dqmEK_ejeM:after{border-right-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n[dir=rtl] .dqmEK_cLQV.dqmEK_ejeM:after,[dir=rtl] .dqmEK_dOuW.dqmEK_ejeM:after,[dir=rtl] .dqmEK_borX.dqmEK_ejeM:after,[dir=rtl] .dqmEK_igtb.dqmEK_ejeM:after,[dir=rtl] .dqmEK_tpPI.dqmEK_ejeM:after{border-left-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n.dqmEK_eiYi,.dqmEK_evPF,.dqmEK_fzfv,.dqmEK_fnqe,.dqmEK_dOsT{border-bottom-color:transparent;border-inline-end-color:transparent;border-inline-end-width:0;border-inline-start-color:").concat(e.arrowBorderColor||"inherit",";border-inline-start-width:").concat(e.arrowSize||"inherit",";border-top-color:transparent;inset-inline-end:auto;inset-inline-start:100%;margin-top:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));top:50%}\n\n[dir=ltr] .dqmEK_eiYi,[dir=ltr] .dqmEK_evPF,[dir=ltr] .dqmEK_fzfv,[dir=ltr] .dqmEK_fnqe,[dir=ltr] .dqmEK_dOsT{border-left-color:").concat(e.arrowBorderColor||"inherit",";border-left-width:").concat(e.arrowSize||"inherit",";border-right-color:transparent;border-right-width:0;left:100%;right:auto}\n\n[dir=rtl] .dqmEK_eiYi,[dir=rtl] .dqmEK_evPF,[dir=rtl] .dqmEK_fzfv,[dir=rtl] .dqmEK_fnqe,[dir=rtl] .dqmEK_dOsT{border-left-color:transparent;border-left-width:0;border-right-color:").concat(e.arrowBorderColor||"inherit",";border-right-width:").concat(e.arrowSize||"inherit",";left:auto;right:100%}\n\n.dqmEK_eiYi:after,.dqmEK_fzfv:after,.dqmEK_fnqe:after,.dqmEK_dOsT:after,.dqmEK_evPF:after{border-bottom-color:transparent;border-inline-end-color:transparent;border-inline-end-width:0;border-inline-start-color:").concat(e.arrowBackgroundColor||"inherit",";border-inline-start-width:").concat(e.arrowSize||"inherit",";border-top-color:transparent;inset-inline-end:").concat(e.arrowBorderWidth||"inherit",";inset-inline-start:auto;margin-top:calc(-1*").concat(e.arrowSize||"inherit",")}\n\n[dir=ltr] .dqmEK_eiYi:after,[dir=ltr] .dqmEK_fzfv:after,[dir=ltr] .dqmEK_fnqe:after,[dir=ltr] .dqmEK_dOsT:after,[dir=ltr] .dqmEK_evPF:after{border-left-color:").concat(e.arrowBackgroundColor||"inherit",";border-left-width:").concat(e.arrowSize||"inherit",";border-right-color:transparent;border-right-width:0;left:auto;right:").concat(e.arrowBorderWidth||"inherit","}\n\n[dir=rtl] .dqmEK_eiYi:after,[dir=rtl] .dqmEK_fzfv:after,[dir=rtl] .dqmEK_fnqe:after,[dir=rtl] .dqmEK_dOsT:after,[dir=rtl] .dqmEK_evPF:after{border-left-color:transparent;border-left-width:0;border-right-color:").concat(e.arrowBackgroundColor||"inherit",";border-right-width:").concat(e.arrowSize||"inherit",";left:").concat(e.arrowBorderWidth||"inherit",";right:auto}\n\n.dqmEK_eiYi.dqmEK_ejeM,.dqmEK_fzfv.dqmEK_ejeM,.dqmEK_fnqe.dqmEK_ejeM,.dqmEK_dOsT.dqmEK_ejeM,.dqmEK_evPF.dqmEK_ejeM{border-inline-start-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n[dir=ltr] .dqmEK_eiYi.dqmEK_ejeM,[dir=ltr] .dqmEK_fzfv.dqmEK_ejeM,[dir=ltr] .dqmEK_fnqe.dqmEK_ejeM,[dir=ltr] .dqmEK_dOsT.dqmEK_ejeM,[dir=ltr] .dqmEK_evPF.dqmEK_ejeM{border-left-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n[dir=rtl] .dqmEK_eiYi.dqmEK_ejeM,[dir=rtl] .dqmEK_fzfv.dqmEK_ejeM,[dir=rtl] .dqmEK_fnqe.dqmEK_ejeM,[dir=rtl] .dqmEK_dOsT.dqmEK_ejeM,[dir=rtl] .dqmEK_evPF.dqmEK_ejeM{border-right-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n.dqmEK_eiYi.dqmEK_ejeM:after,.dqmEK_fzfv.dqmEK_ejeM:after,.dqmEK_fnqe.dqmEK_ejeM:after,.dqmEK_dOsT.dqmEK_ejeM:after,.dqmEK_evPF.dqmEK_ejeM:after{border-inline-start-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n[dir=ltr] .dqmEK_eiYi.dqmEK_ejeM:after,[dir=ltr] .dqmEK_fzfv.dqmEK_ejeM:after,[dir=ltr] .dqmEK_fnqe.dqmEK_ejeM:after,[dir=ltr] .dqmEK_dOsT.dqmEK_ejeM:after,[dir=ltr] .dqmEK_evPF.dqmEK_ejeM:after{border-left-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n[dir=rtl] .dqmEK_eiYi.dqmEK_ejeM:after,[dir=rtl] .dqmEK_fzfv.dqmEK_ejeM:after,[dir=rtl] .dqmEK_fnqe.dqmEK_ejeM:after,[dir=rtl] .dqmEK_dOsT.dqmEK_ejeM:after,[dir=rtl] .dqmEK_evPF.dqmEK_ejeM:after{border-right-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n.dqmEK_dHiK,.dqmEK_dBdm,.dqmEK_ePhw,.dqmEK_bDBw{-webkit-margin-end:0;-webkit-margin-start:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));border-inline-end-color:transparent;border-inline-start-color:transparent;border-top-color:transparent;border-top-width:0;bottom:100%;margin-inline-end:0;margin-inline-start:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","))}\n\n[dir=ltr] .dqmEK_dHiK,[dir=ltr] .dqmEK_dBdm,[dir=ltr] .dqmEK_ePhw,[dir=ltr] .dqmEK_bDBw{border-left-color:transparent;border-right-color:transparent;margin-left:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));margin-right:0}\n\n[dir=rtl] .dqmEK_dHiK,[dir=rtl] .dqmEK_dBdm,[dir=rtl] .dqmEK_ePhw,[dir=rtl] .dqmEK_bDBw{border-left-color:transparent;border-right-color:transparent;margin-left:0;margin-right:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","))}\n\n.dqmEK_dBdm:after,.dqmEK_ePhw:after,.dqmEK_bDBw:after,.dqmEK_dHiK:after{-webkit-margin-end:0;-webkit-margin-start:calc(-1*").concat(e.arrowSize||"inherit",");border-bottom-color:").concat(e.arrowBackgroundColor||"inherit",";border-inline-end-color:transparent;border-inline-start-color:transparent;border-top-color:transparent;border-top-width:0;margin-inline-end:0;margin-inline-start:calc(-1*").concat(e.arrowSize||"inherit",");top:").concat(e.arrowBorderWidth||"inherit","}\n\n[dir=ltr] .dqmEK_dBdm:after,[dir=ltr] .dqmEK_ePhw:after,[dir=ltr] .dqmEK_bDBw:after,[dir=ltr] .dqmEK_dHiK:after{border-left-color:transparent;border-right-color:transparent;margin-left:calc(-1*").concat(e.arrowSize||"inherit",");margin-right:0}\n\n[dir=rtl] .dqmEK_dBdm:after,[dir=rtl] .dqmEK_ePhw:after,[dir=rtl] .dqmEK_bDBw:after,[dir=rtl] .dqmEK_dHiK:after{border-left-color:transparent;border-right-color:transparent;margin-left:0;margin-right:calc(-1*").concat(e.arrowSize||"inherit",")}\n\n.dqmEK_dBdm.dqmEK_ejeM:after,.dqmEK_ePhw.dqmEK_ejeM:after,.dqmEK_bDBw.dqmEK_ejeM:after,.dqmEK_dHiK.dqmEK_ejeM:after{border-bottom-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n.dqmEK_cjte,.dqmEK_edfl,.dqmEK_ZLAk,.dqmEK_ftdy{-webkit-margin-end:0;-webkit-margin-start:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));border-bottom-color:transparent;border-bottom-width:0;border-inline-end-color:transparent;border-inline-start-color:transparent;margin-inline-end:0;margin-inline-start:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));top:100%}\n\n[dir=ltr] .dqmEK_cjte,[dir=ltr] .dqmEK_edfl,[dir=ltr] .dqmEK_ZLAk,[dir=ltr] .dqmEK_ftdy{border-left-color:transparent;border-right-color:transparent;margin-left:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));margin-right:0}\n\n[dir=rtl] .dqmEK_cjte,[dir=rtl] .dqmEK_edfl,[dir=rtl] .dqmEK_ZLAk,[dir=rtl] .dqmEK_ftdy{border-left-color:transparent;border-right-color:transparent;margin-left:0;margin-right:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","))}\n\n.dqmEK_edfl:after,.dqmEK_ZLAk:after,.dqmEK_ftdy:after,.dqmEK_cjte:after{-webkit-margin-end:0;-webkit-margin-start:calc(-1*").concat(e.arrowSize||"inherit",");border-bottom-color:transparent;border-bottom-width:0;border-inline-end-color:transparent;border-inline-start-color:transparent;border-top-color:").concat(e.arrowBackgroundColor||"inherit",";bottom:").concat(e.arrowBorderWidth||"inherit",";margin-inline-end:0;margin-inline-start:calc(-1*").concat(e.arrowSize||"inherit",")}\n\n[dir=ltr] .dqmEK_edfl:after,[dir=ltr] .dqmEK_ZLAk:after,[dir=ltr] .dqmEK_ftdy:after,[dir=ltr] .dqmEK_cjte:after{border-left-color:transparent;border-right-color:transparent;margin-left:calc(-1*").concat(e.arrowSize||"inherit",");margin-right:0}\n\n[dir=rtl] .dqmEK_edfl:after,[dir=rtl] .dqmEK_ZLAk:after,[dir=rtl] .dqmEK_ftdy:after,[dir=rtl] .dqmEK_cjte:after{border-left-color:transparent;border-right-color:transparent;margin-left:0;margin-right:calc(-1*").concat(e.arrowSize||"inherit",")}\n\n.dqmEK_edfl.dqmEK_ejeM:after,.dqmEK_ZLAk.dqmEK_ejeM:after,.dqmEK_ftdy.dqmEK_ejeM:after,.dqmEK_cjte.dqmEK_ejeM:after{border-top-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n.dqmEK_cjte,.dqmEK_edfl,.dqmEK_dHiK,.dqmEK_dBdm{inset-inline-start:50%}\n\n[dir=ltr] .dqmEK_cjte,[dir=ltr] .dqmEK_edfl,[dir=ltr] .dqmEK_dHiK,[dir=ltr] .dqmEK_dBdm{left:50%}\n\n[dir=rtl] .dqmEK_cjte,[dir=rtl] .dqmEK_edfl,[dir=rtl] .dqmEK_dHiK,[dir=rtl] .dqmEK_dBdm{right:50%}\n\n.dqmEK_ftdy,.dqmEK_bDBw{inset-inline-end:auto;inset-inline-start:calc((").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}\n\n[dir=ltr] .dqmEK_ftdy,[dir=ltr] .dqmEK_bDBw{left:calc((").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2);right:auto}\n\n[dir=rtl] .dqmEK_ftdy,[dir=rtl] .dqmEK_bDBw{left:auto;right:calc((").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}\n\n.dqmEK_ZLAk,.dqmEK_ePhw{inset-inline-end:auto;inset-inline-start:calc(100% - (").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}\n\n[dir=ltr] .dqmEK_ZLAk,[dir=ltr] .dqmEK_ePhw{left:calc(100% - (").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2);right:auto}\n\n[dir=rtl] .dqmEK_ZLAk,[dir=rtl] .dqmEK_ePhw{left:auto;right:calc(100% - (").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}\n\n.dqmEK_dOsT,.dqmEK_igtb{top:calc((").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}\n\n.dqmEK_fzfv,.dqmEK_dOuW{top:calc(100% - (").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}")},contextViewRoot:"dqmEK_ftAV",content:"dqmEK_caGd","placement--center-end":"dqmEK_eBFr","placement--end":"dqmEK_bQpq","placement--end-bottom":"dqmEK_cLEU","placement--end-center":"dqmEK_bcHE","placement--end-top":"dqmEK_dRPE","placement--center-start":"dqmEK_bhzm","placement--start":"dqmEK_bxia","placement--start-bottom":"dqmEK_buog","placement--start-center":"dqmEK_ctrk","placement--start-top":"dqmEK_dHQY","placement--bottom":"dqmEK_bgun","placement--bottom-center":"dqmEK_cOtA","placement--bottom-end":"dqmEK_cFhg","placement--bottom-start":"dqmEK_fjSW","placement--top":"dqmEK_dLYh","placement--top-center":"dqmEK_dqZD","placement--top-end":"dqmEK_dNlp","placement--top-start":"dqmEK_svmP","placement--offscreen":"dqmEK_bFHc",arrow:"dqmEK_fAVq","arrow--default":"dqmEK_fBgc","arrow--inverse":"dqmEK_ejeM","arrow--center-start":"dqmEK_cLQV","arrow--start":"dqmEK_tpPI","arrow--start-bottom":"dqmEK_dOuW","arrow--start-center":"dqmEK_borX","arrow--start-top":"dqmEK_igtb","arrow--center-end":"dqmEK_eiYi","arrow--end":"dqmEK_evPF","arrow--end-bottom":"dqmEK_fzfv","arrow--end-center":"dqmEK_fnqe","arrow--end-top":"dqmEK_dOsT","arrow--top":"dqmEK_dHiK","arrow--top-center":"dqmEK_dBdm","arrow--top-end":"dqmEK_ePhw","arrow--top-start":"dqmEK_bDBw","arrow--bottom":"dqmEK_cjte","arrow--bottom-center":"dqmEK_edfl","arrow--bottom-end":"dqmEK_ZLAk","arrow--bottom-start":"dqmEK_ftdy"}
var ht=(st=Object(g["g"])(at,ut),st(lt=(dt=ct=function(e){Object(p["a"])(n,e)
var t=Object(f["a"])(n)
function n(){Object(u["a"])(this,n)
return t.apply(this,arguments)}Object(h["a"])(n,[{key:"render",value:function(){var e,t
var r=this.props,o=r.as,a=r.background,s=r.children,l=r.debug,c=r.elementRef,d=r.height,u=r.width,h=r.maxHeight,p=r.maxWidth,f=r.minHeight,m=r.minWidth,g=r.margin,v=r.padding,O=r.placement,_=r.shadow,q=r.stacking,w=r.style,y=r.textAlign
var E=(e={},Object(M["a"])(e,ut.contextViewRoot,true),Object(M["a"])(e,ut["placement--".concat(O.replace(" ","-"))],true),e)
return i.a.createElement(k["a"],Object.assign({},Object(b["a"])(this.props,n.propTypes),{style:w,className:H()(E),borderWidth:"none",display:"inline-block",as:o,withVisualDebug:l,elementRef:c,margin:g,stacking:q}),i.a.createElement(k["a"],{className:ut.content,display:"block",borderRadius:"medium",borderWidth:"small",borderColor:"default"===a?"primary":"transparent",background:"default"===a?"primary":"primary-inverse",withVisualDebug:l,height:d,width:u,maxHeight:h,maxWidth:p,minHeight:f,minWidth:m,padding:v,shadow:_,textAlign:y},i.a.createElement("span",{className:H()((t={},Object(M["a"])(t,ut.arrow,true),Object(M["a"])(t,ut["arrow--".concat(a)],a),Object(M["a"])(t,ut["arrow--".concat(this.mirroredPlacement)],true),t))}),s))}},{key:"mirroredPlacement",get:function(){return de(this.props.placement,"-")}}])
n.displayName="ContextView"
return n}(r["Component"]),ct.propTypes={as:a.a.elementType,elementRef:a.a.func,margin:g["a"].spacing,padding:g["a"].spacing,height:a.a.oneOfType([a.a.string,a.a.number]),width:a.a.oneOfType([a.a.string,a.a.number]),maxHeight:a.a.oneOfType([a.a.string,a.a.number]),maxWidth:a.a.oneOfType([a.a.string,a.a.number]),minHeight:a.a.oneOfType([a.a.string,a.a.number]),minWidth:a.a.oneOfType([a.a.string,a.a.number]),children:a.a.node,textAlign:a.a.oneOf(["start","center","end"]),shadow:g["a"].shadow,stacking:g["a"].stacking,background:a.a.oneOf(["default","inverse"]),placement:V.placement,debug:a.a.bool},ct.defaultProps={as:"span",elementRef:function(e){},debug:false,width:"auto",height:"auto",children:null,textAlign:"start",background:"default",shadow:"resting",placement:"center end",margin:void 0,padding:void 0,stacking:void 0,maxWidth:void 0,minWidth:void 0,maxHeight:void 0,minHeight:void 0},dt))||lt)
var pt=n("Xh2V")
var ft=n("l0wz")
var mt=n("VFyL")
var gt=n("VCjB")
function bt(e,t){var n=t.currentTarget
var r=t.relatedTarget||t.nativeEvent.toElement
r&&(r===n||Object(gt["a"])(n,r))||e(t)}var vt=n("wAgO")
var Ot="getRandomVcryp0123456789bfhijklqsuvwxzABCDEFGHIJKLMNOPQSTUWXYZ"
var _t=Ot.length-1
function qt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n="u".concat(yt("",t-1))
return e&&false?"".concat(e,"__").concat(n):n}function wt(e){var t=[]
while(0<e--)t.push(Math.floor(256*Math.random()))
return t}function yt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n=""
var r=wt(t)
while(0<t--)n+=Ot[r[t]&_t]
return n}var Et=n("TO6O")
var jt,Ct,Kt,kt,St,Bt,Rt,Pt,It,Mt,Tt,Lt,Ht,zt,At,xt
var Dt=(jt=Object(we["a"])("8.0.0",null,"Use Popover's `renderTrigger` prop instead."),Ct=Object(m["a"])(),jt(Kt=Ct(Kt=(St=kt=function(e){Object(p["a"])(n,e)
var t=Object(f["a"])(n)
function n(){Object(u["a"])(this,n)
return t.apply(this,arguments)}return n}(Ee),kt.displayName="PopoverTrigger",St))||Kt)||Kt)
var Ft=(Bt=Object(we["a"])("8.0.0",null,"Use Popover's `children` instead."),Rt=Object(m["a"])(),Bt(Pt=Rt(Pt=(Mt=It=function(e){Object(p["a"])(n,e)
var t=Object(f["a"])(n)
function n(){Object(u["a"])(this,n)
return t.apply(this,arguments)}return n}(Ee),It.displayName="PopoverContent",Mt))||Pt)||Pt)
var Nt=(Tt=Object(we["a"])("8.0.0",{show:"isShowingContent",defaultShow:"defaultIsShowingContent",variant:"color",label:"screenReaderLabel",trackPosition:"shouldTrackPosition",alignArrow:"shouldAlignArrow",onShow:"onShowContent",onDismiss:"onHideContent",onToggle:"onShowContent/onHideContent"}),Lt=Object(m["a"])(),Ht=Object(ft["a"])(),Tt(zt=Lt(zt=Ht(zt=(xt=At=function(e){Object(p["a"])(n,e)
var t=Object(f["a"])(n)
function n(e){var r
Object(u["a"])(this,n)
r=t.call(this,e)
r.show=function(e){"undefined"===typeof r.props.isShowingContent&&"undefined"===typeof r.props.show&&r.setState({isShowingContent:true})
r.props.onShowContent(e)
"function"===typeof r.props.onToggle&&r.props.onToggle(true)}
r.hide=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
var n=r.props,i=n.onHideContent,o=n.isShowingContent,a=n.show,s=n.onToggle,l=n.onDismiss
if("undefined"===typeof o&&"undefined"===typeof a)r.setState((function(n){var r=n.isShowingContent
if(r){i(e,{documentClick:t})
"function"===typeof l&&l(e,t)}return{isShowingContent:false}}))
else if(o||a){i(e,{documentClick:t})
"function"===typeof l&&l(e,t)}"function"===typeof s&&s(false)}
r.toggle=function(e){r.shown?r.hide(e):r.show(e)}
r.handleDialogDismiss=function(){var e
if(!r.props.shouldReturnFocus&&r.props.shouldFocusContentOnTriggerBlur){var t=Object(ne["a"])(r._trigger)
t&&"function"===typeof t.focus&&t.focus()}(e=r).hide.apply(e,arguments)}
r.handleDialogBlur=function(e){if(e.keyCode===X.a.codes.tab&&e.shiftKey&&r.props.shouldFocusContentOnTriggerBlur)return
r.hide(e)}
r.handleTriggerKeyDown=function(e){if(!r.props.shouldFocusContentOnTriggerBlur)return
if(e.keyCode===X.a.codes.tab&&!e.shiftKey){e.preventDefault()
r._raf.push(Object(Ke["a"])((function(){r._dialog&&r._dialog.focus()})))}}
r.handleTriggerKeyUp=function(e){if(e.keyCode===X.a.codes.esc&&r.shown&&r.isTooltip){e.preventDefault()
r.hide(e)}}
r.handleTriggerBlur=function(e){r.props.on.indexOf("focus")>-1&&r._raf.push(Object(Ke["a"])((function(){Object(mt["a"])(r._view)||r.hide(e)})))}
r.handlePositioned=function(e){var t=e.placement
r.setState(Object(T["a"])({placement:t},r.computeOffsets(t)))
r.props.onPositioned(e)
"function"===typeof r.props.onShow&&r.props.onShow(e)}
r.handlePositionChanged=function(e){var t=e.placement
r.setState(Object(T["a"])({placement:t},r.computeOffsets(t)))
r.props.onPositionChanged(e)}
r.state={placement:e.placement,offsetX:e.offsetX,offsetY:e.offsetY}
"undefined"===typeof e.isShowingContent&&"undefined"===typeof e.show&&(r.state.isShowingContent=e.defaultIsShowingContent||e.defaultShow)
r._id=r.props.id||qt("Popover")
r._raf=[]
r._handleMouseOver=bt.bind(null,(function(e){r.show(e)}))
r._handleMouseOut=bt.bind(null,(function(e){r.hide(e)}))
return r}Object(h["a"])(n,[{key:"componentDidMount",value:function(){if(this.isTooltip){this._focusRegion=new Et["a"](this._contentElement,{shouldCloseOnEscape:false,shouldCloseOnDocumentClick:true,onDismiss:this.hide})
this.shown&&this._focusRegion.activate()}}},{key:"componentWillUnmount",value:function(){this._raf.forEach((function(e){return e.cancel()}))
this._raf=[]
if(this._focusRegion){this._focusRegion.deactivate()
this._focusRegion.blur()}}},{key:"shouldComponentUpdate",value:function(e,t){return!Object(Le["a"])(this.props,e)||!Object(Le["a"])(this.state,t)}},{key:"componentDidUpdate",value:function(e,t){if(this._focusRegion&&this.isTooltip){if(!e.isShowingContent&&this.props.isShowingContent||!t.isShowingContent&&this.state.isShowingContent){this._focusRegion.activate()
this._focusRegion.focus()}(e.isShowingContent&&!this.props.isShowingContent||t.isShowingContent&&!this.state.isShowingContent)&&this._focusRegion.deactivate()}}},{key:"computeOffsets",value:function(e){var t=this.props,n=t.offsetX,r=t.offsetY
if((this.props.shouldAlignArrow||this.props.alignArrow)&&this._view){var i=_e(e)[1]
var o=this._view.theme,a=o.arrowSize,s=o.arrowBorderWidth
var l=2*(Object(vt["a"])(a)+Object(vt["a"])(s))
"start"===i?n=l:"end"===i?n=-l:"top"===i?r=l:"bottom"===i&&(r=-l)}return{offsetX:n,offsetY:r}}},{key:"renderTrigger",value:function(){var e=this
var t=Ee.pick(n.Trigger,this.props.children)
t||(t=Object(Ce["a"])(this.props.renderTrigger))
if(t){var r=this.props,i=r.on,o=r.shouldContainFocus
var a
var s
var l
var c
var d
i.indexOf("click")>-1&&(a=function(t){e.toggle(t)})
if(i.indexOf("hover")>-1){c=this._handleMouseOver
l=this._handleMouseOut}i.indexOf("focus")>-1&&(s=function(t){e.show(t)})
d=o?this.shown?"true":"false":null
t=Object(je["a"])(t,{ref:function(t){return e._trigger=t},"aria-expanded":d,"data-popover-trigger":true,onKeyDown:Object(x["a"])(this.handleTriggerKeyDown,this.props.onKeyDown),onKeyUp:Object(x["a"])(this.handleTriggerKeyUp,this.props.onKeyUp),onClick:Object(x["a"])(a,this.props.onClick),onBlur:Object(x["a"])(this.handleTriggerBlur,this.props.onBlur),onFocus:Object(x["a"])(s,this.props.onFocus),onMouseOut:Object(x["a"])(l,this.props.onMouseOut),onMouseOver:Object(x["a"])(c,this.props.onMouseOver)})}return t}},{key:"renderContent",value:function(){var e=this
var t=Ee.pick(n.Content,this.props.children)
t||(t=Object(Ce["a"])(this.props.children))
this.shown&&!this.isTooltip&&(t=i.a.createElement(pt["a"],{open:this.shown,label:this.props.screenReaderLabel||this.props.label,ref:function(t){return e._dialog=t},display:"block",onBlur:this.handleDialogBlur,onDismiss:this.handleDialogDismiss,liveRegion:this.props.liveRegion,defaultFocusElement:this.props.defaultFocusElement,shouldContainFocus:this.props.shouldContainFocus,shouldReturnFocus:this.props.shouldReturnFocus,shouldFocusOnOpen:!this.props.shouldFocusContentOnTriggerBlur,shouldCloseOnDocumentClick:this.props.shouldCloseOnDocumentClick,shouldCloseOnEscape:this.props.shouldCloseOnEscape},t))
if(this.shown||this.props.shouldRenderOffscreen){var r
var o=this.props.variant
o=o?"inverse"===o?"primary-inverse":"primary":this.props.color
var a={ref:function(t){return e._view=t},elementRef:function(t){e._contentElement=t
e.props.contentRef(t)},background:o,stacking:this.props.stacking,shadow:this.props.shadow,display:"block"}
var s=this.state.placement
if(this.props.withArrow){r=ht
a=Object(T["a"])({},a,{background:"primary"===o?"default":"inverse",placement:this.rtl?ue(s," "):s})}else{r=k["a"]
a=Object(T["a"])({},a,{borderWidth:"small",borderRadius:"medium"})}this.isTooltip&&(a=Object(T["a"])({},a,{style:{pointerEvents:"none"}}))
return i.a.createElement(r,a,t)}return null}},{key:"render",value:function(){var e=this.positionProps
return this.props.positionTarget?i.a.createElement("span",null,this.renderTrigger(),i.a.createElement(ot,e,this.renderContent())):i.a.createElement(ot,Object.assign({},e,{renderTarget:this.renderTrigger()}),this.renderContent())}},{key:"isTooltip",get:function(){return this.props.shouldRenderOffscreen&&!this.props.shouldReturnFocus&&!this.props.shouldContainFocus&&!this.props.shouldFocusContentOnTriggerBlur}},{key:"placement",get:function(){var e=this.props.placement
this.rtl&&(e=ue(e," "))
return!this.shown&&this.props.shouldRenderOffscreen?"offscreen":e}},{key:"positionProps",get:function(){return{offsetX:this.state.offsetX,offsetY:this.state.offsetY,shouldTrackPosition:(this.props.shouldTrackPosition||this.props.trackPosition)&&this.shown,insertAt:this.props.insertAt,placement:this.placement,constrain:this.props.constrain,onPositioned:this.handlePositioned,onPositionChanged:this.handlePositionChanged,target:this.props.positionTarget,mountNode:this.props.mountNode,id:this._id}}},{key:"shown",get:function(){return"undefined"===typeof this.props.isShowingContent&&"undefined"===typeof this.props.show?this.state.isShowingContent:this.props.isShowingContent||this.props.show}},{key:"defaultFocusElement",get:function(){return this.props.defaultFocusElement}}])
n.displayName="Popover"
return n}(r["Component"]),At.Trigger=Dt,At.Content=Ft,At.propTypes={isShowingContent:a.a.bool,defaultIsShowingContent:a.a.bool,on:a.a.oneOfType([a.a.oneOf(["click","hover","focus"]),a.a.arrayOf(a.a.oneOf(["click","hover","focus"]))]),withArrow:a.a.bool,color:a.a.oneOf(["primary","primary-inverse"]),placement:V.placement,shadow:g["a"].shadow,stacking:g["a"].stacking,contentRef:a.a.func,defaultFocusElement:a.a.oneOfType([a.a.element,a.a.func]),screenReaderLabel:a.a.string,offsetX:a.a.oneOfType([a.a.string,a.a.number]),offsetY:a.a.oneOfType([a.a.string,a.a.number]),constrain:V.constrain,positionTarget:a.a.oneOfType([Z["a"],a.a.func]),mountNode:V.mountNode,insertAt:a.a.oneOf(["bottom","top"]),liveRegion:a.a.oneOfType([a.a.arrayOf(a.a.element),a.a.element,a.a.func]),id:a.a.string,shouldAlignArrow:a.a.bool,shouldTrackPosition:a.a.bool,shouldRenderOffscreen:a.a.bool,shouldContainFocus:a.a.bool,shouldReturnFocus:a.a.bool,shouldCloseOnDocumentClick:a.a.bool,shouldCloseOnEscape:a.a.bool,shouldFocusContentOnTriggerBlur:a.a.bool,onShowContent:a.a.func,onHideContent:a.a.func,onPositioned:a.a.func,onPositionChanged:a.a.func,onClick:a.a.func,onFocus:a.a.func,onBlur:a.a.func,onKeyDown:a.a.func,onKeyUp:a.a.func,onMouseOver:a.a.func,onMouseOut:a.a.func,renderTrigger:a.a.oneOfType([a.a.node,a.a.func]),children:a.a.oneOfType([a.a.node,a.a.func]),show:a.a.bool,defaultShow:a.a.bool,variant:a.a.oneOf(["default","inverse"]),alignArrow:a.a.bool,label:a.a.string,trackPosition:a.a.bool,onShow:a.a.func,onDismiss:a.a.func,onToggle:a.a.func},At.defaultProps={isShowingContent:void 0,defaultIsShowingContent:false,placement:"bottom center",stacking:"topmost",shadow:"resting",offsetX:0,offsetY:0,color:"primary",on:["hover","focus"],contentRef:function(e){},withArrow:true,constrain:"window",defaultFocusElement:void 0,screenReaderLabel:void 0,mountNode:void 0,insertAt:"bottom",liveRegion:void 0,positionTarget:void 0,id:void 0,shouldAlignArrow:false,shouldTrackPosition:true,shouldRenderOffscreen:false,shouldContainFocus:false,shouldReturnFocus:true,shouldCloseOnDocumentClick:true,shouldFocusContentOnTriggerBlur:false,shouldCloseOnEscape:true,onShowContent:function(e){},onHideContent:function(e,t){t.documentClick},onClick:function(e){},onFocus:function(e){},onBlur:function(e){},onMouseOver:function(e){},onMouseOut:function(e){},onKeyDown:function(e){},onKeyUp:function(e){},onPositioned:function(e){},onPositionChanged:function(e){},renderTrigger:null,children:null},xt))||zt)||zt)||zt)
var Wt=n("9M3s")
var Zt="getRandomVcryp0123456789bfhijklqsuvwxzABCDEFGHIJKLMNOPQSTUWXYZ"
var Vt=Zt.length-1
function Ut(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n="u".concat(Gt("",t-1))
return e&&false?"".concat(e,"__").concat(n):n}function Xt(e){var t=[]
while(0<e--)t.push(Math.floor(256*Math.random()))
return t}function Gt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n=""
var r=Xt(t)
while(0<t--)n+=Zt[r[t]&Vt]
return n}function Yt(e){var t=e.colors,n=e.typography,r=e.borders,i=e.spacing,o=e.forms
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,borderWidth:r.widthSmall,borderStyle:r.style,borderColor:t.borderMedium,borderRadius:r.radiusMedium,color:t.textDarkest,background:t.backgroundLightest,padding:i.small,focusOutlineWidth:r.widthMedium,focusOutlineStyle:r.style,focusOutlineColor:t.borderBrand,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:n.fontSizeSmall,smallHeight:o.inputHeightSmall,mediumFontSize:n.fontSizeMedium,mediumHeight:o.inputHeightMedium,largeFontSize:n.fontSizeLarge,largeHeight:o.inputHeightLarge}}Yt.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusOutlineColor:e["ic-brand-primary"]}}
var Qt,Jt,$t,en,tn
var nn={componentId:"qBMHb",template:function(e){return"\n\n.qBMHb_cSXm{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";position:relative}\n\n.qBMHb_cSXm,.qBMHb_cSXm:before{box-sizing:border-box;display:block}\n\n.qBMHb_cSXm:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;content:"";left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.qBMHb_cSXm.qBMHb_cVYB:before{opacity:1;transform:scale(1)}\n\n.qBMHb_cSXm.qBMHb_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.qBMHb_cSXm.qBMHb_fszt,.qBMHb_cSXm.qBMHb_fszt.qBMHb_cVYB:before{border-color:').concat(e.errorBorderColor||"inherit","}\n\n.qBMHb_cwos,input[type].qBMHb_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:transparent;border:medium none currentColor;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;outline:none;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n.qBMHb_cwos::-ms-clear,input[type].qBMHb_cwos::-ms-clear{display:none}\n\n.qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button,input[type].qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button{display:none!important}\n\n.qBMHb_cwos:focus,input[type].qBMHb_cwos:focus{box-shadow:none}\n\n.qBMHb_cwos:-ms-input-placeholder,input[type].qBMHb_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos::placeholder,input[type].qBMHb_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos.qBMHb_doqw,input[type].qBMHb_cwos.qBMHb_doqw{font-size:").concat(e.smallFontSize||"inherit",";height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_ycrn,input[type].qBMHb_cwos.qBMHb_ycrn{font-size:").concat(e.mediumFontSize||"inherit",";height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_cMDj,input[type].qBMHb_cwos.qBMHb_cMDj{font-size:").concat(e.largeFontSize||"inherit",";height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_EMjX,input[type].qBMHb_cwos.qBMHb_EMjX{text-align:start}\n\n[dir=ltr] .qBMHb_cwos.qBMHb_EMjX,[dir=ltr] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:left}\n\n[dir=rtl] .qBMHb_cwos.qBMHb_EMjX,[dir=rtl] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:right}\n\n.qBMHb_cwos.qBMHb_ImeN,[dir=ltr] .qBMHb_cwos.qBMHb_ImeN,[dir=ltr] input[type].qBMHb_cwos.qBMHb_ImeN,[dir=rtl] .qBMHb_cwos.qBMHb_ImeN,[dir=rtl] input[type].qBMHb_cwos.qBMHb_ImeN,input[type].qBMHb_cwos.qBMHb_ImeN{text-align:center}")},facade:"qBMHb_cSXm",focused:"qBMHb_cVYB",disabled:"qBMHb_ywdX",invalid:"qBMHb_fszt",input:"qBMHb_cwos",small:"qBMHb_doqw",medium:"qBMHb_ycrn",large:"qBMHb_cMDj","textAlign--start":"qBMHb_EMjX","textAlign--center":"qBMHb_ImeN"}
var rn=(Qt=Object(we["a"])("8.0.0",{label:"renderLabel",required:"isRequired",inline:"display"}),Jt=Object(g["g"])(Yt,nn),Qt($t=Jt($t=(tn=en=function(e){Object(p["a"])(n,e)
var t=Object(f["a"])(n)
function n(e){var r
Object(u["a"])(this,n)
r=t.call(this)
r.handleInputRef=function(e){r._input=e
r.props.inputRef(e)}
r.handleChange=function(e){r.props.onChange(e,e.target.value)}
r.handleBlur=function(e){r.props.onBlur(e)
r.setState({hasFocus:false})}
r.handleFocus=function(e){r.props.onFocus(e)
r.setState({hasFocus:true})}
r.state={hasFocus:false}
r._defaultId=Ut("TextInput")
r._messagesId=Ut("TextInput-messages")
return r}Object(h["a"])(n,[{key:"focus",value:function(){this._input.focus()}},{key:"renderInput",value:function(){var e
var t=this.props,n=t.type,r=t.size,o=t.htmlSize,a=(t.display,t.textAlign),s=t.placeholder,l=t.value,c=t.defaultValue,u=t.required,h=t.isRequired,p=Object(d["a"])(t,["type","size","htmlSize","display","textAlign","placeholder","value","defaultValue","required","isRequired"])
var f=Object(b["b"])(p)
var m=this.interaction
var g=(e={},Object(M["a"])(e,nn.input,true),Object(M["a"])(e,nn[r],r),Object(M["a"])(e,nn["textAlign--".concat(a)],a),e)
var v=""
f["aria-describedby"]&&(v="".concat(f["aria-describedby"]))
this.hasMessages&&(v=""!==v?"".concat(v," ").concat(this._messagesId):this._messagesId)
return i.a.createElement("input",Object.assign({},f,{className:H()(g),defaultValue:c,value:l,placeholder:s,ref:this.handleInputRef,type:n,id:this.id,required:h||u,"aria-invalid":this.invalid?"true":null,disabled:"disabled"===m,readOnly:"readonly"===m,"aria-describedby":""!==v?v:null,size:o,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handleFocus}))}},{key:"render",value:function(){var e
var t=this.props,n=t.width,r=t.inline,o=t.display,a=t.label,s=t.renderLabel,l=t.renderBeforeInput,c=t.renderAfterInput,d=t.messages,u=t.inputContainerRef,h=t.icon,p=t.shouldNotWrap
var f=this.interaction
var m=l||c||h
var g=(e={},Object(M["a"])(e,nn.facade,true),Object(M["a"])(e,nn.disabled,"disabled"===f),Object(M["a"])(e,nn.invalid,this.invalid),Object(M["a"])(e,nn.focused,this.state.hasFocus),e)
return i.a.createElement(A["a"],{id:this.id,label:Object(Ce["a"])(s||a),messagesId:this._messagesId,messages:d,inline:"inline-block"===o||r,width:n,inputContainerRef:u,layout:this.props.layout},i.a.createElement("span",{className:H()(g)},m?i.a.createElement(B["a"],{wrap:p?"no-wrap":"wrap"},l&&i.a.createElement(B["a"].Item,{padding:"0 0 0 small"},Object(Ce["a"])(l)),i.a.createElement(B["a"].Item,{shouldGrow:true,shouldShrink:true},i.a.createElement(B["a"],null,i.a.createElement(B["a"].Item,{shouldGrow:true,shouldShrink:true},this.renderInput()),(c||h)&&i.a.createElement(B["a"].Item,{padding:"0 small 0 0"},c?Object(Ce["a"])(c):Object(Ce["a"])(h))))):this.renderInput()))}},{key:"interaction",get:function(){return Object(F["a"])({props:this.props})}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"focused",get:function(){return Object(W["a"])(this._input)}},{key:"value",get:function(){return this._input.value}},{key:"id",get:function(){return this.props.id||this._defaultId}}])
n.displayName="TextInput"
return n}(r["Component"]),en.propTypes={renderLabel:a.a.oneOfType([a.a.node,a.a.func]),type:a.a.oneOf(["text","email","url","tel","search","password"]),id:a.a.string,value:Object(Wt["a"])(a.a.string),defaultValue:a.a.string,interaction:a.a.oneOf(["enabled","disabled","readonly"]),messages:a.a.arrayOf(A["c"].message),size:a.a.oneOf(["small","medium","large"]),textAlign:a.a.oneOf(["start","center"]),width:a.a.string,htmlSize:a.a.oneOfType([a.a.string,a.a.number]),display:a.a.oneOf(["inline-block","block"]),shouldNotWrap:a.a.bool,placeholder:a.a.string,isRequired:a.a.bool,inputRef:a.a.func,inputContainerRef:a.a.func,renderBeforeInput:a.a.oneOfType([a.a.node,a.a.func]),renderAfterInput:a.a.oneOfType([a.a.node,a.a.func]),onChange:a.a.func,onBlur:a.a.func,onFocus:a.a.func,icon:a.a.func,label:a.a.oneOfType([a.a.node,a.a.func]),required:a.a.bool,inline:a.a.bool},en.defaultProps={renderLabel:void 0,type:"text",id:void 0,interaction:void 0,isRequired:false,value:void 0,defaultValue:void 0,display:"block",shouldNotWrap:false,placeholder:void 0,width:void 0,size:"medium",htmlSize:void 0,textAlign:"start",messages:[],inputRef:function(e){},inputContainerRef:function(e){},onChange:function(e,t){},onBlur:function(e){},onFocus:function(e){},renderBeforeInput:void 0,renderAfterInput:void 0},tn))||$t)||$t)
var on="getRandomVcryp0123456789bfhijklqsuvwxzABCDEFGHIJKLMNOPQSTUWXYZ"
var an=on.length-1
function sn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n="u".concat(cn("",t-1))
return e&&false?"".concat(e,"__").concat(n):n}function ln(e){var t=[]
while(0<e--)t.push(Math.floor(256*Math.random()))
return t}function cn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n=""
var r=ln(t)
while(0<t--)n+=on[r[t]&an]
return n}var dn=n("yNPr")
function un(e){var t=e.colors,n=e.typography,r=e.spacing
return{fontSize:n.fontSizeMedium,fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,lineHeight:n.lineHeightCondensed,color:t.textDarkest,background:t.backgroundLightest,highlightedLabelColor:t.textLightest,highlightedBackground:t.backgroundBrand,selectedLabelColor:t.textLightest,selectedBackground:t.backgroundDark,padding:"".concat(r.xSmall," ").concat(r.small),iconPadding:r.small,nestedPadding:r.medium}}un.canvas=function(e){return{color:e["ic-brand-font-color-dark"],highlightedBackground:e["ic-brand-primary"]}}
var hn,pn,fn,mn,gn
var bn={componentId:"eqmZq",template:function(e){return"\n\n.eqmZq_bGBk{-ms-user-select:none;-webkit-user-select:none;background:".concat(e.background||"inherit",";color:").concat(e.color||"inherit",";cursor:pointer;display:block;font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.mediumFontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit",";outline:none;position:relative;transition:background 200ms;user-select:none}\n\n.eqmZq_crZr{display:block;padding:").concat(e.padding||"inherit","}\n\n.eqmZq_caGd{align-items:center;display:flex;fill:").concat(e.iconColor||"inherit",";height:100%;pointer-events:none;position:absolute;top:0}\n\n.eqmZq_caGd.eqmZq_fgsM{offset-inline-end:auto;offset-inline-start:").concat(e.iconPadding||"inherit","}\n\n[dir=ltr] .eqmZq_caGd.eqmZq_fgsM{left:").concat(e.iconPadding||"inherit",";right:auto}\n\n[dir=rtl] .eqmZq_caGd.eqmZq_fgsM{left:auto;right:").concat(e.iconPadding||"inherit","}\n\n.eqmZq_caGd.eqmZq_cGRw{offset-inline-end:").concat(e.iconPadding||"inherit",";offset-inline-start:auto}\n\n[dir=ltr] .eqmZq_caGd.eqmZq_cGRw{left:auto;right:").concat(e.iconPadding||"inherit","}\n\n[dir=rtl] .eqmZq_caGd.eqmZq_cGRw{left:").concat(e.iconPadding||"inherit",";right:auto}\n\n.eqmZq_cbMJ{background:").concat(e.highlightedBackground||"inherit","}\n\n.eqmZq_cbMJ,.eqmZq_dDxn{color:").concat(e.highlightedLabelColor||"inherit","}\n\n.eqmZq_dDxn{background:").concat(e.selectedBackground||"inherit","}\n\n.eqmZq_bZuE{cursor:not-allowed;opacity:0.5}\n\n.eqmZq_cNUG{cursor:default}\n\n.eqmZq_cNUG>.eqmZq_crZr{padding:0}\n\n.eqmZq_ePLU .eqmZq_crZr{-webkit-padding-end:").concat(e.iconPadding||"inherit",";-webkit-padding-start:calc(").concat(e.iconPadding||"inherit","*2 + 1em);padding-inline-end:").concat(e.iconPadding||"inherit",";padding-inline-start:calc(").concat(e.iconPadding||"inherit","*2 + 1em)}\n\n[dir=ltr] .eqmZq_ePLU .eqmZq_crZr{padding-left:calc(").concat(e.iconPadding||"inherit","*2 + 1em);padding-right:").concat(e.iconPadding||"inherit","}\n\n[dir=rtl] .eqmZq_ePLU .eqmZq_crZr{padding-left:").concat(e.iconPadding||"inherit",";padding-right:calc(").concat(e.iconPadding||"inherit","*2 + 1em)}\n\n.eqmZq_bRPx .eqmZq_crZr{-webkit-padding-end:calc(").concat(e.iconPadding||"inherit","*2 + 1em);-webkit-padding-start:").concat(e.iconPadding||"inherit",";padding-inline-end:calc(").concat(e.iconPadding||"inherit","*2 + 1em);padding-inline-start:").concat(e.iconPadding||"inherit","}\n\n[dir=ltr] .eqmZq_bRPx .eqmZq_crZr{padding-left:").concat(e.iconPadding||"inherit",";padding-right:calc(").concat(e.iconPadding||"inherit","*2 + 1em)}\n\n[dir=rtl] .eqmZq_bRPx .eqmZq_crZr{padding-left:calc(").concat(e.iconPadding||"inherit","*2 + 1em);padding-right:").concat(e.iconPadding||"inherit","}\n\n.eqmZq_bRPx.eqmZq_ePLU .eqmZq_crZr{-webkit-padding-end:calc(").concat(e.iconPadding||"inherit","*2 + 1em);-webkit-padding-start:calc(").concat(e.iconPadding||"inherit","*2 + 1em);padding-inline-end:calc(").concat(e.iconPadding||"inherit","*2 + 1em);padding-inline-start:calc(").concat(e.iconPadding||"inherit","*2 + 1em)}\n\n[dir=ltr] .eqmZq_bRPx.eqmZq_ePLU .eqmZq_crZr{padding-left:calc(").concat(e.iconPadding||"inherit","*2 + 1em);padding-right:calc(").concat(e.iconPadding||"inherit","*2 + 1em)}\n\n[dir=rtl] .eqmZq_bRPx.eqmZq_ePLU .eqmZq_crZr{padding-left:calc(").concat(e.iconPadding||"inherit","*2 + 1em);padding-right:calc(").concat(e.iconPadding||"inherit","*2 + 1em)}\n\n.eqmZq_bGBk .eqmZq_bGBk:not(.eqmZq_ePLU) .eqmZq_crZr{-webkit-padding-start:").concat(e.nestedPadding||"inherit",";padding-inline-start:").concat(e.nestedPadding||"inherit","}\n\n[dir=ltr] .eqmZq_bGBk .eqmZq_bGBk:not(.eqmZq_ePLU) .eqmZq_crZr{padding-left:").concat(e.nestedPadding||"inherit","}\n\n[dir=rtl] .eqmZq_bGBk .eqmZq_bGBk:not(.eqmZq_ePLU) .eqmZq_crZr{padding-right:").concat(e.nestedPadding||"inherit","}\n\n.eqmZq_bGBk .eqmZq_bGBk:not(.eqmZq_ePLU) .eqmZq_fgsM{offset-inline-start:").concat(e.nestedPadding||"inherit","}\n\n[dir=ltr] .eqmZq_bGBk .eqmZq_bGBk:not(.eqmZq_ePLU) .eqmZq_fgsM{left:").concat(e.nestedPadding||"inherit","}\n\n[dir=rtl] .eqmZq_bGBk .eqmZq_bGBk:not(.eqmZq_ePLU) .eqmZq_fgsM{right:").concat(e.nestedPadding||"inherit","}")},root:"eqmZq_bGBk",container:"eqmZq_crZr",content:"eqmZq_caGd","content--before":"eqmZq_fgsM","content--after":"eqmZq_cGRw",isHighlighted:"eqmZq_cbMJ",isSelected:"eqmZq_dDxn",isDisabled:"eqmZq_bZuE",containsList:"eqmZq_cNUG",hasContentBeforeLabel:"eqmZq_ePLU",hasContentAfterLabel:"eqmZq_bRPx"}
var vn=(hn=Object(m["a"])(),pn=Object(g["g"])(un,bn),hn(fn=pn(fn=(gn=mn=function(e){Object(p["a"])(n,e)
var t=Object(f["a"])(n)
function n(){Object(u["a"])(this,n)
return t.apply(this,arguments)}Object(h["a"])(n,[{key:"renderContent",value:function(e){var t
var n=this.props,r=n.renderBeforeLabel,o=n.renderAfterLabel
var a=(t={},Object(M["a"])(t,bn.content,true),Object(M["a"])(t,bn["content--".concat(e)],true),t)
return i.a.createElement("span",{className:H()(a),role:"presentation","aria-hidden":"true"},"before"===e&&Object(Ce["a"])(r),"after"===e&&Object(Ce["a"])(o))}},{key:"render",value:function(){var e
var t=this.props,r=t.as,o=t.role,a=t.variant,s=t.renderBeforeLabel,l=t.renderAfterLabel,c=t.children
var d=Object(dn["a"])(n,this.props,(function(){return r}))
var u=Object(b["a"])(this.props,n.propTypes)
var h=(e={},Object(M["a"])(e,bn.root,true),Object(M["a"])(e,bn.isDisabled,"disabled"===a),Object(M["a"])(e,bn.isHighlighted,"highlighted"===a),Object(M["a"])(e,bn.isSelected,"selected"===a),Object(M["a"])(e,bn.containsList,this.containsList),Object(M["a"])(e,bn.hasContentBeforeLabel,s),Object(M["a"])(e,bn.hasContentAfterLabel,l),e)
return i.a.createElement(d,{role:"none",className:H()(h)},i.a.createElement("span",Object.assign({},u,{className:bn.container,role:o}),c),s&&this.renderContent("before"),l&&this.renderContent("after"))}},{key:"containsList",get:function(){if(Object(D["a"])(this.props.children,["Options"]))return true
return false}}])
n.displayName="Item"
return n}(r["Component"]),mn.propTypes={as:a.a.elementType,variant:a.a.oneOf(["default","highlighted","selected","disabled"]),role:a.a.string,renderBeforeLabel:a.a.oneOfType([a.a.node,a.a.func]),renderAfterLabel:a.a.oneOfType([a.a.node,a.a.func]),children:a.a.oneOfType([a.a.node,a.a.func])},mn.defaultProps={as:"span",variant:"default",role:"listitem",renderBeforeLabel:null,renderAfterLabel:null,children:null},gn))||fn)||fn)
var On=function(e){var t=e.colors,n=e.borders,r=e.spacing
return{background:t.backgroundMedium,height:n.widthSmall,margin:"0 ".concat(r.small)}}
var _n,qn,wn,yn
var En={componentId:"clioX",template:function(e){return"\n\n.clioX_fatK{background:".concat(e.background||"inherit",";height:").concat(e.height||"inherit",";margin:").concat(e.margin||"inherit",";overflow:hidden}")},separator:"clioX_fatK"}
var jn=(_n=Object(g["g"])(On,En),_n(qn=(yn=wn=function(e){Object(p["a"])(n,e)
var t=Object(f["a"])(n)
function n(){Object(u["a"])(this,n)
return t.apply(this,arguments)}Object(h["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.as,r=Object(d["a"])(e,["as"])
var o=Object(dn["a"])(n,this.props,(function(){return t}))
return i.a.createElement(o,{role:"none"},i.a.createElement("div",Object.assign({},r,{className:En.separator,role:"presentation"})))}}])
n.displayName="Separator"
return n}(r["Component"]),wn.propTypes={as:a.a.elementType},wn.defaultProps={as:"span"},yn))||qn)
function Cn(e){var t=e.colors,n=e.typography,r=e.spacing
return{labelFontWeight:n.fontWeightBold,background:t.backgroundLightest,labelColor:t.textDarkest,labelPadding:"".concat(r.xSmall," 0"),nestedLabelPadding:"".concat(r.xSmall," ").concat(r.small)}}var Kn,kn,Sn,Bn,Rn
var Pn={componentId:"ctdXH",template:function(e){return"\n\n.ctdXH_bGBk{box-sizing:border-box;word-wrap:break-word}\n\n.ctdXH_cpmC{list-style-type:none;position:relative}\n\n.ctdXH_blJt{color:".concat(e.labelColor||"inherit",";cursor:default;display:block;font-weight:").concat(e.labelFontWeight||"inherit",";padding:").concat(e.nestedLabelPadding||"inherit","}")},root:"ctdXH_bGBk",list:"ctdXH_cpmC",label:"ctdXH_blJt"}
var In=(Kn=Object(m["a"])(),kn=Object(g["g"])(Cn,Pn),Kn(Sn=kn(Sn=(Rn=Bn=function(e){Object(p["a"])(n,e)
var t=Object(f["a"])(n)
function n(){var e
Object(u["a"])(this,n)
for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e._labelId=sn("Options-label")
return e}Object(h["a"])(n,[{key:"renderLabel",value:function(){var e=this.props.renderLabel
return i.a.createElement("span",{id:this._labelId,role:"presentation",className:H()(Object(M["a"])({},Pn.label,true))},Object(Ce["a"])(e))}},{key:"renderSubList",value:function(e){return i.a.createElement(vn,{as:this.childAs,role:"presentation",className:Pn.label},e)}},{key:"renderChildren",value:function(){var e=this
var t=this.props.children
return r["Children"].map(t,(function(t){if(Object(D["a"])(t,["Options"]))return e.renderSubList(t)
if(Object(D["a"])(t,["Item","Separator"]))return Object(je["a"])(t,{as:e.childAs})}))}},{key:"render",value:function(){var e=k["a"].omitViewProps(Object(b["a"])(this.props,n.propTypes),n)
var t=this.props,r=t.as,o=t.role,a=t.elementRef,s=t.renderLabel
return i.a.createElement("div",{className:Pn.root,role:"presentation"},s&&this.renderLabel(),i.a.createElement(k["a"],Object.assign({},e,{elementRef:a,className:Pn.list,as:r,role:o,display:"block",margin:"none",padding:"none",background:"primary","aria-labelledby":s&&this._labelId}),this.renderChildren()))}},{key:"childAs",get:function(){var e=this.props.as
if("ul"===e||"ol"===e)return"li"
return}}])
n.displayName="Options"
return n}(r["Component"]),Bn.Item=vn,Bn.Separator=jn,Bn.propTypes={as:a.a.elementType,role:a.a.string,elementRef:a.a.func,renderLabel:a.a.oneOfType([a.a.node,a.a.func]),children:z["a"].oneOf(["Options","Item","Separator"])},Bn.defaultProps={as:"span",role:"list",elementRef:function(e){},renderLabel:null,children:null},Rn))||Sn)||Sn)
var Mn=n("Dud2")
var Tn=n("Afqh")
var Ln="getRandomVcryp0123456789bfhijklqsuvwxzABCDEFGHIJKLMNOPQSTUWXYZ"
var Hn=Ln.length-1
function zn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n="u".concat(xn("",t-1))
return e&&false?"".concat(e,"__").concat(n):n}function An(e){var t=[]
while(0<e--)t.push(Math.floor(256*Math.random()))
return t}function xn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n=""
var r=An(t)
while(0<t--)n+=Ln[r[t]&Hn]
return n}var Dn=function(e){Object(p["a"])(n,e)
var t=Object(f["a"])(n)
function n(){Object(u["a"])(this,n)
return t.apply(this,arguments)}Object(h["a"])(n,[{key:"render",value:function(){return null}}])
n.displayName="Option"
return n}(r["Component"])
Dn.propTypes={id:a.a.string.isRequired,isHighlighted:a.a.bool,isSelected:a.a.bool,isDisabled:a.a.bool,renderBeforeLabel:a.a.oneOfType([a.a.node,a.a.func]),renderAfterLabel:a.a.oneOfType([a.a.node,a.a.func]),children:a.a.node}
Dn.defaultProps={isHighlighted:false,isSelected:false,isDisabled:false,renderBeforeLabel:void 0,renderAfterLabel:void 0,children:null}
var Fn=function(e){Object(p["a"])(n,e)
var t=Object(f["a"])(n)
function n(){Object(u["a"])(this,n)
return t.apply(this,arguments)}Object(h["a"])(n,[{key:"render",value:function(){return null}}])
n.displayName="Group"
return n}(r["Component"])
Fn.propTypes={renderLabel:a.a.oneOfType([a.a.node,a.a.func]).isRequired,children:z["a"].oneOf([Dn])}
Fn.defaultProps={children:null}
function Nn(e){var t=e.colors,n=e.typography
return{fontSize:n.fontSizeMedium,fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,smallIconSize:n.fontSizeXSmall,mediumIconSize:n.fontSizeSmall,largeIconSize:n.fontSizeMedium,color:t.textDarkest,background:t.backgroundLightest}}var Wn,Zn,Vn,Un,Xn
var Gn={componentId:"cCAhm",template:function(e){return"\n\n.cCAhm_bGBk{color:".concat(e.color||"inherit",";font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit","}\n\n.cCAhm_doqw .cCAhm_dnnz{font-size:").concat(e.smallIconSize||"inherit","}\n\n.cCAhm_ycrn .cCAhm_dnnz{font-size:").concat(e.mediumIconSize||"inherit","}\n\n.cCAhm_cMDj .cCAhm_dnnz{font-size:").concat(e.largeIconSize||"inherit","}\n\n.cCAhm_dJgE{display:none}")},root:"cCAhm_bGBk",small:"cCAhm_doqw",icon:"cCAhm_dnnz",medium:"cCAhm_ycrn",large:"cCAhm_cMDj",assistiveText:"cCAhm_dJgE"}
var Yn=i.a.createElement(In.Separator,null)
var Qn=i.a.createElement(In.Separator,null)
var Jn=i.a.createElement(Mn["a"],{inline:false})
var $n=i.a.createElement(Tn["a"],{inline:false})
var er=(Wn=Object(m["a"])(),Zn=Object(g["g"])(Nn,Gn),Wn(Vn=Zn(Vn=(Xn=Un=function(e){Object(p["a"])(n,e)
var t=Object(f["a"])(n)
function n(){var e
Object(u["a"])(this,n)
for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e.state={hasInputRef:false}
e._defaultId=zn("Select")
e._assistId=zn("Select-assistiveText")
e._input=null
e._inputContainer=null
e._list=null
e._optionIds=[]
e._optionHeight=36
e.handleInputRef=function(t){e.state.hasInputRef||e.setState({hasInputRef:true})
e._input=t
e.props.inputRef(t)}
e.handleListRef=function(t){e._list=t
e.props.listRef(t)
t&&(e._optionHeight=t.querySelector('[role="option"]').offsetHeight)}
e.handleInputContainerRef=function(t){e._inputContainer=t}
return e}Object(h["a"])(n,[{key:"focus",value:function(){this._input&&this._input.focus()}},{key:"componentDidUpdate",value:function(){this.scrollToOption(this.highlightedOptionId)}},{key:"scrollToOption",value:function(e){if(this._listView){var t=this._listView.querySelector('[id="'.concat(e,'"]'))
if(!t)return
var n=t.parentNode
var r=Object(N["a"])(this._listView).top
var i=Object(N["a"])(n).top
var o=r+this._listView.clientHeight
var a=i+n.clientHeight
a>o?this._listView.scrollTop+=a-o:i<r&&(this._listView.scrollTop-=r-i)}}},{key:"highlightOption",value:function(e,t){var n=this.props.onRequestHighlightOption
t&&n(e,{id:t})}},{key:"getEventHandlers",value:function(){var e=this
var t=this.props,n=t.isShowingOptions,r=t.onRequestShowOptions,i=t.onRequestHideOptions,o=t.onRequestSelectOption
var a=this.highlightedOptionId
var s=this.selectedOptionId
return"enabled"===this.interaction?{onRequestShowOptions:function(t){r(t)
s&&!Array.isArray(s)&&e.highlightOption(t,s)},onRequestHideOptions:function(e){i(e)},onRequestHighlightOption:function(t,r){var i=r.id,o=r.direction
if(!n)return
var s=e._optionIds.indexOf(i)>-1?i:null
if(!s)if(a){var l=e._optionIds.indexOf(a)
s=l>-1?e._optionIds[l+o]:null}else s=e._optionIds[0]
s&&e.highlightOption(t,s)},onRequestHighlightFirstOption:function(t){e.highlightOption(t,e._optionIds[0])},onRequestHighlightLastOption:function(t){e.highlightOption(t,e._optionIds[e._optionIds.length-1])},onRequestSelectOption:function(t,n){var r=n.id
r&&-1!==e._optionIds.indexOf(r)&&o(t,{id:r})}}:{}}},{key:"renderOption",value:function(e,t){var n=t.getOptionProps,r=t.getDisabledOptionProps
var o=e.props,a=o.id,s=o.isDisabled,l=o.isHighlighted,c=o.isSelected,d=o.renderBeforeLabel,u=o.renderAfterLabel,h=o.children
var p=Object(T["a"])({},Object(b["a"])(e.props,Object(T["a"])({},Dn.propTypes,{},In.Item.propTypes)),{},n({id:a}),{renderBeforeLabel:d,renderAfterLabel:u})
c?p.variant="selected":l&&(p.variant="highlighted")
if(s){p.variant="disabled"
p=Object(T["a"])({},p,{},r())}else this._optionIds.push(a)
return i.a.createElement(In.Item,p,h)}},{key:"renderGroup",value:function(e,t){var n=this
var o=t.getOptionProps,a=t.getDisabledOptionProps,s=t.isFirstChild,l=t.isLastChild,c=t.afterGroup
var u=e.props,h=u.id,p=u.renderLabel,f=u.children,m=Object(d["a"])(u,["id","renderLabel","children"])
var g=[]
s||c||g.push(Yn)
g.push(i.a.createElement(In,Object.assign({id:h,as:"ul",role:"group",renderLabel:p},Object(b["a"])(m,Object(T["a"])({},In.propTypes,{},Fn.propTypes))),r["Children"].map(f,(function(e){return n.renderOption(e,{getOptionProps:o,getDisabledOptionProps:a})}))))
l||g.push(Qn)
return g}},{key:"renderList",value:function(e){var t=this
var n=e.getListProps,o=e.getOptionProps,a=e.getDisabledOptionProps
var s=this.props,l=s.isShowingOptions,c=s.optionsMaxWidth,d=s.visibleOptionsCount,u=s.children
var h=false
var p=l?{display:"block",overflowY:"auto",maxHeight:this._optionHeight*d,maxWidth:c||this.width,background:"primary",elementRef:function(e){return t._listView=e}}:{maxHeight:0}
return i.a.createElement(k["a"],p,i.a.createElement(In,n({as:"ul",elementRef:this.handleListRef}),l?r["Children"].map(u,(function(e,n){if(!e||!Object(D["a"])(e,[Fn,Dn]))return
if(Object(D["a"])(e,[Dn])){h=false
return t.renderOption(e,{getOptionProps:o,getDisabledOptionProps:a})}if(Object(D["a"])(e,[Fn])){var i=!!h
h=true
return t.renderGroup(e,{getOptionProps:o,getDisabledOptionProps:a,isFirstChild:0===n,isLastChild:n===r["Children"].count(u)-1,afterGroup:i})}})):null))}},{key:"renderIcon",value:function(){return i.a.createElement("span",{className:Gn.icon},this.props.isShowingOptions?Jn:$n)}},{key:"renderInput",value:function(e){var t=e.getInputProps,r=e.getTriggerProps
var o=this.props,a=o.renderLabel,s=o.inputValue,l=o.placeholder,c=o.isRequired,u=o.shouldNotWrap,h=o.size,p=o.isInline,f=o.width,m=o.htmlSize,g=o.messages,v=o.renderBeforeInput,O=o.renderAfterInput,_=o.onFocus,q=o.onBlur,w=o.onInputChange,y=o.onRequestHideOptions,E=Object(d["a"])(o,["renderLabel","inputValue","placeholder","isRequired","shouldNotWrap","size","isInline","width","htmlSize","messages","renderBeforeInput","renderAfterInput","onFocus","onBlur","onInputChange","onRequestHideOptions"])
var j=this.interaction
var C=Object(b["a"])(E,n.propTypes)
var K=r(Object(T["a"])({},C)),k=K.ref,S=Object(d["a"])(K,["ref"])
var B="undefined"!==typeof w
var R=B?{}:{role:"button",title:s,"aria-autocomplete":null}
C["autoComplete"]&&(R.autoComplete=C["autoComplete"])
return i.a.createElement(rn,Object.assign({},S,t(Object(T["a"])({id:this.id,renderLabel:a,placeholder:l,size:h,width:f,htmlSize:m,messages:g,value:s,inputRef:Object(x["a"])(k,this.handleInputRef),inputContainerRef:this.handleInputContainerRef,interaction:"enabled"!==j||B?j:"readonly",isRequired:c,shouldNotWrap:u,display:p?"inline-block":"block",renderBeforeInput:v,renderAfterInput:O||this.renderIcon(),onChange:w,onFocus:_,onBlur:Object(x["a"])(q,y)},R))))}},{key:"render",value:function(){var e=this
var t=this.props,n=t.size,r=t.constrain,o=t.placement,a=t.mountNode,s=t.assistiveText,l=t.isShowingOptions
this._optionIds=[]
var c=this.highlightedOptionId
var d=this.selectedOptionId
var u=H()(Gn.root,Object(M["a"])({},Gn[n],n))
return i.a.createElement(ee,Object.assign({highlightedOptionId:c,isShowingOptions:l,selectedOptionId:d||null},this.getEventHandlers()),(function(t){var n=t.getRootProps,c=t.getInputProps,d=t.getTriggerProps,h=t.getListProps,p=t.getOptionProps,f=t.getDisabledOptionProps,m=t.getDescriptionProps
return i.a.createElement("span",n({className:u}),e.renderInput({getInputProps:c,getTriggerProps:d}),i.a.createElement("span",Object.assign({},m(),{className:Gn.assistiveText}),s),i.a.createElement(Nt,{constrain:r,placement:o,mountNode:a,positionTarget:e._inputContainer,isShowingContent:l,shouldReturnFocus:false,withArrow:false},e.renderList({getListProps:h,getOptionProps:p,getDisabledOptionProps:f})))}))}},{key:"focused",get:function(){return this._input&&Object(W["a"])(this._input)}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"width",get:function(){return this._inputContainer&&this._inputContainer.offsetWidth}},{key:"interaction",get:function(){return Object(F["a"])({props:this.props})}},{key:"highlightedOptionId",get:function(){var e=null
r["Children"].toArray(this.props.children).forEach((function(t){Object(D["a"])(t,[Fn])?r["Children"].toArray(t.props.children).forEach((function(t){t.props.isHighlighted&&(e=t.props.id)})):t.props.isHighlighted&&(e=t.props.id)}))
return e}},{key:"selectedOptionId",get:function(){var e=[]
r["Children"].toArray(this.props.children).forEach((function(t){Object(D["a"])(t,[Fn])?r["Children"].toArray(t.props.children).forEach((function(t){t.props.isSelected&&e.push(t.props.id)})):t.props.isSelected&&e.push(t.props.id)}))
if(1===e.length)return e[0]
if(0===e.length)return null
return e}}])
n.displayName="Select"
return n}(r["Component"]),Un.Option=Dn,Un.Group=Fn,Un.propTypes={renderLabel:a.a.oneOfType([a.a.node,a.a.func]).isRequired,inputValue:a.a.string,isShowingOptions:a.a.bool,id:a.a.string,size:a.a.oneOf(["small","medium","large"]),assistiveText:a.a.string,placeholder:a.a.string,interaction:a.a.oneOf(["enabled","disabled","readonly"]),isRequired:a.a.bool,isInline:a.a.bool,width:a.a.string,htmlSize:a.a.oneOfType([a.a.string,a.a.number]),optionsMaxWidth:a.a.string,visibleOptionsCount:a.a.number,messages:a.a.arrayOf(A["c"].message),placement:V.placement,constrain:V.constrain,mountNode:V.mountNode,onFocus:a.a.func,onBlur:a.a.func,onInputChange:a.a.func,onRequestShowOptions:a.a.func,onRequestHideOptions:a.a.func,onRequestHighlightOption:a.a.func,onRequestSelectOption:a.a.func,inputRef:a.a.func,listRef:a.a.func,renderBeforeInput:a.a.oneOfType([a.a.node,a.a.func]),renderAfterInput:a.a.oneOfType([a.a.node,a.a.func]),children:z["a"].oneOf([Fn,Dn]),shouldNotWrap:a.a.bool},Un.defaultProps={inputValue:"",isShowingOptions:false,id:void 0,size:"medium",assistiveText:void 0,placeholder:null,interaction:void 0,isRequired:false,isInline:false,width:void 0,htmlSize:void 0,optionsMaxWidth:void 0,visibleOptionsCount:8,messages:void 0,placement:"bottom stretch",constrain:"window",mountNode:void 0,onFocus:function(e){},onBlur:function(e){},onInputChange:void 0,onRequestShowOptions:function(e){},onRequestHideOptions:function(e){},onRequestHighlightOption:function(e,t){},onRequestSelectOption:function(e,t){},inputRef:function(e){},listRef:function(e){},renderBeforeInput:null,renderAfterInput:null,children:null,shouldNotWrap:false},Xn))||Vn)||Vn)
const tr="_noOptionsOption"
function nr(){return i.a.createElement("div",null)}nr.propTypes={id:o["string"].isRequired,value:o["string"].isRequired}
function rr(){return i.a.createElement("div",null)}rr.propTypes={label:o["string"].isRequired}
class ir extends i.a.Component{constructor(e){super(e)
this.backupKey=0
this.handleBlur=e=>{this.setState({highlightedOptionId:null,announcement:null})
this.props.onBlur&&this.props.onBlur(e)}
this.handleShowOptions=()=>{this.setState({isShowingOptions:true})}
this.handleHideOptions=e=>{this.setState(e=>{const t=this.getOptionLabelById(e.selectedOptionId)
return{isShowingOptions:false,highlightedOptionId:null,inputValue:t}})}
this.handleHighlightOption=(e,{id:t})=>{if(t===tr)return
const n=this.getOptionLabelById(t)
const r=this.state.isShowingOptions?"":this.props.translatedStrings.LIST_EXPANDED
const i="keydown"===e.type?n:this.state.inputValue
this.setState({highlightedOptionId:t,inputValue:i,announcement:`${n} ${r}`})}
this.handleSelectOption=(e,{id:t})=>{if(t===tr)this.setState({isShowingOptions:false,announcement:this.props.translatedStrings.LIST_COLLAPSED})
else{const n=this.getOptionLabelById(t)
const r=this.state.selectedOptionId
this.setState({selectedOptionId:t,inputValue:n,isShowingOptions:false,announcement:l()(this.props.translatedStrings.OPTION_SELECTED,{option:n})})
const i=this.getOptionByFieldValue("id",t)
r!==t&&this.props.onChange(e,i.props.value)}}
const t=this.getOptionByFieldValue("value",e.value)
this.state={inputValue:t?t.props.children:"",isShowingOptions:false,highlightedOptionId:null,selectedOptionId:t?t.props.id:null,announcement:null}
this._selectRef=i.a.createRef()}focus(){var e
null===(e=this._selectRef.current)||void 0===e||e.focus()}componentDidUpdate(e){if(this.props.value!==e.value||!Object(I["isEqual"])(this.props.children,e.children)){const e=this.getOptionByFieldValue("value",this.props.value)
this.setState({inputValue:e?e.props.children:"",selectedOptionId:e?e.props.id:""})}}render(){const e=this.props,t=e.id,n=e.label,r=(e.value,e.onChange,e.children),o=(e.noOptionsLabel,Object(d["a"])(e,["id","label","value","onChange","children","noOptionsLabel"]))
return i.a.createElement(i.a.Fragment,null,i.a.createElement(er,Object.assign({ref:this._selectRef,id:t,renderLabel:()=>n,assistiveText:this.props.translatedStrings.USE_ARROWS,inputValue:this.state.inputValue,isShowingOptions:this.state.isShowingOptions,onBlur:this.handleBlur,onRequestShowOptions:this.handleShowOptions,onRequestHideOptions:this.handleHideOptions,onRequestHighlightOption:this.handleHighlightOption,onRequestSelectOption:this.handleSelectOption},o),this.renderChildren(r)),i.a.createElement(c["a"],{liveRegion:this.props.liveRegion,liveRegionPoliteness:"assertive",screenReaderOnly:true},this.state.announcement))}renderChildren(e){if(!Array.isArray(e))return Object(D["a"])(e,[nr])?this.renderOption(e):Object(D["a"])(e,[rr])?this.renderGroup(e):this.renderNoOptionsOption()
const t=e.map(e=>{if(Array.isArray(e))return this.renderChildren(e)
if(Object(D["a"])(e,[nr]))return this.renderOption(e)
if(Object(D["a"])(e,[rr]))return this.renderGroup(e)
return null}).filter(e=>!!e)
if(0===t.length)return this.renderNoOptionsOption()
return t}renderOption(e){const t=e.props,n=t.id,r=t.children,o=Object(d["a"])(t,["id","children"])
return i.a.createElement(er.Option,Object.assign({id:n,key:e.key||n||++this.backupKey,isHighlighted:n===this.state.highlightedOptionId,isSelected:n===this.state.selectedOptionId},o),r)}renderGroup(e){const t=e.props,n=t.id,r=t.label,o=Object(d["a"])(t,["id","label"])
const a=Object(I["compact"])(Object(I["castArray"])(e.props.children))
return i.a.createElement(er.Group,Object.assign({"data-testid":"Group:"+r,renderLabel:()=>r,key:e.key||n||++this.backupKey},o),a.map(e=>this.renderOption(e)))}renderNoOptionsOption(){return i.a.createElement(er.Option,{id:tr,isHighlighted:false,isSelected:false},this.props.noOptionsLabel)}getOptionLabelById(e){const t=this.getOptionByFieldValue("id",e)
return t?t.props.children:""}getOptionByFieldValue(e,t,n=Object(I["castArray"])(this.props.children)){if(!this.props.children)return null
let r=null
for(let i=0;i<n.length;++i){const o=n[i]
if(Array.isArray(o))r=this.getOptionByFieldValue(e,t,o)
else if(Object(D["a"])(o,[nr]))o.props[e]===t&&(r=o)
else if(Object(D["a"])(o,[rr])){const n=Object(I["castArray"])(o.props.children)
for(let i=0;i<n.length;++i){const o=n[i]
if(o.props[e]===t){r=o
break}}}if(r)break}return r}}ir.Option=nr
ir.Group=rr
ir.propTypes={id:o["string"],label:Object(o["oneOfType"])([o["node"],o["func"]]).isRequired,liveRegion:o["func"],value:o["string"],onChange:o["func"].isRequired,children:o["node"],noOptionsLabel:o["string"],translatedStrings:Object(o["shape"])({USE_ARROWS:o["string"].isRequired,LIST_COLLAPSED:o["string"].isRequired,LIST_EXPANDED:o["string"].isRequired,OPTION_SELECTED:o["string"].isRequired}),onBlur:o["func"]}
ir.defaultProps={noOptionsLabel:"---"}
class or extends r["Component"]{constructor(...e){super(...e)
this._langSelectRef=i.a.createRef()
this._deleteCCBtnRef=i.a.createRef()
this.handleLanguageChange=(e,t)=>{this.props.onLanguageSelected(this.props.languages.find(e=>e.id===t))}
this.handleDeleteRow=e=>{this.props.onDeleteRow(this.props.selectedLanguage.id)}}get isReadonly(){return this.props.selectedFile&&this.props.selectedLanguage}focus(){this._langSelectRef.current?this._langSelectRef.current.focus():this._deleteCCBtnRef.current&&this._deleteCCBtnRef.current.focus()}renderChoosing(){return i.a.createElement(B["a"],{as:"div",wrap:"wrap",justifyItems:"start",alignItems:"end","data-testid":"CC-CreatorRow-choosing"},this.renderSelectLanguage(),this.renderChooseFile())}renderSelectLanguage(){var e
const t=this.props.uploadMediaTranslations.UploadMediaStrings.CLOSED_CAPTIONS_SELECT_LANGUAGE
return i.a.createElement(B["a"].Item,{margin:"0 small small 0"},i.a.createElement(ir,{ref:this._langSelectRef,value:null===(e=this.props.selectedLanguage)||void 0===e?void 0:e.id,label:i.a.createElement(v["a"],null,t),liveRegion:this.props.liveRegion,onChange:this.handleLanguageChange,placeholder:t,translatedStrings:this.props.uploadMediaTranslations.SelectStrings},this.props.languages.map(e=>i.a.createElement(ir.Option,{key:e.id,id:e.id,value:e.id},e.label))))}renderChooseFile(){const e=this.props.uploadMediaTranslations.UploadMediaStrings,t=e.NO_FILE_CHOSEN,n=e.SUPPORTED_FILE_TYPES,r=e.CLOSED_CAPTIONS_CHOOSE_FILE
return i.a.createElement(B["a"].Item,{margin:"0 small small 0"},i.a.createElement("input",{id:"attachmentFile",accept:".vtt, .srt",ref:e=>{this.fileInput=e},onChange:e=>{this.props.onFileSelected(e.target.files[0])},style:{display:"none"},type:"file"}),i.a.createElement(k["a"],{as:"div"},i.a.createElement(P["a"],{as:"div"},n),i.a.createElement(S["a"],{margin:"xx-small 0 0 0",id:"attachmentFileButton",onClick:()=>{this.fileInput.click()},ref:e=>{this.attachmentFileButton=e}},this.props.selectedFile?this.props.selectedFile.name:r),!this.props.selectedFile&&i.a.createElement(k["a"],{display:"inline-block",margin:"0 0 0 small"},i.a.createElement(P["a"],{color:"secondary"},t))))}renderChosen(){const e=this.props.uploadMediaTranslations.UploadMediaStrings.REMOVE_FILE
return i.a.createElement(B["a"],{as:"div",wrap:"wrap",justifyItems:"start",alignItems:"end","data-testid":"CC-CreatorRow-chosen"},i.a.createElement(B["a"].Item,{margin:"0 0 small 0"},i.a.createElement(k["a"],{as:"div",borderWidth:"small",padding:"0 0 0 small",borderRadius:"medium",width:"100%"},i.a.createElement(B["a"],{justifyItems:"space-between"},i.a.createElement(B["a"].Item,null,i.a.createElement(P["a"],{weight:"bold"},this.props.selectedLanguage.label)),i.a.createElement(B["a"].Item,{margin:"0 0 0 x-small"},i.a.createElement(C,{ref:this._deleteCCBtnRef,withBackground:false,withBorder:false,onClick:this.handleDeleteRow,screenReaderLabel:l()(e,{lang:this.props.selectedLanguage.label})},i.a.createElement(R["a"],null)))))))}render(){return this.isReadonly?this.renderChosen():this.renderChoosing()}}or.propTypes={languages:Object(o["arrayOf"])(Object(o["shape"])({id:o["string"],label:o["string"]})),liveRegion:o["func"],uploadMediaTranslations:Object(o["shape"])({UploadMediaStrings:Object(o["objectOf"])(o["string"]),SelectStrings:Object(o["objectOf"])(o["string"])}),onDeleteRow:o["func"],onFileSelected:o["func"],onLanguageSelected:o["func"],selectedFile:Object(o["shape"])({name:o["string"].isRequired}),selectedLanguage:Object(o["shape"])({id:o["string"].isRequired,label:o["string"].isRequired})}
class ar extends r["Component"]{constructor(e){var t
super(e)
this.newButtonClick=()=>{this.setState({addingNewClosedCaption:true,newSelectedFile:null,newSelectedLanguage:null,announcement:null})}
this.onFileSelected=e=>{this.state.newSelectedLanguage&&e?this.setState(t=>{const n=t.subtitles.concat([{locale:t.newSelectedLanguage.id,file:e,isNew:true}])
this.props.updateSubtitles(n)
return{subtitles:n,addingNewClosedCaption:false,newSelectedFile:null,newSelectedLanguage:null,announcement:l()(this.props.uploadMediaTranslations.UploadMediaStrings.ADDED_CAPTION,{lang:t.newSelectedLanguage.label})}}):this.setState({newSelectedFile:e,announcement:null})}
this.onLanguageSelected=e=>{this.state.newSelectedFile?this.setState(t=>{const n=t.subtitles.concat([{locale:e.id,file:t.newSelectedFile,isNew:true}])
this.props.updateSubtitles(n)
return{subtitles:n,addingNewClosedCaption:false,newSelectedFile:null,newSelectedLanguage:null,announcement:l()(this.props.uploadMediaTranslations.UploadMediaStrings.ADDED_CAPTION,{lang:e.label})}}):this.setState({newSelectedLanguage:e,announcement:null})}
this.onRowDelete=e=>{this.setState(t=>{const n=this.props.languages.findIndex(t=>t.id===e)
const r=t.subtitles.findIndex(t=>t.locale===e)
const i=t.subtitles.filter(t=>t.locale!==e)
this.props.updateSubtitles(i)
return{subtitles:i,addingNewClosedCaption:!(i.length>0)||t.addingNewClosedCaption,announcement:l()(this.props.uploadMediaTranslations.UploadMediaStrings.DELETED_CAPTION,{lang:null===n||void 0===n?void 0:n.label}),lastDeletedCCIndex:r}})}
this.state={addingNewClosedCaption:!(null!==e&&void 0!==e&&null!==(t=e.subtitles)&&void 0!==t&&t.length),newSelectedFile:null,newSelectedLanguage:null,lastDeletedCCIndex:-1,subtitles:e.subtitles||[],announcement:null}
this._addButtonRef=i.a.createRef()
this._newCreatorRef=i.a.createRef()
this._nextCCRef=i.a.createRef()}componentDidUpdate(){if(document.activeElement===document.body){if(this._newCreatorRef.current)this._newCreatorRef.current.focus()
else if(this._nextCCRef.current)this._nextCCRef.current.focus()
else{var e
null===(e=this._addButtonRef.current)||void 0===e||e.focus()}this.setState(e=>{if(-1!==e.lastDeletedCCIndex)return{lastDeletedCCIndex:-1}
return null})}}render(){const e=this.props.uploadMediaTranslations.UploadMediaStrings.ADD_NEW_CAPTION_OR_SUBTITLE
return i.a.createElement(k["a"],{display:"inline-block","data-testid":"ClosedCaptionPanel"},this.state.announcement&&i.a.createElement(c["a"],{liveRegion:this.props.liveRegion,screenReaderOnly:true,isLiveRegionAtomic:true,liveRegionPoliteness:"assertive"},this.state.announcement),i.a.createElement(k["a"],{display:"inline-block"},this.state.subtitles.map((e,t)=>i.a.createElement(or,{ref:t===this.state.lastDeletedCCIndex?this._nextCCRef:void 0,key:e.locale,liveRegion:this.props.liveRegion,uploadMediaTranslations:this.props.uploadMediaTranslations,onDeleteRow:this.onRowDelete,onLanguageSelected:this.onLanguageSelected,onFileSelected:this.onFileSelected,languages:this.props.languages,selectedLanguage:this.props.languages.find(t=>t.id===e.locale),selectedFile:e.file}))),this.state.addingNewClosedCaption?i.a.createElement(k["a"],{as:"div"},i.a.createElement(or,{ref:this._newCreatorRef,liveRegion:this.props.liveRegion,uploadMediaTranslations:this.props.uploadMediaTranslations,onDeleteRow:this.onRowDelete,onLanguageSelected:this.onLanguageSelected,onFileSelected:this.onFileSelected,languages:this.props.languages.filter(e=>!this.state.subtitles.find(t=>t.locale===e.id)),selectedLanguage:this.state.newSelectedLanguage,selectedFile:this.state.newSelectedFile})):i.a.createElement("div",{style:{position:"relative",textAlign:"center"}},i.a.createElement(C,{ref:this._addButtonRef,shape:"circle",color:"primary",screenReaderLabel:e,onClick:this.newButtonClick,margin:"x-small auto"},i.a.createElement(K["a"],null))))}}ar.propTypes={liveRegion:o["func"].isRequired,subtitles:Object(o["arrayOf"])(Object(o["shape"])({locale:o["string"].isRequired,file:Object(o["shape"])({name:o["string"].isRequired}).isRequired})),updateSubtitles:o["func"].isRequired,uploadMediaTranslations:Object(o["shape"])({UploadMediaStrings:Object(o["objectOf"])(o["string"]),SelectStrings:Object(o["objectOf"])(o["string"])}).isRequired,languages:Object(o["arrayOf"])(Object(o["shape"])({id:o["string"],language:o["string"]})).isRequired}},HVsT:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r=n("VTBJ")
var i=n("1OyB")
var o=n("vuIU")
var a=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var d=n("CSQ8")
var u=c.a.createElement("path",{d:"M213.333333,960 C213.333333,792.64 269.333333,638.293333 362.773333,513.6 L1406.4,1557.22667 C1281.70667,1650.66667 1127.36,1706.66667 960,1706.66667 C548.373333,1706.66667 213.333333,1371.62667 213.333333,960 M1706.66667,960 C1706.66667,1127.36 1650.66667,1281.70667 1557.22667,1406.4 L513.6,362.773333 C638.293333,269.333333 792.64,213.333333 960,213.333333 C1371.62667,213.333333 1706.66667,548.373333 1706.66667,960 M960,0 C429.76,0 0,429.76 0,960 C0,1490.24 429.76,1920 960,1920 C1490.24,1920 1920,1490.24 1920,960 C1920,429.76 1490.24,0 960,0",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(a["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"render",value:function(){return c.a.createElement(d["a"],Object.assign({},this.props,{name:"IconNo",viewBox:"0 0 1920 1920"}),u)}}])
n.displayName="IconNoSolid"
return n}(l["Component"])
h.glyphName="no"
h.variant="Solid"
h.propTypes=Object(r["a"])({},d["a"].propTypes)},J3yE:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r=n("VTBJ")
var i=n("1OyB")
var o=n("vuIU")
var a=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var d=n("CSQ8")
var u=c.a.createElement("path",{d:"M1229.92952,594.767261 C1266.57399,632.742052 1279.94501,686.094808 1273.65049,737.675873 C1264.52227,812.553116 1242.91341,882.659228 1217.55726,953.332591 C1190.42812,1028.95581 1162.89637,1104.42362 1135.22526,1179.8448 C1090.96233,1300.52957 1046.35099,1421.08225 1002.57582,1541.94574 C991.697835,1571.96347 983.940014,1604.01708 980.84308,1635.72879 C977.467421,1670.26122 1002.30484,1687.25546 1033.49097,1671.93189 C1058.46774,1659.65439 1082.77868,1642.93988 1102.33582,1623.16377 C1134.28844,1590.85373 1166.1017,1558.38828 1197.14072,1525.18462 C1212.65637,1508.5789 1228.00168,1491.78669 1243.05278,1474.74583 C1255.04566,1461.16286 1267.37145,1440.72626 1283.83166,1432.46614 C1315.00231,1416.82397 1339.05774,1455.31162 1333.41358,1482.25997 C1328.02492,1508.03312 1310.27937,1530.64327 1293.95246,1551.21735 L1292.82888,1552.63303 C1291.33423,1554.51635 1289.85424,1556.38267 1288.39964,1558.23286 C1233.5297,1628.02815 1173.35627,1695.32132 1105.09209,1752.20968 C1037.98926,1807.97909 963.484762,1855.42621 881.663754,1886.18991 C855.014634,1896.20618 827.707414,1904.44298 799.951139,1910.75269 C746.366431,1922.94472 687.153045,1922.03556 632.391501,1914.08626 C592.239746,1908.25833 556.144975,1882.64653 539.127321,1845.37886 C509.582566,1780.68106 530.146211,1700.78403 545.42184,1634.92842 C564.133896,1554.30375 592.221166,1477.54121 620.915497,1400.30998 L623.095838,1394.44335 C623.459375,1393.4654 623.822974,1392.48736 624.186617,1391.50922 L626.36886,1385.63909 C627.096355,1383.68193 627.823883,1381.72429 628.551303,1379.76611 C661.804636,1290.24911 695.98705,1201.08955 730.277857,1111.96884 C761.572379,1030.67311 792.998521,949.431764 823.967866,868.019468 C826.332034,861.803009 828.971786,855.629982 831.636822,849.461178 L832.636907,847.147998 C839.47224,831.341572 846.268156,815.530695 848.813022,799.055631 C854.921726,759.518954 826.406702,724.318257 786.82788,747.109349 C718.408236,786.509885 667.17211,845.101219 616.390988,904.053391 L610.216035,911.223775 C594.435635,929.546222 578.633674,947.829782 562.307875,965.50908 C546.2193,982.938475 527.064761,1004.54844 499.401394,984.578066 C469.879866,963.271155 478.636449,935.942048 495.414091,912.793511 C588.593106,784.213836 700.469863,663.933133 846.273536,596.010552 C907.205721,567.624648 992.386903,538.725887 1072.15619,537.777877 C1131.958,537.070754 1188.71706,552.067961 1229.92952,594.767261 Z M1321.96809,14.8260694 C1398.67141,44.6728411 1440.00774,111.359901 1440,205.243966 C1439.99226,374.432657 1257.24216,490.152033 1104.47038,417.699209 C1025.51404,380.252816 987.11205,291.497329 1006.2511,190.697453 C1032.74538,51.0991052 1190.03094,-36.5063373 1321.96809,14.8260694 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(a["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"render",value:function(){return c.a.createElement(d["a"],Object.assign({},this.props,{name:"IconInfoBorderless",viewBox:"0 0 1920 1920"}),u)}}])
n.displayName="IconInfoBorderlessSolid"
return n}(l["Component"])
h.glyphName="info-borderless"
h.variant="Solid"
h.propTypes=Object(r["a"])({},d["a"].propTypes)},RqKb:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r=n("VTBJ")
var i=n("1OyB")
var o=n("vuIU")
var a=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var d=n("CSQ8")
var u=c.a.createElement("path",{d:"M915.743529 213L915.743529 915.743529 213 915.743529 213 1003.58647 915.743529 1003.58647 915.743529 1706.33 1003.58647 1706.33 1003.58647 1003.58647 1706.33 1003.58647 1706.33 915.743529 1003.58647 915.743529 1003.58647 213z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(a["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"render",value:function(){return c.a.createElement(d["a"],Object.assign({},this.props,{name:"IconAdd",viewBox:"0 0 1920 1920"}),u)}}])
n.displayName="IconAddLine"
return n}(l["Component"])
h.glyphName="add"
h.variant="Line"
h.propTypes=Object(r["a"])({},d["a"].propTypes)},j9Ei:function(e,t,n){"use strict"
n.d(t,"a",(function(){return x}))
var r=n("1OyB")
var i=n("vuIU")
var o=n("Ji7U")
var a=n("LK+K")
n("l/EJ")
var s=n("q1tI")
var l=n.n(s)
var c=n("i8i4")
var d=n.n(c)
var u=n("17x9")
var h=n.n(u)
var p=n("TSYQ")
var f=n.n(p)
var m=n("3zPy")
var g=n.n(m)
var b=n("iXfj")
var v=n("x7bk")
var O=n("yPFM")
var _=n("3kkD")
var q=n("xQs3")
var w=n("HVsT")
var y=n("J3yE")
var E=n("97gy")
var j=n("znKQ")
var C=n("MPii")
var K=n("99Sk")
var k="getRandomVcryp0123456789bfhijklqsuvwxzABCDEFGHIJKLMNOPQSTUWXYZ"
var S=k.length-1
function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n="u".concat(P("",t-1))
return e&&false?"".concat(e,"__").concat(n):n}function R(e){var t=[]
while(0<e--)t.push(Math.floor(256*Math.random()))
return t}function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n=""
var r=R(t)
while(0<t--)n+=k[r[t]&S]
return n}function I(e){var t=e.colors,n=e.borders,r=e.spacing,i=e.typography,o=e.shadows
return{background:t.backgroundLightest,color:t.textDarkest,marginTop:r.small,borderRadius:n.radiusMedium,borderWidth:n.widthMedium,borderStyle:n.style,contentPadding:"".concat(r.small," ").concat(r.medium),contentFontSize:i.fontSizeMedium,contentFontFamily:i.fontFamily,contentFontWeight:i.fontWeightNormal,contentLineHeight:i.lineHeightCondensed,closeButtonMarginTop:r.xSmall,closeButtonMarginRight:r.xxSmall,iconColor:t.textLightest,successBorderColor:t.borderSuccess,successIconBackground:t.backgroundSuccess,infoBorderColor:t.borderInfo,infoIconBackground:t.backgroundInfo,warningBorderColor:t.borderWarning,warningIconBackground:t.backgroundWarning,dangerBorderColor:t.borderDanger,dangerIconBackground:t.backgroundDanger,boxShadow:o.depth2}}I.canvas=function(e){return{color:e["ic-brand-font-color-dark"]}}
var M,T,L,H,z
var A={componentId:"cvphu",template:function(e){return"\n\n.cvphu_bgqc{background:".concat(e.background||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";border-style:").concat(e.borderStyle||"inherit",";border-width:").concat(e.borderWidth||"inherit",";box-shadow:").concat(e.boxShadow||"inherit",";color:").concat(e.color||"inherit",";display:flex;min-width:12rem}\n\n.cvphu_bgqc,.cvphu_caGd{box-sizing:border-box}\n\n.cvphu_caGd{flex:1;font-family:").concat(e.contentFontFamily||"inherit",";font-size:").concat(e.contentFontSize||"inherit",";font-weight:").concat(e.contentFontWeight||"inherit",";line-height:").concat(e.contentLineHeight||"inherit",";min-width:0.0625rem;padding:").concat(e.contentPadding||"inherit","}\n\n.cvphu_dnnz{align-items:center;border-right:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit",";color:").concat(e.iconColor||"inherit",";flex:0 0 2.5rem;font-size:1.125rem;justify-content:center}\n\n.cvphu_fsGh,.cvphu_dnnz{box-sizing:border-box;display:flex}\n\n.cvphu_fsGh{align-items:flex-start;margin-right:").concat(e.closeButtonMarginRight||"inherit",";margin-top:").concat(e.closeButtonMarginTop||"inherit",";order:1}\n\n.cvphu_cOXX{border-color:").concat(e.successBorderColor||"inherit","}\n\n.cvphu_cOXX .cvphu_dnnz{background-color:").concat(e.successIconBackground||"inherit",";border-right-color:").concat(e.successIconBackground||"inherit","}\n\n.cvphu_pypk{border-color:").concat(e.infoBorderColor||"inherit","}\n\n.cvphu_pypk .cvphu_dnnz{background:").concat(e.infoIconBackground||"inherit",";border-right-color:").concat(e.infoIconBackground||"inherit","}\n\n.cvphu_ddvR{border-color:").concat(e.dangerBorderColor||"inherit","}\n\n.cvphu_ddvR .cvphu_dnnz{background:").concat(e.dangerIconBackground||"inherit",";border-right-color:").concat(e.dangerIconBackground||"inherit","}\n\n.cvphu_eRqw{border-color:").concat(e.warningBorderColor||"inherit","}\n\n.cvphu_eRqw .cvphu_dnnz{background:").concat(e.warningIconBackground||"inherit",";border-right-color:").concat(e.warningIconBackground||"inherit","}")},alert:"cvphu_bgqc",content:"cvphu_caGd",icon:"cvphu_dnnz",closeButton:"cvphu_fsGh",success:"cvphu_cOXX",info:"cvphu_pypk",error:"cvphu_ddvR",warning:"cvphu_eRqw"}
var x=(M=Object(b["a"])("8.0.0",{closeButtonLabel:"renderCloseButtonLabel"}),T=Object(K["g"])(I,A),M(L=T(L=(z=H=function(e){Object(o["a"])(n,e)
var t=Object(a["a"])(n)
function n(e){var i
Object(r["a"])(this,n)
i=t.call(this,e)
i._timeouts=[]
i.handleTimeout=function(){i.props.timeout>0&&i._timeouts.push(setTimeout((function(){i.close()}),i.props.timeout))}
i.onExitTransition=function(){i.props.onDismiss&&i.props.onDismiss()}
i.close=function(){i.clearTimeouts()
i.removeScreenreaderAlert()
i.setState({open:false},(function(){i.props.onDismiss&&"none"===i.props.transition&&i.props.onDismiss()}))}
i.handleKeyUp=function(e){(i.props.renderCloseButtonLabel||i.props.closeButtonLabel)&&e.keyCode===g.a.codes.esc&&i.close()}
i.state={open:true}
return i}Object(i["a"])(n,[{key:"variantUI",value:function(){return{error:{Icon:w["a"],classNames:f()(A.alert,A.error)},info:{Icon:y["a"],classNames:f()(A.alert,A.info)},success:{Icon:E["a"],classNames:f()(A.alert,A.success)},warning:{Icon:j["a"],classNames:f()(A.alert,A.warning)}}[this.props.variant]}},{key:"clearTimeouts",value:function(){this._timeouts.forEach((function(e){return clearTimeout(e)}))
this._timeouts=[]}},{key:"isDOMNode",value:function(e){return e&&"object"===typeof e&&1===e.nodeType}},{key:"getLiveRegion",value:function(){var e=null
"function"===typeof this.props.liveRegion&&(e=this.props.liveRegion())
return this.isDOMNode(e)?e:null}},{key:"initLiveRegion",value:function(e){e.getAttribute("role")
if(e){e.setAttribute("aria-live",this.props.liveRegionPoliteness)
e.setAttribute("aria-relevant","additions text")
e.setAttribute("aria-atomic",this.props.isLiveRegionAtomic)}}},{key:"createScreenreaderContentNode",value:function(){return l.a.createElement(q["a"],null,this.props.children)}},{key:"createScreenreaderAlert",value:function(){var e=this.getLiveRegion()
if(e){this.srid=B("Alert")
var t=document.createElement("div")
t.setAttribute("id",this.srid)
var n=this.createScreenreaderContentNode()
d.a.render(n,t)
e.appendChild(t)}}},{key:"updateScreenreaderAlert",value:function(){var e=this
if(this.getLiveRegion()){var t=document.getElementById(this.srid)
t&&d.a.render(null,t,(function(){var n=e.createScreenreaderContentNode()
d.a.render(n,t)}))}}},{key:"removeScreenreaderAlert",value:function(){var e=this.getLiveRegion()
if(e){var t=document.getElementById(this.srid)
if(t){e.removeAttribute("aria-live")
e.removeAttribute("aria-relevant")
e.removeAttribute("aria-atomic")
d.a.unmountComponentAtNode(t)
t.parentNode.removeChild(t)
this.initLiveRegion(e)}}}},{key:"componentDidMount",value:function(){var e=this.getLiveRegion()
e&&this.initLiveRegion(e)
this.handleTimeout()
this.createScreenreaderAlert()}},{key:"componentDidUpdate",value:function(e){false===!!this.props.open&&!!this.props.open!==!!e.open?this.close():this.props.children!==e.children&&this.updateScreenreaderAlert()}},{key:"componentWillUnmount",value:function(){this.removeScreenreaderAlert()
this.clearTimeouts()}},{key:"renderIcon",value:function(){var e=this.variantUI(),t=e.Icon
return l.a.createElement("div",{className:A.icon},l.a.createElement(t,{className:A.alertIcon}))}},{key:"renderCloseButton",value:function(){var e=this.props.renderCloseButtonLabel&&Object(v["a"])(this.props.renderCloseButtonLabel)||this.props.closeButtonLabel
return e?l.a.createElement("div",{className:A.closeButton,key:"closeButton"},l.a.createElement(O["a"],{onClick:this.close,size:"small",screenReaderLabel:e})):null}},{key:"renderAlert",value:function(){var e=this.variantUI(),t=e.classNames
return l.a.createElement(_["a"],{as:"div",margin:this.props.margin,className:t,onKeyUp:this.handleKeyUp},this.renderIcon(),l.a.createElement("div",{className:A.content},this.props.children),this.renderCloseButton())}},{key:"render",value:function(){if(this.props.screenReaderOnly){this.getLiveRegion()
return null}if("none"===this.props.transition)return this.state.open?this.renderAlert():null
return l.a.createElement(C["a"],{type:this.props.transition,transitionOnMount:true,in:this.state.open,unmountOnExit:true,onExited:this.onExitTransition},this.renderAlert())}}])
n.displayName="Alert"
return n}(s["Component"]),H.propTypes={children:h.a.node,variant:h.a.oneOf(["info","success","warning","error"]),margin:K["a"].spacing,liveRegion:h.a.func,liveRegionPoliteness:h.a.oneOf(["polite","assertive"]),isLiveRegionAtomic:h.a.bool,screenReaderOnly:h.a.bool,timeout:h.a.number,renderCloseButtonLabel:h.a.oneOfType([h.a.func,h.a.node]),closeButtonLabel:h.a.string,onDismiss:h.a.func,transition:h.a.oneOf(["none","fade"]),open:h.a.bool},H.defaultProps={variant:"info",margin:"x-small 0",timeout:0,transition:"fade",open:true,screenReaderOnly:false,liveRegionPoliteness:"assertive",isLiveRegionAtomic:false,onDismiss:void 0,liveRegion:void 0,renderCloseButtonLabel:void 0,closeButtonLabel:void 0,children:null},z))||L)||L)},znKQ:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r=n("VTBJ")
var i=n("1OyB")
var o=n("vuIU")
var a=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var d=n("CSQ8")
var u=c.a.createElement("g",{fillRule:"evenodd",stroke:"none",strokeWidth:"1"},c.a.createElement("path",{d:"M994.577974 1436.35559C861.21303 1436.35559 752.755772 1544.81285 752.755772 1678.1778 752.755772 1811.54274 861.21303 1920 994.577974 1920 1127.94292 1920 1236.40018 1811.54274 1236.40018 1678.1778 1236.40018 1544.81285 1127.94292 1436.35559 994.577974 1436.35559L994.577974 1436.35559zM1165.06263 1315.44449L1310.15595 0 679 0 824.093322 1315.44449z"}))
var h=function(e){Object(a["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"render",value:function(){return c.a.createElement(d["a"],Object.assign({},this.props,{name:"IconWarningBorderless",viewBox:"0 0 1920 1920"}),u)}}])
n.displayName="IconWarningBorderlessSolid"
return n}(l["Component"])
h.glyphName="warning-borderless"
h.variant="Solid"
h.propTypes=Object(r["a"])({},d["a"].propTypes)}}])

//# sourceMappingURL=158-c-37b1f5cfad.js.map