// Импорты
import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import {
    initialCards,
    placeAddButton,
    profileEditButton,
    popupFormEditProfile,
    popupFormAddPlace,
    templateSelector,
    popupTypeEditProfileSelector,
    popupTypeAddPlaceSelector,
    popupTypePhotoPlaceSelector,
    elementsListSelector,
    elementUserInfo,
    validationObject
} from "../utils/constants.js";

// Валидация форм
const validateEditProfile = new FormValidator(validationObject, popupFormEditProfile);
validateEditProfile.enableValidation();

const validateAddCard = new FormValidator(validationObject, popupFormAddPlace);
validateAddCard.enableValidation();

const userInfo = new UserInfo(elementUserInfo);
const popupWithImage = new PopupWithImage(popupTypePhotoPlaceSelector);

const section = new Section({
    items: initialCards,
    renderer: (element) => {
        const card = new Card(element, templateSelector, popupWithImage.open);
        const cardElement = card.createCard();
        return cardElement;
    },
}, elementsListSelector);
section.addCards();

const popupTypeProfile = new PopupWithForm(popupTypeEditProfileSelector, (data) => {
    userInfo.setUserInfo(data);
});

const popupTypeAddPlace = new PopupWithForm(popupTypeAddPlaceSelector, (data) => {
    section.addItem(section.renderer(data));
});

function handleEditProfileInfo() {
    popupTypeProfile.setInputValues(userInfo.getUserInfo());
    validateEditProfile.resetError();
    popupTypeProfile.open();
};

function handleAddPlace() {
    validateAddCard.resetError();
    popupTypeAddPlace.open();
};

popupWithImage.setEventListeners();
popupTypeProfile.setEventListeners();
popupTypeAddPlace.setEventListeners();

// Добавить слушатели событий
profileEditButton.addEventListener('click', handleEditProfileInfo);
placeAddButton.addEventListener('click', handleAddPlace);