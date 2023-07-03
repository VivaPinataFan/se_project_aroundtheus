export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderItems = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    renderItems() {
        this._renderItems.forEach(this._renderer);
    }

    addItem(cardElement) {
        this._container.append(cardElement);
    }

    prependItem(cardElement) {
        this._container.prepend(cardElement)
    }
}