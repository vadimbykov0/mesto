export default class Card {
    constructor(cardData, selectorTemplate, openPopupTypePhotoPlace, openPopupTypeDeleteCard, changeLikeState) {
        this._cardData = cardData;
        this._link = cardData.link;
        this._name = cardData.name;
        this._myId = cardData.myId;
        this._ownerId = cardData.owner._id;
        this._likes = cardData.likes,
        this._cardId = cardData._id;
        this._likesQuantity = cardData.likes.length,
        this._selectorTemplate = selectorTemplate;
        this._openPopupTypePhotoPlace = openPopupTypePhotoPlace;
        this._openPopupTypeDeleteCard = openPopupTypeDeleteCard;
        this._changeLikeState = changeLikeState;
        this._copyElement = this._getTemplateCopy();
        this._elementImage = this._copyElement.querySelector('.element__img');
        this._elementName = this._copyElement.querySelector('.element__name');
        this._elementLikeButton = this._copyElement.querySelector('.element__like-button');
        this._elementRemoveButton = this._copyElement.querySelector('.element__remove-button');
        this._counterLikes = this._copyElement.querySelector('.element__counter-likes');
    };

    _getTemplateCopy() {
        this._elementTemplate = document.querySelector(this._selectorTemplate).content;
        this._elementPlace = this._elementTemplate.querySelector('.element').cloneNode(true);
        return this._elementPlace;
    };

    _handleLikeButton = () => {
        this._changeLikeState(this._elementLikeButton, this._cardId);
    };

    _handleRemoveCard = () => {
        this._openPopupTypeDeleteCard({ card: this, cardId: this._cardId });
    };

    _openImageInPopupTypePhotoPlace = () => {
        this._openPopupTypePhotoPlace({
            title: this._name,
            link: this._link
        });
    };

    _setEventListeners() {
        this._elementLikeButton.addEventListener('click', this._handleLikeButton);
        this._elementRemoveButton.addEventListener('click', this._handleRemoveCard);
        this._elementImage.addEventListener('click', this._openImageInPopupTypePhotoPlace);
    };

    _setVisibilityForRemoveButton() {
        if (this._myId === this._ownerId) {
            this._elementRemoveButton.hidden = false
        } else {
            this._elementRemoveButton.hidden = true
        }
    };

    _inspectLikeOnCard() {
        this._likes.forEach(item => {
            if (item._id === this._myId) {
                this._elementLikeButton.classList.add('element__like-button_active')
                return
            }
        })
        this._counterLikes.textContent = this._likesQuantity;
    };

    toggleLikeButton(likes) {
        this._elementLikeButton.classList.toggle('element__like-button_active');
        this._counterLikes.textContent = likes.length;
    };

    removeCard() {
        this._copyElement.remove();
    };

    createCard() {
        this._elementImage.alt = this._name;
        this._elementImage.src = this._link;
        this._elementName.textContent = this._name;
        this._inspectLikeOnCard();
        this._setVisibilityForRemoveButton();
        this._setEventListeners();
        return this._copyElement;
    };
};