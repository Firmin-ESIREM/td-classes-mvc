export class Counter {
    #value;

    constructor() {
        this.#value = 0;
    }

    get value() {
        return this.#value;
    }

    incrementValue() {
        this.#value++;
    }

    decrementValue() {
        this.#value--;
    }
}
