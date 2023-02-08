export default function NoWordNotification({ userWordleGuess }) {
  return (
    <div id="noWord-notification" className="notification">
      <span id="noWord">{userWordleGuess.word}</span>
      <span>is not in used dictionary</span>
    </div>
  );
}
