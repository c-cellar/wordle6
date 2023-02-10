import { useEffect } from 'react';

export default function NoWordNotification({ userWordleGuess, colorTheme }) {
  useEffect(() => {
    if (colorTheme === 'dark') {
      document.querySelector('.notification').classList.add(colorTheme);
    }
  });
  return (
    <div id="noWord-notification" className="notification">
      <span id="noWord">{userWordleGuess.word.toUpperCase()}</span>
      <span>is not valid</span>
    </div>
  );
}
