/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){function n(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}function r(t,e,n,r){var i=e&&e.prototype instanceof a?e:a,c=Object.create(i.prototype),u=new h(r||[]);return c._invoke=function(t,e,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return{value:void 0,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=l(c,n);if(u){if(u===S)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=o(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===S)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,u),c}function o(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function a(){}function i(){}function c(){}function u(t){["next","throw","return"].forEach((function(e){n(t,e,(function(t){return this._invoke(e,t)}))}))}function s(e,n){function r(a,i,c,u){var s=o(e[a],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&g.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var a;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}}function l(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,l(t,e),"throw"===e.method))return S;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return S}var r=o(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,S;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,S):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,S)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function d(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function y(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(g.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:v}}function v(){return{value:void 0,done:!0}}e=function(){return p};var p={},m=Object.prototype,g=m.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},w=b.iterator||"@@iterator",L=b.asyncIterator||"@@asyncIterator",k=b.toStringTag||"@@toStringTag";try{n({},"")}catch(r){n=function(t,e,n){return t[e]=n}}p.wrap=r;var S={},_={};n(_,w,(function(){return this}));var E=Object.getPrototypeOf,x=E&&E(E(y([])));x&&x!==m&&g.call(x,w)&&(_=x);var T=c.prototype=a.prototype=Object.create(_);return i.prototype=c,n(T,"constructor",c),n(c,"constructor",i),i.displayName=n(c,k,"GeneratorFunction"),p.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},p.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,n(t,k,"GeneratorFunction")),t.prototype=Object.create(T),t},p.awrap=function(t){return{__await:t}},u(s.prototype),n(s.prototype,L,(function(){return this})),p.AsyncIterator=s,p.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new s(r(t,e,n,o),a);return p.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},u(T),n(T,k,"Generator"),n(T,w,(function(){return this})),n(T,"toString",(function(){return"[object Generator]"})),p.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},p.values=y,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(d),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var i=g.call(o,"catchLoc"),c=g.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n,r=this.tryEntries.length-1;0<=r;--r)if((n=this.tryEntries[r]).tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,S):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),S},finish:function(t){for(var e,n=this.tryEntries.length-1;0<=n;--n)if((e=this.tryEntries[n]).finallyLoc===t)return this.complete(e.completion,e.afterLoc),d(e),S},catch:function(t){for(var e,n=this.tryEntries.length-1;0<=n;--n)if((e=this.tryEntries[n]).tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;d(e)}return o}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:y(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),S}},p}function n(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}document.addEventListener("DOMContentLoaded",(function(){i(a)}));var r=document.querySelector(".quote"),o=document.querySelector(".quote_author");document.querySelector(".btn_gen_quote").addEventListener("click",(function(){i(a)}));var a="https://api.quotable.io/random",i=function(){var t=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){function i(t){n(u,o,a,i,c,"next",t)}function c(t){n(u,o,a,i,c,"throw",t)}var u=t.apply(e,r);i(void 0)}))}}(e().mark((function t(n){var a,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:return a=t.sent,t.next=5,a.json();case 5:i=t.sent,r.textContent=i.content,o.textContent=i.author;case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();console.log("hello from quote")})(),(()=>{function t(t,e){for(var n,r=0;r<e.length;r++)(n=e[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function e(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var r,o=document.querySelector("#input"),a=document.querySelector(".btn_add"),i=document.querySelector(".todo_list"),c=document.querySelector(".todo_list_done"),u=document.querySelector(".btn_clear_done"),s=(r=0,function(){var t=Math.max;if(0===localStorage.length)return r;var n=Object.keys(localStorage),o=t.apply(Math,e(n));return r=o+1}),l=function(){var t=0;return function(){var n=Math.min;if(1>=localStorage.length)return t-1;var r=Object.keys(localStorage),o=n.apply(Math,e(r));return t=o-1}}(),f=function(t){var e='                \n            <p class="task_text">'.concat(t,'</p>\n            <div class="controls">\n            <button class="btn btn_check">\n                <i class="fas fa-check"></i>\n            </button>\n            <button class="btn btn_times">\n                <i class="fas fa-times"></i>\n            </button>\n            </div>');new y(e).populateTasks()},d=function(t){var e=t.querySelector(".btn_check"),n=t.querySelector(".btn_times"),r=t.querySelector(".task_text");e.addEventListener("click",(function(t){t.preventDefault(),r.classList.toggle("btn_check_show"),function(t){var e='                \n    <p class="task_text_done">'.concat(t,"</p>");new y(e).populateDoneTasks(t)}(r.textContent),h(t)})),n.addEventListener("click",(function(t){h(t)}))},h=function(t){var e=t.currentTarget.parentNode.parentNode;e.classList.contains("task")?(e.remove(),e.classList.remove("task"),localStorage.removeItem(e.dataset.key)):alert("Error when deleting")};a.addEventListener("click",(function(){o.value?(f(o.value),o.value=""):alert("Ты ничего не вводишь")})),o.addEventListener("keyup",(function(t){13===t.keyCode&&""!=o.value&&(f(o.value),o.value="")})),document.addEventListener("DOMContentLoaded",(function(){(function(){var t=Object.keys(localStorage);t=(t=t.filter((function(t){return-1<t}))).sort();for(var e=0;e<t.length;e++){var n=localStorage.getItem(t[e]),r=document.createElement("li");r.classList.add("task"),r.dataset.key=t[e];var o='                \n        <p class="task_text">'.concat(n,'</p>\n        <div class="controls">\n            <button class="btn btn_check">\n            <i class="fas fa-check"></i>\n            </button>\n            <button class="btn btn_times">\n            <i class="fas fa-times"></i>\n            </button>\n        </div>');r.innerHTML=o,i.append(r)}document.querySelectorAll(".task").forEach((function(t){d(t)}))})(),function(){var t=Object.keys(localStorage);t=(t=t.filter((function(t){return 0>t}))).sort();for(var e=0;e<t.length;e++){var n=localStorage.getItem(t[e]),r=document.createElement("li");r.classList.add("task"),r.dataset.key=t[e];var o='                \n        <p class="task_text_done">'.concat(n,"</p>");r.innerHTML=o,c.append(r)}}()})),u.addEventListener("click",(function(){var t=Object.keys(localStorage);0===(t=t.filter((function(t){return 0<=t}))).length?document.querySelectorAll(".task").forEach((function(t){0>+t.dataset.key&&(t.remove(),t.classList.remove("task"),localStorage.removeItem(t.dataset.key))})):alert("U can clear stash only when u did everything, sorry we working on it")}));var y=function(){function e(t){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,e),this.HTMLCode=t}return function(e,n,r){n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1})}(e,[{key:"populateTasks",value:function(){var t=o.value,e=document.createElement("li");e.classList.add("task"),e.dataset.key=s(),e.innerHTML=this.HTMLCode,i.append(e),localStorage.setItem(s(),t),d(e)}},{key:"populateDoneTasks",value:function(t){var e=document.createElement("li");e.classList.add("task"),e.dataset.key=l(),e.innerHTML=this.HTMLCode,c.append(e),localStorage.setItem(l(),t)}}]),e}();console.log("hello from todo")})(),(()=>{var t,e,n,r,o,a,i=document.querySelector("#focusTime"),c=document.querySelector("#restTime"),u=document.querySelector(".time_container"),s=document.querySelector(".btn_submit"),l=document.querySelector("#pause_switcher"),f=document.querySelector(".timer"),d=document.querySelector(".btn_back"),h=document.querySelector(".timer_form"),y=document.querySelector(".btn_start_focus"),v=document.querySelector(".btn_start_rest"),p=document.querySelector(".btn_stop"),m={},g=0;function b(t,e){var n=Math.pow;return 60===e?new Date(t.getTime()+1e3*n(e,60)):new Date(t.getTime()+6e4*e)}function w(t,n){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:new Date,o=t.getTime()-r;0<=o?u.innerHTML=new Date(o).toLocaleTimeString("en-US",{minute:"2-digit",second:"2-digit"}):(o=0)?u.classList.add("time_container_indication"):(u.classList.add("time_container_indication"),clearInterval(e),k(n))}function L(t,n,r){e=setInterval(w,1e3,t,n,r)}function k(t){switch(t){case"focusSession":v.disabled=!1;break;case"restSession":y.disabled=!1}}function S(t){switch(t){case"focusSession":v.disabled=!0;break;case"restSession":y.disabled=!0}}function _(t,e,n,r){m={focusTime:t,restTime:e,targetTime:n,dataID:r},m=JSON.stringify(m),sessionStorage.setItem(1,m)}d.addEventListener("click",(function(){h.style.display="flex",f.style.display="none",sessionStorage.clear()})),s.addEventListener("click",(function(){if(i.value&&c.value){var e=[+i.value,+c.value];n=e[0],r=e[1],i.value="",c.value="",h.style.display="none",f.style.display="flex",_(n,r,t,o)}else alert("Ты что-то не ввел походу")})),y.addEventListener("click",(function(t){E(n,t)})),v.addEventListener("click",(function(t){E(r,t)})),l.addEventListener("click",(function(){l.checked?(clearInterval(e),a=setInterval((function(){g++}),1e3)):(clearInterval(a),t=b(t,g/=60),_(n,r,t,o),L(t,o))})),p.addEventListener("click",(function(){k(o),clearInterval(e),t=0,u.innerHTML="00:00",_(n,r,t,o)})),document.addEventListener("DOMContentLoaded",(function(){1<sessionStorage.length?(h.style.display="none",f.style.display="flex",m=sessionStorage.getItem(1),(m=JSON.parse(m)).targetTime=new Date(m.targetTime),t=m.targetTime,n=m.focusTime,r=m.restTime,o=m.dataID,S(m.dataID),L(t,m.dataID)):(h.style.display="flex",f.style.display="none")}));var E=function(e,a){S(o=a.currentTarget.dataset.id),function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:new Date;t=b(n,e)}(e),_(n,r,t,o),L(t,o),u.classList.remove("time_container_indication")};console.log("hello from timer")})();
//# sourceMappingURL=bundle.js.map