import NoWordNotification from './NoWordNotification';
import SuccessfulNotification from './SuccessfulNotification';
import UnsuccessfulNotification from './UnsuccessfulNotification';

export default function Notifications({
  colorTheme,
  searchedWord,
  statusGame,
  currentRound,
  userWordleGuess,
  setCurrentRound,
  setStatusGame,
  setUserGuessWords,
  setSearchedWord,
  userGuessesRounds,
}) {
  return (
    <div>
      {statusGame && (
        <SuccessfulNotification
          userGuessesRounds={userGuessesRounds}
          currentRound={currentRound}
          searchedWord={searchedWord}
          setCurrentRound={setCurrentRound}
          setStatusGame={setStatusGame}
          setUserGuessWords={setUserGuessWords}
          setSearchedWord={setSearchedWord}
          colorTheme={colorTheme}
        />
      )}

      {!statusGame && currentRound >= 6 ? (
        <UnsuccessfulNotification
          userGuessesRounds={userGuessesRounds}
          searchedWord={searchedWord}
          setCurrentRound={setCurrentRound}
          setUserGuessWords={setUserGuessWords}
          setStatusGame={setStatusGame}
          setSearchedWord={setSearchedWord}
          colorTheme={colorTheme}
        />
      ) : (
        ''
      )}

      {!userWordleGuess.isCorrect && (
        <NoWordNotification
          userWordleGuess={userWordleGuess}
          colorTheme={colorTheme}
        />
      )}
    </div>
  );
}
