export default function ContainerLetters({
  arrayGuess,
  currentRound,
  guessWordRound,
}) {
  return (
    <div className="boxLetterWrapper">
      <div className="boxLetterContainer">
        <div className="boxLetter">
          {currentRound == 0 ? arrayGuess[0] : guessWordRound.one[0]}
        </div>
        <div className="boxLetter">
          {currentRound == 0 ? arrayGuess[1] : guessWordRound.one[1]}
        </div>
        <div className="boxLetter">
          {currentRound == 0 ? arrayGuess[2] : guessWordRound.one[2]}
        </div>
        <div className="boxLetter">
          {currentRound == 0 ? arrayGuess[3] : guessWordRound.one[3]}
        </div>
        <div className="boxLetter">
          {currentRound == 0 ? arrayGuess[4] : guessWordRound.one[4]}
        </div>
        <div className="boxLetter">
          {currentRound == 0 ? arrayGuess[5] : guessWordRound.one[5]}
        </div>
      </div>
      <div className="boxLetterContainer">
        <div className="boxLetter">
          {currentRound == 1 ? arrayGuess[0] : guessWordRound.two[0]}
        </div>
        <div className="boxLetter">
          {currentRound == 1 ? arrayGuess[1] : guessWordRound.two[1]}
        </div>
        <div className="boxLetter">
          {currentRound == 1 ? arrayGuess[2] : guessWordRound.two[2]}
        </div>
        <div className="boxLetter">
          {currentRound == 1 ? arrayGuess[3] : guessWordRound.two[3]}
        </div>
        <div className="boxLetter">
          {currentRound == 1 ? arrayGuess[4] : guessWordRound.two[4]}
        </div>
        <div className="boxLetter">
          {currentRound == 1 ? arrayGuess[5] : guessWordRound.two[5]}
        </div>
      </div>
      <div className="boxLetterContainer">
        <div className="boxLetter">
          {currentRound == 2 ? arrayGuess[0] : guessWordRound.three[0]}
        </div>
        <div className="boxLetter">
          {currentRound == 2 ? arrayGuess[1] : guessWordRound.three[1]}
        </div>
        <div className="boxLetter">
          {currentRound == 2 ? arrayGuess[2] : guessWordRound.three[2]}
        </div>
        <div className="boxLetter">
          {currentRound == 2 ? arrayGuess[3] : guessWordRound.three[3]}
        </div>
        <div className="boxLetter">
          {currentRound == 2 ? arrayGuess[4] : guessWordRound.three[4]}
        </div>
        <div className="boxLetter">
          {currentRound == 2 ? arrayGuess[5] : guessWordRound.three[5]}
        </div>
      </div>
      <div className="boxLetterContainer">
        <div className="boxLetter">
          {currentRound == 3 ? arrayGuess[0] : guessWordRound.four[0]}
        </div>
        <div className="boxLetter">
          {currentRound == 3 ? arrayGuess[1] : guessWordRound.four[1]}
        </div>
        <div className="boxLetter">
          {currentRound == 3 ? arrayGuess[2] : guessWordRound.four[2]}
        </div>
        <div className="boxLetter">
          {currentRound == 3 ? arrayGuess[3] : guessWordRound.four[3]}
        </div>
        <div className="boxLetter">
          {currentRound == 3 ? arrayGuess[4] : guessWordRound.four[4]}
        </div>
        <div className="boxLetter">
          {currentRound == 3 ? arrayGuess[5] : guessWordRound.four[5]}
        </div>
      </div>
      <div className="boxLetterContainer">
        <div className="boxLetter">
          {currentRound == 4 ? arrayGuess[0] : guessWordRound.five[0]}
        </div>
        <div className="boxLetter">
          {currentRound == 4 ? arrayGuess[1] : guessWordRound.five[1]}
        </div>
        <div className="boxLetter">
          {currentRound == 4 ? arrayGuess[2] : guessWordRound.five[2]}
        </div>
        <div className="boxLetter">
          {currentRound == 4 ? arrayGuess[3] : guessWordRound.five[3]}
        </div>
        <div className="boxLetter">
          {currentRound == 4 ? arrayGuess[4] : guessWordRound.five[4]}
        </div>
        <div className="boxLetter">
          {currentRound == 4 ? arrayGuess[5] : guessWordRound.five[5]}
        </div>
      </div>
      <div className="boxLetterContainer">
        <div className="boxLetter">
          {currentRound == 5 ? arrayGuess[0] : guessWordRound.six[0]}
        </div>
        <div className="boxLetter">
          {currentRound == 5 ? arrayGuess[1] : guessWordRound.six[1]}
        </div>
        <div className="boxLetter">
          {currentRound == 5 ? arrayGuess[2] : guessWordRound.six[2]}
        </div>
        <div className="boxLetter">
          {currentRound == 5 ? arrayGuess[3] : guessWordRound.six[3]}
        </div>
        <div className="boxLetter">
          {currentRound == 5 ? arrayGuess[4] : guessWordRound.six[4]}
        </div>
        <div className="boxLetter">
          {currentRound == 5 ? arrayGuess[5] : guessWordRound.six[5]}
        </div>
      </div>
    </div>
  );
}
