export default class Card {
  constructor(
    cardData,
    cardSelector,
    handleCardClick,
    handleLikeClick,
    handleDeleteClick
  ) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this.isLiked = cardData.isLiked;
    this._ownerId = cardData.owner._id;
    this._cardId = cardData._id;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });

    this._cardElement
      .querySelector(".card__button-delete")
      .addEventListener("click", () => {
        this._handleDeleteClick(this._cardId);
      });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });
  }

  updateLikes(isLiked) {
    this.isLiked = isLiked;
    this._toggleLikeButton();
  }

  _toggleLikeButton() {
    if (this.isLiked) {
      this._likeButton.classList.add("card__button-like_active");
    } else {
      this._likeButton.classList.remove("card__button-like_active");
    }
  }

  _getTemplate() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return this._cardElement;
  }
  removeCardElement() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  getView() {
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");
    this._likeButton = this._cardElement.querySelector(".card__button-like");
    this._deleteButton = this._cardElement.querySelector(
      ".card__button-delete"
    );
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;

    this._setEventListeners();
    this._toggleLikeButton();

    return this._cardElement;
  }
}
