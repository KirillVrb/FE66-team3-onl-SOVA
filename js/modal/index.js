import { containerModal } from "./selectors.js";
import { closeModals, openModals } from "./utils.js";

function initModals () {
    containerModal.addEventListener("click", openModals);
    document.addEventListener("click", closeModals);
}
export {initModals}

