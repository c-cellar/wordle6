'use strict'
// ====== VAR =======
let word = 'result';
const green = 'rgb(14, 128, 20)';
const yellow = 'rgb(226, 188, 17)';
const grey = 'rgb(124, 142, 160)';

// ====== FUNCTIONS =======
// Auswertung von guess-word (verlgeich word mit searchedWord), wenn das guessWord existiert 
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

    // check for for win(successful) or lose(unsuccessful);
    if (word === (guess.join('').toLowerCase())) {
        showSuccessfulNotification(word, roundCounter);
        addBtnHandlerNewGame();
        return;
    } 
    

    return guessWord[index];
};

// Funktionen um den Keys des virutellen KEYBOARDs css-Klassen hinzuzufügen bzw. zu entfernen
// get GREEN background
const rightKey = (key) => {
    key = key.toLowerCase();
    if ($(`#${key}`).classList.contains('wrongPlace')) {
        $(`#${key}`).classList.remove('wrongPlace');
    }
    $(`#${key}`).classList.add('rightPlace');
}

// get YELLOW background
const wrongPlaceKey = (key) => {
    key = key.toLowerCase();
    if (!$(`#${key}`).classList.contains('rightPlace')) {
        $(`#${key}`).classList.remove('standard');
        $(`#${key}`).classList.add('wrongPlace');
        return;
    }
} 

// get GREY background
const wrongKey = (key) => {
    key = key.toLowerCase();
    $(`#${key}`).classList.remove('standard');
    $(`#${key}`).classList.add('wrong');
}

// css-Klassen für "Letterboard" für farbliche Auswertung hinzufügen oder entfernen
// css-Klassen müssen nicht entfernt werden, da die dem Element nur nach der Auswertung hinzugefügt werden. 
// add class "rightPlace"
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


// TODO: deutsches Wörterbuch: Button für Auswahl der Sprache (ändern der URL) 


