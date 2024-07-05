// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
const createCard = (cardValue, removeCard) => {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    cardElement.querySelector('.card__title').innerText = cardValue.name;
    cardElement.querySelector('.card__image').setAttribute('src', cardValue.link);
    cardElement.querySelector('.card__image').setAttribute('alt', cardValue.name);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', removeCard);
    return cardElement;
}

// @todo: Функция удаления карточки
const removeCard = (evt) => {
    const removedCard = evt.target.closest('.card');
    removedCard.remove();
};

// @todo: Вывести карточки на страницу
const addCards = () => {
    initialCards.map((cardValue) => {
        placesList.append(createCard(cardValue, removeCard))
    });
};

addCards();