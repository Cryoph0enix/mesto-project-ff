(()=>{"use strict";var e={baseURL:"https://mesto.nomoreparties.co/v1/wff-cohort-25",headers:{authorization:"33b46605-c021-40fa-b699-d18214a531c7","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject(e.statusText)},n=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then((function(e){return t(e)}))},r=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))},o=document.querySelector("#card-template").content,c=function(e,t,n,r,c){var u=o.querySelector(".places__item").cloneNode(!0),i=u.querySelector(".card__image");u.querySelector(".card__title").innerText=e.name,i.setAttribute("src",e.link),i.setAttribute("alt",e.name);var a=u.querySelector(".card__delete-button");return c===e.owner._id?a.addEventListener("click",(function(n){t(n,e._id)})):a.remove(),i.addEventListener("click",(function(t){r(e)})),u.querySelector(".card__like-button").addEventListener("click",n(e,c,u)),u},u=function(n,r){var o,c=n.target.closest(".card");(o=r,fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))).then((function(e){c.remove()})).catch((function(e){return console.log(e)}))},i=function(e,t,o){var c=o.querySelector(".card__like-counter"),u=o.querySelector(".card__like-button"),i=e.likes.some((function(e){return e.id===t.id}));(i?r:n)(e._id).then((function(t){u.classList.toggle("card__like-button_is-active",!i),c.textContent=t.likes.length,e.likes=t.likes})).catch((function(e){return console.log(e)}))},a=function(e){e.classList.toggle("popup_is-opened")},l=function(e,t,n){a(e),document.addEventListener("keydown",t),e.addEventListener("click",n)},s=function(e){a(e),document.removeEventListener("keydown",d),e.removeEventListener("click",p)},d=function(e){"Escape"===e.key&&s(document.querySelector(".popup_is-opened"))},p=function(e){e.currentTarget===e.target&&s(e.target.closest(".popup_is-opened"))},f=function(e,t,n){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(n.inputErrorClass),t.querySelector(n.submitButtonSelector).removeAttribute("disabled"),t.querySelector(n.submitButtonSelector).classList.remove(n.inactiveButtonClass),r.textContent=""},m=function(e,t){e.querySelectorAll(t.inputSelector).forEach((function(n){f(n,e,t)}))},y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button-disabled",inputErrorClass:"popup__input-incorrect",errorClass:"popup__input_error-message"},_=function(e,t){t.textContent=e?"Сохранение...":"Сохранить"};function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var S=document.querySelector(".popup_type_edit"),v=document.querySelector(".popup_type_new-card"),b=document.querySelector(".popup_type_edit_profile_image"),q=document.querySelector(".profile__edit-button"),g=document.querySelector(".profile__add-button"),E=document.querySelectorAll(".popup__close"),k=document.querySelector(".places__list"),L=document.querySelector('form[name="edit-profile"]'),C=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),x=document.querySelector('form[name="edit-profile-image"]'),T=document.querySelector(".profile__image"),U=document.querySelector('input[name="profile-img-link"]'),w=document.querySelector('input[name="name"]'),B=document.querySelector('input[name="description"]'),j=document.querySelector('form[name="new-place"]'),O=document.querySelector('input[name="place-name"]'),P=document.querySelector('input[name="link"]'),D=document.querySelectorAll(".popup"),M=document.querySelector(".popup_type_image"),N=M.querySelector(".popup__caption"),I=M.querySelector(".popup__image"),J="";!function(e){e.forEach((function(e){e.classList.add("popup_is-animated")}))}(D);var V=function(e){N.textContent=e.name,I.src=e.link,I.alt=e.name,l(M,d,p)};Promise.all([function(){return fetch("".concat(e.baseUrl,"/users/me"),{method:"GET",headers:e.headers}).then((function(e){return t(e)}))},function(){return fetch("".concat(e.baseUrl,"/cards"),{method:"GET",headers:e.headers}).then((function(e){return t(e)}))}]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,i=[],a=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],a=r[1];J=o._id,C.textContent=o.name,A.textContent=o.about,T.style="background-image: url('".concat(o.data,"')"),a.forEach((function(e){k.append(c(e,u,i,V,J))}))})).catch((function(e){return console.log(e)})),q.addEventListener("click",(function(){l(S,d,p),G(),m(S,y)})),g.addEventListener("click",(function(){l(v,d,p),m(v,y)})),E.forEach((function(e){e.addEventListener("click",(function(){s(e.closest(".popup_is-opened"))}))})),T.addEventListener("click",(function(){l(b,d,p),m(b,y)}));var G=function(){w.value=C.textContent,B.value=A.textContent};L.addEventListener("submit",(function(n){!function(n){var r,o;n.preventDefault(),_(!0,L.querySelector(".popup__button")),(r=w.value,o=B.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then((function(e){return t(e)}))).then((function(e){C.textContent=e.name,A.textContent=e.about,s(n.target.closest(".popup_is-opened"))})).catch((function(e){return console.log(e)})).finally((function(){return _(!1,L.querySelector(".popup__button"))}))}(n)}));x.addEventListener("submit",(function(n){!function(n){var r;n.preventDefault(),_(!0,L.querySelector(".popup__button")),(r=U.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({data:r})}).then((function(e){return t(e)}))).then((function(e){T.style="background-image: url('".concat(e.data,"')"),s(n.target.closest(".popup_is-opened")),x.reset()})).catch((function(e){return console.log(e)})).finally((function(){return _(!1,L.querySelector(".popup__button"))}))}(n)})),j.addEventListener("submit",(function(n){var r,o;n.preventDefault(),_(!0,L.querySelector(".popup__button")),(r=O.value,o=P.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r,link:o})}).then((function(e){return t(e)}))).then((function(e){k.prepend(c(e,u,i,V,J)),s(v),j.reset()})).catch((function(e){return console.log(e)})).finally((function(){return _(!1,L.querySelector(".popup__button"))}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("input",(function(t){var n=t.target.form,r=t.target.closest(e.inputSelector);n.querySelector(".".concat(r.id,"-error")),r.validity.patternMismatch?r.setCustomValidity(r.dataset.errorMessage):r.setCustomValidity(""),n.checkValidity()?f(r,n,e):function(e,t,n){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n.inputErrorClass),t.querySelector(n.submitButtonSelector).setAttribute("disabled",!0),t.querySelector(n.submitButtonSelector).classList.add(n.inactiveButtonClass),r.textContent=e.validationMessage}(r,n,e)}))}))}(y)})();