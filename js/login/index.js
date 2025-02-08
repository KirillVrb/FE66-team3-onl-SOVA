import { loginButtonSelector } from "./selectors.js";
import { handleLogin } from "./utils.js";

function savedUsernameLogin () {
    loginButtonSelector.onclick = handleLogin();
}

export {savedUsernameLogin}
