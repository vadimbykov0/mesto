// Импорты
import initialCards from "./InitialCards.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

// Константы для модального окна редактирования профиля
const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
const popupFormEditProfile = document.forms["edit-form"];
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profileEditButton = document.querySelector('.profile__edit-button');
const editProfileName = popupFormEditProfile.querySelector('.popup__input_type_name');
const editProfileDescription = popupFormEditProfile.querySelector('.popup__input_type_description');

// Константы для модального окна добавления места
const popupTypeAddPlace = document.querySelector('.popup_type_add-place');
const popupFormAddPlace = document.forms["add-form"];
const placeAddButton = document.querySelector('.profile__add-button');
const editPlaceName = popupFormAddPlace.querySelector('.popup__input_type_title');
const editPlaceImageSrc = popupFormAddPlace.querySelector('.popup__input_type_image-link');

// Константы для модального окна просмотра фотографии карточки
const popupTypePhotoPlace = document.querySelector('.popup_type_photo-place');
const popupTypePhotoPlaceImage = document.querySelector('.popup__photo');
const popupTypePhotoPlaceCaption = document.querySelector('.popup__photo-caption'); 

// Вставить карточки
const elementsList = document.querySelector('.elements__list');

const templateSelector = '#element-template';

// Константы для валидации форм
const validationObject = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
};

// Валидация форм
const validateEditProfile = new FormValidator(validationObject, popupFormEditProfile);
validateEditProfile.enableValidation();

const validateAddCard = new FormValidator(validationObject, popupFormAddPlace);
validateAddCard.enableValidation();

// Функция открытия модального окна
const openPopup = function(popupElement) {
    popupElement.classList.add('popup_is-opened');
    document.addEventListener('keydown', handlePopupCloseEsc);
};

// Функция закрытия модального окна
const closePopup = function(popupElement) {
    popupElement.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handlePopupCloseEsc);
};

// Функция закрытия модального окна при нажатии Esc
function handlePopupCloseEsc(evt) {
    if (evt.key === 'Escape') {
        const popupCloseEsc = document.querySelector('.popup_is-opened');
        closePopup(popupCloseEsc);
    };
};

// Универсальное закрытие модального окна по крестику и оверлею
const popups = document.querySelectorAll('.popup');

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_is-opened')) {
            closePopup(popup);
        }
        if (evt.target.classList.contains('popup__close-button')) {
            closePopup(popup);
        };
    });
});

// Функция открытия модального окна просмотра увеличенного изображения
function openPopupTypePhotoPlace(cardElement) {
    popupTypePhotoPlaceImage.src = cardElement.link;
    popupTypePhotoPlaceImage.alt = cardElement.name;
    popupTypePhotoPlaceCaption.textContent = cardElement.name;
    openPopup(popupTypePhotoPlace);
};

// Функция добавления карточки
function addCard(container, card) {
    container.prepend(card);
};

function createNewCard(element) {
    const card = new Card(element, templateSelector, openPopupTypePhotoPlace);
    const cardElement = card.createCard();
    return cardElement;
};

initialCards.forEach(element => {
    addCard(elementsList, createNewCard(element));
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = editProfileName.value;
    profileDescription.textContent = editProfileDescription.value;
    closePopup(popupTypeEditProfile);
};

function handleAddFormSubmit(evt) {
    evt.preventDefault();
    const item = {
        name: editPlaceName.value,
        link: editPlaceImageSrc.value,
    };
    addCard(elementsList, createNewCard(item));
    closePopup(popupTypeAddPlace);
};

function handleEditProfileInfo() {
    editProfileName.value = profileName.textContent;
    editProfileDescription.value = profileDescription.textContent;
    openPopup(popupTypeEditProfile);
    validateEditProfile.resetError();
};

function handleAddPlace() {
    popupFormAddPlace.reset();
    openPopup(popupTypeAddPlace);
    validateAddCard.resetError();
};

// Добавить слушатели событий
profileEditButton.addEventListener('click', handleEditProfileInfo);
placeAddButton.addEventListener('click', handleAddPlace);
popupFormEditProfile.addEventListener('submit', handleProfileFormSubmit);
popupFormAddPlace.addEventListener('submit', handleAddFormSubmit);