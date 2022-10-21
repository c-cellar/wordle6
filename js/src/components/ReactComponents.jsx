import arrayWords from '../../arrayWords';

// Hooks
import { useEffect } from 'react';
import { useProcessInput } from '../hooks/useProcessInput';

// Components
import ContainerLetters from './ContainerLetters';
import Keyboard from './Keyboard';
import Notifications from './Notifications';

export default function ReactComponents() {
  //-------- Custom Hook(Rückgaben) -------------
  const {
    searchedWord,
    arrayGuess,
    currentRound,
    firstRound,
    secondRound,
    thirdRound,
    fourthRound,
    fifthRound,
    sixthRound,
    statusGame,
    isACorrectWord,
    setSearchedWord,
    dispatchArrayGuess,
  } = useProcessInput();

  // keyHandler on document für die Eingabe mit der Tastatur
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      dispatchArrayGuess({ inputType: e.type, input: e.key });
    });

    setSearchedWord(arrayWords[0]);

    getSelectedTheme();
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
      />
      <Notifications
        searchedWord={searchedWord}
        statusGame={statusGame}
        currentRound={currentRound}
        isACorrectWord={isACorrectWord}
      />
      <Keyboard dispatchArrayGuess={dispatchArrayGuess} />
    </div>
  );
}

// checks which theme is/was selected
function getSelectedTheme() {
  document.documentElement.classList.length === 0
    ? document.documentElement.classList.add('light')
    : '';
}

// TODO: ausgewähltes Theme im Browser speichern und beim erneuten Laden der Seite auslesen
