import {themeSwitcherSelector} from "./selector.js";

const darkTheme = () => {
    themeSwitcherSelector.classList.add("darktheme");
  if (themeSwitcherSelector.classList.contains("darktheme")) {
    localStorage.setItem("theme", "darktheme");
  }
}

const lightTheme = () => {
    themeSwitcherSelector.classList.remove("darktheme");
  if (!themeSwitcherSelector.classList.contains("darktheme")) {
    localStorage.setItem("theme", "");
  }
}

const storedtheme = localStorage.getItem("theme");
if (storedtheme) {
    themeSwitcherSelector.classList.add(storedtheme);
}

export {darkTheme,lightTheme}


