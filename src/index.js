import './pages/index.css';
import { createCard, removeCard, changeCardLikeStatus } from "./scripts/card";
import { openPopup, closePopup, closePopupKeydown, closePopupOverlay, animatingPopups } from "./scripts/modal";
import { enableValidation, clearFormValidationErrors } from "./scripts/validation";
import { validationSettings } from "./scripts/settings";
import { getProfileInfo, downloadCardsList, changeProfileInfo, addNewCard, changeProfileImage } from "./scripts/api";
import { savingChanges } from "./scripts/loading";

// Константы
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeEditProfileImage = document.querySelector('.popup_type_edit-profile-image');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupCloseButtons = document.querySelectorAll('.popup__close');
const placesList = document.querySelector('.places__list');
const profileEditForm = document.querySelector('form[name="edit-profile"]');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImageEditForm = document.querySelector('form[name="edit-profile-image"]');
const profileImage = document.querySelector('.profile__image');
const newProfileImageLinkInput = document.querySelector('input[name="profile-img-link"]');
const profileEditFormName = document.querySelector('.popup__input_type_name');
const profileEditFormDescription = document.querySelector('.popup__input_type_description');
const addNewCardForm = document.querySelector('form[name="new-place"]');
const newCardNameInput = document.querySelector('input[name="place-name"]');
const newCardLinkInput = document.querySelector('input[name="link"]');
const popupsArr = document.querySelectorAll('.popup');
const popupTypeImage = document.querySelector('.popup_type_image');
const contentPopupDescription = popupTypeImage.querySelector('.popup__caption');
const contentPopupImage = popupTypeImage.querySelector('.popup__image');
let userId = "";

// Анимирование попапов
animatingPopups(popupsArr);

// Открытие попапов с картинками
const openImagePopup = (cardValue) => {
    contentPopupDescription.textContent = cardValue.name;
    contentPopupImage.src = cardValue.link;
    contentPopupImage.alt = cardValue.name;
    openPopup(popupTypeImage, closePopupKeydown, closePopupOverlay);
};

// Вывод карточек на страницу
Promise.all([getProfileInfo(), downloadCardsList()])
    .then(([profileInfo, initialCards]) => {
        userId = profileInfo["_id"];
        profileTitle.textContent = profileInfo.name;
        profileDescription.textContent = profileInfo.about;
        profileImage.style = `background-image: url('${profileInfo.avatar}')`;
        initialCards.forEach((cardValue) => {
            placesList.append(createCard(cardValue, removeCard, changeCardLikeStatus, openImagePopup, userId));
        })
    })
    .catch(err => console.log(err));

// Открытие и закрытие попапов
profileEditButton.addEventListener('click', () => {
    openPopup(popupTypeEdit, closePopupKeydown, closePopupOverlay);
    fillProfileForm();
    clearFormValidationErrors(popupTypeEdit, validationSettings);
});
profileAddButton.addEventListener('click', () => {
    clearFormValidationErrors(popupTypeNewCard, validationSettings);
    openPopup(popupTypeNewCard, closePopupKeydown, closePopupOverlay)
});
popupCloseButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
        closePopup(closeButton.closest('.popup_is-opened'));
    })
});
profileImage.addEventListener('click', () => {
    clearFormValidationErrors(popupTypeEditProfileImage, validationSettings);
    openPopup(popupTypeEditProfileImage, closePopupKeydown, closePopupOverlay);
});

// Редактирование профиля
const fillProfileForm = () => {
    profileEditFormName.value = profileTitle.textContent;
    profileEditFormDescription.value = profileDescription.textContent;
};
const editProfileInfo = (evt) => {
    evt.preventDefault();
    savingChanges(true, profileEditForm.querySelector('.popup__button'));
    changeProfileInfo(profileEditFormName.value, profileEditFormDescription.value)
        .then(profileInfo=> {
            profileTitle.textContent = profileInfo.name;
            profileDescription.textContent = profileInfo.about;
            closePopup(evt.target.closest('.popup_is-opened'));
        })
        .catch(err => console.log(err))
        .finally(() => savingChanges(false, profileEditForm.querySelector('.popup__button')));
};
profileEditForm.addEventListener('submit', (evt) => {
    editProfileInfo(evt);
});
const editProfileImage = (evt) => {
    evt.preventDefault();
    savingChanges(true, profileEditForm.querySelector('.popup__button'));
    changeProfileImage(newProfileImageLinkInput.value)
        .then(res => {
            profileImage.style = `background-image: url('${res.avatar}')`;
            closePopup(evt.target.closest('.popup_is-opened'));
            profileImageEditForm.reset();
        })
        .catch(err => console.log(err))
        .finally(() => savingChanges(false, profileEditForm.querySelector('.popup__button')));
};
profileImageEditForm.addEventListener('submit', (evt) => {
    editProfileImage(evt);
});

// Добавление новой карточки
addNewCardForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    savingChanges(true, profileEditForm.querySelector('.popup__button'));
    addNewCard(newCardNameInput.value, newCardLinkInput.value)
        .then(cardValue => {
            placesList.prepend(createCard(cardValue, removeCard, changeCardLikeStatus, openImagePopup, userId));
            closePopup(popupTypeNewCard);
            addNewCardForm.reset();
        })
        .catch(err => console.log(err))
        .finally(() => savingChanges(false, profileEditForm.querySelector('.popup__button')));
});

// Включение валидации
enableValidation(validationSettings);