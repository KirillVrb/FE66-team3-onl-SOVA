import {coockieModal, cookieAccept, cookieClose} from './selectors.js';

const closeCookie = () =>{
    coockieModal.style.display= 'none';
} 
const acceptModalCookie = (callback) => {
    localStorage.setItem("cookie", "true");
    callback();
}
const closeModalCookie = (callback) => {
    callback();
}

export {closeCookie, acceptModalCookie, closeModalCookie}