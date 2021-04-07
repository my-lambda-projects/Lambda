(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[750],{MOpQ:function(e,t,n){"use strict"
n.r(t)
var a=n("u7Gu")
var o=n("ouhR")
var i=n.n(o)
var c=n("JD5e")
n("jYyc")
let r=window.ENV.page_view_update_url
r&&i()(()=>{let e=0
a["a"].interaction_contexts={}
if(r){let t=0
const n=300
i()(document).bind("page_view_update_url_received",(e,t)=>{r=t})
let o
i()(document).bind("page_view_update",(a,c)=>{const s={}
if(c||e>10&&t<n){s.interaction_seconds=e
i.a.ajaxJSON(r,"PUT",s,null,(e,t)=>{422===t.status&&clearInterval(o)})
e=0}})
o=setInterval(()=>{i()(document).triggerHandler("page_view_update")},1e3*n)
window.addEventListener("unload",()=>{if(e>30){const t=new FormData
t.append("interaction_seconds",e)
t.append("_method","put")
t.append("authenticity_token",Object(c["a"])())
t.append("utf8","&#x2713")
navigator.sendBeacon(r,t)}},false)
let s=false
i()(document).bind("mousemove keypress mousedown focus",()=>{s=true})
setInterval(()=>{if(s){e++
a["a"]&&a["a"].interaction_context&&a["a"].interaction_contexts&&(a["a"].interaction_contexts[a["a"].interaction_context]=(a["a"].interaction_contexts[a["a"].interaction_context]||0)+1)
s=false
if(t>=n){t=0
i()(document).triggerHandler("page_view_update")}t=0}else t++},1e3)}})}}])

//# sourceMappingURL=750-c-ecd2a02a77.js.map