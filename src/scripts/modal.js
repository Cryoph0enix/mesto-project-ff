// Редактирование листа классов попапа
const editPopupClassList = (popupElement) => {
    popupElement.classList.toggle('popup_is-opened');
};

// Анимирование попапов
const popupsArr = document.querySelectorAll('.popup');
popupsArr.forEach((popup) => {
    popup.classList.add('popup_is-animated');
});

// Функция открытия попапа
const openPopup = (popupElement, keydownClosePopup, overlayClosePopup) => {
    editPopupClassList(popupElement);
    document.addEventListener('keydown', keydownClosePopup);
    popupElement.addEventListener('click', overlayClosePopup);
};

const openImagePopup = (cardValue) => {
    const popupTypeImage = document.querySelector('.popup_type_image');
    popupTypeImage.querySelector('.popup__caption').textContent = cardValue.name;
    popupTypeImage.querySelector('.popup__image').src = cardValue.link;
    popupTypeImage.querySelector('.popup__image').alt = cardValue.name;
    openPopup(popupTypeImage, keydownClosePopup, overlayClosePopup);
};

// Функция закрытия попапов
const closePopup = (evt) => {
    editPopupClassList(evt);
    document.removeEventListener('keydown', keydownClosePopup);
    evt.removeEventListener('click', overlayClosePopup);
};

// Закрытие при нажатии клавиши Esc
const keydownClosePopup = (evt) => {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_is-opened'));
    }
};

// Закрытие по нажатию на оверлей
const overlayClosePopup = (evt) => {
    if (evt.currentTarget === evt.target) {
        closePopup(evt.target.closest('.popup_is-opened'));
    }
};

export { openPopup, openImagePopup, closePopup, keydownClosePopup, overlayClosePopup };