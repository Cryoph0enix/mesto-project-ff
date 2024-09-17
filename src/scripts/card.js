const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
const createCard = (cardValue, removeCard, changeCardLikeStatus, openImagePopup) => {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    cardElement.querySelector('.card__title').innerText = cardValue.name;
    cardImage.setAttribute('src', cardValue.link);
    cardImage.setAttribute('alt', cardValue.name);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', removeCard);
    cardImage.addEventListener('click', () => {
        openImagePopup(cardValue);
    });
    const cardLikeButton = cardElement.querySelector('.card__like-button');
    cardLikeButton.addEventListener('click', changeCardLikeStatus);
    return cardElement;
}

// Функция удаления карточки
const removeCard = (evt) => {
    const removedCard = evt.target.closest('.card');
    removedCard.remove();
};

// Функция лайка карточки
const changeCardLikeStatus = (evt) => {
    const currentCardLikeButton = evt.currentTarget;
    currentCardLikeButton.classList.toggle('card__like-button_is-active');
};

export { createCard, removeCard, changeCardLikeStatus };