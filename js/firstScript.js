'use strict'
const $ = (q) => document.querySelector(q)
const $$ = (q) => document.querySelectorAll(q)

// maximale Wortlänge
const maxLength = 6;

// Selector
const input = $('.input');

const init = () => {
    $('#first').addEventListener('click', getKey)
    
    // keyhandler
    document.addEventListener('keydown', getKey)
};

// löscht letzte Eingabe
const deleteLastLetter = (input) => {
    input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1);
    console.log(input.innerHTML)
}

// Überprüft Eingabe...
const getKey = (e) => {
    // auf "Backspace"-Eingabe
    if (e.key === "Backspace") {
        deleteLastLetter(input);
    };

    // TODO: überprüfung nach Buchstabe auch hier durchführen
    // auf maximale Länge
    if (input.innerHTML.length < maxLength) {
        inputWord(e.key);
    };

    if (e.key === "Enter" && input.innerHTML.length == maxLength) {
        let guess = input.innerHTML;
        console.log('Wort auswerten');
        checkLetter(word, guess);
    }
};

// erzeugt ausgabe
const inputWord = (letter) => {
    const pattern = /[A-Za-z]/;
    console.log(letter);

    if (pattern.test(letter) && (letter.length < 2)) {
        input.innerHTML = input.innerHTML + letter.toUpperCase(); 
    };
};


init();