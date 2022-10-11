export default function ContainerLetters({ arrayGuess, checkedInput }) {
  console.log('containerComponent');
  console.log(arrayGuess);
  console.log(checkedInput);

  return (
    <div className="letterContainer">
      <div className="round" id="first">
        <div className="box-letter"> {arrayGuess[0] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[1] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[2] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[3] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[4] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[5] ?? ''} </div>
      </div>
      <div className="round" id="second">
        <div className="box-letter"> {arrayGuess[0] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[1] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[2] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[3] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[4] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[5] ?? ''} </div>
      </div>
      <div className="round" id="third">
        <div className="box-letter"> {arrayGuess[0] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[1] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[2] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[3] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[4] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[5] ?? ''} </div>
      </div>
      <div className="round" id="fourth">
        <div className="box-letter"> {arrayGuess[0] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[1] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[2] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[3] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[4] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[5] ?? ''} </div>
      </div>
      <div className="round" id="fifth">
        <div className="box-letter"> {arrayGuess[0] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[1] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[2] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[3] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[4] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[5] ?? ''} </div>
      </div>
      <div className="round" id="sixth">
        <div className="box-letter"> {arrayGuess[0] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[1] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[2] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[3] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[4] ?? ''} </div>
        <div className="box-letter"> {arrayGuess[5] ?? ''} </div>
      </div>
    </div>
  );
}

// TODO: Ausgabe vom arrayGuess
