import objectGuessRounds from '../../objectGuessRounds';
import arrayWords from '../../arrayWords';
import { removeClassFrom, getNewWord } from '../../gameplayFunctions';

export default function SuccessfulNotification({
  searchedWord,
  currentRound,
  setCurrentRound,
  setStatusGame,
  setGuessWordRound,
  setSearchedWord,
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
