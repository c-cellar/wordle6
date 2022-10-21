import { useState } from 'react';

export default function UnsuccessfulNotification({ searchedWord }) {
  const [showWord, setShowWord] = useState(false);

  return (
    <div id="unsuccessful" className="notification">
      <span>maybe next round...</span>
      <p>
        <button className="show-word" onClick={() => setShowWord(!showWord)}>
          {showWord ? searchedWord : 'show searched word'}
        </button>
      </p>
      <button id="btn-unsuccessful" className="btn btn-NewGame">
        New Game
      </button>
    </div>
  );
}

// TODO: style show-word btn in buttons.scss
