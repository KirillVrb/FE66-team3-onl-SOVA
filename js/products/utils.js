import { itemsContainer } from "./selectors.js"
const productsRemoveAll = (e) => {
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
}

const productsRemoveGrains = (e) => {
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

}

const productsRemoveDesserts = (e) => {
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

}

const productsRemoveMeat = (e) => {
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

}

const productsRemoveSalads = (e) => {
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

}

const productsRemoveSoups = (e) => {
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

}

const productsRemoveBurgers = (e) => {
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

}

const productsRemoveDrinks = (e) => {
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

}

export {productsRemoveAll,productsRemoveGrains,productsRemoveDesserts,productsRemoveMeat,productsRemoveSalads,productsRemoveSoups,productsRemoveBurgers,productsRemoveDrinks}