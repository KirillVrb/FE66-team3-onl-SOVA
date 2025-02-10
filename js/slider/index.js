import {clickNextSLide, clickPrevSLide, currentSlide} from './utils.js';
import { nextSlide, prevSlide, pagination} from './selectors.js';

const showSlider = () =>{
    nextSlide.addEventListener('click', clickNextSLide);
    prevSlide.addEventListener('click', clickPrevSLide);
    pagination[0].addEventListener('click', () => currentSlide(1));
    pagination[1].addEventListener('click', () => currentSlide(2));
    pagination[2].addEventListener('click', () => currentSlide(3));
}

export {showSlider}