import { Notifier } from "./../pattern/notifier.js";
import { Counter } from "./../models/counter.js";

export class Controller extends Notifier {
    #counter;

    constructor() {
        super();
        this.#counter = new Counter();
    }

    getCounterValue() {
        return this.#counter.value;
    }

    incrementValue() {
        this.#counter.incrementValue();
        this.notify();
    }

    decrementValue() {
        this.#counter.decrementValue();
        this.notify();
    }
}