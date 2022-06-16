'use strict';
// Arrays with words and played words 
const arrayWords = ['result', 'target', 'flying', 'random'];
const arrayPlayedWords = [];

const getWordFromArray = (array) => {
    const word = array.shift();
    return word;
};

// wenn das Wort nicht erraten wurde, wird es wieder dem arrayWords hinzugefügt 
const pushWordInArray = (word, array) => {
    array.push(word);
};