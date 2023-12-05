export default class Api {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    _handleServerResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    }

    _request(url, options) {
      return fetch(url, options).then(this._handleServerResponse);
    }

    getInitialCards() {
      return this._request(`${this._baseUrl}/cards`, { headers: this._headers });
    }

    getUserInfo() {
      return this._request(`${this._baseUrl}/users/me`, {
        headers: this._headers,
      });
    }
    addCard({ name, link }) {
      return fetch(`${this._baseUrl}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({ name, link}),
    })
    .then(this._handleServerResponse);
    }

    removeCard(cardId) {
      return this._request(`${this._baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
    });
    }

    changeLikeStatus(cardId, isLiked) {
      return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: isLiked ? "DELETE" : "PUT",
        headers: this._headers,
    });
    }

  updateUserInfo(name, description) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        userName: name,
        userJob: description,
      }),
    });
    }

    setUserAvatar(url) {
      return this._request(`${this._baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: url,
        }),
      });
    }
  }