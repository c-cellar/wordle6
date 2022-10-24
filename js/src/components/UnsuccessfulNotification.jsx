import objectGuessRounds from '../../objectGuessRounds';
import { useState } from 'react';
import { removeClassFrom } from '../../gameplayFunctions';

export default function UnsuccessfulNotification({
  searchedWord,
  setCurrentRound,
  setStatusGame,
  setGuessWordRound,
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

// TODO: style show-word button in buttons.scss
// TODO: Mit klick auf den NewGame-Button: ein neues searchedWord holen
