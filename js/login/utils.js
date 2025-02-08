import {loginInputSelector, loginLinkSelector, loginModalSelector } from "./selectors.js";

const handleLogin = () => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        loginLinkSelector.textContent = savedUsername;
    }
    return () => {
        const username = loginInputSelector.value;
        if (username) {
            localStorage.setItem('username', username); 
            loginLinkSelector.textContent = username; 
            loginModalSelector.classList.remove('active'); 
            localStorage.setItem('login','true')
        }
    }
}

export{handleLogin}