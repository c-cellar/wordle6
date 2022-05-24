'use strict';
// === DOM & VARS ===

// Selector
const notification = $('#notification');
const noWord = $('#noWord');

// === INIT =========


// === EVENTS & XHR =======


// === FUNCTIONS ====
// hinweis einblenden
const showNotification = (guessWord) => {
    notification.style.display = 'block';
    noWord.innerHTML = guessWord;
};
// hinweis ausblenden 
const closeNotification = () => {
    notification.style.display = 'none';
};

const blendInAndOutNotification = (guessWord) => {
    showNotification(guessWord)

    setTimeout(closeNotification, 2000);
};