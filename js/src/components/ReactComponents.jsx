import { useEffect, useState, useReducer } from 'react';
import arrayWords from '../../arrayWords';

// Components
import ContainerLetters from './ContainerLetters';
import Keyboard from './Keyboard';

export default function ReactComponents() {
  // useReducer
  // Die Eingabe wird über die selbst geschriebene "Reducer"-Funktion (processInput) verarbeitet.
  // Aufgerufen wird die Funktion über die setArrayGuess-Funktion.
  const [arrayGuess, setArrayGuess] = useReducer(processInput, []);

  // useState
  // Gesuchtes Wort wird beim Laden der Seite in den State "searchedWord" abgelegt.
  const [searchedWord, setSearchedWord] = useState(arrayWords[0]);

  // keyHandler on document für die Eingabe mit der Tastatur
  useEffect(() => {
    document.addEventListener('keyup', (e) => {
      setArrayGuess({ inputType: e.type, input: e.key });
    });

    // // localStorage
    // localStorage.setItem('unplayedWords', JSON.stringify(searchedWord)),
    //   [searchedWord];
  }, []);

  return (
    <div>
      <ContainerLetters arrayGuess={arrayGuess} />
      <Keyboard arrayGuess={arrayGuess} setArrayGuess={setArrayGuess} />
    </div>
  );
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
      InputIsAExistingWord(arrayGuess);
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
function InputIsAExistingWord(arrayGuess) {
  const guessWord = arrayGuess.join('');

  async function fetchDictionary() {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${guessWord}`
      );

      if (!response.ok) {
        throw new Error('Fehler beim Laden der Daten');
      }

      const jsonData = await response.json();

      console.log(jsonData);
      if (jsonData.Response === 'False') {
        throw new Error(jsonData.Error);
      }

      // setMovies(jsonData.Search);
    } catch (error) {
      console.log(error);
      // setMovies([]);
    }
  }

  fetchDictionary();
}

// TODO: guessWord mit searchedWord vergleichen.
