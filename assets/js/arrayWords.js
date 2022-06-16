'use strict';
// Arrays with words and played words 
const arrayWords = ['result', 'target', 'flying', 'random'];
const arrayPlayedWords = [];


const getWordFromArray = (array) => {
    const word = array.pop();
    return word;
};

