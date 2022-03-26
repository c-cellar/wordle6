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

const greenLetter = (index) => {
    idRoundSelector(roundCounter)[index].style.background = 'green';
    idRoundSelector(roundCounter)[index].style.color = 'white';
};

const yellowLetter = (index) => {
    $$('.round > div')[index].style.background = 'orange';
    $$('.round > div')[index].style.color = 'white';
    // console.log('ist im gesuchten Word vorhanden => GELB ' + letterFromGuess  + ':' + index);
};

const greyLetter = (index) => {
    $$('.round > div')[index].style.background = 'grey';
    $$('.round > div')[index].style.color = 'white';
    // console.log('ist nicht im Word vorhanden => GRAU ' + letterFromGuess  + ':' + index);
};

// checkLetter(word, guess);