'use strict'
let word = 'gunman';
let guess = 'target';
// let guess = 'gdfnam';
let guessTwo = 'gunman';

const checkLetter = (word, guess) => {
    let index = 0;
    const searchedWord = word.split('');
    const guessWord = guess.split('');

    while (index < 6) {
        if (guessWord[index] === searchedWord[index]) {
            greenLetter(guessWord[index], index);
        } else if (searchedWord.includes(guessWord[index])) { 
            yellowLetter(guessWord[index], index);
        } else (
            greyLetter(guessWord[index], index)
        )
        index++;
    } 
    return guessWord[index];
};

const greenLetter = (letterFromGuess, index) => {
    console.log('sind gleich => GRÜN ' + letterFromGuess + ':' + index);
}

const yellowLetter = (letterFromGuess, index) => {
    console.log('ist im gesuchten Word vorhanden => GELB ' + letterFromGuess  + ':' + index);
}

const greyLetter = (letterFromGuess, index) => {
    console.log('ist nicht im Word vorhanden => GRAU ' + letterFromGuess  + ':' + index);
}

checkLetter(word, guess);