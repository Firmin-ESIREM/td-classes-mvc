import { Notifier } from "./../pattern/notifier.js";

export class Controller extends Notifier {
    #counter;

    constructor() {
        super();
        this.#counter = 0;
    }

    get counter() {
        return this.#counter;
    }

    incrementValue() {
        this.#counter++;
        this.notify();
    }

    decrementValue() {
        this.#counter--;
        this.notify();
    }
}