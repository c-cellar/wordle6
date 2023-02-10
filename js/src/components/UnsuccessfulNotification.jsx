import { useState, useEffect } from 'react';
import {
  removeClassFrom,
  getNewWord,
  getArrayFromStorage,
  removePlayedWordFromArray,
} from '../../gameplayFunctions';

export default function UnsuccessfulNotification({
  searchedWord,
  setCurrentRound,
  setStatusGame,
  setSearchedWord,
  userGuessesRounds,
  setUserGuessWords,
  colorTheme,
}) {
  const [showWord, setShowWord] = useState(false);
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
    <div id="unsuccessful" className="notification">
      <p>maybe next round...</p>
      <p>
        <button className="show-word" onClick={() => setShowWord(!showWord)}>
          {showWord ? searchedWord.toUpperCase() : 'show wordle'}
        </button>
      </p>
      <button
        id="btn-unsuccessful"
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
