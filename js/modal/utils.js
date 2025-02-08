const openModals = (event) => {     
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
}

const closeModals = (event) => { 
    if (event.target.closest('.login__btn-close, .basket__btn-close, .favourites__btn-close')) { 
        const modal = event.target.closest('.login, .basket, .favourites'); 
        modal.classList.remove('active');
    }
};

export {openModals, closeModals}