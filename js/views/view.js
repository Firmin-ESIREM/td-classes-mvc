import { Observer } from "./../pattern/observer.js";

export class View extends Observer {
    #controller;

    constructor(controller) {
        super();
        this.#controller = controller;
    }

    notify() {
        document.querySelector('#txt-counter').innerText = this.#controller.counter;
    }
}
