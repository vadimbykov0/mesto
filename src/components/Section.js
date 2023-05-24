export default class Section {
    constructor({ items, renderer }, container) {
        this._container = document.querySelector(container);
        this._initialCards = items;
        this.renderer = renderer;
    };

    addCards() {
        this._initialCards.forEach(element => {
            this.addItem(this.renderer(element));
        })
    };

    addItem(element) {
        this._container.prepend(element);
    };
};