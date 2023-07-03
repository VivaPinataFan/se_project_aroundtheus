import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super({ popupSelector });
        this._popupForm = this._popupElement.querySelector('.modal__form');
        this._handleFormSubmit = handleFormSubmit;
        

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

    _submitForm = () => {
        const inputValues = this._getInputValues();
        this._handleFormSubmit(inputValues);
    };

    setEventListeners() {
        super._setEventListeners();
        this._popupElement.addEventListener("submit", this._submitForm);
    }

    close() {
        this._popupForm.reset();
        super.close();
    }
}
