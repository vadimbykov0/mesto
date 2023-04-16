// Модальное окно редактирования профиля
const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
const popupFormEditProfile = popupTypeEditProfile.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profileEditButton = document.querySelector('.profile__edit-button');
const editProfileName = popupFormEditProfile.querySelector('.popup__input_type_name');
const editProfileDescription = popupFormEditProfile.querySelector('.popup__input_type_description');

// Модальное окно добавления места
const popupTypeAddPlace = document.querySelector('.popup_type_add-place');
const popupFormAddPlace = popupTypeAddPlace.querySelector('.popup__form');
const placeAddButton = document.querySelector('.profile__add-button');
const editPlaceName = popupFormAddPlace.querySelector('.popup__input_type_name');
const editPlaceImageSrc = popupFormAddPlace.querySelector('.popup__input_type_description');
const saveButtonPopupAddPlace = popupFormAddPlace.querySelector('.popup__save-button');

// Модальное окно просмотра фотографии карточки
const popupTypePhotoPlace = document.querySelector('.popup_type_photo-place');
const popupTypePhotoPlaceImage = document.querySelector('.popup__photo');
const popupTypePhotoPlaceCaption = document.querySelector('.popup__photo-caption');

// Универсальное закрытие модального окна по крестику
const popupCloseButtonElements = document.querySelectorAll('.popup__close-button'); 

// Здесь вставить карточки мест
const insertNewElement = document.querySelector('.elements__list');

// Функция открытия модального окна
const openPopup = function(popupElement) {
    popupElement.classList.add('popup_is-opened');
};

// Функция закрытия модального окна
const closePopup = function(popupElement) {
    popupElement.classList.remove('popup_is-opened');
};

for (let i = 0; i < popupCloseButtonElements.length; i++) {
    popupCloseButtonElements[i].addEventListener('click', function (event) {
        closePopup(event.target.closest('.popup'));
    });
};

function closePopupByClickOnOverlay() {
    const allPopupOverlays = Array.from(document.querySelectorAll('.popup'));
    allPopupOverlays.forEach(function(element) {
        element.addEventListener('click', function(event) {
            if (event.target.classList.contains('popup')) {
                closePopup(element);
            };
        });
    });
};


function handlePopupCloseEsc(event) {
    if (event.key === 'Escape') {
        const popupIsOpened = document.querySelector('.popup_is-opened');
        if (popupIsOpened) {
            popupIsOpened.classList.remove('popup_is-opened');
        };
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
    insertNewElement.append(createCard(item));
});

// Функция поставить или удалить лайк карточке
function toggleLike(elementLikeButton) {
    elementLikeButton.classList.toggle('element__like-button_active');
};

// Функция удалить карточку через значок мусорки
function removeElement(elementRemoveButton) {
    elementRemoveButton.closest('.element').remove();
};

// Обработчик «отправки» формы
function formEditSubmitHandler(evt) {
    profileName.textContent = editProfileName.value;
    profileDescription.textContent = editProfileDescription.value;

    evt.preventDefault();

    closePopup(popupTypeEditProfile);
};

function formAddSubmitHandler(evt) {
    evt.preventDefault();

    item = {
        name: editPlaceName.value,
        link: editPlaceImageSrc.value
    };

    insertNewElement.prepend(createCard(item));
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

popupFormEditProfile.addEventListener('submit', formEditSubmitHandler);
popupFormAddPlace.addEventListener('submit', formAddSubmitHandler);
document.addEventListener('keydown', handlePopupCloseEsc);

closePopupByClickOnOverlay();