import {closeCookie, acceptModalCookie, closeModalCookie} from './utils.js';
import {coockieModal, cookieAccept, cookieClose} from './selectors.js';

const initCookie = () => {
    if(!(JSON.parse(localStorage.getItem('cookie')))){
        coockieModal.style.display= 'block';
    }
    cookieAccept.addEventListener('click', () => acceptModalCookie(closeCookie));
    cookieClose.addEventListener('click', () => closeModalCookie(closeCookie));
}
export {initCookie}