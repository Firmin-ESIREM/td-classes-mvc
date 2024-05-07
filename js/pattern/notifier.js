export class Notifier {
    #observers;

    constructor() {
        this.#observers = new Array();
    }

    addObserver(observer) {
        this.#observers.push(observer);
    }

    notify() {
        this.#observers.forEach((observer) => {
            observer.notify();
        });
    }
}
