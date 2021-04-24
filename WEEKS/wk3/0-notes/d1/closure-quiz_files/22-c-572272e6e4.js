(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[22],{"21i1":function(e,t,i){"use strict"
var r=i("yiTI")
var n=i("xe+K")
function a(e,t,i,r){const n=!i
const a=n?t:"function"===typeof r?r:t[i]
false
return a}var o=i("ouhR")
var s=i.n(o)
const l=!ENV.use_rce_enhancements&&i("rkWX").default
function c(e,t,i){e.css("display","none")
const a=t.onFocus
t.onFocus=(...e)=>{ENV.use_rce_enhancements||m.showSidebar()
a instanceof Function&&a(...e)}
r["a"].loadOnTarget(e,t,(t,r)=>{const a=b(e)
const o=f(s()(t))
o.data("remoteEditor",r)
a.trigger(n["a"],r)
i&&i(r)})}function d(e){const t=b(e)
const i=t.attr("id")
const r="tinymce-parent-of-"+i
if(t.parent().attr("id")!==r)return t.wrap(`<div id='${r}' style='visibility: hidden'></div>`)}function u(){s()(".mce-resizehandle").attr("aria-hidden",true)}let h=0
function _(){return"random_editor_id_"+h++}function g(e){const t=s()(e)
const i="attr"in t?t.attr("id"):t.id
i&&""!=i||t.attr("id",_())}function f(e){const t=b(e)
const i=t.attr("id")
if(!i||""==i)return t
const r=s()("#"+i)
if(r.length<=0)return t
return r}const p="with the new RCE you don't need to call this method, it is a no op since there is no sidebar"
const m={preloadRemoteModule:(e=(()=>{}))=>r["a"].preload(e),initSidebar:a(p,(e={})=>{ENV.use_rce_enhancements||l.init(e)}),showSidebar:a(p,()=>{ENV.use_rce_enhancements||l.show()}),hideSidebar:a(p,()=>{ENV.use_rce_enhancements||l.hide()}),loadNewEditor(e,t={},i){let r=b(e)
if(r.length<=0)return
g(r)
t=s.a.extend({},t)
const n=e=>{t.focus&&this.activateRCE(r)
i&&i(e)}
r=this.freshNode(r)
if(t.manageParent){delete t.manageParent
d(r)}c(r,t,n)
u()},callOnRCE(e,t,...i){let r=b(e)
r=this.freshNode(r)
return Object(n["d"])(r,t,...i)},destroyRCE(e){let t=b(e)
t=this.freshNode(t)
Object(n["b"])(t)
ENV.use_rce_enhancements||l.hide()},closeRCE(e){window.ENV.use_rce_enhancements&&this.callOnRCE(e,"RCEClosed")},activateRCE(e){let t=b(e)
t=this.freshNode(t)
Object(n["c"])(t)
ENV.use_rce_enhancements||l.show()},freshNode:f,ensureID:g,node2jquery:b}
function b(e){return e&&e.length?e:s()(e)}t["a"]=m},Cvk5:function(e,t,i){"use strict"
i.r(t)
i.d(t,"default",(function(){return l}))
var r=i("pQTu")
var n=i("m0r6")
Object(n["a"])(JSON.parse('{"ar":{"editor_accessibility":{"accessibles":{"background_color":"لون الخلفية، اضغط لأسفل للتحديد","forecolor":"لون النص، اضغط لأسفل للتحديد"},"titles":{"font_size":"حجم الخط، اضغط لأسفل للتحديد","formatting":"التنسيق، اضغط لأسفل للتحديد","rte_help":"منطقة نص منسق. اضغط على ALT+F8 للمساعدة"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"ca":{"editor_accessibility":{"accessibles":{"background_color":"Color de fons, premeu avall per seleccionar","forecolor":"Color del text, premeu avall per seleccionar"},"titles":{"font_size":"Cos de lletra, premeu avall per seleccionar","formatting":"Format, premeu avall per seleccionar","rte_help":"Àrea de text enriquit. Premeu ALT+F8 per obtenir ajuda"}},"rich_content_editor_2708ef21":"Editor de contingut enriquit"},"cy":{"editor_accessibility":{"accessibles":{"background_color":"Lliw\'r Cefndir, pwyswch i lawr i ddewis","forecolor":"Lliw\'r Testun, pwyswch i lawr i ddewis"},"titles":{"font_size":"Maint y Ffont, pwyswch i lawr i ddewis","formatting":"Fformat, pwyswch i lawr i ddewis","rte_help":"Ardal Testun Cyfoethog. Pwyswch ALT+F8 i gael help"}},"rich_content_editor_2708ef21":"Golygydd Cynnwys Cyfoethog"},"da":{"editor_accessibility":{"accessibles":{"background_color":"Baggrundsfarve, tryk ned for at vælge","forecolor":"Tekstfarve, tryk ned for at vælge"},"titles":{"font_size":"Skriftstørrelse, tryk ned for at vælge","formatting":"Formatering, tryk ned for at vælge","rte_help":"Område med RTF. Tryk på ALT+F8 for hjælp"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"da-x-k12":{"editor_accessibility":{"accessibles":{"background_color":"Baggrundsfarve, tryk ned for at vælge","forecolor":"Tekstfarve, tryk ned for at vælge"},"titles":{"font_size":"Skriftstørrelse, tryk ned for at vælge","formatting":"Formatering, tryk ned for at vælge","rte_help":"Område med RTF. Tryk på ALT+F8 for hjælp"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"de":{"editor_accessibility":{"accessibles":{"background_color":"Hintergrundfarbe, zum Auswählen Pfeil-nach-unten drücken","forecolor":"Textfarbe, zum Auswahlen Pfeil-nach-unten drücken"},"titles":{"font_size":"Schriftgröße, zum Auswählen Pfeil-nach-unten drücken","formatting":"Formatierung, zum Auswählen Pfeil-nach-unten drücken","rte_help":"Rich Text-Bereich. Für Hilfe \\u003cAlt\\u003e+F8 drücken"}},"rich_content_editor_2708ef21":"Rich-Content-Editor"},"el":{"editor_accessibility":{"accessibles":{"background_color":"Χρώμα Φόντου, πιέστε για επιλογή","forecolor":"Χρώμα Κειμένου, πιέστε για επιλογή"},"titles":{"font_size":"Μέγεθος Γραμματοσειράς, πιέστε για επιλογή","formatting":"Μορφοποίηση, πατήστε κάτω για επιλογή","rte_help":"\\u003cmrk mid=\\"6144\\" mtype=\\"seg\\"\\u003eΠεριοχή Rich Text.\\u003c/mrk\\u003e \\u003cmrk mid=\\"6145\\" mtype=\\"seg\\"\\u003eΠατήστε ALT+F8 για βοήθεια\\u003c/mrk\\u003e"}},"rich_content_editor_2708ef21":"Επεξεργαστής Πλούσιου Περιεχομένου-rich content"},"en-AU":{"editor_accessibility":{"accessibles":{"background_color":"Background Colour, press down to select","forecolor":"Text Colour, press down to select"},"titles":{"font_size":"Font Size, press down to select","formatting":"Formatting, press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help."}},"rich_content_editor_2708ef21":"Rich Content Editor"},"en-AU-x-unimelb":{"editor_accessibility":{"accessibles":{"background_color":"Background Colour, press down to select","forecolor":"Text Colour, press down to select"},"titles":{"font_size":"Font Size, press down to select","formatting":"Formatting, press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help."}},"rich_content_editor_2708ef21":"Rich Content Editor"},"en-CA":{"editor_accessibility":{"accessibles":{"background_color":"Background Color, press down to select","forecolor":"Text Color, press down to select"},"titles":{"font_size":"Font Size, press down to select","formatting":"Formatting, press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"en-GB":{"editor_accessibility":{"accessibles":{"background_color":"Background colour. Press down to select","forecolor":"Text colour. Press down to select"},"titles":{"font_size":"Font size. Press down to select","formatting":"Formatting. Press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"en-GB-x-lbs":{"editor_accessibility":{"accessibles":{"background_color":"Background colour. Press down to select","forecolor":"Text colour. Press down to select"},"titles":{"font_size":"Font size. Press down to select","formatting":"Formatting. Press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"en-GB-x-ukhe":{"editor_accessibility":{"accessibles":{"background_color":"Background colour. Press down to select","forecolor":"Text colour. Press down to select"},"titles":{"font_size":"Font size. Press down to select","formatting":"Formatting. Press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"es":{"editor_accessibility":{"accessibles":{"background_color":"Color de fondo, pulse abajo para seleccionar","forecolor":"Color de texto, pulse abajo para seleccionar"},"titles":{"font_size":"Tamaño del texto, pulse abajo para seleccionar","formatting":"Formato, pulse abajo para seleccionar","rte_help":"Área del texto enriquecido. Presione ALT+F8 para ayuda"}},"rich_content_editor_2708ef21":"Editor de contenido enriquecido"},"fa":{"editor_accessibility":{"accessibles":{"background_color":"رنگ پس زمینه، کلید down را برای انتخاب فشار دهید","forecolor":"رنگ متن، کلید down را برای انتخاب فشار دهید"},"titles":{"font_size":"اندازه قلم، کلید down را برای انتخاب فشار دهید","formatting":"در حال قالب بندی، کلید down را برای انتخاب فشار دهید","rte_help":"قسمت دارای متن غنی. ALT+F8 را برای راهنمایی فشار دهید."}},"rich_content_editor_2708ef21":"ویرایشگر محتوای غنی"},"fi":{"editor_accessibility":{"accessibles":{"background_color":"Taustaväri, valitse painamalla alas","forecolor":"Tekstin väri, valitse painamalla alas"},"titles":{"font_size":"Fontin koko, valitse painamalla alas","formatting":"Muotoilu, valitse painamalla alas","rte_help":"Monipuolisen tekstieditorin sisältökenttä Saat apua painamalla ALT+F8"}},"rich_content_editor_2708ef21":"Monipuolinen sisältöeditori"},"fr":{"editor_accessibility":{"accessibles":{"background_color":"Couleur de fond. Appuyez pour sélectionner.","forecolor":"Couleur du texte. Appuyez pour sélectionner."},"titles":{"font_size":"Taille du texte. Appuyez pour sélectionner.","formatting":"Mise en forme. Appuyez pour sélectionner.","rte_help":"Zone de texte enrichi. Presser ALT+F8 pour obtenir de l\'aide"}},"rich_content_editor_2708ef21":"Éditeur de texte enrichi"},"fr-CA":{"editor_accessibility":{"accessibles":{"background_color":"Couleur de fond. Appuyez pour sélectionner.","forecolor":"Couleur du texte. Appuyez pour sélectionner."},"titles":{"font_size":"Taille du texte. Appuyez pour sélectionner.","formatting":"Mise en forme. Appuyez pour sélectionner.","rte_help":"Zone de texte enrichi. Presser ALT+F8 pour obtenir de l\'aide"}},"rich_content_editor_2708ef21":"Éditeur de texte enrichi"},"he":{"editor_accessibility":{"accessibles":{"background_color":"צבע רקע, יש להקיש כדי לבחור","forecolor":"צבע טקסט, יש להקיש כדי לבחור"},"titles":{"font_size":"גודל אות, יש להקיש כדי לבחור","formatting":"עיצוב, יש להקיש כדי לבחור","rte_help":"איזור תוכן עשיר. יש להקיש ALT+F8 לעזרה"}},"rich_content_editor_2708ef21":"עורך תוכן עשיר"},"ht":{"editor_accessibility":{"accessibles":{"background_color":"Koulè Fon, peze anba pou ka seleksyone","forecolor":"Koulè Tèks, peze anba pou ka seleksyone"},"titles":{"font_size":"Gwosè Tèks, peze anba pou ka seleksyone","formatting":"Fòmataj, peze anba pou ka seleksyone","rte_help":"Zòn Tèks Rich. Peze ALT+F8 pou èd"}},"rich_content_editor_2708ef21":"Editè Kontni Rich"},"hu":{"editor_accessibility":{"accessibles":{"background_color":"Háttérszín, nyomja le a kiválasztáshoz","forecolor":"Szövegszín, nyomja le a kiválasztáshoz"},"titles":{"font_size":"Betűméret, nyomja le a kiválasztáshoz","formatting":"Formázás, nyomja le a kiválasztáshoz","rte_help":"Vizuális szövegterület, nyomja le az ALT+F8-at a segítséghez"}},"rich_content_editor_2708ef21":"Vizuális szövegszerkesztő"},"hy":{"editor_accessibility":{"accessibles":{"background_color":"Ֆոնի գույն, ընտրելու համար սեղմեք ներքև","forecolor":"Տեքստի գույն, ընտրելու համար սեղմեք ներքև"},"titles":{"font_size":"Տառերի չափ, ընտրելու համար սեղմեք ներքև","formatting":"Ֆորմատավորում, ընտրելու համար սեղմեք ներքև","rte_help":"Ֆորմատավորված տեքստի դաշտ, տեղեկությունների համար սեղմել ALT+F8 "}},"rich_content_editor_2708ef21":"Ֆորմատավորված տեքստի խմբագիր"},"is":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrunnslitur, ýttu á niðurör til að velja","forecolor":"Textalitur, ýttu á niðurör til að velja"},"titles":{"font_size":"Stafastærð, ýttu á niðurör til að velja","formatting":"Forsníð, ýttu á niðurör til að velja","rte_help":"Mótað textasvæði. Ýttu á ALT+F8 til að fá hjálp"}},"rich_content_editor_2708ef21":"Rich Content ritill"},"it":{"editor_accessibility":{"accessibles":{"background_color":"Colore sfondo, premi per selezionare","forecolor":"Colore testo, premi per selezionare"},"titles":{"font_size":"Dimensioni carattere, premi per selezionare","formatting":"Formattazione, premi per selezionare","rte_help":"Area di testo RTF. Premi ALT+F8 per la Guida"}},"rich_content_editor_2708ef21":"Editor di contenuti avanzati"},"ja":{"editor_accessibility":{"accessibles":{"background_color":"背景色、押して選択","forecolor":"テキスト色、押して選択"},"titles":{"font_size":"フォント サイズ、押して選択","formatting":"書式設定、押して選択","rte_help":"リッチテキストエリア。ヘルプへは、ALT+F8を押してください"}},"rich_content_editor_2708ef21":"リッチ コンテンツ エディタ"},"ko":{"editor_accessibility":{"accessibles":{"background_color":"배경색, 선택하려면 누름","forecolor":"텍스트 색, 선택하려면 누름"},"titles":{"font_size":"글자 크기, 선택하려면 누름","formatting":"서식, 선택하려면 누름","rte_help":"Rich Text Area. Press ALT+F8 for help"}}},"mi":{"editor_accessibility":{"accessibles":{"background_color":"Tae Papamuri, ki te pēhi ki raro tīpako","forecolor":"Tae Kuputuhi, ki te pēhi ki raro tīpako"},"titles":{"font_size":"Rahi Momotuhi, ki te pēhi ki raro tīpako","formatting":"Whakahōputu, ki te pēhi ki raro tīpako","rte_help":"Horahanga Kupu Taunaki. Pēhi ALT + K8 no te tauturu"}},"rich_content_editor_2708ef21":"Ētita Ihirangi Whai Rawa"},"nb":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrunnsfarge, trykk nedover for å velge","forecolor":"Tekstfarge, trykk nedover for å velge"},"titles":{"font_size":"Skriftstørrelse, trykk nedover for å velge","formatting":"Formatering, trykk nedover for å velge","rte_help":"Riktekstområde. Trykk ALT+F8 for hjelp"}},"rich_content_editor_2708ef21":"Rich innholdsredigering"},"nb-x-k12":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrunnsfarge, trykk nedover for å velge","forecolor":"Tekstfarge, trykk nedover for å velge"},"titles":{"font_size":"Skriftstørrelse, trykk nedover for å velge","formatting":"Formatering, trykk nedover for å velge","rte_help":"Riktekstområde. Trykk ALT+F8 for hjelp"}},"rich_content_editor_2708ef21":"Rich innholdsredigering"},"nl":{"editor_accessibility":{"accessibles":{"background_color":"Achtergrondkleur, er op drukken om een optie te selecteren","forecolor":"Tekstkleur, er op drukken om een optie te selecteren"},"titles":{"font_size":"Tekstkleur, er op drukken om een optie te selecteren","formatting":"Opmaak, er op drukken om een optie te selecteren","rte_help":"Rich Text Area. Druk ALT+F8 voor hulp"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"nn":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrunnsfarge, trykk ned for å velje","forecolor":"Tekstfarge, trykk ned for å velje"},"titles":{"font_size":"Skriftstorleik, trykk ned for å velje","formatting":"Formatering, trykk ned for å velje","rte_help":"Område for rikt tekstformat. Trykk ALT+F8 for hjelp"}},"rich_content_editor_2708ef21":"Redigeringsprogram for rikt innhald"},"pl":{"editor_accessibility":{"accessibles":{"background_color":"Kolor tła; naciskaj do dołu, aby wybrać","forecolor":"Kolor tekstu; naciskaj do dołu, aby wybrać"},"titles":{"font_size":"Rozmiar czcionki; naciskaj do dołu, aby wybrać","formatting":"Formatowanie; naciskaj do dołu, aby wybrać","rte_help":"Obszar Rich Text. Wciśnij ALT+F8 po pomoc"}},"rich_content_editor_2708ef21":"Edytor wzbogaconej zawartości"},"pt":{"editor_accessibility":{"accessibles":{"background_color":"Cor de fundo, premir para baixo para selecionar","forecolor":"Cor do texto, premir para baixo para selecionar"},"titles":{"font_size":"Tamanho da letra, premir para baixo para selecionar","formatting":"Formatação, premir para baixo para selecionar","rte_help":"Área Rich Text. Pressione ALT+F8 para ajuda"}},"rich_content_editor_2708ef21":"Editor de conteúdo avançado"},"pt-BR":{"editor_accessibility":{"accessibles":{"background_color":"Cor de fundo, pressione para selecionar","forecolor":"Cor do texto, pressione para selecionar"},"titles":{"font_size":"Tamanho da fonte, pressione para selecionar","formatting":"Formatação, pressione para selecionar","rte_help":"Área de conteúdo enriquecido. Pressione ALT + F8 para obter ajuda"}},"rich_content_editor_2708ef21":"Editor de conteúdo avançado"},"ru":{"editor_accessibility":{"accessibles":{"background_color":"Цвет фона, нажмите стрелку вниз, чтобы выбрать","forecolor":"Цвет текста, нажмите стрелку вниз, чтобы выбрать"},"titles":{"font_size":"Размер шрифта, нажмите стрелку вниз, чтобы выбрать","formatting":"Форматирование, нажмите стрелку вниз, чтобы выбрать","rte_help":"Область форматированного текста. Нажмите ALT + F8 для справки"}},"rich_content_editor_2708ef21":"Редактор форматированного текста"},"sl":{"editor_accessibility":{"accessibles":{"background_color":"Barva ozadja; za izbiro pritisnite navzdol.","forecolor":"Barva besedila; za izbiro pritisnite navzdol."},"titles":{"font_size":"Velikost pisave; za izbiro pritisnite navzdol.","formatting":"Oblikovanje; za izbiro pritisnite navzdol.","rte_help":"Območje besedila Za pomoč pritisnite ALT+F8."}},"rich_content_editor_2708ef21":"Urejevalnik"},"sv":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrundsfärg, tryck ner för att välja","forecolor":"Textfärg, tryck ner för att välja"},"titles":{"font_size":"Typsnittsstorlek, tryck ner för att välja","formatting":"Formatering, tryck ner för att välja","rte_help":"RTF-område. Tryck ALT+F8 för hjälp"}},"rich_content_editor_2708ef21":"Innehållsredigeraren"},"sv-x-k12":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrundsfärg, tryck ner för att välja","forecolor":"Textfärg, tryck ner för att välja"},"titles":{"font_size":"Typsnittsstorlek, tryck ner för att välja","formatting":"Formatering, tryck ner för att välja","rte_help":"RTF-område. Tryck ALT+F8 för hjälp"}},"rich_content_editor_2708ef21":"Innehållsredigeraren"},"tr":{"editor_accessibility":{"accessibles":{"background_color":"Arkaplan rengi, aşağı tuşa basın ve seçin","forecolor":"Yazı rengi, aşağı tuşa basın ve seçin"},"titles":{"font_size":"Yazı büyüklüğü, aşağı tuşa basın ve seçin","formatting":"Format, aşağı tuşa basın ve seçin","rte_help":"Zengin Metin Alanı. Yardım için ALT+F8 e basın"}},"rich_content_editor_2708ef21":"Zengin İçerik Editörü"},"uk":{"editor_accessibility":{"accessibles":{"background_color":"Колір фону, натисніть внизу, щоб обрати","forecolor":"Колір тексту, натисніть внизу, щоб обрати"},"titles":{"font_size":"Розмір шрифту, натисніть внизу, щоб обрати","formatting":"Форматування, натисніть внизу, щоб вибрати","rte_help":"Багатофункціональна область тексту. Натисніть ALT+F8 для довідки"}},"rich_content_editor_2708ef21":"Покращений редактор контенту"},"zh-Hans":{"editor_accessibility":{"accessibles":{"background_color":"背景颜色，按下即可选择","forecolor":"文本颜色，按下即可选择"},"titles":{"font_size":"字体大小，按下即可选择","formatting":"格式，按下即可选择","rte_help":"富文本区域，按 Alt+ F8 寻求帮助"}},"rich_content_editor_2708ef21":"富内容编辑器"},"zh-Hant":{"editor_accessibility":{"accessibles":{"background_color":"背景顏色，按下以選擇","forecolor":"文字顏色，按下以選擇"},"titles":{"font_size":"字體大小，按下以選擇","formatting":"格式化，按下以選擇","rte_help":"富文本區域。按 ALT+F8 求助"}},"rich_content_editor_2708ef21":"富內容編輯器"}}'))
i("jQeR")
i("0sPK")
var a=r["default"].scoped("editor_accessibility")
var o=i("ouhR")
var s=i.n(o)
class l{constructor(e){this.editor=e
this.id_prepend=e.id
this.$el=s()("#"+e.editorContainer.id)}accessiblize(){this._cacheElements()
this._addTitles()
this._addLabels()
this._accessiblizeMenubar()
this._removeStatusbarFromTabindex()}_cacheElements(){this.$iframe=this.$el.find(".mce-edit-area iframe")}_addLabels(){this.$el.attr("aria-label",a.t("Rich Content Editor"))
s()(this.editor.getBody()).attr("aria-label",s()(`label[for="${this.id_prepend}"]`).text())
this.$el.find("div[aria-label='Font Sizes']").attr("aria-label",a.t("titles.font_size","Font Size, press down to select"))
this.$el.find("div.mce-listbox.mce-last:not([aria-label])").attr("aria-label",a.t("titles.formatting","Formatting, press down to select"))
this.$el.find("div[aria-label='Text color']").attr("aria-label",a.t("accessibles.forecolor","Text Color, press down to select"))
this.$el.find("div[aria-label='Background color'").attr("aria-label",a.t("accessibles.background_color","Background Color, press down to select"))}_addTitles(){this.$iframe.attr("title",a.t("titles.rte_help","Rich Text Area. Press ALT+F8 for help"))}_accessiblizeMenubar(){const e=this.$el.find(".mce-menubar")
const t=e.find(".mce-menubtn").first()
e.hide()
this.editor.addShortcut("Alt+F9","",()=>{e.show()
t.focus()
this.editor.addShortcut("Alt+F9","",()=>t.focus())})}_removeStatusbarFromTabindex(){const e=this.$el.find(".mce-statusbar > .mce-container-body")
e.attr("tabindex",-1)}}},iklP:function(e,t,i){"use strict"
i.d(t,"b",(function(){return d}))
i.d(t,"a",(function(){return h}))
var r=i("pQTu")
var n=i("m0r6")
Object(n["a"])(JSON.parse('{"ar":{"findLinkForService":{"buttons":{"search":"بحث","search_by_tag":"بحث حسب العلامة"},"errors":{"search_failed":"فشل البحث، الرجاء المحاولة مرة أخرى."},"no_description":"بلا وصف","no_results_found":"لم يتم العثور على نتائج","status":{"diigo_search_throttling":"يقوم Diigo بتقييد المستخدمين إلى بحث واحد كل عشر ثوان.  يرجى الانتظار...","searching":"جارٍ البحث..."},"titles":{"bookmark_search":"البحث في الإشارات المرجعية: %{service_name}"}}},"ca":{"findLinkForService":{"buttons":{"search":"Cerca","search_by_tag":"Cerca per etiqueta"},"errors":{"search_failed":"S\'ha produït un error en la cerca, torneu-ho a provar."},"no_description":"Sense descripció","no_results_found":"No s\'ha trobat cap resultat","status":{"diigo_search_throttling":"El Diigo limita els usuaris a una cerca cada deu segons.  Espereu","searching":"S\'està cercant..."},"titles":{"bookmark_search":"Cerca als preferits: %{service_name}"}}},"cy":{"findLinkForService":{"buttons":{"search":"Chwilio","search_by_tag":"Chwilio yn ôl tag"},"errors":{"search_failed":"Mae\'r broses chwilio wedi methu, rhowch gynnig arall arni."},"no_description":"Dim disgrifiad","no_results_found":"Heb ddod o hyd i ganlyniadau","status":{"diigo_search_throttling":"Mae Diigo yn cyfyngu defnyddwyr i chwilio dim ond unwaith bob deg eiliad.  Arhoswch funud...","searching":"Wrthi\'n chwilio..."},"titles":{"bookmark_search":"Chwilio am nod tudalen: %{service_name}"}}},"da":{"findLinkForService":{"buttons":{"search":"Søg","search_by_tag":"Søg efter tag"},"errors":{"search_failed":"Søgning mislykkede, prøv igen."},"no_description":"Ingen beskrivelse","no_results_found":"Der blev ikke fundet resultater","status":{"diigo_search_throttling":"Diigo begrænser brugerne til en søgning hvert tiende sekund.  Vent venligst ...","searching":"Søger ..."},"titles":{"bookmark_search":"Bogmærkesøgning: %{service_name}"}}},"da-x-k12":{"findLinkForService":{"buttons":{"search":"Søg","search_by_tag":"Søg efter tag"},"errors":{"search_failed":"Søgning mislykkede, prøv igen."},"no_description":"Ingen beskrivelse","no_results_found":"Der blev ikke fundet resultater","status":{"diigo_search_throttling":"Diigo begrænser brugerne til en søgning hvert tiende sekund.  Vent venligst ...","searching":"Søger ..."},"titles":{"bookmark_search":"Bogmærkesøgning: %{service_name}"}}},"de":{"findLinkForService":{"buttons":{"search":"Suchen","search_by_tag":"Suche nach Tag"},"errors":{"search_failed":"Suche fehlgeschlagen. Bitte erneut versuchen"},"no_description":"Keine Beschreibung","no_results_found":"Keine Ergebnisse gefunden","status":{"diigo_search_throttling":"Diigo beschränkt den Benutzer auf eine Suche alle zehn Sekunden.  Bitte warten Sie ...","searching":"Suche läuft ..."},"titles":{"bookmark_search":"Lesezeichensuche: %{service_name}"}}},"el":{"findLinkForService":{"buttons":{"search":"Αναζήτηση","search_by_tag":"Αναζήτηση βάσει Ετικέτας"},"errors":{"search_failed":"Η αναζήτηση απέτυχε, παρακαλώ δοκιμάστε ξανά."},"no_description":"Δεν υπάρχει περιγραφή","no_results_found":"Δεν βρέθηκαν αποτελέσματα","status":{"diigo_search_throttling":"\\u003cmrk mid=\\"1417\\" mtype=\\"seg\\"\\u003eΤο Diigo περιορίζει τους χρήστες σε μία αναζήτηση ανά δέκα δευτερόλεπτα.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"1418\\" mtype=\\"seg\\"\\u003eΠαρακαλώ περιμένετε...\\u003c/mrk\\u003e","searching":"Αναζήτηση..."},"titles":{"bookmark_search":"\\u003cmrk mid=\\"1431\\" mtype=\\"seg\\"\\u003eΑναζήτηση Σελιδοδείκτη:\\u003c/mrk\\u003e \\u003cmrk mid=\\"1432\\" mtype=\\"seg\\"\\u003e%{service_name}\\u003c/mrk\\u003e"}}},"en-AU":{"findLinkForService":{"buttons":{"search":"Search","search_by_tag":"Search by Tag"},"errors":{"search_failed":"Search failed, please try again."},"no_description":"No description","no_results_found":"No Results Found","status":{"diigo_search_throttling":"Diigo limits users to one search every ten seconds.  Please wait...","searching":"Searching..."},"titles":{"bookmark_search":"Bookmark Search: %{service_name}"}}},"en-AU-x-unimelb":{"findLinkForService":{"buttons":{"search":"Search","search_by_tag":"Search by Tag"},"errors":{"search_failed":"Search failed, please try again."},"no_description":"No description","no_results_found":"No Results Found","status":{"diigo_search_throttling":"Diigo limits users to one search every ten seconds.  Please wait...","searching":"Searching..."},"titles":{"bookmark_search":"Bookmark Search: %{service_name}"}}},"en-CA":{"findLinkForService":{"buttons":{"search":"Search","search_by_tag":"Search by Tag"},"errors":{"search_failed":"Search failed, please try again."},"no_description":"No description","no_results_found":"No Results Found","status":{"diigo_search_throttling":"Diigo limits users to one search every ten seconds.  Please wait...","searching":"Searching..."},"titles":{"bookmark_search":"Bookmark Search: %{service_name}"}}},"en-GB":{"findLinkForService":{"buttons":{"search":"Search","search_by_tag":"Search by tag"},"errors":{"search_failed":"Search failed, please try again."},"no_description":"No description","no_results_found":"No results found","status":{"diigo_search_throttling":"Diigo limits users to one search every ten seconds.  Please wait...","searching":"Searching..."},"titles":{"bookmark_search":"Bookmark Search: %{service_name}"}}},"en-GB-x-ukhe":{"findLinkForService":{"buttons":{"search":"Search","search_by_tag":"Search by tag"},"errors":{"search_failed":"Search failed, please try again."},"no_description":"No description","no_results_found":"No results found","status":{"diigo_search_throttling":"Diigo limits users to one search every ten seconds.  Please wait...","searching":"Searching..."},"titles":{"bookmark_search":"Bookmark Search: %{service_name}"}}},"es":{"findLinkForService":{"buttons":{"search":"Buscar","search_by_tag":"Buscar por etiqueta"},"errors":{"search_failed":"Error en la búsqueda; intente de nuevo."},"no_description":"Sin descripción","no_results_found":"No se encontraron resultados","status":{"diigo_search_throttling":"Diigo limita a los usuarios a una búsqueda cada diez segundos.  Espere...","searching":"Buscando..."},"titles":{"bookmark_search":"Búsqueda de marcadores: %{service_name}"}}},"fa":{"findLinkForService":{"buttons":{"search":"جستجو","search_by_tag":"جستجو بر اساس برچسب"},"errors":{"search_failed":"جستجو انجام نشد، لطفا دوباره سعی کنید."},"no_description":"شرح موجود نیست","no_results_found":"نتیجه ای یافت نشد","status":{"diigo_search_throttling":"Diigo کاربران را به یک جستجو در هر ده ثانیه محدود می کند. لطفا صبر کنید...","searching":"درحال جستجو..."},"titles":{"bookmark_search":"نشانه گذاری جستجو: %{service_name}"}}},"fi":{"findLinkForService":{"buttons":{"search":"Hae","search_by_tag":"Hae tunnisteen perusteella"},"errors":{"search_failed":"Haku epäonnistui, yritä uudelleen."},"no_description":"Ei kuvausta","no_results_found":"Tuloksia ei löytynyt","status":{"diigo_search_throttling":"Diigo rajoittaa käyttäjät yhteen hakuun kymmenen sekunnin välein.  Odota hetki...","searching":"Haku on käynnissä..."},"titles":{"bookmark_search":"Kirjanmerkin haku: %{service_name}"}}},"fr":{"findLinkForService":{"buttons":{"search":"Rechercher","search_by_tag":"Rechercher par étiquette"},"errors":{"search_failed":"Échec de la recherche, veuillez réessayer."},"no_description":"Aucune description","no_results_found":"Aucun résultat trouvé","status":{"diigo_search_throttling":"Diigo limite les utilisateurs à une recherche toutes les 10 secondes.  Veuillez patienter...","searching":"Recherche en cours..."},"titles":{"bookmark_search":"Recherche dans les favoris : %{service_name}"}}},"fr-CA":{"findLinkForService":{"buttons":{"search":"Rechercher","search_by_tag":"Rechercher par étiquette"},"errors":{"search_failed":"Échec de la recherche, veuillez réessayer."},"no_description":"Aucune description","no_results_found":"Aucun résultat trouvé","status":{"diigo_search_throttling":"Diigo limite les utilisateurs à une recherche toutes les dix secondes.  Veuillez patienter...","searching":"Recherche en cours..."},"titles":{"bookmark_search":"Recherche d’un signet : %{service_name}"}}},"he":{"findLinkForService":{"buttons":{"search":"חיפוש","search_by_tag":"חיפוש לפי תגיות"},"errors":{"search_failed":"החיפוש נכשל, יש לנסות שוב"},"no_description":"אין תיאור","no_results_found":"לא נמצאו תוצאות","status":{"diigo_search_throttling":"דייגו מגביל משתמשים לחיפוש אחד כל עשר שניות. נא להמתין...","searching":"מחפש..."},"titles":{"bookmark_search":"סימון מאפייני החיפוש %{service_name} לגישה ישירה"}}},"ht":{"findLinkForService":{"buttons":{"search":"Chèche","search_by_tag":"Cheche pa Etikèt"},"errors":{"search_failed":"Rechèch echwe, tanpri eseye ankò."},"no_description":"Pa gen deskripsyon","no_results_found":"Nou pa jwenn rezilta","status":{"diigo_search_throttling":"Diigo limite itilizatè yo a yon rechèch chak dis segonn.  Tanpri tann...","searching":"Chèche..."},"titles":{"bookmark_search":"Make Rechèch: %{service_name}"}}},"hu":{"findLinkForService":{"buttons":{"search":"Keresés","search_by_tag":"Keresés címke alapján"},"errors":{"search_failed":"A keresés sikertelen, kérjük, próbálja újra. "},"no_description":"Nincs leírás","no_results_found":"Nincs találat","status":{"diigo_search_throttling":"A Diigo korlátozása alapján tíz másodpercenként egy keresést lehet végrehajtani. Kérjük, várjon...","searching":"Keresés..."},"titles":{"bookmark_search":"Könyvjelző keresése: %{service_name}"}}},"hy":{"findLinkForService":{"buttons":{"search":"Որոնել","search_by_tag":"Որոնում ըստ պիտակի"},"errors":{"search_failed":"Որոնումը չհաջողվեց, փորձեք կրկին:"},"no_description":"Նկարագրություն չկա","no_results_found":"Ոչ մի արդյունք չի գտնվել","status":{"diigo_search_throttling":"Diigo-ն օգտատերերի համար սահմանել է որոնում տասը վայրկյան պարբերականությամբ:  Խնդրում ենք սպասել... ","searching":"Որոնումը ընթացքում է..."},"titles":{"bookmark_search":"Էջանիշի որոնում՝ %{service_name}"}}},"is":{"findLinkForService":{"buttons":{"search":"Leita","search_by_tag":"Leita eftir merki"},"errors":{"search_failed":"Leit tókst ekki, reyndu aftur."},"no_description":"Engin lýsing","no_results_found":"Engar niðurstöður fundust","status":{"diigo_search_throttling":"Diigo takmarkar notendur við eina leit á hverjum tíu sekúndum.  Augnablik...","searching":"Leita..."},"titles":{"bookmark_search":"Bókamerkjaleit: %{service_name}"}}},"it":{"findLinkForService":{"buttons":{"search":"Cerca","search_by_tag":"Cerca per tag"},"errors":{"search_failed":"Ricerca non riuscita. Riprova."},"no_description":"Nessuna descrizione","no_results_found":"Nessun risultato trovato","status":{"diigo_search_throttling":"Diigo limita gli utenti a una ricerca ogni dieci secondi.  Attendi...","searching":"Ricerca in corso..."},"titles":{"bookmark_search":"Aggiungi ricerca ai preferiti: %{service_name}"}}},"ja":{"findLinkForService":{"buttons":{"search":"検索","search_by_tag":"タグで検索"},"errors":{"search_failed":"検索に失敗しました。もう一度やり直してください。"},"no_description":"説明なし","no_results_found":"一致するものが見つかりませんでした","status":{"diigo_search_throttling":"Diigo によりユーザーは検索を１0秒ごとに1回に制限されています。  お待ちください...","searching":"検索しています..."},"titles":{"bookmark_search":"ブックマーク検索: %{service_name}"}}},"ko":{"findLinkForService":{"buttons":{"search":"검색","search_by_tag":"태그로 검색"},"errors":{"search_failed":"검색에 실패했습니다. 다시 시도하시기 바랍니다."},"no_description":"설명 없음","no_results_found":"찾은 결과 없음","status":{"diigo_search_throttling":"Diigo는 매 10초마다 한 번의 검색만 허용합니다. 기다려 주십시오...","searching":"검색 중..."},"titles":{"bookmark_search":"북마크 검색: %{service_name}"}}},"mi":{"findLinkForService":{"buttons":{"search":"Rapu","search_by_tag":"Rapu i te Tūtohu"},"errors":{"search_failed":"I rahua te rapunga, tēnā koa ngana anō koa."},"no_description":"Kāore he whakaahuatanga","no_results_found":"Kaore he hua","status":{"diigo_search_throttling":"Diigo aukati ai i ngā kaiwhakamahi ki te rapu ia tekau hēkona i te wā  Tēnā koa tatari ....","searching":"Rapu ana ..."},"titles":{"bookmark_search":"Pukatohu Rapu %{service_name}"}}},"nb":{"findLinkForService":{"buttons":{"search":"Søk","search_by_tag":"Søk basert på merke"},"errors":{"search_failed":"Søk mislyktes, vennligst prøv igjen."},"no_description":"Ingen beskrivelse","no_results_found":"Ingen resultater funnet","status":{"diigo_search_throttling":"Diigo begrenser brukere til ett søk hvert tiende sekund.  Vennligst vent…","searching":"Søker..."},"titles":{"bookmark_search":"Bokmerke søk: %{service_name}"}}},"nb-x-k12":{"findLinkForService":{"buttons":{"search":"Søk","search_by_tag":"Søk basert på merke"},"errors":{"search_failed":"Søk mislyktes, vennligst prøv igjen."},"no_description":"Ingen beskrivelse","no_results_found":"Ingen resultater funnet","status":{"diigo_search_throttling":"Diigo begrenser brukere til ett søk hvert tiende sekund.  Vennligst vent…","searching":"Søker..."},"titles":{"bookmark_search":"Bokmerke søk: %{service_name}"}}},"nl":{"findLinkForService":{"buttons":{"search":"Zoeken","search_by_tag":"Zoeken op label"},"errors":{"search_failed":"Zoeken mislukt, probeer het opnieuw."},"no_description":"Geen beschrijving","no_results_found":"Geen resultaten gevonden","status":{"diigo_search_throttling":"Diigo beperkt gebruikers tot één zoekopdracht per tien seconden.  Een ogenblik geduld...","searching":"Bezig met zoeken..."},"titles":{"bookmark_search":"Zoekopdracht aan bladwijzer: %{service_name}"}}},"nn":{"findLinkForService":{"buttons":{"search":"Søk","search_by_tag":"Søk etter tag"},"errors":{"search_failed":"Søket mislukkast, prøv på nytt seinare."},"no_description":"Inga skildring","no_results_found":"Finn ikkje resultat","status":{"diigo_search_throttling":"Med Diigo er du avgrensa til eit søk kvart tiande sekund. Vent...","searching":"Søker..."},"titles":{"bookmark_search":"Bokmerk søket: %{service_name}"}}},"pl":{"findLinkForService":{"buttons":{"search":"Wyszukaj","search_by_tag":"Wyszukaj według etykiety"},"errors":{"search_failed":"Wyszukiwanie nie powiodło się, ponów próbę."},"no_description":"Brak opisu","no_results_found":"Brak wyników","status":{"diigo_search_throttling":"Witryna Diigo ogranicza użytkownikom możliwość wyszukiwania do jednej próby co dziesięć sekund.  Prosimy czekać...","searching":"Trwa wyszukiwanie..."},"titles":{"bookmark_search":"Dodaj wyszukiwanie do ulubionych: %{service_name}"}}},"pt":{"findLinkForService":{"buttons":{"search":"Pesquisar","search_by_tag":"Pesquisar por tag"},"errors":{"search_failed":"Falha na pesquisa, tente novamente."},"no_description":"Sem descrição","no_results_found":"Nenhum resultado encontrado","status":{"diigo_search_throttling":"O Diigo limita os utilizadores a uma pesquisa a cada dez segundos.  É favor aguardar...","searching":"A pesquisar..."},"titles":{"bookmark_search":"Pesquisa de Bookmark: %{service_name}"}}},"pt-BR":{"findLinkForService":{"buttons":{"search":"Pesquisar","search_by_tag":"Pesquisar por tag"},"errors":{"search_failed":"Falha na pesquisa, tente novamente."},"no_description":"Sem descrição","no_results_found":"Nenhum resultado encontrado","status":{"diigo_search_throttling":"O Diigo limita os usuários a uma pesquisa a cada dez segundos.  Por favor, aguarde...","searching":"Pesquisando..."},"titles":{"bookmark_search":"Pesquisa dos favoritos: %{service_name}"}}},"ru":{"findLinkForService":{"buttons":{"search":"Поиск","search_by_tag":"Поиск по тегу"},"errors":{"search_failed":"Сбой поиска, повторите попытку"},"no_description":"Описание отсутствует","no_results_found":"Результаты не найдены","status":{"diigo_search_throttling":"Diigo позволяет пользователям выполнять один поиск раз в десять секунд.  Подождите...","searching":"Идет поиск..."},"titles":{"bookmark_search":"Сделать закладку для поиска: %{service_name}"}}},"sv":{"findLinkForService":{"buttons":{"search":"Sök","search_by_tag":"Sök efter tagg"},"errors":{"search_failed":"Sökning misslyckades, försök igen."},"no_description":"Ingen beskrivning","no_results_found":"Inga resultat hittades","status":{"diigo_search_throttling":"Diigo begränsar användare till en sökning var 10 sekund.  Vänta ...","searching":"Söker ..."},"titles":{"bookmark_search":"Bokmärkessökning: %{service_name}"}}},"sv-x-k12":{"findLinkForService":{"buttons":{"search":"Sök","search_by_tag":"Sök efter tagg"},"errors":{"search_failed":"Sökning misslyckades, försök igen."},"no_description":"Ingen beskrivning","no_results_found":"Inga resultat hittades","status":{"diigo_search_throttling":"Diigo begränsar användare till en sökning var 10 sekund.  Vänta ...","searching":"Söker ..."},"titles":{"bookmark_search":"Bokmärkessökning: %{service_name}"}}},"tr":{"findLinkForService":{"buttons":{"search":"Ara","search_by_tag":"Etikete göre Ara"},"errors":{"search_failed":"Arama işlemi başarısız, lütfen tekrar deneyin."},"no_description":"Açıklama Yok","no_results_found":"Hiç Sonuç Bulunamadı","status":{"diigo_search_throttling":"Diigo kullanıcıları her 10 saniyede bir arama yapabilecek şekilde sınırlıyor. Lütfen bekleyiniz...","searching":"Aranıyor..."},"titles":{"bookmark_search":"Yer İmi Arama: %{service_name}"}}},"zh-Hans":{"findLinkForService":{"buttons":{"search":"搜索","search_by_tag":"按标签搜索"},"errors":{"search_failed":"搜索失败，请重试。"},"no_description":"无描述","no_results_found":"未找到结果","status":{"diigo_search_throttling":"Diigo 限制用户每 10 秒搜索一次。  请稍等...","searching":"正在搜索..."},"titles":{"bookmark_search":"书签搜索：%{service_name}"}}},"zh-Hant":{"findLinkForService":{"buttons":{"search":"搜尋","search_by_tag":"透過標籤搜尋"},"errors":{"search_failed":"搜尋失敗，請再試一次。"},"no_description":"沒有說明","no_results_found":"找不到結果","status":{"diigo_search_throttling":"Diigo 限制使用者每十秒鐘搜尋一次。  請稍候...","searching":"正在搜尋..."},"titles":{"bookmark_search":"書籤搜尋：%{service_name}"}}}}'))
i("jQeR")
i("0sPK")
var a=r["default"].scoped("findLinkForService")
var o=i("ouhR")
var s=i.n(o)
var l=i("5Ky4")
var c=i("0crz")
i("jYyc")
i("Z+Ib")
i("YGE8")
function d(e,t,i){s.a.isArray(e)||(e=[e])
const r="/services?service_types="+e.join(",")
s.a.ajaxJSON(r,"GET",{},e=>{t&&t(e)},e=>{i&&i(e)})}let u
function h(e,t){let i=s()("#instructure_bookmark_search")
if(!i.length){i=s()("<div id='instructure_bookmark_search'/>")
i.append(`<form id='bookmark_search_form' style='margin-bottom: 5px;'><img src='/images/blank.png'/>&nbsp;&nbsp;<input type='text' class='query' style='width: 230px;'/><button class='btn search_button' type='submit'>${Object(l["a"])(a.t("buttons.search","Search"))}</button></form>`)
i.append("<div class='results' style='max-height: 200px; overflow: auto;'/>")
i.find("form").submit(t=>{t.preventDefault()
t.stopPropagation()
const r=new Date
if("diigo"==e&&u&&r-u<15e3){setTimeout(()=>{i.find("form").submit()},15e3-(r-u))
i.find(".results").empty().append(Object(l["a"])(a.t("status.diigo_search_throttling","Diigo limits users to one search every ten seconds.  Please wait...")))
return}i.find(".results").empty().append(Object(l["a"])(a.t("status.searching","Searching...")))
u=new Date
const n=i.find(".query").val()
const o=s.a.replaceTags(i.data("reference_url"),"query",n)
s.a.ajaxJSON(o,"GET",{},e=>{i.find(".results").empty()
e.length||i.find(".results").append(Object(l["a"])(a.t("no_results_found","No Results Found")))
for(const t in e){e[t].short_title=e[t].title
e[t].title==e[t].description&&(e[t].short_title=c["a"].truncateText(e[t].description,{max:30}))
s()("<div class='bookmark'/>").appendTo(i.find(".results")).append(s()('<a class="bookmark_link" style="font-weight: bold;"/>').attr({href:e[t].url,title:e[t].title}).text(e[t].short_title)).append(s()("<div style='margin: 5px 10px; font-size: 0.8em;'/>").text(e[t].description||a.t("no_description","No description")))}},()=>{i.find(".results").empty().append(Object(l["a"])(a.t("errors.search_failed","Search failed, please try again.")))})})
i.delegate(".bookmark_link","click",(function(e){e.preventDefault()
const r=s()(this).attr("href")
const n=s()(this).attr("title")||s()(this).text()
i.dialog("close")
t({url:r,title:n})}))}i.find(".search_button").text("delicious"==e?a.t("buttons.search_by_tag","Search by Tag"):a.t("buttons.search","Search"))
i.find("form img").attr("src",`/images/${e}_small_icon.png`)
let r="/search/bookmarks?q=%7B%7B+query+%7D%7D&service_type=%7B%7B+service_type+%7D%7D"
r=s.a.replaceTags(r,"service_type",e)
i.data("reference_url",r)
i.find(".results").empty().end().find(".query").val("")
i.dialog({title:a.t("titles.bookmark_search","Bookmark Search: %{service_name}",{service_name:s.a.titleize(e)}),open(){i.find("input:visible:first").focus().select()},width:400})}},rkWX:function(e,t,i){"use strict"
i.r(t)
var r=i("ouhR")
var n=i.n(r)
var a=i("yiTI")
function o(e){a["a"].loadSidebarOnTarget(n()("#editor_tabs").get(0),e)}const s={instance:void 0,pendingShow:false,initializing:false,subscriptions:{},init(e={}){if(!this.instance&&!this.initializing){this.initializing=true
const e=e=>{this.initializing=false
this.instance=e
this.pendingShow&&this.show()}
o(e)}this.subscriptions=e},show(){if(this.instance){this.instance.show()
this.subscriptions.show&&this.subscriptions.show()}else this.pendingShow=true},hide(){if(this.instance){this.instance.hide()
this.subscriptions.hide&&this.subscriptions.hide()}else this.pendingShow=false},reset(){this.instance=void 0
this.initializing=false
this.subscriptions={}}}
t["default"]=s},yiTI:function(e,t,i){"use strict"
var r=i("VTBJ")
var n=i("ODXe")
var a=i("ouhR")
var o=i.n(a)
var s=i("GLiE")
var l=i.n(s)
var c=i("x1Tw")
function d(e){let t=e
let i=null
return e=>{null===i&&(i=c["a"].post("/api/v1/jwts/refresh",{jwt:t}).then(e=>{i=null
t=e.data.token
return t}))
"function"===typeof e&&i.then(e)
return i}}var u=i("HIhM")
class h{constructor(e,t,i,r){this.formatBtnGroup="bold italic underline forecolor backcolor removeformat alignleft aligncenter alignright"
this.positionBtnGroup="outdent indent superscript subscript bullist numlist"
this.fontBtnGroup="ltr rtl fontsizeselect formatselect check_a11y"
this.baseURL=e.baseURL
this.maxButtons=t.maxVisibleEditorButtons
this.extraButtons=t.editorButtons
this.instConfig=t
this.viewportWidth=i
this.idAttribute=r}defaultConfig(){return{body_class:window.ENV.FEATURES.canvas_k6_theme?"elementary-theme":"default-theme",font_formats:"Lato=lato,Helvetica Neue,Helvetica,Arial,sans-serif; Balsamiq Sans=Balsamiq Sans,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Architect's Daughter=Architects Daughter,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",selector:"#"+this.idAttribute,[!window.ENV.use_rce_enhancements&&"toolbar"]:this.toolbar(),[!window.ENV.use_rce_enhancements&&"theme"]:"modern",[!window.ENV.use_rce_enhancements&&"skin"]:false,directionality:Object(u["b"])(),plugins:`autolink,media,paste,table,lists,${window.ENV.use_rce_enhancements?"hr,fullscreen,instructure-ui-icons,instructure_condensed_buttons,instructure_documents,instructure_html_view,instructure_media_embed":"textcolor"},link,directionality,a11y_checker,wordcount`,external_plugins:{instructure_image:"/javascripts/tinymce_plugins/instructure_image/plugin.js",instructure_links:"/javascripts/tinymce_plugins/instructure_links/plugin.js",instructure_embed:"/javascripts/tinymce_plugins/instructure_embed/plugin.js",instructure_equation:"/javascripts/tinymce_plugins/instructure_equation/plugin.js",instructure_external_tools:"/javascripts/tinymce_plugins/instructure_external_tools/plugin.js",instructure_record:"/javascripts/tinymce_plugins/instructure_record/plugin.js"},language_load:false,convert_urls:false,menubar:true,branding:false,remove_script_host:true,resize:true,block_formats:"Paragraph=p;Header 2=h2;Header 3=h3;Header 4=h4;Preformatted=pre",valid_elements:"@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|onclick|ondblclick|onmousedown|onmouseup|onmouseover|onmousemove|onmouseout|onkeypress|onkeydown|onkeyup|role],a[rel|rev|charset|hreflang|tabindex|accesskey|type|name|href|target|title|class|onfocus|onblur],strong/b,em/i,strike,u,#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|src|border|alt|title|hspace|vspace|width|height|align|role],-sub,-sup,-blockquote,-table[border=0|cellspacing|cellpadding|width|frame|rules|height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,-div,-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],object[classid|width|height|codebase|*],param[name|value|_value],embed[type|width|height|src|*],script[src|type],map[name],area[shape|coords|href|alt|target],bdo,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|valign|width],dfn,kbd,label[for],legend,q[cite],samp,small,tt,var,big,figure,figcaption,source,track,mark,article,aside,details,footer,header,nav,section,summary,time",extended_valid_elements:"@[id|accesskey|class|dir|lang|style|tabindex|title|contenteditable|contextmenu|draggable|dropzone|hidden|longdesc|spellcheck|translate|align|role|aria-labelledby|aria-atomic|aria-busy|aria-controls|aria-describedby|aria-disabled|aria-dropeffect|aria-flowto|aria-grabbed|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-labelledby|aria-live|aria-owns|aria-relevant|aria-autocomplete|aria-checked|aria-disabled|aria-expanded|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-level|aria-multiline|aria-multiselectable|aria-orientation|aria-pressed|aria-readonly|aria-required|aria-selected|aria-sort|aria-valuemax|aria-valuemin|aria-valuenow|aria-valuetext],iframe[id|data-media-type|title|src|width|height|name|align|style|class|sandbox|allowfullscreen|webkitallowfullscreen|mozallowfullscreen|allow],i[iclass],a[hidden|href|target|rel|media|hreflang|type|charset|name|rev|shape|coords|download|alt],#p,li[value],-ol[reversed|start|type|compact],pre[width],table[border|summary|width|frame|rules|cellspacing|cellpadding|bgcolor],tbody[char|charoff|valign],td[colspan|rowspan|headers|abbr|axis|scope|align|char|charoff|valign|nowrap|bgcolor|width|height],tfoot[char|charoff|valign],th[colspan|rowspan|headers|scope|abbr|axis|align|char|charoff|valign|nowrap|bgcolor|width|height],thead[char|charoff|valign],tr[char|charoff|valign|bgcolor],-ul[compact],video[name|src|allowfullscreen|muted|poster|width|height|controls|playsinline],audio[name|src|muted|controls],annotation[href|xref|definitionURL|encoding|cd|name|src],annotation-xml[href|xref|definitionURL|encoding|cd|name|src],maction[href|xref|mathcolor|mathbackground|actiontype|selection],maligngroup[href|xref|mathcolor|mathbackground|groupalign],malignmark[href|xref|mathcolor|mathbackground|edge],math[xmlns|href|xref|display|maxwidth|overflow|altimg|altimg-width|altimg-height|altimg-valign|alttext|cdgroup|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],menclose[href|xref|mathcolor|mathbackground|notation],merror[href|xref|mathcolor|mathbackground],mfenced[href|xref|mathcolor|mathbackground|open|close|separators],mfrac[href|xref|mathcolor|mathbackground|linethickness|munalign|denomalign|bevelled],mglyph[href|xref|mathcolor|mathbackground|src|alt|width|height|valign],mi[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mlabeledtr[href|xref|mathcolor|mathbackground],mlongdiv[href|xref|mathcolor|mathbackground|longdivstyle|align|stackalign|charalign|charspacing],mmultiscripts[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],mn[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mo[href|xref|mathcolor|mathbackground|mathvariant|mathsize|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast],mover[href|xref|mathcolor|mathbackground|accent|align],mpadded[href|xref|mathcolor|mathbackground|height|depth|width|lspace|voffset],mphantom[href|xref|mathcolor|mathbackground],mprescripts[href|xref|mathcolor|mathbackground],mroot[href|xref|mathcolor|mathbackground],mrow[href|xref|mathcolor|mathbackground],ms[href|xref|mathcolor|mathbackground|mathvariant|mathsize|lquote|rquote],mscarries[href|xref|mathcolor|mathbackground|position|location|crossout|scriptsizemultiplier],mscarry[href|xref|mathcolor|mathbackground|location|crossout],msgroup[href|xref|mathcolor|mathbackground|position|shift],msline[href|xref|mathcolor|mathbackground|position|length|leftoverhang|rightoverhang|mslinethickness],mspace[href|xref|mathcolor|mathbackground|mathvariant|mathsize],msqrt[href|xref|mathcolor|mathbackground],msrow[href|xref|mathcolor|mathbackground|position],mstack[href|xref|mathcolor|mathbackground|align|stackalign|charalign|charspacing],mstyle[href|xref|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],msub[href|xref|mathcolor|mathbackground|subscriptshift],msubsup[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],msup[href|xref|mathcolor|mathbackground|superscriptshift],mtable[href|xref|mathcolor|mathbackground|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|width|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|displaystyle|side|minlabelspacing],mtd[href|xref|mathcolor|mathbackground|rowspan|columnspan|rowalign|columnalign|groupalign],mtext[href|xref|mathcolor|mathbackground|mathvariant|mathsize|width|height|depth|linebreak],mtr[href|xref|mathcolor|mathbackground|rowalign|columnalign|groupalign],munder[href|xref|mathcolor|mathbackground|accentunder|align],munderover[href|xref|mathcolor|mathbackground|accent|accentunder|align],none[href|xref|mathcolor|mathbackground],semantics[href|xref|definitionURL|encoding],svg[*],g[*],circle[*]",non_empty_elements:"td th iframe video audio object script a i area base basefont br col frame hr img input isindex link meta param embed source wbr track",content_css:window.ENV.url_to_what_gets_loaded_inside_the_tinymce_editor_css,browser_spellcheck:true,init_instance_callback:e=>{$("#tinymce-parent-of-"+e.id).css("visibility","visible")},show_media_upload:!!INST.kalturaSettings&&!INST.kalturaSettings.hide_rte_button}}external_buttons(){let e=""
for(let t=0;this.extraButtons&&t<this.extraButtons.length;t++)this.extraButtons.length<=this.maxButtons||t<this.maxButtons-1?e=`${e} instructure_external_button_${this.extraButtons[t].id}`:e.match(/instructure_external_button_clump/)||(e+=" instructure_external_button_clump")
return e}buildInstructureButtons(){let e=" instructure_image instructure_equation"+(window.ENV.use_rce_enhancements?" lti_tool_dropdown":"")
e+=this.external_buttons()
this.instConfig&&this.instConfig.allowMediaComments&&this.instConfig.kalturaSettings&&!this.instConfig.kalturaSettings.hide_rte_button&&(e+=" instructure_record")
const t=this.instConfig&&this.instConfig.equellaEnabled?" instructure_equella":""
e+=t
return e}balanceButtons(e){const t="table media instructure_links unlink"+e
let i=""
let r=""
let n=""
if(this.viewportWidth<359&&this.viewportWidth>0){i=this.formatBtnGroup
r=`${this.positionBtnGroup} ${t}`
n=this.fontBtnGroup}else if(this.viewportWidth<1200){i=`${this.formatBtnGroup} ${this.positionBtnGroup}`
r=`${t} ${this.fontBtnGroup}`}else i=`${this.formatBtnGroup} ${this.positionBtnGroup} ${t} ${this.fontBtnGroup}`
return window.ENV.use_rce_enhancements?[i,r,n]:[i,r,n].map(e=>e.split(" ").join(","))}toolbar(){const e=this.buildInstructureButtons()
return this.balanceButtons(e)}}function _(e,t,r){if(void 0==r)var n=false
else n=r
return{auto_focus:t,setup(t){const r=o()("#"+t.id)
t.on("keyup",e=>{o()(document).trigger("editorKeyUp",[e])})
t.on("change",()=>{r.trigger("change")})
t.on("keyup keydown click mousedown",()=>{n&&t.selection&&r.data("last_bookmark",t.selection.getBookmark(1))})
ENV.use_rce_enhancements||t.on("init",()=>{const e=e=>e.default?e.default:e
const r=e(i("Cvk5"))
new r(t).accessiblize()})
t.on("init",()=>{o()(window).triggerHandler("resize")
o()(t.contentDocument).bind("DOMNodeInserted",t=>{let i,r=t.target
1===r.nodeType&&"IMG"===r.nodeName&&(i=o()(r).data("url"))&&o()(r).attr("src",e.activeEditor.documentBaseURI.toAbsolute(i))})
"onfocusout"in t.contentWindow||o()(t.contentWindow).blur(e=>{if(!t.removed&&t.undoManager.typing){t.undoManager.typing=false
t.undoManager.add()}})})}}}var g=i("u7Gu")
function f(e,t,i,n,a){const o=new h(a,g["a"],e,t)
const s=void 0
return Object(r["a"])(Object(r["a"])(Object(r["a"])({},o.defaultConfig()),_(a,s,n)),i.tinyOptions||{})}var p=f
var m=i("An8g")
var b=i("pQTu")
var k=i("m0r6")
Object(k["a"])(JSON.parse('{"ar":{"ExternalToolsPlugin":{"more_external_tools":"مزيد من الأدوات الخارجية"},"apps_54d24a47":"التطبيق","view_all_e13bf0a6":"عرض الكل"},"ca":{"ExternalToolsPlugin":{"more_external_tools":"Més eines externes"},"apps_54d24a47":"Aplicacions","view_all_e13bf0a6":"Visualitza-ho tot"},"cy":{"ExternalToolsPlugin":{"more_external_tools":"Mwy o Adnoddau Allanol"},"apps_54d24a47":"Apiau","view_all_e13bf0a6":"Gweld Pob Un"},"da":{"ExternalToolsPlugin":{"more_external_tools":"Flere eksterne værktøjer"},"apps_54d24a47":"Apps","view_all_e13bf0a6":"Se alle"},"da-x-k12":{"ExternalToolsPlugin":{"more_external_tools":"Flere eksterne værktøjer"},"apps_54d24a47":"Apps","view_all_e13bf0a6":"Se alle"},"de":{"ExternalToolsPlugin":{"more_external_tools":"Weitere externe Tools"},"apps_54d24a47":"Apps","view_all_e13bf0a6":"Alle anzeigen"},"el":{"ExternalToolsPlugin":{"more_external_tools":"Περισσότερα Εξωτερικά Εργαλεία"},"apps_54d24a47":"Εφαρμογές"},"en-AU":{"ExternalToolsPlugin":{"more_external_tools":"More External Tools"},"apps_54d24a47":"Apps","view_all_e13bf0a6":"View All"},"en-AU-x-unimelb":{"ExternalToolsPlugin":{"more_external_tools":"More External Tools"},"apps_54d24a47":"Apps","view_all_e13bf0a6":"View All"},"en-CA":{"ExternalToolsPlugin":{"more_external_tools":"More External Tools"},"apps_54d24a47":"Apps","view_all_e13bf0a6":"View All"},"en-GB":{"ExternalToolsPlugin":{"more_external_tools":"More external tools"},"apps_54d24a47":"Apps","view_all_e13bf0a6":"View All"},"en-GB-x-ukhe":{"ExternalToolsPlugin":{"more_external_tools":"More external tools"},"apps_54d24a47":"Apps","view_all_e13bf0a6":"View All"},"es":{"ExternalToolsPlugin":{"more_external_tools":"Más herramientas externas"},"apps_54d24a47":"Aplicaciones","view_all_e13bf0a6":"Ver todos"},"fa":{"ExternalToolsPlugin":{"more_external_tools":"ابزارهای بیرونی دیگر"},"apps_54d24a47":"برنامه ها"},"fi":{"ExternalToolsPlugin":{"more_external_tools":"Lisää ulkoisia työkaluja"},"apps_54d24a47":"Sovellukset","view_all_e13bf0a6":"Näytä kaikki"},"fr":{"ExternalToolsPlugin":{"more_external_tools":"Plus d’outils externes"},"apps_54d24a47":"Applications","view_all_e13bf0a6":"Tout afficher"},"fr-CA":{"ExternalToolsPlugin":{"more_external_tools":"Plus d’outils externes"},"apps_54d24a47":"Applications","view_all_e13bf0a6":"Tout afficher"},"he":{"ExternalToolsPlugin":{"more_external_tools":"כלים חיצוניים נוספים"},"apps_54d24a47":"אפליקציות"},"ht":{"ExternalToolsPlugin":{"more_external_tools":"Plis Zouti Ekstèn"},"apps_54d24a47":"Apps","view_all_e13bf0a6":"Afiche Tout"},"hu":{"ExternalToolsPlugin":{"more_external_tools":"További külső eszközök"},"apps_54d24a47":"Alkalmazások"},"hy":{"ExternalToolsPlugin":{"more_external_tools":"Լրացուցիչ արտաքին գործիքներ"},"apps_54d24a47":"Հավելվածներ"},"is":{"ExternalToolsPlugin":{"more_external_tools":"Fleiri ytri tæki"},"apps_54d24a47":"Smáforrit","view_all_e13bf0a6":"Sjá allt"},"it":{"ExternalToolsPlugin":{"more_external_tools":"Altri strumenti esterni"},"apps_54d24a47":"App","view_all_e13bf0a6":"Visualizza tutto"},"ja":{"ExternalToolsPlugin":{"more_external_tools":"その他の外部ツール"},"apps_54d24a47":"アプリ","view_all_e13bf0a6":"すべてを表示する"},"ko":{"ExternalToolsPlugin":{"more_external_tools":"더 많은 외부 도구"},"apps_54d24a47":"앱"},"mi":{"ExternalToolsPlugin":{"more_external_tools":"Ētahi atu Utauta waho"},"apps_54d24a47":"Tono","view_all_e13bf0a6":"Titiro ki te Katoa"},"nb":{"ExternalToolsPlugin":{"more_external_tools":"Flere eksterne verktøy"},"apps_54d24a47":"Apper","view_all_e13bf0a6":"Vis alle"},"nb-x-k12":{"ExternalToolsPlugin":{"more_external_tools":"Flere eksterne verktøy"},"apps_54d24a47":"Apper","view_all_e13bf0a6":"Vis alle"},"nl":{"ExternalToolsPlugin":{"more_external_tools":"Meerdere externe tools"},"apps_54d24a47":"Apps","view_all_e13bf0a6":"Alles weergeven"},"nn":{"ExternalToolsPlugin":{"more_external_tools":"Fleire eksterne verktøy"},"apps_54d24a47":"Appar"},"pl":{"ExternalToolsPlugin":{"more_external_tools":"Więcej zewnętrznych narzędzi"},"apps_54d24a47":"Aplikacje","view_all_e13bf0a6":"Wyświetl wszystkie"},"pt":{"ExternalToolsPlugin":{"more_external_tools":"Mais ferramentas externas"},"apps_54d24a47":"Apps","view_all_e13bf0a6":"Ver tudo"},"pt-BR":{"ExternalToolsPlugin":{"more_external_tools":"Mais ferramentas externas"},"apps_54d24a47":"Aplicativos","view_all_e13bf0a6":"Visualizar todos"},"ru":{"ExternalToolsPlugin":{"more_external_tools":"Больше внешних инструментов"},"apps_54d24a47":"Приложения","view_all_e13bf0a6":"Просмотреть все"},"sv":{"ExternalToolsPlugin":{"more_external_tools":"Fler externa verktyg"},"apps_54d24a47":"Appar","view_all_e13bf0a6":"Visa alla"},"sv-x-k12":{"ExternalToolsPlugin":{"more_external_tools":"Fler externa verktyg"},"apps_54d24a47":"Appar","view_all_e13bf0a6":"Visa alla"},"tr":{"ExternalToolsPlugin":{"more_external_tools":"Daha Fazla Harici Araç"},"apps_54d24a47":"Uygulamalar"},"zh-Hans":{"ExternalToolsPlugin":{"more_external_tools":"更多外部工具"},"apps_54d24a47":"应用程序","view_all_e13bf0a6":"查看全部"},"zh-Hant":{"ExternalToolsPlugin":{"more_external_tools":"更多外部工具"},"apps_54d24a47":"應用程式","view_all_e13bf0a6":"全部檢視"}}'))
i("jQeR")
i("0sPK")
var v=b["default"].scoped("ExternalToolsPlugin")
var y=i("5Ky4")
o.a.fn.dropdownList=function(e){if(this.length){let i=o()("#instructure_dropdown_list")
if("hide"==e||"remove"==e||i.data("current_dropdown_initiator")==this[0]){i.remove().data("current_dropdown_initiator",null)
return}e=o.a.extend({},o.a.fn.dropdownList.defaults,e)
var t=i.children("div.list")
if(!t.length){i=o()("<div id='instructure_dropdown_list'><div class='list ui-widget-content'></div></div>").appendTo("body")
o()(document).mousedown(e=>{i.data("current_dropdown_initiator")&&!o()(e.target).closest("#instructure_dropdown_list").length&&i.hide().data("current_dropdown_initiator",null)}).mouseup(e=>{if(i.data("current_dropdown_initiator")&&!o()(e.target).closest("#instructure_dropdown_list").length){i.hide()
setTimeout(()=>{i.data("current_dropdown_initiator",null)},100)}}).add(this).add(i).keydown(e=>{if(i.data("current_dropdown_initiator")){const t=i.find(".ui-state-hover,.ui-state-active")
if(38==e.keyCode){t.length&&t.prev().length?t.removeClass("ui-state-hover ui-state-active").addClass("minimal").prev().addClass("ui-state-hover").removeClass("minimal").find("span").focus():$item.focus()
return false}if(40==e.keyCode){t.length?t.next().length&&t.removeClass("ui-state-hover ui-state-active").addClass("minimal").next().addClass("ui-state-hover").removeClass("minimal").find("span").focus():i.find(".option:first").addClass("ui-state-hover").removeClass("minimal").find("span").focus()
return false}if(13==e.keyCode&&t.length){t.click()
return false}i.hide().data("current_dropdown_initiator",null)}})
i.find(".option").removeClass("ui-state-hover ui-state-active").addClass("minimal")
i.click(e=>{i.hide().data("current_dropdown_initiator",null)})
t=i.children("div.list")}i.data("current_dropdown_initiator",this[0])
e.width&&i.width(e.width)
e.height&&i.find(".list").css("maxHeight",e.height)
t.empty()
o.a.each(e.options,(e,i)=>{const r=o()("<div class='option minimal' style='cursor: pointer; padding: 2px 5px; overflow: hidden; white-space: nowrap;'>  <span tabindex='-1'>"+e+"</span></div>").appendTo(t)
function n(){r.parent().find("div.option").removeClass("ui-state-hover ui-state-active").addClass("minimal")}o.a.isFunction(i)?r.addClass("ui-state-default").bind({mouseenter(){n()
r.addClass("ui-state-hover").removeClass("minimal")},mouseleave:n,mousedown(e){e.preventDefault()
n()
r.addClass("ui-state-active").removeClass("minimal")},mouseup:n,click:i}):r.addClass("ui-state-disabled").bind({mousedown(e){e.preventDefault()}})})
const r=this.offset(),n=this.outerHeight()
this.outerWidth()
i.css({whiteSpace:"nowrap",position:"absolute",top:r.top+n,left:r.left+5,right:""}).hide().show()
i.offset().left+i.width()>o()(window).width()&&i.css({left:"",right:0})}return this}
o.a.fn.dropdownList.defaults={height:250,width:"auto"}
i("JI1W")
const w=ENV.MAX_MRU_LTI_TOOLS||5
var x={buttonConfig(e,t){const i={title:e.name,classes:"widget btn instructure_external_tool_button"}
if(ENV.use_rce_enhancements){i.id=e.id
i.onAction=()=>{t.execCommand("instructureExternalButton"+e.id)
this.updateMRUList(e.id)
this.showHideButtons(t)}
i.description=e.description
i.favorite=e.favorite}else i.cmd="instructureExternalButton"+e.id
e.canvas_icon_class&&"string"===typeof e.canvas_icon_class?i.icon="hack-to-avoid-mce-prefix "+e.canvas_icon_class:i.image=e.icon_url
return i},clumpedButtonMapping:(e,t,i)=>e.reduce((e,r)=>{let n
n=r.canvas_icon_class?`<i class='${Object(y["a"])(r.canvas_icon_class)}' data-tool-id='${r.id}'></i>`:`<img src='${Object(y["a"])(r.icon_url)}' data-tool-id='${r.id}'/>`
n+="&nbsp;"+Object(y["a"])(r.name)
e[n]=function(){i(r,t)}
return e},{}),attachClumpedDropdown(e,t,i){e.dropdownList({options:t})
i.on("click",()=>{e.dropdownList("hide")})},showHideButtons(e){var t
const i=v.t("Apps")
const r=e.$(e.editorContainer.querySelector(`.tox-tbtn--select[aria-label="${i}"]`))
const n=e.$(e.editorContainer.querySelector(`.tox-tbtn[aria-label="${i}"]`))
if(null!==(t=window.localStorage)&&void 0!==t&&t.getItem("ltimru")){r.attr("aria-hidden","false")
n.attr("aria-hidden","true")
r.show()
n.hide()}else{r.attr("aria-hidden","true")
n.attr("aria-hidden","false")
r.hide()
n.show()}},updateMRUList(e){let t
try{var i
t=JSON.parse((null===(i=window.localStorage)||void 0===i?void 0:i.getItem("ltimru"))||"[]")}catch(e){console.log("Found bad LTI MRU data",e.message)}finally{Array.isArray(t)||(t=[])}try{if(!t.includes(e)){var r
t.unshift(e)
t.splice(w,t.length)
null===(r=window.localStorage)||void 0===r||r.setItem("ltimru",JSON.stringify(t))}}catch(e){console.log("Cannot save LTI MRU list",e.message)}}}
var T=i("mykf")
var E=i("xe+K")
const C=function(e,t){this.id=e.id
this.selectedContent=e.selection.getContent()
this.selectionDetails={node:e.selection.getNode(),range:e.selection.getRng()}
this.$editorEl=t
this.getEditor=function(){if(void 0!==this.$editorEl)return this.$editorEl
return o()("#"+this.id)}
this.createLink=function(e,t,i){Object(E["d"])(this.getEditor(),"create_link",{url:e,classes:t,selectedContent:this.selectedContent,dataAttributes:i,selectionDetails:this.selectionDetails})}}
var z=C
var S=i("iklP")
i("YGE8")
i("p6Wi")
class A{fetchYouTubeTitle(e,t){const i=ENV.JWT
const r=ENV.RICH_CONTENT_APP_HOST
const n=`//${r}/api/youtube_title?vid_id=${e}`
o.a.ajax({headers:{Authorization:"Bearer "+i},url:n}).success(i=>{i.id===e&&t(i.title)}).error(e=>{t(null,e)})}titleYouTubeText(e){const t=o.a.youTubeID(e.attr("href"))
this.fetchYouTubeTitle(t,(i,r)=>{if(r){console.error(`failed to get video title from youtube for "${t}":`,r.responseText)
const i=(+e.attr("data-ytt-failcnt")||0)+1
e.attr("data-ytt-failcnt",i)}else{e.text(i)
e.attr("data-preview-alt",i)}})}}const F=["instructure_scribd_file"]
const j=["instructure_scribd_file"]
const B=new WeakMap
function L(e){const t=e.closest("img").attr("src")
return"<img src='"+Object(y["a"])(t)+"'/>"}function R(e){e.nodeChanged()
return new z(e)}function P(e,t){let i=e.replace(/(auto_open|inline_disabled)/g,"")
t.find(".auto_show_inline_content").attr("checked")&&(i+=" auto_open")
t.find(".disable_inline_content").attr("checked")&&(i+=" inline_disabled")
return i}function N(e,t,i,r){const n=e.find("#instructure_link_prompt_form")
n.off("submit")
n.on("submit",(function(n){n.preventDefault()
n.stopPropagation()
e.data("editor")
const a=o()(this).find(".prompt").val()
const s=e.find(".inst-link-preview-alt input").val()
const l=P(i.call(),e)
const c={"preview-alt":s}
e.dialog("close")
t.createLink(a,l,c)
r.call()}))}function D(e){const t=R(e)
const i=t.getEditor()
var r=o()("#instructure_link_prompt")
let n=""
r.removeClass("for_inline_content").find(".disable_enhancement").hide().end().find(".auto_show").hide().end().find(".insert_button").text("Insert Link").end().find(".disable_inline_content").attr("checked",false).end().find(".auto_show_inline_content").attr("checked",false)
if(0==r.length){r=o()(document.createElement("div"))
Object(S["b"])("BookmarkService",(function(e){const t=r.data("editor")
const i=o()("<div style='text-align: left; margin-left: 20px;'/>")
let a,s
for(const r in e){a=e[r].user_service
if(a){s=o()("<a href='#' class='bookmark_service no-hover'/>")
s.addClass(a.service)
s.data("service",a)
s.attr("title","Find links using "+a.service)
const e=o()("<img/>")
e.attr("src","/images/"+a.service+"_small_icon.png")
s.append(e)
s.click((function(e){e.preventDefault()
o()("#instructure_link_prompt").dialog("close")
Object(S["a"])(o()(this).data("service").service,e=>{o()("#instructure_link_prompt").dialog("close")
Object(E["d"])(t,"create_link",{title:e.title,url:e.url,classes:n})})}))
i.append(s)
i.append("&nbsp;&nbsp;")}}r.find("#instructure_link_prompt_form").after(i)}))
r.append("<p><em>This will make the selected text a link, or insert a new link if nothing is selected.</em></p> <label for='instructure_link_prompt_form_input'>Paste or type a url or wiki page in the box below:</label><form id='instructure_link_prompt_form' class='form-inline'><input type='text' id='instructure_link_prompt_form_input' class='prompt' class='btn' value='http://'/> <button type='submit' class='insert_button btn'>Insert Link</button></form>").append("<div class='actions'></div><div class='clear'></div>").append('<div class="inst-link-preview-alt" style="display: none;"><label>Alt text for inline preview: <input type="text" style="display: block;" /></label></div>').append("<div class='disable_enhancement' style='display: none;'><input type='checkbox' class='disable_inline_content' id='disable_inline_content'/><label for='disable_inline_content'> Disable inline previews for this link</label></div>").append("<div class='auto_show' style='display: none;'><input type='checkbox' class='auto_show_inline_content' id='auto_show_inline_content'/><label for='auto_show_inline_content'> Auto-open the inline preview for this link</label></div>")
r.find(".disable_inline_content").change((function(){o()(this).attr("checked")&&r.find(".auto_show_inline_content").attr("checked",false)
r.find(".auto_show").showIf(!o()(this).attr("checked")&&r.hasClass("for_inline_content_can_auto_show"))}))
r.find(".actions").delegate(".embed_image_link","click",e=>{const t=r.data("editor")
const i=o()(e.target)
e.preventDefault()
Object(E["d"])(t,"insert_code",L(i))
r.dialog("close")})
r.find(".actions").delegate(".embed_youtube_link","click",e=>{e.preventDefault()
r.find("#instructure_link_prompt_form").triggerHandler("submit")})
r.find("#instructure_link_prompt_form .prompt").bind("change keyup",(function(){const e=r.find(".inst-link-preview-alt")
e.hide()
o()("#instructure_link_prompt .actions").empty()
const t=o()(this).val()
const i=r.data("original_data")
if(i&&t==i.url){r.toggleClass("for_inline_content",i.for_inline_content).toggleClass("for_inline_content_can_auto_show",i.for_inline_content_can_auto_show).find(".disable_enhancement").showIf(i.for_inline_content).end().find(".auto_show").showIf(i.for_inline_content_can_auto_show)
n=i.prior_classes}else{r.removeClass("for_inline_content").removeClass("for_inline_content_can_auto_show")
const e=new RegExp("("+F.join("|")+")","g")
n=n.replace(e,"")}let a=!r.hasClass("for_inline_content")
const s=!r.hasClass("for_inline_content_can_auto_show")
if(t.match(/\.(gif|png|jpg|jpeg)$/)){var l=o()(document.createElement("div"))
l.css("textAlign","center")
var c=o()(document.createElement("img"))
c.attr("src",t)
c.addClass("embed_image_link")
c.css("cursor","pointer")
const e=new Image
e.src=t
var d=function(){e.complete?(e.height<100||e.height>100&&e.height<200)&&c.height(e.height):setTimeout(d,500)}
setTimeout(d,500)
c.height(100)
c.attr("title","Click to Embed the Image")
l.append(c)
o()("#instructure_link_prompt .actions").append(l)}else if(t.match(INST.youTubeRegEx)){e.show()
const i=o.a.youTubeID(t)
l=o()(document.createElement("div"))
l.css("textAlign","center")
!r.find(".disable_inline_content").attr("checked")&&r.hasClass("for_inline_content_can_auto_show")&&r.find(".auto_show").show()
a=false
r.find(".disable_enhancement").show()
c=o()(document.createElement("img"))
c.attr("src","http://img.youtube.com/vi/"+i+"/2.jpg")
c.css({paddingLeft:100,background:"url(/images/youtube_logo.png) no-repeat left center",height:90,display:"inline-block"})
c.attr("alt",t)
c.addClass("embed_youtube_link")
c.css("cursor","pointer")
c.attr("title","Click to Embed YouTube Video")
l.append(c)
o()("#instructure_link_prompt .actions").append(l)}if(a){r.find(".disable_enhancement").hide()
r.find(".disable_inline_content").attr("checked",false)}if(s){r.find(".auto_show").hide()
r.find(".auto_show_inline_content").attr("checked",false)}}))
r.attr("id","instructure_link_prompt")
o()("body").append(r)}const a=function(){return n}
const s=function(){O(e,true)}
N(r,t,a,s)
r.data("editor",i)
r.data("original_data",null)
let l=e.selection.getNode()
while("A"!=l.nodeName&&"BODY"!=l.nodeName&&l.parentNode)l=l.parentNode
const c="A"==l.nodeName?o()(l):null
if(c){r.find(".prompt").val(c.attr("href")).change()
r.find(".inst-link-preview-alt input").val(c.data("preview-alt"))
n=(c.attr("class")||"").replace(/youtube_link_to_box/,"")
var d=new RegExp("("+F.join("|")+")");(c.attr("class")||"").match(d)&&r.addClass("for_inline_content").find(".disable_enhancement").show()
d=new RegExp("("+j.join("|")+")");(c.attr("class")||"").match(d)&&r.addClass("for_inline_content_can_auto_show").find(".auto_show").show()
r.data("original_data",{url:c.attr("href"),for_inline_content:r.hasClass("for_inline_content"),for_inline_content_can_auto_show:r.hasClass("for_inline_content_can_auto_show"),prior_classes:n,preview_alt:c.data("preview-alt")})
r.find(".disable_inline_content").attr("checked",c.hasClass("inline_disabled")).triggerHandler("change")
r.find(".auto_show_inline_content").attr("checked",c.hasClass("auto_open")).triggerHandler("change")
r.find(".insert_button").text("Update Link")}else r.find(".prompt").val("").change()
r.dialog({width:425,height:"auto",title:"Link to Website URL",open(){o()(this).find(".prompt").focus().select()}})}function O(e,t){O.counter=O.counter||0
true==t&&0!=O.counter?O.counter=(O.counter+1)%5:o()(e.getBody()).find("a").each((function(){const e=new A
const t=o()(this)
if(!ENV.use_rce_enhancements&&t.attr("href")&&!t.hasClass("inline_disabled")&&t.attr("href").match(INST.youTubeRegEx)){const i=+t.attr("data-ytt-failcnt")||0
t.addClass("youtube_link_to_box")
t.text()===t.attr("href")&&i<1&&e.titleYouTubeText(t)}}))}function I(e){if(B.get(e)||void 0===e.on)return
e.on("PreProcess",(function(e){o()(e.node).find("a.youtube_link_to_box").removeClass("youtube_link_to_box")
o()(e.node).find("img.iframe_placeholder").each((function(){const e=o()(this)
const t=o()("<iframe/>")
const i=e.attr("height")||e.css("height")
const r=e.hasClass("fullWidth")?"100%":e.attr("width")||e.css("width")
e.attr("width",r)
e.css("width",r)
t.attr("src",e.attr("rel"))
t.attr("style",e.attr("_iframe_style"))
if(!t[0].style.height.length){t.attr("height",i)
t.css("height",i)}if(!t[0].style.width.length){t.attr("width",r)
t.css("width",r)}o()(this).after(t)
o()(this).remove()}))}))
e.on("change",()=>{O(e)})
e.on("SetContent",()=>{O(e,"contentJustSet")})
B.set(e,true)}var V={buttonToImg:L,prepEditorForDialog:R,buildLinkClasses:P,bindLinkSubmit:N,renderDialog:D,updateLinks:O,initEditor:I}
i("q1tI")
var q=i("i8i4")
var M=i.n(q)
const H={get more_external_tools(){return Object(y["a"])(v.t("more_external_tools","More External Tools"))}}
const G={init(e,t,r){V.initEditor(e)
if(!r||!r.editorButtons||!r.editorButtons.length)return
let n={open:(...e)=>setTimeout(()=>n.open(...e),50)}
Promise.all([i.e(1),i.e(2),i.e(3),i.e(5),i.e(6),i.e(10),i.e(19),i.e(632)]).then(i.bind(null,"/wcz")).then(({default:t})=>{const i=document.createElement("div")
document.body.appendChild(i)
M.a.render(Object(m["a"])(t,{win:window,editor:e,contextAssetString:ENV.context_asset_string,iframeAllowances:Object(T["a"])(),resourceSelectionUrl:o()("#context_external_tool_resource_selection_url").attr("href"),deepLinkingOrigin:ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN}),i,(function(){n=this}))})
const a=[]
const s=[]
for(let t=0;r.editorButtons&&t<r.editorButtons.length;t++){const i=r.editorButtons[t]
const o=()=>n.open(i)
if(ENV.use_rce_enhancements){s.push(x.buttonConfig(i,e))
e.addCommand("instructureExternalButton"+i.id,o)}else if(r.editorButtons.length>r.maxVisibleEditorButtons&&t>=r.maxVisibleEditorButtons-1)a.push(i)
else{e.addCommand("instructureExternalButton"+i.id,o)
e.addButton("instructure_external_button_"+i.id,x.buttonConfig(i,e))}}if(s.length&&ENV.use_rce_enhancements){K(e,s)
J(e,s)
Y(e,s)
U(e,s)}if(a.length){const t=function(){const t=x.clumpedButtonMapping(a,e,e=>n.open(e))
x.attachClumpedDropdown(o()("#"+this._id),t,e)}
ENV.use_rce_enhancements?e.ui.registry.addButton("instructure_external_button_clump",{title:H.more_external_tools,image:"/images/downtick.png",onAction:t}):e.addButton("instructure_external_button_clump",{title:H.more_external_tools,image:"/images/downtick.png",onkeyup(e){if(32===e.keyCode||13===e.keyCode){e.stopPropagation()
t.call(this)}},onclick:t})}}}
function W(e,t){if(!t.iconSVG&&t.image){const e=document.createElement("svg")
e.setAttribute("viewBox","0 0 16 16")
e.setAttribute("version","1.1")
e.setAttribute("xmlns","http://www.w3.org/2000/svg")
const i=document.createElement("image")
i.setAttribute("xlink:href",t.image)
i.style.width="100%"
i.style.height="100%"
e.appendChild(i)
t.iconSVG=e.outerHTML
t.icon="lti_tool_"+t.id}t.iconSVG&&e.ui.registry.addIcon(t.icon,t.iconSVG)}function U(e,t){t.length&&e.ui.registry.addNestedMenuItem("lti_tools_menuitem",{text:v.t("Apps"),icon:"lti",getSubmenuItems:()=>Z(e,t)})}function K(e,t){const i=v.t("Apps")
e.ui.registry.addButton("lti_tool_dropdown",{onAction:()=>{const e=new CustomEvent("tinyRCE/onExternalTools",{detail:{ltiButtons:t}})
document.dispatchEvent(e)},icon:"lti",tooltip:i,onSetup(t){x.showHideButtons(e)}})}function J(e,t){t.forEach(t=>{if(!t.favorite)return
W(e,t)
e.ui.registry.addButton("instructure_external_button_"+t.id,{onAction:t.onAction,tooltip:t.title,icon:t.icon,title:t.title})})}function Y(e,t){const i=v.t("Apps")
e.ui.registry.addMenuButton("lti_mru_button",{tooltip:i,icon:"lti",fetch(i){i(Z(e,t))},onSetup(t){x.showHideButtons(e)}})}function Z(e,t){const i=[]
try{const r=JSON.parse(window.localStorage.getItem("ltimru"))
if(r&&Array.isArray(r)&&r.length){const n=t.filter(e=>r.includes(e.id))
n.forEach(t=>{W(e,t)
t.menuItem||(t.menuItem={type:"menuitem",text:t.title,icon:t.icon,onAction:t.onAction})
i.push(t.menuItem)})
i.sort((e,t)=>e.text.localeCompare(t.text))}}catch(e){console.log("Failed building mru menu",e.message)}finally{i.push({type:"menuitem",text:v.t("View All"),onAction:()=>{const e=new CustomEvent("tinyRCE/onExternalTools",{detail:{ltiButtons:t}})
document.dispatchEvent(e)}})}return i}var Q=G
function X(e={}){const t=["equationCB","linksCB","imagePickerCB","equellaCB","externalToolCB","recordCB"]
t.forEach(t=>{void 0===e[t]&&(e[t]=function(){})})
document.addEventListener("tinyRCE/initEquation",({detail:t})=>{Promise.all([i.e(9),i.e(672)]).then(i.bind(null,"F+Bhr")).then(({default:i})=>{const r=new i(t.ed)
e.equationCB(r)})})
document.addEventListener("tinyRCE/initLinks",({detail:t})=>{V.renderDialog(t.ed)
e.linksCB()})
document.addEventListener("tinyRCE/initImagePicker",t=>{Promise.all([i.e(1),i.e(2),i.e(7),i.e(9),i.e(11),i.e(12),i.e(79),i.e(91),i.e(83),i.e(633)]).then(i.bind(null,"Dwgn")).then(({default:i})=>{const r=new i(t.detail.ed,t.detail.selectedNode)
e.imagePickerCB(r)})})
document.addEventListener("tinyRCE/initEquella",t=>{i.e(751).then(i.bind(null,"gg/z")).then(({default:i})=>{i(t.detail.ed)
e.equellaCB()})})
document.addEventListener("tinyRCE/initExternalTools",t=>{Q.init(t.detail.ed,t.detail.url,g["a"])
e.externalToolCB()})
document.addEventListener("tinyRCE/initRecord",t=>{Promise.all([i.e(43),i.e(752)]).then(i.bind(null,"xR7n")).then(({default:i})=>{i.insertEditor(t.detail.ed)
e.recordCB()})})}const ee={call(e,...t){if("exists?"===e)return true
return this[e](...t)},focus(){if(void 0!==tinymce){const e=tinymce.get(this.getTextarea().id)
e&&e.focus(true)}}}
const te={show(){$("#editor_tabs").show()},hide(){$("#editor_tabs").hide()}}
const ie={wrapEditor(e){const t=Object(r["a"])(Object(r["a"])({},ee),e)
return Object.assign(e,t)},wrapSidebar(e){const t=Object(r["a"])(Object(r["a"])({},te),e)
return Object.assign(e,t)}}
var re=ie
var ne=i("Cf7h")
var ae=i("/1jZ")
function oe(){if(!ENV.context_asset_string)return null
let e=Object(ne["a"])(ENV.context_asset_string,false),t=Object(n["a"])(e,2),i=t[0],r=t[1]
const a=ENV.current_user_id
const o={contextType:i,contextId:r,userId:a}
const s=!ENV.use_rce_enhancements||ENV.RICH_CONTENT_CAN_UPLOAD_FILES
if(!s||"account"===i){r=a
i="user"}return{canUploadFiles:ENV.RICH_CONTENT_CAN_UPLOAD_FILES,containingContext:o,contextType:i,contextId:r,filesTabDisabled:ENV.RICH_CONTENT_FILES_TAB_DISABLED,host:ENV.RICH_CONTENT_APP_HOST,jwt:ENV.JWT,refreshToken:d(ENV.JWT),themeUrl:ENV.active_brand_config_json_url,liveRegion:()=>document.getElementById("flash_screenreader_holder")}}let se
const le={preload(e){(window.requestIdleCallback||window.setTimeout)(()=>this.loadRCE(e))},loadOnTarget(e,t,i){const r=this.getTargetTextarea(e)
const n=this.getRenderingTarget(r,t.getRenderingTarget)
const a=this.createRCEProps(r,t)
this.loadRCE(e=>{e.renderIntoDiv(n,a,e=>{e.mceInstance().on("init",()=>i(r,re.wrapEditor(e)))})})},loadSidebarOnTarget(e,t){if(ENV.RICH_CONTENT_SKIP_SIDEBAR)return
const i=oe()
this.loadRCE(r=>{r.renderSidebarIntoDiv(e,i,e=>{t(re.wrapSidebar(e))})})},loadingCallbacks:[],RCE:null,loadRCE(e=(()=>{})){se||(se=(window.ENV.use_rce_enhancements?Promise.all([i.e(1),i.e(2),i.e(3),i.e(5),i.e(6),i.e(7),i.e(8),i.e(12),i.e(14),i.e(16),i.e(21),i.e(23),i.e(33),i.e(39),i.e(45),i.e(81),i.e(82),i.e(80),i.e(93),i.e(98),i.e(99),i.e(121),i.e(158),i.e(160),i.e(311)]).then(i.bind(null,"Idzl")):Promise.all([i.e(1),i.e(2),i.e(3),i.e(5),i.e(6),i.e(8),i.e(14),i.e(16),i.e(21),i.e(23),i.e(26),i.e(39),i.e(45),i.e(82),i.e(80),i.e(99),i.e(121),i.e(312)]).then(i.bind(null,"66gZ"))).then(e=>{this.RCE=e
X()
return e}))
return se.then(()=>{this.loadingCallbacks.forEach(e=>e(this.RCE))
this.loadingCallbacks=[]
e(this.RCE)})},getTargetTextarea:e=>"textarea"===o()(e).get(0).type?o()(e).get(0):o()(e).find("textarea").get(0),getRenderingTarget(e,t){let i
i="undefined"===typeof t?o()(e).parent().get(0):t(e)
o()(i).addClass("ic-RichContentEditor")
return i},_attrsToMirror(e){const t=["name"]
const i=l.a.reduce(e.attributes,(e,t)=>{e[t.name]=t.value
return e},{})
return l.a.pick(i,t)},createRCEProps(e,t){var i,n
const a=e.offsetWidth
const o=e.offsetHeight||400
o&&(t.tinyOptions=Object(r["a"])({height:o},t.tinyOptions||{}))
const s=ENV.LOCALE
const l=Object.keys(ae["a"]).map(e=>({id:e,label:ae["a"][e]})).sort((e,t)=>e.id===s?-1:t.id===s?1:e.label.localeCompare(t.label,s))
const c={enabled:ENV.use_rce_enhancements&&ENV.rce_auto_save,rce_auto_save_max_age_ms:Number.isNaN(ENV.rce_auto_save_max_age_ms)?36e5:ENV.rce_auto_save_max_age_ms}
return{defaultContent:e.value||t.defaultContent,editorOptions:p.bind(null,a,e.id,t,null),language:ENV.LOCALE,mirroredAttrs:this._attrsToMirror(e),onFocus:t.onFocus,onBlur:t.onBlur,textareaClassName:e.className,textareaId:e.id,trayProps:oe(),languages:l,autosave:c,instRecordDisabled:ENV.RICH_CONTENT_INST_RECORD_TAB_DISABLED,use_rce_pretty_html_editor:!!(null!==(i=window.ENV)&&void 0!==i&&null!==(n=i.FEATURES)&&void 0!==n&&n.rce_pretty_html_editor)}}}
t["a"]=le}}])

//# sourceMappingURL=22-c-572272e6e4.js.map