'use strict';
// set local storage
const setLocalStorage = (array) => {
    localStorage.setItem('unplayedWords', JSON.stringify(array));
} 

// get Word from local storage
const getArrayFromLocalStorage = () => {
    const myWordsFromStorage = JSON.parse(localStorage.getItem('unplayedWords'));
    console.log(myWordsFromStorage);
    return myWordsFromStorage;
};

// getWordFromLocalStorage(2);