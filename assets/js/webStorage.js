"use strict";
// use/set local storage for word array
const setLocalStorageArrayWords = (array) => {
  localStorage.setItem("unplayedWords", JSON.stringify(array));
};

// get word from local storage
const getArrayFromLocalStorage = () => {
  const myWordsFromStorage = JSON.parse(localStorage.getItem("unplayedWords"));
  return myWordsFromStorage;
};

// use/set local storage for word array
const setLocalStorageTheme = () => {
  // get the name of the used theme (dark or light)
  const theme = html.classList;

  // checks for a key "theme" in localStorage. if there is a key, remove item with key "theme"
  localStorage.getItem("theme") ?? localStorage.removeItem("theme");

  localStorage.setItem("theme", JSON.stringify(theme));
};

// get last used theme
function getLocalStorageTheme() {
  const themeObject = JSON.parse(localStorage.getItem("theme")); //=> objekt
  //   console.log(themeObject);

  themeObject === null
    ? html.classList.add("light")
    : html.classList.add(Object.values(themeObject));
}
