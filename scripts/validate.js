const validationObject = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};

const showError = (form, input, validationConfig, errorMessage) => {
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.classList.add(validationConfig.errorClass);
    errorElement.textContent = errorMessage;
    input.classList.add(validationConfig.inputErrorClass);
};

const hideError = (form, input, validationConfig) => {
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.classList.remove(validationConfig.errorClass);
    input.classList.remove(validationConfig.inputErrorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (form, input, validationConfig) => {
    if (!input.validity.valid) {
        showError(form, input, validationConfig, input.validationMessage);
    } else {
        hideError(form, input, validationConfig);
    }
};

function hasInvalidInput(formInputs) {
    return formInputs.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

function toggleButton(formInputs, buttonElement, validationConfig) {
    if (hasInvalidInput(formInputs)) {
        disableButton(buttonElement, validationConfig);
    } else {
        enableButton(buttonElement, validationConfig);
    }
};

function disableButton(formButton, validationConfig) {
    formButton.classList.add(validationConfig.inactiveButtonClass);
    formButton.disabled = true;
};

function enableButton(formButton, validationConfig) {
    formButton.classList.remove(validationConfig.inactiveButtonClass);
    formButton.disabled = false;
};

function resetInput(form, validationConfig) {
    const formInputs = Array.from(form.querySelectorAll(validationConfig.inputSelector));
    const formButton = form.querySelector(validationConfig.submitButtonSelector);
    formInputs.forEach(input => {
        hideError(form, input, validationConfig);
        toggleButton(formInputs, formButton, validationConfig);
    });
};

const setEventListeners = (formElement, validationConfig) => {
    const formInputs = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    formInputs.forEach((input) => {
        input.addEventListener('input', function() {
            checkInputValidity(formElement, input, validationConfig);
            toggleButton(formInputs, buttonElement, validationConfig);
        });
    });
};

const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach((form) => {
        setEventListeners(form, validationConfig);
    });
};

enableValidation(validationObject);