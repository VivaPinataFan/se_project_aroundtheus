export default class Section {
    constructor({ items, renderer }, container) {
        this._renderItems = items;
        this._renderer = renderer;
        this._container = container;
    }

    renderItems() {
        this._renderItems.forEach((item) => {
            this._renderer(item);
        });
    }

    addItem(cardElement) {
        this._container.prepend(cardElement);
    }

}