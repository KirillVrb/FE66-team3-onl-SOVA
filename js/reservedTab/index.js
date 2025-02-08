
import {reservedLink} from "./utils.js"
import {reservationsFirstSelector,reservationsSecondSelector,reservationsThirdSelector} from "./selectors.js" 

// Переход по клику на страницу Reserved
// На первом слайде
function reservationsTabFirst () {
    reservationsFirstSelector.onclick = reservedLink
}
// На втором слайде

function reservationsTabSecond () {
    reservationsSecondSelector.onclick = reservedLink
}
// На третьем слайде
function reservationsTabThird () { 
    reservationsThirdSelector.onclick = reservedLink
}

export {reservationsTabFirst,reservationsTabSecond,reservationsTabThird};