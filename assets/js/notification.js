'use strict';
// === DOM & VARS ===
const notification = $('#notification');
const noWord = $('#noWord');
const winningNotification = $('#win-notification')


// === FUNCTIONS ====
// Gewinn vom Spiel Hinweis
const showWinningNotification = (word, roundCounter) => {
    winningNotification.style.display = 'block';
    $('#winningWord').innerHTML = word;
    $('#rounds').innerHTML = roundCounter;
}

// "kein Wort" Hinweis einblenden
const noWordNotification = (guessWord) => {
    notification.style.display = 'block';
    noWord.innerHTML = guessWord;
};
// Hinweis Ausblenden
const closeNotification = (selector) => {
    selector.style.display = 'none';
};

const blendInAndOutNoWordNotification = (guessWord) => {
    noWordNotification(guessWord);
    setTimeout(() => closeNotification(notification), 1800);
};