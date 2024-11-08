//Показать ошибки при валидации
const showInputValidationErrors = (currentInput, currentForm, validationSettings) => {
    const errorMessage = currentForm.querySelector(`.${currentInput.id}-error`);
    currentInput.classList.add(validationSettings.inputErrorClass);
    currentForm.querySelector(validationSettings.submitButtonSelector).setAttribute('disabled', true);
    currentForm.querySelector(validationSettings.submitButtonSelector).classList.add(validationSettings.inactiveButtonClass);
    errorMessage.textContent = currentInput.validationMessage;
};

//Скрыть ошибки валидации
const hideInputValidationErrors = (currentInput, currentForm, validationSettings) => {
    const errorMessage = currentForm.querySelector(`.${currentInput.id}-error`);
    currentInput.classList.remove(validationSettings.inputErrorClass);
    currentForm.querySelector(validationSettings.submitButtonSelector).removeAttribute('disabled');
    currentForm.querySelector(validationSettings.submitButtonSelector).classList.remove(validationSettings.inactiveButtonClass);
    errorMessage.textContent = '';
};

//Проверка валидности поля ввода
const checkInputValidity = (currentForm, validationSettings) => {
    const inputElementsArr = currentForm.querySelectorAll(validationSettings.inputSelector);
    inputElementsArr.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            const errorMessage = currentForm.querySelector(`.${inputElement.id}-error`);
            if (inputElement.validity.patternMismatch) {
                inputElement.setCustomValidity(inputElement.dataset.errorMessage);
            }
            else {
                inputElement.setCustomValidity("");
            }
            if (!inputElement.validity.valid) {
                showInputValidationErrors(inputElement, currentForm, validationSettings, errorMessage);
            }
            else {
                hideInputValidationErrors(inputElement, currentForm, validationSettings, errorMessage);
            }
        })
    })
};

//Проверка валидности форм
const enableValidation = (validationSettings) => {
    const formElementsArr = Array.from(document.querySelectorAll(validationSettings.formSelector));
    formElementsArr.forEach((formElement) => {
        formElement.addEventListener('submit', checkInputValidity(formElement, validationSettings));
    })
};

//Очистка ошибок валидации
const clearFormValidationErrors = (currentForm, validationSettings) => {
    const inputList = currentForm.querySelectorAll(validationSettings.inputSelector);
    inputList.forEach((input) => {
       hideInputValidationErrors(input, currentForm, validationSettings);
    });
};

export { enableValidation, clearFormValidationErrors };