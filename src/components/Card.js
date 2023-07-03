export default class Card {
    constructor({ name, link }, cardSelector, handleCardClick) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _setEventListeners() {
        this._cardElement.querySelector(".card__button-like")
        .addEventListener("click", () => {
            this._handleLikeIcon();
        })

        this._cardElement.querySelector(".card__button-delete")
        .addEventListener("click", () => {
            this._handleDelete();
        })

        this._cardImage.addEventListener("click", () => {
            this._handleCardClick({ name: this._name, link: this._link });
        })

    }

    _handleLikeIcon() {
        this._cardElement.querySelector(".card__button-like")
        .classList.toggle("card__button-like_active");
    }

    _handleDelete() { 
        this._cardElement.remove();
        this._cardElement = null;
    }

    _getTemplate() {
      this._cardElement = document
     .querySelector(this._cardSelector)
     .content.querySelector(".card")
     .cloneNode(true);
      return this._cardElement;
    }

    _makeCard() {
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardTitle.textContent = this._name;
    }

    getView() {
     this._cardElement = this._getTemplate();
     this._cardImage = this._cardElement.querySelector(".card__image");
     this._cardTitle = this._cardElement.querySelector(".card__title");

     this._setEventListeners();
     this._makeCard();

     return this._cardElement;
    }
}