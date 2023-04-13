export default function Modal({ setShowModal }) {
  return (
    <div className="modal modal-wrapper">
      <div className="modal-rules">
        <h2>How to play</h2>
        <p>
          Try to guess the six-letter-word. Fill in your guess and press enter,
          your guess will then be compared to the unknown word.Each letter is
          then checked to see if it is in the correct position.
        </p>
        <div>
          <h3>
            Letter is at the
            <span className="modal-letter rightPlace">correct position</span>
          </h3>
          <dl className="dl-rules">
            <dt>
              <span className="modal-letter rightPlace">A</span>
            </dt>
            <dd>
              If the letter or the background of the box with the letter, is
              shining green, the letter is part of the word and at the right
              spot.
            </dd>
          </dl>
          <h3>
            Letter is at the
            <span className="modal-letter wrongPlace">wrong position</span>
          </h3>

          <dl className="dl-rules">
            <dt>
              <span className="modal-letter wrongPlace">B</span>
            </dt>
            <dd>
              In this case, the box with the letter or the letter itself glows
              yellow. This means, the letter is at the wrong spot but is in the
              searched word.
            </dd>
          </dl>

          <h3>
            Letter <span className="modal-letter wrong">is not in</span> the
            word
          </h3>
          <dl className="dl-rules">
            <dt>
              <span className="modal-letter wrong">C</span>
            </dt>
            <dd>
              If the letter is colored in grey. The letter is not used in the
              word.
            </dd>
          </dl>
        </div>
      </div>
      <button className="btn-NewGame" onClick={() => setShowModal(false)}>
        New Game
      </button>
      <p>
        (This is a rebuild of the wordle application of the new york times.)
      </p>
    </div>
  );
}
