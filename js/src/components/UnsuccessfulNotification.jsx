import { useState } from 'react';

export default function UnsuccessfulNotification({
  searchedWord,
  setCurrentRound,
  setStatusGame,
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
          console.log('New Game');
        }}
      >
        New Game
      </button>
    </div>
  );
}

// TODO: style show-word button in buttons.scss
// TODO: Mit klick auf den NewGame-Button:
// - soll der Runden-Counter auf 0 gesetzt werden
// - ein neues searchedWord holen
