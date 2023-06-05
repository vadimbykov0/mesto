// Импорты
import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Api from '../components/Api.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import {
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
} from "../utils/constants.js";

// Api
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
        authorization: '9137bb04-e1de-4ad8-8efa-6ed924c50a68',
        'Content-Type': 'application/json'
    }
});

// Валидация форм
const validateEditProfile = new FormValidator(validationObject, popupFormEditProfile);
validateEditProfile.enableValidation();

const validateAddCard = new FormValidator(validationObject, popupFormAddPlace);
validateAddCard.enableValidation();

const validateChangeAvatar = new FormValidator(validationObject, popupFormChangeAvatar);
validateChangeAvatar.enableValidation();

const userInfo = new UserInfo(elementUserInfo);

const popupWithImage = new PopupWithImage(popupTypePhotoPlaceSelector);

// Модальное окно подтверждения удаления карточки
const popupDeleteCard = new PopupDeleteCard(popupTypeDeleteCard, ({ card, cardId }) => {
    api.deleteCard(cardId)
    .then(() => {
        card.removeCard();
        popupDeleteCard.close();
    })
    .catch((error) => console.error(`Ошибка при удалении карточки ${error}`))
    .finally(() => popupDeleteCard.setInitialButtonText())
});

function createNewCard(element) {
    const card = new Card(element, templateSelector, popupWithImage.open, popupDeleteCard.open, (likeItem, cardId) => {
        if (likeItem.classList.contains('element__like-button_active')) {
            api.removeLike(cardId)
            .then(res => {
                card.toggleLikeButton(res.likes);
            })
            .catch((error) => console.error(`Ошибка при снятии лайка ${error}`))
        } else {
            api.addLike(cardId)
            .then(res => {
                card.toggleLikeButton(res.likes);
            })
            .catch((error) => console.error(`Ошибка при добавлении лайка карточке ${error}`))
        }
    });
    const cardElement = card.createCard();
    return cardElement;
};

const section = new Section((element) => {
    section.addItem(createNewCard(element));
}, elementsListSelector);

const popupTypeProfile = new PopupWithForm(popupTypeEditProfileSelector, (data) => {
    api.setUserInfo(data)
    .then(res => {
        userInfo.setUserInfo({ username: res.name, description: res.about, avatar: res.avatar });
        popupTypeProfile.close();
    })
    .catch((error) => console.error(`Ошибка при редактировании профиля ${error}`))
    .finally(() => popupTypeProfile.setInitialButtonText())
});

const popupTypeAddPlace = new PopupWithForm(popupTypeAddPlaceSelector, (data) => {
    api.addNewCard(data)
    .then(dataCard => {
        dataCard.myId = userInfo.getId();
        section.addItem(createNewCard(dataCard));
        popupTypeAddPlace.close();
    })
    .catch((error) => console.error(`Ошибка при создании новой карточки места ${error}`))
    .finally(() => popupTypeAddPlace.setInitialButtonText())
});

const popupChangeAvatar = new PopupWithForm(popupTypeChangeAvatarSelector, (data) => {
    api.changeAvatar(data)
    .then(res => {
        userInfo.setUserInfo({ username: res.name, description: res.about, avatar: res.avatar });
        popupChangeAvatar.close();
    })
    .catch((error) => console.error(`Ошибка при изменении аватара профиля ${error}`))
    .finally(() => popupChangeAvatar.setInitialButtonText())
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

function handleChangeAvatar() {
    validateChangeAvatar.resetError();
    popupChangeAvatar.open();
};

popupWithImage.setEventListeners();
popupTypeProfile.setEventListeners();
popupTypeAddPlace.setEventListeners();
popupChangeAvatar.setEventListeners();
popupDeleteCard.setEventListeners();

// Добавить слушатели событий
profileEditButton.addEventListener('click', handleEditProfileInfo);
placeAddButton.addEventListener('click', handleAddPlace);
profileChangeButton.addEventListener('click', handleChangeAvatar);

// Загрузка данных с сервера
Promise.all([api.getInfo(), api.getCards()])
.then(([dataUser, dataCard]) => {
    dataCard.forEach(element => element.myId = dataUser._id);
    userInfo.setUserInfo({ username: dataUser.name, description: dataUser.about, avatar: dataUser.avatar });
    userInfo.setId(dataUser._id);
    section.addCards(dataCard.reverse());
})
.catch((error) => console.error(`Ошибка в рендере начальных данных ${error}`))