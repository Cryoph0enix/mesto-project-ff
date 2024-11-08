import { deleteCard, setCardLike, removeCardLike } from "./api";
const cardTemplate = document.querySelector('#card-template').content;
const isLiked = (cardValue, userId) => {
    return cardValue.likes.some(like => like._id === userId.id);
};

// Функция создания карточки
const createCard = (cardValue, removeCard, changeCardLikeStatus, openImagePopup, userId) => {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    cardElement.querySelector('.card__title').innerText = cardValue.name;
    cardImage.setAttribute('src', cardValue.link);
    cardImage.setAttribute('alt', cardValue.name);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    cardElement.dataset.id = cardValue._id;
    if (userId === cardValue.owner._id) {
        deleteButton.addEventListener('click', (evt) => {
            removeCard(evt, cardValue._id);
        });
    }
    else {
        deleteButton.remove();
    }
    cardImage.addEventListener('click', () => {
        openImagePopup(cardValue);
    });
    const cardLikeButton = cardElement.querySelector('.card__like-button');
    const cardLikeCounter = cardElement.querySelector('.card__like-counter');
    cardLikeCounter.textContent = cardValue.likes.length;
    if (isLiked(cardValue, userId)) {
        cardLikeButton.classList.add('card__like-button_is-active');
    } else {
        cardLikeButton.classList.remove('card__like-button_is-active');
    }
    cardLikeButton.addEventListener('click', () => {
        changeCardLikeStatus(cardValue, userId, cardElement, cardLikeButton, cardLikeCounter)
    });
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
const changeCardLikeStatus = (cardValue, userId, cardElement, cardLikeButton, cardLikeCounter) => {
    if(isLiked(cardValue, userId)) {
        removeCardLike(cardValue._id)
            .then((res) => {
                cardLikeButton.classList.remove('card__like-button_is-active');
                cardLikeCounter.textContent = res.likes.length;
                cardValue.likes = res.likes;
            })
            .catch(err => console.log(err));
    }
    else {
        setCardLike(cardValue._id)
            .then((res) => {
                cardLikeButton.classList.add('card__like-button_is-active');
                cardLikeCounter.textContent = res.likes.length;
                cardValue.likes = res.likes;
            })
    }
};

export { createCard, removeCard, changeCardLikeStatus };