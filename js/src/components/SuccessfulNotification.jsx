export default function SuccessfulNotification() {
  return (
    <div id="successful" className="notification">
      <span>CONGRATULATIONS</span>
      <p>
        word:
        <span id="winningWord"></span>
      </p>
      <p>
        attempts:
        <span id="rounds"></span>
      </p>
      <button id="btn-successful" className="btn btn-NewGame">
        New Game
      </button>
    </div>
  );
}
