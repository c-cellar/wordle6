import { useEffect } from 'react';

export default function NoWordNotification({ userWordleGuess, colorTheme }) {
  useEffect(() => {
    if (colorTheme === 'dark') {
      document.querySelector('.notification').classList.add(colorTheme);
    }
  });
  return (
    <div id="noWord-notification" className="notification">
      <p id="noWord">{userWordleGuess.word.toUpperCase()}</p>
      <p>is not valid</p>
    </div>
  );
}
