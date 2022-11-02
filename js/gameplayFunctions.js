'use strict';
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

// Selektor
const $ = (q) => document.querySelector(q);
const $$ = (q) => document.querySelectorAll(q);

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

// Entfernt altes Wort aus dem Array und wählt eine neues Wort aus.
// Bonus: wöhlt zufällig ein Wort aus dem Array aus
export function getNewWord(oldWord, array) {
  const indexPlayedWord = array.indexOf(oldWord);
  array.splice(indexPlayedWord, 1);

  const randomIndex = Math.floor(Math.random() * array.length);
  // console.log(array);
  // console.log(array[randomIndex]);
  return array[randomIndex];
}
