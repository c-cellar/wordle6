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
      {/* <!-- Radio Buttons --> */}
      <div className="radio-btn-wrapper">
        <label className="container-radio" htmlFor="light">
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
          <span className="checkmark"></span>light
        </label>
        <label className="container-radio" htmlFor="dark">
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
          <span className="checkmark"></span>dark/eighties
        </label>
      </div>

      {/* <!-- Hamburger Menu Dropdown --> */}
      <div className="hamburger-menu-wrapper">
        <div className="hamburger-menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="dropdown-wrapper">
          <ul className="dropdown">
            <li className="dropdown-item" id="lightDropdown">
              <label className="container-radio" htmlFor="light-dropdown">
                <input
                  type="radio"
                  value="light"
                  name="theme_selection_dropdown"
                  id="light-dropdown"
                  checked={colorTheme === 'light'}
                  onChange={(e) => {
                    selectTheme(e);
                    addClassToElementsFor(e.target.value);
                    setColorTheme(e.target.value);
                  }}
                />
                <span className="checkmark"></span>light
              </label>
            </li>
            <li className="dropdown-item" id="darkDropdown">
              <label className="container-radio" htmlFor="dark-dropdown">
                <input
                  type="radio"
                  value="dark"
                  name="theme_selection_dropdown"
                  id="dark-dropdown"
                  checked={colorTheme === 'dark'}
                  onChange={(e) => {
                    selectTheme(e);
                    addClassToElementsFor(e.target.value);
                    setColorTheme(e.target.value);
                  }}
                />
                <span className="checkmark"></span>dark/eighties
              </label>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
