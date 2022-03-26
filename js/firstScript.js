'use strict';
// === DOM & VARS ===
const $ = (q) => document.querySelector(q)
const $$ = (q) => document.querySelectorAll(q)

// abzugleichendes Wort
let arrayGuess = [];
let roundCounter = 1;
let currentRound = 'first';

// maximale Wortlänge
const maxLength = 6;

// Selector
const input = $('.input');
const oneOutput = $('.letter');
const allOutputs = $$('.letter');

// === INIT =========
const init = () => {
    addKeyhandler();
};


// === EVENTS & XHR =======
const addKeyhandler = () => document.addEventListener('keydown', getKey);


// === FUNCTIONS ====

// fügt Eingabe dem Array hinzu
const inputWord = (letter) => arrayGuess.push(letter.toUpperCase());
// löscht letzte Eingabe aus Array
const deleteLastLetter = () => arrayGuess.pop();

// Letter in Display
const putLetterIn = (arrayGuess, roundCounter) => {
    let currentRound = round(roundCounter)
    $$('#' + currentRound + ' > div')[arrayGuess.length - 1].innerHTML = arrayGuess[arrayGuess.length - 1];
};

// Letter aus Display
const removeLetter = (arrayGuess) => $$('.round > div')[arrayGuess.length].innerHTML = '';

// nächste Runde 
const round = (roundCounter) => {
    let roundSelector = $('.container > div:nth-child(' + roundCounter + ')').id;
    console.log(roundSelector);
    return roundSelector;
}

// TODO: roundSelector erstellen
const idRoundSelector = (roundCounter) => {
    currentRound = round(roundCounter);
    console.log('idRound: ' + currentRound);
    let roundSelectorID = $$('#' + currentRound + ' > div');
    console.log('idRoundSelector: ' + roundSelectorID);
    return roundSelectorID;
}


// Überprüft Eingabe...
const getKey = (e) => {
    const pattern = /[A-Za-z]/;
    // überprüfung nach e.key === Buchstabe und kein Wort
    if (pattern.test(e.key) && (e.key.length < 2)) {
         
        // auf maximale Länge
        if (arrayGuess.length < maxLength) {
            inputWord(e.key);
            putLetterIn(arrayGuess, roundCounter);
        };
    }

    // auf "Backspace"-Eingabe
    if (e.key === "Backspace") {
        deleteLastLetter();
        removeLetter(arrayGuess);
    }

    // mit "Enter" und mindestlänge Vorhanden Wort auswerten
    // if (e.key === "Enter" && input.innerHTML.length == maxLength) {
    if (e.key === "Enter" && arrayGuess.length == maxLength) {
        console.log('Wort auswerten ' + arrayGuess);
        checkLetter(word, arrayGuess);
        arrayGuess = [];
        roundCounter++
        round(roundCounter);
    }
}

init();