import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, addSubmit) {
        super(popupSelector);
        this._addSubmit = addSubmit;
        this._popupButton = this._form.querySelector('.popup__save-button');
        this._form = this._popup.querySelector('.popup__form');
        this._initialButtonText = this._popupButton.textContent;

    };

    setInitialButtonText() {
        this._popupButton.textContent = this._initialButtonText;
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._popupButton.textContent = `${this._popupButton.textContent}...`;
            this._addSubmit({ card: this._element, cardId: this._cardId });
        });
    };

    open = ({ card, cardId }) => {
        super.open();
        this._element = card;
        this._cardId = cardId;
    };
};