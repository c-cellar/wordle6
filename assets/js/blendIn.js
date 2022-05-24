'use strict';
// === DOM & VARS ===

// Selector
const notification = $('#notification');
const noteBtn = $('#notification > button');

// === INIT =========


// === EVENTS & XHR =======


// === FUNCTIONS ====
// hinweis einblenden
const showNotification = () => {
    notification.style.display = 'block';
};
// hinweis ausblenden 
const closeNotification = () => {
    notification.style.display = 'none';
};