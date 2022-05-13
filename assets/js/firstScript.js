'use strict';
// === DOM & VARS ===
const $ = (q) => document.querySelector(q)
const $$ = (q) => document.querySelectorAll(q)

// guess-Wort
let arrayGuess = [];
let roundCounter = 1;
let currentRound = 'first';

// input
let key = '';

// maximale Wortlänge
const maxLength = 6;

// Selector
const input = $('.input');
const oneOutput = $('.letter');
const allOutputs = $$('.letter');
const allKeys = $$('.key');

// === INIT =========
const init = () => {
    addKeyhandler();
    addClickEventOnKey();
};


// === EVENTS & XHR =======
const addKeyhandler = () => document.addEventListener('keydown', checksGetsLetterFromInput);
const addClickEventOnKey = () => allKeys.forEach(key => key.addEventListener('click', checksGetsLetterFromInput));

// === FUNCTIONS ====
// fügt Eingabe dem Array hinzu
const inputWord = (letter) => arrayGuess.push(letter.toUpperCase());

// löscht letzte Eingabe aus Array
const deleteLastLetter = () => arrayGuess.pop();

// put letter in letterboard
const putLetterIn = (arrayGuess, roundCounter) => {
    currentRound = round(roundCounter)
    $$('#' + currentRound + ' > div')[arrayGuess.length - 1].innerHTML = arrayGuess[arrayGuess.length - 1];
};

// remove letter from letterboard
const removeLetter = (arrayGuess) => idRoundSelector(roundCounter)[arrayGuess.length].innerHTML = '';

// nächste Runde 
const round = (roundCounter) => {
    let roundSelector = $('.letterContainer > div:nth-child(' + roundCounter + ')').id;
    console.log(roundSelector);
    return roundSelector;
};

// Rundenabhängiger id-Selector in Abhängigkeit vom Rundenzähler 
const idRoundSelector = (roundCounter) => {
    currentRound = round(roundCounter);
    let roundSelectorID = $$('#' + currentRound + ' > div');
    return roundSelectorID;
};

// checks letter input and getLetter from Input 
const checksGetsLetterFromInput = (e) => {
    switch(e.type) {
        case 'keydown':
            key = e.key;
            checkInputFor(key);
            break;
        case 'click':
            key = e.target.id;
            checkInputFor(key);
            break;
    }
};

// Überprüft Eingabe...
const checkInputFor = (key) => {
    const pattern = /[A-Za-z]/;
    // überprüfung nach e.key === Buchstabe und kein Wort
    if (pattern.test(key) && (key.length < 2)) {
         
        // auf maximale Länge
        if (arrayGuess.length < maxLength) {
            inputWord(key);
            putLetterIn(arrayGuess, roundCounter);
        };
    }

    // auf "Backspace"-Eingabe
    if (key === "Backspace") {
        deleteLastLetter();
        removeLetter(arrayGuess);
    }

    // mit "Enter" und mindestlänge Vorhanden Wort auswerten
    // if (e.key === "Enter" && input.innerHTML.length == maxLength) {
    if (key === "Enter" && arrayGuess.length == maxLength) {
        console.log('Wort auswerten ' + arrayGuess);
        checkGuess(word, arrayGuess);
        arrayGuess = [];
        roundCounter++
        round(roundCounter);
    }
};

init();