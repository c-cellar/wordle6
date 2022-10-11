import { useEffect, useState } from 'react';
import arrayWords from '../../arrayWords';
import { useProcessInput } from '../hooks/useProcessInput';

// Components
import ContainerLetters from './ContainerLetters';
import Keyboard from './Keyboard';

export default function ReactComponents() {
  const [searchedWord, setSearchedWord] = useState('');
  console.log(searchedWord);

  //-------- Custom Hook ----------------
  const { arrayGuess, dispatchArrayGuess, checkedInput } = useProcessInput();

  // keyHandler on document für die Eingabe mit der Tastatur
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      dispatchArrayGuess({ inputType: e.type, input: e.key });
    });

    setSearchedWord(arrayWords[0]);
  }, []);

  return (
    <div>
      <ContainerLetters arrayGuess={arrayGuess} checkedInput={checkedInput} />
      <Keyboard dispatchArrayGuess={dispatchArrayGuess} />
    </div>
  );
}

// TODO: guessWord mit searchedWord vergleichen.
