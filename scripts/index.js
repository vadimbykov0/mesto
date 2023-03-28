const popupElement = document.querySelector('.popup');

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
const popupCloseButtonElement = document.querySelectorAll('.popup__close-button');

// Здесь вставить карточки мест
const insertNewElement = document.querySelector('.elements__list');

// Массив карточек «из коробки»
const initialCards = [
    {
        name: 'Москва',
        link: 'https://images.unsplash.com/photo-1558509336-44482918b852'
    },
    {
        name: 'Ростов',
        link: 'https://images.unsplash.com/photo-1568146386128-63e8c3d0eb8b'
    },
    {
        name: 'Зеленоградск',
        link: 'https://images.unsplash.com/photo-1638517078191-a0e77e95f764'
    },
    {
        name: 'Казань',
        link: 'https://images.unsplash.com/photo-1628066068625-015ea7bcc21a'
    },
    {
        name: 'Республика Карелия',
        link: 'https://images.unsplash.com/photo-1603200556030-687898aa68fa'
    },
    {
        name: 'Республика Дагестан',
        link: 'https://images.unsplash.com/photo-1624719961119-ca670af4a20b'
    }
];

// Функция открытия модального окна
const openPopup = function(popupElement) {
    popupElement.classList.add('popup_is-opened');
};

// Функция закрытия модального окна
const closePopup = function(popupElement) {
    popupElement.classList.remove('popup_is-opened');
};

for (let i = 0; i < popupCloseButtonElement.length; i++) {
    popupCloseButtonElement[i].addEventListener('click', function (event) {
        closePopup(event.target.closest('.popup'));
    });
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

    closePopup(evt.target.closest('.popup'));
};

function formAddSubmitHandler(evt) {
    evt.preventDefault();

    item = {
        name: editPlaceName.value,
        link: editPlaceImageSrc.value
    };

    insertNewElement.prepend(createCard(item));
    closePopup(evt.target.closest('.popup'));
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