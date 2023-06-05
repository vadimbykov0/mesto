export default class Api {
    constructor(config) {
        this._url = config.baseUrl;
        this._headers = config.headers;
        this._authorization = config.headers.authorization;
    };

    // Загрузка информации о пользователе с сервера
    getInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._authorization,
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject)
    };

    // Загрузка карточек с сервера
    getCards() {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._authorization,
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject)
    };

    // Редактирование профиля
    setUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.username,
                about: data.description
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject)
    };

    // Добавление новой карточки
    addNewCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.title,
                link: data.link
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject)
    };

    // Удаление карточки
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject)
    };

    // Постановка и снятие лайка
    addLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject)
    };

    removeLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject)
    };

    // Обновление аватара пользователя
    changeAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject)
    };
};