import { useReducer, useState } from 'react';
import { compareArrayGuessWithSearchedWord } from '../../gameplayFunctions';

export function useProcessInput() {
  const [searchedWord, setSearchedWord] = useState('');
  const [statusGame, setStatusGame] = useState(false); //=> ist false solange das Wort nicht erraten wurde

  // Rundenzähler: beinhaltet den State der akutellen Rate-Runde
  // Startwert für Rundenzähler ist 0
  const [currentRound, setCurrentRound] = useState(0);

  // contains the userInput(value) for each round(key) in an object.
  const [userGuessWords, setUserGuessWords] = useState(userGuessesRounds);

  // beinhaltet false sobald das Wort nicht im Dictionary vorhanden ist.
  const [userWordleGuess, setUserWordleGuess] = useState({
    isCorrect: true,
    word: '',
  });

  // useReducer-Hook
  const [arrayGuess, dispatchUserInput] = useReducer(processInput, []);

  // Verarbeitung der Eingabe bzw. vom empfangenen Message-Objekt
  // Bedingungen:
  // 1. Die maximale Anzahl der Elemente(Buchstaben) im "arrayGuess" ist 6.
  // 2. Es sind nur Buchstaben als Input erlaubt und werden verarbeitet.
  // 3. Ist die maximale Anzahl von Elementen im Array erreicht,
  //    - werden keine weiteren Buchstaben ins Array aufgenommen
  //    - keine weiteren Eingaben außer 'Backspace' und 'Enter' erlaubt
  function processInput(arrayGuess, userInput) {
    // nur der Input von Buchstaben wird weiterverarbeitet
    const pattern = /[A-Za-z]/;
    const maxLengthArray = 6;

    switch (true) {
      case userInput.input === 'Enter' && arrayGuess.length == 6:
        fetchDictionary(arrayGuess);
        arrayGuess = [];
        break;

      case pattern.test(userInput.input) &&
        userInput.input.length < 2 &&
        arrayGuess.length < maxLengthArray:
        return [...arrayGuess, userInput.input];

      case userInput.input === 'Backspace':
        return arrayGuess.slice(0, arrayGuess.length - 1);
    }
    return arrayGuess;
  }

  //Überprüft ob das Wort im Dictionary vorhanden ist.
  async function fetchDictionary(arrayGuess) {
    const wordleGuess = arrayGuess.join('');

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${wordleGuess}`
      );

      // wird durchgeführt sobald das eingebenen Wort nicht im Dictionary gefunden wird (false wird zu true)
      if (!response.ok) {
        setUserWordleGuess({ isCorrect: false, word: wordleGuess });
        setTimeout(
          () => setUserWordleGuess({ isCorrect: true, word: '' }),
          1800
        );
        throw new Error('Fehler beim Laden der Daten');
      }

      // Vergleicht das gesuchte Word mit dem eingegebenen Wort
      compareArrayGuessWithSearchedWord(arrayGuess, searchedWord, currentRound);

      // Überprüft ob das Wort erraten wurde und somit das Spiel gewonnen wurde
      checksForWin(searchedWord, wordleGuess);

      // setState für Ausgabe des Wortes in der gespielten Runde
      pushValideGuessWordToUserGuessWords(
        setUserGuessWords,
        userGuessWords,
        arrayGuess,
        currentRound
      );

      // Spielrunden Counter wird um eins erhöht für eine neue Eingabe
      incrementCounterForRounds();
    } catch (error) {
      // console.log(error);
    }
  }

  function checksForWin(searchedWord, wordleGuess) {
    searchedWord === wordleGuess ? setStatusGame(true) : null;
  }

  function pushValideGuessWordToUserGuessWords(
    setUserGuessWords,
    userGuessWords,
    arrayGuess,
    currentRound
  ) {
    switch (currentRound) {
      case 0:
        setUserGuessWords({ ...userGuessWords, one: arrayGuess });
        break;
      case 1:
        setUserGuessWords({ ...userGuessWords, two: arrayGuess });
        break;
      case 2:
        setUserGuessWords({ ...userGuessWords, three: arrayGuess });
        break;
      case 3:
        setUserGuessWords({ ...userGuessWords, four: arrayGuess });
        break;
      case 4:
        setUserGuessWords({ ...userGuessWords, five: arrayGuess });
        break;
      case 5:
        setUserGuessWords({ ...userGuessWords, six: arrayGuess });
        break;
    }
  }

  // Erhöht den Counter für gespielte Runden
  function incrementCounterForRounds() {
    setCurrentRound((currentCount) => currentCount + 1);
  }

  return {
    searchedWord,
    arrayGuess,
    currentRound,
    userGuessWords,
    statusGame,
    userWordleGuess,
    userGuessesRounds,
    setSearchedWord,
    dispatchUserInput,
    setCurrentRound,
    setStatusGame,
    setUserGuessWords,
  };
}

const userGuessesRounds = {
  one: [],
  two: [],
  three: [],
  four: [],
  five: [],
  six: [],
};
