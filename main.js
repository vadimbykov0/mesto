(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function n(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var o=function(){function t(e,r,o,i,u){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"_handleLikeButton",(function(){a._changeLikeState(a._elementLikeButton,a._cardId)})),n(this,"_handleRemoveCard",(function(){a._openPopupTypeDeleteCard({card:a,cardId:a._cardId})})),n(this,"_openImageInPopupTypePhotoPlace",(function(){a._openPopupTypePhotoPlace({title:a._name,link:a._link})})),this._cardData=e,this._link=e.link,this._name=e.name,this._myId=e.myId,this._ownerId=e.owner._id,this._likes=e.likes,this._cardId=e._id,this._likesQuantity=e.likes.length,this._selectorTemplate=r,this._openPopupTypePhotoPlace=o,this._openPopupTypeDeleteCard=i,this._changeLikeState=u,this._copyElement=this._getTemplateCopy(),this._elementImage=this._copyElement.querySelector(".element__img"),this._elementName=this._copyElement.querySelector(".element__name"),this._elementLikeButton=this._copyElement.querySelector(".element__like-button"),this._elementRemoveButton=this._copyElement.querySelector(".element__remove-button"),this._counterLikes=this._copyElement.querySelector(".element__counter-likes")}var r,o;return r=t,(o=[{key:"_getTemplateCopy",value:function(){return this._elementTemplate=document.querySelector(this._selectorTemplate).content,this._elementPlace=this._elementTemplate.querySelector(".element").cloneNode(!0),this._elementPlace}},{key:"_setEventListeners",value:function(){this._elementLikeButton.addEventListener("click",this._handleLikeButton),this._elementRemoveButton.addEventListener("click",this._handleRemoveCard),this._elementImage.addEventListener("click",this._openImageInPopupTypePhotoPlace)}},{key:"_setVisibilityForRemoveButton",value:function(){this._myId===this._ownerId?this._elementRemoveButton.hidden=!1:this._elementRemoveButton.hidden=!0}},{key:"_inspectLikeOnCard",value:function(){var t=this;this._likes.forEach((function(e){e._id!==t._myId||t._elementLikeButton.classList.add("element__like-button_active")})),this._counterLikes.textContent=this._likesQuantity}},{key:"toggleLikeButton",value:function(t){this._elementLikeButton.classList.toggle("element__like-button_active"),this._counterLikes.textContent=t.length}},{key:"removeCard",value:function(){this._copyElement.remove()}},{key:"createCard",value:function(){return this._elementImage.alt=this._name,this._elementImage.src=this._link,this._elementName.textContent=this._name,this._inspectLikeOnCard(),this._setVisibilityForRemoveButton(),this._setEventListeners(),this._copyElement}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var a=function(){function t(e,n){var r=e.inputSelector,o=e.submitButtonSelector,i=e.inactiveButtonClass,u=e.inputErrorClass,a=e.errorClass;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=r,this._submitButtonSelector=o,this._inactiveButtonClass=i,this._inputErrorClass=u,this._errorClass=a,this._form=n,this._buttonElement=n.querySelector(this._submitButtonSelector),this._inputList=n.querySelectorAll(this._inputSelector)}var e,n;return e=t,(n=[{key:"_showErrorInput",value:function(){this._errorElement.classList.add(this._errorClass),this._errorElement.textContent=this._input.validationMessage,this._input.classList.add(this._inputErrorClass)}},{key:"_hideErrorInput",value:function(){this._errorElement.classList.remove(this._errorClass),this._errorElement.textContent="",this._input.classList.remove(this._inputErrorClass)}},{key:"_checkInputValidity",value:function(){this._errorElement=this._form.querySelector("#".concat(this._input.id,"-error")),this._input.validity.valid?this._hideErrorInput():this._showErrorInput()}},{key:"_enableButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_hasValidInput",value:function(){return Array.from(this._inputList).every((function(t){return t.validity.valid}))}},{key:"_toggleButton",value:function(){this._hasValidInput()?this._enableButton():this._disableButton(this._buttonElement)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._input=e,t._checkInputValidity(),t._toggleButton()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetError",value:function(){var t=this;this._inputList.forEach((function(e){t._input=e,t._errorElement=t._form.querySelector("#".concat(t._input.id,"-error")),e.validity.valid||t._hideErrorInput()})),this._disableButton()}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,f(r.key),r)}}function s(t,e,n){return(e=f(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}var p=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"_handleCloseButton",(function(){n.close()})),s(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),s(this,"_handleClickByOverlay",(function(t){t.target===t.currentTarget&&n.close()})),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close-button"),this._form=this._popup.querySelector(".popup__form")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popupCloseButton.addEventListener("click",this._handleCloseButton),this._popup.addEventListener("click",this._handleClickByOverlay)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function v(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===y(e)?e:String(e)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(n);if(r){var o=d(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return m(t)}(this,t)});function i(t){var e,n,r,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=m(n=o.call(this,t)),a=function(t){n._popupTypePhotoPlaceCaption.textContent=t.title,n._popupTypePhotoPlaceImage.alt=t.title,n._popupTypePhotoPlaceImage.src=t.link,_((e=m(n),d(i.prototype)),"open",e).call(e)},(u=v(u="open"))in r?Object.defineProperty(r,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[u]=a,n._popupTypePhotoPlaceImage=n._popup.querySelector(".popup__photo"),n._popupTypePhotoPlaceCaption=n._popup.querySelector(".popup__photo-caption"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(p);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var k=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this._renderer=e}var e,n;return e=t,(n=[{key:"addCards",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.append(t)}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var P=function(){function t(e){var n=e.profileNameSelector,r=e.profileDescriptionSelector,o=e.profileAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(n),this._profileDescription=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"setUserInfo",value:function(t){var e=t.username,n=t.description,r=t.avatar;this._profileName.textContent=e,this._profileDescription.textContent=n,this._profileAvatar.src=r}},{key:"getUserInfo",value:function(){return{username:this._profileName.textContent,description:this._profileDescription.textContent}}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._addSubmit=e,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n._popupButton=n._form.querySelector(".popup__save-button"),n._initialButtonText=n._popupButton.textContent,n}return e=u,(n=[{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"_getInputValues",value:function(){var t=this;return this._values={},this._inputList.forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setEventListeners",value:function(){var t=this;C(B(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._popupButton.textContent="".concat(t._popupButton.textContent,"..."),t._addSubmit(t._getInputValues())}))}},{key:"setInitialButtonText",value:function(){this._popupButton.textContent=this._initialButtonText}},{key:"close",value:function(){C(B(u.prototype),"close",this).call(this),this._form.reset()}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}var R=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"getInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization}}).then((function(t){return t.ok?t.json():Promise.reject}))}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then((function(t){return t.ok?t.json():Promise.reject}))}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.username,about:t.description})}).then((function(t){return t.ok?t.json():Promise.reject}))}},{key:"addNewCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.title,link:t.link})}).then((function(t){return t.ok?t.json():Promise.reject}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then((function(t){return t.ok?t.json():Promise.reject}))}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then((function(t){return t.ok?t.json():Promise.reject}))}},{key:"removeLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then((function(t){return t.ok?t.json():Promise.reject}))}},{key:"changeAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then((function(t){return t.ok?t.json():Promise.reject}))}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,U(r.key),r)}}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function V(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function z(){return z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=N(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},z.apply(this,arguments)}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}function U(t){var e=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===q(e)?e:String(e)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=N(r);if(o){var n=N(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return V(t)}(this,t)});function u(t,e){var n,r,o,a,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),o=V(r=i.call(this,t)),c=function(t){var e=t.card,o=t.cardId;z((n=V(r),N(u.prototype)),"open",n).call(n),r._element=e,r._cardId=o},(a=U(a="open"))in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,r._addSubmit=e,r._popupButton=r._form.querySelector(".popup__save-button"),r._form=r._popup.querySelector(".popup__form"),r._initialButtonText=r._popupButton.textContent,r}return e=u,(n=[{key:"setInitialButtonText",value:function(){this._popupButton.textContent=this._initialButtonText}},{key:"setEventListeners",value:function(){var t=this;z(N(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._popupButton.textContent="".concat(t._popupButton.textContent,"..."),t._addSubmit({card:t._element,cardId:t._cardId})}))}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p),F=document.forms["add-form"],H=document.forms["edit-form"],M=document.forms["change-form"],Q=document.querySelector(".profile__add-button"),$=document.querySelector(".profile__edit-button"),G=document.querySelector(".profile__avatar-change"),K={inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function W(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return X(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Y=new R({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"9137bb04-e1de-4ad8-8efa-6ed924c50a68","Content-Type":"application/json"}}),Z=new a(K,H);Z.enableValidation();var tt=new a(K,F);tt.enableValidation();var et=new a(K,M);et.enableValidation();var nt=new P({profileNameSelector:".profile__name",profileDescriptionSelector:".profile__description",profileAvatarSelector:".profile__avatar"}),rt=new b(".popup_type_photo-place"),ot=new J(".popup_type_delete-card",(function(t){var e=t.card,n=t.cardId;Y.deleteCard(n).then((function(){e.removeCard(),ot.close()})).catch((function(t){return console.error("Ошибка при удалении карточки ".concat(t))})).finally((function(){return ot.setInitialButtonText()}))}));function it(t){var e=new o(t,"#element-template",rt.open,ot.open,(function(t,n){t.classList.contains("element__like-button_active")?Y.removeLike(n).then((function(t){e.toggleLikeButton(t.likes)})).catch((function(t){return console.error("Ошибка при снятии лайка ".concat(t))})):Y.addLike(n).then((function(t){e.toggleLikeButton(t.likes)})).catch((function(t){return console.error("Ошибка при добавлении лайка карточке ".concat(t))}))}));return e.createCard()}var ut=new k((function(t){ut.addItem(it(t))}),".elements__list"),at=new I(".popup_type_edit-profile",(function(t){Y.setUserInfo(t).then((function(t){nt.setUserInfo({username:t.name,description:t.about,avatar}),at.close()})).catch((function(t){return console.error("Ошибка при редактировании профиля ".concat(t))})).finally((function(){return at.setInitialButtonText()}))})),ct=new I(".popup_type_add-place",(function(t){Promise.all([Y.getInfo(),Y.addNewCard(t)]).then((function(t){var e=W(t,2),n=e[0],r=e[1];r.myId=n._id,ut.addItem(it(r)),ct.close()})).catch((function(t){return console.error("Ошибка при создании новой карточки места ".concat(t))})).finally((function(){return ct.setInitialButtonText()}))})),lt=new I(".popup_type_change-avatar",(function(t){Y.changeAvatar(t).then((function(t){nt.setUserInfo({username:t.name,description:t.about,avatar}),lt.close()})).catch((function(t){return console.error("Ошибка при изменении аватара профиля ".concat(t))})).finally((function(){return lt.setInitialButtonText()}))}));rt.setEventListeners(),at.setEventListeners(),ct.setEventListeners(),lt.setEventListeners(),ot.setEventListeners(),$.addEventListener("click",(function(){at.setInputValues(nt.getUserInfo()),Z.resetError(),at.open()})),Q.addEventListener("click",(function(){tt.resetError(),ct.open()})),G.addEventListener("click",(function(){et.resetError(),lt.open()})),Promise.all([Y.getInfo(),Y.getCards()]).then((function(t){var e=W(t,2),n=e[0],r=e[1];r.forEach((function(t){return t.myId=n._id})),nt.setUserInfo({username:n.name,description:n.about,avatar:n.avatar}),ut.addCards(r)})).catch((function(t){return console.error("Ошибка в рендере начальных данных ".concat(t))}))})();