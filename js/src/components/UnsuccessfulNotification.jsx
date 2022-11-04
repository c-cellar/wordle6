import objectGuessRounds from '../../objectGuessRounds';
import { useState } from 'react';
import {
  removeClassFrom,
  getNewWord,
  getArrayFromStorage,
} from '../../gameplayFunctions';

export default function UnsuccessfulNotification({
  searchedWord,
  setCurrentRound,
  setStatusGame,
  setGuessWordRound,
  setSearchedWord,
}) {
  const [showWord, setShowWord] = useState(false);

  return (
    <div id="unsuccessful" className="notification">
      <span>maybe next round...</span>
      <p>
        <button className="show-word" onClick={() => setShowWord(!showWord)}>
          {showWord ? searchedWord : 'show searched word'}
        </button>
      </p>
      <button
        id="btn-unsuccessful"
        className="btn btn-NewGame"
        onClick={() => {
          const arrayWords = getArrayFromStorage('wordleArray');
          const randomNewWord = getNewWord(arrayWords, searchedWord);
          setSearchedWord(randomNewWord);
          setCurrentRound(0);
          setStatusGame(false);
          setGuessWordRound(objectGuessRounds);
          removeClassFrom();
        }}
      >
        New Game
      </button>
    </div>
  );
}
