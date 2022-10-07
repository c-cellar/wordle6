export default function Keyboard({ setArrayGuess }) {
  return (
    <div className="keyboard">
      <div className="keyboardRow">
        <button
          className="key"
          id="q"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          Q
        </button>
        <button
          className="key"
          id="w"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          W
        </button>
        <button
          className="key"
          id="e"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          E
        </button>
        <button
          className="key"
          id="r"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          R
        </button>
        <button
          className="key"
          id="t"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          T
        </button>
        <button
          className="key"
          id="z"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          Z
        </button>
        <button
          className="key"
          id="u"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          U
        </button>
        <button
          className="key"
          id="i"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          I
        </button>
        <button
          className="key"
          id="o"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          O
        </button>
        <button
          className="key"
          id="p"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          P
        </button>
      </div>
      <div className="keyboardRow">
        <button
          className="key"
          id="a"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          A
        </button>
        <button
          className="key"
          id="s"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          S
        </button>
        <button
          className="key"
          id="d"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          D
        </button>
        <button
          className="key"
          id="f"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          F
        </button>
        <button
          className="key"
          id="g"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          G
        </button>
        <button
          className="key"
          id="h"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          H
        </button>
        <button
          className="key"
          id="j"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          J
        </button>
        <button
          className="key"
          id="k"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          K
        </button>
        <button
          className="key"
          id="l"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          L
        </button>
      </div>
      <div className="keyboardRow">
        <button
          className="key"
          id="Enter"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          &#8629;
        </button>
        <button
          className="key"
          id="y"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          Y
        </button>
        <button
          className="key"
          id="x"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          X
        </button>
        <button
          className="key"
          id="c"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          C
        </button>
        <button
          className="key"
          id="v"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          V
        </button>
        <button
          className="key"
          id="b"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          B
        </button>
        <button
          className="key"
          id="n"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          N
        </button>
        <button
          className="key"
          id="m"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          M
        </button>
        <button
          className="key"
          id="Backspace"
          onClick={(e) =>
            setArrayGuess({ inputType: e.type, input: e.currentTarget.id })
          }
        >
          &#8592;
        </button>
      </div>
    </div>
  );
}
