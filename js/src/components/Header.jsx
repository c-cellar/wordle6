export default function Header() {
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
          <input type="radio" name="theme_selection" id="light" />
          <span className="checkmark"></span>light
        </label>
        <label className="container-radio" htmlFor="dark">
          <input type="radio" name="theme_selection" id="dark" />
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
              <a href={'funktion'}>light</a>
            </li>
            <li className="dropdown-item" id="darkDropdown">
              <a href={'funktion'}>dark/eighties</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
