export default function ContainerLetters({
  arrayGuess,
  currentRound,
  userGuessWords,
}) {
  return (
    <div className="boxLetterWrapper">
      <div className="boxLetterContainer">
        <div className="boxLetter">
          {currentRound == 0 ? arrayGuess[0] : userGuessWords.one[0]}
        </div>
        <div className="boxLetter">
          {currentRound == 0 ? arrayGuess[1] : userGuessWords.one[1]}
        </div>
        <div className="boxLetter">
          {currentRound == 0 ? arrayGuess[2] : userGuessWords.one[2]}
        </div>
        <div className="boxLetter">
          {currentRound == 0 ? arrayGuess[3] : userGuessWords.one[3]}
        </div>
        <div className="boxLetter">
          {currentRound == 0 ? arrayGuess[4] : userGuessWords.one[4]}
        </div>
        <div className="boxLetter">
          {currentRound == 0 ? arrayGuess[5] : userGuessWords.one[5]}
        </div>
      </div>
      <div className="boxLetterContainer">
        <div className="boxLetter">
          {currentRound == 1 ? arrayGuess[0] : userGuessWords.two[0]}
        </div>
        <div className="boxLetter">
          {currentRound == 1 ? arrayGuess[1] : userGuessWords.two[1]}
        </div>
        <div className="boxLetter">
          {currentRound == 1 ? arrayGuess[2] : userGuessWords.two[2]}
        </div>
        <div className="boxLetter">
          {currentRound == 1 ? arrayGuess[3] : userGuessWords.two[3]}
        </div>
        <div className="boxLetter">
          {currentRound == 1 ? arrayGuess[4] : userGuessWords.two[4]}
        </div>
        <div className="boxLetter">
          {currentRound == 1 ? arrayGuess[5] : userGuessWords.two[5]}
        </div>
      </div>
      <div className="boxLetterContainer">
        <div className="boxLetter">
          {currentRound == 2 ? arrayGuess[0] : userGuessWords.three[0]}
        </div>
        <div className="boxLetter">
          {currentRound == 2 ? arrayGuess[1] : userGuessWords.three[1]}
        </div>
        <div className="boxLetter">
          {currentRound == 2 ? arrayGuess[2] : userGuessWords.three[2]}
        </div>
        <div className="boxLetter">
          {currentRound == 2 ? arrayGuess[3] : userGuessWords.three[3]}
        </div>
        <div className="boxLetter">
          {currentRound == 2 ? arrayGuess[4] : userGuessWords.three[4]}
        </div>
        <div className="boxLetter">
          {currentRound == 2 ? arrayGuess[5] : userGuessWords.three[5]}
        </div>
      </div>
      <div className="boxLetterContainer">
        <div className="boxLetter">
          {currentRound == 3 ? arrayGuess[0] : userGuessWords.four[0]}
        </div>
        <div className="boxLetter">
          {currentRound == 3 ? arrayGuess[1] : userGuessWords.four[1]}
        </div>
        <div className="boxLetter">
          {currentRound == 3 ? arrayGuess[2] : userGuessWords.four[2]}
        </div>
        <div className="boxLetter">
          {currentRound == 3 ? arrayGuess[3] : userGuessWords.four[3]}
        </div>
        <div className="boxLetter">
          {currentRound == 3 ? arrayGuess[4] : userGuessWords.four[4]}
        </div>
        <div className="boxLetter">
          {currentRound == 3 ? arrayGuess[5] : userGuessWords.four[5]}
        </div>
      </div>
      <div className="boxLetterContainer">
        <div className="boxLetter">
          {currentRound == 4 ? arrayGuess[0] : userGuessWords.five[0]}
        </div>
        <div className="boxLetter">
          {currentRound == 4 ? arrayGuess[1] : userGuessWords.five[1]}
        </div>
        <div className="boxLetter">
          {currentRound == 4 ? arrayGuess[2] : userGuessWords.five[2]}
        </div>
        <div className="boxLetter">
          {currentRound == 4 ? arrayGuess[3] : userGuessWords.five[3]}
        </div>
        <div className="boxLetter">
          {currentRound == 4 ? arrayGuess[4] : userGuessWords.five[4]}
        </div>
        <div className="boxLetter">
          {currentRound == 4 ? arrayGuess[5] : userGuessWords.five[5]}
        </div>
      </div>
      <div className="boxLetterContainer">
        <div className="boxLetter">
          {currentRound == 5 ? arrayGuess[0] : userGuessWords.six[0]}
        </div>
        <div className="boxLetter">
          {currentRound == 5 ? arrayGuess[1] : userGuessWords.six[1]}
        </div>
        <div className="boxLetter">
          {currentRound == 5 ? arrayGuess[2] : userGuessWords.six[2]}
        </div>
        <div className="boxLetter">
          {currentRound == 5 ? arrayGuess[3] : userGuessWords.six[3]}
        </div>
        <div className="boxLetter">
          {currentRound == 5 ? arrayGuess[4] : userGuessWords.six[4]}
        </div>
        <div className="boxLetter">
          {currentRound == 5 ? arrayGuess[5] : userGuessWords.six[5]}
        </div>
      </div>
    </div>
  );
}
