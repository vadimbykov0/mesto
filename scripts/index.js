// Делаем выборку DOM элементов

const popupElement = document.querySelector('.popup');
const popupFormElement = popupElement.querySelector('.popup__form');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

// Находим поля формы в DOM
const popupName = document.querySelector('.popup__input_type_name');
const popupDescription = document.querySelector('.popup__input_type_description');

// Функция открытия модального окна
const openPopup = function() {
    popupName.value = profileName.textContent;
    popupDescription.value = profileDescription.textContent;

    popupElement.classList.add('popup_is-opened');
};

// Функция закрытия модального окна
const closePopup = function() {
    popupElement.classList.remove('popup_is-opened');
};

const closePopupByClickOnOverlay = function(event) {
    console.log(event.target, event.currentTarget);
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopup();
};

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function formSubmitHandler (evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
												// Так мы можем определить свою логику отправки.
												// О том, как это делать, расскажем позже.

    profileName.textContent = popupName.value;
    profileDescription.textContent = popupDescription.value;
    closePopup();
};

// Регистрируем обработчики событий по клику

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
popupFormElement.addEventListener('submit', formSubmitHandler);