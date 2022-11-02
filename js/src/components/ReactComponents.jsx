import arrayWords from '../../arrayWords';
import { openMenu } from '../../burgerMenuFunction';
import {
  addClassToElementsFor,
  getThemeFromStorage,
} from '../../themeSelection';

// Hooks
import { useEffect, useState } from 'react';
import { useProcessInput } from '../hooks/useProcessInput';

// Components
import Header from './Header';
import ContainerLetters from './ContainerLetters';
import Keyboard from './Keyboard';
import Notifications from './Notifications';

export default function ReactComponents() {
  const [colorTheme, setColorTheme] = useState(getThemeFromStorage());
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
    setGuessWordRound,
  } = useProcessInput();

  // keyHandler on document für die Eingabe mit der Tastatur
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      dispatchArrayGuess({ inputType: e.type, input: e.key });
    });

    document
      .querySelector('.hamburger-menu-icon')
      .addEventListener('click', () => openMenu());

    // nimmt ein Wort aus dem Array
    setSearchedWord(arrayWords[0]);

    // zuweisen des Themes beim ersten Laden der Application
    getThemeFromStorage();
    addClassToElementsFor(colorTheme);
  }, []);

  return (
    <div>
      <Header colorTheme={colorTheme} setColorTheme={setColorTheme} />
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
        setGuessWordRound={setGuessWordRound}
        setSearchedWord={setSearchedWord}
      />
      <Keyboard dispatchArrayGuess={dispatchArrayGuess} />
    </div>
  );
}
