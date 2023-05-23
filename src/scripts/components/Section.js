export default class Section {
    constructor({ items, renderer }, container) {
        this._container = document.querySelector(container);
        this._initialCard = items;
        this.renderer = renderer;
    };

    addCard() {
        this._initialCard.forEach(element => {
            this.addItem(this.renderer(element));
        })
    };

    addItem(element) {
        this._container.prepend(element);
    };
};