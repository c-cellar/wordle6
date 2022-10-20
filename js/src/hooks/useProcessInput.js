import { useReducer, useState } from 'react';

import { compareArrayGuessWithSearchedWord } from '../../logicFunctions';

export function useProcessInput() {
  const [searchedWord, setSearchedWord] = useState('');
  const [statusGame, setStatusGame] = useState(false); //=> ist false solange das Wort nicht erraten wurde

  // Rundenzähler: beinhaltet den State der akutellen Rate-Runde
  // Startwert für Rundenzähler ist 0
  const [currentRound, setCurrentRound] = useState(0);
  const [firstRound, setFirstRound] = useState('');
  const [secondRound, setSecondRound] = useState('');
  const [thirdRound, setThirdRound] = useState('');
  const [fourthRound, setFourthRound] = useState('');
  const [fifthRound, setFifthRound] = useState('');
  const [sixthRound, setSixthRound] = useState('');

  // useReducer
  // Die Eingabe wird über die selbst geschriebene "Reducer"-Funktion (processInput) verarbeitet.
  // Aufgerufen wird die Funktion über die dispatchArrayGuess-Funktion.
  const [arrayGuess, dispatchArrayGuess] = useReducer(processInput, []);

  // Verarbeitung der Eingabe bzw. vom empfangenen Message-Objekt
  // Bedingungen:
  // 1. Die maximale Anzahl der Elemente(Buchstaben) im "arrayGuess" ist 6.
  // 2. Es sind nur Buchstaben als Input erlaubt und werden verarbeitet.
  // 3. Ist die maximale Anzahl von Elementen im Array erreicht,
  //    - werden keine weiteren Buchstaben ins Array aufgenommen
  //    - keine weiteren Eingaben außer 'Backspace' und 'Enter' erlaubt
  function processInput(arrayGuess, message) {
    // nur der Input von Buchstaben wird weiterverarbeitet
    const pattern = /[A-Za-z]/;
    const maxLengthArray = 6;

    switch (true) {
      case message.input === 'Enter' && arrayGuess.length == 6:
        fetchDictionary(arrayGuess);
        arrayGuess = [];
        return arrayGuess;

      case pattern.test(message.input) &&
        message.input.length < 2 &&
        arrayGuess.length < maxLengthArray:
        return [...arrayGuess, message.input];

      case message.input === 'Backspace':
        return arrayGuess.slice(0, arrayGuess.length - 1);
    }
    return arrayGuess;
  }

  //Überprüft ob das Wort im Dictionary vorhanden ist.
  async function fetchDictionary(arrayGuess) {
    if (!Array.isArray(arrayGuess)) {
      console.log('Ist kein Array!');
      return;
    }
    const wordToCheck = arrayGuess.join('');

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToCheck}`
      );

      // wird durchgeführt sobald das eingebenen Wort nicht im Dictionary gefunden wird
      if (!response.ok) {
        console.log('Das Wort gibt es nicht');
        throw new Error('Fehler beim Laden der Daten');
      }

      // wird durchgeführt wenn das Wort im Dictionary vorhanden ist
      if (response.ok) {
        console.log(
          'Das Wort gibt es. Bitte einmal hochzählen und Buchstaben des Wortes auswerten'
        );

        // Vergleicht das gesuchte Word mit dem eingegebenen Wort
        compareArrayGuessWithSearchedWord(
          arrayGuess,
          searchedWord,
          currentRound
        );

        // Überprüft ob das Wort erraten wurde und somit das Spiel gewonnen wurde
        if (searchedWord === wordToCheck) {
          console.log('Sie haben gewonnen');
          setStatusGame(true);
        }

        // setState für Ausgabe des Wortes in der gespielten Runde
        switch (currentRound) {
          case 0:
            setFirstRound(arrayGuess);
            break;
          case 1:
            setSecondRound(arrayGuess);
            break;
          case 2:
            setThirdRound(arrayGuess);
            break;
          case 3:
            setFourthRound(arrayGuess);
            break;
          case 4:
            setFifthRound(arrayGuess);
            break;
          case 5:
            setSixthRound(arrayGuess);
            break;
        }

        // Spielrunden Counter wird um eins erhöht für eine neue Eingabe
        incrementCounterForRounds();
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Erhöht den Counter für gespielte Runden
  function incrementCounterForRounds() {
    setCurrentRound((currentCount) => currentCount + 1);
  }

  return {
    arrayGuess,
    currentRound,
    firstRound,
    secondRound,
    thirdRound,
    fourthRound,
    fifthRound,
    sixthRound,
    statusGame,
    setSearchedWord,
    dispatchArrayGuess,
  };
}
