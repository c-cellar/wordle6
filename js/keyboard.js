'use strict';

const $$ = (q) => document.querySelectorAll(q);

// const allKeys = $$('.key');

// checks letter input and getLetter from Input
export function getsAndChecksLetterFromInput(e) {
  let key = '';
  switch (e.type) {
    case 'keydown':
      key = e.key;
      checkInputFor(key);
      break;
    case 'click':
      key = e.target.id;
      checkInputFor(key);
      break;
  }
}

// Überprüft Eingabe...
const checkInputFor = (key) => {
  const pattern = /[A-Za-z]/;
  // überprüfung nach e.key === Buchstabe und kein Wort
  if (pattern.test(key) && key.length < 2) {
    // auf maximale Länge
    if (arrayGuess.length < maxLength) {
      inputWord(key);
      putLetterIn(arrayGuess, counterRound);
    }
  }
};

// fügt Eingabe dem Array hinzu
const inputWord = (letter) => arrayGuess.push(letter.toUpperCase());

// put letter in letterboard
const putLetterIn = (arrayGuess, counterRound) => {
  currentRound = round(counterRound);
  $$('#' + currentRound + ' > div')[arrayGuess.length - 1].innerHTML =
    arrayGuess[arrayGuess.length - 1];
};
