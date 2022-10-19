'use strict';
// Vergleicht das eingegebene Wort (arrayGuess) mit dem gesuchten Wort aus der 'Datenbank' (searchedWord)
export function compareArrayGuessWithSearchedWord(
  arrayGuess,
  searchedWord,
  currentRound
) {
  arrayGuess.map((el, index) => {
    switch (true) {
      case el === searchedWord[index]:
        console.log('ich bin grün');
        break;
      case searchedWord.includes(el):
        console.log('ich bin orange');
        break;
      case !searchedWord.includes(el):
        console.log('ich bin grau!');
        break;
    }
  });
}

function addCorrectPlaceClassTo(currentRound) {
  console.log('fügt der LetterBox die Klasse correct-place hinzu');
}

function addWrongPlaceClassTo(currentRound) {
  console.log('fügt der LetterBox die Klasse wrong-place hinzu');
}

function addWrongClassTo(currentRound) {
  console.log('fügt der LetterBox die Klasse wrong hinzu');
}
