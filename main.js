(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function n(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var o=function(){function t(e,r,o){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"_toggleLikeButton",(function(){i._elementLikeButton.classList.toggle("element__like-button_active")})),n(this,"_removeCard",(function(){i._copyElement.remove()})),n(this,"_openImageInPopupTypePhotoPlace",(function(){i._openPopupTypePhotoPlace(i._cardData)})),this._cardData=e,this._link=e.link,this._name=e.title,this._selectorTemplate=r,this._openPopupTypePhotoPlace=o}var r,o;return r=t,(o=[{key:"_getTemplateCopy",value:function(){return this._elementTemplate=document.querySelector(this._selectorTemplate).content,this._elementPlace=this._elementTemplate.querySelector(".element").cloneNode(!0),this._elementPlace}},{key:"_setEventListeners",value:function(){this._elementLikeButton.addEventListener("click",this._toggleLikeButton),this._elementRemoveButton.addEventListener("click",this._removeCard),this._elementImage.addEventListener("click",this._openImageInPopupTypePhotoPlace)}},{key:"createCard",value:function(){return this._copyElement=this._getTemplateCopy(),this._elementImage=this._copyElement.querySelector(".element__img"),this._elementName=this._copyElement.querySelector(".element__name"),this._elementLikeButton=this._copyElement.querySelector(".element__like-button"),this._elementRemoveButton=this._copyElement.querySelector(".element__remove-button"),this._elementImage.alt=this._name,this._elementImage.src=this._link,this._elementName.textContent=this._name,this._setEventListeners(),this._copyElement}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var l=function(){function t(e,n){var r=e.inputSelector,o=e.submitButtonSelector,i=e.inactiveButtonClass,u=e.inputErrorClass,l=e.errorClass;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=r,this._submitButtonSelector=o,this._inactiveButtonClass=i,this._inputErrorClass=u,this._errorClass=l,this._form=n,this._buttonElement=n.querySelector(this._submitButtonSelector),this._inputList=n.querySelectorAll(this._inputSelector)}var e,n;return e=t,(n=[{key:"_showErrorInput",value:function(){this._errorElement.classList.add(this._errorClass),this._errorElement.textContent=this._input.validationMessage,this._input.classList.add(this._inputErrorClass)}},{key:"_hideErrorInput",value:function(){this._errorElement.classList.remove(this._errorClass),this._errorElement.textContent="",this._input.classList.remove(this._inputErrorClass)}},{key:"_checkInputValidity",value:function(){this._errorElement=this._form.querySelector("#".concat(this._input.id,"-error")),this._input.validity.valid?this._hideErrorInput():this._showErrorInput()}},{key:"_enableButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_hasValidInput",value:function(){return Array.from(this._inputList).every((function(t){return t.validity.valid}))}},{key:"_toggleButton",value:function(){this._hasValidInput()?this._enableButton():this._disableButton(this._buttonElement)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._input=e,t._checkInputValidity(),t._toggleButton()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetError",value:function(){var t=this;this._inputList.forEach((function(e){t._input=e,t._errorElement=t._form.querySelector("#".concat(t._input.id,"-error")),e.validity.valid||t._hideErrorInput()})),this._disableButton()}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function s(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(e)?e:String(e)}var f=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"_handleCloseButton",(function(){n.close()})),s(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),s(this,"_handleClickByOverlay",(function(t){t.target===t.currentTarget&&n.close()})),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close-button")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popupCloseButton.addEventListener("click",this._handleCloseButton),this._popup.addEventListener("click",this._handleClickByOverlay)}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},b.apply(this,arguments)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}function _(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===y(e)?e:String(e)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(n);if(r){var o=v(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return h(t)}(this,t)});function i(t){var e,n,r,u,l;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=h(n=o.call(this,t)),l=function(t){n._popupTypePhotoPlaceCaption.textContent=t.title,n._popupTypePhotoPlaceImage.alt=t.title,n._popupTypePhotoPlaceImage.src=t.link,b((e=h(n),v(i.prototype)),"open",e).call(e)},(u=_(u="open"))in r?Object.defineProperty(r,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[u]=l,n._popupTypePhotoPlaceImage=n._popup.querySelector(".popup__photo"),n._popupTypePhotoPlaceCaption=n._popup.querySelector(".popup__photo-caption"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(f);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var E=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this._initialCards=r,this.renderer=o}var e,n;return e=t,(n=[{key:"addCards",value:function(){var t=this;this._initialCards.forEach((function(e){t.addItem(t.renderer(e))}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var k=function(){function t(e){var n=e.profileNameSelector,r=e.profileDescriptionSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(n),this._profileDescription=document.querySelector(r)}var e,n;return e=t,(n=[{key:"setUserInfo",value:function(t){this._profileName.textContent=t.username,this._profileDescription.textContent=t.description}},{key:"getUserInfo",value:function(){return{username:this._profileName.textContent,description:this._profileDescription.textContent}}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._addSubmit=e,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n}return e=u,(n=[{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"_getInputValues",value:function(){var t=this;return this._values={},this._inputList.forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setEventListeners",value:function(){var t=this;O(T(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._addSubmit(t._getInputValues()),t.close()}))}},{key:"close",value:function(){O(T(u.prototype),"close",this).call(this),this._form.reset()}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f),I=document.forms["add-form"],q=document.forms["edit-form"],R=document.querySelector(".profile__add-button"),x=document.querySelector(".profile__edit-button"),D={inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var z=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"getInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization}}).then((function(t){return t.ok?t.json():Promise.reject}))}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then((function(t){return t.ok?t.json():Promise.reject}))}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"9137bb04-e1de-4ad8-8efa-6ed924c50a68","Content-Type":"application/json"}}),U=new l(D,q);U.enableValidation();var A=new l(D,I);A.enableValidation();var M=new k({profileNameSelector:".profile__name",profileDescriptionSelector:".profile__description"}),F=new d(".popup_type_photo-place"),G=new E({items:[{title:"Москва",link:"https://images.unsplash.com/photo-1558509336-44482918b852"},{title:"Ростов",link:"https://images.unsplash.com/photo-1568146386128-63e8c3d0eb8b"},{title:"Зеленоградск",link:"https://images.unsplash.com/photo-1638517078191-a0e77e95f764"},{title:"Казань",link:"https://images.unsplash.com/photo-1628066068625-015ea7bcc21a"},{title:"Республика Карелия",link:"https://images.unsplash.com/photo-1603200556030-687898aa68fa"},{title:"Республика Дагестан",link:"https://images.unsplash.com/photo-1624719961119-ca670af4a20b"}],renderer:function(t){return new o(t,"#element-template",F.open).createCard()}},".elements__list");G.addCards();var H=new B(".popup_type_edit-profile",(function(t){M.setUserInfo(t)})),J=new B(".popup_type_add-place",(function(t){G.addItem(G.renderer(t))}));F.setEventListeners(),H.setEventListeners(),J.setEventListeners(),x.addEventListener("click",(function(){H.setInputValues(M.getUserInfo()),U.resetError(),H.open()})),R.addEventListener("click",(function(){A.resetError(),J.open()})),Promise.all([z.getInfo(),z.getCards()]).then})();