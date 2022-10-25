import arrayWords from '../../arrayWords';
import { openMenu } from '../../burgerMenuFunction';

// Hooks
import { useEffect } from 'react';
import { useProcessInput } from '../hooks/useProcessInput';

// Components
import ContainerLetters from './ContainerLetters';
import Keyboard from './Keyboard';
import Notifications from './Notifications';
import Header from './Header';

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
    setGuessWordRound,
  } = useProcessInput();

  // keyHandler on document für die Eingabe mit der Tastatur
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      dispatchArrayGuess({ inputType: e.type, input: e.key });
    });

    setSearchedWord(arrayWords[0]);

    document
      .querySelector('.hamburger-menu-icon')
      .addEventListener('click', () => openMenu());

    const selectedTheme = getSelectedTheme();
    addClassToElementsFor(selectedTheme);
  }, []);

  return (
    <div>
      <Header />
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
      />
      <Keyboard dispatchArrayGuess={dispatchArrayGuess} />
    </div>
  );
}

// checks which theme is/was selected
function getSelectedTheme() {
  if (document.documentElement.classList.length === 0) {
    document.documentElement.classList.add('light');
    return document.documentElement.classList.value;
  } else {
    console.log(document.documentElement.classList.value);
    return document.documentElement.classList.value;
  }
}

// add classes for dark-theme and removed them for light-theme
function addClassToElementsFor(selectedTheme) {
  switch (selectedTheme) {
    case 'dark':
      // "headline" gets the dark-theme class
      document.querySelectorAll('h1 > span').forEach((el) => {
        el.classList.add('header-dark');
        el.classList.add('boxLetter-dark');
      });
      // boxletters gets the dark-theme class
      document.querySelectorAll('.boxLetter').forEach((el) => {
        el.classList.add('boxLetter-dark');
      });

      // keys get the dark-theme class
      document.querySelectorAll('.key').forEach((el) => {
        el.classList.add('boxLetter-dark');
      });
      break;
    case 'light':
      document.querySelectorAll('h1 > span').forEach((el) => {
        el.classList.remove('box-letter-dark');
        el.classList.remove('header-dark');
      });
  }
}

// TODO: ausgewähltes Theme im Browser speichern und beim erneuten Laden der Seite auslesen
