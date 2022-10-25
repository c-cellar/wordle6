export default function NoWordNotification({ isACorrectWord }) {
  return (
    <div id="noWord-notification" className="notification">
      <span id="noWord">{isACorrectWord.noWord}</span>
      <span>is not in used dictionary</span>
    </div>
  );
}
