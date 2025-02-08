import {darkbtnSelector,ligthbtnSelector} from "./selector.js";
import {darkTheme,lightTheme} from "./utils.js";

function darkThemeSwitcher () {
    darkbtnSelector.addEventListener("click", darkTheme);
}
function ligthThemeSwitcher () {
    ligthbtnSelector.addEventListener("click", lightTheme);
}

export {darkThemeSwitcher,ligthThemeSwitcher}