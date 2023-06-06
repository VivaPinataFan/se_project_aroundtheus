export default class Card {
    constructor({ name, link }, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }

    _setEventListeners() {
        this._cardElement.querySelector(".card__button-like")
        .addEventListener("click", () => {
            this._handleLikeIcon();
        })
    }

    _handleLikeIcon() {
        this._cardElement.querySelector(".card__button-like")
        .classList.toggle("card__button-like_active");
    }

    getView() {
     this._cardElement = document
     .querySelector(this._cardSelector)
     .content.querySelector(".card")
     .cloneNode(true);
    }
}