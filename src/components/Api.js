export default class Api {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    _handleServerResponse(res) {
      return res.json().then(data => {
        if (res.ok) {
          console.log('Server response data:', data);
          return data;
        } else {
          // Log the error response from the server
          console.error('Error data:', data);
          // Throw an error with both the status and the error message
          throw new Error(`Error: ${res.status}: ${data.message}`);
        }
      });
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
      return this._request(`${this._baseUrl}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({ name, link }),
      });
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
    console.log(name, description);
    return this._request(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: description,
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