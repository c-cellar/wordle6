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
    guessWordRound,
    statusGame,
    isACorrectWord,
    setSearchedWord,
    dispatchArrayGuess,
    setCurrentRound,
    setStatusGame,
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
        guessWordRound={guessWordRound}
      />
      <Notifications
        searchedWord={searchedWord}
        statusGame={statusGame}
        currentRound={currentRound}
        isACorrectWord={isACorrectWord}
        setCurrentRound={setCurrentRound}
        setStatusGame={setStatusGame}
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
