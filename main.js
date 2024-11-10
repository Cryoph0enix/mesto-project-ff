(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-25",headers:{authorization:"33b46605-c021-40fa-b699-d18214a531c7","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject(e.statusText)},n=document.querySelector("#card-template").content,r=function(e,t){return e.likes.some((function(e){return e._id===t}))},o=function(e,t,o,c,u){var i=n.querySelector(".places__item").cloneNode(!0),a=i.querySelector(".card__image");i.querySelector(".card__title").innerText=e.name,a.setAttribute("src",e.link),a.setAttribute("alt",e.name);var l=i.querySelector(".card__delete-button");i.dataset.id=e._id,u===e.owner._id?l.addEventListener("click",(function(n){t(n,e._id)})):l.remove(),a.addEventListener("click",(function(){c(e)}));var s=i.querySelector(".card__like-button"),d=i.querySelector(".card__like-counter");return d.textContent=e.likes.length,r(e,u)?s.classList.add("card__like-button_is-active"):s.classList.remove("card__like-button_is-active"),s.addEventListener("click",(function(){o(e,u,i,s,d)})),i},c=function(n,r){var o,c=n.target.closest(".card");(o=r,fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))).then((function(e){c.remove()})).catch((function(e){return console.log(e)}))},u=function(n,o,c,u,i){var a;r(n,o)?(a=n._id,fetch("".concat(e.baseUrl,"/cards/likes/").concat(a),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))).then((function(e){u.classList.remove("card__like-button_is-active"),i.textContent=e.likes.length,n.likes=e.likes})).catch((function(e){return console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then((function(e){return t(e)}))}(n._id).then((function(e){u.classList.add("card__like-button_is-active"),i.textContent=e.likes.length,n.likes=e.likes})).catch((function(e){return console.log(e)}))},i=function(e){e.classList.toggle("popup_is-opened")},a=function(e,t,n){i(e),document.addEventListener("keydown",t),e.addEventListener("click",n)},l=function(e){i(e),document.removeEventListener("keydown",s),e.removeEventListener("click",d)},s=function(e){"Escape"===e.key&&l(document.querySelector(".popup_is-opened"))},d=function(e){e.currentTarget===e.target&&l(e.target.closest(".popup_is-opened"))},p=function(e,t,n){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(n.inputErrorClass),r.textContent=""},f=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector));n.forEach((function(r){p(r,e,t),function(e,t,n){!function(e){return e.map((function(e){return!e.validity.valid}))}(t)?(e.querySelector(n.submitButtonSelector).removeAttribute("disabled"),e.querySelector(n.submitButtonSelector).classList.remove(n.inactiveButtonClass)):(e.querySelector(n.submitButtonSelector).setAttribute("disabled",!0),e.querySelector(n.submitButtonSelector).classList.add(n.inactiveButtonClass))}(e,n,t)}))},m={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button-disabled",inputErrorClass:"popup__input-incorrect",errorClass:"popup__input_error-message"},_=function(e,t){t.textContent=e?"Сохранение...":"Сохранить"};function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var h=document.querySelector(".popup_type_edit"),v=document.querySelector(".popup_type_new-card"),S=document.querySelector(".popup_type_edit-profile-image"),b=document.querySelector(".profile__edit-button"),q=document.querySelector(".profile__add-button"),g=document.querySelectorAll(".popup__close"),k=document.querySelector(".places__list"),E=document.querySelector('form[name="edit-profile"]'),L=document.querySelector(".profile__title"),C=document.querySelector(".profile__description"),A=document.querySelector('form[name="edit-profile-image"]'),x=document.querySelector(".profile__image"),T=document.querySelector('input[name="profile-img-link"]'),U=document.querySelector(".popup__input_type_name"),w=document.querySelector(".popup__input_type_description"),B=document.querySelector('form[name="new-place"]'),O=document.querySelector('input[name="place-name"]'),j=document.querySelector('input[name="link"]'),P=document.querySelectorAll(".popup"),D=document.querySelector(".popup_type_image"),M=D.querySelector(".popup__caption"),N=D.querySelector(".popup__image"),I="";!function(e){e.forEach((function(e){e.classList.add("popup_is-animated")}))}(P);var J=function(e){M.textContent=e.name,N.src=e.link,N.alt=e.name,a(D,s,d)};Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{method:"GET",headers:e.headers}).then((function(e){return t(e)})),fetch("".concat(e.baseUrl,"/cards"),{method:"GET",headers:e.headers}).then((function(e){return t(e)}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,i=[],a=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[0],a=r[1];I=i._id,L.textContent=i.name,C.textContent=i.about,x.style="background-image: url('".concat(i.avatar,"')"),console.log("OK"),a.forEach((function(e){k.append(o(e,c,u,J,I))}))})).catch((function(e){return console.log(e)})),b.addEventListener("click",(function(){f(h,m),a(h,s,d),G()})),q.addEventListener("click",(function(){f(v,m),a(v,s,d)})),g.forEach((function(e){e.addEventListener("click",(function(){l(e.closest(".popup_is-opened"))}))})),x.addEventListener("click",(function(){f(S,m),a(S,s,d)}));var G=function(){U.value=L.textContent,w.value=C.textContent};E.addEventListener("submit",(function(n){!function(n){var r,o;n.preventDefault(),_(!0,E.querySelector(".popup__button")),(r=U.value,o=w.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then((function(e){return t(e)}))).then((function(e){L.textContent=e.name,C.textContent=e.about,l(n.target.closest(".popup_is-opened"))})).catch((function(e){return console.log(e)})).finally((function(){return _(!1,E.querySelector(".popup__button"))}))}(n)}));A.addEventListener("submit",(function(n){!function(n){var r;n.preventDefault(),_(!0,E.querySelector(".popup__button")),(r=T.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then((function(e){return t(e)}))).then((function(e){x.style="background-image: url('".concat(e.avatar,"')"),l(n.target.closest(".popup_is-opened")),A.reset()})).catch((function(e){return console.log(e)})).finally((function(){return _(!1,E.querySelector(".popup__button"))}))}(n)})),B.addEventListener("submit",(function(n){var r,i;n.preventDefault(),_(!0,E.querySelector(".popup__button")),(r=O.value,i=j.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r,link:i})}).then((function(e){return t(e)}))).then((function(e){k.prepend(o(e,c,u,J,I)),l(v),B.reset()})).catch((function(e){return console.log(e)})).finally((function(){return _(!1,E.querySelector(".popup__button"))}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?p(t,e,n):function(e,t,n){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n.inputErrorClass),r.textContent=e.validationMessage}(t,e,n)}(t,e))}))}(m)})();