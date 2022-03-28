'use strict'
let word = 'target';

const checkLetter = (word, guess) => {
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

// TODO: falls or
// Funktionen für farbliche Auswertung virutell Keyboard
const rightKey = (key) => {
    key = key.toLowerCase();
    if ($(`#${key}`).classList.contains('wrongPlace')) {
        $(`#${key}`).classList.remove('wrongPlace');
    }
    $(`#${key}`).classList.add('rightPlace');
}

const wrongPlaceKey = (key) => {
    key = key.toLowerCase();
    $(`#${key}`).classList.add('wrongPlace');
} 

const wrongKey = (key) => {
    key = key.toLowerCase();
    $(`#${key}`).classList.add('wrong');
}

// TODO: Farbenauswähle(grün, orange, lightGrey)
// add class "rightPlace" for correct place and letter
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