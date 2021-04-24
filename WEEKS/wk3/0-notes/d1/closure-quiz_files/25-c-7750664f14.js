(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[25],{"0jNN":function(e,a,t){"use strict"
var n=Object.prototype.hasOwnProperty
var r=Array.isArray
var i=function(){var e=[]
for(var a=0;a<256;++a)e.push("%"+((a<16?"0":"")+a.toString(16)).toUpperCase())
return e}()
var o=function(e){while(e.length>1){var a=e.pop()
var t=a.obj[a.prop]
if(r(t)){var n=[]
for(var i=0;i<t.length;++i)"undefined"!==typeof t[i]&&n.push(t[i])
a.obj[a.prop]=n}}}
var l=function(e,a){var t=a&&a.plainObjects?Object.create(null):{}
for(var n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(t[n]=e[n])
return t}
var s=function e(a,t,i){if(!t)return a
if("object"!==typeof t){if(r(a))a.push(t)
else{if(!a||"object"!==typeof a)return[a,t];(i&&(i.plainObjects||i.allowPrototypes)||!n.call(Object.prototype,t))&&(a[t]=true)}return a}if(!a||"object"!==typeof a)return[a].concat(t)
var o=a
r(a)&&!r(t)&&(o=l(a,i))
if(r(a)&&r(t)){t.forEach((function(t,r){if(n.call(a,r)){var o=a[r]
o&&"object"===typeof o&&t&&"object"===typeof t?a[r]=e(o,t,i):a.push(t)}else a[r]=t}))
return a}return Object.keys(t).reduce((function(a,r){var o=t[r]
n.call(a,r)?a[r]=e(a[r],o,i):a[r]=o
return a}),o)}
var _=function(e,a){return Object.keys(a).reduce((function(e,t){e[t]=a[t]
return e}),e)}
var c=function(e,a,t){var n=e.replace(/\+/g," ")
if("iso-8859-1"===t)return n.replace(/%[0-9a-f]{2}/gi,unescape)
try{return decodeURIComponent(n)}catch(e){return n}}
var u=function(e,a,t){if(0===e.length)return e
var n=e
"symbol"===typeof e?n=Symbol.prototype.toString.call(e):"string"!==typeof e&&(n=String(e))
if("iso-8859-1"===t)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}))
var r=""
for(var o=0;o<n.length;++o){var l=n.charCodeAt(o)
if(45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122){r+=n.charAt(o)
continue}if(l<128){r+=i[l]
continue}if(l<2048){r+=i[192|l>>6]+i[128|63&l]
continue}if(l<55296||l>=57344){r+=i[224|l>>12]+i[128|l>>6&63]+i[128|63&l]
continue}o+=1
l=65536+((1023&l)<<10|1023&n.charCodeAt(o))
r+=i[240|l>>18]+i[128|l>>12&63]+i[128|l>>6&63]+i[128|63&l]}return r}
var d=function(e){var a=[{obj:{o:e},prop:"o"}]
var t=[]
for(var n=0;n<a.length;++n){var r=a[n]
var i=r.obj[r.prop]
var l=Object.keys(i)
for(var s=0;s<l.length;++s){var _=l[s]
var c=i[_]
if("object"===typeof c&&null!==c&&-1===t.indexOf(c)){a.push({obj:i,prop:_})
t.push(c)}}}o(a)
return e}
var f=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}
var p=function(e){if(!e||"object"!==typeof e)return false
return!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}
var v=function(e,a){return[].concat(e,a)}
e.exports={arrayToObject:l,assign:_,combine:v,compact:d,decode:c,encode:u,isBuffer:p,isRegExp:f,merge:s}},"60Hp":function(e,a,t){"use strict"
t.r(a)
t.d(a,"uploadFile",(function(){return p}))
t.d(a,"completeUpload",(function(){return v}))
t.d(a,"submissionCommentAttachmentsUpload",(function(){return h}))
t.d(a,"uploadFiles",(function(){return m}))
var n=t("VTBJ")
var r=t("x1Tw")
var i=t("Qyje")
var o=t.n(i)
var l=t("pQTu")
var s=t("m0r6")
Object(s["a"])(JSON.parse('{"ar":{"canvas_failed_to_complete_the_upload_864a4c0f":"فشل Canvas في إكمال التحميل.","canvas_failed_to_initiate_the_upload_8e3824d5":"فشل Canvas في بدء التحميل.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"يتعذر نقل الملف إلى خدمة التخزين. قد تكون الخدمة معطلة أو قد تحتاج إلى إعادة تسجيل الدخول إلى Canvas."},"ca":{"canvas_failed_to_complete_the_upload_864a4c0f":"El Canvas no ha pogut completar la càrrega.","canvas_failed_to_initiate_the_upload_8e3824d5":"El Canvas no ha pogut iniciar la càrrega.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"No es pot transmetre el fitxer al servei d\'emmagatzematge. Pot ser que el servei no funcioni o que hàgiu de tornar a iniciar la sessió al Canvas."},"cy":{"canvas_failed_to_complete_the_upload_864a4c0f":"Mae Canvas wedi methu cwblhau’r broses llwytho i fyny.","canvas_failed_to_initiate_the_upload_8e3824d5":"Mae Canvas wedi methu rhoi’r broses llwytho i fyny ar waith.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Doedd dim modd trosglwyddo ffeil i’r gwasanaeth storio. Efallai nad yw’r gwasanaeth ar gael ar hyn o bryd, neu efallai y bydd angen i chi fewngofnodi eto i Canvas."},"da":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunne ikke afslutte uploaden.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikke påbegynde uploaden.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kunne ikke overføre filen til lagertjenesten. Tjenesten kan være nede, eller du skal måske logge ind på Canvas igen."},"da-x-k12":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunne ikke fuldføre uploaden.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikke påbegynde uploaden.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kunne ikke overføre filen til lagertjenesten. Tjenesten kan være nede, eller du skal måske logge ind på Canvas igen."},"de":{"canvas_failed_to_complete_the_upload_864a4c0f":"Upload fehlgeschlagen","canvas_failed_to_initiate_the_upload_8e3824d5":"Initialisierung des Upload fehlgeschlagen","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Übertragung der Datei in den Speicher-Service ist fehlgeschlagen. Entweder ist der Service heruntergefahren oder Sie müssen sich erneut bei Canvas anmelden."},"en-AU":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-AU-x-unimelb":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-CA":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-GB":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-GB-x-lbs":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-GB-x-ukhe":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"es":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas no pudo completar la carga.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas no pudo iniciar la carga.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"No se pudo transmitir el archivo al servicio de almacenamiento. Es posible que el servicio no esté funcionando o que tenga que volver a iniciar sesión en Canvas."},"fa":{"canvas_failed_to_complete_the_upload_864a4c0f":"کانواس نتوانست بارگذاری را انجام دهد.","canvas_failed_to_initiate_the_upload_8e3824d5":"کانواس موفق به آپلود نشد","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"انتقال فایل به سرویس ذخیره سازی امکان پذیر نیست. ممکن است سرویس از کار افتاده باشد و یا لازم باشد دوباره وارد کانواس شوید."},"fi":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas ei onnistunut suorittamaan latausta loppuun.","canvas_failed_to_initiate_the_upload_8e3824d5":"Latauksen aloittaminen epäonnistui.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Tiedoston siirto tallennuspalveluun epäonnistui. Palvelu saattaa olla alhaalla tai sinun täytyy ehkä kirjautua uudelleen Canvasiin."},"fr":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas n\'a pas réussi à terminer le téléchargement.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas n\'a pas réussi à lancer le téléchargement.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Impossible de transmettre le fichier au service de stockage. Le service peut être en panne ou vous devez peut-être vous reconnecter à Canvas."},"fr-CA":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas a échoué de conclure le téléversement.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas n\'a pu commencer le téléversement.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Impossible d’envoyer le fichier au service de stockage. Le service peut être inactif ou vous pourriez avoir besoin de vous connecter de nouveau à Canvas."},"ht":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas pa reyisi fini telechajman an.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas pa reyisi lanse telechajman an.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Enposib pou transmèt fichye nan sèvis estokaj la. Petèt ke sèvis la an pàn oswa ou ka bezwen rekonekte sou Canvas."},"hu":{"canvas_failed_to_complete_the_upload_864a4c0f":"A Canvas nem tudta a feladatot feltölteni.","canvas_failed_to_initiate_the_upload_8e3824d5":"A Canvas nem tudta elindítani a feltöltést.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Nem sikerült elküldeni a fájlt a tár szolgáltatásnak. Lehet, hogy a szolgáltatás nem működik, vagy újra be kell lépnie a Canvas-ba."},"is":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas tókst ekki að klára upphalið","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas gat ekki byrjað upphalið.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Ekki tókst að senda skjal í geymslu. Annaðhvort liggur þjónustan niðri eða þú þarft að endurinnskrá þig á Canvas."},"it":{"canvas_failed_to_complete_the_upload_864a4c0f":"Impossibile completare il caricamento in Canvas.","canvas_failed_to_initiate_the_upload_8e3824d5":"Impossibile inizializzare il caricamento in Canvas.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Impossibile trasmettere il file al servizio di archiviazione. Il servizio potrebbe essere inattivo o potrebbe essere necessario effettuare nuovamente l\'accesso a Canvas."},"ja":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas はアップロードを完了できませんでした。","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas はアップロードを開始できませんでした。","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"ストレージサービスにファイルを送信できません。サービスが停止しているか、Canvas に再度ログインする必要があるかもしれません。"},"mi":{"canvas_failed_to_complete_the_upload_864a4c0f":"I rahua a Canvas ki te whakaoti i te tukuake.","canvas_failed_to_initiate_the_upload_8e3824d5":"I rahua a Canvas ki te tīmata i te tukuake.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kāore e taea te tuku kōnae ki te ratonga rokiroki. Ka mutu te ratonga, ka hiahia pea koe ki te whakauru atu anō ki Canvas."},"nb":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kan ikke fullføre opplastingen.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikke starte opplastingen.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kan ikke overføre fil til lagringsenhet. Denne tjeneste kan være nede eller du må kanskje logge på Canvas på nytt."},"nb-x-k12":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunne ikke fullføre opplastingen.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikke starte opplastingen.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kunne ikke overføre fil til lagringsenhet. Tjeneste kan være nede eller du må kanskje logge på Canvas på nytt."},"nl":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kan de upload niet uitvoeren.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kan de upload niet initiëren.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kan bestand niet overzetten naar de opslagservice. Misschien is de service niet geactiveerd of moet je je opnieuw aanmelden bij Canvas."},"nn":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunne ikkje fullføre opplastinga.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikkje starte opplastinga.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kan ikkje overføre fil til lagringsteneste. Tenesta kan vere nede eller du må logge inn i Canvas på nytt."},"pl":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas nie może ukończyć przesyłania.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas nie może rozpocząć przesyłania.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Nie można przesłać pliku do usługi przechowywania. Usługa może być niedostępna lub wymagane jest ponowne zalogowanie w Canvas."},"pt":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas falhou ao concluir o carregamento.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas falhou ao iniciar o carregamento.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Não é possível transmitir o ficheiro para o serviço de armazenamento. O serviço pode estar inativo ou você pode precisar fazer o login novamente no Canvas."},"pt-BR":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas falhou em importar o carregamento.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas falhou em iniciar o carregamento.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Incapaz de transmitir o arquivo para o serviço de armazenamento. O serviço pode estar interrompido ou você precisa fazer login novamente no Canvas."},"ru":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas не удается завершить отправку.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas не удается запустить отправку.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Невозможно передать файл на устройство хранения. Сервис может быть отключен, или вам может быть необходимо выйти и снова войти в Canvas."},"sl":{"canvas_failed_to_complete_the_upload_864a4c0f":"Zaključevanje nalaganja v sistemu Canvas ni uspelo.","canvas_failed_to_initiate_the_upload_8e3824d5":"Zagon nalaganja v sistemu Canvas ni uspel.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Datoteke ni mogoče prenesti v storitev shranjevanja. Storitev morda ne deluje ali pa se morate znova prijaviti v sistem Canvas."},"sv":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunde inte slutföra uppladdningen.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunde inte initiera uppladdningen.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Det går inte att överföra filen till lagringstjänsten. Tjänsten kan ligga nere, eller kan du behöva logga in till Canvas på nytt."},"sv-x-k12":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunde inte slutföra uppladdningen.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunde inte initiera uppladdningen.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Det går inte att överföra filen till lagringstjänsten. Tjänsten kan ligga nere, eller kan du behöva logga in till Canvas på nytt."},"zh-Hans":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas 无法完成上传。","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas 无法启动上传。","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"无法将文件传输到存储服务。服务可能中断，或者您可能需要重新登录到 Canvas。"},"zh-Hant":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas 無法完成上傳。","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas 無法啟動上傳。","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"無法將檔案傳輸到儲存空間服務。該服務可能已關閉，或者您可能需要重新登入 Canvas。"}}'))
t("jQeR")
t("0sPK")
var _=l["default"].scoped("upload_file")
var c=t("jpBB")
function u(e){if("Network Error"===e.message){const a=new Error(_.t("Canvas failed to initiate the upload."))
a.originalError=e
return Promise.reject(a)}return Promise.reject(e)}function d(e){if("Network Error"===e.message){const a=new Error(_.t("Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."))
a.originalError=e
return Promise.reject(a)}return Promise.reject(e)}function f(e){if("Network Error"===e.message){const a=new Error(_.t("Canvas failed to complete the upload."))
a.originalError=e
return Promise.reject(a)}return Promise.reject(e)}function p(e,a,t,n=r["a"],i){if(!t&&!a.url)throw new Error("expected either a file to upload or a url to clone",{file:t,preflightData:a})
if(t&&a.url)throw new Error("can't upload with both a file object and a url to clone",{file:t,preflightData:a})
a.no_redirect=true
a["attachment[context_code]"]&&(a=o.a.stringify(a))
return n.post(e,a).catch(u).then(e=>v(e.data,t,{ajaxLib:n,onProgress:i}))}function v(e,a,t={}){const i=t.ajaxLib||r["a"]
const l=t.ajaxLibOptions||{}
e&&e.attachments&&e.attachments[0]&&(e=e.attachments[0])
if(!e)throw new Error("expected a preflightResponse")
if(a&&!e.upload_url)throw new Error("expected a preflightResponse with an upload_url",{preflightResponse:e})
if(!a&&!e.progress)throw new Error("expected a preflightResponse with a progress",{preflightResponse:e})
const s=e,_=s.upload_url,u=s.progress
if(!_)return Object(c["a"])(u,{ajaxLib:i}).catch(f)
let p=e,v=p.file_param,h=p.upload_params,m=p.success_url
v=v||"file"
h=h||{}
m=m||h.success_url
const g=!!m
const b=new FormData
Object.entries(h).forEach(([e,a])=>b.append(e,a))
a&&b.append(v,a,t.filename)
const y=i.post(_,b,Object(n["a"])({responseType:g?"document":"json",onUploadProgress:t.onProgress,withCredentials:!g},l))
return y.catch(d).then(e=>{if(u)return Object(c["a"])(u,{ajaxLib:i}).catch(f)
let a,n={}
if(m){const t=e.data,r=t.Bucket,i=t.Key,o=t.ETag
a=m
n={bucket:r,key:i,etag:o}}else if(201===e.status&&!t.ignoreResult){a=e.data.location
n={}}if(a){t.includeAvatar&&(n.include="avatar")
n=o.a.stringify(n)
n&&(a=-1!==a.indexOf("?")?`${a}&${n}`:`${a}?${n}`)
return i.get(a).then(({data:e})=>e).catch(f)}return e.data})}function h(e,a,t){const n=`/api/v1/courses/${a}/assignments/${t}/submissions/self/comments/files`
const r=e.map(e=>{const a={name:e.name,content_type:e.type}
return p(n,a,e)})
return Promise.all(r)}function m(e,a){const t=e.map(e=>e.url?p(a,{url:e.url,name:e.title,content_type:e.mediaType,submit_assignment:false}):p(a,{name:e.name,content_type:e.type},e))
return Promise.all(t)}},QSc6:function(e,a,t){"use strict"
var n=t("0jNN")
var r=t("sxOR")
var i=Object.prototype.hasOwnProperty
var o={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,a){return e+"["+a+"]"},repeat:function(e){return e}}
var l=Array.isArray
var s=Array.prototype.push
var _=function(e,a){s.apply(e,l(a)?a:[a])}
var c=Date.prototype.toISOString
var u=r["default"]
var d={addQueryPrefix:false,allowDots:false,charset:"utf-8",charsetSentinel:false,delimiter:"&",encode:true,encoder:n.encode,encodeValuesOnly:false,format:u,formatter:r.formatters[u],indices:false,serializeDate:function(e){return c.call(e)},skipNulls:false,strictNullHandling:false}
var f=function(e){return"string"===typeof e||"number"===typeof e||"boolean"===typeof e||"symbol"===typeof e||"bigint"===typeof e}
var p=function e(a,t,r,i,o,s,c,u,p,v,h,m,g){var b=a
"function"===typeof c?b=c(t,b):b instanceof Date?b=v(b):"comma"===r&&l(b)&&(b=b.join(","))
if(null===b){if(i)return s&&!m?s(t,d.encoder,g,"key"):t
b=""}if(f(b)||n.isBuffer(b)){if(s){var y=m?t:s(t,d.encoder,g,"key")
return[h(y)+"="+h(s(b,d.encoder,g,"value"))]}return[h(t)+"="+h(String(b))]}var k=[]
if("undefined"===typeof b)return k
var C
if(l(c))C=c
else{var j=Object.keys(b)
C=u?j.sort(u):j}for(var w=0;w<C.length;++w){var O=C[w]
if(o&&null===b[O])continue
l(b)?_(k,e(b[O],"function"===typeof r?r(t,O):t,r,i,o,s,c,u,p,v,h,m,g)):_(k,e(b[O],t+(p?"."+O:"["+O+"]"),r,i,o,s,c,u,p,v,h,m,g))}return k}
var v=function(e){if(!e)return d
if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.")
var a=e.charset||d.charset
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined")
var t=r["default"]
if("undefined"!==typeof e.format){if(!i.call(r.formatters,e.format))throw new TypeError("Unknown format option provided.")
t=e.format}var n=r.formatters[t]
var o=d.filter;("function"===typeof e.filter||l(e.filter))&&(o=e.filter)
return{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:d.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?d.allowDots:!!e.allowDots,charset:a,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:d.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?d.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:d.encode,encoder:"function"===typeof e.encoder?e.encoder:d.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:d.encodeValuesOnly,filter:o,formatter:n,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:d.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:d.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:d.strictNullHandling}}
e.exports=function(e,a){var t=e
var n=v(a)
var r
var i
if("function"===typeof n.filter){i=n.filter
t=i("",t)}else if(l(n.filter)){i=n.filter
r=i}var s=[]
if("object"!==typeof t||null===t)return""
var c
c=a&&a.arrayFormat in o?a.arrayFormat:a&&"indices"in a?a.indices?"indices":"repeat":"indices"
var u=o[c]
r||(r=Object.keys(t))
n.sort&&r.sort(n.sort)
for(var d=0;d<r.length;++d){var f=r[d]
if(n.skipNulls&&null===t[f])continue
_(s,p(t[f],f,u,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var h=s.join(n.delimiter)
var m=true===n.addQueryPrefix?"?":""
n.charsetSentinel&&("iso-8859-1"===n.charset?m+="utf8=%26%2310003%3B&":m+="utf8=%E2%9C%93&")
return h.length>0?m+h:""}},Qyje:function(e,a,t){"use strict"
var n=t("QSc6")
var r=t("nmq7")
var i=t("sxOR")
e.exports={formats:i,parse:r,stringify:n}},jpBB:function(e,a,t){"use strict"
t.d(a,"a",(function(){return i}))
var n=t("x1Tw")
function r(e){return new Promise(a=>{setTimeout(a,e)})}function i(e,a={}){const t=a.ajaxLib||n["a"]
const o=e.url,l=e.workflow_state,s=e.results,_=e.message
if("queued"===l||"running"===l){let e=a.interval
e||(e=1e3)
e<100&&(e=100)
return r(e).then(()=>t.get(o)).then(e=>{const t=e.data
return i(t,a)})}return"completed"===l?Promise.resolve(s):Promise.reject(_)}},nmq7:function(e,a,t){"use strict"
var n=t("0jNN")
var r=Object.prototype.hasOwnProperty
var i=Array.isArray
var o={allowDots:false,allowPrototypes:false,arrayLimit:20,charset:"utf-8",charsetSentinel:false,comma:false,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:false,interpretNumericEntities:false,parameterLimit:1e3,parseArrays:true,plainObjects:false,strictNullHandling:false}
var l=function(e){return e.replace(/&#(\d+);/g,(function(e,a){return String.fromCharCode(parseInt(a,10))}))}
var s="utf8=%26%2310003%3B"
var _="utf8=%E2%9C%93"
var c=function(e,a){var t={}
var c=a.ignoreQueryPrefix?e.replace(/^\?/,""):e
var u=Infinity===a.parameterLimit?void 0:a.parameterLimit
var d=c.split(a.delimiter,u)
var f=-1
var p
var v=a.charset
if(a.charsetSentinel)for(p=0;p<d.length;++p)if(0===d[p].indexOf("utf8=")){d[p]===_?v="utf-8":d[p]===s&&(v="iso-8859-1")
f=p
p=d.length}for(p=0;p<d.length;++p){if(p===f)continue
var h=d[p]
var m=h.indexOf("]=")
var g=-1===m?h.indexOf("="):m+1
var b,y
if(-1===g){b=a.decoder(h,o.decoder,v,"key")
y=a.strictNullHandling?null:""}else{b=a.decoder(h.slice(0,g),o.decoder,v,"key")
y=a.decoder(h.slice(g+1),o.decoder,v,"value")}y&&a.interpretNumericEntities&&"iso-8859-1"===v&&(y=l(y))
y&&"string"===typeof y&&a.comma&&y.indexOf(",")>-1&&(y=y.split(","))
h.indexOf("[]=")>-1&&(y=i(y)?[y]:y)
r.call(t,b)?t[b]=n.combine(t[b],y):t[b]=y}return t}
var u=function(e,a,t){var n=a
for(var r=e.length-1;r>=0;--r){var i
var o=e[r]
if("[]"===o&&t.parseArrays)i=[].concat(n)
else{i=t.plainObjects?Object.create(null):{}
var l="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o
var s=parseInt(l,10)
if(t.parseArrays||""!==l)if(!isNaN(s)&&o!==l&&String(s)===l&&s>=0&&t.parseArrays&&s<=t.arrayLimit){i=[]
i[s]=n}else i[l]=n
else i={0:n}}n=i}return n}
var d=function(e,a,t){if(!e)return
var n=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e
var i=/(\[[^[\]]*])/
var o=/(\[[^[\]]*])/g
var l=t.depth>0&&i.exec(n)
var s=l?n.slice(0,l.index):n
var _=[]
if(s){if(!t.plainObjects&&r.call(Object.prototype,s)&&!t.allowPrototypes)return
_.push(s)}var c=0
while(t.depth>0&&null!==(l=o.exec(n))&&c<t.depth){c+=1
if(!t.plainObjects&&r.call(Object.prototype,l[1].slice(1,-1))&&!t.allowPrototypes)return
_.push(l[1])}l&&_.push("["+n.slice(l.index)+"]")
return u(_,a,t)}
var f=function(e){if(!e)return o
if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.")
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined")
var a="undefined"===typeof e.charset?o.charset:e.charset
return{allowDots:"undefined"===typeof e.allowDots?o.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:o.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:o.arrayLimit,charset:a,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:o.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:o.comma,decoder:"function"===typeof e.decoder?e.decoder:o.decoder,delimiter:"string"===typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:o.delimiter,depth:"number"===typeof e.depth||false===e.depth?+e.depth:o.depth,ignoreQueryPrefix:true===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:o.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:o.parameterLimit,parseArrays:false!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:o.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:o.strictNullHandling}}
e.exports=function(e,a){var t=f(a)
if(""===e||null===e||"undefined"===typeof e)return t.plainObjects?Object.create(null):{}
var r="string"===typeof e?c(e,t):e
var i=t.plainObjects?Object.create(null):{}
var o=Object.keys(r)
for(var l=0;l<o.length;++l){var s=o[l]
var _=d(s,r[s],t)
i=n.merge(i,_,t)}return n.compact(i)}},sxOR:function(e,a,t){"use strict"
var n=String.prototype.replace
var r=/%20/g
var i=t("0jNN")
var o={RFC1738:"RFC1738",RFC3986:"RFC3986"}
e.exports=i.assign({default:o.RFC3986,formatters:{RFC1738:function(e){return n.call(e,r,"+")},RFC3986:function(e){return String(e)}}},o)}}])

//# sourceMappingURL=25-c-7750664f14.js.map