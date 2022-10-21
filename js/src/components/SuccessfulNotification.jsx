export default function SuccessfulNotification({ searchedWord, currentRound }) {
  return (
    <div id="successful" className="notification">
      <span>CONGRATULATIONS</span>
      <p>
        word: {searchedWord}
        <span id="winningWord"></span>
      </p>
      <p>
        attempts: {currentRound}
        <span id="rounds"></span>
      </p>
      <button id="btn-successful" className="btn btn-NewGame">
        New Game
      </button>
    </div>
  );
}
