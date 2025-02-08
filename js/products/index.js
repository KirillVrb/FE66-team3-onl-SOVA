import {productsRemoveAll,productsRemoveGrains,productsRemoveDesserts,productsRemoveMeat,productsRemoveSalads,productsRemoveSoups,productsRemoveBurgers,productsRemoveDrinks} from "./utils.js"
import {removeGrainsBtn,removeDessertsBtn,removeMeatBtn,removeBurgersBtn,removeSaladsBtn,removeSoupsBtn,removeDrinksBtn,removeAllProdBtn} from "./selectors.js"

function removeAllProducts () {
removeAllProdBtn.addEventListener('click', productsRemoveAll)
}
function removeGrainsProducts () {
removeGrainsBtn.addEventListener('click', productsRemoveGrains)
}
function removeDessertsProducts () {
removeDessertsBtn.addEventListener('click', productsRemoveDesserts)
}
function removeMeatProducts () {
removeMeatBtn.addEventListener('click', productsRemoveMeat)
}
function removeSaladsProducts () {
removeSaladsBtn.addEventListener('click', productsRemoveSalads)
}
function removeSoupsProducts () {
removeSoupsBtn.addEventListener('click', productsRemoveSoups)
}
function removeBurgersProducts () {
removeBurgersBtn.addEventListener('click', productsRemoveBurgers)
}
function removeDrinksProducts () {
removeDrinksBtn.addEventListener('click', productsRemoveDrinks)
}

export {removeAllProducts,removeGrainsProducts,removeDessertsProducts,removeMeatProducts,removeSaladsProducts,removeSoupsProducts,removeBurgersProducts,removeDrinksProducts}