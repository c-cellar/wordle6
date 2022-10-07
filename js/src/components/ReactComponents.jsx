import { useEffect, useState, useReducer } from 'react';
import arrayWords from '../../arrayWords';

// Components
import ContainerLetters from './ContainerLetters';
import Keyboard from './Keyboard';

export default function ReactComponents() {
  // useReducer
  //  Die Eingabe wird über die selbst geschriebene "Reducer"-Funktion (processInput) verarbeitet.
  // Aufgerufen wird die Funktion über die setArrayGuess-Funktion.
  const [arrayGuess, setArrayGuess] = useReducer(processInput, []);

  // useState
  // Gesuchtes Wort wird beim Laden der Seite in den State "searchedWord" abgelegt.
  const [searchedWord, setSearchedWord] = useState(arrayWords[0]);

  // keyHandler on document
  useEffect(() => {
    document.addEventListener('keyup', (e) => {
      setArrayGuess({ inputType: e.type, input: e.key });
    });

    // localStorage
    localStorage.setItem('unplayedWords', JSON.stringify(searchedWord)),
      [searchedWord];
  }, [searchedWord]);

  return (
    <div>
      <ContainerLetters arrayGuess={arrayGuess} />
      <Keyboard
        // getsAndChecksLetterFromInput={getsAndChecksLetterFromInput}
        arrayGuess={arrayGuess}
        setArrayGuess={setArrayGuess}
      />
    </div>
  );
}

// Verarbeitung der Eingabe bzw. vom empfangenen Message-Objekt
function processInput(arrayGuess, message) {
  console.log(message);

  const pattern = /[A-Za-z]/;

  switch (true) {
    case pattern.test(message.input) && message.input.length < 2:
      console.log('Buchstabe');
      return [...arrayGuess, message.input];
    case message.input === 'Backspace':
      console.log('Backspace');
      return arrayGuess.slice(0, arrayGuess.length - 1);
    case message.input === 'Enter':
      console.log('Enter');
      return (arrayGuess = []);
  }

  //   // AUSWERTEN: mit "Enter" und mindestlänge Vorhanden Wort auswerten
  //   if (inputKeyButton === 'Enter' && arrayGuess.length == maxLength) {
  //     existingWord(arrayGuess);
  //   }
  // };
}

// TODO: guessWord mit searchedWord vergleichen.
// TODO: arrayGuess undefined nach 'Enter'-Eingabe abfangen
