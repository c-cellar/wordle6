'use strict'
let word = 'gunman';

const checkLetter = (word, guess) => {
    let index = 0;
    const searchedWord = word.toUpperCase().split('');
    // const guessWord = guess.toUpperCase().split('');
    const guessWord = guess;

    while (index < 6) {
        if (guessWord[index] === searchedWord[index]) {
            greenLetter(index);
        } else if (searchedWord.includes(guessWord[index])) { 
            yellowLetter(index);
        } else (
            greyLetter(index)
        )
        index++;
    } 
    return guessWord[index];
};

// TODO: Farbenauswähle(grün, orange, lightGrey)
// Output div.letter für korrekte Position und Buchstaben
const greenLetter = (index) => {
    idRoundSelector(roundCounter)[index].style.background = 'green';
    idRoundSelector(roundCounter)[index].style.color = 'white';
};

// Output div.letter für korrekter Buchstaben an falscher Position
const yellowLetter = (index) => {
    idRoundSelector(roundCounter)[index].style.background = 'orange';
    idRoundSelector(roundCounter)[index].style.color = 'white';
    // console.log('ist im gesuchten Word vorhanden => GELB ' + letterFromGuess  + ':' + index);
};

// Output div.letter für flasche Buchstaben
const greyLetter = (index) => {
    idRoundSelector(roundCounter)[index].style.background = 'lightGrey';
    idRoundSelector(roundCounter)[index].style.color = 'white';
    // console.log('ist nicht im Word vorhanden => GRAU ' + letterFromGuess  + ':' + index);
};

// checkLetter(word, guess);