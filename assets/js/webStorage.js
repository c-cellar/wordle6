'use strict';
// use/set local storage for word array
const setLocalStorageArrayWords = (array) => {
    localStorage.setItem('unplayedWords', JSON.stringify(array));
}

// get word from local storage
const getArrayFromLocalStorage = () => {
    const myWordsFromStorage = JSON.parse(localStorage.getItem('unplayedWords'));
    return myWordsFromStorage;
};

// use/set local storage for word array 
const setLocalStorageTheme = () => {
    // get the name of the used theme (dark or light)
    const theme = html.classList

    // check if a key like theme already exist
    if (localStorage.getItem('theme')) {
        // delete already existing key and value
        localStorage.removeItem('theme');
    }

    localStorage.setItem('theme', JSON.stringify(theme));
}


// get last used theme 
const getLocalStorageTheme = () => {
    const theme = JSON.parse(localStorage.getItem('theme')); //=> objekt

    if (theme[0]) {
        // remove the "light" class 
        // before adding the theme class out of the storage
        html.classList.remove('light');

        html.classList.add(theme[0]);
        // console.log('theme welches geladen werden muss: ' + theme[0]);
    };
};
