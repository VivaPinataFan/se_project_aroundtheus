import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super({ popupSelector });
        this._previewImageElement = document.querySelector(
            ".modal__image"
        );
        this._previewImageCaption = document.querySelector(".modal__image-caption");
    }

    open({ name, link }) {
        this._previewImageElement.alt = name;
        this._previewImageCaption.textContent = name;
        this._previewImageElement.src = link;

        super.open();
    }
}