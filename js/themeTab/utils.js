import {themeSwitcherSelector,dropdownList} from "./selector.js";

const themeDropdown = () => {
  if (dropdownList.classList.contains('disp')) {
      dropdownList.classList.remove('disp')
  } else (
      dropdownList.classList.add('disp')
  )
}

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

export {themeDropdown,darkTheme,lightTheme}


