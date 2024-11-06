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

//Проверка валидности форм
const enableValidation = (validationSettings) => {
    const formElementsArr = Array.from(document.querySelectorAll(validationSettings.formSelector));
    formElementsArr.forEach((formElement) => {
        formElement.addEventListener('input', (evt) => {
            const currentForm = evt.target.form;
            const currentInput = evt.target.closest(validationSettings.inputSelector);
            const errorMessage = currentForm.querySelector(`.${currentInput.id}-error`);
            if (currentInput.validity.patternMismatch) {
                currentInput.setCustomValidity(currentInput.dataset.errorMessage);
            }
            else {
                currentInput.setCustomValidity("");
            }
            if (!currentForm.checkValidity()) {
                showInputValidationErrors(currentInput, currentForm, validationSettings, errorMessage);
            }
            else {
                hideInputValidationErrors(currentInput, currentForm, validationSettings, errorMessage);
            }
        });
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