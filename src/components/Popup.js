export default class Popup {
    constructor ({ popupSelector }) {
        this._popupElement = document.querySelector(popupSelector);
    }

    open() {
        this._popupElement.classList.add("modal_opened");
        this._setEventListeners();
    }

    close() {
        this._popupElement.classList.remove("modal_opened");
        this._popupElement.removeEventListener("click", this._closeModalClick);
        this._popupElement.removeEventListener("keydown", this._handleEscClose);
    }

    _closeModalClick = (e) => {
        if (
            e.target.classList.contains("modal__close") ||
            e.target.classList.contains("modal")
        ) {
            this.close();
        }
    }

    _handleEscClose = (e) => {
        if (e.key === "Escape") {
            this.close();
        }
    }

    _setEventListeners() {
        document.addEventListener("keydown", this._handleEscClose);
        this._popupElement.addEventListener("click", this._closeModalClick);
    }
}