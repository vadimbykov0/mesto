const validationObject = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};

const disableButton = (formButton, inactiveButtonClass) => {
    formButton.classList.remove(inactiveButtonClass);
    formButton.removeAttribute('disabled', 'disabled');
};

const enableButton = (formButton, inactiveButtonClass) => {
    formButton.classList.add(inactiveButtonClass);
    formButton.setAttribute('disabled', 'disabled');
};

const hasInvalidInput = (formInputs) => {
    return formInputs.some(item => !item.validity.valid);
};

const toggleButton = (formInputs, formButton, inactiveButtonClass) => {
    if (hasInvalidInput(formInputs)) {
        enableButton(formButton, inactiveButtonClass);
    } else {
        disableButton(formButton, inactiveButtonClass);
    };
};

const showError = (form, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

const hideError = (form, inputElement, inputErrorClass, errorClass) => {
    const errorElement = form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (form, inputElement, inputErrorClass, errorClass) => {
    if (!inputElement.validity.valid) {
        showError(form, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
        hideError(form, inputElement, inputErrorClass, errorClass);
    };
};

const setEventListeners = (form, formInputs, formButton, inactiveButtonClass, inputErrorClass, errorClass) => {
    toggleButton(formInputs, formButton);
    formInputs.forEach((inputElement) => {
        inputElement.addEventListener('input', function() {
            checkInputValidity(form, inputElement, inputErrorClass, errorClass);
            toggleButton(formInputs, formButton, inactiveButtonClass);
        });
    });
};

const enableValidation = (params) => {
    const forms = Array.from(document.querySelectorAll(params.formSelector));
    forms.forEach((form) => {
        const formInputs = Array.from(form.querySelectorAll(params.inputSelector));
        const formButton = form.querySelector(params.submitButtonSelector);
        setEventListeners(form, formInputs, formButton, params.inactiveButtonClass, params.inputErrorClass, params.errorClass);
    });
};

enableValidation(validationObject);








