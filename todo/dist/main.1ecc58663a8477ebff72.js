(()=>{"use strict";var t={91:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},64:(t,e,n)=>{t.exports=n.p+"images/favicon.1eb39dbafa40398acc6d.svg"}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,n),a.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");s.length&&(t=s[s.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,(()=>{var t=n(91),e=n.n(t),s=new URL(n(64),n.b);e()(s);class i{#t="";#e="";#n=new Date;#s=!1;#i=!1;constructor(t,e,n,s){this.#t=t,this.#e=e,this.#n=new Date(n),this.#i=Boolean(s)}get title(){return this.#t}set title(t){this.#t=t,d()}get details(){return this.#e}set details(t){this.#e=t,d()}get dueDate(){return this.#n}set dueDate(t){this.#n=new Date(t),d()}get isImportant(){return this.#i}set isImportant(t){this.#i=Boolean(t),d()}get isCompleted(){return this.#s}set isCompleted(t){this.#s=Boolean(t),d()}toJSON(){return{title:this.title,details:this.details,dueDate:this.dueDate.toJSON(),isImportant:this.isImportant,isCompleted:this.isCompleted}}fromJSON(t){return t&&(this.#t=t.title,this.#e=t.details,this.#n=new Date(t.dueDate),this.#i=Boolean(t.isImportant),this.#s=Boolean(t.isCompleted)),this}}function a(t,e,n,s){return new i(t,e,n,s)}class l{#a=[];constructor(t){this.title=t}addTask(...t){this.#a.push(...t),d()}removeTask(t){this.#a=this.#a.filter((e=>e!==t)),d()}get tasks(){return[...this.#a]}task(t=0){return this.#a[t]}toJSON(){return{title:this.title,tasks:this.tasks.map((t=>t.toJSON()))}}fromJSON(t){return t&&(this.title=t.title,this.#a=t.tasks.map((t=>a().fromJSON(t)))),this}}function o(t){return new l(t)}let c=[];const r={get projects(){return[...c]},project:(t=0)=>c[t],addProject(...t){c.push(...t),d()},removeProject(t){c=c.filter((e=>e!==t)),d()},filter(t){let e=[];return c.forEach((n=>{let s={project:n,tasks:n.tasks.filter(t)};0!==s.tasks.length&&e.push(s)})),e},toJSON(){return this.projects.map((t=>t.toJSON()))},fromJSON(t){return t&&(c=t.map((t=>o().fromJSON(t)))),this}};function d(){localStorage.setItem("projects",JSON.stringify(r.toJSON()))}function m(t="",e="",n){const s=document.createElement("button");return s.innerHTML=e||'<i class="fa-solid fa-square"></i>',s.className="common-btn icon-btn",s.title=t,n&&s.addEventListener("click",n.bind(s)),s}function u(t,e=!1,n={title:"",faIconHTML:"",className:""},s={title:"",faIconHTML:""}){const i=m("","");return Object.assign(i,function(t=!1,e,n){function s(s,i){t=Boolean(s),e&&e(t),n&&n(t,i)}return e&&e(t),{getState:()=>t,setState(t){s(t)},toggleState(e){s(!t,e)}}}(e,p.bind(i,n,s),t?t.bind(i):null)),i.className="common-btn binary-btn",i.addEventListener("click",i.toggleState),i}function p(t,e,n){n?(this.title=t.title||"click to uncheck",this.innerHTML=t.faIconHTML||'<i class="fa-solid fa-square-check"></i>',t.className?this.classList.add(t.className):this.classList.add("binary-checked")):(this.title=e.title||"click to check",this.innerHTML=e.faIconHTML||'<i class="fa-regular fa-square"></i>',t.className?this.classList.remove(t.className):this.classList.remove("binary-checked"))}function f(t="",e="",n){const s=m(t,e,n);return s.titleElement=document.createElement("span"),s.titleElement.innerText=t,s.className="common-btn icon-text-btn",s.append(s.titleElement),s}function h(t,...e){return function(...n){return t.call(this,...e,...n)}}function E(t,e){const n=document.createElement("span");n.innerText=this.title,this.append(n),t&&t.call(this,e)}function b(t="",e=[],n={elementTag:"section",elementClass:"list-element",titleTag:"h2",titleClass:"list-element-title",listTag:"ul",listClass:"list-element-list",itemTag:"li",itemClass:"list-element-item",skipItemTag:!1,autoSelect:!1,selectedClass:"list-element-selected",multiSelect:!1}){const s=document.createElement(n.elementTag||"section");return s.titleElement=document.createElement(n.titleTag||"h2"),s.listElement=document.createElement(n.listTag||"ul"),s.className=n.elementClass||"list-element",s.titleElement.className=n.titleClass||"list-element-title",s.listElement.className=n.listClass||"list-element-list",s.titleElement.innerText=t,s.append(s.titleElement,s.listElement),n.autoSelect&&Object.assign(s,function(t,e=""){let n=[];return{selectedElements:()=>n,selectElement(s){[...t.childNodes].includes(s)&&(s.classList.add(e),n.push(s))},unselectElement(t){n.includes(t)&&(t.classList.remove(e),n=n.filter((e=>e!==t)))},unselectAll(){t.childNodes.forEach((t=>t.classList.remove(e))),n=[]},isSelected:t=>n.includes(t)}}(s.listElement,n.selectedClass||"list-element-selected")),Object.assign(s,function(t,e={itemTag:"li",itemClass:"list-element-item",skipItemTag:!1,autoSelect:!1,multiSelect:!1,unselectAll:()=>{},select:t=>{},unselect:t=>{},isSelected:t=>{}}){function n(){e.unselectAll(),e.select(this)}function s(){e.isSelected(this)?e.unselect(this):e.select(this)}function i(t){e.multiSelect?t.addEventListener("click",s.bind(t)):t.addEventListener("click",n.bind(t))}return{itemElements:()=>[...t.childNodes],itemElement:(e=0)=>t.childNodes[e],addElements(...n){n.forEach((n=>{let s=n;e.skipItemTag||(s=document.createElement(e.itemTag||"li"),s.append(n)),s.className=e.itemClass||"list-element-item",t.append(s),e.autoSelect&&i(s)}))},removeElements(...e){e.forEach((e=>{try{t.removeChild(e)}catch(t){console.error(t)}}))},removeAll(){t.innerHTML=""}}}(s.listElement,{itemTag:n.itemTag||"li",itemClass:n.itemClass||"list-element-item",skipItemTag:n.skipItemTag||!1,autoSelect:n.autoSelect||!1,multiSelect:n.multiSelect||!1,unselectAll:s.unselectAll,select:s.selectElement,unselect:s.unselectElement,isSelected:s.isSelected})),s.addElements(...e),s}function v(t,e,n,s){const i=document.createElement("form"),a=function(t){const e=document.createElement("div"),n=document.createElement("label"),s=document.createElement("input");return n.innerText="Title:",n.setAttribute("for","task-form-title"),s.id="task-form-title",s.type="text",s.required=!0,e.className="form-input",e.append(n,s),t.titleInput=s,e}(i),l=function(t){const e=document.createElement("div"),n=document.createElement("label"),s=document.createElement("textarea");return n.innerText="Details(optional):",n.setAttribute("for","task-form-details"),s.id="task-form-details",e.className="form-input",e.append(n,s),t.detailsInput=s,e}(i),o=function(t){const e=document.createElement("div"),n=document.createElement("label"),s=document.createElement("input");return n.innerText="Date:",n.setAttribute("for","task-form-date"),s.id="task-form-date",s.type="date",s.required=!0,e.className="form-input",e.append(n,s),t.dateInput=s,e}(i),c=function(t){const e=document.createElement("div"),n=function(t,e=!1,n={title:"",faIconHTML:"",className:""},s={title:"",faIconHTML:""}){n.className||(n.className="binary-text-checked");const i=u(h(E,t),e,n,s);return i.className="common-btn binary-text-btn",E.call(i,null,e),i}(null,!1,{title:"Mark as Important",faIconHTML:'<i class="fa-solid fa-star"></i>',className:"form-important-checked"},{title:"Mark as Important",faIconHTML:'<i class="fa-regular fa-star"></i>'});return e.classList.add("form-important"),n.type="button",e.append(n),t.importantInput=n,e}(i),r=function(t,e,n){const s=document.createElement("div"),i=document.createElement("button"),a=document.createElement("button");return i.innerText=n||"Add",a.innerText="Cancel",a.type="button",i.addEventListener("click",t),a.addEventListener("click",e),s.className="form-controls",i.classList.add("form-add-btn","hover"),a.classList.add("form-cancel-btn","hover"),s.append(i,a),s}(g.bind(i,t),L.bind(i,e),n||"Add");return i.autocomplete="off",i.className="add-form task-form",i.load=k.bind(i),s&&i.load(s),i.append(a,l,o,c,r),i}function k(t){this.titleInput.value=t.title,this.detailsInput.value=t.details,this.dateInput.valueAsDate=t.dueDate,this.importantInput.setState(t.isImportant)}function g(t,e){if(this.checkValidity()){e.preventDefault();const n={title:this.titleInput.value,details:this.detailsInput.value,dueDate:this.dateInput.valueAsDate,isImportant:this.importantInput.getState()};t&&t.call(this,n,e),this.remove()}}function L(t,e){t&&t.call(this,e),this.remove()}function I(t){this.checkButton.setState(t.isCompleted),this.titleElement.innerText=t.title,this.titleElement.title=t.title,this.dateElement.innerText=t.dueDate.toLocaleDateString("en-GB"),this.importantButton.setState(t.isImportant),this.detailsElement.innerText=t.details}function T(t,e){const n=document.createElement("p");return t&&(n.className=t),e&&(n.innerText=e),n}function N(t,e){const n=b(t.title,[],{titleClass:"project-title"});if(n.classList.add("project"),y(n,t,e),!1===e){const s=f("Add Task",'<i class="fa-solid fa-plus"></i>',h(D,n,t,e));s.classList.add("show-form-btn","hover"),n.append(s)}return n}function y(t,e,n){t.removeAll();const s=e.tasks.map((s=>function(t,e,n){const s=document.createElement("section"),i=document.createElement("details"),a=document.createElement("summary"),l=document.createElement("p");return s.className="task-element",l.className="task-details",s.checkButton=function(t){const e=u((function(e,n){n&&n.preventDefault(),t.isCompleted=e}),t.isCompleted,{title:"Unmark as completed",faIconHTML:'<i class="fa-solid fa-circle-check"></i>',className:"task-completed"},{title:"Mark as completed",faIconHTML:'<i class="fa-regular fa-circle"></i>'});return e.classList.add("task-completed-btn"),e}(t),s.titleElement=T("limited-text task-title"),s.dateElement=T("task-date"),s.importantButton=function(t){const e=u((function(e,n){n&&n.preventDefault(),t.isImportant=e}),t.isImportant,{title:"Unmark as important",faIconHTML:'<i class="fa-solid fa-star"></i>',className:"task-important"},{title:"Mark as important",faIconHTML:'<i class="fa-regular fa-star"></i>'});return e.classList.add("task-important-btn"),e}(t),s.detailsElement=l,s.load=I.bind(s),s.load(t),a.append(s.checkButton,s.titleElement,s.dateElement,s.importantButton),!1===n&&(s.editButton=function(t,e,n){function s(){e.style.display=""}function i(s){n.title=s.title,n.details=s.details,n.dueDate=s.dueDate,n.isImportant=s.isImportant,t.load(n),e.style.display=""}const a=m("Edit",'<i class="fa-solid fa-pen-to-square"></i>',(function(a){a&&a.preventDefault();const l=v(i,s,"Update",n);e.style.display="none",t.append(l)}));return a.className="edit-ibtn",a}(s,i,t),s.deleteButton=function(t,e,n){const s=m("Delete",'<i class="fa-solid fa-xmark"></i>',(function(s){s&&s.preventDefault(),n&&n.call(t,e,s),t.remove()}));return s.className="delete-ibtn",s}(s,t,e),a.append(s.editButton,s.deleteButton)),i.append(a,l),s.append(i),s}(s,h(S,t,e),n)));t.addElements(...s)}function S(t,e,n,s){s&&s.preventDefault(),e.removeTask(n),t.removeElements(this.parentElement)}function D(t,e,n){const s=this,i=v((function(i){const l=a(i.title,i.details,i.dueDate,i.isImportant);e.addTask(l),y(t,e,n),s.style.display=""}),(function(){s.style.display=""}));t.insertBefore(i,s),s.style.display="none"}function j(t,e,n,s){const i=document.createElement("form"),a=function(){const t=document.createElement("div");return t.labelElement=document.createElement("label"),t.inputElement=document.createElement("input"),t.labelElement.innerText="Project Title:",t.labelElement.setAttribute("for","project-form-title"),t.inputElement.id="project-form-title",t.inputElement.type="text",t.inputElement.required=!0,t.className="form-input",t.append(t.labelElement,t.inputElement),t}(),l=function(t,e,n){const s=document.createElement("div"),i=document.createElement("button"),a=document.createElement("button");return i.innerText=n||"Add",a.innerText="Cancel",a.type="button",i.classList.add("form-add-btn","hover"),a.classList.add("form-cancel-btn","hover"),i.addEventListener("click",t),a.addEventListener("click",e),s.className="form-controls",s.append(i,a),s}(x.bind(i,t),M.bind(i,e),n||"Add");return i.titleInput=a.inputElement,i.autocomplete="off",i.className="add-form project-form",i.load=C.bind(i),s&&i.load(s),i.append(a,l),i}function C(t){this.titleInput.value=t.title}function x(t,e){if(this.checkValidity()){e&&(e.preventDefault(),e.stopPropagation());const n={title:this.titleInput.value};t&&t.call(this,n,e),this.remove()}}function M(t,e){e&&(e.preventDefault(),e.stopPropagation()),t&&t.call(this,e),this.remove()}function w(t){this.projectItem.title=t.title,this.projectItem.titleElement.innerText=t.title}function B(t=[],e){e?this.parentElement.classList.remove("edit-mode"):this.parentElement.classList.add("edit-mode"),t.forEach((t=>{t.style.display=e?"":"none"}))}function A(t,e,n,s){t.addElements(function(t,e,n,s){const i=document.createElement("div"),a=document.createElement("div");return i.projectItem=f(t.title,'<i class="fa-solid fa-table-list"></i>',e.bind(i,t)),i.className="project-item",a.className="project-item-controls",i.projectItem.classList.add("project-item-btn"),i.projectItem.titleElement.classList.add("limited-text"),i.load=w.bind(i),i.load(t),a.append(function(t,e,n,s,i){function a(){n()}function l(s,a){a&&(a.preventDefault(),a.stopPropagation()),e.title=s.title,t.load(e),n(),i&&i.call(t,e,a)}const o=m("Edit",'<i class="fa-solid fa-pen-to-square"></i>',(function(n){n&&(n.preventDefault(),n.stopPropagation());const i=j(l,a,"Update",e);s(),t.append(i)}));return o.classList.add("edit-ibtn"),o}(i,t,B.bind(i,[i.projectItem,a],!0),B.bind(i,[i.projectItem,a],!1),s),function(t,e,n){const s=m("Delete",'<i class="fa-solid fa-xmark"></i>',(function(s){s&&(s.preventDefault(),s.stopPropagation()),n&&n.call(t,e,s),t.remove()}));return s.classList.add("delete-ibtn"),s}(i,t,n)),i.append(i.projectItem,a),i}(n,P.bind(t,s),h(O,t,e,s),h(H,t,n,s)))}function H(t,e,n){t.isSelected(this.parentElement)&&P.call(t,n,e)}function O(t,e,n,s){t.isSelected(this.parentElement)&&(n.innerHTML=""),e.removeProject(s),t.removeElements(this.parentElement)}function J(t,e,n){const s=this,i=j((function(i){const a=o(i.title);e.addProject(a),A(t,e,a,n),s.style.display=""}),(function(){s.style.display=""}));t.insertBefore(i,s),s.style.display="none"}function P(t,e){this.relatedLists.forEach((t=>t.unselectAll())),t.innerHTML="",t.append(N(e,!1))}function q(t,e,n){t.relatedLists.forEach((t=>t.unselectAll())),n.innerHTML="",e.forEach((t=>{n.append(N({title:t.project.title,tasks:t.tasks},!0))}))}document.getElementById("theme-btn").addEventListener("click",(function(){document.documentElement.classList.toggle("dark"),document.documentElement.classList.contains("dark")?this.innerHTML='<i class="fa-solid fa-moon"></i>':this.innerHTML='<i class="fa-solid fa-sun"></i>'})),document.getElementById("sidebar-btn").addEventListener("click",(function(){document.getElementById("sidebar").classList.toggle("hide")})),r.fromJSON(JSON.parse(localStorage.getItem("projects"))),function(){let t=document.getElementById("content"),e=document.getElementById("sidebar"),n=function(t,e,n){const s=b("Home",[],{autoSelect:!0,selectedClass:"side-selected",itemClass:"side-item hover"});return s.classList.add("side-list"),s.addElements(function(t,e,n){const s=f("All Tasks",'<i class="fa-solid fa-list-check"></i>',(function(){const s=e.filter((t=>!1===t.isCompleted));q(t,s,n)}));return s.classList.add("view-btn"),s}(s,t,e),function(t,e,n){const s=f("Today",'<i class="fa-solid fa-calendar-day"></i>',(function(){const s=e.filter((t=>t.dueDate.toLocaleDateString()===(new Date).toLocaleDateString()));q(t,s,n)}));return s.classList.add("view-btn"),s}(s,t,e),function(t,e,n){const s=f("Next 7 Days",'<i class="fa-solid fa-calendar-week"></i>',(function(){const s=e.filter((t=>{const e=new Date;e.setHours(0,0,0,0);const n=new Date(e);return n.setDate(n.getDate()+7),n.getTime()>t.dueDate.getTime()&&t.dueDate.getTime()>=e.getTime()}));q(t,s,n)}));return s.classList.add("view-btn"),s}(s,t,e),function(t,e,n){const s=f("Important",'<i class="fa-solid fa-star"></i>',(function(){const s=e.filter((t=>!0===t.isImportant));q(t,s,n)}));return s.classList.add("view-btn"),s}(s,t,e)),s.relatedLists=n||[],s}(r,t),s=function(t,e,n){const s=b("Projects",[],{autoSelect:!0,selectedClass:"side-selected",itemClass:"side-item hover"});s.classList.add("side-list"),t.projects.forEach((n=>{A(s,t,n,e)}));const i=f("Add Project",'<i class="fa-solid fa-plus"></i>',h(J,s,t,e));return i.classList.add("show-form-btn","hover"),s.relatedLists=[],s.append(i),s}(r,t);n.relatedLists.push(s),s.relatedLists.push(n),e.append(n,s)}()})()})();