const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
};

const setEventListeners = (form, formInputs, formButton, inactiveButtonClass, inputErrorClass, errorClass) => {
    toogleButton(formButton, formInputs);
    formInputs.forEach((input) => {
        input.addEventListener('input', function() {
            checkInputValidity(form, input, inputErrorClass, errorClass);
            toogleButton(formInputs, formButton, inactiveButtonClass);
        });
    });
};

const checkInputValidity = (form, input, inputErrorClass, errorClass) => {
    if (!input.validity.valid) {
        showInputError(form, input, input.validationMessage, inputErrorClass, errorClass);
    } else {
        hideInputError(form, input, inputErrorClass, errorClass);
    };
};

const showInputError = (form, input, errorMessage, inputErrorClass, errorClass) => {
    const error = form.querySelector(`.${input.name}-error`);
    input.classList.add(inputErrorClass);
    error.textContent = errorMessage;
    error.classList.add(errorClass);
};

const hideInputError = (form, input, inputErrorClass, errorClass) => {
    const error = form.querySelector(`.${input.name}-error`);
    input.classList.remove(inputErrorClass);
    error.textContent = '';
    error.classList.remove(errorClass);
};

const toogleButton = (formInputs, formButton, inactiveButtonClass) => {
    if (hasInvalidInput(formInputs)) {
        enableButton(formButton, inactiveButtonClass);
    } else {
        disableButton(formButton, inactiveButtonClass);
    };
};

const hasInvalidInput = (formInputs) => {
    return formInputs.some((input) => {
        return !input.validity.valid;
    });
};

const disableButton = (formButton, inactiveButtonClass) => {
    formButton.classList.remove(inactiveButtonClass);
    formButton.removeAttribute('disabled', 'disabled');
};

const enableButton = (formButton, inactiveButtonClass) => {
    formButton.classList.add(inactiveButtonClass);
    formButton.setAttribute('disabled', 'disabled');
};

const enableValidation = (config) => {
    const forms = Array.from(document.querySelectorAll(config.formSelector));
    forms.forEach((form) => {
        const formButton = form.querySelector(form.submitButtonSelector);
        const formInputs = Array.from(form.querySelectorAll(config.inputSelector));
        setEventListeners(form, formInputs, formButton, config.inactiveButtonClass, config.inputErrorClass, config.errorClass);
    });
};

enableValidation(validationConfig);