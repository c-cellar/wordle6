import { openMenu } from '../../burgerMenuFunction';
import { viewHeight } from '../../viewHeight';
import { $ } from '../../helpers/helpers';
import {
  addClassToElementsFor,
  getThemeFromStorage,
} from '../../themeSelection';
import {
  getArrayFromStorage,
  setArrayToLocalStorage,
  getNewWord,
} from '../../gameplayFunctions';

import { getWordsFromDatabase } from '../../wordlist';

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

  const [loading, setLoading] = useState(false);
  const [databaseWordlist, setDatabaseWordlist] = useState(null);

  //-------- Custom Hook(Rückgaben) -------------
  const {
    searchedWord,
    arrayGuess,
    currentRound,
    userGuessWords,
    statusGame,
    userWordleGuess,
    userGuessesRounds,
    setSearchedWord,
    dispatchUserInput,
    setCurrentRound,
    setStatusGame,
    setUserGuessWords,
  } = useProcessInput();

  // window.addEventListener('load', () => {});
  const fetchData = async () => {
    // Wird aufgerufen sobald kein Wert im localStorage gefunden wurde
    setLoading(true);

    const arrayWordsDatabase = await getWordsFromDatabase();
    setDatabaseWordlist(arrayWordsDatabase);

    setLoading(false);
  };

  useLayoutEffect(() => {
    // get viewheight with javascript to avoid problem with vh in mobile browsers (safari, chrome)
    viewHeight();
    window.addEventListener('resize', viewHeight);
  });

  useEffect(() => {
    if (!loading) {
      if (getArrayFromStorage('wordleArray') === null) {
        setArrayToLocalStorage(databaseWordlist);
        setSearchedWord(getNewWord(databaseWordlist));
        return;
      }

      const arrayFromStorage = getArrayFromStorage('wordleArray');
      setSearchedWord(getNewWord(arrayFromStorage));
    }
  }, [loading]);

  useEffect(() => {
    if (!showModal) {
      fetchData();

      // keyHandler on document for keyboard input
      document.addEventListener('keyup', (e) =>
        dispatchUserInput({ input: e.key })
      );

      $('.hamburger-menu-icon').addEventListener('click', () => openMenu());

      // zuweisen des Themes beim ersten Laden der Application
      addClassToElementsFor(colorTheme);
    }
  }, [showModal]);

  return (
    <div className="component-wrapper">
      {showModal && <Modal setShowModal={setShowModal} />}
      <Header colorTheme={colorTheme} setColorTheme={setColorTheme} />
      <ContainerLetters
        arrayGuess={arrayGuess}
        currentRound={currentRound}
        userGuessWords={userGuessWords}
      />
      <Notifications
        colorTheme={colorTheme}
        searchedWord={searchedWord}
        statusGame={statusGame}
        currentRound={currentRound}
        userWordleGuess={userWordleGuess}
        userGuessesRounds={userGuessesRounds}
        setCurrentRound={setCurrentRound}
        setStatusGame={setStatusGame}
        setUserGuessWords={setUserGuessWords}
        setSearchedWord={setSearchedWord}
      />
      <Keyboard dispatchUserInput={dispatchUserInput} />
    </div>
  );
}
