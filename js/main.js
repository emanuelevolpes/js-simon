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
    return array;
};

function appendToElement(appendJSElement, elementHtml) {
    elementHtml.append(appendJSElement);
};

function removeHtmlElement() {
    element.remove();
};

function showPrompt() {
    let userNumbers = [];
    let guessesNumbers = [];
    let i = 0;
    let numbers = Number(prompt('Inserisci numero'));

    while (i < 5) {
            if (isNaN(numbers)) {
                numbers = Number(prompt('Attento: hai inserito una stringa, inserisci un numero!'));
            } else {
                userNumbers.push(numbers);
                i++;
            };
    };

    for (let i = 0; i < userNumbers.length; i++) {
        if (casualNumbers.includes(userNumbers[i]) && !userNumbers.includes(numbers)) {
            guessesNumbers.push(userNumbers[i]);
        };
    };    

    if (guessesNumbers.length > 0) {
        document.getElementById('guesses-numbers').innerHTML = 'Hai indovinato ' + guessesNumbers.length + ' numeri: ' + guessesNumbers;
    } else {
        document.getElementById('guesses-numbers').innerHTML = 'Hai indovinato ' + guessesNumbers.length + ' numeri, ritenta!';
    };
};

/*
**********
Main
**********
*/

const element = document.getElementById('numbers');

let casualNumbers = [];

generateRandomNumberArray(5, 100, casualNumbers);

appendToElement(casualNumbers, element);

setTimeout(removeHtmlElement, 3000);

setTimeout(showPrompt, 3100);