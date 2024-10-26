(()=>{"use strict";var e={baseURL:"https://mesto.nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"f02dce0c-5413-4cf5-9043-8b2c0b360395","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject(e.statusText)},n=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then((function(e){return t(e)}))},r=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))},o=document.querySelector("#card-template").content,c=function(e,t,n,r,c){var u=o.querySelector(".places__item").cloneNode(!0),i=u.querySelector(".card__image");u.querySelector(".card__title").innerText=e.name,i.setAttribute("src",e.link),i.setAttribute("alt",e.name);var a=u.querySelector(".card__delete-button");return c===e.owner._id?a.addEventListener("click",(function(n){t(n,e._id)})):a.remove(),i.addEventListener("click",(function(t){r(e)})),u.querySelector(".card__like-button").addEventListener("click",n(e,c,u)),u},u=function(n,r){var o,c=n.target.closest(".card");(o=r,fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))).then((function(e){c.remove()})).catch((function(e){return console.log(e)}))},i=function(e,t,o){var c=o.querySelector(".card__like-counter"),u=o.querySelector(".card__like-button"),i=e.likes.some((function(e){return e.id===t.id}));(i?r:n)(e._id).then((function(t){u.classList.toggle("card__like-button_is-active",!i),c.textContent=t.likes.length,e.likes=t.likes})).catch((function(e){return console.log(e)}))},a=function(e){e.classList.toggle("popup_is-opened")},l=function(e,t,n){a(e),document.addEventListener("keydown",t),e.addEventListener("click",n)},s=function(e){a(e),document.removeEventListener("keydown",d),e.removeEventListener("click",p)},d=function(e){"Escape"===e.key&&s(document.querySelector(".popup_is-opened"))},p=function(e){e.currentTarget===e.target&&s(e.target.closest(".popup_is-opened"))},f=function(e,t,n){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(n.inputErrorClass),t.querySelector(n.submitButtonSelector).removeAttribute("disabled"),t.querySelector(n.submitButtonSelector).classList.remove(n.inactiveButtonClass),r.textContent=""},m=function(e,t){e.querySelectorAll(t.inputSelector).forEach((function(n){f(n,e,t)}))},y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button-disabled",inputErrorClass:"popup__input-incorrect",errorClass:"popup__input_error-message"};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var h=document.querySelector(".popup_type_edit"),v=document.querySelector(".popup_type_new-card"),S=document.querySelector(".profile__edit-button"),b=document.querySelector(".profile__add-button"),q=document.querySelectorAll(".popup__close"),g=document.querySelector(".places__list"),E=document.querySelector('form[name="edit-profile"]'),k=document.querySelector(".profile__title"),C=document.querySelector(".profile__description"),L=document.querySelector(".profile__image"),A=document.querySelector('input[name="name"]'),x=document.querySelector('input[name="description"]'),T=document.querySelector('form[name="new-place"]'),w=document.querySelector('input[name="place-name"]'),U=document.querySelector('input[name="link"]'),B=document.querySelectorAll(".popup"),j=document.querySelector(".popup_type_image"),O=j.querySelector(".popup__caption"),z=j.querySelector(".popup__image"),D="";!function(e){e.forEach((function(e){e.classList.add("popup_is-animated")}))}(B);var M=function(e){O.textContent=e.name,z.src=e.link,z.alt=e.name,l(j,d,p)};Promise.all([(authorizationConfig,fetch("".concat(e.baseUrl,"/users/me"),{method:"GET",headers:e.headers}).then((function(e){return t(e)}))),(authorizationConfig,fetch("".concat(e.baseUrl,"/cards"),{method:"GET",headers:e.headers}).then((function(e){return t(e)})))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,i=[],a=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],a=r[1];D=o._id,k.textContent=o.name,C.textContent=o.about,L.style="background-image: url('".concat(o.data,"')"),a.map((function(e){g.append(c(e,u,i,M,D))}))})).catch((function(e){return console.log(e)})),S.addEventListener("click",(function(){l(h,d,p),P(),m(h,y)})),b.addEventListener("click",(function(){l(v,d,p),m(v,y)})),q.forEach((function(e){e.addEventListener("click",(function(){s(e.closest(".popup_is-opened"))}))}));var P=function(){A.value=k.textContent,x.value=C.textContent};E.addEventListener("submit",(function(e){!function(e){e.preventDefault(),k.textContent=A.value,C.textContent=x.value,s(e.target.closest(".popup_is-opened"))}(e)})),T.addEventListener("submit",(function(n){var r,o;n.preventDefault(),(r=authorizationConfig,o=w.value,U.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r,link:o})}).then((function(e){return t(e)}))).then((function(e){g.prepend(c(e,u,i,M,D)),s(v),T.reset()})).catch((function(e){return console.log(e)}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("input",(function(t){var n=t.target.form,r=t.target.closest(e.inputSelector);n.querySelector(".".concat(r.id,"-error")),r.validity.patternMismatch?r.setCustomValidity(r.dataset.errorMessage):r.setCustomValidity(""),n.checkValidity()?f(r,n,e):function(e,t,n){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n.inputErrorClass),t.querySelector(n.submitButtonSelector).setAttribute("disabled",!0),t.querySelector(n.submitButtonSelector).classList.add(n.inactiveButtonClass),r.textContent=e.validationMessage}(r,n,e)}))}))}(y)})();