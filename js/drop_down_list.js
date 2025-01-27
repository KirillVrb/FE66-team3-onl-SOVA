//Слайдер
const pagination = document.querySelectorAll('.banner .banner__pagination .banner__line');
const slides = document.querySelectorAll('.banner .banner__slide');

function currentSlide(n){
    for(let i=0; i < pagination.length; i++){
        slides[i].style.display = 'none';
        pagination[i].classList.remove('active');
        pagination[i].classList.add('inactive');
    }
     
    slides[n-1].style.display = 'block';
    pagination[n-1].classList.remove('inactive')
    pagination[n-1].classList.add('active')
}

// Функция на добавление лайка на блюдо
const activeLike = document.querySelectorAll('.items .items__container .items__icon button')

activeLike[0].onclick = function () {
    const like = document.querySelectorAll('.items .like__button')
    const myLike = like [0]
    if (myLike.classList.contains('active')) {
        myLike.classList.remove('active')
        myLike.classList.add('disable')
    } else {
        myLike.classList.add('active')
        myLike.classList.remove('disable')
    }
}
activeLike[2].onclick = function () {
    const like = document.querySelectorAll('.items .like__button')
    const myLike = like [1]
    if (myLike.classList.contains('active')) {
        myLike.classList.remove('active')
        myLike.classList.add('disable')
    } else {
        myLike.classList.add('active')
        myLike.classList.remove('disable')
    }
}
activeLike[4].onclick = function () {
    const like = document.querySelectorAll('.items .like__button')
    const myLike = like [2]
    if (myLike.classList.contains('active')) {
        myLike.classList.remove('active')
        myLike.classList.add('disable')
    } else {
        myLike.classList.add('active')
        myLike.classList.remove('disable')
    }
}
activeLike[6].onclick = function () {
    const like = document.querySelectorAll('.items .like__button')
    const myLike = like [3]
    if (myLike.classList.contains('active')) {
        myLike.classList.remove('active')
        myLike.classList.add('disable')
    } else {
        myLike.classList.add('active')
        myLike.classList.remove('disable')
    }
}
activeLike[8].onclick = function () {
    const like = document.querySelectorAll('.items .like__button')
    const myLike = like [4]
    if (myLike.classList.contains('active')) {
        myLike.classList.remove('active')
        myLike.classList.add('disable')
    } else {
        myLike.classList.add('active')
        myLike.classList.remove('disable')
    }
}
activeLike[10].onclick = function () {
    const like = document.querySelectorAll('.items .like__button')
    const myLike = like [5]
    if (myLike.classList.contains('active')) {
        myLike.classList.remove('active')
        myLike.classList.add('disable')
    } else {
        myLike.classList.add('active')
        myLike.classList.remove('disable')
    }
}