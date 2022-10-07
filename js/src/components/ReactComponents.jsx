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
  // TODO: guessWord mit searchedWord vergleichen.
  // TODO: arrayGuess mit digitaler und manueller Eingabe füllen.
  // const [arrayGuess, setArrayGuess] = useState([]);

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

  switch (message.inputType) {
    case 'keyup':
      console.log(message.inputType);
      return [...arrayGuess, message.input];
    case 'click':
      console.log(message.inputType);
      return [...arrayGuess, message.input];
  }

  // // Überprüft Eingabe...
  // const checkInputFor = (inputKeyButton) => {
  //   const pattern = /[A-Za-z]/;
  //   // überprüfung nach e.key === Buchstabe und kein Wort
  //   if (pattern.test(inputKeyButton) && inputKeyButton.length < 2) {
  //     // auf maximale Länge
  //     if (arrayGuess.length < maxLength) {
  //       // inputWord(inputKeyButton);
  //       // putLetterIn(arrayGuess, counterRound);
  //     }
  //   }

  //   // auf "Backspace"-Eingabe
  //   if (inputKeyButton === 'Backspace') {
  //     deleteLastLetter();
  //     removeLetter(arrayGuess);
  //     // console.log('RemoveLetter');
  //   }

  //   // AUSWERTEN: mit "Enter" und mindestlänge Vorhanden Wort auswerten
  //   if (inputKeyButton === 'Enter' && arrayGuess.length == maxLength) {
  //     existingWord(arrayGuess);
  //   }
  // };
}
