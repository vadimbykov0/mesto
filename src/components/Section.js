export default class Section {
    constructor(renderer, container) {
        this._container = document.querySelector(container);
        this._renderer = renderer;
    };

    addCards(dataCard) {
        dataCard.forEach(element => {
            this._renderer(element);
        })
    };

    addItem(element) {
        this._container.prepend(element);
    };
};