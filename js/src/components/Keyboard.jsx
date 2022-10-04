import { getsAndChecksLetterFromInput } from '../../keyboard';

export default function Keyboard() {
  return (
    <div className="keyboard">
      <div className="keyboardRow">
        <button className="key" id="q" onClick={getsAndChecksLetterFromInput}>
          Q
        </button>
        <button className="key" id="w" onClick={getsAndChecksLetterFromInput}>
          W
        </button>
        <button className="key" id="e" onClick={getsAndChecksLetterFromInput}>
          E
        </button>
        <button className="key" id="r" onClick={getsAndChecksLetterFromInput}>
          R
        </button>
        <button className="key" id="t" onClick={getsAndChecksLetterFromInput}>
          T
        </button>
        <button className="key" id="z" onClick={getsAndChecksLetterFromInput}>
          Z
        </button>
        <button className="key" id="u" onClick={getsAndChecksLetterFromInput}>
          U
        </button>
        <button className="key" id="i" onClick={getsAndChecksLetterFromInput}>
          I
        </button>
        <button className="key" id="o" onClick={getsAndChecksLetterFromInput}>
          O
        </button>
        <button className="key" id="p" onClick={getsAndChecksLetterFromInput}>
          P
        </button>
      </div>
      <div className="keyboardRow">
        <button className="key" id="a" onClick={getsAndChecksLetterFromInput}>
          A
        </button>
        <button className="key" id="s" onClick={getsAndChecksLetterFromInput}>
          S
        </button>
        <button className="key" id="d" onClick={getsAndChecksLetterFromInput}>
          D
        </button>
        <button className="key" id="f" onClick={getsAndChecksLetterFromInput}>
          F
        </button>
        <button className="key" id="g" onClick={getsAndChecksLetterFromInput}>
          G
        </button>
        <button className="key" id="h" onClick={getsAndChecksLetterFromInput}>
          H
        </button>
        <button className="key" id="j" onClick={getsAndChecksLetterFromInput}>
          J
        </button>
        <button className="key" id="k" onClick={getsAndChecksLetterFromInput}>
          K
        </button>
        <button className="key" id="l" onClick={getsAndChecksLetterFromInput}>
          L
        </button>
      </div>
      <div className="keyboardRow">
        <button
          className="key"
          id="Enter"
          onClick={getsAndChecksLetterFromInput}
        >
          &#8629;
        </button>
        <button className="key" id="y" onClick={getsAndChecksLetterFromInput}>
          Y
        </button>
        <button className="key" id="x" onClick={getsAndChecksLetterFromInput}>
          X
        </button>
        <button className="key" id="c" onClick={getsAndChecksLetterFromInput}>
          C
        </button>
        <button className="key" id="v" onClick={getsAndChecksLetterFromInput}>
          V
        </button>
        <button className="key" id="b" onClick={getsAndChecksLetterFromInput}>
          B
        </button>
        <button className="key" id="n" onClick={getsAndChecksLetterFromInput}>
          N
        </button>
        <button className="key" id="m" onClick={getsAndChecksLetterFromInput}>
          M
        </button>
        <button
          className="key"
          id="Backspace"
          onClick={getsAndChecksLetterFromInput}
        >
          &#8592;
        </button>
      </div>
    </div>
  );
}
