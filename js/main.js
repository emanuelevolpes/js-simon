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

// function generateRandomNumberArray(HowMany, num, array) {
//     array.length = 0;
//     while (HowMany > array.length) {
//         let number = Math.floor(Math.random() * num);
//         if (array.indexOf(number) === -1) {
//             array.push(number);
//         };
//     };
//     return array;
// };

function appendToElement(appendJSElement, elementHtml) {
    elementHtml.append(appendJSElement);
};

/*
**********
Main
**********
*/
const element = document.getElementById('numbers');

let casualNumbers = [];
casualNumbers.length = 0;
    while (5 > casualNumbers.length) {
        let number = Math.floor(Math.random() * 100);
        if (casualNumbers.indexOf(number) === -1) {
            casualNumbers.push(number);
        };
    };
    console.log(casualNumbers);

appendToElement(casualNumbers, element);

setTimeout(removeHtmlElement, 3000);

function removeHtmlElement() {
    element.remove();
};

setTimeout(showPrompt, 3100);

function showPrompt() {
    let userNumbers = [];
    let guessesNumbers = [];
    let i = 0;

    while (i < 5) {
        const numbers = Number(prompt('inserisci numero'));
        console.log(numbers);
            if (isNaN(numbers)) {
                i--;
                const numbers = Number(prompt('inserisci un numero'));
                userNumbers.push(numbers);
                i++;
                console.log(numbers);
            } else {
                i++;
            };   
        userNumbers.push(numbers);
        console.log(userNumbers);
    };

    for (let i = 0; i < userNumbers.length; i++) {
        if (casualNumbers.includes(userNumbers[i])) {
            guessesNumbers.push(userNumbers[i]);
        };
    };    

    console.log('hai indovinato ' + guessesNumbers.length + ' numeri: ' + guessesNumbers);
};