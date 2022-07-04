'use strict';
// === DOM & VARS ===
const notification = $('#noWord-notification');
const noWord = $('#noWord');
const successfulNotification = $('#successful');
const unsuccessfulNotification = $('#unsuccessful');


// === FUNCTIONS ====
// notification for a successful game
const showSuccessfulNotification = (word, roundCounter) => {
    successfulNotification.style.display = 'block';
    $('#winningWord').innerHTML = word;
    $('#rounds').innerHTML = roundCounter;
}

// notification for a unlisted word
const noWordNotification = (guessWord) => {
    notification.style.display = 'block';
    noWord.innerHTML = guessWord;
};

// close notification 
const closeNotification = (selector) => {
    $(`#${selector}`).style.display = 'none';
};

// automatische Ein- und Ausblenden der unlisted word notification
const blendInAndOutNoWordNotification = (guessWord) => {
    noWordNotification(guessWord);
    setTimeout(() => closeNotification(notification.id), 1800);
};

// notification for unsuccessful round
const showUnsuccessfulNotification = (word) => {
    word = word.toUpperCase();
    unsuccessfulNotification.style.display = 'block';
    $('#searchedWord').innerHTML = word;
}