'use strict'
let word = 'gunman';
// let guess = 'target';
// let guess = 'gdfnam';
// let guess = 'gunman';

const checkLetter = (word, guess) => {
    let index = 0;
    const searchedWord = word.toUpperCase().split('');
    // const guessWord = guess.toUpperCase().split('');
    const guessWord = guess;

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

    $$('.round > div')[index].style.background = 'green';
    $$('.round > div')[index].style.color = 'white';

    // console.log($$('.round > div')[index].style);
    // console.log('sind gleich => GRÜN ' + letterFromGuess + ':' + index);
}

const yellowLetter = (letterFromGuess, index) => {
    
    $$('.round > div')[index].style.background = 'orange';
    $$('.round > div')[index].style.color = 'white';
    // console.log('ist im gesuchten Word vorhanden => GELB ' + letterFromGuess  + ':' + index);
}

const greyLetter = (letterFromGuess, index) => {

    $$('.round > div')[index].style.background = 'grey';
    $$('.round > div')[index].style.color = 'white';
    // console.log('ist nicht im Word vorhanden => GRAU ' + letterFromGuess  + ':' + index);
}

// checkLetter(word, guess);