const authorizationConfig = {
    baseURL: 'https://mesto.nomoreparties.co/v1/wff-cohort-25',
    headers: {
        authorization: '33b46605-c021-40fa-b699-d18214a531c7',
        'Content-Type': 'application/json'
    }
};

//Функция получения статуса запроса
const getRequestStatus = (res) => {
    if (res.ok) {
        return res.json();
    }
    else {
        return Promise.reject(res.statusText);
    }
};

//Загрузка информации о пользователе
const getProfileInfo = () => {
    return fetch(`${authorizationConfig.baseUrl}/users/me`, {
        method: "GET",
        headers: authorizationConfig.headers
    })
    .then((res) => getRequestStatus(res));
};

//Загрузка карточек с сервера
const downloadCardsList = () => {
    return fetch(`${authorizationConfig.baseUrl}/cards`, {
        method: "GET",
        headers: authorizationConfig.headers
    })
    .then((res) => getRequestStatus(res));
};

//Редактирование профиля
const changeProfileInfo = (profileName, aboutInfo) => {
    return fetch(`${authorizationConfig.baseUrl}/users/me`, {
        method: 'POST',
        headers: authorizationConfig.headers,
        body: JSON.stringify({
            name: profileName,
            about: aboutInfo
        })
    })
    .then((res) => getRequestStatus(res));
};

//Добавление новой карточки
const addNewCard = (nameInputValue, linkInputValue) => {
    return fetch(`${authorizationConfig.baseUrl}/cards`, {
        method: 'POST',
        headers: authorizationConfig.headers,
        body: JSON.stringify({
            name: nameInputValue,
            link: linkInputValue
        })
    })
    .then((res) => getRequestStatus(res));
};

//Удаление карточки
const deleteCard = (cardId) => {
    return fetch(`${authorizationConfig.baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: authorizationConfig.headers
    })
    .then((res) => getRequestStatus(res))
};

//Постановка и снятие лайка
const setCardLike = (cardId) => {
    return fetch(`${authorizationConfig.baseUrl}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: authorizationConfig.headers
    })
    .then((res) => getRequestStatus(res))
};

const removeCardLike = (cardId) => {
    return fetch(`${authorizationConfig.baseUrl}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: authorizationConfig.headers
    })
    .then((res) => getRequestStatus(res))
};

//Обновление аватара
const changeProfileImage = (newImageLink) => {
    return fetch(`${authorizationConfig.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: authorizationConfig.headers,
        body: JSON.stringify({
            data: newImageLink
        })
    })
    .then((res) => getRequestStatus(res))
};

export { getProfileInfo, downloadCardsList, changeProfileInfo, addNewCard, deleteCard, setCardLike, removeCardLike, changeProfileImage };