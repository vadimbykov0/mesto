import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupTypePhotoPlaceImage = this._popup.querySelector('.popup__photo');
        this._popupTypePhotoPlaceCaption = this._popup.querySelector('.popup__photo-caption');
    };

    open = (cardData) => {
        this._popupTypePhotoPlaceCaption.textContent = cardData.title;
        this._popupTypePhotoPlaceImage.alt = cardData.title;
        this._popupTypePhotoPlaceImage.src = cardData.link;
        super.open();
    };
};