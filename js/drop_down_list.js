'use strict'

import {reservationsTabFirst, reservationsTabSecond, reservationsTabThird} from './reservedTab/index.js'
import {dropDownLanguageButton,languageSwitch} from './languageTab/index.js';
import {darkThemeSwitcher,ligthThemeSwitcher} from './themeTab/index.js';
import {createArticlesTabs,getArticlesTabs} from './fetch/index.js';
import {removeAllProducts,removeGrainsProducts,removeDessertsProducts,removeMeatProducts,removeSaladsProducts,removeSoupsProducts,removeBurgersProducts,removeDrinksProducts} from './products/index.js';

window.onload = function () {
    reservationsTabFirst()
    reservationsTabSecond()
    reservationsTabThird()
    dropDownLanguageButton()
    languageSwitch()
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
};
//модалки

const containerModal = document.getElementById('modal-container');
const loginModal = document.getElementById('login-modal')
const loginInput = document.querySelector('.login-username');
const loginButton = document.querySelector('.login__button');
const loginLink = document.getElementById('text-link-login') 

containerModal.addEventListener('click', (event) => {     
    const button = event.target.closest('.open-modal');  
    if (button) {  
        const modalId = button.dataset.modal; 
        const isLogin = localStorage.getItem('login')
        if(modalId === 'login-modal' && JSON.parse(isLogin)) {
            return
        }
        const modal = document.getElementById(modalId); 

        if (modal) {  
            modal.classList.add('active');
        }
    }
});
document.addEventListener('click', (event) => { 
    if (event.target.closest('.login__btn-close, .basket__btn-close, .favourites__btn-close')) { 
        const modal = event.target.closest('.login, .basket, .favourites'); 
        modal.classList.remove('active');
    }
});

const savedUsername = localStorage.getItem('username');
if (savedUsername) {
    loginLink.textContent = savedUsername;
}
loginButton.onclick = () => {
    const username = loginInput.value;
    if (username) {
        localStorage.setItem('username', username); 
        loginLink.textContent = username; 
        loginModal.classList.remove('active'); 
        localStorage.setItem('login','true')
    }
};

//Cookie
const coockieModal = document.querySelector('.cookie');
const cookieAccept = document.querySelector('.cookie__button');
const cookieClose = document.querySelector('.cookie__icon-close');

const cookiiItem = localStorage.getItem('cookie');

if(JSON.parse(cookiiItem)){
    coockieModal.style.display= 'none';
}
 
cookieAccept.addEventListener('click',() => {
    localStorage.setItem("cookie", "true");
    coockieModal.style.display= 'none';

});
cookieClose.addEventListener('click',() => {
    coockieModal.style.display= 'none';
});

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

//выпадающий список
const dropdownButton = document.querySelector('#dropdown-button')
const dropdownList = document.querySelector('#dropdown-list')

dropdownButton.addEventListener('click', () => {
    if (dropdownList.classList.contains('disp')) {
        dropdownList.classList.remove('disp')
    } else (
        dropdownList.classList.add('disp')
    )
});