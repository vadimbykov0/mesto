// Модальное окно редактирования профиля
const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
const popupFormEditProfile = document.forms["edit-form"];
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profileEditButton = document.querySelector('.profile__edit-button');
const editProfileName = popupFormEditProfile.querySelector('.popup__input_type_name');
const editProfileDescription = popupFormEditProfile.querySelector('.popup__input_type_description');

// Модальное окно добавления места
const popupTypeAddPlace = document.querySelector('.popup_type_add-place');
const popupFormAddPlace = document.forms["add-form"];
const placeAddButton = document.querySelector('.profile__add-button');
const editPlaceName = popupFormAddPlace.querySelector('.popup__input_type_title');
const editPlaceImageSrc = popupFormAddPlace.querySelector('.popup__input_type_image-link');
const saveButtonPopupAddPlace = popupFormAddPlace.querySelector('.popup__save-button');

// Модальное окно просмотра фотографии карточки
const popupTypePhotoPlace = document.querySelector('.popup_type_photo-place');
const popupTypePhotoPlaceImage = document.querySelector('.popup__photo');
const popupTypePhotoPlaceCaption = document.querySelector('.popup__photo-caption');

// Здесь вставить карточки мест
const elementsList = document.querySelector('.elements__list');

// Функция открытия модального окна
const openPopup = function(popupElement) {
    popupElement.classList.add('popup_is-opened');
    document.addEventListener('keydown', handlePopupCloseEsc);
};

// Функция закрытия модального окна
const closePopup = function(popupElement) {
    popupElement.classList.remove('popup_is-opened');
    document.addEventListener('keydown', handlePopupCloseEsc);
};

const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
        if (evt.target.classList.contains('popup__close')) {
            closePopup(popup);
        };
    });
});

// Функция закрытия модального окна при нажатии Esc
function handlePopupCloseEsc(event) {
    if (event.key === 'Escape') {
        const popupCloseEsc = document.querySelector('.popup_is-opened');
        closePopup(popupCloseEsc);
    };
};

function createCard(item) {
    const elementTemplate = document.querySelector('.element-template').content;
    const elementPlace = elementTemplate.querySelector('.element').cloneNode(true);
    const elementImage = elementPlace.querySelector('.element__img');
    const elementName = elementPlace.querySelector('.element__name');

    elementImage.alt = item.name;
    elementImage.src = item.link;
    elementName.textContent = item.name;

    elementImage.addEventListener('click', () => {
        openPopup(popupTypePhotoPlace);
    
        openPopupTypePhotoPlace();
    });

    function openPopupTypePhotoPlace() {
        popupTypePhotoPlaceImage.src = elementImage.src;
        popupTypePhotoPlaceImage.alt = elementImage.alt;
        popupTypePhotoPlaceCaption.textContent = elementImage.alt;
    }

    const elementLikeButton = elementPlace.querySelector('.element__like-button');

    elementLikeButton.addEventListener('click', () => {
        toggleLike(elementLikeButton);
    });

    const elementRemoveButton = elementPlace.querySelector('.element__remove-button');

    elementRemoveButton.addEventListener('click', () => {
        removeElement(elementRemoveButton);
    });

    return (elementPlace);
};

initialCards.forEach((item) => {
    elementsList.append(createCard(item));
});

// Функция поставить/удалить лайк карточке
function toggleLike(elementLikeButton) {
    elementLikeButton.classList.toggle('element__like-button_active');
};

// Функция удалить карточку через значок мусорки
function removeElement(elementRemoveButton) {
    elementRemoveButton.closest('.element').remove();
};

// Обработчик «отправки» формы
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
        link: editPlaceImageSrc.value
    };
    elementsList.prepend(createCard(item));
    closePopup(popupTypeAddPlace);
    evt.target.reset();
};

// Регистрируем обработчики событий по клику
profileEditButton.addEventListener('click', () => {
    editProfileName.value = profileName.textContent;
    editProfileDescription.value = profileDescription.textContent;
    openPopup(popupTypeEditProfile);
});

placeAddButton.addEventListener('click', () => {
    openPopup(popupTypeAddPlace);
});

popupFormEditProfile.addEventListener('submit', handleProfileFormSubmit);
popupFormAddPlace.addEventListener('submit', handleAddFormSubmit);