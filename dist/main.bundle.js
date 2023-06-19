(()=>{"use strict";var n={424:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,":root {\n  --primary: #ece8ebf5;\n  --secondary: #daaec8;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: var(--primary);\n  font-family: 'Kalam', cursive;\n}\n\nbody,\n.container {\n  display: flex;\n  justify-content: center;\n}\n\nbody {\n  align-items: center;\n  min-height: 100vh;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.container {\n  flex-direction: column;\n  width: 50%;\n  padding-top: 25px;\n  background-color: #fff;\n  box-shadow: 1px 1px 6px #3f1d31;\n}\n\n.container > * {\n  border-bottom: 2px solid #ddd;\n  padding: 0.7em;\n}\n\n.title-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.title-section h1 {\n  font-size: 35px;\n  color: #292929;\n}\n\ninput {\n  border-color: transparent;\n  padding: 0.6em;\n  outline: none;\n  background-color: #fff;\n  font-size: 20px;\n}\n\n.input-task {\n  width: 90%;\n  position: relative;\n  padding: 5px;\n}\n\n.input-field {\n  position: relative;\n  display: flex;\n  padding: 4px;\n  align-items: center;\n}\n\n.input-field label {\n  position: absolute;\n  top: 0;\n  left: 1rem;\n  font-size: 18px;\n  color: #3f1d31;\n  pointer-events: none;\n  transition: 0.2s ease-out;\n}\n\n.input-field input:focus ~ label {\n  top: -20px;\n  left: 2px;\n  color: #292929;\n  font-size: 16px;\n}\n\n#addBtn {\n  width: 11%;\n  font-size: 2rem;\n  position: absolute;\n  background-color: transparent;\n  border-color: transparent;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n\n.list-container-section {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n\n.list-container-section li {\n  display: flex;\n  align-items: center;\n  gap: 0.7em;\n  padding: 0.5em;\n  border-bottom: 2px solid #ddd;\n}\n\n.todo-list {\n  padding-left: 0;\n}\n\n.clear-completed {\n  width: 100%;\n  padding: 0.9em;\n  background-color: #ece8ebf5;\n  margin-top: -30px;\n}\n\n.clear-completed:hover {\n  color: #3c3cf0;\n}\n\n.task i {\n  margin-left: auto;\n}\n\n.fa-ellipsis-vertical:hover {\n  cursor: move;\n}\n\n/* for the code review */\n",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(424),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=JSON.parse(localStorage.getItem("Tasks"))||[],h=()=>{localStorage.setItem("Tasks",JSON.stringify(v))},y=()=>{v.forEach(((n,e)=>{n.index=e+1}))},g=n=>{const e={description:n,completed:!1,index:v.length+1};v.push(e),h()},x=document.getElementById("todoList"),b=document.getElementById("addBtn"),k=document.querySelector(".clear-completed"),E=()=>{x.textContent="",v.forEach(((n,e)=>{x.innerHTML+=`\n      <li class="task" draggable="true" data-index="${e}">\n        <div class="checkbox-container">\n          <input type="checkbox" name="${n.description}" ${n.completed?"checked":""}>\n          <input type="text" value="${n.description}" readonly>\n        </div>\n        <i class="fas fa-ellipsis-vertical" data-index="${e}"></i>\n      </li>\n    `}));const n=document.querySelectorAll(".task");document.querySelectorAll('.task > .checkbox-container > input[type="checkbox"]').forEach((n=>{const e=n.nextElementSibling;let t=n.checked;e.readOnly=!0,n.addEventListener("change",(n=>{const r=n.target.checked;if(r!==t){const n=v.find((n=>n.description===e.value));n&&(n.completed=r,o=v.indexOf(n),i=r,v[o].completed=i,h())}var o,i;t=r}))})),n.forEach(((n,e)=>{const t=n.querySelector('input[type="text"]');n.addEventListener("dblclick",(()=>{if(t.readOnly=!1,n.querySelector(".fa-ellipsis-vertical")){const t=n.querySelector(".fa-ellipsis-vertical");t.classList.remove("fa-ellipsis-vertical"),t.classList.add("fa-trash"),t.addEventListener("click",(()=>{(n=>{v.splice(n,1),v.forEach(((n,e)=>{n.index=e+1})),y(),h()})(e),E()}))}else{const e=n.querySelector(".fa-trash");e.classList.remove("fa-trash"),e.classList.add("fa-ellipsis-vertical"),t.readOnly=!0}})),t.addEventListener("input",(()=>{((n,e)=>{v[e].description=n,h()})(t.value.trim(),e)}))}))};k.addEventListener("click",(()=>{(()=>{const n=v.filter((n=>!n.completed));v.length=0,v.push(...n),h()})(),y(),h(),E()})),document.addEventListener("DOMContentLoaded",E),b.addEventListener("click",(()=>{const n=document.getElementById("input-task"),e=n.value.trim();""!==e&&(g(e),n.value="",E())})),document.addEventListener("keypress",(n=>{if("Enter"===n.key){const n=document.getElementById("input-task"),e=n.value.trim();""!==e&&(g(e),n.value="",E())}})),document.querySelector(".fa-arrows-rotate").addEventListener("click",(()=>{localStorage.removeItem("Tasks"),window.location.reload()}))})()})();