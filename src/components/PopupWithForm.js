import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super({ popupSelector });
        this._popupForm = document.querySelector(`${popupSelector} .modal__form`);
        this._handleFormSubmit = handleFormSubmit;
        this._submitButton = this._popupForm.querySelector(".modal__button");
        this._submitButtonText = this._submitButton.textContent;
    }

    setLoading(isLoading, loadingText = "Saving...") {
        if (isLoading) {
            this._submitButton.textContent = loadingText;
        } else {
            this._submitButton.textContent = this._submitButtonText;
        }
    }

    _getInputValues() {
        const values = {};
        const inputList = this._popupForm.querySelectorAll(".modal__form-input");
        inputList.forEach((input) => {
            if (input.value !== "") {
                values[input.name] = input.value;
            }
        });
        return values;
    }

    _submitForm = (event) => {
        event.preventDefault(); // Prevent the form from submitting normally
        this.setLoading(true); // Disable the submit button and show loading text
        const inputValues = this._getInputValues();
        this._handleFormSubmit(inputValues, () => {
            this.setLoading(false); // Re-enable the submit button after the form is handled
            // You can add a timeout here if you want to keep the popup open for a while
            setTimeout(() => {
                this.close(); // Close the popup after a delay
            }, 2000); // Adjust the delay as needed
        });
        console.log(inputValues);
    };

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener("submit", this._submitForm);
    }

    close() {
        this._popupForm.reset();
        super.close();
    }
}
