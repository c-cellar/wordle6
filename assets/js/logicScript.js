'use strict'
// ====== VAR =======
let word = 'tamara';
const green = 'rgb(14, 128, 20)';
const yellow = 'rgb(226, 188, 17)';
const grey = 'rgb(124, 142, 160)';

// ====== FUNCTIONS =======
// Auswertung von guess-word (verlgeich word mit guess-word)
const checkGuess = (word, guess) => {
    let index = 0;
    const searchedWord = word.toUpperCase().split('');
    const guessWord = guess;

    while (index < 6) {
        if (guessWord[index] === searchedWord[index]) {
            rightPlace(index);
            rightKey(guessWord[index]);
        } else if (searchedWord.includes(guessWord[index])) { 
            wrongPlace(index);
            wrongPlaceKey(guessWord[index]);
        } else {
            wrong(index);
            wrongKey(guessWord[index]);
        }
        index++;
    } 
    return guessWord[index];
};

// Klassen für Funktionen für farbliche Auswertung vom virutellen KEYBOARD hinzufügen bzw. entfernen
// get GREEN background
const rightKey = (key) => {
    key = key.toLowerCase();
    if ($(`#${key}`).classList.contains('wrongPlace')) {
        $(`#${key}`).classList.remove('wrongPlace');
        $(`#${key}`).classList.remove('wrongPlace');
    }
    $(`#${key}`).classList.add('rightPlace');
}

// get YELLOW background
const wrongPlaceKey = (key) => {
    key = key.toLowerCase();
    $(`#${key}`).classList.remove('standard');
    $(`#${key}`).classList.add('wrongPlace');
} 

// get GREY background
const wrongKey = (key) => {
    key = key.toLowerCase();
    $(`#${key}`).classList.remove('standard');
    $(`#${key}`).classList.add('wrong');
}

// Klassen für "Letterboard" für farbliche Auswertung hinzufügen oder entfernen
const rightPlace = (index) => {
    idRoundSelector(roundCounter)[index].classList.add('rightPlace');
};

// add class "wrongPlace"
const wrongPlace = (index) => {
    idRoundSelector(roundCounter)[index].classList.add('wrongPlace');
};

// add class "wrong"
const wrong = (index) => {
    idRoundSelector(roundCounter)[index].classList.add('wrong');
};

// checkLetter(word, guess);