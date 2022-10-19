export default function ContainerLetters({
  arrayGuess,
  currentRound,
  firstRound,
  secondRound,
  thirdRound,
  fourthRound,
  fifthRound,
  sixthRound,
}) {
  return (
    <div className="letterContainer">
      <div className="round" id="first">
        <div className="box-letter">
          {currentRound == 0 && firstRound == ''
            ? arrayGuess[0]
            : firstRound[0]}
        </div>
        <div className="box-letter">
          {currentRound == 0 && firstRound == ''
            ? arrayGuess[1]
            : firstRound[1]}
        </div>
        <div className="box-letter">
          {currentRound == 0 && firstRound == ''
            ? arrayGuess[2]
            : firstRound[2]}
        </div>
        <div className="box-letter">
          {currentRound == 0 && firstRound == ''
            ? arrayGuess[3]
            : firstRound[3]}
        </div>
        <div className="box-letter">
          {currentRound == 0 && firstRound == ''
            ? arrayGuess[4]
            : firstRound[4]}
        </div>
        <div className="box-letter">
          {currentRound == 0 && firstRound == ''
            ? arrayGuess[5]
            : firstRound[5]}
        </div>
      </div>
      <div className="round" id="second">
        <div className="box-letter">
          {currentRound == 1 && secondRound == ''
            ? arrayGuess[0]
            : secondRound[0]}
        </div>
        <div className="box-letter">
          {currentRound == 1 && secondRound == ''
            ? arrayGuess[1]
            : secondRound[1]}
        </div>
        <div className="box-letter">
          {currentRound == 1 && secondRound == ''
            ? arrayGuess[2]
            : secondRound[2]}
        </div>
        <div className="box-letter">
          {currentRound == 1 && secondRound == ''
            ? arrayGuess[3]
            : secondRound[3]}
        </div>
        <div className="box-letter">
          {currentRound == 1 && secondRound == ''
            ? arrayGuess[4]
            : secondRound[4]}
        </div>
        <div className="box-letter">
          {currentRound == 1 && secondRound == ''
            ? arrayGuess[5]
            : secondRound[5]}
        </div>
      </div>
      <div className="round" id="third">
        <div className="box-letter">
          {currentRound == 2 && thirdRound == ''
            ? arrayGuess[0]
            : thirdRound[0]}
        </div>
        <div className="box-letter">
          {currentRound == 2 && thirdRound == ''
            ? arrayGuess[1]
            : thirdRound[1]}
        </div>
        <div className="box-letter">
          {currentRound == 2 && thirdRound == ''
            ? arrayGuess[2]
            : thirdRound[2]}
        </div>
        <div className="box-letter">
          {currentRound == 2 && thirdRound == ''
            ? arrayGuess[3]
            : thirdRound[3]}
        </div>
        <div className="box-letter">
          {currentRound == 2 && thirdRound == ''
            ? arrayGuess[4]
            : thirdRound[4]}
        </div>
        <div className="box-letter">
          {currentRound == 2 && thirdRound == ''
            ? arrayGuess[5]
            : thirdRound[5]}
        </div>
      </div>
      <div className="round" id="fourth">
        <div className="box-letter">
          {currentRound == 3 && fourthRound == ''
            ? arrayGuess[0]
            : fourthRound[0]}
        </div>
        <div className="box-letter">
          {currentRound == 3 && fourthRound == ''
            ? arrayGuess[1]
            : fourthRound[1]}
        </div>
        <div className="box-letter">
          {currentRound == 3 && fourthRound == ''
            ? arrayGuess[2]
            : fourthRound[2]}
        </div>
        <div className="box-letter">
          {currentRound == 3 && fourthRound == ''
            ? arrayGuess[3]
            : fourthRound[3]}
        </div>
        <div className="box-letter">
          {currentRound == 3 && fourthRound == ''
            ? arrayGuess[4]
            : fourthRound[4]}
        </div>
        <div className="box-letter">
          {currentRound == 3 && fourthRound == ''
            ? arrayGuess[5]
            : fourthRound[5]}
        </div>
      </div>
      <div className="round" id="fifth">
        <div className="box-letter">
          {currentRound == 4 && fifthRound == ''
            ? arrayGuess[0]
            : fifthRound[0]}
        </div>
        <div className="box-letter">
          {currentRound == 4 && fifthRound == ''
            ? arrayGuess[1]
            : fifthRound[1]}
        </div>
        <div className="box-letter">
          {currentRound == 4 && fifthRound == ''
            ? arrayGuess[2]
            : fifthRound[2]}
        </div>
        <div className="box-letter">
          {currentRound == 4 && fifthRound == ''
            ? arrayGuess[3]
            : fifthRound[3]}
        </div>
        <div className="box-letter">
          {currentRound == 4 && fifthRound == ''
            ? arrayGuess[4]
            : fifthRound[4]}
        </div>
        <div className="box-letter">
          {currentRound == 4 && fifthRound == ''
            ? arrayGuess[5]
            : fifthRound[5]}
        </div>
      </div>
      <div className="round" id="sixth">
        <div className="box-letter">
          {currentRound == 5 && sixthRound == ''
            ? arrayGuess[0]
            : sixthRound[0]}
        </div>
        <div className="box-letter">
          {currentRound == 5 && sixthRound == ''
            ? arrayGuess[1]
            : sixthRound[1]}
        </div>
        <div className="box-letter">
          {currentRound == 5 && sixthRound == ''
            ? arrayGuess[2]
            : sixthRound[2]}
        </div>
        <div className="box-letter">
          {currentRound == 5 && sixthRound == ''
            ? arrayGuess[3]
            : sixthRound[3]}
        </div>
        <div className="box-letter">
          {currentRound == 5 && sixthRound == ''
            ? arrayGuess[4]
            : sixthRound[4]}
        </div>
        <div className="box-letter">
          {currentRound == 5 && sixthRound == ''
            ? arrayGuess[5]
            : sixthRound[5]}
        </div>
      </div>
    </div>
  );
}
