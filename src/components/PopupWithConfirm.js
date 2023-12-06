import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super({ popupSelector });
        this._popupForm = this._popupElement.querySelector(".modal__form");
        this._submitButton = this._popupForm.querySelector(".modal__button");
        this._submitButtonText = this._submitButton.textContent;
        // Set the submit event listener for the form
        this._popupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (this._handleFormSubmit) {
                this._handleFormSubmit();
            }
        });
    }

    setSubmitAction(action) {
        this._handleFormSubmit = action;
    }

    setLoading(isLoading, loadingText = "Removing...") {
        if(isLoading) {
            this._submitButton.textContent = loadingText;
        } else {
            this._submitButton.textContent = this._submitButtonText;
        }
    }

    close() {
        super.close();
        this._popupForm.removeEventListener("submit", this._handleFormSubmit);
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener("submit", this._handleFormSubmit);
    }
}