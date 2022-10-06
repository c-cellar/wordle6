export default function ContainerLetters({ arrayGuess }) {
  return (
    <div className="letterContainer">
      <div className="round" id="first">
        <div className="box-letter">{arrayGuess}</div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
      </div>
      <div className="round" id="second">
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
      </div>
      <div className="round" id="third">
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
      </div>
      <div className="round" id="fourth">
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
      </div>
      <div className="round" id="fifth">
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
      </div>
      <div className="round" id="sixth">
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
        <div className="box-letter"></div>
      </div>
    </div>
  );
}
