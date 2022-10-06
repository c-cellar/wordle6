import { useState } from 'react';
import arrayWords from '../../arrayWords';

// Components
import ContainerLetters from './ContainerLetters';
import Keyboard from './Keyboard';

// // Array mit Buchstaben die der Spieler eingegeben hat. Wird beim Start bzw. Beendigung eine gespielten Runde geleert
// let arrayGuess = [];

export default function ReactComponents() {
  const [searchedWord, setSearchedWord] = useState(arrayWords[0]);
  // Gesuchtes Wort wird beim Laden der Seite in den State "searchedWord" abgelegt.
  console.log(searchedWord);

  // TODO: guessWord mit searchedWord vergleichen.
  // TODO: arrayGuess mit digitaler und manueller Eingabe füllen.
  const [arrayGuess, setArrayGuess] = useState([]);

  return (
    <div>
      <ContainerLetters arrayGuess={arrayGuess} />
      <Keyboard setArrayGuess={setArrayGuess} />
    </div>
  );
}
