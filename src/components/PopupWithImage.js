import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupTypePhotoPlaceImage = this._popup.querySelector('.popup__photo');
        this._popupTypePhotoPlaceCaption = this._popup.querySelector('.popup__photo-caption');
    };

    open = (cardElement) => {
        this._popupTypePhotoPlaceCaption.textContent = cardElement.title;
        this._popupTypePhotoPlaceImage.alt = cardElement.title;
        this._popupTypePhotoPlaceImage.src = cardElement.link;
        super.open();
    };
};