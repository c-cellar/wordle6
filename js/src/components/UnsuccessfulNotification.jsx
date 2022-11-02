import objectGuessRounds from '../../objectGuessRounds';
import { useState } from 'react';
import { removeClassFrom, getNewWord } from '../../gameplayFunctions';
import arrayWords from '../../arrayWords';

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
          const randomNewWord = getNewWord(searchedWord, arrayWords);
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
