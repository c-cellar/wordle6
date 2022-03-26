'use strict';
// === DOM & VARS ===
const $ = (q) => document.querySelector(q)
const $$ = (q) => document.querySelectorAll(q)

// maximale Wortlänge
const maxLength = 6;

// Selector
const input = $('.input');


// === INIT =========
const init = () => {
    addKeyhandler();
};


// === EVENTS & XHR =======
const addKeyhandler = () => document.addEventListener('keydown', getKey)


// === FUNCTIONS ====

// löscht letzte Eingabe
const deleteLastLetter = (input) => {
    input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1);
    console.log(input.innerHTML)
}

// Überprüft Eingabe...
const getKey = (e) => {
    const pattern = /[A-Za-z]/;
    // überprüfung nach e.key === Buchstabe und kein Wort
    if (pattern.test(e.key) && (e.key.length < 2)) {
         
        // auf maximale Länge
        if (input.innerHTML.length < maxLength) {
            inputWord(e.key);
        };
    }

    // auf "Backspace"-Eingabe
    if (e.key === "Backspace") {
        deleteLastLetter(input);
    };   

    // mit "Enter" und mindestlänge Vorhanden Wort auswerten
    if (e.key === "Enter" && input.innerHTML.length == maxLength) {
        let guess = input.innerHTML;
        console.log('Wort auswerten');
        checkLetter(word, guess);
    }
};

// erzeugt ausgabe
const inputWord = (letter) => input.innerHTML = input.innerHTML + letter.toUpperCase(); 


init();