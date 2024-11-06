import { deleteCard, setCardLike, removeCardLike } from "./api";
const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
const createCard = (cardValue, removeCard, changeCardLikeStatus, openImagePopup, userId) => {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    cardElement.querySelector('.card__title').innerText = cardValue.name;
    cardImage.setAttribute('src', cardValue.link);
    cardImage.setAttribute('alt', cardValue.name);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    if (userId === cardValue.owner._id) {
        deleteButton.addEventListener('click', (evt) => {
            removeCard(evt, cardValue._id);
        });
    }
    else {
        deleteButton.remove();
    }
    cardImage.addEventListener('click', (evt) => {
        openImagePopup(cardValue);
    });
    const cardLikeButton = cardElement.querySelector('.card__like-button');
    cardLikeButton.addEventListener('click', changeCardLikeStatus(cardValue, userId, cardElement));
    return cardElement;
};

// Функция удаления карточки
const removeCard = (evt, cardValueId) => {
    const removedCard = evt.target.closest('.card');
    deleteCard(cardValueId)
        .then((res) => {
            removedCard.remove();
        })
        .catch(err => console.log(err))
};

// Функция лайка карточки
const changeCardLikeStatus = (cardValue, userId, cardElement) => {
    const cardLikeCounter = cardElement.querySelector('.card__like-counter');
    const currentCardLikeButton = cardElement.querySelector('.card__like-button');
    const isLiked = cardValue.likes.some(like => like.id === userId.id);
    const updateLikes = (res) => {
        currentCardLikeButton.classList.toggle('card__like-button_is-active', !isLiked);
        cardLikeCounter.textContent = res.likes.length;
        cardValue.likes = res.likes;
    };
    const toggleLikeStatus = isLiked ? removeCardLike : setCardLike;
    toggleLikeStatus(cardValue._id)
        .then(updateLikes)
        .catch(err => console.log(err));
};

export { createCard, removeCard, changeCardLikeStatus };