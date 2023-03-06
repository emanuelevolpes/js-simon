'use strict';

/* SIMON SAYS
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

/*
**********
Functions
**********
*/

function generateRandomNumberArray(HowMany, num, array) {
    array.length = 0;
    while (HowMany > array.length) {
        let number = Math.floor(Math.random() * num);
        if (array.indexOf(number) === -1) {
            array.push(number);
        };
    };
};

function appendToElement(appendJSElement, elementHtml) {
    elementHtml.append(appendJSElement);
};

/*
**********
Main
**********
*/
let casualNumbers = [];
const element = document.getElementById('numbers');

generateRandomNumberArray(5, 100, casualNumbers);
console.log(casualNumbers);

appendToElement(casualNumbers, element);