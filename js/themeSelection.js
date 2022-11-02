// add classes for dark-theme and removed them for light-theme
function addClassToElementsFor(selectedTheme) {
  switch (selectedTheme) {
    case 'dark':
      // "headline" gets the dark-theme class
      document.querySelectorAll('h1 > span').forEach((el) => {
        el.classList.add('header-dark');
        el.classList.add('boxLetter-dark');
      });
      // boxletters gets the dark-theme class
      document.querySelectorAll('.boxLetter').forEach((el) => {
        el.classList.add('boxLetter-dark');
      });
      // keys get the dark-theme class
      document.querySelectorAll('.key').forEach((el) => {
        el.classList.add('boxLetter-dark');
      });
      break;
    case 'light':
      document.querySelectorAll('h1 > span').forEach((el) => {
        el.classList.remove('header-dark');
      });
      document.querySelectorAll('.boxLetter-dark').forEach((el) => {
        el.classList.remove('boxLetter-dark');
      });
  }
}

function selectTheme(e) {
  if (
    e.target.value == 'light' &&
    document.documentElement.classList.contains('dark')
  ) {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    return;
  }

  if (
    e.target.value == 'dark' &&
    document.documentElement.classList.contains('light')
  ) {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    return;
  }
}

function updateTheme(colorTheme) {
  if (colorTheme === 'light') {
    document.documentElement.classList.add('light');
    return;
  }
  if (colorTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }
}

// speichert ausgewähltes bzw. zuletzt gewähltes Theme im LocalStorage
function selectedThemeToLocalStorage(colorTheme) {
  localStorage.setItem('theme', JSON.stringify(colorTheme));
}

//überprüft welches Theme zuletzt gewählt wurde.
// Falls kein Theme im localStorage hinterlegt ist, wird das als default 'light' verwendet
function getThemeFromStorage() {
  const storedTheme = JSON.parse(localStorage.getItem('theme'));

  return storedTheme !== '' ? storedTheme : 'light';
}

export {
  getThemeFromStorage,
  addClassToElementsFor,
  selectTheme,
  selectedThemeToLocalStorage,
  updateTheme,
};
