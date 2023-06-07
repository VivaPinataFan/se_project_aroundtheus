import { openPopup, closePopup } from "../utils/Utils.js";

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

        this._cardElement.querySelector(".card__button-delete")
        .addEventListener("click", () => {
            this._handleDelete();
        })

        this._cardElement.querySelector(".card__image")
        .addEventListener("click", () => {
            this._handleImageModal();
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
    
    _handleImageModal() {
        const imageModal = document.querySelector("#image-modal");
        this._cardImage = imageModal.querySelector(".modal__image");
        this._cardTitle = imageModal.querySelector(".modal__image-caption");
        
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardTitle.textContent = this._name;

        openPopup(imageModal);
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