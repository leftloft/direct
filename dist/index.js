!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=9)}([function(e){e.exports=JSON.parse('[{"name":"VKWebAppShowOrderBox","description":"Вызов бокса покупки игрового предмета.","params":[{"name":"type","title":"Тип покупки. Доступно votes и item, но на данный момент поддерживается только item","required":true,"default":"item"},{"name":"item","title":"Идентификатор продукта, обязателен при указании типа item","required":true,"default":"item1"}]},{"name":"VKWebAppShowStoryBox","description":"Открытие редактора историй.","params":[{"name":"background_type","title":"Тип истории. Возможные значения: image, video, none (для случая передачи стикера непосредственно на камеру)","required":true,"default":"image"},{"name":"url","title":"Ссылка на изображение или видео (передача должна переходить по прямой ссылке на mp4)","default":"https://sun9-65.userapi.com/c850136/v850136098/1b77eb/0YK6suXkY24.jpg"},{"name":"blob","title":"Base64 строка с BLOB-ом (поддерживается только для image).","default":""},{"name":"locked","title":"Можно ли перемещать фотографию. (Возможные значения: 0 или 1)","type":"boolean","default":""},{"name":"stickers","type":"json","title":"Массив объектов, описывающих стикеры на полотне","default":"[{\\"sticker_type\\":\\"renderable\\",\\"sticker\\":{ \\"content_type\\":\\"image\\", \\"url\\": \\"https://vk.com/sticker/1-126-256\\"}}]"},{"name":"attachment","type":"json","title":"Описание объекта аттача к истории","default":"{\\"text\\":\\"go_to\\", \\"type\\":\\"url\\",\\"url\\":\\"https://m.vk.com/app7170524\\"}"}]},{"name":"VKWebAppShowInviteBox","description":"Позволяет пригласить друзей в игру."},{"name":"VKWebAppShowLeaderBoardBox","description":"Вызов игрового либерборда, в котором показывается место пользователя среди друзей.","params":[{"name":"user_result","title":"Текущий уровень или очки пользователя","required":true,"type":"number","default":1}]},{"name":"VKWebAppShowRequestBox","description":"Показать бокс отправки игрового запроса пользователю.","params":[{"name":"uid","title":"ID пользователя (пользователь должен быть в друзьях у текущего игрока)","required":true,"type":"number","default":0},{"name":"message","title":"Сообщение","required":true,"default":"Текст вашего сообщения"},{"name":"requestKey","title":"Идентификатор запроса","required":true,"type":"number","default":123}]},{"name":"VKWebAppShowWallPostBox","description":"Позволяет пользователю опубликовать запись на стене.","params":[{"name":"owner_id","title":"ID пользователя или сообщества, на стене которого должна быть опубликована запись","type":"number"},{"name":"message","title":"Текст сообщения (является обязательным, если не задан параметр attachments) ","default":"Hello world"},{"name":"attachments","title":"Список объектов, приложенных к записи и разделённых символом \\",\\"","default":"photo-1_456239099"},{"name":"lat","title":"Географическая широта отметки, заданная в градусах (от -90 до 90)","type":"number","default":0},{"name":"long","title":"Географическая долгота отметки, заданная в градусах (от -180 до 180).","type":"number","default":0},{"name":"place_id","title":"ID места, в котором отмечен пользователь.","type":"number","default":0}]},{"name":"VKWebAppAddToFavorites","description":"Запрос на добавление приложения в избранное."},{"name":"VKWebAppJoinGroup","description":"Позволяет пользователю вступить в сообщество.","params":[{"name":"group_id","title":"ID сообщества","required":true,"type":"number","default":78616012}]},{"name":"VKWebAppAllowMessagesFromGroup","description":"Запрос разрешения на отправку сообщений пользователю от имени сообщества.","params":[{"name":"group_id","title":"ID сообщества","type":"number","default":78616012,"required":true},{"name":"key","title":"Произвольная строка. Этот параметр можно использовать для идентификации пользователя. Его значение будет возвращено в событии message_allow Callback API"}]},{"name":"VKWebAppGetUserInfo","description":"Получить информацию о пользователе."},{"name":"VKWebAppGetClientVersion","description":"Запрос версии клиента."},{"name":"VKWebAppGetAuthToken","description":"Позволяет запросить права доступа у пользователя и получить ключ для работы с API. При этом для идентификации пользователя в сервисе токен запрашивать не нужно.","params":[{"name":"app_id","title":"ID приложения","required":true,"type":"number","default":7170524},{"name":"scope","title":"Список прав доступа","required":true,"default":"friends,status"}]},{"name":"VKWebAppCallAPIMethod","description":"Вызов метода API от имени приложения VK App.","params":[{"name":"method","title":"название метода API","default":"users.get","required":true},{"name":"request_id","title":"Произвольная строка","default":""},{"name":"params","title":"параметры метода API (параметр `access_token` никому передавать нельзя)","type":"json","default":"{\\"user_ids\\": \\"1\\", \\"v\\":\\"5.101\\", \\"access_token\\":\\"your_token\\"}"}]},{"name":"VKWebAppSetLocation","description":"Позволяет установить новое значение хэша (хэш — строка после https://vk.com/app23456#, используется для навигации внутри приложения).","params":[{"name":"location","title":"Ссылка для расшаривания","required":true,"default":"page"}]},{"name":"VKWebAppShare","description":"Позволяет поделиться ссылкой. Ссылка для расшаривания (по умолчанию — текущая ссылка в виде https://vk.com/app123#hash).","params":[{"name":"link","title":"Ссылка для расшаривания","required":true,"default":"https://vk.com/app123#hash"}]},{"name":"VKWebAppGameInstalled","description":"Позволяет проверить, что игра установлена.","params":[{"name":"app_id","title":"ID приложения","default":7170524,"type":"number","required":true}]},{"name":"VKWebAppSendPayload","description":"Метод для отправки события для бота.","params":[{"name":"group_id","title":"ID сообщества","default":78616012,"type":"number","required":true},{"name":"payload","title":"Полезные данные","type":"json","default":"{\\"foo\\": \\"bar\\"}"}]},{"name":"VKWebAppShowNativeAds","description":"Показывает рекламу пользователю.","params":[{"name":"ad_format","title":"Формат рекламы, возможные значения preloader, reward, interstitial","default":"preloader","required":true}]},{"name":"VKWebAppAddToHomeScreen","description":"Добавление мини-приложения на главный экран устройства.","params":[]}]')},function(e,n,t){!function(e){"use strict";var n=function(){return(n=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function t(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var a=arguments[n],i=0,s=a.length;i<s;i++,o++)r[o]=a[i];return r}var r="undefined"!=typeof window,o=Boolean(r&&window.AndroidBridge),a=Boolean(r&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),i=r&&!o&&!a,s=i&&/(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),l=i?"message":"VKWebAppEvent",u=t(["VKWebAppInit","VKWebAppGetCommunityAuthToken","VKWebAppAddToCommunity","VKWebAppGetUserInfo","VKWebAppSetLocation","VKWebAppGetClientVersion","VKWebAppGetPhoneNumber","VKWebAppGetEmail","VKWebAppGetGeodata","VKWebAppSetTitle","VKWebAppGetAuthToken","VKWebAppCallAPIMethod","VKWebAppJoinGroup","VKWebAppAllowMessagesFromGroup","VKWebAppDenyNotifications","VKWebAppAllowNotifications","VKWebAppOpenPayForm","VKWebAppOpenApp","VKWebAppShare","VKWebAppShowWallPostBox","VKWebAppScroll","VKWebAppShowOrderBox","VKWebAppShowLeaderBoardBox","VKWebAppShowInviteBox","VKWebAppShowRequestBox","VKWebAppAddToFavorites","VKWebAppShowCommunityWidgetPreviewBox"],i&&!s?["VKWebAppResizeWindow","VKWebAppShowStoryBox"]:[]),p=r?window.AndroidBridge:void 0,c=a?window.webkit.messageHandlers:void 0;function d(e,n){var t=n||{bubbles:!1,cancelable:!1,detail:void 0},r=document.createEvent("CustomEvent");return r.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail),r}"undefined"==typeof window||window.CustomEvent||(window.CustomEvent=(d.prototype=Event.prototype,d));var f=function(e){var r=void 0,s=[];function d(e){s.push(e)}"undefined"!=typeof window&&"addEventListener"in window&&window.addEventListener(l,(function(e){if(a||o)return t(s).map((function(n){return n.call(null,e)}));if(i&&e&&e.data){var n=e.data,l=n.type,u=n.data,p=n.frameId;l&&"VKWebAppSettings"===l?r=p:t(s).map((function(e){return e({detail:{type:l,data:u}})}))}}));var f=function(e,t){var r,o,a=(r={current:0,next:function(){return++this.current}},o={},{add:function(e,n){var t=null!=n?n:r.next();return o[t]=e,t},resolve:function(e,n,t){var r=o[e];r&&(t(n)?r.resolve(n):r.reject(n),o[e]=null)}});return t((function(e){if(e.detail&&e.detail.data&&"request_id"in e.detail.data){var n=e.detail.data,t=n.request_id,r=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}(n,["request_id"]);t&&a.resolve(t,r,(function(e){return!("error_type"in e)}))}})),function(t,r){return void 0===r&&(r={}),new Promise((function(o,i){var s=a.add({resolve:o,reject:i},r.request_id);e(t,n(n({},r),{request_id:s}))}))}}((function(e,n){p&&p[e]?p[e](JSON.stringify(n)):c&&c[e]&&"function"==typeof c[e].postMessage?c[e].postMessage(n):i&&parent.postMessage({handler:e,params:n,type:"vk-connect",webFrameId:r,connectVersion:"2.1.8"},"*")}),d);return{send:f,sendPromise:f,subscribe:d,unsubscribe:function(e){var n=s.indexOf(e);-1<n&&s.splice(n,1)},supports:function(e){return o?!(!p||"function"!=typeof p[e]):a?!(!c||!c[e]||"function"!=typeof c[e].postMessage):i&&-1<u.indexOf(e)},isWebView:function(){return a||o}}}();e.applyMiddleware=function e(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.includes(void 0)||t.includes(null)?e.apply(void 0,t.filter((function(e){return"function"==typeof e}))):function(e){if(0===t.length)return e;var r,o={subscribe:e.subscribe,send:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.send.apply(e,n)}};return r=t.filter((function(e){return"function"==typeof e})).map((function(e){return e(o)})).reduce((function(e,n){return function(t){return e(n(t))}}))(e.send),n(n({},e),{send:r})}},e.default=f,Object.defineProperty(e,"__esModule",{value:!0})}(n)},function(e,n,t){var r=t(3);e.exports=function(e){var n,t="",o=e||{};return function(e){e&&e.length>0?function(){var o=e;if("number"==typeof o.length)for(var a=0,i=o.length;a<i;a++){var s=o[a];t+='\n<div class="method-item">',t=(t=s.is_supported?t+'\n  <h4 class="method-item__header"'+r.attr("onclick",'vkDirectGameApp.toggleMoreInfoMethod("'+s.name+'", this)',!0,!0)+">"+r.escape(null==(n=s.name)?"":n)+'<span class="icon-toggle">+</span></h4>':t+'\n  <h4 class="method-item__header">'+r.escape(null==(n=s.name)?"":n)+'<span class="method-item__info">'+r.escape(null==(n="VKWebAppAddToHomeScreen"===s.name?"Только Android":"Только IOS/Android")?"":n)+"</span></h4>")+'\n  <div class="method-item__more hide">\n    <p class="method-item__description">'+r.escape(null==(n=s.description)?"":n)+"</p>\n    <from"+r.attr("class",r.classes([s.name+"-request-edit"],[!0]),!1,!0)+">",s.params&&(t+='\n      <fieldset class="fieldset">\n        <legend> Парамеры запроса</legend>',function(){var e=s.params;if("number"==typeof e.length)for(var o=0,a=e.length;o<a;o++){var i=e[o];t=t+'\n        <div class="form-input">\n          <label class="form-input__label"><b class="form-input__label--boldText">'+r.escape(null==(n=i.name)?"":n)+"</b><span> - "+r.escape(null==(n=i.title)?"":n)+':</span></label>\n          <input class="control-text--input control-text" type="text"'+r.attr("name",i.name,!0,!0)+r.attr("value",i.default,!0,!0)+">",i.required&&(t+='<small class="helper">Обязательный</small>'),t+="\n        </div>"}else{a=0;for(var o in e){a++;i=e[o];t=t+'\n        <div class="form-input">\n          <label class="form-input__label"><b class="form-input__label--boldText">'+r.escape(null==(n=i.name)?"":n)+"</b><span> - "+r.escape(null==(n=i.title)?"":n)+':</span></label>\n          <input class="control-text--input control-text" type="text"'+r.attr("name",i.name,!0,!0)+r.attr("value",i.default,!0,!0)+">",i.required&&(t+='<small class="helper">Обязательный</small>'),t+="\n        </div>"}}}.call(this),t+="\n      </fieldset>"),t=t+'\n      <div class="form-input request-params">\n        <label class="form-input__label">Запрос</label>\n        <div class="textarea-input">\n          <textarea class="request-params-area control-text control-text--textarea"></textarea>\n        </div>\n      </div>\n      <div class="result-block">\n        <label class="form-input__label">Ответ</label>\n        <div class="textarea-input">\n          <textarea class="result-content-area control-text control-text--textarea"></textarea>\n        </div>\n      </div>\n      <button class="button"'+r.attr("onclick",'vkDirectGameApp.send("'+s.name+'")',!0,!0)+">Отправить</button>\n    </from>\n  </div>\n</div>"}else{i=0;for(var a in o){i++;s=o[a];t+='\n<div class="method-item">',t=(t=s.is_supported?t+'\n  <h4 class="method-item__header"'+r.attr("onclick",'vkDirectGameApp.toggleMoreInfoMethod("'+s.name+'", this)',!0,!0)+">"+r.escape(null==(n=s.name)?"":n)+'<span class="icon-toggle">+</span></h4>':t+'\n  <h4 class="method-item__header">'+r.escape(null==(n=s.name)?"":n)+'<span class="method-item__info">'+r.escape(null==(n="VKWebAppAddToHomeScreen"===s.name?"Только Android":"Только IOS/Android")?"":n)+"</span></h4>")+'\n  <div class="method-item__more hide">\n    <p class="method-item__description">'+r.escape(null==(n=s.description)?"":n)+"</p>\n    <from"+r.attr("class",r.classes([s.name+"-request-edit"],[!0]),!1,!0)+">",s.params&&(t+='\n      <fieldset class="fieldset">\n        <legend> Парамеры запроса</legend>',function(){var e=s.params;if("number"==typeof e.length)for(var o=0,a=e.length;o<a;o++){var i=e[o];t=t+'\n        <div class="form-input">\n          <label class="form-input__label"><b class="form-input__label--boldText">'+r.escape(null==(n=i.name)?"":n)+"</b><span> - "+r.escape(null==(n=i.title)?"":n)+':</span></label>\n          <input class="control-text--input control-text" type="text"'+r.attr("name",i.name,!0,!0)+r.attr("value",i.default,!0,!0)+">",i.required&&(t+='<small class="helper">Обязательный</small>'),t+="\n        </div>"}else{a=0;for(var o in e){a++;i=e[o];t=t+'\n        <div class="form-input">\n          <label class="form-input__label"><b class="form-input__label--boldText">'+r.escape(null==(n=i.name)?"":n)+"</b><span> - "+r.escape(null==(n=i.title)?"":n)+':</span></label>\n          <input class="control-text--input control-text" type="text"'+r.attr("name",i.name,!0,!0)+r.attr("value",i.default,!0,!0)+">",i.required&&(t+='<small class="helper">Обязательный</small>'),t+="\n        </div>"}}}.call(this),t+="\n      </fieldset>"),t=t+'\n      <div class="form-input request-params">\n        <label class="form-input__label">Запрос</label>\n        <div class="textarea-input">\n          <textarea class="request-params-area control-text control-text--textarea"></textarea>\n        </div>\n      </div>\n      <div class="result-block">\n        <label class="form-input__label">Ответ</label>\n        <div class="textarea-input">\n          <textarea class="result-content-area control-text control-text--textarea"></textarea>\n        </div>\n      </div>\n      <button class="button"'+r.attr("onclick",'vkDirectGameApp.send("'+s.name+'")',!0,!0)+">Отправить</button>\n    </from>\n  </div>\n</div>"}}}.call(this):t+='\n<div class="no-found">Ничего не найдено</div>'}.call(this,"methods"in o?o.methods:"undefined"!=typeof methods?methods:void 0),t}},function(e,n,t){"use strict";var r=Object.prototype.hasOwnProperty;function o(e,n){return Array.isArray(e)?function(e,n){for(var t,r="",a="",i=Array.isArray(n),s=0;s<e.length;s++)(t=o(e[s]))&&(i&&n[s]&&(t=l(t)),r=r+a+t,a=" ");return r}(e,n):e&&"object"==typeof e?function(e){var n="",t="";for(var o in e)o&&e[o]&&r.call(e,o)&&(n=n+t+o,t=" ");return n}(e):e||""}function a(e){if(!e)return"";if("object"==typeof e){var n="";for(var t in e)r.call(e,t)&&(n=n+t+":"+e[t]+";");return n}return e+""}function i(e,n,t,r){if(!1===n||null==n||!n&&("class"===e||"style"===e))return"";if(!0===n)return" "+(r?e:e+'="'+e+'"');var o=typeof n;return"object"!==o&&"function"!==o||"function"!=typeof n.toJSON||(n=n.toJSON()),"string"==typeof n||(n=JSON.stringify(n),t||-1===n.indexOf('"'))?(t&&(n=l(n))," "+e+'="'+n+'"'):" "+e+"='"+n.replace(/'/g,"&#39;")+"'"}n.merge=function e(n,t){if(1===arguments.length){for(var r=n[0],o=1;o<n.length;o++)r=e(r,n[o]);return r}for(var i in t)if("class"===i){var s=n[i]||[];n[i]=(Array.isArray(s)?s:[s]).concat(t[i]||[])}else if("style"===i){s=(s=a(n[i]))&&";"!==s[s.length-1]?s+";":s;var l=a(t[i]);l=l&&";"!==l[l.length-1]?l+";":l,n[i]=s+l}else n[i]=t[i];return n},n.classes=o,n.style=a,n.attr=i,n.attrs=function(e,n){var t="";for(var s in e)if(r.call(e,s)){var l=e[s];if("class"===s){l=o(l),t=i(s,l,!1,n)+t;continue}"style"===s&&(l=a(l)),t+=i(s,l,!1,n)}return t};var s=/["&<>]/;function l(e){var n=""+e,t=s.exec(n);if(!t)return e;var r,o,a,i="";for(r=t.index,o=0;r<n.length;r++){switch(n.charCodeAt(r)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}o!==r&&(i+=n.substring(o,r)),o=r+1,i+=a}return o!==r?i+n.substring(o,r):i}n.escape=l,n.rethrow=function e(n,r,o,a){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&r||a))throw n.message+=" on line "+o,n;try{a=a||t(4).readFileSync(r,"utf8")}catch(t){e(n,null,o)}var i=3,s=a.split("\n"),l=Math.max(o-i,0),u=Math.min(s.length,o+i);i=s.slice(l,u).map((function(e,n){var t=n+l+1;return(t==o?"  > ":"    ")+t+"| "+e})).join("\n");throw n.path=r,n.message=(r||"Pug")+":"+o+"\n"+i+"\n\n"+n.message,n}},function(e,n){},function(e,n,t){var r=t(6),o=t(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});e.exports=i},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function s(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],l=n.base?a[0]+n.base:a[0],u=t[l]||0,p="".concat(l," ").concat(u);t[l]=u+1;var c=s(p),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==c?(i[c].references++,i[c].updater(d)):i.push({identifier:p,updater:h(d,n),references:1}),r.push(p)}return r}function u(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var p,c=(p=[],function(e,n){return p[e]=n,p.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=c(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function f(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,b=0;function h(e,n){var t,r,o;if(n.singleton){var a=b++;t=m||(m=u(n)),r=d.bind(null,t,a,!1),o=d.bind(null,t,a,!0)}else t=u(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=s(t[r]);i[o].references--}for(var a=l(e,n),u=0;u<t.length;u++){var p=s(t[u]);0===i[p].references&&(i[p].updater(),i.splice(p,1))}t=a}}}},function(e,n,t){(n=t(8)(!1)).push([e.i,".body {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Segoe WP, Helvetica Neue, Lucida Grande, Verdana, Tahoma, Arial, sans-serif !important;\n  background: rgb(255, 255, 255);\n  font-size: 14px;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-text-size-adjust: 100%;\n}\n\n.hide {\n  display: none!important;\n}\n\n.link {\n  color: #2a5885;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.link:hover{\n  text-decoration: underline;\n}\n\n.no-found {\n  margin: 11px auto;\n  text-align: center;\n  font-size: 17px;\n  color: rgb(93, 93, 93);\n}\n\n.header {\n  position: fixed;\n  top: 0;\n  height: 45px;\n  width: 100%;\n  background: rgb(81, 129, 184);\n  text-align: center;\n  font-size: 17px;\n  font-weight: 500;\n  color: rgb(255, 255, 255);\n  line-height: 40px;\n}\n\n.header__title {\n  font-size: 17px;\n  margin: 3px;\n}\n\n.search-widget {\n  margin: 10px 10px 10px;\n}\n\n.search-widget__control {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px;\n  border: 1px solid rgb(221, 221, 221);\n  box-shadow: 0 1px 1px rgb(236, 236, 236);\n  -webkit-box-shadow: 0 1px 1px rgb(236, 236, 236);\n  -moz-box-shadow: 0 1px 1px rgb(236, 236, 236);\n  border-radius: 7px 7px 7px 7px;\n  -moz-border-radius: 7px 7px 7px 7px;\n  -webkit-border-radius: 7px 7px 7px 7px;\n}\n\n.header-info {\n  margin: 55px 10px 10px;\n}\n\n.search-widget__control:active, .search-widget__control:focus {\n  outline: none;\n  border: 1px solid rgb(81, 129, 184);\n}\n\n.content {\n  margin: 40px 10px 0;\n}\n\n.method-item {\n  margin: 10px;\n  background-color: rgb(251, 251, 251);\n  border: 1px solid rgb(221, 221, 221);\n  box-shadow: 0 1px 1px rgb(236, 236, 236);\n  -webkit-box-shadow: 0 1px 1px rgb(236, 236, 236);\n  -moz-box-shadow: 0 1px 1px rgb(236, 236, 236);\n  border-radius: 7px 7px 7px 7px;\n  -moz-border-radius: 7px 7px 7px 7px;\n  -webkit-border-radius: 7px 7px 7px 7px;\n}\n\n.method-item__header {\n  margin: 0;\n  padding: 10px 10px;\n  cursor: pointer;\n  color: rgb(93, 93, 93);\n}\n\n.method-item__description {\n  margin: 0;\n}\n\n.method-item__more {\n  margin: 10px;\n}\n\n.request-params {\n  margin: 10px 0;\n}\n\n.control-text {\n  display: block;\n  padding: 5px;\n  width: 100%;\n  box-sizing: border-box;\n  line-height: 20px;\n  color: rgb(85, 85, 85);\n  background-color: rgb(255, 255, 255);\n  border: 1px solid rgb(192, 190, 208);\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  border-radius: 7px 7px 7px 7px;\n  -moz-box-shadow: 0 1px 1px rgb(236, 236, 236);\n  -moz-border-radius: 7px 7px 7px 7px;\n  -webkit-border-radius: 7px 7px 7px 7px;\n}\n\n.control-text--textarea {\n  margin: 0;\n  height: 100px;\n  width: 100%;\n  font-size: 13px;\n  resize: none;\n}\n\n.control-text--input {\n  height: 30px;\n  font-size: 12px;\n}\n\n.control-text:active,\n.control-text:focus {\n  border: 1px solid rgb(81, 129, 184);\n  outline: none;\n}\n\n.notify-block {\n  padding: 10px;\n  position: fixed;\n  top: 50px;\n  right: 20px;\n  background: rgb(81, 129, 184);\n  border-radius: 5px;\n  color: rgb(255, 255, 255);\n  opacity: 0.8;\n}\n\n.icon-toggle {\n  float: right;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n.method-item__info {\n  float: right;\n  display: inline-block;\n  font-weight: bold;\n  color: black;\n  font-size: 10px;\n  line-height: 19px;\n  text-align: right;\n}\n\n.form-input__label {\n  margin-bottom: 5px;\n  display: block;\n}\n\n.helper {\n  margin-top: 6px;\n  padding: 0 1px;\n  font-size: 11px;\n  line-height: 15px;\n  color: rgb(153, 153, 153);\n}\n\n.button {\n  display: inline-block;\n  margin: 15px 0 5px;\n  padding: 6px 12px;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  font-size: 13px;\n  line-height: 15px;\n  border-radius: 2px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: rgb(75, 179, 75);\n  color: rgb(255, 255, 255);\n}\n\n.button:active,\n.button:focus {\n  border: 1px solid rgb(13, 115, 0);\n  outline: none;\n}\n\n.form-input {\n  margin-top: 15px;\n}\n\n.fieldset {\n  margin-top: 10px;\n}\n\n.control-text--successResponse {\n  border: 1px solid rgb(119, 232, 104);\n}\n\n.control-text--errorResponse {\n  border: 1px solid rgb(232, 104, 104);\n}\n\n.form-input__label--boldText {\n  color: rgb(93, 93, 93);\n}\n\n.banner {\n  display: flex;\n  margin: 7px 0;\n  padding: 12px;\n  border-radius: 8px;\n  background-color: #f5f5f5;\n}\n\n.banner__title {\n  margin-top: 2px;\n  font-weight: bold;\n}\n\n.banner__description {\n  margin-top: 2px;\n  color: #6d7885;\n}\n\n.banner__icon {\n  width: 28px;\n  height: 28px;\n  margin-right: 7px;\n  border-radius: 50%;\n  background-image: linear-gradient(90deg, rgb(255, 183, 61) 0%, rgb(255, 160, 0) 100%);\n  box-shadow: inset 0 0 0 1px rgba(0,0,0,.08);\n}\n\n.banner__icon:before {\n  content: '!';\n  position: relative;\n  top: 3px;\n  left: 12px;\n  font-size: 19px;\n  color: #fff;\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([o]).join("\n")}var i,s,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},function(e,n,t){"use strict";t.r(n);var r=t(0),o=function(e){var n=window.document.querySelector(".notify-block");n.textContent=e,n.classList.remove("hide"),setTimeout((function(){n.classList.add("hide")}),5e3)},a=t(2),i=t.n(a);function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.params={}}var n,t,r;return n=e,(t=[{key:"parseUri",value:function(){var e=this,n=window.location.search.substr(1).split("&");n.length&&n.forEach((function(n){var t=s(n.split("="),2),r=t[0],o=t[1];e.params[r]=o}))}},{key:"getParam",value:function(e){return void 0!==this.params[e]?this.params[e]:null}}])&&u(n.prototype,t),r&&u(n,r),e}(),c=t(1),d=t.n(c);var f=function(e){r.forEach((function(e){e.is_supported=d.a.supports(e.name),function(e){if("VKWebAppCallAPIMethod"===e.name){var n=new p;n.parseUri();try{var t=JSON.parse(e.params[2].default);t.access_token=n.getParam("access_token"),e.params[2].default=JSON.stringify(t)}catch(e){}}}(e)})),document.querySelector("#methods-list").innerHTML=i()({methods:e})};function m(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(n){if(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.formMethod=window.document.querySelector("."+n+"-request-edit"),this.currentMethod=r.find((function(e){return e.name===n})),!this.formMethod)throw new Error("Форма для отправки запроса не найдена");if(this.resultArea=this.formMethod.querySelector(".result-content-area"),!this.currentMethod)throw new Error("Метод не найден")}var n,t,a;return n=e,(t=[{key:"_castValue",value:function(e,n){if(!this.currentMethod||!this.currentMethod.params)return n;var t=this.currentMethod.params.find((function(n){return n.name===e}));if(!t)return n;if("number"===t.type)return parseFloat(n);if("boolean"===t.type)return!!+n;if("json"===t.type)try{return JSON.parse(n)}catch(e){return o("Ошибка в формате данных"),{}}return n}},{key:"_showResponse",value:function(e,n){var t=this;this.resultArea.classList.add(e),setTimeout((function(){return t.resultArea.classList.remove(e)}),3e3),this.resultArea.value=JSON.stringify(n)}},{key:"fetchParams",value:function(){var e=this,n={};if(!this.formMethod)return n;var t=this.formMethod.querySelectorAll("input");return t.length?(t.forEach((function(t){if(""===t.value)return n;n[t.name]=e._castValue(t.name,t.value)})),n):n}},{key:"showRequest",value:function(){this.formMethod.querySelector(".request-params-area").value=JSON.stringify({method:this.currentMethod.name,params:this.fetchParams()})}},{key:"showErrorResponse",value:function(e){this._showResponse("control-text--errorResponse",e)}},{key:"showSuccessResponse",value:function(e){this._showResponse("control-text--successResponse",e)}}])&&m(n.prototype,t),a&&m(n,a),e}(),h=[],v=function(e){if(h[e])return h[e];try{return h[e]=new b(e),h[e]}catch(e){o(e.message)}return null};function g(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,a;return n=e,(t=[{key:"init",value:function(){this.renderHashInfo(),f(r),d.a.send("VKWebAppInit",{})}},{key:"renderHashInfo",value:function(){var e=new p;e.parseUri();var n=e.getParam("hash"),t=document.querySelector(".hash-banner"),r=t.querySelector(".banner__description");n&&n.length&&(t.classList.remove("hide"),r.innerHTML=n)}},{key:"toggleMoreInfoMethod",value:function(e,n){var t=n.parentElement.querySelector(".method-item__more"),r=n.querySelector(".icon-toggle");v(e).showRequest(),t.classList.toggle("hide"),t.classList.contains("hide")?r.innerHTML="+":r.innerHTML="-"}},{key:"filterMethods",value:function(e){var n=e.value,t=r.filter((function(e){return~e.name.toUpperCase().indexOf(n.toUpperCase())}));f(t)}},{key:"send",value:function(e){if(d.a.supports(e)){var n=v(e);n.showRequest(),d.a.sendPromise(e,n.fetchParams()).then((function(e){return n.showSuccessResponse(e)})).catch((function(e){return n.showErrorResponse(e)}))}else o("Метод не поддерживается")}}])&&g(n.prototype,t),a&&g(n,a),e}();t(5);window.vkDirectGameApp=new x,window.vkDirectGameApp.init()}]);