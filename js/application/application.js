import { Controller } from './../controllers/controller.js';
import { View } from './../views/view.js';

let controller = new Controller();
let view = new View(controller);

document.querySelector('#btn-increment').addEventListener('click', () => {
    controller.incrementValue();
});

document.querySelector('#btn-decrement').addEventListener('click', () => {
    controller.decrementValue();
});
