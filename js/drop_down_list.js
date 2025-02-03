'use strict'
//Слайдер
const pagination = document.querySelectorAll('.banner .banner__pagination .banner__line');
const slides = document.querySelectorAll('.banner .banner__slide');
const nextSlide = document.querySelector('.banner__next');
const prevSlide = document.querySelector(' .banner__prev');
let indexSlide = 1;

nextSlide.onclick = function (){
    console.log(1111111);
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


// Переход по клику на страницу Reserved
// На первом слайде
const reservedLinkFirst = document.getElementById ('reservations-first')

reservedLinkFirst.onclick = function () {
    window.location.href = '/reservations.html'
}
// На втором слайде
const reservedLinkSecond = document.getElementById ('reservations-second')

reservedLinkSecond.onclick = function () {
    window.location.href = '/reservations.html'
}
// На третьем слайде
const reservedLinkThird = document.getElementById ('reservations-third')

reservedLinkThird.onclick = function () {
    window.location.href = '/reservations.html'
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

// fetch
const createArticles = (articles) => {
    const articlesContainer = document.getElementById('articles')

    for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        const articleCard = document.createElement('div');
        articleCard.classList.add('items__icon');
        articleCard.id = `${article.id}`
        articleCard.setAttribute('type', `${article.type}`);
        articleCard.innerHTML = `
            <div class="items__wrapper-img" >
                <img class="items__img" src=${article.image}>
            </div>
            <div class="items__content">
                <p class="items__weight">${article.weight} g</p>
                <h3 class="items__title">${article.name}</h3>
                <p class="items__price"">${article.price} ${article.currency}</>
            </div>
            <button class="items__wrapper-like">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg" > 
                            <path d="M10 19.3187L8.55 18.0115C6.86667 16.4863 5.475 15.1707 4.375 14.0645C3.275 12.9584 2.4 11.9654 1.75 11.0855C1.1 10.2056 0.645833 9.39694 0.3875 8.65951C0.129167 7.92208 0 7.16789 0 6.39694C0 4.82152 0.525 3.50588 1.575 2.45001C2.625 1.39414 3.93333 0.866211 5.5 0.866211C6.36667 0.866211 7.19167 1.05057 7.975 1.41928C8.75833 1.788 9.43333 2.30755 10 2.97794C10.5667 2.30755 11.2417 1.788 12.025 1.41928C12.8083 1.05057 13.6333 0.866211 14.5 0.866211C16.0667 0.866211 17.375 1.39414 18.425 2.45001C19.475 3.50588 20 4.82152 20 6.39694C20 7.16789 19.8708 7.92208 19.6125 8.65951C19.3542 9.39694 18.9 10.2056 18.25 11.0855C17.6 11.9654 16.725 12.9584 15.625 14.0645C14.525 15.1707 13.1333 16.4863 11.45 18.0115L10 19.3187ZM10 16.6036C11.6 15.1623 12.9167 13.9263 13.95 12.8955C14.9833 11.8648 15.8 10.9682 16.4 10.2056C17 9.44303 17.4167 8.76426 17.65 8.16928C17.8833 7.57431 18 6.98353 18 6.39694C18 5.39135 17.6667 4.55336 17 3.88297C16.3333 3.21258 15.5 2.87738 14.5 2.87738C13.7167 2.87738 12.9917 3.09945 12.325 3.54359C11.6583 3.98772 11.2 4.55336 10.95 5.24051H9.05C8.8 4.55336 8.34167 3.98772 7.675 3.54359C7.00833 3.09945 6.28333 2.87738 5.5 2.87738C4.5 2.87738 3.66667 3.21258 3 3.88297C2.33333 4.55336 2 5.39135 2 6.39694C2 6.98353 2.11667 7.57431 2.35 8.16928C2.58333 8.76426 3 9.44303 3.6 10.2056C4.2 10.9682 5.01667 11.8648 6.05 12.8955C7.08333 13.9263 8.4 15.1623 10 16.6036Z" fill="black"/>   
                            <svg class="like__button disable" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 18.9999L8.55 17.6999C6.86667 16.1832 5.475 14.8749 4.375 13.7749C3.275 12.6749 2.4 11.6874 1.75 10.8124C1.1 9.9374 0.645833 9.13324 0.3875 8.3999C0.129167 7.66657 0 6.91657 0 6.1499C0 4.58324 0.525 3.2749 1.575 2.2249C2.625 1.1749 3.93333 0.649902 5.5 0.649902C6.36667 0.649902 7.19167 0.833236 7.975 1.1999C8.75833 1.56657 9.43333 2.08324 10 2.7499C10.5667 2.08324 11.2417 1.56657 12.025 1.1999C12.8083 0.833236 13.6333 0.649902 14.5 0.649902C16.0667 0.649902 17.375 1.1749 18.425 2.2249C19.475 3.2749 20 4.58324 20 6.1499C20 6.91657 19.8708 7.66657 19.6125 8.3999C19.3542 9.13324 18.9 9.9374 18.25 10.8124C17.6 11.6874 16.725 12.6749 15.625 13.7749C14.525 14.8749 13.1333 16.1832 11.45 17.6999L10 18.9999Z" fill="#E25324"/>
                            </svg>
                        </svg>
                        </button>
                    <button class="items__ellipse-btn">
                        <div class="items__wrapper-cart">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18C4 17.45 4.19583 16.9792 4.5875 16.5875C4.97917 16.1958 5.45 16 6 16C6.55 16 7.02083 16.1958 7.4125 16.5875C7.80417 16.9792 8 17.45 8 18C8 18.55 7.80417 19.0208 7.4125 19.4125C7.02083 19.8042 6.55 20 6 20ZM16 20C15.45 20 14.9792 19.8042 14.5875 19.4125C14.1958 19.0208 14 18.55 14 18C14 17.45 14.1958 16.9792 14.5875 16.5875C14.9792 16.1958 15.45 16 16 16C16.55 16 17.0208 16.1958 17.4125 16.5875C17.8042 16.9792 18 17.45 18 18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20ZM5.15 4L7.55 9H14.55L17.3 4H5.15ZM4.2 2H18.95C19.3333 2 19.625 2.17083 19.825 2.5125C20.025 2.85417 20.0333 3.2 19.85 3.55L16.3 9.95C16.1167 10.2833 15.8708 10.5417 15.5625 10.725C15.2542 10.9083 14.9167 11 14.55 11H7.1L6 13H18V15H6C5.25 15 4.68333 14.6708 4.3 14.0125C3.91667 13.3542 3.9 12.7 4.25 12.05L5.6 9.6L2 2H0V0H3.25L4.2 2Z" fill="#E25324"/>
                                </svg>                            
                        </div>
                    </button> 
            `;
            
            
        articlesContainer.appendChild(articleCard);
    }
}

const getArticles = async (callback) => {
    const articlesResponse = await fetch ('https://6792842fcf994cc6804a4864.mockapi.io/products')
    const articles = await articlesResponse.json()

    callback?.(articles)
}

getArticles(createArticles)


// Функция на добавление лайка на блюдо (c API не работает)
// const activeLike = document.querySelectorAll('.items .items__container .items__icon button')

// activeLike[0].onclick = function () {
//     const like = document.querySelectorAll('.items .like__button')
//     const myLike = like [0]
//     if (myLike.classList.contains('enable')) {
//         myLike.classList.remove('enable')
//         myLike.classList.add('disable')
//     } else {
//         myLike.classList.add('enable')
//         myLike.classList.remove('disable')
//     }
// }
// activeLike[2].onclick = function () {
//     const like = document.querySelectorAll('.items .like__button')
//     const myLike = like [1]
//     if (myLike.classList.contains('enable')) {
//         myLike.classList.remove('enable')
//         myLike.classList.add('disable')
//     } else {
//         myLike.classList.add('enable')
//         myLike.classList.remove('disable')
//     }
// }
// activeLike[4].onclick = function () {
//     const like = document.querySelectorAll('.items .like__button')
//     const myLike = like [2]
//     if (myLike.classList.contains('enable')) {
//         myLike.classList.remove('enable')
//         myLike.classList.add('disable')
//     } else {
//         myLike.classList.add('enable')
//         myLike.classList.remove('disable')
//     }
// }
// activeLike[6].onclick = function () {
//     const like = document.querySelectorAll('.items .like__button')
//     const myLike = like [3]
//     if (myLike.classList.contains('enable')) {
//         myLike.classList.remove('enable')
//         myLike.classList.add('disable')
//     } else {
//         myLike.classList.add('enable')
//         myLike.classList.remove('disable')
//     }
// }
// activeLike[8].onclick = function () {
//     const like = document.querySelectorAll('.items .like__button')
//     const myLike = like [4]
//     if (myLike.classList.contains('enable')) {
//         myLike.classList.remove('enable')
//         myLike.classList.add('disable')
//     } else {
//         myLike.classList.add('enable')
//         myLike.classList.remove('disable')
//     }
// }
// activeLike[10].onclick = function () {
//     const like = document.querySelectorAll('.items .like__button')
//     const myLike = like [5]
//     if (myLike.classList.contains('enable')) {
//         myLike.classList.remove('enable')
//         myLike.classList.add('disable')
//     } else {
//         myLike.classList.add('enable')
//         myLike.classList.remove('disable')
//     }
// }


// Ререндер контента по нажатию на tab
const itemsContainer = document.querySelector('.items__container')
const removeGrainsBtn = document.querySelector('#Grains')
const removeDessertsBtn = document.querySelector('#Desserts')
const removeMeatBtn = document.querySelector('#Meat')
const removeBurgersBtn = document.querySelector('#Burgers')
const removeSaladsBtn = document.querySelector('#Salads')
const removeSoupsBtn = document.querySelector('#Soups')
const removeDrinksBtn = document.querySelector('#Drinks')
const removeAllProdBtn = document.querySelector('#All__products')


removeAllProdBtn.addEventListener('click', (e) => {
    e.stopPropagation
    console.log('Нажалась кнопка All Products')

    for(let i = 0; i < itemsContainer.children.length; i++) {
        const elem = itemsContainer.children[i]
        if (elem.getAttribute("type")  !== 'Grains' & 'Meat' & 'Desserts') {
            elem.classList.remove('enable')
            elem.classList.add('disable')
        } else {
            elem.classList.remove('disable')
            elem.classList.add('enable') 
        }
    }

})

removeGrainsBtn.addEventListener('click', (e) => {
    e.stopPropagation
    console.log('Нажалась кнопка Grains')

    for(let i = 0; i < itemsContainer.children.length; i++) {
        const elem = itemsContainer.children[i]
        if (elem.getAttribute("type")  !== 'Grains') {
            elem.classList.remove('enable')
            elem.classList.add('disable')
        } else {
            elem.classList.remove('disable')
            elem.classList.add('enable') 
        }
    }

})
removeDessertsBtn.addEventListener('click', (e) => {
    e.stopPropagation
    console.log('Нажалась кнопка Desserts')

    for(let i = 0; i < itemsContainer.children.length; i++) {
        const elem = itemsContainer.children[i]
        if (elem.getAttribute("type")  !== 'Desserts') {
            elem.classList.remove('enable')
            elem.classList.add('disable')
        } else {
            elem.classList.remove('disable')
            elem.classList.add('enable') 
        }
    }

})
removeMeatBtn.addEventListener('click', (e) => {
    e.stopPropagation
    console.log('Нажалась кнопка Meat')

    for(let i = 0; i < itemsContainer.children.length; i++) {
        const elem = itemsContainer.children[i]
        if (elem.getAttribute("type")  !== 'Meat') {
            elem.classList.remove('enable')
            elem.classList.add('disable')
        } else {
            elem.classList.remove('disable')
            elem.classList.add('enable') 
        }
    }

})

removeSaladsBtn.addEventListener('click', (e) => {
    e.stopPropagation
    console.log('Нажалась кнопка Salads')

    for(let i = 0; i < itemsContainer.children.length; i++) {
        const elem = itemsContainer.children[i]
        if (elem.getAttribute("type")  !== 'Salads') {
            elem.classList.remove('enable')
            elem.classList.add('disable')
        } else {
            elem.classList.remove('disable')
            elem.classList.add('enable') 
        }
    }

})

removeSoupsBtn.addEventListener('click', (e) => {
    e.stopPropagation
    console.log('Нажалась кнопка Soups')

    for(let i = 0; i < itemsContainer.children.length; i++) {
        const elem = itemsContainer.children[i]
        if (elem.getAttribute("type")  !== 'Soups') {
            elem.classList.remove('enable')
            elem.classList.add('disable')
        } else {
            elem.classList.remove('disable')
            elem.classList.add('enable') 
        }
    }

})

removeBurgersBtn.addEventListener('click', (e) => {
    e.stopPropagation
    console.log('Нажалась кнопка Burgers')

    for(let i = 0; i < itemsContainer.children.length; i++) {
        const elem = itemsContainer.children[i]
        if (elem.getAttribute("type")  !== 'Burgers') {
            elem.classList.remove('enable')
            elem.classList.add('disable')
        } else {
            elem.classList.remove('disable')
            elem.classList.add('enable') 
        }
    }

})

removeDrinksBtn.addEventListener('click', (e) => {
    e.stopPropagation
    console.log('Нажалась кнопка Drinks')

    for(let i = 0; i < itemsContainer.children.length; i++) {
        const elem = itemsContainer.children[i]
        if (elem.getAttribute("type")  !== 'Drinks') {
            elem.classList.remove('enable')
            elem.classList.add('disable')
        } else {
            elem.classList.remove('disable')
            elem.classList.add('enable') 
        }
    }

})