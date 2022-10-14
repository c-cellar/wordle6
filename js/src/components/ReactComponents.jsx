import { useEffect, useState } from 'react';
import arrayWords from '../../arrayWords';
import { useProcessInput } from '../hooks/useProcessInput';

// Components
import ContainerLetters from './ContainerLetters';
import Keyboard from './Keyboard';

export default function ReactComponents() {
  const [searchedWord, setSearchedWord] = useState('');
  console.log(searchedWord);

  //-------- Custom Hook ------------- (return)
  const {
    arrayGuess,
    dispatchArrayGuess,
    currentRound,
    firstRound,
    secondRound,
    thirdRound,
    fourthRound,
    fifthRound,
    sixthRound,
    checkedInput,
    setCheckedInput,
  } = useProcessInput();

  // keyHandler on document für die Eingabe mit der Tastatur
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      dispatchArrayGuess({ inputType: e.type, input: e.key });
    });

    setSearchedWord(arrayWords[0]);
  }, []);

  return (
    <div>
      <ContainerLetters
        arrayGuess={arrayGuess}
        currentRound={currentRound}
        firstRound={firstRound}
        secondRound={secondRound}
        thirdRound={thirdRound}
        fourthRound={fourthRound}
        fifthRound={fifthRound}
        sixthRound={sixthRound}
        checkedInput={checkedInput}
        setCheckedInput={setCheckedInput}
      />
      <Keyboard dispatchArrayGuess={dispatchArrayGuess} />
    </div>
  );
}

// TODO: guessWord mit searchedWord vergleichen.
