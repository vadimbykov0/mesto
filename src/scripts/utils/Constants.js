// Константы начальных карточек
const initialCards = [
    {
        title: 'Москва',
        link: 'https://images.unsplash.com/photo-1558509336-44482918b852',
    },
    {
        title: 'Ростов',
        link: 'https://images.unsplash.com/photo-1568146386128-63e8c3d0eb8b',
    },
    {
        title: 'Зеленоградск',
        link: 'https://images.unsplash.com/photo-1638517078191-a0e77e95f764',
    },
    {
        title: 'Казань',
        link: 'https://images.unsplash.com/photo-1628066068625-015ea7bcc21a',
    },
    {
        title: 'Республика Карелия',
        link: 'https://images.unsplash.com/photo-1603200556030-687898aa68fa',
    },
    {
        title: 'Республика Дагестан',
        link: 'https://images.unsplash.com/photo-1624719961119-ca670af4a20b',
    }
];

const templateSelector = '#element-template';
const elementsListSelector = '.elements__list';

const elementUserInfo = {
    profileNameSelector: '.profile__name',
    profileDescriptionSelector: '.profile__description'
};

// Константы нахождения форм на странице
const popupFormAddPlace = document.forms["add-form"];
const popupFormEditProfile = document.forms["edit-form"];

// Кнопки редактирования профиля и добавления места
const placeAddButton = document.querySelector('.profile__add-button');
const profileEditButton = document.querySelector('.profile__edit-button');

// Константы нахождения попапов на странице
const popupTypeEditProfileSelector = '.popup_type_edit-profile';
const popupTypeAddPlaceSelector = '.popup_type_add-place';
const popupTypePhotoPlaceSelector = '.popup_type_photo-place';

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
    initialCards,
    popupFormAddPlace,
    popupFormEditProfile,
    placeAddButton,
    profileEditButton,
    templateSelector,
    elementsListSelector,
    popupTypeEditProfileSelector,
    popupTypeAddPlaceSelector,
    popupTypePhotoPlaceSelector,
    elementUserInfo,
    validationObject
};