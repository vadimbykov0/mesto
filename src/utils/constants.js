const templateSelector = '#element-template';
const elementsListSelector = '.elements__list';

const elementUserInfo = {
    profileNameSelector: '.profile__name',
    profileDescriptionSelector: '.profile__description',
    profileAvatarSelector: '.profile__avatar'
};

// Константы нахождения форм на странице
const popupFormAddPlace = document.forms["add-form"];
const popupFormEditProfile = document.forms["edit-form"];
const popupFormChangeAvatar = document.forms["change-form"];

// Кнопки
const placeAddButton = document.querySelector('.profile__add-button');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileChangeButton = document.querySelector('.profile__avatar-change');

// Константы нахождения попапов на странице
const popupTypeEditProfileSelector = '.popup_type_edit-profile';
const popupTypeAddPlaceSelector = '.popup_type_add-place';
const popupTypePhotoPlaceSelector = '.popup_type_photo-place';
const popupTypeChangeAvatarSelector = '.popup_type_change-avatar';
const popupTypeDeleteCard = '.popup_type_delete-card';

// Константы для валидации форм
const validationObject = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};

// Экспорты
export {
    templateSelector,
    elementsListSelector,
    elementUserInfo,
    popupFormAddPlace,
    popupFormEditProfile,
    popupFormChangeAvatar,
    placeAddButton,
    profileEditButton,
    profileChangeButton,
    popupTypeEditProfileSelector,
    popupTypeAddPlaceSelector,
    popupTypePhotoPlaceSelector,
    popupTypeChangeAvatarSelector,
    popupTypeDeleteCard,
    validationObject
};