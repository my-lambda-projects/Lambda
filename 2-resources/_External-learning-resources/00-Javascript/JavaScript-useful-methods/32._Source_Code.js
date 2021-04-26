Source Code
let url = window.location.href;
console.log(url);
let encodeurl =  encodeURIComponent(url);
let decodeurl = decodeURIComponent(encodeurl);
console.log(encodeurl);
console.log(decodeurl);
 
let url2 = 'http://www.discoveryvip.com/?id=500&more=hello world';
console.log(encodeURI(url2));
console.log(decodeURI(encodeURI(url2)));
console.log(encodeURIComponent(url2));