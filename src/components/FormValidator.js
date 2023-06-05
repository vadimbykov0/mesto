export default class FormValidator {
    constructor({ inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }, form) {
        this._inputSelector = inputSelector;
        this._submitButtonSelector = submitButtonSelector;
        this._inactiveButtonClass = inactiveButtonClass;
        this._inputErrorClass = inputErrorClass;
        this._errorClass = errorClass;
        this._form = form;
        this._buttonElement = form.querySelector(this._submitButtonSelector);
        this._inputList = form.querySelectorAll(this._inputSelector);
    };
    
    _showErrorInput() {
        this._errorElement.classList.add(this._errorClass);
        this._errorElement.textContent = this._input.validationMessage;
        this._input.classList.add(this._inputErrorClass);
    };
    
    _hideErrorInput() {
        this._errorElement.classList.remove(this._errorClass);
        this._errorElement.textContent = '';
        this._input.classList.remove(this._inputErrorClass);
    };
    
    _checkInputValidity() {
        this._errorElement = this._form.querySelector(`#${this._input.id}-error`);
        if (!this._input.validity.valid) {
            this._showErrorInput();
        } else {
            this._hideErrorInput();
        };
    };
    
    _enableButton() {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.disabled = false;
    };
    
    _disableButton() {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true;
    };
    
    _hasValidInput() {
        return Array.from(this._inputList).every(input => {
            return input.validity.valid;
        });
    };
    
    _toggleButton() {
        if (this._hasValidInput()) {
            this._enableButton();
        } else {
            this._disableButton(this._buttonElement);
        }
    };
    
    _setEventListeners() {
        this._inputList.forEach(input => {
            input.addEventListener('input', () => {
                this._input = input;
                this._checkInputValidity();
                this._toggleButton();
            });
        });
    };
    
    enableValidation() {
        this._setEventListeners();
    };
    
    resetError() {
        this._inputList.forEach(input => {
            this._input = input;
            this._errorElement = this._form.querySelector(`#${this._input.id}-error`);
            if (!input.validity.valid) {
                this._hideErrorInput();
            };
        });
        this._disableButton();
    };
};