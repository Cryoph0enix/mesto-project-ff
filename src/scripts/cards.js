const initialCards = [
    {
      name: "Москва",
      link: "https://images.unsplash.com/photo-1491736525576-4954bf3e3187?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Пермь",
      link: "https://images.unsplash.com/photo-1690107097989-7129dfbb027e?q=80&w=1830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Санкт-Петербург",
      link: "https://images.unsplash.com/photo-1554844344-c34ea04258c4?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Архангельск",
      link: "https://images.unsplash.com/photo-1638739947654-7758c1b4f790?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Волгоград",
      link: "https://images.unsplash.com/photo-1626807941007-f47dd379fa91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Нижний Новгород",
      link: "https://images.unsplash.com/photo-1666375704352-18561abe7ac2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];
const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
const createCard = (cardValue, removeCard, cardLikeStatusChanger, openImagePopup) => {
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
    cardLikeButton.addEventListener('click', cardLikeStatusChanger);
    return cardElement;
}

// Функция удаления карточки
const removeCard = (evt) => {
    const removedCard = evt.target.closest('.card');
    removedCard.remove();
};

// Функция лайка карточки
const cardLikeStatusChanger = (evt) => {
    const currentCardLikeButton = evt.currentTarget;
    currentCardLikeButton.classList.toggle('card__like-button_is-active');
};

export { initialCards, createCard, removeCard, cardLikeStatusChanger };