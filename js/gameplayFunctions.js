'use strict';

import { $, $$ } from './helpers/helpers';

// Vergleicht das eingegebene Wort (arrayGuess) mit dem gesuchten Wort aus der 'Datenbank' (searchedWord)
export function compareArrayGuessWithSearchedWord(
  arrayGuess,
  searchedWord,
  currentRound
) {
  arrayGuess.map((el, index) => {
    switch (true) {
      case el === searchedWord[index]:
        addRightPlaceClassTo(currentRound, arrayGuess, index);
        break;
      case searchedWord.includes(el):
        addWrongPlaceClassTo(currentRound, arrayGuess, index);
        break;
      case !searchedWord.includes(el):
        addWrongClassTo(currentRound, arrayGuess, index);
        break;
    }
  });
}

// fügt der LetterBox und dem Key von dem Virtualkeyboard die Klasse right-place hinzu
function addRightPlaceClassTo(currentRound, arrayGuess, index) {
  $$('.boxLetterContainer')[currentRound].childNodes[index].classList.add(
    'rightPlace'
  );

  const key = arrayGuess[index];
  if ($(`#${key}`).classList.contains('wrongPlace')) {
    $(`#${key}`).classList.remove('wrongPlace');
  }
  $(`#${key}`).classList.add('rightPlace');
}

// fügt der LetterBox und dem Key von dem Virtualkeyboard die Klasse wrong-place hinzu
function addWrongPlaceClassTo(currentRound, arrayGuess, index) {
  $$('.boxLetterContainer')[currentRound].childNodes[index].classList.add(
    'wrongPlace'
  );

  const key = arrayGuess[index];
  if (!$(`#${key}`).classList.contains('rightPlace')) {
    $(`#${key}`).classList.add('wrongPlace');
  }
}

// fügt der LetterBox und dem Key von dem Virtualkeyboard die Klasse wrong hinzu
function addWrongClassTo(currentRound, arrayGuess, index) {
  $$('.boxLetterContainer')[currentRound].childNodes[index].classList.add(
    'wrong'
  );

  const key = arrayGuess[index];
  $(`#${key}`).classList.add('wrong');
}

// css-Klassen von der Auswertung des Wortes von allen LetterBoxen und keys entfernen
export function removeClassFrom() {
  $$('.boxLetter').forEach((el) => {
    el.classList.remove('rightPlace');
    el.classList.remove('wrongPlace');
    el.classList.remove('wrong');
  });

  $$('.key').forEach((el) => {
    el.classList.remove('rightPlace');
    el.classList.remove('wrongPlace');
    el.classList.remove('wrong');
  });
}

// TODO: Refactoring
// Entfernt altes Wort aus dem Array und wählt eine neues Wort aus.
// Wöhlt zufällig ein Wort aus dem Array aus
export function getNewWord(array, oldWord = null) {
  if (oldWord !== null) {
    const indexPlayedWord = array.indexOf(oldWord);
    array.splice(indexPlayedWord, 1);
    setArrayToLocalStorage(array);
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  console.log(array[randomIndex]);
  return array[randomIndex];
}

// speichert ausgewähltes bzw. zuletzt gewähltes Theme im LocalStorage
export function setArrayToLocalStorage(array) {
  localStorage.setItem('wordleArray', JSON.stringify(array));
}

// überprüft ob es einen alten Spielstand im localStorage gibt und gibt diesen als Array zurück.
export function getArrayFromStorage(key) {
  const storedArray = JSON.parse(localStorage.getItem(key));
  return storedArray !== '' ? storedArray : '';
}
