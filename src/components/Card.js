export default class Card {
    constructor(cardData, selectorTemplate, openPopupTypePhotoPlace) {
        this._cardData = cardData;
        this._link = cardData.link;
        this._name = cardData.title;
        this._selectorTemplate = selectorTemplate;
        this._openPopupTypePhotoPlace = openPopupTypePhotoPlace;
    };

    _getTemplateCopy() {
        this._elementTemplate = document.querySelector(this._selectorTemplate).content;
        this._elementPlace = this._elementTemplate.querySelector('.element').cloneNode(true);
        return this._elementPlace;
    };

    _toggleLikeButton = () => {
        this._elementLikeButton.classList.toggle('element__like-button_active');
    };

    _removeCard = () => {
        this._copyElement.remove();
    };

    _openImageInPopupTypePhotoPlace = () => {
        this._openPopupTypePhotoPlace(this._cardData);
    };

    _setEventListeners() {
        this._elementLikeButton.addEventListener('click', this._toggleLikeButton);
        this._elementRemoveButton.addEventListener('click', this._removeCard);
        this._elementImage.addEventListener('click', this._openImageInPopupTypePhotoPlace);
    };

    createCard() {
        this._copyElement = this._getTemplateCopy();
        this._elementImage = this._copyElement.querySelector('.element__img');
        this._elementName = this._copyElement.querySelector('.element__name');
        this._elementLikeButton = this._copyElement.querySelector('.element__like-button');
        this._elementRemoveButton = this._copyElement.querySelector('.element__remove-button');
        this._elementImage.alt = this._name;
        this._elementImage.src = this._link;
        this._elementName.textContent = this._name;
        this._setEventListeners();
        return this._copyElement;
    };
};