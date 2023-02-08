import objectGuessRounds from '../../objectGuessRounds';
import { useReducer, useState } from 'react';

import { compareArrayGuessWithSearchedWord } from '../../gameplayFunctions';

export function useProcessInput() {
  const [searchedWord, setSearchedWord] = useState('');
  const [statusGame, setStatusGame] = useState(false); //=> ist false solange das Wort nicht erraten wurde

  // Rundenzähler: beinhaltet den State der akutellen Rate-Runde
  // Startwert für Rundenzähler ist 0
  const [currentRound, setCurrentRound] = useState(0);

  // beinhaltet die Worter der einzelnen Raterunde
  const [guessWordRound, setGuessWordRound] = useState(objectGuessRounds);

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
        return arrayGuess;

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

      // wird durchgeführt wenn das Wort im Dictionary vorhanden ist (true)
      if (response.ok) {
        // Vergleicht das gesuchte Word mit dem eingegebenen Wort
        compareArrayGuessWithSearchedWord(
          arrayGuess,
          searchedWord,
          currentRound
        );

        // Überprüft ob das Wort erraten wurde und somit das Spiel gewonnen wurde
        if (searchedWord === wordleGuess) {
          console.log('Sie haben gewonnen');
          setStatusGame(true);
        }

        // setState für Ausgabe des Wortes in der gespielten Runde
        switch (currentRound) {
          case 0:
            setGuessWordRound({ ...guessWordRound, one: arrayGuess });
            break;
          case 1:
            setGuessWordRound({ ...guessWordRound, two: arrayGuess });
            // console.log(guessWordRound);
            break;
          case 2:
            setGuessWordRound({ ...guessWordRound, three: arrayGuess });
            // console.log(guessWordRound);
            break;
          case 3:
            setGuessWordRound({ ...guessWordRound, four: arrayGuess });
            // console.log(guessWordRound);
            break;
          case 4:
            setGuessWordRound({ ...guessWordRound, five: arrayGuess });
            // console.log(guessWordRound);
            break;
          case 5:
            setGuessWordRound({ ...guessWordRound, six: arrayGuess });
            // console.log(guessWordRound);
            break;
        }

        // Spielrunden Counter wird um eins erhöht für eine neue Eingabe
        incrementCounterForRounds();
      }
    } catch (error) {
      // console.log(error);
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
    guessWordRound,
    statusGame,
    userWordleGuess,
    setSearchedWord,
    dispatchUserInput,
    setCurrentRound,
    setStatusGame,
    setGuessWordRound,
  };
}
