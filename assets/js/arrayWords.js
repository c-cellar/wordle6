'use strict';
// Arrays with words and played words 
let arrayWords = [
                    'result', 
                    'target', 
                    'flying', 
                    'random', 
                    'strong', 
                    'breath', 
                    'flinch', 
                    'animal', 
                    'pretty', 
                    'danger',
                    'resort',
                    'counts',
                    'goalie',
                    'resets',
                    'driver'
                ];

const getWordFromArray = () => {
    // set LocalStorage(array)
    // array with words stored to localStorage
    if (getArrayFromLocalStorage() === null) {
        // console.log('keine Daten vorhanden und Array aus script verwenden')
        const word = arrayWords.shift();
        return word
    }

    arrayWords = getArrayFromLocalStorage();
    // console.log('wort aus localstorage genommen');
    const word = arrayWords.shift();
    return word;
};

// wenn das Wort nicht erraten wurde, wird es wieder dem arrayWords hinzugefügt 
const pushWordInArray = (word, array) => {
    array.push(word);
};