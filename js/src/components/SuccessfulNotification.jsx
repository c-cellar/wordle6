import { useEffect } from 'react';
import {
  removeClassFrom,
  getNewWord,
  getArrayFromStorage,
  removePlayedWordFromArray,
} from '../../gameplayFunctions';

export default function SuccessfulNotification({
  searchedWord,
  currentRound,
  setCurrentRound,
  setStatusGame,
  setUserGuessWords,
  setSearchedWord,
  userGuessesRounds,
  colorTheme,
}) {
  const ArrayWords = getArrayFromStorage('wordleArray');
  const randomNewWord = getNewWord(ArrayWords, searchedWord);

  useEffect(() => {
    if (colorTheme === 'dark') {
      document.querySelector('.notification').classList.add(colorTheme);
    }
  });

  function startNewGame() {
    setCurrentRound(0);
    setStatusGame(false);
    setUserGuessWords(userGuessesRounds);
    removeClassFrom();
    removePlayedWordFromArray(ArrayWords, searchedWord);
    setSearchedWord(randomNewWord);
  }

  return (
    <div id="successful" className="notification">
      <span>
        <strong>CONGRATULATION</strong>
      </span>
      <p>
        Word: {searchedWord.toUpperCase()}
        <span id="winningWord"></span>
      </p>
      <p>
        Attempts: {currentRound}
        <span id="rounds"></span>
      </p>
      <button
        id="btn-successful"
        className="btn btn-NewGame"
        onClick={() => {
          startNewGame();
        }}
      >
        New Game
      </button>
    </div>
  );
}
