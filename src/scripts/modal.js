// Редактирование листа классов попапа
const editPopupClassList = (popupElement) => {
    popupElement.classList.toggle('popup_is-opened');
};

// Анимирование попапов
const animatingPopups = (popupsArr) => {
    popupsArr.forEach((popup) => {
        popup.classList.add('popup_is-animated');
    });
};

// Функция открытия попапа
const openPopup = (popupElement, closePopupKeydown, closePopupOverlay) => {
    editPopupClassList(popupElement);
    document.addEventListener('keydown', closePopupKeydown);
    popupElement.addEventListener('click', closePopupOverlay);
};

// Функция закрытия попапов
const closePopup = (openedPopup) => {
    editPopupClassList(openedPopup);
    document.removeEventListener('keydown', closePopupKeydown);
    openedPopup.removeEventListener('click', closePopupOverlay);
};

// Закрытие при нажатии клавиши Esc
const closePopupKeydown = (popup) => {
    if (popup.key === 'Escape') {
        closePopup(document.querySelector('.popup_is-opened'));
    }
};

// Закрытие по нажатию на оверлей
const closePopupOverlay = (evt) => {
    if (evt.currentTarget === evt.target) {
        closePopup(evt.target.closest('.popup_is-opened'));
    }
};

export { openPopup, closePopup, closePopupKeydown, closePopupOverlay, animatingPopups };