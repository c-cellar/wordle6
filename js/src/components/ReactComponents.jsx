import arrayWords from '../../arrayWords';
import { openMenu } from '../../burgerMenuFunction';
import { viewHeight } from '../../viewHeight';
import { $ } from '../../helpers/helpers';
import {
  addClassToElementsFor,
  getThemeFromStorage,
  // selectedThemeToLocalStorage,
  // updateTheme,
} from '../../themeSelection';
import {
  getArrayFromStorage,
  setArrayToLocalStorage,
  getNewWord,
} from '../../gameplayFunctions';

// Hooks
import { useEffect, useLayoutEffect, useState } from 'react';
import { useProcessInput } from '../hooks/useProcessInput';

// Components
import Header from './Header';
import ContainerLetters from './ContainerLetters';
import Keyboard from './Keyboard';
import Notifications from './Notifications';
import Modal from './Modal';

export default function ReactComponents() {
  const [showModal, setShowModal] = useState(true);
  const [colorTheme, setColorTheme] = useState(getThemeFromStorage());

  //-------- Custom Hook(Rückgaben) -------------
  const {
    searchedWord,
    arrayGuess,
    currentRound,
    guessWordRound,
    statusGame,
    userWordleGuess,
    setSearchedWord,
    dispatchUserInput,
    setCurrentRound,
    setStatusGame,
    setGuessWordRound,
  } = useProcessInput();

  useLayoutEffect(() => {
    // get viewheight with javascript to avoid problem with vh in mobile browsers (safari, chrome)
    viewHeight();
    window.addEventListener('resize', viewHeight);
  });

  useEffect(() => {
    // keyHandler on document for keyboard input
    document.addEventListener('keyup', (e) =>
      dispatchUserInput({ input: e.key })
    );

    $('.hamburger-menu-icon').addEventListener('click', () => openMenu());

    // zuweisen des Themes beim ersten Laden der Application
    addClassToElementsFor(colorTheme);

    // Wird aufgerufen sobald kein Wert im localStorage gefunden wurde
    if (getArrayFromStorage('wordleArray') === null) {
      setArrayToLocalStorage(arrayWords);
      setSearchedWord(getNewWord(arrayWords));
      return;
    }

    const arrayFromStorage = getArrayFromStorage('wordleArray');
    setSearchedWord(getNewWord(arrayFromStorage));
  }, []);

  return (
    <div className="component-wrapper">
      {showModal && <Modal setShowModal={setShowModal} />}
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
        userWordleGuess={userWordleGuess}
        setCurrentRound={setCurrentRound}
        setStatusGame={setStatusGame}
        setGuessWordRound={setGuessWordRound}
        setSearchedWord={setSearchedWord}
      />
      <Keyboard dispatchUserInput={dispatchUserInput} />
    </div>
  );
}
