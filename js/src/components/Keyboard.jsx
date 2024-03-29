export default function Keyboard({ dispatchUserInput }) {
  return (
    <div className="keyboard">
      <div className="keyboardRow">
        <button
          className="key"
          id="q"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          Q
        </button>
        <button
          className="key"
          id="w"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          W
        </button>
        <button
          className="key"
          id="e"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          E
        </button>
        <button
          className="key"
          id="r"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          R
        </button>
        <button
          className="key"
          id="t"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          T
        </button>
        <button
          className="key"
          id="z"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          Z
        </button>
        <button
          className="key"
          id="u"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          U
        </button>
        <button
          className="key"
          id="i"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          I
        </button>
        <button
          className="key"
          id="o"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          O
        </button>
        <button
          className="key"
          id="p"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
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
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          A
        </button>
        <button
          className="key"
          id="s"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          S
        </button>
        <button
          className="key"
          id="d"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          D
        </button>
        <button
          className="key"
          id="f"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          F
        </button>
        <button
          className="key"
          id="g"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          G
        </button>
        <button
          className="key"
          id="h"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          H
        </button>
        <button
          className="key"
          id="j"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          J
        </button>
        <button
          className="key"
          id="k"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          K
        </button>
        <button
          className="key"
          id="l"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
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
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          &#8629;
        </button>
        <button
          className="key"
          id="y"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          Y
        </button>
        <button
          className="key"
          id="x"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          X
        </button>
        <button
          className="key"
          id="c"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          C
        </button>
        <button
          className="key"
          id="v"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          V
        </button>
        <button
          className="key"
          id="b"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          B
        </button>
        <button
          className="key"
          id="n"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          N
        </button>
        <button
          className="key"
          id="m"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          M
        </button>
        <button
          className="key"
          id="Backspace"
          onClick={(e) =>
            dispatchUserInput({
              // inputType: e.type,
              input: e.currentTarget.id,
            })
          }
        >
          &#8592;
        </button>
      </div>
    </div>
  );
}
