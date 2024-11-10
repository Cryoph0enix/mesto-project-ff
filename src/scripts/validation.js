//Показать ошибки при валидации
const showInputValidationErrors = (currentInput, currentForm, validationSettings) => {
    const errorMessage = currentForm.querySelector(`.${currentInput.id}-error`);
    currentInput.classList.add(validationSettings.inputErrorClass);
    errorMessage.textContent = currentInput.validationMessage;
};

//Скрыть ошибки валидации
const hideInputValidationErrors = (currentInput, currentForm, validationSettings) => {
    const errorMessage = currentForm.querySelector(`.${currentInput.id}-error`);
    currentInput.classList.remove(validationSettings.inputErrorClass);
    errorMessage.textContent = '';
};

//Функция изменения состояния кнопки
const matchInvalidInput = (inputElementsArr) => {
    return inputElementsArr.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

const toggleButtonState = (currentForm, inputElementsArr, validationSettings) => {
    if (matchInvalidInput(inputElementsArr)) {
        currentForm.querySelector(validationSettings.submitButtonSelector).setAttribute('disabled', true);
        currentForm.querySelector(validationSettings.submitButtonSelector).classList.add(validationSettings.inactiveButtonClass);
    }
    else {
        currentForm.querySelector(validationSettings.submitButtonSelector).removeAttribute('disabled');
        currentForm.querySelector(validationSettings.submitButtonSelector).classList.remove(validationSettings.inactiveButtonClass);
    }
};

//Проверка валидности поля ввода
const checkInputValidity = (currentForm, inputElement, validationSettings) => {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    }
    else {
        inputElement.setCustomValidity("");
    }
    if (!inputElement.validity.valid) {
        showInputValidationErrors(inputElement, currentForm, validationSettings);
    }
    else {
        hideInputValidationErrors(inputElement, currentForm, validationSettings);
    }
};

const enableInputValidation = (currentForm, validationSettings) => {
    const inputElementsArr = Array.from(currentForm.querySelectorAll(validationSettings.inputSelector));
    toggleButtonState(currentForm, inputElementsArr, validationSettings);
    inputElementsArr.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(currentForm, inputElement, validationSettings);
            toggleButtonState(currentForm, inputElementsArr, validationSettings);
        });
    });
};

//Проверка валидности форм
const enableValidation = (validationSettings) => {
    const formElementsArr = Array.from(document.querySelectorAll(validationSettings.formSelector));
    formElementsArr.forEach((formElement) => {
        formElement.addEventListener('submit', enableInputValidation(formElement, validationSettings));
    })
};

//Очистка ошибок валидации
const clearFormValidationErrors = (currentForm, validationSettings) => {
    const inputList = Array.from(currentForm.querySelectorAll(validationSettings.inputSelector));
    inputList.forEach((input) => {
       hideInputValidationErrors(input, currentForm, validationSettings);
       toggleButtonState(currentForm, inputList, validationSettings);
    });
};

export { enableValidation, clearFormValidationErrors };