import arrayWords from '../../arrayWords';
import { openMenu } from '../../burgerMenuFunction';
import {
  addClassToElementsFor,
  getThemeFromStorage,
  selectedThemeToLocalStorage,
  updateTheme,
} from '../../themeSelection';
import {
  getArrayFromStorage,
  setArrayToLocalStorage,
  getNewWord,
} from '../../gameplayFunctions';

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

    // zuweisen des Themes beim ersten Laden der Application
    getThemeFromStorage();
    addClassToElementsFor(colorTheme);

    // gets the value from localStorage with key='wordleArray'
    // return null for 'empty' storage
    const isArrayInStorage = getArrayFromStorage('wordleArray');

    // Wird aufgerufen sobald kein Wert im localStorage gefunden wurde
    if (isArrayInStorage === null) {
      console.log('ich bin hier');
      updateTheme('light');
      selectedThemeToLocalStorage('light');
      setArrayToLocalStorage(arrayWords);
      setSearchedWord(getNewWord(arrayWords));
      return;
    }

    const arrayFromStorage = getArrayFromStorage('wordleArray');
    console.log(arrayFromStorage);
    setSearchedWord(getNewWord(arrayFromStorage));
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
