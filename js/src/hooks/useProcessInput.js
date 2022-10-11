import { useReducer, useState } from 'react';

export function useProcessInput() {
  const [checkedInput, setCheckedInput] = useState({});

  // useReducer
  // Die Eingabe wird über die selbst geschriebene "Reducer"-Funktion (processInput) verarbeitet.
  // Aufgerufen wird die Funktion über die setArrayGuess-Funktion.
  const [arrayGuess, dispatchArrayGuess] = useReducer(processInput, []);

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

      if (!response.ok) {
        console.log('Das Wort gibt es nicht');
        setCheckedInput({ isGuessWordCorrect: response.ok, arrayGuess });
        console.log(checkedInput);
        // throw new Error('Fehler beim Laden der Daten');
      }

      const jsonData = await response.json();

      if (jsonData.Response === 'False') {
        throw new Error(jsonData.Error);
      }

      setCheckedInput({ isGuessWordCorrect: response.ok, arrayGuess });
      console.log(checkedInput);
    } catch (error) {
      console.log(error);
    }
  }

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
        return arrayGuess;

      case pattern.test(message.input) &&
        message.input.length < 2 &&
        arrayGuess.length < maxLengthArray:
        return [...arrayGuess, message.input];

      case message.input === 'Backspace':
        console.log(arrayGuess);
        return arrayGuess.slice(0, arrayGuess.length - 1);
    }
    return arrayGuess;
  }
  return { arrayGuess, dispatchArrayGuess, checkedInput };
}
