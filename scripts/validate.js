function enableValidation(params) {
    const forms = Array.from(document.querySelectorAll(params.formSelector));
    forms.forEach((form) => {
        const formInputs = Array.from(form.querySelectorAll(params.inputSelector));
        const formButton = form.querySelector(params.submitButtonSelector);
        setEventListeners(form, formInputs, formButton, params.inactiveButtonClass, params.inputErrorClass, params.errorClass);
    });
};

function setEventListeners(form, formInputs, formButton, inactiveButtonClass, inputErrorClass, errorClass) {
    toggleButton(formInputs, formButton);
    formInputs.forEach((inputElement) => {
        inputElement.addEventListener('input', function() {
            checkInputValidity(form, inputElement, inputErrorClass, errorClass);
            toggleButton(formInputs, formButton, inactiveButtonClass);
        });
    });
};

function checkInputValidity(form, inputElement, inputErrorClass, errorClass) {
    if (!inputElement.validity.valid) {
        showInputError(form, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
        hideInputError(form, inputElement, inputErrorClass, errorClass);
    };
};

function hasInvalidInput(formInputs) {
    return formInputs.some(item => !item.validity.valid);
};

function toggleButton(formInputs, formButton, inactiveButtonClass) {
    if (hasInvalidInput(formInputs)) {
        enableButton(formButton, inactiveButtonClass);
    } else {
        disableButton(formButton, inactiveButtonClass);
    };
};

function showInputError(form, inputElement, errorMessage, inputErrorClass, errorClass) {
    const errorElement = form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

function hideInputError(form, inputElement, inputErrorClass, errorClass) {
    const errorElement = form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

function disableButton(formButton, inactiveButtonClass) {
    formButton.classList.remove(inactiveButtonClass);
    formButton.removeAttribute('disabled', 'disabled');
};

function enableButton(formButton, inactiveButtonClass) {
    formButton.classList.add(inactiveButtonClass);
    formButton.setAttribute('disabled', 'disabled');
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
});