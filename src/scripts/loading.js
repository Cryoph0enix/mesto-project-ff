export const savingChanges = (loadingInProcess, submitButton) => {
    submitButton.textContent = loadingInProcess ? 'Сохранение...' : 'Сохранить';
};