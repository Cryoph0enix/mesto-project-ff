import './pages/index.css';
import { initialCards, createCard, removeCard, cardLikeStatusChanger } from "./scripts/cards";
import { openPopup, openImagePopup, closePopup, keydownClosePopup, overlayClosePopup } from "./scripts/modal";

// Константы
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupCloseButtons = document.querySelectorAll('.popup__close');
const placesList = document.querySelector('.places__list');
const profileEditForm = document.querySelector('form[name="edit-profile"]');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileEditFormName = document.querySelector('input[name="name"]');
const profileEditFormDescription = document.querySelector('input[name="description"]');
const addNewCardForm = document.querySelector('form[name="new-place"]');
const newCardNameInput = document.querySelector('input[name="place-name"]');
const newCardLinkInput = document.querySelector('input[name="link"]');

// Вывод карточек на страницу
const addCards = () => {
    initialCards.map((cardValue) => {
        placesList.append(createCard(cardValue, removeCard, cardLikeStatusChanger, openImagePopup))
    });
};
addCards();

// Открытие и закрытие попапов
profileEditButton.addEventListener('click', () => {
    openPopup(popupTypeEdit, keydownClosePopup, overlayClosePopup);
    fillProfileForm();
});
profileAddButton.addEventListener('click', () => {
    openPopup(popupTypeNewCard, keydownClosePopup, overlayClosePopup)
});
popupCloseButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
        closePopup(closeButton.closest('.popup_is-opened'));
    })
});

// Редактирование профиля
const fillProfileForm = () => {
    profileEditFormName.value = profileTitle.textContent;
    profileEditFormDescription.value = profileDescription.textContent;
};
const editProfileInfo = (evt) => {
    evt.preventDefault();
    profileTitle.textContent = profileEditFormName.value;
    profileDescription.textContent = profileEditFormDescription.value;
    closePopup(evt.target.closest('.popup_is-opened'));
};
profileEditForm.addEventListener('submit', (evt) => {
    editProfileInfo(evt);
});

// Добавление новой карточки
addNewCardForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const newCardValue = {name: newCardNameInput.value, link: newCardLinkInput.value};
    placesList.prepend(createCard(newCardValue, removeCard, cardLikeStatusChanger, openImagePopup));
    closePopup(popupTypeNewCard);
    addNewCardForm.reset();
});