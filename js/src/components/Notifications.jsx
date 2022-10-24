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
}) {
  return (
    <div>
      {statusGame && (
        <SuccessfulNotification
          currentRound={currentRound}
          searchedWord={searchedWord}
        />
      )}

      {!statusGame && currentRound >= 6 ? (
        <UnsuccessfulNotification
          searchedWord={searchedWord}
          setCurrentRound={setCurrentRound}
          setStatusGame={setStatusGame}
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
