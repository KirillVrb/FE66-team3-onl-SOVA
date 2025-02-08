import {languageListSelector,engButtonSelector,rusButtonSelector} from "./selectors.js";

const languageDropdown = () => {
    if (languageListSelector.classList.contains('disp')) {
        languageListSelector.classList.remove('disp')
    } else (
        languageListSelector.classList.add('disp')
    )
}

var txt = {
    en: {'menu':'Menu','organization':'Organization of events','reservations':'Table reservations','children':'For children','delivery':'Delivery'}
    ,ru: {'menu':'Меню','organization':'Организация мероприятий', 'reservations':'Бронь столов','children':'Для детей','delivery':'Доставка'}
    };
    
const setLangFunction = function setLang (lang){
    var p;
    if( !txt.hasOwnProperty(lang)) return;
    if( window.hasOwnProperty('localStorage'))
       window.localStorage.setItem('lang', lang);
    for(p in txt[lang]) {
      document.getElementById(p).innerText = txt[lang][p];
    }
  }
  
  var lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang)) || 'en';
  setLangFunction(lang);
  
  export {languageDropdown,setLangFunction}
