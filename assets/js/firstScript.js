'use strict';
// === DOM & VARS ===
const $ = (q) => document.querySelector(q)
const $$ = (q) => document.querySelectorAll(q)

// guess-Wort
let arrayGuess = [];
let counterRound = 1;
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
const btnNewGame = $$('.btn-NewGame');
const btnShowWord = $('#btn-showWord');

// === INIT =========
const init = () => {
    addKeyhandler();
    addClickEventOnKey();
    addBtnHandlerShowWord();
};


// === EVENTS & XHR =======
const addKeyhandler = () => document.addEventListener('keydown', checksGetsLetterFromInput);
const addClickEventOnKey = () => allKeys.forEach(key => key.addEventListener('click', checksGetsLetterFromInput));
const addBtnHandlerNewGame = () => btnNewGame.forEach(btn => btn.addEventListener('click', newGame));
const addBtnHandlerShowWord = () => btnShowWord.addEventListener('click', showWordInUnsuccessfulNotification);

// === FUNCTIONS ====
// showWord
const showWordInUnsuccessfulNotification = (e) => {
    e.target.style.display = 'none';
    $('#searchedWord').style.display = 'block';
}

const hideWordInUnsuccessfulNotification = () => {
    $('#btn-showWord').style.display = 'block';
    $('#searchedWord').style.display = 'none';
} 

// neues Spiel 
const newGame = (selector) => {
    console.log('New Game');
    arrayGuess = [];
    counterRound = 1;
    currentRound = 'first';
    allOutputs.forEach(output => output.innerHTML = '');
    allOutputs.forEach(output => removeClass(output)); 
    allKeys.forEach(key => removeClass(key));

    // Abfrage ob das gespielte ungelöste Wort am Ende aufgelöst wurde oder nicht
    if (wasWordrevealed() || winningRound()) {
        console.log(wasWordrevealed());
        console.log(winningRound());
        // current arrayWords wird ohne das gespielte Wort dem localStorage hinzugefügt  
        setLocalStorage(arrayWords);
        word = getWordFromArray(arrayWords);
    } else {
        // gespieltes Wort wird an das Ende von arrayWords hinzugefügt, da es am Ende nicht aufgelöst wurde
        console.log(wasWordrevealed())
        arrayWords.push(word);
        setLocalStorage(arrayWords);
        word = getWordFromArray(arrayWords);
    };

    // schließt notification Fenster
    closeNotification(selector.currentTarget.parentElement.id);
    // checks if the word was shown at the end of the last unsuccessful round and hides it
    ($('#searchedWord').style.display === 'block') ? hideWordInUnsuccessfulNotification() : '';
};

// überprüft ob das Wort am Ende des Spiels vom Spieler aufgelöst wurde oder nicht
const wasWordrevealed = () => ($('#searchedWord').style.display === 'block') ? true : false;

// Überprüft ob das Spiel gewonnen wurde oder nicht
const winningRound = () => (successfulNotification.style.display === 'block') ? true : false;

// entfernt alle Klassen, die eine Spielrunde zuvor zugeordnet wurden
const removeClass = (element) => {
    element.classList.remove('wrongPlace');
    element.classList.remove('rightPlace');
    element.classList.remove('wrong');
};

// fügt Eingabe dem Array hinzu
const inputWord = (letter) => arrayGuess.push(letter.toUpperCase());

// löscht letzte Eingabe aus Array
const deleteLastLetter = () => arrayGuess.pop();

// put letter in letterboard
const putLetterIn = (arrayGuess, counterRound) => {
    currentRound = round(counterRound)
    $$('#' + currentRound + ' > div')[arrayGuess.length - 1].innerHTML = arrayGuess[arrayGuess.length - 1];
};

// remove letter from letterboard
const removeLetter = (arrayGuess) => idRoundSelector(counterRound)[arrayGuess.length].innerHTML = '';

// nächste Runde 
const round = (counterRound) => {
    let roundSelector = $('.letterContainer > div:nth-child(' + counterRound + ')').id;
    return roundSelector;
};

// Rundenabhängiger id-Selector in Abhängigkeit vom Rundenzähler 
const idRoundSelector = (counterRound) => {
    currentRound = round(counterRound);
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
    };
};

// Initiert nächste Raterunde 
const nextRound = () => {
    // Solange das Spiel nicht in der letzten Runde ist: 
    if (counterRound < 6) {
         // arrayGuess leeren
        arrayGuess = [];
         // counterRound um eins erhöhen
        counterRound++;
        // nächste Runde einleiten
        round(counterRound);
    } 
    return
};

// Überprüft Eingabe...
const checkInputFor = (key) => {
    const pattern = /[A-Za-z]/;
    // überprüfung nach e.key === Buchstabe und kein Wort
    if (pattern.test(key) && (key.length < 2)) {
         
        // auf maximale Länge
        if (arrayGuess.length < maxLength) {
            inputWord(key);
            putLetterIn(arrayGuess, counterRound);
        };
    }

    // auf "Backspace"-Eingabe
    if (key === "Backspace") {
        deleteLastLetter();
        removeLetter(arrayGuess);
    }

    // AUSWERTEN: mit "Enter" und mindestlänge Vorhanden Wort auswerten
    if ((key === "Enter" && arrayGuess.length == maxLength)) {
        existingWord(arrayGuess);
    } 
};

init();
