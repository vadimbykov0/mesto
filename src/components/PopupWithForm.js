import Popup from "./Popup.js";

export default class PopWithForm extends Popup {
    constructor(popupSelector, addSubmit) {
        super(popupSelector);
        this._addSubmit = addSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
    };

    setInputValues(dataElement) {
        this._inputList.forEach(input => {
            input.value = dataElement[input.name];
        });
    };

    _getInputValues() {
        this._values = {};
        this._inputList.forEach(input => {
            this._values[input.name] = input.value;
        });
        return this._values;
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._addSubmit(this._getInputValues());
            this.close();
        });
    };

    close() {
        super.close();
        this._form.reset();
    };
};