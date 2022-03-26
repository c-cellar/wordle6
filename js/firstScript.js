'use strict';
// === DOM & VARS ===
const $ = (q) => document.querySelector(q)
const $$ = (q) => document.querySelectorAll(q)

// abzugleichendes Wort
let arrayGuess = [];
let guess = arrayGuess;
// let guess = '';

// maximale Wortlänge
const maxLength = 6;

// Selector
const input = $('.input');
const oneOutput = $('.letter')
const allOutputs = $$('.letter');

// === INIT =========
const init = () => {
    addKeyhandler();
};


// === EVENTS & XHR =======
const addKeyhandler = () => document.addEventListener('keydown', getKey);


// === FUNCTIONS ====
// TODO: löschen funktioniert nicht immer 
// löscht letzte Eingabe
const deleteLastLetter = (guess) => {
    guess = guess.substring(0, guess.length - 1);
    console.log(guess);
    // Array ===========
    arrayGuess.pop();
    console.log(arrayGuess);
} 

// Überprüft Eingabe...
const getKey = (e) => {
    const pattern = /[A-Za-z]/;
    // überprüfung nach e.key === Buchstabe und kein Wort
    if (pattern.test(e.key) && (e.key.length < 2)) {
         
        // auf maximale Länge
        if (guess.length < maxLength) {
            inputWord(e.key);
        };
    }

    // auf "Backspace"-Eingabe
    if (e.key === "Backspace") {
        console.log(e.key)
        deleteLastLetter(guess);
    };   

    // mit "Enter" und mindestlänge Vorhanden Wort auswerten
    // if (e.key === "Enter" && input.innerHTML.length == maxLength) {
    if (e.key === "Enter" && guess.length == maxLength) {
        // guess = input.innerHTML;
        console.log('Wort auswerten ' + guess);
        checkLetter(word, guess);
    }
};

// erzeugt Ausgabe
const inputWord = (letter) => {
    // guess = guess + letter.toUpperCase();
    // console.log(guess);

    // ================ Array
    arrayGuess.push(letter.toUpperCase());
    console.log(arrayGuess);
}

// output 
const outputLetter = (letter) => {
    
}


init();