import {pagination, slides, nextSlide, prevSlide} from './selectors.js';

let indexSlide = 1;

const currentSlide = (n) => {
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

const clickNextSLide = () =>{
    indexSlide += 1;
    if (indexSlide > pagination.length){
        indexSlide = 1;
    }
    currentSlide(indexSlide);
}

const clickPrevSLide = () =>{
    indexSlide -= 1;
    if (indexSlide <= 0){
        indexSlide = pagination.length;
    }
    currentSlide(indexSlide);
}

export {clickNextSLide, clickPrevSLide, currentSlide}