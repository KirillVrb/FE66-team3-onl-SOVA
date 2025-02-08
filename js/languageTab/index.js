
import {languageButtonSelector,engButtonSelector,rusButtonSelector} from "./selectors.js";
import {languageDropdown,setLangFunction} from "./utils.js";
// выпадающий список смены языка
function dropDownLanguageButton () {
languageButtonSelector.addEventListener('click', languageDropdown);
}
// смена языка

function languageSwitch () {
engButtonSelector.addEventListener('click', setLangFunction.bind(null,'en'));
rusButtonSelector.addEventListener('click', setLangFunction.bind(null,'ru'));
setLangFunction
}

export {dropDownLanguageButton,languageSwitch}