export default function Modal({ setShowModal }) {
  return (
    <div className="modal modal-wrapper">
      <div className="modal-rules">
        <h2>How to play</h2>
        <p>
          A random english word with six letters is to be find and you are just
          allowed to type in words with the same length. After every input, the
          input will be compared to the unknown word. Afterwards the word will
          be colorized.
        </p>
        <div>
          <h3>
            Letter is at the{' '}
            <span className="modal-letter rightPlace">correct position</span>
          </h3>
          <dl className="dl-rules">
            <dt>
              <span className="modal-letter rightPlace">A</span>
            </dt>
            <dd>
              If the letter or the background of the box with the letter, is
              shining green. This shows you, that the letter is part of the word
              and at the right spot.
            </dd>
          </dl>
          <h3>
            Letter is at the{' '}
            <span className="modal-letter wrongPlace">wrong position</span>
          </h3>

          <dl className="dl-rules">
            <dt>
              <span className="modal-letter wrongPlace">B</span>
            </dt>
            <dd>
              In this case, the box with the letter or the letter itself shines
              in yellow. This means, the letter is at the wrong spot but its in
              the searched word.
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
            <dd>If its colored in grey. The letter isnt used in the word.</dd>
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
