import {BasePage} from "../base/basePage";

export class LoginPage extends BasePage {
    private readonly username = '[id="user-name"]';
    private readonly password = '[id="password"]';
    private readonly loginBtn = '[id="login-button"]';

    addUsername(username: string) {
        this.getElement(this.username).clear().type(username);
    }

    addPassword(password: string) {
        this.getElement(this.password).clear().type(password);
    }

    login() {
        this.click(this.loginBtn);
    }
}
