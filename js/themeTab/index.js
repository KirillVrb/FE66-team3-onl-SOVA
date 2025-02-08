import {
  darkbtnSelector,
  ligthbtnSelector,
  dropdownButton,
} from "./selector.js";
import { themeDropdown, darkTheme, lightTheme } from "./utils.js";

//выпадающий список
function themeDropdownNav() {
  dropdownButton.addEventListener("click", themeDropdown);
}

//смена цвета
function darkThemeSwitcher() {
  darkbtnSelector.addEventListener("click", darkTheme);
}
function ligthThemeSwitcher() {
  ligthbtnSelector.addEventListener("click", lightTheme);
}

export { themeDropdownNav, darkThemeSwitcher, ligthThemeSwitcher };
