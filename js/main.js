'use strict'

import {reservationsTabFirst, reservationsTabSecond, reservationsTabThird} from './reservedTab/index.js'
import {dropDownLanguageButton,languageSwitch} from './languageTab/index.js';
import {themeDropdownNav,darkThemeSwitcher,ligthThemeSwitcher} from './themeTab/index.js';
import {createArticlesTabs,getArticlesTabs} from './fetch/index.js';
import {removeAllProducts,removeGrainsProducts,removeDessertsProducts,removeMeatProducts,removeSaladsProducts,removeSoupsProducts,removeBurgersProducts,removeDrinksProducts} from './products/index.js';
import { initModals } from './modal/index.js';
import { savedUsernameLogin } from './login/index.js';

window.onload = function () {
    reservationsTabFirst()
    reservationsTabSecond()
    reservationsTabThird()
    dropDownLanguageButton()
    languageSwitch()
    themeDropdownNav()
    darkThemeSwitcher()
    ligthThemeSwitcher()
    createArticlesTabs()
    getArticlesTabs()
    removeAllProducts()
    removeGrainsProducts()
    removeDessertsProducts()
    removeMeatProducts()
    removeSaladsProducts()
    removeSoupsProducts()
    removeBurgersProducts()
    removeDrinksProducts()
    initModals()
    savedUsernameLogin()
};

//Cookie
const coockieModal = document.querySelector('.cookie');
const cookieAccept = document.querySelector('.cookie__button');
const cookieClose = document.querySelector('.cookie__icon-close');

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
const initCookie = () => {
    const cookiiItem = localStorage.getItem('cookie');
    if(JSON.parse(cookiiItem)){
        coockieModal.style.display= 'none';
    }
    cookieAccept.addEventListener('click', () => acceptModalCookie(closeCookie));
    cookieClose.addEventListener('click', () => closeModalCookie(closeCookie));
}
initCookie();

//Слайдер
const pagination = document.querySelectorAll('.banner .banner__pagination .banner__line');
const slides = document.querySelectorAll('.banner .banner__slide');
const nextSlide = document.querySelector('.banner__next');
const prevSlide = document.querySelector(' .banner__prev');
let indexSlide = 1;

nextSlide.onclick = function (){
    indexSlide += 1;
    if (indexSlide > pagination.length){
        indexSlide = 1;
    }
    currentSlide(indexSlide);
}
prevSlide.onclick = function (){
    indexSlide -= 1;
    if (indexSlide <= 0){
        indexSlide = pagination.length;
    }
    currentSlide(indexSlide);
}
function currentSlide(n){
    indexSlide = n;
    for(let i=0; i < pagination.length; i++){
        slides[i].style.display = 'none';
        pagination[i].classList.remove('active');
        pagination[i].classList.add('inactive');
    }
    slides[n-1].style.display = 'block';
    pagination[n-1].classList.remove('inactive')
    pagination[n-1].classList.add('active')
}