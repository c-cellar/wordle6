export default function unsuccessfulNotification() {
  return (
    <div id="unsuccessful" className="notification">
      <span>maybe next round...</span>
      <p>
        searched word:
        <span id="searchedWord"></span>
        <span id="btn-showWord" className="btn">
          Show Word
        </span>
      </p>
      <button id="btn-unsuccessful" className="btn btn-NewGame">
        New Game
      </button>
    </div>
  );
}
