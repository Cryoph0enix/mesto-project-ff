(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-25",headers:{authorization:"33b46605-c021-40fa-b699-d18214a531c7","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject(e.statusText)},n=document.querySelector("#card-template").content,r=function(e,t){return e.likes.some((function(e){return e._id===t}))},o=function(e,t,o,c,u){var i=n.querySelector(".places__item").cloneNode(!0),a=i.querySelector(".card__image");i.querySelector(".card__title").innerText=e.name,a.setAttribute("src",e.link),a.setAttribute("alt",e.name);var l=i.querySelector(".card__delete-button");i.dataset.id=e._id,u===e.owner._id?l.addEventListener("click",(function(n){t(n,e._id)})):l.remove(),a.addEventListener("click",(function(){c(e)}));var s=i.querySelector(".card__like-button"),d=i.querySelector(".card__like-counter");return d.textContent=e.likes.length,r(e,u)?s.classList.add("card__like-button_is-active"):s.classList.remove("card__like-button_is-active"),s.addEventListener("click",(function(){o(e,u,i,s,d)})),i},c=function(n,r){var o,c=n.target.closest(".card");(o=r,fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))).then((function(e){c.remove()})).catch((function(e){return console.log(e)}))},u=function(n,o,c,u,i){var a;r(n,o)?(a=n._id,fetch("".concat(e.baseUrl,"/cards/likes/").concat(a),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))).then((function(e){u.classList.remove("card__like-button_is-active"),i.textContent=e.likes.length,n.likes=e.likes})).catch((function(e){return console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then((function(e){return t(e)}))}(n._id).then((function(e){u.classList.add("card__like-button_is-active"),i.textContent=e.likes.length,n.likes=e.likes})).catch((function(e){return console.log(e)}))},i=function(e){e.classList.toggle("popup_is-opened")},a=function(e,t,n){i(e),document.addEventListener("keydown",t),e.addEventListener("click",n)},l=function(e){i(e),document.removeEventListener("keydown",s),e.removeEventListener("click",d)},s=function(e){"Escape"===e.key&&l(document.querySelector(".popup_is-opened"))},d=function(e){e.currentTarget===e.target&&l(e.target.closest(".popup_is-opened"))},p=function(e,t,n,r){e.classList.remove(n.inputErrorClass),r.textContent=""},f=function(e,t,n){!function(e){return e.map((function(e){return!e.validity.valid}))}(t)?(e.querySelector(n.submitButtonSelector).removeAttribute("disabled"),e.querySelector(n.submitButtonSelector).classList.remove(n.inactiveButtonClass)):(e.querySelector(n.submitButtonSelector).setAttribute("disabled",!0),e.querySelector(n.submitButtonSelector).classList.add(n.inactiveButtonClass))},m=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector));n.forEach((function(r){p(r,0,t),f(e,n,t)}))},_={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button-disabled",inputErrorClass:"popup__input-incorrect",errorClass:"popup__input_error-message"},y=function(e,t){t.textContent=e?"Сохранение...":"Сохранить"};function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var v=document.querySelector(".popup_type_edit"),S=document.querySelector(".popup_type_new-card"),b=document.querySelector(".popup_type_edit-profile-image"),q=document.querySelector(".profile__edit-button"),g=document.querySelector(".profile__add-button"),k=document.querySelectorAll(".popup__close"),E=document.querySelector(".places__list"),L=document.querySelector('form[name="edit-profile"]'),C=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),x=document.querySelector('form[name="edit-profile-image"]'),T=document.querySelector(".profile__image"),U=document.querySelector('input[name="profile-img-link"]'),w=document.querySelector(".popup__input_type_name"),B=document.querySelector(".popup__input_type_description"),O=document.querySelector('form[name="new-place"]'),j=document.querySelector('input[name="place-name"]'),P=document.querySelector('input[name="link"]'),D=document.querySelectorAll(".popup"),M=document.querySelector(".popup_type_image"),N=M.querySelector(".popup__caption"),I=M.querySelector(".popup__image"),J="";!function(e){e.forEach((function(e){e.classList.add("popup_is-animated")}))}(D);var G=function(e){N.textContent=e.name,I.src=e.link,I.alt=e.name,a(M,s,d)};Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{method:"GET",headers:e.headers}).then((function(e){return t(e)})),fetch("".concat(e.baseUrl,"/cards"),{method:"GET",headers:e.headers}).then((function(e){return t(e)}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,i=[],a=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[0],a=r[1];J=i._id,C.textContent=i.name,A.textContent=i.about,T.style="background-image: url('".concat(i.avatar,"')"),console.log("3OK"),a.forEach((function(e){E.append(o(e,c,u,G,J))}))})).catch((function(e){return console.log(e)})),q.addEventListener("click",(function(){m(v,_),a(v,s,d),H()})),g.addEventListener("click",(function(){m(S,_),a(S,s,d)})),k.forEach((function(e){e.addEventListener("click",(function(){l(e.closest(".popup_is-opened"))}))})),T.addEventListener("click",(function(){m(b,_),a(b,s,d)}));var H=function(){w.value=C.textContent,B.value=A.textContent};L.addEventListener("submit",(function(n){!function(n){var r,o;n.preventDefault(),y(!0,L.querySelector(".popup__button")),(r=w.value,o=B.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then((function(e){return t(e)}))).then((function(e){C.textContent=e.name,A.textContent=e.about,l(n.target.closest(".popup_is-opened"))})).catch((function(e){return console.log(e)})).finally((function(){return y(!1,L.querySelector(".popup__button"))}))}(n)}));x.addEventListener("submit",(function(n){!function(n){var r;n.preventDefault(),y(!0,L.querySelector(".popup__button")),(r=U.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then((function(e){return t(e)}))).then((function(e){T.style="background-image: url('".concat(e.avatar,"')"),l(n.target.closest(".popup_is-opened")),x.reset()})).catch((function(e){return console.log(e)})).finally((function(){return y(!1,L.querySelector(".popup__button"))}))}(n)})),O.addEventListener("submit",(function(n){var r,i;n.preventDefault(),y(!0,L.querySelector(".popup__button")),(r=j.value,i=P.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r,link:i})}).then((function(e){return t(e)}))).then((function(e){E.prepend(o(e,c,u,G,J)),l(S),O.reset()})).catch((function(e){return console.log(e)})).finally((function(){return y(!1,L.querySelector(".popup__button"))}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector));f(e,n,t),n.forEach((function(r){r.addEventListener("input",(function(){var o=e.querySelector(".".concat(r.id,"-error"));r.validity.patternMismatch?r.setCustomValidity(r.dataset.errorMessage):r.setCustomValidity(""),r.validity.valid?p(r,0,t,o):function(e,t,n,r){e.classList.add(n.inputErrorClass),r.textContent=e.validationMessage}(r,0,t,o),f(e,n,t)}))}))}(t,e))}))}(_)})();