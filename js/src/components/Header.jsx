import { useEffect } from 'react';
import {
  addClassToElementsFor,
  updateTheme,
  selectedThemeToLocalStorage,
  selectTheme,
} from '../../themeSelection';

export default function Header({ colorTheme, setColorTheme }) {
  useEffect(() => {
    updateTheme(colorTheme);
    selectedThemeToLocalStorage(colorTheme);
  }, [colorTheme]);

  return (
    <header>
      <h1>
        <span className="rightPlace">W</span>ORDL
        <span className="wrongPlace">E</span>
        <span className="wrong">6</span>
      </h1>

      {/* <!-- Hamburger Menu Dropdown --> */}
      <div className="hamburger-menu-wrapper">
        <div className="hamburger-menu-icon">
          <div className="rightPlace"></div>
          <div className="wrong"></div>
          <div className="wrongPlace"></div>
        </div>
      </div>

      {/* <!-- Radio Buttons --> */}
      <form action="" className="radio-btn-wrapper">
        <fieldset>
          <legend hidden>Choose a color scheme</legend>
          <label className="container-radio" htmlFor="light">
            {'light'}
          </label>
          <input
            type="radio"
            name="theme_selection"
            id="light"
            value="light"
            checked={colorTheme === 'light'}
            onChange={(e) => {
              selectTheme(e);
              addClassToElementsFor(e.target.value);
              setColorTheme(e.target.value);
            }}
          />
          <label className="container-radio" htmlFor="dark">
            {'dark'}
          </label>
          <input
            type="radio"
            name="theme_selection"
            id="dark"
            value="dark"
            checked={colorTheme === 'dark'}
            onChange={(e) => {
              selectTheme(e);
              addClassToElementsFor(e.target.value);
              setColorTheme(e.target.value);
            }}
          />
        </fieldset>
      </form>
    </header>
  );
}
