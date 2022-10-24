import objectGuessRounds from '../../objectGuessRounds';
import { removeClassFrom } from '../../gameplayFunctions';

export default function SuccessfulNotification({
  searchedWord,
  currentRound,
  setCurrentRound,
  setStatusGame,
  setGuessWordRound,
}) {
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
      <button
        id="btn-successful"
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
