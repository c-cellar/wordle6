export default function NoWordNotification({ isACorrectWord }) {
  console.log(isACorrectWord.noWord);
  return (
    <div id="noWord-notification" className="notification">
      <span id="noWord">{isACorrectWord.noWord}</span>
      <span>is not in used dictionary</span>
    </div>
  );
}
