import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super({ popupSelector });
    }

    open(data) {
        this._previewImageElement = 
        this._popupElement.querySelector(".modal__image");
        this._previewImageCaption = 
        this._popupElement.querySelector(".modal__image-caption");
        this._previewImageElement.alt = data.name;
        this._previewImageCaption.textContent = data.name;
        this._previewImageElement.src = data.link;

        super.open();
    }
}