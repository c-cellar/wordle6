'use strict';
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

async function existingWord (arrayGuess) {
    const guessWord = arrayGuess.join('');

    await fetch(`${url}${guessWord}`) 
        .then(response => {
            console.log('das wort gibt es!')
            console.log(response.status);
            if (response.status === 200) {   
                checkGuess(word, arrayGuess);
                nextRound();
            } else {
                console.log('versuch es mal mit einem richtigen Wort');
                console.log(response.status);
                notification.innerHTML = `
                    <span class="wrongWord">${guessWord}</span>
                    <span>is not in used dictionary</span>
                `
                showNotification();
            }
    });
};


