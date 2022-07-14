"use strict";
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

async function existingWord(arrayGuess) {
  const guessWord = arrayGuess.join("");

  await fetch(`${url}${guessWord}`)
    .then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        console.log("das wort gibt es!");
        checkGuess(word, arrayGuess);
        nextRound();
      } else {
        console.log("versuch es mal mit einem richtigen Wort");
        blendInAndOutNoWordNotification(guessWord);
      }
    })
    .catch((err) => console.log(err));
}

// TODO: API für deutsches Wörterbuch einbinden
