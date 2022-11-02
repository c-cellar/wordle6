import NoWordNotification from './NoWordNotification';
import SuccessfulNotification from './SuccessfulNotification';
import UnsuccessfulNotification from './UnsuccessfulNotification';

export default function Notifications({
  searchedWord,
  statusGame,
  currentRound,
  isACorrectWord,
  setCurrentRound,
  setStatusGame,
  setGuessWordRound,
  setSearchedWord,
}) {
  return (
    <div>
      {statusGame && (
        <SuccessfulNotification
          currentRound={currentRound}
          searchedWord={searchedWord}
          setCurrentRound={setCurrentRound}
          setStatusGame={setStatusGame}
          setGuessWordRound={setGuessWordRound}
          setSearchedWord={setSearchedWord}
        />
      )}

      {!statusGame && currentRound >= 6 ? (
        <UnsuccessfulNotification
          searchedWord={searchedWord}
          setCurrentRound={setCurrentRound}
          setGuessWordRound={setGuessWordRound}
          setStatusGame={setStatusGame}
          setSearchedWord={setSearchedWord}
        />
      ) : (
        ''
      )}

      {!isACorrectWord.isCorrect && (
        <NoWordNotification isACorrectWord={isACorrectWord} />
      )}
    </div>
  );
}
